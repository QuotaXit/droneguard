import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Fotografie aeree con drone | DroneGuard",
  description:
    "Servizi professionali di fotografia aerea con drone per immobili, eventi e aziende."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
  <Navbar />

  <section className="mx-auto max-w-6xl px-6 py-20">
    <h1 className="mb-6 text-4xl font-bold">
      Fotografie aeree con drone
    </h1>

    <p className="mb-8 text-lg leading-8 text-gray-300">
      Le fotografie aeree con drone permettono di catturare immagini spettacolari
      da prospettive uniche, valorizzando immobili, strutture ricettive,
      aziende, eventi e cantieri. Grazie alla tecnologia dei droni è possibile
      ottenere fotografie professionali ad alta risoluzione ideali per
      promozione, marketing, documentazione e presentazioni commerciali.
      Su DroneGuard puoi trovare piloti drone qualificati specializzati in
      servizi fotografici aerei in tutta Italia.
    </p>

    <div className="grid gap-6 md:grid-cols-3 mb-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Fotografia immobiliare
        </h2>
        <p className="text-gray-300">
          Immagini aeree professionali per ville, appartamenti,
          complessi residenziali e immobili commerciali.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Eventi e turismo
        </h2>
        <p className="text-gray-300">
          Riprese fotografiche per eventi, strutture turistiche,
          agriturismi, hotel e location esclusive.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Aziende e cantieri
        </h2>
        <p className="text-gray-300">
          Documentazione fotografica dall'alto per aziende,
          impianti industriali, infrastrutture e cantieri.
        </p>
      </div>
    </div>

    <h2 className="mb-4 text-2xl font-bold">
      Trova un fotografo drone professionista
    </h2>

    <p className="mb-8 text-gray-300 leading-8">
      Pubblica gratuitamente la tua richiesta su DroneGuard e ricevi
      candidature da operatori drone interessati. Potrai confrontare le
      offerte ricevute e scegliere il professionista più adatto per
      fotografie aeree, servizi fotografici immobiliari, promozione
      turistica, eventi e attività commerciali.
    </p>

    <Link href="/register">
      <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
        Richiedi un servizio
      </button>
    </Link>
  </section>
</main>
  )
}