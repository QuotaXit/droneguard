import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Riprese drone eventi | DroneGuard",
  description:
    "Trova piloti drone per eventi, matrimoni, concerti, manifestazioni sportive e riprese aeree professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per eventi e manifestazioni
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Riprese drone eventi
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    Le riprese drone per eventi consentono di catturare immagini e video
    spettacolari da prospettive uniche. Grazie alle riprese aeree è possibile
    valorizzare ogni momento importante, documentare l'intera manifestazione e
    creare contenuti professionali da utilizzare per promozione, ricordi o
    comunicazione aziendale. Attraverso DroneGuard puoi pubblicare una
    richiesta e ricevere candidature da piloti drone interessati a realizzare
    riprese aeree per il tuo evento.
  </p>

  <div className="mt-8">
    <Link href="/register">
      <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
        Trova un pilota drone
      </button>
    </Link>
  </div>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Video aerei professionali
    </h2>
    <p className="text-gray-300">
      Riprese dall'alto per valorizzare ogni fase dell'evento.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Fotografie spettacolari
    </h2>
    <p className="text-gray-300">
      Immagini aeree ideali per promozione, social media e documentazione.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Eventi di ogni tipo
    </h2>
    <p className="text-gray-300">
      Matrimoni, concerti, eventi aziendali, sportivi e manifestazioni.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Perché utilizzare un drone durante un evento
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Le riprese aeree permettono di mostrare l'evento da una prospettiva
    completamente diversa rispetto alle tradizionali videocamere a terra.
    Attraverso il drone è possibile catturare panoramiche della location,
    seguire il pubblico, documentare momenti importanti e realizzare contenuti
    coinvolgenti.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Sempre più organizzatori scelgono di integrare riprese drone per
    valorizzare eventi aziendali, festival, cerimonie, fiere e iniziative
    pubbliche. I contenuti ottenuti possono essere utilizzati per promozione,
    comunicazione e marketing.
  </p>

  <p className="leading-8 text-gray-300">
    Le immagini realizzate dall'alto consentono inoltre di raccontare meglio
    l'atmosfera dell'evento e offrire una visione completa dell'intera
    manifestazione.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Eventi più richiesti
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I piloti drone vengono frequentemente contattati per matrimoni,
      cerimonie, concerti, raduni, inaugurazioni, eventi aziendali,
      manifestazioni sportive, sagre, fiere e spettacoli.
    </p>

    <p className="leading-8 text-gray-300">
      Ogni evento può richiedere esigenze differenti in base alla location,
      alla durata e agli obiettivi delle riprese.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Riprese più richieste
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese drone matrimoni</li>
      <li>✅ Video per concerti</li>
      <li>✅ Eventi aziendali</li>
      <li>✅ Manifestazioni sportive</li>
      <li>✅ Fiere ed esposizioni</li>
      <li>✅ Festival e spettacoli</li>
      <li>✅ Eventi pubblici</li>
      <li>✅ Contenuti social e promozionali</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone per il tuo evento
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard è una piattaforma che mette in contatto clienti e piloti
    drone. Dopo aver pubblicato una richiesta, i professionisti interessati
    possono candidarsi e proporti la propria disponibilità.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Potrai confrontare diverse candidature, valutare esperienza,
    attrezzatura e tipologia di servizio offerto per trovare la soluzione più
    adatta alle esigenze del tuo evento.
  </p>

  <p className="leading-8 text-gray-300">
    In questo modo puoi organizzare più facilmente riprese aeree
    professionali e ottenere contenuti di qualità per valorizzare ogni
    occasione speciale.
  </p>
</div>
      </section>
    </main>
  )
}