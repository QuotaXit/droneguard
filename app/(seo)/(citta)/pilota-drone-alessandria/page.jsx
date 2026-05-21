import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Alessandria | Trova Piloti Drone a Alessandria | DroneGuard",
  description:
    "Cerchi un pilota drone a Alessandria? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneAlessandriaPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova operatori drone ad Alessandria e provincia
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I piloti drone possono supportare privati, aziende e professionisti in
    numerose attività. Dalle riprese video agli eventi, fino a ispezioni
    tecniche, monitoraggio cantieri, immobili, agricoltura e servizi
    professionali, il drone rappresenta oggi uno strumento utilizzato in
    molti settori.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Attraverso DroneGuard puoi pubblicare una richiesta specificando il tipo
    di lavoro richiesto, la località e le informazioni principali del
    progetto. I piloti interessati possono candidarsi direttamente tramite la
    piattaforma.
  </p>

  <p className="leading-8 text-gray-300">
    In questo modo puoi ricevere più candidature e confrontare diversi
    professionisti disponibili nella zona di Alessandria senza dover
    effettuare lunghe ricerche online.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Servizi drone disponibili ad Alessandria
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I piloti drone possono offrire servizi dedicati a privati, imprese,
      agenzie immobiliari, studi tecnici, aziende agricole e organizzatori
      di eventi.
    </p>

    <p className="leading-8 text-gray-300">
      Ogni progetto può richiedere competenze differenti, dalla produzione di
      video promozionali fino a rilievi tecnici e controlli professionali.
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
      <li>✅ Immobili e strutture commerciali</li>
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Agricoltura e rilievi topografici</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Come funziona DroneGuard
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard mette in contatto clienti e piloti drone. Dopo la
    registrazione, i clienti ricevono 10 crediti gratuiti e possono
    pubblicare una richiesta utilizzando 5 crediti.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I piloti drone ricevono 50 crediti gratuiti e possono candidarsi ai
    lavori disponibili utilizzando 5 crediti per ogni candidatura.
  </p>

  <p className="leading-8 text-gray-300">
    Dopo aver esaurito i crediti gratuiti, è possibile acquistare nuovi
    pacchetti crediti per continuare a utilizzare la piattaforma.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-8 text-3xl font-bold">
    Domande frequenti
  </h2>

  <div className="space-y-5">
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Come posso trovare un pilota drone ad Alessandria?
      </h3>
      <p className="text-gray-300">
        Registrati su DroneGuard, pubblica il tuo lavoro e attendi le
        candidature dei piloti interessati.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Posso ricevere più candidature?
      </h3>
      <p className="text-gray-300">
        Sì, più piloti possono candidarsi alla tua richiesta permettendoti di
        confrontare diverse proposte.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Quali servizi possono offrire i piloti drone?
      </h3>
      <p className="text-gray-300">
        Riprese aeree, eventi, matrimoni, immobili, ispezioni, termografia,
        monitoraggio cantieri, agricoltura e rilievi professionali.
      </p>
    </div>
  </div>
</div>
      </section>
    </main>
  )
}