import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Bari | Trova Piloti Drone a Bari | DroneGuard",
  description:
    "Cerchi un pilota drone a Bari? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneBariPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone a Bari in pochi passaggi
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard è una piattaforma pensata per aiutare privati e aziende a
    trovare piloti drone per servizi professionali. Se hai bisogno di
    fotografie aeree, riprese video, ispezioni tecniche o attività
    specializzate, puoi pubblicare una richiesta e ricevere candidature da
    professionisti disponibili a Bari e provincia.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I droni vengono oggi impiegati in numerosi settori grazie alla capacità
    di acquisire immagini e dati da prospettive difficilmente raggiungibili
    con strumenti tradizionali.
  </p>

  <p className="leading-8 text-gray-300">
    Attraverso DroneGuard puoi confrontare diversi piloti e scegliere il
    professionista più adatto alle esigenze del tuo progetto.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Chi utilizza i servizi con drone
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I servizi drone vengono richiesti da aziende, professionisti, imprese,
      agenzie immobiliari, strutture turistiche, organizzatori di eventi e
      privati che necessitano di riprese aeree o attività tecniche.
    </p>

    <p className="leading-8 text-gray-300">
      Ogni richiesta può essere personalizzata in base alle caratteristiche
      del lavoro e alla tipologia di servizio desiderata.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi disponibili
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Video e riprese aeree</li>
      <li>✅ Fotografie professionali</li>
      <li>✅ Matrimoni ed eventi</li>
      <li>✅ Immobili e turismo</li>
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Agricoltura e rilievi</li>
    </ul>
  </div>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Descrivi il lavoro
    </h2>

    <p className="text-gray-300">
      Inserisci i dettagli del servizio richiesto e la zona di intervento.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Ricevi candidature
    </h2>

    <p className="text-gray-300">
      I piloti interessati possono candidarsi direttamente al tuo annuncio.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Valuta le proposte
    </h2>

    <p className="text-gray-300">
      Confronta più professionisti e scegli quello più adatto.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Sistema crediti DroneGuard
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I clienti ricevono 10 crediti gratuiti dopo la registrazione. Per
    pubblicare una richiesta vengono utilizzati 5 crediti.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I piloti drone ricevono invece 50 crediti gratuiti e possono candidarsi
    agli annunci spendendo 5 crediti per ogni candidatura inviata.
  </p>

  <p className="leading-8 text-gray-300">
    Dopo aver terminato i crediti gratuiti, è possibile acquistare ulteriori
    pacchetti crediti per continuare a utilizzare la piattaforma.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Piloti drone disponibili a Bari e provincia
  </h2>

  <p className="leading-8 text-gray-300">
    Pubblica gratuitamente la tua richiesta su DroneGuard e ricevi
    candidature da piloti drone disponibili a Bari per riprese aeree,
    fotografie professionali, eventi, ispezioni tecniche, monitoraggio
    cantieri e servizi specializzati.
  </p>
</div>
      </section>
    </main>
  )
}