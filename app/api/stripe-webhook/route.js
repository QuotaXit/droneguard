import { NextResponse } from "next/server"
import Stripe from "stripe"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const MAX_WEBHOOK_BYTES = 1_000_000

const checkoutEvents = new Set([
  "checkout.session.completed",
  "checkout.session.async_payment_succeeded"
])

const refundEvents = new Set([
  "refund.created",
  "refund.updated",
  "refund.failed"
])

const supportedEvents = new Set([
  ...checkoutEvents,
  ...refundEvents
])

function jsonResponse(body, status = 200) {
  return NextResponse.json(
    body,
    {
      status,
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0"
      }
    }
  )
}

function isValidUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    String(value || "")
  )
}

function getPaymentIntentId(session) {
  if (!session?.payment_intent) {
    return null
  }

  if (
    typeof session.payment_intent === "string"
  ) {
    return session.payment_intent
  }

  return session.payment_intent.id || null
}

function getStripeObjectId(value) {
  if (!value) {
    return null
  }

  if (typeof value === "string") {
    return value
  }

  return value.id || null
}

function getRefundRequestId(refund) {
  const rawRequestId =
    String(
      refund?.metadata
        ?.droneguard_refund_request_id ||
      ""
    ).trim()

  return isValidUuid(rawRequestId)
    ? rawRequestId
    : null
}

function createRefundEventMetadata(
  event,
  refund
) {
  return {
    source:
      "stripe_refund_webhook",

    event_api_version:
      event?.api_version || null,

    event_created_at:
      Number.isFinite(
        Number(event?.created)
      )
        ? new Date(
            Number(event.created) *
              1000
          ).toISOString()
        : null,

    event_request_id:
      event?.request?.id || null,

    refund_reason:
      refund?.reason || null,

    refund_failure_reason:
      refund?.failure_reason || null,

    refund_pending_reason:
      refund?.pending_reason || null,

    refund_next_action_type:
      refund?.next_action?.type ||
      null,

    refund_metadata:
      refund?.metadata || {}
  }
}

