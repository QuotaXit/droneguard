import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per stato avanzamento lavori | DroneGuard",
  description:
    "Trova piloti drone per documentare lo stato avanzamento lavori in cantieri, edilizia, infrastrutture, ristrutturazioni e opere in corso."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per cantieri e documentazione lavori
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per stato avanzamento lavori
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi documentare lo stato avanzamento lavori di un cantiere, una
            ristrutturazione, una nuova costruzione, un'opera edile, un intervento
            su tetti, facciate, capannoni, infrastrutture o aree esterne? Con
            DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto aeree, video periodici, riprese
            dall'alto e materiale visivo utile a imprese, tecnici, direttori
            lavori, committenti, amministratori, investitori e proprietari che
            vogliono seguire l'evoluzione del cantiere in modo chiaro e ordinato.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Trova un pilota drone
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto periodiche
            </h2>
            <p className="text-gray-300">
              Richiedi immagini dall'alto per confrontare le diverse fasi del
              cantiere e seguire visivamente l'avanzamento dei lavori.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Video di cantiere
            </h2>
            <p className="text-gray-300">
              Ottieni video panoramici, riprese aeree e materiale utile per
              aggiornamenti, presentazioni, report e comunicazioni con il cliente.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti drone disponibili
            </h2>
            <p className="text-gray-300">
              Pubblica il lavoro, indica zona e frequenza delle riprese, e ricevi
              candidature da operatori drone interessati.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per documentare l'avanzamento lavori
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In un cantiere è importante avere una documentazione visiva chiara
              delle fasi di lavoro. Le foto scattate da terra spesso mostrano solo
              una parte dell'area, mentre il drone permette di osservare il
              cantiere dall'alto e di vedere meglio spazi, accessi, mezzi, zone di
              deposito, scavi, coperture, facciate, strutture e aree operative.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le immagini aeree possono essere utili per confrontare lo stato dei
              lavori settimana dopo settimana, mese dopo mese o in momenti precisi
              del progetto. Questo aiuta imprese, tecnici e committenti a capire
              come procede l'intervento e a conservare una memoria visiva ordinata
              dell'intero percorso.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone non sostituisce la direzione lavori, le verifiche tecniche
              o la contabilità di cantiere, ma può diventare uno strumento molto
              utile per documentare, comunicare e mostrare in modo immediato
              l'evoluzione reale dell'opera.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per stato avanzamento lavori
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree periodiche del cantiere</li>
              <li>✅ Video di avanzamento lavori</li>
              <li>✅ Riprese prima, durante e dopo l'intervento</li>
              <li>✅ Documentazione di scavi, coperture e strutture</li>
              <li>✅ Materiale per report e aggiornamenti</li>
              <li>✅ Immagini per committenti e investitori</li>
              <li>✅ Riprese per imprese edili e tecnici</li>
              <li>✅ Confronto visivo tra diverse fasi del lavoro</li>
              <li>✅ Materiale ordinato per archivio digitale</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per cantieri edili, ristrutturazioni e nuove costruzioni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può essere utilizzato in molti contesti: cantieri edili,
            ristrutturazioni, nuove costruzioni, lavori su facciate, rifacimento
            tetti, interventi su coperture, demolizioni, ampliamenti, opere
            stradali, aree industriali, piazzali, magazzini, infrastrutture e
            grandi proprietà. Ogni progetto può avere fasi diverse e il materiale
            aereo permette di raccontarle in modo semplice.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per esempio, in una ristrutturazione importante si possono documentare
            le condizioni iniziali, l'avanzamento delle demolizioni, la posa di
            nuove strutture, il rifacimento della copertura, l'organizzazione del
            cantiere e il risultato finale. In una nuova costruzione, invece, si
            può seguire l'evoluzione dallo scavo iniziale fino al completamento
            dell'edificio.
          </p>

          <p className="leading-8 text-gray-300">
            Avere foto e video ordinati nel tempo aiuta a mostrare il lavoro fatto,
            comunicare con il cliente, valorizzare l'impresa e creare una memoria
            visiva utile anche dopo la chiusura del cantiere.
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
                Crea il tuo account come cliente, impresa, tecnico, committente,
                direttore lavori o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Ricevi crediti
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
                Descrivi il cantiere, la città, la frequenza delle riprese e il
                tipo di materiale che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti disponibilità,
                consegna e modalità operative.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Report fotografici per committenti e clienti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le foto aeree possono essere inserite in report periodici, email,
              presentazioni, aggiornamenti per il committente, documenti interni e
              archivi digitali. Un'immagine dall'alto permette di spiegare meglio
              l'avanzamento del lavoro rispetto a una semplice descrizione scritta.
            </p>

            <p className="leading-8 text-gray-300">
              Questo è utile soprattutto quando il cliente non può visitare spesso
              il cantiere, quando l'opera è distante, quando ci sono più soggetti
              coinvolti o quando serve una comunicazione più professionale e
              immediata.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Video per imprese edili e professionisti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Oltre alla documentazione tecnica, un video drone può essere utile
              anche per valorizzare il lavoro dell'impresa. Le riprese possono
              mostrare il cantiere, l'organizzazione, le fasi principali e il
              risultato finale in modo più efficace rispetto alle immagini da
              terra.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale può essere usato per portfolio, sito web, social,
              presentazioni aziendali, casi studio e comunicazioni commerciali.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Riprese prima, durante e dopo il cantiere
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Uno dei modi più efficaci per usare il drone è documentare il progetto
            in tre momenti: prima dell'inizio dei lavori, durante le fasi
            principali e alla fine dell'intervento. Questo permette di creare un
            confronto visivo molto chiaro tra lo stato iniziale e il risultato
            finale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini iniziali possono mostrare l'area prima dell'apertura del
            cantiere, gli accessi, lo stato del terreno, le strutture esistenti e
            le condizioni generali. Le riprese intermedie possono documentare
            scavi, montaggi, demolizioni, posa di materiali, avanzamento delle
            strutture, rifacimento coperture o lavori su facciate. Le riprese
            finali possono valorizzare il completamento del progetto.
          </p>

          <p className="leading-8 text-gray-300">
            Con DroneGuard puoi richiedere un singolo intervento oppure più uscite
            programmate, in base al tipo di cantiere e alla frequenza con cui vuoi
            aggiornare la documentazione.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Cantieri privati
            </h2>
            <p className="text-gray-300">
              Riprese per ville, palazzi, condomini, ristrutturazioni, nuove
              costruzioni, coperture, facciate e sistemazioni esterne.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Cantieri aziendali
            </h2>
            <p className="text-gray-300">
              Documentazione per capannoni, magazzini, aree produttive, piazzali,
              stabilimenti, ampliamenti e interventi su immobili industriali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Opere e infrastrutture
            </h2>
            <p className="text-gray-300">
              Foto e video per strade, aree esterne, cantieri infrastrutturali,
              opere pubbliche, urbanizzazioni e interventi territoriali.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante spiegare bene il
            tipo di cantiere e il risultato che vuoi ottenere. Puoi indicare la
            città, la zona, la tipologia di lavoro, la fase attuale, la durata
            prevista, la frequenza delle riprese e il tipo di consegna desiderata.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se ti servono foto, video, riprese panoramiche,
            immagini dettagliate di alcune aree, documentazione mensile,
            sopralluoghi periodici, confronto prima e dopo, materiale per report o
            contenuti da usare anche per comunicazione aziendale.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere informazioni pratiche come accesso al cantiere, orari
            disponibili, presenza di gru o ponteggi, aree di decollo, referente sul
            posto, eventuali limitazioni e modalità di consegna dei file.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per stato avanzamento lavori
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per documentare lo stato avanzamento lavori
              di un cantiere edile. Mi servono foto aeree e brevi video
              panoramici una volta al mese, per mostrare l'evoluzione del cantiere,
              le aree operative, le strutture realizzate, le coperture e lo stato
              generale dei lavori. Il materiale verrà usato per report interni e
              aggiornamenti al committente.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            servizio, la frequenza, l'obiettivo delle riprese e il tipo di
            materiale da consegnare.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per stato avanzamento lavori?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla città, alla durata delle riprese,
            alla dimensione del cantiere, alla complessità dell'area, alla
            frequenza delle uscite e al tipo di consegna richiesta. Un singolo
            sopralluogo ha un costo diverso rispetto a un monitoraggio mensile o a
            un servizio programmato per tutta la durata del cantiere.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il materiale finale incide sul prezzo. Alcuni clienti chiedono
            solo foto grezze, altri preferiscono foto selezionate, video brevi,
            montaggi, cartelle ordinate per data, report visivi o contenuti già
            pronti per essere condivisi con clienti, committenti o direzione
            lavori.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo fisso. La piattaforma permette di
            pubblicare il lavoro e ricevere candidature da piloti drone
            interessati, così cliente e professionista possono accordarsi sul
            servizio più adatto.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare il drone per seguire un cantiere nel tempo?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video periodici per documentare le
                diverse fasi del cantiere e confrontare l'avanzamento dei lavori.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere riprese mensili?
              </h3>
              <p className="text-gray-300">
                Sì, nella richiesta puoi specificare se ti servono riprese
                settimanali, mensili, a fasi precise o solo prima e dopo
                l'intervento.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Le immagini possono essere usate nei report?
              </h3>
              <p className="text-gray-300">
                Sì, foto e video possono essere usati per report, email,
                presentazioni, archivi digitali e aggiornamenti verso clienti,
                committenti o tecnici.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard fa direttamente le riprese?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone. Il
                servizio viene svolto dal professionista scelto dal cliente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare una richiesta?
              </h3>
              <p className="text-gray-300">
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono 10
                crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                I piloti pagano per candidarsi?
              </h3>
              <p className="text-gray-300">
                Sì, rispondere o candidarsi a un annuncio costa 5 crediti. I nuovi
                piloti ricevono 50 crediti gratuiti dopo la registrazione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per stato avanzamento lavori
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video periodici, riprese di
            cantiere, documentazione dello stato avanzamento lavori e materiale
            visivo utile a imprese, tecnici, committenti, amministratori,
            proprietari e professionisti.
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