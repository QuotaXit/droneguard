import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Cerca pilota drone | DroneGuard",
  description:
    "Cerca un pilota drone per riprese aeree, fotografie, ispezioni, termografia, fotogrammetria, eventi e servizi professionali."
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
            Cerca pilota drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Se stai cercando un pilota drone per un servizio professionale,
            DroneGuard ti permette di pubblicare una richiesta e ricevere
            candidature da operatori interessati. Riprese video, fotografie
            aeree, monitoraggio cantieri, ispezioni tecniche, termografia,
            fotogrammetria e rilievi topografici sono solo alcuni dei servizi
            che puoi richiedere attraverso la piattaforma.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Pubblica una richiesta
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Riprese aeree
            </h2>

            <p className="text-gray-300">
              Video e fotografie professionali con drone per ogni esigenza.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Servizi tecnici
            </h2>

            <p className="text-gray-300">
              Ispezioni, termografia, controlli strutturali e verifiche.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Rilievi professionali
            </h2>

            <p className="text-gray-300">
              Fotogrammetria, ortofoto e mappature del territorio.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come cercare un pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Trovare il professionista giusto può richiedere tempo. Molti
            clienti cercano piloti drone per lavori specifici e non sempre
            conoscono operatori nella propria zona. Con DroneGuard puoi
            descrivere il progetto e ricevere candidature da professionisti
            interessati.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo sistema permette di risparmiare tempo e di confrontare
            diverse candidature prima di scegliere il pilota più adatto al
            lavoro richiesto.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni richiesta può essere personalizzata indicando località,
            tipologia di servizio e obiettivi del progetto.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Servizi disponibili
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I piloti drone registrati sulla piattaforma possono candidarsi
              per numerose tipologie di lavori richiesti da aziende, privati e
              professionisti.
            </p>

            <p className="leading-8 text-gray-300">
              Dai video promozionali alle ispezioni tecniche, DroneGuard è
              progettato per semplificare il contatto tra domanda e offerta nel
              settore dei servizi drone.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Attività richieste
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video con drone</li>
              <li>✅ Fotografie aeree</li>
              <li>✅ Termografia</li>
              <li>✅ Ispezioni tetti e facciate</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Fotogrammetria</li>
              <li>✅ Rilievi topografici</li>
              <li>✅ Eventi e matrimoni</li>
            </ul>
          </div>
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
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Valuta le candidature ricevute.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Cerca un pilota drone oggi
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Pubblica gratuitamente la tua richiesta e ricevi candidature da
            piloti drone interessati al tuo progetto.
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