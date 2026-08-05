import {
  randomBytes,
  randomUUID
} from "node:crypto"
import { NextResponse } from "next/server"
import { getTeamAccess } from "@/lib/team/access"
import { createAdminSupabaseClient } from "@/lib/supabase/admin"

export const dynamic = "force-dynamic"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const allowedRoles = new Set([
  "owner",
  "admin",
  "support",
  "finance",
  "content",
  "technical"
])

function createTemporaryPassword() {
  const randomPart =
    randomBytes(48)
      .toString("base64url")

  /*
   * Prefisso e suffisso garantiscono:
   * maiuscola, minuscola, numero e simbolo.
   */
  return `Dg!${randomPart}9aA`
}

function getSiteUrl() {
  const configuredUrl =
    String(
      process.env
        .NEXT_PUBLIC_SITE_URL ||
        ""
    )
      .trim()
      .replace(/\/+$/, "")

  if (!configuredUrl) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL_NOT_CONFIGURED"
    )
  }

  const parsedUrl =
    new URL(configuredUrl)

  const isLocalhost =
    parsedUrl.hostname ===
      "localhost" ||
    parsedUrl.hostname ===
      "127.0.0.1"

  if (
    process.env.NODE_ENV ===
      "production" &&
    !isLocalhost &&
    parsedUrl.protocol !==
      "https:"
  ) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL_HTTPS_REQUIRED"
    )
  }

  if (
    parsedUrl.protocol !==
      "https:" &&
    parsedUrl.protocol !==
      "http:"
  ) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL_PROTOCOL_NOT_VALID"
    )
  }

  return parsedUrl.origin
}

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

function passwordIsSecure(password) {
  return (
    password.length >= 12 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^a-zA-Z0-9]/.test(password)
  )
}

/*
 * Supabase Auth e PostgreSQL non condividono una singola transazione.
 * Se un passaggio successivo fallisce, rimuoviamo l'utente appena creato.
 */
async function cleanupCreatedUser(adminSupabase, userId) {
  if (!userId) return

  await adminSupabase
    .from("team_members")
    .delete()
    .eq("user_id", userId)

  await adminSupabase
    .from("users")
    .delete()
    .eq("id", userId)

  await adminSupabase.auth.admin.deleteUser(userId)
}

export async function GET() {
  const { user, access } = await getTeamAccess()

  if (!user) {
    return jsonError("Devi effettuare l'accesso.", 401)
  }

  if (!access?.active) {
    return jsonError("Accesso Team non autorizzato.", 403)
  }

  const permissions = Array.isArray(access.permissions)
    ? access.permissions
    : []

  if (!permissions.includes("team.view")) {
    return jsonError(
      "Non hai il permesso di vedere i membri del Team.",
      403
    )
  }

  const adminSupabase = createAdminSupabaseClient()

  const { data: members, error: membersError } =
    await adminSupabase
      .from("team_members")
      .select(`
        user_id,
        role_key,
        display_name,
        active,
        invited_at,
        accepted_at,
        last_admin_login_at,
        created_at
      `)
      .order("created_at", {
        ascending: true
      })

  if (membersError) {
    console.error(
      "[team-members] Errore caricamento membri:",
      membersError
    )

    return jsonError(
      "Impossibile caricare i membri del Team.",
      500
    )
  }

  const { data: roles, error: rolesError } =
    await adminSupabase
      .from("team_roles")
      .select(`
        role_key,
        name,
        description
      `)
      .order("name", {
        ascending: true
      })

  if (rolesError) {
    console.error(
      "[team-members] Errore caricamento ruoli:",
      rolesError
    )

    return jsonError(
      "Impossibile caricare i ruoli Team.",
      500
    )
  }

  const roleMap = new Map(
    (roles || []).map((role) => [
      role.role_key,
      role.name
    ])
  )

  const completeMembers = await Promise.all(
    (members || []).map(async (member) => {
      const {
        data: authData,
        error: authError
      } = await adminSupabase.auth.admin.getUserById(
        member.user_id
      )

      if (authError) {
        console.error(
          `[team-members] Auth non disponibile per ${member.user_id}:`,
          authError
        )
      }

      return {
        userId: member.user_id,
        email: authData?.user?.email || "Email non disponibile",
        displayName:
          member.display_name || "Membro Team",
        roleKey: member.role_key,
        roleName:
          roleMap.get(member.role_key) ||
          member.role_key,
        active: member.active,
        isCurrentUser: member.user_id === user.id,
        invitedAt: member.invited_at,
        acceptedAt: member.accepted_at,
        lastAdminLoginAt:
          member.last_admin_login_at
      }
    })
  )

  const availableRoles = (roles || []).filter(
    (role) =>
      role.role_key !== "owner" ||
      permissions.includes("team.owner.manage")
  )

  return NextResponse.json({
    success: true,
    members: completeMembers,
    roles: availableRoles
  })
}

