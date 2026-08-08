-- =========================================================
-- ADMIN MANAGE JOB HARDENING
-- Versiona la definizione live già applicata su Supabase.
-- =========================================================

CREATE OR REPLACE FUNCTION public.admin_manage_job(p_actor_user_id uuid, p_action text, p_job_id uuid, p_title text DEFAULT NULL::text, p_description text DEFAULT NULL::text, p_location text DEFAULT NULL::text, p_job_date date DEFAULT NULL::date, p_reason text DEFAULT NULL::text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public', 'pg_temp'
AS $function$
declare
  v_action text;
  v_required_permission text;
  v_reason text;

  v_old public.jobs%rowtype;
  v_new public.jobs%rowtype;

  v_old_status text;

  v_title text;
  v_description text;
  v_location text;

  v_client_id uuid;
  v_pilot_id uuid;

  v_client_account_status text;
  v_client_banned boolean;

  v_updated_applications integer := 0;
  v_updated_assignments integer := 0;
  v_updated_conversations integer := 0;
begin
  -- =======================================================
  -- 1. PARAMETRI OBBLIGATORI
  -- =======================================================

  if p_actor_user_id is null then
    raise exception
      'OPERATORE_TEAM_MANCANTE';
  end if;

  if p_job_id is null then
    raise exception
      'LAVORO_NON_INDICATO';
  end if;

  v_action :=
    lower(
      trim(
        coalesce(
          p_action,
          ''
        )
      )
    );

  if v_action not in (
    'update',
    'cancel',
    'reopen'
  ) then
    raise exception
      'AZIONE_LAVORO_NON_VALIDA';
  end if;

  v_required_permission :=
    case v_action
      when 'update'
        then 'jobs.update'
      when 'cancel'
        then 'jobs.close'
      when 'reopen'
        then 'jobs.reopen'
    end;


  -- =======================================================
  -- 2. AUTORIZZAZIONE TEAM
  -- =======================================================

  if not exists (
    select 1
    from public.team_members team_member
    where team_member.user_id =
      p_actor_user_id
      and team_member.active = true
      and (
        team_member.role_key = 'owner'

        or exists (
          select 1
          from public.team_role_permissions
            role_permission
          where role_permission.role_key =
            team_member.role_key
            and role_permission.permission_key =
              v_required_permission
        )
      )
  ) then
    raise exception
      'OPERATORE_NON_AUTORIZZATO';
  end if;


  -- =======================================================
  -- 3. MOTIVAZIONE
  -- =======================================================

  v_reason :=
    trim(
      coalesce(
        p_reason,
        ''
      )
    );

  if char_length(v_reason)
    not between 10 and 500
  then
    raise exception
      'MOTIVAZIONE_NON_VALIDA';
  end if;


  -- =======================================================
  -- 4. BLOCCO DEL LAVORO
  -- =======================================================

  select *
  into v_old
  from public.jobs
  where id = p_job_id
  for update;

  if not found then
    raise exception
      'LAVORO_NON_TROVATO';
  end if;

  v_old_status :=
    lower(
      trim(
        coalesce(
          v_old.status,
          ''
        )
      )
    );

  v_client_id :=
    v_old.user_id;

  v_pilot_id :=
    coalesce(
      v_old.assigned_pilot,
      v_old.pilot_id
    );


  -- =======================================================
  -- 5. MODIFICA LAVORO
  -- =======================================================

  if v_action = 'update' then
    if v_old_status not in (
      'open',
      'assigned'
    ) then
      raise exception
        'LAVORO_NON_MODIFICABILE';
    end if;

    v_title :=
      regexp_replace(
        trim(
          coalesce(
            p_title,
            ''
          )
        ),
        '[[:space:]]+',
        ' ',
        'g'
      );

    v_description :=
      trim(
        coalesce(
          p_description,
          ''
        )
      );

    v_location :=
      regexp_replace(
        trim(
          coalesce(
            p_location,
            ''
          )
        ),
        '[[:space:]]+',
        ' ',
        'g'
      );

    if char_length(v_title)
      not between 3 and 150
    then
      raise exception
        'TITOLO_LAVORO_NON_VALIDO';
    end if;

    if char_length(v_description)
      not between 5 and 5000
    then
      raise exception
        'DESCRIZIONE_LAVORO_NON_VALIDA';
    end if;

    if char_length(v_location)
      not between 2 and 500
    then
      raise exception
        'LOCALITA_LAVORO_NON_VALIDA';
    end if;

    if p_job_date is null then
      raise exception
        'DATA_LAVORO_OBBLIGATORIA';
    end if;

    /*
     * Una vecchia data può restare invariata.
     * Una nuova data non può essere nel passato.
     */
    if
      p_job_date is distinct from
        v_old.job_date
      and p_job_date <
        (
          now() at time zone
          'Europe/Rome'
        )::date
    then
      raise exception
        'DATA_LAVORO_NEL_PASSATO';
    end if;

    if
      v_old.title
        is not distinct from v_title
      and v_old.description
        is not distinct from v_description
      and v_old.location
        is not distinct from v_location
      and v_old.job_date
        is not distinct from p_job_date
    then
      return jsonb_build_object(
        'success', true,
        'action', 'update',
        'job_id', p_job_id,
        'status', v_old.status,
        'already_processed', true
      );
    end if;

    update public.jobs
    set
      title = v_title,
      description = v_description,
      location = v_location,
      job_date = p_job_date
    where id = p_job_id
    returning *
    into v_new;


    if
      v_client_id is not null
      and exists (
        select 1
        from public.users
        where id = v_client_id
      )
    then
      insert into public.notifications (
        user_id,
        title,
        message,
        type,
        read
      )
      values (
        v_client_id,
        'Lavoro aggiornato dal Team',
        format(
          'Il Team DroneGuard ha aggiornato il lavoro "%s".',
          coalesce(
            nullif(
              trim(v_new.title),
              ''
            ),
            'senza titolo'
          )
        ),
        'admin_job_updated',
        false
      );
    end if;


    if
      v_pilot_id is not null
      and v_pilot_id is distinct from
        v_client_id
      and exists (
        select 1
        from public.users
        where id = v_pilot_id
      )
    then
      insert into public.notifications (
        user_id,
        title,
        message,
        type,
        read
      )
      values (
        v_pilot_id,
        'Lavoro aggiornato dal Team',
        format(
          'Il Team DroneGuard ha aggiornato il lavoro "%s".',
          coalesce(
            nullif(
              trim(v_new.title),
              ''
            ),
            'assegnato'
          )
        ),
        'admin_job_updated',
        false
      );
    end if;
  end if;


  -- =======================================================
  -- 6. CHIUSURA / ANNULLAMENTO
  -- =======================================================

  if v_action = 'cancel' then
    if v_old_status = 'cancelled' then
      return jsonb_build_object(
        'success', true,
        'action', 'cancel',
        'job_id', p_job_id,
        'status', 'cancelled',
        'already_processed', true
      );
    end if;

    if v_old_status = 'completed' then
      raise exception
        'LAVORO_COMPLETATO_NON_ANNULLABILE';
    end if;

    if v_old_status not in (
      'open',
      'assigned'
    ) then
      raise exception
        'LAVORO_NON_ANNULLABILE';
    end if;

    /*
     * Una conferma di completamento già presente
     * impedisce la chiusura amministrativa ordinaria.
     */
    if
      v_old.pilot_completed_at is not null
      or v_old.client_completed_at is not null
    then
      raise exception
        'LAVORO_IN_ATTESA_DI_COMPLETAMENTO';
    end if;

    if exists (
      select 1
      from public.applications application
      where application.job_id =
        p_job_id
        and lower(
          trim(
            coalesce(
              application.status,
              ''
            )
          )
        ) = 'completed'
    )
    or exists (
      select 1
      from public.job_assignments assignment
      where assignment.job_id =
        p_job_id
        and lower(
          trim(
            coalesce(
              assignment.status,
              ''
            )
          )
        ) = 'completed'
    )
    then
      raise exception
        'DATI_COMPLETAMENTO_INCOERENTI';
    end if;


    update public.conversations
    set status = 'closed'
    where job_id = p_job_id
      and status is distinct from
        'closed';

    get diagnostics
      v_updated_conversations =
        row_count;


    update public.applications
    set status = 'cancelled'
    where job_id = p_job_id
      and lower(
        trim(
          coalesce(
            status,
            ''
          )
        )
      ) not in (
        'completed',
        'cancelled'
      );

    get diagnostics
      v_updated_applications =
        row_count;


    update public.job_assignments
    set status = 'cancelled'
    where job_id = p_job_id
      and lower(
        trim(
          coalesce(
            status,
            ''
          )
        )
      ) not in (
        'completed',
        'cancelled'
      );

    get diagnostics
      v_updated_assignments =
        row_count;


    update public.jobs
    set status = 'cancelled'
    where id = p_job_id
    returning *
    into v_new;


    if
      v_client_id is not null
      and exists (
        select 1
        from public.users
        where id = v_client_id
      )
    then
      insert into public.notifications (
        user_id,
        title,
        message,
        type,
        read
      )
      values (
        v_client_id,
        'Lavoro chiuso dal Team',
        format(
          'Il Team DroneGuard ha chiuso il lavoro "%s".',
          coalesce(
            nullif(
              trim(v_new.title),
              ''
            ),
            'senza titolo'
          )
        ),
        'admin_job_cancelled',
        false
      );
    end if;


    if
      v_pilot_id is not null
      and v_pilot_id is distinct from
        v_client_id
      and exists (
        select 1
        from public.users
        where id = v_pilot_id
      )
    then
      insert into public.notifications (
        user_id,
        title,
        message,
        type,
        read
      )
      values (
        v_pilot_id,
        'Lavoro chiuso dal Team',
        format(
          'Il Team DroneGuard ha chiuso il lavoro "%s".',
          coalesce(
            nullif(
              trim(v_new.title),
              ''
            ),
            'assegnato'
          )
        ),
        'admin_job_cancelled',
        false
      );
    end if;
  end if;


  -- =======================================================
  -- 7. RIAPERTURA
  -- =======================================================

  if v_action = 'reopen' then
    if v_old_status = 'open' then
      return jsonb_build_object(
        'success', true,
        'action', 'reopen',
        'job_id', p_job_id,
        'status', 'open',
        'already_processed', true
      );
    end if;

    if v_old_status <> 'cancelled' then
      raise exception
        'SOLO_I_LAVORI_ANNULLATI_POSSONO_ESSERE_RIAPERTI';
    end if;

    if v_client_id is null then
      raise exception
        'CLIENTE_LAVORO_NON_TROVATO';
    end if;

    select
      lower(
        trim(
          coalesce(
            account_status,
            'active'
          )
        )
      ),
      coalesce(
        banned,
        false
      )
    into
      v_client_account_status,
      v_client_banned
    from public.users
    where id = v_client_id;

    if not found then
      raise exception
        'PROFILO_CLIENTE_NON_TROVATO';
    end if;

    if v_client_account_status <> 'active' then
      raise exception
        'CLIENTE_DISATTIVATO';
    end if;

    if v_client_banned then
      raise exception
        'CLIENTE_SOSPESO';
    end if;

    if exists (
      select 1
      from public.applications application
      where application.job_id =
        p_job_id
        and lower(
          trim(
            coalesce(
              application.status,
              ''
            )
          )
        ) = 'completed'
    )
    or exists (
      select 1
      from public.job_assignments assignment
      where assignment.job_id =
        p_job_id
        and lower(
          trim(
            coalesce(
              assignment.status,
              ''
            )
          )
        ) = 'completed'
    )
    then
      raise exception
        'LAVORO_CON_STORICO_COMPLETATO_NON_RIAPRIBILE';
    end if;


    /*
     * Le vecchie conversazioni restano conservate,
     * ma vengono scollegate dal lavoro riaperto.
     */
    update public.conversations
    set
      status = 'closed',
      job_id = null
    where job_id = p_job_id;

    get diagnostics
      v_updated_conversations =
        row_count;


    /*
     * Le candidature precedenti tornano pendenti.
     */
    update public.applications application
    set
      status = 'pending',
      conversation_id = null,
      completed_at = null
    where application.job_id = p_job_id
      and lower(
        trim(
          coalesce(
            application.status,
            ''
          )
        )
      ) = 'cancelled'
      and exists (
        select 1
        from public.users pilot
        where pilot.id =
          coalesce(
            application.pilot_id,
            application.user_id
          )
          and lower(
            trim(
              coalesce(
                pilot.account_status,
                'active'
              )
            )
          ) = 'active'
          and coalesce(
            pilot.banned,
            false
          ) = false
      );

    get diagnostics
      v_updated_applications =
        row_count;


    /*
     * L’eventuale assegnazione precedente viene
     * conservata ma ripulita dai dati operativi.
     */
    update public.job_assignments
    set
      status = 'cancelled',
      meeting_point = null,
      exact_location = null,
      phone = null,
      email = null,
      arrival_time = null,
      notes = null,
      has_authorization = false,
      has_parking = false,
      has_power = false,
      urban_flight = false,
      people_present = false,
      completed_at = null
    where job_id = p_job_id;

    get diagnostics
      v_updated_assignments =
        row_count;


    update public.jobs
    set
      status = 'open',
      pilot_id = null,
      assigned_pilot = null,
      conversation_id = null,
      assigned_at = null,
      completed_at = null,
      pilot_completed_at = null,
      client_completed_at = null
    where id = p_job_id
    returning *
    into v_new;


    insert into public.notifications (
      user_id,
      title,
      message,
      type,
      read
    )
    values (
      v_client_id,
      'Lavoro riaperto dal Team',
      format(
        'Il Team DroneGuard ha riaperto il lavoro "%s".',
        coalesce(
          nullif(
            trim(v_new.title),
            ''
          ),
          'senza titolo'
        )
      ),
      'admin_job_reopened',
      false
    );


    /*
     * Avvisa i piloti le cui candidature
     * sono state ripristinate.
     */
    insert into public.notifications (
      user_id,
      title,
      message,
      type,
      read
    )
    select distinct
      coalesce(
        application.pilot_id,
        application.user_id
      ),
      'Lavoro riaperto',
      format(
        'Il lavoro "%s" è stato riaperto e la tua candidatura è nuovamente in attesa.',
        coalesce(
          nullif(
            trim(v_new.title),
            ''
          ),
          'senza titolo'
        )
      ),
      'job_reopened',
      false
    from public.applications application
    join public.users pilot
      on pilot.id = coalesce(
        application.pilot_id,
        application.user_id
      )
    where application.job_id =
      p_job_id
      and application.status =
        'pending'
      and pilot.id is distinct from
        v_client_id;
  end if;


  -- =======================================================
  -- 8. AUDIT AMMINISTRATIVO
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

    case v_action
      when 'update'
        then 'jobs.update'
      when 'cancel'
        then 'jobs.close'
      when 'reopen'
        then 'jobs.reopen'
    end,

    'job',
    p_job_id::text,

    jsonb_build_object(
      'title', v_old.title,
      'description', v_old.description,
      'location', v_old.location,
      'job_date', v_old.job_date,
      'status', v_old.status,
      'client_id', v_old.user_id,
      'pilot_id',
        coalesce(
          v_old.assigned_pilot,
          v_old.pilot_id
        )
    ),

    jsonb_build_object(
      'title', v_new.title,
      'description', v_new.description,
      'location', v_new.location,
      'job_date', v_new.job_date,
      'status', v_new.status,
      'client_id', v_new.user_id,
      'pilot_id',
        coalesce(
          v_new.assigned_pilot,
          v_new.pilot_id
        ),
      'updated_applications',
        v_updated_applications,
      'updated_assignments',
        v_updated_assignments,
      'updated_conversations',
        v_updated_conversations
    ),

    v_reason
  );


  -- =======================================================
  -- 9. RISULTATO
  -- =======================================================

  return jsonb_build_object(
    'success', true,
    'action', v_action,
    'job_id', p_job_id,
    'status', v_new.status,
    'title', v_new.title,
    'description', v_new.description,
    'location', v_new.location,
    'job_date', v_new.job_date,
    'updated_applications',
      v_updated_applications,
    'updated_assignments',
      v_updated_assignments,
    'updated_conversations',
      v_updated_conversations,
    'already_processed', false
  );
end;
$function$;

-- =========================================================
-- OWNERSHIP / PRIVILEGI
-- =========================================================

alter function public.admin_manage_job(
  uuid,
  text,
  uuid,
  text,
  text,
  text,
  date,
  text
)
owner to postgres;

revoke all
on function public.admin_manage_job(
  uuid,
  text,
  uuid,
  text,
  text,
  text,
  date,
  text
)
from public, anon, authenticated;

grant execute
on function public.admin_manage_job(
  uuid,
  text,
  uuid,
  text,
  text,
  text,
  date,
  text
)
to service_role;
