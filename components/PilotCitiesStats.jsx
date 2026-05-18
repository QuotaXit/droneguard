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

      const { data, error } = await supabase.rpc("get_pilot_city_counts")

      if (error) {
        console.error("Errore caricamento città piloti:", error)
        setLoading(false)
        return
      }

      const cityData = data || []

      setCities(cityData)

      const total = cityData[0]?.total_pilots || 0
      setTotalPilots(Number(total))

      setLoading(false)
    }

    loadPilotCities()
  }, [])

  if (loading) {
    return (
      <section className="bg-[#0B0F2A] px-4 py-10 text-center text-white">
        Caricamento città piloti...
      </section>
    )
  }

  if (cities.length === 0) {
    return (
      <section className="bg-[#0B0F2A] px-4 py-10 text-center text-white">
        Nessuna città pilota trovata.
      </section>
    )
  }

  return (
    <section className="bg-[#0B0F2A] px-4 py-16 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-4 py-2 text-sm text-green-300">
          <Users size={16} />
          {totalPilots} piloti registrati
        </div>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Piloti drone già presenti in Italia
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
          Pubblica una richiesta e raggiungi piloti registrati nella tua zona.
          Le città mostrate sono aggiornate in base ai profili reali presenti sulla piattaforma.
        </p>

        <div className="relative mt-8">
          <button
            type="button"
            onClick={() => {
              document.getElementById("cities-scroll")?.scrollBy({
                left: -320,
                behavior: "smooth"
              })
            }}
            className="hidden md:flex absolute left-0 top-1/2 z-20 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() => {
              document.getElementById("cities-scroll")?.scrollBy({
                left: 320,
                behavior: "smooth"
              })
            }}
            className="hidden md:flex absolute right-0 top-1/2 z-20 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            ›
          </button>

          <div
            id="cities-scroll"
            className="overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="grid min-w-max grid-flow-col grid-rows-3 gap-3 md:px-16">
              {cities.map((item) => (
                <div
                  key={item.city}
                  className="w-64 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10"
                >
                  <div className="mb-2 flex items-center gap-2 text-green-300">
                    <MapPin size={16} />
                    <span className="text-sm font-semibold">{item.city}</span>
                  </div>

                  <p className="text-sm text-gray-300">
                    {Number(item.count)}{" "}
                    {Number(item.count) === 1 ? "pilota" : "piloti"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {cities.length > 12 && (
          <p className="mt-2 text-sm text-gray-400">
            Scorri verso destra per vedere altre città →
          </p>
        )}

        <p className="mt-6 text-sm text-gray-400">
          Altre città si aggiungono automaticamente quando nuovi piloti completano il profilo.
        </p>
      </div>
    </section>
  )
}