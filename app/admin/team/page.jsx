import { requireTeamAccess } from "@/lib/team/access"
import TeamMembersClient from "./TeamMembersClient"

export const dynamic = "force-dynamic"

export default async function TeamPage() {
  const { permissions } =
    await requireTeamAccess("team.view")

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Centro operativo
        </p>

        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
          Account Team
        </h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Crea gli account del Team DroneGuard, assegna
          i ruoli e controlla gli accessi amministrativi.
        </p>
      </section>

      <TeamMembersClient
  canInvite={
    permissions.includes(
      "team.invite"
    )
  }
  canUpdate={
    permissions.includes(
      "team.update"
    )
  }
  canManageOwner={
    permissions.includes(
      "team.owner.manage"
    )
  }

  canDeactivate={
  permissions.includes(
    "team.deactivate"
  )
}

canSendEmail={
  permissions.includes(
    "emails.send"
  )
}

/>
    </div>
  )
}