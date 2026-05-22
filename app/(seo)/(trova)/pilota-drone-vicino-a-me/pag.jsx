import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Vicino a Me | DroneGuard",
  description:
    "Trova un pilota drone vicino a te per riprese aeree, fotografie, ispezioni, termografia, eventi, cantieri e servizi professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Cerca piloti drone nella tua zona
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Pilota Drone Vicino a Me
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Cerchi un pilota drone vicino a te per un servizio professionale?
            Con DroneGuard puoi pubblicare una richiesta indicando la località
            del lavoro e ricevere candidature da operatori drone interessati.
            Puoi richiedere riprese video, fotografie aeree, ispezioni tecniche,
            termografia, monitoraggio cantieri, eventi, matrimoni, fotogrammetria
            e rilievi professionali.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Trova un pilota vicino a te
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Inserisci la località
            </h2>
            <p className="text-gray-300">
              Pubblica il lavoro indicando città o zona in cui serve il servizio.
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
              Scegli il pilota
            </h2>
            <p className="text-gray-300">
              Valuta le candidature ricevute e scegli il professionista adatto.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come trovare un pilota drone vicino a te
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Quando hai bisogno di un servizio con drone, spesso la prima ricerca
            è proprio “pilota drone vicino a me”. La vicinanza può essere utile
            per ridurre tempi, facilitare l’organizzazione del lavoro e trovare
            operatori disponibili nella zona in cui deve essere svolto il
            servizio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta specificando località,
            tipo di servizio, periodo indicativo e dettagli del progetto. I
            piloti interessati possono candidarsi direttamente alla richiesta.
          </p>

          <p className="leading-8 text-gray-300">
            Questo sistema ti permette di evitare ricerche manuali lunghe e di
            ricevere candidature da professionisti interessati al lavoro.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Servizi drone disponibili nella tua zona
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Puoi cercare piloti drone per servizi creativi, tecnici e
              professionali. Le richieste possono riguardare immobili, eventi,
              matrimoni, cantieri, aziende, terreni, pannelli fotovoltaici,
              coperture, facciate e attività commerciali.
            </p>

            <p className="leading-8 text-gray-300">
              Ogni richiesta può essere descritta in modo chiaro per aiutare i
              piloti a capire il lavoro e candidarsi solo se interessati.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi richiesti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video con drone</li>
              <li>✅ Fotografie aeree immobiliari</li>
              <li>✅ Ispezioni tetti e facciate</li>
              <li>✅ Termografia con drone</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Controllo pannelli fotovoltaici</li>
              <li>✅ Fotogrammetria e rilievi</li>
              <li>✅ Eventi, matrimoni e turismo</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Piloti drone locali per aziende e privati
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un pilota drone locale può essere utile per aziende, privati,
            agenzie immobiliari, studi tecnici, amministratori, imprese edili,
            attività turistiche e organizzatori di eventi. La presenza sul
            territorio può semplificare sopralluoghi, comunicazione e
            organizzazione del servizio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard permette di collegare chi cerca un servizio con drone con
            piloti interessati a lavorare nella zona indicata.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi pubblicare una richiesta per lavori semplici o complessi,
            spiegando cosa ti serve e dove deve essere svolto il servizio.
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
                2. Indica la zona
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Scrivi dove deve essere svolto il lavoro.
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
            Quanto costa un pilota drone vicino a me?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il prezzo di un servizio con drone dipende dal tipo di lavoro, dalla
            distanza, dalla durata, dalla complessità del volo e dal materiale
            richiesto. Un servizio fotografico per un immobile può avere costi
            diversi rispetto a un’ispezione tecnica, una termografia o un
            rilievo fotogrammetrico.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard il cliente pubblica la richiesta e i piloti interessati
            possono candidarsi. In questo modo puoi valutare le candidature e
            scegliere la soluzione più adatta al progetto.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone vicino a te
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti
            drone interessati nella zona indicata.
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