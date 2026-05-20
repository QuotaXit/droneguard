import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per edilizia | DroneGuard",
  description:
    "Trova piloti drone per edilizia, cantieri, monitoraggi e rilievi professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
  <Navbar />

  <section className="mx-auto max-w-6xl px-6 py-20">
    <h1 className="mb-6 text-4xl font-bold">
      Drone per edilizia
    </h1>

    <p className="mb-8 text-lg leading-8 text-gray-300">
      I droni stanno rivoluzionando il settore edilizio, permettendo di
      effettuare rilievi, ispezioni e monitoraggi in modo rapido, sicuro ed
      economico. Attraverso DroneGuard puoi trovare operatori drone qualificati
      per cantieri, imprese edili, studi tecnici e professionisti che necessitano
      di immagini aeree, documentazione fotografica o controlli dettagliati di
      strutture e coperture. Pubblica la tua richiesta e ricevi proposte da
      piloti drone disponibili nella tua zona.
    </p>

    <div className="grid gap-6 md:grid-cols-3 mb-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Rilievi e monitoraggi
        </h2>
        <p className="text-gray-300">
          Documentazione fotografica e video dall'alto per seguire
          l'avanzamento dei lavori e monitorare i cantieri nel tempo.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Ispezioni strutturali
        </h2>
        <p className="text-gray-300">
          Controllo di tetti, facciate, coperture industriali,
          ponteggi e altre strutture difficili da raggiungere.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Foto e video professionali
        </h2>
        <p className="text-gray-300">
          Riprese aeree ad alta qualità per presentazioni aziendali,
          documentazione tecnica e promozione immobiliare.
        </p>
      </div>
    </div>

    <h2 className="mb-4 text-2xl font-bold">
      Trova un pilota drone per edilizia
    </h2>

    <p className="mb-8 text-gray-300 leading-8">
      Su DroneGuard puoi pubblicare gratuitamente la tua richiesta e ricevere
      candidature da operatori drone interessati al lavoro. Che tu abbia bisogno
      di un rilievo di cantiere, di un'ispezione tecnica o di fotografie aeree,
      la piattaforma ti permette di entrare in contatto con professionisti del
      settore in modo semplice e veloce.
    </p>

    <Link href="/register">
      <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
        Trova un professionista
      </button>
    </Link>
  </section>
    </main>
  )
}