import {
  requireTeamAccess
} from "@/lib/team/access"

import AnnouncementsManagementClient from "./AnnouncementsManagementClient"

export const dynamic = "force-dynamic"

export default async function AdminAnnouncementsPage() {
  await requireTeamAccess(
    "announcements.view"
  )

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Centro operativo
        </p>

        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
          Avvisi della piattaforma
        </h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Crea comunicazioni destinate a tutti gli
          utenti, ai piloti oppure ai clienti.
        </p>
      </section>

      <AnnouncementsManagementClient />
    </div>
  )
}