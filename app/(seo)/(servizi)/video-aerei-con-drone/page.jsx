import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Video aerei con drone | DroneGuard",
  description:
    "Trova piloti drone per video aerei professionali, riprese con drone per aziende, immobili, eventi, turismo e contenuti promozionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per video e contenuti professionali
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Video aerei con drone
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    I video aerei con drone permettono di realizzare contenuti spettacolari
    da prospettive uniche, valorizzando immobili, aziende, eventi, strutture
    turistiche e progetti professionali. Grazie alle moderne tecnologie di
    ripresa è possibile ottenere filmati fluidi e ad alta definizione,
    ideali per promozione, marketing, documentazione e comunicazione.
    Attraverso DroneGuard puoi pubblicare una richiesta e ricevere
    candidature da piloti drone interessati a realizzare il tuo progetto.
  </p>

  <div className="mt-8">
    <Link href="/register">
      <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
        Richiedi un servizio
      </button>
    </Link>
  </div>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Alta qualità video
    </h2>
    <p className="text-gray-300">
      Riprese professionali ideali per aziende, immobili, eventi e attività
      commerciali.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Prospettive uniche
    </h2>
    <p className="text-gray-300">
      Inquadrature dall'alto che valorizzano ambienti, strutture e location.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Piloti in tutta Italia
    </h2>
    <p className="text-gray-300">
      Ricevi candidature da operatori drone disponibili nella tua zona.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Perché utilizzare video aerei con drone
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Le riprese con drone consentono di mostrare luoghi, edifici e attività
    da angolazioni impossibili da ottenere con una videocamera tradizionale.
    Questo permette di creare contenuti più coinvolgenti e professionali,
    capaci di attirare l'attenzione di clienti e potenziali interessati.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Sempre più aziende utilizzano video aerei per presentare servizi,
    strutture, impianti, cantieri e attività commerciali. Anche il settore
    immobiliare, turistico e degli eventi beneficia enormemente delle riprese
    realizzate con drone.
  </p>

  <p className="leading-8 text-gray-300">
    Grazie alla qualità delle immagini e alla libertà di movimento offerta
    dal drone è possibile realizzare filmati dinamici e di forte impatto
    visivo.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Dove vengono utilizzati
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I video aerei trovano applicazione in numerosi settori professionali,
      dalla promozione aziendale alle vendite immobiliari, passando per
      turismo, edilizia, eventi e marketing digitale.
    </p>

    <p className="leading-8 text-gray-300">
      Ogni progetto può richiedere approcci differenti, ma l'obiettivo resta
      sempre quello di valorizzare al meglio il soggetto delle riprese.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Utilizzi più richiesti
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Video immobiliari</li>
      <li>✅ Riprese aziendali</li>
      <li>✅ Eventi e matrimoni</li>
      <li>✅ Turismo e hotel</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Produzioni video professionali</li>
      <li>✅ Social media e marketing</li>
      <li>✅ Presentazioni commerciali</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone per il tuo progetto
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard è una piattaforma che mette in contatto clienti e piloti
    drone. Dopo aver pubblicato una richiesta, i professionisti interessati
    possono candidarsi e proporti il proprio servizio.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Potrai confrontare diverse candidature e scegliere il pilota drone più
    adatto in base all'esperienza, all'attrezzatura utilizzata e al tipo di
    contenuto che desideri realizzare.
  </p>

  <p className="leading-8 text-gray-300">
    In questo modo puoi trovare più facilmente professionisti disponibili
    per realizzare video aerei con drone nella tua zona.
  </p>
</div>
      </section>
    </main>
  )
}