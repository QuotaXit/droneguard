import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Calcolo volumi con drone | DroneGuard",
  description:
    "Trova piloti drone per calcolo volumi, rilievi volumetrici, cumuli, cave, cantieri, scavi, riporti, depositi, discariche e movimento terra."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per calcolo volumi e rilievi tecnici
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Calcolo volumi con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Il calcolo volumi con drone è una soluzione utile per aziende, cave,
            imprese edili, cantieri, studi tecnici, geometri, ingegneri e
            professionisti che devono stimare quantità di materiale, cumuli,
            scavi, riporti, depositi, aree di movimento terra e superfici
            modificate. Attraverso rilievi aerei, fotogrammetria, ortofoto,
            modelli 3D e nuvole di punti, il drone può raccogliere dati visivi da
            utilizzare come supporto per analisi volumetriche, confronti prima e
            dopo, monitoraggi periodici e documentazione tecnica. Con DroneGuard
            puoi trovare piloti drone disponibili per servizi di calcolo volumi,
            rilievi volumetrici, documentazione di cantieri, cave, discariche,
            depositi industriali e aree operative.
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
              Volumi di cumuli
            </h2>
            <p className="text-gray-300">
              Il drone può aiutare a documentare cumuli di terra, sabbia, ghiaia,
              inerti, materiali di scavo, biomassa e depositi presenti in
              piazzali, cave e cantieri.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Scavi e riporti
            </h2>
            <p className="text-gray-300">
              Le acquisizioni aeree possono supportare il confronto tra stato
              iniziale e finale di uno scavo, di un riporto o di un intervento di
              movimento terra.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Report e monitoraggi
            </h2>
            <p className="text-gray-300">
              Ripetere il rilievo in momenti diversi permette di creare uno
              storico visivo utile per monitorare materiali, superfici e variazioni
              volumetriche.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché calcolare i volumi con un drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In molti cantieri e aree operative è necessario conoscere o stimare
              la quantità di materiale presente, spostato, accumulato o rimosso.
              Il calcolo dei volumi può riguardare cumuli di inerti, terra,
              sabbia, ghiaia, scarti di lavorazione, materiali da costruzione,
              biomassa, compost, scavi, riporti e superfici modificate. Il drone
              consente di acquisire immagini dall'alto e da più angolazioni,
              creando una base visiva utile per elaborazioni successive.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Rispetto a una valutazione fatta solo da terra, il drone permette di
              osservare l'intera area in modo più completo. Questo è utile
              soprattutto quando i cumuli sono grandi, irregolari, difficili da
              misurare manualmente o distribuiti su superfici estese. Le immagini
              raccolte possono essere trasformate in modelli tridimensionali,
              ortofoto e nuvole di punti, strumenti che possono supportare il
              lavoro di tecnici e professionisti.
            </p>

            <p className="leading-8 text-gray-300">
              DroneGuard non esegue direttamente il calcolo, ma mette in contatto
              clienti e piloti drone. Puoi pubblicare una richiesta indicando il
              tipo di area, il materiale da rilevare, il risultato che ti serve e
              la zona del lavoro. I piloti interessati potranno candidarsi e
              proporti la propria disponibilità.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Dove può essere utile
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Calcolo volume cumuli di terra e inerti</li>
              <li>✅ Cave, discariche e depositi di materiali</li>
              <li>✅ Cantieri con scavi e riporti</li>
              <li>✅ Movimento terra e sistemazioni esterne</li>
              <li>✅ Piazzali industriali e aree logistiche</li>
              <li>✅ Aziende agricole e biomassa</li>
              <li>✅ Confronto prima e dopo i lavori</li>
              <li>✅ Report periodici per aziende e studi tecnici</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Calcolo volumi per cave, cantieri e depositi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nelle cave, il calcolo dei volumi con drone può essere utile per
            documentare cumuli di materiale estratto, zone di deposito, piazzali,
            fronti di scavo e aree di lavorazione. Una vista dall'alto permette di
            leggere meglio la distribuzione dei materiali e di creare un archivio
            visivo aggiornato nel tempo. Questo può aiutare nella gestione interna,
            nella pianificazione delle attività e nella comunicazione con tecnici,
            responsabili e professionisti incaricati.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nei cantieri edili, il drone può supportare il controllo di scavi,
            riporti, riempimenti, livellamenti, sistemazioni esterne e materiali
            depositati. Un rilievo eseguito prima e dopo un intervento può
            documentare le modifiche avvenute nell'area, mentre un monitoraggio
            periodico può aiutare a seguire l'evoluzione del cantiere nel tempo.
            Questo approccio può essere utile per imprese, direzione lavori,
            committenti e studi tecnici.
          </p>

          <p className="leading-8 text-gray-300">
            Anche per discariche, depositi industriali, aziende agricole, impianti
            di trattamento, aree logistiche e siti di stoccaggio, il drone può
            offrire un supporto importante. Quando i materiali cambiano spesso o
            vengono movimentati con frequenza, avere rilievi aggiornati può aiutare
            a mantenere una documentazione più ordinata e confrontabile.
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
                Crea gratuitamente il tuo account come cliente, azienda,
                professionista o pilota drone.
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
                Descrivi area, materiali, obiettivo del calcolo e tipo di
                elaborato richiesto.
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
              Fotogrammetria e nuvole di punti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Per supportare il calcolo dei volumi, spesso si utilizzano immagini
              acquisite con sovrapposizione adeguata e poi elaborate tramite
              software fotogrammetrici. Il risultato può includere modelli 3D,
              ortofoto, nuvole di punti e superfici digitali utili per analizzare
              la forma dei cumuli o del terreno.
            </p>

            <p className="leading-8 text-gray-300">
              La precisione finale dipende da diversi fattori: metodo di
              acquisizione, attrezzatura, punti di riferimento, condizioni del
              luogo, qualità delle immagini, elaborazione e competenza del
              professionista. Per questo è importante spiegare bene cosa ti serve
              quando pubblichi la richiesta.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Confronto prima e dopo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Uno degli usi più pratici del drone è il confronto tra due momenti
              diversi. Puoi richiedere un rilievo prima dell'inizio dei lavori e
              uno dopo lo scavo, il riporto, la rimozione o lo spostamento dei
              materiali. In questo modo è possibile documentare visivamente le
              modifiche avvenute nell'area.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di documentazione può essere utile nei cantieri, nelle
              cave, nei depositi, nei lavori agricoli, nelle sistemazioni esterne
              e in tutti i casi in cui è importante dimostrare o controllare come
              una superficie è cambiata nel tempo.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova piloti drone per calcolare volumi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta per calcolo volumi con
            drone e ricevere candidature da operatori interessati. Per ottenere
            risposte più precise, è utile indicare la città, la zona, il tipo di
            area, la dimensione indicativa, il materiale da rilevare e il risultato
            atteso. Ad esempio, puoi richiedere il calcolo del volume di un cumulo,
            il confronto prima e dopo uno scavo, il monitoraggio periodico di una
            cava o la documentazione di un deposito industriale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È importante specificare se ti serve solo materiale fotografico, un
            modello 3D, un'ortofoto, una nuvola di punti, un report, un file da
            usare con software tecnico o un'elaborazione finalizzata alla stima
            volumetrica. Puoi anche indicare se il lavoro va svolto una sola volta
            o se ti serve un monitoraggio periodico.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma può essere utilizzata da cave, imprese edili, aziende
            di movimento terra, studi tecnici, geometri, ingegneri, gestori di
            discariche, aziende agricole, industrie, amministrazioni e
            professionisti che hanno bisogno di documentare materiali, superfici e
            variazioni di volume con supporto aereo.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Si possono calcolare i volumi con un drone?
              </h3>
              <p className="text-gray-300">
                Sì, il drone può acquisire immagini e dati visivi utili per
                supportare il calcolo dei volumi di cumuli, scavi, riporti,
                depositi e materiali stoccati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Per quali materiali è utile il calcolo volumi?
              </h3>
              <p className="text-gray-300">
                Può essere utile per terra, sabbia, ghiaia, inerti, materiali di
                scavo, pietrisco, compost, biomassa e altri materiali accumulati o
                depositati in aree operative.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone garantisce sempre precisione tecnica?
              </h3>
              <p className="text-gray-300">
                La precisione dipende da metodo, attrezzatura, condizioni del sito,
                punti di riferimento, elaborazione e competenza del professionista.
                È importante affidarsi a operatori qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente il calcolo volumi?
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
            Trova un pilota drone per calcolo volumi
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e ricevi candidature
            da piloti drone interessati a realizzare calcolo volumi, rilievi
            volumetrici, documentazione di cumuli, cave, cantieri, scavi, riporti,
            depositi, discariche, materiali stoccati e aree industriali.
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