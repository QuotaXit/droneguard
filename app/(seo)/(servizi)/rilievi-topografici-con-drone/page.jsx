import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Rilievi topografici con drone | DroneGuard",
  description:
    "Trova piloti drone specializzati in rilievi topografici, fotogrammetria, ortofoto e mappature professionali per cantieri, terreni e progettazione."
}

export default function RilieviTopograficiConDronePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Dati ad alta precisione
    </h2>
    <p className="text-gray-300">
      Acquisizione di immagini e dati georeferenziati utili per rilievi,
      analisi e progettazione.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Tempi ridotti
    </h2>
    <p className="text-gray-300">
      I droni consentono di rilevare grandi superfici in tempi più rapidi
      rispetto a molte metodologie tradizionali.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Ortofoto e modelli 3D
    </h2>
    <p className="text-gray-300">
      Produzione di ortofoto, modelli digitali del terreno e documentazione
      tecnica dettagliata.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Cos'è un rilievo topografico con drone
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I rilievi topografici con drone permettono di acquisire rapidamente dati
    e immagini aeree di terreni, cantieri, infrastrutture e aree estese.
    Attraverso tecniche di fotogrammetria è possibile ottenere ortofoto ad
    alta risoluzione, modelli tridimensionali e informazioni utili per
    progettazione, analisi e monitoraggio.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Questa tecnologia viene utilizzata sempre più frequentemente in edilizia,
    topografia, urbanistica, agricoltura e gestione del territorio grazie
    alla capacità di raccogliere informazioni dettagliate in tempi ridotti.
  </p>

  <p className="leading-8 text-gray-300">
    Attraverso DroneGuard puoi pubblicare una richiesta e ricevere
    candidature da piloti drone interessati a svolgere rilievi topografici
    nella tua zona.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Applicazioni più comuni
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I rilievi con drone vengono utilizzati per cantieri edili, terreni
      agricoli, opere infrastrutturali, lottizzazioni, monitoraggio del
      territorio, progettazione e studi tecnici.
    </p>

    <p className="leading-8 text-gray-300">
      Le informazioni raccolte possono supportare geometri, architetti,
      ingegneri, imprese edili e professionisti nella pianificazione e nella
      gestione dei progetti.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi disponibili
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Rilievi topografici con drone</li>
      <li>✅ Fotogrammetria aerea</li>
      <li>✅ Ortofoto georeferenziate</li>
      <li>✅ Modelli 3D del terreno</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Mappatura terreni</li>
      <li>✅ Documentazione tecnica</li>
      <li>✅ Analisi territoriali</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Perché utilizzare la fotogrammetria con drone
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    La fotogrammetria permette di elaborare le immagini raccolte dal drone
    trasformandole in dati utili per la progettazione e l'analisi tecnica.
    Attraverso software specializzati è possibile generare ortofoto,
    modelli tridimensionali e rappresentazioni dettagliate dell'area
    rilevata.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Questo approccio consente di documentare lo stato di un terreno o di un
    cantiere in modo accurato e di confrontare facilmente l'evoluzione di un
    progetto nel tempo.
  </p>

  <p className="leading-8 text-gray-300">
    Per molte attività professionali rappresenta una soluzione efficace per
    raccogliere informazioni aggiornate e supportare decisioni basate su dati
    reali.
  </p>
</div>
      </section>
    </main>
  )
}