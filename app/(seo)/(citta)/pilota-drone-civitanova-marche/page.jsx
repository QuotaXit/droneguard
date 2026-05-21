import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Civitanova Marche | Trova Piloti Drone a Civitanova Marche | DroneGuard",
  description:
    "Cerchi un pilota drone a Civitanova Marche? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneCivitanovaMarchePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
  Pilota Drone Civitanova Marche
</h1>

<p className="text-gray-300 text-lg leading-8 mb-8">
  Cerchi un pilota drone a Civitanova Marche per riprese video professionali,
  fotografie aeree, eventi, matrimoni, ispezioni tecniche, monitoraggio
  cantieri, rilievi o servizi specializzati con drone? Con DroneGuard puoi
  pubblicare gratuitamente una richiesta e ricevere candidature da piloti
  drone disponibili a Civitanova Marche e nelle zone limitrofe.
</p>

<div className="grid gap-6 md:grid-cols-2 mb-10">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="text-xl font-semibold mb-3">
      Servizi disponibili
    </h2>

    <p className="text-gray-300 leading-7">
      Riprese video professionali, fotografie aeree, eventi, matrimoni,
      edilizia, immobili, agricoltura di precisione, termografia,
      monitoraggio cantieri, rilievi topografici e ispezioni tecniche con drone.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="text-xl font-semibold mb-3">
      Come funziona
    </h2>

    <p className="text-gray-300 leading-7">
      Pubblica il tuo lavoro, descrivi il servizio richiesto e attendi
      le candidature dei piloti drone disponibili nella zona di
      Civitanova Marche.
    </p>
  </div>
</div>

<div className="space-y-6 mb-10 text-gray-300 leading-8">
  <p>
    Sempre più aziende e privati scelgono i servizi con drone per
    ottenere immagini, video e dati da prospettive difficili da
    raggiungere con mezzi tradizionali. A Civitanova Marche i droni
    vengono utilizzati per attività promozionali, controlli tecnici,
    monitoraggio di cantieri, rilievi professionali e documentazione
    fotografica ad alta definizione.
  </p>

  <p>
    DroneGuard è la piattaforma che mette in contatto clienti e piloti
    drone. Se hai bisogno di un professionista per un lavoro a
    Civitanova Marche puoi pubblicare una richiesta dettagliata e
    ricevere candidature da operatori interessati a svolgere il servizio.
  </p>

  <p>
    Grazie alla semplicità della piattaforma puoi descrivere il tuo
    progetto, indicare la località e attendere le candidature dei piloti
    drone disponibili nella tua zona.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Riprese video e fotografie aeree
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Le riprese aeree realizzate con drone sono molto richieste per la
      promozione di attività commerciali, strutture turistiche,
      immobili, stabilimenti balneari, eventi sportivi e manifestazioni.
    </p>

    <p>
      Le immagini dall'alto permettono di valorizzare luoghi, edifici e
      paesaggi offrendo una prospettiva coinvolgente e professionale.
    </p>

    <p>
      Sempre più aziende utilizzano contenuti realizzati con drone per
      siti web, social media, campagne pubblicitarie e materiale
      promozionale.
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
      Grazie alle immagini ad alta risoluzione è possibile individuare
      anomalie e raccogliere informazioni utili senza ricorrere a
      ponteggi o piattaforme elevatrici.
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
    Agricoltura, rilievi e termografia
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Le tecnologie drone vengono impiegate anche nel settore agricolo
      per il monitoraggio delle colture e la raccolta di dati utili alla
      gestione dei terreni.
    </p>

    <p>
      Alcuni piloti drone offrono inoltre servizi di rilievo
      topografico, fotogrammetria, mappatura e termografia per aziende,
      professionisti e studi tecnici.
    </p>

    <p>
      Questi strumenti consentono di ottenere informazioni dettagliate
      in modo rapido ed efficiente per molteplici applicazioni
      professionali.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Come funziona DroneGuard
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      La registrazione è gratuita. Dopo la conferma dell'email, i
      clienti ricevono 10 crediti gratuiti mentre i piloti drone
      ricevono 50 crediti gratuiti.
    </p>

    <p>
      Pubblicare una richiesta di lavoro richiede 5 crediti. I piloti
      interessati possono candidarsi agli annunci utilizzando 5 crediti
      per ogni candidatura inviata.
    </p>

    <p>
      Questo sistema aiuta a favorire candidature realmente interessate,
      migliorando la qualità dei contatti tra clienti e professionisti.
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
    Trova un pilota drone a Civitanova Marche
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Se hai bisogno di un pilota drone a Civitanova Marche per riprese
      video, fotografie aeree, eventi, matrimoni, edilizia, ispezioni
      tecniche, monitoraggio cantieri o altri servizi professionali,
      DroneGuard ti permette di pubblicare gratuitamente una richiesta.
    </p>

    <p>
      Ricevi candidature da piloti drone interessati e trova il
      professionista più adatto alle esigenze del tuo progetto in modo
      semplice, veloce e trasparente.
    </p>
  </div>
</div>

<Link href="/register">
  <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
    Trova un pilota drone
  </button>
</Link>
      </section>
    </main>
  )
}