import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Chieti | Trova Piloti Drone a Chieti | DroneGuard",
  description:
    "Cerchi un pilota drone a Chieti? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneChietiPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
  Pilota Drone Chieti
</h1>

<p className="text-gray-300 text-lg leading-8 mb-8">
  Cerchi un pilota drone a Chieti per riprese video professionali,
  fotografie aeree, eventi, matrimoni, ispezioni tecniche, rilievi,
  monitoraggio cantieri o servizi specializzati con drone? Con
  DroneGuard puoi pubblicare gratuitamente una richiesta e ricevere
  candidature da piloti drone disponibili a Chieti e provincia.
</p>

<div className="grid gap-6 md:grid-cols-2 mb-10">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="text-xl font-semibold mb-3">
      Servizi disponibili
    </h2>

    <p className="text-gray-300 leading-7">
      Riprese video professionali, fotografie aeree, matrimoni,
      eventi, edilizia, immobili, agricoltura di precisione,
      termografia, monitoraggio cantieri, rilievi topografici
      e ispezioni professionali con drone.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="text-xl font-semibold mb-3">
      Come funziona
    </h2>

    <p className="text-gray-300 leading-7">
      Pubblica il tuo lavoro, descrivi il servizio richiesto e
      attendi le candidature dei piloti drone disponibili nella
      zona di Chieti.
    </p>
  </div>
</div>

<div className="space-y-6 mb-10 text-gray-300 leading-8">
  <p>
    I droni professionali vengono oggi utilizzati in numerosi settori
    grazie alla loro capacità di acquisire immagini, video e dati da
    prospettive difficilmente raggiungibili con strumenti tradizionali.
    A Chieti sempre più aziende, professionisti e privati si affidano
    ai servizi con drone per ottenere contenuti di qualità e
    informazioni dettagliate in tempi rapidi.
  </p>

  <p>
    DroneGuard è una piattaforma che mette in contatto clienti e
    piloti drone. Se hai bisogno di un professionista per un lavoro a
    Chieti, puoi pubblicare la tua richiesta e ricevere candidature da
    operatori interessati a svolgere il servizio nella tua zona.
  </p>

  <p>
    Che si tratti di fotografie aeree, riprese video promozionali,
    monitoraggio cantieri, rilievi tecnici o ispezioni professionali,
    DroneGuard semplifica la ricerca di piloti drone disponibili a
    Chieti e nei comuni limitrofi.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Servizi drone per aziende e privati
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Le riprese aeree con drone sono particolarmente richieste per
      promuovere attività commerciali, strutture ricettive, immobili,
      eventi e iniziative turistiche. Le immagini dall'alto permettono
      di valorizzare luoghi e progetti mostrando dettagli e prospettive
      uniche.
    </p>

    <p>
      Nel settore immobiliare i droni vengono utilizzati per realizzare
      fotografie e video destinati alla vendita o alla promozione di
      case, ville, terreni, agriturismi e strutture commerciali.
    </p>

    <p>
      Le imprese edili utilizzano invece i droni per il monitoraggio
      dei cantieri, il controllo dell'avanzamento lavori e la
      documentazione fotografica delle opere in costruzione.
    </p>

    <p>
      Anche il settore agricolo può beneficiare delle tecnologie drone
      grazie al monitoraggio delle colture e alla raccolta di dati
      utili per una gestione più efficiente dei terreni.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Ispezioni e rilievi con drone a Chieti
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      I droni vengono spesso impiegati per ispezionare tetti,
      facciate, coperture industriali, impianti fotovoltaici,
      infrastrutture e strutture difficili da raggiungere.
    </p>

    <p>
      Grazie alle riprese ad alta definizione è possibile effettuare
      controlli visivi accurati riducendo tempi e costi rispetto ai
      metodi tradizionali.
    </p>

    <p>
      Alcuni operatori possono inoltre offrire servizi di termografia,
      rilievi topografici e monitoraggio tecnico a supporto di imprese,
      professionisti e studi specializzati.
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
      Per pubblicare una richiesta di lavoro vengono utilizzati
      5 crediti. I piloti interessati possono candidarsi agli annunci
      spendendo 5 crediti per ogni candidatura inviata.
    </p>

    <p>
      Questo sistema aiuta a mantenere elevata la qualità delle
      candidature e favorisce contatti realmente interessati ai lavori
      pubblicati sulla piattaforma.
    </p>

    <p>
      Una volta terminati i crediti gratuiti è possibile acquistare
      ulteriori pacchetti crediti per continuare a utilizzare tutte le
      funzionalità di DroneGuard.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Trova un pilota drone a Chieti
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Se stai cercando un pilota drone a Chieti per un evento,
      un matrimonio, un'ispezione tecnica, un rilievo professionale,
      un lavoro nel settore immobiliare o qualsiasi altro servizio con
      drone, DroneGuard ti permette di pubblicare una richiesta in modo
      semplice e veloce.
    </p>

    <p>
      Ricevi candidature da piloti drone interessati e trova il
      professionista più adatto alle esigenze del tuo progetto.
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