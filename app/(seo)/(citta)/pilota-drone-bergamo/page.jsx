import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Bergamo | Trova Piloti Drone a Bergamo | DroneGuard",
  description:
    "Cerchi un pilota drone a Bergamo? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneBergamoPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Piloti drone a Bergamo per aziende e privati
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Se stai cercando un pilota drone a Bergamo, DroneGuard ti permette di
    pubblicare una richiesta e ricevere candidature da professionisti
    interessati a svolgere il lavoro. I droni vengono utilizzati per riprese
    video, fotografie aeree, monitoraggi, ispezioni tecniche e numerose
    attività professionali.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Grazie alla piattaforma puoi trovare operatori disponibili per lavori in
    città, provincia e aree limitrofe, senza dover effettuare lunghe ricerche
    tra diversi professionisti.
  </p>

  <p className="leading-8 text-gray-300">
    Una sola richiesta può raggiungere più piloti drone, consentendoti di
    valutare differenti candidature e scegliere la soluzione più adatta.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Servizi professionali con drone
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I piloti drone possono supportare aziende, studi tecnici, imprese
      edili, agenzie immobiliari, strutture turistiche e organizzatori di
      eventi attraverso servizi professionali personalizzati.
    </p>

    <p className="leading-8 text-gray-300">
      Le attività possono comprendere riprese aeree, documentazione tecnica,
      ispezioni di edifici, monitoraggio cantieri e raccolta di dati utili
      per diversi settori professionali.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi più richiesti a Bergamo
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese video professionali</li>
      <li>✅ Fotografie aeree</li>
      <li>✅ Eventi e matrimoni</li>
      <li>✅ Immobili e strutture commerciali</li>
      <li>✅ Ispezioni di coperture e facciate</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Rilievi topografici e fotogrammetria</li>
    </ul>
  </div>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Registrati
    </h2>

    <p className="text-gray-300">
      Crea gratuitamente il tuo account DroneGuard.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Pubblica il lavoro
    </h2>

    <p className="text-gray-300">
      Inserisci i dettagli del servizio richiesto.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Ricevi candidature
    </h2>

    <p className="text-gray-300">
      I piloti interessati possono candidarsi al tuo annuncio.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Crediti e funzionamento della piattaforma
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I clienti ricevono 10 crediti gratuiti dopo la registrazione e possono
    pubblicare una richiesta utilizzando 5 crediti. I piloti drone ricevono
    invece 50 crediti gratuiti che possono utilizzare per candidarsi agli
    annunci disponibili.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Ogni candidatura richiede 5 crediti. Questo sistema favorisce
    candidature realmente interessate e aiuta a mantenere elevata la qualità
    delle richieste pubblicate.
  </p>

  <p className="leading-8 text-gray-300">
    Una volta terminati i crediti gratuiti è possibile acquistare ulteriori
    pacchetti per continuare a utilizzare DroneGuard.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone a Bergamo
  </h2>

  <p className="leading-8 text-gray-300">
    Pubblica gratuitamente la tua richiesta e ricevi candidature da piloti
    drone disponibili a Bergamo per eventi, immobili, aziende, edilizia,
    termografia, monitoraggio cantieri e servizi professionali con drone.
  </p>
</div>
      </section>
    </main>
  )
}