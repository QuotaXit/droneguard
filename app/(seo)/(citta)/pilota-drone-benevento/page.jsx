import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Benevento | Trova Piloti Drone a Benevento | DroneGuard",
  description:
    "Cerchi un pilota drone a Benevento? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneBeneventoPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone a Benevento per ogni esigenza
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Che tu abbia bisogno di riprese video professionali, fotografie aeree,
    ispezioni tecniche o servizi specializzati con drone, DroneGuard ti
    permette di entrare in contatto con piloti drone disponibili a Benevento
    e provincia. La piattaforma è progettata per semplificare la ricerca di
    professionisti qualificati per lavori di ogni tipo.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Attraverso una semplice richiesta puoi raggiungere più operatori drone
    interessati al progetto e valutare le diverse candidature ricevute.
  </p>

  <p className="leading-8 text-gray-300">
    Questo sistema consente di risparmiare tempo e trovare più facilmente il
    professionista più adatto alle caratteristiche del lavoro richiesto.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Applicazioni professionali dei droni
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I droni vengono utilizzati in numerosi settori grazie alla loro
      versatilità. Possono essere impiegati per realizzare contenuti
      promozionali, documentare eventi, effettuare controlli tecnici o
      supportare attività professionali che richiedono una visione dall'alto.
    </p>

    <p className="leading-8 text-gray-300">
      Sempre più aziende e professionisti utilizzano questa tecnologia per
      ottenere immagini, video e dati in modo rapido ed efficace.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi più richiesti
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese video aeree</li>
      <li>✅ Fotografie professionali</li>
      <li>✅ Matrimoni ed eventi</li>
      <li>✅ Immobili e strutture ricettive</li>
      <li>✅ Ispezioni di edifici e impianti</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Agricoltura e rilievi tecnici</li>
    </ul>
  </div>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Crea un account
    </h2>

    <p className="text-gray-300">
      Registrati gratuitamente e accedi alla piattaforma.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Pubblica il lavoro
    </h2>

    <p className="text-gray-300">
      Descrivi il servizio richiesto e specifica la località.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Ricevi candidature
    </h2>

    <p className="text-gray-300">
      I piloti interessati possono candidarsi direttamente all'annuncio.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Sistema crediti DroneGuard
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione.
    Per pubblicare un lavoro vengono utilizzati 5 crediti.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I piloti drone ricevono invece 50 crediti gratuiti e possono candidarsi
    agli annunci spendendo 5 crediti per ogni candidatura inviata.
  </p>

  <p className="leading-8 text-gray-300">
    Una volta terminati i crediti gratuiti, è possibile acquistare nuovi
    pacchetti crediti per continuare a utilizzare la piattaforma.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Piloti drone disponibili a Benevento
  </h2>

  <p className="leading-8 text-gray-300">
    Pubblica gratuitamente la tua richiesta su DroneGuard e ricevi
    candidature da piloti drone disponibili a Benevento per riprese aeree,
    eventi, immobili, ispezioni tecniche, termografia, monitoraggio cantieri
    e servizi professionali con drone.
  </p>
</div>
      </section>
    </main>
  )
}