import SettingsManagementClient from "./SettingsManagementClient"

import {
  requireTeamAccess
} from "@/lib/team/access"

export const dynamic =
  "force-dynamic"

export const metadata = {
  title:
    "Impostazioni operative | DroneGuard Team",

  description:
    "Gestione delle funzioni operative della piattaforma DroneGuard."
}

export default async function AdminSettingsPage() {
  await requireTeamAccess(
    "settings.view"
  )

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Configurazione piattaforma
        </p>

        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
          Impostazioni operative
        </h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Controlla separatamente la disponibilità
          delle registrazioni, della pubblicazione
          dei lavori, delle candidature e dei
          pagamenti.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-5">
          <p className="font-semibold text-blue-300">
            Controlli indipendenti
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Ogni servizio può essere sospeso senza
            attivare la modalità manutenzione
            dell’intera piattaforma.
          </p>
        </div>

        <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
          <p className="font-semibold text-yellow-300">
            Modifiche registrate
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Le modifiche richiedono una motivazione
            e vengono conservate nel Registro
            attività del Team.
          </p>
        </div>
      </div>

      <SettingsManagementClient />
    </div>
  )
}