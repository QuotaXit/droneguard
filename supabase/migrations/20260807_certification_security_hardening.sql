-- DroneGuard
-- Security hardening snapshot - 2026-08-07
-- Generated from the current Supabase function definitions exported by the project.
--
-- Scope:
--   - admin_add_pilot_certifications
--   - review_certification_request
--   - prevent_archived_announcement_reopen + trigger
--   - certification document upload restrictive policy
--   - certification request concurrency/storage-path indexes
--
-- This file is intended to version the audited database hardening in Git.

begin;

CREATE OR REPLACE FUNCTION public.admin_add_pilot_certifications(p_actor_user_id uuid, p_pilot_user_id uuid, p_certifications text[], p_reason text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public', 'pg_temp'
AS $function$
declare
  v_can_review boolean;
  v_reason text;

  v_requested text[];
  v_added text[];
  v_active_before text[];
  v_active_after text[];

  v_pilot_role text;
  v_pilot_email text;
  v_pilot_name text;
  v_pilot_surname text;
  v_pilot_account_status text;
  v_pilot_banned boolean;

  v_old_verified boolean;
  v_old_enac boolean;

  v_old_a1a3 boolean;
  v_old_a2 boolean;
  v_old_sts boolean;
  v_old_sts01 boolean;
  v_old_sts02 boolean;
  v_old_specific boolean;
  v_old_open boolean;
  v_old_cro boolean;
  v_old_luc boolean;
  v_old_bvlos boolean;
  v_old_notturno boolean;
  v_old_termografia boolean;
  v_old_fpv_racing boolean;

  v_changed boolean;
  v_now timestamptz;
begin
  v_can_review := false;
  v_changed := false;
  v_now := now();

  v_requested := array[]::text[];
  v_added := array[]::text[];
  v_active_before := array[]::text[];
  v_active_after := array[]::text[];

  -- =======================================================
  -- PARAMETRI OBBLIGATORI
  -- =======================================================

  if p_actor_user_id is null then
    raise exception
      'OPERATORE_TEAM_MANCANTE'
      using errcode = 'P0001';
  end if;

  if p_pilot_user_id is null then
    raise exception
      'PILOTA_MANCANTE'
      using errcode = 'P0001';
  end if;

  v_reason :=
    trim(
      coalesce(
        p_reason,
        ''
      )
    );

  if char_length(v_reason) < 10 then
    raise exception
      'MOTIVAZIONE_CERTIFICAZIONE_NON_VALIDA'
      using errcode = 'P0001';
  end if;

  if char_length(v_reason) > 500 then
    raise exception
      'MOTIVAZIONE_CERTIFICAZIONE_NON_VALIDA'
      using errcode = 'P0001';
  end if;

  -- =======================================================
  -- AUTORIZZAZIONE TEAM
  -- =======================================================

  select exists (
    select 1
    from public.team_members member_row

    join public.team_role_permissions permission_row
      on permission_row.role_key =
        member_row.role_key

    where
      member_row.user_id =
        p_actor_user_id

      and member_row.active = true

      and permission_row.permission_key =
        'certifications.review'
  )
  into v_can_review;

  if v_can_review is not true then
    raise exception
      'PERMESSO_CERTIFICAZIONI_NEGATO'
      using errcode = 'P0001';
  end if;

  -- =======================================================
  -- NORMALIZZAZIONE CERTIFICAZIONI
  -- =======================================================

  select array(
    select distinct
      normalized.certification_key

    from (
      select
        lower(
          trim(
            certification_item.item
          )
        ) as certification_key

      from unnest(
        coalesce(
          p_certifications,
          array[]::text[]
        )
      ) as certification_item(item)
    ) normalized

    where
      normalized.certification_key <> ''

    order by
      normalized.certification_key
  )
  into v_requested;

  v_requested :=
    coalesce(
      v_requested,
      array[]::text[]
    );

  if
    coalesce(
      array_length(
        v_requested,
        1
      ),
      0
    ) = 0
  then
    raise exception
      'SELEZIONA_ALMENO_UNA_CERTIFICAZIONE'
      using errcode = 'P0001';
  end if;

  /*
   * cert_enac_verified non è selezionabile.
   * Viene impostato automaticamente.
   */
  if exists (
    select 1

    from unnest(
      v_requested
    ) as requested_item(item)

    where
      requested_item.item not in (
        'a1a3',
        'a2',
        'sts',
        'sts01',
        'sts02',
        'specific',
        'open',
        'cro',
        'luc',
        'bvlos',
        'notturno',
        'termografia',
        'fpv_racing'
      )
  ) then
    raise exception
      'CERTIFICAZIONE_NON_VALIDA'
      using errcode = 'P0001';
  end if;

  -- =======================================================
  -- BLOCCO CONCORRENTE DEL PILOTA
  -- =======================================================

  perform pg_advisory_xact_lock(
    hashtextextended(
      'droneguard-pilot-certifications:' ||
        p_pilot_user_id::text,
      0
    )
  );

  -- =======================================================
  -- LETTURA PROFILO
  -- =======================================================

  select
    lower(
      trim(
        coalesce(
          user_row.role,
          ''
        )
      )
    ),

    user_row.email,
    user_row.name,
    user_row.surname,

    lower(
      trim(
        coalesce(
          user_row.account_status,
          'active'
        )
      )
    ),

    coalesce(
      user_row.banned,
      false
    ),

    coalesce(
      user_row.verified,
      false
    ),

    coalesce(
      user_row.cert_enac_verified,
      false
    ),

    coalesce(
      user_row.cert_a1a3_verified,
      false
    ),

    coalesce(
      user_row.cert_a2_verified,
      false
    ),

    coalesce(
      user_row.cert_sts_verified,
      false
    ),

    coalesce(
      user_row.cert_sts01_verified,
      false
    ),

    coalesce(
      user_row.cert_sts02_verified,
      false
    ),

    coalesce(
      user_row.cert_specific_verified,
      false
    ),

    coalesce(
      user_row.cert_open_verified,
      false
    ),

    coalesce(
      user_row.cert_cro_verified,
      false
    ),

    coalesce(
      user_row.cert_luc_verified,
      false
    ),

    coalesce(
      user_row.cert_bvlos_verified,
      false
    ),

    coalesce(
      user_row.cert_notturno_verified,
      false
    ),

    coalesce(
      user_row.cert_termografia_verified,
      false
    ),

    coalesce(
      user_row.cert_fpv_racing_verified,
      false
    )

  into
    v_pilot_role,
    v_pilot_email,
    v_pilot_name,
    v_pilot_surname,
    v_pilot_account_status,
    v_pilot_banned,

    v_old_verified,
    v_old_enac,

    v_old_a1a3,
    v_old_a2,
    v_old_sts,
    v_old_sts01,
    v_old_sts02,
    v_old_specific,
    v_old_open,
    v_old_cro,
    v_old_luc,
    v_old_bvlos,
    v_old_notturno,
    v_old_termografia,
    v_old_fpv_racing

  from public.users user_row

  where
    user_row.id =
      p_pilot_user_id

  for update;

  if not found then
    raise exception
      'PROFILO_PILOTA_NON_TROVATO'
      using errcode = 'P0001';
  end if;

  if
    v_pilot_role <> 'pilot'
    and v_pilot_role <> 'pilota'
  then
    raise exception
      'PROFILO_NON_PILOTA'
      using errcode = 'P0001';
  end if;

  if v_pilot_account_status <> 'active' then
    raise exception
      'PROFILO_PILOTA_NON_ATTIVO'
      using errcode = 'P0001';
  end if;

  if v_pilot_banned then
    raise exception
      'PROFILO_PILOTA_SOSPESO'
      using errcode = 'P0001';
  end if;

  -- =======================================================
  -- CERTIFICAZIONI GIÀ ATTIVE
  -- =======================================================

  if v_old_a1a3 then
    v_active_before :=
      array_append(
        v_active_before,
        'a1a3'
      );
  end if;

  if v_old_a2 then
    v_active_before :=
      array_append(
        v_active_before,
        'a2'
      );
  end if;

  if v_old_sts then
    v_active_before :=
      array_append(
        v_active_before,
        'sts'
      );
  end if;

  if v_old_sts01 then
    v_active_before :=
      array_append(
        v_active_before,
        'sts01'
      );
  end if;

  if v_old_sts02 then
    v_active_before :=
      array_append(
        v_active_before,
        'sts02'
      );
  end if;

  if v_old_specific then
    v_active_before :=
      array_append(
        v_active_before,
        'specific'
      );
  end if;

  if v_old_open then
    v_active_before :=
      array_append(
        v_active_before,
        'open'
      );
  end if;

  if v_old_cro then
    v_active_before :=
      array_append(
        v_active_before,
        'cro'
      );
  end if;

  if v_old_luc then
    v_active_before :=
      array_append(
        v_active_before,
        'luc'
      );
  end if;

  if v_old_bvlos then
    v_active_before :=
      array_append(
        v_active_before,
        'bvlos'
      );
  end if;

  if v_old_notturno then
    v_active_before :=
      array_append(
        v_active_before,
        'notturno'
      );
  end if;

  if v_old_termografia then
    v_active_before :=
      array_append(
        v_active_before,
        'termografia'
      );
  end if;

  if v_old_fpv_racing then
    v_active_before :=
      array_append(
        v_active_before,
        'fpv_racing'
      );
  end if;

  -- =======================================================
  -- CERTIFICAZIONI REALMENTE NUOVE
  -- =======================================================

  if
    'a1a3' = any(v_requested)
    and not v_old_a1a3
  then
    v_added :=
      array_append(
        v_added,
        'a1a3'
      );
  end if;

  if
    'a2' = any(v_requested)
    and not v_old_a2
  then
    v_added :=
      array_append(
        v_added,
        'a2'
      );
  end if;

  if
    'sts' = any(v_requested)
    and not v_old_sts
  then
    v_added :=
      array_append(
        v_added,
        'sts'
      );
  end if;

  if
    'sts01' = any(v_requested)
    and not v_old_sts01
  then
    v_added :=
      array_append(
        v_added,
        'sts01'
      );
  end if;

  if
    'sts02' = any(v_requested)
    and not v_old_sts02
  then
    v_added :=
      array_append(
        v_added,
        'sts02'
      );
  end if;

  if
    'specific' = any(v_requested)
    and not v_old_specific
  then
    v_added :=
      array_append(
        v_added,
        'specific'
      );
  end if;

  if
    'open' = any(v_requested)
    and not v_old_open
  then
    v_added :=
      array_append(
        v_added,
        'open'
      );
  end if;

  if
    'cro' = any(v_requested)
    and not v_old_cro
  then
    v_added :=
      array_append(
        v_added,
        'cro'
      );
  end if;

  if
    'luc' = any(v_requested)
    and not v_old_luc
  then
    v_added :=
      array_append(
        v_added,
        'luc'
      );
  end if;

  if
    'bvlos' = any(v_requested)
    and not v_old_bvlos
  then
    v_added :=
      array_append(
        v_added,
        'bvlos'
      );
  end if;

  if
    'notturno' = any(v_requested)
    and not v_old_notturno
  then
    v_added :=
      array_append(
        v_added,
        'notturno'
      );
  end if;

  if
    'termografia' = any(v_requested)
    and not v_old_termografia
  then
    v_added :=
      array_append(
        v_added,
        'termografia'
      );
  end if;

  if
    'fpv_racing' = any(v_requested)
    and not v_old_fpv_racing
  then
    v_added :=
      array_append(
        v_added,
        'fpv_racing'
      );
  end if;

  v_changed :=
    coalesce(
      array_length(
        v_added,
        1
      ),
      0
    ) > 0
    or not v_old_verified
    or not v_old_enac;

  -- =======================================================
  -- NESSUNA MODIFICA
  -- =======================================================

  if not v_changed then
    return jsonb_build_object(
      'success',
        true,

      'changed',
        false,

      'pilot_user_id',
        p_pilot_user_id,

      'pilot_email',
        v_pilot_email,

      'pilot_name',
        nullif(
          trim(
            concat_ws(
              ' ',
              v_pilot_name,
              v_pilot_surname
            )
          ),
          ''
        ),

      'added_certifications',
        '[]'::jsonb,

      'active_certifications',
        to_jsonb(
          v_active_before
        )
    );
  end if;

  -- =======================================================
  -- AGGIORNAMENTO ADDITIVO
  -- =======================================================

  update public.users
  set
    verified = true,

    cert_enac_verified = true,

    cert_a1a3_verified =
      coalesce(
        cert_a1a3_verified,
        false
      )
      or (
        'a1a3' =
          any(v_requested)
      ),

    cert_a2_verified =
      coalesce(
        cert_a2_verified,
        false
      )
      or (
        'a2' =
          any(v_requested)
      ),

    cert_sts_verified =
      coalesce(
        cert_sts_verified,
        false
      )
      or (
        'sts' =
          any(v_requested)
      ),

    cert_sts01_verified =
      coalesce(
        cert_sts01_verified,
        false
      )
      or (
        'sts01' =
          any(v_requested)
      ),

    cert_sts02_verified =
      coalesce(
        cert_sts02_verified,
        false
      )
      or (
        'sts02' =
          any(v_requested)
      ),

    cert_specific_verified =
      coalesce(
        cert_specific_verified,
        false
      )
      or (
        'specific' =
          any(v_requested)
      ),

    cert_open_verified =
      coalesce(
        cert_open_verified,
        false
      )
      or (
        'open' =
          any(v_requested)
      ),

    cert_cro_verified =
      coalesce(
        cert_cro_verified,
        false
      )
      or (
        'cro' =
          any(v_requested)
      ),

    cert_luc_verified =
      coalesce(
        cert_luc_verified,
        false
      )
      or (
        'luc' =
          any(v_requested)
      ),

    cert_bvlos_verified =
      coalesce(
        cert_bvlos_verified,
        false
      )
      or (
        'bvlos' =
          any(v_requested)
      ),

    cert_notturno_verified =
      coalesce(
        cert_notturno_verified,
        false
      )
      or (
        'notturno' =
          any(v_requested)
      ),

    cert_termografia_verified =
      coalesce(
        cert_termografia_verified,
        false
      )
      or (
        'termografia' =
          any(v_requested)
      ),

    cert_fpv_racing_verified =
      coalesce(
        cert_fpv_racing_verified,
        false
      )
      or (
        'fpv_racing' =
          any(v_requested)
      )

  where
    id =
      p_pilot_user_id;

  -- =======================================================
  -- STATO SUCCESSIVO
  -- =======================================================

  select array(
    select distinct
      combined.item

    from unnest(
      v_active_before ||
      v_requested
    ) as combined(item)

    order by
      combined.item
  )
  into v_active_after;

  v_active_after :=
    coalesce(
      v_active_after,
      array[]::text[]
    );

  -- =======================================================
  -- NOTIFICA AL PILOTA
  -- =======================================================

  if
    coalesce(
      array_length(
        v_added,
        1
      ),
      0
    ) > 0
  then
    insert into public.notifications (
      user_id,
      title,
      message,
      type,
      read
    )
    values (
      p_pilot_user_id,

      'Certificazione aggiunta',

      'Il Team DroneGuard ha verificato e aggiunto una o più certificazioni al tuo profilo.',

      'certification_approved',

      false
    );
  end if;

  -- =======================================================
  -- AUDIT ATOMICO
  -- =======================================================

  insert into public.admin_audit_log (
    actor_user_id,
    action,
    target_type,
    target_id,
    old_data,
    new_data,
    reason
  )
  values (
    p_actor_user_id,

    'certification.manual_add',

    'user',

    p_pilot_user_id::text,

    jsonb_build_object(
      'pilot_user_id',
        p_pilot_user_id,

      'verified',
        v_old_verified,

      'cert_enac_verified',
        v_old_enac,

      'active_certifications',
        to_jsonb(
          v_active_before
        )
    ),

    jsonb_build_object(
      'pilot_user_id',
        p_pilot_user_id,

      'requested_certifications',
        to_jsonb(
          v_requested
        ),

      'added_certifications',
        to_jsonb(
          v_added
        ),

      'active_certifications',
        to_jsonb(
          v_active_after
        ),

      'verified',
        true,

      'cert_enac_verified',
        true,

      'source',
        'manual_email_review'
    ),

    v_reason
  );

  -- =======================================================
  -- RISULTATO
  -- =======================================================

  return jsonb_build_object(
    'success',
      true,

    'changed',
      true,

    'pilot_user_id',
      p_pilot_user_id,

    'pilot_email',
      v_pilot_email,

    'pilot_name',
      nullif(
        trim(
          concat_ws(
            ' ',
            v_pilot_name,
            v_pilot_surname
          )
        ),
        ''
      ),

    'requested_certifications',
      to_jsonb(
        v_requested
      ),

    'added_certifications',
      to_jsonb(
        v_added
      ),

    'active_certifications',
      to_jsonb(
        v_active_after
      ),

    'verified',
      true,

    'cert_enac_verified',
      true,

    'updated_at',
      v_now
  );
end;
$function$

CREATE OR REPLACE FUNCTION public.prevent_archived_announcement_reopen()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public', 'pg_temp'
AS $function$
begin
  if
    old.status = 'archived'
    and new.status is distinct from 'archived'
  then
    raise exception
      'AVVISO_ARCHIVIATO_NON_MODIFICABILE';
  end if;

  return new;
end;
$function$

CREATE OR REPLACE FUNCTION public.review_certification_request(p_request_id uuid, p_decision text, p_approved_certifications text[] DEFAULT '{}'::text[], p_review_notes text DEFAULT NULL::text, p_rejection_reason text DEFAULT NULL::text, p_actor_user_id uuid DEFAULT NULL::uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public', 'pg_temp'
AS $function$
declare
  v_decision text;
  v_approved text[];
  v_review_notes text;
  v_rejection_reason text;

  v_can_review boolean := false;

  v_request public.certification_requests%rowtype;

  v_user_role text;
  v_user_verified boolean;
  v_user_cert_request_sent boolean;
  v_user_account_status text;

  v_old_a1a3 boolean;
  v_old_a2 boolean;
  v_old_sts boolean;
  v_old_sts01 boolean;
  v_old_sts02 boolean;
  v_old_specific boolean;
  v_old_open boolean;
  v_old_cro boolean;
  v_old_luc boolean;
  v_old_bvlos boolean;
  v_old_notturno boolean;
  v_old_termografia boolean;
  v_old_fpv_racing boolean;
  v_old_enac boolean;

  v_now timestamptz := now();

  v_notification_title text;
  v_notification_message text;
begin
  -- =======================================================
  -- PARAMETRI OBBLIGATORI
  -- =======================================================

  if p_actor_user_id is null then
    raise exception
      'REVISORE_NON_INDICATO';
  end if;

  if p_request_id is null then
    raise exception
      'RICHIESTA_NON_INDICATA';
  end if;

  v_decision :=
    lower(
      trim(
        coalesce(
          p_decision,
          ''
        )
      )
    );

  if v_decision not in (
    'approved',
    'rejected'
  ) then
    raise exception
      'DECISIONE_NON_VALIDA';
  end if;


  -- =======================================================
  -- CONTROLLO PERMESSO TEAM
  -- =======================================================

  select exists (
    select 1
    from public.team_members tm
    join public.team_role_permissions trp
      on trp.role_key = tm.role_key
    where tm.user_id = p_actor_user_id
      and tm.active = true
      and trp.permission_key =
        'certifications.review'
  )
  into v_can_review;

  if not v_can_review then
    raise exception
      'PERMESSO_CERTIFICAZIONI_NEGATO';
  end if;


  -- =======================================================
  -- NORMALIZZAZIONE DATI
  -- =======================================================

  select coalesce(
    array_agg(value order by value),
    '{}'::text[]
  )
  into v_approved
  from (
    select distinct
      lower(trim(item)) as value
    from unnest(
      coalesce(
        p_approved_certifications,
        '{}'::text[]
      )
    ) as item
    where trim(item) <> ''
  ) normalized;


  if not (
    v_approved <@ array[
      'a1a3',
      'a2',
      'sts',
      'sts01',
      'sts02',
      'specific',
      'open',
      'cro',
      'luc',
      'bvlos',
      'notturno',
      'termografia',
      'fpv_racing',
      'enac'
    ]::text[]
  ) then
    raise exception
      'CERTIFICAZIONE_NON_VALIDA';
  end if;


  v_review_notes :=
    nullif(
      trim(
        coalesce(
          p_review_notes,
          ''
        )
      ),
      ''
    );

  v_rejection_reason :=
    nullif(
      trim(
        coalesce(
          p_rejection_reason,
          ''
        )
      ),
      ''
    );


  if
    v_review_notes is not null
    and char_length(v_review_notes) > 2000
  then
    raise exception
      'NOTE_TROPPO_LUNGHE';
  end if;


  if v_decision = 'approved' then
    if coalesce(
      array_length(
        v_approved,
        1
      ),
      0
    ) = 0 then
      raise exception
        'SELEZIONA_ALMENO_UNA_CERTIFICAZIONE';
    end if;

    v_rejection_reason := null;
  end if;


  if v_decision = 'rejected' then
    if
      v_rejection_reason is null
      or char_length(
        v_rejection_reason
      ) < 5
      or char_length(
        v_rejection_reason
      ) > 1000
    then
      raise exception
        'MOTIVAZIONE_RIFIUTO_NON_VALIDA';
    end if;

    v_approved := '{}'::text[];
  end if;


  -- =======================================================
  -- BLOCCO RICHIESTA
  -- =======================================================

  select *
  into v_request
  from public.certification_requests
  where id = p_request_id
  for update;

  if not found then
    raise exception
      'RICHIESTA_NON_TROVATA';
  end if;

  if v_request.status <> 'pending' then
    raise exception
      'RICHIESTA_GIA_REVISIONATA';
  end if;


  -- =======================================================
  -- BLOCCO E LETTURA PROFILO PILOTA
  -- =======================================================

  select
    lower(trim(coalesce(u.role, ''))),
    coalesce(u.verified, false),
    coalesce(u.cert_request_sent, false),
    lower(
      trim(
        coalesce(
          u.account_status,
          'active'
        )
      )
    ),

    coalesce(u.cert_a1a3_verified, false),
    coalesce(u.cert_a2_verified, false),
    coalesce(u.cert_sts_verified, false),
    coalesce(u.cert_sts01_verified, false),
    coalesce(u.cert_sts02_verified, false),
    coalesce(u.cert_specific_verified, false),
    coalesce(u.cert_open_verified, false),
    coalesce(u.cert_cro_verified, false),
    coalesce(u.cert_luc_verified, false),
    coalesce(u.cert_bvlos_verified, false),
    coalesce(u.cert_notturno_verified, false),
    coalesce(u.cert_termografia_verified, false),
    coalesce(u.cert_fpv_racing_verified, false),
    coalesce(u.cert_enac_verified, false)
  into
    v_user_role,
    v_user_verified,
    v_user_cert_request_sent,
    v_user_account_status,

    v_old_a1a3,
    v_old_a2,
    v_old_sts,
    v_old_sts01,
    v_old_sts02,
    v_old_specific,
    v_old_open,
    v_old_cro,
    v_old_luc,
    v_old_bvlos,
    v_old_notturno,
    v_old_termografia,
    v_old_fpv_racing,
    v_old_enac
  from public.users u
  where u.id = v_request.user_id
  for update;

  if not found then
    raise exception
      'PROFILO_PILOTA_NON_TROVATO';
  end if;

  if v_user_role not in (
    'pilot',
    'pilota'
  ) then
    raise exception
      'PROFILO_NON_PILOTA';
  end if;

  if
    v_decision = 'approved'
    and v_user_account_status <> 'active'
  then
    raise exception
      'PROFILO_PILOTA_NON_ATTIVO';
  end if;


  -- =======================================================
  -- AGGIORNAMENTO PROFILO
  --
  -- Le certificazioni già approvate restano attive.
  -- Il rifiuto non rimuove certificazioni precedenti.
  -- =======================================================

  update public.users
  set
    cert_request_sent = false,

    verified =
      case
        when v_decision = 'approved'
          then true
        else coalesce(verified, false)
      end,

    cert_a1a3_verified =
      coalesce(cert_a1a3_verified, false)
      or (
        v_decision = 'approved'
        and 'a1a3' = any(v_approved)
      ),

    cert_a2_verified =
      coalesce(cert_a2_verified, false)
      or (
        v_decision = 'approved'
        and 'a2' = any(v_approved)
      ),

    cert_sts_verified =
      coalesce(cert_sts_verified, false)
      or (
        v_decision = 'approved'
        and 'sts' = any(v_approved)
      ),

    cert_sts01_verified =
      coalesce(cert_sts01_verified, false)
      or (
        v_decision = 'approved'
        and 'sts01' = any(v_approved)
      ),

    cert_sts02_verified =
      coalesce(cert_sts02_verified, false)
      or (
        v_decision = 'approved'
        and 'sts02' = any(v_approved)
      ),

    cert_specific_verified =
      coalesce(cert_specific_verified, false)
      or (
        v_decision = 'approved'
        and 'specific' = any(v_approved)
      ),

    cert_open_verified =
      coalesce(cert_open_verified, false)
      or (
        v_decision = 'approved'
        and 'open' = any(v_approved)
      ),

    cert_cro_verified =
      coalesce(cert_cro_verified, false)
      or (
        v_decision = 'approved'
        and 'cro' = any(v_approved)
      ),

    cert_luc_verified =
      coalesce(cert_luc_verified, false)
      or (
        v_decision = 'approved'
        and 'luc' = any(v_approved)
      ),

    cert_bvlos_verified =
      coalesce(cert_bvlos_verified, false)
      or (
        v_decision = 'approved'
        and 'bvlos' = any(v_approved)
      ),

    cert_notturno_verified =
      coalesce(cert_notturno_verified, false)
      or (
        v_decision = 'approved'
        and 'notturno' = any(v_approved)
      ),

    cert_termografia_verified =
      coalesce(
        cert_termografia_verified,
        false
      )
      or (
        v_decision = 'approved'
        and 'termografia' = any(v_approved)
      ),

    cert_fpv_racing_verified =
      coalesce(
        cert_fpv_racing_verified,
        false
      )
      or (
        v_decision = 'approved'
        and 'fpv_racing' = any(v_approved)
      ),

    /*
     * Indicatore generale:
     * diventa vero quando viene approvata almeno
     * una certificazione della richiesta.
     */
    cert_enac_verified =
      coalesce(cert_enac_verified, false)
      or (
        v_decision = 'approved'
        and coalesce(
          array_length(
            v_approved,
            1
          ),
          0
        ) > 0
      )
  where id = v_request.user_id;


  -- =======================================================
  -- AGGIORNAMENTO RICHIESTA
  -- =======================================================

  update public.certification_requests
  set
    status = v_decision,

    approved_certifications =
      v_approved,

    review_notes =
      v_review_notes,

    rejection_reason =
      case
        when v_decision = 'rejected'
          then v_rejection_reason
        else null
      end,

    reviewed_by =
      p_actor_user_id,

    reviewed_at =
      v_now,

    updated_at =
      v_now
  where id = p_request_id;


  -- =======================================================
  -- NOTIFICA AL PILOTA
  -- =======================================================

  if v_decision = 'approved' then
    v_notification_title :=
      'Certificazione approvata';

    v_notification_message :=
      'Il Team DroneGuard ha verificato e approvato la tua certificazione.';
  else
    v_notification_title :=
      'Certificazione non approvata';

    v_notification_message :=
      format(
        'La richiesta di verifica è stata rifiutata: %s',
        v_rejection_reason
      );
  end if;


  insert into public.notifications (
    user_id,
    title,
    message,
    type,
    read
  )
  values (
    v_request.user_id,
    v_notification_title,
    v_notification_message,
    case
      when v_decision = 'approved'
        then 'certification_approved'
      else 'certification_rejected'
    end,
    false
  );


  -- =======================================================
  -- REGISTRO ATTIVITÀ TEAM
  -- =======================================================

  insert into public.admin_audit_log (
    actor_user_id,
    action,
    target_type,
    target_id,
    old_data,
    new_data,
    reason
  )
  values (
    p_actor_user_id,

    case
      when v_decision = 'approved'
        then 'certification.approved'
      else 'certification.rejected'
    end,

    'certification_request',

    p_request_id::text,

    jsonb_build_object(
      'request_status',
        v_request.status,

      'user_id',
        v_request.user_id,

      'cert_request_sent',
        v_user_cert_request_sent,

      'verified',
        v_user_verified,

      'certifications',
        jsonb_build_object(
          'a1a3', v_old_a1a3,
          'a2', v_old_a2,
          'sts', v_old_sts,
          'sts01', v_old_sts01,
          'sts02', v_old_sts02,
          'specific', v_old_specific,
          'open', v_old_open,
          'cro', v_old_cro,
          'luc', v_old_luc,
          'bvlos', v_old_bvlos,
          'notturno', v_old_notturno,
          'termografia',
            v_old_termografia,
          'fpv_racing',
            v_old_fpv_racing,
          'enac', v_old_enac
        )
    ),

    jsonb_build_object(
      'request_status',
        v_decision,

      'user_id',
        v_request.user_id,

      'approved_certifications',
        to_jsonb(v_approved),

      'cert_request_sent',
        false,

      'verified',
        case
          when v_decision = 'approved'
            then true
          else v_user_verified
        end,

      'review_notes',
        v_review_notes,

      'rejection_reason',
        v_rejection_reason
    ),

    case
      when v_decision = 'rejected'
        then v_rejection_reason
      else coalesce(
        v_review_notes,
        'Certificazione approvata dal Team'
      )
    end
  );


  -- =======================================================
  -- RISULTATO
  -- =======================================================

  return jsonb_build_object(
    'request_id',
      p_request_id,

    'user_id',
      v_request.user_id,

    'status',
      v_decision,

    'approved_certifications',
      to_jsonb(v_approved),

    'reviewed_by',
      p_actor_user_id,

    'reviewed_at',
      v_now
  );
end;
$function$

-- =========================================================
-- Function ownership and EXECUTE privileges
-- =========================================================

alter function public.admin_add_pilot_certifications(
  uuid,
  uuid,
  text[],
  text
) owner to postgres;

revoke all on function public.admin_add_pilot_certifications(
  uuid,
  uuid,
  text[],
  text
) from public, anon, authenticated;

grant execute on function public.admin_add_pilot_certifications(
  uuid,
  uuid,
  text[],
  text
) to service_role;


alter function public.review_certification_request(
  uuid,
  text,
  text[],
  text,
  text,
  uuid
) owner to postgres;

revoke all on function public.review_certification_request(
  uuid,
  text,
  text[],
  text,
  text,
  uuid
) from public, anon, authenticated;

grant execute on function public.review_certification_request(
  uuid,
  text,
  text[],
  text,
  text,
  uuid
) to service_role;


alter function public.prevent_archived_announcement_reopen()
owner to postgres;

revoke all on function public.prevent_archived_announcement_reopen()
from public, anon, authenticated;

grant execute on function public.prevent_archived_announcement_reopen()
to service_role;


-- =========================================================
-- Archived announcements cannot be reopened
-- =========================================================

drop trigger if exists prevent_archived_announcement_reopen
on public.announcements;

create trigger prevent_archived_announcement_reopen
before update of status
on public.announcements
for each row
execute function public.prevent_archived_announcement_reopen();


-- =========================================================
-- Certification document Storage hardening
-- =========================================================

drop policy if exists
"block direct certification document uploads"
on storage.objects;

create policy
"block direct certification document uploads"
on storage.objects
as restrictive
for insert
to authenticated
with check (
  bucket_id <> 'certification-documents'
);


-- =========================================================
-- Certification request concurrency / path integrity
-- =========================================================

create unique index if not exists
certification_requests_pending_user_unique
on public.certification_requests (user_id)
where status = 'pending';

create unique index if not exists
certification_requests_storage_path_unique
on public.certification_requests (storage_path);


commit;
