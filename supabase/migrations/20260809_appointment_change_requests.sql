begin;


-- =========================================================
-- RICHIESTE MODIFICA APPUNTAMENTO
-- =========================================================

create table if not exists
public.job_appointment_change_requests (

  id uuid
    primary key
    default gen_random_uuid(),

  job_id uuid
    not null
    references public.jobs(id)
    on delete cascade,

  assignment_id uuid
    not null
    references public.job_assignments(id)
    on delete cascade,

  requester_id uuid
    not null
    references public.users(id)
    on delete cascade,

  recipient_id uuid
    not null
    references public.users(id)
    on delete cascade,


  -- Fotografia dell'appuntamento al momento
  -- della richiesta.
  current_job_date date
    not null,

  current_exact_location text
    not null,

  current_meeting_point text
    not null,

  current_arrival_time text
    not null,


  -- Nuova proposta.
  proposed_job_date date
    not null,

  proposed_exact_location text
    not null,

  proposed_meeting_point text
    not null,

  proposed_arrival_time text
    not null,

  note text
    null,


  status text
    not null
    default 'pending',

  created_at timestamptz
    not null
    default now(),

  updated_at timestamptz
    not null
    default now(),

  responded_at timestamptz
    null,

  cancelled_at timestamptz
    null,


  constraint
    appointment_change_different_users
    check (
      requester_id <> recipient_id
    ),

  constraint
    appointment_change_status_check
    check (
      status in (
        'pending',
        'accepted',
        'declined',
        'cancelled',
        'superseded'
      )
    ),

  constraint
    appointment_change_note_length_check
    check (
      note is null
      or char_length(note) <= 1000
    )
);


-- =========================================================
-- INDICI
-- =========================================================

create index if not exists
  appointment_change_job_created_idx

on public.job_appointment_change_requests (
  job_id,
  created_at desc
);


create index if not exists
  appointment_change_requester_idx

on public.job_appointment_change_requests (
  requester_id,
  created_at desc
);


create index if not exists
  appointment_change_recipient_idx

on public.job_appointment_change_requests (
  recipient_id,
  created_at desc
);


-- Una sola richiesta PENDING per assegnazione.
create unique index if not exists
  appointment_change_one_pending_unique

on public.job_appointment_change_requests (
  assignment_id
)

where status = 'pending';


-- =========================================================
-- RLS
-- =========================================================

alter table
  public.job_appointment_change_requests
enable row level security;


revoke all
on table
  public.job_appointment_change_requests
from
  public,
  anon,
  authenticated;


grant select
on table
  public.job_appointment_change_requests
to authenticated;


grant all
on table
  public.job_appointment_change_requests
to service_role;


drop policy if exists
  appointment_change_participants_select
on public.job_appointment_change_requests;


create policy
  appointment_change_participants_select

on public.job_appointment_change_requests

for select

to authenticated

using (
  requester_id = auth.uid()
  or recipient_id = auth.uid()
);


-- =========================================================
-- RPC 1
-- CLIENTE O PILOTA PROPONE MODIFICA
-- =========================================================

create or replace function
public.request_job_appointment_change(

  p_job_id uuid,

  p_proposed_exact_location text,

  p_proposed_meeting_point text,

  p_proposed_arrival_time text,

  p_note text default null

)
returns jsonb

language plpgsql

security definer

set search_path to
  'public',
  'auth',
  'pg_temp'

as $function$

declare

  v_user_id uuid :=
    auth.uid();

  v_role text;

  v_banned boolean;

  v_account_status text;


  v_job
    public.jobs%rowtype;

  v_assignment
    public.job_assignments%rowtype;

  v_existing
    public.job_appointment_change_requests%rowtype;


  v_pilot_id uuid;

  v_recipient_id uuid;


  v_proposed_exact_location text;

  v_proposed_meeting_point text;

  v_proposed_arrival_time text;

  v_note text;

  v_proposed_job_date date;

  v_request_id uuid;