export async function POST(request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error(
      "[stripe-webhook] STRIPE_SECRET_KEY mancante"
    )

    return jsonResponse(
      {
        received: false,
        error:
          "Configurazione Stripe mancante."
      },
      500
    )
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.error(
      "[stripe-webhook] STRIPE_WEBHOOK_SECRET mancante"
    )

    return jsonResponse(
      {
        received: false,
        error:
          "Configurazione webhook mancante."
      },
      500
    )
  }

  const signature =
    request.headers.get("stripe-signature")

  if (!signature) {
    return jsonResponse(
      {
        received: false,
        error:
          "Firma Stripe mancante."
      },
      400
    )
  }

  const contentLength = Number(
    request.headers.get("content-length") || 0
  )

  if (
    Number.isFinite(contentLength) &&
    contentLength > MAX_WEBHOOK_BYTES
  ) {
    return jsonResponse(
      {
        received: false,
        error:
          "Payload webhook troppo grande."
      },
      413
    )
  }

  let rawBody

  try {
    /*
     * Il corpo deve restare testo originale.
     * Non usare request.json() prima della
     * verifica della firma.
     */
    rawBody = await request.text()
  } catch (error) {
    console.error(
      "[stripe-webhook] Errore lettura body:",
      error
    )

    return jsonResponse(
      {
        received: false,
        error:
          "Payload webhook non leggibile."
      },
      400
    )
  }

  if (
    Buffer.byteLength(rawBody, "utf8") >
    MAX_WEBHOOK_BYTES
  ) {
    return jsonResponse(
      {
        received: false,
        error:
          "Payload webhook troppo grande."
      },
      413
    )
  }

  const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY
  )

  let event

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (error) {
    console.error(
      "[stripe-webhook] Firma non valida:",
      error?.message
    )

    return jsonResponse(
      {
        received: false,
        error:
          "Firma webhook non valida."
      },
      400
    )
  }

  /*
   * Gli eventi non necessari vengono riconosciuti
   * senza modificare saldo o database.
   */
  if (!supportedEvents.has(event.type)) {
    return jsonResponse({
      received: true,
      processed: false,
      ignored: true,
      eventType: event.type
    })
  }

  if (refundEvents.has(event.type)) {
  const refund =
    event.data?.object

  if (
    !refund ||
    refund.object !== "refund"
  ) {
    console.error(
      "[stripe-webhook] Oggetto Refund non valido:",
      event.id
    )

    return jsonResponse(
      {
        received: false,
        error:
          "Oggetto rimborso Stripe non valido."
      },
      400
    )
  }

  const stripeRefundId =
    String(
      refund.id || ""
    ).trim()

  const paymentIntentId =
    getStripeObjectId(
      refund.payment_intent
    )

  const amountTotal =
    Number(refund.amount)

  const currency =
    String(
      refund.currency || ""
    )
      .trim()
      .toLowerCase()

  let refundStatus =
    String(
      refund.status || ""
    )
      .trim()
      .toLowerCase()

  if (
    !refundStatus &&
    event.type === "refund.failed"
  ) {
    refundStatus = "failed"
  }

  const refundRequestId =
    getRefundRequestId(refund)

  const failureReason =
    refund.failure_reason
      ? String(
          refund.failure_reason
        ).slice(0, 2000)
      : null

  const refundMetadata =
    createRefundEventMetadata(
      event,
      refund
    )

  const adminSupabase =
    createAdminSupabaseClient()

  const {
    data: refundResult,
    error: refundError
  } = await adminSupabase
    .rpc(
      "process_stripe_refund_event",
      {
        p_event_id:
          event.id,

        p_event_type:
          event.type,

        p_refund_request_id:
          refundRequestId,

        p_stripe_refund_id:
          stripeRefundId,

        p_payment_intent_id:
          paymentIntentId,

        p_amount_total:
          amountTotal,

        p_currency:
          currency,

        p_refund_status:
          refundStatus,

        p_failure_reason:
          failureReason,

        p_livemode:
          Boolean(event.livemode),

        p_metadata:
          refundMetadata
      }
    )
    .single()

  if (refundError) {
    console.error(
      "[stripe-webhook] Errore elaborazione rimborso:",
      {
        eventId:
          event.id,

        refundId:
          stripeRefundId,

        code:
          refundError.code,

        message:
          refundError.message,

        details:
          refundError.details
      }
    )

    /*
     * Risposta 500:
     * Stripe ritenterà la consegna
     * dello stesso evento.
     */
    return jsonResponse(
      {
        received: false,
        error:
          "Elaborazione del rimborso non completata."
      },
      500
    )
  }

  if (!refundResult) {
    console.error(
      "[stripe-webhook] Risultato rimborso mancante:",
      {
        eventId:
          event.id,

        refundId:
          stripeRefundId
      }
    )

    return jsonResponse(
      {
        received: false,
        error:
          "Risultato rimborso non valido."
      },
      500
    )
  }

  const processingStatus =
    String(
      refundResult
        .event_processing_status ||
      ""
    )
      .trim()
      .toLowerCase()

  return jsonResponse({
    received: true,

    processed:
      processingStatus ===
      "processed",

    ignored:
      processingStatus ===
      "ignored",

    recordedFailure:
      processingStatus ===
      "failed",

    alreadyProcessed:
      Boolean(
        refundResult
          .already_processed
      ),

    eventId:
      event.id,

    eventType:
      event.type,

    stripeRefundId,

    stripeStatus:
      refundResult.stripe_status ||
      refundStatus,

    refundRequestId:
      refundResult
        .matched_request_id ||
      null,

    paymentId:
      refundResult.payment_id ||
      null,

    requestStatus:
      refundResult
        .request_status ||
      null,

    creditsAffected:
      Number(
        refundResult
          .credits_affected || 0
      ),

    balanceAfter:
      Number(
        refundResult
          .balance_after || 0
      )
  })
}

  const session = event.data?.object

  if (
    !session ||
    session.object !== "checkout.session"
  ) {
    console.error(
      "[stripe-webhook] Oggetto Checkout non valido:",
      event.id
    )

    return jsonResponse(
      {
        received: false,
        error:
          "Oggetto Stripe non valido."
      },
      400
    )
  }

  /*
   * checkout.session.completed può essere ricevuto
   * anche prima della conclusione di un metodo
   * di pagamento differito.
   *
   * In quel caso attendiamo
   * async_payment_succeeded.
   */
  if (session.payment_status !== "paid") {
    return jsonResponse({
      received: true,
      processed: false,
      pendingPayment: true,
      eventId: event.id,
      sessionId: session.id
    })
  }

  const userId = String(
    session.metadata?.user_id ||
      session.client_reference_id ||
      ""
  ).trim()

  const packageId = String(
    session.metadata?.package_id || ""
  )
    .trim()
    .toLowerCase()

  const amountTotal = Number(
    session.amount_total
  )

  const currency = String(
    session.currency || ""
  )
    .trim()
    .toLowerCase()

  const paymentStatus = String(
    session.payment_status || ""
  )
    .trim()
    .toLowerCase()

  const paymentIntentId =
    getPaymentIntentId(session)

  if (!isValidUuid(userId)) {
    console.error(
      "[stripe-webhook] user_id non valido:",
      {
        eventId: event.id,
        sessionId: session.id
      }
    )

    /*
     * Risposta 500:
     * Stripe ritenterà la consegna.
     */
    return jsonResponse(
      {
        received: false,
        error:
          "Utente Stripe non valido."
      },
      500
    )
  }

  if (!packageId) {
    console.error(
      "[stripe-webhook] package_id mancante:",
      {
        eventId: event.id,
        sessionId: session.id
      }
    )

    return jsonResponse(
      {
        received: false,
        error:
          "Pacchetto Stripe mancante."
      },
      500
    )
  }

  if (
    !Number.isSafeInteger(amountTotal) ||
    amountTotal < 0
  ) {
    console.error(
      "[stripe-webhook] Importo non valido:",
      {
        eventId: event.id,
        sessionId: session.id,
        amountTotal
      }
    )

    return jsonResponse(
      {
        received: false,
        error:
          "Importo Stripe non valido."
      },
      500
    )
  }

  if (!currency) {
    return jsonResponse(
      {
        received: false,
        error:
          "Valuta Stripe mancante."
      },
      500
    )
  }

  const adminSupabase =
    createAdminSupabaseClient()

  /*
   * La funzione SQL controlla nuovamente:
   *
   * - evento;
   * - sessione;
   * - pacchetto;
   * - prezzo;
   * - valuta;
   * - ruolo utente;
   * - stato pagamento;
   * - duplicazioni.
   *
   * Poi aggiorna nella stessa transazione:
   *
   * - payments;
   * - users.credits;
   * - credit_ledger;
   * - stripe_events.
   */
  const {
    data: processingResult,
    error: processingError
  } = await adminSupabase
    .rpc(
      "process_stripe_credit_payment",
      {
        p_event_id:
          event.id,

        p_event_type:
          event.type,

        p_checkout_session_id:
          session.id,

        p_payment_intent_id:
          paymentIntentId,

        p_user_id:
          userId,

        p_package_id:
          packageId,

        p_amount_total:
          amountTotal,

        p_currency:
          currency,

        p_payment_status:
          paymentStatus,

        p_livemode:
          Boolean(event.livemode)
      }
    )
    .single()

  if (processingError) {
    console.error(
      "[stripe-webhook] Errore elaborazione DB:",
      {
        eventId: event.id,
        sessionId: session.id,
        code: processingError.code,
        message: processingError.message,
        details: processingError.details
      }
    )

    /*
     * Non restituiamo 200:
     * Stripe deve ritentare l'evento.
     */
    return jsonResponse(
      {
        received: false,
        error:
          "Elaborazione del pagamento non completata."
      },
      500
    )
  }

  if (!processingResult) {
    console.error(
      "[stripe-webhook] Risultato DB mancante:",
      {
        eventId: event.id,
        sessionId: session.id
      }
    )

    return jsonResponse(
      {
        received: false,
        error:
          "Risultato pagamento non valido."
      },
      500
    )
  }

  // =====================================================
