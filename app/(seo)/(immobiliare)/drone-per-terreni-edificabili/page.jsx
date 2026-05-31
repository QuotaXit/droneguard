import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per terreni edificabili | DroneGuard",
  description:
    "Trova piloti drone per foto e video di terreni edificabili, lotti, aree urbane, terreni agricoli, accessi, confini e annunci immobiliari professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Riprese aeree per terreni e lotti edificabili
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per terreni edificabili
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi vendere, presentare o documentare un terreno edificabile? Con
            DroneGuard puoi trovare piloti drone disponibili per realizzare foto
            aeree, video panoramici, riprese dall'alto e materiale visivo utile
            per terreni edificabili, lotti urbani, aree agricole, terreni
            industriali, appezzamenti in vendita, zone da sviluppare, aree con
            accesso stradale, confini da mostrare e contesti da valorizzare. Un
            terreno, a differenza di una casa già costruita, spesso non comunica
            subito il proprio valore: chi guarda l'annuncio deve capire dove si
            trova, come si raggiunge, che forma ha, quanto è vicino ai servizi, che
            pendenze presenta, quali strade lo collegano e quale potenziale può
            avere per un futuro progetto.
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
              Mostra il terreno dall'alto
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini aeree aiutano a vedere forma, dimensioni, accessi,
              posizione, vegetazione, strade vicine e rapporto con le aree
              circostanti.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Annunci più chiari
            </h2>
            <p className="leading-7 text-gray-300">
              Un terreno può essere difficile da raccontare solo con foto da
              terra. Il drone rende l'annuncio più comprensibile e più completo.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Per agenzie e proprietari
            </h2>
            <p className="leading-7 text-gray-300">
              Il servizio può essere richiesto da privati, agenzie immobiliari,
              tecnici, investitori, imprese edili e proprietari di aree in vendita.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per un terreno edificabile
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un terreno edificabile non sempre è semplice da valutare attraverso
              una descrizione testuale o poche immagini scattate da terra. La
              persona interessata vuole capire subito se il lotto è accessibile,
              se si trova in una zona comoda, se è vicino ad abitazioni, strade,
              servizi, infrastrutture o aree verdi. Vuole vedere la forma generale
              dell'area, la vegetazione presente, eventuali pendenze, spazi liberi,
              recinzioni, manufatti, strade laterali e rapporto con il contesto.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone permette di mostrare il terreno da una prospettiva più
              ampia. Una ripresa dall'alto può aiutare a spiegare meglio dove si
              trova il lotto, come si raggiunge, quali sono le aree confinanti,
              quali strade lo servono e che tipo di ambiente lo circonda. Questo
              può essere utile sia per un annuncio immobiliare, sia per una prima
              valutazione da parte di acquirenti, tecnici, imprese o investitori.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e ricevere candidature
              da piloti drone interessati. Puoi indicare la posizione del terreno,
              il tipo di immagini richieste, l'obiettivo del servizio e il
              materiale che desideri ricevere.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Terreni che puoi valorizzare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Terreni edificabili in vendita</li>
              <li>✅ Lotti residenziali</li>
              <li>✅ Aree urbane da sviluppare</li>
              <li>✅ Terreni agricoli con potenziale</li>
              <li>✅ Aree industriali o artigianali</li>
              <li>✅ Terreni con accesso stradale</li>
              <li>✅ Lotti vicino al mare o in collina</li>
              <li>✅ Aree per nuove costruzioni</li>
              <li>✅ Terreni con confini da mostrare</li>
              <li>✅ Proprietà con vista o posizione strategica</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per annunci di terreni edificabili
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Negli annunci immobiliari dedicati ai terreni, spesso il problema
            principale è la mancanza di chiarezza. Una foto da strada può mostrare
            solo una piccola parte del lotto, mentre una foto dall'alto può
            aiutare a comprendere l'intera area. Chi sta cercando un terreno vuole
            capire se lo spazio è adatto a un progetto, se l'accesso è semplice,
            se la zona è servita, se ci sono abitazioni vicine, se il lotto è
            isolato, panoramico o inserito in un contesto già urbanizzato.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può realizzare immagini panoramiche che mostrano il terreno
            nel suo insieme, il rapporto con le strade, la presenza di eventuali
            recinzioni, vegetazione, fabbricati vicini, confini visibili, aree
            libere, pendii e zone circostanti. Questo non sostituisce rilievi,
            mappe catastali, verifiche urbanistiche o perizie tecniche, ma può
            rendere l'annuncio molto più leggibile e interessante.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini possono essere usate nei portali immobiliari, nel sito
            dell'agenzia, in una brochure digitale, in una presentazione per
            investitori, in una scheda informativa o nei social per attirare
            l'attenzione su un lotto in vendita.
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
                Crea un account come proprietario, agenzia immobiliare, tecnico,
                impresa, investitore o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il terreno, la zona, gli accessi, il materiale richiesto
                e l'obiettivo delle riprese.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti drone interessati possono candidarsi e proporti la loro
                disponibilità per il servizio.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Valuta il professionista più adatto in base alla zona, al tipo di
                terreno e al risultato che vuoi ottenere.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Video drone per mostrare posizione e accessi
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un video con drone può essere molto utile per mostrare il percorso
              di avvicinamento al terreno, la strada di accesso, il rapporto con
              le aree vicine e la posizione generale del lotto. Il video può
              iniziare da una panoramica della zona, avvicinarsi al terreno,
              mostrare i confini principali, evidenziare eventuali strade,
              abitazioni, servizi, campagna, mare, colline o elementi di
              interesse.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di contenuto può aiutare il potenziale acquirente a
              capire meglio il contesto e può essere usato in annunci premium,
              presentazioni, social network e materiale promozionale dell'agenzia.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Prima valutazione visiva del lotto
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di organizzare sopralluoghi tecnici, rilievi, verifiche
              urbanistiche o incontri con potenziali acquirenti, può essere utile
              avere una prima documentazione visiva del terreno. Il drone può
              mostrare lo stato generale del lotto, la vegetazione, gli accessi,
              la presenza di ostacoli, la pendenza visibile e il rapporto con le
              proprietà vicine.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale non sostituisce documenti tecnici o verifiche
              professionali, ma può essere un supporto utile per comprendere meglio
              l'area e comunicarla in modo più chiaro.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per un terreno edificabile
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, descrivi bene il tipo di area:
            terreno edificabile, lotto residenziale, terreno agricolo, area
            industriale, terreno con vista, lotto in centro abitato, terreno in
            campagna, area da sviluppare o proprietà con accesso stradale. Indica
            la città, la zona, la dimensione indicativa, la presenza di confini
            visibili, eventuali strade vicine e lo scopo delle riprese.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi richiedere foto dall'alto, video panoramico, riprese degli
            accessi, immagini della strada, vista generale del contesto, foto del
            lotto da più angolazioni, video breve per social, materiale per un
            annuncio immobiliare o documentazione visiva da inviare a tecnici e
            interessati. Se vuoi mostrare una zona specifica, spiega bene quali
            punti devono essere ripresi.
          </p>

          <p className="leading-8 text-gray-300">
            Il pilota dovrà sempre valutare sicurezza, privacy, condizioni meteo,
            ostacoli, presenza di persone, linee elettriche, aree vicine, spazi di
            decollo e regole applicabili al volo. DroneGuard mette in contatto
            cliente e professionista, ma la fattibilità del servizio viene
            valutata dal pilota scelto.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per terreno edificabile
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e un breve video di un
              terreno edificabile in vendita. Vorrei mostrare il lotto dall'alto,
              la strada di accesso, il contesto circostante, le aree confinanti,
              la vegetazione presente e la posizione rispetto alle abitazioni
              vicine. Il materiale sarà usato per un annuncio immobiliare online e
              per una presentazione ai potenziali acquirenti.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire il tipo di terreno, il
            risultato desiderato e gli elementi principali da documentare durante
            le riprese.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per terreni edificabili?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla zona, alla distanza, alla durata del
            lavoro, alla dimensione del terreno, alla complessità dell'area e al
            tipo di materiale richiesto. Un servizio con alcune foto aeree può
            essere diverso da un video più completo con riprese da più angolazioni,
            passaggi panoramici, immagini degli accessi e consegna di materiale
            selezionato.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il contesto incide. Un terreno in campagna, un lotto urbano, una
            zona vicina a strade trafficate, un'area con linee elettriche o un
            terreno molto grande richiedono valutazioni differenti. Per questo è
            utile pubblicare una richiesta dettagliata e lasciare che i piloti
            interessati valutino il lavoro.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette di
            pubblicare il lavoro, ricevere candidature e scegliere il pilota drone
            più adatto in base al tipo di terreno e al risultato desiderato.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Crediti su DroneGuard
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione.
            Pubblicare un lavoro costa 5 crediti, quindi puoi iniziare cercando un
            pilota drone per foto e video di un terreno edificabile, un lotto o
            un'area in vendita.
          </p>

          <p className="leading-8 text-gray-300">
            I nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.
            Rispondere o candidarsi a un annuncio costa 5 crediti. Questo sistema
            permette di collegare chi cerca un servizio drone con chi è disponibile
            a svolgerlo.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per vendere un terreno edificabile?
              </h3>
              <p className="text-gray-300">
                Sì, può aiutare a mostrare posizione, accessi, forma del lotto,
                contesto, strade vicine, aree confinanti e caratteristiche visive
                del terreno.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Le immagini drone sostituiscono una planimetria o una perizia?
              </h3>
              <p className="text-gray-300">
                No, le immagini con drone sono materiale visivo utile, ma non
                sostituiscono planimetrie, rilievi, verifiche urbanistiche,
                documenti catastali o perizie tecniche.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usarlo per un annuncio immobiliare?
              </h3>
              <p className="text-gray-300">
                Sì, foto e video possono essere usati per annunci online, sito
                dell'agenzia, social, brochure digitali e presentazioni, secondo
                gli accordi presi con il pilota.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente il servizio?
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
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono
                10 crediti gratuiti dopo la registrazione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per terreni edificabili
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto e video di terreni edificabili, lotti
            residenziali, aree urbane, terreni agricoli, accessi, confini,
            contesti panoramici e annunci immobiliari professionali.
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