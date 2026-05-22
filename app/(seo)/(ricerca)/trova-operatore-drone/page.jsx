import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Trova Operatore Drone | DroneGuard",
  description:
    "Trova un operatore drone per riprese aeree, fotografie, ispezioni, termografia, monitoraggio cantieri, eventi e servizi professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Marketplace servizi drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Trova Operatore Drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai bisogno di trovare un operatore drone per un servizio
            professionale? Con DroneGuard puoi pubblicare una richiesta e
            ricevere candidature da piloti drone interessati al tuo progetto.
            Riprese aeree, fotografie professionali, ispezioni tecniche,
            monitoraggio cantieri, termografia, fotogrammetria ed eventi sono
            solo alcune delle attività che puoi richiedere attraverso la
            piattaforma.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Trova un operatore drone
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Professionisti qualificati
            </h2>

            <p className="text-gray-300">
              Ricevi candidature da operatori interessati al lavoro pubblicato.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Servizi tecnici
            </h2>

            <p className="text-gray-300">
              Ispezioni, rilievi, termografia e documentazione professionale.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Riprese aeree
            </h2>

            <p className="text-gray-300">
              Video e fotografie per aziende, immobili, turismo ed eventi.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come trovare un operatore drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Trovare un operatore drone può richiedere tempo, soprattutto quando
            il progetto necessita di competenze specifiche. Molti clienti
            cercano professionisti per riprese video, fotografie aeree,
            monitoraggio cantieri, rilievi tecnici o controlli su edifici e
            infrastrutture.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard il processo è più semplice. Invece di cercare
            manualmente decine di professionisti, puoi pubblicare una richiesta
            dettagliata e ricevere candidature da piloti drone interessati.
          </p>

          <p className="leading-8 text-gray-300">
            Questo permette di confrontare diverse candidature e scegliere il
            professionista più adatto alle esigenze del progetto.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Servizi più richiesti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I droni vengono utilizzati in moltissimi settori. Le aziende li
              impiegano per promozione, monitoraggio e documentazione tecnica.
              I privati li utilizzano per eventi, matrimoni e proprietà.
            </p>

            <p className="leading-8 text-gray-300">
              Le richieste pubblicate su DroneGuard possono riguardare lavori
              creativi, tecnici o professionali in base alle necessità del
              cliente.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Attività disponibili
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video con drone</li>
              <li>✅ Fotografie aeree professionali</li>
              <li>✅ Ispezioni tetti e facciate</li>
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
            Operatori drone per aziende e privati
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le aziende possono richiedere operatori drone per realizzare video
            promozionali, controllare impianti, documentare cantieri o eseguire
            ispezioni tecniche. Anche studi professionali, agenzie immobiliari,
            enti pubblici e attività turistiche utilizzano sempre più spesso i
            droni per ottenere immagini e dati utili.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            I privati possono invece richiedere servizi per matrimoni, eventi,
            terreni, abitazioni e proprietà private.
          </p>

          <p className="leading-8 text-gray-300">
            Grazie a DroneGuard puoi pubblicare gratuitamente la tua richiesta
            e ricevere candidature da professionisti interessati.
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
                Descrivi il servizio richiesto.
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

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un operatore drone oggi
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Pubblica gratuitamente il tuo progetto e ricevi candidature da
            operatori drone interessati al lavoro richiesto.
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