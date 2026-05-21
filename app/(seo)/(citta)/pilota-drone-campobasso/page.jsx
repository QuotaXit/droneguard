import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Campobasso | Trova Piloti Drone a Campobasso | DroneGuard",
  description:
    "Cerchi un pilota drone a Campobasso? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneCampobassoPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone a Campobasso
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard ti permette di trovare piloti drone disponibili a Campobasso
    e provincia per riprese video, fotografie aeree, ispezioni tecniche,
    monitoraggio cantieri, agricoltura e servizi professionali. Attraverso
    la piattaforma puoi pubblicare una richiesta e ricevere candidature da
    operatori interessati al tuo progetto.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I droni rappresentano uno strumento sempre più utilizzato per acquisire
    immagini, video e dati in modo rapido ed efficiente. Grazie alle moderne
    tecnologie è possibile ottenere risultati professionali per attività
    promozionali, tecniche e operative.
  </p>

  <p className="leading-8 text-gray-300">
    Con una sola richiesta puoi raggiungere più piloti drone e confrontare
    diverse candidature prima di scegliere il professionista più adatto alle
    tue esigenze.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Applicazioni professionali dei droni
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I servizi con drone vengono utilizzati in numerosi settori, tra cui
      edilizia, agricoltura, immobiliare, eventi, monitoraggio del territorio
      e controlli tecnici. Le immagini aeree consentono di ottenere una
      visione completa delle aree interessate.
    </p>

    <p className="leading-8 text-gray-300">
      Sempre più aziende e professionisti scelgono il drone per migliorare
      documentazione, controlli e comunicazione visiva.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi più richiesti
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese video aeree</li>
      <li>✅ Fotografie professionali</li>
      <li>✅ Eventi e cerimonie</li>
      <li>✅ Immobili e terreni</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Agricoltura di precisione</li>
      <li>✅ Termografia con drone</li>
    </ul>
  </div>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Registrati
    </h2>

    <p className="text-gray-300">
      Crea gratuitamente il tuo account su DroneGuard.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Pubblica il lavoro
    </h2>

    <p className="text-gray-300">
      Descrivi il servizio richiesto e indica la località.
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
    Come funziona DroneGuard
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I clienti ricevono 10 crediti gratuiti dopo la registrazione e possono
    pubblicare una richiesta utilizzando 5 crediti. I piloti drone ricevono
    invece 50 crediti gratuiti e possono candidarsi agli annunci spendendo
    5 crediti per ogni candidatura inviata.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Questo sistema consente di mettere in contatto clienti e professionisti
    realmente interessati ai lavori pubblicati sulla piattaforma.
  </p>

  <p className="leading-8 text-gray-300">
    Terminati i crediti gratuiti, è possibile acquistare nuovi pacchetti
    crediti per continuare a utilizzare DroneGuard.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Piloti drone disponibili a Campobasso e provincia
  </h2>

  <p className="leading-8 text-gray-300">
    Pubblica gratuitamente la tua richiesta e ricevi candidature da piloti
    drone disponibili a Campobasso per riprese aeree, agricoltura,
    monitoraggio cantieri, immobili, eventi, termografia e servizi
    professionali con drone.
  </p>
</div>
      </section>
    </main>
  )
}