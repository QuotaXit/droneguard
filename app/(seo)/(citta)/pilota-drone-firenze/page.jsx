import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Firenze | Trova Piloti Drone a Firenze | DroneGuard",
  description:
    "Cerchi un pilota drone a Firenze? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneFirenzePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-6 mb-10 text-gray-300 leading-8">
  <p>
    Cerchi un pilota drone a Firenze per riprese video professionali,
    fotografie aeree, ispezioni tecniche, monitoraggio cantieri,
    rilievi topografici o servizi specializzati con drone? Con
    DroneGuard puoi pubblicare gratuitamente una richiesta e ricevere
    candidature da piloti drone disponibili a Firenze e provincia.
  </p>

  <p>
    Firenze è una delle città più conosciute al mondo per il suo
    patrimonio artistico, architettonico e culturale. I droni vengono
    utilizzati sempre più spesso per realizzare contenuti promozionali,
    valorizzare immobili, documentare eventi e supportare attività
    professionali in numerosi settori.
  </p>

  <p>
    DroneGuard mette in contatto clienti e piloti drone attraverso una
    piattaforma semplice e veloce. Pubblica il tuo progetto e ricevi
    candidature da professionisti interessati a svolgere il lavoro
    richiesto nella zona di Firenze.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Riprese video e fotografie aeree a Firenze
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Le riprese con drone sono particolarmente richieste per hotel,
      strutture ricettive, ville, immobili di pregio, aziende,
      ristoranti e attività commerciali presenti sul territorio
      fiorentino.
    </p>

    <p>
      Le fotografie aeree consentono di valorizzare edifici storici,
      proprietà private, location esclusive e paesaggi offrendo
      prospettive uniche e coinvolgenti.
    </p>

    <p>
      Sempre più aziende utilizzano immagini e video realizzati con
      drone per siti web, social media e campagne pubblicitarie.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Eventi, matrimoni e promozione turistica
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Firenze è una delle destinazioni più richieste per matrimoni,
      eventi privati e manifestazioni culturali. Le riprese aeree con
      drone consentono di raccontare questi momenti da prospettive
      spettacolari.
    </p>

    <p>
      I droni vengono utilizzati anche per la promozione di strutture
      ricettive, ville per eventi, agriturismi e attività legate al
      turismo.
    </p>

    <p>
      I contenuti realizzati dall'alto permettono di valorizzare il
      territorio e attirare nuovi clienti attraverso immagini di forte
      impatto visivo.
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
      Le imprese possono inoltre utilizzare i droni per monitorare
      l'avanzamento dei cantieri e documentare tutte le fasi dei
      lavori.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Rilievi topografici, termografia e fotogrammetria
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Alcuni piloti drone offrono servizi di rilievo topografico,
      fotogrammetria, mappatura del territorio e termografia per studi
      tecnici, aziende e professionisti.
    </p>

    <p>
      Queste tecnologie consentono di acquisire dati precisi e
      supportare attività di progettazione, monitoraggio e controllo.
    </p>

    <p>
      I droni rappresentano oggi uno strumento moderno ed efficiente
      per molteplici applicazioni professionali.
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
    Trova un pilota drone a Firenze
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Se hai bisogno di un pilota drone a Firenze per un matrimonio,
      un evento, una ripresa promozionale, un'ispezione tecnica,
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