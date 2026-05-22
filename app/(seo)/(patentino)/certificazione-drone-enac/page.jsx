import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Certificazione Drone ENAC | DroneGuard",
  description:
    "Scopri cosa significa certificazione drone ENAC, quali attestati servono e come trovare opportunità professionali nel settore dei droni."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Certificazioni e lavoro drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Certificazione Drone ENAC
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            La certificazione drone ENAC è uno degli argomenti più cercati da
            chi vuole iniziare a lavorare con i droni in modo professionale.
            Conoscere attestati, regole operative e requisiti è importante per
            offrire servizi come riprese aeree, ispezioni, termografia,
            fotogrammetria, monitoraggio cantieri e rilievi tecnici.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Registrati come pilota
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Attestati drone</h2>
            <p className="text-gray-300">
              Formazione e competenze per operare nel settore.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Normativa</h2>
            <p className="text-gray-300">
              Conoscere regole, limiti e responsabilità del pilota.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Opportunità</h2>
            <p className="text-gray-300">
              Trovare nuovi lavori e servizi professionali con drone.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa significa certificazione drone ENAC
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Quando si parla di certificazione drone ENAC si fa riferimento agli
            attestati e ai requisiti necessari per operare con droni in
            determinati scenari. La normativa sui droni richiede attenzione,
            formazione e conoscenza delle regole operative.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per chi vuole lavorare come pilota drone, ottenere gli attestati
            corretti rappresenta un passaggio importante. La formazione aiuta a
            comprendere sicurezza, responsabilità, gestione del volo e limiti
            operativi.
          </p>

          <p className="leading-8 text-gray-300">
            Prima di iniziare un'attività professionale è sempre consigliabile
            verificare i requisiti aggiornati presso le fonti ufficiali e
            seguire percorsi formativi riconosciuti.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché è importante per lavorare
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Molti clienti cercano piloti drone preparati, affidabili e in
              grado di gestire il lavoro in modo professionale. Le certificazioni
              e gli attestati aiutano a dimostrare competenza e attenzione alla
              sicurezza.
            </p>

            <p className="leading-8 text-gray-300">
              Settori come edilizia, fotovoltaico, industria, agricoltura,
              immobiliare ed eventi richiedono spesso professionalità e capacità
              di organizzare correttamente le operazioni.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi professionali
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video con drone</li>
              <li>✅ Fotografie aeree</li>
              <li>✅ Ispezioni tecniche</li>
              <li>✅ Termografia con drone</li>
              <li>✅ Fotogrammetria</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Agricoltura di precisione</li>
              <li>✅ Eventi e matrimoni</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come trovare lavoro dopo la certificazione
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Dopo aver ottenuto gli attestati necessari, il passo successivo è
            trovare clienti e richieste di lavoro. Molti piloti usano social,
            sito web personale, portfolio, passaparola e marketplace per farsi
            conoscere.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard permette ai piloti di candidarsi alle richieste
            pubblicate dai clienti. In questo modo chi offre servizi con drone
            può intercettare nuove opportunità in base alle proprie competenze.
          </p>

          <p className="leading-8 text-gray-300">
            Un profilo completo, con servizi offerti, area di lavoro e
            attrezzatura disponibile, può aiutare il pilota a presentarsi meglio
            ai clienti.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard per i piloti
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">1. Registrati</h3>
              <p className="text-sm text-gray-300">
                Crea gratuitamente il tuo profilo pilota.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">2. Completa il profilo</h3>
              <p className="text-sm text-gray-300">
                Inserisci competenze, città e servizi offerti.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">3. Cerca lavori</h3>
              <p className="text-sm text-gray-300">
                Visualizza le richieste pubblicate dai clienti.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">4. Candidati</h3>
              <p className="text-sm text-gray-300">
                Rispondi agli annunci più adatti al tuo profilo.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova opportunità come pilota drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e candidati ai lavori
            pubblicati dai clienti.
          </p>

          <Link href="/register">
            <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
              Registrati gratis
            </button>
          </Link>
        </div>

      </section>
    </main>
  )
}