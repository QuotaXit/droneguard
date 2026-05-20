import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per impianti fotovoltaici | DroneGuard",
  description:
    "Trova professionisti per ispezioni e controlli di impianti fotovoltaici con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
  <Navbar />

  <section className="mx-auto max-w-6xl px-6 py-20">
    <h1 className="mb-6 text-4xl font-bold">
      Drone per impianti fotovoltaici
    </h1>

    <p className="mb-8 text-lg leading-8 text-gray-300">
      I droni rappresentano una soluzione rapida ed efficace per l'ispezione
      di impianti fotovoltaici, pannelli solari e parchi fotovoltaici. Grazie
      a immagini ad alta risoluzione e tecnologie avanzate è possibile
      individuare anomalie, danni, sporco accumulato e problemi di rendimento
      senza interrompere la produzione energetica. Su DroneGuard puoi trovare
      piloti drone qualificati specializzati nel monitoraggio e nelle
      ispezioni di impianti fotovoltaici in tutta Italia.
    </p>

    <div className="grid gap-6 md:grid-cols-3 mb-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Ispezione pannelli solari
        </h2>
        <p className="text-gray-300">
          Controlli rapidi e dettagliati per individuare danni, difetti e
          problematiche che possono ridurre la produzione energetica.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Monitoraggio impianti
        </h2>
        <p className="text-gray-300">
          Verifica periodica dello stato dell'impianto con immagini e report
          utili per manutenzione e gestione.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Controlli in sicurezza
        </h2>
        <p className="text-gray-300">
          Ispezioni effettuate senza la necessità di accedere fisicamente alle
          strutture, riducendo tempi, costi e rischi operativi.
        </p>
      </div>
    </div>

    <h2 className="mb-4 text-2xl font-bold">
      Trova un pilota drone per impianti fotovoltaici
    </h2>

    <p className="mb-8 text-gray-300 leading-8">
      Pubblica gratuitamente la tua richiesta su DroneGuard e ricevi
      candidature da operatori drone interessati. Potrai confrontare le
      offerte ricevute e scegliere il professionista più adatto per
      ispezioni di pannelli solari, monitoraggio di impianti fotovoltaici e
      controlli tecnici su parchi fotovoltaici di qualsiasi dimensione.
    </p>

    <Link href="/register">
      <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
        Richiedi un'ispezione
      </button>
    </Link>
  </section>
</main>
  )
}