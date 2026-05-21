import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Palermo | Trova Piloti Drone a Palermo | DroneGuard",
  description:
    "Cerchi un pilota drone a Palermo? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDronePalermoPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-6 mb-10 text-gray-300 leading-8">
  <p>
    Cerchi un pilota drone a Palermo per riprese video professionali,
    fotografie aeree, ispezioni tecniche, monitoraggio cantieri,
    rilievi topografici o servizi specializzati con drone? Con
    DroneGuard puoi pubblicare gratuitamente una richiesta e ricevere
    candidature da piloti drone disponibili a Palermo e provincia.
  </p>

  <p>
    Palermo è una delle città più importanti del Mediterraneo e
    rappresenta un punto di riferimento per il turismo, l'edilizia,
    l'immobiliare e le attività commerciali della Sicilia. I droni
    vengono utilizzati sempre più spesso per realizzare contenuti
    professionali, documentare eventi e svolgere attività tecniche in
    modo rapido ed efficiente.
  </p>

  <p>
    DroneGuard mette in contatto clienti e piloti drone attraverso una
    piattaforma semplice e veloce. Pubblica il tuo progetto e ricevi
    candidature da professionisti interessati a svolgere il lavoro
    richiesto nella zona di Palermo.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Riprese video e fotografie aeree a Palermo
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Le riprese con drone sono particolarmente richieste per hotel,
      resort, immobili, attività commerciali, strutture ricettive,
      ristoranti ed eventi organizzati sul territorio palermitano.
    </p>

    <p>
      Le fotografie aeree consentono di valorizzare edifici storici,
      ville, proprietà private e location esclusive mostrando
      prospettive spettacolari sulla città e sul litorale siciliano.
    </p>

    <p>
      Sempre più aziende utilizzano immagini e video realizzati con
      drone per siti web, social media e campagne pubblicitarie.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Turismo, centro storico e promozione territoriale
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Palermo è una delle destinazioni turistiche più visitate della
      Sicilia grazie al suo patrimonio storico, artistico e culturale.
    </p>

    <p>
      I droni vengono utilizzati per promuovere strutture ricettive,
      attività commerciali e servizi turistici attraverso contenuti
      professionali ad alto impatto visivo.
    </p>

    <p>
      Le immagini aeree consentono di valorizzare il centro storico,
      il porto, il lungomare, Mondello e le numerose attrazioni del
      territorio palermitano.
    </p>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-3xl font-bold mb-4">
    Eventi, matrimoni e location esclusive
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Palermo e la sua provincia ospitano ogni anno matrimoni,
      manifestazioni culturali, eventi privati e iniziative aziendali.
    </p>

    <p>
      Le riprese aeree consentono di immortalare questi momenti da
      prospettive uniche e creare contenuti emozionali di alta qualità.
    </p>

    <p>
      Sempre più organizzatori scelgono video e fotografie con drone
      per valorizzare eventi, ville storiche e location dedicate.
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
    Trova un pilota drone a Palermo
  </h2>

  <div className="space-y-5 text-gray-300 leading-8">
    <p>
      Se hai bisogno di un pilota drone a Palermo per un matrimonio,
      un evento, una struttura turistica, una ripresa promozionale,
      un'ispezione tecnica, un rilievo professionale o qualsiasi altro
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