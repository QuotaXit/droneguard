import {
  createHash
} from "node:crypto"

import {
  sendTrackedEmail
} from "@/lib/email/send-tracked-email"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function jsonError(
  message,
  status = 400
) {
  return Response.json(
    {
      success: false,
      error: message
    },
    {
      status
    }
  )
}

function normalizeText(
  value,
  maxLength
) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, maxLength)
}

function normalizeMessage(
  value,
  maxLength
) {
  return String(value || "")
    .trim()
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
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

function getRequestIp(request) {
  const forwardedFor =
    request.headers.get(
      "x-forwarded-for"
    )

  if (forwardedFor) {
    return forwardedFor
      .split(",")[0]
      .trim()
      .slice(0, 100)
  }

  return String(
    request.headers.get(
      "x-real-ip"
    ) ||
      "unknown"
  ).slice(0, 100)
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

function createContactIdempotencyKey({
  email,
  subject,
  message,
  requestIp
}) {
  /*
   * Impedisce doppi invii identici nello stesso
   * intervallo di dieci minuti.
   */
  const timeWindow =
    Math.floor(
      Date.now() /
        (10 * 60 * 1000)
    )

  const hash =
    createHash("sha256")
      .update(
        [
          email,
          subject,
          message,
          requestIp,
          timeWindow
        ].join("|")
      )
      .digest("hex")

  return `contact:${hash}`
}

export async function POST(request) {
  try {
    if (!hasValidOrigin(request)) {
      return jsonError(
        "Origine della richiesta non autorizzata.",
        403
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

    const name =
      normalizeText(
        body?.name,
        100
      )

    const email =
      String(
        body?.email || ""
      )
        .trim()
        .toLowerCase()
        .slice(0, 320)

    const role =
      normalizeText(
        body?.role,
        80
      )

    const subject =
      normalizeText(
        body?.subject,
        200
      )

    const message =
      normalizeMessage(
        body?.message,
        5000
      )

    if (
      !name ||
      !email ||
      !role ||
      !subject ||
      !message
    ) {
      return jsonError(
        "Compila tutti i campi."
      )
    }

    if (
      name.length < 2
    ) {
      return jsonError(
        "Il nome deve contenere almeno 2 caratteri."
      )
    }

    if (
      !EMAIL_PATTERN.test(email)
    ) {
      return jsonError(
        "Inserisci un indirizzo email valido."
      )
    }

    if (
      subject.length < 3
    ) {
      return jsonError(
        "L'oggetto deve contenere almeno 3 caratteri."
      )
    }

    if (
      message.length < 10
    ) {
      return jsonError(
        "Il messaggio deve contenere almeno 10 caratteri."
      )
    }

    const requestIp =
      getRequestIp(request)

    const idempotencyKey =
      createContactIdempotencyKey({
        email,
        subject,
        message,
        requestIp
      })

    const safeName =
      escapeHtml(name)

    const safeEmail =
      escapeHtml(email)

    const safeRole =
      escapeHtml(role)

    const safeSubject =
      escapeHtml(subject)

    const safeMessage =
      escapeHtml(message)
        .replace(/\n/g, "<br />")

    const emailResult =
      await sendTrackedEmail({
        idempotencyKey,

        category:
          "contact_message",

        templateKey:
          "contact_message_team_notification",

        recipientEmail:
          "assistenza@droneguard.it",

        recipientName:
          "Assistenza DroneGuard",

        senderEmail:
          "assistenza@droneguard.it",

        senderName:
          "DroneGuard",

        replyToEmail:
          email,

        subject:
          `Nuovo messaggio DroneGuard: ${subject}`,

        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Nuovo messaggio da DroneGuard</h2>

            <p>
              <strong>Nome:</strong>
              ${safeName}
            </p>

            <p>
              <strong>Email:</strong>
              ${safeEmail}
            </p>

            <p>
              <strong>Ruolo:</strong>
              ${safeRole}
            </p>

            <p>
              <strong>Oggetto:</strong>
              ${safeSubject}
            </p>

            <hr />

            <p>
              <strong>Messaggio:</strong>
            </p>

            <p>
              ${safeMessage}
            </p>
          </div>
        `,

        text: [
          "Nuovo messaggio da DroneGuard",
          "",
          `Nome: ${name}`,
          `Email: ${email}`,
          `Ruolo: ${role}`,
          `Oggetto: ${subject}`,
          "",
          "Messaggio:",
          message
        ].join("\n"),

        sourceType:
          "contact_form",

        sourceId:
          idempotencyKey,

        metadata: {
          submittedRole:
            role,

          requestIp,

          duplicateWindowMinutes:
            10
        },

        maxAttempts:
          3
      })

    if (
      emailResult.success !==
      true
    ) {
      console.error(
        "[contact] Invio tracciato fallito:",
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

      return jsonError(
        "Non è stato possibile inviare il messaggio. Riprova più tardi.",
        500
      )
    }

    return Response.json({
      success: true,

      message:
        emailResult
          .alreadyProcessed
          ? "Il messaggio era già stato ricevuto."
          : "Messaggio inviato correttamente.",

      deliveryId:
        emailResult.deliveryId ||
        null
    })
  } catch (error) {
    console.error(
      "[contact] Errore imprevisto:",
      error
    )

    return jsonError(
      "Errore imprevisto durante l'invio del messaggio.",
      500
    )
  }
}