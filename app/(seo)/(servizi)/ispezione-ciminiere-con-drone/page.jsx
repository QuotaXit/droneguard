import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione ciminiere con drone | DroneGuard",
  description:
    "Trova operatori drone per il controllo di ciminiere, torri e strutture verticali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
  <Navbar />

  <section className="mx-auto max-w-6xl px-6 py-20">
    <h1 className="mb-6 text-4xl font-bold">
      Ispezione ciminiere con drone
    </h1>

    <p className="mb-8 text-lg leading-8 text-gray-300">
      L'ispezione di ciminiere con drone permette di effettuare controlli
      visivi rapidi, sicuri e dettagliati senza la necessità di ponteggi,
      piattaforme elevatrici o accessi complessi. Grazie a fotografie e video
      ad alta risoluzione è possibile verificare lo stato della struttura,
      individuare crepe, deterioramenti, corrosione e altre anomalie riducendo
      tempi, costi e rischi operativi. Su DroneGuard puoi trovare piloti drone
      qualificati specializzati nelle ispezioni di ciminiere industriali e
      civili.
    </p>

    <div className="grid gap-6 md:grid-cols-3 mb-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Controlli ad alta quota
        </h2>
        <p className="text-gray-300">
          Ispezione di ciminiere e strutture elevate senza interventi invasivi
          e senza interrompere le attività operative.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Foto e video dettagliati
        </h2>
        <p className="text-gray-300">
          Acquisizione di immagini ad alta definizione per documentare lo stato
          della struttura e individuare eventuali criticità.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Maggiore sicurezza
        </h2>
        <p className="text-gray-300">
          Riduzione dei rischi per il personale grazie all'utilizzo di droni
          per controlli in aree difficili da raggiungere.
        </p>
      </div>
    </div>

    <h2 className="mb-4 text-2xl font-bold">
      Trova un pilota drone per l'ispezione di ciminiere
    </h2>

    <p className="mb-8 text-gray-300 leading-8">
      Pubblica gratuitamente la tua richiesta su DroneGuard e ricevi
      candidature da operatori drone interessati. Potrai confrontare le
      offerte ricevute e scegliere il professionista più adatto per
      ispezioni di ciminiere, torri industriali, impianti produttivi e altre
      strutture ad alta quota.
    </p>

    <Link href="/register">
      <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
        Trova un pilota drone
      </button>
    </Link>
  </section>
</main>
  )
}