begin;


-- =========================================================
-- CLIENTE → PILOTI PREFERITI
-- =========================================================

create table if not exists
public.client_favorite_pilots (

  client_id uuid not null
    references public.users(id)
    on delete cascade,

  pilot_id uuid not null
    references public.users(id)
    on delete cascade,

  created_at timestamptz
    not null
    default now(),

  primary key (
    client_id,
    pilot_id
  ),

  constraint
    client_favorite_pilots_different_users
    check (
      client_id <> pilot_id
    )
);


create index if not exists
  client_favorite_pilots_created_idx

on public.client_favorite_pilots (
  client_id,
  created_at desc
);


alter table
  public.client_favorite_pilots
enable row level security;


revoke all
on table
  public.client_favorite_pilots
from
  public,
  anon,
  authenticated;


grant select
on table
  public.client_favorite_pilots
to authenticated;


grant all
on table
  public.client_favorite_pilots
to service_role;


drop policy if exists
  client_favorite_pilots_select_own
on public.client_favorite_pilots;


create policy
  client_favorite_pilots_select_own

on public.client_favorite_pilots

for select

to authenticated

using (
  client_id = auth.uid()
);



-- =========================================================
-- PILOTA → LAVORI SALVATI
-- =========================================================

create table if not exists
public.pilot_saved_jobs (

  pilot_id uuid not null
    references public.users(id)
    on delete cascade,

  job_id uuid not null
    references public.jobs(id)
    on delete cascade,

  created_at timestamptz
    not null
    default now(),

  primary key (
    pilot_id,
    job_id
  )
);


create index if not exists
  pilot_saved_jobs_created_idx

on public.pilot_saved_jobs (
  pilot_id,
  created_at desc
);


alter table
  public.pilot_saved_jobs
enable row level security;


revoke all
on table
  public.pilot_saved_jobs
from
  public,
  anon,
  authenticated;


grant select
on table
  public.pilot_saved_jobs
to authenticated;


grant all
on table
  public.pilot_saved_jobs
to service_role;


drop policy if exists
  pilot_saved_jobs_select_own
on public.pilot_saved_jobs;


create policy
  pilot_saved_jobs_select_own

on public.pilot_saved_jobs

for select

to authenticated

using (
  pilot_id = auth.uid()
);



-- =========================================================
-- RPC CLIENTE:
-- AGGIUNGE / RIMUOVE PILOTA PREFERITO
-- =========================================================

create or replace function
public.set_client_favorite_pilot(
  p_pilot_id uuid,
  p_favorite boolean
)
returns jsonb

language plpgsql

security definer

set search_path to
  'public',
  'pg_temp'

as $function$

declare

  v_user_id uuid :=
    auth.uid();

  v_role text;
  v_banned boolean;
  v_account_status text;

  v_target_role text;
  v_target_banned boolean;
  v_target_status text;

  v_known_pilot boolean :=
    false;

  v_changed integer :=
    0;

begin

  if v_user_id is null then
    raise exception
      'UTENTE_NON_AUTENTICATO'
      using errcode = '42501';
  end if;


  if p_pilot_id is null then
    raise exception
      'PILOTA_NON_VALIDO'
      using errcode = '22004';
  end if;


  if p_favorite is null then
    raise exception
      'STATO_PREFERITO_NON_VALIDO'
      using errcode = '22004';
  end if;


  if p_pilot_id = v_user_id then
    raise exception
      'PILOTA_NON_VALIDO'
      using errcode = '22023';
  end if;


  -- =======================================================
  -- CLIENTE
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


  if v_role not in (
    'client',
    'cliente'
  ) then

    raise exception
      'SOLO_CLIENTI'
      using errcode = '42501';

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
  -- LOCK LOGICO
  -- =======================================================

  perform pg_advisory_xact_lock(
    hashtextextended(
      'client-favorite-pilot:'
      || v_user_id::text
      || ':'
      || p_pilot_id::text,
      0
    )
  );


  /*
   * La rimozione deve essere sempre possibile,
   * anche se il pilota in futuro viene sospeso
   * o disattivato.
   */
  if p_favorite = false then

    delete from
      public.client_favorite_pilots

    where client_id =
      v_user_id

      and pilot_id =
        p_pilot_id;


    get diagnostics
      v_changed = row_count;


    return jsonb_build_object(
      'success',
        true,

      'pilot_id',
        p_pilot_id,

      'favorite',
        false,

      'already_processed',
        v_changed = 0
    );

  end if;


  -- =======================================================
  -- PILOTA DA AGGIUNGERE
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
    v_target_role,
    v_target_banned,
    v_target_status

  from public.users u

  where u.id =
    p_pilot_id;


  if not found then
    raise exception
      'PILOTA_NON_TROVATO'
      using errcode = 'P0002';
  end if;


  if v_target_role not in (
    'pilot',
    'pilota'
  ) then

    raise exception
      'UTENTE_NON_E_UN_PILOTA'
      using errcode = '22023';

  end if;


  if
    v_target_banned = true
    or v_target_status <> 'active'
  then

    raise exception
      'PILOTA_NON_ATTIVO'
      using errcode = 'P0001';

  end if;


  -- =======================================================
  -- IL CLIENTE DEVE CONOSCERE REALMENTE IL PILOTA
  --
  -- candidato a un suo lavoro
  -- oppure pilota assegnato.
  -- =======================================================

  select exists (

    select 1

    from public.jobs j

    left join public.applications a
      on a.job_id =
        j.id

    where j.user_id =
      v_user_id

      and (
        j.assigned_pilot =
          p_pilot_id

        or j.pilot_id =
          p_pilot_id

        or a.pilot_id =
          p_pilot_id

        or a.user_id =
          p_pilot_id
      )

  )
  into v_known_pilot;


  if not v_known_pilot then
    raise exception
      'PILOTA_NON_COLLEGATO_AL_CLIENTE'
      using errcode = '42501';
  end if;


  insert into
    public.client_favorite_pilots (
      client_id,
      pilot_id
    )

  values (
    v_user_id,
    p_pilot_id
  )

  on conflict (
    client_id,
    pilot_id
  )

  do nothing;


  get diagnostics
    v_changed = row_count;


  return jsonb_build_object(
    'success',
      true,

    'pilot_id',
      p_pilot_id,

    'favorite',
      true,

    'already_processed',
      v_changed = 0
  );

