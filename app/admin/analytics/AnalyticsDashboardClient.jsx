"use client"

import {
  useEffect,
  useTransition
} from "react"

import {
  useRouter
} from "next/navigation"

import OnlineNowBadge from "@/components/admin/OnlineNowBadge"

function MetricCard({
  label,
  value,
  description,
  className = ""
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#0B1028] p-5 ${className}`}
    >
      <p className="text-sm text-gray-400">
        {label}
      </p>

      <p className="mt-3 text-3xl font-black sm:text-4xl">
        {Number(
          value || 0
        ).toLocaleString(
          "it-IT"
        )}
      </p>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  )
}

function BarChart({
  title,
  description,
  items = []
}) {
  const maxValue =
    Math.max(
      1,
      ...items.map(
        (item) =>
          Number(
            item.value || 0
          )
      )
    )

  return (
    <section className="rounded-2xl border border-white/10 bg-[#0B1028] p-5 sm:p-6">
      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>

      <div className="mt-6 overflow-x-auto">
        <div
          className="flex h-56 min-w-[760px] items-end gap-2 border-b border-white/10 pb-7"
        >
          {items.map(
            (item, index) => {
              const value =
                Number(
                  item.value ||
                    0
                )

              const height =
                value > 0
                  ? Math.max(
                      4,
                      (
                        value /
                        maxValue
                      ) *
                        100
                    )
                  : 2

              return (
                <div
                  key={`${item.label}-${index}`}
                  className="group relative flex min-w-[22px] flex-1 flex-col items-center justify-end"
                  title={`${item.label}: ${value}`}
                >
                  <div
                    className="w-full rounded-t-md bg-green-500/80 transition group-hover:bg-green-400"
                    style={{
                      height:
                        `${height}%`
                    }}
                  />

                  <span className="absolute -bottom-6 whitespace-nowrap text-[10px] text-gray-600">
                    {item.label}
                  </span>
                </div>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}

export default function AnalyticsDashboardClient({
  data,
  hasError
}) {
  const router =
    useRouter()

  const [
    refreshing,
    startTransition
  ] = useTransition()

  useEffect(() => {
    const timer =
      window.setInterval(
        () => {
          startTransition(
            () => {
              router.refresh()
            }
          )
        },
        60_000
      )

    return () => {
      window.clearInterval(
        timer
      )
    }
  }, [
    router
  ])

  const summary =
    data?.summary || {}

  const daily =
    Array.isArray(
      data?.daily
    )
      ? data.daily
      : []

  const monthly =
    Array.isArray(
      data?.monthly
    )
      ? data.monthly
      : []

  const hourly =
    Array.isArray(
      data?.hourly
    )
      ? data.hourly
      : []

  const topPages =
    Array.isArray(
      data?.topPages
    )
      ? data.topPages
      : []

  return (
    <div className="space-y-8">

      <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
            Centro operativo
          </p>

          <h1 className="mt-3 text-3xl font-black sm:text-4xl">
            Statistiche DroneGuard
          </h1>

          <p className="mt-3 max-w-3xl text-gray-400">
            Visite, andamento del traffico e presenza online della piattaforma.
          </p>
        </div>

        <button
          type="button"
          disabled={refreshing}
          onClick={() =>
            startTransition(
              () =>
                router.refresh()
            )
          }
          className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white/10 disabled:opacity-50"
        >
          {refreshing
            ? "Aggiornamento..."
            : "Aggiorna dati"}
        </button>
      </section>


      {hasError && (
        <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5 text-red-200">
          Alcune statistiche non sono disponibili.
        </div>
      )}


      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <OnlineNowBadge
          large
        />

        <MetricCard
          label="Oggi"
          value={
            summary.today
          }
          description="Visualizzazioni dalla mezzanotte."
          className="border-cyan-400/20 bg-cyan-400/[0.06]"
        />

        <MetricCard
          label="Ultime 24 ore"
          value={
            summary.last_24h
          }
          description="Visualizzazioni nelle ultime 24 ore."
          className="border-blue-400/20 bg-blue-400/[0.06]"
        />

        <MetricCard
          label="Questo mese"
          value={
            summary.month
          }
          description="Visualizzazioni del mese corrente."
          className="border-purple-400/20 bg-purple-400/[0.06]"
        />

        <MetricCard
          label="Quest'anno"
          value={
            summary.year
          }
          description="Visualizzazioni dall'inizio dell'anno."
          className="border-yellow-400/20 bg-yellow-400/[0.06]"
        />

        <MetricCard
          label="Totale storico"
          value={
            summary.total
          }
          description="Tutte le visualizzazioni registrate."
        />
      </section>


      <BarChart
        title="Andamento di oggi"
        description="Visualizzazioni suddivise per ora."
        items={hourly}
      />


      <BarChart
        title="Ultimi 30 giorni"
        description="Andamento giornaliero delle visite."
        items={daily}
      />


      <BarChart
        title="Ultimi 12 mesi"
        description="Andamento mensile delle visualizzazioni."
        items={monthly}
      />


      <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1028]">
        <div className="border-b border-white/10 p-5">
          <h2 className="text-xl font-bold">
            Pagine più visitate
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Classifica degli ultimi 30 giorni.
          </p>
        </div>

        {topPages.length === 0 ? (
          <div className="p-6 text-sm text-gray-500">
            Nessuna visita registrata.
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {topPages.map(
              (
                item,
                index
              ) => (
                <div
                  key={
                    item.path
                  }
                  className="flex items-center justify-between gap-4 p-4 sm:px-5"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-xs font-bold text-gray-500">
                      {index + 1}
                    </span>

                    <p className="truncate text-sm font-medium text-gray-300">
                      {item.path}
                    </p>
                  </div>

                  <p className="shrink-0 font-bold text-green-400">
                    {Number(
                      item.value ||
                        0
                    ).toLocaleString(
                      "it-IT"
                    )}
                  </p>
                </div>
              )
            )}
          </div>
        )}
      </section>

      <p className="text-xs leading-6 text-gray-600">
        I dati della pagina vengono aggiornati automaticamente ogni 60 secondi. Il conteggio online è aggiornato tramite connessioni Realtime.
      </p>
    </div>
  )
}