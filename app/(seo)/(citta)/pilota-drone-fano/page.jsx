import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Fano | Trova Piloti Drone a Fano | DroneGuard",
  description:
    "Cerchi un pilota drone a Fano? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneFanoPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-6 mb-10 text-gray-300 leading-8">
  <p>
    Cerchi un pilota drone a Fano per riprese video professionali,
    fotografie aeree, ispezioni tecniche, monitoraggio cantieri,
    rilievi o servizi specializzati con drone? Con DroneGuard puoi
    pubblicare gratuitamente una richiesta e ricevere candidature da
    piloti drone disponibili a Fano e provincia.
  </p>

  <p>
    I droni professionali vengono oggi utilizzati in numerosi settori,
    dal turismo all'edilizia, dal settore immobiliare agli eventi
    privati e aziendali. Grazie alle moderne tecnologie è possibile
    ottenere immagini e dati da prospettive difficilmente raggiungibili
    con strumenti tradizionali.
  </p>

  <p>
    DroneGuard è la piattaforma che mette in contatto clienti e piloti
    drone. Pubblica il tuo progetto e ricevi candidature da operatori
    interessati a svolgere il lavoro richiesto nella zona di Fano.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Riprese video e fotografie aeree a Fano
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Le riprese con drone sono particolarmente richieste per hotel,
      stabilimenti balneari, strutture ricettive, ristoranti, attività
      commerciali ed eventi organizzati sul territorio fanese.
    </p>

    <p>
      Le fotografie aeree permettono di valorizzare immobili,
      abitazioni, strutture turistiche e location affacciate sul mare
      mostrando prospettive uniche e professionali.
    </p>

    <p>
      Sempre più aziende utilizzano contenuti realizzati con drone per
      siti web, social media e campagne pubblicitarie.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Eventi, matrimoni e promozione del territorio
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      I droni vengono spesso utilizzati per immortalare matrimoni,
      eventi privati, manifestazioni sportive e iniziative culturali.
    </p>

    <p>
      Le riprese aeree consentono di raccontare un evento da una
      prospettiva coinvolgente e creare contenuti spettacolari da
      condividere online.
    </p>

    <p>
      Le immagini realizzate con drone sono inoltre molto apprezzate
      per la promozione del territorio, delle spiagge e delle attività
      turistiche della zona.
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
      Le imprese possono inoltre utilizzare i droni per documentare lo
      stato di avanzamento dei cantieri e monitorare le attività in
      corso.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Rilievi, termografia e servizi professionali
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Alcuni piloti drone offrono servizi di rilievo topografico,
      fotogrammetria, mappatura del territorio e termografia per
      aziende, professionisti e studi tecnici.
    </p>

    <p>
      Queste tecnologie permettono di raccogliere dati precisi e
      supportare attività di progettazione, controllo e monitoraggio.
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
      la piattaforma.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Trova un pilota drone a Fano
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Se hai bisogno di un pilota drone a Fano per un matrimonio,
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