import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Richiedi Pilota Drone | DroneGuard",
  description:
    "Richiedi un pilota drone per riprese aeree, fotografie, ispezioni tecniche, termografia, fotogrammetria, eventi e servizi professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Pubblica una richiesta drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Richiedi Pilota Drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai bisogno di un pilota drone per un servizio professionale?
            Con DroneGuard puoi pubblicare una richiesta e ricevere candidature
            da operatori interessati. Puoi richiedere riprese video, fotografie
            aeree, ispezioni tecniche, termografia, fotogrammetria, monitoraggio
            cantieri, eventi, matrimoni e molti altri servizi con drone.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Richiedi un pilota drone
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Pubblica il lavoro
            </h2>
            <p className="text-gray-300">
              Descrivi il servizio drone che ti serve e indica la località.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ricevi candidature
            </h2>
            <p className="text-gray-300">
              I piloti drone interessati possono candidarsi alla tua richiesta.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Scegli il professionista
            </h2>
            <p className="text-gray-300">
              Valuta le candidature e scegli il pilota più adatto al progetto.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quando richiedere un pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un pilota drone può essere utile in molte situazioni. Aziende,
            privati, studi tecnici, agenzie immobiliari, imprese edili,
            amministratori, attività turistiche e organizzatori di eventi
            possono utilizzare i droni per ottenere immagini, video e dati da
            una prospettiva aerea.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Richiedere un pilota drone è utile quando vuoi documentare un
            immobile, realizzare contenuti promozionali, controllare un tetto,
            monitorare un cantiere, ispezionare pannelli fotovoltaici,
            effettuare una termografia o creare video per eventi e matrimoni.
          </p>

          <p className="leading-8 text-gray-300">
            Con DroneGuard non devi cercare manualmente decine di contatti:
            pubblichi la tua richiesta e lasci che siano i piloti interessati a
            candidarsi.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Servizi che puoi richiedere
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Ogni progetto può avere esigenze diverse. Alcuni clienti cercano
              un pilota drone per riprese video emozionali, altri per fotografie
              professionali, controlli tecnici, rilievi o documentazione di
              lavori in corso.
            </p>

            <p className="leading-8 text-gray-300">
              DroneGuard ti permette di spiegare il lavoro in modo chiaro,
              indicando cosa ti serve, dove deve essere svolto il servizio e
              quali sono gli obiettivi del progetto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Richieste frequenti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video con drone</li>
              <li>✅ Foto aeree per immobili</li>
              <li>✅ Ispezioni tetti e facciate</li>
              <li>✅ Controllo pannelli fotovoltaici</li>
              <li>✅ Termografia con drone</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Fotogrammetria e rilievi</li>
              <li>✅ Eventi, matrimoni e turismo</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedere un servizio drone è semplice
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Molte persone non sanno da dove iniziare quando devono trovare un
            operatore drone. Con DroneGuard il processo è più semplice: crei un
            account, pubblichi il lavoro e ricevi candidature da piloti
            interessati.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi descrivere se hai bisogno di un servizio creativo, tecnico,
            aziendale o privato. Più la richiesta è chiara, più sarà facile per
            i piloti capire il tipo di lavoro e candidarsi in modo adeguato.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma è pensata per collegare chi cerca un servizio con
            drone con chi può offrirlo.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                1. Registrati
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Crea gratuitamente il tuo account.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Spiega quale servizio drone ti serve.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Valuta le candidature ricevute.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa richiedere un pilota drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio con drone può cambiare in base alla
            tipologia del lavoro, alla località, alla durata, alla complessità
            del volo e al materiale richiesto. Un video per un evento, una
            sessione fotografica immobiliare, una termografia o un rilievo
            tecnico hanno esigenze diverse.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard il cliente pubblica la richiesta e i piloti interessati
            possono candidarsi. In questo modo puoi valutare diverse candidature
            prima di scegliere il professionista più adatto.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedi subito un pilota drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti
            drone interessati al progetto.
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