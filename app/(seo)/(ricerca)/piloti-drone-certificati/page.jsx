import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Piloti drone certificati | DroneGuard",
  description:
    "Trova piloti drone certificati per riprese aeree, ispezioni, termografia, rilievi topografici, eventi e servizi professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Professionisti drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Piloti drone certificati
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Se stai cercando piloti drone certificati per un progetto
            professionale, DroneGuard ti permette di pubblicare una richiesta
            e ricevere candidature da operatori drone interessati. Riprese
            aeree, fotografie professionali, termografia, ispezioni tecniche,
            monitoraggio cantieri, rilievi topografici e fotogrammetria sono
            alcuni dei servizi più richiesti sulla piattaforma.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Trova un pilota drone
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Servizi professionali
            </h2>

            <p className="text-gray-300">
              Riprese video, fotografie e documentazione aerea.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ispezioni tecniche
            </h2>

            <p className="text-gray-300">
              Controlli di tetti, facciate, impianti e infrastrutture.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Rilievi e mappature
            </h2>

            <p className="text-gray-300">
              Fotogrammetria, ortofoto e rilievi professionali.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché scegliere piloti drone certificati
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Quando si affida un lavoro a un pilota drone è importante scegliere
            professionisti preparati e in grado di operare nel rispetto delle
            normative vigenti. I servizi con drone vengono utilizzati in molti
            settori e possono richiedere competenze differenti in base al tipo
            di progetto.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un pilota drone può occuparsi di riprese video professionali,
            ispezioni tecniche, controlli fotovoltaici, monitoraggio cantieri,
            documentazione fotografica e rilievi del territorio.
          </p>

          <p className="leading-8 text-gray-300">
            Attraverso DroneGuard puoi pubblicare la tua richiesta e ricevere
            candidature da professionisti interessati al lavoro.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Servizi più richiesti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I piloti drone operano in numerosi settori professionali.
              Aziende, privati, studi tecnici e imprese utilizzano sempre più
              spesso i droni per ottenere immagini e dati da prospettive
              difficilmente raggiungibili con metodi tradizionali.
            </p>

            <p className="leading-8 text-gray-300">
              Le richieste pubblicate sulla piattaforma possono riguardare
              lavori singoli oppure collaborazioni continuative nel tempo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Attività disponibili
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese aeree</li>
              <li>✅ Fotografie professionali</li>
              <li>✅ Termografia</li>
              <li>✅ Ispezione tetti</li>
              <li>✅ Ispezione facciate</li>
              <li>✅ Fotogrammetria</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Rilievi topografici</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come trovare il professionista giusto
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ottenere candidature più precise è consigliabile descrivere
            nel dettaglio il progetto. Informazioni come località, tipologia
            del servizio, tempi richiesti e obiettivi del lavoro aiutano i
            piloti a valutare correttamente la richiesta.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ricevere più candidature permette di confrontare diversi
            professionisti e scegliere quello più adatto alle esigenze del
            progetto.
          </p>

          <p className="leading-8 text-gray-300">
            Questo approccio consente di velocizzare la ricerca e trovare
            operatori drone disponibili per il lavoro richiesto.
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
                2. Pubblica il lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il servizio richiesto.
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
                4. Scegli il professionista
              </h3>
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