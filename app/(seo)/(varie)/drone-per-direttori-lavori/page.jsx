import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per direttori lavori | DroneGuard",
  description:
    "Trova piloti drone per direttori lavori, cantieri, imprese edili e documentazione tecnica. Richiedi rilievi, foto aeree e monitoraggio lavori con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per cantieri e professionisti tecnici
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per direttori lavori
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Sei un direttore lavori, un tecnico, un'impresa edile, un geometra, un
            architetto o un professionista che deve seguire l'avanzamento di un
            cantiere? Con DroneGuard puoi pubblicare una richiesta e trovare piloti
            drone disponibili per realizzare foto aeree, video di avanzamento
            lavori, sopralluoghi dall'alto, documentazione visiva del cantiere,
            controlli su coperture, facciate, aree difficili da raggiungere e
            riprese utili alla gestione tecnica del progetto. Il drone permette di
            osservare il cantiere da una prospettiva più ampia, documentare le fasi
            di lavoro e avere materiale ordinato da condividere con committenti,
            imprese, tecnici e clienti.
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
              Monitoraggio lavori
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video periodici per seguire lo stato avanzamento
              lavori, documentare fasi di cantiere e confrontare le lavorazioni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Sopralluoghi dall'alto
            </h2>
            <p className="text-gray-300">
              Usa il drone per osservare coperture, facciate, ponteggi, aree
              esterne, accessi, scavi, piazzali e zone difficili da raggiungere.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti drone disponibili
            </h2>
            <p className="text-gray-300">
              Pubblica la richiesta, indica il cantiere e ricevi candidature da
              operatori drone interessati al servizio.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché un direttore lavori può usare il drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il direttore lavori deve controllare, documentare e seguire lo
              sviluppo dell'opera nel tempo. In molti cantieri, però, non è sempre
              semplice avere una visione completa da terra. Scavi, coperture,
              facciate, ponteggi, aree esterne, tetti, piazzali e lavorazioni in
              quota possono richiedere punti di vista diversi.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può aiutare a ottenere immagini e video utili per
              documentare lo stato del cantiere, verificare l'avanzamento delle
              lavorazioni, osservare l'organizzazione degli spazi, controllare
              accessi, materiali, zone operative e parti dell'edificio che non sono
              facilmente visibili dal basso.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi trovare piloti drone disponibili per singoli
              sopralluoghi, controlli periodici, riprese tecniche, foto di
              documentazione o video da condividere con committenti, imprese e
              professionisti coinvolti nel progetto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per direttori lavori
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Monitoraggio avanzamento lavori con drone</li>
              <li>✅ Foto aeree periodiche del cantiere</li>
              <li>✅ Video tecnici per committenti e imprese</li>
              <li>✅ Sopralluoghi su coperture, tetti e facciate</li>
              <li>✅ Documentazione visiva delle fasi di lavoro</li>
              <li>✅ Riprese di scavi, piazzali e aree esterne</li>
              <li>✅ Controllo visivo di ponteggi e parti alte</li>
              <li>✅ Materiale per relazioni, aggiornamenti e report</li>
              <li>✅ Supporto visivo per cantieri edili e infrastrutturali</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Monitoraggio cantiere con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il monitoraggio del cantiere con drone può essere utile quando il
            direttore lavori ha bisogno di documentare l'evoluzione dell'opera nel
            tempo. Ripetendo le riprese in momenti diversi, è possibile avere una
            memoria visiva delle lavorazioni, confrontare lo stato precedente con
            quello attuale e mostrare al committente l'avanzamento reale del
            progetto.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini aeree possono aiutare a vedere l'intera area di cantiere,
            gli accessi, i mezzi, le zone di deposito, i percorsi interni, gli
            scavi, la struttura, le coperture e le parti esterne dell'edificio. In
            alcuni casi possono essere utili anche per comunicare meglio con
            clienti, tecnici, imprese, amministratori e soggetti coinvolti.
          </p>

          <p className="leading-8 text-gray-300">
            Il drone non sostituisce le verifiche tecniche del professionista, ma
            può diventare uno strumento pratico per ottenere materiale visivo più
            chiaro, ordinato e facilmente condivisibile.
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
                Crea il tuo account come cliente, direttore lavori, tecnico,
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
                Descrivi il cantiere, la zona, il tipo di riprese e il materiale
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
              Drone per documentazione fotografica del cantiere
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              La documentazione fotografica è importante per conservare una traccia
              ordinata delle fasi di lavoro. Il drone può fornire immagini
              dall'alto che mostrano lo stato del cantiere, le aree operative, le
              strutture realizzate, le coperture, i prospetti, gli scavi e gli
              spazi esterni.
            </p>

            <p className="leading-8 text-gray-300">
              Questo materiale può essere utile per report interni, aggiornamenti
              al committente, presentazioni, archivio lavori, comunicazioni con
              imprese e controllo generale dell'area.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per sopralluoghi tecnici
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In alcuni casi il direttore lavori può avere bisogno di osservare
              parti difficili da raggiungere, come tetti, gronde, facciate alte,
              coperture industriali, ponteggi, terrazzi, cortili interni o zone
              esterne poco accessibili. Il drone può aiutare a ottenere una prima
              visione visiva senza dover sempre ricorrere a mezzi più complessi.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale ottenuto può essere usato per valutazioni preliminari,
              organizzazione di interventi, confronto con imprese e documentazione
              dello stato dei luoghi.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto e video per committenti, imprese e tecnici
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            In un cantiere ci sono spesso molti soggetti coinvolti: committente,
            direttore lavori, impresa, progettisti, tecnici, fornitori,
            amministratori e consulenti. Avere foto e video chiari può aiutare a
            comunicare meglio lo stato dei lavori e ridurre incomprensioni su ciò
            che è stato realizzato.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un video aereo può mostrare l'intera area in modo semplice e immediato.
            Le fotografie dall'alto possono essere inserite in relazioni, email,
            presentazioni, aggiornamenti periodici o archivi digitali. Questo rende
            il drone uno strumento utile non solo per la parte tecnica, ma anche
            per la comunicazione del progetto.
          </p>

          <p className="leading-8 text-gray-300">
            Pubblicando una richiesta su DroneGuard puoi indicare se ti servono
            riprese una tantum, controlli periodici, fotografie, video, materiale
            grezzo o contenuti già selezionati e pronti da condividere.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Cantieri edili
            </h2>
            <p className="text-gray-300">
              Riprese aeree per nuove costruzioni, ristrutturazioni, demolizioni,
              ampliamenti, coperture, facciate, scavi e aree esterne.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Professionisti tecnici
            </h2>
            <p className="text-gray-300">
              Utile per direttori lavori, geometri, architetti, ingegneri,
              coordinatori, amministratori e consulenti tecnici.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Report e aggiornamenti
            </h2>
            <p className="text-gray-300">
              Materiale visivo da usare per relazioni, aggiornamenti al cliente,
              archivio lavori, comunicazioni interne e presentazioni.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta per un direttore lavori
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            tipo di cantiere e il risultato che vuoi ottenere. Puoi indicare la
            città, la zona, il tipo di opera, lo stato attuale dei lavori, le aree
            da riprendere e la finalità del materiale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se ti servono foto aeree, video, riprese periodiche,
            sopralluogo su copertura, controllo facciata, documentazione di scavi,
            monitoraggio avanzamento lavori, immagini per relazione tecnica o
            materiale da condividere con il committente.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere anche eventuali informazioni pratiche: presenza di
            ponteggi, spazi disponibili per il decollo, orari preferiti, accesso al
            cantiere, necessità di coordinarsi con l'impresa e tipo di consegna
            desiderata.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per direttore lavori
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di un cantiere
              edile in fase di avanzamento lavori. Mi servono riprese dall'alto
              dell'intera area, della copertura, delle facciate, degli accessi, dei
              ponteggi e delle zone operative. Il materiale verrà usato per
              documentazione interna, aggiornamento al committente e archivio dello
              stato lavori.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            cantiere, le aree da riprendere, il risultato desiderato e l'uso finale
            del materiale.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per direttori lavori?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per direttori lavori può variare in base
            alla zona, alla durata delle riprese, alla complessità del cantiere, al
            numero di aree da documentare, al tipo di materiale richiesto e alla
            frequenza del servizio. Un singolo sopralluogo fotografico può avere un
            costo diverso rispetto a un monitoraggio periodico con più uscite.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna incide: alcuni professionisti chiedono solo immagini
            grezze, altri preferiscono foto selezionate, video montati, cartelle
            ordinate per data, riprese comparative o materiale pronto da condividere
            con il committente.
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
                monitoraggio visivo di cantieri.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per il direttore lavori?
              </h3>
              <p className="text-gray-300">
                Sì, può aiutare a documentare avanzamento lavori, aree esterne,
                coperture, facciate, ponteggi e parti del cantiere difficili da
                osservare da terra.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere riprese periodiche?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare se ti serve un singolo sopralluogo oppure un
                monitoraggio periodico con più uscite durante le fasi di lavoro.
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
            Trova un pilota drone per direzione lavori
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video, sopralluoghi,
            documentazione visiva e monitoraggio avanzamento lavori per cantieri,
            imprese edili, direttori lavori, tecnici e professionisti.
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