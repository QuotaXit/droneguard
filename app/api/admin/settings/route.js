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

  const MAX_BODY_BYTES =
20_000

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

function getPermissions(access) {
  return Array.isArray(
    access?.permissions
  )
    ? access.permissions
    : []
}

function rejectCrossOrigin(
  request
) {
  const origin =
    request.headers.get(
      "origin"
    )

  if (!origin) {
    return jsonError(
      "Origine della richiesta mancante.",
      403
    )
  }

  if (
    origin !==
    request.nextUrl.origin
  ) {
    return jsonError(
      "Origine della richiesta non autorizzata.",
      403
    )
  }

  return null
}

function mapSettings(row) {
  if (!row) {
    return null
  }

  return {
    id:
      Number(row.id),

    registrationsEnabled:
      Boolean(
        row.registrations_enabled
      ),

    jobCreationEnabled:
      Boolean(
        row.job_creation_enabled
      ),

    applicationsEnabled:
      Boolean(
        row.applications_enabled
      ),

    paymentsEnabled:
      Boolean(
        row.payments_enabled
      ),

    updatedBy:
      row.updated_by ||
      null,

    createdAt:
      row.created_at ||
      null,

    updatedAt:
      row.updated_at ||
      null
  }
}

function mapDatabaseError(error) {
  const message =
    String(
      error?.message || ""
    ).toUpperCase()

  if (
    message.includes(
      "OPERATORE_TEAM_MANCANTE"
    )
  ) {
    return {
      message:
        "Operatore Team non disponibile.",
      status: 401
    }
  }

  if (
    message.includes(
      "OPERATORE_NON_AUTORIZZATO"
    )
  ) {
    return {
      message:
        "Non hai il permesso di modificare le impostazioni.",
      status: 403
    }
  }

  if (
    message.includes(
      "IMPOSTAZIONI_INCOMPLETE"
    )
  ) {
    return {
      message:
        "Una o più impostazioni non sono valide.",
      status: 400
    }
  }

  if (
    message.includes(
      "MOTIVAZIONE_NON_VALIDA"
    )
  ) {
    return {
      message:
        "La motivazione deve contenere da 10 a 500 caratteri.",
      status: 400
    }
  }

  if (
    message.includes(
      "IMPOSTAZIONI_PIATTAFORMA_NON_TROVATE"
    )
  ) {
    return {
      message:
        "Configurazione della piattaforma non trovata.",
      status: 404
    }
  }

  return {
    message:
      "Impossibile aggiornare le impostazioni operative.",
    status: 500
  }
}

async function getUpdater(
  adminSupabase,
  userId
) {
  if (!userId) {
    return null
  }

  const {
    data,
    error
  } = await adminSupabase
    .from("team_members")
    .select(`
      user_id,
      display_name,
      role_key
    `)
    .eq(
      "user_id",
      userId
    )
    .maybeSingle()

  if (error) {
    console.error(
      "[admin-settings] Errore caricamento operatore:",
      error
    )

    return null
  }

  if (!data) {
    return null
  }

  return {
    userId:
      data.user_id,

    displayName:
      data.display_name ||
      "Membro Team",

    roleKey:
      data.role_key ||
      ""
  }
}

export async function GET() {
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
    getPermissions(access)

  if (
    !permissions.includes(
      "settings.view"
    )
  ) {
    return jsonError(
      "Non hai il permesso di vedere le impostazioni.",
      403
    )
  }

  const adminSupabase =
    createAdminSupabaseClient()

  const {
    data,
    error
  } = await adminSupabase
    .from("platform_settings")
    .select(`
      id,
      registrations_enabled,
      job_creation_enabled,
      applications_enabled,
      payments_enabled,
      updated_by,
      created_at,
      updated_at
    `)
    .eq(
      "id",
      1
    )
    .maybeSingle()

  if (error) {
    console.error(
      "[admin-settings] Errore caricamento:",
      error
    )

    return jsonError(
      "Impossibile caricare le impostazioni operative.",
      500
    )
  }

  if (!data) {
    return jsonError(
      "Configurazione della piattaforma non trovata.",
      404
    )
  }

  const updater =
    await getUpdater(
      adminSupabase,
      data.updated_by
    )

  return NextResponse.json(
    {
      success: true,

      settings:
        mapSettings(data),

      updater,

      permissions: {
        canManage:
          permissions.includes(
            "settings.manage"
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

export async function PATCH(
  request
) {
  const originError =
    rejectCrossOrigin(request)

  if (originError) {
    return originError
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
    getPermissions(access)

  if (
    !permissions.includes(
      "settings.manage"
    )
  ) {
    return jsonError(
      "Non hai il permesso di modificare le impostazioni.",
      403
    )
  }

  const contentLength =
Number(
request.headers.get(
"content-length"
) || 0
)

if (
Number.isFinite(contentLength) &&
contentLength > MAX_BODY_BYTES
) {
return jsonError(
"Richiesta troppo grande.",
413
)
}

let rawBody

try {
rawBody =
await request.text()
} catch {
return jsonError(
"Dati della richiesta non validi."
)
}

if (
Buffer.byteLength(
rawBody,
"utf8"
) > MAX_BODY_BYTES
) {
return jsonError(
"Richiesta troppo grande.",
413
)
}

let body

try {
body =
JSON.parse(rawBody)
} catch {
return jsonError(
"Dati della richiesta non validi."
)
}

if (
!body ||
typeof body !== "object" ||
Array.isArray(body)
) {
return jsonError(
"Dati della richiesta non validi."
)
}

  const booleanFields = [
    "registrationsEnabled",
    "jobCreationEnabled",
    "applicationsEnabled",
    "paymentsEnabled"
  ]

  for (
    const field of booleanFields
  ) {
    if (
      typeof body?.[field] !==
      "boolean"
    ) {
      return jsonError(
        "Una o più impostazioni non sono valide."
      )
    }
  }

  const reason =
String(
body?.reason || ""
)
.replace(/\u0000/g, "")
.trim()

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
    data,
    error
  } = await adminSupabase
    .rpc(
      "admin_update_operational_settings",
      {
        p_actor_user_id:
          user.id,

        p_registrations_enabled:
          body.registrationsEnabled,

        p_job_creation_enabled:
          body.jobCreationEnabled,

        p_applications_enabled:
          body.applicationsEnabled,

        p_payments_enabled:
          body.paymentsEnabled,

        p_reason:
          reason
      }
    )
    .single()

  if (error) {
    console.error(
      "[admin-settings] Errore aggiornamento:",
      error
    )

    const mapped =
      mapDatabaseError(error)

    return jsonError(
      mapped.message,
      mapped.status
    )
  }

  const settings =
    mapSettings(data)

  return NextResponse.json(
{
success: true,

message:
"Impostazioni operative aggiornate correttamente.",

settings,

updater: {
userId:
user.id,

displayName:
access.display_name ||
"Membro Team",

roleKey:
access.role_key ||
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