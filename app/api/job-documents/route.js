import { randomUUID } from "node:crypto"

import { NextResponse } from "next/server"

import {
  createServerSupabaseClient
} from "@/lib/supabase/server"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const BUCKET_NAME =
  "job-documents"

const MAX_FILE_SIZE =
  4 * 1024 * 1024

const SIGNED_URL_SECONDS =
  5 * 60

const MAX_DOCUMENTS_PER_JOB =
  20

const ACTIVE_JOB_STATUSES =
  new Set([
    "assigned",
    "in_progress",
    "active"
  ])

const ACTIVE_ASSIGNMENT_STATUSES =
  new Set([
    "assigned",
    "accepted",
    "active",
    "in_progress",
    "details_sent"
  ])

const ALLOWED_TYPES =
  new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
    "application/pdf"
  ])

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i


function noStoreHeaders() {
  return {
    "Cache-Control":
      "private, no-store, max-age=0"
  }
}


function jsonError(
  message,
  status = 400
) {
  return NextResponse.json(
    {
      success: false,
      error: message
    },
    {
      status,
      headers:
        noStoreHeaders()
    }
  )
}


function jsonSuccess(
  payload,
  status = 200
) {
  return NextResponse.json(
    {
      success: true,
      ...payload
    },
    {
      status,
      headers:
        noStoreHeaders()
    }
  )
}


function normalizeRole(value) {
  const role =
    String(value || "")
      .trim()
      .toLowerCase()

  if (
    role === "pilot" ||
    role === "pilota"
  ) {
    return "pilot"
  }

  if (
    role === "client" ||
    role === "cliente"
  ) {
    return "client"
  }

  return role
}


function normalizeStatus(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
}


function cleanNote(value) {
  const note =
    String(value || "")
      .replace(/\u0000/g, "")
      .trim()

  if (!note) {
    return null
  }

  return note
}


function cleanDisplayFilename(value) {
  const filename =
    String(value || "documento")
      .replace(
        /[\u0000-\u001F\u007F]/g,
        " "
      )
      .replace(/[\\/]+/g, "-")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 255)

  return filename || "documento"
}


function sanitizeStorageFilename(value) {
  const original =
    String(value || "documento")
      .trim()
      .slice(0, 200)

  const cleaned =
    original
      .normalize("NFKD")
      .replace(/[^\w.\-]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^\.+/, "")
      .replace(
        /^[-_]+|[-_]+$/g,
        ""
      )

  return cleaned || "documento"
}


function bytesStartWith(
  bytes,
  signature
) {
  if (
    bytes.length <
    signature.length
  ) {
    return false
  }

  return signature.every(
    (value, index) =>
      bytes[index] === value
  )
}


function hasAllowedSignature(
  bytes,
  mimeType
) {
  if (
    mimeType ===
    "image/jpeg"
  ) {
    return bytesStartWith(
      bytes,
      [
        0xff,
        0xd8,
        0xff
      ]
    )
  }

  if (
    mimeType ===
    "image/png"
  ) {
    return bytesStartWith(
      bytes,
      [
        0x89,
        0x50,
        0x4e,
        0x47,
        0x0d,
        0x0a,
        0x1a,
        0x0a
      ]
    )
  }

  if (
    mimeType ===
    "image/webp"
  ) {
    const riff =
      String.fromCharCode(
        ...bytes.slice(0, 4)
      ) === "RIFF"

    const webp =
      String.fromCharCode(
        ...bytes.slice(8, 12)
      ) === "WEBP"

    return riff && webp
  }

  if (
    mimeType ===
    "application/pdf"
  ) {
    return (
      String.fromCharCode(
        ...bytes.slice(0, 5)
      ) === "%PDF-"
    )
  }

  return false
}


function rejectCrossOrigin(
  request
) {
  const origin =
    request.headers.get("origin")

  if (
    !origin ||
    origin !==
      request.nextUrl.origin
  ) {
    return jsonError(
      "Origine della richiesta non autorizzata.",
      403
    )
  }

  return null
}


async function getAuthenticatedUser() {
  const supabase =
    await createServerSupabaseClient()

  const {
    data: { user },
    error
  } =
    await supabase.auth.getUser()

  if (
    error ||
    !user
  ) {
    return {
      user: null
    }
  }

  return {
    user
  }
}


