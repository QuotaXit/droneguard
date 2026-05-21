import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Termografia con drone | DroneGuard",
  description:
    "Trova piloti drone specializzati in termografia per fotovoltaico, edifici, coperture, impianti industriali e ispezioni tecniche."
}

export default function TermografiaConDronePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Ispezioni termografiche rapide e sicure
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    La termografia con drone consente di rilevare variazioni di temperatura
    attraverso speciali telecamere termiche installate sul velivolo. Questa
    tecnologia viene utilizzata per individuare dispersioni energetiche,
    infiltrazioni, difetti costruttivi, anomalie sugli impianti e problemi
    difficilmente individuabili con una semplice ispezione visiva.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Grazie alla possibilità di raggiungere rapidamente coperture, facciate,
    impianti fotovoltaici e strutture in quota, il drone permette di
    effettuare controlli in modo più rapido e sicuro rispetto a molte
    metodologie tradizionali.
  </p>

  <p className="leading-8 text-gray-300">
    Attraverso DroneGuard puoi pubblicare una richiesta e ricevere
    candidature da piloti drone interessati a svolgere attività di
    termografia nella tua zona.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Dove viene utilizzata la termografia con drone
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le ispezioni termografiche vengono utilizzate in numerosi settori,
      dall'edilizia all'energia, fino all'industria e alla manutenzione di
      impianti tecnologici.
    </p>

    <p className="leading-8 text-gray-300">
      Le immagini termiche consentono di identificare rapidamente aree
      anomale e supportare le attività di verifica, manutenzione e controllo.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Applicazioni più richieste
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Pannelli fotovoltaici</li>
      <li>✅ Coperture industriali</li>
      <li>✅ Tetti e facciate</li>
      <li>✅ Ricerca infiltrazioni</li>
      <li>✅ Dispersioni termiche</li>
      <li>✅ Impianti industriali</li>
      <li>✅ Edifici civili</li>
      <li>✅ Controlli energetici</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Termografia per impianti fotovoltaici
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Uno degli utilizzi più diffusi della termografia con drone riguarda il
    controllo di impianti fotovoltaici. Attraverso le immagini termiche è
    possibile individuare pannelli danneggiati, celle difettose, punti caldi
    e altre anomalie che potrebbero ridurre le prestazioni dell'impianto.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Il drone consente di ispezionare rapidamente grandi superfici senza
    interrompere il funzionamento dell'impianto e senza la necessità di
    accedere fisicamente ai pannelli.
  </p>

  <p className="leading-8 text-gray-300">
    Questo rende la termografia aerea una soluzione particolarmente apprezzata
    per attività di manutenzione preventiva e controllo periodico.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Controllo di edifici e coperture
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    La termografia viene frequentemente utilizzata per verificare lo stato di
    edifici, tetti e coperture. Le immagini termiche possono evidenziare
    dispersioni di calore, problemi di isolamento, infiltrazioni d'acqua e
    altre anomalie che potrebbero influire sull'efficienza energetica della
    struttura.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    L'utilizzo del drone permette di analizzare rapidamente aree estese senza
    ponteggi o piattaforme elevatrici, riducendo tempi operativi e costi di
    intervento.
  </p>

  <p className="leading-8 text-gray-300">
    Questa tecnologia viene utilizzata da aziende, studi tecnici, imprese,
    amministratori di immobili e professionisti che necessitano di verifiche
    rapide e documentate.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone specializzato
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard è una piattaforma che mette in contatto clienti e piloti
    drone. Dopo aver pubblicato la tua richiesta, i professionisti
    interessati possono candidarsi indicando disponibilità e informazioni
    sul servizio offerto.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Potrai confrontare diverse candidature e valutare il professionista più
    adatto in base al tipo di ispezione richiesta, all'esperienza e
    all'attrezzatura disponibile.
  </p>

  <p className="leading-8 text-gray-300">
    In questo modo è possibile trovare più facilmente operatori specializzati
    in termografia con drone per edifici, impianti fotovoltaici, coperture e
    controlli tecnici.
  </p>
</div>
      </section>
    </main>
  )
}