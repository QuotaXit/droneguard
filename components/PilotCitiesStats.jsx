"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { MapPin, Users } from "lucide-react"

export default function PilotCitiesStats() {
  const [cities, setCities] = useState([])
  const [totalPilots, setTotalPilots] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPilotCities = async () => {
      setLoading(true)

      const { data, error } = await supabase.rpc(
        "get_pilot_city_counts"
      )

      if (error) {
        console.error(
          "Errore caricamento città piloti:",
          error
        )

        setLoading(false)
        return
      }

      const cityData = data || []

      setCities(cityData)

      const total =
        cityData[0]?.total_pilots || 0

      setTotalPilots(Number(total))

      setLoading(false)
    }

    loadPilotCities()
  }, [])

  if (loading) {
    return (
      <section className="border-b border-white/5 bg-[#0C1230]">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center text-sm text-gray-400 sm:px-6 lg:px-8">
          Caricamento città piloti...
        </div>
      </section>
    )
  }

  if (cities.length === 0) {
    return (
      <section className="border-b border-white/5 bg-[#0C1230]">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center text-sm text-gray-400 sm:px-6 lg:px-8">
          Nessuna città pilota trovata.
        </div>
      </section>
    )
  }

  return (
    <section className="relative border-b border-white/5 bg-[#0C1230]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/[0.07] px-4 py-2 text-sm font-semibold text-green-300">
            <Users size={16} />

            <span>
              {totalPilots}{" "}
              {totalPilots === 1
                ? "pilota registrato"
                : "piloti registrati"}
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Piloti DroneGuard in tutta Italia
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Pubblica una richiesta e rendila visibile ai
            piloti presenti sulla piattaforma. Le città vengono
            aggiornate automaticamente in base ai profili registrati.
          </p>
        </div>

        {/* BOX CITTÀ */}
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#10183B] p-4 shadow-2xl shadow-black/10 sm:p-6">

          {/* TOP BAR */}
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="font-semibold text-white">
                Presenza sul territorio
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Scopri dove sono presenti i piloti registrati
              </p>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                aria-label="Città precedenti"
                onClick={() => {
                  document
                    .getElementById("cities-scroll")
                    ?.scrollBy({
                      left: -320,
                      behavior: "smooth"
                    })
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-gray-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                ‹
              </button>

              <button
                type="button"
                aria-label="Città successive"
                onClick={() => {
                  document
                    .getElementById("cities-scroll")
                    ?.scrollBy({
                      left: 320,
                      behavior: "smooth"
                    })
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-gray-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                ›
              </button>
            </div>
          </div>

          {/* CITTÀ */}
          <div
            id="cities-scroll"
            className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="grid min-w-max grid-flow-col grid-rows-2 gap-3 pb-1">
              {cities.map((item) => (
                <div
                  key={item.city}
                  className="group w-[230px] rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-green-400/20 hover:bg-white/[0.065]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                      <MapPin size={17} />
                    </div>

                    <span className="rounded-full bg-white/[0.05] px-2.5 py-1 text-xs text-gray-400">
                      {Number(item.count)}{" "}
                      {Number(item.count) === 1
                        ? "pilota"
                        : "piloti"}
                    </span>
                  </div>

                  <p className="mt-4 font-semibold text-gray-200 transition group-hover:text-white">
                    {item.city}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {cities.length > 12 && (
            <p className="mt-4 text-center text-xs text-gray-500 md:hidden">
              Scorri lateralmente per vedere altre città →
            </p>
          )}
        </div>

        {/* FOOTER SEZIONE */}
        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-sm text-gray-500">
            Non trovi la tua città?
          </p>

          <p className="text-sm text-gray-400">
            Nuove località vengono aggiunte automaticamente
            quando i piloti completano il proprio profilo.
          </p>
        </div>
      </div>
    </section>
  )
}