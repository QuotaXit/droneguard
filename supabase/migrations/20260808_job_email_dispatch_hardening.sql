-- =========================================================
-- JOB EMAIL DISPATCH HARDENING
-- Versiona l'infrastruttura già applicata al database live.
-- =========================================================


-- =========================================================
-- TABELLA
-- =========================================================

create table if not exists
public.job_email_dispatches (
  job_id uuid primary key
    references public.jobs(id)
    on delete cascade,

  owner_user_id uuid not null,

  status text not null
    default 'processing',

  claim_token uuid,

  lease_expires_at timestamptz,

  attempt_count integer
    not null
    default 0,

  last_started_at timestamptz,

  completed_at timestamptz,

  failed_at timestamptz,

  last_error text,

  sent_count integer
    not null
    default 0,

  failed_count integer
    not null
    default 0,

  already_processed_count integer
    not null
    default 0,

  recipient_count integer
    not null
    default 0,

  created_at timestamptz
    not null
    default now(),

  updated_at timestamptz
    not null
    default now(),

  constraint job_email_dispatch_status_check
    check (
      status in (
        'processing',
        'completed',
        'failed'
      )
    ),

  constraint job_email_dispatch_attempt_check
    check (
      attempt_count >= 0
    ),

  constraint job_email_dispatch_counts_check
    check (
      sent_count >= 0
      and failed_count >= 0
      and already_processed_count >= 0
      and recipient_count >= 0
    ),

  constraint job_email_dispatch_error_length_check
    check (
      last_error is null
      or char_length(last_error) <= 1000
    )
);


alter table
public.job_email_dispatches
enable row level security;


revoke all
on table public.job_email_dispatches
from public;

revoke all
on table public.job_email_dispatches
from anon;

revoke all
on table public.job_email_dispatches
from authenticated;


grant
select,
insert,
update,
delete
on table public.job_email_dispatches
to service_role;


-- =========================================================
-- CLAIM
-- =========================================================

create or replace function
public.claim_job_email_dispatch(
  p_job_id uuid,
  p_actor_user_id uuid,
  p_claim_token uuid,
  p_lease_seconds integer
)
returns jsonb
language plpgsql
security definer
set search_path to
  'public',
  'pg_temp'
as $function$
declare
  v_now timestamptz :=
    clock_timestamp();

  v_job public.jobs%rowtype;

  v_dispatch
    public.job_email_dispatches%rowtype;

  v_role text;

  v_banned boolean;

  v_account_status text;

  v_retry_after integer;
