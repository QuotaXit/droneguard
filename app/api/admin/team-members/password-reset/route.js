import {
  randomUUID
} from "node:crypto"

import {
  NextResponse
} from "next/server"

import {
  getTeamAccess
} from "@/lib/team/access"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

export const dynamic =
  "force-dynamic"

export const runtime =
  "nodejs"

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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
      status,
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0"
      }
    }
  )
}

function hasValidOrigin(request) {
  const requestOrigin =
    request.headers.get(
      "origin"
    )

  if (!requestOrigin) {
    return false
  }

  try {
    return (
      new URL(
        requestOrigin
      ).origin ===
      new URL(
        request.url
      ).origin
    )
  } catch {
    return false
  }
}

function getSiteUrl() {
  const configuredUrl =
    String(
      process.env
        .NEXT_PUBLIC_SITE_URL ||
        "https://www.droneguard.it"
    )
      .trim()
      .replace(/\/+$/, "")

  const parsedUrl =
    new URL(
      configuredUrl
    )

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
      "SITE_URL_HTTPS_REQUIRED"
    )
  }

  if (
    parsedUrl.protocol !==
      "https:" &&
    parsedUrl.protocol !==
      "http:"
  ) {
    throw new Error(
      "SITE_URL_PROTOCOL_NOT_VALID"
    )
  }

  return parsedUrl.origin
}

