import {
  NextResponse
} from "next/server"

import {
  sendTrackedEmail
} from "@/lib/email/send-tracked-email"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

import {
  getTeamAccess
} from "@/lib/team/access"

export const dynamic =
  "force-dynamic"

export const runtime =
  "nodejs"

const MAX_BODY_BYTES =
  20_000

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function jsonError(
  message,
  status = 400,
  extra = {}
) {
  return NextResponse.json(
    {
      success: false,
      error: message,
      ...extra
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

function hasValidOrigin(request) {
  const origin =
    request.headers.get("origin")

  if (!origin) {
    return false
  }

  try {
    return (
      new URL(origin).origin ===
      new URL(request.url).origin
    )
  } catch {
    return false
  }
}

function normalizeSingleLine(
  value,
  maxLength
) {
  return String(value || "")
    .replace(/\u0000/g, "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, maxLength)
}

function normalizeMessage(
  value,
  maxLength
) {
  return String(value || "")
    .replace(/\u0000/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim()
    .slice(0, maxLength)
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(
  request
) {
  if (!hasValidOrigin(request)) {
    return jsonError(
      "Origine della richiesta non autorizzata.",
      403
    )
  }

  const contentLength =
    Number(
      request.headers.get(
        "content-length"
      ) || 0
    )

  if (
    Number.isFinite(
      contentLength
    ) &&
    contentLength >
      MAX_BODY_BYTES
  ) {
    return jsonError(
      "Richiesta troppo grande.",
      413
    )
  }

  const {
    user,
    access
  } = await getTeamAccess()

  if (!user) {
    return jsonError(
      "Devi effettuare l'accesso.",
      401
    )
  }

  if (!access?.active) {
    return jsonError(
      "Accesso Team non autorizzato.",
      403
    )
  }

  const permissions =
    Array.isArray(
      access.permissions
    )
      ? access.permissions
      : []

  if (
    !permissions.includes(
      "emails.send"
    )
  ) {
    return jsonError(
      "Non hai il permesso di inviare nuove email.",
      403
    )
  }

  let rawBody

try {
  rawBody =
    await request.text()
} catch {
  return jsonError(
    "Dati della richiesta non validi."
  )
}

if (
  Buffer.byteLength(
    rawBody,
    "utf8"
  ) > MAX_BODY_BYTES
) {
  return jsonError(
    "Richiesta troppo grande.",
    413
  )
}

let body

try {
  body =
    JSON.parse(rawBody)
} catch {
  return jsonError(
    "Dati della richiesta non validi."
  )
}

if (
  !body ||
  typeof body !== "object" ||
  Array.isArray(body)
) {
  return jsonError(
    "Dati della richiesta non validi."
  )
}

  const requestId =
    normalizeSingleLine(
      body?.requestId,
      100
    )

  const recipientEmail =
    normalizeSingleLine(
      body?.recipientEmail,
      320
    ).toLowerCase()

  const recipientName =
    normalizeSingleLine(
      body?.recipientName,
      200
    )

  const subject =
    normalizeSingleLine(
      body?.subject,
      200
    )

  const message =
    normalizeMessage(
      body?.message,
      10_000
    )

  const reason =
    normalizeMessage(
      body?.reason,
      500
    )

  if (
    !UUID_PATTERN.test(
      requestId
    )
  ) {
    return jsonError(
      "Identificativo richiesta non valido."
    )
  }

  if (
    !EMAIL_PATTERN.test(
      recipientEmail
    )
  ) {
    return jsonError(
      "Inserisci un indirizzo email destinatario valido."
    )
  }

  if (
    recipientName.length > 200
  ) {
    return jsonError(
      "Il nome del destinatario è troppo lungo."
    )
  }

  if (
    subject.length < 3 ||
    subject.length > 200
  ) {
    return jsonError(
      "L'oggetto deve contenere da 3 a 200 caratteri."
    )
  }

  if (
    message.length < 10 ||
    message.length > 10_000
  ) {
    return jsonError(
      "Il messaggio deve contenere da 10 a 10.000 caratteri."
    )
  }

  if (
    reason.length < 10 ||
    reason.length > 500
  ) {
    return jsonError(
      "La motivazione amministrativa deve contenere da 10 a 500 caratteri."
    )
  }

  const adminSupabase =
    createAdminSupabaseClient()

  /*
   * L'audit viene registrato prima
   * dell'invio esterno.
   *
   * Non viene memorizzato il testo
   * completo del messaggio nel registro
   * amministrativo.
   */
  const {
    error: auditError
  } = await adminSupabase
    .from("admin_audit_log")
    .insert({
      actor_user_id:
        user.id,

      action:
        "email.compose.request",

      target_type:
        "email_recipient",

      target_id:
        recipientEmail,

      old_data:
        null,

      new_data: {
        request_id:
          requestId,

        recipient_email:
          recipientEmail,

        recipient_name:
          recipientName || null,

        subject,

        message_length:
          message.length,

        sender_email:
          "assistenza@droneguard.it",

        category:
          "manual_team_email"
      },

      reason
    })

  if (auditError) {
    console.error(
      "[admin-email-compose] Errore audit:",
      auditError
    )

    return jsonError(
      "L'invio è stato annullato perché non è stato possibile registrare l'operazione.",
      500
    )
  }

  const safeRecipientName =
    escapeHtml(
      recipientName ||
        "utente DroneGuard"
    )

  const safeMessage =
    escapeHtml(message)
      .replace(/\n/g, "<br />")

  const html = `
    <div style="background:#0b1020;padding:40px 20px;font-family:Arial,sans-serif;">
      <div style="max-width:640px;margin:auto;background:#111827;border:1px solid rgba(255,255,255,0.08);border-radius:24px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#0f172a,#111827,#1e3a8a);padding:32px;text-align:center;">
          <h1 style="margin:0;color:white;font-size:34px;">
            DroneGuard
          </h1>
        </div>

        <div style="padding:36px 30px;">
          <p style="color:#e5e7eb;font-size:16px;line-height:1.7;">
            Gentile ${safeRecipientName},
          </p>

          <div style="color:#cbd5e1;font-size:16px;line-height:1.8;">
            ${safeMessage}
          </div>

          <p style="margin-top:32px;color:#64748b;font-size:13px;line-height:1.6;">
            Questa comunicazione è stata inviata dal Team DroneGuard.
          </p>
        </div>
      </div>
    </div>
  `

  let emailResult

  try {
    emailResult =
      await sendTrackedEmail({
        idempotencyKey:
  `admin-compose:${user.id}:${requestId}`,

        category:
          "manual_team_email",

        templateKey:
          "manual_team_email",

        recipientEmail,

        recipientName:
          recipientName || null,

        senderEmail:
          "assistenza@droneguard.it",

        senderName:
          "DroneGuard",

        replyToEmail:
          "assistenza@droneguard.it",

        subject,

        html,

        text: [
          recipientName
            ? `Gentile ${recipientName},`
            : "Gentile utente DroneGuard,",
          "",
          message,
          "",
          "Questa comunicazione è stata inviata dal Team DroneGuard."
        ].join("\n"),

        sourceType:
          "admin_manual_email",

        sourceId:
          requestId,

        triggeredByUserId:
          user.id,

        metadata: {
          administrativeReason:
            reason,

          composedFromTeamPanel:
            true,

          actorRole:
            access.role_key ||
            null
        },

        maxAttempts:
          3
      })
  } catch (error) {
    console.error(
      "[admin-email-compose] Errore imprevisto:",
      error
    )

    return jsonError(
      "Errore imprevisto durante l'invio dell'email.",
      500
    )
  }

  if (emailResult.inProgress) {
  return jsonError(
    "L'invio di questa email è già in corso.",
    409,
    {
      deliveryId:
        emailResult.deliveryId ||
        null,

      status:
        emailResult.status ||
        "sending"
    }
  )
}

  if (
    emailResult.success !== true
  ) {
    return jsonError(
      emailResult.error ||
        "Non è stato possibile inviare l'email.",
      502,
      {
        deliveryId:
          emailResult.deliveryId ||
          null,

        deliveryStatus:
          emailResult.status ||
          "failed",

        deliveryCreated:
          Boolean(
            emailResult.deliveryId
          )
      }
    )
  }

  return NextResponse.json(
    {
      success: true,

      message:
        emailResult.alreadyProcessed
          ? "Questa email era già stata elaborata."
          : "Email inviata correttamente.",

      deliveryId:
        emailResult.deliveryId ||
        null,

      providerMessageId:
        emailResult.providerMessageId ||
        null,

      status:
        emailResult.status ||
        "sent",

      alreadyProcessed:
        Boolean(
          emailResult.alreadyProcessed
        )
    },
    {
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0"
      }
    }
  )
}