import { NextResponse } from "next/server"

import {
  getTeamAccess
} from "@/lib/team/access"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const MAX_BODY_BYTES =
  20_000

const ROME_TIME_ZONE =
  "Europe/Rome"

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

function hasPermission(access, permission) {
  const permissions =
    Array.isArray(access?.permissions)
      ? access.permissions
      : []

  return permissions.includes(permission)
}

async function requireAccess(permission) {
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
    !origin ||
    origin !== request.nextUrl.origin
  ) {
    return jsonError(
      "Origine della richiesta non autorizzata.",
      403
    )
  }

  return null
}

function cleanText(value, maxLength) {
  return String(value || "")
    .replace(/\u0000/g, "")
    .trim()
    .slice(0, maxLength)
}

function getTimeZoneOffsetMs(
  timestamp,
  timeZone
) {
  const formatter =
    new Intl.DateTimeFormat(
      "en-CA",
      {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23"
      }
    )

  const parts =
    formatter.formatToParts(
      new Date(timestamp)
    )

  const values = {}

  for (const part of parts) {
    if (part.type !== "literal") {
      values[part.type] =
        Number(part.value)
    }
  }

  const representedAsUtc =
    Date.UTC(
      values.year,
      values.month - 1,
      values.day,
      values.hour,
      values.minute,
      values.second
    )

  return representedAsUtc -
    timestamp
}

function parseNullableDate(value) {
  if (
  value === null ||
  value === undefined ||
  value === ""
) {
  return null
}

const normalized =
  String(value).trim()

const match =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/
    .exec(normalized)

/*
 * Se arriva una data ISO completa, per esempio:
 * 2026-08-31T21:59:00.000Z
 *
 * la accettiamo direttamente.
 */
if (!match) {
  const parsedDate =
    new Date(normalized)

  if (
    Number.isNaN(
      parsedDate.getTime()
    )
  ) {
    return undefined
  }

  return parsedDate.toISOString()
}

  const year =
    Number(match[1])

  const month =
    Number(match[2])

  const day =
    Number(match[3])

  const hour =
    Number(match[4])

  const minute =
    Number(match[5])

  const wallClockUtc =
    Date.UTC(
      year,
      month - 1,
      day,
      hour,
      minute,
      0,
      0
    )

  const validationDate =
    new Date(wallClockUtc)

  if (
    validationDate.getUTCFullYear() !== year ||
    validationDate.getUTCMonth() !==
      month - 1 ||
    validationDate.getUTCDate() !== day ||
    validationDate.getUTCHours() !== hour ||
    validationDate.getUTCMinutes() !==
      minute
  ) {
    return undefined
  }

  let candidate =
    wallClockUtc

  for (let index = 0; index < 4; index++) {
    const offset =
      getTimeZoneOffsetMs(
        candidate,
        ROME_TIME_ZONE
      )

    const nextCandidate =
      wallClockUtc - offset

    if (
      nextCandidate === candidate
    ) {
      break
    }

    candidate =
      nextCandidate
  }

  const formatter =
    new Intl.DateTimeFormat(
      "en-CA",
      {
        timeZone:
          ROME_TIME_ZONE,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23"
      }
    )

  const parts =
    formatter.formatToParts(
      new Date(candidate)
    )

  const values = {}

  for (const part of parts) {
    if (part.type !== "literal") {
      values[part.type] =
        Number(part.value)
    }
  }

  if (
    values.year !== year ||
    values.month !== month ||
    values.day !== day ||
    values.hour !== hour ||
    values.minute !== minute
  ) {
    return undefined
  }

  return new Date(
    candidate
  ).toISOString()
}

function normalizeSettings(row) {
  if (!row) {
    return null
  }

  const now = Date.now()

  const startsAt =
    row.maintenance_starts_at
      ? new Date(
          row.maintenance_starts_at
        ).getTime()
      : null

  const endsAt =
    row.maintenance_ends_at
      ? new Date(
          row.maintenance_ends_at
        ).getTime()
      : null

  const maintenanceActive =
    Boolean(
      row.maintenance_enabled
    ) &&
    (
      startsAt === null ||
      startsAt <= now
    ) &&
    (
      endsAt === null ||
      endsAt > now
    )

  return {
    id:
      Number(row.id),

    maintenanceEnabled:
      Boolean(
        row.maintenance_enabled
      ),

    maintenanceActive,

    maintenanceTitle:
      row.maintenance_title || "",

    maintenanceMessage:
      row.maintenance_message || "",

    maintenanceStartsAt:
      row.maintenance_starts_at ||
      null,

    maintenanceEndsAt:
      row.maintenance_ends_at ||
      null,

    updatedBy:
      row.updated_by || null,

    createdAt:
      row.created_at,

    updatedAt:
      row.updated_at
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
        "Non sei autorizzato a modificare la manutenzione.",
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
        "La configurazione della manutenzione è incompleta.",
      status: 400
    }
  }

  if (
    message.includes(
      "TITOLO_MANUTENZIONE_NON_VALIDO"
    )
  ) {
    return {
      message:
        "Il titolo deve contenere da 3 a 150 caratteri.",
      status: 400
    }
  }

  if (
    message.includes(
      "MESSAGGIO_MANUTENZIONE_NON_VALIDO"
    )
  ) {
    return {
      message:
        "Il messaggio deve contenere da 5 a 2.000 caratteri.",
      status: 400
    }
  }

  if (
    message.includes(
      "PERIODO_MANUTENZIONE_NON_VALIDO"
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
      "Impossibile aggiornare la manutenzione.",
    status: 500
  }
}

