import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Catanzaro | Trova Piloti Drone a Catanzaro | DroneGuard",
  description:
    "Cerchi un pilota drone a Catanzaro? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneCatanzaroPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone a Catanzaro
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard ti permette di trovare piloti drone disponibili a Catanzaro
    e provincia per riprese video, fotografie aeree, eventi, immobili,
    ispezioni tecniche, monitoraggio cantieri e servizi professionali.
    Pubblicando una richiesta puoi ricevere candidature da operatori
    interessati a svolgere il lavoro nella tua zona.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I droni vengono oggi utilizzati in numerosi settori grazie alla capacità
    di acquisire immagini e dati da prospettive difficilmente raggiungibili
    con strumenti tradizionali. Questa tecnologia consente di ottenere
    contenuti professionali e informazioni utili in tempi rapidi.
  </p>

  <p className="leading-8 text-gray-300">
    Attraverso DroneGuard puoi confrontare più candidature e scegliere il
    pilota drone più adatto alle caratteristiche del tuo progetto.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Riprese aeree per turismo, eventi e promozione
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le fotografie e i video realizzati con drone vengono spesso utilizzati
      per valorizzare strutture turistiche, immobili, attività commerciali,
      eventi e iniziative promozionali. Le immagini aeree permettono di
      mostrare luoghi e ambienti da prospettive spettacolari.
    </p>

    <p className="leading-8 text-gray-300">
      Anche aziende e professionisti utilizzano sempre più spesso i droni
      per realizzare contenuti destinati a siti web, social media e campagne
      pubblicitarie.
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
      <li>✅ Immobili e strutture turistiche</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Rilievi topografici</li>
      <li>✅ Agricoltura di precisione</li>
    </ul>
  </div>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Registrazione gratuita
    </h2>

    <p className="text-gray-300">
      Crea il tuo account e accedi alla piattaforma.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Pubblica la richiesta
    </h2>

    <p className="text-gray-300">
      Descrivi il servizio richiesto e indica la località del lavoro.
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
    invece 50 crediti gratuiti e possono candidarsi agli annunci spendendo
    5 crediti per ogni candidatura inviata.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Questo sistema permette di favorire candidature realmente interessate ai
    lavori pubblicati, migliorando la qualità delle proposte ricevute.
  </p>

  <p className="leading-8 text-gray-300">
    Una volta terminati i crediti gratuiti, è possibile acquistare ulteriori
    pacchetti crediti per continuare a utilizzare la piattaforma.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Piloti drone disponibili a Catanzaro e provincia
  </h2>

  <p className="leading-8 text-gray-300">
    Pubblica gratuitamente la tua richiesta su DroneGuard e ricevi
    candidature da piloti drone disponibili a Catanzaro per riprese aeree,
    eventi, immobili, agricoltura, termografia, monitoraggio cantieri,
    rilievi e servizi professionali con drone.
  </p>
</div>
      </section>
    </main>
  )
}