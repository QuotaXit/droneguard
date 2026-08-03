import { NextResponse } from "next/server"

import {
  getTeamAccess
} from "@/lib/team/access"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const PAGE_SIZE = 30

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

function clampPage(value) {
  const parsed = Number.parseInt(value, 10)

  if (
    !Number.isFinite(parsed) ||
    parsed < 1
  ) {
    return 1
  }

  return Math.min(parsed, 10000)
}

function sanitizeSearch(value) {
  return String(value || "")
    .trim()
    .slice(0, 120)
    .replace(
      /[^\p{L}\p{N}@._\-\s]/gu,
      " "
    )
    .replace(/\s+/g, " ")
    .trim()
}

function normalizeUser(user) {
  if (!user) {
    return null
  }

  return {
    id: user.id,

    email:
      user.email ||
      "Email non disponibile",

    name:
      user.name || "",

    surname:
      user.surname || "",

    role:
      user.role || ""
  }
}

function normalizePayment(payment) {
  const fallbackAmountCents =
    payment.amount !== null &&
    payment.amount !== undefined
      ? Math.round(
          Number(payment.amount || 0) * 100
        )
      : 0

  return {
    id:
      payment.id,

    userId:
      payment.user_id,

    amount:
      Number(payment.amount || 0),

    amountCents:
      payment.amount_cents === null ||
      payment.amount_cents === undefined
        ? fallbackAmountCents
        : Number(payment.amount_cents),

    status:
      payment.status || "",

    processingStatus:
      payment.processing_status ||
      "legacy",

    paymentStatus:
      payment.payment_status || null,

    packageId:
      payment.package_id || null,

    credits:
      payment.credits === null ||
      payment.credits === undefined
        ? null
        : Number(payment.credits),

    currency:
      payment.currency || "eur",

    checkoutSessionId:
      payment.stripe_checkout_session_id ||
      null,

    paymentIntentId:
      payment.stripe_payment_intent_id ||
      null,

    stripeEventId:
      payment.stripe_event_id || null,

    livemode:
      typeof payment.livemode === "boolean"
        ? payment.livemode
        : null,

    failureMessage:
      payment.failure_message || null,

    metadata:
      payment.metadata || {},

    processedAt:
      payment.processed_at || null,

    createdAt:
      payment.created_at,

    updatedAt:
      payment.updated_at || null
  }
}

