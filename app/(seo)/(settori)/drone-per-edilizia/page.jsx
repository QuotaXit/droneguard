import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per edilizia | DroneGuard",
  description:
    "Trova piloti drone per edilizia, rilievi, fotogrammetria, monitoraggio cantieri e ispezioni tecniche. Pubblica gratuitamente una richiesta su DroneGuard."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per edilizia
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per edilizia
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            I droni stanno rivoluzionando il settore edilizio grazie alla
            possibilità di acquisire immagini aeree, effettuare rilievi,
            monitorare cantieri e controllare strutture in modo rapido ed
            efficiente. Attraverso DroneGuard puoi pubblicare una richiesta e
            ricevere candidature da piloti drone interessati a collaborare con
            imprese edili, studi tecnici, geometri, architetti, ingegneri e
            professionisti del settore.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Registrati gratis
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Rilievi e fotogrammetria
            </h2>
            <p className="leading-7 text-gray-300">
              Acquisizione di immagini aeree per rilievi, ortofoto e supporto
              alle attività di progettazione e pianificazione.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Monitoraggio cantieri
            </h2>
            <p className="leading-7 text-gray-300">
              Controlla l'avanzamento dei lavori con documentazione fotografica
              e video aggiornata nel tempo.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ispezioni tecniche
            </h2>
            <p className="leading-7 text-gray-300">
              Verifica coperture, facciate e strutture riducendo rischi e tempi
              operativi.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Perché usare un drone in edilizia
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nel settore delle costruzioni è fondamentale poter osservare e
            documentare l'intera area di lavoro. I droni consentono di ottenere
            una visione completa del cantiere, monitorare le attività e
            raccogliere informazioni utili per imprese, tecnici e committenti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Grazie alle immagini aeree è possibile individuare eventuali
            criticità, verificare l'organizzazione delle aree operative e
            documentare l'avanzamento dei lavori con precisione.
          </p>

          <p className="leading-8 text-gray-300">
            Le fotografie e i video possono inoltre essere utilizzati per
            relazioni tecniche, documentazione interna, portfolio aziendali e
            aggiornamenti destinati ai clienti.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Monitoraggio dei cantieri
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Uno degli utilizzi più richiesti dei droni riguarda il monitoraggio
            dei cantieri. Attraverso voli periodici è possibile creare uno
            storico fotografico dell'avanzamento dei lavori e confrontare le
            diverse fasi del progetto.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini raccolte possono aiutare imprese e professionisti a
            verificare lo stato delle opere, controllare tempistiche e fornire
            aggiornamenti chiari a clienti e collaboratori.
          </p>

          <p className="leading-8 text-gray-300">
            Questa attività è particolarmente utile per cantieri residenziali,
            industriali, commerciali e infrastrutturali.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Rilievi e fotogrammetria per edilizia
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            La fotogrammetria con drone consente di raccogliere immagini utili
            alla creazione di modelli tridimensionali, ortofoto e mappe ad alta
            risoluzione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questi dati possono supportare attività di progettazione,
            pianificazione, analisi del terreno e gestione delle opere.
          </p>

          <p className="leading-8 text-gray-300">
            Rispetto ai metodi tradizionali, il drone permette di acquisire
            grandi quantità di informazioni in tempi ridotti e con costi spesso
            inferiori.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezioni di edifici e strutture
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I droni vengono utilizzati per ispezionare facciate, coperture,
            tetti, strutture industriali e aree difficili da raggiungere.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo consente di ottenere immagini dettagliate senza dover
            installare ponteggi o utilizzare piattaforme elevatrici per una
            semplice verifica preliminare.
          </p>

          <p className="leading-8 text-gray-300">
            Le fotografie possono evidenziare anomalie, deterioramenti e altre
            situazioni che richiedono approfondimenti tecnici.
          </p>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Vantaggi per imprese e professionisti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le imprese edili possono utilizzare il drone per migliorare il
              controllo delle attività e ottenere una documentazione completa
              delle opere eseguite.
            </p>

            <p className="leading-8 text-gray-300">
              Studi tecnici, geometri, architetti e ingegneri possono invece
              sfruttare le immagini aeree come supporto alle proprie attività
              professionali.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Servizi più richiesti
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Rilievi aerei</li>
              <li>✅ Fotogrammetria</li>
              <li>✅ Ispezione facciate</li>
              <li>✅ Ispezione coperture</li>
              <li>✅ Documentazione lavori</li>
            </ul>
          </div>
        </div>

        <div className="mb-16 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
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
                Descrivi il servizio drone richiesto.
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

        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa un servizio drone per edilizia?
              </h3>
              <p className="leading-7 text-gray-300">
                Il costo varia in base al tipo di lavoro richiesto e alle
                offerte ricevute dai piloti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere monitoraggi periodici?
              </h3>
              <p className="leading-7 text-gray-300">
                Sì, puoi specificarlo direttamente nella richiesta.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente i lavori?
              </h3>
              <p className="leading-7 text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Cerchi un pilota drone per edilizia?
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e pubblica la tua richiesta.
            Ricevi candidature da piloti drone interessati al tuo progetto.
          </p>

          <Link href="/register">
            <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
              Registrati gratis
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}