import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Ancona | Trova Piloti Drone a Ancona | DroneGuard",
  description:
    "Cerchi un pilota drone a Ancona? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneAnconaPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone ad Ancona per il tuo progetto
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I servizi con drone vengono utilizzati sempre più spesso da aziende,
    professionisti e privati che desiderano ottenere fotografie aeree,
    riprese video, documentazione tecnica e contenuti professionali.
    Attraverso DroneGuard puoi pubblicare una richiesta e raggiungere
    piloti drone disponibili ad Ancona e nei comuni della provincia.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Che tu abbia bisogno di un servizio per un evento, un immobile, un
    cantiere o un'attività commerciale, la piattaforma consente di ricevere
    candidature da operatori interessati al lavoro.
  </p>

  <p className="leading-8 text-gray-300">
    Potrai confrontare più professionisti e scegliere il pilota drone che
    ritieni più adatto alle esigenze del progetto.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Servizi drone ad Ancona
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I piloti drone possono operare in numerosi settori, offrendo servizi
      per aziende, agenzie immobiliari, strutture ricettive, studi tecnici,
      imprese edili e organizzatori di eventi.
    </p>

    <p className="leading-8 text-gray-300">
      Le attività possono includere riprese video, fotografie aeree,
      monitoraggio cantieri, termografia, ispezioni tecniche e rilievi
      professionali.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Attività più richieste
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese video con drone</li>
      <li>✅ Fotografie aeree professionali</li>
      <li>✅ Matrimoni ed eventi</li>
      <li>✅ Servizi per immobili</li>
      <li>✅ Ispezioni di edifici e coperture</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Rilievi e fotogrammetria</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Come funziona DroneGuard
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard è una piattaforma che mette in contatto clienti e piloti
    drone. Dopo la registrazione, i clienti ricevono 10 crediti gratuiti e
    possono pubblicare richieste di lavoro utilizzando 5 crediti.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I piloti drone registrati ricevono 50 crediti gratuiti e possono
    candidarsi agli annunci disponibili utilizzando 5 crediti per ogni
    candidatura inviata.
  </p>

  <p className="leading-8 text-gray-300">
    Dopo l'utilizzo dei crediti gratuiti è possibile acquistare ulteriori
    pacchetti crediti per continuare a utilizzare la piattaforma.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-8 text-3xl font-bold">
    Domande frequenti
  </h2>

  <div className="space-y-5">
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Come trovare un pilota drone ad Ancona?
      </h3>
      <p className="text-gray-300">
        Pubblica una richiesta su DroneGuard e attendi le candidature dei
        piloti interessati al lavoro.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Posso ricevere più proposte?
      </h3>
      <p className="text-gray-300">
        Sì, più piloti possono candidarsi allo stesso annuncio permettendoti
        di confrontare diverse soluzioni.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Quali servizi sono disponibili?
      </h3>
      <p className="text-gray-300">
        Riprese video, fotografie aeree, eventi, immobili, termografia,
        monitoraggio cantieri, ispezioni tecniche e rilievi professionali.
      </p>
    </div>
  </div>
</div>
      </section>
    </main>
  )
}