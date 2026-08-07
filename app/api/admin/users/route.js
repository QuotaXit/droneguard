import { randomUUID } from "node:crypto"

import { NextResponse } from "next/server"

import {
  collectUserPersonalStorage,
  removeUserPersonalStorage
} from "@/lib/account/personal-storage"

import { getTeamAccess } from "@/lib/team/access"
import { createAdminSupabaseClient } from "@/lib/supabase/admin"

export const dynamic = "force-dynamic"

export const runtime = "nodejs"

const PAGE_SIZE = 25

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
  "banned",
  "deactivated"
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
  account_status,
  deactivated_at,
  created_at
`,
{
  count: "exact"
})
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
  query = query
    .eq("banned", false)
    .eq("account_status", "active")
}

if (status === "banned") {
  query = query
    .eq("banned", true)
    .eq("account_status", "active")
}

if (status === "deactivated") {
  query = query.eq(
    "account_status",
    "deactivated"
  )
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
accountStatus:
  currentUser.account_status ||
  "active",
deactivatedAt:
  currentUser.deactivated_at ||
  null,
createdAt:
  currentUser.created_at
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
  const requestOrigin =
  request.headers.get("origin")

if (
  !requestOrigin ||
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

  const uuidPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

  const banned = body?.banned

  const reason = String(
    body?.reason || ""
  ).trim()

  if (
  !targetUserId ||
  !uuidPattern.test(targetUserId)
) {
  return jsonError(
    "Identificativo utente non valido."
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
  banned,
  account_status,
  deactivated_at
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

  const accountStatus = String(
  targetUser.account_status || "active"
)
  .trim()
  .toLowerCase()

const isDeactivated =
  accountStatus === "deactivated"

/*
 * Un account disattivato dall’utente è stato
 * anonimizzato e non può essere riattivato
 * tramite il normale comando di sospensione.
 */
if (
  isDeactivated &&
  banned === false
) {
  return jsonError(
    "Questo account è stato disattivato definitivamente e non può essere riattivato.",
    409
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
let profileUpdateQuery =
  adminSupabase
    .from("users")
    .update({
      banned
    })
    .eq("id", targetUserId)

/*
 * Protezione aggiuntiva contro una disattivazione
 * che avvenga tra la lettura iniziale e
 * l’aggiornamento del profilo.
 */
if (banned === false) {
  profileUpdateQuery =
    profileUpdateQuery.eq(
      "account_status",
      "active"
    )
}

const {
  data: updatedUser,
  error: profileUpdateError
} = await profileUpdateQuery
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
    account_status,
    deactivated_at,
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
accountStatus:
  updatedUser.account_status ||
  "active",
deactivatedAt:
  updatedUser.deactivated_at ||
  null,
createdAt:
  updatedUser.created_at
    }
  })
}

export async function PUT(request) {
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
      "users.update"
    )
  ) {
    return jsonError(
      "Non hai il permesso di modificare gli utenti.",
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

  const name = String(
    body?.name || ""
  )
    .trim()
    .replace(/\s+/g, " ")

  const surname = String(
    body?.surname || ""
  )
    .trim()
    .replace(/\s+/g, " ")

  const city = String(
    body?.city || ""
  )
    .trim()
    .replace(/\s+/g, " ")

  const reason = String(
    body?.reason || ""
  ).trim()

  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

  if (
    !targetUserId ||
    !uuidPattern.test(
      targetUserId
    )
  ) {
    return jsonError(
      "Identificativo utente non valido."
    )
  }

  if (name.length > 100) {
    return jsonError(
      "Il nome può contenere al massimo 100 caratteri."
    )
  }

  if (surname.length > 100) {
    return jsonError(
      "Il cognome può contenere al massimo 100 caratteri."
    )
  }

  if (city.length > 150) {
    return jsonError(
      "La città può contenere al massimo 150 caratteri."
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
    data: rpcResult,
    error: rpcError
  } = await adminSupabase.rpc(
    "admin_update_user_profile",
    {
      p_actor_user_id:
        user.id,

      p_target_user_id:
        targetUserId,

      p_name:
        name,

      p_surname:
        surname,

      p_city:
        city,

      p_reason:
        reason
    }
  )

  if (rpcError) {
    console.error(
      "[admin-users] Errore modifica profilo:",
      rpcError
    )

    const errorText = [
      rpcError.message,
      rpcError.details,
      rpcError.hint,
      rpcError.code
    ]
      .filter(Boolean)
      .join(" ")
      .toUpperCase()

    if (
      errorText.includes(
        "OPERATORE_NON_AUTORIZZATO"
      )
    ) {
      return jsonError(
        "Non hai il permesso di modificare gli utenti.",
        403
      )
    }

    if (
      errorText.includes(
        "UTENTE_NON_TROVATO"
      )
    ) {
      return jsonError(
        "Utente non trovato.",
        404
      )
    }

    if (
      errorText.includes(
        "ACCOUNT_TEAM_NON_MODIFICABILE"
      )
    ) {
      return jsonError(
        "Gli account Team devono essere gestiti dalla sezione Account Team.",
        409
      )
    }

    if (
      errorText.includes(
        "ACCOUNT_DISATTIVATO_NON_MODIFICABILE"
      )
    ) {
      return jsonError(
        "Un account definitivamente disattivato non può essere modificato.",
        409
      )
    }

    if (
      errorText.includes(
        "NOME_TROPPO_LUNGO"
      ) ||
      errorText.includes(
        "COGNOME_TROPPO_LUNGO"
      ) ||
      errorText.includes(
        "CITTA_TROPPO_LUNGA"
      )
    ) {
      return jsonError(
        "Uno o più dati inseriti superano la lunghezza consentita."
      )
    }

    if (
      errorText.includes(
        "MOTIVAZIONE_NON_VALIDA"
      )
    ) {
      return jsonError(
        "La motivazione deve contenere da 10 a 500 caratteri."
      )
    }

    return jsonError(
      "Non è stato possibile modificare il profilo dell'utente.",
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
      free_credits_claimed,
      account_status,
      deactivated_at,
      created_at
    `)
    .eq("id", targetUserId)
    .maybeSingle()

  if (
    updatedUserError ||
    !updatedUser
  ) {
    console.error(
      "[admin-users] Errore rilettura profilo aggiornato:",
      updatedUserError
    )

    return jsonError(
      "Il profilo è stato modificato, ma non è stato possibile ricaricarlo.",
      500
    )
  }

  return NextResponse.json({
    success: true,
    message:
      rpcResult?.already_processed
        ? "I dati del profilo erano già aggiornati."
        : "Dati del profilo aggiornati correttamente.",

    user: {
      id: updatedUser.id,

      email:
        updatedUser.email ||
        "Email non disponibile",

      role:
        updatedUser.role,

      name:
        updatedUser.name || "",

      surname:
        updatedUser.surname || "",

      city:
        updatedUser.city || "",

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

      accountStatus:
        updatedUser.account_status ||
        "active",

      deactivatedAt:
        updatedUser.deactivated_at ||
        null,

      createdAt:
        updatedUser.created_at
    }
  })
}

