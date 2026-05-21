import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Carrara | Trova Piloti Drone a Carrara | DroneGuard",
  description:
    "Cerchi un pilota drone a Carrara? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneCarraraPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone a Carrara
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard ti permette di trovare piloti drone disponibili a Carrara per
    riprese video, fotografie aeree, eventi, immobili, ispezioni tecniche e
    servizi professionali. Pubblicando una richiesta puoi ricevere
    candidature da operatori interessati a svolgere il lavoro nella tua zona.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I droni vengono utilizzati in numerosi settori grazie alla possibilità di
    acquisire immagini e dati dall'alto in modo rapido ed efficiente. Questo
    li rende strumenti particolarmente utili sia per attività promozionali
    che per applicazioni tecniche e professionali.
  </p>

  <p className="leading-8 text-gray-300">
    Con una sola richiesta puoi raggiungere più piloti drone e confrontare
    diverse candidature prima di scegliere il professionista più adatto al
    tuo progetto.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Riprese aeree e servizi professionali
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le fotografie e i video realizzati con drone vengono utilizzati per
      eventi, immobili, attività commerciali, strutture ricettive e
      promozione del territorio. Le immagini aeree permettono di valorizzare
      ambienti e strutture da prospettive difficilmente raggiungibili con
      mezzi tradizionali.
    </p>

    <p className="leading-8 text-gray-300">
      I droni trovano inoltre applicazione in edilizia, rilievi tecnici,
      monitoraggio cantieri e ispezioni professionali.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi più richiesti
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese video professionali</li>
      <li>✅ Fotografie aeree</li>
      <li>✅ Eventi e matrimoni</li>
      <li>✅ Immobili e strutture commerciali</li>
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
      Registrazione gratuita
    </h2>

    <p className="text-gray-300">
      Crea un account e accedi ai servizi della piattaforma.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Pubblica il lavoro
    </h2>

    <p className="text-gray-300">
      Inserisci i dettagli del servizio richiesto e la località.
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
    Questo sistema permette di mettere in contatto clienti e professionisti
    realmente interessati ai lavori pubblicati sulla piattaforma.
  </p>

  <p className="leading-8 text-gray-300">
    Dopo aver esaurito i crediti gratuiti, è possibile acquistare nuovi
    pacchetti crediti per continuare a utilizzare DroneGuard.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Piloti drone disponibili a Carrara e provincia
  </h2>

  <p className="leading-8 text-gray-300">
    Pubblica gratuitamente la tua richiesta e ricevi candidature da piloti
    drone disponibili a Carrara per riprese aeree, immobili, eventi,
    monitoraggio cantieri, rilievi, termografia e servizi professionali con
    drone.
  </p>
</div>
      </section>
    </main>
  )
}