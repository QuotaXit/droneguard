import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per fotogrammetria | DroneGuard",
  description:
    "Trova professionisti per fotogrammetria, rilievi e modellazione 3D con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
  <Navbar />

  <section className="mx-auto max-w-6xl px-6 py-20">
    <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per fotogrammetria e rilievi
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Drone per fotogrammetria
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    La fotogrammetria con drone consente di acquisire immagini aeree ad alta
    precisione e trasformarle in ortofoto, modelli tridimensionali, nuvole di
    punti e mappe dettagliate. Questa tecnologia viene utilizzata in edilizia,
    topografia, agricoltura, infrastrutture e monitoraggio del territorio,
    offrendo dati accurati e riducendo tempi e costi rispetto ai metodi
    tradizionali. Attraverso DroneGuard puoi trovare piloti drone specializzati
    in rilievi fotogrammetrici professionali e pubblicare richieste per
    individuare il professionista più adatto alle tue esigenze.
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
      Ortofoto ad alta risoluzione
    </h2>
    <p className="text-gray-300">
      Mappe dettagliate e georeferenziate utili per progettazione,
      documentazione tecnica e analisi del territorio.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Modellazione 3D
    </h2>
    <p className="text-gray-300">
      Creazione di modelli tridimensionali di edifici, terreni,
      infrastrutture e aree di interesse.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Rilievi topografici
    </h2>
    <p className="text-gray-300">
      Acquisizione di dati precisi per geometri, architetti,
      ingegneri e studi tecnici.
    </p>
  </div>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Cos'è la fotogrammetria con drone
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      La fotogrammetria è una tecnica che utilizza immagini fotografiche per
      ottenere misurazioni e ricostruzioni tridimensionali. Grazie ai droni è
      possibile acquisire centinaia di immagini dall'alto e trasformarle in
      elaborati tecnici estremamente dettagliati.
    </p>

    <p className="leading-8 text-gray-300">
      Questo approccio permette di documentare grandi superfici in tempi
      ridotti, raccogliendo informazioni utili per progettazione, controllo,
      analisi e gestione del territorio.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Applicazioni principali
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Rilievi topografici</li>
      <li>✅ Fotogrammetria per edilizia</li>
      <li>✅ Modellazione 3D</li>
      <li>✅ Monitoraggio infrastrutture</li>
      <li>✅ Analisi del territorio</li>
      <li>✅ Documentazione tecnica</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova professionisti per rilievi fotogrammetrici
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard mette in contatto clienti e piloti drone. Puoi pubblicare una
    richiesta descrivendo il progetto, la zona di lavoro e il tipo di rilievo
    necessario. I piloti interessati potranno candidarsi e proporti la propria
    disponibilità.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Questo sistema permette di confrontare più professionisti e individuare la
    soluzione più adatta per rilievi topografici, ortofoto, nuvole di punti e
    modellazione tridimensionale.
  </p>

  <p className="leading-8 text-gray-300">
    La piattaforma è utile per imprese, studi tecnici, geometri, architetti,
    ingegneri, enti pubblici e professionisti che necessitano di dati raccolti
    dall'alto con elevata precisione.
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
        Descrivi il rilievo o il servizio richiesto.
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
        Cos'è la fotogrammetria con drone?
      </h3>
      <p className="text-gray-300">
        È una tecnica che utilizza immagini aeree per creare mappe,
        ortofoto, modelli 3D e rilievi dettagliati.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Posso richiedere un rilievo topografico?
      </h3>
      <p className="text-gray-300">
        Sì, puoi pubblicare una richiesta specificando il tipo di rilievo
        necessario.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        DroneGuard esegue direttamente i rilievi?
      </h3>
      <p className="text-gray-300">
        No, DroneGuard è una piattaforma che mette in contatto clienti e piloti drone.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        I nuovi utenti ricevono crediti gratuiti?
      </h3>
      <p className="text-gray-300">
        Sì, i piloti ricevono 50 crediti e i clienti 10 crediti gratuiti.
      </p>
    </div>
  </div>
</div>

<div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone per fotogrammetria
  </h2>

  <p className="mb-6 max-w-3xl leading-8 text-gray-700">
    Registrati su DroneGuard, pubblica la tua richiesta e ricevi candidature
    da piloti drone interessati a rilievi topografici, ortofoto,
    modellazione 3D e fotogrammetria professionale.
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