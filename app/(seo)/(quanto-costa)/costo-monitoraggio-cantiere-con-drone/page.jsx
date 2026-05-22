import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Costo monitoraggio cantiere con drone | DroneGuard",
  description:
    "Scopri il costo del monitoraggio cantieri con drone. Richiedi preventivi da piloti drone per controllare l'avanzamento dei lavori e documentare il cantiere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Prezzi monitoraggio cantieri
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Costo monitoraggio cantiere con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Il monitoraggio di un cantiere con drone consente di seguire
            l'avanzamento dei lavori in modo rapido, sicuro e professionale.
            Grazie alle immagini aeree è possibile documentare ogni fase del
            progetto, verificare lo stato delle lavorazioni e creare report
            visivi utili per imprese, studi tecnici, direzioni lavori e
            committenti. Il costo del monitoraggio con drone dipende dalla
            frequenza dei controlli, dalle dimensioni del cantiere e dal tipo
            di documentazione richiesta.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Richiedi preventivi gratuiti
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Avanzamento lavori
            </h2>

            <p className="text-gray-300">
              Controllo costante dello stato del cantiere nel tempo.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione fotografica
            </h2>

            <p className="text-gray-300">
              Raccolta di immagini professionali per report e archivi.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Controllo aree estese
            </h2>

            <p className="text-gray-300">
              Visione completa del cantiere da prospettive elevate.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché monitorare un cantiere con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I droni permettono di ottenere rapidamente una visione completa
            dell'area di lavoro senza interrompere le attività operative.
            Questo consente di verificare l'avanzamento delle opere,
            individuare eventuali criticità e documentare ogni fase del
            progetto in modo semplice ed efficace.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini aeree vengono spesso utilizzate per confrontare lo
            stato del cantiere nel tempo, supportare la gestione dei lavori e
            migliorare la comunicazione tra imprese, tecnici e committenti.
          </p>

          <p className="leading-8 text-gray-300">
            Grazie ai voli periodici è possibile creare una cronologia visiva
            dell'intero progetto, utile sia per finalità tecniche che
            promozionali.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Da cosa dipende il costo del monitoraggio
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il costo del monitoraggio con drone dipende principalmente dalla
              frequenza degli interventi, dalla dimensione del cantiere e dal
              materiale richiesto. Un singolo sopralluogo richiede attività
              differenti rispetto a un monitoraggio programmato per diversi
              mesi.
            </p>

            <p className="leading-8 text-gray-300">
              Anche la produzione di video, report fotografici o contenuti
              destinati alla comunicazione aziendale può influenzare il
              preventivo finale.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi disponibili
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Foto aeree periodiche</li>
              <li>✅ Video avanzamento lavori</li>
              <li>✅ Documentazione tecnica</li>
              <li>✅ Controllo opere edili</li>
              <li>✅ Report fotografici professionali</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come richiedere il servizio
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Attraverso DroneGuard puoi pubblicare una richiesta indicando la
            località del cantiere, la tipologia dell'opera e la frequenza dei
            controlli desiderata. I piloti drone interessati possono
            candidarsi e proporti la propria disponibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ricevere più candidature consente di confrontare professionisti
            differenti e trovare la soluzione più adatta alle esigenze del
            progetto.
          </p>

          <p className="leading-8 text-gray-300">
            Il servizio è particolarmente utile per imprese edili, studi
            tecnici, direzioni lavori e aziende che necessitano di una
            documentazione costante dell'avanzamento delle opere.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">1. Registrati</h3>
              <p className="text-sm leading-6 text-gray-300">
                Crea gratuitamente il tuo account.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">2. Pubblica il lavoro</h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il cantiere e il monitoraggio richiesto.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">3. Ricevi candidature</h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">4. Scegli il professionista</h3>
              <p className="text-sm leading-6 text-gray-300">
                Valuta le candidature ricevute.
              </p>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}