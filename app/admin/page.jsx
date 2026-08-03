import Link from "next/link"

import { requireTeamAccess } from "@/lib/team/access"
import { createAdminSupabaseClient } from "@/lib/supabase/admin"

export const dynamic = "force-dynamic"

async function getExactCount(query) {
  const { count, error } = await query

  if (error) {
    throw error
  }

  return count || 0
}

function StatCard({
  label,
  value,
  description,
  href,
  accent = "default"
}) {
  const accentClasses = {
    default: "border-white/10 bg-white/5",
    green: "border-green-400/20 bg-green-400/10",
    blue: "border-blue-400/20 bg-blue-400/10",
    yellow: "border-yellow-400/20 bg-yellow-400/10",
    purple: "border-purple-400/20 bg-purple-400/10",
    red: "border-red-400/20 bg-red-400/10"
  }

  const content = (
    <div
      className={`h-full rounded-2xl border p-5 transition ${
        accentClasses[accent] || accentClasses.default
      } ${href ? "hover:-translate-y-1 hover:border-white/20" : ""}`}
    >
      <p className="text-sm font-medium text-gray-400">
        {label}
      </p>

      <p className="mt-3 text-3xl font-black sm:text-4xl">
        {value}
      </p>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  )

  if (!href) {
    return content
  }

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  )
}

function formatAuditAction(action) {
  const labels = {
    "team.owner.bootstrap": "Owner iniziale configurato",
    "team.member.create": "Account Team creato",
    "team.member.update": "Membro Team modificato",
    "team.member.deactivate": "Membro Team disattivato",
    "team.member.remove": "Membro rimosso dal Team",
    "team.permissions.restrict": "Permessi Team modificati"
  }

  return labels[action] || action
}

function formatDate(value) {
  if (!value) {
    return "Data non disponibile"
  }

  return new Intl.DateTimeFormat("it-IT", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Europe/Rome"
  }).format(new Date(value))
}

