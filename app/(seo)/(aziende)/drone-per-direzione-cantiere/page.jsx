import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per direzione cantiere | DroneGuard",
  description:
    "Drone per direzione cantiere: trova piloti drone su DroneGuard per figure che seguono la direzione operativa di cantiere e vogliono una panoramica visiva dello stato delle lavorazioni. Foto, video, sopralluoghi visivi, ispezioni e documentazione aerea professionale."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per aziende e professionisti
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per direzione cantiere: trova piloti drone per foto, video e controlli visivi
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            DroneGuard aiuta figure che seguono la direzione operativa di cantiere e vogliono una panoramica visiva dello stato delle lavorazioni a trovare piloti drone disponibili per
            realizzare immagini dall'alto, video, sopralluoghi visivi e
            documentazione utile prima di un intervento, durante una lavorazione o
            nella fase di presentazione di un immobile, di un cantiere, di una
            struttura o di un'area esterna. Una pagina dedicata a drone per direzione cantiere serve
            a intercettare una ricerca specifica e trasformarla in una richiesta
            chiara: il cliente può spiegare cosa deve controllare, dove si trova
            l'area, che tipo di materiale gli serve e perché ha bisogno di un
            pilota drone.
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
            <h2 className="mb-3 text-xl font-semibold">Per aziende e studi</h2>
            <p className="leading-7 text-gray-300">
              Pubblica una richiesta dettagliata per documentare immobili,
              coperture, facciate, cantieri, piazzali, terreni o aree difficili
              da osservare bene da terra.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Per professionisti</h2>
            <p className="leading-7 text-gray-300">
              Ottieni materiale visivo utile da condividere con clienti, tecnici,
              imprese, amministratori, collaboratori, fornitori o proprietari.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Per piloti drone</h2>
            <p className="leading-7 text-gray-300">
              Candidati agli annunci coerenti con la tua zona, la tua esperienza,
              la tua attrezzatura e il tipo di consegna richiesta dal cliente.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando usare un drone per direzione cantiere
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può essere richiesto quando serve una visione più ampia e
              ordinata dello stato dei luoghi. Per figure che seguono la direzione operativa di cantiere e vogliono una panoramica visiva dello stato delle lavorazioni, le immagini dall'alto
              possono essere utili per capire meglio posizione, accessi, ostacoli,
              confini visivi, coperture, aree di lavoro, facciate, cortili,
              impianti esterni, parti alte, punti difficili da raggiungere e zone
              che da terra risultano poco leggibili. Non sempre è necessario
              entrare subito in quota o organizzare un sopralluogo complesso:
              spesso una prima documentazione fotografica aiuta a capire quali
              aspetti approfondire.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Una richiesta legata a drone per direzione cantiere può riguardare avanzamento lavori, aree operative, accessi, materiali, ma anche
              materiale per preventivi, immagini da inserire in una relazione,
              foto da mostrare al committente, video per una presentazione,
              documentazione prima e dopo un intervento o un archivio visivo da
              conservare nel tempo. Il drone non sostituisce una perizia, una
              verifica strutturale, un rilievo certificato o il lavoro di un
              tecnico abilitato, ma può diventare un supporto pratico per
              organizzare meglio le informazioni.
            </p>

            <p className="leading-8 text-gray-300">
              La cosa importante è spiegare bene l'obiettivo. Un pilota deve
              sapere se il cliente vuole una panoramica generale, dettagli
              ravvicinati, foto da più lati, un video breve, immagini verticali,
              una sequenza ordinata o materiale da usare solo come primo controllo.
              Più la richiesta è chiara, più le candidature saranno coerenti e
              più sarà semplice confrontare le proposte ricevute.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi richiedere
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ avanzamento lavori</li>
              <li>✅ aree operative</li>
              <li>✅ accessi</li>
              <li>✅ materiali</li>
              <li>✅ foto e video dall'alto</li>
              <li>✅ documentazione per preventivi</li>
              <li>✅ supporto a sopralluoghi</li>
              <li>✅ confronto con clienti e tecnici</li>
              <li>✅ archivio visivo ordinato</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per direzione cantiere per sopralluoghi, preventivi e documentazione
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            In molti lavori professionali il problema non è solo scattare una
            bella foto, ma ottenere immagini utili. Un tetto visto da terra può
            sembrare in buone condizioni, mentre dall'alto possono emergere
            ristagni, sporco, lucernari danneggiati, gronde ostruite, scossaline
            spostate, tegole mancanti, pannelli sollevati o aree che meritano un
            controllo più accurato. Allo stesso modo, un cantiere, un piazzale, un
            terreno o una facciata possono essere raccontati meglio con una
            prospettiva aerea.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per figure che seguono la direzione operativa di cantiere e vogliono una panoramica visiva dello stato delle lavorazioni, DroneGuard può essere usato per pubblicare una richiesta
            precisa e ricevere candidature da piloti interessati. Il cliente può
            indicare la città, la zona, il tipo di immobile o area, il materiale
            richiesto, l'eventuale urgenza, il motivo della richiesta e le
            informazioni utili per valutare il volo. Il pilota, prima di accettare,
            potrà considerare distanza, meteo, ostacoli, presenza di persone,
            privacy, sicurezza, spazi disponibili e regole applicabili.
          </p>

          <p className="leading-8 text-gray-300">
            Il materiale finale può essere semplice o più organizzato: foto
            panoramiche, video dall'alto, dettagli dei punti critici, scatti da
            diversi lati, immagini prima e dopo, raccolta fotografica per una
            relazione interna, contenuti per una presentazione commerciale o
            documentazione da inviare a tecnici e imprese. Ogni lavoro è diverso,
            quindi è utile spiegare fin dall'inizio come verrà usato il materiale.
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
                piattaforma per pubblicare richieste o leggere annunci disponibili.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Crediti gratuiti
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I clienti ricevono 10 crediti gratuiti dopo la registrazione,
                mentre i piloti ricevono 50 crediti gratuiti.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Richiesta o candidatura
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Pubblicare un lavoro costa 5 crediti. Rispondere o candidarsi a
                un annuncio costa 5 crediti per il pilota.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Accordo diretto
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Cliente e pilota possono accordarsi sui dettagli del servizio:
                tempi, prezzo, consegna, modalità e fattibilità del volo.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Come scrivere una richiesta efficace
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Per ricevere candidature utili non basta scrivere "mi serve un
              drone". È meglio indicare il tipo di edificio o area, la città, la
              zona, l'obiettivo, il materiale desiderato e il motivo della
              richiesta. Se ci sono punti specifici da controllare, è utile
              elencarli: copertura, facciata, cortile, terrazzo, grondaia,
              lucernario, accesso, confine, piazzale, struttura o impianto.
            </p>

            <p className="leading-8 text-gray-300">
              Nel caso di drone per direzione cantiere, puoi aggiungere informazioni sul lavoro da
              svolgere, sulla destinazione delle immagini e su eventuali vincoli:
              orari disponibili, presenza di persone, necessità di non disturbare
              attività in corso, urgenza del sopralluogo, consegna rapida oppure
              richiesta di foto ordinate per lato o per zona.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Come deve rispondere il pilota
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Una buona candidatura deve essere concreta. Il pilota può spiegare
              dove opera, quando è disponibile, che tipo di riprese può realizzare,
              che materiale consegna e quali aspetti devono essere verificati
              prima del volo. Questo aiuta il cliente a scegliere non solo in base
              al prezzo, ma anche in base alla chiarezza della risposta.
            </p>

            <p className="leading-8 text-gray-300">
              Se la richiesta riguarda un contesto tecnico o aziendale, conviene
              evitare promesse assolute. È meglio indicare che la fattibilità
              dipende da meteo, sicurezza, area di volo, ostacoli, normative,
              privacy e condizioni reali sul posto. Una risposta seria aumenta la
              fiducia e riduce incomprensioni.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché le immagini dall'alto aiutano aziende e professionisti
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini aeree permettono di vedere insieme elementi che da terra
            restano separati. In una sola ripresa si possono mostrare accessi,
            distanze, cortili, strade interne, aree di carico, confini, coperture,
            facciate e rapporto tra l'immobile e il contesto. Questo è utile per
            chi deve spiegare una situazione a persone che non erano presenti al
            sopralluogo o che devono prendere decisioni sulla base di informazioni
            chiare.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per direzione cantiere, il drone può diventare uno strumento di
            comunicazione: non serve solo a "fare scena", ma a rendere più
            leggibile un problema, un'opportunità o una lavorazione. Una foto
            ordinata può aiutare a chiedere un preventivo, un video può mostrare
            l'estensione di un'area, una sequenza prima e dopo può raccontare un
            intervento e una raccolta di immagini può creare uno storico utile nel
            tempo.
          </p>

          <p className="leading-8 text-gray-300">
            Naturalmente ogni utilizzo deve restare proporzionato. Il drone non è
            sempre la soluzione migliore e non può volare ovunque. Per questo è
            importante affidarsi a un pilota che valuti correttamente lo scenario e
            che spieghi al cliente cosa è possibile fare e cosa invece richiede
            strumenti, autorizzazioni o verifiche diverse.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per drone per direzione cantiere
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video legati a drone per direzione cantiere.
              Vorrei documentare l'area dall'alto, mostrare i punti principali e
              ricevere materiale utile per foto periodiche e video per verificare disposizione delle aree e comunicare con il committente. Il lavoro si trova in zona
              indicata nell'annuncio; prima del volo vorrei capire fattibilità,
              tempi di consegna e costo indicativo.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Un testo di questo tipo aiuta il pilota a capire il contesto, ma può
            essere migliorato aggiungendo indirizzo o zona, dimensioni indicative,
            tipo di struttura, eventuali ostacoli, orari preferiti e formato di
            consegna. Più informazioni inserisci, più sarà semplice ricevere
            risposte pertinenti.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per direzione cantiere?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone non è uguale per tutti. Può cambiare in
            base alla città, alla distanza del pilota, alla durata del lavoro, al
            tipo di immagini richieste, alla complessità dell'area, alla necessità
            di consegne rapide e al livello di organizzazione del materiale finale.
            Una semplice ripresa panoramica richiede meno tempo rispetto a una
            documentazione completa con foto dettagliate, video, selezione delle
            immagini e ordine per zona.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette di
            pubblicare una richiesta e ricevere candidature da piloti interessati.
            Cliente e professionista possono poi accordarsi direttamente su
            modalità, tempi, costo e consegna. Questo rende più semplice adattare
            il servizio al caso reale, evitando preventivi generici che non tengono
            conto delle condizioni del luogo.
          </p>

          <p className="leading-8 text-gray-300">
            Per risparmiare tempo, conviene preparare una richiesta completa:
            spiegare se servono foto, video, dettagli, panoramiche, materiale
            promozionale, immagini per preventivo o documentazione tecnica. Anche
            indicare una fascia oraria e una zona precisa può aiutare il pilota a
            stimare meglio il lavoro.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente il servizio?
              </h3>
              <p className="text-gray-300">
                No. DroneGuard mette in contatto clienti e piloti drone. Il
                servizio viene svolto dal professionista scelto dal cliente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso pubblicare una richiesta anche se non sono un tecnico?
              </h3>
              <p className="text-gray-300">
                Sì. È sufficiente descrivere il problema, il luogo, il materiale
                richiesto e il motivo per cui ti servono foto o video dall'alto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce una perizia?
              </h3>
              <p className="text-gray-300">
                No. Le immagini con drone possono aiutare la documentazione
                visiva, ma non sostituiscono verifiche tecniche, perizie,
                certificazioni o valutazioni professionali.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare un lavoro?
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
                Sì. Rispondere o candidarsi a un annuncio costa 5 crediti. I
                nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il volo è sempre possibile?
              </h3>
              <p className="text-gray-300">
                No. Il pilota deve valutare sicurezza, condizioni meteo, presenza
                di persone, ostacoli, privacy, spazi disponibili e regole
                applicabili.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per direzione cantiere
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per servizi dedicati a figure che seguono la direzione operativa di cantiere e vogliono una panoramica visiva dello stato delle lavorazioni. Puoi richiedere foto,
            video, sopralluoghi visivi, documentazione per preventivi, materiale
            per presentazioni, controlli esterni e immagini da condividere con
            clienti, tecnici, imprese o collaboratori.
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