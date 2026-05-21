import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Caserta | Trova Piloti Drone a Caserta | DroneGuard",
  description:
    "Cerchi un pilota drone a Caserta? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneCasertaPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone a Caserta
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Se hai bisogno di un pilota drone a Caserta per riprese video,
    fotografie aeree, eventi, immobili, ispezioni tecniche o lavori
    professionali, DroneGuard ti permette di pubblicare una richiesta e
    ricevere candidature da operatori interessati al tuo progetto.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I droni vengono oggi utilizzati in numerosi settori grazie alla loro
    capacità di acquisire immagini e dati da prospettive uniche. Attraverso
    la piattaforma puoi entrare in contatto con professionisti disponibili
    a Caserta e in tutta la provincia.
  </p>

  <p className="leading-8 text-gray-300">
    Una sola richiesta consente di raggiungere più piloti drone e confrontare
    diverse candidature prima di scegliere il professionista più adatto alle
    tue esigenze.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Riprese aeree per eventi, immobili e aziende
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le fotografie e i video realizzati con drone sono sempre più richiesti
      per matrimoni, eventi, strutture ricettive, immobili, attività
      commerciali e contenuti promozionali. Le riprese dall'alto permettono
      di valorizzare ambienti e location in modo professionale.
    </p>

    <p className="leading-8 text-gray-300">
      Anche aziende e professionisti utilizzano i droni per documentare
      progetti, realizzare contenuti marketing e migliorare la comunicazione
      visiva dei propri servizi.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi più richiesti
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese video professionali</li>
      <li>✅ Fotografie aeree</li>
      <li>✅ Matrimoni ed eventi</li>
      <li>✅ Immobili e strutture ricettive</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Rilievi topografici</li>
    </ul>
  </div>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Registrati gratuitamente
    </h2>

    <p className="text-gray-300">
      Crea il tuo account e accedi ai servizi di DroneGuard.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Pubblica la richiesta
    </h2>

    <p className="text-gray-300">
      Descrivi il lavoro richiesto e specifica la località.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Ricevi candidature
    </h2>

    <p className="text-gray-300">
      I piloti interessati possono candidarsi direttamente all'annuncio.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Come funziona DroneGuard
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I clienti ricevono 10 crediti gratuiti dopo la registrazione e possono
    pubblicare una richiesta utilizzando 5 crediti. I piloti drone ricevono
    invece 50 crediti gratuiti e possono candidarsi agli annunci spendendo
    5 crediti per ogni candidatura inviata.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Questo sistema aiuta a mettere in contatto clienti e professionisti
    realmente interessati ai lavori pubblicati sulla piattaforma.
  </p>

  <p className="leading-8 text-gray-300">
    Terminati i crediti gratuiti, è possibile acquistare nuovi pacchetti
    crediti per continuare a utilizzare DroneGuard.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Piloti drone disponibili a Caserta e provincia
  </h2>

  <p className="leading-8 text-gray-300">
    Pubblica gratuitamente la tua richiesta e ricevi candidature da piloti
    drone disponibili a Caserta per riprese aeree, eventi, immobili,
    monitoraggio cantieri, termografia, rilievi e servizi professionali con
    drone.
  </p>
</div>
      </section>
    </main>
  )
}