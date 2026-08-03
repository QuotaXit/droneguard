import { NextResponse } from "next/server"

import { getTeamAccess } from "@/lib/team/access"
import { createAdminSupabaseClient } from "@/lib/supabase/admin"

export const dynamic = "force-dynamic"

const PAGE_SIZE = 25

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
  const parsedValue = Number.parseInt(value, 10)

  if (!Number.isFinite(parsedValue) || parsedValue < 1) {
    return 1
  }

  return Math.min(parsedValue, 10000)
}

function sanitizeSearch(value) {
  return String(value || "")
    .trim()
    .slice(0, 80)
    .replace(/[^\p{L}\p{N}@._\-\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
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

  if (!permissions.includes("users.view")) {
    return jsonError(
      "Non hai il permesso di vedere gli utenti.",
      403
    )
  }

  const searchParams = request.nextUrl.searchParams

  const page = clampPage(
    searchParams.get("page")
  )

  const role = String(
    searchParams.get("role") || "all"
  )
    .trim()
    .toLowerCase()

  const status = String(
    searchParams.get("status") || "all"
  )
    .trim()
    .toLowerCase()

  const search = sanitizeSearch(
    searchParams.get("search")
  )

  const allowedRoles = new Set([
    "all",
    "pilot",
    "cliente"
  ])

  const allowedStatuses = new Set([
    "all",
    "active",
    "banned"
  ])

  if (!allowedRoles.has(role)) {
    return jsonError(
      "Filtro ruolo non valido."
    )
  }

  if (!allowedStatuses.has(status)) {
    return jsonError(
      "Filtro stato non valido."
    )
  }

  const from = (page - 1) * PAGE_SIZE
  const to = from + PAGE_SIZE - 1

  const adminSupabase =
    createAdminSupabaseClient()

  let query = adminSupabase
    .from("users")
    .select(
      `
        id,
        email,
        role,
        name,
        surname,
        city,
        credits,
        banned,
        verified,
        free_credits_claimed,
        created_at
      `,
      {
        count: "exact"
      }
    )
    .neq("role", "team")
    .order("created_at", {
      ascending: false
    })
    .range(from, to)

  if (role === "pilot") {
    query = query.in("role", [
      "pilot",
      "pilota"
    ])
  }

  if (role === "cliente") {
    query = query.in("role", [
      "client",
      "cliente"
    ])
  }

  if (status === "active") {
    query = query.eq("banned", false)
  }

  if (status === "banned") {
    query = query.eq("banned", true)
  }

  if (search) {
    const pattern = `%${search}%`

    query = query.or(
      [
        `email.ilike.${pattern}`,
        `name.ilike.${pattern}`,
        `surname.ilike.${pattern}`,
        `city.ilike.${pattern}`
      ].join(",")
    )
  }

  const {
    data: users,
    count,
    error
  } = await query

  if (error) {
    console.error(
      "[admin-users] Errore caricamento utenti:",
      error
    )

    return jsonError(
      "Impossibile caricare gli utenti.",
      500
    )
  }

  const total = count || 0
  const totalPages = Math.max(
    1,
    Math.ceil(total / PAGE_SIZE)
  )

  return NextResponse.json(
    {
      success: true,
      users: (users || []).map((currentUser) => ({
        id: currentUser.id,
        email:
          currentUser.email ||
          "Email non disponibile",
        role: currentUser.role,
        name: currentUser.name || "",
        surname: currentUser.surname || "",
        city: currentUser.city || "",
        credits: Number(
          currentUser.credits || 0
        ),
        banned: Boolean(
          currentUser.banned
        ),
        verified: Boolean(
          currentUser.verified
        ),
        freeCreditsClaimed: Boolean(
          currentUser.free_credits_claimed
        ),
        createdAt: currentUser.created_at
      })),
      pagination: {
        page,
        pageSize: PAGE_SIZE,
        total,
        totalPages
      },
      filters: {
        role,
        status,
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

export async function PATCH(request) {
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

  if (!permissions.includes("users.suspend")) {
    return jsonError(
      "Non hai il permesso di sospendere gli utenti.",
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

  const banned = body?.banned

  const reason = String(
    body?.reason || ""
  ).trim()

  if (!targetUserId) {
    return jsonError(
      "Identificativo utente mancante."
    )
  }

  if (typeof banned !== "boolean") {
    return jsonError(
      "Stato di sospensione non valido."
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
   * Recupera il profilo prima della modifica.
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
      banned
    `)
    .eq("id", targetUserId)
    .maybeSingle()

  if (targetUserError) {
    console.error(
      "[admin-users] Errore lettura utente:",
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

  /*
   * Gli account Team vengono gestiti esclusivamente
   * dalla pagina Account Team.
   */
  if (
    String(targetUser.role || "")
      .trim()
      .toLowerCase() === "team"
  ) {
    return jsonError(
      "Gli account Team non possono essere sospesi da questa sezione.",
      400
    )
  }

  const previousBanned = Boolean(
    targetUser.banned
  )

  if (previousBanned === banned) {
    return jsonError(
      banned
        ? "Questo account è già sospeso."
        : "Questo account è già attivo."
    )
  }

  /*
   * Verifica che esista anche in Supabase Auth.
   */
  const {
    data: authData,
    error: authReadError
  } = await adminSupabase.auth.admin.getUserById(
    targetUserId
  )

  if (authReadError || !authData?.user) {
    console.error(
      "[admin-users] Utente Auth non trovato:",
      authReadError
    )

    return jsonError(
      "Account di autenticazione non trovato.",
      500
    )
  }

  /*
   * Sospensione Auth:
   * 876000 ore corrispondono a circa 100 anni.
   *
   * Per riattivare viene usato "none".
   */
  const {
    error: authUpdateError
  } = await adminSupabase.auth.admin.updateUserById(
    targetUserId,
    {
      ban_duration: banned
        ? "876000h"
        : "none"
    }
  )

  if (authUpdateError) {
    console.error(
      "[admin-users] Errore sospensione Auth:",
      authUpdateError
    )

    return jsonError(
      banned
        ? "Impossibile sospendere l'accesso dell'utente."
        : "Impossibile riattivare l'accesso dell'utente.",
      500
    )
  }

  /*
   * Aggiorna anche il profilo pubblico.
   */
  const {
    data: updatedUser,
    error: profileUpdateError
  } = await adminSupabase
    .from("users")
    .update({
      banned
    })
    .eq("id", targetUserId)
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
      free_credits_claimed,
      created_at
    `)
    .single()

  if (profileUpdateError) {
    console.error(
      "[admin-users] Errore aggiornamento profilo:",
      profileUpdateError
    )

    /*
     * Ripristina lo stato Auth precedente.
     */
    const { error: authRollbackError } =
      await adminSupabase.auth.admin.updateUserById(
        targetUserId,
        {
          ban_duration: previousBanned
            ? "876000h"
            : "none"
        }
      )

    if (authRollbackError) {
      console.error(
        "[admin-users] Errore rollback Auth:",
        authRollbackError
      )
    }

    return jsonError(
      "Modifica annullata perché il profilo non è stato aggiornato.",
      500
    )
  }

  /*
   * Registra obbligatoriamente l'operazione.
   */
  const { error: auditError } =
    await adminSupabase
      .from("admin_audit_log")
      .insert({
        actor_user_id: user.id,
        action: banned
          ? "user.suspend"
          : "user.reactivate",
        target_type: "user",
        target_id: targetUserId,
        old_data: {
          email: targetUser.email,
          role: targetUser.role,
          banned: previousBanned
        },
        new_data: {
          email: targetUser.email,
          role: targetUser.role,
          banned
        },
        reason
      })

  if (auditError) {
    console.error(
      "[admin-users] Errore audit sospensione:",
      auditError
    )

    /*
     * Ripristina il database.
     */
    const { error: profileRollbackError } =
      await adminSupabase
        .from("users")
        .update({
          banned: previousBanned
        })
        .eq("id", targetUserId)

    if (profileRollbackError) {
      console.error(
        "[admin-users] Errore rollback profilo:",
        profileRollbackError
      )
    }

    /*
     * Ripristina Supabase Auth.
     */
    const { error: authRollbackError } =
      await adminSupabase.auth.admin.updateUserById(
        targetUserId,
        {
          ban_duration: previousBanned
            ? "876000h"
            : "none"
        }
      )

    if (authRollbackError) {
      console.error(
        "[admin-users] Errore rollback Auth:",
        authRollbackError
      )
    }

    return jsonError(
      "Operazione annullata perché non è stato possibile registrarla.",
      500
    )
  }

  return NextResponse.json({
    success: true,
    message: banned
      ? "Account sospeso correttamente."
      : "Account riattivato correttamente.",
    user: {
      id: updatedUser.id,
      email:
        updatedUser.email ||
        "Email non disponibile",
      role: updatedUser.role,
      name: updatedUser.name || "",
      surname: updatedUser.surname || "",
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
      freeCreditsClaimed: Boolean(
        updatedUser.free_credits_claimed
      ),
      createdAt: updatedUser.created_at
    }
  })
}