import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Incarichi per piloti drone | DroneGuard",
  description:
    "Trova incarichi per piloti drone e candidature su DroneGuard. Una pagina dedicata a chi vuole ricevere richieste per lavori con drone in edilizia, immobili, eventi e aziende."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Incarichi e lavori con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Incarichi per piloti drone: come trovare nuove richieste
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            DroneGuard aiuta piloti drone, operatori UAS, freelance e professionisti che vogliono lavorare con il drone a gestire richieste legate a incarichi per piloti drone.
            Puoi usare questa pagina per intercettare ricerche specifiche e portare
            l'utente verso una richiesta concreta: pubblicare un lavoro, cercare un
            pilota, candidarsi a un annuncio o capire meglio come preparare il
            servizio prima del contatto. Il drone può essere utile quando servono
            foto e video dall'alto, documentazione visiva, controllo di punti
            difficili da vedere da terra, immagini per preventivi, contenuti
            promozionali o materiale da condividere con tecnici, imprese e clienti.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Registrati come pilota
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Per clienti</h2>
            <p className="leading-7 text-gray-300">
              Pubblica una richiesta chiara, indica luogo, obiettivo, urgenza, tipo di materiale richiesto e informazioni utili per valutare il volo.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Per piloti</h2>
            <p className="leading-7 text-gray-300">
              Leggi bene l'annuncio, rispondi solo se il servizio è nelle tue possibilità e spiega al cliente cosa puoi consegnare.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Per aziende</h2>
            <p className="leading-7 text-gray-300">
              Usa foto e video per documentare aree, immobili, coperture, cantieri e attività senza basarti solo su descrizioni da terra.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché questa ricerca è importante
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un pilota può avere competenze, attestati, attrezzatura e disponibilità, ma senza richieste concrete è difficile trasformare il drone in lavoro continuativo. Una pagina SEO dedicata permette di spiegare in modo
              semplice cosa può fare DroneGuard, quali informazioni servono e come
              trasformare una necessità generica in una richiesta più chiara.
              Questo aiuta sia chi deve acquistare un servizio sia chi deve
              candidarsi come pilota drone.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Quando una richiesta è scritta bene, il pilota può valutare distanza,
              tempo necessario, complessità del volo, materiale da consegnare,
              condizioni meteo, presenza di ostacoli, privacy, sicurezza e limiti
              operativi. Il cliente, invece, riceve risposte più utili e può
              confrontare meglio le candidature ricevute.
            </p>

            <p className="leading-8 text-gray-300">
              DroneGuard non sostituisce il rapporto diretto tra cliente e
              professionista: la piattaforma serve a creare il contatto. Il
              servizio, le modalità operative, il prezzo, i tempi e la fattibilità
              vengono poi valutati dal pilota e dal cliente in base al caso reale.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi collegati
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ sopralluoghi con drone</li>
              <li>✅ ispezioni esterne</li>
              <li>✅ riprese per immobili</li>
              <li>✅ video aziendali</li>
              <li>✅ documentazione di cantieri</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come usare DroneGuard per incarichi per piloti drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il cliente può registrarsi, creare una richiesta e descrivere il tipo
            di lavoro: città, zona, immobile o area da riprendere, obiettivo delle
            immagini, urgenza, eventuali problemi da documentare e formato del
            materiale desiderato. Più la descrizione è completa, più sarà semplice
            per i piloti capire se possono candidarsi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il pilota può leggere le richieste disponibili e rispondere solo a
            quelle coerenti con la propria zona, esperienza e attrezzatura. Nella
            candidatura può indicare disponibilità, modalità di consegna, tipo di
            riprese possibili e informazioni utili per rassicurare il cliente.
          </p>

          <p className="leading-8 text-gray-300">
            Il cliente deve sempre ricordare che ogni volo va valutato nel rispetto
            delle regole applicabili, delle condizioni meteo, degli spazi, degli
            ostacoli, della presenza di persone e della sicurezza generale. La
            fattibilità non dipende solo dal desiderio del cliente, ma anche dalla
            valutazione professionale del pilota.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                1. Registrazione
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Crea un account come cliente o come pilota drone e accedi alla
                piattaforma.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Crediti iniziali
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I clienti ricevono 10 crediti gratuiti e i piloti ricevono 50
                crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Annuncio o candidatura
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Pubblicare un lavoro costa 5 crediti; rispondere o candidarsi a
                un annuncio costa 5 crediti.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Contatto diretto
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Cliente e pilota possono accordarsi sui dettagli del servizio e
                valutare insieme tempi, prezzo e consegna.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Per chi cerca un servizio
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di pubblicare una richiesta, prepara una descrizione chiara.
              Indica se ti servono foto, video, riprese panoramiche, dettagli
              ravvicinati, immagini per un preventivo, documentazione per un
              tecnico o contenuti promozionali. Specifica anche se il lavoro deve
              essere svolto in una data precisa oppure se hai flessibilità.
            </p>

            <p className="leading-8 text-gray-300">
              Non serve usare parole tecniche: è meglio spiegare bene il problema.
              Ad esempio: "voglio vedere lo stato della copertura", "devo mostrare
              il terreno a un acquirente", "mi servono immagini per un'impresa" o
              "devo documentare un danno dopo il maltempo".
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Per chi si candida come pilota
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Una buona risposta deve essere concreta. Spiega dove operi, che tipo
              di servizio puoi offrire, quali immagini puoi consegnare, quando sei
              disponibile e quali aspetti devono essere verificati prima del volo.
              Questo rende la candidatura più seria e aiuta il cliente a scegliere.
            </p>

            <p className="leading-8 text-gray-300">
              Evita risposte troppo generiche. Se il cliente ha scritto una
              richiesta dettagliata, rispondi punto per punto: zona, obiettivo,
              tempi, materiale finale e possibili limiti. La chiarezza aumenta la
              fiducia e riduce incomprensioni.
            </p>
          </div>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta o candidatura
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Sono un pilota drone disponibile per ispezioni visive, riprese immobiliari e sopralluoghi in cantiere. Posso inviare foto, video e materiale ordinato in base alla richiesta del cliente.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Un testo di questo tipo funziona perché non resta vago: indica
            l'obiettivo, il contesto e il materiale desiderato. Su DroneGuard una
            richiesta precisa permette di ricevere candidature più pertinenti,
            mentre una candidatura chiara aiuta il cliente a capire se il pilota è
            adatto al lavoro.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa usare DroneGuard?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard usa un sistema a crediti. I nuovi clienti ricevono 10
            crediti gratuiti dopo la registrazione e possono usarli per pubblicare
            richieste. La pubblicazione di un lavoro costa 5 crediti, quindi un
            cliente può iniziare a provare la piattaforma senza acquistare subito
            altri crediti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche i piloti ricevono crediti gratuiti: dopo la registrazione hanno
            50 crediti iniziali. Rispondere o candidarsi a un annuncio costa 5
            crediti. Questo permette al pilota di scegliere le richieste più
            interessanti e candidarsi solo quando il lavoro è davvero coerente con
            disponibilità, zona e competenze.
          </p>

          <p className="leading-8 text-gray-300">
            Il prezzo del servizio drone non è imposto da DroneGuard. Il costo
            finale dipende da distanza, durata, complessità, consegna richiesta,
            urgenza, esperienza del pilota e condizioni del lavoro. Cliente e
            professionista possono accordarsi direttamente.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente i lavori con drone?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone. Il
                servizio viene svolto dal professionista scelto dal cliente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso pubblicare una richiesta anche se non conosco termini tecnici?
              </h3>
              <p className="text-gray-300">
                Sì. È sufficiente descrivere il problema, il luogo, il materiale
                che vuoi ricevere e il motivo per cui ti servono foto o video.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Un pilota può candidarsi a più annunci?
              </h3>
              <p className="text-gray-300">
                Sì, può candidarsi agli annunci che ritiene adatti. Ogni risposta
                o candidatura costa 5 crediti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Devo scegliere per forza il primo pilota che risponde?
              </h3>
              <p className="text-gray-300">
                No. Puoi valutare le candidature ricevute e scegliere il
                professionista più adatto alla tua richiesta.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il volo è sempre possibile?
              </h3>
              <p className="text-gray-300">
                No. Il pilota deve valutare sicurezza, meteo, area di volo,
                ostacoli, persone presenti, privacy e regole applicabili.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Inizia ora con DroneGuard
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Che tu voglia pubblicare una richiesta o candidarti come pilota,
            DroneGuard ti aiuta a creare un contatto mirato per lavori con drone,
            riprese aeree, ispezioni visive, cantieri, immobili, fotovoltaico,
            eventi, aziende e servizi locali.
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