begin

  if p_job_id is null then
    raise exception
      'LAVORO_NON_INDICATO';
  end if;

  if p_actor_user_id is null then
    raise exception
      'UTENTE_NON_INDICATO';
  end if;

  if p_claim_token is null then
    raise exception
      'CLAIM_TOKEN_NON_VALIDO';
  end if;

  if
    p_lease_seconds is null
    or p_lease_seconds < 30
    or p_lease_seconds > 1800
  then
    raise exception
      'LEASE_NON_VALIDO';
  end if;


  select
    lower(
      trim(
        coalesce(role, '')
      )
    ),

    coalesce(
      banned,
      false
    ),

    lower(
      trim(
        coalesce(
          account_status,
          'active'
        )
      )
    )

  into
    v_role,
    v_banned,
    v_account_status

  from public.users

  where id =
    p_actor_user_id;


  if not found then
    raise exception
      'PROFILO_CLIENTE_NON_TROVATO';
  end if;


  if v_role not in (
    'client',
    'cliente'
  ) then
    raise exception
      'UTENTE_NON_CLIENTE';
  end if;


  if
    v_banned
    or v_account_status <> 'active'
  then
    raise exception
      'CLIENTE_NON_ATTIVO';
  end if;


  select *
  into v_job

  from public.jobs

  where id =
    p_job_id

  for update;


  if not found then
    raise exception
      'LAVORO_NON_TROVATO';
  end if;


  if
    v_job.user_id is distinct from
      p_actor_user_id
  then
    raise exception
      'LAVORO_NON_AUTORIZZATO';
  end if;


  if
    lower(
      trim(
        coalesce(
          v_job.status,
          ''
        )
      )
    ) <> 'open'
  then
    raise exception
      'LAVORO_NON_APERTO';
  end if;


  select *
  into v_dispatch

  from public.job_email_dispatches

  where job_id =
    p_job_id

  for update;


  if not found then

    insert into
      public.job_email_dispatches (
        job_id,
        owner_user_id,
        status,
        claim_token,
        lease_expires_at,
        attempt_count,
        last_started_at,
        created_at,
        updated_at
      )

    values (
      p_job_id,
      p_actor_user_id,
      'processing',
      p_claim_token,
      v_now +
        make_interval(
          secs =>
            p_lease_seconds
        ),
      1,
      v_now,
      v_now,
      v_now
    );


    return jsonb_build_object(
      'claimed', true,
      'already_completed', false,
      'in_progress', false,
      'resumed', false,
      'attempt_count', 1,
      'retry_after_seconds', 0
    );

  end if;


  if v_dispatch.status =
    'completed'
  then

    return jsonb_build_object(
      'claimed', false,
      'already_completed', true,
      'in_progress', false,
      'resumed', false,
      'attempt_count',
        v_dispatch.attempt_count,
      'retry_after_seconds', 0
    );

  end if;


  if
    v_dispatch.status =
      'processing'
    and
    v_dispatch.lease_expires_at
      is not null
    and
    v_dispatch.lease_expires_at >
      v_now
  then

    v_retry_after :=
      greatest(
        1,
        ceil(
          extract(
            epoch
            from (
              v_dispatch.lease_expires_at -
              v_now
            )
          )
        )::integer
      );


    return jsonb_build_object(
      'claimed', false,
      'already_completed', false,
      'in_progress', true,
      'resumed', false,
      'attempt_count',
        v_dispatch.attempt_count,
      'retry_after_seconds',
        v_retry_after
    );

  end if;


  update public.job_email_dispatches

  set
    status =
      'processing',

    owner_user_id =
      p_actor_user_id,

    claim_token =
      p_claim_token,

    lease_expires_at =
      v_now +
      make_interval(
        secs =>
          p_lease_seconds
      ),

    attempt_count =
      attempt_count + 1,

    last_started_at =
      v_now,

    failed_at =
      null,

    last_error =
      null,

    updated_at =
      v_now

  where job_id =
    p_job_id

  returning *
  into v_dispatch;


  return jsonb_build_object(
    'claimed', true,
    'already_completed', false,
    'in_progress', false,
    'resumed', true,
    'attempt_count',
      v_dispatch.attempt_count,
    'retry_after_seconds', 0
  );

end;
$function$;


-- =========================================================
-- COMPLETE
-- =========================================================

create or replace function
public.complete_job_email_dispatch(
  p_job_id uuid,
  p_actor_user_id uuid,
  p_claim_token uuid,
  p_sent_count integer,
  p_failed_count integer,
  p_already_processed_count integer,
  p_recipient_count integer
)
returns jsonb
language plpgsql
security definer
set search_path to
  'public',
  'pg_temp'
as $function$
declare
  v_dispatch
    public.job_email_dispatches%rowtype;
begin

  select *
  into v_dispatch

  from public.job_email_dispatches

  where job_id =
    p_job_id

  for update;


  if not found then
    raise exception
      'DISPATCH_NON_TROVATO';
  end if;


  if
    v_dispatch.owner_user_id
      is distinct from
      p_actor_user_id
  then
    raise exception
      'DISPATCH_NON_AUTORIZZATO';
  end if;


  if v_dispatch.status =
    'completed'
  then
    return jsonb_build_object(
      'success', true,
      'already_completed', true
    );
  end if;


  if
    v_dispatch.status <>
      'processing'
    or
    v_dispatch.claim_token
      is distinct from
      p_claim_token
  then
    raise exception
      'CLAIM_NON_VALIDO';
  end if;


  if
    coalesce(
      p_sent_count,
      -1
    ) < 0

    or coalesce(
      p_failed_count,
      -1
    ) < 0

    or coalesce(
      p_already_processed_count,
      -1
    ) < 0

    or coalesce(
      p_recipient_count,
      -1
    ) < 0
  then
    raise exception
      'CONTEGGI_NON_VALIDI';
  end if;


  update public.job_email_dispatches

  set
    status =
      'completed',

    claim_token =
      null,

    lease_expires_at =
      null,

    completed_at =
      clock_timestamp(),

    failed_at =
      null,

    last_error =
      null,

    sent_count =
      p_sent_count,

    failed_count =
      p_failed_count,

    already_processed_count =
      p_already_processed_count,

    recipient_count =
      p_recipient_count,

    updated_at =
      clock_timestamp()

  where job_id =
    p_job_id;


  return jsonb_build_object(
    'success', true,
    'already_completed', false
  );