export async function DELETE(request) {
  try {
    /*
     * Per un’operazione distruttiva l’header Origin
     * deve essere presente e deve corrispondere
     * esattamente al dominio della richiesta.
     */
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
        "users.delete"
      )
    ) {
      return jsonError(
        "Non hai il permesso di disattivare definitivamente gli utenti.",
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

    const confirmation = String(
      body?.confirmation || ""
    )
      .trim()
      .toUpperCase()

    const uuidPattern =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

    if (
      !targetUserId ||
      !uuidPattern.test(
        targetUserId
      )
    ) {
      return jsonError(
        "Identificativo utente non valido."
      )
    }

    if (
      targetUserId === user.id
    ) {
      return jsonError(
        "Non puoi disattivare il tuo account Team da questa sezione.",
        409
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

    if (
      confirmation !== "DISATTIVA"
    ) {
      return jsonError(
        "Conferma non valida. Scrivi DISATTIVA per continuare."
      )
    }

    const adminSupabase =
      createAdminSupabaseClient()

    /*
     * Recupera i dati necessari prima che la RPC
     * anonimizzata rimuova avatar e informazioni
     * dal profilo.
     */
    const {
      data: targetProfile,
      error: targetProfileError
    } = await adminSupabase
      .from("users")
      .select(`
        id,
        email,
        role,
        account_status,
        deactivated_at,
        avatar,
        avatar_url
      `)
      .eq("id", targetUserId)
      .maybeSingle()

    if (targetProfileError) {
      console.error(
        "[admin-users-delete] Errore lettura profilo:",
        targetProfileError
      )

      return jsonError(
        "Impossibile controllare il profilo dell'utente.",
        500
      )
    }

    if (!targetProfile) {
      return jsonError(
        "Utente non trovato.",
        404
      )
    }

    const normalizedRole = String(
      targetProfile.role || ""
    )
      .trim()
      .toLowerCase()

    if (normalizedRole === "team") {
      return jsonError(
        "Gli account Team devono essere gestiti dalla sezione Account Team.",
        409
      )
    }

    if (
      ![
        "pilot",
        "pilota",
        "client",
        "cliente"
      ].includes(normalizedRole)
    ) {
      return jsonError(
        "Il ruolo dell'utente non consente questa operazione.",
        409
      )
    }

    /*
     * Prima raccoglie i percorsi. Non cancella
     * ancora alcun file.
     */
    let personalStorage

    try {
      personalStorage =
        await collectUserPersonalStorage({
          adminSupabase,
          userId: targetUserId,
          profile: targetProfile
        })
    } catch (storageInventoryError) {
      console.error(
        "[admin-users-delete] Errore inventario Storage:",
        storageInventoryError
      )

      return jsonError(
        "Non è stato possibile preparare la rimozione dei file personali.",
        500
      )
    }

    /*
     * Disattiva atomicamente il profilo,
     * anonimizza il database e sistema i flussi
     * ancora operativi.
     */
    const {
      data: deactivationResult,
      error: deactivationError
    } = await adminSupabase.rpc(
      "admin_deactivate_user",
      {
        p_actor_user_id:
          user.id,

        p_target_user_id:
          targetUserId,

        p_reason:
          reason
      }
    )

    if (deactivationError) {
      console.error(
        "[admin-users-delete] Errore RPC:",
        deactivationError
      )

      const errorText = [
        deactivationError.message,
        deactivationError.details,
        deactivationError.hint,
        deactivationError.code
      ]
        .filter(Boolean)
        .join(" ")
        .toUpperCase()

      if (
        errorText.includes(
          "OPERATORE_NON_AUTORIZZATO"
        )
      ) {
        return jsonError(
          "Non hai il permesso di disattivare definitivamente gli utenti.",
          403
        )
      }

      if (
        errorText.includes(
          "UTENTE_NON_TROVATO"
        )
      ) {
        return jsonError(
          "Utente non trovato.",
          404
        )
      }

      if (
        errorText.includes(
          "ACCOUNT_TEAM_NON_DISATTIVABILE"
        )
      ) {
        return jsonError(
          "Gli account Team devono essere gestiti dalla sezione Account Team.",
          409
        )
      }

      if (
        errorText.includes(
          "NON_PUOI_DISATTIVARE_IL_TUO_ACCOUNT_TEAM"
        )
      ) {
        return jsonError(
          "Non puoi disattivare il tuo account Team.",
          409
        )
      }

      if (
        errorText.includes(
          "RUOLO_UTENTE_NON_VALIDO"
        )
      ) {
        return jsonError(
          "Il ruolo dell'utente non consente questa operazione.",
          409
        )
      }

      if (
        errorText.includes(
          "MOTIVAZIONE_NON_VALIDA"
        )
      ) {
        return jsonError(
          "La motivazione deve contenere da 10 a 500 caratteri."
        )
      }

      return jsonError(
        "Non è stato possibile disattivare definitivamente l'account.",
        500
      )
    }

    const anonymousEmail =
      String(
        deactivationResult
          ?.anonymous_email ||
          ""
      ).trim() ||
      `deleted+${targetUserId.replaceAll(
        "-",
        ""
      )}@deleted.droneguard.local`

    const randomPassword =
      `${randomUUID()}-${randomUUID()}-Aa1!`

    /*
     * Anonimizza anche Supabase Auth e applica
     * un ban sostanzialmente permanente.
     */
    const {
      error: authSanitizeError
    } =
      await adminSupabase.auth.admin
        .updateUserById(
          targetUserId,
          {
            email:
              anonymousEmail,

            password:
              randomPassword,

            email_confirm:
              true,

            user_metadata: {
              account_status:
                "deactivated"
            },

            ban_duration:
              "876000h"
          }
        )

    let authSanitized = true

    if (authSanitizeError) {
      authSanitized = false

      console.error(
        "[admin-users-delete] Anonimizzazione Auth fallita:",
        authSanitizeError
      )

      /*
       * Anche se l'anonimizzazione completa fallisce,
       * il ban deve essere comunque applicato.
       */
      const {
        error: authBanError
      } =
        await adminSupabase.auth.admin
          .updateUserById(
            targetUserId,
            {
              ban_duration:
                "876000h"
            }
          )

      if (authBanError) {
        console.error(
          "[admin-users-delete] Ban Auth fallito:",
          authBanError
        )

        return jsonError(
          "Il profilo è stato disattivato, ma il blocco Auth richiede un intervento amministrativo.",
          500,
          {
            accountDeactivated:
              true,

            authSanitized:
              false
          }
        )
      }
    }

    /*
     * Il profilo è ormai disattivato e l'accesso
     * Auth è bloccato. Ora vengono eliminati i
     * file personali precedentemente individuati.
     */
    let removedStorage

    try {
      removedStorage =
  await removeUserPersonalStorage({
    adminSupabase,

    userId:
      targetUserId,

    avatarPaths:
      personalStorage.avatarPaths,

    certificationPaths:
      personalStorage
        .certificationPaths
  })
    } catch (storageRemoveError) {
      console.error(
        "[admin-users-delete] Pulizia Storage fallita:",
        storageRemoveError
      )

      return jsonError(
        "L'account è stato disattivato, ma alcuni file personali richiedono una pulizia amministrativa.",
        500,
        {
          accountDeactivated:
            true,

          authSanitized,

          storageCleanupPending:
            true
        }
      )
    }

    /*
     * Rilegge il profilo anonimizzato per
     * aggiornare immediatamente l'interfaccia Team.
     */
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
        free_credits_claimed,
        account_status,
        deactivated_at,
        created_at
      `)
      .eq("id", targetUserId)
      .maybeSingle()

    if (
      updatedUserError ||
      !updatedUser
    ) {
      console.error(
        "[admin-users-delete] Errore rilettura profilo:",
        updatedUserError
      )

      return jsonError(
        "L'account è stato disattivato, ma non è stato possibile ricaricare il profilo.",
        500,
        {
          accountDeactivated:
            true,

          authSanitized
        }
      )
    }

    if (!authSanitized) {
  return jsonError(
    "L'account è stato disattivato, bloccato e i file personali sono stati rimossi, ma l'anonimizzazione completa dei dati Auth richiede un intervento amministrativo.",
    500,
    {
      accountDeactivated: true,
      authSanitized: false,
      authBlocked: true,
      storageCleaned: true,

      removedFiles: {
        avatars:
          removedStorage
            .removedAvatars,

        certifications:
          removedStorage
            .removedCertifications
      }
    }
  )
}

    return NextResponse.json({
      success: true,

      message:
        deactivationResult
          ?.already_deactivated
          ? "L'account risultava già disattivato. La pulizia è stata completata."
          : "Account disattivato e anonimizzato definitivamente.",

      accountDeactivated:
        true,

      authSanitized,

      removedFiles: {
        avatars:
          removedStorage
            .removedAvatars,

        certifications:
          removedStorage
            .removedCertifications
      },

      result:
        deactivationResult ||
        null,

      user: {
        id:
          updatedUser.id,

        email:
          updatedUser.email ||
          anonymousEmail,

        role:
          updatedUser.role,

        name:
          updatedUser.name || "",

        surname:
          updatedUser.surname || "",

        city:
          updatedUser.city || "",

        credits: Number(
          updatedUser.credits || 0
        ),

        banned: Boolean(
          updatedUser.banned
        ),

        verified: Boolean(
          updatedUser.verified
        ),

        freeCreditsClaimed:
          Boolean(
            updatedUser
              .free_credits_claimed
          ),

        accountStatus:
          updatedUser.account_status ||
          "deactivated",

        deactivatedAt:
          updatedUser.deactivated_at ||
          null,

        createdAt:
          updatedUser.created_at
      }
    })
  } catch (error) {
    console.error(
      "[admin-users-delete] Errore imprevisto:",
      error
    )

    return jsonError(
      "Errore imprevisto durante la disattivazione dell'account.",
      500
    )
  }
}