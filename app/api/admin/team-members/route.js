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

  if (!permissions.includes("team.update")) {
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

  const targetUserId = String(
    body?.userId || ""
  ).trim()

  const displayName = String(
    body?.displayName || ""
  ).trim()

  const roleKey = String(
    body?.roleKey || ""
  )
    .trim()
    .toLowerCase()

  const active = body?.active

  if (!targetUserId) {
    return jsonError(
      "Identificativo membro mancante."
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

  const adminSupabase =
    createAdminSupabaseClient()

  const {
    data: existingMember,
    error: existingMemberError
  } = await adminSupabase
    .from("team_members")
    .select(`
      user_id,
      role_key,
      display_name,
      active
    `)
    .eq("user_id", targetUserId)
    .maybeSingle()

  if (existingMemberError) {
    console.error(
      "[team-members] Errore lettura membro:",
      existingMemberError
    )

    return jsonError(
      "Impossibile controllare il membro Team.",
      500
    )
  }

  if (!existingMember) {
    return jsonError(
      "Membro Team non trovato.",
      404
    )
  }

  /*
   * Modifiche relative agli Owner richiedono
   * il permesso speciale.
   */
  if (
    (
      existingMember.role_key === "owner" ||
      roleKey === "owner"
    ) &&
    !permissions.includes("team.owner.manage")
  ) {
    return jsonError(
      "Non hai il permesso di gestire gli Owner.",
      403
    )
  }

  /*
   * Un membro non può disattivare sé stesso
   * o togliersi autonomamente il ruolo.
   *
   * È invece consentito modificare soltanto
   * il proprio nome visualizzato.
   */
  if (
    targetUserId === user.id &&
    (
      active === false ||
      roleKey !== existingMember.role_key
    )
  ) {
    return jsonError(
      "Non puoi disattivare o cambiare il ruolo del tuo stesso account.",
      400
    )
  }

  /*
   * Non può mai essere rimosso o disattivato
   * l'ultimo Owner attivo.
   */
  const removesActiveOwner =
    existingMember.role_key === "owner" &&
    existingMember.active === true &&
    (
      roleKey !== "owner" ||
      active === false
    )

  if (removesActiveOwner) {
    const {
      count: activeOwnerCount,
      error: ownerCountError
    } = await adminSupabase
      .from("team_members")
      .select("user_id", {
        count: "exact",
        head: true
      })
      .eq("role_key", "owner")
      .eq("active", true)

    if (ownerCountError) {
      console.error(
        "[team-members] Errore conteggio Owner:",
        ownerCountError
      )

      return jsonError(
        "Impossibile verificare gli Owner attivi.",
        500
      )
    }

    if ((activeOwnerCount || 0) <= 1) {
      return jsonError(
        "Non puoi rimuovere o disattivare l'ultimo Owner attivo.",
        400
      )
    }
  }

  const {
    data: updatedMember,
    error: updateError
  } = await adminSupabase
    .from("team_members")
    .update({
      display_name: displayName,
      role_key: roleKey,
      active
    })
    .eq("user_id", targetUserId)
    .select(`
      user_id,
      role_key,
      display_name,
      active,
      invited_at,
      accepted_at,
      last_admin_login_at
    `)
    .single()

  if (updateError) {
    console.error(
      "[team-members] Errore aggiornamento membro:",
      updateError
    )

    return jsonError(
      "Impossibile aggiornare il membro Team.",
      500
    )
  }

  const { error: auditError } =
    await adminSupabase
      .from("admin_audit_log")
      .insert({
        actor_user_id: user.id,
        action: "team.member.update",
        target_type: "team_member",
        target_id: targetUserId,
        old_data: {
          display_name:
            existingMember.display_name,
          role_key:
            existingMember.role_key,
          active:
            existingMember.active
        },
        new_data: {
          display_name:
            updatedMember.display_name,
          role_key:
            updatedMember.role_key,
          active:
            updatedMember.active
        },
        reason:
          "Modifica effettuata dal Centro Operativo"
      })

  if (auditError) {
    console.error(
      "[team-members] Errore audit modifica:",
      auditError
    )

    /*
     * Ripristina i dati precedenti se non è
     * possibile registrare l'operazione.
     */
    const { error: rollbackError } =
      await adminSupabase
        .from("team_members")
        .update({
          display_name:
            existingMember.display_name,
          role_key:
            existingMember.role_key,
          active:
            existingMember.active
        })
        .eq("user_id", targetUserId)

    if (rollbackError) {
      console.error(
        "[team-members] Errore rollback:",
        rollbackError
      )
    }

    return jsonError(
      "Modifica annullata perché non è stato possibile registrarla.",
      500
    )
  }

  const {
    data: authData,
    error: authError
  } = await adminSupabase.auth.admin.getUserById(
    targetUserId
  )

  if (authError) {
    console.error(
      "[team-members] Errore recupero Auth:",
      authError
    )
  }

  const {
    data: updatedRole,
    error: updatedRoleError
  } = await adminSupabase
    .from("team_roles")
    .select("name")
    .eq("role_key", updatedMember.role_key)
    .maybeSingle()

  if (updatedRoleError) {
    console.error(
      "[team-members] Errore recupero ruolo:",
      updatedRoleError
    )
  }

  return NextResponse.json({
    success: true,
    member: {
      userId: updatedMember.user_id,
      email:
        authData?.user?.email ||
        "Email non disponibile",
      displayName:
        updatedMember.display_name,
      roleKey:
        updatedMember.role_key,
      roleName:
        updatedRole?.name ||
        updatedMember.role_key,
      active:
        updatedMember.active,
      isCurrentUser:
        updatedMember.user_id === user.id,
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

  let body

  try {
    body = await request.json()
  } catch {
    return jsonError("Dati della richiesta non validi.")
  }

  const email = String(body?.email || "")
    .trim()
    .toLowerCase()

  const password = String(body?.password || "")
  const displayName = String(body?.displayName || "").trim()
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

  if (!passwordIsSecure(password)) {
    return jsonError(
      "La password deve avere almeno 12 caratteri, una maiuscola, una minuscola, un numero e un simbolo."
    )
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
  const {
    data: createdAuthData,
    error: createAuthError
  } = await adminSupabase.auth.admin.createUser({
    email,
    password,
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
   * Collega l'utente al Team DroneGuard.
   */
  const { error: memberError } = await adminSupabase
    .from("team_members")
    .insert({
      user_id: createdUser.id,
      role_key: roleKey,
      display_name: displayName,
      active: true,
      invited_by: user.id,
      invited_at: new Date().toISOString(),
      accepted_at: new Date().toISOString(),
      notes: "Account creato dal Centro Operativo DroneGuard"
    })

  if (memberError) {
    console.error(
      "[team-members] Errore inserimento membro:",
      memberError
    )

    await cleanupCreatedUser(
      adminSupabase,
      createdUser.id
    )

    return jsonError(
      "Account non completato. La creazione è stata annullata.",
      500
    )
  }

  /*
   * Registra l'operazione nel registro amministrativo.
   * La password non viene mai salvata nel registro.
   */
  const { error: auditError } = await adminSupabase
    .from("admin_audit_log")
    .insert({
      actor_user_id: user.id,
      action: "team.member.create",
      target_type: "team_member",
      target_id: createdUser.id,
      old_data: null,
      new_data: {
        email,
        display_name: displayName,
        role_key: roleKey,
        active: true
      },
      reason: "Creazione account dal Centro Operativo"
    })

  if (auditError) {
    console.error(
      "[team-members] Errore audit:",
      auditError
    )

    await cleanupCreatedUser(
      adminSupabase,
      createdUser.id
    )

    return jsonError(
      "Registrazione amministrativa fallita. La creazione è stata annullata.",
      500
    )
  }

  return NextResponse.json(
    {
      success: true,
      member: {
        userId: createdUser.id,
        email,
        displayName,
        roleKey,
        roleName: role.name,
        active: true
      }
    },
    {
      status: 201
    }
  )
}