export default async function AdminPage() {
  const { access, permissions } =
    await requireTeamAccess("dashboard.view")

  const adminSupabase = createAdminSupabaseClient()

  let dashboardError = null

  let pilotsCount = 0
  let clientsCount = 0
  let activeTeamCount = 0
  let openJobsCount = 0
  let assignedJobsCount = 0
  let completedJobsCount = 0
  let applicationsCount = 0
  let totalCredits = 0
  let recentAudit = []

  try {
    const [
      pilots,
      clients,
      activeTeam,
      openJobs,
      assignedJobs,
      completedJobs,
      applications,
      creditsResult,
      auditResult
    ] = await Promise.all([
      getExactCount(
        adminSupabase
          .from("users")
          .select("id", {
            count: "exact",
            head: true
          })
          .eq("role", "pilot")
      ),

      getExactCount(
        adminSupabase
          .from("users")
          .select("id", {
            count: "exact",
            head: true
          })
          .in("role", ["client", "cliente"])
      ),

      getExactCount(
        adminSupabase
          .from("team_members")
          .select("user_id", {
            count: "exact",
            head: true
          })
          .eq("active", true)
      ),

      getExactCount(
        adminSupabase
          .from("jobs")
          .select("id", {
            count: "exact",
            head: true
          })
          .eq("status", "open")
      ),

      getExactCount(
        adminSupabase
          .from("jobs")
          .select("id", {
            count: "exact",
            head: true
          })
          .eq("status", "assigned")
      ),

      getExactCount(
        adminSupabase
          .from("jobs")
          .select("id", {
            count: "exact",
            head: true
          })
          .eq("status", "completed")
      ),

      getExactCount(
        adminSupabase
          .from("applications")
          .select("id", {
            count: "exact",
            head: true
          })
      ),

      adminSupabase
        .from("users")
        .select("credits")
        .in("role", [
          "pilot",
          "pilota",
          "client",
          "cliente"
        ]),

      adminSupabase
        .from("admin_audit_log")
        .select(`
          id,
          action,
          target_type,
          target_id,
          reason,
          created_at,
          actor_user_id
        `)
        .order("created_at", {
          ascending: false
        })
        .limit(8)
    ])

    pilotsCount = pilots
    clientsCount = clients
    activeTeamCount = activeTeam
    openJobsCount = openJobs
    assignedJobsCount = assignedJobs
    completedJobsCount = completedJobs
    applicationsCount = applications

    if (creditsResult.error) {
      throw creditsResult.error
    }

    totalCredits = (creditsResult.data || []).reduce(
      (sum, item) =>
        sum + Number(item.credits || 0),
      0
    )

    if (auditResult.error) {
      throw auditResult.error
    }

    recentAudit = auditResult.data || []
  } catch (error) {
    console.error(
      "[admin-dashboard] Errore caricamento statistiche:",
      error
    )

    dashboardError =
      "Alcuni dati della dashboard non sono disponibili."
  }

  const operationalAreas = [
    {
      title: "Gestione utenti",
      description:
        "Piloti, clienti, sospensioni e verifiche.",
      href: "/admin/users",
      permission: "users.view"
    },
    {
      title: "Gestione lavori",
      description:
        "Annunci, candidature e assegnazioni.",
      href: "/admin/jobs",
      permission: "jobs.view"
    },
    {
      title: "Crediti",
      description:
        "Saldi, movimenti e rettifiche amministrative.",
      href: "/admin/credits",
      permission: "credits.view"
    },
    {
      title: "Pagamenti",
      description:
        "Acquisti Stripe, webhook e rimborsi.",
      href: "/admin/payments",
      permission: "payments.view"
    },
    {
      title: "Avvisi generali",
      description:
        "Comunicazioni per piloti, clienti e Team.",
      href: "/admin/announcements",
      permission: "announcements.view"
    },
    {
      title: "Manutenzione",
      description:
        "Blocchi selettivi e stato della piattaforma.",
      href: "/admin/maintenance",
      permission: "maintenance.view"
    }
  ].filter((area) =>
    permissions.includes(area.permission)
  )

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Centro operativo
        </p>

        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
          Panoramica DroneGuard
        </h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Controllo centrale della piattaforma, degli utenti,
          dei lavori e delle operazioni amministrative.
        </p>
      </section>

      {dashboardError && (
        <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5 text-sm text-red-200">
          {dashboardError}
        </div>
      )}

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Piloti registrati"
          value={pilotsCount}
          description="Account pilota presenti nella piattaforma."
          href="/admin/users"
          accent="green"
        />

        <StatCard
          label="Clienti registrati"
          value={clientsCount}
          description="Account cliente presenti nella piattaforma."
          href="/admin/users"
          accent="blue"
        />

        <StatCard
          label="Membri Team attivi"
          value={activeTeamCount}
          description="Account con accesso al Centro Operativo."
          href="/admin/team"
          accent="purple"
        />

        <StatCard
          label="Crediti disponibili"
          value={totalCredits.toLocaleString("it-IT")}
          description="Somma dei saldi di piloti e clienti."
          href="/admin/credits"
          accent="yellow"
        />
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">
            Attività della piattaforma
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Stato attuale di lavori e candidature.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Lavori aperti"
            value={openJobsCount}
            description="Annunci disponibili per le candidature."
            href="/admin/jobs"
            accent="green"
          />

          <StatCard
            label="Lavori assegnati"
            value={assignedJobsCount}
            description="Lavori con un pilota selezionato."
            href="/admin/jobs"
            accent="yellow"
          />

          <StatCard
            label="Lavori completati"
            value={completedJobsCount}
            description="Lavori conclusi nella piattaforma."
            href="/admin/jobs"
            accent="blue"
          />

          <StatCard
            label="Candidature totali"
            value={applicationsCount}
            description="Candidature inviate dai piloti."
            href="/admin/jobs"
            accent="purple"
          />
        </div>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">
            Aree operative
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Accesso rapido agli strumenti amministrativi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {operationalAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="rounded-2xl border border-white/10 bg-[#0B1028] p-6 transition hover:-translate-y-1 hover:border-green-400/30"
            >
              <h3 className="text-lg font-bold">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {area.description}
              </p>

              <p className="mt-5 text-sm font-semibold text-green-400">
                Apri sezione →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold">
              Ultime attività amministrative
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Operazioni recenti registrate nel sistema.
            </p>
          </div>

          {permissions.includes("audit.view") && (
            <Link
              href="/admin/audit"
              className="text-sm font-semibold text-green-400"
            >
              Apri registro completo →
            </Link>
          )}
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1028]">
          {recentAudit.length === 0 ? (
            <div className="p-6 text-sm text-gray-400">
              Nessuna attività amministrativa registrata.
            </div>
          ) : (
            <div className="divide-y divide-white/10">
              {recentAudit.map((entry) => (
                <div
                  key={entry.id}
                  className="flex flex-col justify-between gap-3 p-5 sm:flex-row sm:items-center"
                >
                  <div>
                    <p className="font-semibold">
                      {formatAuditAction(entry.action)}
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      {entry.reason ||
                        `${entry.target_type}: ${
                          entry.target_id ||
                          "nessun identificativo"
                        }`}
                    </p>
                  </div>

                  <p className="shrink-0 text-xs text-gray-500">
                    {formatDate(entry.created_at)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-green-400/20 bg-green-400/10 p-5">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-green-300">
              Accesso amministrativo
            </p>

            <p className="mt-2 text-xl font-bold">
              {access.display_name}
            </p>

            <p className="mt-1 text-sm text-green-200/70">
              Ruolo {access.role_name} · {permissions.length} permessi
            </p>
          </div>

          <div className="rounded-full bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300">
            Centro Operativo attivo
          </div>
        </div>
      </section>
    </div>
  )
}