import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo drone per controllo copertura industriale | DroneGuard",
  description: "Richiedi un preventivo drone per controllo copertura industriale. Pubblica il lavoro su DroneGuard, descrivi zona, obiettivo e materiale richiesto, confronta i piloti drone interessati e scegli il candidato più adatto."
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
            Preventivo drone per controllo copertura industriale: pubblica il lavoro e scegli il candidato
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Cerchi un preventivo drone per controllo copertura industriale? Con DroneGuard puoi pubblicare una richiesta,
            spiegare il lavoro da svolgere e ricevere candidature da piloti drone interessati. La pagina è pensata
            per clienti, aziende, tecnici e privati che vogliono capire come chiedere un prezzo corretto, quali dettagli
            indicare e come confrontare le risposte ricevute.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Richiedi un preventivo
              </button>
            </Link>
            <Link href="/come-funziona">
              <button className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Come funziona DroneGuard
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Richiesta chiara</h2>
            <p className="leading-7 text-gray-300">Descrivi controllo copertura industriale, zona del lavoro, obiettivo, urgenza e materiale desiderato. Una richiesta precisa aiuta i piloti a rispondere meglio.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Preventivo confrontabile</h2>
            <p className="leading-7 text-gray-300">Ricevi candidature da piloti interessati e confronta esperienza, disponibilità, modalità di consegna e prezzo proposto.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Materiale utile</h2>
            <p className="leading-7 text-gray-300">Puoi chiedere foto, video, panoramiche e dettagli di coperture di capannoni, lucernari, gronde, camini, impianti esterni e pannelli, sempre in base alla fattibilità e alla sicurezza del volo.</p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un preventivo drone per controllo copertura industriale
            </h2>
            <p className="mb-5 leading-8 text-gray-300">Quando una persona cerca un preventivo drone per controllo copertura industriale, di solito non vuole leggere una pagina generica sui droni: vuole capire quanto può costare un servizio reale, quali informazioni deve preparare, che tipo di materiale può chiedere e come trovare un pilota drone disponibile. DroneGuard nasce proprio per questo: mettere in contatto chi ha un lavoro da pubblicare con piloti drone interessati a candidarsi.</p>

            <p className="mb-5 leading-8 text-gray-300">La richiesta può riguardare coperture di capannoni, lucernari, gronde, camini, impianti esterni e pannelli. Ogni situazione è diversa e per questo un prezzo unico non sarebbe serio: contano luogo, difficoltà del volo, dimensione dell area, urgenza, durata, numero di punti da documentare, consegna richiesta e presenza di vincoli operativi. Una pagina dedicata ai preventivi deve aiutare il cliente a spiegare bene il lavoro, così il pilota può rispondere in modo concreto.</p>

            <p className="mb-5 leading-8 text-gray-300">Per responsabili tecnici, facility manager e imprese, il drone può diventare uno strumento utile perché permette di vedere dall alto elementi che da terra risultano parziali, nascosti o difficili da raccontare. Una foto panoramica può mostrare contesto e accessi; un dettaglio ravvicinato può evidenziare un punto specifico; un video può far capire il percorso, la posizione e la relazione tra più zone della stessa area.</p>

            <p className="mb-5 leading-8 text-gray-300">L obiettivo principale di questa pagina è aiutarti a pubblicare una richiesta migliore. Dire soltanto mi serve un drone è troppo poco. Scrivere invece che ti serve un preventivo drone per controllo copertura industriale, indicando città, zona, finalità, punti da riprendere e materiale desiderato, aumenta le possibilità di ricevere candidature utili e confrontabili.</p>

            <p className="mb-5 leading-8 text-gray-300">DroneGuard non impone un prezzo fisso per controllo copertura industriale. La piattaforma funziona come punto di incontro: il cliente pubblica il lavoro, i piloti interessati leggono i dettagli e possono candidarsi. Poi cliente e professionista possono accordarsi direttamente su prezzo, tempi, consegna, limiti del servizio e modalità operative.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa indicare nella richiesta
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>✅ luogo o zona indicativa del lavoro</li>
              <li>✅ obiettivo del servizio e uso finale del materiale</li>
              <li>✅ elementi da riprendere: coperture di capannoni, lucernari, gronde, camini, impianti esterni e pannelli</li>
              <li>✅ foto, video, dettagli ravvicinati o consegna ordinata</li>
              <li>✅ urgenza, disponibilità oraria e referente sul posto</li>
              <li>✅ eventuali ostacoli, accessi limitati o zone sensibili</li>
              <li>✅ richiesta di prezzo, tempi e modalità di consegna</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come si forma il prezzo di un servizio drone
          </h2>
            <p className="mb-5 leading-8 text-gray-300">Un preventivo corretto dipende anche dal tipo di consegna. Alcuni clienti chiedono solo foto e video grezzi, altri preferiscono una cartella ordinata, immagini selezionate, video montato, panoramiche di contesto, dettagli tecnici o materiale diviso per lato, zona o fase del lavoro. Specificare la consegna evita incomprensioni e aiuta il pilota a stimare meglio il lavoro.</p>

            <p className="mb-5 leading-8 text-gray-300">Se il materiale serve per preparare un preventivo tecnico più preciso e ridurre sopralluoghi inutili, conviene dirlo subito. Un pilota che conosce l uso finale può proporre inquadrature più adatte: immagini larghe per presentare un area, dettagli per un controllo visivo, sequenze ordinate per una documentazione tecnica, riprese più dinamiche per promozione o contenuti social.</p>

            <p className="mb-5 leading-8 text-gray-300">Il drone non sostituisce un tecnico, una perizia, una certificazione o una diagnosi professionale. Può però fornire una base visiva molto utile. Nel caso di controllo copertura industriale, foto e video possono aiutare a parlare con una ditta, con un geometra, con un amministratore, con un assicuratore o con una direzione aziendale, rendendo più chiaro il problema prima di decidere il passo successivo.</p>

            <p className="mb-5 leading-8 text-gray-300">Prima di pubblicare il lavoro, prepara una descrizione semplice ma completa: dove si trova il luogo, cosa bisogna riprendere, perché ti serve il materiale, entro quando vuoi riceverlo, se ci sono accessi da rispettare, se serve un referente sul posto e se esistono limiti di orario. Più il testo è chiaro, più le risposte saranno pertinenti.</p>

            <p className="mb-5 leading-8 text-gray-300">Nel caso di controllo copertura industriale, può essere utile indicare espressamente elementi come coperture di capannoni, lucernari, gronde, camini, impianti esterni e pannelli. Non devi usare parole tecniche perfette: basta spiegare il problema con precisione. Il pilota potrà poi fare domande, valutare fattibilità e chiarire cosa è possibile riprendere in sicurezza.</p>

            <p className="mb-5 leading-8 text-gray-300">Anche la sicurezza incide sul preventivo. Un volo semplice in un area libera non ha la stessa complessità di un volo vicino a edifici, persone, strade, cavi, alberi, attività produttive o zone sensibili. Il pilota deve valutare meteo, vento, ostacoli, privacy, spazi di decollo, area di lavoro e regole applicabili prima di confermare il servizio.</p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard per i preventivi
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">1. Registrati</h3>
              <p className="text-sm leading-6 text-gray-300">Crea un account come cliente, azienda, tecnico, proprietario, amministratore o pilota drone.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-green-400">2. Usa i crediti</h3>
              <p className="text-sm leading-6 text-gray-300">I clienti ricevono 10 crediti gratuiti e i piloti ricevono 50 crediti gratuiti dopo la registrazione.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-green-400">3. Pubblica il lavoro</h3>
              <p className="text-sm leading-6 text-gray-300">Pubblicare una richiesta costa 5 crediti. Scrivi cosa ti serve e quale materiale vuoi ricevere.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-green-400">4. Scegli il pilota</h3>
              <p className="text-sm leading-6 text-gray-300">I piloti interessati possono candidarsi. Rispondere a un annuncio costa 5 crediti per il pilota.</p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">Per clienti, aziende e tecnici</h2>
            <p className="mb-5 leading-8 text-gray-300">Il cliente dovrebbe evitare richieste troppo vaghe o promesse irrealistiche. Una buona richiesta non chiede soltanto un prezzo basso, ma spiega cosa serve davvero. Ad esempio: cerco un pilota drone per controllo copertura industriale, vorrei foto panoramiche, dettagli dei punti principali, eventuale video breve e consegna ordinata per confrontarmi con un tecnico o un impresa.</p>

            <p className="mb-5 leading-8 text-gray-300">Per un pilota drone, rispondere a una richiesta ben scritta è molto più semplice. Può capire se il lavoro è nella propria zona, se ha esperienza simile, se dispone dell attrezzatura adatta, se ci sono vincoli da verificare e se il cliente ha aspettative realistiche. Questo rende la candidatura più professionale e aumenta la fiducia.</p>

            <p className="mb-5 leading-8 text-gray-300">Il sistema a crediti di DroneGuard aiuta a mantenere il processo ordinato. I clienti ricevono 10 crediti gratuiti dopo la registrazione e pubblicare una richiesta costa 5 crediti. I piloti ricevono 50 crediti gratuiti dopo la registrazione e rispondere o candidarsi a un annuncio costa 5 crediti. In questo modo chi pubblica e chi risponde ha un interesse reale nel contatto.</p>

            <p className="mb-5 leading-8 text-gray-300">Quando confronti più candidature, non guardare solo il prezzo finale. Valuta chiarezza, disponibilità, esperienza, modo di comunicare, attenzione alla sicurezza, tempi di consegna e capacità di capire l obiettivo. Per controllo copertura industriale, una proposta leggermente più alta ma ben spiegata può essere più utile di una risposta economica ma senza dettagli.</p>

            <p className="mb-5 leading-8 text-gray-300">Un altro elemento importante è la distanza del pilota. Se il lavoro è lontano, il costo può includere spostamento e tempo necessario per raggiungere il luogo. Se invece il pilota opera già in zona, il preventivo potrebbe essere più competitivo. Per questo conviene indicare almeno città e area indicativa, senza necessariamente pubblicare dati sensibili se non vuoi farlo nella prima richiesta.</p>

            <p className="mb-5 leading-8 text-gray-300">La durata del servizio può variare molto. Una breve sessione di foto esterne richiede meno tempo di una documentazione completa con più punti, più angolazioni, video, dettagli ravvicinati e consegna ordinata. Se vuoi risparmiare tempo e denaro, chiarisci quali immagini sono indispensabili e quali sono solo desiderabili.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">Per piloti drone</h2>
            <p className="mb-5 leading-8 text-gray-300">Per controllo copertura industriale, puoi chiedere una consegna essenziale oppure più strutturata. La consegna essenziale può includere foto e video principali; quella più completa può includere cartelle nominate, sequenze per zona, immagini selezionate, video breve, note descrittive o riprese ripetute nel tempo. Il preventivo cambia in base a ciò che chiedi.</p>

            <p className="mb-5 leading-8 text-gray-300">Il meteo è un fattore concreto. Vento, pioggia, scarsa luce, foschia o orari non adatti possono rendere il volo meno utile o non sicuro. Se hai urgenza, scrivilo; se invece puoi aspettare qualche giorno per condizioni migliori, anche questo può aiutare il pilota a organizzare un lavoro migliore.</p>

            <p className="mb-5 leading-8 text-gray-300">La privacy va considerata sempre. Se nelle riprese possono comparire persone, targhe, proprietà vicine o attività sensibili, è opportuno indicarlo. Il pilota deve operare con attenzione e il cliente deve spiegare eventuali limiti. Un servizio drone professionale non è solo ripresa dall alto, ma anche gestione responsabile del contesto.</p>

            <p className="mb-5 leading-8 text-gray-300">Un preventivo drone per controllo copertura industriale può essere richiesto da privati, aziende, tecnici, amministratori, imprese e professionisti. La stessa tecnologia può servire a scopi diversi: controllare, documentare, promuovere, confrontare, archiviare, preparare un intervento o semplicemente capire meglio una situazione.</p>

            <p className="mb-5 leading-8 text-gray-300">Se il lavoro riguarda manutenzione o controllo, conviene chiedere immagini molto leggibili e non solo belle. Se riguarda promozione, conviene pensare a luce, percorso, composizione e sensazione generale. Se riguarda un confronto tecnico, conviene chiedere ordine, ripetibilità e riprese dei lati o punti principali. L uso finale guida tutto il preventivo.</p>

            <p className="mb-5 leading-8 text-gray-300">DroneGuard può essere utile anche quando non sai esattamente cosa chiedere. Puoi pubblicare una descrizione del problema e lasciare che i piloti interessati ti facciano domande o propongano una soluzione. L importante è partire da un obiettivo chiaro: cosa vuoi vedere, perché ti serve e come userai il materiale.</p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta che riceve risposte migliori
          </h2>
            <p className="mb-5 leading-8 text-gray-300">Per controllo copertura industriale, una richiesta efficace potrebbe indicare: zona del lavoro, tipo di area, punti da riprendere, eventuali ostacoli, disponibilità oraria, urgenza, materiale finale e uso previsto. Questi elementi trasformano una richiesta generica in un annuncio concreto e più interessante per piloti qualificati.</p>

            <p className="mb-5 leading-8 text-gray-300">La pagina SEO deve portare traffico, ma deve anche aiutare davvero il visitatore. Chi arriva cercando preventivo drone per controllo copertura industriale deve capire subito che può registrarsi, usare i crediti gratuiti, pubblicare il lavoro e scegliere il candidato. Ogni testo deve accompagnare l utente verso un azione semplice.</p>

            <p className="mb-5 leading-8 text-gray-300">Una cosa da evitare è creare aspettative assolute. Il drone non può volare ovunque e non sempre può avvicinarsi a ogni punto. Ci possono essere restrizioni, aree sensibili, spazi ridotti o condizioni non adatte. Il pilota serio preferisce verificare prima, spiegare i limiti e confermare solo ciò che può svolgere con sicurezza.</p>

            <p className="mb-5 leading-8 text-gray-300">Per il cliente, il vantaggio è non dover cercare a caso tra social, annunci generici o contatti sparsi. Con DroneGuard può pubblicare una richiesta specifica e ricevere risposte da piloti interessati. Questo rende più facile confrontare disponibilità, prezzo e modalità di lavoro.</p>

            <p className="mb-5 leading-8 text-gray-300">Per il pilota, il vantaggio è intercettare richieste concrete. Una pagina dedicata ai preventivi porta clienti con bisogni precisi, non semplici curiosi. Rispondere bene significa spiegare esperienza, copertura geografica, tempi, consegna e domande necessarie per definire meglio il servizio.</p>

            <p className="mb-5 leading-8 text-gray-300">Una volta scelto il pilota, conviene confermare tutto per iscritto: data, orario, punto di incontro, referente, obiettivo, materiale richiesto, consegna, eventuali limiti e prezzo concordato. Anche un servizio semplice diventa più professionale quando le aspettative sono allineate.</p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per controllo copertura industriale
          </h2>
          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per controllo copertura industriale. Vorrei ricevere un preventivo per foto panoramiche,
              video breve e dettagli dei punti principali: coperture di capannoni, lucernari, gronde, camini, impianti esterni e pannelli. Il materiale servirà per preparare un preventivo tecnico più preciso e ridurre sopralluoghi inutili.
              La zona è da definire, posso indicare indirizzo preciso e referente dopo il primo contatto.”
            </p>
          </div>
          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta di questo tipo è utile perché spiega il contesto, indica il materiale desiderato e chiarisce
            l uso finale. Il pilota può valutare tempi, complessità, fattibilità, spostamento, consegna e prezzo in modo più serio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Perché pubblicare la richiesta su DroneGuard</h2>
            <p className="mb-5 leading-8 text-gray-300">Dopo il lavoro, conserva il materiale in modo ordinato. Le immagini possono servire subito per un preventivo o una decisione, ma anche mesi dopo per confrontare lo stato prima e dopo un intervento, per mostrare un cambiamento o per ricostruire una situazione. La documentazione aerea ha valore anche nel tempo.</p>

            <p className="mb-5 leading-8 text-gray-300">Per controllo copertura industriale, il miglior risultato nasce dall incontro tra una richiesta chiara e una candidatura seria. Il cliente porta contesto, obiettivo e informazioni; il pilota porta esperienza, valutazione di fattibilità e capacità tecnica. DroneGuard serve a far partire questo incontro in modo ordinato.</p>

            <p className="mb-5 leading-8 text-gray-300">Se vuoi partire, prepara poche informazioni essenziali: che cosa deve essere ripreso, dove si trova, perché ti serve, che tipo di consegna vuoi e quando ti serve. Pubblica il lavoro su DroneGuard e lascia che i piloti interessati ti rispondano con una proposta. Così il preventivo diventa più concreto e meno casuale.</p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">Domande frequenti</h2>
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Come posso chiedere un preventivo drone per controllo copertura industriale?</h3>
              <p className="leading-7 text-gray-300">Registrati su DroneGuard come cliente, pubblica una richiesta e descrivi zona, obiettivo, materiale richiesto e punti da documentare. I piloti drone interessati potranno candidarsi.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Quanto costa pubblicare una richiesta?</h3>
              <p className="leading-7 text-gray-300">Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">I piloti pagano per rispondere?</h3>
              <p className="leading-7 text-gray-300">Sì. Rispondere o candidarsi a un annuncio costa 5 crediti. I nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Il prezzo del servizio drone è fisso?</h3>
              <p className="leading-7 text-gray-300">No. Il prezzo dipende da luogo, durata, difficoltà, materiale richiesto, urgenza, spostamento del pilota e condizioni operative.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Che cosa devo scrivere nella richiesta?</h3>
              <p className="leading-7 text-gray-300">Indica cosa vuoi riprendere, perché ti serve, la zona, l urgenza e i punti principali, ad esempio coperture di capannoni, lucernari, gronde, camini, impianti esterni e pannelli.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Il drone sostituisce un tecnico o una perizia?</h3>
              <p className="leading-7 text-gray-300">No. Il drone fornisce documentazione visiva. Perizie, certificazioni, diagnosi tecniche e decisioni operative devono essere svolte da professionisti qualificati.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Il volo è sempre possibile?</h3>
              <p className="leading-7 text-gray-300">No. Il pilota deve valutare sicurezza, meteo, ostacoli, privacy, persone presenti, spazi di volo e regole applicabili prima di confermare il servizio.</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedi ora un preventivo drone per controllo copertura industriale
          </h2>
          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica il lavoro usando i crediti gratuiti e confronta le candidature dei piloti drone.
            Più la richiesta è chiara, più sarà semplice ricevere risposte utili e scegliere il candidato più adatto.
          </p>
          <Link href="/register">
            <button className="rounded-xl bg-[#0B0F2A] px-6 py-3 font-semibold text-white transition hover:opacity-90">
              Pubblica la richiesta
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
