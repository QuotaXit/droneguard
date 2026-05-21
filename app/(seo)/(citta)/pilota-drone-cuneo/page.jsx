import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Cuneo | Trova Piloti Drone a Cuneo | DroneGuard",
  description:
    "Cerchi un pilota drone a Cuneo? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneCuneoPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-6 mb-10 text-gray-300 leading-8">
  <p>
    Cerchi un pilota drone a Cuneo per riprese video professionali,
    fotografie aeree, ispezioni tecniche, monitoraggio cantieri,
    rilievi topografici o servizi specializzati con drone? Con
    DroneGuard puoi pubblicare gratuitamente una richiesta e ricevere
    candidature da piloti drone disponibili a Cuneo e provincia.
  </p>

  <p>
    I droni professionali vengono utilizzati in numerosi settori,
    dall'agricoltura all'edilizia, dal turismo alle attività
    industriali. Grazie alle moderne tecnologie è possibile acquisire
    immagini, video e dati da prospettive difficilmente raggiungibili
    con strumenti tradizionali.
  </p>

  <p>
    DroneGuard mette in contatto clienti e piloti drone attraverso una
    piattaforma semplice e veloce. Pubblica il tuo progetto e ricevi
    candidature da professionisti interessati a svolgere il lavoro
    richiesto nella zona di Cuneo.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Riprese video e fotografie aeree a Cuneo
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Le riprese con drone sono particolarmente richieste per attività
      commerciali, strutture turistiche, agriturismi, aziende agricole,
      eventi, immobili e iniziative promozionali.
    </p>

    <p>
      Le fotografie aeree consentono di valorizzare edifici, terreni,
      paesaggi montani e proprietà private mostrando prospettive
      coinvolgenti e professionali.
    </p>

    <p>
      Sempre più aziende utilizzano contenuti realizzati con drone per
      siti web, social media e campagne pubblicitarie.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Agricoltura di precisione e monitoraggio terreni
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Il territorio cuneese presenta una forte presenza di aziende
      agricole, vigneti e coltivazioni che possono beneficiare delle
      tecnologie drone.
    </p>

    <p>
      I droni permettono di monitorare colture, individuare anomalie e
      raccogliere informazioni utili per una gestione più efficiente
      dei terreni agricoli.
    </p>

    <p>
      Alcuni operatori offrono inoltre servizi di mappatura,
      fotogrammetria e rilievi professionali per aziende e
      professionisti del settore.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Ispezioni tecniche e monitoraggio cantieri
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      I droni vengono utilizzati per controllare tetti, facciate,
      coperture industriali, impianti fotovoltaici e strutture
      difficili da raggiungere.
    </p>

    <p>
      Grazie alle immagini ad alta definizione è possibile effettuare
      verifiche rapide e raccogliere informazioni utili riducendo tempi
      e costi rispetto ai metodi tradizionali.
    </p>

    <p>
      Le imprese possono inoltre utilizzare i droni per monitorare lo
      stato di avanzamento dei cantieri e documentare tutte le fasi dei
      lavori.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Rilievi topografici e termografia
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      I rilievi con drone rappresentano una soluzione moderna per
      acquisire dati territoriali e supportare attività di
      progettazione e pianificazione.
    </p>

    <p>
      Alcuni piloti drone offrono servizi di termografia,
      fotogrammetria, rilievi topografici e monitoraggio del territorio
      per aziende, studi tecnici e professionisti.
    </p>

    <p>
      Queste tecnologie permettono di ottenere informazioni precise e
      dettagliate in tempi ridotti.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Come funziona DroneGuard
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      La registrazione è gratuita. Dopo la conferma dell'indirizzo
      email, i clienti ricevono 10 crediti gratuiti mentre i piloti
      drone ricevono 50 crediti gratuiti.
    </p>

    <p>
      Per pubblicare una richiesta vengono utilizzati 5 crediti. I
      piloti interessati possono candidarsi agli annunci spendendo
      5 crediti per ogni candidatura inviata.
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
    Trova un pilota drone a Cuneo
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Se hai bisogno di un pilota drone a Cuneo per un evento,
      un matrimonio, una ripresa promozionale, un'ispezione tecnica,
      un rilievo professionale o qualsiasi altro servizio con drone,
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