// NOTIFICA CENTRO OPERATIVO TEAM - PAGAMENTO
// =====================================================

try {
  const creditsAdded =
    Number(
      processingResult
        .credits_added || 0
    )

  const formattedAmount =
    new Intl.NumberFormat(
      "it-IT",
      {
        style: "currency",
        currency:
          currency.toUpperCase()
      }
    ).format(
      amountTotal / 100
    )

  const paymentMessage =
    creditsAdded > 0
      ? `${creditsAdded} crediti acquistati — ${formattedAmount}`
      : `Pagamento ricevuto — ${formattedAmount}`

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
            `stripe-payment:${session.id}`,

          category:
            "payment",

          severity:
            "success",

          title:
            "Pagamento ricevuto",

          message:
            paymentMessage,

          href:
            "/admin/payments",

          required_permission:
            "payments.view",

          source_type:
            "stripe_payment",

          source_id:
            processingResult
              .payment_id ||
            session.id,

          actor_user_id:
            userId,

          metadata: {
            checkout_session_id:
              session.id,

            payment_intent_id:
              paymentIntentId,

            payment_id:
              processingResult
                .payment_id ||
              null,

            ledger_id:
              processingResult
                .ledger_id ||
              null,

            package_id:
              packageId,

            credits_added:
              creditsAdded,

            amount_total:
              amountTotal,

            currency:
              currency,

            balance_after:
              Number(
                processingResult
                  .balance_after ||
                0
              ),

            livemode:
              Boolean(
                event.livemode
              )
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
      "[stripe-webhook] team payment notification insert failed:",
      teamNotificationError
    )
  }
} catch (
  teamNotificationUnexpectedError
) {
  console.error(
    "[stripe-webhook] team payment notification unexpected error:",
    teamNotificationUnexpectedError
  )
}

  return jsonResponse({
    received: true,
    processed: true,

    eventId:
      event.id,

    sessionId:
      session.id,

    paymentId:
      processingResult.payment_id,

    ledgerId:
      processingResult.ledger_id,

    alreadyProcessed:
      Boolean(
        processingResult.already_processed
      ),

    creditsAdded:
      Number(
        processingResult.credits_added || 0
      ),

    balanceAfter:
      Number(
        processingResult.balance_after || 0
      )
  })
}