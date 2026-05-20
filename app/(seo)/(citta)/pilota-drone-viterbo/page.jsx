import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Viterbo | Trova Piloti Drone a Roma | DroneGuard",
  description:
    "Cerchi un pilota drone a Viterbo? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneViterboPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Pilota Drone Viterbo
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Cerchi un pilota drone a Viterbo per riprese video, fotografie aeree,
          ispezioni tecniche, matrimoni, eventi o lavori professionali?
          Con DroneGuard puoi pubblicare gratuitamente una richiesta e ricevere
          candidature dai piloti drone interessati.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-3">
              Servizi disponibili
            </h2>

            <p className="text-gray-300 leading-7">
              Riprese video, foto aeree, eventi, matrimoni, edilizia,
              immobili, agricoltura, termografia, monitoraggio cantieri
              e ispezioni professionali con drone.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-3">
              Come funziona
            </h2>

            <p className="text-gray-300 leading-7">
              Pubblica il tuo lavoro, descrivi il servizio richiesto e
              attendi le candidature dei piloti drone disponibili nella
              zona di Viterbo.
            </p>
          </div>
        </div>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
            Trova un pilota drone
          </button>
        </Link>
      </section>
    </main>
  )
}