import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Prezzo fotogrammetria con drone | DroneGuard",
  description:
    "Scopri il prezzo di un servizio di fotogrammetria con drone per rilievi, modelli 3D, ortofoto e mappature professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Prezzi fotogrammetria con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Prezzo fotogrammetria con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            La fotogrammetria con drone è una tecnologia utilizzata per creare
            ortofoto, modelli tridimensionali, mappe ad alta precisione e
            rilievi professionali del territorio. Grazie ai droni è possibile
            acquisire migliaia di immagini georeferenziate che vengono poi
            elaborate tramite software specializzati. Il prezzo di un servizio
            di fotogrammetria con drone dipende dall'estensione dell'area da
            rilevare, dalla precisione richiesta e dalle elaborazioni finali
            necessarie.
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
              Modelli 3D
            </h2>

            <p className="text-gray-300">
              Ricostruzioni tridimensionali di terreni, edifici e strutture.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ortofoto
            </h2>

            <p className="text-gray-300">
              Mappe ad alta risoluzione utilizzate da tecnici e professionisti.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Mappature territoriali
            </h2>

            <p className="text-gray-300">
              Analisi dettagliate di aree agricole, cantieri e infrastrutture.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cos'è la fotogrammetria con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            La fotogrammetria consiste nell'acquisizione di immagini aeree
            attraverso voli programmati che permettono di ricostruire con
            precisione superfici, edifici e terreni. Le fotografie vengono
            elaborate tramite software dedicati per generare modelli digitali
            estremamente accurati.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questa metodologia è utilizzata in edilizia, topografia,
            agricoltura, gestione del territorio, archeologia, miniere e
            monitoraggio ambientale. Grazie al drone è possibile coprire vaste
            superfici in tempi ridotti rispetto ai metodi tradizionali.
          </p>

          <p className="leading-8 text-gray-300">
            I dati ottenuti possono essere utilizzati per progettazione,
            monitoraggio, documentazione tecnica e controllo dell'avanzamento
            dei lavori.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Da cosa dipende il prezzo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il prezzo della fotogrammetria con drone varia in base
              all'estensione dell'area, alla densità di acquisizione dati e al
              tipo di elaborazione finale richiesta dal cliente.
            </p>

            <p className="leading-8 text-gray-300">
              Alcuni progetti richiedono semplici ortofoto, mentre altri
              necessitano di modelli tridimensionali complessi, curve di
              livello e documentazione tecnica avanzata.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Applicazioni principali
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Fotogrammetria professionale</li>
              <li>✅ Modelli 3D</li>
              <li>✅ Ortofoto ad alta risoluzione</li>
              <li>✅ Mappatura terreni</li>
              <li>✅ Rilievi tecnici</li>
              <li>✅ Monitoraggio cantieri</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come richiedere un servizio di fotogrammetria
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta indicando la località,
            la superficie da rilevare e gli obiettivi del progetto. I piloti
            drone interessati possono candidarsi e proporti la propria
            disponibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ricevere più candidature consente di confrontare diversi
            professionisti e scegliere la soluzione più adatta alle esigenze
            tecniche del lavoro.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma mette in contatto clienti e operatori drone
            specializzati in rilievi e fotogrammetria in tutta Italia.
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
                Descrivi l'area da rilevare.
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