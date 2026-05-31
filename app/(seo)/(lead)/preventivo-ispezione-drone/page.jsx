import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo ispezione drone | DroneGuard",
  description:
    "Richiedi un preventivo per ispezione con drone. Trova piloti drone per controlli visivi di tetti, grondaie, facciate, pannelli fotovoltaici, cantieri e strutture difficili da raggiungere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Preventivi per ispezioni con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Preventivo ispezione drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai bisogno di un preventivo per un'ispezione con drone? Con
            DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per controlli visivi di tetti, coperture, grondaie,
            facciate, camini, pannelli fotovoltaici, capannoni, cantieri,
            strutture industriali, condomini e aree difficili da osservare da
            terra. Il drone può essere utile per ottenere foto e video dall'alto,
            documentare lo stato di una struttura, individuare elementi da
            approfondire e raccogliere materiale visivo utile prima di organizzare
            un intervento tecnico.
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
              Ispezioni visive
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video dall'alto per osservare tetti, coperture,
              facciate, grondaie, camini e parti difficili da raggiungere.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Strutture e cantieri
            </h2>
            <p className="text-gray-300">
              Trova piloti drone per controlli visivi su cantieri, capannoni,
              condomini, aree esterne, piazzali, coperture industriali e strutture.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Candidature mirate
            </h2>
            <p className="text-gray-300">
              Pubblica la richiesta, descrivi cosa deve essere ispezionato e
              ricevi candidature da operatori drone disponibili.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione con drone può essere utile quando devi osservare una
              zona alta, ampia, scomoda o difficile da raggiungere in sicurezza.
              Il drone permette di raccogliere immagini e video da punti di vista
              che normalmente richiederebbero scale, ponteggi, piattaforme o
              sopralluoghi più complessi. Questo non significa sostituire le
              verifiche tecniche necessarie, ma avere una prima documentazione
              visiva può aiutare a capire meglio la situazione.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le ispezioni con drone vengono richieste spesso per tetti,
              coperture, grondaie, camini, facciate, terrazzi, pannelli
              fotovoltaici, capannoni, condomini, cantieri e strutture esterne.
              Un cliente può usarle per vedere danni, usura, elementi spostati,
              zone deteriorate, infiltrazioni sospette, accumuli di materiale o
              parti che richiedono un controllo più approfondito da parte di un
              tecnico.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi descrivere il problema, indicare la zona e
              ricevere candidature da piloti drone interessati. La piattaforma
              mette in contatto clienti e operatori, lasciando poi al cliente la
              scelta del professionista più adatto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Ispezioni che puoi richiedere
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Ispezione tetti con drone</li>
              <li>✅ Controllo grondaie e pluviali</li>
              <li>✅ Ispezione camini e comignoli</li>
              <li>✅ Controllo facciate e terrazzi</li>
              <li>✅ Ispezione pannelli fotovoltaici</li>
              <li>✅ Controllo coperture industriali</li>
              <li>✅ Ispezione capannoni e condomini</li>
              <li>✅ Documentazione danni dopo maltempo</li>
              <li>✅ Controllo visivo di cantieri e strutture</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Preventivo per ispezione tetti, grondaie e coperture
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le ispezioni di tetti e coperture sono tra le richieste più frequenti.
            Un drone può riprendere dall'alto tegole, guaine, comignoli, canali di
            scolo, grondaie, lucernari, antenne, terrazzi e parti superiori di un
            edificio. Questo tipo di materiale può essere utile per proprietari,
            amministratori di condominio, imprese edili, tecnici, manutentori e
            professionisti che vogliono osservare lo stato della copertura prima
            di intervenire.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            In caso di vento forte, grandine, pioggia intensa o altri eventi
            atmosferici, il drone può aiutare a raccogliere immagini dello stato
            esterno dell'edificio. Le foto e i video possono mostrare parti
            visibili della copertura e aiutare a capire se è necessario un
            sopralluogo tecnico più approfondito. Il materiale raccolto può essere
            condiviso con un'impresa, un tecnico o un amministratore.
          </p>

          <p className="leading-8 text-gray-300">
            Quando pubblichi la richiesta, indica se l'ispezione riguarda un tetto
            privato, un condominio, un capannone, una villa, un edificio
            commerciale o una struttura industriale. Questo aiuta il pilota a
            capire meglio il contesto operativo.
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
                Crea gratuitamente il tuo account come cliente, azienda,
                amministratore o pilota drone.
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
                3. Pubblica l'ispezione
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi cosa deve essere controllato, la zona, il tipo di
                edificio e il risultato richiesto.
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
              Ispezione drone per condomini
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un amministratore di condominio può richiedere un'ispezione con
              drone per osservare tetti, facciate, terrazzi, grondaie, camini,
              antenne e parti comuni difficili da vedere da terra. Le immagini
              possono essere utili per valutare lo stato dell'edificio, raccogliere
              materiale da condividere con tecnici o imprese e preparare eventuali
              interventi di manutenzione.
            </p>

            <p className="leading-8 text-gray-300">
              Nella richiesta è utile indicare il numero di piani, la presenza di
              cortili interni, spazi esterni, accessi, eventuali ostacoli e la
              parte dell'edificio che deve essere osservata.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Ispezione drone per aziende e capannoni
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le aziende possono richiedere ispezioni con drone per capannoni,
              coperture industriali, impianti, piazzali, strutture esterne,
              pannelli fotovoltaici e aree difficili da raggiungere. Il drone può
              offrire una visione generale della struttura e produrre materiale
              fotografico utile per manutenzione, report interni o valutazioni
              preliminari.
            </p>

            <p className="leading-8 text-gray-300">
              È importante specificare se il lavoro si svolge in area industriale,
              in un piazzale, su una copertura ampia o vicino a elementi che
              potrebbero influenzare le operazioni di volo.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Preventivo ispezione fotovoltaico con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può essere richiesto anche per controlli visivi su pannelli
            fotovoltaici, impianti su tetto, coperture industriali e campi
            fotovoltaici. Le immagini dall'alto possono aiutare a osservare la
            disposizione dei pannelli, la presenza di sporco evidente, ombre,
            elementi danneggiati, zone difficili da vedere da terra o problemi
            visibili sulla copertura.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Se ti serve un'ispezione più tecnica, ad esempio con termografia, è
            importante scriverlo chiaramente nella richiesta. Non tutti i piloti
            dispongono della stessa attrezzatura, quindi indicare subito il tipo
            di controllo desiderato aiuta a ricevere candidature più adatte.
          </p>

          <p className="leading-8 text-gray-300">
            Una richiesta completa dovrebbe indicare se l'impianto si trova su un
            tetto, su un capannone, su terreno o in un campo fotovoltaico, oltre
            alla dimensione indicativa e all'obiettivo del controllo.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Prima dell'intervento
            </h2>
            <p className="text-gray-300">
              Il drone può aiutare a osservare la situazione prima di chiamare
              una ditta, un tecnico o organizzare un sopralluogo più complesso.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Dopo un danno
            </h2>
            <p className="text-gray-300">
              Puoi richiedere foto e video dopo vento, grandine, pioggia intensa,
              caduta rami o eventi che potrebbero aver danneggiato una struttura.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Per documentare
            </h2>
            <p className="text-gray-300">
              Le immagini possono essere utili per report, archivio fotografico,
              comunicazioni interne, valutazioni e confronto con professionisti.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta di ispezione con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante spiegare bene cosa
            deve essere ispezionato. Una richiesta troppo generica può rendere più
            difficile la valutazione da parte del pilota. Scrivere “mi serve
            controllare un tetto” è utile, ma aggiungere dettagli come tipo di
            edificio, zona, altezza indicativa, parte da osservare e obiettivo del
            controllo rende la richiesta molto più chiara.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi indicare se ti servono foto, video, entrambe le cose oppure un
            breve report fotografico. Puoi anche spiegare se il controllo riguarda
            un danno specifico, una manutenzione programmata, una verifica dopo
            maltempo, un impianto fotovoltaico o una copertura industriale. Più il
            contesto è chiaro, più sarà facile trovare un operatore adatto.
          </p>

          <p className="leading-8 text-gray-300">
            Ricorda che l'utilizzo del drone deve sempre rispettare sicurezza,
            privacy, normative e condizioni operative del luogo. Sarà il pilota a
            valutare la fattibilità del volo in base all'area, agli ostacoli e
            alle regole applicabili.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per ispezione con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per controllare il tetto di una villetta in
              provincia di Roma dopo il forte vento. Mi servono foto e video della
              copertura, delle grondaie e del camino per capire se ci sono danni
              visibili. Vorrei ricevere candidature da operatori disponibili nei
              prossimi giorni.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Un testo di questo tipo aiuta il pilota a capire subito il luogo, il
            tipo di controllo richiesto, l'urgenza e il materiale desiderato.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione con drone può variare in base alla zona, al
            tipo di struttura, alla durata del lavoro, alla complessità operativa,
            al materiale richiesto e all'eventuale necessità di attrezzature
            specifiche. Una semplice ispezione fotografica di un tetto può essere
            diversa da un controllo su un grande capannone, un impianto
            fotovoltaico o una struttura industriale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna richiesta può incidere. Alcuni clienti vogliono solo
            foto e video grezzi, altri preferiscono una selezione ordinata di
            immagini, un video montato o un piccolo report fotografico. Per questo
            è utile spiegare bene il risultato desiderato nella richiesta.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette di
            pubblicare la richiesta e ricevere candidature da piloti drone
            interessati, così cliente e professionista possono accordarsi sui
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
                Posso richiedere un preventivo per ispezione con drone?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta per ispezione con
                drone e ricevere candidature da piloti interessati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente le ispezioni?
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
                Che strutture posso far ispezionare?
              </h3>
              <p className="text-gray-300">
                Puoi richiedere controlli visivi su tetti, grondaie, facciate,
                camini, terrazzi, capannoni, condomini, cantieri e impianti
                fotovoltaici.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                L'ispezione con drone sostituisce un tecnico?
              </h3>
              <p className="text-gray-300">
                No, il drone può fornire documentazione visiva utile, ma non
                sostituisce verifiche tecniche, diagnosi professionali o
                sopralluoghi specialistici quando necessari.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso chiedere foto e video?
              </h3>
              <p className="text-gray-300">
                Sì, nella richiesta puoi specificare se vuoi fotografie, video,
                materiale grezzo, selezione immagini o un piccolo report visivo.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedi un preventivo per ispezione con drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per ispezioni visive di tetti, grondaie, facciate, camini,
            capannoni, pannelli fotovoltaici, cantieri, condomini e strutture
            difficili da raggiungere.
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