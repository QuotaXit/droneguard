import { Resend } from "resend"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

const DEFAULT_SENDER_EMAIL =
  "noreply@droneguard.it"

const DEFAULT_SENDER_NAME =
  "DroneGuard"

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function normalizeText(
  value,
  maxLength
) {
  return String(value || "")
    .trim()
    .slice(0, maxLength)
}

function normalizeEmail(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .slice(0, 320)
}

function normalizeMaxAttempts(value) {
  const parsedValue =
    Number.parseInt(value, 10)

  if (
    !Number.isFinite(parsedValue)
  ) {
    return 3
  }

  return Math.min(
    10,
    Math.max(
      1,
      parsedValue
    )
  )
}

function getErrorMessage(error) {
  if (!error) {
    return "Errore email non disponibile."
  }

  if (
    typeof error === "string"
  ) {
    return error.slice(0, 2000)
  }

  return String(
    error.message ||
    error.name ||
    "Errore email non disponibile."
  ).slice(0, 2000)
}

function serializeProviderError(error) {
  if (!error) {
    return null
  }

  return {
    name:
      error.name ||
      null,

    message:
      getErrorMessage(error),

    statusCode:
      error.statusCode ||
      error.status ||
      null
  }
}

function getNextRetryDate(
  attemptCount
) {
  const retryMinutes = [
    5,
    15,
    60,
    240
  ]

  const index =
    Math.min(
      Math.max(
        attemptCount - 1,
        0
      ),
      retryMinutes.length - 1
    )

  return new Date(
    Date.now() +
      retryMinutes[index] *
        60 *
        1000
  ).toISOString()
}

async function getExistingDelivery({
  adminSupabase,
  idempotencyKey
}) {
  if (!idempotencyKey) {
    return null
  }

  const {
    data,
    error
  } = await adminSupabase
    .from("email_deliveries")
    .select(`
      id,
      idempotency_key,
      category,
      template_key,
      recipient_email,
      recipient_name,
      sender_email,
      sender_name,
      reply_to_email,
      subject,
      request_payload,
      provider,
      provider_message_id,
      status,
      attempt_count,
      max_attempts,
      last_error,
      last_attempt_at,
      next_retry_at,
      sent_at,
      failed_at,
      source_type,
      source_id,
      target_user_id,
      triggered_by_user_id,
      retry_of_id,
      metadata,
      created_at,
      updated_at
    `)
    .eq(
      "idempotency_key",
      idempotencyKey
    )
    .maybeSingle()

  if (error) {
    throw new Error(
      `Impossibile controllare l'idempotenza email: ${error.message}`
    )
  }

  return data || null
}

function buildExistingResult(delivery) {
  if (!delivery) {
    return null
  }

  if (
    delivery.status === "sent"
  ) {
    return {
      success: true,
      alreadyProcessed: true,
      deliveryId:
        delivery.id,
      status:
        delivery.status,
      providerMessageId:
        delivery.provider_message_id ||
        null
    }
  }

  if (
    delivery.status === "sending"
  ) {
    return {
      success: false,
      inProgress: true,
      deliveryId:
        delivery.id,
      status:
        delivery.status,
      error:
        "L'invio della stessa email è già in corso."
    }
  }

  if (
    delivery.status ===
    "cancelled"
  ) {
    return {
      success: false,
      cancelled: true,
      deliveryId:
        delivery.id,
      status:
        delivery.status,
      error:
        "Questo invio email è stato annullato."
    }
  }

  if (
    delivery.status === "failed" &&
    Number(
      delivery.attempt_count || 0
    ) >=
      Number(
        delivery.max_attempts || 3
      )
  ) {
    return {
      success: false,
      attemptsExhausted: true,
      deliveryId:
        delivery.id,
      status:
        delivery.status,
      error:
        delivery.last_error ||
        "Numero massimo di tentativi raggiunto."
    }
  }

  return null
}

