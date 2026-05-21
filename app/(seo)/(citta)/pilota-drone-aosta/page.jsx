import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Aosta | Trova Piloti Drone a Aosta | DroneGuard",
  description:
    "Cerchi un pilota drone a Aosta? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneAostaPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Servizi con drone ad Aosta
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Sempre più aziende, professionisti e privati utilizzano i droni per
    ottenere fotografie aeree, video professionali, ispezioni tecniche e
    documentazione dall'alto. Attraverso DroneGuard puoi trovare piloti
    drone disponibili ad Aosta per numerose tipologie di lavori e servizi.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    La piattaforma permette di pubblicare una richiesta descrivendo il
    progetto e attendere le candidature dei professionisti interessati. In
    questo modo puoi ricevere più proposte e scegliere il pilota drone più
    adatto alle tue esigenze.
  </p>

  <p className="leading-8 text-gray-300">
    I servizi possono riguardare eventi, immobili, attività commerciali,
    cantieri, agricoltura, monitoraggi e numerose altre applicazioni
    professionali.
  </p>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Riprese e fotografie
    </h2>

    <p className="text-gray-300">
      Video e fotografie aeree per immobili, aziende, eventi e promozione.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Ispezioni e controlli
    </h2>

    <p className="text-gray-300">
      Controlli di edifici, coperture, impianti, facciate e infrastrutture.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Servizi professionali
    </h2>

    <p className="text-gray-300">
      Termografia, rilievi, fotogrammetria e monitoraggio cantieri.
    </p>
  </div>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Perché utilizzare DroneGuard
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      DroneGuard semplifica la ricerca di operatori drone mettendo in
      contatto clienti e piloti attraverso un sistema di annunci e
      candidature.
    </p>

    <p className="leading-8 text-gray-300">
      Invece di contattare singolarmente diversi professionisti, puoi
      pubblicare una sola richiesta e ricevere candidature da piloti drone
      interessati al lavoro.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Lavori più richiesti
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Eventi e matrimoni</li>
      <li>✅ Video promozionali</li>
      <li>✅ Immobili e turismo</li>
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Agricoltura di precisione</li>
      <li>✅ Fotogrammetria e rilievi</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Come funziona la piattaforma
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I clienti ricevono 10 crediti gratuiti dopo la registrazione e possono
    pubblicare una richiesta utilizzando 5 crediti. I piloti ricevono invece
    50 crediti gratuiti e possono candidarsi agli annunci spendendo 5
    crediti per candidatura.
  </p>

  <p className="leading-8 text-gray-300">
    Questo sistema permette di mettere in contatto clienti e professionisti
    interessati in modo semplice e trasparente.
  </p>
</div>
      </section>
    </main>
  )
}