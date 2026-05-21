import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Bolzano | Trova Piloti Drone a Bolzano | DroneGuard",
  description:
    "Cerchi un pilota drone a Bolzano? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneBolzanoPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone a Bolzano e provincia
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Se hai bisogno di un pilota drone a Bolzano per riprese video,
    fotografie aeree, eventi, immobili, ispezioni tecniche o lavori
    professionali, DroneGuard ti permette di pubblicare una richiesta e
    ricevere candidature da professionisti interessati al progetto.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Grazie alla piattaforma puoi raggiungere piloti drone disponibili in
    tutta la provincia di Bolzano e confrontare diverse candidature prima di
    scegliere il professionista più adatto alle tue esigenze.
  </p>

  <p className="leading-8 text-gray-300">
    Una sola richiesta consente di entrare in contatto con più operatori,
    semplificando la ricerca di servizi professionali con drone.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Riprese aeree per turismo, eventi e aziende
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le riprese con drone sono particolarmente richieste per strutture
      turistiche, hotel, agriturismi, attività commerciali, eventi e
      promozione del territorio. Le immagini aeree permettono di valorizzare
      ambienti e location attraverso prospettive uniche.
    </p>

    <p className="leading-8 text-gray-300">
      Sempre più aziende utilizzano fotografie e video aerei per migliorare
      la propria comunicazione online e presentare servizi e strutture in
      modo professionale.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi più richiesti
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Video promozionali</li>
      <li>✅ Fotografie aeree</li>
      <li>✅ Hotel e strutture turistiche</li>
      <li>✅ Eventi e matrimoni</li>
      <li>✅ Immobili e terreni</li>
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Termografia con drone</li>
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
      Crea il tuo account e accedi alla piattaforma.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Pubblica la richiesta
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
    invece 50 crediti gratuiti e possono candidarsi agli annunci spendendo 5
    crediti per ogni candidatura.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Questo sistema consente di favorire candidature realmente interessate e
    di mettere in contatto clienti e professionisti in modo semplice e
    diretto.
  </p>

  <p className="leading-8 text-gray-300">
    Una volta terminati i crediti gratuiti, è possibile acquistare nuovi
    pacchetti crediti per continuare a utilizzare la piattaforma.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Piloti drone disponibili a Bolzano
  </h2>

  <p className="leading-8 text-gray-300">
    Pubblica gratuitamente la tua richiesta su DroneGuard e ricevi
    candidature da piloti drone disponibili a Bolzano per riprese aeree,
    eventi, turismo, immobili, ispezioni tecniche, termografia e servizi
    professionali con drone.
  </p>
</div>
      </section>
    </main>
  )
}