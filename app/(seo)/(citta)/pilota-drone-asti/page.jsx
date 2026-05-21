import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Asti | Trova Piloti Drone a Asti | DroneGuard",
  description:
    "Cerchi un pilota drone a Asti? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneAstiPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Servizi drone professionali ad Asti
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I droni vengono utilizzati ogni giorno per realizzare fotografie aeree,
    video professionali, ispezioni tecniche, monitoraggi e rilievi. Se stai
    cercando un pilota drone ad Asti, DroneGuard ti permette di pubblicare
    una richiesta e raggiungere professionisti interessati al tuo progetto.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    La piattaforma è pensata per privati, aziende, studi tecnici, imprese
    edili, agenzie immobiliari e organizzatori di eventi che desiderano
    trovare rapidamente operatori drone disponibili nella propria zona.
  </p>

  <p className="leading-8 text-gray-300">
    Una volta pubblicata la richiesta, i piloti possono candidarsi e
    proporti la propria disponibilità per il lavoro richiesto.
  </p>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Eventi e matrimoni
    </h2>

    <p className="text-gray-300">
      Riprese video e fotografie aeree per eventi pubblici e privati.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Immobili e aziende
    </h2>

    <p className="text-gray-300">
      Contenuti professionali per immobili, attività commerciali e marketing.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Ispezioni e rilievi
    </h2>

    <p className="text-gray-300">
      Monitoraggio, termografia, fotogrammetria e controlli tecnici.
    </p>
  </div>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Per chi è utile DroneGuard
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      DroneGuard è utile per chi necessita di un servizio con drone senza
      dover cercare manualmente diversi professionisti. Pubblicando un solo
      annuncio è possibile raggiungere più piloti interessati.
    </p>

    <p className="leading-8 text-gray-300">
      Questo consente di valutare differenti candidature e scegliere la
      soluzione più adatta alle proprie esigenze.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Applicazioni più richieste
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese aeree professionali</li>
      <li>✅ Video promozionali</li>
      <li>✅ Fotografie immobiliari</li>
      <li>✅ Eventi e cerimonie</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Fotogrammetria e rilievi</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Crediti e funzionamento della piattaforma
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Dopo la registrazione, i clienti ricevono 10 crediti gratuiti e possono
    pubblicare una richiesta utilizzando 5 crediti. I piloti ricevono invece
    50 crediti gratuiti che possono utilizzare per candidarsi agli annunci.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Ogni candidatura richiede 5 crediti. Questo sistema permette di mantenere
    la piattaforma attiva e favorire candidature realmente interessate ai
    lavori pubblicati.
  </p>

  <p className="leading-8 text-gray-300">
    Terminati i crediti gratuiti, è possibile acquistare nuovi pacchetti
    crediti per continuare a utilizzare DroneGuard.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone ad Asti
  </h2>

  <p className="leading-8 text-gray-300">
    Pubblica gratuitamente la tua richiesta su DroneGuard e ricevi
    candidature da piloti drone disponibili ad Asti e provincia per riprese
    aeree, eventi, immobili, ispezioni e servizi professionali.
  </p>
</div>
      </section>
    </main>
  )
}