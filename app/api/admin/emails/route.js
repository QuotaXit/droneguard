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

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

const PAGE_SIZE = 40

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

const ALLOWED_STATUSES = new Set([
  "all",
  "pending",
  "sending",
  "sent",
  "failed",
  "cancelled"
])

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

function clampPage(value) {
  const parsedValue =
    Number.parseInt(value, 10)

  if (
    !Number.isFinite(parsedValue) ||
    parsedValue < 1
  ) {
    return 1
  }

  return Math.min(
    parsedValue,
    10000
  )
}

function sanitizeFilter(
  value,
  maxLength = 120
) {
  return String(value || "")
    .trim()
    .slice(0, maxLength)
    .replace(
      /[^\p{L}\p{N}@._:\-\s]/gu,
      " "
    )
    .replace(/\s+/g, " ")
    .trim()
}

function normalizeDateFilter(
  value,
  endOfDay = false
) {
  const normalizedValue =
    String(value || "").trim()

  if (!normalizedValue) {
    return null
  }

  const match =
    /^(\d{4})-(\d{2})-(\d{2})$/
      .exec(normalizedValue)

  if (!match) {
    return null
  }

  const year =
    Number(match[1])

  const month =
    Number(match[2])

  const day =
    Number(match[3])

  const date =
    new Date(
      Date.UTC(
        year,
        month - 1,
        day,
        endOfDay ? 23 : 0,
        endOfDay ? 59 : 0,
        endOfDay ? 59 : 0,
        endOfDay ? 999 : 0
      )
    )

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null
  }

  return date.toISOString()
}

function mapDelivery(
  delivery,
  includePayload = false
) {
  const result = {
    id:
      delivery.id,

    idempotencyKey:
      delivery.idempotency_key ||
      null,

    category:
      delivery.category,

    templateKey:
      delivery.template_key ||
      null,

    recipientEmail:
      delivery.recipient_email,

    recipientName:
      delivery.recipient_name ||
      "",

    senderEmail:
      delivery.sender_email,

    senderName:
      delivery.sender_name,

    replyToEmail:
      delivery.reply_to_email ||
      null,

    subject:
      delivery.subject,

    provider:
      delivery.provider,

    providerMessageId:
      delivery.provider_message_id ||
      null,

    status:
      delivery.status,

    attemptCount: Number(
      delivery.attempt_count || 0
    ),

    maxAttempts: Number(
      delivery.max_attempts || 3
    ),

    lastError:
      delivery.last_error ||
      "",

    lastAttemptAt:
      delivery.last_attempt_at ||
      null,

    nextRetryAt:
      delivery.next_retry_at ||
      null,

    sentAt:
      delivery.sent_at ||
      null,

    failedAt:
      delivery.failed_at ||
      null,

    sourceType:
      delivery.source_type ||
      null,

    sourceId:
      delivery.source_id ||
      null,

    targetUserId:
      delivery.target_user_id ||
      null,

    triggeredByUserId:
      delivery.triggered_by_user_id ||
      null,

    retryOfId:
      delivery.retry_of_id ||
      null,

    metadata:
      delivery.metadata ||
      {},

    providerResponse:
      delivery.provider_response ||
      null,

    createdAt:
      delivery.created_at,

    updatedAt:
      delivery.updated_at
  }

  if (includePayload) {
    result.requestPayload =
      delivery.request_payload ||
      {}
  }

  return result
}

