import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per vigneti | DroneGuard",
  description:
    "Trova piloti drone per vigneti, aziende vinicole, agricoltura di precisione, riprese aeree, monitoraggio visivo filari e documentazione agricola."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per agricoltura e aziende vinicole
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per vigneti
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi realizzare foto aeree, video promozionali o documentazione visiva
            di un vigneto, una cantina, un'azienda agricola, un agriturismo, una
            tenuta vinicola, filari, terreni coltivati, pendii, strade poderali o
            aree agricole? Con DroneGuard puoi pubblicare una richiesta e trovare
            piloti drone disponibili per riprese dall'alto, immagini panoramiche,
            video aziendali, sopralluoghi visivi e materiale utile a produttori di
            vino, agronomi, aziende agricole, cantine, proprietari, tecnici,
            consulenti, agenzie marketing e strutture legate all'enoturismo.
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
              Riprese di vigneti
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video dall'alto di filari, appezzamenti, colline,
              strade interne, cantine, casali, terreni e aree produttive.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Video per cantine
            </h2>
            <p className="text-gray-300">
              Ottieni contenuti visivi per sito web, social, presentazioni,
              degustazioni, enoturismo, comunicazione aziendale e marketing.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Supporto visivo agricolo
            </h2>
            <p className="text-gray-300">
              Usa immagini aeree per osservare meglio filari, accessi, pendenze,
              zone difficili da raggiungere e organizzazione del terreno.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per un vigneto
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un vigneto è un territorio che spesso si sviluppa su superfici
              ampie, colline, pendii, filari ordinati, strade poderali, aree di
              accesso, casali, cantine e zone produttive. Da terra non sempre è
              semplice mostrare l'estensione della proprietà, la disposizione dei
              filari o il valore paesaggistico dell'azienda agricola. Il drone
              permette di raccontare tutto questo con una prospettiva più ampia e
              professionale.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le immagini dall'alto possono essere utili per documentare lo stato
              generale del vigneto, mostrare l'organizzazione dei terreni,
              valorizzare il paesaggio, creare contenuti per la cantina, presentare
              l'azienda vinicola a clienti e visitatori, promuovere degustazioni,
              raccontare la vendemmia o realizzare materiale per sito web e social.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone non sostituisce il lavoro di agronomi, tecnici agricoli o
              consulenti specializzati, ma può essere un supporto visivo molto
              utile per osservare, documentare e comunicare meglio il valore del
              vigneto e dell'azienda.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per vigneti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree di vigneti e filari</li>
              <li>✅ Video promozionali per cantine e aziende vinicole</li>
              <li>✅ Riprese di colline, terreni e strade poderali</li>
              <li>✅ Documentazione visiva per aziende agricole</li>
              <li>✅ Immagini per sito web, social e brochure</li>
              <li>✅ Video per enoturismo e degustazioni</li>
              <li>✅ Riprese durante vendemmia e lavorazioni</li>
              <li>✅ Foto panoramiche di tenute e casali</li>
              <li>✅ Supporto visivo per tecnici, agronomi e proprietari</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per cantine, aziende vinicole ed enoturismo
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le cantine e le aziende vinicole hanno bisogno di comunicare non solo
            il prodotto, ma anche il territorio. Un vino viene spesso raccontato
            attraverso il paesaggio, la cura dei filari, la posizione della tenuta,
            la storia dell'azienda, il lavoro agricolo e l'esperienza che il
            visitatore può vivere. Le riprese drone permettono di mostrare tutto
            questo in modo più emozionale e immediato.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un video dall'alto può valorizzare colline, filari, cantina, aree di
            degustazione, agriturismo, casali, strade interne e panorama
            circostante. Questo materiale può essere usato per promuovere visite in
            cantina, degustazioni, eventi, vendite online, pagine social, video
            istituzionali, fiere, presentazioni commerciali e comunicazione del
            brand.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard puoi richiedere un servizio semplice con foto aeree del
            vigneto oppure un servizio più completo con video, riprese della
            cantina, scene durante la vendemmia, immagini dei filari e contenuti
            pensati per la comunicazione aziendale.
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
                Crea il tuo account come azienda agricola, cantina, proprietario,
                agronomo, tecnico, agenzia marketing o pilota drone.
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
                Descrivi il vigneto, la città, la tenuta, le aree da riprendere e
                il tipo di foto o video che vuoi ottenere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti disponibilità,
                modalità operative, tempi e consegna dei file.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Riprese per vendemmia e lavorazioni agricole
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              La vendemmia è uno dei momenti più importanti per una cantina. Il
              drone può documentare le squadre al lavoro, i filari, i mezzi
              agricoli, le cassette, le strade interne e il paesaggio in cui nasce
              il prodotto. Queste immagini possono diventare contenuti molto forti
              per raccontare il lavoro reale dietro al vino.
            </p>

            <p className="leading-8 text-gray-300">
              Le riprese possono essere richieste anche in altri periodi dell'anno:
              potatura, fioritura, crescita della vegetazione, preparazione dei
              terreni, trattamenti, manutenzione dei filari e fasi di gestione
              ordinaria dell'azienda.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Immagini per sito web, social e comunicazione
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Una cantina che comunica bene il proprio territorio può distinguersi
              molto di più. Foto aeree e video drone possono essere usati per
              aggiornare il sito web, creare contenuti Instagram, realizzare reel,
              video istituzionali, brochure digitali, presentazioni per clienti,
              materiali per fiere e contenuti per e-commerce del vino.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini possono mostrare la bellezza del vigneto, la posizione
              della tenuta, il panorama, la cura dei filari, la cantina e
              l'esperienza che un cliente può vivere visitando l'azienda.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per osservare filari, terreni e accessi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Oltre all'aspetto promozionale, le immagini con drone possono essere
            utili per avere una panoramica visiva del vigneto. Dall'alto si possono
            osservare la disposizione dei filari, le pendenze, le strade interne,
            le zone più difficili da raggiungere, gli accessi, le aree di
            lavorazione, i confini dei terreni e la relazione tra i diversi
            appezzamenti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo tipo di materiale può essere utile per proprietari, agronomi,
            tecnici e responsabili agricoli che vogliono condividere immagini
            chiare del territorio. Non si tratta di una diagnosi tecnica o
            agronomica, ma di una documentazione visiva che può aiutare a vedere
            meglio l'insieme dell'azienda.
          </p>

          <p className="leading-8 text-gray-300">
            Se servono analisi specialistiche, mappe, rilievi, termografia o dati
            tecnici, è importante specificarlo nella richiesta e rivolgersi a
            piloti e professionisti con attrezzature e competenze adeguate.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Cantine e produttori
            </h2>
            <p className="text-gray-300">
              Riprese per aziende vinicole, cantine, produttori di vino, tenute,
              casali, aree degustazione e comunicazione del territorio.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Agricoltura e vigneti
            </h2>
            <p className="text-gray-300">
              Foto e video di filari, terreni, colline, strade poderali, aree di
              lavoro, confini agricoli e appezzamenti coltivati.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Enoturismo
            </h2>
            <p className="text-gray-300">
              Materiale visivo per degustazioni, visite in cantina, agriturismi,
              eventi, esperienze turistiche, social e promozione aziendale.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            vigneto e il risultato desiderato. Puoi indicare la città, la zona, il
            tipo di azienda, la dimensione indicativa dei terreni, se ci sono
            colline, filari, cantina, casale, agriturismo, area degustazione o
            strade interne da riprendere.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se vuoi foto aeree, video promozionale, riprese
            durante la vendemmia, immagini per sito web, contenuti social,
            documentazione dei terreni, materiale per presentazioni o una
            panoramica completa della tenuta.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere informazioni pratiche come orari migliori per la luce,
            presenza di persone o mezzi agricoli, referente sul posto, aree di
            decollo, eventuali limitazioni, necessità di coordinarsi con il lavoro
            agricolo e modalità di consegna dei file.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per vigneto
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di un vigneto e
              della nostra cantina. Mi servono riprese dall'alto dei filari, della
              tenuta, delle colline, della strada di accesso, dell'area
              degustazione e della cantina. Il materiale verrà usato per sito web,
              social, promozione dell'enoturismo e presentazione aziendale.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito le aree da
            riprendere, la finalità del servizio e il tipo di materiale da
            consegnare.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per vigneti?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla città, alla distanza, alla dimensione
            del vigneto, alla durata delle riprese, alla quantità di aree da
            documentare, alla presenza di una cantina o di una struttura turistica
            e al tipo di materiale finale richiesto. Una semplice serie di foto
            aeree ha un costo diverso rispetto a un video promozionale completo
            con riprese della tenuta, della cantina, dei filari e del territorio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna incide sul prezzo. Alcune aziende chiedono solo file
            grezzi, altre preferiscono foto selezionate, video montati, reel per
            social, cartelle ordinate, immagini per brochure o contenuti già
            pronti per sito web e comunicazione aziendale.
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
                Posso usare il drone per promuovere una cantina?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video dall'alto per mostrare vigneti,
                filari, cantina, colline, casali, aree degustazione e territorio.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Le riprese possono essere fatte durante la vendemmia?
              </h3>
              <p className="text-gray-300">
                Sì, puoi indicare nella richiesta se vuoi documentare la vendemmia,
                le lavorazioni, i mezzi agricoli, il personale e le attività nei
                filari.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone può aiutare a osservare i filari?
              </h3>
              <p className="text-gray-300">
                Sì, le immagini dall'alto possono offrire una panoramica visiva
                della disposizione dei filari e dei terreni. Per analisi tecniche o
                agronomiche servono strumenti e professionisti adeguati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare il materiale per social e sito web?
              </h3>
              <p className="text-gray-300">
                Sì, foto e video drone possono essere usati per sito web, social,
                brochure digitali, presentazioni, enoturismo e comunicazione
                aziendale.
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
            Trova un pilota drone per vigneti
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video promozionali, riprese di
            vigneti, filari, cantine, aziende vinicole, colline, casali, strade
            poderali, vendemmia, enoturismo e documentazione visiva agricola.
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