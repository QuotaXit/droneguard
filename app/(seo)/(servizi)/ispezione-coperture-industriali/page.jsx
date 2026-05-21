import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione coperture industriali | DroneGuard",
  description:
    "Trova piloti drone per l'ispezione di coperture industriali, capannoni e strutture produttive."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
  <Navbar />

  <section className="mx-auto max-w-6xl px-6 py-20">
    <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per ispezioni industriali
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
      Ispezioni dettagliate di capannoni, coperture e strutture produttive
      senza l'utilizzo di ponteggi o piattaforme elevatrici.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Individuazione anomalie
    </h2>
    <p className="text-gray-300">
      Verifica di infiltrazioni, danni, usura, crepe e criticità che possono
      compromettere la funzionalità della copertura.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Riduzione dei costi
    </h2>
    <p className="text-gray-300">
      Controlli rapidi e sicuri che riducono tempi di intervento e costi
      operativi rispetto ai metodi tradizionali.
    </p>
  </div>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Perché usare un drone per le coperture industriali
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le coperture industriali sono spesso estese e difficili da ispezionare
      manualmente. L'utilizzo del drone permette di acquisire rapidamente
      immagini dettagliate delle superfici senza interrompere le attività
      produttive dell'azienda.
    </p>

    <p className="leading-8 text-gray-300">
      Le riprese aeree consentono di individuare possibili criticità e ottenere
      una panoramica completa dello stato della copertura, facilitando le
      attività di manutenzione e controllo periodico.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Applicazioni principali
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Ispezione capannoni industriali</li>
      <li>✅ Controllo coperture commerciali</li>
      <li>✅ Verifica magazzini e depositi</li>
      <li>✅ Monitoraggio strutture produttive</li>
      <li>✅ Documentazione fotografica tecnica</li>
      <li>✅ Supporto alla manutenzione</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova professionisti per l'ispezione di coperture
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard mette in contatto clienti e piloti drone attraverso una
    piattaforma dedicata. Puoi pubblicare una richiesta indicando il tipo di
    struttura, la località e il servizio richiesto.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I piloti interessati potranno candidarsi e proporti la propria
    disponibilità. Potrai confrontare più candidature e scegliere il
    professionista più adatto alle esigenze del tuo progetto.
  </p>

  <p className="leading-8 text-gray-300">
    La piattaforma è utile per aziende, industrie, gestori di immobili
    commerciali, professionisti e responsabili della manutenzione che
    necessitano di controlli effettuati con drone.
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
        Descrivi la copertura o la struttura da controllare.
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
        Perché utilizzare un drone per ispezionare una copertura industriale?
      </h3>
      <p className="text-gray-300">
        Permette di controllare ampie superfici in tempi ridotti riducendo
        rischi e costi rispetto alle ispezioni tradizionali.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        DroneGuard esegue direttamente le ispezioni?
      </h3>
      <p className="text-gray-300">
        No, DroneGuard è una piattaforma che mette in contatto clienti e
        piloti drone registrati.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Posso richiedere controlli periodici?
      </h3>
      <p className="text-gray-300">
        Sì, puoi specificare nella richiesta la necessità di monitoraggi
        programmati nel tempo.
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