export async function POST(
  request
) {
  /*
   * La richiesta deve provenire
   * esclusivamente dal sito DroneGuard.
   */
  if (!hasValidOrigin(request)) {
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

  /*
   * È necessaria sia la gestione Team
   * sia l'autorizzazione agli invii email.
   */
  if (
    !permissions.includes(
      "team.update"
    )
  ) {
    return jsonError(
      "Non hai il permesso di gestire gli account Team.",
      403
    )
  }

  if (
    !permissions.includes(
      "emails.send"
    )
  ) {
    return jsonError(
      "Non hai il permesso di inviare email operative.",
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

  const targetUserId =
    String(
      body?.userId || ""
    ).trim()

  const reason =
    String(
      body?.reason || ""
    )
      .replace(/\u0000/g, "")
      .trim()
      .slice(0, 500)

  if (
    !UUID_PATTERN.test(
      targetUserId
    )
  ) {
    return jsonError(
      "Identificativo membro non valido."
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

  const [
    memberResult,
    profileResult,
    authResult
  ] = await Promise.all([
    adminSupabase
      .from("team_members")
      .select(`
        user_id,
        role_key,
        display_name,
        active
      `)
      .eq(
        "user_id",
        targetUserId
      )
      .maybeSingle(),

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
      .maybeSingle(),

    adminSupabase
      .auth
      .admin
      .getUserById(
        targetUserId
      )
  ])

  if (
    memberResult.error ||
    !memberResult.data
  ) {
    console.error(
      "[team-password-reset] Membro non trovato:",
      memberResult.error
    )

    return jsonError(
      "Membro Team non trovato.",
      404
    )
  }

  if (
    profileResult.error ||
    !profileResult.data
  ) {
    console.error(
      "[team-password-reset] Profilo non trovato:",
      profileResult.error
    )

    return jsonError(
      "Profilo applicativo del membro non trovato.",
      500
    )
  }

  if (
    authResult.error ||
    !authResult.data?.user
  ) {
    console.error(
      "[team-password-reset] Account Auth non trovato:",
      authResult.error
    )

    return jsonError(
      "Account di autenticazione non trovato.",
      500
    )
  }

  const member =
    memberResult.data

  const profile =
    profileResult.data

  const targetAuthUser =
    authResult.data.user

  /*
   * La gestione di un altro Owner richiede
   * il permesso speciale.
   */
  if (
    member.role_key ===
      "owner" &&
    !permissions.includes(
      "team.owner.manage"
    )
  ) {
    return jsonError(
      "Non hai il permesso di gestire gli account Owner.",
      403
    )
  }

  if (!member.active) {
    return jsonError(
      "L'account Team è disattivato. Riattivalo prima di inviare il recupero password.",
      409
    )
  }

  const accountStatus =
    String(
      profile.account_status ||
        "active"
    )
      .trim()
      .toLowerCase()

  if (
    profile.banned === true ||
    accountStatus !==
      "active"
  ) {
    return jsonError(
      "L'account è sospeso o disattivato e non può ricevere un recupero password.",
      409
    )
  }

  const targetEmail =
    String(
      targetAuthUser.email || ""
    )
      .trim()
      .toLowerCase()

  if (
    !EMAIL_PATTERN.test(
      targetEmail
    )
  ) {
    return jsonError(
      "L'account non possiede un indirizzo email valido.",
      409
    )
  }

  let siteUrl

  try {
    siteUrl =
      getSiteUrl()
  } catch (error) {
    console.error(
      "[team-password-reset] URL sito non valido:",
      error
    )

    return jsonError(
      "Configurazione del sito non valida.",
      500
    )
  }

  /*
 * Identificativo univoco della richiesta.
 * Non contiene token o informazioni sensibili.
 */
const requestId =
  randomUUID()

/*
 * Prenota atomicamente la richiesta,
 * controlla permessi, stato account,
 * ruolo Owner e limite dei 10 minuti.
 */
const {
  data: preparedRequest,
  error: prepareError
} = await adminSupabase
  .rpc(
    "admin_prepare_team_password_reset",
    {
      p_request_id:
        requestId,

      p_actor_user_id:
        user.id,

      p_target_user_id:
        targetUserId,

      p_reason:
        reason
    }
  )
  .single()

if (
  prepareError ||
  !preparedRequest
) {
  console.error(
    "[team-password-reset] Errore preparazione:",
    prepareError
  )

  const normalizedMessage =
    String(
      prepareError?.message || ""
    ).toUpperCase()

  if (
    normalizedMessage.includes(
      "RESET_PASSWORD_TROPPO_RECENTE"
    )
  ) {
    return jsonError(
      "È già stato inviato recentemente un recupero password a questo account. Attendi almeno 10 minuti.",
      429
    )
  }

  if (
    normalizedMessage.includes(
      "OPERATORE_NON_AUTORIZZATO_AGGIORNAMENTO_TEAM"
    )
  ) {
    return jsonError(
      "Non hai il permesso di gestire gli account Team.",
      403
    )
  }

  if (
    normalizedMessage.includes(
      "OPERATORE_NON_AUTORIZZATO_INVIO_EMAIL"
    )
  ) {
    return jsonError(
      "Non hai il permesso di inviare email operative.",
      403
    )
  }

  if (
    normalizedMessage.includes(
      "GESTIONE_OWNER_NON_AUTORIZZATA"
    )
  ) {
    return jsonError(
      "Non hai il permesso di gestire gli account Owner.",
      403
    )
  }

  if (
    normalizedMessage.includes(
      "MEMBRO_TEAM_NON_TROVATO"
    )
  ) {
    return jsonError(
      "Membro Team non trovato.",
      404
    )
  }

  if (
    normalizedMessage.includes(
      "MEMBRO_TEAM_DISATTIVATO"
    )
  ) {
    return jsonError(
      "L'account Team è disattivato. Riattivalo prima di inviare il recupero password.",
      409
    )
  }

  if (
    normalizedMessage.includes(
      "PROFILO_MEMBRO_TEAM_NON_TROVATO"
    )
  ) {
    return jsonError(
      "Profilo applicativo del membro non trovato.",
      500
    )
  }

  if (
    normalizedMessage.includes(
      "PROFILO_MEMBRO_TEAM_NON_ATTIVO"
    )
  ) {
    return jsonError(
      "L'account è sospeso o disattivato e non può ricevere un recupero password.",
      409
    )
  }

  if (
    normalizedMessage.includes(
      "MOTIVAZIONE_TEAM_NON_VALIDA"
    )
  ) {
    return jsonError(
      "La motivazione deve contenere da 10 a 500 caratteri."
    )
  }

  if (
    normalizedMessage.includes(
      "RESET_PASSWORD_REQUEST_ID_CONFLITTO"
    )
  ) {
    return jsonError(
      "La richiesta di recupero è in conflitto con un'operazione precedente.",
      409
    )
  }

  return jsonError(
    "Impossibile preparare il recupero password.",
    500
  )
}

/*
 * Supabase genera e invia direttamente
 * il collegamento temporaneo.
 */
const {
  error: resetError
} = await adminSupabase
  .auth
  .resetPasswordForEmail(
    targetEmail,
    {
      redirectTo:
        `${siteUrl}/reset-password`
    }
  )

if (resetError) {
  console.error(
    "[team-password-reset] Errore invio recupero:",
    resetError
  )

  const providerErrorCode =
    String(
      resetError.code ||
        resetError.name ||
        "unknown"
    ).slice(
      0,
      200
    )

  const {
    error: finalizeFailureError
  } = await adminSupabase
    .rpc(
      "admin_finalize_team_password_reset",
      {
        p_request_id:
          requestId,

        p_actor_user_id:
          user.id,

        p_status:
          "failed",

        p_provider_error_code:
          providerErrorCode
      }
    )
    .single()

  if (finalizeFailureError) {
    console.error(
      "[team-password-reset] Errore finalizzazione fallimento:",
      finalizeFailureError
    )
  }

  return jsonError(
    "Non è stato possibile inviare l'email di recupero password.",
    502
  )
}

/*
 * L'email è stata accettata da Supabase:
 * registra atomicamente l'esito positivo.
 */
const {
  data: finalizedRequest,
  error: finalizeSuccessError
} = await adminSupabase
  .rpc(
    "admin_finalize_team_password_reset",
    {
      p_request_id:
        requestId,

      p_actor_user_id:
        user.id,

      p_status:
        "sent",

      p_provider_error_code:
        null
    }
  )
  .single()

if (
  finalizeSuccessError ||
  !finalizedRequest
) {
  /*
   * L'email è già stata inviata.
   * Non restituiamo un errore che potrebbe
   * indurre l'operatore a inviarla nuovamente.
   */
  console.error(
    "[team-password-reset] Email inviata ma finalizzazione fallita:",
    finalizeSuccessError
  )

  return NextResponse.json(
    {
      success: true,

      message:
        "Email di recupero inviata, ma la registrazione dell'esito non è stata completata.",

      recipientEmail:
        targetEmail,

      trackingFinalizationFailed:
        true
    },
    {
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0"
      }
    }
  )
}
  return NextResponse.json(
    {
      success: true,

      message:
        "Email di recupero password inviata correttamente.",

      recipientEmail:
        targetEmail
    },
    {
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0"
      }
    }
  )
}