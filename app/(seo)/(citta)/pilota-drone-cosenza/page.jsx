import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Cosenza | Trova Piloti Drone a Cosenza | DroneGuard",
  description:
    "Cerchi un pilota drone a Cosenza? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneCosenzaPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-6 mb-10 text-gray-300 leading-8">
  <p>
    Cerchi un pilota drone a Cosenza per fotografie aeree, riprese video,
    monitoraggio cantieri, rilievi professionali, ispezioni tecniche o
    servizi specializzati con drone? Con DroneGuard puoi pubblicare una
    richiesta gratuitamente e ricevere candidature da piloti drone
    disponibili a Cosenza e provincia.
  </p>

  <p>
    I droni professionali vengono oggi utilizzati in numerosi settori,
    dall'edilizia all'agricoltura, passando per il turismo, il settore
    immobiliare e le attività industriali. Grazie alle moderne tecnologie
    è possibile acquisire immagini e dati da prospettive difficilmente
    raggiungibili con metodi tradizionali.
  </p>

  <p>
    DroneGuard mette in contatto clienti e piloti drone attraverso una
    piattaforma semplice e veloce. Pubblica il tuo progetto, descrivi il
    servizio richiesto e ricevi candidature da professionisti interessati
    a svolgere il lavoro nella zona di Cosenza.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Riprese video e fotografie aeree a Cosenza
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Le riprese con drone sono particolarmente richieste per promuovere
      attività commerciali, strutture ricettive, immobili, agriturismi,
      eventi e iniziative turistiche presenti sul territorio cosentino.
    </p>

    <p>
      Le immagini aeree consentono di valorizzare paesaggi, edifici,
      proprietà e luoghi di interesse offrendo una prospettiva moderna e
      coinvolgente.
    </p>

    <p>
      Sempre più aziende utilizzano video e fotografie realizzate con
      drone per siti web, social media e campagne pubblicitarie.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Servizi drone per edilizia e ispezioni
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      I droni vengono impiegati per controllare tetti, facciate,
      coperture industriali, impianti fotovoltaici e infrastrutture
      difficili da raggiungere.
    </p>

    <p>
      Grazie alle immagini ad alta definizione è possibile effettuare
      verifiche visive rapide e raccogliere informazioni utili per
      interventi di manutenzione e controllo.
    </p>

    <p>
      Le imprese possono inoltre utilizzare i droni per monitorare lo
      stato di avanzamento dei cantieri e documentare ogni fase dei
      lavori.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Agricoltura di precisione e rilievi professionali
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      L'agricoltura rappresenta uno dei settori in maggiore crescita per
      l'utilizzo dei droni. Attraverso immagini e rilevazioni dall'alto
      è possibile monitorare colture e terreni in modo efficiente.
    </p>

    <p>
      Alcuni operatori offrono inoltre servizi di rilievo topografico,
      fotogrammetria, mappatura e termografia per aziende,
      professionisti e studi tecnici.
    </p>

    <p>
      Queste tecnologie consentono di raccogliere dati precisi e
      supportare attività di progettazione, controllo e monitoraggio.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Come funziona DroneGuard
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Registrarsi su DroneGuard è gratuito. Dopo la conferma dell'email,
      i clienti ricevono 10 crediti gratuiti mentre i piloti drone
      ricevono 50 crediti gratuiti.
    </p>

    <p>
      Per pubblicare una richiesta vengono utilizzati 5 crediti. I
      piloti interessati possono candidarsi agli annunci spendendo 5
      crediti per ogni candidatura inviata.
    </p>

    <p>
      Questo sistema favorisce candidature realmente interessate e
      migliora la qualità dei contatti tra clienti e professionisti.
    </p>

    <p>
      Una volta terminati i crediti gratuiti iniziali è possibile
      acquistare ulteriori pacchetti crediti per continuare a utilizzare
      tutte le funzionalità della piattaforma.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Trova un pilota drone a Cosenza
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Se hai bisogno di un pilota drone a Cosenza per un evento, un
      matrimonio, un rilievo professionale, un'ispezione tecnica, una
      ripresa promozionale o qualsiasi altro servizio con drone,
      DroneGuard ti permette di pubblicare gratuitamente la tua
      richiesta.
    </p>

    <p>
      Ricevi candidature da piloti drone interessati e trova il
      professionista più adatto alle esigenze del tuo progetto in modo
      semplice, veloce e trasparente.
    </p>
  </div>
</div>
      </section>
    </main>
  )
}