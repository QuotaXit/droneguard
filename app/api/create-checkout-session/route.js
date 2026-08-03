import { NextResponse } from "next/server"
import Stripe from "stripe"
import {
  getOperationAvailability
} from "@/lib/platform/status"

import {
  createServerSupabaseClient
} from "@/lib/supabase/server"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const MAX_BODY_BYTES = 2_000

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

  if (role === "pilot" || role === "pilota") {
    return "pilot"
  }

  if (role === "client" || role === "cliente") {
    return "client"
  }

  return role
}

function getSiteUrl() {
  const configuredUrl = String(
    process.env.NEXT_PUBLIC_SITE_URL || ""
  )
    .trim()
    .replace(/\/+$/, "")

  if (!configuredUrl) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL_NOT_CONFIGURED"
    )
  }

  let parsedUrl

  try {
    parsedUrl = new URL(configuredUrl)
  } catch {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL_NOT_VALID"
    )
  }

  const isLocalhost =
    parsedUrl.hostname === "localhost" ||
    parsedUrl.hostname === "127.0.0.1"

  if (
    process.env.NODE_ENV === "production" &&
    !isLocalhost &&
    parsedUrl.protocol !== "https:"
  ) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL_HTTPS_REQUIRED"
    )
  }

  if (
    parsedUrl.protocol !== "https:" &&
    parsedUrl.protocol !== "http:"
  ) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL_PROTOCOL_NOT_VALID"
    )
  }

  return parsedUrl.origin
}

