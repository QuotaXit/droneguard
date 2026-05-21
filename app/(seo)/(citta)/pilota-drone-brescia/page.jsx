import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Brescia | Trova Piloti Drone a Brescia | DroneGuard",
  description:
    "Cerchi un pilota drone a Brescia? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneBresciaPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone a Brescia per aziende e privati
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Se stai cercando un pilota drone a Brescia per riprese video,
    fotografie aeree, eventi, immobili o attività professionali,
    DroneGuard ti permette di pubblicare una richiesta e ricevere
    candidature da piloti drone interessati al tuo progetto.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I servizi con drone sono sempre più richiesti da aziende, studi tecnici,
    imprese edili, strutture ricettive e privati che desiderano ottenere
    immagini, video o dati da prospettive difficilmente raggiungibili con
    strumenti tradizionali.
  </p>

  <p className="leading-8 text-gray-300">
    Attraverso un unico annuncio puoi entrare in contatto con più operatori
    drone disponibili a Brescia e provincia, valutando diverse candidature
    prima di effettuare la tua scelta.
  </p>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Riprese professionali
    </h2>

    <p className="text-gray-300">
      Video e fotografie aeree per aziende, eventi, immobili e attività
      promozionali.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Ispezioni tecniche
    </h2>

    <p className="text-gray-300">
      Controlli di edifici, coperture, impianti e infrastrutture.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Rilievi e monitoraggi
    </h2>

    <p className="text-gray-300">
      Fotogrammetria, termografia, monitoraggio cantieri e rilievi tecnici.
    </p>
  </div>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Servizi drone disponibili a Brescia
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I piloti drone possono offrire servizi dedicati a imprese, studi di
      progettazione, agenzie immobiliari, aziende agricole e organizzatori
      di eventi. Ogni progetto può richiedere competenze specifiche e
      attrezzature differenti.
    </p>

    <p className="leading-8 text-gray-300">
      Dalle riprese aeree ai rilievi professionali, il drone rappresenta uno
      strumento versatile in grado di supportare numerose attività operative
      e promozionali.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Attività più richieste
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese video aziendali</li>
      <li>✅ Fotografie aeree professionali</li>
      <li>✅ Eventi e matrimoni</li>
      <li>✅ Immobili e strutture commerciali</li>
      <li>✅ Ispezioni di tetti e facciate</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Rilievi topografici</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Come funziona DroneGuard
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard mette in contatto clienti e piloti drone attraverso un sistema
    semplice basato su richieste di lavoro e candidature. I clienti possono
    descrivere il servizio richiesto e attendere le proposte dei
    professionisti interessati.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Dopo la registrazione, i clienti ricevono 10 crediti gratuiti e possono
    pubblicare una richiesta utilizzando 5 crediti. I piloti drone ricevono
    invece 50 crediti gratuiti e possono candidarsi agli annunci spendendo
    5 crediti per candidatura.
  </p>

  <p className="leading-8 text-gray-300">
    Una volta terminati i crediti gratuiti, è possibile acquistare ulteriori
    pacchetti crediti per continuare a utilizzare la piattaforma.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Perché scegliere DroneGuard
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Invece di cercare singolarmente diversi operatori drone, puoi pubblicare
    una sola richiesta e ricevere candidature da professionisti disponibili
    nella zona di Brescia. Questo permette di risparmiare tempo e confrontare
    più soluzioni in modo semplice.
  </p>

  <p className="leading-8 text-gray-300">
    Pubblica gratuitamente la tua richiesta e trova piloti drone disponibili
    a Brescia per eventi, aziende, immobili, cantieri, agricoltura,
    termografia e servizi professionali.
  </p>
</div>
      </section>
    </main>
  )
}