import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Arezzo | Trova Piloti Drone a Arezzo | DroneGuard",
  description:
    "Cerchi un pilota drone a Arezzo? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneArezzoPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova il pilota drone giusto ad Arezzo
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Se hai bisogno di un servizio con drone ad Arezzo, DroneGuard ti permette
    di entrare in contatto con piloti drone interessati al tuo progetto.
    Puoi pubblicare una richiesta specificando il tipo di lavoro richiesto,
    la località e qualsiasi dettaglio utile per ricevere candidature più
    precise.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I droni vengono utilizzati oggi in numerosi settori: riprese video,
    fotografie aeree, eventi, immobili, monitoraggio cantieri, agricoltura,
    ispezioni tecniche e attività professionali specializzate.
  </p>

  <p className="leading-8 text-gray-300">
    Attraverso la piattaforma puoi valutare diversi professionisti e scegliere
    quello più adatto alle tue esigenze operative e al tuo budget.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Perché utilizzare un drone
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le tecnologie drone permettono di ottenere immagini e dati da
      prospettive difficilmente raggiungibili con strumenti tradizionali.
      Questo rende il drone uno strumento utile sia per lavori creativi sia
      per applicazioni tecniche.
    </p>

    <p className="leading-8 text-gray-300">
      Video aerei, fotografie professionali, ispezioni e rilievi possono
      essere eseguiti in modo rapido, contribuendo a migliorare la qualità
      delle informazioni raccolte e dei contenuti prodotti.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Settori principali
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Eventi e matrimoni</li>
      <li>✅ Riprese promozionali</li>
      <li>✅ Immobili e strutture turistiche</li>
      <li>✅ Edilizia e cantieri</li>
      <li>✅ Agricoltura di precisione</li>
      <li>✅ Termografia e controlli tecnici</li>
      <li>✅ Fotogrammetria e rilievi</li>
      <li>✅ Ispezioni professionali</li>
    </ul>
  </div>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Pubblica il lavoro
    </h2>

    <p className="text-gray-300">
      Descrivi il servizio richiesto e indica la zona di intervento.
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

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Scegli il professionista
    </h2>

    <p className="text-gray-300">
      Valuta esperienza, servizi offerti e disponibilità prima della scelta.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Come funziona DroneGuard
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I clienti ricevono 10 crediti gratuiti dopo la registrazione e possono
    pubblicare richieste di lavoro utilizzando 5 crediti. I piloti drone
    ricevono invece 50 crediti gratuiti e possono candidarsi agli annunci
    spendendo 5 crediti per ogni candidatura.
  </p>

  <p className="leading-8 text-gray-300">
    Dopo aver utilizzato i crediti gratuiti, è possibile acquistare nuovi
    pacchetti crediti per continuare a utilizzare la piattaforma.
  </p>
</div>
      </section>
    </main>
  )
}