async function createDelivery({
  adminSupabase,
  idempotencyKey,
  category,
  templateKey,
  recipientEmail,
  recipientName,
  senderEmail,
  senderName,
  replyToEmail,
  subject,
  html,
  text,
  sourceType,
  sourceId,
  targetUserId,
  triggeredByUserId,
  retryOfId,
  metadata,
  maxAttempts
}) {
  const {
    data,
    error
  } = await adminSupabase
    .from("email_deliveries")
    .insert({
      idempotency_key:
        idempotencyKey ||
        null,

      category,

      template_key:
        templateKey ||
        null,

      recipient_email:
        recipientEmail,

      recipient_name:
        recipientName ||
        null,

      sender_email:
        senderEmail,

      sender_name:
        senderName,

      reply_to_email:
        replyToEmail ||
        null,

      subject,

      request_payload: {
        html:
          html || null,

        text:
          text || null
      },

      provider:
        "resend",

      status:
        "pending",

      attempt_count:
        0,

      max_attempts:
        maxAttempts,

      source_type:
        sourceType ||
        null,

      source_id:
        sourceId ||
        null,

      target_user_id:
        targetUserId ||
        null,

      triggered_by_user_id:
        triggeredByUserId ||
        null,

      retry_of_id:
        retryOfId ||
        null,

      metadata:
        metadata &&
        typeof metadata === "object"
          ? metadata
          : {}
    })
    .select(`
      id,
      idempotency_key,
      category,
      template_key,
      recipient_email,
      recipient_name,
      sender_email,
      sender_name,
      reply_to_email,
      subject,
      request_payload,
      provider,
      provider_message_id,
      status,
      attempt_count,
      max_attempts,
      last_error,
      last_attempt_at,
      next_retry_at,
      sent_at,
      failed_at,
      source_type,
      source_id,
      target_user_id,
      triggered_by_user_id,
      retry_of_id,
      metadata,
      created_at,
      updated_at
    `)
    .single()

  if (!error) {
    return data
  }

  /*
   * Due richieste contemporanee possono provare
   * a creare la stessa idempotency_key.
   * In quel caso recuperiamo il record già creato.
   */
  if (
    error.code === "23505" &&
    idempotencyKey
  ) {
    const existingDelivery =
      await getExistingDelivery({
        adminSupabase,
        idempotencyKey
      })

    if (existingDelivery) {
      return existingDelivery
    }
  }

  throw new Error(
    `Impossibile registrare l'email: ${error.message}`
  )
}

async function claimDelivery({
  adminSupabase,
  delivery
}) {
  const previousAttemptCount =
    Number(
      delivery.attempt_count || 0
    )

  const maxAttempts =
    Number(
      delivery.max_attempts || 3
    )

  if (
    previousAttemptCount >=
    maxAttempts
  ) {
    return null
  }

  const now =
    new Date().toISOString()

  const nextAttemptCount =
    previousAttemptCount + 1

  const {
    data,
    error
  } = await adminSupabase
    .from("email_deliveries")
    .update({
      status:
        "sending",

      attempt_count:
        nextAttemptCount,

      last_attempt_at:
        now,

      last_error:
        null,

      next_retry_at:
        null,

      updated_at:
        now
    })
    .eq(
      "id",
      delivery.id
    )
    .eq(
      "attempt_count",
      previousAttemptCount
    )
    .in(
      "status",
      [
        "pending",
        "failed"
      ]
    )
    .select(`
      id,
      idempotency_key,
      category,
      template_key,
      recipient_email,
      recipient_name,
      sender_email,
      sender_name,
      reply_to_email,
      subject,
      request_payload,
      provider,
      provider_message_id,
      status,
      attempt_count,
      max_attempts,
      last_error,
      last_attempt_at,
      next_retry_at,
      sent_at,
      failed_at,
      source_type,
      source_id,
      target_user_id,
      triggered_by_user_id,
      retry_of_id,
      metadata,
      created_at,
      updated_at
    `)
    .maybeSingle()

  if (error) {
    throw new Error(
      `Impossibile prenotare il tentativo email: ${error.message}`
    )
  }

  return data || null
}

async function markDeliveryFailed({
  adminSupabase,
  delivery,
  error
}) {
  const now =
    new Date().toISOString()

  const attemptsExhausted =
    Number(
      delivery.attempt_count || 0
    ) >=
    Number(
      delivery.max_attempts || 3
    )

  const {
    error: updateError
  } = await adminSupabase
    .from("email_deliveries")
    .update({
      status:
        "failed",

      last_error:
        getErrorMessage(error),

      provider_response:
        serializeProviderError(
          error
        ),

      failed_at:
        now,

      next_retry_at:
        attemptsExhausted
          ? null
          : getNextRetryDate(
              delivery.attempt_count
            ),

      updated_at:
        now
    })
    .eq(
      "id",
      delivery.id
    )
    .eq(
      "status",
      "sending"
    )

  return {
    updateError,
    attemptsExhausted
  }
}

