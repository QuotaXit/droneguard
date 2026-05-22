import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Quanto costa un rilievo topografico con drone | DroneGuard",
  description:
    "Scopri quanto costa un rilievo topografico con drone. Richiedi preventivi da piloti drone per mappature, fotogrammetria e rilievi professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Prezzi rilievi topografici
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Quanto costa un rilievo topografico con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            I rilievi topografici con drone rappresentano una delle tecnologie
            più utilizzate per acquisire dati precisi del territorio in tempi
            rapidi. Grazie ai droni professionali è possibile effettuare
            mappature, fotogrammetria, modelli 3D e rilievi di terreni,
            cantieri, infrastrutture e aree agricole. Il costo di un rilievo
            topografico con drone dipende principalmente dall'estensione
            dell'area, dalla precisione richiesta e dal tipo di elaborazione
            finale necessaria.
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
              Mappatura terreni
            </h2>

            <p className="text-gray-300">
              Rilievi di terreni agricoli, edificabili e aree naturali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Fotogrammetria
            </h2>

            <p className="text-gray-300">
              Elaborazione di ortofoto e modelli tridimensionali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Monitoraggio cantieri
            </h2>

            <p className="text-gray-300">
              Controllo avanzamento lavori e documentazione tecnica.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cos'è un rilievo topografico con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un rilievo topografico con drone consiste nell'acquisizione di
            immagini georeferenziate e dati del territorio tramite voli
            programmati. Le informazioni raccolte possono essere elaborate per
            generare mappe, modelli digitali del terreno e rappresentazioni
            tridimensionali estremamente dettagliate.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questa metodologia permette di coprire superfici molto ampie in
            tempi ridotti rispetto alle tecniche tradizionali. Per questo
            motivo viene utilizzata da geometri, ingegneri, architetti,
            imprese edili, aziende agricole e professionisti del settore
            tecnico.
          </p>

          <p className="leading-8 text-gray-300">
            L'impiego dei droni consente inoltre di operare in aree difficili
            da raggiungere, riducendo tempi operativi e aumentando la quantità
            di dati raccolti durante ogni missione.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Da cosa dipende il costo del rilievo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il costo di un rilievo topografico varia in base a diversi
              fattori. Tra i più importanti troviamo l'estensione dell'area,
              la complessità del terreno, il livello di precisione richiesto e
              il tipo di elaborazione finale.
            </p>

            <p className="leading-8 text-gray-300">
              Alcuni clienti necessitano solamente di immagini aeree e mappe
              aggiornate, mentre altri richiedono ortofoto ad alta
              risoluzione, modelli tridimensionali o elaborazioni tecniche
              avanzate per progetti professionali.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi disponibili
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Rilievi topografici</li>
              <li>✅ Fotogrammetria con drone</li>
              <li>✅ Ortofoto professionali</li>
              <li>✅ Modelli 3D</li>
              <li>✅ Mappatura terreni</li>
              <li>✅ Monitoraggio cantieri</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come richiedere un rilievo topografico
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Attraverso DroneGuard puoi pubblicare una richiesta indicando
            località, superficie da rilevare e obiettivi del progetto. I
            piloti drone interessati possono candidarsi e proporti la propria
            disponibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ricevere più candidature consente di confrontare diversi
            professionisti e valutare la soluzione più adatta alle esigenze
            tecniche del progetto.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma è utilizzata da professionisti, imprese e privati
            che cercano operatori specializzati in rilievi e mappature con
            drone in tutta Italia.
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