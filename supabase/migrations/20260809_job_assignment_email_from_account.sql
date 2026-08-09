begin;

do $$
begin
  if to_regprocedure(
    'public.save_job_assignment_details_internal(uuid,uuid,text,text,text,text,text,text,text,boolean,boolean,boolean,boolean,boolean)'
  ) is null then
    alter function public.save_job_assignment_details(
      uuid,uuid,text,text,text,text,text,text,text,
      boolean,boolean,boolean,boolean,boolean
    )
    rename to save_job_assignment_details_internal;
  end if;
end;
$$;

revoke all
on function public.save_job_assignment_details_internal(
  uuid,uuid,text,text,text,text,text,text,text,
  boolean,boolean,boolean,boolean,boolean
)
from public, anon, authenticated;

grant execute
on function public.save_job_assignment_details_internal(
  uuid,uuid,text,text,text,text,text,text,text,
  boolean,boolean,boolean,boolean,boolean
)
to service_role;

create or replace function public.save_job_assignment_details(
  p_job_id uuid,
  p_pilot_id uuid,
  p_exact_location text,
  p_meeting_point text,
  p_phone text,
  p_email text,
  p_arrival_time text default '',
  p_priority text default 'normal',
  p_notes text default '',
  p_has_authorization boolean default false,
  p_has_parking boolean default false,
  p_has_power boolean default false,
  p_urban_flight boolean default false,
  p_people_present boolean default false
)
returns uuid
language plpgsql
security definer
set search_path to 'public','auth','pg_temp'
as $function$
declare
  v_user_id uuid := auth.uid();
  v_account_email text;
begin
  if v_user_id is null then
    raise exception 'UTENTE_NON_AUTENTICATO'
      using errcode = '42501';
  end if;

  select lower(trim(coalesce(u.email,'')))
  into v_account_email
  from auth.users u
  where u.id = v_user_id;

  if coalesce(v_account_email,'') = '' then
    raise exception 'EMAIL_ACCOUNT_NON_DISPONIBILE'
      using errcode = 'P0001';
  end if;

  return public.save_job_assignment_details_internal(
    p_job_id => p_job_id,
    p_pilot_id => p_pilot_id,
    p_exact_location => p_exact_location,
    p_meeting_point => p_meeting_point,
    p_phone => p_phone,
    p_email => v_account_email,
    p_arrival_time => p_arrival_time,
    p_priority => p_priority,
    p_notes => p_notes,
    p_has_authorization => p_has_authorization,
    p_has_parking => p_has_parking,
    p_has_power => p_has_power,
    p_urban_flight => p_urban_flight,
    p_people_present => p_people_present
  );
end;
$function$;

revoke all
on function public.save_job_assignment_details(
  uuid,uuid,text,text,text,text,text,text,text,
  boolean,boolean,boolean,boolean,boolean
)
from public, anon;

grant execute
on function public.save_job_assignment_details(
  uuid,uuid,text,text,text,text,text,text,text,
  boolean,boolean,boolean,boolean,boolean
)
to authenticated, service_role;

commit;
