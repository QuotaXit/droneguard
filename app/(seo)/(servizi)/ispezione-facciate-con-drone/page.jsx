import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione facciate con drone | DroneGuard",
  description:
    "Trova operatori drone per controlli e verifiche di facciate, edifici e strutture."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
  <Navbar />

  <section className="mx-auto max-w-6xl px-6 py-20">
    <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per coperture industriali
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Ispezione coperture industriali
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    Le ispezioni delle coperture industriali con drone consentono di verificare
    rapidamente lo stato di capannoni, tetti industriali, magazzini,
    stabilimenti produttivi e strutture commerciali senza interrompere le
    attività aziendali. Grazie a fotografie e video ad alta risoluzione è
    possibile individuare infiltrazioni, danni, usura, deterioramenti e altre
    criticità in modo sicuro ed efficiente. Attraverso DroneGuard puoi trovare
    piloti drone qualificati per controlli, monitoraggi e documentazione
    fotografica di coperture industriali in tutta Italia.
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
      Controllo tetti industriali
    </h2>
    <p className="text-gray-300">
      Ispezioni dettagliate di coperture, capannoni e strutture produttive
      senza ponteggi o piattaforme elevatrici.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Individuazione anomalie
    </h2>
    <p className="text-gray-300">
      Verifica di infiltrazioni, danni, usura e criticità che possono
      compromettere la copertura.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Riduzione dei costi
    </h2>
    <p className="text-gray-300">
      Controlli rapidi e sicuri che riducono tempi di intervento e costi
      operativi.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Perché utilizzare un drone per le coperture industriali
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Le coperture industriali possono estendersi per migliaia di metri quadrati
    e richiedono controlli periodici per verificarne lo stato di conservazione.
    Attraverso il drone è possibile ottenere rapidamente una panoramica
    completa dell'area senza interrompere la produzione o limitare le attività
    operative dell'azienda.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Le immagini raccolte consentono di individuare zone usurate, infiltrazioni,
    deformazioni, danneggiamenti o altri elementi che possono richiedere
    approfondimenti tecnici o interventi di manutenzione.
  </p>

  <p className="leading-8 text-gray-300">
    Questo tipo di servizio è richiesto da industrie, magazzini logistici,
    aziende manifatturiere, centri commerciali, strutture produttive e
    proprietari di immobili industriali.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Applicazioni principali
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le ispezioni con drone possono essere utilizzate per controllare
      capannoni industriali, coperture commerciali, magazzini logistici,
      strutture produttive, edifici industriali e grandi superfici difficili
      da monitorare con metodi tradizionali.
    </p>

    <p className="leading-8 text-gray-300">
      Le riprese aeree consentono inoltre di documentare lo stato delle
      coperture nel tempo e supportare attività di manutenzione programmata.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi disponibili
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Ispezione tetti industriali</li>
      <li>✅ Controllo capannoni</li>
      <li>✅ Monitoraggio coperture</li>
      <li>✅ Documentazione fotografica tecnica</li>
      <li>✅ Verifica magazzini e stabilimenti</li>
      <li>✅ Supporto alla manutenzione</li>
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
        Descrivi la copertura industriale da controllare.
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
        Quanto costa un'ispezione di copertura industriale?
      </h3>
      <p className="text-gray-300">
        Il costo dipende dalla dimensione della struttura e dal tipo di
        servizio richiesto.
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
        Sì, puoi richiedere controlli programmati e monitoraggi nel tempo.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        I nuovi utenti ricevono crediti gratuiti?
      </h3>
      <p className="text-gray-300">
        Sì, i piloti ricevono 50 crediti gratuiti e i clienti 10 crediti
        gratuiti dopo la registrazione.
      </p>
    </div>
  </div>
</div>

<div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone per coperture industriali
  </h2>

  <p className="mb-6 max-w-3xl leading-8 text-gray-700">
    Registrati su DroneGuard, pubblica la tua richiesta e ricevi candidature
    da piloti drone interessati a ispezioni di capannoni, coperture
    industriali, stabilimenti produttivi, magazzini e strutture commerciali.
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