import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per infrastrutture | DroneGuard",
  description:
    "Trova operatori drone per ponti, viadotti, strade e infrastrutture."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
  <Navbar />

  <section className="mx-auto max-w-6xl px-6 py-20">
    <h1 className="mb-6 text-4xl font-bold">
      Drone per infrastrutture
    </h1>

    <p className="mb-8 text-lg leading-8 text-gray-300">
      I droni rappresentano una soluzione innovativa per l'ispezione e il
      monitoraggio di infrastrutture civili e industriali. Grazie a riprese
      aeree ad alta risoluzione è possibile controllare ponti, viadotti,
      strade, gallerie, ferrovie e altre opere senza interrompere il traffico
      o le attività operative. Su DroneGuard puoi trovare piloti drone
      qualificati per rilievi, documentazione tecnica e controlli visivi su
      infrastrutture di qualsiasi dimensione.
    </p>

    <div className="grid gap-6 md:grid-cols-3 mb-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Ispezione ponti e viadotti
        </h2>
        <p className="text-gray-300">
          Controlli dettagliati di strutture complesse con immagini ad alta
          definizione e accesso alle aree più difficili da raggiungere.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Monitoraggio infrastrutturale
        </h2>
        <p className="text-gray-300">
          Verifica periodica dello stato delle opere per individuare anomalie,
          degrado e possibili criticità nel tempo.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Sicurezza e riduzione dei costi
        </h2>
        <p className="text-gray-300">
          Le ispezioni con drone riducono i rischi per il personale e
          permettono di contenere tempi e costi rispetto ai metodi tradizionali.
        </p>
      </div>
    </div>

    <h2 className="mb-4 text-2xl font-bold">
      Trova un pilota drone per infrastrutture
    </h2>

    <p className="mb-8 text-gray-300 leading-8">
      Pubblica gratuitamente la tua richiesta su DroneGuard e ricevi
      candidature da operatori drone interessati. Potrai confrontare le
      offerte ricevute e scegliere il professionista più adatto per
      ispezioni di ponti, viadotti, gallerie, strade, infrastrutture
      industriali e opere civili.
    </p>

    <Link href="/register">
      <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
        Trova un professionista
      </button>
    </Link>
  </section>
</main>
  )
}