async function getStatusCount({
  adminSupabase,
  status = null
}) {
  let query =
    adminSupabase
      .from("email_deliveries")
      .select(
        "id",
        {
          count: "exact",
          head: true
        }
      )

  if (status) {
    query =
      query.eq(
        "status",
        status
      )
  }

  const {
    count,
    error
  } = await query

  if (error) {
    console.error(
      "[admin-emails] Errore contatore:",
      {
        status,
        error
      }
    )

    return 0
  }

  return Number(count || 0)
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
    Array.isArray(
      access.permissions
    )
      ? access.permissions
      : []

  if (
    !permissions.includes(
      "emails.view"
    )
  ) {
    return jsonError(
      "Non hai il permesso di consultare gli invii email.",
      403
    )
  }

  const searchParams =
    request.nextUrl.searchParams

  const deliveryId =
    String(
      searchParams.get(
        "deliveryId"
      ) || ""
    ).trim()

  const adminSupabase =
    createAdminSupabaseClient()

  /*
   * Dettaglio singolo invio.
   */
  if (deliveryId) {
    if (
      !UUID_PATTERN.test(
        deliveryId
      )
    ) {
      return jsonError(
        "Identificativo invio non valido."
      )
    }

    const {
      data: delivery,
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
        provider_response,
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
        "id",
        deliveryId
      )
      .maybeSingle()

    if (error) {
      console.error(
        "[admin-emails] Errore dettaglio invio:",
        error
      )

      return jsonError(
        "Impossibile caricare il dettaglio dell'email.",
        500
      )
    }

    if (!delivery) {
      return jsonError(
        "Invio email non trovato.",
        404
      )
    }

    return NextResponse.json(
      {
        success: true,

        delivery:
          mapDelivery(
            delivery,
            true
          ),

        permissions: {
          canRetry:
            permissions.includes(
              "emails.retry"
            )
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

  const page =
    clampPage(
      searchParams.get("page")
    )

  const status =
    String(
      searchParams.get(
        "status"
      ) || "all"
    )
      .trim()
      .toLowerCase()

  const category =
    sanitizeFilter(
      searchParams.get(
        "category"
      ),
      100
    )

  const search =
    sanitizeFilter(
      searchParams.get(
        "search"
      ),
      120
    )

  const rawDateFrom =
    String(
      searchParams.get(
        "dateFrom"
      ) || ""
    ).trim()

  const rawDateTo =
    String(
      searchParams.get(
        "dateTo"
      ) || ""
    ).trim()

  if (
    !ALLOWED_STATUSES.has(
      status
    )
  ) {
    return jsonError(
      "Stato email non valido."
    )
  }

  const dateFrom =
    normalizeDateFilter(
      rawDateFrom
    )

  const dateTo =
    normalizeDateFilter(
      rawDateTo,
      true
    )

  if (
    rawDateFrom &&
    !dateFrom
  ) {
    return jsonError(
      "Data iniziale non valida."
    )
  }

  if (
    rawDateTo &&
    !dateTo
  ) {
    return jsonError(
      "Data finale non valida."
    )
  }

  if (
    dateFrom &&
    dateTo &&
    new Date(dateFrom) >
      new Date(dateTo)
  ) {
    return jsonError(
      "La data iniziale non può essere successiva alla data finale."
    )
  }

  const from =
    (page - 1) *
    PAGE_SIZE

  const to =
    from +
    PAGE_SIZE -
    1

  let query =
    adminSupabase
      .from("email_deliveries")
      .select(
        `
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
          provider_response,
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
    query =
      query.eq(
        "status",
        status
      )
  }

  if (category) {
    query =
      query.ilike(
        "category",
        `%${category}%`
      )
  }

  if (dateFrom) {
    query =
      query.gte(
        "created_at",
        dateFrom
      )
  }

  if (dateTo) {
    query =
      query.lte(
        "created_at",
        dateTo
      )
  }

  if (search) {
    const pattern =
      `%${search}%`

    query =
      query.or(
        [
          `recipient_email.ilike.${pattern}`,
          `recipient_name.ilike.${pattern}`,
          `subject.ilike.${pattern}`,
          `category.ilike.${pattern}`,
          `source_type.ilike.${pattern}`,
          `source_id.ilike.${pattern}`,
          `provider_message_id.ilike.${pattern}`,
          `last_error.ilike.${pattern}`
        ].join(",")
      )
  }

  const {
    data: deliveries,
    count,
    error
  } = await query

  if (error) {
    console.error(
      "[admin-emails] Errore caricamento email:",
      error
    )

    return jsonError(
      "Impossibile caricare gli invii email.",
      500
    )
  }

  const [
    totalCount,
    pendingCount,
    sendingCount,
    sentCount,
    failedCount,
    cancelledCount
  ] = await Promise.all([
    getStatusCount({
      adminSupabase
    }),

    getStatusCount({
      adminSupabase,
      status: "pending"
    }),

    getStatusCount({
      adminSupabase,
      status: "sending"
    }),

    getStatusCount({
      adminSupabase,
      status: "sent"
    }),

    getStatusCount({
      adminSupabase,
      status: "failed"
    }),

    getStatusCount({
      adminSupabase,
      status: "cancelled"
    })
  ])

  const total =
    Number(count || 0)

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        total /
        PAGE_SIZE
      )
    )

  return NextResponse.json(
    {
      success: true,

      deliveries:
        (deliveries || []).map(
          (delivery) =>
            mapDelivery(delivery)
        ),

      summary: {
        total:
          totalCount,

        pending:
          pendingCount,

        sending:
          sendingCount,

        sent:
          sentCount,

        failed:
          failedCount,

        cancelled:
          cancelledCount
      },

      pagination: {
        page,
        pageSize:
          PAGE_SIZE,
        total,
        totalPages
      },

      filters: {
        status,
        category,
        search,
        dateFrom:
          rawDateFrom,
        dateTo:
          rawDateTo
      },

      permissions: {
        canRetry:
          permissions.includes(
            "emails.retry"
          )
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

export async function POST(request) {
  const requestOrigin =
    request.headers.get("origin")

  if (
    !requestOrigin ||
    requestOrigin !==
      request.nextUrl.origin
  ) {
    return jsonError(
      "Origine della richiesta non autorizzata.",
      403
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
      "emails.retry"
    )
  ) {
    return jsonError(
      "Non hai il permesso di reinviare le email.",
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

  const deliveryId =
    String(
      body?.deliveryId || ""
    ).trim()

  const reason =
    String(
      body?.reason || ""
    ).trim()

  if (
    !deliveryId ||
    !UUID_PATTERN.test(
      deliveryId
    )
  ) {
    return jsonError(
      "Identificativo invio non valido."
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

  const {
    data: originalDelivery,
    error: originalError
  } = await adminSupabase
    .from("email_deliveries")
    .select(`
      id,
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
      source_type,
      source_id,
      target_user_id,
      triggered_by_user_id,
      retry_of_id,
      metadata,
      created_at
    `)
    .eq(
      "id",
      deliveryId
    )
    .maybeSingle()

  if (originalError) {
    console.error(
      "[admin-emails] Errore lettura email da reinviare:",
      originalError
    )

    return jsonError(
      "Impossibile controllare l'email selezionata.",
      500
    )
  }

  if (!originalDelivery) {
    return jsonError(
      "Invio email non trovato.",
      404
    )
  }

  if (
    originalDelivery.status ===
    "sent"
  ) {
    return jsonError(
      "Un'email già inviata correttamente non può essere reinviata da questo comando.",
      409
    )
  }

  if (
    originalDelivery.status ===
    "sending"
  ) {
    return jsonError(
      "L'invio dell'email è già in corso.",
      409
    )
  }

  if (
    originalDelivery.status ===
    "cancelled"
  ) {
    return jsonError(
      "Un invio annullato non può essere reinviato.",
      409
    )
  }

  if (
    originalDelivery.status !==
    "failed"
  ) {
    return jsonError(
      "Possono essere reinviate soltanto le email fallite.",
      409
    )
  }

  const requestPayload =
    originalDelivery
      .request_payload &&
    typeof originalDelivery
      .request_payload ===
      "object"
      ? originalDelivery
          .request_payload
      : {}

  const html =
    String(
      requestPayload.html || ""
    ).trim()

  const text =
    String(
      requestPayload.text || ""
    ).trim()

  if (!html && !text) {
    return jsonError(
      "Il contenuto originale dell'email non è disponibile.",
      409
    )
  }

  /*
   * L'audit viene registrato prima dell'invio:
   * un'email esterna non può essere annullata
   * dopo essere stata accettata dal provider.
   */
  const {
    error: auditError
  } = await adminSupabase
    .from("admin_audit_log")
    .insert({
      actor_user_id:
        user.id,

      action:
        "email.retry.request",

      target_type:
        "email_delivery",

      target_id:
        originalDelivery.id,

      old_data: {
        status:
          originalDelivery.status,

        attempt_count:
          originalDelivery
            .attempt_count,

        recipient_email:
          originalDelivery
            .recipient_email,

        category:
          originalDelivery.category
      },

      new_data: {
        retry_requested:
          true,

        sender_email:
          originalDelivery
            .sender_email
      },

      reason
    })

  if (auditError) {
    console.error(
      "[admin-emails] Errore audit reinvio:",
      auditError
    )

    return jsonError(
      "Il reinvio è stato annullato perché non è stato possibile registrarlo.",
      500
    )
  }

  const retryIdempotencyKey =
  `admin-retry:${originalDelivery.id}`

  let retryResult

  try {
    retryResult =
      await sendTrackedEmail({
        idempotencyKey:
          retryIdempotencyKey,

        category:
          originalDelivery.category,

        templateKey:
          originalDelivery
            .template_key,

        recipientEmail:
          originalDelivery
            .recipient_email,

        recipientName:
          originalDelivery
            .recipient_name,

        senderEmail:
          originalDelivery
            .sender_email,

        senderName:
          originalDelivery
            .sender_name,

        replyToEmail:
          originalDelivery
            .reply_to_email,

        subject:
          originalDelivery.subject,

        html,
        text,

        sourceType:
          originalDelivery
            .source_type,

        sourceId:
          originalDelivery
            .source_id,

        targetUserId:
          originalDelivery
            .target_user_id,

        triggeredByUserId:
          user.id,

        retryOfId:
          originalDelivery.id,

        metadata: {
          ...(
            originalDelivery.metadata &&
            typeof originalDelivery
              .metadata ===
              "object"
              ? originalDelivery
                  .metadata
              : {}
          ),

          adminRetry:
            true,

          originalDeliveryId:
            originalDelivery.id,

          retryReason:
            reason
        },

        maxAttempts:
          originalDelivery
            .max_attempts ||
          3
      })
  } catch (error) {
    console.error(
      "[admin-emails] Errore imprevisto reinvio:",
      error
    )

    return jsonError(
      "Errore imprevisto durante il reinvio dell'email.",
      500
    )
  }

  if (retryResult.inProgress) {
  return jsonError(
    "Il reinvio di questa email è già in corso.",
    409,
    {
      deliveryId:
        retryResult.deliveryId ||
        null,

      status:
        retryResult.status ||
        "sending"
    }
  )
}

  if (
    retryResult.success !==
    true
  ) {
    return jsonError(
      retryResult.error ||
        "Il nuovo tentativo email non è riuscito.",
      502,
      {
        retryCreated:
          Boolean(
            retryResult.deliveryId
          ),

        deliveryId:
          retryResult.deliveryId ||
          null,

        status:
          retryResult.status ||
          "failed"
      }
    )
  }

  return NextResponse.json(
  {
    success: true,

    message:
      retryResult.alreadyProcessed
        ? "Questa email era già stata reinviata correttamente."
        : "Email reinviata correttamente.",

    deliveryId:
      retryResult.deliveryId,

    providerMessageId:
      retryResult.providerMessageId ||
      null,

    status:
      retryResult.status
  },
  {
    headers: {
      "Cache-Control":
        "private, no-store, max-age=0"
    }
  }
)
}