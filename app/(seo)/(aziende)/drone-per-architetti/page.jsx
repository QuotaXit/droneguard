import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per architetti | DroneGuard",
  description:
    "Trova piloti drone per architetti, studi di progettazione, rilievi fotografici, video immobiliari, cantieri, edifici, tetti, facciate e documentazione tecnica."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per architetti e studi di progettazione
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per architetti
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Il drone è uno strumento sempre più utile per architetti, studi di
            progettazione, interior designer, professionisti dell'edilizia e
            consulenti che hanno bisogno di immagini aeree, video, rilievi visivi
            e documentazione tecnica. Attraverso le riprese dall'alto è possibile
            osservare un edificio, un lotto, una copertura, una facciata o un
            cantiere da prospettive difficili da ottenere con strumenti
            tradizionali. Con DroneGuard puoi trovare piloti drone disponibili
            per collaborare con architetti e studi professionali nella creazione
            di contenuti visivi, sopralluoghi, monitoraggi e materiale utile per
            progetti, presentazioni, pratiche e comunicazione.
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
              Documentazione visiva
            </h2>
            <p className="text-gray-300">
              Foto e video con drone aiutano a documentare edifici, aree esterne,
              tetti, facciate, cantieri e contesti urbani con una visione più
              ampia e completa.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Presentazioni più efficaci
            </h2>
            <p className="text-gray-300">
              Le riprese aeree possono valorizzare un progetto architettonico,
              una ristrutturazione, un immobile di pregio o una proposta da
              mostrare al cliente finale.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Supporto ai sopralluoghi
            </h2>
            <p className="text-gray-300">
              Il drone permette di osservare punti difficili da raggiungere, come
              coperture, corti interne, aree esterne, terreni, capannoni e parti
              alte degli edifici.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché un architetto può usare il drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il lavoro dell'architetto richiede attenzione ai dettagli, visione
              d'insieme e capacità di comunicare un progetto in modo chiaro. Il
              drone può diventare un supporto importante perché consente di
              osservare un edificio o un'area da un punto di vista diverso, più
              completo e spesso più utile rispetto alle sole fotografie da terra.
              Una ripresa aerea può mostrare il rapporto tra l'immobile e il
              contesto, la posizione rispetto alla strada, la distribuzione degli
              spazi esterni, l'orientamento, la copertura, il giardino, le
              pertinenze e gli elementi che caratterizzano il progetto.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Per uno studio di architettura, avere immagini professionali può
              essere utile in molte fasi: prima del progetto, durante il cantiere
              e dopo la consegna dei lavori. Prima dell'intervento, il drone può
              aiutare a raccogliere materiale visivo dello stato dei luoghi.
              Durante i lavori può documentare l'avanzamento del cantiere. A
              progetto concluso può produrre immagini e video da utilizzare nel
              portfolio dello studio, sul sito web, sui social network o nelle
              presentazioni ai clienti.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard l'architetto può pubblicare una richiesta e cercare
              operatori drone interessati al servizio. Questo permette di trovare
              professionisti per riprese aeree, video promozionali, ispezioni
              visive, fotogrammetria, rilievi fotografici e documentazione tecnica
              senza perdere tempo in ricerche casuali.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone utili per architetti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese aeree di edifici e ville</li>
              <li>✅ Documentazione fotografica dello stato dei luoghi</li>
              <li>✅ Video di progetti architettonici conclusi</li>
              <li>✅ Monitoraggio di cantieri e ristrutturazioni</li>
              <li>✅ Ispezione visiva di tetti, facciate e coperture</li>
              <li>✅ Foto aeree per portfolio e sito web dello studio</li>
              <li>✅ Riprese di terreni, lotti e aree esterne</li>
              <li>✅ Supporto a presentazioni per clienti e investitori</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per progetti, ristrutturazioni e cantieri
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può essere utilizzato in modo molto efficace nei progetti di
            ristrutturazione. Prima di iniziare i lavori, le immagini dall'alto
            possono aiutare a comprendere meglio lo stato dell'edificio, la forma
            della copertura, gli accessi, gli spazi esterni, il rapporto con gli
            edifici vicini e le eventuali criticità visibili. Questo tipo di
            documentazione può essere utile per il confronto interno allo studio,
            per spiegare il progetto al cliente e per conservare una memoria visiva
            della situazione iniziale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Durante il cantiere, le riprese con drone possono servire per
            documentare l'avanzamento dei lavori in modo periodico. Le immagini
            possono mostrare lo stato delle coperture, l'organizzazione dell'area,
            l'evoluzione delle opere esterne e il completamento delle diverse fasi.
            Questo è utile per architetti, imprese, committenti, direzione lavori e
            professionisti che devono controllare o raccontare l'evoluzione del
            progetto.
          </p>

          <p className="leading-8 text-gray-300">
            Alla fine dei lavori, il drone diventa uno strumento di comunicazione.
            Un edificio completato, una villa ristrutturata, una struttura
            ricettiva, un complesso immobiliare o un intervento di riqualificazione
            possono essere valorizzati con video e fotografie aeree di qualità. Lo
            studio può usare questi contenuti per mostrare il risultato ottenuto,
            aggiornare il proprio portfolio e presentarsi in modo più professionale
            a nuovi clienti.
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
                Crea il tuo account come cliente, studio professionale o pilota
                drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Ottieni crediti
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I clienti ricevono 10 crediti gratuiti e i piloti ricevono 50
                crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Pubblica il lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi l'edificio, il cantiere, il progetto o il tipo di ripresa
                che ti serve.
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
              Riprese aeree per portfolio e comunicazione
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Per uno studio di architettura, mostrare bene i progetti realizzati
              è fondamentale. Un portfolio con immagini curate trasmette
              professionalità, attenzione al dettaglio e qualità del lavoro. Il
              drone può aggiungere valore perché permette di mostrare l'intervento
              nella sua interezza, non solo nei dettagli interni o nelle viste da
              strada.
            </p>

            <p className="leading-8 text-gray-300">
              Video brevi, fotografie dall'alto e riprese dinamiche possono essere
              utilizzati per sito web, social, presentazioni, campagne
              pubblicitarie e materiali destinati a nuovi clienti. Per ville,
              casali, hotel, agriturismi, complessi residenziali e immobili di
              pregio, questo tipo di contenuto può risultare particolarmente
              efficace.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Ispezioni visive e punti difficili
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In alcuni casi l'architetto ha bisogno di osservare coperture,
              terrazzi, facciate alte, corti interne, parti superiori di un
              edificio o aree difficili da raggiungere. Il drone può offrire una
              prima visione visiva senza dover ricorrere subito a mezzi più
              invasivi, sempre nel rispetto della sicurezza e delle normative.
            </p>

            <p className="leading-8 text-gray-300">
              Questo può essere utile per valutazioni preliminari, sopralluoghi,
              controlli fotografici, relazioni, documentazione dello stato dei
              luoghi e confronto con il cliente o con altri professionisti
              coinvolti nel progetto.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova operatori drone per studi di architettura
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard è pensato per mettere in contatto chi ha bisogno di un
            servizio con piloti drone disponibili. Un architetto può pubblicare
            una richiesta indicando la zona del lavoro, il tipo di immobile, il
            servizio desiderato, la data indicativa e il risultato atteso. I piloti
            interessati possono candidarsi e proporre la propria disponibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo sistema è utile sia per lavori singoli sia per collaborazioni
            continuative. Uno studio può cercare un pilota drone per un progetto
            specifico, per più cantieri, per immobili da fotografare o per creare
            contenuti periodici da usare nella comunicazione. In questo modo il
            professionista può concentrarsi sul progetto, lasciando la parte di
            acquisizione aerea a un operatore specializzato.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma può essere usata da architetti, studi tecnici, imprese,
            agenzie immobiliari, property manager, interior designer e consulenti
            che vogliono valorizzare meglio edifici, progetti e spazi esterni con
            contenuti visivi professionali.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per uno studio di architettura?
              </h3>
              <p className="text-gray-300">
                Sì, il drone può essere utile per documentare edifici, cantieri,
                ristrutturazioni, aree esterne, coperture, facciate e progetti
                conclusi. Può servire sia per lavoro tecnico sia per comunicazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere riprese aeree per un progetto concluso?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta su DroneGuard e cercare piloti
                drone disponibili per realizzare foto e video di un edificio,
                una villa, un cantiere completato o una ristrutturazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone può servire per controllare tetti e facciate?
              </h3>
              <p className="text-gray-300">
                Sì, un drone può essere usato per osservare visivamente coperture,
                facciate, terrazzi e punti difficili da raggiungere. Il servizio
                deve essere svolto da operatori competenti e nel rispetto delle
                regole di sicurezza.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente i servizi?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard è una piattaforma che mette in contatto clienti e
                piloti drone. Il servizio viene svolto dal professionista scelto
                dal cliente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare una richiesta?
              </h3>
              <p className="text-gray-300">
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono 10
                crediti gratuiti, mentre i piloti ricevono 50 crediti gratuiti
                dopo la registrazione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per il tuo studio di architettura
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e ricevi candidature
            da piloti drone interessati a realizzare riprese aeree, foto di
            edifici, video di progetti conclusi, monitoraggio cantieri,
            documentazione tecnica e ispezioni visive per studi di architettura.
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