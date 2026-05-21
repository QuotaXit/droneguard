import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Mappatura terreni con drone | DroneGuard",
  description:
    "Trova operatori drone per mappature, rilievi e analisi di terreni e proprietà."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per rilievi e mappature
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Mappatura terreni con drone
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    La mappatura di terreni con drone permette di ottenere dati precisi e
    aggiornati attraverso immagini aeree ad alta risoluzione. Grazie alla
    tecnologia drone è possibile realizzare mappe, ortofoto, rilievi
    topografici e modelli tridimensionali utili per edilizia, agricoltura,
    urbanistica, monitoraggio ambientale e gestione del territorio.
    Attraverso DroneGuard puoi trovare piloti drone qualificati specializzati
    nella mappatura di terreni e nell'acquisizione di dati georeferenziati in
    tutta Italia.
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
      Ortofoto ad alta precisione
    </h2>
    <p className="text-gray-300">
      Produzione di mappe georeferenziate dettagliate per progettazione,
      analisi e documentazione tecnica.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Modelli 3D del terreno
    </h2>
    <p className="text-gray-300">
      Creazione di modelli tridimensionali utili per studi tecnici e analisi
      territoriali.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Rilievi rapidi
    </h2>
    <p className="text-gray-300">
      Acquisizione dati in tempi ridotti rispetto ai metodi tradizionali.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Perché utilizzare un drone per la mappatura dei terreni
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I droni consentono di rilevare rapidamente grandi superfici raccogliendo
    dati accurati e aggiornati. Le immagini ottenute possono essere elaborate
    per creare mappe dettagliate, ortofoto e modelli digitali del terreno.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Questa tecnologia viene utilizzata per rilievi topografici, monitoraggio
    agricolo, pianificazione urbanistica, gestione di cantieri e controllo del
    territorio.
  </p>

  <p className="leading-8 text-gray-300">
    Grazie alla precisione dei dati raccolti, professionisti e aziende possono
    prendere decisioni più rapide e basate su informazioni affidabili.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Applicazioni principali
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      La mappatura con drone trova applicazione in agricoltura, edilizia,
      topografia, monitoraggio ambientale, infrastrutture e pianificazione del
      territorio.
    </p>

    <p className="leading-8 text-gray-300">
      Le informazioni raccolte possono supportare studi tecnici, progetti di
      sviluppo, attività di monitoraggio e gestione delle risorse.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi disponibili
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Mappatura terreni con drone</li>
      <li>✅ Ortofoto georeferenziate</li>
      <li>✅ Rilievi topografici</li>
      <li>✅ Modelli digitali del terreno</li>
      <li>✅ Fotogrammetria aerea</li>
      <li>✅ Monitoraggio del territorio</li>
    </ul>
  </div>
</div>

<div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
  <h2 className="mb-4 text-3xl font-bold">
    Come funziona DroneGuard
  </h2>

  <div className="grid gap-6 md:grid-cols-4">
    <div>
      <h3 className="mb-2 font-semibold text-green-400">1. Registrati</h3>
      <p className="text-sm leading-6 text-gray-300">
        Crea gratuitamente il tuo account.
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
        Descrivi il terreno e il rilievo richiesto.
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
        Cos'è la mappatura di un terreno con drone?
      </h3>
      <p className="text-gray-300">
        È un rilievo aereo che consente di creare mappe, ortofoto e modelli
        tridimensionali del terreno.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Chi utilizza questi rilievi?
      </h3>
      <p className="text-gray-300">
        Geometri, agronomi, ingegneri, architetti, imprese edili e aziende
        agricole.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        DroneGuard esegue direttamente i rilievi?
      </h3>
      <p className="text-gray-300">
        No, DroneGuard mette in contatto clienti e piloti drone registrati.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Sono previsti crediti gratuiti?
      </h3>
      <p className="text-gray-300">
        Sì, i nuovi piloti ricevono 50 crediti gratuiti e i clienti 10 crediti
        gratuiti dopo la registrazione.
      </p>
    </div>
  </div>
</div>

<div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
  <h2 className="mb-4 text-3xl font-bold">
    Richiedi una mappatura del terreno
  </h2>

  <p className="mb-6 max-w-3xl leading-8 text-gray-700">
    Registrati su DroneGuard, pubblica la tua richiesta e ricevi candidature
    da piloti drone specializzati in mappatura terreni, rilievi topografici,
    fotogrammetria e acquisizione di dati georeferenziati.
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