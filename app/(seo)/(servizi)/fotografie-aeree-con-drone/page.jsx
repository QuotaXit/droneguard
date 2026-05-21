import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Fotografie aeree con drone | DroneGuard",
  description:
    "Servizi professionali di fotografia aerea con drone per immobili, eventi e aziende."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
  <Navbar />

  <section className="mx-auto max-w-6xl px-6 py-20">
    <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per fotografia aerea
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Fotografie aeree con drone
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    Le fotografie aeree con drone permettono di catturare immagini spettacolari
    da prospettive uniche, valorizzando immobili, strutture ricettive,
    aziende, eventi, cantieri e territori. Grazie alla tecnologia dei droni è
    possibile ottenere fotografie professionali ad alta risoluzione ideali per
    marketing, pubblicità, documentazione tecnica, presentazioni commerciali e
    promozione online. Attraverso DroneGuard puoi trovare piloti drone
    qualificati specializzati in servizi fotografici aerei in tutta Italia e
    ricevere candidature da professionisti interessati al tuo progetto.
  </p>

  <div className="mt-8">
    <Link href="/register">
      <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
        Registrati gratis
      </button>
    </Link>
  </div>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Fotografia immobiliare
    </h2>
    <p className="text-gray-300">
      Immagini professionali per ville, appartamenti, strutture commerciali e
      immobili destinati alla vendita o all'affitto.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Eventi e turismo
    </h2>
    <p className="text-gray-300">
      Fotografie aeree per eventi, hotel, agriturismi, resort, location e
      strutture ricettive.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Aziende e cantieri
    </h2>
    <p className="text-gray-300">
      Documentazione fotografica professionale per attività commerciali,
      impianti industriali e cantieri.
    </p>
  </div>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Perché scegliere fotografie aeree con drone
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le immagini realizzate con drone offrono un punto di vista esclusivo e
      permettono di valorizzare qualsiasi soggetto in modo più coinvolgente
      rispetto alle fotografie tradizionali. Dall'alto è possibile mostrare
      contesto, dimensioni e caratteristiche di un immobile, di un evento o di
      un'attività commerciale.
    </p>

    <p className="leading-8 text-gray-300">
      La fotografia aerea è oggi utilizzata da aziende, professionisti,
      agenzie immobiliari, strutture turistiche e organizzatori di eventi che
      desiderano immagini di forte impatto visivo per promuovere i propri
      servizi.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi fotografici disponibili
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Fotografie aeree immobiliari</li>
      <li>✅ Fotografie per hotel e resort</li>
      <li>✅ Riprese per eventi e manifestazioni</li>
      <li>✅ Documentazione cantieri</li>
      <li>✅ Servizi fotografici aziendali</li>
      <li>✅ Immagini promozionali professionali</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un fotografo drone professionista
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard mette in contatto clienti e piloti drone attraverso una
    piattaforma semplice e intuitiva. Puoi pubblicare gratuitamente una
    richiesta descrivendo il tipo di servizio fotografico desiderato, la zona
    e le informazioni utili per il lavoro.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I piloti interessati potranno candidarsi e proporti la propria
    disponibilità. In questo modo potrai confrontare diverse candidature e
    scegliere il professionista più adatto alle tue esigenze.
  </p>

  <p className="leading-8 text-gray-300">
    La piattaforma è utile per privati, aziende, agenzie immobiliari,
    organizzatori di eventi, strutture ricettive e professionisti che
    desiderano fotografie aeree realizzate con drone.
  </p>
</div>

<div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
  <h2 className="mb-4 text-3xl font-bold">
    Come funziona DroneGuard
  </h2>

  <div className="grid gap-6 md:grid-cols-4">
    <div>
      <h3 className="mb-2 font-semibold text-green-400">1. Registrati</h3>
      <p className="text-sm leading-6 text-gray-300">
        Crea un account come cliente o pilota drone.
      </p>
    </div>

    <div>
      <h3 className="mb-2 font-semibold text-green-400">2. Riscatta i crediti</h3>
      <p className="text-sm leading-6 text-gray-300">
        50 crediti per i piloti e 10 per i clienti.
      </p>
    </div>

    <div>
      <h3 className="mb-2 font-semibold text-green-400">3. Pubblica il lavoro</h3>
      <p className="text-sm leading-6 text-gray-300">
        Descrivi il servizio fotografico richiesto.
      </p>
    </div>

    <div>
      <h3 className="mb-2 font-semibold text-green-400">4. Ricevi candidature</h3>
      <p className="text-sm leading-6 text-gray-300">
        I piloti interessati possono candidarsi.
      </p>
    </div>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-8 text-3xl font-bold">
    Domande frequenti
  </h2>

  <div className="space-y-5">
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Quanto costa un servizio fotografico con drone?
      </h3>
      <p className="text-gray-300">
        Il costo dipende dalla durata del servizio, dalla località e dalle
        esigenze specifiche del progetto.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        DroneGuard realizza direttamente le fotografie?
      </h3>
      <p className="text-gray-300">
        No, DroneGuard mette in contatto clienti e piloti drone registrati.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Posso richiedere fotografie per immobili?
      </h3>
      <p className="text-gray-300">
        Sì, puoi pubblicare richieste per immobili, eventi, aziende, hotel,
        cantieri e molte altre attività.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Sono previsti crediti gratuiti?
      </h3>
      <p className="text-gray-300">
        Sì, i nuovi piloti ricevono 50 crediti e i nuovi clienti 10 crediti
        gratuiti.
      </p>
    </div>
  </div>
</div>

<div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un fotografo drone professionista
  </h2>

  <p className="mb-6 max-w-3xl leading-8 text-gray-700">
    Registrati su DroneGuard, pubblica la tua richiesta e ricevi candidature
    da piloti drone interessati a fotografie aeree, servizi fotografici
    professionali, promozione immobiliare, turismo ed eventi.
  </p>

  <Link href="/register">
    <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
      Registrati gratis
    </button>
  </Link>
</div>
  </section>
</main>
  )
}