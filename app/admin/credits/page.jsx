import { requireTeamAccess } from "@/lib/team/access"
import CreditsManagementClient from "./CreditsManagementClient"

export const dynamic = "force-dynamic"

export default async function AdminCreditsPage() {
  const { permissions } =
    await requireTeamAccess("credits.view")

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Centro operativo
        </p>

        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
          Crediti e movimenti
        </h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Controlla i saldi degli utenti, gli accrediti,
          le spese e le operazioni amministrative.
        </p>
      </section>

      <CreditsManagementClient
        canAdjust={permissions.includes("credits.adjust")}
      />
    </div>
  )
}