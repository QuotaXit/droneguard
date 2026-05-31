import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Rilievo 3D con drone | DroneGuard",
  description:
    "Trova piloti drone per rilievi 3D, fotogrammetria, modelli tridimensionali, ortofoto, nuvole di punti, terreni, edifici, cantieri e aree tecniche."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per rilievi 3D e fotogrammetria
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Rilievo 3D con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Il rilievo 3D con drone permette di acquisire immagini aeree e dati
            visivi utili per ricostruire terreni, edifici, cantieri, cave, aree
            industriali, fabbricati, coperture e infrastrutture in forma
            tridimensionale. Attraverso la fotogrammetria, le immagini raccolte
            dal drone possono essere trasformate in modelli 3D, ortofoto, nuvole
            di punti e materiali tecnici utili per analisi, progettazione,
            documentazione e monitoraggio. Con DroneGuard puoi trovare piloti
            drone disponibili per collaborare con geometri, architetti, ingegneri,
            imprese edili, studi tecnici, aziende e professionisti che hanno
            bisogno di rilievi tridimensionali e documentazione aerea.
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
              Modelli tridimensionali
            </h2>
            <p className="text-gray-300">
              Il drone può acquisire immagini utili per creare modelli 3D di
              edifici, terreni, cantieri, strutture, cave e aree da analizzare.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ortofoto e nuvole di punti
            </h2>
            <p className="text-gray-300">
              Le immagini aeree possono essere elaborate per ottenere ortofoto,
              nuvole di punti e materiali utili a studi tecnici e professionisti.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Supporto alla progettazione
            </h2>
            <p className="text-gray-300">
              Un rilievo 3D può aiutare a leggere meglio lo stato dei luoghi,
              pianificare interventi, confrontare aree e documentare situazioni
              complesse.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Cos'è un rilievo 3D con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un rilievo 3D con drone è un'attività di acquisizione aerea pensata
              per raccogliere immagini e dati visivi da più angolazioni. Il drone
              sorvola l'area interessata seguendo un piano di ripresa definito e
              acquisisce fotografie che possono essere successivamente elaborate
              tramite software specifici. Il risultato può essere un modello
              tridimensionale, una nuvola di punti, un'ortofoto, una mappa o un
              elaborato utile per comprendere meglio forma, dimensioni, pendenze,
              volumi e caratteristiche dell'area rilevata.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Questa tecnologia è utile quando serve una visione più completa
              rispetto alle fotografie tradizionali. Terreni, edifici, cave,
              discariche, cantieri, coperture, capannoni, aree agricole,
              infrastrutture e zone difficili da raggiungere possono essere
              documentate dall'alto in modo ordinato. Il rilievo 3D può aiutare
              tecnici e professionisti a osservare dettagli, confrontare situazioni
              nel tempo, preparare presentazioni, pianificare interventi o
              integrare i dati raccolti nel proprio flusso di lavoro.
            </p>

            <p className="leading-8 text-gray-300">
              DroneGuard non realizza direttamente i rilievi, ma mette in contatto
              clienti e piloti drone. Puoi pubblicare una richiesta specificando
              l'area da rilevare, il tipo di risultato desiderato e la zona del
              lavoro. I piloti interessati potranno candidarsi e proporti la loro
              disponibilità.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Applicazioni del rilievo 3D
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Rilievi 3D di terreni e lotti</li>
              <li>✅ Modellazione tridimensionale di edifici</li>
              <li>✅ Fotogrammetria con drone</li>
              <li>✅ Ortofoto e ortomosaici</li>
              <li>✅ Nuvole di punti per studi tecnici</li>
              <li>✅ Rilievi di cantieri e aree industriali</li>
              <li>✅ Calcolo volumi e confronto aree</li>
              <li>✅ Documentazione tecnica prima e dopo i lavori</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Rilievi 3D per terreni, edifici e cantieri
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il rilievo 3D con drone può essere utilizzato per terreni agricoli,
            lotti edificabili, aree da progettare, cantieri in corso, edifici da
            documentare, capannoni, cave, discariche, aree industriali e contesti
            complessi. Rispetto a una semplice fotografia, un modello
            tridimensionale offre una lettura più completa dello spazio e può
            aiutare a comprendere meglio quote, volumi, pendenze, forme, accessi e
            distribuzione degli elementi presenti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per un geometra o uno studio tecnico, il drone può rappresentare un
            supporto utile per raccogliere materiale visivo da integrare a rilievi,
            pratiche, relazioni e presentazioni. Per un'impresa edile, invece, un
            rilievo tridimensionale può essere utile per documentare l'avanzamento
            di un cantiere, confrontare lo stato iniziale e finale di un'area o
            mostrare ai clienti l'evoluzione dei lavori. Anche architetti,
            ingegneri e progettisti possono usare il rilievo 3D come base visiva
            per studiare meglio un contesto.
          </p>

          <p className="leading-8 text-gray-300">
            In alcuni casi, il rilievo con drone può essere richiesto anche da
            aziende agricole, proprietari di terreni, enti, amministrazioni,
            imprese di movimento terra, gestori di cave o società che devono
            documentare aree estese. La possibilità di ottenere una visione
            dall'alto, ordinata e confrontabile nel tempo rende il drone uno
            strumento interessante per molte attività professionali.
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
                Crea gratuitamente il tuo account come cliente, professionista,
                azienda o pilota drone.
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
                Descrivi l'area, il tipo di rilievo 3D, la zona e il risultato
                che ti serve.
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
              Fotogrammetria e modello 3D
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              La fotogrammetria con drone permette di trasformare una serie di
              immagini aeree in dati tridimensionali. Il drone acquisisce fotografie
              sovrapposte da diverse posizioni e il software ricostruisce forma e
              geometria dell'area. In questo modo è possibile ottenere un modello
              3D utile per visualizzazione, analisi, documentazione e confronto.
            </p>

            <p className="leading-8 text-gray-300">
              Il risultato dipende dal tipo di servizio richiesto, dall'attrezzatura
              utilizzata, dalla pianificazione del volo, dalle condizioni del luogo
              e dal livello di precisione necessario. Per questo è importante
              descrivere bene il progetto quando pubblichi una richiesta su
              DroneGuard.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Nuvole di punti, ortofoto e dati tecnici
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Oltre al modello 3D, un rilievo con drone può generare ortofoto,
              ortomosaici e nuvole di punti. Questi elaborati possono essere utili
              per studi tecnici, progettisti, imprese e professionisti che devono
              analizzare un'area, documentare uno stato di fatto o confrontare dati
              raccolti in momenti diversi.
            </p>

            <p className="leading-8 text-gray-300">
              Prima di richiedere il servizio è utile chiarire se ti serve solo
              materiale fotografico, un modello visualizzabile, un file tecnico, una
              nuvola di punti, un'ortofoto o un'elaborazione più specifica.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova piloti drone per rilievi tridimensionali
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta per un rilievo 3D con
            drone e ricevere candidature da piloti interessati. È importante
            indicare la città, la zona, la dimensione indicativa dell'area, il tipo
            di soggetto da rilevare e l'obiettivo finale. Ad esempio, puoi chiedere
            un rilievo 3D di un terreno, un modello tridimensionale di un edificio,
            una documentazione di cantiere, una nuvola di punti, un'ortofoto o una
            ricostruzione visiva da utilizzare in una presentazione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Più la richiesta è precisa, più sarà semplice ricevere candidature
            adeguate. Puoi specificare se l'area è accessibile, se ci sono ostacoli,
            se il lavoro si trova in zona urbana, rurale, industriale o vicino a
            infrastrutture, se servono elaborati tecnici o solo materiale visivo.
            Queste informazioni aiutano il pilota drone a valutare fattibilità,
            tempi, attrezzatura e modalità operative.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma può essere utilizzata da geometri, architetti,
            ingegneri, imprese edili, studi tecnici, amministrazioni, aziende,
            proprietari di terreni e professionisti che hanno bisogno di dati e
            immagini aeree per rilievi, progettazione, documentazione,
            manutenzione o monitoraggio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Cos'è un rilievo 3D con drone?
              </h3>
              <p className="text-gray-300">
                È un'acquisizione aerea che utilizza immagini raccolte dal drone
                per creare modelli tridimensionali, ortofoto, nuvole di punti o
                altra documentazione utile per analisi e progettazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere un modello 3D di un edificio?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta specificando che ti serve un
                modello 3D di un edificio, un fabbricato, un cantiere, una copertura
                o un'area da documentare.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il rilievo 3D sostituisce un rilievo tecnico tradizionale?
              </h3>
              <p className="text-gray-300">
                Dipende dall'obiettivo del lavoro. Il drone può essere un supporto
                molto utile, ma precisione, validità tecnica ed elaborati finali
                devono essere valutati con professionisti qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente i rilievi 3D?
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
            Trova un pilota drone per rilievi 3D
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e ricevi candidature
            da piloti drone interessati a realizzare rilievi 3D, fotogrammetria,
            ortofoto, nuvole di punti, modelli tridimensionali, rilievi di terreni,
            edifici, cantieri, cave e aree tecniche.
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