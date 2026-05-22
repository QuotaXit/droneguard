import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per comuni | DroneGuard",
  description:
    "Trova piloti drone per comuni, enti pubblici, monitoraggio territorio, documentazione urbana e servizi professionali con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per comuni ed enti pubblici
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per comuni
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            I droni rappresentano uno strumento sempre più utilizzato da comuni,
            enti pubblici e amministrazioni locali per monitorare il territorio,
            documentare opere pubbliche, controllare aree urbane e raccogliere
            immagini aeree utili alla gestione del patrimonio comunale.
            Attraverso DroneGuard puoi pubblicare una richiesta e ricevere
            candidature da piloti drone interessati a collaborare con enti e
            amministrazioni in tutta Italia.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Registrati gratis
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Monitoraggio territorio
            </h2>
            <p className="leading-7 text-gray-300">
              Visione completa di aree urbane, rurali e zone comunali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Opere pubbliche
            </h2>
            <p className="leading-7 text-gray-300">
              Documentazione e monitoraggio di cantieri e infrastrutture.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video aerei
            </h2>
            <p className="leading-7 text-gray-300">
              Contenuti professionali per report e comunicazione istituzionale.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Perché utilizzare un drone per un comune
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le amministrazioni comunali gestiscono spesso aree molto estese,
            infrastrutture, edifici pubblici e opere che richiedono controlli
            periodici. Grazie ai droni è possibile ottenere immagini aeree
            dettagliate e una panoramica completa del territorio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese dall'alto consentono di documentare situazioni difficili
            da osservare da terra e possono supportare attività di monitoraggio,
            pianificazione e comunicazione istituzionale.
          </p>

          <p className="leading-8 text-gray-300">
            Sempre più enti pubblici utilizzano i droni come supporto alle
            attività di gestione e valorizzazione del territorio.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Monitoraggio del territorio comunale
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I droni permettono di acquisire immagini di aree urbane, parchi,
            strade, piazze, zone agricole e aree periferiche in tempi molto
            ridotti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questa documentazione può essere utilizzata per osservare lo stato
            del territorio e creare archivi fotografici aggiornati.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini aeree offrono una prospettiva completa che può risultare
            utile per molte attività amministrative e tecniche.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Opere pubbliche e cantieri
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese con drone vengono frequentemente utilizzate per seguire
            l'avanzamento di opere pubbliche e lavori infrastrutturali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Attraverso voli periodici è possibile documentare lo stato dei
            cantieri e creare materiale utile per report e aggiornamenti.
          </p>

          <p className="leading-8 text-gray-300">
            Questa soluzione è particolarmente apprezzata per la sua rapidità e
            capacità di mostrare l'intera area interessata dai lavori.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Comunicazione e valorizzazione del territorio
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I comuni possono utilizzare foto e video realizzati con drone per
            promuovere il territorio, valorizzare eventi e mostrare il patrimonio
            storico, culturale e paesaggistico.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini aeree offrono contenuti professionali da utilizzare su
            siti web istituzionali, social network e materiale informativo.
          </p>

          <p className="leading-8 text-gray-300">
            Questo tipo di comunicazione può contribuire a migliorare la
            visibilità del territorio e delle iniziative locali.
          </p>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Chi utilizza questi servizi
            </h2>

            <p className="leading-8 text-gray-300">
              Comuni, province, enti pubblici, società partecipate e uffici
              tecnici possono utilizzare piloti drone per attività di
              documentazione, monitoraggio e comunicazione istituzionale.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Servizi più richiesti
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Monitoraggio territorio</li>
              <li>✅ Documentazione opere pubbliche</li>
              <li>✅ Riprese eventi comunali</li>
              <li>✅ Foto aeree urbane</li>
              <li>✅ Video promozionali</li>
              <li>✅ Report fotografici</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Cerchi un pilota drone per il tuo comune?
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e ricevi candidature da
            piloti drone interessati a collaborare con enti pubblici,
            amministrazioni locali e uffici tecnici.
          </p>

          <Link href="/register">
            <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
              Registrati gratis
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}