begin

  -- =======================================================
  -- AUTENTICAZIONE
  -- =======================================================

  if v_user_id is null then
    raise exception
      'UTENTE_NON_AUTENTICATO'
      using errcode = '42501';
  end if;


  if p_job_id is null then
    raise exception
      'LAVORO_NON_VALIDO'
      using errcode = '22004';
  end if;


  -- =======================================================
  -- PROFILO
  -- =======================================================

  select

    lower(
      trim(
        coalesce(
          u.role,
          ''
        )
      )
    ),

    coalesce(
      u.banned,
      false
    ),

    lower(
      trim(
        coalesce(
          u.account_status,
          'active'
        )
      )
    )

  into
    v_role,
    v_banned,
    v_account_status

  from public.users u

  where u.id =
    v_user_id;


  if not found then
    raise exception
      'PROFILO_UTENTE_NON_TROVATO'
      using errcode = 'P0002';
  end if;


  if
    v_banned = true
    or v_account_status <> 'active'
  then

    raise exception
      'ACCOUNT_NON_ATTIVO'
      using errcode = '42501';

  end if;


  if v_role not in (
    'client',
    'cliente',
    'pilot',
    'pilota'
  ) then

    raise exception
      'RUOLO_NON_AUTORIZZATO'
      using errcode = '42501';

  end if;


  -- =======================================================
  -- NORMALIZZAZIONE PROPOSTA
  -- =======================================================

  v_proposed_exact_location :=
    nullif(
      trim(
        coalesce(
          p_proposed_exact_location,
          ''
        )
      ),
      ''
    );


  v_proposed_meeting_point :=
    nullif(
      trim(
        coalesce(
          p_proposed_meeting_point,
          ''
        )
      ),
      ''
    );


  v_proposed_arrival_time :=
    nullif(
      trim(
        coalesce(
          p_proposed_arrival_time,
          ''
        )
      ),
      ''
    );


  v_note :=
    nullif(
      trim(
        coalesce(
          p_note,
          ''
        )
      ),
      ''
    );


  if
    v_proposed_exact_location
      is null
  then

    raise exception
      'NUOVA_POSIZIONE_MANCANTE'
      using errcode = '22004';

  end if;


  if
    v_proposed_meeting_point
      is null
  then

    raise exception
      'NUOVO_PUNTO_RITROVO_MANCANTE'
      using errcode = '22004';

  end if;


  if
    v_proposed_arrival_time
      is null
  then

    raise exception
      'NUOVO_ORARIO_MANCANTE'
      using errcode = '22004';

  end if;


  if
    v_note is not null
    and char_length(v_note) > 1000
  then

    raise exception
      'NOTA_TROPPO_LUNGA'
      using errcode = '22001';

  end if;


  /*
   * Il frontend usa datetime-local:
   * YYYY-MM-DDTHH:MM
   *
   * Accettiamo anche eventuali secondi.
   */
  if
    v_proposed_arrival_time
      !~ '^[0-9]{4}-[0-9]{2}-[0-9]{2}[T ][0-9]{2}:[0-9]{2}'
  then

    raise exception
      'ORARIO_APPUNTAMENTO_NON_VALIDO'
      using errcode = '22007';

  end if;


  begin

    v_proposed_job_date :=
      substring(
        v_proposed_arrival_time
        from 1
        for 10
      )::date;

  exception
    when others then

      raise exception
        'DATA_APPUNTAMENTO_NON_VALIDA'
        using errcode = '22007';

  end;


  -- =======================================================
  -- LAVORO
  -- =======================================================

  select *
  into v_job

  from public.jobs j

  where j.id =
    p_job_id

  for update;


  if not found then
    raise exception
      'LAVORO_NON_TROVATO'
      using errcode = 'P0002';
  end if;


  if lower(
    trim(
      coalesce(
        v_job.status,
        ''
      )
    )
  ) not in (
    'assigned',
    'in_progress',
    'active'
  ) then

    raise exception
      'LAVORO_NON_MODIFICABILE'
      using errcode = 'P0001';

  end if;


  v_pilot_id :=
    coalesce(
      v_job.assigned_pilot,
      v_job.pilot_id
    );


  if
    v_job.user_id is null
    or v_pilot_id is null
  then

    raise exception
      'ASSEGNAZIONE_LAVORO_INCOMPLETA'
      using errcode = 'P0001';

  end if;


  -- =======================================================
  -- IDENTIFICA L'ALTRA PARTE
  -- =======================================================

  if
    v_user_id =
      v_job.user_id

    and v_role in (
      'client',
      'cliente'
    )
  then

    v_recipient_id :=
      v_pilot_id;


  elsif
    v_user_id =
      v_pilot_id

    and v_role in (
      'pilot',
      'pilota'
    )
  then

    v_recipient_id :=
      v_job.user_id;


  else

    raise exception
      'NON_SEI_PARTE_DI_QUESTO_LAVORO'
      using errcode = '42501';

  end if;


  -- =======================================================
  -- ASSEGNAZIONE
  -- =======================================================

  select *
  into v_assignment

  from public.job_assignments a

  where
    a.job_id =
      p_job_id

    and a.pilot_id =
      v_pilot_id

  limit 1

  for update;


  if not found then
    raise exception
      'ASSEGNAZIONE_NON_TROVATA'
      using errcode = 'P0002';
  end if;


  if
    v_assignment.client_id
      is not null

    and v_assignment.client_id
      is distinct from
        v_job.user_id
  then

    raise exception
      'ASSEGNAZIONE_INCOERENTE'
      using errcode = 'P0001';

  end if;


  if lower(
    trim(
      coalesce(
        v_assignment.status,
        ''
      )
    )
  ) not in (
    'assigned',
    'accepted',
    'active',
    'in_progress',
    'details_sent'
  ) then

    raise exception
      'APPUNTAMENTO_NON_MODIFICABILE'
      using errcode = 'P0001';

  end if;


  -- =======================================================
  -- APPUNTAMENTO CORRENTE DEVE ESSERE COMPLETO
  -- =======================================================

  if nullif(
    trim(
      coalesce(
        v_assignment.exact_location,
        ''
      )
    ),
    ''
  ) is null then

    raise exception
      'POSIZIONE_APPUNTAMENTO_MANCANTE'
      using errcode = 'P0001';

  end if;


  if nullif(
    trim(
      coalesce(
        v_assignment.meeting_point,
        ''
      )
    ),
    ''
  ) is null then

    raise exception
      'PUNTO_RITROVO_MANCANTE'
      using errcode = 'P0001';

  end if;


  if nullif(
    trim(
      coalesce(
        v_assignment.arrival_time,
        ''
      )
    ),
    ''
  ) is null then

    raise exception
      'ORARIO_APPUNTAMENTO_MANCANTE'
      using errcode = 'P0001';

  end if;


  if v_job.job_date is null then
    raise exception
      'DATA_LAVORO_MANCANTE'
      using errcode = 'P0001';
  end if;


  -- =======================================================
  -- DEVE CAMBIARE ALMENO UN DATO
  -- =======================================================

  if

    trim(
      v_assignment.exact_location
    ) =
      v_proposed_exact_location

    and trim(
      v_assignment.meeting_point
    ) =
      v_proposed_meeting_point

    and trim(
      v_assignment.arrival_time
    ) =
      v_proposed_arrival_time

    and v_job.job_date =
      v_proposed_job_date

  then

    raise exception
      'NESSUNA_MODIFICA_PROPOSTA'
      using errcode = 'P0001';

  end if;


  -- =======================================================
  -- LOCK ANTI CONCORRENZA
  -- =======================================================

  perform
    pg_advisory_xact_lock(
      hashtextextended(
        'appointment-change:'
        || v_assignment.id::text,
        0
      )
    );


  -- =======================================================
  -- RICHIESTA PENDING ESISTENTE
  -- =======================================================

  select *
  into v_existing

  from
    public.job_appointment_change_requests r

  where
    r.assignment_id =
      v_assignment.id

    and r.status =
      'pending'

  order by
    r.created_at desc

  limit 1;


  if found then

    /*
     * Stessa richiesta ripetuta:
     * idempotenza.
     */
    if
      v_existing.requester_id =
        v_user_id

      and v_existing.recipient_id =
        v_recipient_id

      and trim(
        v_existing.proposed_exact_location
      ) =
        v_proposed_exact_location

      and trim(
        v_existing.proposed_meeting_point
      ) =
        v_proposed_meeting_point

      and trim(
        v_existing.proposed_arrival_time
      ) =
        v_proposed_arrival_time

      and v_existing.proposed_job_date =
        v_proposed_job_date

      and coalesce(
        trim(v_existing.note),
        ''
      ) =
        coalesce(
          v_note,
          ''
        )
    then

      return jsonb_build_object(
        'success',
          true,

        'already_processed',
          true,

        'request_id',
          v_existing.id,

        'job_id',
          p_job_id,

        'status',
          'pending'
      );

    end if;


    raise exception
      'RICHIESTA_MODIFICA_GIA_IN_ATTESA'
      using errcode = 'P0001';

  end if;


  -- =======================================================
  -- CREA RICHIESTA
  -- =======================================================

  insert into
    public.job_appointment_change_requests (

      job_id,
      assignment_id,

      requester_id,
      recipient_id,

      current_job_date,

      current_exact_location,
      current_meeting_point,
      current_arrival_time,

      proposed_job_date,

      proposed_exact_location,
      proposed_meeting_point,
      proposed_arrival_time,

      note,

      status
    )

  values (

    p_job_id,
    v_assignment.id,

    v_user_id,
    v_recipient_id,

    v_job.job_date,

    trim(
      v_assignment.exact_location
    ),

    trim(
      v_assignment.meeting_point
    ),

    trim(
      v_assignment.arrival_time
    ),

    v_proposed_job_date,

    v_proposed_exact_location,
    v_proposed_meeting_point,
    v_proposed_arrival_time,

    v_note,

    'pending'
  )

  returning id
  into v_request_id;


  -- =======================================================
  -- NOTIFICA DESTINATARIO
  -- =======================================================

  insert into
    public.notifications (
      user_id,
      title,
      message,
      type,
      read
    )

  values (
    v_recipient_id,

    'Richiesta modifica appuntamento',

    format(
      'È stata proposta una modifica dell''appuntamento per "%s".',
      coalesce(
        nullif(
          trim(v_job.title),
          ''
        ),
        'il lavoro'
      )
    ),

    'appointment_change_requested',

    false
  );


  return jsonb_build_object(

    'success',
      true,

    'already_processed',
      false,

    'request_id',
      v_request_id,

    'job_id',
      p_job_id,

    'assignment_id',
      v_assignment.id,

    'recipient_id',
      v_recipient_id,

    'status',
      'pending',

    'proposed_job_date',
      v_proposed_job_date,

    'proposed_arrival_time',
      v_proposed_arrival_time
  );

