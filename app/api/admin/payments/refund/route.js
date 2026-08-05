import { NextResponse } from "next/server"
import Stripe from "stripe"

import {
  getTeamAccess
} from "@/lib/team/access"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const MAX_BODY_BYTES = 20_000

const uuidRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

function jsonResponse(
  body,
  status = 200
) {
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

function jsonError(
  message,
  status = 400,
  extra = {}
) {
  return jsonResponse(
    {
      success: false,
      error: message,
      ...extra
    },
    status
  )
}

function hasPermission(
  access,
  permission
) {
  const permissions =
    Array.isArray(access?.permissions)
      ? access.permissions
      : []

  return permissions.includes(permission)
}

function rejectInvalidOrigin(request) {
  const origin =
    request.headers.get("origin")

  if (
    !origin ||
    origin !== request.nextUrl.origin
  ) {
    return jsonError(
      "Origine della richiesta non autorizzata.",
      403
    )
  }

  return null
}

function cleanText(
  value,
  maxLength
) {
  return String(value || "")
    .replace(/\u0000/g, "")
    .trim()
    .slice(0, maxLength)
}

function getStripeKeyMode(secretKey) {
  const normalizedKey =
    String(secretKey || "").trim()

  if (
    normalizedKey.startsWith(
      "sk_test_"
    ) ||
    normalizedKey.startsWith(
      "rk_test_"
    )
  ) {
    return false
  }

  if (
    normalizedKey.startsWith(
      "sk_live_"
    ) ||
    normalizedKey.startsWith(
      "rk_live_"
    )
  ) {
    return true
  }

  return null
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

function mapPrepareError(error) {
  const message =
    String(
      error?.message || ""
    ).toUpperCase()

  if (
    message.includes(
      "OPERATORE_TEAM_MANCANTE"
    )
  ) {
    return {
      message:
        "Operatore Team non disponibile.",
      status: 401
    }
  }

  if (
    message.includes(
      "OPERATORE_NON_AUTORIZZATO_AL_RIMBORSO"
    )
  ) {
    return {
      message:
        "Non sei autorizzato a rimborsare i pagamenti.",
      status: 403
    }
  }

  if (
    message.includes(
      "PAGAMENTO_NON_TROVATO"
    )
  ) {
    return {
      message:
        "Pagamento non trovato.",
      status: 404
    }
  }

  if (
    message.includes(
      "UTENTE_PAGAMENTO_NON_TROVATO"
    )
  ) {
    return {
      message:
        "Utente collegato al pagamento non trovato.",
      status: 404
    }
  }

  if (
    message.includes(
      "CREDITI_INSUFFICIENTI_PER_RIMBORSO"
    )
  ) {
    return {
      message:
        "L’utente ha già utilizzato parte dei crediti acquistati. Il rimborso totale non può essere effettuato.",
      status: 409
    }
  }

  if (
    message.includes(
      "PAGAMENTO_GIA_RIMBORSATO"
    ) ||
    message.includes(
      "RIMBORSO_PAGAMENTO_GIA_PRESENTE"
    )
  ) {
    return {
      message:
        "Per questo pagamento esiste già un rimborso attivo o completato.",
      status: 409
    }
  }

  if (
    message.includes(
      "RICHIESTA_RIMBORSO_USATA_CON_DATI_DIFFERENTI"
    )
  ) {
    return {
      message:
        "L’identificativo della richiesta è già stato utilizzato con dati differenti.",
      status: 409
    }
  }

  if (
    message.includes(
      "PAGAMENTO_NON_ELABORATO"
    ) ||
    message.includes(
      "PAGAMENTO_NON_PAGATO"
    ) ||
    message.includes(
      "STATO_PAGAMENTO_NON_RIMBORSABILE"
    )
  ) {
    return {
      message:
        "Il pagamento non si trova in uno stato rimborsabile.",
      status: 409
    }
  }

  if (
    message.includes(
      "PAYMENT_INTENT_MANCANTE"
    )
  ) {
    return {
      message:
        "Il pagamento non contiene un Payment Intent Stripe.",
      status: 409
    }
  }

  if (
    message.includes(
      "MOTIVAZIONE_RIMBORSO_NON_VALIDA"
    )
  ) {
    return {
      message:
        "La motivazione deve contenere da 10 a 500 caratteri.",
      status: 400
    }
  }

  if (
    message.includes(
      "PAGAMENTO_MANCANTE"
    ) ||
    message.includes(
      "RICHIESTA_RIMBORSO_MANCANTE"
    ) ||
    message.includes(
      "CREDITI_PAGAMENTO_NON_VALIDI"
    ) ||
    message.includes(
      "IMPORTO_PAGAMENTO_NON_VALIDO"
    ) ||
    message.includes(
      "MODALITA_STRIPE_NON_DISPONIBILE"
    ) ||
    message.includes(
      "VALUTA_PAGAMENTO_NON_VALIDA"
    )
  ) {
    return {
      message:
        "I dati del pagamento non consentono il rimborso.",
      status: 400
    }
  }

  return {
    message:
      "Impossibile preparare il rimborso.",
    status: 500
  }
}

function createStripeSnapshot(refund) {
  return {
    source:
      "admin_payment_refund_api",

    stripe_created_at:
      Number.isFinite(
        Number(refund?.created)
      )
        ? new Date(
            Number(refund.created) *
              1000
          ).toISOString()
        : null,

    stripe_payment_intent_id:
      getStripeObjectId(
        refund?.payment_intent
      ),

    stripe_amount_cents:
      Number(refund?.amount || 0),

    stripe_currency:
      refund?.currency || null,

    stripe_reason:
      refund?.reason || null,

    stripe_failure_reason:
      refund?.failure_reason || null,

    stripe_pending_reason:
      refund?.pending_reason || null
  }
}

async function persistProviderState({
  adminSupabase,
  refundRequestId,
  refund = null,
  failureCode = null,
  failureMessage = null
}) {
  const updateData = {
    failure_code:
      failureCode
        ? cleanText(
            failureCode,
            100
          )
        : null,

    failure_message:
      failureMessage
        ? cleanText(
            failureMessage,
            2000
          )
        : null,

    updated_at:
      new Date().toISOString()
  }

  if (refund?.id) {
    updateData.stripe_refund_id =
      refund.id
  }

  if (refund?.status) {
    updateData.stripe_status =
      String(refund.status)
        .trim()
        .toLowerCase()
  }

  const {
    error
  } = await adminSupabase
    .from(
      "payment_refund_requests"
    )
    .update(updateData)
    .eq(
      "id",
      refundRequestId
    )
    .eq(
      "status",
      "pending_stripe"
    )

  if (error) {
    console.error(
      "[admin-payment-refund] Errore salvataggio stato Stripe:",
      error
    )

    return false
  }

  return true
}

export async function POST(request) {
  const originError =
    rejectInvalidOrigin(request)

  if (originError) {
    return originError
  }

  const {
    user,
    access
  } = await getTeamAccess()

  if (!user) {
    return jsonError(
      "Devi effettuare l’accesso.",
      401
    )
  }

  if (!access?.active) {
    return jsonError(
      "Accesso Team non autorizzato.",
      403
    )
  }

  if (
    !hasPermission(
      access,
      "payments.refund"
    )
  ) {
    return jsonError(
      "Non hai il permesso di rimborsare i pagamenti.",
      403
    )
  }

  const stripeSecretKey =
    process.env.STRIPE_SECRET_KEY

  if (!stripeSecretKey) {
    console.error(
      "[admin-payment-refund] STRIPE_SECRET_KEY mancante"
    )

    return jsonError(
      "Configurazione Stripe mancante.",
      500
    )
  }

  const stripeKeyMode =
    getStripeKeyMode(
      stripeSecretKey
    )

  if (stripeKeyMode === null) {
    console.error(
      "[admin-payment-refund] Modalità chiave Stripe non riconosciuta"
    )

    return jsonError(
      "La chiave Stripe configurata non è valida.",
      500
    )
  }

  const contentLength = Number(
    request.headers.get(
      "content-length"
    ) || 0
  )

  if (
    Number.isFinite(contentLength) &&
    contentLength >
      MAX_BODY_BYTES
  ) {
    return jsonError(
      "Dati della richiesta troppo grandi.",
      413
    )
  }

  let body

  try {
    body = await request.json()
  } catch {
    return jsonError(
      "Dati della richiesta non validi."
    )
  }

  const paymentId =
    cleanText(
      body?.paymentId,
      50
    )

  const requestId =
    cleanText(
      body?.requestId,
      50
    )

  const reason =
    cleanText(
      body?.reason,
      500
    )

  if (!uuidRegex.test(paymentId)) {
    return jsonError(
      "Identificativo pagamento non valido."
    )
  }

  if (!uuidRegex.test(requestId)) {
    return jsonError(
      "Identificativo richiesta non valido."
    )
  }

  if (
    reason.length < 10 ||
    reason.length > 500
  ) {
    return jsonError(
      "La motivazione deve contenere da 10 a 500 caratteri."
    )
  }

  const adminSupabase =
    createAdminSupabaseClient()

  /*
   * Controllo preliminare della modalità Stripe.
   * Viene eseguito prima di prenotare e sottrarre
   * i crediti.
   */
  const {
    data: paymentPreflight,
    error: paymentPreflightError
  } = await adminSupabase
    .from("payments")
    .select(`
      id,
      livemode
    `)
    .eq(
      "id",
      paymentId
    )
    .maybeSingle()

  if (paymentPreflightError) {
    console.error(
      "[admin-payment-refund] Errore controllo pagamento:",
      paymentPreflightError
    )

    return jsonError(
      "Impossibile controllare il pagamento.",
      500
    )
  }

  if (!paymentPreflight) {
    return jsonError(
      "Pagamento non trovato.",
      404
    )
  }

  if (
    typeof paymentPreflight.livemode !==
    "boolean"
  ) {
    return jsonError(
      "La modalità Stripe del pagamento non è disponibile.",
      409
    )
  }

  if (
    paymentPreflight.livemode !==
    stripeKeyMode
  ) {
    return jsonError(
      paymentPreflight.livemode
        ? "Il pagamento è LIVE, ma il server utilizza una chiave Stripe TEST."
        : "Il pagamento è TEST, ma il server utilizza una chiave Stripe LIVE.",
      409
    )
  }

  /*
   * Prenota il rimborso e sottrae atomicamente
   * i crediti dal saldo dell’utente.
   */
  const {
    data: preparedRefund,
    error: prepareError
  } = await adminSupabase
    .rpc(
      "admin_prepare_payment_refund",
      {
        p_actor_user_id:
          user.id,

        p_payment_id:
          paymentId,

        p_request_id:
          requestId,

        p_reason:
          reason
      }
    )
    .single()

  if (prepareError) {
    console.error(
      "[admin-payment-refund] Errore preparazione:",
      prepareError
    )

    const mappedError =
      mapPrepareError(
        prepareError
      )

    return jsonError(
      mappedError.message,
      mappedError.status
    )
  }

  if (!preparedRefund) {
    return jsonError(
      "La preparazione del rimborso non ha restituito un risultato valido.",
      500
    )
  }

  if (
    preparedRefund.refund_status ===
    "succeeded"
  ) {
    return jsonResponse({
      success: true,
      alreadyCompleted: true,

      message:
        "Il pagamento era già stato rimborsato.",

      refundRequestId:
        preparedRefund
          .refund_request_id,

      paymentId:
        preparedRefund.payment_id,

      stripeRefundId:
        preparedRefund
          .stripe_refund_id,

      balanceAfter:
        Number(
          preparedRefund
            .balance_after || 0
        )
    })
  }

  if (
    preparedRefund.refund_status ===
      "failed" ||
    preparedRefund.refund_status ===
      "cancelled"
  ) {
    return jsonError(
      "Questa richiesta di rimborso è già stata chiusa. Avvia un nuovo tentativo con un nuovo identificativo.",
      409
    )
  }

  if (
    preparedRefund.refund_status !==
    "pending_stripe"
  ) {
    return jsonError(
      "La richiesta di rimborso si trova in uno stato non valido.",
      409
    )
  }

  const amountCents =
    Number(
      preparedRefund.amount_cents
    )

  if (
    !Number.isSafeInteger(
      amountCents
    ) ||
    amountCents <= 0
  ) {
    return jsonError(
      "Importo del rimborso non valido.",
      500,
      {
        refundPending: true,
        refundRequestId:
          preparedRefund
            .refund_request_id
      }
    )
  }

  const stripe =
    new Stripe(
      stripeSecretKey
    )

  let stripeRefund

  try {
    /*
     * Se il rimborso era già stato collegato,
     * recupera lo stesso oggetto Stripe.
     */
    if (
      preparedRefund
        .stripe_refund_id
    ) {
      stripeRefund =
        await stripe.refunds.retrieve(
          preparedRefund
            .stripe_refund_id
        )
    } else {
      stripeRefund =
        await stripe.refunds.create(
          {
            payment_intent:
              preparedRefund
                .stripe_payment_intent_id,

            amount:
              amountCents,

            reason:
              "requested_by_customer",

            metadata: {
              droneguard_refund_request_id:
                preparedRefund
                  .refund_request_id,

              droneguard_payment_id:
                preparedRefund
                  .payment_id,

              droneguard_request_id:
                requestId,

              droneguard_actor_user_id:
                user.id
            }
          },
          {
            idempotencyKey:
              `droneguard:payment-refund:${requestId}`
          }
        )
    }
  } catch (error) {
    console.error(
      "[admin-payment-refund] Errore Stripe:",
      {
        type:
          error?.type,

        code:
          error?.code,

        message:
          error?.message,

        requestId:
          error?.requestId
      }
    )

    /*
     * Non ripristina automaticamente i crediti:
     * un errore di rete può avvenire dopo che Stripe
     * ha già creato il rimborso.
     */
    await persistProviderState({
      adminSupabase,

      refundRequestId:
        preparedRefund
          .refund_request_id,

      failureCode:
        error?.code ||
        error?.type ||
        "stripe_request_error",

      failureMessage:
        error?.message ||
        "Errore durante la richiesta a Stripe."
    })

    return jsonError(
      "Stripe non ha restituito un esito certo. La richiesta resta in attesa e potrà essere ripetuta in sicurezza.",
      502,
      {
        refundPending: true,

        refundRequestId:
          preparedRefund
            .refund_request_id
      }
    )
  }

  if (
    !stripeRefund?.id ||
    stripeRefund.object !== "refund"
  ) {
    return jsonError(
      "Stripe non ha restituito un rimborso valido.",
      502,
      {
        refundPending: true,

        refundRequestId:
          preparedRefund
            .refund_request_id
      }
    )
  }

  const stripePaymentIntentId =
    getStripeObjectId(
      stripeRefund.payment_intent
    )

  const stripeStatus =
    String(
      stripeRefund.status ||
      "pending"
    )
      .trim()
      .toLowerCase()

  const stripeCurrency =
    String(
      stripeRefund.currency || ""
    )
      .trim()
      .toLowerCase()

  const stripeAmount =
    Number(
      stripeRefund.amount
    )

  if (
    stripePaymentIntentId !==
      preparedRefund
        .stripe_payment_intent_id ||
    stripeAmount !== amountCents ||
    stripeCurrency !==
      preparedRefund.currency
  ) {
    await persistProviderState({
      adminSupabase,

      refundRequestId:
        preparedRefund
          .refund_request_id,

      refund:
        stripeRefund,

      failureCode:
        "stripe_refund_data_mismatch",

      failureMessage:
        "I dati restituiti da Stripe non coincidono con il pagamento."
    })

    return jsonError(
      "I dati del rimborso Stripe non coincidono con il pagamento. La richiesta resta bloccata per verifica.",
      500,
      {
        refundPending: true,

        refundRequestId:
          preparedRefund
            .refund_request_id,

        stripeRefundId:
          stripeRefund.id
      }
    )
  }

  /*
   * Salva immediatamente l’identificativo Stripe,
   * anche prima della finalizzazione nel database.
   */
  const providerStateSaved =
    await persistProviderState({
      adminSupabase,

      refundRequestId:
        preparedRefund
          .refund_request_id,

      refund:
        stripeRefund
    })

  if (
    !providerStateSaved &&
    (
      stripeStatus === "pending" ||
      stripeStatus ===
        "requires_action"
    )
  ) {
    return jsonError(
      "Il rimborso è stato creato su Stripe, ma non è stato possibile registrarne lo stato.",
      500,
      {
        refundPending: true,

        refundRequestId:
          preparedRefund
            .refund_request_id,

        stripeRefundId:
          stripeRefund.id
      }
    )
  }

  const stripeSnapshot =
    createStripeSnapshot(
      stripeRefund
    )

  if (stripeStatus === "succeeded") {
    const {
      data: completionResult,
      error: completionError
    } = await adminSupabase
      .rpc(
        "complete_payment_refund",
        {
          p_refund_request_id:
            preparedRefund
              .refund_request_id,

          p_stripe_refund_id:
            stripeRefund.id,

          p_stripe_status:
            stripeStatus,

          p_stripe_metadata:
            stripeSnapshot
        }
      )
      .single()

    if (completionError) {
      console.error(
        "[admin-payment-refund] Stripe riuscito ma completamento DB fallito:",
        completionError
      )

      return jsonError(
        "Il rimborso è riuscito su Stripe, ma la registrazione nel database deve essere completata.",
        500,
        {
          refundPending: true,

          refundRequestId:
            preparedRefund
              .refund_request_id,

          stripeRefundId:
            stripeRefund.id
        }
      )
    }

    return jsonResponse({
      success: true,

      message:
        "Pagamento rimborsato e crediti stornati correttamente.",

      refundRequestId:
        completionResult
          .refund_request_id,

      paymentId:
        completionResult.payment_id,

      stripeRefundId:
        completionResult
          .stripe_refund_id,

      stripeStatus:
        completionResult
          .stripe_status,

      creditsReversed:
        Number(
          completionResult
            .credits_reversed || 0
        ),

      alreadyCompleted:
        Boolean(
          completionResult
            .already_completed
        )
    })
  }

  if (
    stripeStatus === "failed" ||
    stripeStatus === "canceled"
  ) {
    const finalStatus =
      stripeStatus === "canceled"
        ? "cancelled"
        : "failed"

    const {
      data: failureResult,
      error: failureError
    } = await adminSupabase
      .rpc(
        "fail_payment_refund",
        {
          p_refund_request_id:
            preparedRefund
              .refund_request_id,

          p_final_status:
            finalStatus,

          p_stripe_refund_id:
            stripeRefund.id,

          p_stripe_status:
            stripeStatus,

          p_failure_code:
            stripeRefund
              .failure_reason ||
            stripeStatus,

          p_failure_message:
            stripeRefund
              .failure_reason
              ? `Stripe ha chiuso il rimborso: ${stripeRefund.failure_reason}.`
              : "Stripe non ha completato il rimborso.",

          p_stripe_metadata:
            stripeSnapshot
        }
      )
      .single()

    if (failureError) {
      console.error(
        "[admin-payment-refund] Errore ripristino crediti:",
        failureError
      )

      return jsonError(
        "Il rimborso Stripe non è riuscito, ma il ripristino dei crediti deve essere completato.",
        500,
        {
          refundPending: true,

          refundRequestId:
            preparedRefund
              .refund_request_id,

          stripeRefundId:
            stripeRefund.id
        }
      )
    }

    return jsonError(
      "Stripe non ha completato il rimborso. I crediti sono stati restituiti all’utente.",
      409,
      {
        refundPending: false,

        refundRequestId:
          failureResult
            .refund_request_id,

        stripeRefundId:
          failureResult
            .stripe_refund_id,

        creditsRestored:
          Number(
            failureResult
              .credits_restored || 0
          ),

        balanceAfter:
          Number(
            failureResult
              .balance_after || 0
          )
      }
    )
  }

  /*
   * pending, requires_action o eventuale
   * nuovo stato non definitivo.
   */
  return jsonResponse(
    {
      success: true,
      pending: true,

      message:
        stripeStatus ===
        "requires_action"
          ? "Il rimborso richiede un’azione aggiuntiva su Stripe."
          : "Il rimborso è stato creato ed è in attesa di conferma Stripe.",

      refundRequestId:
        preparedRefund
          .refund_request_id,

      paymentId:
        preparedRefund.payment_id,

      stripeRefundId:
        stripeRefund.id,

      stripeStatus,

      creditsReserved:
        Number(
          preparedRefund
            .credits_reversed || 0
        )
    },
    202
  )
}