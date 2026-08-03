import { redirect } from "next/navigation"

import {
  getPlatformStatus
} from "@/lib/platform/status"

import MaintenanceStatusClient from "./MaintenanceStatusClient"

export const dynamic = "force-dynamic"
export const revalidate = 0

function formatDate(value) {
  if (!value) {
    return null
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return null
  }

  return new Intl.DateTimeFormat(
    "it-IT",
    {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "Europe/Rome"
    }
  ).format(date)
}

export default async function MaintenancePage() {
  let status

  try {
    status = await getPlatformStatus()
  } catch (error) {
    console.error(
      "[maintenance-page] Stato piattaforma non disponibile:",
      error
    )

    /*
     * In caso di errore del database mostriamo comunque
     * una pagina sicura invece di generare un errore pubblico.
     */
    status = {
      maintenanceActive: true,

      maintenanceTitle:
        "Servizio temporaneamente non disponibile",

      maintenanceMessage:
        "DroneGuard non è raggiungibile in questo momento. Riprova tra qualche minuto.",

      maintenanceStartsAt:
        null,

      maintenanceEndsAt:
        null
    }
  }

  /*
   * Se la manutenzione è terminata, chi apre manualmente
   * /maintenance viene riportato alla homepage.
   */
  if (!status.maintenanceActive) {
    redirect("/")
  }

  const startsAtLabel =
    formatDate(
      status.maintenanceStartsAt
    )

  const endsAtLabel =
    formatDate(
      status.maintenanceEndsAt
    )

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] px-5 py-12 text-white sm:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-160px] top-[-140px] h-[420px] w-[420px] rounded-full bg-green-500/10 blur-[120px]" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[460px] w-[460px] rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-4xl items-center justify-center">
        <section className="w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0B1028]/95 shadow-2xl">
          <div className="border-b border-white/10 px-6 py-5 sm:px-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-green-400">
                  DroneGuard
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Stato della piattaforma
                </p>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-bold text-yellow-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-300" />

                Manutenzione
              </span>
            </div>
          </div>

          <div className="px-6 py-10 sm:px-10 sm:py-14">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-green-400/20 bg-green-400/10 text-4xl">
                🛠️
              </div>

              <h1 className="mt-8 text-3xl font-black tracking-tight sm:text-5xl">
                {status.maintenanceTitle}
              </h1>

              <p className="mx-auto mt-6 max-w-2xl whitespace-pre-wrap text-base leading-8 text-gray-300 sm:text-lg">
                {status.maintenanceMessage}
              </p>

              {(startsAtLabel ||
                endsAtLabel) && (
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                      Inizio
                    </p>

                    <p className="mt-3 font-semibold text-gray-200">
                      {startsAtLabel ||
                        "Già iniziata"}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                      Fine prevista
                    </p>

                    <p className="mt-3 font-semibold text-gray-200">
                      {endsAtLabel ||
                        "Non comunicata"}
                    </p>
                  </div>
                </div>
              )}

              <MaintenanceStatusClient
                maintenanceEndsAt={
                  status.maintenanceEndsAt
                }
              />
            </div>
          </div>

          <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-gray-500 sm:px-10">
            Questa pagina controllerà automaticamente quando DroneGuard tornerà disponibile.
          </div>
        </section>
      </div>
    </main>
  )
}