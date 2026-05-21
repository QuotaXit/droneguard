import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione ciminiere con drone | DroneGuard",
  description:
    "Trova operatori drone per il controllo di ciminiere, torri e strutture verticali."
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
    Ispezione ciminiere con drone
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    L'ispezione di ciminiere con drone permette di effettuare controlli
    visivi rapidi, sicuri e dettagliati senza la necessità di ponteggi,
    piattaforme elevatrici o accessi complessi. Grazie a fotografie e video ad
    alta risoluzione è possibile verificare lo stato della struttura,
    individuare crepe, deterioramenti, corrosione e altre anomalie riducendo
    tempi, costi e rischi operativi. Attraverso DroneGuard puoi trovare piloti
    drone qualificati specializzati nelle ispezioni di ciminiere industriali,
    impianti produttivi, centrali energetiche e strutture ad alta quota.
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
      Controlli ad alta quota
    </h2>
    <p className="text-gray-300">
      Ispezioni di ciminiere e strutture elevate senza interrompere le attività
      operative e senza interventi invasivi.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Foto e video dettagliati
    </h2>
    <p className="text-gray-300">
      Immagini ad alta definizione utili per documentare lo stato della
      struttura e supportare le verifiche tecniche.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Maggiore sicurezza
    </h2>
    <p className="text-gray-300">
      Riduzione dei rischi per il personale grazie a controlli effettuati da
      remoto tramite drone.
    </p>
  </div>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Perché utilizzare un drone per le ciminiere
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le ciminiere industriali e civili sono strutture che richiedono controlli
      periodici per verificarne lo stato di conservazione. Le ispezioni
      tradizionali possono richiedere ponteggi, piattaforme elevatrici o
      interventi complessi che aumentano costi e tempi operativi.
    </p>

    <p className="leading-8 text-gray-300">
      Il drone consente invece di acquisire rapidamente immagini e video delle
      superfici esterne, documentando eventuali anomalie e facilitando le
      attività di manutenzione e controllo.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Applicazioni principali
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Ispezione ciminiere industriali</li>
      <li>✅ Controllo torri e strutture elevate</li>
      <li>✅ Verifica impianti produttivi</li>
      <li>✅ Documentazione fotografica tecnica</li>
      <li>✅ Monitoraggio stato delle superfici</li>
      <li>✅ Supporto alla manutenzione</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova professionisti per ispezioni industriali
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard mette in contatto clienti e piloti drone attraverso una
    piattaforma dedicata. Puoi pubblicare una richiesta specificando il tipo di
    struttura, la località e le esigenze del progetto.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I piloti interessati possono candidarsi e proporti la propria
    disponibilità. Potrai confrontare più candidature e scegliere il
    professionista più adatto per il lavoro richiesto.
  </p>

  <p className="leading-8 text-gray-300">
    Questo sistema è utile per aziende, impianti industriali, centrali,
    stabilimenti produttivi, enti pubblici e professionisti che necessitano di
    controlli effettuati con drone.
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
        Descrivi la ciminiera o la struttura da ispezionare.
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
        Perché usare un drone per ispezionare una ciminiera?
      </h3>
      <p className="text-gray-300">
        Permette di ottenere immagini dettagliate riducendo tempi, costi e
        rischi rispetto ai metodi tradizionali.
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
        Sì, puoi specificarlo nella richiesta pubblicata sulla piattaforma.
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
    Trova un pilota drone per l'ispezione di ciminiere
  </h2>

  <p className="mb-6 max-w-3xl leading-8 text-gray-700">
    Registrati su DroneGuard, pubblica la tua richiesta e ricevi candidature
    da piloti drone interessati a ispezioni di ciminiere, torri industriali,
    impianti produttivi e strutture ad alta quota.
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