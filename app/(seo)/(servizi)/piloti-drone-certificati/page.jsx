import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Piloti drone certificati | DroneGuard",
  description:
    "Trova piloti drone certificati e operatori qualificati per riprese aeree, ispezioni, cantieri, eventi, immobili e lavori professionali."
}

export default function PilotiDroneCertificatiPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per clienti e aziende
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Piloti drone certificati per lavori professionali
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    Su DroneGuard puoi entrare in contatto con piloti drone registrati e
    qualificati per servizi professionali in tutta Italia. La piattaforma è
    pensata per chi cerca un operatore drone per riprese aeree, ispezioni
    tecniche, immobili, eventi, cantieri, agricoltura, rilievi e attività
    specialistiche. Ogni pilota può indicare certificazioni, esperienza,
    droni utilizzati e servizi offerti, così da aiutare il cliente a valutare
    il professionista più adatto al lavoro richiesto.
  </p>

  <div className="mt-8">
    <Link href="/register">
      <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
        Trova un pilota drone
      </button>
    </Link>
  </div>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Piloti qualificati
    </h2>
    <p className="text-gray-300">
      Trova operatori drone con esperienza in riprese, ispezioni, rilievi,
      eventi e servizi tecnici.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Servizi professionali
    </h2>
    <p className="text-gray-300">
      Pubblica una richiesta dettagliata e ricevi candidature da piloti
      interessati al tuo progetto.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Scelta libera
    </h2>
    <p className="text-gray-300">
      Confronta disponibilità, esperienza, attrezzatura e proposta del pilota
      prima di scegliere.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova piloti drone per lavori professionali
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Un pilota drone professionale può essere richiesto per molte attività
    diverse. Dalle riprese video per aziende e privati alle ispezioni di
    edifici, tetti, facciate e impianti, fino al monitoraggio di cantieri,
    terreni agricoli, immobili e infrastrutture.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Attraverso DroneGuard puoi pubblicare una richiesta indicando il tipo di
    servizio di cui hai bisogno, la località, le tempistiche e tutte le
    informazioni utili per il lavoro. I piloti interessati possono candidarsi
    e proporti la propria disponibilità.
  </p>

  <p className="leading-8 text-gray-300">
    Questo sistema permette di ricevere più candidature e valutare con calma
    quale professionista scegliere, senza dover cercare manualmente operatori
    drone in ogni zona d'Italia.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Per quali servizi puoi cercare un pilota drone
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I piloti drone presenti su DroneGuard possono offrire servizi per
      privati, aziende, studi tecnici, agenzie immobiliari, imprese edili,
      organizzatori di eventi, agricoltori e professionisti.
    </p>

    <p className="leading-8 text-gray-300">
      Ogni lavoro può richiedere competenze diverse: alcuni progetti hanno
      bisogno di riprese video creative, altri richiedono esperienza tecnica,
      attrezzatura specifica o capacità di operare in contesti particolari.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi più richiesti
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese aeree professionali</li>
      <li>✅ Fotografie con drone</li>
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Video per eventi e matrimoni</li>
      <li>✅ Servizi per immobili</li>
      <li>✅ Rilievi e mappature</li>
      <li>✅ Agricoltura e monitoraggio terreni</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Certificazioni, esperienza e attrezzatura
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Quando si sceglie un pilota drone è importante valutare non solo il
    prezzo, ma anche l'esperienza, il tipo di servizio offerto, i droni
    disponibili e le eventuali certificazioni indicate nel profilo.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Su DroneGuard i piloti possono mostrare informazioni utili per aiutare il
    cliente a capire se il professionista è adatto al lavoro richiesto. Questo
    è particolarmente importante per attività tecniche come ispezioni,
    rilievi, termografia, fotogrammetria o monitoraggi periodici.
  </p>

  <p className="leading-8 text-gray-300">
    Per lavori creativi, come eventi, matrimoni, video aziendali o contenuti
    social, può invece essere utile valutare lo stile delle riprese,
    l'attrezzatura utilizzata e l'esperienza in contesti simili.
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
        Crea gratuitamente il tuo account su DroneGuard.
      </p>
    </div>

    <div>
      <h3 className="mb-2 font-semibold text-green-400">2. Pubblica il lavoro</h3>
      <p className="text-sm leading-6 text-gray-300">
        Descrivi il servizio drone di cui hai bisogno.
      </p>
    </div>

    <div>
      <h3 className="mb-2 font-semibold text-green-400">3. Ricevi candidature</h3>
      <p className="text-sm leading-6 text-gray-300">
        I piloti interessati possono candidarsi alla richiesta.
      </p>
    </div>

    <div>
      <h3 className="mb-2 font-semibold text-green-400">4. Scegli il pilota</h3>
      <p className="text-sm leading-6 text-gray-300">
        Valuta profilo, esperienza, offerta e disponibilità.
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
        DroneGuard certifica direttamente i piloti?
      </h3>
      <p className="text-gray-300">
        DroneGuard permette ai piloti di indicare certificazioni, esperienza,
        droni utilizzati e servizi offerti nel proprio profilo.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Posso confrontare più piloti?
      </h3>
      <p className="text-gray-300">
        Sì, dopo aver pubblicato una richiesta puoi ricevere candidature da
        diversi piloti interessati e valutare la soluzione più adatta.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Per quali lavori posso cercare un pilota drone?
      </h3>
      <p className="text-gray-300">
        Puoi cercare piloti per riprese aeree, eventi, immobili, ispezioni,
        cantieri, agricoltura, rilievi, mappature e servizi tecnici.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        DroneGuard esegue direttamente i lavori?
      </h3>
      <p className="text-gray-300">
        No, DroneGuard è una piattaforma che mette in contatto clienti e
        piloti drone registrati.
      </p>
    </div>
  </div>
</div>

<div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone certificato
  </h2>

  <p className="mb-6 max-w-3xl leading-8 text-gray-700">
    Registrati su DroneGuard, pubblica la tua richiesta e ricevi candidature
    da piloti drone disponibili per lavori professionali nella tua zona.
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