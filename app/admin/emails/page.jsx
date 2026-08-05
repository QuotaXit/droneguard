import EmailsManagementClient from "./EmailsManagementClient"

import {
  requireTeamAccess
} from "@/lib/team/access"

export const dynamic = "force-dynamic"

export const metadata = {
  title:
    "Email e notifiche | DroneGuard Team",

  description:
    "Consulta gli invii email, gli errori e i reinvii amministrativi di DroneGuard."
}

export default async function EmailsPage() {
  const { permissions } =
  await requireTeamAccess(
    "emails.view"
  )

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Comunicazioni operative
        </p>

        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
          Email e notifiche
        </h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Controlla gli invii registrati,
          gli errori restituiti dal provider,
          i tentativi effettuati e gli eventuali
          reinvii amministrativi.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-5">
          <p className="font-semibold text-blue-300">
            Registro centralizzato
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Gli invii gestiti dal nuovo servizio
            vengono registrati prima della chiamata
            a Resend, con esito, tentativi ed
            eventuali errori.
          </p>
        </div>

        <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
          <p className="font-semibold text-yellow-300">
            Reinvii controllati
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Soltanto gli operatori con il permesso
            emails.retry possono reinviare un’email
            fallita. Ogni reinvio viene registrato
            nel Registro attività.
          </p>
        </div>
        {permissions.includes(
  "emails.send"
) && (
  <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-5">
    <p className="font-semibold text-blue-300">
      Nuove comunicazioni
    </p>

    <p className="mt-2 text-sm leading-6 text-gray-400">
      Gli operatori autorizzati possono comporre
      una nuova email verso un singolo destinatario.
      Ogni invio viene tracciato e registrato
      nel Registro attività.
    </p>
  </div>
)}
      </div>

      <EmailsManagementClient
  canSend={
    permissions.includes(
      "emails.send"
    )
  }
/>
    </div>
  )
}