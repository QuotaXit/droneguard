import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo riprese drone | DroneGuard",
  description:
    "Richiedi preventivi per riprese aeree e servizi professionali con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-6 text-4xl font-bold">
          Preventivo riprese drone
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-300">
          Cerchi un professionista per realizzare riprese aeree con drone?
          Su DroneGuard puoi pubblicare una richiesta e ricevere offerte da
          piloti drone interessati al tuo progetto.
        </p>

        <div className="mb-10 space-y-5 text-gray-300 leading-7">
          <p>
            Le riprese con drone sono ideali per eventi, immobili, aziende,
            cantieri, turismo, marketing e produzioni video professionali.
          </p>

          <p>
            Confronta più candidature e scegli il pilota più adatto in base
            all'esperienza, alle attrezzature disponibili e al preventivo proposto.
          </p>
        </div>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
            Richiedi un preventivo
          </button>
        </Link>
      </section>
    </main>
  )
}