async function getAuthorizedJobContext({
  adminSupabase,
  userId,
  jobId
}) {
  const {
    data: profile,
    error: profileError
  } =
    await adminSupabase
      .from("users")
      .select(`
        id,
        role,
        banned,
        account_status
      `)
      .eq(
        "id",
        userId
      )
      .maybeSingle()

  if (
    profileError ||
    !profile
  ) {
    return {
      error:
        jsonError(
          "Profilo utente non trovato.",
          404
        )
    }
  }

  const role =
    normalizeRole(
      profile.role
    )

  if (
    role !== "client" &&
    role !== "pilot"
  ) {
    return {
      error:
        jsonError(
          "Ruolo non autorizzato.",
          403
        )
    }
  }

  if (
    profile.banned === true ||
    normalizeStatus(
      profile.account_status ||
        "active"
    ) !== "active"
  ) {
    return {
      error:
        jsonError(
          "Il tuo account non è attivo.",
          403
        )
    }
  }

  const {
    data: job,
    error: jobError
  } =
    await adminSupabase
      .from("jobs")
      .select(`
        id,
        user_id,
        title,
        status,
        assigned_pilot,
        pilot_id
      `)
      .eq(
        "id",
        jobId
      )
      .maybeSingle()

  if (
    jobError ||
    !job
  ) {
    return {
      error:
        jsonError(
          "Lavoro non trovato.",
          404
        )
    }
  }

  if (
    !ACTIVE_JOB_STATUSES.has(
      normalizeStatus(
        job.status
      )
    )
  ) {
    return {
      error:
        jsonError(
          "I documenti condivisi non sono disponibili per questo lavoro.",
          409
        )
    }
  }

  const pilotId =
    job.assigned_pilot ||
    job.pilot_id ||
    null

  const clientId =
    job.user_id ||
    null

  if (
    !clientId ||
    !pilotId
  ) {
    return {
      error:
        jsonError(
          "Assegnazione del lavoro incompleta.",
          409
        )
    }
  }

  let participantRole =
    null

  let otherUserId =
    null

  if (
    userId === clientId &&
    role === "client"
  ) {
    participantRole =
      "client"

    otherUserId =
      pilotId
  } else if (
    userId === pilotId &&
    role === "pilot"
  ) {
    participantRole =
      "pilot"

    otherUserId =
      clientId
  } else {
    return {
      error:
        jsonError(
          "Non sei autorizzato ad accedere ai documenti di questo lavoro.",
          403
        )
    }
  }

  const {
    data: assignment,
    error: assignmentError
  } =
    await adminSupabase
      .from(
        "job_assignments"
      )
      .select(`
        id,
        job_id,
        pilot_id,
        client_id,
        status,
        created_at
      `)
      .eq(
        "job_id",
        jobId
      )
      .eq(
        "pilot_id",
        pilotId
      )
      .order(
        "created_at",
        {
          ascending: false
        }
      )
      .limit(1)
      .maybeSingle()

  if (
    assignmentError ||
    !assignment
  ) {
    return {
      error:
        jsonError(
          "Assegnazione del lavoro non trovata.",
          404
        )
    }
  }

  if (
    assignment.client_id &&
    assignment.client_id !==
      clientId
  ) {
    return {
      error:
        jsonError(
          "I dati dell'assegnazione non sono coerenti.",
          409
        )
    }
  }

  if (
    !ACTIVE_ASSIGNMENT_STATUSES.has(
      normalizeStatus(
        assignment.status
      )
    )
  ) {
    return {
      error:
        jsonError(
          "I documenti condivisi non sono disponibili per questa assegnazione.",
          409
        )
    }
  }

  return {
    profile,
    job,
    assignment,
    clientId,
    pilotId,
    participantRole,
    otherUserId
  }
}


async function createSignedDocument(
  adminSupabase,
  document,
  context,
  currentUserId
) {
  const {
    data,
    error
  } =
    await adminSupabase
      .storage
      .from(
        BUCKET_NAME
      )
      .createSignedUrl(
        document.storage_path,
        SIGNED_URL_SECONDS
      )

  if (
    error ||
    !data?.signedUrl
  ) {
    console.error(
      "[job-documents] signed URL failed:",
      error
    )

    throw new Error(
      "SIGNED_URL_FAILED"
    )
  }

  const uploaderRole =
    document.uploaded_by ===
      context.clientId
      ? "client"
      : document.uploaded_by ===
          context.pilotId
        ? "pilot"
        : "unknown"

  return {
    id:
      document.id,

    jobId:
      document.job_id,

    assignmentId:
      document.assignment_id,

    uploadedBy:
      document.uploaded_by,

    uploadedByRole:
      uploaderRole,

    originalFilename:
      document.original_filename,

    mimeType:
      document.mime_type,

    fileSize:
      Number(
        document.file_size || 0
      ),

    note:
      document.note || null,

    createdAt:
      document.created_at,

    signedUrl:
      data.signedUrl,

    signedUrlExpiresIn:
      SIGNED_URL_SECONDS,

    canDelete:
      document.uploaded_by ===
        currentUserId
  }
}


