import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per manutenzione pluviali | DroneGuard",
  description:
    "Drone per manutenzione pluviali: trova piloti drone per foto, video e documentazione visiva di manutenzione pluviali, edilizia, manutenzione, coperture, facciate, condomini e interventi tecnici."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Edilizia e manutenzione con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per manutenzione pluviali: controlla discendenti, raccordi e scarichi dall’esterno
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi documentare pluviali, discendenti, raccordi, staffe, scarichi e punti di rottura visibili lungo le facciate e le coperture? Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone disponibili per realizzare foto, video e documentazione visiva dall'alto. Una ripresa aerea può essere molto utile quando il punto da osservare è in quota, quando il cliente non riesce a spiegare bene il problema con semplici foto da terra o quando un tecnico ha bisogno di una prima panoramica prima di organizzare un sopralluogo più preciso. La piattaforma aiuta condomini, amministratori, lattonieri, imprese di manutenzione e proprietari a trasformare una necessità generica in una richiesta chiara, con informazioni utili su luogo, obiettivo, materiale richiesto, urgenza e condizioni operative.
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
              Controllo visivo
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di pluviali, discendenti, staffe, curve, raccordi, scarichi, gronde, bocchettoni e zone con perdite visibili. Il drone permette di vedere la scena da una prospettiva più ampia e di raccogliere materiale utile per capire quali punti meritano maggiore attenzione.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Prima del preventivo
            </h2>
            <p className="leading-7 text-gray-300">
              Foto e video possono essere condivisi con imprese, tecnici, amministratori, proprietari o fornitori prima di chiedere un preventivo, fissare un sopralluogo o valutare un intervento.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Contatto mirato
            </h2>
            <p className="leading-7 text-gray-300">
              DroneGuard mette in contatto clienti e piloti drone. Il cliente pubblica il lavoro, i piloti interessati si candidano e il committente sceglie il professionista più adatto.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere manutenzione pluviali con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In edilizia e manutenzione capita spesso di dover osservare punti difficili da raggiungere: coperture, facciate, gronde, terrazzi, cortili interni, frontalini, parapetti, lucernari, canne fumarie, tettoie, cornicioni e zone alte dell'edificio. Da terra si può intuire il problema, ma non sempre si riesce a capire bene dove si trova, quanto è esteso e quali parti devono essere mostrate a un tecnico. Un servizio drone può aiutare proprio in questa fase iniziale, creando una documentazione visiva più chiara e ordinata.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Per manutenzione pluviali, il drone può essere richiesto prima di una manutenzione programmata, dopo un evento di maltempo, durante una ristrutturazione, prima di chiedere un preventivo, per controllare un punto segnalato da un condomino o per mostrare a distanza lo stato di una parte dell'edificio. Le immagini possono essere utili a proprietari, amministratori, tecnici, imprese, manutentori, assicurazioni e responsabili di immobili che devono decidere come procedere.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone non sostituisce una perizia tecnica, un collaudo, una verifica strutturale o l'intervento di un professionista qualificato. Può però ridurre l'incertezza iniziale, perché permette di vedere meglio la zona interessata e di preparare un confronto più concreto con chi dovrà valutare o realizzare l'intervento. Per questo è importante descrivere bene la richiesta e far capire al pilota quale materiale serve davvero.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far documentare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ pluviali, discendenti, staffe, curve, raccordi, scarichi, gronde, bocchettoni e zone con perdite visibili</li>
              <li>✅ stato generale dell'edificio o della parte da controllare</li>
              <li>✅ punti difficili da vedere da terra o da finestre vicine</li>
              <li>✅ danni visibili dopo vento, pioggia intensa o grandine</li>
              <li>✅ zone da mostrare a tecnici, imprese o amministratori</li>
              <li>✅ immagini per preventivi, riunioni condominiali o archivi lavori</li>
              <li>✅ foto panoramiche, dettagli ravvicinati e video brevi dall'alto</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché il drone è utile per edilizia e manutenzione
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Molti problemi edilizi non sono immediatamente visibili dal basso. Una tegola spostata, un canale di gronda ostruito, una scossalina sollevata, una guaina deteriorata, un frontalino rovinato o una crepa in quota possono essere notati solo da angolazioni particolari. Il drone consente di raccogliere immagini dall'alto e da lati diversi, senza dover montare subito ponteggi, piattaforme o scale solo per capire cosa guardare. Naturalmente ogni volo deve essere valutato dal pilota in base a sicurezza, regole, condizioni meteo, ostacoli e presenza di persone.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nel caso di manutenzione pluviali, la documentazione visiva può servire in diverse fasi: prima di un sopralluogo, durante una manutenzione, dopo un danno, a fine lavori o nel confronto tra più preventivi. Una serie di immagini ordinate permette di comunicare meglio con chi non era presente sul posto. Un amministratore può mostrare la situazione ai condomini, un proprietario può inviare il materiale a un'impresa, un tecnico può capire quali punti approfondire e un'impresa può preparare domande più precise prima di uscire.
          </p>

          <p className="leading-8 text-gray-300">
            La forza del drone non è solo la ripresa spettacolare, ma la chiarezza. In un lavoro edile serve capire dove si trova il problema, quanto è grande l'area, quali ostacoli ci sono, come si accede e quale parte deve essere controllata. Per questo una pagina dedicata a manutenzione pluviali deve spiegare bene cosa può chiedere il cliente e come può presentare la richiesta su DroneGuard.
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
                Crea un account come cliente, amministratore, proprietario, tecnico, impresa o pilota drone e accedi alla piattaforma.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Usa i crediti
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I clienti ricevono 10 crediti gratuiti e i piloti ricevono 50 crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Pubblica il lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Pubblicare una richiesta costa 5 crediti. Descrivi luogo, edificio, problema, urgenza e materiale desiderato.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi. Rispondere a un annuncio costa 5 crediti per il pilota.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Per clienti, condomini e proprietari
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di pubblicare la richiesta, prepara una descrizione semplice ma completa. Indica il tipo di immobile, la città, il punto da controllare, il motivo del controllo e il materiale che ti serve. Non devi usare parole tecniche perfette: è più importante spiegare il problema reale. Puoi scrivere, ad esempio, che vuoi capire lo stato del tetto, documentare una facciata, controllare una grondaia, mostrare un danno all'impresa o raccogliere foto prima di una riunione condominiale.
            </p>

            <p className="leading-8 text-gray-300">
              Per manutenzione pluviali, specifica se vuoi immagini panoramiche, dettagli ravvicinati, video dall'alto o una raccolta ordinata per lato dell'edificio. Se il materiale deve essere inviato a un tecnico, a un amministratore o a un'assicurazione, scrivilo nella richiesta. Questo aiuta il pilota a capire quanto deve essere precisa la documentazione e quali punti non devono mancare.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Per piloti drone e operatori professionali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Una candidatura efficace deve essere concreta. Spiega in quale zona operi, che tipo di esperienza hai con edilizia e manutenzione, quale materiale puoi consegnare e quali aspetti devono essere verificati prima del volo. Nei lavori legati a edifici e coperture, il cliente apprezza risposte chiare su sicurezza, fattibilità, tempi, consegna e limiti operativi.
            </p>

            <p className="leading-8 text-gray-300">
              Valuta sempre condizioni meteo, spazio disponibile, ostacoli, persone presenti, privacy, aree vicine, regolamenti applicabili e possibili interferenze con il contesto urbano. Se il servizio richiede riprese ravvicinate di parti alte, chiarisci sempre cosa è possibile fare e cosa deve essere verificato sul posto prima di confermare il risultato finale.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta efficace per manutenzione pluviali
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Una richiesta troppo breve rischia di ricevere candidature poco precise. Scrivere soltanto "mi serve un drone" non basta, perché il pilota deve capire dove dovrà lavorare, cosa dovrà riprendere, quale materiale dovrà consegnare e quali problemi potrebbero rendere il volo più complesso. Una buona richiesta parte dal contesto: condominio, casa privata, capannone, palazzina, edificio in ristrutturazione, terrazzo, tetto, facciata, cortile o altra area interessata.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nel caso di manutenzione pluviali, indica se il punto principale riguarda pluviali, discendenti, staffe, curve, raccordi, scarichi, gronde, bocchettoni e zone con perdite visibili. Aggiungi anche se ci sono danni già visibili, infiltrazioni, ristagni, macchie, parti sollevate, materiali caduti, zone irraggiungibili, richieste dell'amministratore o necessità di presentare le immagini a un'impresa. Più la richiesta è precisa, più il pilota potrà rispondere in modo utile.
          </p>

          <p className="leading-8 text-gray-300">
            Non dimenticare la parte pratica: indirizzo o zona, disponibilità oraria, referente sul posto, eventuali limiti di accesso, presenza di cortili interni, vicinanza ad altri edifici, spazi dove il pilota può operare e urgenza del lavoro. Anche una pagina SEO deve portare a una richiesta reale e chiara, perché DroneGuard funziona meglio quando il cliente descrive bene il servizio e il pilota può valutare correttamente la candidatura.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per manutenzione pluviali
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per controllare i pluviali di un edificio. Vorrei foto dei discendenti, delle staffe, delle curve e dei punti in cui si vedono perdite o rotture. Il materiale servirà per parlare con un tecnico, confrontare eventuali preventivi e capire meglio quali parti devono essere controllate prima di organizzare un intervento.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta di questo tipo funziona perché non resta vaga: indica il contesto, spiega cosa deve essere ripreso e chiarisce l'uso finale del materiale. Il pilota può valutare meglio distanza, durata, complessità, rischi operativi, consegna richiesta e condizioni necessarie per svolgere il lavoro in modo ordinato.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Che materiale puoi chiedere al pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per un lavoro edile o di manutenzione puoi chiedere diversi tipi di materiale. Le foto panoramiche servono a capire l'insieme dell'edificio o dell'area; le immagini ravvicinate servono a mostrare punti specifici come gronde, lucernari, tegole, parapetti, facciate o danni visibili; i video dall'alto aiutano a spiegare la posizione dei problemi e a far vedere i collegamenti tra più zone. Puoi anche chiedere che le immagini siano ordinate per lato, per piano, per area o per punto critico.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nel caso di manutenzione pluviali, spesso è utile chiedere sia una panoramica generale sia dettagli dei punti principali. Una sola foto ravvicinata può mostrare il danno, ma non sempre fa capire dove si trova. Una sola panoramica può mostrare l'area, ma non sempre evidenzia il problema. La combinazione dei due materiali rende la documentazione più comprensibile per chi dovrà valutarla.
          </p>

          <p className="leading-8 text-gray-300">
            Se vuoi usare le immagini per un preventivo, dillo subito. Se invece ti servono per una riunione condominiale, per una pratica assicurativa, per un confronto con un tecnico o per un archivio interno, anche questa informazione è utile. Il pilota potrà impostare il lavoro in modo più coerente con l'obiettivo finale.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Dopo maltempo, vento o pioggia intensa
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo eventi atmosferici forti può essere difficile capire subito se una copertura o una parte esterna ha subito danni. Da terra si possono notare macchie, gocciolamenti, pezzi spostati o rumori anomali, ma non sempre si vede la causa. Il drone può aiutare a documentare le zone esposte e a raccogliere immagini da condividere con chi dovrà fare una valutazione tecnica.
            </p>

            <p className="leading-8 text-gray-300">
              Per manutenzione pluviali, questo può significare controllare parti sollevate, elementi piegati, zone con ristagni, gronde o pluviali danneggiati, superfici rovinate o punti che richiedono una verifica più approfondita. Le immagini non danno una diagnosi tecnica, ma aiutano a capire dove concentrare l'attenzione.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Prima di lavori, riparazioni o preventivi
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di chiamare un'impresa può essere utile avere foto chiare. Un tecnico o un manutentore potrà osservare le immagini e capire se servono ulteriori controlli, se l'intervento sembra semplice o complesso e quali informazioni mancano. Questo non elimina il sopralluogo, ma può renderlo più mirato.
            </p>

            <p className="leading-8 text-gray-300">
              Una documentazione ordinata può anche aiutare il cliente a confrontare più preventivi. Quando tutti vedono gli stessi punti, la conversazione diventa più concreta e si riducono fraintendimenti su posizione, dimensione e urgenza del problema.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per manutenzione pluviali?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base a città, distanza del pilota, dimensione dell'edificio, durata del lavoro, complessità del volo, numero di punti da documentare, tipo di consegna richiesta e urgenza. Un controllo rapido di una piccola copertura non ha lo stesso impegno di una documentazione completa di un condominio, di un tetto complesso o di un edificio con più facciate e cortili interni.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il materiale finale incide sul preventivo. Alcuni clienti chiedono solo foto e video grezzi, altri vogliono immagini selezionate, cartelle ordinate, video montato, riprese ripetute nel tempo o dettagli di singole parti. Prima di scegliere il pilota, conviene spiegare bene cosa ti aspetti e chiedere come verrà consegnato il materiale.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico per il servizio. La piattaforma serve a pubblicare la richiesta e ricevere candidature da piloti interessati. Cliente e professionista possono poi accordarsi direttamente su prezzo, tempi, modalità, consegna e limiti del lavoro.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Sicurezza, privacy e fattibilità del volo
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Ogni richiesta deve essere valutata dal pilota. Non basta voler riprendere un edificio: bisogna considerare l'area di volo, la presenza di persone, la vicinanza ad altri immobili, eventuali ostacoli, alberi, cavi, antenne, spazi di decollo, condizioni meteo e regole applicabili. In contesti condominiali o urbani è importante rispettare privacy, sicurezza e limiti operativi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per manutenzione pluviali, il cliente può aiutare molto fornendo informazioni chiare: se l'edificio è in una strada stretta, se c'è un cortile interno, se ci sono balconi abitati, se sono presenti persone, se l'accesso è consentito solo in certi orari o se esistono aree da evitare. Il pilota potrà valutare se il lavoro è fattibile e con quali modalità.
          </p>

          <p className="leading-8 text-gray-300">
            La sicurezza viene prima del risultato. Un pilota serio non promette riprese impossibili prima di aver valutato il contesto. DroneGuard serve a creare il contatto, ma la decisione finale sulla fattibilità del volo spetta al professionista che eseguirà il servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come confrontare le candidature dei piloti
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Quando ricevi più candidature, non guardare solo il prezzo. Valuta anche la chiarezza della risposta, la disponibilità, il tipo di materiale promesso, l'esperienza in lavori simili e la capacità del pilota di fare domande corrette. Per un servizio legato a edilizia e manutenzione, una risposta professionale dovrebbe parlare di sicurezza, condizioni meteo, area di volo, consegna del materiale e limiti del servizio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Se il pilota ti chiede dettagli aggiuntivi, non è un problema: spesso è un segnale positivo. Significa che sta valutando il lavoro con attenzione. Per manutenzione pluviali, può essere necessario chiarire altezza, lati da riprendere, presenza di ostacoli, orari migliori, zone accessibili e tipo di immagini desiderate.
          </p>

          <p className="leading-8 text-gray-300">
            Una volta scelto il pilota, concorda bene cosa riceverai: numero indicativo di foto, presenza di video, eventuale montaggio, tempi di consegna, formato dei file e modalità di invio. Questo evita incomprensioni e rende il servizio più utile per tutti.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Prima fase
            </h2>
            <p className="leading-7 text-gray-300">
              Pubblica una richiesta con il problema principale, la posizione dell'immobile, il tipo di edificio e il motivo per cui ti servono immagini dall'alto.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Valutazione
            </h2>
            <p className="leading-7 text-gray-300">
              I piloti interessati possono leggere l'annuncio, valutare la fattibilità e candidarsi spiegando disponibilità, materiale e condizioni del servizio.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Consegna
            </h2>
            <p className="leading-7 text-gray-300">
              Dopo il lavoro, le immagini possono essere usate per parlare con tecnici, imprese, amministratori, assicurazioni o proprietari interessati.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare DroneGuard per manutenzione pluviali?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta e cercare piloti drone disponibili per foto, video e documentazione visiva collegata a manutenzione pluviali, edilizia, manutenzione, coperture, facciate, condomini e interventi tecnici.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce un tecnico?
              </h3>
              <p className="text-gray-300">
                No. Il drone può fornire immagini utili, ma verifiche strutturali, perizie, certificazioni, collaudi e decisioni operative devono essere svolti da professionisti qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Che materiale posso chiedere?
              </h3>
              <p className="text-gray-300">
                Puoi chiedere foto panoramiche, video dall'alto, dettagli ravvicinati, immagini dei punti critici e materiale ordinato per lato, area o intervento da valutare.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare un lavoro?
              </h3>
              <p className="text-gray-300">
                Pubblicare una richiesta costa 5 crediti. I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione su DroneGuard.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                I piloti pagano per candidarsi?
              </h3>
              <p className="text-gray-300">
                Sì, rispondere o candidarsi a un annuncio costa 5 crediti. I nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il volo è sempre possibile?
              </h3>
              <p className="text-gray-300">
                No. Il pilota deve valutare sicurezza, meteo, ostacoli, persone presenti, privacy, area di volo e regole applicabili prima di confermare il servizio.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare le immagini per chiedere un preventivo?
              </h3>
              <p className="text-gray-300">
                Sì, le immagini possono aiutare a spiegare meglio la situazione a imprese e tecnici. Il preventivo finale dipenderà comunque dalla valutazione del professionista incaricato.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente il lavoro?
              </h3>
              <p className="text-gray-300">
                No. DroneGuard mette in contatto clienti e piloti drone. Il servizio viene svolto dal professionista scelto dal cliente.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per manutenzione pluviali
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone disponibili per manutenzione pluviali, edilizia, manutenzione, controlli visivi, foto dall'alto, video, documentazione di coperture, facciate, condomini, terrazzi, gronde, pluviali, danni e punti difficili da osservare da terra. La piattaforma ti aiuta a trasformare un'esigenza generica in una richiesta chiara e più facile da valutare.
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