import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Rilievo stradale con drone | DroneGuard",
  description:
    "Rilievo stradale con drone: trova piloti drone per foto, video, ortofoto, modelli 3D, rilievi visivi e documentazione tecnica di terreni, cantieri, aree esterne e strutture complesse."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Rilievi tecnici con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Rilievo stradale con drone: trova piloti drone per rilievi, ortofoto e documentazione dall'alto
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Se devi organizzare un rilievo stradale con drone, DroneGuard ti aiuta a trasformare una necessità tecnica in una richiesta chiara da mostrare a piloti drone disponibili. Puoi pubblicare un annuncio, spiegare cosa deve essere rilevato, indicare il luogo, il tipo di area, il materiale che ti serve e ricevere candidature da operatori interessati. Il drone può essere utile quando bisogna osservare strade private, tratti di viabilità, accessi, parcheggi, piazzali e aree di manovra, perché una vista dall'alto permette di comprendere meglio proporzioni, accessi, pendenze, confini visibili, superfici, ostacoli, zone operative e punti difficili da valutare da terra.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Questa pagina è pensata per clienti, tecnici, imprese, geometri, ingegneri, architetti, aziende, amministratori, proprietari e responsabili di cantiere che cercano un modo semplice per entrare in contatto con piloti drone. Il risultato può essere una raccolta di immagini dall'alto, viste di dettaglio, documentazione di criticità e materiale per sopralluoghi, sempre in base alla fattibilità del volo, alle condizioni del luogo, alla sicurezza, alla privacy e alle regole applicabili.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Richiedi un rilievo con drone
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Rilievo visivo dall'alto
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini aeree aiutano a leggere insieme superfici, accessi, pendenze, confini visibili, aree di lavoro, materiali presenti, ostacoli e punti difficili da fotografare da terra. Un rilievo con drone può diventare una base visiva ordinata da condividere con tecnici, imprese, clienti o proprietari.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ortofoto e modelli 3D
            </h2>
            <p className="leading-7 text-gray-300">
              In base al servizio concordato, il pilota può raccogliere immagini per ortofoto, fotogrammetria, modelli tridimensionali, nuvole di punti o semplici foto panoramiche. La consegna va sempre definita prima, così il cliente sa cosa riceverà e con quale livello di dettaglio.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Contatto con piloti drone
            </h2>
            <p className="leading-7 text-gray-300">
              DroneGuard non impone un servizio standard: la piattaforma mette in contatto clienti e piloti. Chi pubblica la richiesta può descrivere il rilievo, ricevere candidature e scegliere il professionista più adatto in base a zona, esperienza, disponibilità e materiale proposto.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere rilievo stradale con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un rilievo stradale con drone può essere richiesto quando hai bisogno di capire meglio lo stato di un'area prima di una decisione, di un preventivo, di una manutenzione, di una perizia, di una compravendita, di una presentazione o di una fase di lavoro. In molti casi, chi deve valutare un terreno, un cantiere, una copertura, un piazzale o un'area esterna riceve soltanto fotografie scattate da terra. Queste immagini possono essere utili, ma spesso non fanno capire bene la forma complessiva, la posizione dei punti critici, le distanze relative e il rapporto tra le varie parti dell'area.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Con il drone è possibile ottenere una visione più ordinata e leggibile. Una foto dall'alto può mostrare contemporaneamente accessi, confini visibili, superfici, zone operative, dislivelli, corsi d'acqua, coperture, recinzioni, cumuli, mezzi, strade interne, punti danneggiati e aree che richiedono attenzione. Questo non significa che ogni rilievo con drone sia automaticamente un rilievo tecnico certificato, ma significa che il cliente può raccogliere materiale visivo molto più completo da condividere con chi dovrà eseguire valutazioni, progettazioni o interventi.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Nel caso specifico di rilievi stradali, il drone può essere utilizzato per documentare strade private, tratti di viabilità, accessi, parcheggi, piazzali e aree di manovra. Puoi chiedere al pilota foto panoramiche, immagini verticali, video brevi, riprese dei punti critici, ortofoto o materiale predisposto per elaborazioni successive. La scelta dipende dall'obiettivo: vedere lo stato generale, confrontare più fasi, misurare indicativamente superfici, creare una base per un tecnico o preparare una richiesta di preventivo più precisa.
            </p>

            <p className="leading-8 text-gray-300">
              È importante distinguere tra documentazione visiva e attività professionali riservate. Il drone può fornire immagini, video e dati grezzi o elaborati, ma verifiche strutturali, rilievi ufficiali, pratiche catastali, asseverazioni, calcoli tecnici e decisioni progettuali devono essere svolti da professionisti abilitati quando la normativa lo richiede. DroneGuard aiuta a trovare il pilota, non sostituisce il tecnico incaricato dal cliente.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi richiedere
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ foto aeree panoramiche dell'area da rilevare</li>
              <li>✅ immagini verticali utili per ortofoto e mappe visive</li>
              <li>✅ video dall'alto per mostrare percorsi, accessi e contesto</li>
              <li>✅ dettagli di punti critici, dislivelli, scarpate o superfici</li>
              <li>✅ documentazione per tecnici, imprese, committenti o proprietari</li>
              <li>✅ materiale prima e dopo un intervento o una fase di cantiere</li>
              <li>✅ supporto visivo per preventivi, sopralluoghi e confronti interni</li>
              <li>✅ immagini da usare per archiviare lo stato di fatto nel tempo</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché il drone è utile nei rilievi tecnici
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nei rilievi tradizionali da terra, il tecnico o il proprietario deve spesso muoversi lungo il perimetro dell'area, fotografare singoli punti e ricostruire mentalmente la situazione complessiva. Questo può funzionare in spazi semplici, ma diventa più complicato quando ci sono superfici estese, pendenze, ostacoli, vegetazione, cantieri in attività, materiali accumulati, zone bagnate, coperture alte o punti difficili da raggiungere. Il drone consente di osservare la stessa area da più quote e angolazioni, creando una lettura più immediata.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un rilievo stradale con drone può essere utile anche quando il cliente non sa ancora quale intervento dovrà fare. Prima di chiamare un'impresa, un manutentore, un progettista o un perito, può avere senso raccogliere immagini ordinate per spiegare meglio il problema. Un tecnico che riceve foto chiare dall'alto può comprendere più rapidamente il contesto e chiedere eventuali dettagli aggiuntivi prima di recarsi sul posto. Questo non elimina il sopralluogo tecnico, ma può renderlo più mirato.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            In cantieri, aree industriali, terreni e opere esterne, il drone può essere usato anche per documentare l'evoluzione nel tempo. Ripetere le riprese a distanza di settimane o mesi permette di confrontare stato iniziale, avanzamento e situazione finale. Le immagini possono essere archiviate, condivise con il committente, utilizzate in riunioni, inviate a fornitori o allegate a report interni. In questo modo il rilievo diventa uno strumento di comunicazione, non solo una raccolta di fotografie.
          </p>

          <p className="leading-8 text-gray-300">
            La qualità del risultato dipende da molti fattori: pianificazione del volo, esperienza del pilota, condizioni meteo, luce, quota, sovrapposizione delle immagini, presenza di punti di riferimento, ostacoli e finalità della consegna. Per questo, quando pubblichi una richiesta su DroneGuard, conviene spiegare bene se vuoi soltanto foto e video oppure materiale più tecnico, come ortofoto, modello 3D, nuvola di punti o elaborazioni da consegnare a un professionista.
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
                Crea un account come cliente, tecnico, impresa, proprietario, azienda, amministratore o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Usa i crediti
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I clienti ricevono 10 crediti gratuiti dopo la registrazione, mentre i piloti ricevono 50 crediti gratuiti.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Pubblica il rilievo
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Pubblicare un lavoro costa 5 crediti. Descrivi area, obiettivo, urgenza, materiale richiesto e luogo.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi. Rispondere a un annuncio costa 5 crediti per il pilota.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Per clienti, tecnici e imprese
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di pubblicare una richiesta, prepara una descrizione semplice ma completa. Indica la città, il tipo di area, la dimensione indicativa, la presenza di accessi, cancelli, strade interne, edifici, alberi, linee elettriche, persone o attività in corso. Spiega se ti serve un rilievo una tantum oppure una documentazione periodica. Nel caso di rilievi stradali, specifica se il materiale servirà per manutenzione, progettazione, preventivo, confronto interno, vendita, assicurazione o relazione tecnica.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Scrivi anche che tipo di consegna ti aspetti. Può bastare una cartella con foto e video, ma potresti avere bisogno di immagini ordinate per zona, file adatti a una successiva elaborazione, ortofoto, modello 3D o materiale da condividere con un tecnico. Non tutti i piloti offrono gli stessi servizi, quindi è meglio chiarire subito l'obiettivo. Una richiesta precisa consente ai piloti di candidarsi solo quando hanno attrezzatura, esperienza e disponibilità coerenti.
            </p>

            <p className="leading-8 text-gray-300">
              Ricorda che il pilota dovrà sempre valutare la fattibilità del volo. Meteo, vento, pioggia, visibilità, ostacoli, zone sensibili, vicinanza ad aeroporti, presenza di persone e spazi di decollo possono influire sul servizio. DroneGuard ti aiuta a creare il contatto, ma la valutazione operativa viene fatta dal professionista.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Per piloti drone e operatori
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Se sei un pilota drone e trovi una richiesta per rilievo stradale con drone, rispondi in modo concreto. Indica la zona in cui lavori, il tipo di rilievi che puoi svolgere, l'attrezzatura disponibile, il formato di consegna e gli aspetti da verificare prima del volo. Un cliente che cerca un rilievo tecnico non vuole solo sapere il prezzo: vuole capire se puoi fornire materiale adatto al suo scopo.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Una candidatura efficace può spiegare se consegni foto, video, ortofoto, modelli 3D, nuvole di punti o semplici immagini di supporto. Può chiarire tempi di consegna, eventuale necessità di sopralluogo preliminare, condizioni meteo richieste e limiti del servizio. Se il cliente chiede qualcosa che non puoi garantire, è meglio dirlo subito: la chiarezza aumenta la fiducia e riduce incomprensioni.
            </p>

            <p className="leading-8 text-gray-300">
              Nei rilievi con drone è fondamentale non promettere risultati tecnici senza conoscere l'area. Punti di controllo a terra, accuratezza richiesta, quote, software, autorizzazioni e finalità della consegna devono essere valutati caso per caso. DroneGuard può portarti richieste, ma la qualità della risposta dipende da come presenti il tuo lavoro.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Dal rilievo fotografico alla documentazione tecnica
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Non tutti i clienti cercano lo stesso livello di precisione. Alcuni hanno bisogno di fotografie aeree chiare per vedere un terreno o una copertura. Altri vogliono documentare un cantiere, confrontare più fasi o mostrare un'area a un fornitore. Altri ancora cercano una base per elaborazioni tecniche come ortofoto, modelli tridimensionali o nuvole di punti. Prima di confermare il lavoro, è importante capire il risultato atteso.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nel caso di un rilievo stradale con drone, il materiale può essere usato in modo diverso a seconda del contesto. Una panoramica può servire a spiegare un problema, una sequenza di foto può documentare lo stato di un'area, un video può mostrare accessi e percorsi, un'ortofoto può aiutare a leggere meglio superfici e proporzioni, mentre un modello 3D può essere utile per valutare volumi, pendenze o forme. Ogni consegna richiede un'impostazione diversa già in fase di volo.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            La fotogrammetria richiede immagini con sovrapposizione, traiettorie ordinate, buona luce e parametri corretti. Se l'obiettivo è soltanto vedere lo stato generale, il volo può essere più semplice. Se invece il materiale dovrà essere elaborato, il pilota dovrà pianificare con più attenzione la missione e chiarire con il cliente se servono punti di controllo, riferimenti a terra o formati specifici. Per questo la descrizione iniziale è decisiva.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard può aiutare a far incontrare domanda e offerta, ma non deve creare confusione tra immagini promozionali, documentazione visiva e rilievi tecnici ad alta precisione. Quando pubblichi la richiesta, scrivi sempre lo scopo finale. Un pilota serio ti dirà cosa può fare, cosa non può garantire e quali condizioni servono per ottenere un risultato utile.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per rilievo stradale con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per rilievo stradale con drone in provincia. Mi servono immagini dall'alto dell'area, foto panoramiche, eventuali riprese verticali e materiale utile da condividere con il tecnico. Vorrei documentare strade private, tratti di viabilità, accessi, parcheggi, piazzali e aree di manovra. Il materiale servirà per valutare lo stato attuale, preparare un sopralluogo più preciso e capire se richiedere un preventivo o un'elaborazione successiva.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta di questo tipo funziona perché indica il contesto, l'obiettivo, il materiale desiderato e l'utilizzo finale. Il pilota può valutare meglio distanza, tempo necessario, complessità del volo, condizioni operative e tipo di consegna. Se ti serve un risultato tecnico specifico, aggiungi anche formati richiesti, precisione attesa, eventuali riferimenti a terra e nominativo del tecnico con cui il pilota dovrà coordinarsi.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Informazioni da inserire nell'annuncio
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Per ricevere candidature più adatte, indica sempre dove si trova l'area, che tipo di rilievo vuoi, quanto è grande la zona, quali punti devono essere ripresi e perché ti serve il materiale. Se conosci già la destinazione dei file, scrivila. Un rilievo per archivio fotografico è diverso da un rilievo per ortofoto, così come un video promozionale non è uguale a una raccolta di immagini per un tecnico.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Aggiungi dettagli pratici: possibilità di accesso, orari, presenza di persone, mezzi in movimento, lavori in corso, linee elettriche, alberi, antenne, gru, strutture alte, acqua, strade vicine o zone interdette. Anche il meteo conta: per molti rilievi è preferibile una giornata stabile, con luce adeguata e vento limitato. Se hai urgenza, scrivilo subito.
            </p>

            <p className="leading-8 text-gray-300">
              Se il servizio riguarda rilievi stradali, spiega se vuoi soltanto vedere meglio l'area oppure se ti serve materiale tecnico da usare in un progetto. Questa distinzione aiuta il pilota a proporti una consegna realistica, evitando preventivi troppo generici o risultati non adatti.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Checklist rapida
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ città, zona e punto di incontro</li>
              <li>✅ tipo di area da rilevare</li>
              <li>✅ superficie indicativa o perimetro da documentare</li>
              <li>✅ obiettivo finale delle immagini</li>
              <li>✅ formato richiesto: foto, video, ortofoto o modello 3D</li>
              <li>✅ eventuale tecnico o referente da coinvolgere</li>
              <li>✅ orari disponibili e urgenza</li>
              <li>✅ criticità: ostacoli, persone, mezzi, linee, accessi o divieti</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa rilievo stradale con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un rilievo stradale con drone può variare molto. I fattori principali sono la città, la distanza del pilota, la dimensione dell'area, la durata del volo, il numero di punti da documentare, la complessità operativa, il tipo di consegna e l'eventuale elaborazione richiesta. Un servizio con solo foto e video ha un impegno diverso rispetto a un rilievo con ortofoto, modello 3D, nuvola di punti o consegna ordinata per un tecnico.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche l'urgenza può influire. Se il lavoro deve essere svolto in una data precisa, in un cantiere operativo o in una finestra meteo ridotta, il pilota dovrà organizzarsi meglio. Se invece hai flessibilità, sarà più semplice trovare disponibilità e concordare una soluzione adatta. In ogni caso, conviene descrivere bene il risultato atteso prima di chiedere il prezzo.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard non stabilisce una tariffa unica per i rilievi. La piattaforma permette al cliente di pubblicare la richiesta e ricevere candidature da piloti interessati. Il prezzo finale, i tempi, la consegna e le modalità vengono concordati direttamente tra cliente e professionista. Pubblicare una richiesta costa 5 crediti, mentre i nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione.
          </p>

          <p className="leading-8 text-gray-300">
            Anche i piloti ricevono 50 crediti gratuiti dopo la registrazione e possono usarli per rispondere agli annunci. Candidarsi a una richiesta costa 5 crediti. Questo sistema aiuta a mantenere il contatto più mirato: il cliente pubblica lavori reali e il pilota risponde alle richieste che ritiene compatibili con zona, competenze e attrezzatura.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere rilievo stradale con drone su DroneGuard?
              </h3>
              <p className="text-gray-300">
                Sì. Puoi pubblicare una richiesta indicando area, città, obiettivo e materiale desiderato. I piloti interessati potranno candidarsi e spiegare cosa possono offrire.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce un rilievo tecnico ufficiale?
              </h3>
              <p className="text-gray-300">
                No. Il drone può fornire immagini e dati di supporto, ma rilievi ufficiali, verifiche strutturali, pratiche catastali, asseverazioni e calcoli devono essere svolti da professionisti abilitati quando richiesto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso chiedere ortofoto o modello 3D?
              </h3>
              <p className="text-gray-300">
                Sì, ma devi indicarlo nella richiesta. Non tutti i piloti offrono elaborazioni fotogrammetriche, quindi è importante specificare se vuoi solo foto e video oppure consegne tecniche.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Che informazioni devo dare al pilota?
              </h3>
              <p className="text-gray-300">
                Indica luogo, dimensione dell'area, scopo del rilievo, materiale atteso, orari disponibili, presenza di ostacoli, persone, mezzi, accessi e qualsiasi dettaglio utile per valutare la fattibilità.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il volo è sempre possibile?
              </h3>
              <p className="text-gray-300">
                No. Il pilota deve valutare meteo, vento, sicurezza, ostacoli, privacy, area di volo, presenza di persone e regole applicabili prima di confermare il servizio.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare le immagini per chiedere preventivi?
              </h3>
              <p className="text-gray-300">
                Sì. Foto e video dall'alto possono aiutare imprese e tecnici a capire meglio il contesto prima di formulare un preventivo o pianificare un sopralluogo più preciso.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare il lavoro?
              </h3>
              <p className="text-gray-300">
                Pubblicare una richiesta costa 5 crediti. I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione su DroneGuard.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                I piloti pagano per rispondere?
              </h3>
              <p className="text-gray-300">
                Sì. Rispondere o candidarsi a un annuncio costa 5 crediti. I nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per rilievo stradale con drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone disponibili per rilievi stradali, ortofoto, modelli 3D, foto aeree, video, documentazione tecnica e controlli visivi di terreni, cantieri, aree esterne, coperture, piazzali e strutture complesse. Una richiesta chiara aiuta il pilota a valutare il lavoro e ti permette di ricevere candidature più pertinenti.
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