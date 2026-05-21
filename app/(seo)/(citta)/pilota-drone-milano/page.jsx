import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Milano | Trova Piloti Drone a Milano | DroneGuard",
  description:
    "Cerchi un pilota drone a Milano? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneMilanoPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-6 mb-10 text-gray-300 leading-8">
  <p>
    Cerchi un pilota drone a Milano per riprese video professionali,
    fotografie aeree, ispezioni tecniche, monitoraggio cantieri,
    rilievi topografici o servizi specializzati con drone? Con
    DroneGuard puoi pubblicare gratuitamente una richiesta e ricevere
    candidature da piloti drone disponibili a Milano e provincia.
  </p>

  <p>
    Milano è il principale centro economico e finanziario italiano e
    rappresenta uno dei mercati più importanti per i servizi con drone.
    Aziende, professionisti, agenzie immobiliari, organizzatori di
    eventi e imprese utilizzano sempre più spesso i droni per ottenere
    immagini, video e dati professionali in modo rapido ed efficiente.
  </p>

  <p>
    DroneGuard mette in contatto clienti e piloti drone attraverso una
    piattaforma semplice e veloce. Pubblica il tuo progetto e ricevi
    candidature da professionisti interessati a svolgere il lavoro
    richiesto nella zona di Milano.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Riprese video e fotografie aeree a Milano
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Le riprese con drone sono particolarmente richieste per aziende,
      immobili, uffici, showroom, attività commerciali, hotel,
      strutture ricettive ed eventi organizzati nel territorio milanese.
    </p>

    <p>
      Le fotografie aeree consentono di valorizzare edifici, complessi
      immobiliari, sedi aziendali e location esclusive mostrando
      prospettive moderne e professionali.
    </p>

    <p>
      Sempre più imprese utilizzano immagini e video realizzati con
      drone per siti web, social media, campagne pubblicitarie e
      contenuti corporate.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Eventi aziendali, fiere e manifestazioni
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Milano ospita ogni anno migliaia di eventi, fiere, congressi e
      manifestazioni nazionali e internazionali.
    </p>

    <p>
      I droni vengono utilizzati per realizzare video promozionali,
      documentare eventi e creare contenuti professionali destinati a
      campagne marketing e comunicazione.
    </p>

    <p>
      Le riprese aeree permettono di valorizzare eventi aziendali,
      inaugurazioni, convention e manifestazioni pubbliche.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Immobiliare, edilizia e monitoraggio cantieri
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Agenzie immobiliari, costruttori e professionisti utilizzano i
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
      settore edilizio e immobiliare.
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
    Trova un pilota drone a Milano
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Se hai bisogno di un pilota drone a Milano per un evento
      aziendale, una ripresa promozionale, un immobile, un'ispezione
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