-- =========================================================
-- RATE LIMIT HARDENING
-- Versiona l'infrastruttura rate-limit già applicata
-- al database di produzione.
-- =========================================================


-- =========================================================
-- TABELLA RATE LIMIT
-- =========================================================

create table if not exists
public.rate_limits (
  key_hash text primary key,

  window_started_at timestamptz
    not null
    default now(),

  request_count integer
    not null
    default 0,

  updated_at timestamptz
    not null
    default now(),

  constraint rate_limits_key_hash_length_check
    check (
      char_length(key_hash)
      between 16 and 200
    ),

  constraint rate_limits_request_count_check
    check (
      request_count >= 0
    )
);


alter table
public.rate_limits
enable row level security;


-- Nessun accesso diretto dal browser.

revoke all
on table public.rate_limits
from public;

revoke all
on table public.rate_limits
from anon;

revoke all
on table public.rate_limits
from authenticated;


-- Utilizzabile esclusivamente dal backend
-- mediante service_role.

grant
select,
insert,
update,
delete
on table public.rate_limits
to service_role;


-- =========================================================
-- RPC CONSUME RATE LIMIT
-- =========================================================

create or replace function
public.consume_rate_limit(
  p_key text,
  p_limit integer,
  p_window_seconds integer
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

  v_row
    public.rate_limits%rowtype;

  v_window_end timestamptz;

  v_retry_after integer;

  v_next_count integer;
begin

  -- =======================================================
  -- VALIDAZIONE INPUT
  -- =======================================================

  if
    p_key is null
    or char_length(
      trim(p_key)
    ) < 16
    or char_length(
      trim(p_key)
    ) > 200
  then
    raise exception
      'RATE_LIMIT_KEY_INVALID';
  end if;


  if
    p_limit is null
    or p_limit < 1
    or p_limit > 1000
  then
    raise exception
      'RATE_LIMIT_LIMIT_INVALID';
  end if;


  if
    p_window_seconds is null
    or p_window_seconds < 1
    or p_window_seconds > 86400
  then
    raise exception
      'RATE_LIMIT_WINDOW_INVALID';
  end if;


  -- =======================================================
  -- LOCK PER CHIAVE
  -- Evita race condition tra richieste concorrenti.
  -- =======================================================

  perform pg_advisory_xact_lock(
    hashtextextended(
      p_key,
      0
    )
  );


  -- =======================================================
  -- LETTURA CONTATORE
  -- =======================================================

  select *
  into v_row

  from public.rate_limits

  where key_hash =
    p_key

  for update;


  -- =======================================================
  -- PRIMA RICHIESTA
  -- =======================================================

  if not found then

    insert into
      public.rate_limits (
        key_hash,
        window_started_at,
        request_count,
        updated_at
      )

    values (
      p_key,
      v_now,
      1,
      v_now
    );


    return jsonb_build_object(
      'allowed',
        true,

      'remaining',
        greatest(
          p_limit - 1,
          0
        ),

      'retry_after_seconds',
        p_window_seconds
    );

  end if;


  -- =======================================================
  -- CALCOLO FINE FINESTRA
  -- =======================================================

  v_window_end :=
    v_row.window_started_at +
    make_interval(
      secs =>
        p_window_seconds
    );


  -- =======================================================
  -- FINESTRA SCADUTA:
  -- RIPARTE DA 1
  -- =======================================================

  if
    v_window_end <=
      v_now
  then

    update public.rate_limits

    set
      window_started_at =
        v_now,

      request_count =
        1,

      updated_at =
        v_now

    where key_hash =
      p_key;


    return jsonb_build_object(
      'allowed',
        true,

      'remaining',
        greatest(
          p_limit - 1,
          0
        ),

      'retry_after_seconds',
        p_window_seconds
    );

  end if;


  -- =======================================================
  -- LIMITE GIÀ RAGGIUNTO
  -- =======================================================

  if
    v_row.request_count >=
      p_limit
  then

    v_retry_after :=
      greatest(
        1,
        ceil(
          extract(
            epoch
            from (
              v_window_end -
              v_now
            )
          )
        )::integer
      );


    update public.rate_limits

    set
      updated_at =
        v_now

    where key_hash =
      p_key;


    return jsonb_build_object(
      'allowed',
        false,

      'remaining',
        0,

      'retry_after_seconds',
        v_retry_after
    );

  end if;


  -- =======================================================
  -- RICHIESTA CONSENTITA
  -- =======================================================

  v_next_count :=
    v_row.request_count + 1;


  update public.rate_limits

  set
    request_count =
      v_next_count,

    updated_at =
      v_now

  where key_hash =
    p_key;


  v_retry_after :=
    greatest(
      1,
      ceil(
        extract(
          epoch
          from (
            v_window_end -
            v_now
          )
        )
      )::integer
    );


  return jsonb_build_object(
    'allowed',
      true,

    'remaining',
      greatest(
        p_limit -
        v_next_count,
        0
      ),

    'retry_after_seconds',
      v_retry_after
  );

end;
$function$;


-- =========================================================
-- OWNERSHIP / PRIVILEGI RPC
-- =========================================================

alter function
public.consume_rate_limit(
  text,
  integer,
  integer
)
owner to postgres;


revoke all
on function
public.consume_rate_limit(
  text,
  integer,
  integer
)
from public, anon, authenticated;


grant execute
on function
public.consume_rate_limit(
  text,
  integer,
  integer
)
to service_role;