export async function POST(request) {
  /*
   * Blocca richieste inviate da siti esterni.
   */
  const requestOrigin =
    request.headers.get("origin")

  if (
    requestOrigin &&
    requestOrigin !== request.nextUrl.origin
  ) {
    return jsonError(
      "Origine della richiesta non autorizzata.",
      403
    )
  }

  /*
   * Limite semplice sul corpo della richiesta.
   */
  const contentLength = Number(
    request.headers.get("content-length") || 0
  )

  if (
    Number.isFinite(contentLength) &&
    contentLength > MAX_BODY_BYTES
  ) {
    return jsonError(
      "Richiesta troppo grande.",
      413
    )
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return jsonError(
      "Configurazione Stripe mancante.",
      500
    )
  }

  let siteUrl

  try {
    siteUrl = getSiteUrl()
  } catch (error) {
    console.error(
      "[stripe-checkout] Errore URL sito:",
      error
    )

    return jsonError(
      "Configurazione del sito non valida.",
      500
    )
  }

  /*
   * Identità autenticata ottenuta dai cookie.
   * Non accettiamo userId dal browser.
   */
  const supabase =
    await createServerSupabaseClient()

  const {
    data: { user },
    error: authError
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return jsonError(
      "Devi effettuare l'accesso per acquistare crediti.",
      401
    )
  }

    if (!user.email_confirmed_at) {
    return jsonError(
      "Devi confermare il tuo indirizzo email prima di acquistare crediti.",
      403
    )
  }

  /*
   * Controlla se i pagamenti sono abilitati
   * prima di leggere il pacchetto e contattare Stripe.
   */
  let paymentAvailability

  try {
    paymentAvailability =
      await getOperationAvailability(
        "payments"
      )
  } catch (platformError) {
    console.error(
      "[stripe-checkout] Stato piattaforma non disponibile:",
      platformError
    )

    return NextResponse.json(
      {
        success: false,

        error:
          "Il servizio pagamenti è temporaneamente non disponibile.",

        code:
          "PLATFORM_STATUS_UNAVAILABLE"
      },
      {
        status: 503,

        headers: {
          "Cache-Control":
            "private, no-store, max-age=0"
        }
      }
    )
  }

  if (!paymentAvailability.allowed) {
    return NextResponse.json(
      {
        success: false,

        error:
          paymentAvailability.message ||
          "Gli acquisti di crediti sono temporaneamente sospesi.",

        code:
          paymentAvailability.code ||
          "PLATFORM_PAYMENTS_DISABLED",

        maintenance:
          Boolean(
            paymentAvailability.status
              ?.maintenanceActive
          )
      },
      {
        status: 503,

        headers: {
          "Cache-Control":
            "private, no-store, max-age=0",

          "Retry-After":
            "300"
        }
      }
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

  try {
    body = await request.json()
  } catch {
    return jsonError(
      "Dati della richiesta non validi."
    )
  }

  /*
   * Viene letto soltanto packageId.
   * Un eventuale userId inviato dal vecchio frontend
   * viene completamente ignorato.
   */
  const packageId = String(
    body?.packageId || ""
  )
    .trim()
    .toLowerCase()
    .slice(0, 100)

  if (!packageId) {
    return jsonError(
      "Seleziona un pacchetto valido."
    )
  }

  const adminSupabase =
    createAdminSupabaseClient()

  /*
   * Carica profilo e pacchetto dal database.
   */
  const [
    profileResult,
    packageResult
  ] = await Promise.all([
    adminSupabase
      .from("users")
      .select(`
        id,
        email,
        role,
        banned
      `)
      .eq("id", user.id)
      .maybeSingle(),

    adminSupabase
      .from("credit_packages")
      .select(`
        package_id,
        name,
        account_role,
        credits,
        amount_cents,
        currency,
        active
      `)
      .eq("package_id", packageId)
      .eq("active", true)
      .maybeSingle()
  ])

  if (profileResult.error) {
    console.error(
      "[stripe-checkout] Errore profilo:",
      profileResult.error
    )

    return jsonError(
      "Impossibile controllare il profilo.",
      500
    )
  }

  if (!profileResult.data) {
    return jsonError(
      "Profilo utente non trovato.",
      404
    )
  }

  if (packageResult.error) {
    console.error(
      "[stripe-checkout] Errore pacchetto:",
      packageResult.error
    )

    return jsonError(
      "Impossibile controllare il pacchetto.",
      500
    )
  }

  if (!packageResult.data) {
    return jsonError(
      "Pacchetto non disponibile.",
      404
    )
  }

  const profile = profileResult.data
  const selectedPackage = packageResult.data

  if (profile.banned) {
    return jsonError(
      "Il tuo account è sospeso.",
      403
    )
  }

  const normalizedRole =
    normalizeRole(profile.role)

  if (
    normalizedRole !==
    selectedPackage.account_role
  ) {
    return jsonError(
      "Questo pacchetto non è disponibile per il tuo tipo di account.",
      403
    )
  }

  if (
    !Number.isInteger(
      Number(selectedPackage.credits)
    ) ||
    Number(selectedPackage.credits) <= 0 ||
    !Number.isInteger(
      Number(selectedPackage.amount_cents)
    ) ||
    Number(selectedPackage.amount_cents) <= 0
  ) {
    return jsonError(
      "Configurazione del pacchetto non valida.",
      500
    )
  }

  const currency = String(
    selectedPackage.currency || ""
  )
    .trim()
    .toLowerCase()

  if (currency !== "eur") {
    return jsonError(
      "Valuta del pacchetto non valida.",
      500
    )
  }

  const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY
  )

  const destinationPath =
    normalizedRole === "pilot"
      ? "/dashboard/pricing"
      : "/dashboard-client/credits"

  /*
   * Impedisce che un doppio clic crei molte sessioni
   * Stripe identiche nello stesso minuto.
   */
  const idempotencyWindow = Math.floor(
    Date.now() / 60_000
  )

  const idempotencyKey = [
    "droneguard",
    "credit-checkout",
    user.id,
    packageId,
    idempotencyWindow
  ].join(":")

  try {
    const session =
      await stripe.checkout.sessions.create(
        {
          mode: "payment",

          payment_method_types: [
            "card"
          ],

          client_reference_id:
            user.id,

          customer_email:
            user.email || profile.email,

          line_items: [
            {
              quantity: 1,

              price_data: {
                currency,

                unit_amount:
                  Number(
                    selectedPackage.amount_cents
                  ),

                product_data: {
                  name:
                    `${selectedPackage.name} - ` +
                    `${selectedPackage.credits} crediti`,

                  metadata: {
                    package_id:
                      selectedPackage.package_id
                  }
                }
              }
            }
          ],

          success_url:
            `${siteUrl}${destinationPath}` +
            "?success=true" +
            "&session_id={CHECKOUT_SESSION_ID}",

          cancel_url:
            `${siteUrl}${destinationPath}` +
            "?canceled=true",

          metadata: {
            user_id: user.id,

            package_id:
              selectedPackage.package_id,

            /*
             * Manteniamo temporaneamente credits
             * per compatibilità con il vecchio webhook.
             * Il nuovo webhook lo ignorerà.
             */
            credits: String(
              selectedPackage.credits
            )
          },

          payment_intent_data: {
            metadata: {
              user_id: user.id,

              package_id:
                selectedPackage.package_id
            }
          }
        },
        {
          idempotencyKey
        }
      )

    if (!session.url) {
      return jsonError(
        "Stripe non ha restituito il collegamento di pagamento.",
        500
      )
    }

    return NextResponse.json(
      {
        success: true,
        url: session.url,
        sessionId: session.id
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
      "[stripe-checkout] Errore creazione sessione:",
      error
    )

    return jsonError(
      "Impossibile avviare il pagamento. Riprova tra poco.",
      500
    )
  }
}