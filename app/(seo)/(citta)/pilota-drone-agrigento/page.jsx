import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Agrigento | DroneGuard",
  description:
    "Trova piloti drone ad Agrigento per riprese aeree, eventi, immobili, ispezioni, cantieri, agricoltura e lavori professionali."
}

export default function PilotaDroneAgrigentoPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard ad Agrigento
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Pilota Drone Agrigento
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    Cerchi un pilota drone ad Agrigento per riprese video, fotografie aeree,
    ispezioni tecniche, matrimoni, eventi, immobili, cantieri o lavori
    professionali? Con DroneGuard puoi pubblicare una richiesta e ricevere
    candidature dai piloti drone interessati nella zona di Agrigento e
    provincia. La piattaforma ti permette di descrivere il servizio richiesto,
    confrontare più professionisti e scegliere il pilota più adatto alle tue
    esigenze.
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
      Riprese e fotografie
    </h2>
    <p className="text-gray-300">
      Trova operatori drone per video aerei, fotografie professionali,
      immobili, eventi e contenuti promozionali.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Servizi tecnici
    </h2>
    <p className="text-gray-300">
      Richiedi ispezioni, monitoraggio cantieri, termografia, rilievi e
      attività professionali con drone.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Piloti nella tua zona
    </h2>
    <p className="text-gray-300">
      Pubblica il lavoro e ricevi candidature da piloti drone disponibili ad
      Agrigento e nei comuni vicini.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova operatori drone ad Agrigento
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Un pilota drone può essere utile per molti tipi di lavori: riprese video,
    fotografie aeree, eventi, matrimoni, ispezioni di tetti e facciate,
    controlli su impianti fotovoltaici, monitoraggio cantieri, servizi per
    immobili, agricoltura e attività aziendali.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Su DroneGuard puoi pubblicare una richiesta indicando la zona, il tipo di
    servizio, la data indicativa e le informazioni principali del progetto.
    I piloti interessati possono candidarsi e proporti la propria
    disponibilità.
  </p>

  <p className="leading-8 text-gray-300">
    In questo modo puoi confrontare più professionisti senza dover cercare
    manualmente ogni singolo operatore drone nella zona di Agrigento.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Servizi drone disponibili
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I piloti drone possono offrire servizi per privati, aziende, agenzie
      immobiliari, imprese edili, strutture turistiche, organizzatori di
      eventi, agricoltori e studi tecnici.
    </p>

    <p className="leading-8 text-gray-300">
      Ogni lavoro può richiedere competenze diverse: alcune richieste sono
      legate alla produzione di video e fotografie, altre riguardano
      ispezioni tecniche, rilievi o monitoraggi professionali.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi più richiesti
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese video aeree</li>
      <li>✅ Fotografie con drone</li>
      <li>✅ Eventi e matrimoni</li>
      <li>✅ Immobili e strutture ricettive</li>
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Agricoltura e rilievi</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Come funziona DroneGuard
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard è una piattaforma che mette in contatto clienti e piloti
    drone. Il cliente può registrarsi, ricevere 10 crediti gratuiti e
    pubblicare una richiesta di lavoro utilizzando 5 crediti.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I piloti drone registrati ricevono 50 crediti gratuiti e possono
    candidarsi agli annunci disponibili utilizzando 5 crediti per ogni
    candidatura.
  </p>

  <p className="leading-8 text-gray-300">
    Dopo aver terminato i crediti gratuiti, piloti e clienti possono
    acquistare nuovi crediti per continuare a utilizzare la piattaforma.
  </p>
</div>
      </section>
    </main>
  )
}