export async function GET(request) {
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
    Array.isArray(access.permissions)
      ? access.permissions
      : []

  if (
    !permissions.includes(
      "payments.view"
    )
  ) {
    return jsonError(
      "Non hai il permesso di visualizzare i pagamenti.",
      403
    )
  }

  const searchParams =
    request.nextUrl.searchParams

  const page = clampPage(
    searchParams.get("page")
  )

  const search = sanitizeSearch(
    searchParams.get("search")
  )

  const status = String(
    searchParams.get("status") || "all"
  )
    .trim()
    .toLowerCase()

  const mode = String(
    searchParams.get("mode") || "all"
  )
    .trim()
    .toLowerCase()

  const allowedStatuses = new Set([
    "all",
    "legacy",
    "pending",
    "processed",
    "failed",
    "ignored",
    "refunded"
  ])

  const allowedModes = new Set([
    "all",
    "test",
    "live",
    "unknown"
  ])

  if (!allowedStatuses.has(status)) {
    return jsonError(
      "Filtro stato non valido."
    )
  }

  if (!allowedModes.has(mode)) {
    return jsonError(
      "Filtro modalità non valido."
    )
  }

  const from =
    (page - 1) * PAGE_SIZE

  const to =
    from + PAGE_SIZE - 1

  const adminSupabase =
    createAdminSupabaseClient()

  /*
   * Cerca prima gli utenti corrispondenti.
   */
  let matchingUserIds = []

  if (search) {
    const pattern = `%${search}%`

    const {
      data: matchingUsers,
      error: usersSearchError
    } = await adminSupabase
      .from("users")
      .select("id")
      .neq("role", "team")
      .or(
        [
          `email.ilike.${pattern}`,
          `name.ilike.${pattern}`,
          `surname.ilike.${pattern}`,
          `city.ilike.${pattern}`
        ].join(",")
      )
      .limit(500)

    if (usersSearchError) {
      console.error(
        "[admin-payments] Errore ricerca utenti:",
        usersSearchError
      )

      return jsonError(
        "Impossibile eseguire la ricerca.",
        500
      )
    }

    matchingUserIds = (
      matchingUsers || []
    )
      .map((currentUser) =>
        currentUser.id
      )
      .filter(Boolean)
  }

  let paymentsQuery =
    adminSupabase
      .from("payments")
      .select(
        `
          id,
          user_id,
          amount,
          status,
          stripe_checkout_session_id,
          stripe_payment_intent_id,
          stripe_event_id,
          package_id,
          credits,
          amount_cents,
          currency,
          payment_status,
          processing_status,
          failure_message,
          livemode,
          metadata,
          processed_at,
          created_at,
          updated_at
        `,
        {
          count: "exact"
        }
      )
      .order(
        "created_at",
        {
          ascending: false
        }
      )
      .range(from, to)

  if (status !== "all") {
    paymentsQuery =
      paymentsQuery.eq(
        "processing_status",
        status
      )
  }

  if (mode === "test") {
    paymentsQuery =
      paymentsQuery.eq(
        "livemode",
        false
      )
  }

  if (mode === "live") {
    paymentsQuery =
      paymentsQuery.eq(
        "livemode",
        true
      )
  }

  if (mode === "unknown") {
    paymentsQuery =
      paymentsQuery.is(
        "livemode",
        null
      )
  }

  if (search) {
    const pattern = `%${search}%`

    const directFilters = [
      `stripe_checkout_session_id.ilike.${pattern}`,
      `stripe_payment_intent_id.ilike.${pattern}`,
      `stripe_event_id.ilike.${pattern}`,
      `package_id.ilike.${pattern}`
    ]

    if (matchingUserIds.length > 0) {
      directFilters.push(
        `user_id.in.(${matchingUserIds.join(
          ","
        )})`
      )
    }

    paymentsQuery =
      paymentsQuery.or(
        directFilters.join(",")
      )
  }

  const {
    data: paymentsData,
    count,
    error: paymentsError
  } = await paymentsQuery

  if (paymentsError) {
    console.error(
      "[admin-payments] Errore pagamenti:",
      paymentsError
    )

    return jsonError(
      "Impossibile caricare i pagamenti.",
      500
    )
  }

  const paymentRows =
    paymentsData || []

  const userIds = [
    ...new Set(
      paymentRows
        .map((payment) =>
          payment.user_id
        )
        .filter(Boolean)
    )
  ]

  const packageIds = [
    ...new Set(
      paymentRows
        .map((payment) =>
          payment.package_id
        )
        .filter(Boolean)
    )
  ]

  const paymentIds = [
    ...new Set(
      paymentRows
        .map((payment) =>
          payment.id
        )
        .filter(Boolean)
    )
  ]

  let relatedUsers = []
  let relatedPackages = []
  let relatedEvents = []

  if (userIds.length > 0) {
    const {
      data,
      error
    } = await adminSupabase
      .from("users")
      .select(`
        id,
        email,
        name,
        surname,
        role
      `)
      .in("id", userIds)

    if (error) {
      console.error(
        "[admin-payments] Errore utenti collegati:",
        error
      )

      return jsonError(
        "Impossibile caricare gli utenti collegati.",
        500
      )
    }

    relatedUsers = data || []
  }

  if (packageIds.length > 0) {
    const {
      data,
      error
    } = await adminSupabase
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
      .in(
        "package_id",
        packageIds
      )

    if (error) {
      console.error(
        "[admin-payments] Errore pacchetti:",
        error
      )

      return jsonError(
        "Impossibile caricare i pacchetti.",
        500
      )
    }

    relatedPackages = data || []
  }

  if (paymentIds.length > 0) {
    const {
      data,
      error
    } = await adminSupabase
      .from("stripe_events")
      .select(`
        id,
        event_id,
        event_type,
        payment_id,
        processing_status,
        error_message,
        received_at,
        processed_at
      `)
      .in(
        "payment_id",
        paymentIds
      )
      .order(
        "received_at",
        {
          ascending: false
        }
      )

    if (error) {
      console.error(
        "[admin-payments] Errore eventi Stripe:",
        error
      )
    } else {
      relatedEvents = data || []
    }
  }

  const {
    data: summaryData,
    error: summaryError
  } = await adminSupabase
    .rpc(
      "get_admin_payments_summary"
    )
    .single()

  if (summaryError) {
    console.error(
      "[admin-payments] Errore riepilogo:",
      summaryError
    )

    return jsonError(
      "Impossibile calcolare il riepilogo dei pagamenti.",
      500
    )
  }

  const usersMap = new Map(
    relatedUsers.map(
      (relatedUser) => [
        relatedUser.id,
        relatedUser
      ]
    )
  )

  const packagesMap = new Map(
    relatedPackages.map(
      (currentPackage) => [
        currentPackage.package_id,
        currentPackage
      ]
    )
  )

  /*
   * Conserva l'evento più recente
   * associato a ciascun pagamento.
   */
  const eventsMap = new Map()

  for (const event of relatedEvents) {
    if (
      event.payment_id &&
      !eventsMap.has(event.payment_id)
    ) {
      eventsMap.set(
        event.payment_id,
        event
      )
    }
  }

  const total = count || 0

  const payments = paymentRows.map(
    (payment) => {
      const normalized =
        normalizePayment(payment)

      const relatedUser =
        usersMap.get(payment.user_id)

      const relatedPackage =
        packagesMap.get(
          payment.package_id
        )

      const latestEvent =
        eventsMap.get(payment.id)

      return {
        ...normalized,

        user:
          normalizeUser(relatedUser),

        package: relatedPackage
          ? {
              id:
                relatedPackage.package_id,

              name:
                relatedPackage.name,

              accountRole:
                relatedPackage.account_role,

              credits:
                Number(
                  relatedPackage.credits || 0
                ),

              amountCents:
                Number(
                  relatedPackage.amount_cents ||
                    0
                ),

              currency:
                relatedPackage.currency,

              active:
                Boolean(
                  relatedPackage.active
                )
            }
          : null,

        latestEvent: latestEvent
          ? {
              id:
                latestEvent.id,

              eventId:
                latestEvent.event_id,

              eventType:
                latestEvent.event_type,

              processingStatus:
                latestEvent.processing_status,

              errorMessage:
                latestEvent.error_message,

              receivedAt:
                latestEvent.received_at,

              processedAt:
                latestEvent.processed_at
            }
          : null
      }
    }
  )

  return NextResponse.json(
    {
      success: true,

      payments,

      summary: {
        totalCount:
          Number(
            summaryData?.total_count || 0
          ),

        processedCount:
          Number(
            summaryData?.processed_count ||
              0
          ),

        failedCount:
          Number(
            summaryData?.failed_count || 0
          ),

        pendingCount:
          Number(
            summaryData?.pending_count || 0
          ),

        legacyCount:
          Number(
            summaryData?.legacy_count || 0
          ),

        refundedCount:
          Number(
            summaryData?.refunded_count || 0
          ),

        testCount:
          Number(
            summaryData?.test_count || 0
          ),

        liveCount:
          Number(
            summaryData?.live_count || 0
          ),

        grossAmountCents:
          Number(
            summaryData
              ?.gross_amount_cents || 0
          ),

        creditsSold:
          Number(
            summaryData?.credits_sold || 0
          )
      },

      pagination: {
        page,
        pageSize:
          PAGE_SIZE,
        total,
        totalPages:
          Math.max(
            1,
            Math.ceil(
              total / PAGE_SIZE
            )
          )
      },

      filters: {
        search,
        status,
        mode
      }
    },
    {
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0"
      }
    }
  )
}