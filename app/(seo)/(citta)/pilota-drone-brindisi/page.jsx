import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Brindisi | Trova Piloti Drone a Brindisi | DroneGuard",
  description:
    "Cerchi un pilota drone a Brindisi? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneBrindisiPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone a Brindisi
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard ti permette di trovare piloti drone disponibili a Brindisi e
    provincia per riprese video, fotografie aeree, eventi, immobili,
    ispezioni tecniche e servizi professionali. Attraverso la piattaforma
    puoi pubblicare una richiesta e ricevere candidature da operatori
    interessati al tuo progetto.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Le tecnologie drone vengono oggi utilizzate in numerosi settori grazie
    alla capacità di acquisire immagini e dati da prospettive uniche,
    offrendo nuove opportunità sia per attività promozionali che per
    applicazioni tecniche.
  </p>

  <p className="leading-8 text-gray-300">
    Con una sola richiesta puoi raggiungere più professionisti e confrontare
    diverse candidature prima di scegliere il pilota drone più adatto.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Riprese aeree per turismo, eventi e aziende
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le fotografie e i video realizzati con drone vengono spesso utilizzati
      per valorizzare strutture turistiche, hotel, villaggi, attività
      commerciali, eventi e immobili. Le immagini dall'alto permettono di
      mostrare ambienti e location in modo più coinvolgente.
    </p>

    <p className="leading-8 text-gray-300">
      Anche aziende e professionisti utilizzano sempre più spesso le riprese
      aeree per promuovere servizi, strutture e progetti attraverso contenuti
      visivi di alta qualità.
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
      Registrati gratuitamente
    </h2>

    <p className="text-gray-300">
      Crea un account e accedi a tutti i servizi della piattaforma.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Pubblica il lavoro
    </h2>

    <p className="text-gray-300">
      Descrivi il progetto e indica la zona in cui deve essere svolto.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Ricevi candidature
    </h2>

    <p className="text-gray-300">
      I piloti drone interessati possono candidarsi direttamente.
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
    invece 50 crediti gratuiti e possono candidarsi agli annunci spendendo 5
    crediti per ogni candidatura.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Il sistema è progettato per mettere in contatto clienti e professionisti
    realmente interessati ai lavori pubblicati sulla piattaforma.
  </p>

  <p className="leading-8 text-gray-300">
    Una volta esauriti i crediti gratuiti, è possibile acquistare nuovi
    pacchetti per continuare a utilizzare DroneGuard.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Piloti drone disponibili a Brindisi e provincia
  </h2>

  <p className="leading-8 text-gray-300">
    Pubblica gratuitamente la tua richiesta e ricevi candidature da piloti
    drone disponibili a Brindisi per riprese aeree, eventi, immobili,
    turismo, termografia, monitoraggio cantieri e servizi professionali con
    drone.
  </p>
</div>
      </section>
    </main>
  )
}