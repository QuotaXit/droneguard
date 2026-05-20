import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Fotogrammetria con drone | DroneGuard",
  description:
    "Trova piloti drone per fotogrammetria, modellazione 3D, ortofoto e rilievi professionali."
}

export default function FotogrammetriaConDronePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Fotogrammetria con drone
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Ricevi offerte da operatori drone specializzati in fotogrammetria
          e rilievi ad alta precisione.
        </p>

        <div className="space-y-5 text-gray-300 leading-7 mb-10">
          <p>
            La fotogrammetria con drone permette di generare mappe,
            modelli 3D e ortofoto dettagliate.
          </p>

          <p>
            Soluzione ideale per edilizia, topografia e progettazione.
          </p>
        </div>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
            Richiedi preventivi
          </button>
        </Link>
      </section>
    </main>
  )
}