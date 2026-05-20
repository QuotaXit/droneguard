import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Riprese aeree con drone | DroneGuard",
  description:
    "Trova piloti drone per riprese aeree professionali di eventi, immobili, aziende e produzioni video."
}

export default function RipreseAereeConDronePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Riprese aeree con drone
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Cerca operatori drone per fotografie e video aerei professionali
          in tutta Italia.
        </p>

        <div className="space-y-5 text-gray-300 leading-7 mb-10">
          <p>
            Le riprese aeree valorizzano eventi, immobili, strutture e
            attività commerciali.
          </p>

          <p>
            Ricevi offerte dai piloti interessati direttamente tramite
            DroneGuard.
          </p>
        </div>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
            Pubblica una richiesta
          </button>
        </Link>
      </section>
    </main>
  )
}