end;
$function$;



-- =========================================================
-- RPC 2
-- DESTINATARIO ACCETTA / RIFIUTA
-- =========================================================

create or replace function
public.respond_job_appointment_change(

  p_request_id uuid,

  p_accept boolean

)
returns jsonb

language plpgsql

security definer

set search_path to
  'public',
  'auth',
  'pg_temp'

as $function$

declare

  v_user_id uuid :=
    auth.uid();

  v_role text;

  v_banned boolean;

  v_account_status text;


  v_request
    public.job_appointment_change_requests%rowtype;

  v_job
    public.jobs%rowtype;

  v_assignment
    public.job_assignments%rowtype;


  v_pilot_id uuid;

  v_new_status text;

begin

  -- =======================================================
  -- AUTENTICAZIONE
  -- =======================================================

  if v_user_id is null then
    raise exception
      'UTENTE_NON_AUTENTICATO'
      using errcode = '42501';
  end if;


  if p_request_id is null then
    raise exception
      'RICHIESTA_NON_VALIDA'
      using errcode = '22004';
  end if;


  if p_accept is null then
    raise exception
      'RISPOSTA_NON_VALIDA'
      using errcode = '22004';
  end if;


  -- =======================================================
  -- PROFILO
  -- =======================================================

  select

    lower(
      trim(
        coalesce(
          u.role,
          ''
        )
      )
    ),

    coalesce(
      u.banned,
      false
    ),

    lower(
      trim(
        coalesce(
          u.account_status,
          'active'
        )
      )
    )

  into
    v_role,
    v_banned,
    v_account_status

  from public.users u

  where u.id =
    v_user_id;


  if not found then
    raise exception
      'PROFILO_UTENTE_NON_TROVATO'
      using errcode = 'P0002';
  end if;


  if
    v_banned = true
    or v_account_status <> 'active'
  then

    raise exception
      'ACCOUNT_NON_ATTIVO'
      using errcode = '42501';

  end if;


  -- =======================================================
  -- LOCK RICHIESTA
  -- =======================================================

  select *
  into v_request

  from
    public.job_appointment_change_requests r

  where r.id =
    p_request_id

  for update;


  if not found then
    raise exception
      'RICHIESTA_NON_TROVATA'
      using errcode = 'P0002';
  end if;


  if
    v_request.recipient_id <>
      v_user_id
  then

    raise exception
      'RICHIESTA_NON_AUTORIZZATA'
      using errcode = '42501';

  end if;


  if
    v_request.requester_id =
      v_user_id
  then

    raise exception
      'NON_PUOI_RISPONDERE_ALLA_TUA_RICHIESTA'
      using errcode = '42501';

  end if;


  v_new_status :=
    case
      when p_accept
        then 'accepted'
      else 'declined'
    end;


  -- =======================================================
  -- IDEMPOTENZA
  -- =======================================================

  if
    v_request.status =
      v_new_status
  then

    return jsonb_build_object(

      'success',
        true,

      'already_processed',
        true,

      'request_id',
        v_request.id,

      'job_id',
        v_request.job_id,

      'status',
        v_request.status,

      'accepted',
        v_request.status =
          'accepted'
    );

  end if;


  if
    v_request.status <>
      'pending'
  then

    raise exception
      'RICHIESTA_GIA_RISOLTA'
      using errcode = 'P0001';

  end if;


  -- =======================================================
  -- LOCK LAVORO
  -- =======================================================

  select *
  into v_job

  from public.jobs j

  where j.id =
    v_request.job_id

  for update;


  if not found then
    raise exception
      'LAVORO_NON_TROVATO'
      using errcode = 'P0002';
  end if;


  if lower(
    trim(
      coalesce(
        v_job.status,
        ''
      )
    )
  ) not in (
    'assigned',
    'in_progress',
    'active'
  ) then

    raise exception
      'LAVORO_NON_MODIFICABILE'
      using errcode = 'P0001';

  end if;


  v_pilot_id :=
    coalesce(
      v_job.assigned_pilot,
      v_job.pilot_id
    );


  if
    v_job.user_id is null
    or v_pilot_id is null
  then

    raise exception
      'ASSEGNAZIONE_LAVORO_INCOMPLETA'
      using errcode = 'P0001';

  end if;


  -- =======================================================
  -- VERIFICA PARTECIPANTI
  -- =======================================================

  if not (

    (
      v_request.requester_id =
        v_job.user_id

      and v_request.recipient_id =
        v_pilot_id
    )

    or

    (
      v_request.requester_id =
        v_pilot_id

      and v_request.recipient_id =
        v_job.user_id
    )

  ) then

    raise exception
      'PARTECIPANTI_RICHIESTA_INCOERENTI'
      using errcode = 'P0001';

  end if;


  -- =======================================================
  -- LOCK ASSEGNAZIONE
  -- =======================================================

  select *
  into v_assignment

  from public.job_assignments a

  where
    a.id =
      v_request.assignment_id

    and a.job_id =
      v_request.job_id

    and a.pilot_id =
      v_pilot_id

  for update;


  if not found then
    raise exception
      'ASSEGNAZIONE_NON_TROVATA'
      using errcode = 'P0002';
  end if;


  if lower(
    trim(
      coalesce(
        v_assignment.status,
        ''
      )
    )
  ) not in (
    'assigned',
    'accepted',
    'active',
    'in_progress',
    'details_sent'
  ) then

    raise exception
      'APPUNTAMENTO_NON_MODIFICABILE'
      using errcode = 'P0001';

  end if;


  -- =======================================================
  -- RIFIUTO
  -- Non modifica l'appuntamento.
  -- =======================================================

  if p_accept = false then

    update
      public.job_appointment_change_requests

    set
      status =
        'declined',

      responded_at =
        now(),

      updated_at =
        now()

    where id =
      v_request.id;


    insert into
      public.notifications (
        user_id,
        title,
        message,
        type,
        read
      )

    values (
      v_request.requester_id,

      'Modifica appuntamento rifiutata',

      format(
        'La proposta di modifica dell''appuntamento per "%s" è stata rifiutata.',
        coalesce(
          nullif(
            trim(v_job.title),
            ''
          ),
          'il lavoro'
        )
      ),

      'appointment_change_declined',

      false
    );


    return jsonb_build_object(

      'success',
        true,

      'already_processed',
        false,

      'request_id',
        v_request.id,

      'job_id',
        v_request.job_id,

      'status',
        'declined',

      'accepted',
        false
    );

  end if;


  -- =======================================================
  -- ACCETTAZIONE
  --
  -- Prima controlliamo che l'appuntamento non sia stato
  -- modificato dopo la creazione della proposta.
  -- =======================================================

  if

    v_job.job_date
      is distinct from
        v_request.current_job_date

    or coalesce(
      trim(
        v_assignment.exact_location
      ),
      ''
    ) <>
      coalesce(
        trim(
          v_request.current_exact_location
        ),
        ''
      )

    or coalesce(
      trim(
        v_assignment.meeting_point
      ),
      ''
    ) <>
      coalesce(
        trim(
          v_request.current_meeting_point
        ),
        ''
      )

    or coalesce(
      trim(
        v_assignment.arrival_time
      ),
      ''
    ) <>
      coalesce(
        trim(
          v_request.current_arrival_time
        ),
        ''
      )

   then

    /*
     * L'appuntamento reale è cambiato dopo
     * la creazione della proposta.
     *
     * NON generiamo un'eccezione perché
     * annullerebbe anche questo UPDATE.
     */

    update
      public.job_appointment_change_requests

    set
      status =
        'superseded',

      responded_at =
        now(),

      updated_at =
        now()

    where id =
      v_request.id;


    insert into
      public.notifications (
        user_id,
        title,
        message,
        type,
        read
      )

    values (
      v_request.requester_id,

      'Proposta appuntamento non più valida',

      format(
        'L''appuntamento per "%s" è stato modificato dopo la tua proposta. Crea una nuova richiesta se necessario.',
        coalesce(
          nullif(
            trim(v_job.title),
            ''
          ),
          'il lavoro'
        )
      ),

      'appointment_change_superseded',

      false
    );


    return jsonb_build_object(

      'success',
        false,

      'already_processed',
        false,

      'request_id',
        v_request.id,

      'job_id',
        v_request.job_id,

      'status',
        'superseded',

      'error_code',
        'RICHIESTA_MODIFICA_OBSOLETA'
    );

  end if;


  -- =======================================================
  -- AGGIORNA DATA GENERALE DEL LAVORO
  -- =======================================================

  update public.jobs

  set
    job_date =
      v_request.proposed_job_date

  where id =
    v_job.id;


  -- =======================================================
  -- AGGIORNA APPUNTAMENTO
  --
  -- Azzera esplicitamente le conferme.
  -- Il trigger esistente applica comunque la stessa
  -- protezione quando cambiano i tre campi appuntamento.
  -- =======================================================

  update public.job_assignments

  set
    exact_location =
      v_request.proposed_exact_location,

    meeting_point =
      v_request.proposed_meeting_point,

    arrival_time =
      v_request.proposed_arrival_time,

    appointment_client_confirmed_at =
      null,

    appointment_pilot_confirmed_at =
      null,

    appointment_confirmed_at =
      null

  where id =
    v_assignment.id;


  -- =======================================================
  -- CHIUDI RICHIESTA
  -- =======================================================

  update
    public.job_appointment_change_requests

  set
    status =
      'accepted',

    responded_at =
      now(),

    updated_at =
      now()

  where id =
    v_request.id;


  -- =======================================================
  -- NOTIFICA RICHIEDENTE
  -- =======================================================

  insert into
    public.notifications (
      user_id,
      title,
      message,
      type,
      read
    )

  values (
    v_request.requester_id,

    'Modifica appuntamento accettata',

    format(
      'La nuova proposta di appuntamento per "%s" è stata accettata. Cliente e pilota devono confermare nuovamente.',
      coalesce(
        nullif(
          trim(v_job.title),
          ''
        ),
        'il lavoro'
      )
    ),

    'appointment_change_accepted',

    false
  );


  -- Notifica anche chi ha appena accettato,
  -- perché deve riconfermare il nuovo appuntamento.
  insert into
    public.notifications (
      user_id,
      title,
      message,
      type,
      read
    )

  values (
    v_user_id,

    'Nuovo appuntamento da confermare',

    format(
      'Il nuovo appuntamento per "%s" è stato salvato. Conferma i nuovi dati.',
      coalesce(
        nullif(
          trim(v_job.title),
          ''
        ),
        'il lavoro'
      )
    ),

    'appointment_confirmation_requested',

    false
  );


  return jsonb_build_object(

    'success',
      true,

    'already_processed',
      false,

    'request_id',
      v_request.id,

    'job_id',
      v_request.job_id,

    'assignment_id',
      v_assignment.id,

    'status',
      'accepted',

    'accepted',
      true,

    'appointment_confirmations_reset',
      true,

    'job_date',
      v_request.proposed_job_date,

    'arrival_time',
      v_request.proposed_arrival_time
  );

