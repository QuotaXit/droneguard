-- =========================================================
-- AVATAR STORAGE HARDENING
-- Versiona le policy e i limiti già applicati al database live.
-- =========================================================

begin;

-- =========================================================
-- RIMUOVE LE POLICY AVATAR PRECEDENTI E L'UPLOAD GLOBALE
-- =========================================================

drop policy if exists
"Avatar public"
on storage.objects;

drop policy if exists
"Avatar upload"
on storage.objects;

drop policy if exists
"Avatar update"
on storage.objects;

drop policy if exists
"allow upload"
on storage.objects;


-- =========================================================
-- SELECT PROPRI AVATAR
-- Il bucket resta pubblico per il serving tramite URL.
-- =========================================================

create policy
"Avatar own select"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'avatars'
  and owner_id =
    (select auth.uid()::text)
);


-- =========================================================
-- INSERT SOLO PROPRI AVATAR
-- =========================================================

create policy
"Avatar own upload"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'avatars'
  and owner_id =
    (select auth.uid()::text)
);


-- =========================================================
-- UPDATE SOLO PROPRI AVATAR
-- Necessario per gli upload con upsert: true.
-- =========================================================

create policy
"Avatar own update"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'avatars'
  and owner_id =
    (select auth.uid()::text)
)
with check (
  bucket_id = 'avatars'
  and owner_id =
    (select auth.uid()::text)
);


-- =========================================================
-- HARDENING BUCKET AVATARS
-- 5 MB + MIME CONSENTITI
-- =========================================================

update storage.buckets
set
  file_size_limit =
    5 * 1024 * 1024,

  allowed_mime_types =
    array[
      'image/jpeg',
      'image/png',
      'image/webp'
    ]::text[],

  updated_at =
    now()

where id = 'avatars';

commit;
