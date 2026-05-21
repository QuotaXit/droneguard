import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Cesena | Trova Piloti Drone a Cesena | DroneGuard",
  description:
    "Cerchi un pilota drone a Cesena? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneCesenaPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
  Pilota Drone Cesena
</h1>

<p className="text-gray-300 text-lg leading-8 mb-8">
  Cerchi un pilota drone a Cesena per riprese video, fotografie aeree,
  ispezioni tecniche, monitoraggio cantieri, rilievi, termografia,
  agricoltura di precisione o eventi? Con DroneGuard puoi pubblicare
  gratuitamente una richiesta e ricevere candidature da piloti drone
  disponibili a Cesena e nelle zone limitrofe.
</p>

<div className="grid gap-6 md:grid-cols-2 mb-10">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="text-xl font-semibold mb-3">
      Servizi disponibili
    </h2>

    <p className="text-gray-300 leading-7">
      Riprese video professionali, fotografie aeree, matrimoni,
      eventi, edilizia, immobili, agricoltura, monitoraggio cantieri,
      rilievi topografici, termografia e ispezioni tecniche con drone.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="text-xl font-semibold mb-3">
      Come funziona
    </h2>

    <p className="text-gray-300 leading-7">
      Pubblica il tuo lavoro, descrivi il servizio richiesto e attendi
      le candidature dei piloti drone disponibili nella zona di Cesena.
    </p>
  </div>
</div>

<div className="space-y-6 mb-10 text-gray-300 leading-8">
  <p>
    L'utilizzo dei droni professionali è cresciuto notevolmente negli
    ultimi anni grazie alla possibilità di ottenere immagini, video e
    dati da prospettive difficili da raggiungere con mezzi tradizionali.
    Oggi i droni vengono impiegati in numerosi settori, dall'edilizia
    all'immobiliare, dall'agricoltura agli eventi privati e aziendali.
  </p>

  <p>
    Se stai cercando un pilota drone a Cesena, DroneGuard ti permette di
    entrare in contatto con professionisti interessati a svolgere il tuo
    lavoro. La piattaforma nasce per facilitare l'incontro tra clienti e
    operatori drone, offrendo un sistema semplice e veloce per pubblicare
    richieste e ricevere candidature.
  </p>

  <p>
    I servizi con drone possono essere utilizzati per realizzare riprese
    video promozionali, fotografie aeree per immobili, documentazione di
    cantieri, controlli tecnici, monitoraggio del territorio, agricoltura
    di precisione e molto altro. Grazie alle nuove tecnologie è possibile
    ottenere risultati professionali riducendo tempi e costi operativi.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Per quali lavori si utilizza un pilota drone?
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Molte aziende e privati cercano piloti drone per realizzare
      fotografie e video aerei destinati a siti web, social media,
      campagne pubblicitarie e materiale promozionale.
    </p>

    <p>
      Nel settore immobiliare le immagini aeree permettono di valorizzare
      abitazioni, strutture ricettive, terreni e complessi commerciali
      mostrando l'intero contesto circostante.
    </p>

    <p>
      In edilizia e nelle ispezioni tecniche i droni vengono utilizzati
      per controllare tetti, facciate, coperture industriali, impianti
      fotovoltaici, ponti e infrastrutture senza la necessità di ponteggi
      o attrezzature particolarmente invasive.
    </p>

    <p>
      Anche l'agricoltura rappresenta un settore in forte crescita per
      l'utilizzo dei droni grazie alla possibilità di monitorare colture,
      individuare anomalie e raccogliere dati utili alla gestione dei
      terreni.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Come funziona DroneGuard
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Registrarsi su DroneGuard è gratuito. Dopo la conferma dell'email,
      i clienti ricevono 10 crediti gratuiti mentre i piloti drone
      ricevono 50 crediti gratuiti.
    </p>

    <p>
      Un cliente può pubblicare una richiesta di lavoro utilizzando
      5 crediti. All'interno dell'annuncio può descrivere il servizio
      richiesto, la località e tutte le informazioni utili per ricevere
      candidature pertinenti.
    </p>

    <p>
      I piloti drone interessati possono candidarsi agli annunci
      spendendo 5 crediti per ogni candidatura inviata. Questo sistema
      aiuta a mantenere elevata la qualità delle candidature ricevute e
      favorisce contatti realmente interessati al lavoro pubblicato.
    </p>

    <p>
      Una volta esauriti i crediti gratuiti iniziali, è possibile
      acquistare ulteriori pacchetti crediti per continuare a utilizzare
      tutte le funzionalità della piattaforma.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Trova piloti drone a Cesena e provincia
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      DroneGuard è una piattaforma dedicata all'incontro tra clienti e
      piloti drone. Se hai bisogno di un professionista per un progetto a
      Cesena, puoi pubblicare gratuitamente la tua richiesta e attendere
      le candidature degli operatori interessati.
    </p>

    <p>
      Che si tratti di un evento, di un matrimonio, di una ripresa
      promozionale, di un'ispezione tecnica o di un lavoro professionale,
      DroneGuard ti consente di trovare piloti drone disponibili nella
      tua zona in modo semplice e veloce.
    </p>

    <p>
      Pubblica oggi stesso il tuo annuncio e ricevi candidature da
      piloti drone attivi a Cesena e provincia.
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