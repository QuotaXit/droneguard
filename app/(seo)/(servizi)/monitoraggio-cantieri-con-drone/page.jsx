import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Monitoraggio cantieri con drone | DroneGuard",
  description:
    "Trova piloti drone per il monitoraggio di cantieri, avanzamento lavori e documentazione fotografica."
}

export default function MonitoraggioCantieriConDronePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Monitoraggio cantieri con drone
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Trova piloti drone per monitorare lo stato di avanzamento dei
          lavori e documentare il cantiere.
        </p>

        <div className="space-y-5 text-gray-300 leading-7 mb-10">
          <p>
            Le immagini aeree consentono controlli rapidi e una visione
            completa dell'area interessata.
          </p>

          <p>
            Ideale per imprese, studi tecnici e direzioni lavori.
          </p>
        </div>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
            Trova un professionista
          </button>
        </Link>
      </section>
    </main>
  )
}