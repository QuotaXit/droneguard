begin;

-- =========================================================
-- FUNZIONE 9 — DOCUMENTI CONDIVISI DEL LAVORO
-- Bucket privato + metadata server-side
-- =========================================================

-- =========================================================
-- 1. TABELLA METADATI
-- =========================================================

create table if not exists
public.job_documents (

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

  uploaded_by uuid
    not null
    references public.users(id)
    on delete restrict,

  original_filename text
    not null,

  storage_bucket text
    not null
    default 'job-documents',

  storage_path text
    not null
    unique,

  mime_type text
    not null,

  file_size bigint
    not null,

  note text
    null,

  created_at timestamptz
    not null
    default now(),

  constraint
    job_documents_filename_length_check
    check (
      char_length(original_filename)
      between 1 and 255
    ),

  constraint
    job_documents_storage_bucket_check
    check (
      storage_bucket =
        'job-documents'
    ),

  constraint
    job_documents_storage_path_length_check
    check (
      char_length(storage_path)
      between 1 and 1000
    ),

  constraint
    job_documents_mime_type_check
    check (
      mime_type in (
        'image/jpeg',
        'image/png',
        'image/webp',
        'application/pdf'
      )
    ),

  constraint
    job_documents_file_size_check
    check (
      file_size > 0
      and file_size <=
        4 * 1024 * 1024
    ),

  constraint
    job_documents_note_length_check
    check (
      note is null
      or char_length(note) <= 1000
    )
);


-- =========================================================
-- 2. INDICI
-- =========================================================

create index if not exists
  job_documents_job_created_idx

on public.job_documents (
  job_id,
  created_at desc
);


create index if not exists
  job_documents_assignment_created_idx

on public.job_documents (
  assignment_id,
  created_at desc
);


create index if not exists
  job_documents_uploaded_by_idx

on public.job_documents (
  uploaded_by,
  created_at desc
);


-- =========================================================
-- 3. RLS METADATI
--
-- Il browser NON accede direttamente alla tabella.
-- Tutte le operazioni passano dall'API server-side.
-- =========================================================

alter table
  public.job_documents
enable row level security;


revoke all
on table
  public.job_documents
from
  public,
  anon,
  authenticated;


grant all
on table
  public.job_documents
to service_role;


-- Nessuna policy authenticated:
-- anche con RLS attivo il browser non può leggere,
-- inserire, modificare o eliminare metadata direttamente.


-- =========================================================
-- 4. BUCKET PRIVATO
-- =========================================================

insert into storage.buckets (
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
)

values (
  'job-documents',
  'job-documents',
  false,
  4 * 1024 * 1024,
  array[
    'image/jpeg',
    'image/png',
    'image/webp',
    'application/pdf'
  ]::text[]
)

on conflict (id)
do update set

  name =
    excluded.name,

  public =
    false,

  file_size_limit =
    4 * 1024 * 1024,

  allowed_mime_types =
    array[
      'image/jpeg',
      'image/png',
      'image/webp',
      'application/pdf'
    ]::text[];


-- =========================================================
-- 5. BLOCCO UPLOAD DIRETTO DAL BROWSER
--
-- Nel database esiste già una policy permissiva per INSERT
-- che impedisce certification-documents ma consentirebbe
-- altri bucket.
--
-- Questa policy RESTRICTIVE garantisce che authenticated
-- non possa caricare direttamente nel nuovo bucket.
--
-- L'API usa service_role e quindi gestisce l'upload
-- server-side.
-- =========================================================

drop policy if exists
  "Job documents block direct upload"
on storage.objects;


create policy
  "Job documents block direct upload"

on storage.objects

as restrictive

for insert

to authenticated

with check (
  bucket_id <>
    'job-documents'
);


commit;