async function removeStoredFile(
  adminSupabase,
  storagePath
) {
  if (!storagePath) {
    return true
  }

  const {
    error
  } =
    await adminSupabase
      .storage
      .from(
        BUCKET_NAME
      )
      .remove([
        storagePath
      ])

  if (error) {
    console.error(
      "[job-documents] storage cleanup failed:",
      error
    )

    return false
  }

  return true
}


export async function GET(
  request
) {
  try {
    const {
      user
    } =
      await getAuthenticatedUser()

    if (!user) {
      return jsonError(
        "Devi effettuare l'accesso.",
        401
      )
    }

    const jobId =
      String(
        request.nextUrl
          .searchParams
          .get("jobId") ||
          ""
      ).trim()

    if (
      !UUID_PATTERN.test(
        jobId
      )
    ) {
      return jsonError(
        "Identificativo lavoro non valido."
      )
    }

    const adminSupabase =
      createAdminSupabaseClient()

    const context =
      await getAuthorizedJobContext({
        adminSupabase,
        userId:
          user.id,
        jobId
      })

    if (context.error) {
      return context.error
    }

    const {
      data: documents,
      error
    } =
      await adminSupabase
        .from(
          "job_documents"
        )
        .select(`
          id,
          job_id,
          assignment_id,
          uploaded_by,
          original_filename,
          storage_path,
          mime_type,
          file_size,
          note,
          created_at
        `)
        .eq(
          "job_id",
          jobId
        )
        .eq(
          "assignment_id",
          context.assignment.id
        )
        .order(
          "created_at",
          {
            ascending: false
          }
        )

    if (error) {
      console.error(
        "[job-documents] list failed:",
        error
      )

      return jsonError(
        "Impossibile caricare i documenti.",
        500
      )
    }

    let mappedDocuments

    try {
      mappedDocuments =
        await Promise.all(
          (documents || []).map(
            (document) =>
              createSignedDocument(
                adminSupabase,
                document,
                context,
                user.id
              )
          )
        )
    } catch (error) {
      console.error(
        "[job-documents] signed URLs generation failed:",
        error
      )

      return jsonError(
        "Impossibile preparare l'accesso sicuro ai documenti.",
        500
      )
    }

    return jsonSuccess({
      jobId,
      assignmentId:
        context.assignment.id,
      currentUserRole:
        context.participantRole,
      documents:
        mappedDocuments
    })
  } catch (error) {
    console.error(
      "[job-documents] GET failed:",
      error
    )

    return jsonError(
      "Impossibile caricare i documenti.",
      500
    )
  }
}


