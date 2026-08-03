import { NextResponse } from "next/server"

import { getTeamAccess } from "@/lib/team/access"
import { createAdminSupabaseClient } from "@/lib/supabase/admin"

export const dynamic = "force-dynamic"

const PAGE_SIZE = 30

function jsonError(message, status = 400) {
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
  const parsed = Number.parseInt(value, 10)

  if (!Number.isFinite(parsed) || parsed < 1) {
    return 1
  }

  return Math.min(parsed, 10000)
}

function sanitizeSearch(value) {
  return String(value || "")
    .trim()
    .slice(0, 100)
    .replace(/[^\p{L}\p{N}@._\-\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function normalizeUser(user) {
  if (!user) {
    return null
  }

  return {
    id: user.id,
    email: user.email || "Email non disponibile",
    name: user.name || "",
    surname: user.surname || "",
    role: user.role || "",
    credits: Number(user.credits || 0)
  }
}

export async function GET(request) {
  const { user, access } = await getTeamAccess()

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

  const permissions = Array.isArray(access.permissions)
    ? access.permissions
    : []

  if (!permissions.includes("credits.view")) {
    return jsonError(
      "Non hai il permesso di vedere i crediti.",
      403
    )
  }

  const searchParams = request.nextUrl.searchParams

  const page = clampPage(
    searchParams.get("page")
  )

  const reason = String(
    searchParams.get("reason") || "all"
  )
    .trim()
    .toLowerCase()

  const search = sanitizeSearch(
    searchParams.get("search")
  )

  const allowedReasons = new Set([
    "all",
    "opening_balance",
    "signup_bonus",
    "job_publish",
    "job_application",
    "stripe_purchase",
    "admin_adjustment",
    "refund"
  ])

  if (!allowedReasons.has(reason)) {
    return jsonError(
      "Filtro movimento non valido."
    )
  }

  const from = (page - 1) * PAGE_SIZE
  const to = from + PAGE_SIZE - 1

  const adminSupabase =
    createAdminSupabaseClient()

  /*
   * Quando viene effettuata una ricerca,
   * recuperiamo prima gli utenti corrispondenti.
   */
  let searchedUserIds = null

  if (search) {
    const pattern = `%${search}%`

    const {
      data: matchingUsers,
      error: matchingUsersError
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

    if (matchingUsersError) {
      console.error(
        "[admin-credits] Errore ricerca utenti:",
        matchingUsersError
      )

      return jsonError(
        "Impossibile eseguire la ricerca.",
        500
      )
    }

    searchedUserIds = (matchingUsers || [])
      .map((currentUser) => currentUser.id)
      .filter(Boolean)

    if (searchedUserIds.length === 0) {
      return NextResponse.json({
        success: true,
        movements: [],
        summary: {
          currentCredits: 0,
          movementCount: 0,
          creditsAdded: 0,
          creditsSpent: 0
        },
        pagination: {
          page: 1,
          pageSize: PAGE_SIZE,
          total: 0,
          totalPages: 1
        },
        filters: {
          reason,
          search
        }
      })
    }
  }

  let movementsQuery = adminSupabase
    .from("credit_ledger")
    .select(
      `
        id,
        user_id,
        actor_user_id,
        amount,
        balance_before,
        balance_after,
        reason,
        reference_type,
        reference_id,
        idempotency_key,
        metadata,
        created_at
      `,
      {
        count: "exact"
      }
    )
    .order("created_at", {
      ascending: false
    })
    .range(from, to)

  if (reason !== "all") {
    movementsQuery = movementsQuery.eq(
      "reason",
      reason
    )
  }

  if (searchedUserIds) {
    movementsQuery = movementsQuery.in(
      "user_id",
      searchedUserIds
    )
  }

  const {
    data: movements,
    count,
    error: movementsError
  } = await movementsQuery

  if (movementsError) {
    console.error(
      "[admin-credits] Errore movimenti:",
      movementsError
    )

    return jsonError(
      "Impossibile caricare i movimenti.",
      500
    )
  }

  const movementRows = movements || []

  const userIds = [
    ...new Set(
      movementRows
        .map((movement) => movement.user_id)
        .filter(Boolean)
    )
  ]

  const actorIds = [
    ...new Set(
      movementRows
        .map((movement) => movement.actor_user_id)
        .filter(Boolean)
    )
  ]

  let relatedUsers = []
  let actors = []

  if (userIds.length > 0) {
    const {
      data: usersData,
      error: usersError
    } = await adminSupabase
      .from("users")
      .select(`
        id,
        email,
        name,
        surname,
        role,
        credits
      `)
      .in("id", userIds)

    if (usersError) {
      console.error(
        "[admin-credits] Errore utenti:",
        usersError
      )

      return jsonError(
        "Impossibile caricare gli utenti collegati.",
        500
      )
    }

    relatedUsers = usersData || []
  }

  if (actorIds.length > 0) {
    const {
      data: actorData,
      error: actorError
    } = await adminSupabase
      .from("team_members")
      .select(`
        user_id,
        display_name,
        role_key
      `)
      .in("user_id", actorIds)

    if (actorError) {
      console.error(
        "[admin-credits] Errore operatori:",
        actorError
      )

      return jsonError(
        "Impossibile caricare gli operatori Team.",
        500
      )
    }

    actors = actorData || []
  }

  const usersMap = new Map(
    relatedUsers.map((relatedUser) => [
      relatedUser.id,
      relatedUser
    ])
  )

  const actorsMap = new Map(
    actors.map((actor) => [
      actor.user_id,
      actor
    ])
  )

  /*
   * Riepilogo economico complessivo.
   */
  const [
    currentBalancesResult,
    allMovementsResult
  ] = await Promise.all([
    adminSupabase
      .from("users")
      .select("credits")
      .neq("role", "team"),

    adminSupabase
      .from("credit_ledger")
      .select("amount")
  ])

  if (currentBalancesResult.error) {
    console.error(
      "[admin-credits] Errore saldi:",
      currentBalancesResult.error
    )

    return jsonError(
      "Impossibile calcolare i saldi.",
      500
    )
  }

  if (allMovementsResult.error) {
    console.error(
      "[admin-credits] Errore riepilogo:",
      allMovementsResult.error
    )

    return jsonError(
      "Impossibile calcolare il riepilogo.",
      500
    )
  }

  const currentCredits = (
    currentBalancesResult.data || []
  ).reduce(
    (total, currentUser) =>
      total + Number(currentUser.credits || 0),
    0
  )

  const movementAmounts = (
    allMovementsResult.data || []
  ).map((movement) =>
    Number(movement.amount || 0)
  )

  const creditsAdded = movementAmounts
    .filter((amount) => amount > 0)
    .reduce(
      (total, amount) => total + amount,
      0
    )

  const creditsSpent = Math.abs(
    movementAmounts
      .filter((amount) => amount < 0)
      .reduce(
        (total, amount) => total + amount,
        0
      )
  )

  const total = count || 0

  return NextResponse.json(
    {
      success: true,

      movements: movementRows.map(
        (movement) => {
          const movementUser =
            usersMap.get(movement.user_id)

          const actor =
            actorsMap.get(
              movement.actor_user_id
            )

          return {
            id: movement.id,

            userId: movement.user_id,
            user: normalizeUser(
              movementUser
            ),

            actorUserId:
              movement.actor_user_id,

            actor: actor
              ? {
                  userId: actor.user_id,
                  displayName:
                    actor.display_name ||
                    "Membro Team",
                  roleKey:
                    actor.role_key
                }
              : null,

            amount: Number(
              movement.amount || 0
            ),

            balanceBefore: Number(
              movement.balance_before || 0
            ),

            balanceAfter: Number(
              movement.balance_after || 0
            ),

            reason: movement.reason,

            referenceType:
              movement.reference_type,

            referenceId:
              movement.reference_id,

            idempotencyKey:
              movement.idempotency_key,

            metadata:
              movement.metadata || {},

            createdAt:
              movement.created_at
          }
        }
      ),

      summary: {
        currentCredits,
        movementCount:
          movementAmounts.length,
        creditsAdded,
        creditsSpent
      },

      pagination: {
        page,
        pageSize: PAGE_SIZE,
        total,
        totalPages: Math.max(
          1,
          Math.ceil(total / PAGE_SIZE)
        )
      },

      filters: {
        reason,
        search
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
  const requestOrigin = request.headers.get("origin")

  if (
    requestOrigin &&
    requestOrigin !== request.nextUrl.origin
  ) {
    return jsonError(
      "Origine della richiesta non autorizzata.",
      403
    )
  }

  const { user, access } = await getTeamAccess()

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

  const permissions = Array.isArray(access.permissions)
    ? access.permissions
    : []

  if (!permissions.includes("credits.adjust")) {
    return jsonError(
      "Non hai il permesso di rettificare i crediti.",
      403
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

  const targetUserId = String(
    body?.userId || ""
  ).trim()

  const reason = String(
    body?.reason || ""
  ).trim()

  const requestId = String(
    body?.requestId || ""
  ).trim()

  const amount = Number(body?.amount)

  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

  if (!uuidRegex.test(targetUserId)) {
    return jsonError(
      "Identificativo utente non valido."
    )
  }

  if (!uuidRegex.test(requestId)) {
    return jsonError(
      "Identificativo richiesta non valido."
    )
  }

  if (!Number.isInteger(amount) || amount === 0) {
    return jsonError(
      "Inserisci una quantità intera diversa da zero."
    )
  }

  if (Math.abs(amount) > 10000) {
    return jsonError(
      "La rettifica massima consentita è di 10.000 crediti."
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
   * Controlla che l'utente esista e non sia
   * un account del Team.
   */
  const {
    data: targetUser,
    error: targetUserError
  } = await adminSupabase
    .from("users")
    .select(`
      id,
      email,
      role,
      name,
      surname,
      credits
    `)
    .eq("id", targetUserId)
    .maybeSingle()

  if (targetUserError) {
    console.error(
      "[admin-credits] Errore lettura utente:",
      targetUserError
    )

    return jsonError(
      "Impossibile controllare l'utente.",
      500
    )
  }

  if (!targetUser) {
    return jsonError(
      "Utente non trovato.",
      404
    )
  }

  if (
    String(targetUser.role || "")
      .trim()
      .toLowerCase() === "team"
  ) {
    return jsonError(
      "Gli account Team non utilizzano crediti."
    )
  }

  const expectedBalance =
    Number(targetUser.credits || 0) + amount

  if (expectedBalance < 0) {
    return jsonError(
      `Il saldo non può scendere sotto zero. Saldo attuale: ${Number(
        targetUser.credits || 0
      )}.`
    )
  }

  /*
   * La funzione SQL aggiorna insieme:
   * - users.credits
   * - credit_ledger
   * - admin_audit_log
   */
  const {
    data: adjustmentResult,
    error: adjustmentError
  } = await adminSupabase
    .rpc("admin_adjust_user_credits", {
      p_actor_user_id: user.id,
      p_target_user_id: targetUserId,
      p_amount: amount,
      p_reason: reason,
      p_request_id: requestId
    })
    .maybeSingle()

  if (adjustmentError) {
    console.error(
      "[admin-credits] Errore rettifica:",
      adjustmentError
    )

    const normalizedMessage =
      adjustmentError.message?.toLowerCase() || ""

    if (
      normalizedMessage.includes(
        "saldo sotto zero"
      )
    ) {
      return jsonError(
        "La rettifica porterebbe il saldo sotto zero."
      )
    }

    if (
      normalizedMessage.includes(
        "dati differenti"
      )
    ) {
      return jsonError(
        "Questa richiesta è già stata utilizzata con dati differenti.",
        409
      )
    }

    if (
      normalizedMessage.includes(
        "non autorizzato"
      )
    ) {
      return jsonError(
        "Non sei autorizzato a effettuare questa rettifica.",
        403
      )
    }

    return jsonError(
      "Impossibile completare la rettifica.",
      500
    )
  }

  if (!adjustmentResult) {
    return jsonError(
      "La rettifica non ha restituito un risultato valido.",
      500
    )
  }

  const {
    data: updatedUser,
    error: updatedUserError
  } = await adminSupabase
    .from("users")
    .select(`
      id,
      email,
      role,
      name,
      surname,
      city,
      credits,
      banned,
      verified,
      created_at
    `)
    .eq("id", targetUserId)
    .single()

  if (updatedUserError) {
    console.error(
      "[admin-credits] Errore ricaricamento utente:",
      updatedUserError
    )

    /*
     * La rettifica è già stata completata.
     * Non la annulliamo: restituiamo comunque
     * il saldo ricevuto dalla funzione SQL.
     */
  }

  return NextResponse.json({
    success: true,

    message:
      amount > 0
        ? `${amount} crediti aggiunti correttamente.`
        : `${Math.abs(amount)} crediti rimossi correttamente.`,

    adjustment: {
      userId: adjustmentResult.user_id,
      amount,
      credits: Number(
        adjustmentResult.credits
      ),
      ledgerId:
        adjustmentResult.ledger_id,
      reason,
      requestId
    },

    user: updatedUser
      ? {
          id: updatedUser.id,
          email:
            updatedUser.email ||
            "Email non disponibile",
          role: updatedUser.role,
          name: updatedUser.name || "",
          surname:
            updatedUser.surname || "",
          city: updatedUser.city || "",
          credits: Number(
            updatedUser.credits || 0
          ),
          banned: Boolean(
            updatedUser.banned
          ),
          verified: Boolean(
            updatedUser.verified
          ),
          createdAt:
            updatedUser.created_at
        }
      : {
          id: targetUserId,
          email:
            targetUser.email ||
            "Email non disponibile",
          role: targetUser.role,
          name: targetUser.name || "",
          surname:
            targetUser.surname || "",
          credits: Number(
            adjustmentResult.credits
          )
        }
  })
}