export async function GET() {
  const accessResult =
    await requireAccess(
      "maintenance.view"
    )

  if (accessResult.error) {
    return accessResult.error
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
      maintenance_enabled,
      maintenance_title,
      maintenance_message,
      maintenance_starts_at,
      maintenance_ends_at,
      updated_by,
      created_at,
      updated_at
    `)
    .eq("id", 1)
    .maybeSingle()

  if (error) {
    console.error(
      "[admin-maintenance] Errore lettura:",
      error
    )

    return jsonError(
      "Impossibile caricare la configurazione della manutenzione.",
      500
    )
  }

  if (!data) {
    return jsonError(
      "Configurazione della manutenzione non trovata.",
      404
    )
  }

  let updater = null

  if (data.updated_by) {
    const {
      data: updaterData,
      error: updaterError
    } = await adminSupabase
      .from("team_members")
      .select(`
        user_id,
        display_name,
        role_key
      `)
      .eq(
        "user_id",
        data.updated_by
      )
      .maybeSingle()

    if (updaterError) {
      console.error(
        "[admin-maintenance] Errore operatore:",
        updaterError
      )
    } else if (updaterData) {
      updater = {
        userId:
          updaterData.user_id,

        displayName:
          updaterData.display_name ||
          "Membro Team",

        roleKey:
          updaterData.role_key
      }
    }
  }

  return NextResponse.json(
    {
      success: true,

      settings:
        normalizeSettings(data),

      updater,

      permissions: {
  canManage:
    hasPermission(
      accessResult.access,
      "maintenance.manage"
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

export async function PATCH(request) {
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

  const canManage =
  hasPermission(
    access,
    "maintenance.manage"
  )

  if (!canManage) {
    return jsonError(
      "Non hai il permesso di modificare la manutenzione.",
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

  const maintenanceTitle =
    cleanText(
      body?.maintenanceTitle,
      150
    )

  const maintenanceMessage =
    cleanText(
      body?.maintenanceMessage,
      2000
    )

  const reason =
  cleanText(
    body?.reason,
    500
  )

  const maintenanceStartsAt =
    parseNullableDate(
      body?.maintenanceStartsAt
    )

  const maintenanceEndsAt =
    parseNullableDate(
      body?.maintenanceEndsAt
    )

  if (
    maintenanceTitle.length < 3 ||
    maintenanceTitle.length > 150
  ) {
    return jsonError(
      "Il titolo deve contenere da 3 a 150 caratteri."
    )
  }

  if (
    maintenanceMessage.length < 5 ||
    maintenanceMessage.length > 2000
  ) {
    return jsonError(
      "Il messaggio deve contenere da 5 a 2.000 caratteri."
    )
  }

  if (
    maintenanceStartsAt ===
      undefined ||
    maintenanceEndsAt ===
      undefined
  ) {
    return jsonError(
      "Data di manutenzione non valida."
    )
  }

  if (
    maintenanceStartsAt &&
    maintenanceEndsAt &&
    new Date(
      maintenanceEndsAt
    ) <=
      new Date(
        maintenanceStartsAt
      )
  ) {
    return jsonError(
      "La data di fine deve essere successiva alla data di inizio."
    )
  }

  const booleanFields = [
  "maintenanceEnabled"
]

  for (const field of booleanFields) {
    if (
      typeof body?.[field] !==
      "boolean"
    ) {
      return jsonError(
        "Una o più impostazioni non sono valide."
      )
    }
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
  data,
  error
} = await adminSupabase
  .rpc(
    "admin_update_maintenance_settings",
    {
      p_actor_user_id:
        user.id,

      p_maintenance_enabled:
        body.maintenanceEnabled,

      p_maintenance_title:
        maintenanceTitle,

      p_maintenance_message:
        maintenanceMessage,

      p_maintenance_starts_at:
        maintenanceStartsAt,

      p_maintenance_ends_at:
        maintenanceEndsAt,

      p_reason:
        reason
    }
  )
  .single()

  if (error) {
    console.error(
      "[admin-maintenance] Errore aggiornamento:",
      error
    )

    const mapped =
      mapDatabaseError(error)

    return jsonError(
      mapped.message,
      mapped.status
    )
  }

  return NextResponse.json(
  {
    success: true,

    message:
      "Configurazione della manutenzione aggiornata correttamente.",

    settings:
      normalizeSettings(data),

    updater: {
      userId:
        user.id,

      displayName:
        access.displayName ||
        "Membro Team",

      roleKey:
        access.roleKey ||
        null
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