export async function POST(
  request
) {
  let storagePath =
    ""

  let adminSupabase =
    null

  let metadataCreated =
    false

  try {
    const crossOriginError =
      rejectCrossOrigin(
        request
      )

    if (crossOriginError) {
      return crossOriginError
    }

    const {
      user
    } =
      await getAuthenticatedUser()

    if (!user) {
      return jsonError(
        "Devi effettuare l'accesso.",
        401
      )
    }

    let formData

    try {
      formData =
        await request.formData()
    } catch {
      return jsonError(
        "Dati della richiesta non validi."
      )
    }

    const jobId =
      String(
        formData.get(
          "jobId"
        ) ||
        ""
      ).trim()

    if (
      !UUID_PATTERN.test(
        jobId
      )
    ) {
      return jsonError(
        "Identificativo lavoro non valido."
      )
    }

    const note =
      cleanNote(
        formData.get(
          "note"
        )
      )

    if (
      note &&
      note.length > 1000
    ) {
      return jsonError(
        "La nota può contenere massimo 1000 caratteri."
      )
    }

    const file =
      formData.get(
        "file"
      )

    if (
      !file ||
      typeof file.arrayBuffer !==
        "function"
    ) {
      return jsonError(
        "Seleziona un documento da caricare."
      )
    }

    const mimeType =
      String(
        file.type || ""
      )
        .trim()
        .toLowerCase()

    if (
      !ALLOWED_TYPES.has(
        mimeType
      )
    ) {
      return jsonError(
        "Formato non consentito. Usa JPG, PNG, WEBP o PDF."
      )
    }

    const fileSize =
      Number(
        file.size || 0
      )

    if (
      !Number.isFinite(
        fileSize
      ) ||
      fileSize <= 0
    ) {
      return jsonError(
        "Il documento è vuoto o non valido."
      )
    }

    if (
      fileSize >
      MAX_FILE_SIZE
    ) {
      return jsonError(
        "Il documento non può superare 4 MB."
      )
    }

    adminSupabase =
      createAdminSupabaseClient()

    const context =
      await getAuthorizedJobContext({
        adminSupabase,
        userId:
          user.id,
        jobId
      })

    if (context.error) {
      return context.error
    }

    const {
      count,
      error: countError
    } =
      await adminSupabase
        .from(
          "job_documents"
        )
        .select(
          "id",
          {
            count: "exact",
            head: true
          }
        )
        .eq(
          "job_id",
          jobId
        )
        .eq(
          "assignment_id",
          context.assignment.id
        )

    if (countError) {
      console.error(
        "[job-documents] count failed:",
        countError
      )

      return jsonError(
        "Impossibile verificare i documenti esistenti.",
        500
      )
    }

    if (
      Number(count || 0) >=
      MAX_DOCUMENTS_PER_JOB
    ) {
      return jsonError(
        `Puoi condividere al massimo ${MAX_DOCUMENTS_PER_JOB} documenti per lavoro.`,
        409
      )
    }

    const arrayBuffer =
      await file.arrayBuffer()

    const signatureBytes =
      new Uint8Array(
        arrayBuffer.slice(
          0,
          16
        )
      )

    if (
      !hasAllowedSignature(
        signatureBytes,
        mimeType
      )
    ) {
      return jsonError(
        "Il contenuto del file non corrisponde al formato dichiarato."
      )
    }

    const documentId =
      randomUUID()

    const originalFilename =
      cleanDisplayFilename(
        file.name
      )

    const safeStorageFilename =
      sanitizeStorageFilename(
        file.name
      )

    storagePath =
      [
        jobId,
        user.id,
        documentId,
        safeStorageFilename
      ].join("/")

    const fileBuffer =
      Buffer.from(
        arrayBuffer
      )

    const {
      error: uploadError
    } =
      await adminSupabase
        .storage
        .from(
          BUCKET_NAME
        )
        .upload(
          storagePath,
          fileBuffer,
          {
            contentType:
              mimeType,
            cacheControl:
              "3600",
            upsert:
              false
          }
        )

    if (uploadError) {
      console.error(
        "[job-documents] upload failed:",
        uploadError
      )

      return jsonError(
        "Non è stato possibile caricare il documento.",
        500
      )
    }

    const {
      data: createdDocument,
      error: insertError
    } =
      await adminSupabase
        .from(
          "job_documents"
        )
        .insert({
          id:
            documentId,

          job_id:
            jobId,

          assignment_id:
            context.assignment.id,

          uploaded_by:
            user.id,

          original_filename:
            originalFilename,

          storage_bucket:
            BUCKET_NAME,

          storage_path:
            storagePath,

          mime_type:
            mimeType,

          file_size:
            fileSize,

          note
        })
        .select(`
          id,
          job_id,
          assignment_id,
          uploaded_by,
          original_filename,
          storage_path,
          mime_type,
          file_size,
          note,
          created_at
        `)
        .single()

    if (
      insertError ||
      !createdDocument
    ) {
      await removeStoredFile(
        adminSupabase,
        storagePath
      )

      console.error(
        "[job-documents] metadata insert failed:",
        insertError
      )

      return jsonError(
        "Non è stato possibile registrare il documento.",
        500
      )
    }

    metadataCreated =
      true

    let notificationSent =
      false

    const uploaderLabel =
      context.participantRole ===
        "client"
        ? "Il cliente"
        : "Il pilota"

    const {
      error: notificationError
    } =
      await adminSupabase
        .from(
          "notifications"
        )
        .insert({
          user_id:
            context.otherUserId,

          title:
            "Nuovo documento condiviso",

          message:
            `${uploaderLabel} ha condiviso "${originalFilename}" per "${String(context.job.title || "il lavoro").slice(0, 200)}".`,

          type:
            "job_document_shared",

          read:
            false
        })

    if (
      notificationError
    ) {
      console.error(
        "[job-documents] notification failed:",
        notificationError
      )
    } else {
      notificationSent =
        true
    }

    let mappedDocument

    try {
      mappedDocument =
        await createSignedDocument(
          adminSupabase,
          createdDocument,
          context,
          user.id
        )
    } catch (error) {
      console.error(
        "[job-documents] signed URL after upload failed:",
        error
      )

      /*
       * Il documento è stato salvato correttamente.
       * La lista potrà rigenerare il link con una GET successiva.
       */
      mappedDocument = {
        id:
          createdDocument.id,

        jobId:
          createdDocument.job_id,

        assignmentId:
          createdDocument.assignment_id,

        uploadedBy:
          createdDocument.uploaded_by,

        uploadedByRole:
          context.participantRole,

        originalFilename:
          createdDocument.original_filename,

        mimeType:
          createdDocument.mime_type,

        fileSize:
          Number(
            createdDocument.file_size || 0
          ),

        note:
          createdDocument.note ||
          null,

        createdAt:
          createdDocument.created_at,

        signedUrl:
          null,

        signedUrlExpiresIn:
          0,

        canDelete:
          true
      }
    }

    storagePath =
      ""

    return jsonSuccess(
      {
        document:
          mappedDocument,
        notificationSent
      },
      201
    )
  } catch (error) {
    console.error(
      "[job-documents] POST failed:",
      error
    )

    if (
      adminSupabase &&
      storagePath &&
      !metadataCreated
    ) {
      await removeStoredFile(
        adminSupabase,
        storagePath
      )
    }

    return jsonError(
      "Impossibile caricare il documento.",
      500
    )
  }
}


