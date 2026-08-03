import Link from "next/link"
import { requireTeamAccess } from "@/lib/team/access"

export const dynamic = "force-dynamic"

const navigationItems = [
  {
    href: "/admin",
    label: "Panoramica",
    icon: "◈",
    permission: "dashboard.view"
  },
  {
    href: "/admin/team",
    label: "Account Team",
    icon: "♟",
    permission: "team.view"
  },
  {
    href: "/admin/users",
    label: "Utenti",
    icon: "◉",
    permission: "users.view"
  },
  {
    href: "/admin/jobs",
    label: "Lavori",
    icon: "▣",
    permission: "jobs.view"
  },
  {
    href: "/admin/credits",
    label: "Crediti",
    icon: "◆",
    permission: "credits.view"
  },
  {
    href: "/admin/payments",
    label: "Pagamenti",
    icon: "€",
    permission: "payments.view"
  },
  {
    href: "/admin/announcements",
    label: "Avvisi",
    icon: "!",
    permission: "announcements.view"
  },
  {
    href: "/admin/maintenance",
    label: "Manutenzione",
    icon: "⚙",
    permission: "maintenance.view"
  },
  {
    href: "/admin/emails",
    label: "Email",
    icon: "✉",
    permission: "emails.view"
  },
  {
    href: "/admin/certifications",
    label: "Certificazioni",
    icon: "✓",
    permission: "certifications.view"
  },
  {
    href: "/admin/audit",
    label: "Registro attività",
    icon: "≡",
    permission: "audit.view"
  },
  {
    href: "/admin/settings",
    label: "Impostazioni",
    icon: "●",
    permission: "settings.view"
  }
]

export default async function AdminLayout({ children }) {
  const { user, access, permissions } =
    await requireTeamAccess()

  const visibleNavigation = navigationItems.filter((item) =>
    permissions.includes(item.permission)
  )

  return (
    <div className="min-h-screen bg-[#070A18] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1800px]">
        <aside className="hidden w-72 shrink-0 flex-col border-r border-white/10 bg-[#0B1028] lg:flex">
          <div className="border-b border-white/10 p-6">
            <Link href="/admin" className="block">
              <h1 className="text-2xl font-black tracking-tight">
                Drone
                <span className="text-green-400">
                  Guard
                </span>
              </h1>

              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-500">
                Centro operativo
              </p>
            </Link>
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto p-4">
            {visibleNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-green-400">
                  {item.icon}
                </span>

                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="border-t border-white/10 p-5">
            <p className="truncate text-sm font-semibold">
              {access.display_name || "Membro Team"}
            </p>

            <p className="mt-1 text-xs text-green-400">
              {access.role_name}
            </p>

            <p className="mt-2 truncate text-xs text-gray-500">
              {user.email}
            </p>

            <Link
              href="/"
              className="mt-4 block rounded-lg border border-white/10 px-3 py-2 text-center text-xs text-gray-300 transition hover:bg-white/10"
            >
              Torna al sito
            </Link>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="border-b border-white/10 bg-[#0B1028]/95 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Team DroneGuard
                </p>

                <p className="mt-1 font-semibold">
                  {access.display_name || "Membro Team"}
                </p>
              </div>

              <div className="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-semibold text-green-400">
                {access.role_name}
              </div>
            </div>
          </header>

          <nav className="flex gap-2 overflow-x-auto border-b border-white/10 bg-[#0B1028] p-3 lg:hidden">
            {visibleNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <main className="p-4 sm:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}