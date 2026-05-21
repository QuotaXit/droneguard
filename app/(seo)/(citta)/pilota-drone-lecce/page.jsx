import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Lecce | Trova Piloti Drone a Lecce | DroneGuard",
  description:
    "Cerchi un pilota drone a Lecce? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneLeccePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-6 mb-10 text-gray-300 leading-8">
  <p>
    Cerchi un pilota drone a Lecce per riprese video professionali,
    fotografie aeree, ispezioni tecniche, monitoraggio cantieri,
    rilievi topografici o servizi specializzati con drone? Con
    DroneGuard puoi pubblicare gratuitamente una richiesta e ricevere
    candidature da piloti drone disponibili a Lecce e provincia.
  </p>

  <p>
    Lecce è una delle città più conosciute del Salento e rappresenta
    un importante punto di riferimento per il turismo, il settore
    immobiliare, gli eventi e le attività commerciali. I droni vengono
    sempre più utilizzati per valorizzare il territorio attraverso
    immagini e video professionali di grande impatto visivo.
  </p>

  <p>
    DroneGuard mette in contatto clienti e piloti drone attraverso una
    piattaforma semplice e veloce. Pubblica il tuo progetto e ricevi
    candidature da professionisti interessati a svolgere il lavoro
    richiesto nella zona di Lecce.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Riprese video e fotografie aeree a Lecce
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Le riprese con drone sono particolarmente richieste per hotel,
      masserie, resort, strutture ricettive, immobili, attività
      commerciali e iniziative promozionali presenti sul territorio.
    </p>

    <p>
      Le fotografie aeree consentono di valorizzare edifici storici,
      ville, proprietà private e location esclusive mostrando
      prospettive spettacolari e professionali.
    </p>

    <p>
      Sempre più aziende utilizzano immagini e video realizzati con
      drone per siti web, social media e campagne pubblicitarie.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Turismo, Salento e promozione del territorio
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Il Salento è una delle destinazioni turistiche più richieste
      d'Italia e le riprese aeree rappresentano uno strumento ideale
      per promuovere strutture ricettive, attività commerciali e
      località di interesse.
    </p>

    <p>
      I droni consentono di valorizzare spiagge, centri storici,
      masserie, resort e luoghi caratteristici attraverso contenuti
      professionali ad alto impatto visivo.
    </p>

    <p>
      Hotel, residence e attività turistiche utilizzano sempre più
      spesso riprese con drone per promuovere i propri servizi online.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Matrimoni ed eventi nel Salento
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Lecce e il Salento rappresentano una delle mete più richieste per
      matrimoni, cerimonie ed eventi privati. Le riprese aeree con
      drone permettono di immortalare questi momenti da prospettive
      spettacolari.
    </p>

    <p>
      I video realizzati dall'alto consentono di raccontare eventi e
      cerimonie in modo emozionante e professionale.
    </p>

    <p>
      Sempre più organizzatori scelgono contenuti realizzati con drone
      per valorizzare eventi, location e strutture dedicate.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Ispezioni tecniche e monitoraggio cantieri
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      I droni consentono di effettuare controlli visivi su tetti,
      facciate, coperture industriali, impianti fotovoltaici e altre
      strutture difficili da raggiungere.
    </p>

    <p>
      Grazie alle immagini ad alta definizione è possibile raccogliere
      informazioni dettagliate riducendo tempi e costi rispetto ai
      metodi tradizionali.
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
    Trova un pilota drone a Lecce
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Se hai bisogno di un pilota drone a Lecce per un matrimonio,
      un evento, una struttura turistica, una masseria, una ripresa
      promozionale, un'ispezione tecnica o qualsiasi altro servizio con
      drone, DroneGuard ti permette di pubblicare gratuitamente la tua
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