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

  const visibleCities = cities.slice(0, 12)
  const scrollCities = cities.slice(12)

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

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {visibleCities.map((item) => (
            <div
              key={item.city}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10"
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

        {scrollCities.length > 0 && (
          <div className="mt-6">
            <p className="mb-3 text-sm text-gray-400">
              Scorri per vedere altre città →
            </p>

            <div className="overflow-x-auto pb-3">
              <div className="flex min-w-max gap-3">
                {scrollCities.map((item) => (
                  <div
                    key={item.city}
                    className="w-64 shrink-0 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10"
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
        )}

        <p className="mt-6 text-sm text-gray-400">
          Altre città si aggiungono automaticamente quando nuovi piloti completano il profilo.
        </p>
      </div>
    </section>
  )
}