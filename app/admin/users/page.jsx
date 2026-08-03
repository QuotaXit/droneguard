import { requireTeamAccess } from "@/lib/team/access"
import UsersManagementClient from "./UsersManagementClient"

export const dynamic = "force-dynamic"

export default async function AdminUsersPage() {
  const { permissions } =
    await requireTeamAccess("users.view")

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Centro operativo
        </p>

        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
          Gestione utenti
        </h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Cerca e controlla gli account pilota e cliente
          presenti nella piattaforma.
        </p>
      </section>

      <UsersManagementClient
        canUpdate={permissions.includes("users.update")}
        canSuspend={permissions.includes("users.suspend")}
        canVerify={permissions.includes("users.verify")}
        canDelete={permissions.includes("users.delete")}
        canAdjustCredits={permissions.includes("credits.adjust")}
      />
    </div>
  )
}