end;
$function$;



-- =========================================================
-- RPC 3
-- RICHIEDENTE ANNULLA LA SUA PROPOSTA PENDING
-- =========================================================

create or replace function
public.cancel_job_appointment_change(
  p_request_id uuid
)
returns jsonb

language plpgsql

security definer

set search_path to
  'public',
  'auth',
  'pg_temp'

as $function$

declare

  v_user_id uuid :=
    auth.uid();

  v_role text;

  v_banned boolean;

  v_account_status text;


  v_request
    public.job_appointment_change_requests%rowtype;

  v_job
    public.jobs%rowtype;

begin

  if v_user_id is null then
    raise exception
      'UTENTE_NON_AUTENTICATO'
      using errcode = '42501';
  end if;


  if p_request_id is null then
    raise exception
      'RICHIESTA_NON_VALIDA'
      using errcode = '22004';
  end if;


  -- =======================================================
  -- PROFILO
  -- =======================================================

  select

    lower(
      trim(
        coalesce(
          u.role,
          ''
        )
      )
    ),

    coalesce(
      u.banned,
      false
    ),

    lower(
      trim(
        coalesce(
          u.account_status,
          'active'
        )
      )
    )

  into
    v_role,
    v_banned,
    v_account_status

  from public.users u

  where u.id =
    v_user_id;


  if not found then
    raise exception
      'PROFILO_UTENTE_NON_TROVATO'
      using errcode = 'P0002';
  end if;


  if
    v_banned = true
    or v_account_status <> 'active'
  then

    raise exception
      'ACCOUNT_NON_ATTIVO'
      using errcode = '42501';

  end if;


  if v_role not in (
    'client',
    'cliente',
    'pilot',
    'pilota'
  ) then

    raise exception
      'RUOLO_NON_AUTORIZZATO'
      using errcode = '42501';

  end if;


  -- =======================================================
  -- LOCK RICHIESTA
  -- =======================================================

  select *
  into v_request

  from
    public.job_appointment_change_requests r

  where r.id =
    p_request_id

  for update;


  if not found then
    raise exception
      'RICHIESTA_NON_TROVATA'
      using errcode = 'P0002';
  end if;


  if
    v_request.requester_id <>
      v_user_id
  then

    raise exception
      'RICHIESTA_NON_AUTORIZZATA'
      using errcode = '42501';

  end if;


  -- =======================================================
  -- IDEMPOTENZA
  -- =======================================================

  if
    v_request.status =
      'cancelled'
  then

    return jsonb_build_object(

      'success',
        true,

      'already_processed',
        true,

      'request_id',
        v_request.id,

      'job_id',
        v_request.job_id,

      'status',
        'cancelled'
    );

  end if;


  if
    v_request.status <>
      'pending'
  then

    raise exception
      'RICHIESTA_NON_ANNULLABILE'
      using errcode = 'P0001';

  end if;


  -- =======================================================
  -- LAVORO SOLO PER TITOLO NOTIFICA
  -- =======================================================

  select *
  into v_job

  from public.jobs j

  where j.id =
    v_request.job_id;


  -- =======================================================
  -- ANNULLA
  -- =======================================================

  update
    public.job_appointment_change_requests

  set
    status =
      'cancelled',

    cancelled_at =
      now(),

    updated_at =
      now()

  where id =
    v_request.id;


  -- =======================================================
  -- NOTIFICA DESTINATARIO
  -- =======================================================

  insert into
    public.notifications (
      user_id,
      title,
      message,
      type,
      read
    )

  values (
    v_request.recipient_id,

    'Modifica appuntamento annullata',

    format(
      'La proposta di modifica dell''appuntamento per "%s" è stata annullata.',
      coalesce(
        nullif(
          trim(v_job.title),
          ''
        ),
        'il lavoro'
      )
    ),

    'appointment_change_cancelled',

    false
  );


  return jsonb_build_object(

    'success',
      true,

    'already_processed',
      false,

    'request_id',
      v_request.id,

    'job_id',
      v_request.job_id,

    'status',
      'cancelled'
  );

end;
$function$;



-- =========================================================
-- PERMESSI RPC
-- =========================================================

revoke all
on function
public.request_job_appointment_change(
  uuid,
  text,
  text,
  text,
  text
)
from
  public,
  anon;


grant execute
on function
public.request_job_appointment_change(
  uuid,
  text,
  text,
  text,
  text
)
to
  authenticated,
  service_role;



revoke all
on function
public.respond_job_appointment_change(
  uuid,
  boolean
)
from
  public,
  anon;


grant execute
on function
public.respond_job_appointment_change(
  uuid,
  boolean
)
to
  authenticated,
  service_role;



revoke all
on function
public.cancel_job_appointment_change(
  uuid
)
from
  public,
  anon;


grant execute
on function
public.cancel_job_appointment_change(
  uuid
)
to
  authenticated,
  service_role;


commit;