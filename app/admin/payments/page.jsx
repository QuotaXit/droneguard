import {
  requireTeamAccess
} from "@/lib/team/access"

import PaymentsManagementClient from "./PaymentsManagementClient"

export const dynamic = "force-dynamic"

export default async function AdminPaymentsPage() {
  await requireTeamAccess(
    "payments.view"
  )

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Centro operativo
        </p>

        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
          Pagamenti Stripe
        </h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Consulta pagamenti, pacchetti acquistati,
          crediti accreditati ed eventi ricevuti
          tramite Stripe.
        </p>
      </section>

      <PaymentsManagementClient />
    </div>
  )
}