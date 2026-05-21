import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per infrastrutture | DroneGuard",
  description:
    "Trova operatori drone per ponti, viadotti, strade e infrastrutture."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
  <Navbar />

  <section className="mx-auto max-w-6xl px-6 py-20">
    <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per infrastrutture
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Drone per infrastrutture
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    I droni rappresentano una soluzione moderna ed efficiente per l'ispezione,
    il monitoraggio e la documentazione di infrastrutture civili e industriali.
    Grazie alle riprese aeree ad alta definizione è possibile controllare
    ponti, viadotti, strade, gallerie, ferrovie, dighe e altre opere senza
    interrompere il traffico o le attività operative. Attraverso DroneGuard
    puoi trovare piloti drone qualificati per rilievi, controlli visivi e
    documentazione tecnica di infrastrutture di qualsiasi dimensione.
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
      Ispezione ponti e viadotti
    </h2>
    <p className="text-gray-300">
      Controlli dettagliati di strutture complesse con immagini ad alta
      risoluzione e accesso alle aree più difficili da raggiungere.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Monitoraggio infrastrutturale
    </h2>
    <p className="text-gray-300">
      Verifiche periodiche per controllare lo stato delle opere e monitorarne
      l'evoluzione nel tempo.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Sicurezza e rapidità
    </h2>
    <p className="text-gray-300">
      Riduzione dei rischi operativi e acquisizione di dati senza interventi
      invasivi sulle infrastrutture.
    </p>
  </div>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Perché usare un drone per le infrastrutture
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le infrastrutture richiedono controlli periodici per verificare il loro
      stato di conservazione e individuare eventuali criticità. L'utilizzo del
      drone permette di ottenere rapidamente immagini dettagliate di aree
      difficili da raggiungere, riducendo tempi e costi rispetto ai metodi
      tradizionali.
    </p>

    <p className="leading-8 text-gray-300">
      Le riprese aeree consentono di osservare le opere da prospettive diverse,
      facilitando la documentazione tecnica e la raccolta di materiale utile
      per verifiche, manutenzioni e attività di monitoraggio.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Applicazioni principali
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Ispezione ponti e viadotti</li>
      <li>✅ Monitoraggio gallerie</li>
      <li>✅ Controllo infrastrutture ferroviarie</li>
      <li>✅ Verifica strade e opere civili</li>
      <li>✅ Documentazione tecnica</li>
      <li>✅ Rilievi fotografici e video aerei</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova professionisti per infrastrutture
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard mette in contatto clienti e piloti drone attraverso una
    piattaforma dedicata. Puoi pubblicare una richiesta specificando il tipo di
    infrastruttura, la località e il servizio necessario.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I piloti interessati possono candidarsi e proporti la propria
    disponibilità, permettendoti di confrontare diverse soluzioni prima di
    scegliere il professionista più adatto.
  </p>

  <p className="leading-8 text-gray-300">
    Questo sistema è utile per enti pubblici, aziende, studi tecnici,
    professionisti e organizzazioni che necessitano di ispezioni e controlli
    effettuati con drone.
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
        Descrivi l'infrastruttura e il servizio richiesto.
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
        Quali infrastrutture possono essere ispezionate?
      </h3>
      <p className="text-gray-300">
        Ponti, viadotti, strade, gallerie, ferrovie, dighe e numerose altre opere.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        DroneGuard esegue direttamente le ispezioni?
      </h3>
      <p className="text-gray-300">
        No, DroneGuard mette in contatto clienti e piloti drone registrati.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Posso richiedere monitoraggi periodici?
      </h3>
      <p className="text-gray-300">
        Sì, puoi specificarlo direttamente nella richiesta pubblicata.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Sono previsti crediti gratuiti?
      </h3>
      <p className="text-gray-300">
        Sì, 50 crediti per i piloti e 10 crediti per i clienti.
      </p>
    </div>
  </div>
</div>

<div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone per infrastrutture
  </h2>

  <p className="mb-6 max-w-3xl leading-8 text-gray-700">
    Registrati su DroneGuard, pubblica la tua richiesta e ricevi candidature
    da piloti drone interessati a ispezioni, monitoraggio e controlli di
    infrastrutture civili e industriali.
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