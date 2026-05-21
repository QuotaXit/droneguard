import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione pannelli fotovoltaici con drone | DroneGuard",
  description:
    "Trova professionisti per controlli di impianti fotovoltaici con droni e termocamere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per il fotovoltaico
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Ispezione pannelli fotovoltaici con drone
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    L'ispezione dei pannelli fotovoltaici con drone consente di verificare
    rapidamente lo stato degli impianti solari senza interrompere la produzione
    energetica. Grazie a fotografie e video ad alta risoluzione è possibile
    individuare guasti, anomalie, danni, accumuli di sporco e altre criticità
    che potrebbero influire sul rendimento dell'impianto. Attraverso
    DroneGuard puoi trovare piloti drone qualificati per controlli,
    monitoraggi e documentazione tecnica di impianti fotovoltaici in tutta
    Italia.
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
      Verifica anomalie
    </h2>
    <p className="text-gray-300">
      Controllo dei pannelli per individuare danni, usura e possibili problemi
      che possono ridurre la produzione energetica.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Monitoraggio impianto
    </h2>
    <p className="text-gray-300">
      Controlli periodici e acquisizione di immagini utili per la gestione e
      manutenzione dell'impianto.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Controlli in sicurezza
    </h2>
    <p className="text-gray-300">
      Ispezioni rapide senza accessi in quota e senza interrompere le normali
      attività operative.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Perché utilizzare un drone per i pannelli fotovoltaici
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Gli impianti fotovoltaici possono occupare superfici molto estese e
    richiedono controlli periodici per garantire la massima efficienza. Il
    drone permette di acquisire rapidamente immagini dettagliate dei pannelli
    senza la necessità di ispezioni manuali complesse.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Le riprese aeree consentono di verificare lo stato generale dell'impianto,
    documentare eventuali anomalie e raccogliere materiale utile per attività
    di manutenzione e controllo.
  </p>

  <p className="leading-8 text-gray-300">
    Questo servizio è particolarmente richiesto da aziende, installatori,
    manutentori, gestori di impianti e proprietari di sistemi fotovoltaici che
    desiderano monitorare il corretto funzionamento dell'impianto.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Applicazioni principali
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le ispezioni con drone possono essere utilizzate per controllare piccoli
      impianti residenziali, impianti industriali e grandi parchi fotovoltaici
      destinati alla produzione energetica.
    </p>

    <p className="leading-8 text-gray-300">
      Le immagini raccolte permettono di seguire nel tempo l'evoluzione
      dell'impianto e supportare interventi di manutenzione programmata.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi disponibili
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Ispezione pannelli fotovoltaici</li>
      <li>✅ Controllo impianti solari</li>
      <li>✅ Monitoraggio parchi fotovoltaici</li>
      <li>✅ Documentazione fotografica tecnica</li>
      <li>✅ Supporto alla manutenzione</li>
      <li>✅ Riprese aeree professionali</li>
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
        Descrivi l'impianto fotovoltaico da controllare.
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
        Perché utilizzare un drone per controllare pannelli fotovoltaici?
      </h3>
      <p className="text-gray-300">
        Permette di ispezionare rapidamente grandi superfici riducendo tempi,
        costi e rischi operativi.
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
        Posso richiedere controlli periodici?
      </h3>
      <p className="text-gray-300">
        Sì, puoi richiedere monitoraggi programmati e verifiche periodiche.
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
    Trova un pilota drone per pannelli fotovoltaici
  </h2>

  <p className="mb-6 max-w-3xl leading-8 text-gray-700">
    Registrati su DroneGuard, pubblica la tua richiesta e ricevi candidature
    da piloti drone interessati a ispezioni di pannelli fotovoltaici,
    monitoraggio impianti solari e controlli tecnici professionali.
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