import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Crotone | Trova Piloti Drone a Crotone | DroneGuard",
  description:
    "Cerchi un pilota drone a Crotone? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneCrotonePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-6 mb-10 text-gray-300 leading-8">
  <p>
    Cerchi un pilota drone a Crotone per realizzare riprese video,
    fotografie aeree, ispezioni tecniche, monitoraggio cantieri,
    rilievi professionali o contenuti promozionali? Con DroneGuard puoi
    pubblicare gratuitamente una richiesta e ricevere candidature da
    piloti drone disponibili a Crotone e provincia.
  </p>

  <p>
    I droni professionali vengono utilizzati in numerosi settori grazie
    alla capacità di acquisire immagini e dati da prospettive
    difficilmente raggiungibili con strumenti tradizionali. A Crotone i
    servizi con drone sono richiesti da aziende, professionisti,
    strutture turistiche, attività commerciali e privati.
  </p>

  <p>
    DroneGuard semplifica l'incontro tra clienti e piloti drone.
    Pubblica il tuo progetto, indica la località e ricevi candidature
    da operatori interessati a svolgere il lavoro richiesto nella zona
    di Crotone.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Riprese video e fotografie aeree a Crotone
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Le riprese con drone vengono utilizzate per promuovere hotel,
      villaggi turistici, stabilimenti balneari, attività commerciali,
      immobili ed eventi organizzati sul territorio.
    </p>

    <p>
      Le immagini aeree consentono di valorizzare paesaggi costieri,
      edifici, strutture ricettive e luoghi di interesse mostrando
      prospettive uniche e coinvolgenti.
    </p>

    <p>
      Sempre più aziende utilizzano contenuti realizzati con drone per
      siti web, social media e campagne pubblicitarie professionali.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Ispezioni tecniche e monitoraggio cantieri
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      I droni consentono di effettuare controlli su tetti, facciate,
      coperture industriali, impianti fotovoltaici e infrastrutture
      difficili da raggiungere.
    </p>

    <p>
      Grazie alle immagini ad alta definizione è possibile raccogliere
      informazioni utili per manutenzioni, verifiche e controlli
      tecnici riducendo tempi e costi operativi.
    </p>

    <p>
      Il monitoraggio dei cantieri tramite drone permette inoltre di
      documentare l'avanzamento dei lavori e creare report fotografici
      periodici.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Agricoltura di precisione e rilievi professionali
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      I droni vengono sempre più utilizzati nel settore agricolo per il
      monitoraggio delle colture e la raccolta di dati utili alla
      gestione dei terreni.
    </p>

    <p>
      Alcuni piloti drone offrono servizi di fotogrammetria, rilievi
      topografici, mappatura del territorio e termografia per aziende,
      professionisti e studi tecnici.
    </p>

    <p>
      Queste tecnologie consentono di ottenere informazioni precise e
      dettagliate in modo rapido ed efficiente.
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
    Trova un pilota drone a Crotone
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Se hai bisogno di un pilota drone a Crotone per un evento,
      un matrimonio, una promozione turistica, un'ispezione tecnica,
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