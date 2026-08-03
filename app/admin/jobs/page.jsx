import { requireTeamAccess } from "@/lib/team/access"
import JobsManagementClient from "./JobsManagementClient"

export const dynamic = "force-dynamic"

export default async function AdminJobsPage() {
  const { permissions } =
    await requireTeamAccess("jobs.view")

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Centro operativo
        </p>

        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
          Gestione lavori
        </h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Controlla annunci, candidature, assegnazioni,
          conversazioni e completamenti.
        </p>
      </section>

      <JobsManagementClient
        canUpdate={permissions.includes("jobs.update")}
        canClose={permissions.includes("jobs.close")}
        canReopen={permissions.includes("jobs.reopen")}
      />
    </div>
  )
}