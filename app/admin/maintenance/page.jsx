import {
  requireTeamAccess
} from "@/lib/team/access"

import MaintenanceManagementClient from "./MaintenanceManagementClient"

export const dynamic = "force-dynamic"

export default async function AdminMaintenancePage() {
  await requireTeamAccess(
    "maintenance.view"
  )

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Centro operativo
        </p>

        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
          Manutenzione e servizi
        </h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Controlla lo stato operativo della piattaforma
          e prepara eventuali blocchi temporanei.
        </p>
      </section>

      <MaintenanceManagementClient />
    </div>
  )
}