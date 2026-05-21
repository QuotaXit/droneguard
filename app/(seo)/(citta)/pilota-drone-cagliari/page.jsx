import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Cagliari | Trova Piloti Drone a Cagliari | DroneGuard",
  description:
    "Cerchi un pilota drone a Cagliari? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneCagliariPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone a Cagliari
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Se hai bisogno di un pilota drone a Cagliari per riprese video,
    fotografie aeree, eventi, immobili, cantieri o servizi professionali,
    DroneGuard ti permette di pubblicare una richiesta e ricevere
    candidature da operatori interessati al tuo progetto.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I droni vengono utilizzati in numerosi settori grazie alla capacità di
    acquisire immagini e dati da prospettive uniche. Attraverso la
    piattaforma puoi trovare professionisti disponibili a lavorare a
    Cagliari e in tutta la provincia.
  </p>

  <p className="leading-8 text-gray-300">
    Una sola richiesta può raggiungere più piloti drone, permettendoti di
    confrontare diverse candidature e scegliere il professionista più adatto
    alle tue esigenze.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Riprese aeree per turismo e attività commerciali
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le fotografie e i video realizzati con drone vengono spesso utilizzati
      per valorizzare hotel, resort, villaggi turistici, stabilimenti
      balneari, attività commerciali e immobili. Le immagini aeree
      consentono di mostrare strutture e paesaggi da prospettive
      particolarmente coinvolgenti.
    </p>

    <p className="leading-8 text-gray-300">
      Anche aziende e professionisti utilizzano i droni per realizzare
      contenuti promozionali, documentare progetti e migliorare la propria
      comunicazione online.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi più richiesti
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Video promozionali</li>
      <li>✅ Fotografie aeree professionali</li>
      <li>✅ Eventi e matrimoni</li>
      <li>✅ Hotel e strutture turistiche</li>
      <li>✅ Immobili e terreni</li>
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Monitoraggio cantieri</li>
    </ul>
  </div>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Pubblica il lavoro
    </h2>

    <p className="text-gray-300">
      Inserisci il tipo di servizio richiesto e la località.
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

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Scegli il professionista
    </h2>

    <p className="text-gray-300">
      Confronta più proposte e scegli quella più adatta al progetto.
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
    Il sistema permette di mettere in contatto clienti e professionisti in
    modo semplice, veloce e trasparente.
  </p>

  <p className="leading-8 text-gray-300">
    Terminati i crediti gratuiti, è possibile acquistare nuovi pacchetti
    crediti per continuare a utilizzare la piattaforma.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Piloti drone disponibili a Cagliari e provincia
  </h2>

  <p className="leading-8 text-gray-300">
    Pubblica gratuitamente la tua richiesta su DroneGuard e ricevi
    candidature da piloti drone disponibili a Cagliari per riprese aeree,
    eventi, immobili, turismo, termografia, monitoraggio cantieri e servizi
    professionali con drone.
  </p>
</div>
      </section>
    </main>
  )
}