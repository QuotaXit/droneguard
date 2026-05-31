import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ortomosaico con drone | DroneGuard",
  description:
    "Trova piloti drone per ortomosaici, ortofoto, rilievi aerei, fotogrammetria, mappe tecniche, terreni, cantieri, cave, aziende agricole e aree estese."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per ortomosaici e mappe aeree
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ortomosaico con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            L'ortomosaico con drone è un elaborato ottenuto dall'unione di molte
            immagini aeree acquisite in modo ordinato sopra un'area. Attraverso la
            fotogrammetria, le fotografie scattate dal drone vengono elaborate per
            creare una vista continua, dettagliata e più leggibile del territorio.
            Questo tipo di servizio è utile per terreni, cantieri, aziende
            agricole, cave, discariche, aree industriali, lotti edificabili,
            parchi fotovoltaici, infrastrutture e superfici estese da documentare.
            Con DroneGuard puoi trovare piloti drone disponibili per realizzare
            ortomosaici, ortofoto, rilievi aerei e documentazione tecnica per
            professionisti, imprese, studi tecnici, aziende e privati.
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
              Vista completa dell'area
            </h2>
            <p className="text-gray-300">
              L'ortomosaico permette di visualizzare un terreno, un cantiere o
              un'area estesa in un'unica immagine aerea ordinata e dettagliata.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Supporto per studi tecnici
            </h2>
            <p className="text-gray-300">
              Geometri, ingegneri, architetti e progettisti possono usare
              ortomosaici come base visiva per analisi, relazioni, verifiche e
              presentazioni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Confronto nel tempo
            </h2>
            <p className="text-gray-300">
              Ripetere l'acquisizione in più momenti permette di confrontare lo
              stato di un'area, monitorare avanzamenti e documentare cambiamenti.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Cos'è un ortomosaico con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un ortomosaico è una composizione di più immagini aeree acquisite
              dal drone e unite tramite elaborazione fotogrammetrica. Durante il
              volo, il drone scatta fotografie sovrapposte seguendo un percorso
              pianificato. Le immagini vengono poi elaborate per creare una
              rappresentazione continua dell'area, più ordinata e completa rispetto
              a una semplice sequenza di fotografie singole.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Questo elaborato è particolarmente utile quando serve osservare una
              superficie ampia con una visione complessiva. Un ortomosaico può
              mostrare terreni, strade, confini indicativi, piazzali, fabbricati,
              depositi, coltivazioni, zone di scavo, aree di cantiere, percorsi,
              vegetazione, accessi e altri elementi presenti nell'area rilevata.
              Per questo viene richiesto da professionisti tecnici, imprese edili,
              aziende agricole, amministrazioni, proprietari di terreni e società
              che devono documentare o analizzare un territorio.
            </p>

            <p className="leading-8 text-gray-300">
              DroneGuard ti permette di pubblicare una richiesta per un
              ortomosaico con drone e ricevere candidature da piloti interessati.
              Puoi indicare la zona, la dimensione dell'area, il risultato
              desiderato e il tipo di utilizzo finale, così da trovare più
              facilmente un operatore adatto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Dove può essere utile
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Terreni agricoli e lotti edificabili</li>
              <li>✅ Cantieri edili e aree di lavoro</li>
              <li>✅ Cave, discariche e zone industriali</li>
              <li>✅ Aziende agricole e coltivazioni</li>
              <li>✅ Parchi fotovoltaici e impianti estesi</li>
              <li>✅ Aree da documentare prima e dopo i lavori</li>
              <li>✅ Supporto a relazioni e report tecnici</li>
              <li>✅ Monitoraggio visivo periodico del territorio</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ortomosaici per terreni, cantieri e aree estese
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Uno degli utilizzi più frequenti dell'ortomosaico con drone riguarda i
            terreni. Un proprietario, un geometra, un'impresa o uno studio tecnico
            può avere bisogno di una rappresentazione dall'alto per capire meglio
            forma, accessi, posizione, presenza di strade, alberature, fabbricati,
            recinzioni, zone di passaggio e caratteristiche generali dell'area.
            In questi casi l'ortomosaico permette di avere una visione unica e
            ordinata, più semplice da leggere rispetto a tante immagini separate.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nei cantieri, un ortomosaico può essere usato per documentare
            l'avanzamento dei lavori, confrontare lo stato iniziale e quello
            successivo, osservare l'organizzazione dell'area, verificare piazzali,
            depositi, accessi, strade interne, scavi e zone modificate. Questo è
            utile per imprese edili, direzione lavori, committenti, tecnici e
            responsabili che vogliono avere una documentazione visiva chiara e
            aggiornata.
          </p>

          <p className="leading-8 text-gray-300">
            Per aree industriali, cave, discariche, impianti fotovoltaici e
            superfici molto ampie, l'ortomosaico può aiutare a leggere meglio la
            distribuzione degli spazi. Può essere usato come base visiva per
            controlli, report, presentazioni, confronti temporali e programmazione
            di interventi.
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
                Descrivi l'area, la città, il tipo di ortomosaico e il risultato
                che vuoi ottenere.
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
              Differenza tra ortofoto e ortomosaico
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I termini ortofoto e ortomosaico vengono spesso usati insieme. In
              generale, l'ortomosaico nasce dall'unione di tante immagini aeree,
              mentre l'ortofoto è il risultato finale corretto e reso più adatto a
              una lettura tecnica. In entrambi i casi, l'obiettivo è ottenere una
              rappresentazione aerea ordinata dell'area rilevata.
            </p>

            <p className="leading-8 text-gray-300">
              Quando pubblichi una richiesta su DroneGuard, puoi spiegare se ti
              serve un semplice elaborato visivo, un ortomosaico più tecnico,
              un'ortofoto, un file georeferenziato, una mappa da allegare a una
              relazione o materiale per una presentazione.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Monitoraggio e aggiornamenti periodici
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un ortomosaico può essere realizzato una sola volta oppure ripetuto
              nel tempo. Nei cantieri, nelle cave, nelle aziende agricole e nelle
              aree soggette a modifiche, acquisire immagini periodiche permette di
              confrontare lo stato dell'area e capire cosa è cambiato.
            </p>

            <p className="leading-8 text-gray-300">
              Questo approccio può essere utile per documentare avanzamenti,
              modifiche del terreno, lavori esterni, sistemazioni, depositi,
              coltivazioni, scavi e interventi realizzati in momenti diversi.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova piloti drone per ortomosaici professionali
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta per realizzare un
            ortomosaico con drone. È utile indicare la città, la zona, la
            dimensione indicativa dell'area, il tipo di superficie da rilevare e
            l'obiettivo finale. Ad esempio, puoi richiedere un ortomosaico di un
            terreno, un cantiere, una cava, un'azienda agricola, una discarica, un
            impianto fotovoltaico, un'area industriale o un lotto da documentare.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, specifica se ti serve solo una
            visualizzazione aerea, un elaborato tecnico, un file georeferenziato,
            immagini per una relazione, materiale da usare in una presentazione o
            un confronto tra due momenti diversi. È utile anche indicare se il
            lavoro deve essere ripetuto nel tempo o se si tratta di un'acquisizione
            singola.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma può essere utilizzata da geometri, architetti,
            ingegneri, imprese edili, aziende agricole, studi tecnici,
            amministrazioni, proprietari di terreni, aziende industriali e
            professionisti che hanno bisogno di una documentazione aerea ordinata,
            chiara e utile per analisi o comunicazione.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Cos'è un ortomosaico con drone?
              </h3>
              <p className="text-gray-300">
                È un'immagine aerea continua ottenuta unendo molte fotografie
                scattate dal drone. Serve a rappresentare in modo ordinato terreni,
                cantieri, aree agricole, cave e superfici estese.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                A cosa serve un ortomosaico?
              </h3>
              <p className="text-gray-300">
                Può servire per documentare un'area, analizzare un terreno,
                monitorare un cantiere, confrontare cambiamenti nel tempo o fornire
                materiale visivo a tecnici e professionisti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È diverso da una semplice foto aerea?
              </h3>
              <p className="text-gray-300">
                Sì, una foto aerea è uno scatto singolo. Un ortomosaico nasce
                dall'unione di molte immagini e offre una rappresentazione più
                completa dell'intera area.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente ortomosaici?
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
            Trova un pilota drone per ortomosaici e rilievi aerei
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e ricevi candidature
            da piloti drone interessati a realizzare ortomosaici, ortofoto,
            fotogrammetria, rilievi aerei, mappe visuali, documentazione di
            terreni, cantieri, cave, aree agricole, impianti e zone tecniche.
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