import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Riprese aeree con drone | DroneGuard",
  description:
    "Trova piloti drone per riprese aeree professionali, video con drone, fotografie dall'alto, eventi, immobili, aziende e cantieri."
}

export default function RipreseAereeConDronePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Video professionali
    </h2>
    <p className="text-gray-300">
      Riprese aeree ad alta qualità per aziende, eventi, immobili e attività
      commerciali.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Fotografie dall'alto
    </h2>
    <p className="text-gray-300">
      Immagini aeree ideali per promozione, documentazione e valorizzazione
      di strutture e location.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Piloti in tutta Italia
    </h2>
    <p className="text-gray-300">
      Pubblica una richiesta e ricevi candidature da operatori drone
      interessati al tuo progetto.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Riprese aeree professionali per ogni esigenza
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Le riprese aeree con drone permettono di ottenere immagini e video
    spettacolari da prospettive difficilmente raggiungibili con strumenti
    tradizionali. Grazie alla tecnologia drone è possibile valorizzare
    edifici, eventi, strutture turistiche, aziende, cantieri e attività
    commerciali attraverso contenuti visivi coinvolgenti e professionali.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Sempre più aziende utilizzano video aerei per presentare prodotti,
    servizi, immobili e progetti. Anche eventi privati, manifestazioni,
    matrimoni e iniziative sportive possono beneficiare di riprese dall'alto
    capaci di raccontare l'intera scena in modo dinamico.
  </p>

  <p className="leading-8 text-gray-300">
    Attraverso DroneGuard puoi pubblicare una richiesta e ricevere
    candidature da piloti drone disponibili a realizzare riprese aeree nella
    tua zona.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Dove vengono utilizzate le riprese con drone
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I video aerei trovano applicazione in numerosi settori. Agenzie
      immobiliari, imprese, hotel, strutture ricettive, organizzatori di
      eventi e professionisti utilizzano quotidianamente contenuti realizzati
      con drone per promozione e comunicazione.
    </p>

    <p className="leading-8 text-gray-300">
      Le immagini possono essere utilizzate per siti web, campagne
      pubblicitarie, social media, presentazioni aziendali e documentazione
      professionale.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Utilizzi più richiesti
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese per immobili</li>
      <li>✅ Video aziendali</li>
      <li>✅ Eventi e matrimoni</li>
      <li>✅ Turismo e strutture ricettive</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Produzioni video professionali</li>
      <li>✅ Contenuti per social media</li>
      <li>✅ Documentazione di eventi sportivi</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Come trovare un operatore drone
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard è una piattaforma che mette in contatto clienti e piloti
    drone. Dopo aver pubblicato la tua richiesta, i professionisti
    interessati possono candidarsi al lavoro indicando disponibilità e
    informazioni utili sul servizio offerto.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Potrai confrontare diverse candidature e valutare il professionista più
    adatto in base al tipo di progetto, all'esperienza e alle attrezzature
    utilizzate.
  </p>

  <p className="leading-8 text-gray-300">
    Questo sistema consente di trovare più facilmente un pilota drone per
    riprese aeree professionali senza dover effettuare lunghe ricerche tra
    diversi operatori.
  </p>
</div>
      </section>
    </main>
  )
}