export async function DELETE(
  request
) {
  try {
    const crossOriginError =
      rejectCrossOrigin(
        request
      )

    if (crossOriginError) {
      return crossOriginError
    }

    const {
      user
    } =
      await getAuthenticatedUser()

    if (!user) {
      return jsonError(
        "Devi effettuare l'accesso.",
        401
      )
    }

    let body

    try {
      body =
        await request.json()
    } catch {
      return jsonError(
        "Dati della richiesta non validi."
      )
    }

    const documentId =
      String(
        body?.documentId ||
        ""
      ).trim()

    if (
      !UUID_PATTERN.test(
        documentId
      )
    ) {
      return jsonError(
        "Identificativo documento non valido."
      )
    }

    const adminSupabase =
      createAdminSupabaseClient()

    const {
      data: document,
      error: documentError
    } =
      await adminSupabase
        .from(
          "job_documents"
        )
        .select(`
          id,
          job_id,
          assignment_id,
          uploaded_by,
          storage_path
        `)
        .eq(
          "id",
          documentId
        )
        .maybeSingle()

    if (
      documentError ||
      !document
    ) {
      return jsonError(
        "Documento non trovato.",
        404
      )
    }

    const context =
      await getAuthorizedJobContext({
        adminSupabase,
        userId:
          user.id,
        jobId:
          document.job_id
      })

    if (context.error) {
      return context.error
    }

    if (
      document.assignment_id !==
        context.assignment.id
    ) {
      return jsonError(
        "Documento non collegato all'assegnazione corrente.",
        409
      )
    }

    if (
      document.uploaded_by !==
        user.id
    ) {
      return jsonError(
        "Puoi eliminare soltanto i documenti che hai caricato.",
        403
      )
    }

    const {
      error: deleteError
    } =
      await adminSupabase
        .from(
          "job_documents"
        )
        .delete()
        .eq(
          "id",
          documentId
        )
        .eq(
          "uploaded_by",
          user.id
        )

    if (deleteError) {
      console.error(
        "[job-documents] metadata delete failed:",
        deleteError
      )

      return jsonError(
        "Non è stato possibile eliminare il documento.",
        500
      )
    }

    const storageDeleted =
      await removeStoredFile(
        adminSupabase,
        document.storage_path
      )

    return jsonSuccess({
      documentId,
      deleted: true,
      storageDeleted
    })
  } catch (error) {
    console.error(
      "[job-documents] DELETE failed:",
      error
    )

    return jsonError(
      "Impossibile eliminare il documento.",
      500
    )
  }
}