async function markDeliverySent({
  adminSupabase,
  delivery,
  providerData
}) {
  const now =
    new Date().toISOString()

  const providerMessageId =
    String(
      providerData?.id || ""
    ).trim() ||
    null

  const {
    data,
    error
  } = await adminSupabase
    .from("email_deliveries")
    .update({
      status:
        "sent",

      provider_message_id:
        providerMessageId,

      provider_response:
        providerData ||
        {},

      last_error:
        null,

      next_retry_at:
        null,

      failed_at:
        null,

      sent_at:
        now,

      updated_at:
        now
    })
    .eq(
      "id",
      delivery.id
    )
    .eq(
      "status",
      "sending"
    )
    .select(`
      id,
      status,
      provider_message_id,
      sent_at
    `)
    .maybeSingle()

  return {
    data,
    error,
    providerMessageId
  }
}

export async function sendTrackedEmail({
  idempotencyKey = null,
  category,
  templateKey = null,

  recipientEmail,
  recipientName = null,

  senderEmail =
    DEFAULT_SENDER_EMAIL,

  senderName =
    DEFAULT_SENDER_NAME,

  replyToEmail = null,

  subject,
  html = null,
  text = null,

  sourceType = null,
  sourceId = null,

  targetUserId = null,
  triggeredByUserId = null,

  retryOfId = null,

  metadata = {},

  maxAttempts = 3
}) {
  const normalizedCategory =
    normalizeText(
      category,
      100
    )

  const normalizedTemplateKey =
    normalizeText(
      templateKey,
      100
    )

  const normalizedRecipientEmail =
    normalizeEmail(
      recipientEmail
    )

  const normalizedRecipientName =
    normalizeText(
      recipientName,
      200
    )

  const normalizedSenderEmail =
    normalizeEmail(
      senderEmail
    )

  const normalizedSenderName =
    normalizeText(
      senderName,
      200
    ) ||
    DEFAULT_SENDER_NAME

  const normalizedReplyToEmail =
    normalizeEmail(
      replyToEmail
    )

  const normalizedSubject =
    normalizeText(
      subject,
      500
    )

  const normalizedHtml =
    String(html || "").trim()

  const normalizedText =
    String(text || "").trim()

  const normalizedIdempotencyKey =
    normalizeText(
      idempotencyKey,
      250
    )

  const normalizedSourceType =
    normalizeText(
      sourceType,
      100
    )

  const normalizedSourceId =
    normalizeText(
      sourceId,
      250
    )

  const normalizedMaxAttempts =
    normalizeMaxAttempts(
      maxAttempts
    )

  if (!normalizedCategory) {
    throw new Error(
      "Categoria email mancante."
    )
  }

  if (
    !EMAIL_PATTERN.test(
      normalizedRecipientEmail
    )
  ) {
    throw new Error(
      "Indirizzo email destinatario non valido."
    )
  }

  if (
    !EMAIL_PATTERN.test(
      normalizedSenderEmail
    )
  ) {
    throw new Error(
      "Indirizzo email mittente non valido."
    )
  }

  if (
    normalizedReplyToEmail &&
    !EMAIL_PATTERN.test(
      normalizedReplyToEmail
    )
  ) {
    throw new Error(
      "Indirizzo Reply-To non valido."
    )
  }

  if (!normalizedSubject) {
    throw new Error(
      "Oggetto email mancante."
    )
  }

  if (
    !normalizedHtml &&
    !normalizedText
  ) {
    throw new Error(
      "Contenuto email mancante."
    )
  }

  const adminSupabase =
    createAdminSupabaseClient()

  let delivery =
    await getExistingDelivery({
      adminSupabase,
      idempotencyKey:
        normalizedIdempotencyKey
    })

  const existingResult =
    buildExistingResult(
      delivery
    )

  if (existingResult) {
    return existingResult
  }

  if (!delivery) {
    delivery =
      await createDelivery({
        adminSupabase,

        idempotencyKey:
          normalizedIdempotencyKey,

        category:
          normalizedCategory,

        templateKey:
          normalizedTemplateKey,

        recipientEmail:
          normalizedRecipientEmail,

        recipientName:
          normalizedRecipientName,

        senderEmail:
          normalizedSenderEmail,

        senderName:
          normalizedSenderName,

        replyToEmail:
          normalizedReplyToEmail,

        subject:
          normalizedSubject,

        html:
          normalizedHtml,

        text:
          normalizedText,

        sourceType:
          normalizedSourceType,

        sourceId:
          normalizedSourceId,

        targetUserId,

        triggeredByUserId,

        retryOfId,

        metadata,

        maxAttempts:
          normalizedMaxAttempts
      })
  }

  const resultAfterCreation =
    buildExistingResult(
      delivery
    )

  if (resultAfterCreation) {
    return resultAfterCreation
  }

  const claimedDelivery =
    await claimDelivery({
      adminSupabase,
      delivery
    })

  if (!claimedDelivery) {
    const latestDelivery =
      await getExistingDelivery({
        adminSupabase,
        idempotencyKey:
          normalizedIdempotencyKey
      })

    const latestResult =
      buildExistingResult(
        latestDelivery
      )

    return (
      latestResult || {
        success: false,
        inProgress: true,
        deliveryId:
          delivery.id,
        status:
          "sending",
        error:
          "L'invio email è già stato preso in carico."
      }
    )
  }

  if (
    !process.env.RESEND_API_KEY
  ) {
    const configurationError =
      new Error(
        "RESEND_API_KEY non configurata."
      )

    const failureResult =
      await markDeliveryFailed({
        adminSupabase,
        delivery:
          claimedDelivery,
        error:
          configurationError
      })

    return {
      success: false,

      deliveryId:
        claimedDelivery.id,

      status:
        "failed",

      attemptsExhausted:
        failureResult
          .attemptsExhausted,

      trackingUpdateFailed:
        Boolean(
          failureResult.updateError
        ),

      error:
        configurationError.message
    }
  }

  const resend =
    new Resend(
      process.env.RESEND_API_KEY
    )

  const emailPayload = {
    from:
      `${normalizedSenderName} <${normalizedSenderEmail}>`,

    to: [
      normalizedRecipientEmail
    ],

    subject:
      normalizedSubject
  }

  if (normalizedReplyToEmail) {
    emailPayload.replyTo =
      normalizedReplyToEmail
  }

  if (normalizedHtml) {
    emailPayload.html =
      normalizedHtml
  }

  if (normalizedText) {
    emailPayload.text =
      normalizedText
  }

  try {
    const {
      data,
      error
    } =
      await resend.emails.send(
        emailPayload
      )

    if (error) {
      const failureResult =
        await markDeliveryFailed({
          adminSupabase,
          delivery:
            claimedDelivery,
          error
        })

      if (
        failureResult.updateError
      ) {
        console.error(
          "[tracked-email] Impossibile registrare il fallimento:",
          failureResult.updateError
        )
      }

      return {
        success: false,

        deliveryId:
          claimedDelivery.id,

        status:
          "failed",

        attemptsExhausted:
          failureResult
            .attemptsExhausted,

        trackingUpdateFailed:
          Boolean(
            failureResult
              .updateError
          ),

        error:
          getErrorMessage(error)
      }
    }

    const sentResult =
      await markDeliverySent({
        adminSupabase,

        delivery:
          claimedDelivery,

        providerData:
          data
      })

    if (sentResult.error) {
      /*
       * L'email è già stata accettata da Resend:
       * non restituiamo un errore operativo che
       * potrebbe causare un secondo invio.
       */
      console.error(
        "[tracked-email] Email inviata ma aggiornamento registro fallito:",
        sentResult.error
      )

      return {
        success: true,

        deliveryId:
          claimedDelivery.id,

        status:
          "sent",

        providerMessageId:
          sentResult
            .providerMessageId,

        trackingUpdateFailed:
          true
      }
    }

    return {
      success: true,

      deliveryId:
        claimedDelivery.id,

      status:
        "sent",

      providerMessageId:
        sentResult
          .providerMessageId,

      alreadyProcessed:
        false
    }
  } catch (error) {
    const failureResult =
      await markDeliveryFailed({
        adminSupabase,

        delivery:
          claimedDelivery,

        error
      })

    if (
      failureResult.updateError
    ) {
      console.error(
        "[tracked-email] Impossibile registrare l'errore imprevisto:",
        failureResult.updateError
      )
    }

    return {
      success: false,

      deliveryId:
        claimedDelivery.id,

      status:
        "failed",

      attemptsExhausted:
        failureResult
          .attemptsExhausted,

      trackingUpdateFailed:
        Boolean(
          failureResult.updateError
        ),

      error:
        getErrorMessage(error)
    }
  }
}