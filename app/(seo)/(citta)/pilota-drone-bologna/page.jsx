import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Bologna | Trova Piloti Drone a Bologna | DroneGuard",
  description:
    "Cerchi un pilota drone a Bologna? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneBolognaPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone a Bologna per servizi professionali
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Se stai cercando un pilota drone a Bologna, DroneGuard ti permette di
    pubblicare una richiesta e ricevere candidature da professionisti
    interessati al tuo progetto. I droni vengono oggi utilizzati in numerosi
    settori, dalle riprese video agli eventi, fino alle ispezioni tecniche,
    ai rilievi professionali e alle attività di monitoraggio.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Grazie alla piattaforma puoi entrare in contatto con operatori drone che
    lavorano a Bologna e provincia, confrontando diverse candidature prima di
    scegliere il professionista più adatto alle tue esigenze.
  </p>

  <p className="leading-8 text-gray-300">
    Una sola richiesta può raggiungere più piloti drone disponibili,
    semplificando la ricerca e riducendo i tempi necessari per trovare il
    servizio desiderato.
  </p>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Riprese aeree
    </h2>

    <p className="text-gray-300">
      Video e fotografie professionali per eventi, immobili, aziende e
      attività commerciali.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Servizi tecnici
    </h2>

    <p className="text-gray-300">
      Ispezioni, termografia, monitoraggio cantieri e controlli di edifici.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Rilievi professionali
    </h2>

    <p className="text-gray-300">
      Fotogrammetria, mappature e rilievi topografici con drone.
    </p>
  </div>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Settori che utilizzano i droni
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I servizi con drone sono richiesti da aziende, studi tecnici, imprese
      edili, agenzie immobiliari, strutture ricettive, enti pubblici,
      organizzatori di eventi e professionisti che necessitano di immagini o
      dati acquisiti dall'alto.
    </p>

    <p className="leading-8 text-gray-300">
      La tecnologia drone permette di operare in modo rapido ed efficiente,
      offrendo soluzioni adatte sia a progetti creativi che ad attività
      tecniche e professionali.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Attività più richieste
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Video promozionali</li>
      <li>✅ Fotografie aeree</li>
      <li>✅ Eventi e matrimoni</li>
      <li>✅ Immobili e strutture commerciali</li>
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Rilievi topografici</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Come funziona DroneGuard
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Dopo la registrazione, i clienti ricevono 10 crediti gratuiti e possono
    pubblicare una richiesta utilizzando 5 crediti. All'interno dell'annuncio
    è possibile descrivere il lavoro, la località e qualsiasi informazione
    utile ai piloti drone interessati.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I piloti drone ricevono invece 50 crediti gratuiti e possono candidarsi
    agli annunci utilizzando 5 crediti per ogni candidatura inviata.
  </p>

  <p className="leading-8 text-gray-300">
    Dopo aver esaurito i crediti gratuiti, clienti e piloti possono
    acquistare nuovi pacchetti crediti per continuare a utilizzare la
    piattaforma.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-8 text-3xl font-bold">
    Domande frequenti
  </h2>

  <div className="space-y-5">
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Come trovare un pilota drone a Bologna?
      </h3>
      <p className="text-gray-300">
        Registrati su DroneGuard, pubblica la tua richiesta e attendi le
        candidature dei piloti interessati.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Posso ricevere più candidature?
      </h3>
      <p className="text-gray-300">
        Sì, più piloti possono candidarsi allo stesso annuncio permettendoti
        di confrontare diverse proposte.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Quali servizi posso richiedere?
      </h3>
      <p className="text-gray-300">
        Riprese video, fotografie aeree, eventi, immobili, termografia,
        monitoraggio cantieri, ispezioni tecniche e rilievi professionali.
      </p>
    </div>
  </div>
</div>
      </section>
    </main>
  )
}