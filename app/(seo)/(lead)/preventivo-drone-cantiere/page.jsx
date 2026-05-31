import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo drone cantiere | DroneGuard",
  description:
    "Richiedi un preventivo per drone in cantiere. Trova piloti drone per monitoraggio cantieri, avanzamento lavori, riprese aeree, foto tecniche e documentazione edile."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Preventivi drone per cantieri edili
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Preventivo drone cantiere
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai bisogno di un preventivo per utilizzare un drone in cantiere? Con
            DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per monitoraggio cantieri, riprese aeree, foto tecniche,
            video di avanzamento lavori, documentazione prima e dopo l'intervento,
            controllo visivo di aree esterne, coperture, ponteggi, piazzali,
            strutture e zone difficili da osservare da terra. Il drone può aiutare
            imprese edili, tecnici, geometri, architetti, direzione lavori e
            committenti ad avere una visione più completa dello stato del cantiere.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Richiedi un preventivo
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Monitoraggio lavori
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video periodici per seguire l'avanzamento del
              cantiere e documentare le fasi principali del progetto.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione tecnica
            </h2>
            <p className="text-gray-300">
              Usa le immagini dall'alto per report, presentazioni, aggiornamenti
              ai clienti, verifiche interne e archivio fotografico.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti disponibili
            </h2>
            <p className="text-gray-300">
              Pubblica la richiesta, indica la zona del cantiere e ricevi
              candidature da operatori drone interessati al lavoro.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare un drone in cantiere
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In un cantiere edile la documentazione visiva è molto importante.
              Le lavorazioni cambiano rapidamente, le aree operative si spostano,
              le strutture crescono nel tempo e spesso è necessario conservare una
              traccia chiara dello stato dei lavori. Il drone permette di osservare
              il cantiere dall'alto, mostrando in un'unica visione spazi, accessi,
              materiali, mezzi, ponteggi, coperture, aree esterne e avanzamento
              delle opere.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le riprese con drone possono essere utili per nuove costruzioni,
              ristrutturazioni, cantieri residenziali, complessi industriali,
              capannoni, lavori stradali, opere esterne, demolizioni, bonifiche,
              lottizzazioni, installazioni e manutenzioni. Una vista aerea aiuta a
              comunicare meglio il lavoro svolto e a confrontare le diverse fasi
              del progetto.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi descrivere il servizio che ti serve e ricevere
              candidature da piloti drone disponibili. La piattaforma non esegue
              direttamente i lavori, ma mette in contatto clienti, imprese, tecnici
              e operatori drone.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per cantieri
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Monitoraggio avanzamento lavori</li>
              <li>✅ Riprese aeree di cantieri edili</li>
              <li>✅ Foto periodiche per report tecnici</li>
              <li>✅ Video di presentazione del progetto</li>
              <li>✅ Documentazione prima, durante e dopo i lavori</li>
              <li>✅ Controllo visivo di tetti e coperture</li>
              <li>✅ Riprese di ponteggi, piazzali e aree esterne</li>
              <li>✅ Materiale per direzione lavori e clienti</li>
              <li>✅ Contenuti per imprese edili e costruttori</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Preventivo drone per avanzamento lavori
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Uno degli utilizzi più richiesti del drone in cantiere è il
            monitoraggio dell'avanzamento lavori. Le immagini dall'alto permettono
            di vedere l'evoluzione del progetto nel tempo, confrontare le diverse
            fasi e creare un archivio visivo utile per clienti, tecnici, imprese e
            committenti. Un cantiere può essere ripreso una sola volta oppure con
            cadenza periodica, ad esempio ogni settimana, ogni mese o in momenti
            specifici dell'opera.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le fotografie aeree possono essere usate nei report di cantiere, nelle
            comunicazioni con il cliente, nelle presentazioni aziendali, nella
            documentazione interna e nel materiale promozionale dell'impresa. I
            video, invece, possono raccontare meglio il contesto, mostrando il
            cantiere da diverse angolazioni e rendendo più chiaro il lavoro svolto.
          </p>

          <p className="leading-8 text-gray-300">
            Quando pubblichi la richiesta su DroneGuard, puoi indicare se ti serve
            un servizio singolo o un monitoraggio periodico. Puoi anche specificare
            se vuoi solo foto, solo video, materiale grezzo o un contenuto montato.
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
                Crea gratuitamente il tuo account come cliente, impresa, tecnico
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
                3. Pubblica il cantiere
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il cantiere, la zona, il tipo di riprese e il risultato
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
              Drone per imprese edili
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le imprese edili possono usare il drone per mostrare i lavori in
              corso, documentare le fasi del progetto, creare materiale per clienti
              e presentazioni, aggiornare committenti e costruire un archivio
              visivo delle opere realizzate. Il drone può rendere più chiara la
              comunicazione, soprattutto quando il cantiere è grande o difficile
              da rappresentare con foto da terra.
            </p>

            <p className="leading-8 text-gray-300">
              Nella richiesta puoi indicare se il materiale serve per uso interno,
              per il cliente, per un report tecnico o per promuovere l'impresa
              online.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per tecnici e direzione lavori
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Geometri, architetti, ingegneri e direzione lavori possono richiedere
              immagini aeree per osservare meglio l'organizzazione del cantiere,
              documentare lo stato dei luoghi, seguire l'avanzamento e raccogliere
              materiale visivo da condividere con imprese, clienti o altri
              professionisti coinvolti.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone non sostituisce le verifiche tecniche necessarie, ma può
              offrire un supporto visivo utile per comprendere meglio il contesto
              e conservare documentazione fotografica.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per documentare prima, durante e dopo il cantiere
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può essere utilizzato in diverse fasi del lavoro. Prima
            dell'apertura del cantiere può documentare lo stato iniziale dell'area,
            gli accessi, le condizioni esterne e il contesto circostante. Durante
            i lavori può aiutare a seguire l'avanzamento delle opere e conservare
            una traccia delle fasi principali. A fine cantiere può produrre foto e
            video utili per mostrare il risultato finale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questa documentazione può essere utile per confronti interni, relazioni
            con il cliente, presentazioni, report, comunicazione aziendale e
            archivio storico dei lavori. Un'impresa che mostra i propri cantieri e
            i progetti completati può presentarsi in modo più professionale a nuovi
            clienti.
          </p>

          <p className="leading-8 text-gray-300">
            Con DroneGuard puoi richiedere un servizio adatto alla fase specifica
            del cantiere: sopralluogo iniziale, monitoraggio periodico,
            documentazione tecnica, video promozionale o riprese finali.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Prima dei lavori
            </h2>
            <p className="text-gray-300">
              Documenta lo stato iniziale del terreno, degli accessi, degli spazi
              esterni e del contesto prima dell'apertura del cantiere.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Durante i lavori
            </h2>
            <p className="text-gray-300">
              Segui l'avanzamento, conserva immagini aggiornate e crea materiale
              utile per clienti, tecnici e direzione lavori.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Fine cantiere
            </h2>
            <p className="text-gray-300">
              Realizza foto e video finali per mostrare il risultato, aggiornare
              il cliente e promuovere il lavoro realizzato.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta di preventivo
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            cantiere e il tipo di servizio richiesto. Un pilota drone deve capire
            se deve realizzare semplici foto aeree, un video promozionale,
            documentazione tecnica, monitoraggio periodico o riprese specifiche di
            una zona del cantiere. Ogni richiesta può avere esigenze diverse.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi indicare la città o la zona, il tipo di cantiere, la grandezza
            indicativa dell'area, la fase dei lavori, la presenza di ponteggi,
            mezzi, coperture, gru, aree esterne o ostacoli. È utile specificare se
            ti servono foto, video, materiale grezzo, montaggio finale o un report
            fotografico ordinato.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi anche spiegare l'uso finale del materiale: aggiornamento cliente,
            relazione tecnica, documentazione interna, social, sito aziendale,
            presentazione commerciale o archivio del progetto. Più la richiesta è
            chiara, più sarà semplice trovare un pilota adatto.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per drone in cantiere
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di un cantiere
              edile in provincia di Roma. Mi serve documentare l'avanzamento
              lavori, riprendere l'area dall'alto, mostrare gli accessi, le
              strutture realizzate e il contesto circostante. Vorrei ricevere
              materiale utile per aggiornare il cliente e creare un archivio
              fotografico del progetto.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta di questo tipo aiuta il pilota a capire il contesto, il
            risultato desiderato e il tipo di materiale da consegnare.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per cantiere?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per cantiere può variare in base alla
            zona, alla durata del lavoro, alla dimensione dell'area, alla
            complessità operativa, alla frequenza delle riprese e al tipo di
            consegna richiesta. Un singolo servizio fotografico non ha le stesse
            esigenze di un monitoraggio mensile, di un video aziendale o di una
            documentazione completa prima, durante e dopo i lavori.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la post-produzione può incidere sul prezzo. Alcuni clienti
            vogliono solo foto e video grezzi, altri preferiscono una selezione di
            immagini, un video montato, un contenuto per social o un report
            fotografico. Per questo è importante indicare subito cosa ti serve.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo fisso. La piattaforma permette di
            pubblicare una richiesta e ricevere candidature da piloti drone
            interessati, così cliente e professionista possono accordarsi sui
            dettagli del servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere un preventivo drone per un cantiere?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta per servizi drone
                in cantiere e ricevere candidature da piloti interessati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente il servizio?
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

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per monitorare l'avanzamento lavori?
              </h3>
              <p className="text-gray-300">
                Sì, il drone può essere utile per documentare le fasi del cantiere,
                creare foto periodiche e mostrare l'evoluzione del progetto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere riprese periodiche?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare se ti servono riprese settimanali, mensili o
                in determinate fasi del lavoro.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedi un preventivo drone per il tuo cantiere
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per monitoraggio cantieri, foto aeree, video di
            avanzamento lavori, documentazione tecnica, riprese per imprese edili
            e contenuti professionali per clienti e direzione lavori.
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