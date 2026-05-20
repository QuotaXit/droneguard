import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezioni con drone | DroneGuard",
  description:
    "Trova piloti drone per ispezioni di tetti, edifici, cantieri, impianti, pannelli fotovoltaici e strutture difficili da raggiungere."
}

export default function IspezioniConDronePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Ispezioni con drone
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Le ispezioni con drone sono utili per controllare tetti, edifici,
          cantieri, impianti, pannelli fotovoltaici e strutture difficili da
          raggiungere senza ponteggi o interventi invasivi.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-3">Settori principali</h2>
            <p className="text-gray-300 leading-7">
              Edilizia, immobili, fotovoltaico, industria, infrastrutture,
              coperture, facciate e monitoraggio cantieri.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-3">Vantaggi</h2>
            <p className="text-gray-300 leading-7">
              Maggiore sicurezza, tempi più rapidi, costi ridotti e immagini
              dettagliate delle aree da controllare.
            </p>
          </div>
        </div>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
            Richiedi un’ispezione con drone
          </button>
        </Link>
      </section>
    </main>
  )
}