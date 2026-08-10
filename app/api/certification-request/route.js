import { randomUUID } from "node:crypto"

import { NextResponse } from "next/server"

import {
  sendTrackedEmail
} from "@/lib/email/send-tracked-email"

import {
  createServerSupabaseClient
} from "@/lib/supabase/server"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const BUCKET_NAME = "certification-documents"
const MAX_FILE_SIZE = 10 * 1024 * 1024

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf"
])

function jsonError(message, status = 400) {
  return NextResponse.json(
    {
      success: false,
      error: message
    },
    {
      status,
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0"
      }
    }
  )
}

function normalizeRole(value) {
  const role = String(value || "")
    .trim()
    .toLowerCase()

  if (
    role === "pilot" ||
    role === "pilota"
  ) {
    return "pilot"
  }

  return role
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function sanitizeFilename(value) {
  const original = String(value || "documento")
    .trim()
    .slice(0, 200)

  const cleaned = original
    .normalize("NFKD")
    .replace(/[^\w.\-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^\.+/, "")
    .replace(/^[-_]+|[-_]+$/g, "")

  return cleaned || "documento"
}

function bytesStartWith(bytes, signature) {
  if (bytes.length < signature.length) {
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
  if (mimeType === "image/jpeg") {
    return bytesStartWith(
      bytes,
      [0xff, 0xd8, 0xff]
    )
  }

  if (mimeType === "image/png") {
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

  if (mimeType === "image/webp") {
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

  if (mimeType === "application/pdf") {
    return (
      String.fromCharCode(
        ...bytes.slice(0, 5)
      ) === "%PDF-"
    )
  }

  return false
}

async function removeUploadedFile(
  adminSupabase,
  storagePath
) {
  if (!storagePath) {
    return
  }

  const { error } = await adminSupabase
    .storage
    .from(BUCKET_NAME)
    .remove([storagePath])

  if (error) {
    console.error(
      "[certification-request] cleanup storage failed:",
      error
    )
  }
}

export async function POST(request) {
  let storagePath = ""
  let requestId = ""

  try {
    // =====================================================
    // CONTROLLO ORIGINE
    // =====================================================

    const requestOrigin =
      request.headers.get("origin")

    if (
  !requestOrigin ||
  requestOrigin !== request.nextUrl.origin
) {
      return jsonError(
        "Origine della richiesta non autorizzata.",
        403
      )
    }

    // =====================================================
    // AUTENTICAZIONE
    // =====================================================

    const supabase =
      await createServerSupabaseClient()

    const {
      data: { user },
      error: authError
    } = await supabase.auth.getUser()

    if (
      authError ||
      !user
    ) {
      return jsonError(
        "Devi effettuare l'accesso.",
        401
      )
    }

    const adminSupabase =
      createAdminSupabaseClient()

    // =====================================================
    // PROFILO PILOTA
    // =====================================================

    const {
      data: profile,
      error: profileError
    } = await adminSupabase
      .from("users")
      .select(`
  id,
  email,
  role,
  name,
  surname,
  certifications,
  banned,
  account_status,
  cert_request_sent
`)
      .eq("id", user.id)
      .maybeSingle()

    if (
      profileError ||
      !profile
    ) {
      return jsonError(
        "Profilo utente non trovato.",
        404
      )
    }

    if (
      normalizeRole(profile.role) !==
      "pilot"
    ) {
      return jsonError(
        "Solo i piloti possono inviare certificazioni.",
        403
      )
    }

    if (profile.banned === true) {
      return jsonError(
        "Il tuo account è sospeso.",
        403
      )
    }

    if (
  String(
    profile.account_status || "active"
  )
    .trim()
    .toLowerCase() !== "active"
) {
  return jsonError(
    "Il tuo account non è attivo.",
    403
  )
}

    // =====================================================
    // RICHIESTA GIÀ PENDENTE
    // =====================================================

    const {
      data: pendingRequest,
      error: pendingError
    } = await adminSupabase
      .from("certification_requests")
      .select("id,created_at")
      .eq("user_id", user.id)
      .eq("status", "pending")
      .maybeSingle()

    if (pendingError) {
      console.error(
        "[certification-request] pending lookup failed:",
        pendingError
      )

      return jsonError(
        "Non è stato possibile controllare le richieste esistenti.",
        500
      )
    }

    if (pendingRequest) {
      return jsonError(
        "Hai già una certificazione in attesa di verifica.",
        409
      )
    }

    // =====================================================
    // LETTURA FILE
    // =====================================================

    let formData

    try {
      formData =
        await request.formData()
    } catch {
      return jsonError(
        "Dati della richiesta non validi."
      )
    }

    const file =
      formData.get("file")

    if (
      !file ||
      typeof file.arrayBuffer !==
        "function"
    ) {
      return jsonError(
        "Carica una foto o un PDF della certificazione."
      )
    }

    const mimeType =
      String(file.type || "")
        .trim()
        .toLowerCase()

    if (
      !ALLOWED_TYPES.has(mimeType)
    ) {
      return jsonError(
        "Formato non consentito. Usa JPG, PNG, WEBP o PDF."
      )
    }

    const fileSize =
      Number(file.size || 0)

    if (
      !Number.isFinite(fileSize) ||
      fileSize <= 0
    ) {
      return jsonError(
        "Il documento è vuoto o non valido."
      )
    }

    if (fileSize > MAX_FILE_SIZE) {
      return jsonError(
        "Il documento non può superare 10 MB."
      )
    }

    const arrayBuffer =
      await file.arrayBuffer()

    const signatureBytes =
      new Uint8Array(
        arrayBuffer.slice(0, 16)
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

    // =====================================================
    // PERCORSO PRIVATO
    // =====================================================

    requestId = randomUUID()

    const originalFilename =
      sanitizeFilename(file.name)

    storagePath = [
      user.id,
      requestId,
      originalFilename
    ].join("/")

    const fileBuffer =
      Buffer.from(arrayBuffer)

    // =====================================================
    // UPLOAD STORAGE PRIVATO
    // =====================================================

    const {
      error: uploadError
    } = await adminSupabase
      .storage
      .from(BUCKET_NAME)
      .upload(
        storagePath,
        fileBuffer,
        {
          contentType: mimeType,
          cacheControl: "3600",
          upsert: false
        }
      )

    if (uploadError) {
      console.error(
        "[certification-request] upload failed:",
        uploadError
      )

      return jsonError(
        "Non è stato possibile caricare il documento.",
        500
      )
    }

    // =====================================================
    // SALVATAGGIO RICHIESTA
    // =====================================================

    const {
      data: createdRequest,
      error: insertError
    } = await adminSupabase
      .from("certification_requests")
      .insert({
        id: requestId,
        user_id: user.id,
        status: "pending",
        storage_bucket:
          BUCKET_NAME,
        storage_path:
          storagePath,
        original_filename:
          originalFilename,
        mime_type:
          mimeType,
        file_size:
          fileSize,
        declared_certifications:
          String(
            profile.certifications ||
              "Non indicata"
          ).slice(0, 2000)
      })
      .select(`
        id,
        status,
        created_at
      `)
      .single()

    if (insertError) {
      await removeUploadedFile(
        adminSupabase,
        storagePath
      )

      if (
        insertError.code === "23505"
      ) {
        return jsonError(
          "Hai già una certificazione in attesa di verifica.",
          409
        )
      }

      console.error(
        "[certification-request] database insert failed:",
        insertError
      )

      return jsonError(
        "Non è stato possibile registrare la richiesta.",
        500
      )
    }

    // =====================================================
    // AGGIORNAMENTO PROFILO SERVER-SIDE
    // =====================================================

    const {
      error: profileUpdateError
    } = await adminSupabase
      .from("users")
      .update({
        cert_request_sent: true
      })
      .eq("id", user.id)

    if (profileUpdateError) {
      console.error(
        "[certification-request] profile update failed:",
        profileUpdateError
      )

      await adminSupabase
        .from("certification_requests")
        .delete()
        .eq("id", requestId)

      await removeUploadedFile(
        adminSupabase,
        storagePath
      )

      return jsonError(
        "Non è stato possibile completare la richiesta.",
        500
      )
    }

    // =====================================================
    // EMAIL DI AVVISO AL TEAM
    // =====================================================

    let emailSent = false

const fullName =
  [
    profile.name,
    profile.surname
  ]
    .filter(Boolean)
    .join(" ")
    .trim() ||
  "Pilota DroneGuard"

const pilotEmail =
  String(
    profile.email ||
      user.email ||
      ""
  ).trim()

const declaredCertifications =
  String(
    profile.certifications ||
      "Non indicate"
  ).trim()

  // =====================================================
// NOTIFICA CENTRO OPERATIVO TEAM
// =====================================================

try {
  const {
    error: teamNotificationError
  } =
    await adminSupabase
      .from(
        "team_notifications"
      )
      .upsert(
        {
          event_key:
            `certification-request:${requestId}`,

          category:
            "certification",

          severity:
            "warning",

          title:
            "Nuova certificazione pilota",

          message:
            `${fullName} ha inviato una certificazione da verificare.`,

          href:
            "/admin/certifications",

          required_permission:
            "certifications.view",

          source_type:
            "certification_request",

          source_id:
            requestId,

          actor_user_id:
            user.id,

          metadata: {
            pilot_user_id:
              user.id
          }
        },
        {
          onConflict:
            "event_key",

          ignoreDuplicates:
            true
        }
      )

  if (
    teamNotificationError
  ) {
    console.error(
      "[certification-request] team notification insert failed:",
      teamNotificationError
    )
  }
} catch (
  teamNotificationUnexpectedError
) {
  console.error(
    "[certification-request] team notification unexpected error:",
    teamNotificationUnexpectedError
  )
}

const siteUrl =
  String(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://www.droneguard.it"
  ).replace(/\/+$/, "")

try {
  const emailResult =
    await sendTrackedEmail({
      idempotencyKey:
        `certification-request:${requestId}:team-notification`,

      category:
        "certification_request",

      templateKey:
        "certification_request_team_notification",

      recipientEmail:
        "assistenza@droneguard.it",

      recipientName:
        "Team DroneGuard",

      senderEmail:
        "noreply@droneguard.it",

      senderName:
        "DroneGuard",

      subject:
        "Nuova certificazione da verificare",

      html: `
        <h2>Nuova certificazione da verificare</h2>

        <p>
          È arrivata una nuova richiesta nel pannello Team.
        </p>

        <p>
          <strong>Pilota:</strong>
          ${escapeHtml(fullName)}
        </p>

        <p>
          <strong>Email:</strong>
          ${escapeHtml(pilotEmail)}
        </p>

        <p>
          <strong>Certificazioni dichiarate:</strong>
          ${escapeHtml(
            declaredCertifications
          )}
        </p>

        <p>
          Il documento è conservato nello Storage
          privato e non è allegato a questa email.
        </p>

        <p>
          <a href="${siteUrl}/admin/certifications">
            Apri le certificazioni nel pannello Team
          </a>
        </p>
      `,

      text: [
        "Nuova certificazione da verificare",
        "",
        `Pilota: ${fullName}`,
        `Email: ${pilotEmail}`,
        `Certificazioni dichiarate: ${declaredCertifications}`,
        "",
        "Il documento è conservato nello Storage privato.",
        `${siteUrl}/admin/certifications`
      ].join("\n"),

      sourceType:
        "certification_request",

      sourceId:
        requestId,

      triggeredByUserId:
        user.id,

      metadata: {
        pilotUserId:
          user.id,

        certificationRequestId:
          requestId
      },

      maxAttempts:
        3
    })

  emailSent =
    emailResult.success === true

  if (!emailSent) {
    console.error(
      "[certification-request] tracked notification email failed:",
      {
        deliveryId:
          emailResult.deliveryId ||
          null,

        status:
          emailResult.status ||
          null,

        error:
          emailResult.error ||
          "Errore email non disponibile."
      }
    )
  }
} catch (emailError) {
  console.error(
    "[certification-request] tracked notification email unexpected error:",
    emailError
  )

  emailSent = false
}

if (emailSent) {
  const {
    error: emailTimestampError
  } = await adminSupabase
    .from("certification_requests")
    .update({
      email_notification_sent_at:
        new Date().toISOString()
    })
    .eq("id", requestId)

  if (emailTimestampError) {
    console.error(
      "[certification-request] email timestamp failed:",
      emailTimestampError
    )
  }
}

    return NextResponse.json(
  {
    success: true,
    request: createdRequest,
    emailNotificationSent:
      emailSent
  },
  {
    headers: {
      "Cache-Control":
        "private, no-store, max-age=0"
    }
  }
)
  } catch (error) {
    console.error(
      "[certification-request] unexpected error:",
      error
    )

    return jsonError(
      "Errore durante l'invio della certificazione.",
      500
    )
  }
}