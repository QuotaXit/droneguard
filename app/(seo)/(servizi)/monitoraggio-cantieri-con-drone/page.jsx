import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Monitoraggio cantieri con drone | DroneGuard",
  description:
    "Trova piloti drone per il monitoraggio di cantieri, avanzamento lavori e documentazione fotografica."
}

export default function MonitoraggioCantieriConDronePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Controlla l'avanzamento dei lavori dall'alto
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Il monitoraggio dei cantieri con drone consente di seguire in modo
    semplice e preciso tutte le fasi di un progetto. Le immagini aeree
    permettono di ottenere una panoramica completa dell'area e di verificare
    rapidamente lo stato di avanzamento dei lavori.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Fotografie e video realizzati periodicamente possono essere utilizzati
    per creare report, condividere aggiornamenti con clienti e collaboratori
    e documentare l'evoluzione del cantiere nel tempo.
  </p>

  <p className="leading-8 text-gray-300">
    Grazie alla visuale dall'alto è possibile monitorare grandi aree,
    controllare più facilmente le attività in corso e mantenere uno storico
    completo dell'intero progetto.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      A chi è rivolto il servizio
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Il monitoraggio cantieri con drone è utilizzato da imprese edili,
      studi tecnici, geometri, architetti, ingegneri, direzioni lavori e
      società che desiderano documentare l'avanzamento delle opere.
    </p>

    <p className="leading-8 text-gray-300">
      Le riprese possono essere effettuate durante tutte le fasi del
      cantiere, dalla preparazione dell'area fino al completamento dei
      lavori, fornendo materiale utile per verifiche tecniche e
      documentazione professionale.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Utilizzi più comuni
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Controllo avanzamento lavori</li>
      <li>✅ Report fotografici periodici</li>
      <li>✅ Video aerei del cantiere</li>
      <li>✅ Documentazione tecnica</li>
      <li>✅ Condivisione con clienti e investitori</li>
      <li>✅ Monitoraggio infrastrutture e opere pubbliche</li>
      <li>✅ Verifica dello stato delle lavorazioni</li>
      <li>✅ Archivio storico delle attività</li>
    </ul>
  </div>
</div>
      </section>
    </main>
  )
}