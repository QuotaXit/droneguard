import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Network Piloti Drone | DroneGuard",
  description:
    "Accedi a un network di piloti drone per riprese aeree, ispezioni, termografia, fotogrammetria, eventi e servizi professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Marketplace professionisti drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Network Piloti Drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            DroneGuard mette a disposizione un network di piloti drone che
            possono candidarsi ai lavori pubblicati da aziende, privati,
            professionisti e organizzazioni. Se hai bisogno di riprese aeree,
            fotografie professionali, monitoraggio cantieri, termografia,
            ispezioni tecniche o rilievi con drone, puoi pubblicare una
            richiesta e ricevere candidature da operatori interessati.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Accedi al network
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Pubblica il progetto
            </h2>

            <p className="text-gray-300">
              Descrivi il lavoro e le caratteristiche del servizio richiesto.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ricevi candidature
            </h2>

            <p className="text-gray-300">
              I piloti drone interessati possono candidarsi alla richiesta.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Scegli il professionista
            </h2>

            <p className="text-gray-300">
              Valuta le candidature e seleziona il pilota più adatto.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cos'è un network di piloti drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un network di piloti drone permette di mettere in contatto chi cerca
            un servizio con drone con professionisti interessati a svolgere il
            lavoro. Invece di cercare singolarmente operatori nella propria
            zona, è possibile pubblicare una richiesta e ricevere candidature.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo approccio consente di risparmiare tempo e di raggiungere più
            professionisti contemporaneamente. Ogni pilota può valutare il
            progetto e decidere se candidarsi.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard nasce proprio con questo obiettivo: creare un punto di
            incontro tra domanda e offerta nel settore dei servizi con drone.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Settori che utilizzano il network
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I droni vengono utilizzati in edilizia, agricoltura,
              infrastrutture, immobiliare, industria, turismo, eventi,
              monitoraggio ambientale e molti altri settori.
            </p>

            <p className="leading-8 text-gray-300">
              Per questo motivo un network di piloti drone può essere utile sia
              alle aziende sia ai privati che necessitano di servizi specifici.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi disponibili
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video con drone</li>
              <li>✅ Fotografie aeree professionali</li>
              <li>✅ Ispezioni tecniche</li>
              <li>✅ Termografia con drone</li>
              <li>✅ Fotogrammetria</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Rilievi topografici</li>
              <li>✅ Eventi e matrimoni</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Vantaggi di utilizzare DroneGuard
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Utilizzando DroneGuard puoi pubblicare una sola richiesta e
            raggiungere contemporaneamente numerosi piloti drone interessati al
            progetto. Questo elimina la necessità di contattare singolarmente
            ogni professionista.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Inoltre hai la possibilità di confrontare candidature diverse,
            valutare le informazioni ricevute e scegliere il professionista più
            adatto alle esigenze del lavoro.
          </p>

          <p className="leading-8 text-gray-300">
            Che si tratti di un piccolo progetto o di un incarico più complesso,
            il network di DroneGuard aiuta a semplificare la ricerca di piloti
            drone.
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
                Inserisci tutte le informazioni del progetto.
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
                Valuta le candidature e seleziona il pilota.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Accedi al network di piloti drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Pubblica gratuitamente il tuo progetto e ricevi candidature da
            piloti drone interessati al lavoro richiesto.
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