import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Pisa | Trova Piloti Drone a Pisa | DroneGuard",
  description:
    "Cerchi un pilota drone a Pisa? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDronePisaPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-6 mb-10 text-gray-300 leading-8">
  <p>
    Cerchi un pilota drone a Pisa per riprese video professionali,
    fotografie aeree, ispezioni tecniche, monitoraggio cantieri,
    rilievi topografici o servizi specializzati con drone? Con
    DroneGuard puoi pubblicare gratuitamente una richiesta e ricevere
    candidature da piloti drone disponibili a Pisa e provincia.
  </p>

  <p>
    Pisa è una delle città più conosciute al mondo grazie al suo
    patrimonio storico, culturale e universitario. Oltre al turismo,
    il territorio pisano ospita attività commerciali, aziende,
    professionisti e realtà operanti nei settori dell'edilizia,
    dell'immobiliare e dei servizi. I droni vengono utilizzati sempre
    più spesso per realizzare immagini, video e rilievi professionali
    destinati a numerosi ambiti operativi.
  </p>

  <p>
    DroneGuard mette in contatto clienti e piloti drone attraverso una
    piattaforma semplice e veloce. Pubblica il tuo progetto e ricevi
    candidature da professionisti interessati a svolgere il lavoro
    richiesto nella zona di Pisa.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Riprese video e fotografie aeree a Pisa
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Le riprese con drone sono particolarmente richieste per aziende,
      immobili, hotel, attività commerciali, eventi e iniziative
      promozionali organizzate sul territorio pisano.
    </p>

    <p>
      Le fotografie aeree consentono di valorizzare edifici storici,
      proprietà private, strutture ricettive e complessi immobiliari
      mostrando prospettive professionali e coinvolgenti.
    </p>

    <p>
      Sempre più imprese utilizzano immagini e video realizzati con
      drone per siti web, social media e campagne pubblicitarie.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Turismo e promozione del territorio
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Pisa attira ogni anno milioni di visitatori provenienti da tutto
      il mondo grazie alla celebre Torre di Pisa, alla Piazza dei
      Miracoli e alle numerose attrazioni storiche presenti sul
      territorio.
    </p>

    <p>
      I droni vengono utilizzati per promuovere hotel, bed and
      breakfast, agriturismi, strutture ricettive e attività turistiche
      attraverso contenuti professionali ad alto impatto visivo.
    </p>

    <p>
      Le immagini aeree consentono di valorizzare il patrimonio
      culturale, il centro storico e le bellezze naturali della
      provincia pisana.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Università, ricerca e innovazione
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Pisa è uno dei principali poli universitari e scientifici
      italiani. La presenza di università, centri di ricerca e aziende
      innovative rende il territorio particolarmente dinamico anche dal
      punto di vista tecnologico.
    </p>

    <p>
      Le tecnologie drone trovano applicazione in numerosi settori,
      contribuendo allo sviluppo di nuove soluzioni per il monitoraggio
      del territorio, la raccolta dati e la documentazione tecnica.
    </p>

    <p>
      Sempre più professionisti e imprese utilizzano i droni come
      strumento innovativo per migliorare efficienza e produttività.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Immobiliare, edilizia e monitoraggio cantieri
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Agenzie immobiliari, imprese edili e professionisti utilizzano i
      droni per valorizzare immobili, monitorare cantieri e documentare
      lo stato di avanzamento dei lavori.
    </p>

    <p>
      Grazie alle immagini ad alta definizione è possibile ottenere una
      visione completa delle strutture e raccogliere informazioni utili
      per attività tecniche e commerciali.
    </p>

    <p>
      I droni rappresentano oggi uno strumento fondamentale per il
      settore immobiliare e delle costruzioni.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Ispezioni tecniche, termografia e rilievi professionali
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      I droni consentono di effettuare controlli su tetti, facciate,
      impianti fotovoltaici, coperture industriali e infrastrutture
      difficili da raggiungere.
    </p>

    <p>
      Alcuni piloti drone offrono servizi di termografia,
      fotogrammetria, rilievi topografici e mappatura del territorio
      per aziende, studi tecnici e professionisti.
    </p>

    <p>
      Queste tecnologie consentono di acquisire dati precisi e ridurre
      tempi e costi rispetto ai metodi tradizionali.
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
    Trova un pilota drone a Pisa
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Se hai bisogno di un pilota drone a Pisa per una ripresa
      aziendale, una struttura turistica, un immobile, un'ispezione
      tecnica, un rilievo professionale o qualsiasi altro servizio con
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