end;
$function$;



-- =========================================================
-- RPC PILOTA:
-- SALVA / RIMUOVE LAVORO
-- =========================================================

create or replace function
public.set_pilot_saved_job(
  p_job_id uuid,
  p_saved boolean
)
returns jsonb

language plpgsql

security definer

set search_path to
  'public',
  'pg_temp'

as $function$

declare

  v_user_id uuid :=
    auth.uid();

  v_role text;
  v_banned boolean;
  v_account_status text;

  v_job_status text;

  v_changed integer :=
    0;

begin

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


  if p_saved is null then
    raise exception
      'STATO_SALVATAGGIO_NON_VALIDO'
      using errcode = '22004';
  end if;


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


  if v_role not in (
    'pilot',
    'pilota'
  ) then

    raise exception
      'SOLO_PILOTI'
      using errcode = '42501';

  end if;


  if
    v_banned = true
    or v_account_status <> 'active'
  then

    raise exception
      'ACCOUNT_NON_ATTIVO'
      using errcode = '42501';

  end if;


  perform pg_advisory_xact_lock(
    hashtextextended(
      'pilot-saved-job:'
      || v_user_id::text
      || ':'
      || p_job_id::text,
      0
    )
  );


  /*
   * Anche un lavoro diventato chiuso
   * deve poter essere rimosso dai salvati.
   */
  if p_saved = false then

    delete from
      public.pilot_saved_jobs

    where pilot_id =
      v_user_id

      and job_id =
        p_job_id;


    get diagnostics
      v_changed = row_count;


    return jsonb_build_object(
      'success',
        true,

      'job_id',
        p_job_id,

      'saved',
        false,

      'already_processed',
        v_changed = 0
    );

  end if;


  select lower(
    trim(
      coalesce(
        j.status,
        ''
      )
    )
  )

  into v_job_status

  from public.jobs j

  where j.id =
    p_job_id;


  if not found then
    raise exception
      'LAVORO_NON_TROVATO'
      using errcode = 'P0002';
  end if;


  if v_job_status <> 'open' then
    raise exception
      'LAVORO_NON_SALVABILE'
      using errcode = 'P0001';
  end if;


  insert into
    public.pilot_saved_jobs (
      pilot_id,
      job_id
    )

  values (
    v_user_id,
    p_job_id
  )

  on conflict (
    pilot_id,
    job_id
  )

  do nothing;


  get diagnostics
    v_changed = row_count;


  return jsonb_build_object(
    'success',
      true,

    'job_id',
      p_job_id,

    'saved',
      true,

    'already_processed',
      v_changed = 0
  );

end;
$function$;



-- =========================================================
-- PERMESSI RPC
-- =========================================================

revoke all
on function
public.set_client_favorite_pilot(
  uuid,
  boolean
)
from
  public,
  anon;


grant execute
on function
public.set_client_favorite_pilot(
  uuid,
  boolean
)
to
  authenticated,
  service_role;


revoke all
on function
public.set_pilot_saved_job(
  uuid,
  boolean
)
from
  public,
  anon;


grant execute
on function
public.set_pilot_saved_job(
  uuid,
  boolean
)
to
  authenticated,
  service_role;


commit;