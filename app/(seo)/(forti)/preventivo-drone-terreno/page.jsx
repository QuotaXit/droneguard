import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo drone terreno | DroneGuard",
  description:
    "Richiedi un preventivo drone per terreno. Trova piloti drone per foto, video, sopralluoghi visivi, documentazione di lotti, aree agricole, terreni edificabili e proprietà."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Preventivi drone per terreni e aree esterne
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Preventivo drone terreno
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare, fotografare o documentare un terreno dall'alto?
            Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto, video e sopralluoghi visivi di
            terreni agricoli, lotti edificabili, aree verdi, proprietà private,
            campi, piazzali, zone rurali, aree in vendita, terreni da pulire,
            confini, accessi, strade interne e spazi difficili da osservare da
            terra. Il drone può essere utile per ottenere una visione generale
            dell'area, capire meglio la disposizione del terreno, documentare lo
            stato dei luoghi e raccogliere materiale visivo da condividere con
            tecnici, proprietari, agenzie, imprese o potenziali acquirenti.
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
              Foto terreno dall'alto
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi fotografie aeree per osservare meglio forma, dimensione,
              accessi, vegetazione, confini indicativi e stato generale del
              terreno.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Video per proprietà
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può realizzare video panoramici utili per presentare un
              terreno, mostrare l'area circostante e documentare il contesto in
              cui si trova.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Sopralluogo visivo
            </h2>
            <p className="leading-7 text-gray-300">
              Puoi usare il drone per una prima osservazione visiva prima di
              organizzare pulizie, lavori, vendite, valutazioni o sopralluoghi
              tecnici.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un drone per terreno
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un terreno può essere difficile da valutare solo camminandoci
              dentro o guardandolo da una strada. Se l'area è grande, irregolare,
              coperta da vegetazione, parzialmente recintata, agricola, collinare
              o con accessi poco chiari, una ripresa dall'alto può aiutare a
              capire meglio la situazione generale. Il drone permette di osservare
              il terreno da una prospettiva più ampia e di raccogliere immagini
              utili per documentare lo stato dei luoghi.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Questo tipo di servizio può essere richiesto da proprietari,
              agenzie immobiliari, tecnici, imprese edili, aziende agricole,
              investitori, privati che vogliono vendere un lotto, persone che
              devono pulire un terreno, professionisti che devono valutare un'area
              o clienti che vogliono semplicemente avere materiale visivo chiaro
              prima di decidere cosa fare.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi descrivere il terreno, indicare la zona, il
              motivo della richiesta e il tipo di materiale che vuoi ricevere. I
              piloti drone interessati possono candidarsi e proporti la propria
              disponibilità. La piattaforma mette in contatto clienti e operatori,
              lasciando poi al cliente la scelta del professionista più adatto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi richiedere
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto terreno agricolo</li>
              <li>✅ Video terreno edificabile</li>
              <li>✅ Sopralluogo visivo dall'alto</li>
              <li>✅ Documentazione di accessi e strade</li>
              <li>✅ Riprese per vendita immobile</li>
              <li>✅ Controllo vegetazione e stato area</li>
              <li>✅ Foto di piazzali e aree esterne</li>
              <li>✅ Materiale per tecnici o agenzie</li>
              <li>✅ Panoramiche della proprietà</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per terreno agricolo
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un terreno agricolo può essere molto esteso e non sempre facile da
            osservare completamente da terra. Il drone può aiutare a realizzare
            immagini dall'alto di campi, uliveti, vigneti, aree coltivate, zone
            incolte, accessi, strade interne, recinzioni, fossi, canali, confini
            indicativi e parti difficili da raggiungere a piedi. Le immagini
            possono essere utili per documentare lo stato del terreno, preparare
            una pulizia, valutare una manutenzione o mostrare l'area a un
            professionista.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può fornire una panoramica generale, video di presentazione
            e riprese da diverse angolazioni. Questo materiale non sostituisce
            rilievi catastali, misurazioni tecniche o valutazioni agronomiche, ma
            può essere un supporto visivo molto utile per capire meglio la forma
            dell'area, la presenza di ostacoli, la vegetazione e l'organizzazione
            degli spazi.
          </p>

          <p className="leading-8 text-gray-300">
            Se hai bisogno di un controllo più specifico, ad esempio per
            agricoltura di precisione, mappature o analisi tecniche, è importante
            scriverlo chiaramente nella richiesta. Non tutti i piloti hanno la
            stessa attrezzatura o le stesse competenze, quindi indicare l'obiettivo
            aiuta a ricevere candidature più adatte.
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
                Crea il tuo account come cliente, proprietario, azienda, tecnico,
                agenzia immobiliare o pilota drone.
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
                3. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il terreno, la zona, l'accesso, il motivo del controllo
                e il tipo di foto o video che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e tu puoi scegliere il
                professionista più adatto al servizio richiesto.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per terreno edificabile
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un terreno edificabile può essere valorizzato con foto e video
              dall'alto, soprattutto quando deve essere presentato a potenziali
              acquirenti, investitori, progettisti o imprese. Il drone può
              mostrare la forma generale dell'area, il contesto circostante, le
              strade vicine, gli accessi, le abitazioni limitrofe, le zone verdi e
              la posizione del lotto rispetto al territorio.
            </p>

            <p className="leading-8 text-gray-300">
              Questo materiale può essere utile per agenzie immobiliari,
              proprietari e professionisti che vogliono comunicare meglio il
              valore visivo del terreno. Non sostituisce documenti urbanistici o
              catastali, ma può rendere più chiara la presentazione dell'area.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per terreno da pulire
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Se un terreno è invaso da erba alta, rovi, rami, rifiuti o materiale
              accumulato, il drone può aiutare a vedere dall'alto quali zone sono
              più critiche. Le immagini possono essere inviate a una ditta di
              pulizia, a un giardiniere, a un'impresa o a un tecnico prima di
              organizzare un intervento.
            </p>

            <p className="leading-8 text-gray-300">
              In questo modo è possibile avere una prima idea degli accessi, delle
              aree più difficili, degli ostacoli presenti e della quantità di
              lavoro da valutare durante un sopralluogo diretto.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto e video drone per vendere un terreno
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Quando un terreno deve essere venduto, le immagini dall'alto possono
            aiutare a presentarlo meglio. Una fotografia da terra spesso mostra
            solo una piccola parte dell'area, mentre una ripresa aerea può far
            capire forma, posizione, contesto, accessi, vegetazione e dimensione
            percepita. Per un annuncio immobiliare, un video con drone può
            rendere il terreno più comprensibile e più interessante per chi lo
            guarda online.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese possono essere utili anche per mostrare la vicinanza a
            strade, case, servizi, aree agricole, zone panoramiche, mare, colline,
            montagne, centri abitati o altre caratteristiche che rendono il
            terreno più riconoscibile. Un pilota drone può realizzare panoramiche,
            passaggi lenti, foto dall'alto e video pensati per presentare la
            proprietà in modo più completo.
          </p>

          <p className="leading-8 text-gray-300">
            Se vuoi usare il materiale per un annuncio, scrivilo nella richiesta.
            In questo modo il pilota potrà capire che ti servono immagini più
            ordinate, pulite e adatte alla presentazione commerciale, non solo una
            semplice documentazione tecnica.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta drone per terreno
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, descrivi bene il terreno:
            agricolo, edificabile, boschivo, incolto, recintato, privato, in
            vendita, da pulire, da documentare o da controllare. Indica la città,
            la zona, la dimensione indicativa se la conosci, la presenza di
            accessi, strade, cancelli, recinzioni, vegetazione alta, fabbricati,
            fossi, pendenze o altri elementi importanti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega anche il risultato che vuoi ottenere: foto dall'alto, video
            panoramico, riprese per annuncio immobiliare, documentazione prima di
            una pulizia, controllo visivo, immagini per un tecnico, materiale per
            un'impresa o riprese generali della proprietà. Più la richiesta è
            chiara, più sarà facile ricevere candidature adatte al tipo di lavoro.
          </p>

          <p className="leading-8 text-gray-300">
            È importante ricordare che ogni volo deve rispettare sicurezza,
            privacy, condizioni meteo, ostacoli, proprietà private, persone
            presenti, animali, aree vicine e regole applicabili. Sarà il pilota a
            valutare la fattibilità del volo e il modo corretto per svolgere il
            servizio.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta drone per terreno
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di un terreno in
              provincia di Roma. Il terreno è in parte agricolo e in parte
              incolto, con accesso da una strada secondaria. Mi servono immagini
              dall'alto per vedere meglio la forma dell'area, la vegetazione, gli
              accessi e il contesto circostante. Vorrei usare il materiale per una
              prima valutazione e per mostrarlo a una ditta che dovrà fare un
              sopralluogo.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta scritta così aiuta il pilota a capire il tipo di
            terreno, il motivo del servizio, il materiale richiesto e le parti più
            importanti da riprendere.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per terreno?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per terreno può variare in base alla
            zona, alla dimensione dell'area, alla durata del lavoro, alla
            complessità del volo, al tipo di materiale richiesto e alla presenza
            di ostacoli o vincoli operativi. Un piccolo terreno facile da
            raggiungere può richiedere un lavoro diverso rispetto a un'area
            agricola estesa, un lotto con vegetazione alta, un terreno in collina
            o una proprietà con accessi complessi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna richiesta può cambiare il preventivo. Alcuni
            clienti vogliono solo foto e video grezzi, altri preferiscono un
            video più curato, immagini selezionate, panoramiche da più angolazioni
            o materiale adatto a un annuncio immobiliare. Se ti serve un lavoro
            più tecnico, come rilievo, mappatura o fotogrammetria, va scritto
            chiaramente nella richiesta.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette di
            pubblicare la richiesta e ricevere candidature da piloti drone
            interessati. Cliente e professionista potranno poi accordarsi sui
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
                Posso richiedere un drone per fotografare un terreno?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta e ricevere
                candidature da piloti drone disponibili per foto e video di
                terreni, lotti, aree agricole e proprietà private.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone misura i confini del terreno?
              </h3>
              <p className="text-gray-300">
                No, le immagini possono mostrare una visione generale, ma confini,
                misure e dati catastali richiedono documenti e professionisti
                abilitati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare il video per vendere il terreno?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video pensati per annunci immobiliari,
                presentazioni o materiale da mostrare a potenziali acquirenti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere anche una mappatura tecnica?
              </h3>
              <p className="text-gray-300">
                Puoi indicarlo nella richiesta. Saranno i piloti con competenze e
                attrezzatura adatta a valutare se candidarsi.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare la richiesta?
              </h3>
              <p className="text-gray-300">
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono
                10 crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                I piloti pagano per candidarsi?
              </h3>
              <p className="text-gray-300">
                Sì, rispondere o candidarsi a un annuncio costa 5 crediti. I
                nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente il servizio?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone. Il
                servizio viene svolto dal professionista scelto dal cliente.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedi un preventivo drone per terreno
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per foto, video, sopralluoghi visivi e documentazione
            dall'alto di terreni agricoli, terreni edificabili, lotti, proprietà,
            aree esterne, accessi, piazzali e zone difficili da osservare da
            terra.
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