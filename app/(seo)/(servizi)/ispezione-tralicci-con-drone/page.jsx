import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione tralicci con drone | DroneGuard",
  description:
    "Trova piloti drone per il controllo di tralicci, antenne e infrastrutture in quota."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per infrastrutture e impianti
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Ispezione tralicci con drone
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    L'ispezione di tralicci con drone consente di effettuare verifiche tecniche
    rapide, sicure e dettagliate su strutture verticali difficili da
    raggiungere. Grazie a fotografie e video ad alta risoluzione è possibile
    controllare lo stato di tralicci elettrici, tralicci per telecomunicazioni,
    antenne, torri radio e altre infrastrutture senza ricorrere a ponteggi,
    piattaforme elevatrici o lavori in quota. Attraverso DroneGuard puoi
    trovare piloti drone qualificati per ispezioni professionali di tralicci e
    infrastrutture in tutta Italia.
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
      Verifiche tecniche
    </h2>
    <p className="text-gray-300">
      Controlli accurati di tralicci, antenne e strutture verticali con
      immagini ad alta definizione.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Sicurezza operativa
    </h2>
    <p className="text-gray-300">
      Riduzione dei rischi legati ai lavori in quota grazie all'utilizzo dei
      droni professionali.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Documentazione dettagliata
    </h2>
    <p className="text-gray-300">
      Foto e video utili per manutenzione, monitoraggio e verifiche tecniche.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Perché utilizzare un drone per l'ispezione dei tralicci
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I tralicci rappresentano infrastrutture fondamentali per reti elettriche,
    telecomunicazioni e sistemi di trasmissione. Le ispezioni tradizionali
    richiedono spesso personale specializzato e attività in quota che possono
    aumentare tempi, costi e rischi operativi.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Grazie ai droni è possibile acquisire immagini dettagliate delle strutture,
    verificare eventuali danni, corrosione o anomalie e documentare lo stato
    generale del traliccio senza interrompere il servizio.
  </p>

  <p className="leading-8 text-gray-300">
    Questo servizio è particolarmente utile per aziende energetiche, operatori
    di telecomunicazioni, enti pubblici e società di manutenzione.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Applicazioni principali
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le ispezioni con drone possono essere effettuate su tralicci elettrici,
      torri radio, antenne per telecomunicazioni, infrastrutture di rete e
      numerose altre strutture verticali.
    </p>

    <p className="leading-8 text-gray-300">
      Le immagini raccolte consentono di monitorare nel tempo lo stato delle
      infrastrutture e supportare interventi di manutenzione preventiva.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi disponibili
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Ispezione tralicci elettrici</li>
      <li>✅ Controllo torri per telecomunicazioni</li>
      <li>✅ Verifica antenne e strutture verticali</li>
      <li>✅ Documentazione fotografica tecnica</li>
      <li>✅ Monitoraggio infrastrutture</li>
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
        Descrivi il traliccio o la struttura da controllare.
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
        Quali tralicci possono essere ispezionati?
      </h3>
      <p className="text-gray-300">
        Tralicci elettrici, torri radio, antenne, infrastrutture per
        telecomunicazioni e numerose altre strutture verticali.
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
        Sì, puoi richiedere controlli programmati e verifiche periodiche.
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
    Trova un pilota drone per l'ispezione di tralicci
  </h2>

  <p className="mb-6 max-w-3xl leading-8 text-gray-700">
    Registrati su DroneGuard, pubblica la tua richiesta e ricevi candidature
    da piloti drone interessati a ispezioni di tralicci, torri radio,
    infrastrutture energetiche e strutture per telecomunicazioni.
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