import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per cantieri | DroneGuard",
  description:
    "Trova operatori drone per monitoraggio cantieri, rilievi e documentazione dei lavori."
}

export default function Page() {
  return (
   <main className="min-h-screen bg-[#0B0F2A] text-white">
  <Navbar />

  <section className="mx-auto max-w-6xl px-6 py-20">
    <h1 className="mb-6 text-4xl font-bold">
      Drone per cantieri
    </h1>

    <p className="mb-8 text-lg leading-8 text-gray-300">
      L'utilizzo dei droni nei cantieri consente di monitorare l'avanzamento
      dei lavori in modo rapido, sicuro ed efficiente. Attraverso immagini e
      video aerei è possibile documentare ogni fase del progetto, verificare lo
      stato delle opere e condividere aggiornamenti con clienti, tecnici e
      imprese. Su DroneGuard puoi trovare piloti drone qualificati per rilievi,
      monitoraggi e documentazione fotografica professionale di cantieri edili
      e infrastrutturali.
    </p>

    <div className="grid gap-6 md:grid-cols-3 mb-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Monitoraggio lavori
        </h2>
        <p className="text-gray-300">
          Controlla l'avanzamento del cantiere con immagini aggiornate e
          confronti periodici delle varie fasi operative.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Documentazione fotografica
        </h2>
        <p className="text-gray-300">
          Foto e video aerei professionali per relazioni tecniche,
          presentazioni aziendali e archiviazione dei lavori.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Sicurezza e controllo
        </h2>
        <p className="text-gray-300">
          Ispeziona aree difficili da raggiungere riducendo tempi, costi e
          rischi per il personale operativo.
        </p>
      </div>
    </div>

    <h2 className="mb-4 text-2xl font-bold">
      Trova un pilota drone per il tuo cantiere
    </h2>

    <p className="mb-8 text-gray-300 leading-8">
      Pubblica gratuitamente la tua richiesta su DroneGuard e ricevi
      candidature da operatori drone interessati. Potrai confrontare le
      proposte ricevute e scegliere il professionista più adatto alle esigenze
      del tuo progetto.
    </p>

    <Link href="/register">
      <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
        Richiedi preventivi
      </button>
    </Link>
  </section>
</main>
  )
}