export async function PATCH(request) {
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
    Array.isArray(access.permissions)
      ? access.permissions
      : []

  if (
    !permissions.includes(
      "team.update"
    )
  ) {
    return jsonError(
      "Non hai il permesso di modificare i membri del Team.",
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

  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

  const targetUserId =
    String(
      body?.userId || ""
    ).trim()

  const displayName =
    String(
      body?.displayName || ""
    )
      .replace(/\u0000/g, "")
      .trim()
      .slice(0, 80)

  const roleKey =
    String(
      body?.roleKey || ""
    )
      .trim()
      .toLowerCase()
      .slice(0, 50)

  const active =
    body?.active

  const reason =
    String(
      body?.reason || ""
    )
      .replace(/\u0000/g, "")
      .trim()
      .slice(0, 500)

  if (!uuidRegex.test(targetUserId)) {
    return jsonError(
      "Identificativo membro non valido."
    )
  }

  if (
    displayName.length < 2 ||
    displayName.length > 80
  ) {
    return jsonError(
      "Il nome deve contenere da 2 a 80 caratteri."
    )
  }

  if (!allowedRoles.has(roleKey)) {
    return jsonError(
      "Ruolo Team non valido."
    )
  }

  if (typeof active !== "boolean") {
    return jsonError(
      "Stato account non valido."
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
 * Legge lo stato attuale prima di modificare
 * Supabase Auth e il database.
 */
const [
  memberReadResult,
  authReadResult,
  profileReadResult
] = await Promise.all([
  adminSupabase
    .from("team_members")
    .select(`
      user_id,
      active
    `)
    .eq(
      "user_id",
      targetUserId
    )
    .maybeSingle(),

  adminSupabase
    .auth
    .admin
    .getUserById(
      targetUserId
    ),

  adminSupabase
    .from("users")
    .select(`
      id,
      banned,
      account_status
    `)
    .eq(
      "id",
      targetUserId
    )
    .maybeSingle()
])

if (
  memberReadResult.error ||
  !memberReadResult.data
) {
  console.error(
    "[team-members] Errore lettura membro:",
    memberReadResult.error
  )

  return jsonError(
    "Membro Team non trovato.",
    404
  )
}

if (
  authReadResult.error ||
  !authReadResult.data?.user
) {
  console.error(
    "[team-members] Account Auth non trovato:",
    authReadResult.error
  )

  return jsonError(
    "Account di autenticazione non trovato.",
    500
  )
}

if (
  profileReadResult.error ||
  !profileReadResult.data
) {
  console.error(
    "[team-members] Profilo Team non trovato:",
    profileReadResult.error
  )

  return jsonError(
    "Profilo applicativo del membro non trovato.",
    500
  )
}

const existingMember =
  memberReadResult.data

const existingAuthUser =
  authReadResult.data.user

const existingProfile =
  profileReadResult.data

const activeChanged =
  existingMember.active !== active

/*
 * La modifica dello stato attivo richiede
 * il permesso specifico team.deactivate.
 */
if (
  activeChanged &&
  !permissions.includes(
    "team.deactivate"
  )
) {
  return jsonError(
    "Non hai il permesso di disattivare o riattivare account Team.",
    403
  )
}

/*
 * Non riattiva da questa pagina un account
 * sospeso o disattivato nella gestione utenti.
 */
if (
  activeChanged &&
  active === true &&
  (
    existingProfile.banned === true ||
    existingProfile.account_status !==
      "active"
  )
) {
  return jsonError(
    "Questo account è sospeso o disattivato nella gestione utenti e non può essere riattivato da Account Team.",
    409
  )
}

const bannedUntilTime =
  existingAuthUser.banned_until
    ? new Date(
        existingAuthUser.banned_until
      ).getTime()
    : 0

const previousAuthBanned =
  Number.isFinite(bannedUntilTime) &&
  bannedUntilTime > Date.now()

let authStateChanged = false

/*
 * Aggiorna prima Supabase Auth.
 * Se la RPC fallisce, lo stato Auth
 * verrà ripristinato.
 */
if (activeChanged) {
  const {
    error: authUpdateError
  } = await adminSupabase
    .auth
    .admin
    .updateUserById(
      targetUserId,
      {
        ban_duration:
          active
            ? "none"
            : "876000h"
      }
    )

  if (authUpdateError) {
    console.error(
      "[team-members] Errore aggiornamento Auth:",
      authUpdateError
    )

    return jsonError(
      active
        ? "Impossibile riattivare l'accesso del membro Team."
        : "Impossibile disattivare l'accesso del membro Team.",
      500
    )
  }

  authStateChanged = true
}

const {
  data: updatedMember,
  error: updateError
} = await adminSupabase
  .rpc(
    "admin_update_team_member",
    {
      p_actor_user_id:
        user.id,

      p_target_user_id:
        targetUserId,

      p_display_name:
        displayName,

      p_role_key:
        roleKey,

      p_active:
        active,

      p_reason:
        reason
    }
  )
  .single()

  if (updateError) {
    if (authStateChanged) {
  const {
    error: authRollbackError
  } = await adminSupabase
    .auth
    .admin
    .updateUserById(
      targetUserId,
      {
        ban_duration:
          previousAuthBanned
            ? "876000h"
            : "none"
      }
    )

  if (authRollbackError) {
    console.error(
      "[team-members] Errore rollback Auth:",
      authRollbackError
    )
  }
}
    console.error(
      "[team-members] Errore aggiornamento atomico:",
      updateError
    )

    const message =
      String(
        updateError.message || ""
      ).toUpperCase()

    if (
      message.includes(
        "OPERATORE_NON_AUTORIZZATO_AGGIORNAMENTO_TEAM"
      )
    ) {
      return jsonError(
        "Non sei autorizzato a modificare i membri del Team.",
        403
      )
    }

    if (
  message.includes(
    "DISATTIVAZIONE_TEAM_NON_AUTORIZZATA"
  )
) {
  return jsonError(
    "Non hai il permesso di disattivare o riattivare account Team.",
    403
  )
}

    if (
      message.includes(
        "GESTIONE_OWNER_NON_AUTORIZZATA"
      )
    ) {
      return jsonError(
        "Non hai il permesso di gestire gli Owner.",
        403
      )
    }

    if (
      message.includes(
        "MODIFICA_PROPRIO_RUOLO_NON_CONSENTITA"
      )
    ) {
      return jsonError(
        "Non puoi disattivare o cambiare il ruolo del tuo stesso account.",
        400
      )
    }

    if (
      message.includes(
        "ULTIMO_OWNER_ATTIVO_NON_MODIFICABILE"
      )
    ) {
      return jsonError(
        "Non puoi rimuovere o disattivare l'ultimo Owner attivo.",
        409
      )
    }

    if (
      message.includes(
        "MEMBRO_TEAM_NON_TROVATO"
      )
    ) {
      return jsonError(
        "Membro Team non trovato.",
        404
      )
    }

    if (
      message.includes(
        "RUOLO_TEAM_NON_VALIDO"
      ) ||
      message.includes(
        "RUOLO_TEAM_MANCANTE"
      )
    ) {
      return jsonError(
        "Ruolo Team non valido."
      )
    }

    if (
      message.includes(
        "NOME_MEMBRO_TEAM_NON_VALIDO"
      )
    ) {
      return jsonError(
        "Il nome deve contenere da 2 a 80 caratteri."
      )
    }

    if (
      message.includes(
        "MOTIVAZIONE_TEAM_NON_VALIDA"
      )
    ) {
      return jsonError(
        "La motivazione deve contenere da 10 a 500 caratteri."
      )
    }

    return jsonError(
      "Impossibile aggiornare il membro Team.",
      500
    )
  }

  if (!updatedMember) {
    return jsonError(
      "L'aggiornamento non ha restituito un risultato valido.",
      500
    )
  }

  const [
    authResult,
    roleResult
  ] = await Promise.all([
    adminSupabase
      .auth
      .admin
      .getUserById(
        targetUserId
      ),

    adminSupabase
      .from("team_roles")
      .select("name")
      .eq(
        "role_key",
        updatedMember.role_key
      )
      .maybeSingle()
  ])

  if (authResult.error) {
    console.error(
      "[team-members] Errore recupero Auth:",
      authResult.error
    )
  }

  if (roleResult.error) {
    console.error(
      "[team-members] Errore recupero ruolo:",
      roleResult.error
    )
  }

  return NextResponse.json({
    success: true,

    member: {
      userId:
        updatedMember.user_id,

      email:
        authResult.data?.user?.email ||
        "Email non disponibile",

      displayName:
        updatedMember.display_name,

      roleKey:
        updatedMember.role_key,

      roleName:
        roleResult.data?.name ||
        updatedMember.role_key,

      active:
        updatedMember.active,

      isCurrentUser:
        updatedMember.user_id ===
        user.id,

      invitedAt:
        updatedMember.invited_at,

      acceptedAt:
        updatedMember.accepted_at,

      lastAdminLoginAt:
        updatedMember.last_admin_login_at
    }
  })
}

export async function POST(request) {
  /*
   * Protezione base contro richieste provenienti
   * da un sito esterno.
   */
  const requestOrigin = request.headers.get("origin")

  if (
    requestOrigin &&
    requestOrigin !== request.nextUrl.origin
  ) {
    return jsonError("Origine della richiesta non autorizzata.", 403)
  }

  /*
   * Verifica sessione e accesso Team.
   */
  const { user, access } = await getTeamAccess()

  if (!user) {
    return jsonError("Devi effettuare l'accesso.", 401)
  }

  if (!access?.active) {
    return jsonError("Accesso Team non autorizzato.", 403)
  }

  const permissions = Array.isArray(access.permissions)
    ? access.permissions
    : []

  if (!permissions.includes("team.invite")) {
    return jsonError(
      "Non hai il permesso di creare account Team.",
      403
    )
  }

  if (
  !permissions.includes(
    "emails.send"
  )
) {
  return jsonError(
    "Non hai il permesso di inviare l'invito al nuovo membro Team.",
    403
  )
}

  let body

  try {
    body = await request.json()
  } catch {
    return jsonError("Dati della richiesta non validi.")
  }

  const email = String(body?.email || "")
    .trim()
    .toLowerCase()

  const displayName =
  String(
    body?.displayName || ""
  ).trim()
  const roleKey = String(body?.roleKey || "")
    .trim()
    .toLowerCase()

  /*
   * Validazioni.
   */
  if (!emailRegex.test(email)) {
    return jsonError("Inserisci un indirizzo email valido.")
  }

  if (displayName.length < 2 || displayName.length > 80) {
    return jsonError(
      "Il nome deve contenere da 2 a 80 caratteri."
    )
  }

  if (!allowedRoles.has(roleKey)) {
    return jsonError("Ruolo Team non valido.")
  }

  /*
   * Solo chi possiede il permesso speciale può
   * creare un secondo Owner.
   */
  if (
    roleKey === "owner" &&
    !permissions.includes("team.owner.manage")
  ) {
    return jsonError(
      "Non hai il permesso di creare un account Owner.",
      403
    )
  }

  let siteUrl

try {
  siteUrl =
    getSiteUrl()
} catch (error) {
  console.error(
    "[team-members] URL sito non valido:",
    error
  )

  return jsonError(
    "Configurazione del sito non valida.",
    500
  )
}

  const adminSupabase = createAdminSupabaseClient()

  /*
   * Conferma che il ruolo esista realmente nel database.
   */
  const { data: role, error: roleError } =
    await adminSupabase
      .from("team_roles")
      .select("role_key, name")
      .eq("role_key", roleKey)
      .maybeSingle()

  if (roleError) {
    console.error(
      "[team-members] Errore controllo ruolo:",
      roleError
    )

    return jsonError(
      "Impossibile verificare il ruolo Team.",
      500
    )
  }

  if (!role) {
    return jsonError("Il ruolo selezionato non esiste.")
  }

  /*
   * Crea l'utente Supabase Auth.
   *
   * account_type viene salvato in app_metadata:
   * il trigger creerà public.users con:
   *
   * role = team
   * credits = 0
   * free_credits_claimed = true
   */
const temporaryPassword =
  createTemporaryPassword()

  const {
    data: createdAuthData,
    error: createAuthError
  } = await adminSupabase.auth.admin.createUser({
    email,
    password:
  temporaryPassword,
    email_confirm: true,

    app_metadata: {
      account_type: "team"
    },

    user_metadata: {
  display_name: displayName,
  name: displayName,

  /*
   * Valore tecnico temporaneo per consentire al trigger
   * di creare public.users anche se app_metadata non è
   * ancora visibile durante l'inserimento Auth.
   */
  role: "cliente"
}
  })

  if (createAuthError) {
    console.error(
      "[team-members] Errore creazione Auth:",
      createAuthError
    )

    const normalizedMessage =
      createAuthError.message?.toLowerCase() || ""

    if (
      normalizedMessage.includes("already") ||
      normalizedMessage.includes("registered") ||
      normalizedMessage.includes("exists")
    ) {
      return jsonError(
        "Esiste già un account con questa email.",
        409
      )
    }

    return jsonError(
      "Impossibile creare l'account Team.",
      500
    )
  }

  const createdUser = createdAuthData?.user

  if (!createdUser?.id) {
    return jsonError(
      "Supabase non ha restituito il nuovo utente.",
      500
    )
  }

  /*
 * Conferma definitivamente il tipo di account
 * nei metadati amministrativi Auth.
 */
const { error: metadataError } =
  await adminSupabase.auth.admin.updateUserById(
    createdUser.id,
    {
      app_metadata: {
        ...(createdUser.app_metadata || {}),
        account_type: "team"
      }
    }
  )

if (metadataError) {
  console.error(
    "[team-members] Errore metadata Team:",
    metadataError
  )

  await cleanupCreatedUser(
    adminSupabase,
    createdUser.id
  )

  return jsonError(
    "Impossibile configurare il nuovo account Team.",
    500
  )
}

/*
 * Il trigger potrebbe aver creato temporaneamente
 * il profilo come cliente. Qui imponiamo lo stato
 * finale corretto e azzeriamo qualsiasi bonus.
 */
const {
  data: normalizedProfile,
  error: profileError
} = await adminSupabase
  .from("users")
  .update({
    role: "team",
    name: displayName,
    credits: 0,
    free_credits_claimed: true,
    verified: false,
    is_admin: false,
    banned: false
  })
  .eq("id", createdUser.id)
  .select("id")
  .single()

if (profileError || !normalizedProfile) {
  console.error(
    "[team-members] Errore configurazione profilo Team:",
    profileError
  )

  await cleanupCreatedUser(
    adminSupabase,
    createdUser.id
  )

  return jsonError(
    "Impossibile completare il profilo Team.",
    500
  )
}

    /*
   * Finalizza atomicamente:
   *
   * - collegamento a team_members;
   * - verifica dei permessi;
   * - controllo del ruolo Owner;
   * - registrazione audit.
   *
   * Se la RPC fallisce, PostgreSQL annulla
   * automaticamente entrambe le operazioni.
   */
  const {
    data: finalizedMember,
    error: finalizeError
  } = await adminSupabase
    .rpc(
      "admin_finalize_team_member",
      {
        p_actor_user_id:
          user.id,

        p_target_user_id:
          createdUser.id,

        p_display_name:
          displayName,

        p_role_key:
          roleKey
      }
    )
    .single()

  if (
    finalizeError ||
    !finalizedMember
  ) {
    console.error(
      "[team-members] Errore finalizzazione membro:",
      finalizeError
    )

    /*
     * Auth e PostgreSQL non condividono
     * la stessa transazione.
     *
     * Se la finalizzazione DB fallisce,
     * eliminiamo l'account Auth e il profilo
     * applicativo appena creati.
     */
    await cleanupCreatedUser(
      adminSupabase,
      createdUser.id
    )

    const normalizedMessage =
      String(
        finalizeError?.message || ""
      ).toUpperCase()

    if (
      normalizedMessage.includes(
        "OPERATORE_NON_AUTORIZZATO_CREAZIONE_TEAM"
      )
    ) {
      return jsonError(
        "Non sei autorizzato a creare account Team.",
        403
      )
    }

    if (
      normalizedMessage.includes(
        "CREAZIONE_OWNER_NON_AUTORIZZATA"
      )
    ) {
      return jsonError(
        "Non hai il permesso di creare un account Owner.",
        403
      )
    }

    if (
      normalizedMessage.includes(
        "MEMBRO_TEAM_GIA_PRESENTE"
      )
    ) {
      return jsonError(
        "Questo account risulta già collegato al Team.",
        409
      )
    }

    if (
      normalizedMessage.includes(
        "NOME_MEMBRO_TEAM_NON_VALIDO"
      )
    ) {
      return jsonError(
        "Il nome deve contenere da 2 a 80 caratteri."
      )
    }

    if (
      normalizedMessage.includes(
        "RUOLO_TEAM_NON_VALIDO"
      ) ||
      normalizedMessage.includes(
        "RUOLO_TEAM_MANCANTE"
      )
    ) {
      return jsonError(
        "Ruolo Team non valido."
      )
    }

    if (
      normalizedMessage.includes(
        "PROFILO_NUOVO_MEMBRO_NON_TROVATO"
      ) ||
      normalizedMessage.includes(
        "PROFILO_NUOVO_MEMBRO_NON_TEAM"
      )
    ) {
      return jsonError(
        "Il profilo del nuovo account Team non è stato configurato correttamente.",
        500
      )
    }

    return jsonError(
      "Impossibile finalizzare il nuovo account Team.",
      500
    )
  }

  let recoveryEmailSent = false
let recoveryTrackingFailed = false
let recoveryError = null

const passwordResetRequestId =
  randomUUID()

const {
  data: preparedPasswordReset,
  error: preparePasswordResetError
} = await adminSupabase
  .rpc(
    "admin_prepare_team_password_reset",
    {
      p_request_id:
        passwordResetRequestId,

      p_actor_user_id:
        user.id,

      p_target_user_id:
        finalizedMember.user_id,

      p_reason:
        "Invio iniziale per configurazione del nuovo account Team"
    }
  )
  .single()

if (
  preparePasswordResetError ||
  !preparedPasswordReset
) {
  console.error(
    "[team-members] Impossibile preparare l'invito password:",
    preparePasswordResetError
  )

  recoveryError =
    "Account creato, ma invito password non preparato."
} else {
  const {
    error: resetEmailError
  } = await adminSupabase
    .auth
    .resetPasswordForEmail(
      email,
      {
        redirectTo:
          `${siteUrl}/reset-password`
      }
    )

  const resetStatus =
    resetEmailError
      ? "failed"
      : "sent"

  const providerErrorCode =
    resetEmailError
      ? String(
          resetEmailError.code ||
            resetEmailError.name ||
            "unknown"
        ).slice(0, 200)
      : null

  const {
    error: finalizeResetError
  } = await adminSupabase
    .rpc(
      "admin_finalize_team_password_reset",
      {
        p_request_id:
          passwordResetRequestId,

        p_actor_user_id:
          user.id,

        p_status:
          resetStatus,

        p_provider_error_code:
          providerErrorCode
      }
    )
    .single()

  if (finalizeResetError) {
    console.error(
      "[team-members] Finalizzazione invito password fallita:",
      finalizeResetError
    )

    recoveryTrackingFailed = true
  }

  if (resetEmailError) {
    console.error(
      "[team-members] Invio iniziale recupero password fallito:",
      resetEmailError
    )

    recoveryError =
      "Account creato, ma email per scegliere la password non inviata."
  } else {
    recoveryEmailSent = true
  }
}

  return NextResponse.json(
    {
      success: true,
      message:
  recoveryEmailSent
    ? "Account Team creato e invito password inviato."
    : "Account Team creato, ma l'invito password richiede un nuovo tentativo.",

recoveryEmailSent,

recoveryTrackingFailed,

recoveryError,
      member: {
  userId:
    finalizedMember.user_id,

  email,

  displayName:
    finalizedMember.display_name,

  roleKey:
    finalizedMember.role_key,

  roleName:
    role.name,

  active:
    finalizedMember.active,

  invitedAt:
    finalizedMember.invited_at,

  acceptedAt:
    finalizedMember.accepted_at,

  lastAdminLoginAt:
    finalizedMember.last_admin_login_at,

  isCurrentUser:
    finalizedMember.user_id ===
    user.id
}
    },
    {
      status: 201
    }
  )
}