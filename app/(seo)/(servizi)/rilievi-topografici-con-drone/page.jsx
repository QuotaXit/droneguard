import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Rilievi topografici con drone | DroneGuard",
  description:
    "Trova operatori drone per rilievi topografici, fotogrammetria e mappature professionali."
}

export default function RilieviTopograficiConDronePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Rilievi topografici con drone
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Pubblica la tua richiesta e ricevi candidature da piloti drone
          specializzati in rilievi topografici e fotogrammetria.
        </p>

        <div className="space-y-5 text-gray-300 leading-7 mb-10">
          <p>
            I rilievi con drone consentono di ottenere dati precisi e
            ortofoto ad alta risoluzione.
          </p>

          <p>
            Ideale per cantieri, terreni, edilizia e progettazione.
          </p>
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