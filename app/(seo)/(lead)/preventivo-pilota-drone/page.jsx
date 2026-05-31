import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo pilota drone | DroneGuard",
  description:
    "Richiedi un preventivo per un pilota drone professionale. Trova operatori drone per riprese aeree, ispezioni, fotogrammetria, cantieri, immobili, eventi e servizi tecnici."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Preventivi drone professionali
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Preventivo pilota drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai bisogno di un pilota drone per un lavoro professionale? Con
            DroneGuard puoi pubblicare una richiesta e ricevere candidature da
            operatori drone disponibili per riprese aeree, video promozionali,
            ispezioni visive, monitoraggio cantieri, servizi immobiliari,
            fotogrammetria, eventi, agricoltura, controlli tecnici e altri
            interventi con drone. Invece di cercare manualmente un professionista,
            puoi descrivere il servizio che ti serve, indicare la zona, spiegare
            il risultato desiderato e aspettare le risposte dei piloti interessati.
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
              Pubblica la richiesta
            </h2>
            <p className="text-gray-300">
              Descrivi il lavoro che ti serve, la zona, il tipo di servizio, la
              data indicativa e il risultato che vuoi ottenere dal pilota drone.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ricevi candidature
            </h2>
            <p className="text-gray-300">
              I piloti drone interessati possono candidarsi alla tua richiesta e
              proporti la loro disponibilità per il servizio.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Scegli il candidato
            </h2>
            <p className="text-gray-300">
              Confronta le candidature ricevute e scegli il professionista più
              adatto al tipo di lavoro che devi realizzare.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un preventivo per un pilota drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un preventivo per pilota drone può essere utile quando hai bisogno
              di immagini aeree, video professionali, controlli visivi o materiale
              tecnico realizzato dall'alto. Il drone viene utilizzato in molti
              settori: immobiliare, edilizia, turismo, eventi, agricoltura,
              ispezioni, fotovoltaico, rilievi, comunicazione aziendale e
              monitoraggio del territorio. Ogni lavoro può avere esigenze diverse,
              per questo è importante spiegare bene cosa ti serve prima di
              ricevere candidature.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Se devi vendere un immobile, valorizzare una villa, mostrare un
              terreno, documentare un cantiere o creare un video promozionale per
              un'attività, un pilota drone può aiutarti a ottenere contenuti più
              completi e professionali. Le riprese dall'alto permettono di
              mostrare il contesto, le dimensioni dell'area, gli accessi, gli
              spazi esterni e dettagli che da terra possono risultare difficili da
              comunicare.
            </p>

            <p className="leading-8 text-gray-300">
              DroneGuard nasce proprio per semplificare questo incontro tra chi
              cerca un servizio con drone e chi lavora come operatore drone. Il
              cliente pubblica una richiesta, i piloti interessati rispondono e la
              scelta finale resta al cliente. In questo modo puoi raccogliere
              disponibilità senza dover contattare singolarmente decine di
              operatori.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi per cui puoi chiedere un preventivo
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese aeree professionali</li>
              <li>✅ Video immobiliari con drone</li>
              <li>✅ Ispezione tetti, coperture e grondaie</li>
              <li>✅ Monitoraggio cantieri edili</li>
              <li>✅ Fotogrammetria e rilievi con drone</li>
              <li>✅ Video per hotel, agriturismi e strutture turistiche</li>
              <li>✅ Riprese per eventi e matrimoni</li>
              <li>✅ Controlli visivi su impianti fotovoltaici</li>
              <li>✅ Foto e video per aziende e professionisti</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come ottenere un preventivo più preciso
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più adatte è importante scrivere una
            richiesta chiara. Un pilota drone deve capire dove si svolgerà il
            lavoro, che tipo di risultato desideri, se ti servono foto, video,
            materiale grezzo, montaggio finale, riprese tecniche o semplici
            immagini panoramiche. Più dettagli inserisci, più sarà semplice per
            gli operatori valutare il servizio e proporti una soluzione coerente.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ad esempio, per un immobile puoi indicare se si tratta di villa,
            appartamento, terreno, casale, capannone o struttura commerciale. Per
            un cantiere puoi descrivere la fase dei lavori, la grandezza dell'area,
            la frequenza delle riprese e se il materiale servirà per report,
            documentazione o marketing. Per un'ispezione puoi spiegare quale
            parte deve essere osservata: tetto, facciata, grondaia, camino,
            pannelli fotovoltaici, copertura industriale o area esterna.
          </p>

          <p className="leading-8 text-gray-300">
            Anche la zona è fondamentale. Un pilota vicino al luogo del lavoro può
            essere più disponibile e ridurre tempi di organizzazione. Per questo
            DroneGuard permette di pubblicare richieste specificando l'area in cui
            serve il servizio, così i piloti possono valutare se candidarsi in base
            alla distanza e alla disponibilità.
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
                Crea gratuitamente il tuo account come cliente o come pilota
                drone.
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
                Inserisci la richiesta, descrivi il servizio e indica dove deve
                essere svolto.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Valuta le risposte
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Ricevi candidature dai piloti interessati e scegli il candidato
                più adatto.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Preventivo drone per privati
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un privato può richiedere un pilota drone per valorizzare una casa,
              una villa, un terreno, un evento, una proprietà o un'attività da
              promuovere. Le immagini aeree possono essere utili per annunci
              immobiliari, ricordi personali, contenuti social, video di famiglia,
              riprese di una location o documentazione dello stato di un'area.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi spiegare il lavoro che vuoi realizzare e
              ricevere risposte da piloti disponibili. È utile indicare se vuoi
              solo foto, solo video, entrambe le cose oppure un montaggio finale
              pronto da pubblicare.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Preventivo drone per aziende
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le aziende possono usare il drone per comunicazione, documentazione,
              promozione e controllo visivo. Un'impresa edile può documentare un
              cantiere, un hotel può mostrare la struttura dall'alto, un'agenzia
              immobiliare può valorizzare un immobile, un'azienda agricola può
              riprendere terreni e coltivazioni, mentre un'attività commerciale
              può creare contenuti più professionali.
            </p>

            <p className="leading-8 text-gray-300">
              Pubblicare una richiesta dettagliata aiuta i piloti a capire il
              contesto e proporre una candidatura più adatta alle esigenze
              dell'azienda.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto può costare un pilota drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un pilota drone può cambiare in base al tipo di servizio,
            alla durata del lavoro, alla distanza, alla complessità operativa, al
            tipo di materiale richiesto e alla necessità di post-produzione. Una
            semplice sessione fotografica per un immobile non ha le stesse
            esigenze di un monitoraggio periodico di cantiere, di un rilievo
            tecnico o di un video aziendale completo con montaggio finale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per questo motivo, invece di dare un prezzo unico valido per tutti, è
            meglio descrivere il lavoro e ricevere candidature da operatori
            interessati. Il pilota potrà valutare il luogo, il tipo di drone
            necessario, il tempo previsto, le eventuali limitazioni operative e il
            risultato richiesto. In questo modo il preventivo può essere più
            realistico rispetto a una stima generica.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo fisso per i servizi. La piattaforma
            mette in contatto clienti e piloti drone, lasciando alle parti la
            possibilità di accordarsi sul lavoro, sulle modalità e sul compenso.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video
            </h2>
            <p className="text-gray-300">
              Ideale per immobili, aziende, eventi, turismo, social, promozione
              commerciale e contenuti professionali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ispezioni visive
            </h2>
            <p className="text-gray-300">
              Utile per osservare tetti, coperture, grondaie, facciate, pannelli
              fotovoltaici e aree difficili da raggiungere.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Servizi tecnici
            </h2>
            <p className="text-gray-300">
              Richieste per cantieri, rilievi, fotogrammetria, mappature,
              documentazione e monitoraggi periodici.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta di preventivo
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Una buona richiesta dovrebbe contenere tutte le informazioni principali
            che un pilota drone deve conoscere. Prima di pubblicare il lavoro,
            pensa all'obiettivo finale: vuoi promuovere un immobile, controllare
            una copertura, documentare un cantiere, creare un video per un'azienda
            o ottenere immagini tecniche? Ogni obiettivo richiede un approccio
            diverso.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi indicare la città o la zona, il tipo di luogo, la data desiderata,
            il numero di foto o video necessari, la durata indicativa delle
            riprese, l'eventuale urgenza, la presenza di ostacoli, il tipo di
            consegna richiesta e se hai bisogno anche del montaggio video. Se il
            lavoro riguarda un contesto tecnico, puoi spiegare anche cosa deve
            essere osservato o documentato.
          </p>

          <p className="leading-8 text-gray-300">
            Una richiesta chiara fa risparmiare tempo sia al cliente che al pilota.
            Il professionista può capire subito se il lavoro è compatibile con la
            sua esperienza, la sua attrezzatura e la sua zona di operatività.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per preventivo pilota drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di una villa in
              vendita a Roma. Mi servono riprese esterne, immagini del giardino,
              vista dall'alto della proprietà e un breve video promozionale da
              usare online. Il lavoro dovrebbe essere svolto entro le prossime due
              settimane. Preferisco ricevere materiale già selezionato e pronto per
              la pubblicazione.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Un testo di questo tipo aiuta il pilota a capire subito il servizio,
            la zona, il risultato richiesto e il tipo di consegna. Puoi adattare
            lo stesso metodo per cantieri, aziende, eventi, ispezioni o rilievi.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere un preventivo per un pilota drone?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta e ricevere
                candidature da piloti drone interessati al lavoro.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard fa direttamente i lavori con drone?
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
                Che informazioni devo inserire nella richiesta?
              </h3>
              <p className="text-gray-300">
                È utile indicare zona, tipo di servizio, data indicativa, obiettivo
                del lavoro, materiale richiesto e ogni dettaglio utile per far
                capire bene il progetto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso cercare un pilota drone vicino a me?
              </h3>
              <p className="text-gray-300">
                Sì, nella richiesta puoi indicare la zona in cui serve il servizio,
                così i piloti interessati possono valutare la distanza e la
                disponibilità.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere solo foto o solo video?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare se ti servono solo fotografie, solo video,
                entrambi oppure un video montato pronto per la pubblicazione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedi un preventivo per un pilota drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica la tua richiesta e trova piloti
            drone disponibili per riprese aeree, video professionali, ispezioni,
            cantieri, immobili, eventi, fotogrammetria e servizi tecnici. Descrivi
            il lavoro, indica la zona e ricevi candidature da operatori interessati.
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