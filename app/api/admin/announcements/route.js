import { NextResponse } from "next/server"

import {
  getTeamAccess
} from "@/lib/team/access"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const PAGE_SIZE = 25

const allowedStatuses = new Set([
  "all",
  "draft",
  "published",
  "archived"
])

const allowedAudiences = new Set([
  "all",
  "pilot",
  "client"
])

const allowedSeverities = new Set([
  "all",
  "info",
  "success",
  "warning",
  "critical"
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
    .slice(0, 100)
    .replace(
      /[^\p{L}\p{N}@._\-\s]/gu,
      " "
    )
    .replace(/\s+/g, " ")
    .trim()
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

function normalizeNullableText(
  value,
  maxLength
) {
  const normalized =
    cleanText(value, maxLength)

  return normalized || null
}

function parseNullableDate(value) {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return null
  }

  const parsed = new Date(value)

  if (
    Number.isNaN(parsed.getTime())
  ) {
    return undefined
  }

  return parsed.toISOString()
}

function normalizeAnnouncement(row) {
  return {
    id:
      row.id,

    title:
      row.title || "",

    message:
      row.message || "",

    audience:
      row.audience || "all",

    severity:
      row.severity || "info",

    status:
      row.status || "draft",

    link:
      row.link || null,

    startsAt:
      row.starts_at || null,

    endsAt:
      row.ends_at || null,

    isDismissible:
      Boolean(row.is_dismissible),

    createdBy:
      row.created_by || null,

    updatedBy:
      row.updated_by || null,

    publishedAt:
      row.published_at || null,

    archivedAt:
      row.archived_at || null,

    createdAt:
      row.created_at,

    updatedAt:
      row.updated_at
  }
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

async function requireAccess(
  permission
) {
  const {
    user,
    access
  } = await getTeamAccess()

  if (!user) {
    return {
      error: jsonError(
        "Devi effettuare l'accesso.",
        401
      )
    }
  }

  if (!access?.active) {
    return {
      error: jsonError(
        "Accesso Team non autorizzato.",
        403
      )
    }
  }

  if (
    !hasPermission(
      access,
      permission
    )
  ) {
    return {
      error: jsonError(
        "Non hai il permesso necessario.",
        403
      )
    }
  }

  return {
    user,
    access
  }
}

function rejectCrossOrigin(request) {
  const origin =
    request.headers.get("origin")

  if (
    origin &&
    origin !== request.nextUrl.origin
  ) {
    return jsonError(
      "Origine della richiesta non autorizzata.",
      403
    )
  }

  return null
}

function mapDatabaseError(error) {
  const message = String(
    error?.message || ""
  ).toUpperCase()

  if (
    message.includes(
      "OPERATORE_NON_AUTORIZZATO"
    )
  ) {
    return {
      message:
        "Non sei autorizzato a gestire gli avvisi.",
      status: 403
    }
  }

  if (
    message.includes(
      "AVVISO_NON_TROVATO"
    )
  ) {
    return {
      message:
        "Avviso non trovato.",
      status: 404
    }
  }

  if (
    message.includes(
      "AVVISO_ARCHIVIATO_NON_MODIFICABILE"
    )
  ) {
    return {
      message:
        "Un avviso archiviato non può essere modificato.",
      status: 409
    }
  }

  if (
    message.includes(
      "AVVISO_GIA_SCADUTO"
    )
  ) {
    return {
      message:
        "Non puoi pubblicare un avviso già scaduto.",
      status: 409
    }
  }

  if (
    message.includes(
      "INTERVALLO_AVVISO_NON_VALIDO"
    )
  ) {
    return {
      message:
        "La data di fine deve essere successiva alla data di inizio.",
      status: 400
    }
  }

  if (
    message.includes(
      "LINK_AVVISO_NON_VALIDO"
    )
  ) {
    return {
      message:
        "Il collegamento deve essere un percorso interno, per esempio /dashboard.",
      status: 400
    }
  }

  return {
    message:
      "Impossibile completare l'operazione sull'avviso.",
    status: 500
  }
}

export async function GET(request) {
  const accessResult =
    await requireAccess(
      "announcements.view"
    )

  if (accessResult.error) {
    return accessResult.error
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
    searchParams.get("status") ||
      "all"
  )
    .trim()
    .toLowerCase()

  const audience = String(
    searchParams.get("audience") ||
      "all"
  )
    .trim()
    .toLowerCase()

  const severity = String(
    searchParams.get("severity") ||
      "all"
  )
    .trim()
    .toLowerCase()

  if (
    !allowedStatuses.has(status)
  ) {
    return jsonError(
      "Filtro stato non valido."
    )
  }

  if (
    !allowedAudiences.has(audience)
  ) {
    return jsonError(
      "Filtro destinatari non valido."
    )
  }

  if (
    !allowedSeverities.has(severity)
  ) {
    return jsonError(
      "Filtro gravità non valido."
    )
  }

  const from =
    (page - 1) * PAGE_SIZE

  const to =
    from + PAGE_SIZE - 1

  const adminSupabase =
    createAdminSupabaseClient()

  let query = adminSupabase
    .from("announcements")
    .select(
      `
        id,
        title,
        message,
        audience,
        severity,
        status,
        link,
        starts_at,
        ends_at,
        is_dismissible,
        created_by,
        updated_by,
        published_at,
        archived_at,
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
    query = query.eq(
      "status",
      status
    )
  }

  if (audience !== "all") {
    query = query.eq(
      "audience",
      audience
    )
  }

  if (severity !== "all") {
    query = query.eq(
      "severity",
      severity
    )
  }

  if (search) {
    const pattern =
      `%${search}%`

    query = query.or(
      [
        `title.ilike.${pattern}`,
        `message.ilike.${pattern}`
      ].join(",")
    )
  }

  const {
    data,
    count,
    error
  } = await query

  if (error) {
    console.error(
      "[admin-announcements] Errore lettura:",
      error
    )

    return jsonError(
      "Impossibile caricare gli avvisi.",
      500
    )
  }

  const rows = data || []

  const operatorIds = [
    ...new Set(
      rows
        .flatMap((row) => [
          row.created_by,
          row.updated_by
        ])
        .filter(Boolean)
    )
  ]

  let operators = []

  if (operatorIds.length > 0) {
    const operatorResult =
      await adminSupabase
        .from("team_members")
        .select(`
          user_id,
          display_name,
          role_key
        `)
        .in(
          "user_id",
          operatorIds
        )

    if (operatorResult.error) {
      console.error(
        "[admin-announcements] Errore operatori:",
        operatorResult.error
      )
    } else {
      operators =
        operatorResult.data || []
    }
  }

  const operatorsMap = new Map(
    operators.map((operator) => [
      operator.user_id,
      {
        userId:
          operator.user_id,

        displayName:
          operator.display_name ||
          "Membro Team",

        roleKey:
          operator.role_key
      }
    ])
  )

  const [
    totalResult,
    draftResult,
    publishedResult,
    archivedResult
  ] = await Promise.all([
    adminSupabase
      .from("announcements")
      .select("*", {
        count: "exact",
        head: true
      }),

    adminSupabase
      .from("announcements")
      .select("*", {
        count: "exact",
        head: true
      })
      .eq("status", "draft"),

    adminSupabase
      .from("announcements")
      .select("*", {
        count: "exact",
        head: true
      })
      .eq("status", "published"),

    adminSupabase
      .from("announcements")
      .select("*", {
        count: "exact",
        head: true
      })
      .eq("status", "archived")
  ])

  const total = count || 0

  return NextResponse.json(
    {
      success: true,

      announcements: rows.map(
        (row) => ({
          ...normalizeAnnouncement(row),

          creator:
            operatorsMap.get(
              row.created_by
            ) || null,

          updater:
            operatorsMap.get(
              row.updated_by
            ) || null
        })
      ),

      summary: {
        total:
          Number(
            totalResult.count || 0
          ),

        drafts:
          Number(
            draftResult.count || 0
          ),

        published:
          Number(
            publishedResult.count || 0
          ),

        archived:
          Number(
            archivedResult.count || 0
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

      permissions: {
        canManage:
          hasPermission(
            accessResult.access,
            "announcements.manage"
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
  const originError =
    rejectCrossOrigin(request)

  if (originError) {
    return originError
  }

  const accessResult =
    await requireAccess(
      "announcements.manage"
    )

  if (accessResult.error) {
    return accessResult.error
  }

  let body

  try {
    body = await request.json()
  } catch {
    return jsonError(
      "Dati della richiesta non validi."
    )
  }

  const title =
    cleanText(body?.title, 150)

  const message =
    cleanText(body?.message, 2000)

  const audience = String(
    body?.audience || "all"
  )
    .trim()
    .toLowerCase()

  const severity = String(
    body?.severity || "info"
  )
    .trim()
    .toLowerCase()

  const link =
    normalizeNullableText(
      body?.link,
      500
    )

  const startsAt =
    parseNullableDate(
      body?.startsAt
    )

  const endsAt =
    parseNullableDate(
      body?.endsAt
    )

  const reason =
    normalizeNullableText(
      body?.reason,
      500
    )

  if (
    title.length < 3 ||
    title.length > 150
  ) {
    return jsonError(
      "Il titolo deve contenere da 3 a 150 caratteri."
    )
  }

  if (
    message.length < 5 ||
    message.length > 2000
  ) {
    return jsonError(
      "Il messaggio deve contenere da 5 a 2.000 caratteri."
    )
  }

  if (
    !allowedAudiences.has(audience)
  ) {
    return jsonError(
      "Destinatari non validi."
    )
  }

  if (
    !allowedSeverities.has(severity) ||
    severity === "all"
  ) {
    return jsonError(
      "Gravità non valida."
    )
  }

  if (startsAt === undefined) {
    return jsonError(
      "Data di inizio non valida."
    )
  }

  if (endsAt === undefined) {
    return jsonError(
      "Data di fine non valida."
    )
  }

  if (
    startsAt &&
    endsAt &&
    new Date(endsAt) <=
      new Date(startsAt)
  ) {
    return jsonError(
      "La data di fine deve essere successiva alla data di inizio."
    )
  }

  const adminSupabase =
    createAdminSupabaseClient()

  const {
    data,
    error
  } = await adminSupabase
    .rpc(
      "admin_manage_announcement",
      {
        p_actor_user_id:
          accessResult.user.id,

        p_action:
          "create",

        p_announcement_id:
          null,

        p_title:
          title,

        p_message:
          message,

        p_audience:
          audience,

        p_severity:
          severity,

        p_link:
          link,

        p_starts_at:
          startsAt,

        p_ends_at:
          endsAt,

        p_is_dismissible:
          body?.isDismissible !== false,

        p_reason:
          reason
      }
    )
    .single()

  if (error) {
    console.error(
      "[admin-announcements] Errore creazione:",
      error
    )

    const mapped =
      mapDatabaseError(error)

    return jsonError(
      mapped.message,
      mapped.status
    )
  }

  return NextResponse.json({
    success: true,
    message:
      "Bozza dell’avviso creata correttamente.",
    announcement:
      normalizeAnnouncement(data)
  })
}

export async function PATCH(request) {
  const originError =
    rejectCrossOrigin(request)

  if (originError) {
    return originError
  }

  const accessResult =
    await requireAccess(
      "announcements.manage"
    )

  if (accessResult.error) {
    return accessResult.error
  }

  let body

  try {
    body = await request.json()
  } catch {
    return jsonError(
      "Dati della richiesta non validi."
    )
  }

  const announcementId = String(
    body?.announcementId || ""
  ).trim()

  const action = String(
    body?.action || ""
  )
    .trim()
    .toLowerCase()

  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

  if (
    !uuidRegex.test(
      announcementId
    )
  ) {
    return jsonError(
      "Identificativo avviso non valido."
    )
  }

  if (
    ![
      "update",
      "publish",
      "archive"
    ].includes(action)
  ) {
    return jsonError(
      "Azione non valida."
    )
  }

  const rpcPayload = {
    p_actor_user_id:
      accessResult.user.id,

    p_action:
      action,

    p_announcement_id:
      announcementId,

    p_title:
      null,

    p_message:
      null,

    p_audience:
      null,

    p_severity:
      null,

    p_link:
      null,

    p_starts_at:
      null,

    p_ends_at:
      null,

    p_is_dismissible:
      true,

    p_reason:
      normalizeNullableText(
        body?.reason,
        500
      )
  }

  if (action === "update") {
    const title =
      cleanText(body?.title, 150)

    const message =
      cleanText(body?.message, 2000)

    const audience = String(
      body?.audience || ""
    )
      .trim()
      .toLowerCase()

    const severity = String(
      body?.severity || ""
    )
      .trim()
      .toLowerCase()

    const link =
      normalizeNullableText(
        body?.link,
        500
      )

    const startsAt =
      parseNullableDate(
        body?.startsAt
      )

    const endsAt =
      parseNullableDate(
        body?.endsAt
      )

    if (
      title.length < 3 ||
      title.length > 150
    ) {
      return jsonError(
        "Il titolo deve contenere da 3 a 150 caratteri."
      )
    }

    if (
      message.length < 5 ||
      message.length > 2000
    ) {
      return jsonError(
        "Il messaggio deve contenere da 5 a 2.000 caratteri."
      )
    }

    if (
      !allowedAudiences.has(audience)
    ) {
      return jsonError(
        "Destinatari non validi."
      )
    }

    if (
      !allowedSeverities.has(severity) ||
      severity === "all"
    ) {
      return jsonError(
        "Gravità non valida."
      )
    }

    if (
      startsAt === undefined ||
      endsAt === undefined
    ) {
      return jsonError(
        "Intervallo temporale non valido."
      )
    }

    if (
      startsAt &&
      endsAt &&
      new Date(endsAt) <=
        new Date(startsAt)
    ) {
      return jsonError(
        "La data di fine deve essere successiva alla data di inizio."
      )
    }

    Object.assign(
      rpcPayload,
      {
        p_title:
          title,

        p_message:
          message,

        p_audience:
          audience,

        p_severity:
          severity,

        p_link:
          link,

        p_starts_at:
          startsAt,

        p_ends_at:
          endsAt,

        p_is_dismissible:
          body?.isDismissible !== false
      }
    )
  }

  const adminSupabase =
    createAdminSupabaseClient()

  const {
    data,
    error
  } = await adminSupabase
    .rpc(
      "admin_manage_announcement",
      rpcPayload
    )
    .single()

  if (error) {
    console.error(
      "[admin-announcements] Errore comando:",
      error
    )

    const mapped =
      mapDatabaseError(error)

    return jsonError(
      mapped.message,
      mapped.status
    )
  }

  const successMessages = {
    update:
      "Avviso aggiornato correttamente.",

    publish:
      "Avviso pubblicato correttamente.",

    archive:
      "Avviso archiviato correttamente."
  }

  return NextResponse.json({
    success: true,
    message:
      successMessages[action],
    announcement:
      normalizeAnnouncement(data)
  })
}