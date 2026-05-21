import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Video promozionali con drone | DroneGuard",
  description:
    "Trova piloti drone per video promozionali, campagne marketing, aziende, hotel, immobili, turismo e attività commerciali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Marketing visivo
    </h2>
    <p className="text-gray-300">
      Video aerei professionali per valorizzare aziende, strutture e servizi.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Contenuti professionali
    </h2>
    <p className="text-gray-300">
      Riprese ad alto impatto visivo per siti web, social media e campagne
      pubblicitarie.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Piloti specializzati
    </h2>
    <p className="text-gray-300">
      Ricevi candidature da operatori drone interessati al tuo progetto.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Video promozionali per aziende e attività
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I video promozionali con drone rappresentano uno strumento efficace per
    presentare un'attività, una struttura o un servizio attraverso immagini
    professionali e coinvolgenti. Le riprese aeree consentono di mostrare
    ambienti, edifici e location da prospettive uniche, creando contenuti
    capaci di attirare l'attenzione e trasmettere maggiore valore al pubblico.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Sempre più aziende utilizzano video realizzati con drone per migliorare
    la propria presenza online, promuovere prodotti e servizi, presentare
    sedi operative o valorizzare progetti e iniziative commerciali.
  </p>

  <p className="leading-8 text-gray-300">
    Attraverso DroneGuard puoi pubblicare una richiesta e ricevere
    candidature da piloti drone disponibili a realizzare contenuti video
    professionali nella tua zona.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Dove vengono utilizzati
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I video promozionali con drone vengono utilizzati in numerosi settori,
      tra cui turismo, ospitalità, immobiliare, commercio, edilizia,
      industria, eventi e marketing digitale.
    </p>

    <p className="leading-8 text-gray-300">
      Le immagini aeree permettono di mostrare la posizione, le dimensioni e
      le caratteristiche di una struttura in modo più efficace rispetto alle
      tradizionali riprese da terra.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Settori più richiesti
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Aziende e attività commerciali</li>
      <li>✅ Hotel e strutture ricettive</li>
      <li>✅ Turismo e territorio</li>
      <li>✅ Agenzie immobiliari</li>
      <li>✅ Cantieri e imprese</li>
      <li>✅ Eventi e manifestazioni</li>
      <li>✅ Produzioni video</li>
      <li>✅ Social media marketing</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Perché utilizzare riprese aeree per la promozione
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Le riprese con drone permettono di ottenere immagini dinamiche e
    panoramiche che catturano immediatamente l'attenzione. Questo tipo di
    contenuto viene spesso utilizzato per migliorare la comunicazione visiva
    di un brand e aumentare l'efficacia delle campagne promozionali.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Video professionali e fotografie aeree possono essere pubblicati su siti
    web, piattaforme social, campagne pubblicitarie, presentazioni aziendali
    e materiali promozionali.
  </p>

  <p className="leading-8 text-gray-300">
    Grazie alla prospettiva offerta dal drone è possibile raccontare un
    progetto o un'attività in modo più coinvolgente e professionale.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone per il tuo progetto
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard è una piattaforma che mette in contatto clienti e piloti
    drone. Dopo aver pubblicato una richiesta, i professionisti interessati
    possono candidarsi e proporti la propria disponibilità.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Potrai confrontare diverse candidature e valutare esperienza,
    attrezzatura e tipologia di servizio offerto prima di scegliere il
    professionista più adatto.
  </p>

  <p className="leading-8 text-gray-300">
    In questo modo puoi trovare più facilmente operatori specializzati nella
    realizzazione di video promozionali con drone per aziende, strutture e
    attività commerciali.
  </p>
</div>
      </section>
    </main>
  )
}