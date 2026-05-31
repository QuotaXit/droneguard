import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per geometri | DroneGuard",
  description:
    "Trova piloti drone per geometri, rilievi topografici, fotogrammetria, ortofoto, modelli 3D, cantieri, terreni e documentazione tecnica."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per geometri e studi tecnici
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per geometri
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Il drone è diventato uno strumento sempre più utile per geometri,
            studi tecnici, professionisti del territorio e consulenti che si
            occupano di rilievi, misurazioni, documentazione fotografica,
            controllo cantieri, terreni, fabbricati e aree difficili da
            raggiungere. Grazie alle riprese aeree e alla fotogrammetria, è
            possibile ottenere immagini dettagliate, ortofoto, modelli 3D,
            nuvole di punti e dati visivi utili per analisi tecniche,
            progettazione, verifiche e presentazioni. Con DroneGuard puoi
            trovare piloti drone disponibili per collaborare con geometri e
            professionisti tecnici in tutta Italia.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Registrati gratis
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Rilievi più rapidi
            </h2>
            <p className="text-gray-300">
              Il drone permette di acquisire immagini e dati dall'alto in modo
              veloce, riducendo i tempi di sopralluogo su terreni, cantieri,
              fabbricati e aree estese.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Supporto alla fotogrammetria
            </h2>
            <p className="text-gray-300">
              Le immagini acquisite possono essere utilizzate per creare
              ortofoto, modelli tridimensionali, nuvole di punti e materiali
              tecnici da integrare nel lavoro dello studio.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione tecnica
            </h2>
            <p className="text-gray-300">
              Foto e video con drone aiutano a documentare lo stato dei luoghi,
              l'avanzamento di un cantiere, una copertura, un terreno o un
              immobile da analizzare.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché un geometra può usare il drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il lavoro del geometra richiede precisione, documentazione,
              sopralluoghi e capacità di leggere correttamente lo stato di un
              immobile o di un terreno. Il drone non sostituisce la competenza
              del professionista, ma può diventare uno strumento molto utile per
              raccogliere informazioni visive da prospettive difficili da ottenere
              con metodi tradizionali. In molti casi, una vista dall'alto consente
              di comprendere meglio confini, accessi, pendenze, coperture, aree
              esterne, fabbricati, pertinenze e contesto circostante.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Per i geometri che lavorano su terreni, pratiche edilizie,
              successioni, divisioni, controlli di confine, computi, stime,
              cantieri e verifiche immobiliari, il drone può offrire una
              documentazione più chiara e completa. Le fotografie aeree possono
              essere allegate a relazioni, utilizzate per presentazioni ai clienti
              o integrate in un flusso di lavoro tecnico più ampio.
            </p>

            <p className="leading-8 text-gray-300">
              Attraverso DroneGuard puoi pubblicare una richiesta e cercare piloti
              drone disponibili per rilievi, riprese tecniche, fotogrammetria,
              monitoraggio cantieri e ispezioni visive. In questo modo lo studio
              tecnico può trovare collaboratori esterni senza perdere tempo in
              ricerche casuali.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone utili per geometri
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Rilievi fotografici di terreni</li>
              <li>✅ Riprese aeree di fabbricati</li>
              <li>✅ Fotogrammetria con drone</li>
              <li>✅ Ortofoto e modelli 3D</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Ispezione visiva di coperture e tetti</li>
              <li>✅ Documentazione dello stato dei luoghi</li>
              <li>✅ Supporto per relazioni tecniche</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per rilievi, terreni e pratiche tecniche
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Uno dei casi più comuni in cui un geometra può richiedere un pilota
            drone è il rilievo di un terreno o di un'area estesa. Le immagini
            dall'alto permettono di visualizzare meglio la forma del lotto, la
            posizione rispetto alle strade, la presenza di recinzioni, accessi,
            alberature, fabbricati vicini, pendenze e altri elementi utili alla
            valutazione tecnica. Anche quando non serve un rilievo altamente
            specialistico, una documentazione fotografica aerea può migliorare la
            qualità del lavoro e rendere più chiaro il materiale consegnato al
            cliente.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nel caso di cantieri, il drone può essere utilizzato per seguire
            l'avanzamento dei lavori, controllare lo stato dell'area, creare
            materiale fotografico periodico e documentare situazioni prima,
            durante e dopo l'intervento. Questo può essere utile per imprese,
            direzione lavori, proprietari, amministratori e professionisti che
            devono avere una visione aggiornata del sito.
          </p>

          <p className="leading-8 text-gray-300">
            Per immobili, tetti, coperture, facciate e pertinenze, il drone può
            aiutare il geometra a osservare punti difficilmente raggiungibili
            senza ponteggi, scale o piattaforme. Naturalmente ogni lavoro deve
            essere svolto nel rispetto delle regole, della sicurezza e delle
            autorizzazioni necessarie, scegliendo professionisti competenti e
            attrezzature adatte al servizio richiesto.
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
                Crea gratuitamente il tuo account come cliente, studio tecnico
                o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Ottieni crediti
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I clienti ricevono 10 crediti gratuiti e i piloti ricevono 50
                crediti dopo la registrazione.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Pubblica il lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il tipo di rilievo, la zona, la data indicativa e il
                risultato che ti serve.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti la propria
                disponibilità.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Collaborazioni tra geometri e piloti drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Non tutti gli studi tecnici hanno un drone, un pilota interno o il
              tempo necessario per gestire direttamente ogni acquisizione aerea.
              Per questo può essere utile collaborare con operatori drone esterni,
              soprattutto quando il lavoro richiede immagini aggiornate, video,
              materiale fotografico o acquisizioni da punti difficili da
              raggiungere.
            </p>

            <p className="leading-8 text-gray-300">
              DroneGuard permette al geometra di pubblicare richieste specifiche
              e valutare le candidature ricevute. In questo modo puoi cercare un
              professionista per un singolo intervento, per una collaborazione
              ricorrente o per un progetto tecnico più strutturato.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Quando conviene richiedere un drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Conviene valutare l'uso del drone quando il sopralluogo da terra non
              basta, quando l'area è ampia, quando serve documentare il contesto o
              quando alcune parti dell'immobile sono difficili da osservare. Il
              drone può essere utile anche per creare materiale visivo più chiaro
              da mostrare al cliente finale.
            </p>

            <p className="leading-8 text-gray-300">
              Terreni, cantieri, tetti, fabbricati rurali, immobili isolati,
              capannoni, aree industriali e lotti edificabili sono solo alcuni
              esempi di situazioni in cui le immagini aeree possono offrire un
              valore aggiunto.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Un geometra può usare il drone per rilievi tecnici?
              </h3>
              <p className="text-gray-300">
                Sì, il drone può essere utilizzato come supporto per rilievi,
                documentazione fotografica, monitoraggio cantieri, osservazione di
                terreni e acquisizione di immagini utili al lavoro tecnico.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso trovare un pilota drone per fotogrammetria?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta specificando che
                hai bisogno di fotogrammetria, ortofoto, modelli 3D o altri
                elaborati collegati al rilievo.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente i rilievi?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard è una piattaforma che mette in contatto clienti,
                professionisti e piloti drone. Il servizio viene svolto dal pilota
                o dall'operatore scelto dal cliente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare una richiesta?
              </h3>
              <p className="text-gray-300">
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono 10
                crediti gratuiti dopo la registrazione, mentre i piloti ricevono
                50 crediti gratuiti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Per quali lavori tecnici è utile il drone?
              </h3>
              <p className="text-gray-300">
                Il drone può essere utile per terreni, cantieri, immobili, tetti,
                coperture, fabbricati agricoli, capannoni, aree industriali,
                lotti edificabili e documentazione dello stato dei luoghi.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per il tuo studio tecnico
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e ricevi candidature
            da piloti drone interessati a collaborare con geometri, studi tecnici
            e professionisti per rilievi, fotogrammetria, ispezioni visive,
            documentazione di cantieri, terreni e immobili.
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