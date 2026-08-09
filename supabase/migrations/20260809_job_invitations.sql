begin;


-- =========================================================
-- JOB INVITATIONS
-- Cliente -> Pilota
-- =========================================================

create table if not exists
public.job_invitations (

  id uuid
    primary key
    default gen_random_uuid(),

  job_id uuid
    not null
    references public.jobs(id)
    on delete cascade,

  client_id uuid
    not null
    references public.users(id)
    on delete cascade,

  pilot_id uuid
    not null
    references public.users(id)
    on delete cascade,

  message text
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
    job_invitations_different_users
    check (
      client_id <> pilot_id
    ),

  constraint
    job_invitations_status_check
    check (
      status in (
        'pending',
        'accepted',
        'declined',
        'cancelled'
      )
    ),

  constraint
    job_invitations_message_length_check
    check (
      message is null
      or char_length(message) <= 1000
    )
);


-- =========================================================
-- INDICI
-- =========================================================

create index if not exists
  job_invitations_client_created_idx

on public.job_invitations (
  client_id,
  created_at desc
);


create index if not exists
  job_invitations_pilot_created_idx

on public.job_invitations (
  pilot_id,
  created_at desc
);


create index if not exists
  job_invitations_job_status_idx

on public.job_invitations (
  job_id,
  status
);


-- Un solo invito PENDING per
-- cliente + lavoro + pilota.
create unique index if not exists
  job_invitations_one_pending_unique

on public.job_invitations (
  client_id,
  job_id,
  pilot_id
)

where status = 'pending';


-- =========================================================
-- RLS
-- =========================================================

alter table
  public.job_invitations
enable row level security;


revoke all
on table
  public.job_invitations
from
  public,
  anon,
  authenticated;


grant select
on table
  public.job_invitations
to authenticated;


grant all
on table
  public.job_invitations
to service_role;


drop policy if exists
  job_invitations_client_select
on public.job_invitations;


create policy
  job_invitations_client_select

on public.job_invitations

for select

to authenticated

using (
  client_id = auth.uid()
);


drop policy if exists
  job_invitations_pilot_select
on public.job_invitations;


create policy
  job_invitations_pilot_select

on public.job_invitations

for select

to authenticated

using (
  pilot_id = auth.uid()
);


-- =========================================================
-- RPC 1
-- CLIENTE CREA INVITO
-- =========================================================

