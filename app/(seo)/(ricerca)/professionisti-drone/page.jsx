import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Professionisti Drone | DroneGuard",
  description:
    "Trova professionisti drone per riprese aeree, ispezioni, termografia, fotogrammetria, monitoraggio cantieri, eventi e servizi professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Professionisti dei servizi drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Professionisti Drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Cerchi professionisti drone per un servizio tecnico, aziendale,
            immobiliare o promozionale? Con DroneGuard puoi pubblicare una
            richiesta e ricevere candidature da piloti drone interessati al tuo
            progetto. Riprese video, fotografie aeree, ispezioni tecniche,
            termografia, fotogrammetria, monitoraggio cantieri ed eventi sono
            solo alcuni dei servizi che puoi richiedere.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Trova professionisti drone
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Servizi creativi
            </h2>

            <p className="text-gray-300">
              Video, fotografie aeree, contenuti promozionali, eventi e turismo.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Servizi tecnici
            </h2>

            <p className="text-gray-300">
              Ispezioni, controlli, termografia e documentazione professionale.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Rilievi e monitoraggi
            </h2>

            <p className="text-gray-300">
              Fotogrammetria, ortofoto, rilievi topografici e cantieri.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova professionisti drone per il tuo progetto
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I professionisti drone possono aiutare aziende, privati, studi
            tecnici, agenzie immobiliari, imprese edili, attività turistiche e
            organizzatori di eventi a realizzare lavori che richiedono immagini
            aeree, video, controlli tecnici o rilievi del territorio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi descrivere il lavoro che ti serve e ricevere
            candidature da piloti interessati. Questo sistema ti permette di
            risparmiare tempo, confrontare diverse proposte e scegliere il
            professionista più adatto alle tue esigenze.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni richiesta può essere personalizzata indicando località, tipo di
            servizio, obiettivi del progetto e dettagli utili per valutare il
            lavoro.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Servizi svolti dai professionisti drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I droni sono strumenti versatili e vengono utilizzati in moltissimi
              settori. Possono servire per realizzare contenuti video di qualità,
              fotografare immobili, controllare tetti e facciate, monitorare
              cantieri, ispezionare impianti fotovoltaici o produrre materiale
              tecnico utile per documentazione e analisi.
            </p>

            <p className="leading-8 text-gray-300">
              Su DroneGuard puoi pubblicare richieste per lavori creativi,
              tecnici e professionali, lasciando ai piloti drone la possibilità
              di candidarsi.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi più richiesti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video con drone</li>
              <li>✅ Fotografie aeree professionali</li>
              <li>✅ Ispezioni tetti e facciate</li>
              <li>✅ Controllo pannelli fotovoltaici</li>
              <li>✅ Termografia con drone</li>
              <li>✅ Fotogrammetria e ortofoto</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Eventi, matrimoni e turismo</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Professionisti drone per aziende e privati
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le aziende possono richiedere professionisti drone per promuovere
            attività, controllare aree produttive, documentare lavori, seguire
            cantieri o migliorare la comunicazione visiva. I droni sono utili
            anche per agenzie immobiliari, studi tecnici, amministratori,
            aziende agricole e attività turistiche.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            I privati possono invece richiedere servizi drone per matrimoni,
            eventi, proprietà, terreni, ville, attività sportive o contenuti
            personali. Ogni progetto può essere descritto in modo chiaro
            direttamente sulla piattaforma.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard aiuta a mettere in contatto chi cerca un servizio con
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
              <p className="text-sm text-gray-300">
                Crea gratuitamente il tuo account.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica il lavoro
              </h3>
              <p className="text-sm text-gray-300">
                Descrivi il servizio drone richiesto.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>
              <p className="text-sm text-gray-300">
                I piloti interessati possono candidarsi.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il professionista
              </h3>
              <p className="text-sm text-gray-300">
                Valuta le candidature ricevute.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un professionista drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un professionista drone dipende dal tipo di servizio,
            dalla località, dalla durata del lavoro, dalla complessità del volo
            e dal materiale finale richiesto. Una ripresa video per un evento
            ha esigenze diverse rispetto a un’ispezione tecnica, una termografia
            o un rilievo fotogrammetrico.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard non viene imposto un prezzo fisso. Il cliente pubblica
            la richiesta e i piloti interessati possono candidarsi, così è
            possibile valutare diverse proposte prima di scegliere.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova professionisti drone oggi
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Pubblica gratuitamente il tuo progetto e ricevi candidature da
            professionisti drone interessati al lavoro richiesto.
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