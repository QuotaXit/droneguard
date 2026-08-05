import { NextResponse } from "next/server"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

import {
  getTeamAccess
} from "@/lib/team/access"

export const dynamic = "force-dynamic"

const PAGE_SIZE = 50

function jsonError(
  message,
  status = 400
) {
  return NextResponse.json(
    {
      success: false,
      error: message
    },
    {
      status
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
  maxLength = 100
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

  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(
      normalizedValue
    )
  ) {
    return null
  }

  const suffix = endOfDay
    ? "T23:59:59.999Z"
    : "T00:00:00.000Z"

  const date =
    new Date(
      `${normalizedValue}${suffix}`
    )

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return null
  }

  return date.toISOString()
}

function buildActor({
  actorId,
  memberMap,
  profileMap
}) {
  if (!actorId) {
    return {
      id: null,
      displayName:
        "Sistema",
      email: null,
      roleKey:
        "system"
    }
  }

  const member =
    memberMap.get(actorId)

  const profile =
    profileMap.get(actorId)

  const profileName =
    [
      profile?.name,
      profile?.surname
    ]
      .filter(Boolean)
      .join(" ")
      .trim()

  return {
    id:
      actorId,

    displayName:
      member?.display_name ||
      profileName ||
      profile?.email ||
      "Operatore non disponibile",

    email:
      profile?.email ||
      null,

    roleKey:
      member?.role_key ||
      null
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
    Array.isArray(
      access.permissions
    )
      ? access.permissions
      : []

  if (
    !permissions.includes(
      "audit.view"
    )
  ) {
    return jsonError(
      "Non hai il permesso di consultare il registro delle attività.",
      403
    )
  }

  const searchParams =
    request.nextUrl.searchParams

  const page =
    clampPage(
      searchParams.get("page")
    )

  const action =
    sanitizeFilter(
      searchParams.get("action"),
      120
    )

  const targetType =
    sanitizeFilter(
      searchParams.get(
        "targetType"
      ),
      100
    )

  const search =
    sanitizeFilter(
      searchParams.get("search"),
      100
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

  const dateFrom =
    normalizeDateFilter(
      rawDateFrom,
      false
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

  const adminSupabase =
    createAdminSupabaseClient()

  let query =
    adminSupabase
      .from(
        "admin_audit_log"
      )
      .select(
        `
          id,
          actor_user_id,
          action,
          target_type,
          target_id,
          old_data,
          new_data,
          reason,
          created_at
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

  if (action) {
    query =
      query.ilike(
        "action",
        `%${action}%`
      )
  }

  if (targetType) {
    query =
      query.ilike(
        "target_type",
        `%${targetType}%`
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
          `action.ilike.${pattern}`,
          `target_type.ilike.${pattern}`,
          `target_id.ilike.${pattern}`,
          `reason.ilike.${pattern}`
        ].join(",")
      )
  }

  const {
    data: auditRows,
    count,
    error: auditError
  } = await query

  if (auditError) {
    console.error(
      "[admin-audit] Errore caricamento registro:",
      auditError
    )

    return jsonError(
      "Impossibile caricare il registro delle attività.",
      500
    )
  }

  const actorIds = [
    ...new Set(
      (auditRows || [])
        .map(
          (row) =>
            row.actor_user_id
        )
        .filter(Boolean)
    )
  ]

  const memberMap =
    new Map()

  const profileMap =
    new Map()

  if (actorIds.length > 0) {
    const [
      memberResult,
      profileResult
    ] = await Promise.all([
      adminSupabase
        .from("team_members")
        .select(`
          user_id,
          display_name,
          role_key
        `)
        .in(
          "user_id",
          actorIds
        ),

      adminSupabase
        .from("users")
        .select(`
          id,
          email,
          name,
          surname
        `)
        .in(
          "id",
          actorIds
        )
    ])

    if (memberResult.error) {
      console.error(
        "[admin-audit] Errore lettura membri Team:",
        memberResult.error
      )
    } else {
      for (
        const member of
        memberResult.data || []
      ) {
        memberMap.set(
          member.user_id,
          member
        )
      }
    }

    if (profileResult.error) {
      console.error(
        "[admin-audit] Errore lettura profili operatori:",
        profileResult.error
      )
    } else {
      for (
        const profile of
        profileResult.data || []
      ) {
        profileMap.set(
          profile.id,
          profile
        )
      }
    }
  }

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

      entries:
        (auditRows || []).map(
          (row) => ({
            id:
              row.id,

            actor:
              buildActor({
                actorId:
                  row.actor_user_id,
                memberMap,
                profileMap
              }),

            action:
              row.action,

            targetType:
              row.target_type,

            targetId:
              row.target_id ||
              null,

            oldData:
              row.old_data ||
              null,

            newData:
              row.new_data ||
              null,

            reason:
              row.reason ||
              "",

            createdAt:
              row.created_at
          })
        ),

      pagination: {
        page,
        pageSize:
          PAGE_SIZE,
        total,
        totalPages
      },

      filters: {
        action,
        targetType,
        search,
        dateFrom:
          rawDateFrom ||
          "",
        dateTo:
          rawDateTo ||
          ""
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