end;
$function$;


-- =========================================================
-- FAIL
-- =========================================================

create or replace function
public.fail_job_email_dispatch(
  p_job_id uuid,
  p_actor_user_id uuid,
  p_claim_token uuid,
  p_error text,
  p_sent_count integer,
  p_failed_count integer,
  p_already_processed_count integer,
  p_recipient_count integer
)
returns jsonb
language plpgsql
security definer
set search_path to
  'public',
  'pg_temp'
as $function$
declare
  v_dispatch
    public.job_email_dispatches%rowtype;

  v_error text;
begin

  select *
  into v_dispatch

  from public.job_email_dispatches

  where job_id =
    p_job_id

  for update;


  if not found then
    raise exception
      'DISPATCH_NON_TROVATO';
  end if;


  if
    v_dispatch.owner_user_id
      is distinct from
      p_actor_user_id
  then
    raise exception
      'DISPATCH_NON_AUTORIZZATO';
  end if;


  if
    v_dispatch.status <>
      'processing'
    or
    v_dispatch.claim_token
      is distinct from
      p_claim_token
  then
    raise exception
      'CLAIM_NON_VALIDO';
  end if;


  v_error :=
    left(
      trim(
        coalesce(
          p_error,
          'Errore invio notifiche'
        )
      ),
      1000
    );


  update public.job_email_dispatches

  set
    status =
      'failed',

    claim_token =
      null,

    lease_expires_at =
      null,

    failed_at =
      clock_timestamp(),

    last_error =
      v_error,

    sent_count =
      greatest(
        coalesce(
          p_sent_count,
          0
        ),
        0
      ),

    failed_count =
      greatest(
        coalesce(
          p_failed_count,
          0
        ),
        0
      ),

    already_processed_count =
      greatest(
        coalesce(
          p_already_processed_count,
          0
        ),
        0
      ),

    recipient_count =
      greatest(
        coalesce(
          p_recipient_count,
          0
        ),
        0
      ),

    updated_at =
      clock_timestamp()

  where job_id =
    p_job_id;


  return jsonb_build_object(
    'success', true
  );

end;
$function$;


-- =========================================================
-- OWNERSHIP / PRIVILEGI
-- =========================================================

alter function
public.claim_job_email_dispatch(
  uuid,
  uuid,
  uuid,
  integer
)
owner to postgres;

alter function
public.complete_job_email_dispatch(
  uuid,
  uuid,
  uuid,
  integer,
  integer,
  integer,
  integer
)
owner to postgres;

alter function
public.fail_job_email_dispatch(
  uuid,
  uuid,
  uuid,
  text,
  integer,
  integer,
  integer,
  integer
)
owner to postgres;


revoke all
on function
public.claim_job_email_dispatch(
  uuid,
  uuid,
  uuid,
  integer
)
from public, anon, authenticated;

revoke all
on function
public.complete_job_email_dispatch(
  uuid,
  uuid,
  uuid,
  integer,
  integer,
  integer,
  integer
)
from public, anon, authenticated;

revoke all
on function
public.fail_job_email_dispatch(
  uuid,
  uuid,
  uuid,
  text,
  integer,
  integer,
  integer,
  integer
)
from public, anon, authenticated;


grant execute
on function
public.claim_job_email_dispatch(
  uuid,
  uuid,
  uuid,
  integer
)
to service_role;

grant execute
on function
public.complete_job_email_dispatch(
  uuid,
  uuid,
  uuid,
  integer,
  integer,
  integer,
  integer
)
to service_role;

grant execute
on function
public.fail_job_email_dispatch(
  uuid,
  uuid,
  uuid,
  text,
  integer,
  integer,
  integer,
  integer
)
to service_role;
