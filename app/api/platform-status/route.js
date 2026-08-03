import { NextResponse } from "next/server"

import {
  getPlatformStatus
} from "@/lib/platform/status"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const status =
      await getPlatformStatus()

    return NextResponse.json(
      {
        success: true,

        status: {
          maintenanceActive:
            status.maintenanceActive,

          maintenanceTitle:
            status.maintenanceTitle,

          maintenanceMessage:
            status.maintenanceMessage,

          maintenanceStartsAt:
            status.maintenanceStartsAt,

          maintenanceEndsAt:
            status.maintenanceEndsAt,

          registrationsEnabled:
            status.registrationsEnabled,

          jobCreationEnabled:
            status.jobCreationEnabled,

          applicationsEnabled:
            status.applicationsEnabled,

          paymentsEnabled:
            status.paymentsEnabled,

          updatedAt:
            status.updatedAt
        }
      },
      {
        headers: {
          "Cache-Control":
            "no-store, max-age=0"
        }
      }
    )
  } catch (error) {
    console.error(
      "[platform-status-api] Errore:",
      error
    )

    return NextResponse.json(
      {
        success: false,
        error:
          "Stato della piattaforma temporaneamente non disponibile."
      },
      {
        status: 503,
        headers: {
          "Cache-Control":
            "no-store, max-age=0"
        }
      }
    )
  }
}