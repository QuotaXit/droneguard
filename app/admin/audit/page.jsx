import AuditManagementClient from "./AuditManagementClient"

import {
  requireTeamAccess
} from "@/lib/team/access"

export const dynamic = "force-dynamic"

export const metadata = {
  title:
    "Registro attività | DroneGuard Team",
  description:
    "Consulta le operazioni amministrative effettuate dal Team DroneGuard."
}

export default async function AuditPage() {
  await requireTeamAccess(
    "audit.view"
  )

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Controllo amministrativo
        </p>

        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
          Registro attività
        </h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Consulta tutte le operazioni effettuate
          dagli account Team, con operatore,
          motivazione, dati precedenti e dati
          successivi.
        </p>
      </div>

      <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-5">
        <p className="font-semibold text-blue-300">
          Registro di sola lettura
        </p>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          Le registrazioni amministrative non
          possono essere modificate o eliminate
          da questa sezione.
        </p>
      </div>

      <AuditManagementClient />
    </div>
  )
}