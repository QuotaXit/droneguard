import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ortofoto con drone | DroneGuard",
  description:
    "Trova piloti drone per ortofoto, ortomosaici, rilievi aerei, fotogrammetria, mappe georeferenziate, terreni, cantieri, aziende agricole e studi tecnici."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per ortofoto e rilievi aerei
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ortofoto con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            L'ortofoto con drone è un elaborato molto utile per rappresentare un
            terreno, un cantiere, un'area agricola, un lotto edificabile, una cava,
            un'infrastruttura o una zona da analizzare con una vista dall'alto
            precisa e ordinata. A differenza di una semplice fotografia aerea,
            l'ortofoto viene generata tramite acquisizione e successiva
            elaborazione di immagini, così da ottenere una rappresentazione più
            leggibile, misurabile e adatta a valutazioni tecniche, progettazione,
            documentazione e monitoraggio. Con DroneGuard puoi trovare piloti
            drone disponibili per realizzare ortofoto, ortomosaici, rilievi aerei,
            fotogrammetria e documentazione visiva per professionisti, aziende,
            studi tecnici e privati.
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
              Mappe aeree dettagliate
            </h2>
            <p className="text-gray-300">
              Le ortofoto permettono di visualizzare dall'alto terreni, lotti,
              cantieri e aree estese con una lettura più chiara rispetto alle
              semplici immagini panoramiche.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Supporto tecnico
            </h2>
            <p className="text-gray-300">
              Geometri, architetti, ingegneri e studi tecnici possono usare
              ortofoto e ortomosaici come materiale di supporto per analisi,
              relazioni e progettazione.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Monitoraggio nel tempo
            </h2>
            <p className="text-gray-300">
              Ripetere un rilievo aereo in momenti diversi permette di confrontare
              lo stato di un'area, un cantiere, un terreno o una coltivazione.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Cos'è un'ortofoto con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ortofoto è una rappresentazione fotografica dall'alto ottenuta
              attraverso l'elaborazione di più immagini acquisite dal drone.
              Durante il volo, il drone raccoglie una serie di fotografie
              sovrapposte dell'area interessata. Successivamente queste immagini
              possono essere elaborate per creare una vista unica, continua e più
              ordinata dell'intera zona. Il risultato è un'immagine aerea molto
              utile per analizzare lo stato dei luoghi, documentare superfici,
              osservare confini, aree di lavoro, accessi, vegetazione, manufatti e
              altri elementi presenti sul territorio.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Rispetto a una semplice foto scattata dall'alto, l'ortofoto ha una
              funzione più tecnica. Può essere utilizzata come base visiva per
              valutazioni, progettazioni, relazioni, confronti nel tempo e
              documentazione professionale. Per questo viene spesso richiesta da
              geometri, architetti, ingegneri, imprese edili, aziende agricole,
              enti, amministrazioni, studi tecnici e professionisti che hanno
              bisogno di una visione chiara e completa dell'area.
            </p>

            <p className="leading-8 text-gray-300">
              DroneGuard ti aiuta a trovare piloti drone disponibili per questo
              tipo di servizio. Puoi pubblicare una richiesta, spiegare cosa ti
              serve, indicare la zona e ricevere candidature da operatori
              interessati.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Quando serve un'ortofoto
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Rilievi di terreni e lotti edificabili</li>
              <li>✅ Monitoraggio di cantieri edili</li>
              <li>✅ Documentazione di aree agricole</li>
              <li>✅ Analisi di cave, discariche e aree industriali</li>
              <li>✅ Supporto per studi tecnici e progettisti</li>
              <li>✅ Confronto dello stato dei luoghi nel tempo</li>
              <li>✅ Mappatura visiva di superfici estese</li>
              <li>✅ Materiale per relazioni, report e presentazioni</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ortofoto per terreni, cantieri e aree tecniche
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Una delle applicazioni più comuni dell'ortofoto con drone riguarda i
            terreni. Un proprietario, un tecnico o un'impresa può avere bisogno di
            una vista aerea chiara di un lotto agricolo, edificabile, industriale
            o privato. L'ortofoto può aiutare a visualizzare meglio la forma
            dell'area, gli accessi, i confini indicativi, la presenza di strade,
            alberature, fabbricati, recinzioni, fossi, dislivelli e altri elementi
            importanti per comprendere il contesto.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nei cantieri, l'ortofoto può essere utilizzata per documentare lo stato
            dell'area in una fase precisa dei lavori. Ripetendo l'acquisizione in
            momenti diversi, è possibile creare un archivio visivo utile per
            confrontare l'avanzamento, mostrare le modifiche, verificare aree di
            deposito, percorsi, piazzali, opere esterne e organizzazione generale
            del sito. Questo può essere utile per imprese edili, direzione lavori,
            committenti, tecnici e responsabili di progetto.
          </p>

          <p className="leading-8 text-gray-300">
            Anche per cave, discariche, aziende agricole, parchi fotovoltaici,
            aree industriali e infrastrutture, una vista aerea elaborata può
            fornire un supporto prezioso. L'ortofoto permette di leggere meglio
            superfici estese e di conservare una documentazione visiva più
            ordinata rispetto a una serie di fotografie singole.
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
                Crea gratuitamente il tuo account come cliente, professionista,
                azienda o pilota drone.
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
                Descrivi l'area, la città, il tipo di ortofoto e il risultato che
                vuoi ottenere.
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
              Ortofoto e fotogrammetria
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              L'ortofoto è spesso collegata alla fotogrammetria con drone. Il
              pilota acquisisce immagini con un'adeguata sovrapposizione e il
              materiale viene poi elaborato per creare un risultato coerente.
              Questo processo consente di ottenere una rappresentazione aerea più
              adatta a usi tecnici rispetto a un semplice scatto panoramico.
            </p>

            <p className="leading-8 text-gray-300">
              A seconda del progetto, oltre all'ortofoto possono essere richiesti
              anche ortomosaici, nuvole di punti, modelli 3D o altri elaborati. È
              importante specificare fin dall'inizio quale risultato ti serve,
              così i piloti possono candidarsi in modo più preciso.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Confronto prima e dopo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un grande vantaggio dell'ortofoto è la possibilità di confrontare la
              stessa area in momenti diversi. Questo è utile per cantieri, lavori
              di movimento terra, sistemazioni esterne, manutenzioni, coltivazioni,
              cave, discariche e aree soggette a cambiamenti nel tempo.
            </p>

            <p className="leading-8 text-gray-300">
              Avere immagini ordinate e confrontabili può aiutare a capire cosa è
              cambiato, quali aree sono state modificate e come si è evoluto il
              progetto. Per questo molte aziende e studi tecnici possono richiedere
              rilievi periodici con drone.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova piloti drone per ortofoto e ortomosaici
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta per realizzare ortofoto
            con drone. È utile indicare la città, la zona, la dimensione indicativa
            dell'area, il tipo di superficie da rilevare e l'obiettivo finale. Ad
            esempio, puoi richiedere un'ortofoto di un terreno, un cantiere, un
            impianto fotovoltaico, un'azienda agricola, una cava, un lotto in
            vendita o un'area industriale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più adatte, specifica se ti serve solo una
            visualizzazione aerea, un elaborato tecnico, un ortomosaico, un file
            georeferenziato, immagini per una relazione o materiale da usare in
            una presentazione. È utile anche indicare se il rilievo deve essere
            fatto una sola volta o ripetuto nel tempo.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma può essere utilizzata da geometri, architetti,
            ingegneri, imprese edili, aziende agricole, enti, amministrazioni,
            proprietari di terreni, studi tecnici e professionisti che vogliono
            ottenere immagini aeree ordinate e utili per documentare un'area.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Cos'è un'ortofoto con drone?
              </h3>
              <p className="text-gray-300">
                È una rappresentazione fotografica dall'alto ottenuta elaborando
                più immagini acquisite dal drone. Può essere utile per visualizzare
                terreni, cantieri, aree agricole e superfici estese.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                L'ortofoto è diversa da una semplice foto aerea?
              </h3>
              <p className="text-gray-300">
                Sì, una semplice foto aerea è uno scatto singolo, mentre
                l'ortofoto nasce dall'elaborazione di più immagini e ha un uso più
                ordinato e tecnico.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere ortofoto per un cantiere?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta per documentare un cantiere,
                confrontare l'avanzamento dei lavori o creare materiale utile per
                report e presentazioni.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente ortofoto?
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
                crediti gratuiti dopo la registrazione, mentre i piloti ricevono
                50 crediti gratuiti.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per ortofoto professionali
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e ricevi candidature
            da piloti drone interessati a realizzare ortofoto, ortomosaici,
            fotogrammetria, rilievi aerei, mappe visuali, documentazione di
            terreni, cantieri, aree agricole, cave e zone tecniche.
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