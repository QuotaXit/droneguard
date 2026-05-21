import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Riprese drone immobili | DroneGuard",
  description:
    "Trova piloti drone per fotografie e video aerei di immobili, ville, appartamenti, terreni e strutture commerciali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per il settore immobiliare
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Riprese drone immobili
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    Le riprese drone per immobili consentono di valorizzare abitazioni,
    ville, appartamenti, terreni, strutture ricettive e proprietà
    commerciali attraverso fotografie e video aerei professionali. Le
    immagini dall'alto permettono di mostrare la posizione dell'immobile, gli
    spazi esterni, il contesto circostante e caratteristiche difficili da
    evidenziare con fotografie tradizionali. Attraverso DroneGuard puoi
    pubblicare una richiesta e ricevere candidature da piloti drone
    interessati a realizzare il servizio.
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
      Foto aeree professionali
    </h2>
    <p className="text-gray-300">
      Immagini ad alta qualità per presentare immobili e proprietà in modo
      più efficace.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Video coinvolgenti
    </h2>
    <p className="text-gray-300">
      Riprese aeree ideali per annunci immobiliari, siti web e social media.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Maggiore visibilità
    </h2>
    <p className="text-gray-300">
      Contenuti visivi che aiutano a valorizzare la proprietà e attirare
      l'attenzione dei potenziali clienti.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Perché utilizzare un drone per promuovere un immobile
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Le fotografie e i video realizzati con drone permettono di mostrare una
    proprietà da prospettive uniche. Oltre all'edificio, è possibile
    evidenziare giardini, terreni, piscine, parcheggi, aree esterne e il
    contesto in cui si trova l'immobile.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Le immagini aeree sono sempre più utilizzate da agenzie immobiliari,
    costruttori, investitori e proprietari che desiderano presentare una
    struttura in modo professionale e differenziarsi rispetto agli annunci
    tradizionali.
  </p>

  <p className="leading-8 text-gray-300">
    Un video aereo ben realizzato può aiutare a trasmettere meglio dimensioni,
    posizione e caratteristiche della proprietà, migliorando la qualità della
    presentazione.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Chi utilizza questo servizio
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le riprese drone immobili vengono richieste da agenzie immobiliari,
      imprese di costruzione, strutture turistiche, investitori, studi
      tecnici e privati che desiderano valorizzare una proprietà.
    </p>

    <p className="leading-8 text-gray-300">
      I contenuti possono essere utilizzati per annunci online, siti web,
      brochure, campagne pubblicitarie e social media.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Riprese più richieste
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Ville e abitazioni</li>
      <li>✅ Appartamenti</li>
      <li>✅ Terreni edificabili</li>
      <li>✅ Agriturismi e hotel</li>
      <li>✅ Complessi residenziali</li>
      <li>✅ Immobili commerciali</li>
      <li>✅ Cantieri e nuove costruzioni</li>
      <li>✅ Proprietà di pregio</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone per il tuo immobile
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard mette in contatto clienti e piloti drone registrati sulla
    piattaforma. Puoi pubblicare gratuitamente una richiesta descrivendo la
    proprietà e il tipo di materiale che desideri ottenere.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I piloti interessati possono candidarsi al lavoro permettendoti di
    confrontare più professionisti e scegliere la soluzione più adatta alle
    tue esigenze.
  </p>

  <p className="leading-8 text-gray-300">
    Questo sistema consente di trovare più facilmente operatori specializzati
    in fotografie e video aerei per immobili in tutta Italia.
  </p>
</div>
      </section>
    </main>
  )
}