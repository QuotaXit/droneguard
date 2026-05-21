import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione serbatoi con drone | DroneGuard",
  description:
    "Trova piloti drone per ispezioni di serbatoi, impianti industriali e strutture tecniche."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per ispezioni industriali
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Ispezione serbatoi con drone
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    L'ispezione di serbatoi con drone permette di controllare strutture
    industriali in modo rapido, sicuro ed efficiente senza la necessità di
    ponteggi, piattaforme elevatrici o fermo impianto. Grazie a fotografie e
    video ad alta risoluzione è possibile verificare lo stato di serbatoi,
    cisterne, impianti di stoccaggio e altre strutture industriali individuando
    anomalie, corrosione, danni e segni di deterioramento. Attraverso
    DroneGuard puoi trovare piloti drone qualificati per ispezioni di
    serbatoi e impianti industriali in tutta Italia.
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
      Controllo serbatoi
    </h2>
    <p className="text-gray-300">
      Ispezioni dettagliate di serbatoi industriali, cisterne e impianti di
      stoccaggio senza interventi invasivi.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Foto e video ad alta definizione
    </h2>
    <p className="text-gray-300">
      Documentazione fotografica professionale utile per verifiche tecniche e
      manutenzioni programmate.
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

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Perché utilizzare un drone per l'ispezione dei serbatoi
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I serbatoi industriali richiedono controlli periodici per verificare lo
    stato delle superfici e individuare tempestivamente eventuali criticità.
    Le ispezioni tradizionali possono richiedere attrezzature costose e
    interventi complessi, mentre il drone permette di acquisire rapidamente
    immagini dettagliate da diverse angolazioni.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Attraverso le riprese aeree è possibile documentare corrosione,
    deterioramenti, deformazioni e altre anomalie che potrebbero richiedere
    interventi di manutenzione o approfondimenti tecnici.
  </p>

  <p className="leading-8 text-gray-300">
    Questo tipo di servizio è richiesto da aziende industriali, impianti
    chimici, raffinerie, depositi carburanti, impianti energetici e società
    che gestiscono strutture di stoccaggio.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Applicazioni principali
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I droni possono essere utilizzati per ispezionare serbatoi verticali,
      orizzontali, cisterne industriali, impianti di stoccaggio e numerose
      altre strutture presenti in ambito industriale.
    </p>

    <p className="leading-8 text-gray-300">
      Le immagini raccolte permettono di monitorare nel tempo lo stato delle
      strutture e supportare attività di manutenzione preventiva.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi disponibili
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Ispezione serbatoi industriali</li>
      <li>✅ Controllo cisterne</li>
      <li>✅ Monitoraggio impianti di stoccaggio</li>
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
        Descrivi il serbatoio o l'impianto da controllare.
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
        Quali serbatoi possono essere ispezionati?
      </h3>
      <p className="text-gray-300">
        Serbatoi industriali, cisterne, impianti di stoccaggio e numerose
        altre strutture presenti in ambito produttivo.
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
        Sì, puoi specificare nella richiesta la necessità di monitoraggi
        programmati.
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
    Trova un pilota drone per l'ispezione di serbatoi
  </h2>

  <p className="mb-6 max-w-3xl leading-8 text-gray-700">
    Registrati su DroneGuard, pubblica la tua richiesta e ricevi candidature
    da piloti drone interessati a ispezioni di serbatoi, cisterne, impianti di
    stoccaggio e strutture industriali.
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