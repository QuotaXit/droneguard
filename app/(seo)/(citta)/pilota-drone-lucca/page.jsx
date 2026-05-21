import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Lucca | Trova Piloti Drone a Lucca | DroneGuard",
  description:
    "Cerchi un pilota drone a Lucca? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneLuccaPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-6 mb-10 text-gray-300 leading-8">
  <p>
    Cerchi un pilota drone a Lucca per riprese video professionali,
    fotografie aeree, ispezioni tecniche, monitoraggio cantieri,
    rilievi topografici o servizi specializzati con drone? Con
    DroneGuard puoi pubblicare gratuitamente una richiesta e ricevere
    candidature da piloti drone disponibili a Lucca e provincia.
  </p>

  <p>
    Lucca è una delle città più affascinanti della Toscana, conosciuta
    per il suo centro storico, le mura rinascimentali, le ville
    storiche e il forte richiamo turistico. I droni vengono oggi
    utilizzati per valorizzare il territorio attraverso immagini,
    video e rilievi professionali destinati ad aziende, privati e
    professionisti.
  </p>

  <p>
    DroneGuard mette in contatto clienti e piloti drone attraverso una
    piattaforma semplice e veloce. Pubblica il tuo progetto e ricevi
    candidature da professionisti interessati a svolgere il lavoro
    richiesto nella zona di Lucca.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Riprese video e fotografie aeree a Lucca
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Le riprese con drone sono particolarmente richieste per hotel,
      agriturismi, ville storiche, immobili, strutture ricettive,
      attività commerciali ed eventi organizzati sul territorio.
    </p>

    <p>
      Le fotografie aeree consentono di valorizzare edifici, proprietà
      private, ville, aziende agricole e location esclusive mostrando
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
    Turismo, ville storiche e promozione del territorio
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Lucca rappresenta una delle principali destinazioni turistiche
      della Toscana. I droni vengono utilizzati per promuovere hotel,
      agriturismi, ville storiche, strutture ricettive e attività
      commerciali attraverso contenuti professionali.
    </p>

    <p>
      Le immagini aeree consentono di valorizzare il centro storico,
      le mura cittadine, le colline lucchesi e le bellezze del
      territorio circostante.
    </p>

    <p>
      Sempre più attività turistiche utilizzano riprese con drone per
      distinguersi online e attrarre nuovi clienti.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Eventi, matrimoni e location esclusive
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Le ville storiche e le location presenti nel territorio lucchese
      ospitano ogni anno numerosi matrimoni, eventi privati e
      manifestazioni aziendali.
    </p>

    <p>
      Le riprese aeree consentono di immortalare questi momenti da
      prospettive uniche e realizzare contenuti emozionali di alta
      qualità.
    </p>

    <p>
      I video realizzati con drone sono sempre più richiesti per
      valorizzare eventi, cerimonie e strutture dedicate.
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
    Trova un pilota drone a Lucca
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Se hai bisogno di un pilota drone a Lucca per un matrimonio,
      un evento, una villa storica, una struttura ricettiva, una
      ripresa promozionale, un'ispezione tecnica o qualsiasi altro
      servizio con drone, DroneGuard ti permette di pubblicare
      gratuitamente la tua richiesta.
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