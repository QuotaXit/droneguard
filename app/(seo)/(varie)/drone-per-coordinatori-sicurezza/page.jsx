import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per coordinatori sicurezza | DroneGuard",
  description:
    "Trova piloti drone per coordinatori sicurezza, cantieri, sopralluoghi, documentazione visiva e controllo aree di lavoro. Richiedi foto e video con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per sicurezza cantieri
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per coordinatori sicurezza
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Sei un coordinatore della sicurezza, un tecnico di cantiere, un
            responsabile dei lavori, un geometra, un architetto, un ingegnere o
            un professionista che deve seguire cantieri e aree operative? Con
            DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto aeree, video di sopralluogo,
            documentazione visiva, controlli dall'alto e riprese utili a osservare
            meglio l'organizzazione del cantiere. Il drone può aiutare a vedere
            aree difficili da raggiungere, coperture, ponteggi, accessi, zone di
            deposito, percorsi interni, scavi, facciate e spazi esterni, offrendo
            un supporto visivo utile alla gestione e alla comunicazione del lavoro.
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
              Sopralluoghi visivi
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video dall'alto per osservare aree di cantiere,
              accessi, ponteggi, coperture, facciate e zone operative.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione cantiere
            </h2>
            <p className="text-gray-300">
              Ottieni materiale visivo da usare per report, aggiornamenti,
              comunicazioni tecniche, archivio lavori e confronto tra fasi.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti drone disponibili
            </h2>
            <p className="text-gray-300">
              Pubblica la richiesta, indica zona e tipo di cantiere, e ricevi
              candidature da operatori drone interessati.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per il coordinamento sicurezza
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il coordinatore della sicurezza deve avere una visione chiara
              dell'area di lavoro, dell'organizzazione del cantiere, degli accessi,
              delle lavorazioni in corso e delle zone che possono richiedere
              maggiore attenzione. In molti casi, osservare tutto da terra non è
              sufficiente per comprendere bene la disposizione complessiva degli
              spazi.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può essere utile come supporto visivo per controllare
              dall'alto ponteggi, coperture, facciate, aree di deposito, viabilità
              interna, recinzioni, zone di accesso, scavi, piazzali e parti alte
              dell'edificio. Le immagini ottenute possono aiutare a documentare lo
              stato dei luoghi e a comunicare meglio con imprese, committenti,
              tecnici e altri soggetti coinvolti.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi trovare piloti drone disponibili per singoli
              sopralluoghi, controlli periodici, documentazione fotografica,
              riprese video o materiale visivo da allegare a comunicazioni,
              aggiornamenti e report.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per coordinatori sicurezza
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree per cantieri e aree operative</li>
              <li>✅ Video di sopralluogo per documentazione visiva</li>
              <li>✅ Riprese di ponteggi, coperture e facciate</li>
              <li>✅ Controllo visivo di accessi e viabilità interna</li>
              <li>✅ Documentazione di scavi, piazzali e zone deposito</li>
              <li>✅ Materiale per report e aggiornamenti tecnici</li>
              <li>✅ Supporto visivo per riunioni e comunicazioni</li>
              <li>✅ Monitoraggio periodico dello stato del cantiere</li>
              <li>✅ Riprese per imprese, tecnici e committenti</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per sopralluoghi di cantiere
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un sopralluogo con drone può offrire una visione più ampia del
            cantiere. Le riprese dall'alto permettono di osservare l'area nel suo
            insieme, la posizione dei mezzi, i percorsi interni, le zone di
            deposito, le aree operative, gli accessi, la recinzione e le parti
            dell'edificio non facilmente visibili da terra.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo tipo di materiale può essere utile per comprendere meglio
            l'organizzazione degli spazi, preparare incontri con imprese e
            committenti, documentare una determinata fase di lavoro o conservare
            una memoria visiva dello stato del cantiere in un certo momento.
          </p>

          <p className="leading-8 text-gray-300">
            Il drone non sostituisce le verifiche tecniche e le responsabilità del
            professionista, ma può diventare uno strumento pratico per raccogliere
            immagini chiare, ordinate e facilmente condivisibili.
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
                Crea il tuo account come cliente, tecnico, coordinatore sicurezza,
                impresa edile o pilota drone.
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
                Descrivi il cantiere, la zona, le aree da riprendere e il
                materiale che vuoi ottenere.
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
              Drone per ponteggi, tetti e facciate
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Ponteggi, coperture, tetti, facciate alte, gronde, terrazzi e parti
              esterne dell'edificio possono essere difficili da osservare
              completamente da terra. Il drone può aiutare a ottenere una visione
              più chiara di queste aree, utile per documentare lo stato dei luoghi
              e organizzare eventuali attività successive.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini possono essere condivise con imprese, tecnici, direttori
              lavori, amministratori, committenti o altri professionisti coinvolti
              nel cantiere.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per aree operative e accessi
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In un cantiere è importante capire come sono organizzati accessi,
              viabilità interna, zone di carico e scarico, deposito materiali,
              aree mezzi, recinzioni e spazi di lavoro. Le riprese aeree possono
              aiutare a visualizzare meglio l'intera area operativa.
            </p>

            <p className="leading-8 text-gray-300">
              Questo supporto visivo può essere utile soprattutto nei cantieri
              grandi, nei piazzali, nelle aree esterne, nelle ristrutturazioni
              complesse e nei lavori con più imprese coinvolte.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto e video per report, riunioni e comunicazioni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini raccolte con drone possono essere usate per documentare lo
            stato del cantiere e rendere più semplici le comunicazioni tra le parti.
            Un video dall'alto può mostrare in modo immediato la situazione
            complessiva, mentre le fotografie possono essere inserite in report,
            email, presentazioni o archivi digitali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo può essere utile quando il coordinatore sicurezza deve
            confrontarsi con imprese, responsabili, committenti, direttori lavori
            o altri tecnici. Avere un materiale visivo chiaro aiuta tutti a
            parlare della stessa situazione reale, riducendo dubbi e spiegazioni
            difficili da fare solo a parole.
          </p>

          <p className="leading-8 text-gray-300">
            Pubblicando una richiesta su DroneGuard puoi indicare se ti servono
            immagini grezze, foto selezionate, video brevi, cartelle ordinate per
            data, monitoraggi periodici o materiale pronto da allegare a un
            aggiornamento tecnico.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Cantieri edili
            </h2>
            <p className="text-gray-300">
              Riprese aeree per nuove costruzioni, ristrutturazioni, manutenzioni,
              demolizioni, coperture, facciate, scavi e aree esterne.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Tecnici e coordinatori
            </h2>
            <p className="text-gray-300">
              Utile per coordinatori sicurezza, direttori lavori, geometri,
              architetti, ingegneri, amministratori e responsabili di progetto.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione visiva
            </h2>
            <p className="text-gray-300">
              Materiale per report, aggiornamenti, riunioni, archivio lavori,
              comunicazioni con imprese e confronto tra diverse fasi.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta per il coordinatore sicurezza
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            tipo di cantiere e il risultato che vuoi ottenere. Puoi indicare la
            città, la zona, la tipologia di lavori, lo stato attuale del cantiere,
            le aree da riprendere e la finalità del materiale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se ti servono foto aeree, video, sopralluogo su
            copertura, riprese di ponteggi, controllo visivo delle facciate,
            documentazione degli accessi, immagini delle aree di deposito,
            monitoraggio periodico o materiale da condividere con imprese e
            committenti.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere anche informazioni pratiche: presenza di ponteggi,
            spazi disponibili per il decollo, orari preferiti, accesso al cantiere,
            necessità di coordinarsi con l'impresa, eventuali limitazioni dell'area
            e tipo di consegna desiderata.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per coordinatore sicurezza
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di un cantiere
              edile. Mi servono riprese dall'alto dell'area operativa, degli
              accessi, dei ponteggi, delle facciate, delle zone di deposito, dei
              percorsi interni e della copertura. Il materiale verrà usato come
              supporto visivo per documentazione, aggiornamenti e comunicazioni con
              impresa e committente.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            cantiere, le aree da riprendere, l'obiettivo del servizio e il tipo di
            consegna richiesta.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per coordinatori sicurezza?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per coordinatori sicurezza può variare
            in base alla zona, alla durata delle riprese, alla complessità del
            cantiere, al numero di aree da documentare, al tipo di materiale
            richiesto e alla frequenza del servizio. Un singolo sopralluogo può
            avere un costo diverso rispetto a un monitoraggio periodico con più
            uscite.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna incide. Alcuni professionisti chiedono solo immagini
            grezze, altri preferiscono fotografie selezionate, video brevi, file
            ordinati per data, cartelle condivisibili o materiale pronto da
            inserire in report e aggiornamenti.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo fisso. La piattaforma permette di
            pubblicare il lavoro e ricevere candidature da piloti drone
            interessati, così cliente e professionista possono accordarsi sul
            servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso trovare un pilota drone per un cantiere?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta e ricevere
                candidature da piloti drone disponibili per foto, video e
                sopralluoghi visivi di cantieri.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce il coordinatore sicurezza?
              </h3>
              <p className="text-gray-300">
                No, il drone è solo uno strumento di supporto visivo. Le valutazioni
                tecniche e le responsabilità restano sempre in capo ai professionisti
                incaricati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere controlli periodici?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare se ti serve un singolo sopralluogo oppure
                riprese periodiche durante le diverse fasi del cantiere.
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
            Trova un pilota drone per sicurezza cantiere
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video, sopralluoghi visivi,
            documentazione di cantiere e materiale utile a coordinatori sicurezza,
            tecnici, imprese edili, direttori lavori e committenti.
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