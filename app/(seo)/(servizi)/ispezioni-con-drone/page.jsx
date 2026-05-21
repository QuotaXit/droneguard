import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezioni con drone | DroneGuard",
  description:
    "Trova piloti drone per ispezioni di tetti, edifici, cantieri, impianti, pannelli fotovoltaici e strutture difficili da raggiungere."
}

export default function IspezioniConDronePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per le ispezioni professionali
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Ispezioni con drone
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    Le ispezioni con drone rappresentano una soluzione moderna, sicura ed
    efficiente per controllare edifici, infrastrutture, impianti industriali,
    pannelli fotovoltaici, coperture, facciate, cantieri e numerose altre
    strutture difficili da raggiungere. Grazie a fotografie e video ad alta
    risoluzione è possibile raccogliere informazioni dettagliate senza
    ponteggi, piattaforme elevatrici o interventi invasivi. Attraverso
    DroneGuard puoi trovare piloti drone qualificati in tutta Italia per
    ispezioni tecniche, controlli visivi, monitoraggi e documentazione
    professionale.
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
      Sicurezza
    </h2>
    <p className="text-gray-300">
      Controlli effettuati da remoto riducendo i rischi legati ai lavori in
      quota e alle aree difficili da raggiungere.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Rapidità
    </h2>
    <p className="text-gray-300">
      Acquisizione veloce di immagini e video dettagliati senza interrompere
      le normali attività operative.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Riduzione dei costi
    </h2>
    <p className="text-gray-300">
      Minori costi rispetto alle ispezioni tradizionali che richiedono
      ponteggi, piattaforme o personale specializzato.
    </p>
  </div>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Dove vengono utilizzate le ispezioni con drone
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I droni vengono utilizzati sempre più frequentemente per controllare
      strutture civili e industriali. Le immagini aeree consentono di
      verificare rapidamente lo stato delle superfici, documentare eventuali
      anomalie e pianificare interventi di manutenzione.
    </p>

    <p className="leading-8 text-gray-300">
      Questa tecnologia è impiegata in edilizia, industria, energia,
      infrastrutture, logistica, agricoltura e gestione del territorio.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Ispezioni più richieste
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Ispezione tetti e coperture</li>
      <li>✅ Ispezione facciate</li>
      <li>✅ Ispezione pannelli fotovoltaici</li>
      <li>✅ Ispezione ciminiere</li>
      <li>✅ Ispezione tralicci</li>
      <li>✅ Ispezione infrastrutture</li>
      <li>✅ Ispezione linee elettriche</li>
      <li>✅ Ispezione serbatoi industriali</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova piloti drone specializzati
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard è una piattaforma che mette in contatto clienti e piloti drone.
    Puoi pubblicare gratuitamente una richiesta specificando il tipo di
    ispezione, la località e le informazioni utili per il lavoro.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I piloti interessati possono candidarsi alla richiesta permettendoti di
    confrontare più professionisti e scegliere la soluzione più adatta alle
    tue esigenze.
  </p>

  <p className="leading-8 text-gray-300">
    La piattaforma è utilizzata da aziende, professionisti, enti pubblici,
    industrie, studi tecnici e privati che necessitano di controlli effettuati
    tramite drone.
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
        Crea gratuitamente il tuo account.
      </p>
    </div>

    <div>
      <h3 className="mb-2 font-semibold text-green-400">2. Riscatta i crediti</h3>
      <p className="text-sm leading-6 text-gray-300">
        50 crediti per i piloti e 10 crediti per i clienti.
      </p>
    </div>

    <div>
      <h3 className="mb-2 font-semibold text-green-400">3. Pubblica il lavoro</h3>
      <p className="text-sm leading-6 text-gray-300">
        Descrivi la struttura da ispezionare.
      </p>
    </div>

    <div>
      <h3 className="mb-2 font-semibold text-green-400">4. Ricevi candidature</h3>
      <p className="text-sm leading-6 text-gray-300">
        I piloti drone possono candidarsi al lavoro.
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
        Quali strutture possono essere ispezionate?
      </h3>
      <p className="text-gray-300">
        Tetti, facciate, impianti fotovoltaici, tralicci, ciminiere,
        infrastrutture, linee elettriche, serbatoi e molte altre strutture.
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
        Quanto costa un'ispezione con drone?
      </h3>
      <p className="text-gray-300">
        Il costo dipende dalla tipologia di struttura, dalla località e dalla
        complessità del lavoro richiesto.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Sono previsti crediti gratuiti?
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
    Richiedi un'ispezione con drone
  </h2>

  <p className="mb-6 max-w-3xl leading-8 text-gray-700">
    Registrati su DroneGuard, pubblica la tua richiesta e ricevi candidature
    da piloti drone interessati a effettuare ispezioni professionali nella tua
    zona.
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