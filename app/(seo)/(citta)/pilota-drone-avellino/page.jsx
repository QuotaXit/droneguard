import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Avellino | Trova Piloti Drone a Avellino | DroneGuard",
  description:
    "Cerchi un pilota drone a Avellino? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneAvellinoPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Operatori drone ad Avellino per privati e aziende
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I servizi con drone vengono utilizzati in numerosi settori grazie alla
    capacità di acquisire immagini, video e dati da prospettive difficilmente
    raggiungibili con strumenti tradizionali. Se stai cercando un pilota
    drone ad Avellino, DroneGuard ti permette di pubblicare una richiesta e
    ricevere candidature da professionisti interessati al lavoro.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Attraverso la piattaforma puoi trovare operatori per riprese video,
    fotografie aeree, eventi, immobili, ispezioni tecniche, monitoraggio
    cantieri, agricoltura e molte altre attività professionali.
  </p>

  <p className="leading-8 text-gray-300">
    Una singola richiesta può raggiungere più piloti drone, semplificando la
    ricerca del professionista più adatto al progetto.
  </p>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Riprese aeree
    </h2>

    <p className="text-gray-300">
      Video e fotografie professionali per eventi, immobili e attività
      commerciali.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Controlli tecnici
    </h2>

    <p className="text-gray-300">
      Ispezioni di edifici, coperture, impianti e infrastrutture.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Rilievi professionali
    </h2>

    <p className="text-gray-300">
      Fotogrammetria, termografia, agricoltura di precisione e monitoraggi.
    </p>
  </div>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Vantaggi della piattaforma
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      DroneGuard è stato creato per facilitare l'incontro tra chi cerca un
      servizio con drone e i professionisti disponibili a svolgerlo.
    </p>

    <p className="leading-8 text-gray-300">
      Invece di contattare numerosi operatori separatamente, puoi pubblicare
      il lavoro una sola volta e attendere le candidature dei piloti
      interessati.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi più richiesti
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Matrimoni ed eventi</li>
      <li>✅ Video promozionali</li>
      <li>✅ Fotografie immobiliari</li>
      <li>✅ Riprese aziendali</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Rilievi topografici</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Come funzionano i crediti
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I clienti che si registrano ricevono 10 crediti gratuiti. Per pubblicare
    una richiesta di lavoro vengono utilizzati 5 crediti.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I piloti drone ricevono invece 50 crediti gratuiti e possono candidarsi
    agli annunci spendendo 5 crediti per ogni candidatura inviata.
  </p>

  <p className="leading-8 text-gray-300">
    Terminati i crediti gratuiti, sia clienti che piloti possono acquistare
    ulteriori pacchetti crediti per continuare a utilizzare DroneGuard.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone ad Avellino
  </h2>

  <p className="leading-8 text-gray-300">
    Pubblica la tua richiesta su DroneGuard e ricevi candidature da piloti
    drone disponibili ad Avellino e provincia per riprese aeree, eventi,
    immobili, agricoltura, ispezioni e servizi professionali.
  </p>
</div>
      </section>
    </main>
  )
}