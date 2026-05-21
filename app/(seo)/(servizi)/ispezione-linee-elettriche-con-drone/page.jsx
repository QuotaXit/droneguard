import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione linee elettriche con drone | DroneGuard",
  description:
    "Trova operatori drone per il controllo di linee elettriche e infrastrutture energetiche."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per il settore energetico
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Ispezione linee elettriche con drone
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    L'ispezione delle linee elettriche con drone permette di controllare
    infrastrutture energetiche in modo rapido, sicuro ed efficiente.
    Attraverso fotografie e video ad alta risoluzione è possibile verificare
    lo stato di tralicci, cavi, pali elettrici e altre componenti della rete
    senza interrompere il servizio. Grazie all'utilizzo dei droni si riducono
    tempi, costi e rischi operativi rispetto alle ispezioni tradizionali.
    Attraverso DroneGuard puoi trovare piloti drone qualificati per controlli,
    monitoraggi e documentazione tecnica di linee elettriche e infrastrutture
    energetiche in tutta Italia.
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
      Controllo infrastrutture
    </h2>
    <p className="text-gray-300">
      Verifica di linee elettriche, pali, tralicci e infrastrutture della rete
      energetica.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Foto e video dettagliati
    </h2>
    <p className="text-gray-300">
      Acquisizione di immagini ad alta definizione utili per documentazione e
      controlli tecnici.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Riduzione dei rischi
    </h2>
    <p className="text-gray-300">
      Controlli effettuati da remoto senza esporre il personale a situazioni
      potenzialmente pericolose.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Perché utilizzare un drone per le linee elettriche
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Le linee elettriche si sviluppano spesso per chilometri attraversando zone
    urbane, rurali e aree difficili da raggiungere. Il drone consente di
    effettuare controlli rapidi e accurati acquisendo immagini dettagliate
    senza la necessità di interventi invasivi.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Le riprese aeree permettono di verificare lo stato delle infrastrutture,
    documentare eventuali anomalie e raccogliere materiale utile per attività
    di manutenzione, monitoraggio e pianificazione degli interventi.
  </p>

  <p className="leading-8 text-gray-300">
    Questo tipo di servizio è richiesto da aziende energetiche, gestori di
    reti elettriche, enti pubblici, professionisti e società specializzate
    nella manutenzione delle infrastrutture.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Applicazioni principali
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I droni vengono utilizzati per il monitoraggio di linee elettriche,
      tralicci, cabine, sottostazioni e altre infrastrutture energetiche che
      richiedono verifiche periodiche e documentazione tecnica.
    </p>

    <p className="leading-8 text-gray-300">
      Le immagini raccolte possono supportare attività di manutenzione,
      controllo dello stato delle strutture e pianificazione di interventi
      futuri.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi disponibili
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Ispezione linee elettriche</li>
      <li>✅ Controllo tralicci e pali</li>
      <li>✅ Monitoraggio infrastrutture energetiche</li>
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
        Descrivi la linea elettrica o l'infrastruttura da controllare.
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
        Perché usare un drone per le linee elettriche?
      </h3>
      <p className="text-gray-300">
        Consente di ridurre tempi, costi e rischi ottenendo immagini
        dettagliate delle infrastrutture.
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
        Sì, puoi specificarlo nella richiesta pubblicata sulla piattaforma.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        I nuovi utenti ricevono crediti gratuiti?
      </h3>
      <p className="text-gray-300">
        Sì, i piloti ricevono 50 crediti gratuiti e i clienti 10 crediti
        gratuiti.
      </p>
    </div>
  </div>
</div>

<div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone per linee elettriche
  </h2>

  <p className="mb-6 max-w-3xl leading-8 text-gray-700">
    Registrati su DroneGuard, pubblica la tua richiesta e ricevi candidature
    da piloti drone interessati a ispezioni di linee elettriche, tralicci,
    infrastrutture energetiche e reti di distribuzione.
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