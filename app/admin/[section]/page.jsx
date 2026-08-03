import { notFound } from "next/navigation"
import { requireTeamAccess } from "@/lib/team/access"

export const dynamic = "force-dynamic"

const sections = {
  team: {
    title: "Account Team",
    description: "Invita membri, assegna ruoli e gestisci gli accessi.",
    permission: "team.view"
  },
  users: {
    title: "Gestione utenti",
    description: "Gestisci piloti, clienti, verifiche e sospensioni.",
    permission: "users.view"
  },
  jobs: {
    title: "Gestione lavori",
    description: "Controlla lavori, candidature e assegnazioni.",
    permission: "jobs.view"
  },
  credits: {
    title: "Crediti",
    description: "Controlla saldi, movimenti e rettifiche.",
    permission: "credits.view"
  },
  payments: {
    title: "Pagamenti",
    description: "Controlla acquisti Stripe, webhook e rimborsi.",
    permission: "payments.view"
  },
  announcements: {
    title: "Avvisi generali",
    description: "Crea comunicazioni per utenti e membri del Team.",
    permission: "announcements.view"
  },
  maintenance: {
    title: "Manutenzione",
    description: "Controlla le funzioni operative della piattaforma.",
    permission: "maintenance.view"
  },
  emails: {
    title: "Email e notifiche",
    description: "Controlla invii, errori e comunicazioni.",
    permission: "emails.view"
  },
  certifications: {
    title: "Certificazioni",
    description: "Verifica i documenti e le richieste dei piloti.",
    permission: "certifications.view"
  },
  audit: {
    title: "Registro attività",
    description: "Controlla tutte le operazioni effettuate dal Team.",
    permission: "audit.view"
  },
  settings: {
    title: "Impostazioni",
    description: "Configura il funzionamento operativo di DroneGuard.",
    permission: "settings.view"
  }
}

export default async function AdminSectionPage({ params }) {
  const { section } = await params
  const currentSection = sections[section]

  if (!currentSection) {
    notFound()
  }

  await requireTeamAccess(currentSection.permission)

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Centro operativo
        </p>

        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
          {currentSection.title}
        </h1>

        <p className="mt-3 text-gray-400">
          {currentSection.description}
        </p>
      </div>

      <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
        <p className="font-semibold text-yellow-300">
          Sezione protetta correttamente
        </p>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          La funzione completa di questa sezione verrà collegata
          nei prossimi passaggi.
        </p>
      </div>
    </div>
  )
}