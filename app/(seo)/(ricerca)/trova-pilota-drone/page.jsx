import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Trova un pilota drone vicino a te | DroneGuard",
  description:
    "Trova piloti drone nella tua zona per riprese aeree, eventi, ispezioni, immobili, termografia, edilizia e servizi professionali."
}

export default function TrovaPilotaDronePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova piloti drone nella tua zona
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Se hai bisogno di un pilota drone per un lavoro professionale, trovare
    un operatore vicino alla tua area può rendere più semplice e veloce
    l'organizzazione del servizio. Attraverso DroneGuard puoi pubblicare una
    richiesta e raggiungere piloti drone registrati interessati a lavorare
    nella tua zona.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    La piattaforma è utilizzata da privati, aziende, studi tecnici,
    organizzatori di eventi e professionisti che cercano operatori drone per
    attività di ripresa, fotografia aerea, ispezione, monitoraggio,
    termografia e rilievo.
  </p>

  <p className="leading-8 text-gray-300">
    Invece di contattare singolarmente diversi professionisti, puoi
    pubblicare una sola richiesta e ricevere candidature da piloti drone
    interessati al progetto.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Per quali servizi puoi cercare un pilota drone
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I piloti drone possono operare in numerosi settori e offrire servizi
      dedicati a clienti privati, aziende e professionisti.
    </p>

    <p className="leading-8 text-gray-300">
      Attraverso DroneGuard puoi trovare operatori disponibili per lavori
      creativi, attività tecniche, documentazione professionale e servizi
      specializzati con drone.
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
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Rilievi topografici</li>
      <li>✅ Servizi per immobili</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Un'unica richiesta, più candidature
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard è una piattaforma che mette in contatto clienti e piloti
    drone. Dopo aver pubblicato il tuo annuncio, i professionisti
    interessati possono candidarsi e mostrarti la propria disponibilità.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Questo sistema consente di confrontare più candidature senza dover
    effettuare lunghe ricerche online o contattare numerosi operatori uno
    alla volta.
  </p>

  <p className="leading-8 text-gray-300">
    Potrai valutare esperienza, attrezzatura, servizi offerti e altri
    dettagli utili per scegliere il pilota drone più adatto alle tue
    esigenze.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Piloti drone per privati e aziende
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Le richieste pubblicate su DroneGuard possono riguardare attività molto
    diverse tra loro. Alcuni utenti cercano un pilota drone per realizzare
    fotografie o video di un evento, mentre altri necessitano di servizi più
    tecnici come ispezioni, monitoraggi, termografia o rilievi.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Anche aziende, imprese edili, agenzie immobiliari, strutture ricettive e
    professionisti utilizzano frequentemente il drone per ottenere immagini,
    dati e documentazione utili alle proprie attività.
  </p>

  <p className="leading-8 text-gray-300">
    Grazie alla varietà di profili presenti sulla piattaforma è possibile
    trovare operatori con competenze differenti e specializzati in numerosi
    ambiti professionali.
  </p>
</div>
      </section>
    </main>
  )
}