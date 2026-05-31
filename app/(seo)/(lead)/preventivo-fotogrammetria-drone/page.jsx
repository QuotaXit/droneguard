import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo fotogrammetria drone | DroneGuard",
  description:
    "Richiedi un preventivo per fotogrammetria con drone. Trova piloti drone per rilievi aerofotogrammetrici, ortofoto, modelli 3D, nuvole di punti e rilievi tecnici."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Preventivi per rilievi tecnici con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Preventivo fotogrammetria drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai bisogno di un preventivo per fotogrammetria con drone? Con
            DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per rilievi aerofotogrammetrici, ortofoto, modelli 3D,
            nuvole di punti, rilievi di terreni, cave, cantieri, immobili, aree
            agricole, coperture, infrastrutture e superfici da misurare o
            documentare. La fotogrammetria con drone è una soluzione utile quando
            serve raccogliere immagini dall'alto e trasformarle in materiale
            tecnico da usare per analisi, progettazione, documentazione o
            controllo dello stato dei luoghi.
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
              Rilievi con drone
            </h2>
            <p className="text-gray-300">
              Trova operatori drone per rilievi tecnici di terreni, cantieri,
              aree esterne, coperture, cave, lotti e superfici da documentare.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ortofoto e modelli 3D
            </h2>
            <p className="text-gray-300">
              Richiedi materiale utile per ortofoto, ortomosaici, modelli
              tridimensionali, nuvole di punti e documentazione tecnica.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Candidature mirate
            </h2>
            <p className="text-gray-300">
              Pubblica la richiesta, indica zona e obiettivo del rilievo e ricevi
              candidature da piloti drone interessati al lavoro.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando chiedere un preventivo per fotogrammetria con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un preventivo per fotogrammetria con drone può essere utile quando
              devi rilevare un'area, documentare un terreno, controllare lo stato
              di un cantiere, creare una base visiva per un progetto tecnico o
              ottenere materiale fotografico dall'alto da elaborare. La
              fotogrammetria permette di raccogliere molte immagini da diverse
              angolazioni e utilizzarle per produrre elaborati come ortofoto,
              modelli 3D, ortomosaici e ricostruzioni visive dell'area.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Questo tipo di servizio viene richiesto da geometri, architetti,
              ingegneri, imprese edili, aziende agricole, tecnici, studi di
              progettazione, amministratori, proprietari di terreni e aziende che
              hanno bisogno di una visione più completa dello spazio. Il drone può
              essere utile soprattutto quando l'area è ampia, difficile da
              osservare da terra o richiede una documentazione visiva dettagliata.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi descrivere il rilievo che ti serve e ricevere
              candidature da piloti drone disponibili. La piattaforma non esegue
              direttamente il servizio, ma mette in contatto clienti e operatori,
              così puoi valutare chi è più adatto al tuo lavoro.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi fotogrammetrici richiesti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Rilievo aerofotogrammetrico con drone</li>
              <li>✅ Ortofoto e ortomosaici</li>
              <li>✅ Modelli 3D da immagini drone</li>
              <li>✅ Nuvole di punti</li>
              <li>✅ Rilievi di terreni e lotti</li>
              <li>✅ Rilievi di cantieri edili</li>
              <li>✅ Calcolo volumi e superfici</li>
              <li>✅ Documentazione tecnica dall'alto</li>
              <li>✅ Monitoraggio aree esterne e infrastrutture</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Fotogrammetria con drone per terreni, cantieri e aree tecniche
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            La fotogrammetria con drone è particolarmente utile per terreni,
            cantieri, cave, aree agricole, lotti edificabili, piazzali, coperture,
            strutture industriali e zone in cui serve una documentazione visiva
            dall'alto. Attraverso un volo pianificato, il drone può acquisire
            immagini dell'area interessata e fornire materiale che potrà poi
            essere elaborato in base alle esigenze del progetto.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per un cantiere, il rilievo con drone può aiutare a documentare lo
            stato dei luoghi, seguire l'avanzamento dei lavori, controllare aree
            esterne e creare un archivio visivo utile per tecnici, imprese,
            committenti e direzione lavori. Per un terreno agricolo o edificabile,
            invece, può essere utile per avere una visione generale dell'area,
            osservare confini, accessi, pendenze, superfici e contesto
            circostante.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni lavoro può avere un livello di complessità diverso. Per questo è
            importante indicare nella richiesta il tipo di area, la dimensione
            indicativa, l'obiettivo del rilievo, il formato desiderato e se hai
            bisogno di materiale solo fotografico oppure di elaborati più tecnici.
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
                Crea gratuitamente il tuo account come cliente, tecnico, azienda
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
                3. Pubblica il rilievo
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi l'area, il tipo di fotogrammetria, la zona e il risultato
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
              Preventivo per ortofoto e ortomosaico
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              L'ortofoto e l'ortomosaico sono tra gli elaborati più richiesti nei
              rilievi con drone. Possono essere utili per visualizzare un'area
              dall'alto in modo ordinato, confrontare zone diverse, documentare
              lo stato di un terreno o fornire una base visiva per valutazioni
              tecniche. Se hai bisogno di questo tipo di servizio, nella richiesta
              è utile specificare l'area da rilevare e l'uso finale del materiale.
            </p>

            <p className="leading-8 text-gray-300">
              Un pilota drone interessato potrà valutare distanza, accessibilità,
              dimensione dell'area, condizioni operative e tipo di consegna
              richiesta.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Preventivo per modello 3D e nuvola di punti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In alcuni casi il cliente può aver bisogno di un modello 3D, di una
              nuvola di punti o di una ricostruzione dell'area rilevata. Questi
              servizi richiedono più attenzione rispetto a semplici foto aeree,
              perché il risultato finale dipende dalla pianificazione del volo,
              dalla qualità delle immagini, dall'elaborazione e dall'obiettivo
              tecnico del progetto.
            </p>

            <p className="leading-8 text-gray-300">
              Su DroneGuard puoi indicare chiaramente che tipo di elaborato ti
              serve e ricevere candidature da operatori che lavorano con rilievi
              tecnici e fotogrammetria.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta chiara per il rilievo
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ottenere un preventivo più preciso è importante descrivere bene il
            lavoro. Non basta scrivere “mi serve una fotogrammetria con drone”,
            perché il pilota deve capire il contesto, l'estensione dell'area, il
            tipo di elaborato richiesto e l'obiettivo finale. Una richiesta chiara
            permette agli operatori di valutare meglio tempi, difficoltà e
            disponibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi indicare la città o la zona, il tipo di area da rilevare, la
            grandezza indicativa, se si tratta di terreno, cantiere, cava,
            edificio, copertura, piazzale o area agricola. È utile specificare se
            ti servono solo immagini, ortofoto, modello 3D, nuvola di punti,
            video, report fotografico o materiale da consegnare a un tecnico.
          </p>

          <p className="leading-8 text-gray-300">
            Se hai già documenti, planimetrie, coordinate, confini o indicazioni
            precise sull'area, potrai comunicarli al pilota scelto. Nella fase
            iniziale, però, una descrizione ordinata è già sufficiente per ricevere
            candidature più mirate.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Geometri e tecnici
            </h2>
            <p className="text-gray-300">
              Utile per professionisti che hanno bisogno di materiale visivo,
              rilievi di supporto e documentazione tecnica dall'alto.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Imprese e cantieri
            </h2>
            <p className="text-gray-300">
              Ideale per monitorare aree di lavoro, seguire avanzamento cantieri
              e documentare lo stato dei luoghi.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Terreni e aree esterne
            </h2>
            <p className="text-gray-300">
              Adatto per terreni agricoli, lotti edificabili, cave, piazzali,
              discariche, superfici ampie e aree da osservare dall'alto.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa la fotogrammetria con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio di fotogrammetria con drone può variare in
            base a diversi fattori. La dimensione dell'area, la distanza, il tipo
            di elaborato richiesto, la complessità del luogo, la necessità di
            post-produzione e il livello di dettaglio desiderato possono incidere
            sul preventivo finale. Un piccolo rilievo fotografico di un terreno
            non richiede lo stesso lavoro di un rilievo complesso con ortofoto,
            modello 3D e nuvola di punti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il risultato richiesto cambia molto il tipo di lavoro. Alcuni
            clienti hanno bisogno solo di foto aeree ordinate, altri vogliono
            elaborati tecnici più avanzati. Per questo DroneGuard non propone un
            prezzo unico, ma permette di pubblicare una richiesta e ricevere
            candidature da piloti interessati.
          </p>

          <p className="leading-8 text-gray-300">
            Dopo aver ricevuto le candidature, potrai valutare il professionista
            più adatto e accordarti direttamente sui dettagli del servizio.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per fotogrammetria con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per un rilievo fotogrammetrico di un terreno
              di circa 2 ettari in provincia di Roma. Mi serve materiale utile per
              valutazioni tecniche, possibilmente ortofoto e immagini dall'alto.
              Vorrei ricevere candidature da operatori disponibili nelle prossime
              settimane, con esperienza in rilievi di terreni e aree esterne.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire subito il tipo di servizio,
            la zona, la dimensione indicativa dell'area e il risultato desiderato.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere un preventivo per fotogrammetria con drone?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta per fotogrammetria
                con drone e ricevere candidature da piloti interessati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente i rilievi?
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
                Che dati devo inserire nella richiesta?
              </h3>
              <p className="text-gray-300">
                Inserisci zona, tipo di area, dimensione indicativa, obiettivo del
                rilievo, elaborato richiesto e data o periodo desiderato.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso chiedere ortofoto o modello 3D?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare se ti servono ortofoto, ortomosaico, modello
                3D, nuvola di punti, immagini aeree o altro materiale tecnico.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere un rilievo per un cantiere?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare richieste per cantieri, terreni, cave, aree
                agricole, capannoni, piazzali, lotti e superfici esterne.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedi un preventivo per fotogrammetria con drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per rilievi aerofotogrammetrici, ortofoto, ortomosaici,
            modelli 3D, nuvole di punti, rilievi di terreni, cantieri, cave, aree
            agricole e superfici tecniche.
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