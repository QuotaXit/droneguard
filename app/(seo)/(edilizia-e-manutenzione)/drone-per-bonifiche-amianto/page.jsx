import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per bonifiche amianto | DroneGuard",
  description:
    "Trova piloti drone per bonifiche amianto, sopralluoghi su coperture, tetti, capannoni, edifici industriali e documentazione visiva prima degli interventi."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per edilizia e manutenzioni
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per bonifiche amianto
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi organizzare un sopralluogo visivo su una copertura, un tetto, un
            capannone, una struttura industriale, un magazzino, un edificio
            dismesso o un immobile dove potrebbe essere necessario un intervento
            di bonifica amianto? Con DroneGuard puoi pubblicare una richiesta e
            trovare piloti drone disponibili per realizzare foto aeree, video di
            sopralluogo, documentazione visiva delle coperture e riprese utili a
            tecnici, imprese, amministratori, proprietari e professionisti che
            devono valutare meglio lo stato esterno dell'edificio prima di
            organizzare le attività successive.
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
              Sopralluoghi su coperture
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video dall'alto per osservare tetti, lastre,
              coperture industriali, capannoni, gronde, lucernari e aree difficili
              da vedere da terra.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione visiva
            </h2>
            <p className="text-gray-300">
              Ottieni materiale fotografico utile per report, preventivi,
              comunicazioni, archivi lavori e confronto con imprese specializzate.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti drone disponibili
            </h2>
            <p className="text-gray-300">
              Pubblica la richiesta, indica zona e tipo di struttura, e ricevi
              candidature da operatori drone interessati al servizio.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone prima di una bonifica amianto
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di organizzare una bonifica o un intervento su coperture
              sospette, può essere utile avere una visione chiara dello stato
              esterno dell'edificio. In molti casi tetti, lastre, capannoni,
              coperture industriali, gronde e parti alte non sono facilmente
              osservabili da terra, oppure richiederebbero piattaforme, ponteggi o
              accessi più complessi solo per ottenere una prima documentazione
              visiva.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può aiutare a raccogliere immagini dall'alto senza
              avvicinarsi fisicamente alla copertura. Le foto e i video possono
              mostrare lo stato generale delle lastre, la presenza di rotture
              visibili, accumuli, vegetazione, zone deteriorate, punti difficili da
              raggiungere, canaline, lucernari e superfici che dovranno poi essere
              valutate da tecnici e imprese abilitate.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone non sostituisce analisi, campionamenti, valutazioni
              tecniche o responsabilità professionali. Serve come supporto visivo
              per capire meglio l'area, preparare richieste di preventivo,
              organizzare un sopralluogo tecnico e condividere immagini chiare con
              i soggetti coinvolti.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per bonifiche amianto
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree di tetti e coperture</li>
              <li>✅ Video di sopralluogo su capannoni e fabbricati</li>
              <li>✅ Riprese di lastre, lucernari, gronde e canali</li>
              <li>✅ Documentazione visiva per imprese e tecnici</li>
              <li>✅ Immagini per preventivi e richieste di intervento</li>
              <li>✅ Supporto visivo per amministratori di condominio</li>
              <li>✅ Riprese per edifici industriali e magazzini</li>
              <li>✅ Controllo visivo di aree difficili da raggiungere</li>
              <li>✅ Materiale ordinato da condividere con professionisti</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per tetti, capannoni e coperture sospette
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le coperture in lastre, i capannoni industriali, i magazzini, gli
            edifici agricoli, i vecchi depositi, i garage, le strutture dismesse e
            alcune coperture condominiali possono richiedere attenzione prima di
            qualsiasi intervento. Il drone permette di osservare l'area dall'alto
            e raccogliere immagini utili senza dover salire subito sulla copertura.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo è particolarmente utile quando il tetto è alto, esteso, fragile,
            difficilmente accessibile o quando serve semplicemente una prima
            panoramica visiva da inviare a un tecnico o a un'impresa specializzata.
            Le immagini possono aiutare a capire quante zone sono interessate, se
            ci sono rotture visibili, quali lati dell'edificio sono più critici e
            quali punti meritano un controllo più approfondito.
          </p>

          <p className="leading-8 text-gray-300">
            La documentazione ottenuta può essere usata per descrivere meglio il
            lavoro, richiedere preventivi più precisi, programmare accessi,
            valutare spazi di manovra e organizzare le fasi successive con maggiore
            chiarezza.
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
                Crea il tuo account come cliente, tecnico, amministratore,
                proprietario, impresa o pilota drone.
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
                Descrivi l'edificio, la copertura, la città, il tipo di immagini
                richieste e l'obiettivo del sopralluogo.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti disponibilità,
                modalità di consegna e informazioni sul servizio.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Documentazione per imprese specializzate
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Quando devi chiedere un preventivo per una bonifica, una rimozione,
              una messa in sicurezza o una valutazione tecnica, avere immagini
              chiare può semplificare la comunicazione. Le imprese possono vedere
              la forma della copertura, l'estensione dell'area, l'accessibilità,
              la presenza di ostacoli e le condizioni esterne generali.
            </p>

            <p className="leading-8 text-gray-300">
              Le foto aeree non certificano la presenza di amianto e non
              sostituiscono verifiche autorizzate, ma possono essere molto utili
              come primo materiale descrittivo per spiegare meglio la situazione.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Supporto per amministratori e proprietari
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Amministratori di condominio, proprietari di immobili, aziende,
              tecnici e responsabili di strutture possono usare il drone per
              raccogliere immagini ordinate da condividere con condomini,
              professionisti, imprese e soggetti interessati all'intervento.
            </p>

            <p className="leading-8 text-gray-300">
              Questo aiuta a mostrare la situazione reale della copertura senza
              basarsi soltanto su descrizioni verbali o fotografie scattate da
              punti poco adatti.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto e video prima, durante e dopo l'intervento
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un servizio drone può essere richiesto in diverse fasi. Prima
            dell'intervento può servire per documentare lo stato iniziale della
            copertura. Durante le lavorazioni può aiutare a seguire l'avanzamento
            visivo delle attività, sempre nel rispetto delle regole del cantiere e
            delle autorizzazioni necessarie. Dopo l'intervento può essere utile per
            mostrare il risultato finale e conservare una memoria fotografica
            ordinata.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini possono essere consegnate come foto selezionate, video
            brevi, cartelle ordinate, riprese panoramiche o materiale utile per
            report interni. Ogni richiesta può essere descritta in base al tipo di
            struttura e alla finalità del servizio.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard puoi spiegare se ti serve solo un sopralluogo iniziale,
            un controllo periodico, una documentazione prima e dopo, oppure un
            servizio più completo con diverse riprese della stessa area.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Capannoni industriali
            </h2>
            <p className="text-gray-300">
              Riprese aeree per coperture estese, magazzini, depositi, edifici
              produttivi e strutture difficili da osservare completamente da terra.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Condomini e fabbricati
            </h2>
            <p className="text-gray-300">
              Foto e video per amministratori, proprietari, tecnici e imprese che
              devono documentare coperture, tetti e parti alte dell'immobile.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Report visivi
            </h2>
            <p className="text-gray-300">
              Materiale utile per preventivi, comunicazioni, riunioni, archivi,
              confronti tecnici e organizzazione delle attività successive.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            tipo di edificio e il risultato desiderato. Puoi indicare la città, la
            zona, la tipologia di struttura, l'altezza indicativa, la superficie
            della copertura, l'accessibilità dell'area e il motivo per cui ti
            servono le immagini.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se vuoi foto generali, video panoramici, dettagli
            di alcune zone, riprese di gronde e lucernari, immagini della
            copertura completa, documentazione per preventivo, materiale per
            amministratore o foto prima e dopo l'intervento.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere anche informazioni pratiche: presenza di cortili,
            piazzali, aree di decollo, orari preferiti, accesso alla proprietà,
            contatti sul posto, eventuali limitazioni dell'area e tipo di consegna
            desiderata.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per bonifica amianto
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video della copertura
              di un capannone. Mi servono immagini dall'alto delle lastre, dei
              lucernari, delle gronde e dello stato generale del tetto. Il
              materiale verrà condiviso con tecnici e imprese specializzate per
              valutare un possibile intervento di bonifica e richiedere preventivi
              più precisi.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            immobile, le aree da riprendere, la finalità del servizio e il tipo di
            materiale da consegnare.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per bonifiche amianto?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla città, alla distanza, alla durata
            del sopralluogo, alla complessità dell'area, all'estensione della
            copertura, al numero di immagini richieste e al tipo di consegna. Una
            piccola copertura richiede un lavoro diverso rispetto a un grande
            capannone industriale, a un edificio con più falde o a una struttura
            con accessi complessi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna incide sul prezzo. Alcuni clienti chiedono solo file
            grezzi, altri preferiscono foto selezionate, video montati, cartelle
            ordinate, riprese prima e dopo, oppure materiale già pronto da inviare
            a tecnici, imprese o amministratori.
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
                Posso usare il drone per vedere una copertura sospetta?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video dall'alto per ottenere una
                documentazione visiva della copertura e condividerla con tecnici o
                imprese specializzate.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone può confermare la presenza di amianto?
              </h3>
              <p className="text-gray-300">
                No, il drone non certifica la presenza di amianto. Serve solo come
                supporto visivo. Per verifiche, analisi e decisioni tecniche
                bisogna rivolgersi a professionisti e soggetti abilitati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere foto prima e dopo l'intervento?
              </h3>
              <p className="text-gray-300">
                Sì, nella richiesta puoi specificare se ti servono immagini
                iniziali, riprese durante alcune fasi o documentazione finale dopo
                l'intervento.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente la bonifica?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone. La
                bonifica deve essere svolta da imprese abilitate e professionisti
                competenti.
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
            Trova un pilota drone per bonifiche amianto
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video di sopralluogo,
            documentazione di coperture, immagini di capannoni e materiale visivo
            utile a tecnici, proprietari, amministratori, imprese e professionisti
            coinvolti in valutazioni e interventi su coperture sospette.
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