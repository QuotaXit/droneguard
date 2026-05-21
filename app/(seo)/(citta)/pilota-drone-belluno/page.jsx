import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Belluno | Trova Piloti Drone a Belluno | DroneGuard",
  description:
    "Cerchi un pilota drone a Belluno? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneBellunoPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova professionisti drone a Belluno
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I droni vengono utilizzati per realizzare riprese aeree, fotografie
    professionali, ispezioni tecniche e rilievi in numerosi settori. Se hai
    bisogno di un pilota drone a Belluno, DroneGuard ti permette di
    pubblicare una richiesta e ricevere candidature da professionisti
    interessati a svolgere il lavoro.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    La piattaforma è utilizzata da privati, aziende, agenzie immobiliari,
    studi tecnici, imprese edili e organizzatori di eventi che cercano un
    operatore drone per attività professionali e servizi specializzati.
  </p>

  <p className="leading-8 text-gray-300">
    Attraverso un unico annuncio puoi raggiungere più piloti drone
    disponibili nella zona di Belluno e valutare le diverse candidature.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Quando può servire un drone
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le riprese aeree permettono di ottenere immagini spettacolari per
      eventi, immobili e attività commerciali. Allo stesso tempo, il drone
      viene utilizzato anche per controlli tecnici, monitoraggi e raccolta di
      dati professionali.
    </p>

    <p className="leading-8 text-gray-300">
      Grazie alla versatilità di questa tecnologia è possibile affrontare
      numerose esigenze operative in modo rapido ed efficace.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Attività più richieste
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese video professionali</li>
      <li>✅ Fotografie aeree</li>
      <li>✅ Matrimoni ed eventi</li>
      <li>✅ Immobili e strutture turistiche</li>
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Rilievi e fotogrammetria</li>
    </ul>
  </div>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Registrazione gratuita
    </h2>

    <p className="text-gray-300">
      Crea un account e pubblica la tua richiesta in pochi minuti.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Ricevi candidature
    </h2>

    <p className="text-gray-300">
      I piloti interessati possono candidarsi direttamente al lavoro.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Scegli il pilota
    </h2>

    <p className="text-gray-300">
      Valuta le proposte ricevute e scegli il professionista preferito.
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
    crediti per candidatura.
  </p>

  <p className="leading-8 text-gray-300">
    Dopo aver utilizzato i crediti gratuiti è possibile acquistare nuovi
    pacchetti per continuare a utilizzare la piattaforma e ricevere nuove
    opportunità di lavoro.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Piloti drone disponibili a Belluno e provincia
  </h2>

  <p className="leading-8 text-gray-300">
    Pubblica la tua richiesta su DroneGuard e ricevi candidature da piloti
    drone disponibili a Belluno per eventi, immobili, ispezioni, agricoltura,
    monitoraggio cantieri, termografia e servizi professionali.
  </p>
</div>
      </section>
    </main>
  )
}