import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Uso drone per verifica illuminazione piazzali per archiviazione stato luoghi | DroneGuard",
  description: "Uso drone per verifica illuminazione piazzali per archiviazione stato luoghi: trova piloti drone su DroneGuard per foto, video, riprese aeree, sopralluoghi visivi e documentazione utile a aziende, gestori aree e manutentori impianti."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Industria e logistica con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Uso drone per verifica illuminazione piazzali per archiviazione stato luoghi: foto, video e documentazione visiva dall alto
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            L uso del drone per verifica illuminazione piazzali per archiviazione stato luoghi è pensato per chi ha bisogno di vedere meglio una situazione, raccogliere immagini dall alto e trasformare un problema difficile da spiegare in una richiesta concreta. Molte volte da terra si vede solo una parte del contesto: un lato dell edificio, un tratto di terreno, una porzione di piazzale, una copertura, un impianto o un punto alto. La ripresa aerea può aiutare a mettere ordine, mostrando insieme elementi che altrimenti resterebbero separati.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Richiedi documentazione aerea
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Richiesta mirata</h2>
            <p className="leading-7 text-gray-300">
              Descrivi con chiarezza luogo, obiettivo, urgenza, tipo di consegna e punti da documentare. Una richiesta precisa aiuta i piloti a valutare meglio il lavoro.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Foto e video utili</h2>
            <p className="leading-7 text-gray-300">
              Puoi chiedere panoramiche, dettagli ravvicinati, video brevi, immagini ordinate per zona e materiale da condividere con tecnici, clienti o imprese.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Piloti interessati</h2>
            <p className="leading-7 text-gray-300">
              DroneGuard mette in contatto chi cerca un servizio con piloti drone disponibili. Pubblica il lavoro e valuta le candidature ricevute.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un drone per verifica illuminazione piazzali per archiviazione stato luoghi
            </h2>
          <p className="mb-5 leading-8 text-gray-300">
            L uso del drone per verifica illuminazione piazzali per archiviazione stato luoghi è pensato per chi ha bisogno di vedere meglio una situazione, raccogliere immagini dall alto e trasformare un problema difficile da spiegare in una richiesta concreta. Molte volte da terra si vede solo una parte del contesto: un lato dell edificio, un tratto di terreno, una porzione di piazzale, una copertura, un impianto o un punto alto. La ripresa aerea può aiutare a mettere ordine, mostrando insieme elementi che altrimenti resterebbero separati.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Su DroneGuard il cliente può pubblicare una richiesta specifica per verifica illuminazione piazzali, indicare il luogo, spiegare l obiettivo e ricevere candidature da piloti drone interessati. Questa pagina non serve solo a posizionare una parola chiave: serve a chiarire cosa chiedere, come scriverlo e quali informazioni aiutano il pilota a valutare il lavoro senza perdere tempo.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Nel settore industria e logistica, una documentazione visiva ben fatta può aiutare aziende, gestori aree e manutentori impianti. Le immagini possono essere usate per preparare un preventivo, mostrare un problema a distanza, archiviare lo stato dei luoghi, presentare un immobile, monitorare un area o documentare una situazione dopo un evento atmosferico. Il valore non è soltanto estetico: è pratico, perché rende più facile capire e decidere.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Per verifica illuminazione piazzali per archiviazione stato luoghi può essere utile documentare torri faro, pali, aree in ombra, parcheggi, accessi, zone di carico e percorsi. Questi elementi dovrebbero essere indicati nella richiesta, anche con parole semplici. Il pilota non ha bisogno di un testo tecnico perfetto, ma di sapere quali punti non devono mancare, da quale lato conviene riprendere, se servono dettagli ravvicinati o panoramiche e come verrà usato il materiale finale.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Una richiesta generica come mi serve un drone spesso non basta. Una richiesta efficace spiega se il servizio serve quando il cliente vuole conservare una traccia visiva dello stato attuale, se c è un referente sul posto, se ci sono orari preferiti, se l area è privata o aziendale, se ci sono accessi particolari, se il materiale deve essere consegnato rapidamente e se sono richieste foto, video o entrambi.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Il drone può essere utile prima del sopralluogo perché permette di avere una prima lettura dell area. Non elimina la valutazione tecnica, ma può renderla più mirata. Per verifica illuminazione piazzali, un tecnico può osservare le immagini, capire quali punti approfondire, preparare domande più precise e valutare se servono strumenti, personale o mezzi particolari.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Un altro vantaggio è la condivisione. Una foto scattata da terra può essere comprensibile solo a chi era presente. Una sequenza ordinata di immagini aeree può invece essere inviata a un amministratore, a un responsabile aziendale, a un perito, a un impresa o a un cliente finale. In questo modo tutti osservano gli stessi punti e la conversazione diventa più concreta.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Per verifica illuminazione piazzali per archiviazione stato luoghi, la cosa migliore è chiedere sempre sia una panoramica generale sia alcuni dettagli. La panoramica fa capire dove si trova il punto da osservare; il dettaglio mostra meglio la criticità. Se manca una delle due parti, il materiale può risultare meno utile: una foto troppo ravvicinata non spiega il contesto, mentre una vista troppo larga può non mostrare il problema.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard è utile perché separa il bisogno del cliente dalla disponibilità del pilota. Il cliente non deve cercare a caso decine di contatti: pubblica il lavoro. Il pilota non deve rispondere a richieste confuse: può valutare descrizione, zona, obiettivo e complessità. Quando la richiesta è scritta bene, aumentano le possibilità di ricevere candidature più sensate.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            La pagina dedicata a verifica illuminazione piazzali parla anche ai piloti. Un operatore professionale dovrebbe rispondere spiegando zona di attività, esperienza, tipo di consegna, tempi indicativi e aspetti da verificare prima del volo. Nei lavori con drone, la chiarezza della candidatura è importante quanto la qualità delle immagini, perché il cliente vuole capire se ha davanti una persona affidabile.
          </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">Cosa puoi far documentare</h3>
            <ul className="space-y-4 text-gray-300">
              <li>✅ torri faro</li>
              <li>✅ pali</li>
              <li>✅ aree in ombra</li>
              <li>✅ parcheggi</li>
              <li>✅ accessi</li>
              <li>✅ zone di carico e percorsi</li>
              <li>✅ foto panoramiche, dettagli e video ordinati</li>
            </ul>
          </div>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">Come funziona DroneGuard</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">1. Registrati</h3>
              <p className="text-sm leading-6 text-gray-300">Crea un account come cliente, azienda, tecnico, amministratore, proprietario o pilota drone e accedi alla piattaforma.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-green-400">2. Usa i crediti</h3>
              <p className="text-sm leading-6 text-gray-300">I clienti ricevono 10 crediti gratuiti e i piloti ricevono 50 crediti gratuiti dopo la registrazione.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-green-400">3. Pubblica il lavoro</h3>
              <p className="text-sm leading-6 text-gray-300">Pubblicare una richiesta costa 5 crediti. Descrivi luogo, obiettivo, urgenza, materiale richiesto e dettagli pratici.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-green-400">4. Scegli il pilota</h3>
              <p className="text-sm leading-6 text-gray-300">I piloti interessati possono candidarsi. Rispondere o candidarsi a un annuncio costa 5 crediti per il pilota.</p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché il drone può essere utile in questo caso
          </h2>
          <p className="mb-5 leading-8 text-gray-300">
            Il materiale finale può essere diverso in base all obiettivo. Per verifica illuminazione piazzali per archiviazione stato luoghi il cliente può chiedere foto ad alta risoluzione, video breve, immagini selezionate, cartelle ordinate per lato o zona, riprese verticali per social, video orizzontale per presentazioni, panoramiche di contesto o dettagli dei punti critici. Specificarlo prima aiuta a evitare malintesi.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Quando il lavoro riguarda torri faro, pali, aree in ombra, parcheggi, accessi, zone di carico e percorsi, è utile indicare se esistono già fotografie da terra, segnalazioni, punti sospetti o aree da non riprendere. Anche informazioni semplici come lato strada, lato cortile, ingresso principale, zona nord, area parcheggio o tetto sopra il vano scale possono rendere la richiesta molto più precisa.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Il costo del servizio non è uguale per tutti i casi. Dipende da città, distanza, durata, complessità, numero di punti da documentare, urgenza, tipo di consegna, eventuale montaggio video e condizioni operative. Un controllo rapido di un punto accessibile non richiede lo stesso impegno di una documentazione completa di una grande area o di una struttura complessa.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Per questo DroneGuard non deve essere usato come un listino fisso, ma come una piattaforma di incontro. Il cliente spiega cosa vuole ottenere, il pilota valuta se può farlo e le parti definiscono prezzo, tempi e modalità. La trasparenza iniziale è la cosa che rende più semplice arrivare a un accordo.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Una buona descrizione per verifica illuminazione piazzali per archiviazione stato luoghi dovrebbe rispondere a cinque domande: dove si trova il lavoro, cosa deve essere ripreso, perché servono le immagini, che tipo di materiale si vuole ricevere e quando deve essere svolto il servizio. Anche poche righe possono bastare se sono precise e concrete.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Se il cliente vuole usare le immagini per un preventivo, dovrebbe dirlo subito. Se invece servono per una riunione, una pratica assicurativa, una presentazione commerciale, un archivio interno o un confronto con un tecnico, anche questa informazione cambia il modo in cui il pilota può organizzare il servizio. L uso finale del materiale orienta tutta la ripresa.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Per aziende, gestori aree e manutentori impianti, il drone può diventare uno strumento di comunicazione semplice. Invece di descrivere a parole un problema, si possono mostrare immagini. Invece di spiegare la posizione di un punto, si può far vedere il contesto. Invece di inviare fotografie sparse, si può consegnare una raccolta ordinata e comprensibile.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            La ripresa aerea è utile anche quando bisogna documentare prima e dopo. Per verifica illuminazione piazzali, una prima uscita può fissare lo stato iniziale e una seconda uscita può mostrare l evoluzione, la riparazione, la pulizia, l avanzamento o il cambiamento. Questo confronto visivo può essere molto utile in edilizia, industria, agricoltura, immobiliare e gestione del territorio.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Un errore frequente è chiedere troppe cose senza stabilire priorità. Se il cliente indica tutto come urgente, il pilota non sa cosa privilegiare. Meglio distinguere punti indispensabili, punti utili e materiale facoltativo. Per verifica illuminazione piazzali per archiviazione stato luoghi, ad esempio, si possono chiedere prima panoramiche dell area e poi dettagli solo dei punti principali.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            La qualità del risultato dipende anche dalla preparazione. Prima del volo è utile sapere se ci sono persone, mezzi in movimento, cavi, alberi, edifici vicini, aree sensibili, limitazioni interne, animali, accessi chiusi o orari da rispettare. Queste informazioni non appesantiscono la richiesta: la rendono più professionale.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">Per clienti, aziende e tecnici</h2>
            <p className="mb-5 leading-8 text-gray-300">
              Prima di pubblicare la richiesta prepara una descrizione semplice ma completa. Indica il tipo di area, la città, i punti principali, il motivo della richiesta e come vuoi ricevere il materiale.
            </p>
            <p className="leading-8 text-gray-300">
              Per verifica illuminazione piazzali per archiviazione stato luoghi, specifica se ti servono panoramiche, dettagli, video, immagini per preventivi, materiale per riunioni o documentazione da archiviare.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">Per piloti drone professionali</h2>
            <p className="mb-5 leading-8 text-gray-300">
              Una candidatura efficace deve spiegare zona di attività, disponibilità, esperienza, tipo di consegna e informazioni necessarie per valutare il volo.
            </p>
            <p className="leading-8 text-gray-300">
              Valuta sempre sicurezza, meteo, ostacoli, persone presenti, privacy, autorizzazioni, spazio disponibile e regole applicabili prima di confermare il servizio.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta efficace
          </h2>
          <p className="mb-5 leading-8 text-gray-300">
            Il drone è uno strumento di documentazione visiva e non sostituisce una perizia tecnica, una certificazione, una diagnosi strutturale, un collaudo o una valutazione che deve essere svolta da un professionista qualificato. La sua utilità sta nel fornire immagini chiare, ordinate e facili da condividere, così che tecnici, imprese, amministratori, proprietari o responsabili possano parlare su una base più concreta.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Ogni volo deve essere valutato dal pilota in base a sicurezza, meteo, ostacoli, persone presenti, privacy, spazio disponibile, autorizzazioni e regole applicabili. Per questo una richiesta seria non promette risultati impossibili, ma descrive bene il contesto e lascia al professionista il compito di verificare fattibilità, limiti operativi e modalità di lavoro.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard aiuta a trasformare una necessità generica in una richiesta chiara. Il cliente pubblica il lavoro, il pilota valuta se candidarsi e le parti possono accordarsi su prezzo, tempi, consegna e limiti del servizio. La piattaforma non impone un prezzo unico: favorisce il contatto mirato tra domanda e offerta.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Esempio di richiesta: Cerco un pilota drone per verifica illuminazione piazzali per archiviazione stato luoghi. Mi servono immagini chiare di torri faro, pali, aree in ombra, parcheggi, accessi, zone di carico e percorsi. Il materiale verrà usato quando il cliente vuole conservare una traccia visiva dello stato attuale. Vorrei foto panoramiche, alcuni dettagli dei punti più importanti e, se possibile, un breve video dall alto per spiegare meglio il contesto. Posso indicare un referente sul posto e fornire eventuali foto da terra già disponibili.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Questo esempio funziona perché non è vago. Spiega il servizio, indica i punti da documentare, chiarisce l uso finale del materiale e lascia al pilota lo spazio per valutare fattibilità, tempi, sicurezza e consegna. Una richiesta scritta così riceve più facilmente risposte utili rispetto a un messaggio generico.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Per industria e logistica, le pagine SEO devono essere complete ma anche leggibili. Non basta creare testi lunghi: ogni sezione deve aiutare davvero chi arriva da Google. Chi cerca verifica illuminazione piazzali per archiviazione stato luoghi probabilmente vuole capire se il drone è adatto al suo caso, quanto può essere utile, cosa deve chiedere e come trovare un operatore disponibile. Questa pagina risponde a queste domande in modo diretto.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            La forza di DroneGuard è la semplicità del flusso: il cliente pubblica una richiesta, i piloti interessati si candidano, poi il cliente valuta. Questo sistema può funzionare bene per verifica illuminazione piazzali perché il servizio con drone spesso è molto locale, molto pratico e dipende da disponibilità, zona, condizioni e tipo di consegna.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Per ottenere risultati migliori, il cliente dovrebbe evitare promesse o richieste irrealistiche. Non bisogna chiedere al drone di sostituire un tecnico, entrare in aree non consentite o volare in condizioni non sicure. Bisogna invece chiedere una documentazione visiva utile, rispettando le valutazioni del pilota e le regole operative.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Un pilota che risponde a un annuncio per verifica illuminazione piazzali per archiviazione stato luoghi dovrebbe evitare messaggi troppo brevi. Conviene spiegare quali dati servono per confermare il lavoro, che tipo di materiale può consegnare, se ha esperienza nel settore industria e logistica e quali aspetti devono essere controllati prima di definire prezzo e data.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Il cliente può anche chiedere al pilota di consegnare il materiale in modo ordinato: cartella foto panoramiche, cartella dettagli, eventuale video, breve descrizione dei punti ripresi e nomi file comprensibili. Non sempre serve un report tecnico, ma una consegna ordinata può fare molta differenza.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Nel tempo, pagine come questa aiutano DroneGuard a intercettare ricerche specifiche. Chi cerca un uso particolare del drone non sempre digita la parola generica servizi drone. Spesso cerca il problema reale: un tetto da vedere, un piazzale da documentare, una struttura da presentare, un campo da controllare o un impianto da mostrare. Per questo ogni pagina deve essere specifica.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Per verifica illuminazione piazzali per archiviazione stato luoghi, la scelta del pilota non dovrebbe basarsi solo sul prezzo. Conta la chiarezza della risposta, la disponibilità, la comprensione del contesto, il tipo di consegna, la capacità di spiegare limiti e condizioni e la serietà nel valutare sicurezza e fattibilità. Un buon lavoro parte da una buona comunicazione.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">Esempio di richiesta</h2>
          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per verifica illuminazione piazzali per archiviazione stato luoghi. Mi servono immagini di torri faro, pali, aree in ombra, parcheggi, accessi, zone di carico e percorsi. Vorrei foto panoramiche, dettagli dei punti principali e un video breve dall alto. Il materiale servirà per quando il cliente vuole conservare una traccia visiva dello stato attuale.”
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Costi, consegna e materiale finale
          </h2>
          <p className="mb-5 leading-8 text-gray-300">
            La richiesta può essere pubblicata anche quando il cliente non sa ancora esattamente quale servizio acquistare. Basta spiegare il problema: ho bisogno di vedere questo punto, devo mostrare quest area, devo raccogliere immagini per parlare con un tecnico. Il pilota potrà proporre la soluzione più adatta tra foto, video, panoramiche o dettagli.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            In conclusione, l uso del drone per verifica illuminazione piazzali per archiviazione stato luoghi è utile quando serve vedere meglio, documentare in modo ordinato e comunicare con più chiarezza. DroneGuard rende più semplice trovare piloti drone disponibili e trasformare una necessità pratica in una richiesta comprensibile, completa e orientata al risultato.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Approfondimento 1: per verifica illuminazione piazzali per archiviazione stato luoghi, conviene pensare al servizio come a una raccolta di informazioni visive e non come a una semplice ripresa. Prima si definisce l obiettivo, poi si scelgono angolazioni, distanza, punti prioritari e tipo di consegna. Questa impostazione aiuta il cliente a ricevere materiale più utile e aiuta il pilota a lavorare con maggiore precisione, soprattutto quando il contesto riguarda torri faro, pali, aree in ombra, parcheggi, accessi, zone di carico e percorsi.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Approfondimento 2: per verifica illuminazione piazzali per archiviazione stato luoghi, conviene pensare al servizio come a una raccolta di informazioni visive e non come a una semplice ripresa. Prima si definisce l obiettivo, poi si scelgono angolazioni, distanza, punti prioritari e tipo di consegna. Questa impostazione aiuta il cliente a ricevere materiale più utile e aiuta il pilota a lavorare con maggiore precisione, soprattutto quando il contesto riguarda torri faro, pali, aree in ombra, parcheggi, accessi, zone di carico e percorsi.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Approfondimento 3: per verifica illuminazione piazzali per archiviazione stato luoghi, conviene pensare al servizio come a una raccolta di informazioni visive e non come a una semplice ripresa. Prima si definisce l obiettivo, poi si scelgono angolazioni, distanza, punti prioritari e tipo di consegna. Questa impostazione aiuta il cliente a ricevere materiale più utile e aiuta il pilota a lavorare con maggiore precisione, soprattutto quando il contesto riguarda torri faro, pali, aree in ombra, parcheggi, accessi, zone di carico e percorsi.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Approfondimento 4: per verifica illuminazione piazzali per archiviazione stato luoghi, conviene pensare al servizio come a una raccolta di informazioni visive e non come a una semplice ripresa. Prima si definisce l obiettivo, poi si scelgono angolazioni, distanza, punti prioritari e tipo di consegna. Questa impostazione aiuta il cliente a ricevere materiale più utile e aiuta il pilota a lavorare con maggiore precisione, soprattutto quando il contesto riguarda torri faro, pali, aree in ombra, parcheggi, accessi, zone di carico e percorsi.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Approfondimento 5: per verifica illuminazione piazzali per archiviazione stato luoghi, conviene pensare al servizio come a una raccolta di informazioni visive e non come a una semplice ripresa. Prima si definisce l obiettivo, poi si scelgono angolazioni, distanza, punti prioritari e tipo di consegna. Questa impostazione aiuta il cliente a ricevere materiale più utile e aiuta il pilota a lavorare con maggiore precisione, soprattutto quando il contesto riguarda torri faro, pali, aree in ombra, parcheggi, accessi, zone di carico e percorsi.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Approfondimento 6: per verifica illuminazione piazzali per archiviazione stato luoghi, conviene pensare al servizio come a una raccolta di informazioni visive e non come a una semplice ripresa. Prima si definisce l obiettivo, poi si scelgono angolazioni, distanza, punti prioritari e tipo di consegna. Questa impostazione aiuta il cliente a ricevere materiale più utile e aiuta il pilota a lavorare con maggiore precisione, soprattutto quando il contesto riguarda torri faro, pali, aree in ombra, parcheggi, accessi, zone di carico e percorsi.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Approfondimento 7: per verifica illuminazione piazzali per archiviazione stato luoghi, conviene pensare al servizio come a una raccolta di informazioni visive e non come a una semplice ripresa. Prima si definisce l obiettivo, poi si scelgono angolazioni, distanza, punti prioritari e tipo di consegna. Questa impostazione aiuta il cliente a ricevere materiale più utile e aiuta il pilota a lavorare con maggiore precisione, soprattutto quando il contesto riguarda torri faro, pali, aree in ombra, parcheggi, accessi, zone di carico e percorsi.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Approfondimento 8: per verifica illuminazione piazzali per archiviazione stato luoghi, conviene pensare al servizio come a una raccolta di informazioni visive e non come a una semplice ripresa. Prima si definisce l obiettivo, poi si scelgono angolazioni, distanza, punti prioritari e tipo di consegna. Questa impostazione aiuta il cliente a ricevere materiale più utile e aiuta il pilota a lavorare con maggiore precisione, soprattutto quando il contesto riguarda torri faro, pali, aree in ombra, parcheggi, accessi, zone di carico e percorsi.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">Domande frequenti</h2>
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Posso usare DroneGuard per verifica illuminazione piazzali per archiviazione stato luoghi?</h3>
              <p className="text-gray-300">Sì. Puoi pubblicare una richiesta specificando zona, obiettivo, materiale desiderato e punti da documentare. I piloti interessati possono candidarsi e proporti una soluzione.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Il drone sostituisce un tecnico?</h3>
              <p className="text-gray-300">No. Il drone fornisce documentazione visiva, ma perizie, diagnosi, certificazioni, verifiche strutturali e decisioni operative spettano a professionisti qualificati.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Che materiale posso chiedere?</h3>
              <p className="text-gray-300">Puoi chiedere foto panoramiche, dettagli ravvicinati, video dall alto, immagini ordinate per zona e materiale utile da condividere con tecnici, imprese, clienti o amministratori.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Quanto costa pubblicare un lavoro?</h3>
              <p className="text-gray-300">Pubblicare una richiesta costa 5 crediti. I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione su DroneGuard.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">I piloti pagano per candidarsi?</h3>
              <p className="text-gray-300">Sì. Rispondere o candidarsi a un annuncio costa 5 crediti. I nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Il volo è sempre possibile?</h3>
              <p className="text-gray-300">No. Il pilota deve valutare sicurezza, meteo, ostacoli, persone presenti, privacy, spazio disponibile e regole applicabili prima di confermare il servizio.</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">Trova un pilota drone per verifica illuminazione piazzali per archiviazione stato luoghi</h2>
          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta chiara e ricevi candidature da piloti drone interessati. Una richiesta precisa aumenta le possibilità di ricevere risposte utili e confrontabili.
          </p>
          <Link href="/register">
            <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
              Pubblica la tua richiesta
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
