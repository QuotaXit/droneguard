import "server-only"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

const operationFields = Object.freeze({
  registrations:
    "registrationsEnabled",

  job_creation:
    "jobCreationEnabled",

  applications:
    "applicationsEnabled",

  payments:
    "paymentsEnabled"
})

function parseDateTime(value) {
  if (!value) {
    return null
  }

  const timestamp =
    new Date(value).getTime()

  return Number.isFinite(timestamp)
    ? timestamp
    : null
}

function normalizePlatformStatus(row) {
  const now = Date.now()

  const startsAt =
    parseDateTime(
      row.maintenance_starts_at
    )

  const endsAt =
    parseDateTime(
      row.maintenance_ends_at
    )

  const maintenanceEnabled =
    Boolean(
      row.maintenance_enabled
    )

  const maintenanceActive =
    maintenanceEnabled &&
    (
      startsAt === null ||
      startsAt <= now
    ) &&
    (
      endsAt === null ||
      endsAt > now
    )

  return {
    maintenanceEnabled,
    maintenanceActive,

    maintenanceTitle:
      row.maintenance_title ||
      "Manutenzione programmata",

    maintenanceMessage:
      row.maintenance_message ||
      "DroneGuard è temporaneamente in manutenzione.",

    maintenanceStartsAt:
      row.maintenance_starts_at ||
      null,

    maintenanceEndsAt:
      row.maintenance_ends_at ||
      null,

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

    updatedAt:
      row.updated_at || null
  }
}

export async function getPlatformStatus() {
  const adminSupabase =
    createAdminSupabaseClient()

  const {
    data,
    error
  } = await adminSupabase
    .from("platform_settings")
    .select(`
      maintenance_enabled,
      maintenance_title,
      maintenance_message,
      maintenance_starts_at,
      maintenance_ends_at,
      registrations_enabled,
      job_creation_enabled,
      applications_enabled,
      payments_enabled,
      updated_at
    `)
    .eq("id", 1)
    .maybeSingle()

  if (error) {
    console.error(
      "[platform-status] Errore lettura:",
      error
    )

    throw new Error(
      "PLATFORM_STATUS_UNAVAILABLE"
    )
  }

  if (!data) {
    throw new Error(
      "PLATFORM_SETTINGS_NOT_FOUND"
    )
  }

  return normalizePlatformStatus(data)
}

export async function getOperationAvailability(
  operation
) {
  const field =
    operationFields[operation]

  if (!field) {
    throw new Error(
      "PLATFORM_OPERATION_NOT_VALID"
    )
  }

  const status =
    await getPlatformStatus()

  if (status.maintenanceActive) {
    return {
      allowed: false,

      code:
        "PLATFORM_MAINTENANCE",

      message:
        status.maintenanceMessage,

      status
    }
  }

  if (!status[field]) {
    const messages = {
      registrations:
        "Le registrazioni sono temporaneamente sospese.",

      job_creation:
        "La pubblicazione di nuovi lavori è temporaneamente sospesa.",

      applications:
        "Le candidature sono temporaneamente sospese.",

      payments:
        "Gli acquisti di crediti sono temporaneamente sospesi."
    }

    return {
      allowed: false,

      code:
        `PLATFORM_${operation.toUpperCase()}_DISABLED`,

      message:
        messages[operation],

      status
    }
  }

  return {
    allowed: true,
    code: null,
    message: null,
    status
  }
}