create or replace function
public.create_job_invitation(
  p_job_id uuid,
  p_pilot_id uuid,
  p_message text default null
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

  v_client
    public.users%rowtype;

  v_pilot
    public.users%rowtype;

  v_job
    public.jobs%rowtype;

  v_invitation_id uuid;

  v_existing_invitation_id uuid;

  v_known_pilot boolean :=
    false;

  v_existing_application boolean :=
    false;

  v_message text;

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


  if p_pilot_id is null then
    raise exception
      'PILOTA_NON_VALIDO'
      using errcode = '22004';
  end if;


  if p_pilot_id = v_user_id then
    raise exception
      'PILOTA_NON_VALIDO'
      using errcode = '22023';
  end if;


  v_message :=
    nullif(
      trim(
        coalesce(
          p_message,
          ''
        )
      ),
      ''
    );


  if
    v_message is not null
    and char_length(v_message) > 1000
  then

    raise exception
      'MESSAGGIO_TROPPO_LUNGO'
      using errcode = '22001';

  end if;


  -- =======================================================
  -- CLIENTE
  -- =======================================================

  select *
  into v_client

  from public.users

  where id =
    v_user_id;


  if not found then
    raise exception
      'PROFILO_UTENTE_NON_TROVATO'
      using errcode = 'P0002';
  end if;


  if lower(
    trim(
      coalesce(
        v_client.role,
        ''
      )
    )
  ) not in (
    'client',
    'cliente'
  ) then

    raise exception
      'SOLO_CLIENTI'
      using errcode = '42501';

  end if;


  if
    coalesce(
      v_client.banned,
      false
    ) = true

    or lower(
      trim(
        coalesce(
          v_client.account_status,
          ''
        )
      )
    ) <> 'active'
  then

    raise exception
      'ACCOUNT_NON_ATTIVO'
      using errcode = '42501';

  end if;


  -- =======================================================
  -- LAVORO
  -- =======================================================

  select *
  into v_job

  from public.jobs

  where id =
    p_job_id

  for update;


  if not found then
    raise exception
      'LAVORO_NON_TROVATO'
      using errcode = 'P0002';
  end if;


  if v_job.user_id <> v_user_id then
    raise exception
      'NON_SEI_IL_PROPRIETARIO_DEL_LAVORO'
      using errcode = '42501';
  end if;


  if lower(
    trim(
      coalesce(
        v_job.status,
        ''
      )
    )
  ) <> 'open' then

    raise exception
      'LAVORO_NON_INVITABILE'
      using errcode = 'P0001';

  end if;


  -- =======================================================
  -- PILOTA
  -- =======================================================

  select *
  into v_pilot

  from public.users

  where id =
    p_pilot_id;


  if not found then
    raise exception
      'PILOTA_NON_TROVATO'
      using errcode = 'P0002';
  end if;


  if lower(
    trim(
      coalesce(
        v_pilot.role,
        ''
      )
    )
  ) not in (
    'pilot',
    'pilota'
  ) then

    raise exception
      'UTENTE_NON_E_UN_PILOTA'
      using errcode = '22023';

  end if;


  if
    coalesce(
      v_pilot.banned,
      false
    ) = true

    or lower(
      trim(
        coalesce(
          v_pilot.account_status,
          ''
        )
      )
    ) <> 'active'
  then

    raise exception
      'PILOTA_NON_ATTIVO'
      using errcode = 'P0001';

  end if;


  -- =======================================================
  -- IL CLIENTE DEVE CONOSCERE IL PILOTA
  --
  -- È consentito se:
  -- 1. è nei preferiti del cliente
  -- oppure
  -- 2. si è candidato in passato a un lavoro del cliente
  -- oppure
  -- 3. è stato assegnato a un lavoro del cliente
  -- =======================================================

  select (

    exists (

      select 1

      from
        public.client_favorite_pilots f

      where
        f.client_id =
          v_user_id

        and f.pilot_id =
          p_pilot_id

    )

    or exists (

      select 1

      from public.jobs j

      left join public.applications a
        on a.job_id =
          j.id

      where
        j.user_id =
          v_user_id

        and (

          j.assigned_pilot =
            p_pilot_id

          or j.pilot_id =
            p_pilot_id

          or coalesce(
            a.pilot_id,
            a.user_id
          ) =
            p_pilot_id

        )

    )

  )
  into v_known_pilot;


  if not v_known_pilot then
    raise exception
      'PILOTA_NON_COLLEGATO_AL_CLIENTE'
      using errcode = '42501';
  end if;


  -- =======================================================
  -- SE HA GIÀ UNA CANDIDATURA A QUESTO LAVORO
  -- L'INVITO NON SERVE
  -- =======================================================

  select exists (

    select 1

    from public.applications a

    where
      a.job_id =
        p_job_id

      and coalesce(
        a.pilot_id,
        a.user_id
      ) =
        p_pilot_id

  )
  into v_existing_application;


  if v_existing_application then
    raise exception
      'PILOTA_HA_GIA_CANDIDATURA'
      using errcode = 'P0001';
  end if;


  -- =======================================================
  -- LOCK ANTI DOPPIO CLICK / CONCORRENZA
  -- =======================================================

  perform
    pg_advisory_xact_lock(
      hashtextextended(
        'job-invitation:'
        || v_user_id::text
        || ':'
        || p_job_id::text
        || ':'
        || p_pilot_id::text,
        0
      )
    );


  -- =======================================================
  -- IDEMPOTENZA
  -- =======================================================

  select ji.id
  into v_existing_invitation_id

  from public.job_invitations ji

  where
    ji.client_id =
      v_user_id

    and ji.job_id =
      p_job_id

    and ji.pilot_id =
      p_pilot_id

    and ji.status =
      'pending'

  order by
    ji.created_at desc

  limit 1;


  if found then

    return jsonb_build_object(
      'success',
        true,

      'already_processed',
        true,

      'invitation_id',
        v_existing_invitation_id,

      'job_id',
        p_job_id,

      'pilot_id',
        p_pilot_id,

      'status',
        'pending'
    );

  end if;


  -- =======================================================
  -- CREAZIONE INVITO
  -- =======================================================

  insert into
    public.job_invitations (
      job_id,
      client_id,
      pilot_id,
      message,
      status
    )

  values (
    p_job_id,
    v_user_id,
    p_pilot_id,
    v_message,
    'pending'
  )

  returning id
  into v_invitation_id;


  -- =======================================================
  -- NOTIFICA PILOTA
  -- =======================================================

  insert into
    public.notifications (
      user_id,
      title,
      message,
      read,
      type
    )

  values (
    p_pilot_id,

    'Nuovo invito a un lavoro',

    'Un cliente ti ha invitato al lavoro: '
      || coalesce(
        v_job.title,
        'Lavoro DroneGuard'
      ),

    false,

    'job_invitation'
  );


  return jsonb_build_object(
    'success',
      true,

    'already_processed',
      false,

    'invitation_id',
      v_invitation_id,

    'job_id',
      p_job_id,

    'pilot_id',
      p_pilot_id,

    'status',
      'pending'
  );

end;
$function$;



-- =========================================================
-- RPC 2
-- PILOTA ACCETTA / RIFIUTA
-- =========================================================

create or replace function
public.respond_job_invitation(
  p_invitation_id uuid,
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

  v_user
    public.users%rowtype;

  v_invitation
    public.job_invitations%rowtype;

  v_job
    public.jobs%rowtype;

  v_new_status text;

begin

  if v_user_id is null then
    raise exception
      'UTENTE_NON_AUTENTICATO'
      using errcode = '42501';
  end if;


  if p_invitation_id is null then
    raise exception
      'INVITO_NON_VALIDO'
      using errcode = '22004';
  end if;


  if p_accept is null then
    raise exception
      'RISPOSTA_INVITO_NON_VALIDA'
      using errcode = '22004';
  end if;


  -- =======================================================
  -- PILOTA AUTENTICATO
  -- =======================================================

  select *
  into v_user

  from public.users

  where id =
    v_user_id;


  if not found then
    raise exception
      'PROFILO_UTENTE_NON_TROVATO'
      using errcode = 'P0002';
  end if;


  if lower(
    trim(
      coalesce(
        v_user.role,
        ''
      )
    )
  ) not in (
    'pilot',
    'pilota'
  ) then

    raise exception
      'SOLO_PILOTI'
      using errcode = '42501';

  end if;


  if
    coalesce(
      v_user.banned,
      false
    ) = true

    or lower(
      trim(
        coalesce(
          v_user.account_status,
          ''
        )
      )
    ) <> 'active'
  then

    raise exception
      'ACCOUNT_NON_ATTIVO'
      using errcode = '42501';

  end if;


  -- =======================================================
  -- LOCK INVITO
  -- =======================================================

  select *
  into v_invitation

  from public.job_invitations

  where id =
    p_invitation_id

  for update;


  if not found then
    raise exception
      'INVITO_NON_TROVATO'
      using errcode = 'P0002';
  end if;


  if
    v_invitation.pilot_id <>
    v_user_id
  then

    raise exception
      'INVITO_NON_AUTORIZZATO'
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
    v_invitation.status =
    v_new_status
  then

    return jsonb_build_object(
      'success',
        true,

      'already_processed',
        true,

      'invitation_id',
        v_invitation.id,

      'job_id',
        v_invitation.job_id,

      'status',
        v_invitation.status,

      'accepted',
        v_invitation.status =
        'accepted'
    );

  end if;


  if
    v_invitation.status <>
    'pending'
  then

    raise exception
      'INVITO_GIA_RISPOSTO'
      using errcode = 'P0001';

  end if;


  -- =======================================================
  -- LOCK LAVORO
  -- =======================================================

  select *
  into v_job

  from public.jobs

  where id =
    v_invitation.job_id

  for update;


  if not found then
    raise exception
      'LAVORO_NON_TROVATO'
      using errcode = 'P0002';
  end if;


  /*
   * Per ACCETTARE il lavoro deve essere ancora OPEN.
   * Il rifiuto resta invece possibile.
   */
  if
    p_accept = true

    and lower(
      trim(
        coalesce(
          v_job.status,
          ''
        )
      )
    ) <> 'open'
  then

    raise exception
      'LAVORO_NON_PIU_DISPONIBILE'
      using errcode = 'P0001';

  end if;


  -- =======================================================
  -- AGGIORNA INVITO
  -- =======================================================

  update
    public.job_invitations

  set
    status =
      v_new_status,

    responded_at =
      now(),

    updated_at =
      now()

  where id =
    v_invitation.id;


  -- =======================================================
  -- NOTIFICA CLIENTE
  -- =======================================================

  insert into
    public.notifications (
      user_id,
      title,
      message,
      read,
      type
    )

  values (
    v_invitation.client_id,

    case
      when p_accept
        then 'Invito accettato'
      else 'Invito rifiutato'
    end,

    case
      when p_accept
        then
          'Il pilota ha accettato il tuo invito per: '
      else
          'Il pilota ha rifiutato il tuo invito per: '
    end
      || coalesce(
        v_job.title,
        'Lavoro DroneGuard'
      ),

    false,

    'job_invitation_response'
  );


  return jsonb_build_object(
    'success',
      true,

    'already_processed',
      false,

    'invitation_id',
      v_invitation.id,

    'job_id',
      v_invitation.job_id,

    'status',
      v_new_status,

    'accepted',
      p_accept
  );

end;
$function$;



-- =========================================================
-- RPC 3
-- CLIENTE ANNULLA INVITO PENDING
-- =========================================================

create or replace function
public.cancel_job_invitation(
  p_invitation_id uuid
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

  v_user
    public.users%rowtype;

  v_invitation
    public.job_invitations%rowtype;

  v_job
    public.jobs%rowtype;

begin

  if v_user_id is null then
    raise exception
      'UTENTE_NON_AUTENTICATO'
      using errcode = '42501';
  end if;


  if p_invitation_id is null then
    raise exception
      'INVITO_NON_VALIDO'
      using errcode = '22004';
  end if;


  -- =======================================================
  -- CLIENTE AUTENTICATO
  -- =======================================================

  select *
  into v_user

  from public.users

  where id =
    v_user_id;


  if not found then
    raise exception
      'PROFILO_UTENTE_NON_TROVATO'
      using errcode = 'P0002';
  end if;


  if lower(
    trim(
      coalesce(
        v_user.role,
        ''
      )
    )
  ) not in (
    'client',
    'cliente'
  ) then

    raise exception
      'SOLO_CLIENTI'
      using errcode = '42501';

  end if;


  if
    coalesce(
      v_user.banned,
      false
    ) = true

    or lower(
      trim(
        coalesce(
          v_user.account_status,
          ''
        )
      )
    ) <> 'active'
  then

    raise exception
      'ACCOUNT_NON_ATTIVO'
      using errcode = '42501';

  end if;


  -- =======================================================
  -- LOCK INVITO
  -- =======================================================

  select *
  into v_invitation

  from public.job_invitations

  where id =
    p_invitation_id

  for update;


  if not found then
    raise exception
      'INVITO_NON_TROVATO'
      using errcode = 'P0002';
  end if;


  if
    v_invitation.client_id <>
    v_user_id
  then

    raise exception
      'INVITO_NON_AUTORIZZATO'
      using errcode = '42501';

  end if;


  -- =======================================================
  -- IDEMPOTENZA
  -- =======================================================

  if
    v_invitation.status =
    'cancelled'
  then

    return jsonb_build_object(
      'success',
        true,

      'already_processed',
        true,

      'invitation_id',
        v_invitation.id,

      'job_id',
        v_invitation.job_id,

      'status',
        'cancelled'
    );

  end if;


  if
    v_invitation.status <>
    'pending'
  then

    raise exception
      'INVITO_NON_ANNULLABILE'
      using errcode = 'P0001';

  end if;


  -- =======================================================
  -- DATI LAVORO
  -- =======================================================

  select *
  into v_job

  from public.jobs

  where id =
    v_invitation.job_id;


  -- =======================================================
  -- ANNULLAMENTO
  -- =======================================================

  update
    public.job_invitations

  set
    status =
      'cancelled',

    cancelled_at =
      now(),

    updated_at =
      now()

  where id =
    v_invitation.id;


  -- =======================================================
  -- NOTIFICA PILOTA
  -- =======================================================

  insert into
    public.notifications (
      user_id,
      title,
      message,
      read,
      type
    )

  values (
    v_invitation.pilot_id,

    'Invito annullato',

    'Il cliente ha annullato l''invito per: '
      || coalesce(
        v_job.title,
        'Lavoro DroneGuard'
      ),

    false,

    'job_invitation_cancelled'
  );


  return jsonb_build_object(
    'success',
      true,

    'already_processed',
      false,

    'invitation_id',
      v_invitation.id,

    'job_id',
      v_invitation.job_id,

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
public.create_job_invitation(
  uuid,
  uuid,
  text
)
from
  public,
  anon;


grant execute
on function
public.create_job_invitation(
  uuid,
  uuid,
  text
)
to
  authenticated,
  service_role;


revoke all
on function
public.respond_job_invitation(
  uuid,
  boolean
)
from
  public,
  anon;


grant execute
on function
public.respond_job_invitation(
  uuid,
  boolean
)
to
  authenticated,
  service_role;


revoke all
on function
public.cancel_job_invitation(
  uuid
)
from
  public,
  anon;


grant execute
on function
public.cancel_job_invitation(
  uuid
)
to
  authenticated,
  service_role;


commit;