import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Scuola universita o edificio pubblico per preventivo mirato | DroneGuard",
  description:
    "Scuola universita o edificio pubblico per preventivo mirato: trova piloti drone per foto, video e documentazione visiva di scuola universita o edificio pubblico. Pubblica una richiesta su DroneGuard e ricevi candidature da operatori interessati."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Rilievi operativi con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Scuola universita o edificio pubblico per preventivo mirato: foto, video e documentazione visiva con DroneGuard
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai bisogno di ottenere una visione dall alto utile per leggere spazi, accessi, aree operative e rapporto tra più elementi? Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone disponibili per realizzare foto, video e documentazione visiva dall alto. Questa pagina è dedicata a scuola universita o edificio pubblico per preventivo mirato, una ricerca specifica che può interessare enti, scuole, università, uffici tecnici e manutentori quando serve capire meglio una situazione prima di decidere un intervento, un preventivo, una verifica o una presentazione. Il drone può aiutare a rendere più chiaro ciò che da terra resta parziale: proporzioni, accessi, ostacoli, punti critici, collegamenti tra aree e stato generale del contesto.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Richiedi un rilievo drone
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Controllo visivo</h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di coperture, cortili, accessi, facciate, parcheggi, tettoie, recinzioni e aree esterne. Una panoramica dall alto aiuta a vedere insieme parti che da terra risultano separate, nascoste o difficili da confrontare.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Materiale utile</h2>
            <p className="leading-7 text-gray-300">
              Puoi chiedere immagini generali, particolari dei punti critici, video descrittivi e materiale selezionato. Il materiale può essere usato per confronti, riunioni, manutenzioni, presentazioni o richieste di preventivo.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Contatto mirato</h2>
            <p className="leading-7 text-gray-300">
              DroneGuard mette in contatto chi cerca un servizio con piloti drone interessati. Il cliente pubblica il lavoro e può valutare le candidature ricevute.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Quando richiedere scuola universita o edificio pubblico per preventivo mirato con drone</h2>
            <p className="mb-5 leading-8 text-gray-300">
              Una richiesta di questo tipo nasce quando serve una visione più chiara del contesto. Per scuola universita o edificio pubblico, le immagini dall alto possono mostrare coperture, cortili, accessi, facciate, parcheggi, tettoie, recinzioni e aree esterne e aiutare a spiegare la situazione a persone che non sono presenti sul posto. In molti casi il cliente ha già notato un problema, ma non riesce a fotografarlo bene da terra o non sa quali informazioni inviare a un tecnico.
            </p>
            <p className="mb-5 leading-8 text-gray-300">
              Nel caso di scuola universita o edificio pubblico per preventivo mirato, il drone può essere utile prima di chiedere un preventivo o confrontare più imprese. Le immagini possono servire a preparare un sopralluogo, documentare una condizione visibile, confrontare preventivi, archiviare lo stato dei luoghi o presentare un area in modo più comprensibile. L obiettivo non è sostituire un controllo tecnico, ma creare una base visiva ordinata.
            </p>
            <p className="leading-8 text-gray-300">
              DroneGuard aiuta a far incontrare domanda e offerta. Il cliente descrive il lavoro, il pilota valuta la fattibilità e poi le parti possono accordarsi su prezzo, tempi, modalità operative, consegna e limiti del servizio.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">Cosa puoi far documentare</h3>
            <ul className="space-y-4 text-gray-300">
              <li>✅ coperture, cortili, accessi, facciate, parcheggi, tettoie, recinzioni e aree esterne</li>
              <li>✅ stato generale dell area, dell edificio o della parte interessata</li>
              <li>✅ punti difficili da vedere da terra, da finestre o da accessi ordinari</li>
              <li>✅ danni visibili, ostacoli, parti sollevate, ristagni o criticità esterne</li>
              <li>✅ materiale da condividere con tecnici, imprese, amministratori o clienti</li>
              <li>✅ foto panoramiche, dettagli ravvicinati e video brevi dall alto</li>
              <li>✅ immagini utili per preventivi, riunioni, archivi o presentazioni</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Perché il drone può essere utile in questo contesto</h2>
          <p className="mb-5 leading-8 text-gray-300">
            Molte situazioni sono difficili da descrivere con fotografie scattate da terra. Una singola immagine può mostrare un dettaglio, ma non sempre permette di capire dove si trova, quanto è esteso, come si collega al resto dell area e quali ostacoli ci sono. Il drone consente di alternare panoramiche e dettagli, offrendo una lettura più completa del contesto.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Per scuola universita o edificio pubblico per preventivo mirato, questa chiarezza può fare la differenza. Un amministratore può spiegare meglio una situazione ai condomini, un tecnico può preparare domande più precise, un impresa può capire se il lavoro merita un sopralluogo, un azienda può archiviare lo stato di un area e un proprietario può mostrare il problema a distanza senza affidarsi solo a descrizioni verbali.
          </p>
          <p className="leading-8 text-gray-300">
            La forza della documentazione con drone non è soltanto l effetto scenico. Il valore pratico nasce dalla possibilità di vedere insieme posizione, proporzioni, accessi, elementi vicini e punti critici. Questo rende la comunicazione più semplice e riduce il rischio di richieste confuse.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">Come funziona DroneGuard</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div><h3 className="mb-2 font-semibold text-green-400">1. Registrati</h3><p className="text-sm leading-6 text-gray-300">Crea un account come cliente, azienda, tecnico, proprietario, amministratore o pilota drone.</p></div>
            <div><h3 className="mb-2 font-semibold text-green-400">2. Usa i crediti</h3><p className="text-sm leading-6 text-gray-300">I clienti ricevono 10 crediti gratuiti e i piloti ricevono 50 crediti gratuiti dopo la registrazione.</p></div>
            <div><h3 className="mb-2 font-semibold text-green-400">3. Pubblica il lavoro</h3><p className="text-sm leading-6 text-gray-300">Pubblicare una richiesta costa 5 crediti. Descrivi luogo, obiettivo, urgenza e materiale richiesto.</p></div>
            <div><h3 className="mb-2 font-semibold text-green-400">4. Scegli il pilota</h3><p className="text-sm leading-6 text-gray-300">I piloti interessati possono candidarsi. Rispondere a un annuncio costa 5 crediti per il pilota.</p></div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">Per clienti, aziende e proprietari</h2>
            <p className="mb-5 leading-8 text-gray-300">
              Prima di pubblicare la richiesta, prepara una descrizione semplice ma completa. Indica punto da riprendere, eventuali limiti di accesso, urgenza, uso finale delle immagini e presenza di ostacoli. Non è necessario usare parole tecniche perfette, ma è importante spiegare il problema reale e il risultato che vuoi ottenere.
            </p>
            <p className="leading-8 text-gray-300">
              Per scuola universita o edificio pubblico per preventivo mirato, specifica se vuoi una panoramica generale, dettagli ravvicinati, video dall alto o una raccolta ordinata per lato, zona o punto critico. Questo aiuta il pilota a capire quanto deve essere precisa la documentazione e quali parti non devono mancare.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">Per piloti drone e operatori professionali</h2>
            <p className="mb-5 leading-8 text-gray-300">
              Una candidatura efficace deve essere concreta. Spiega in quale zona operi, che esperienza hai con strutture pubbliche, quale materiale puoi consegnare e quali aspetti devono essere verificati prima del volo. Il cliente apprezza risposte chiare su sicurezza, fattibilità, tempi e limiti operativi.
            </p>
            <p className="leading-8 text-gray-300">
              Valuta sempre condizioni meteo, ostacoli, persone presenti, privacy, spazi di decollo, area circostante e regole applicabili. Se servono riprese ravvicinate di parti alte o zone complesse, chiarisci cosa è possibile fare e cosa deve essere verificato sul posto.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Come scrivere una richiesta efficace</h2>
          <p className="mb-5 leading-8 text-gray-300">
            Una richiesta troppo breve rischia di ricevere risposte poco precise. Scrivere soltanto mi serve un drone non basta, perché il pilota deve capire dove dovrà lavorare, cosa dovrà riprendere, quale materiale dovrà consegnare e quali condizioni potrebbero rendere il volo più complesso.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Nel caso di scuola universita o edificio pubblico per preventivo mirato, indica se il punto principale riguarda coperture, cortili, accessi, facciate, parcheggi, tettoie, recinzioni e aree esterne. Aggiungi anche se ci sono danni già visibili, urgenze, accessi difficili, zone da evitare, necessità di presentare il materiale a un tecnico o bisogno di foto da usare per un preventivo.
          </p>
          <p className="leading-8 text-gray-300">
            Più la richiesta è precisa, più il pilota può rispondere in modo utile. La qualità della candidatura dipende anche dalla qualità delle informazioni iniziali: luogo, contesto, obiettivo, tempi e risultato desiderato.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">Esempio di richiesta per scuola universita o edificio pubblico per preventivo mirato</h2>
          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per scuola universita o edificio pubblico. Mi servono foto e video di coperture, cortili, accessi, facciate, parcheggi, tettoie, recinzioni e aree esterne. Il materiale servirà prima di chiedere un preventivo o confrontare più imprese, per parlare con tecnici o imprese e per capire meglio quali parti devono essere documentate prima di decidere il prossimo passaggio.”
            </p>
          </div>
          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta di questo tipo funziona perché indica il contesto, spiega cosa deve essere ripreso e chiarisce l uso finale del materiale. Il pilota può valutare meglio distanza, durata, complessità, consegna richiesta e condizioni operative.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Che materiale puoi chiedere al pilota drone</h2>
          <p className="mb-5 leading-8 text-gray-300">
            Per un servizio come scuola universita o edificio pubblico per preventivo mirato puoi chiedere diversi tipi di materiale: immagini generali, particolari dei punti critici, video descrittivi e materiale selezionato. Le foto panoramiche aiutano a capire l insieme, i dettagli mostrano i punti critici, i video spiegano i collegamenti tra le aree e una cartella ordinata rende tutto più facile da condividere.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Se il materiale deve essere inviato a un tecnico, a un amministratore, a un assicurazione o a un impresa, scrivilo nella richiesta. Il pilota potrà impostare il lavoro in modo più coerente con lo scopo finale, evitando immagini belle ma poco utili.
          </p>
          <p className="leading-8 text-gray-300">
            In alcuni casi può bastare una breve sessione fotografica. In altri può servire una documentazione più completa con viste da più lati, dettagli dei punti critici e video di contesto. Il prezzo e i tempi dipendono anche da questa scelta.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">Prima di lavori, controlli o decisioni</h2>
            <p className="mb-5 leading-8 text-gray-300">
              Prima di chiamare un impresa, fissare un sopralluogo o avviare una manutenzione, può essere utile avere immagini chiare. Un tecnico può osservare il materiale e capire se servono ulteriori verifiche, se l intervento appare semplice o complesso e quali informazioni mancano.
            </p>
            <p className="leading-8 text-gray-300">
              Per scuola universita o edificio pubblico per preventivo mirato, una documentazione ordinata può anche aiutare a confrontare più preventivi. Quando tutti vedono gli stessi punti, la conversazione diventa più concreta e si riducono fraintendimenti su posizione, dimensione e urgenza.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">Sicurezza, privacy e fattibilità</h2>
            <p className="mb-5 leading-8 text-gray-300">
              Ogni volo deve essere valutato dal pilota. Bisogna considerare meteo, ostacoli, persone presenti, privacy, spazi di decollo, vicinanza ad altri immobili, aree sensibili e regole applicabili. La sicurezza viene prima del risultato.
            </p>
            <p className="leading-8 text-gray-300">
              Il cliente può aiutare fornendo informazioni chiare su accessi, orari, referente sul posto, aree da evitare e contesto circostante. Un pilota serio non promette riprese impossibili senza prima valutare la situazione.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Quanto costa un servizio drone per scuola universita o edificio pubblico per preventivo mirato?</h2>
          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base a città, distanza del pilota, dimensione dell area, durata del lavoro, complessità del volo, numero di punti da documentare, tipo di consegna richiesta e urgenza. Un controllo rapido non ha lo stesso impegno di una documentazione completa con più lati, dettagli, video e consegna organizzata.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            Anche il materiale finale incide sul preventivo. Alcuni clienti chiedono solo foto e video grezzi, altri vogliono immagini selezionate, cartelle ordinate, video montato o riprese ripetute nel tempo. Prima di scegliere il pilota, conviene spiegare bene cosa ti aspetti.
          </p>
          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma serve a pubblicare la richiesta e ricevere candidature da piloti interessati. Cliente e professionista possono accordarsi direttamente su prezzo, tempi, modalità, consegna e limiti del lavoro.
          </p>
        </div>

        
        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Approfondimento operativo per scuola universita o edificio pubblico per preventivo mirato
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Una pagina SEO utile non deve limitarsi a ripetere una parola chiave. Deve spiegare il problema reale, il contesto in cui nasce la richiesta e il modo in cui DroneGuard può aiutare a trasformare una necessità generica in un incarico più chiaro. Nel caso di scuola universita o edificio pubblico per preventivo mirato, il cliente può avere bisogno di una prima visione per capire lo stato dei luoghi, preparare una chiamata con un tecnico, spiegare una situazione a un amministratore, chiedere un preventivo o archiviare immagini prima di un intervento. Il valore della ripresa con drone sta soprattutto nella possibilità di vedere insieme elementi che da terra sono separati, nascosti o difficili da confrontare.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per questo motivo è importante chiedere al pilota non solo una bella ripresa, ma un materiale coerente con l uso finale. Se le immagini servono a una riunione, conviene avere viste semplici e leggibili. Se devono essere inviate a un tecnico, conviene includere riferimenti spaziali, panoramiche e dettagli. Se il materiale serve a un preventivo, è utile mostrare accessi, ostacoli, dimensioni apparenti, punti critici e zone da raggiungere. Se invece il servizio è collegato alla promozione di una struttura, diventano più importanti composizione, luce, ordine delle riprese e capacità di raccontare l area in modo chiaro.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard non promette che ogni volo sia possibile in automatico. La fattibilità deve essere valutata dal pilota in base a meteo, sicurezza, ostacoli, presenza di persone, privacy, eventuali aree sensibili, spazi di decollo e regole applicabili. Una richiesta scritta bene permette però al pilota di capire subito se il lavoro è realistico, quali domande fare, quale attrezzatura potrebbe servire e come impostare una risposta professionale. Per il cliente significa ricevere candidature meno generiche e più utili.
          </p>

          <p className="leading-8 text-gray-300">
            In molti casi il materiale con drone diventa anche un archivio: una fotografia dello stato dei luoghi in un momento preciso. Questo può essere utile per confrontare un prima e dopo, ricordare la condizione iniziale, verificare l evoluzione di un intervento, documentare un danno visibile o mostrare a distanza una zona a persone che non possono essere presenti. La pagina quindi deve parlare al cliente finale, ma anche al pilota, perché entrambi devono capire cosa rende una richiesta concreta, sicura e realizzabile.
          </p>
        </div>
    
        
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-2xl font-bold">
            1. Pianificazione prima del servizio per scuola universita o edificio pubblico
          </h2>
          <p className="mb-5 leading-8 text-gray-300">
            Quando si parla di scuola universita o edificio pubblico per preventivo mirato, il primo errore è pensare che basti chiedere qualche foto dall alto. In realtà il risultato migliore nasce da una richiesta precisa: bisogna chiarire quali parti osservare, perché servono le immagini, chi le dovrà usare e che tipo di consegna è più adatta. Questo vale ancora di più quando il contesto riguarda strutture pubbliche, perché spesso ci sono dettagli tecnici, limiti di accesso, persone da coordinare e tempi da rispettare.
          </p>
          <p className="leading-8 text-gray-300">
            Il cliente dovrebbe indicare punto da riprendere, eventuali limiti di accesso, urgenza, uso finale delle immagini e presenza di ostacoli. Il pilota, invece, dovrebbe rispondere spiegando fattibilità, sicurezza, condizioni operative, tempi indicativi e materiale consegnabile. In questo modo DroneGuard non diventa solo una pagina da trovare su Google, ma un punto di partenza pratico per far incontrare una richiesta reale con un operatore che può valutarla in modo professionale.
          </p>
        </div>
        
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-2xl font-bold">
            2. Chiarezza del materiale richiesto per scuola universita o edificio pubblico
          </h2>
          <p className="mb-5 leading-8 text-gray-300">
            Quando si parla di scuola universita o edificio pubblico per preventivo mirato, il primo errore è pensare che basti chiedere qualche foto dall alto. In realtà il risultato migliore nasce da una richiesta precisa: bisogna chiarire quali parti osservare, perché servono le immagini, chi le dovrà usare e che tipo di consegna è più adatta. Questo vale ancora di più quando il contesto riguarda strutture pubbliche, perché spesso ci sono dettagli tecnici, limiti di accesso, persone da coordinare e tempi da rispettare.
          </p>
          <p className="leading-8 text-gray-300">
            Il cliente dovrebbe indicare punto da riprendere, eventuali limiti di accesso, urgenza, uso finale delle immagini e presenza di ostacoli. Il pilota, invece, dovrebbe rispondere spiegando fattibilità, sicurezza, condizioni operative, tempi indicativi e materiale consegnabile. In questo modo DroneGuard non diventa solo una pagina da trovare su Google, ma un punto di partenza pratico per far incontrare una richiesta reale con un operatore che può valutarla in modo professionale.
          </p>
        </div>
        
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-2xl font-bold">
            3. Coordinamento con referenti e tecnici per scuola universita o edificio pubblico
          </h2>
          <p className="mb-5 leading-8 text-gray-300">
            Quando si parla di scuola universita o edificio pubblico per preventivo mirato, il primo errore è pensare che basti chiedere qualche foto dall alto. In realtà il risultato migliore nasce da una richiesta precisa: bisogna chiarire quali parti osservare, perché servono le immagini, chi le dovrà usare e che tipo di consegna è più adatta. Questo vale ancora di più quando il contesto riguarda strutture pubbliche, perché spesso ci sono dettagli tecnici, limiti di accesso, persone da coordinare e tempi da rispettare.
          </p>
          <p className="leading-8 text-gray-300">
            Il cliente dovrebbe indicare punto da riprendere, eventuali limiti di accesso, urgenza, uso finale delle immagini e presenza di ostacoli. Il pilota, invece, dovrebbe rispondere spiegando fattibilità, sicurezza, condizioni operative, tempi indicativi e materiale consegnabile. In questo modo DroneGuard non diventa solo una pagina da trovare su Google, ma un punto di partenza pratico per far incontrare una richiesta reale con un operatore che può valutarla in modo professionale.
          </p>
        </div>
        
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-2xl font-bold">
            4. Consegna delle immagini per scuola universita o edificio pubblico
          </h2>
          <p className="mb-5 leading-8 text-gray-300">
            Quando si parla di scuola universita o edificio pubblico per preventivo mirato, il primo errore è pensare che basti chiedere qualche foto dall alto. In realtà il risultato migliore nasce da una richiesta precisa: bisogna chiarire quali parti osservare, perché servono le immagini, chi le dovrà usare e che tipo di consegna è più adatta. Questo vale ancora di più quando il contesto riguarda strutture pubbliche, perché spesso ci sono dettagli tecnici, limiti di accesso, persone da coordinare e tempi da rispettare.
          </p>
          <p className="leading-8 text-gray-300">
            Il cliente dovrebbe indicare punto da riprendere, eventuali limiti di accesso, urgenza, uso finale delle immagini e presenza di ostacoli. Il pilota, invece, dovrebbe rispondere spiegando fattibilità, sicurezza, condizioni operative, tempi indicativi e materiale consegnabile. In questo modo DroneGuard non diventa solo una pagina da trovare su Google, ma un punto di partenza pratico per far incontrare una richiesta reale con un operatore che può valutarla in modo professionale.
          </p>
        </div>
        
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-2xl font-bold">
            5. Uso delle foto per confronto e decisioni per scuola universita o edificio pubblico
          </h2>
          <p className="mb-5 leading-8 text-gray-300">
            Quando si parla di scuola universita o edificio pubblico per preventivo mirato, il primo errore è pensare che basti chiedere qualche foto dall alto. In realtà il risultato migliore nasce da una richiesta precisa: bisogna chiarire quali parti osservare, perché servono le immagini, chi le dovrà usare e che tipo di consegna è più adatta. Questo vale ancora di più quando il contesto riguarda strutture pubbliche, perché spesso ci sono dettagli tecnici, limiti di accesso, persone da coordinare e tempi da rispettare.
          </p>
          <p className="leading-8 text-gray-300">
            Il cliente dovrebbe indicare punto da riprendere, eventuali limiti di accesso, urgenza, uso finale delle immagini e presenza di ostacoli. Il pilota, invece, dovrebbe rispondere spiegando fattibilità, sicurezza, condizioni operative, tempi indicativi e materiale consegnabile. In questo modo DroneGuard non diventa solo una pagina da trovare su Google, ma un punto di partenza pratico per far incontrare una richiesta reale con un operatore che può valutarla in modo professionale.
          </p>
        </div>
        
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-2xl font-bold">
            6. Limiti del drone e ruolo del professionista per scuola universita o edificio pubblico
          </h2>
          <p className="mb-5 leading-8 text-gray-300">
            Quando si parla di scuola universita o edificio pubblico per preventivo mirato, il primo errore è pensare che basti chiedere qualche foto dall alto. In realtà il risultato migliore nasce da una richiesta precisa: bisogna chiarire quali parti osservare, perché servono le immagini, chi le dovrà usare e che tipo di consegna è più adatta. Questo vale ancora di più quando il contesto riguarda strutture pubbliche, perché spesso ci sono dettagli tecnici, limiti di accesso, persone da coordinare e tempi da rispettare.
          </p>
          <p className="leading-8 text-gray-300">
            Il cliente dovrebbe indicare punto da riprendere, eventuali limiti di accesso, urgenza, uso finale delle immagini e presenza di ostacoli. Il pilota, invece, dovrebbe rispondere spiegando fattibilità, sicurezza, condizioni operative, tempi indicativi e materiale consegnabile. In questo modo DroneGuard non diventa solo una pagina da trovare su Google, ma un punto di partenza pratico per far incontrare una richiesta reale con un operatore che può valutarla in modo professionale.
          </p>
        </div>
        
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-2xl font-bold">
            7. Vantaggi per clienti e piloti per scuola universita o edificio pubblico
          </h2>
          <p className="mb-5 leading-8 text-gray-300">
            Quando si parla di scuola universita o edificio pubblico per preventivo mirato, il primo errore è pensare che basti chiedere qualche foto dall alto. In realtà il risultato migliore nasce da una richiesta precisa: bisogna chiarire quali parti osservare, perché servono le immagini, chi le dovrà usare e che tipo di consegna è più adatta. Questo vale ancora di più quando il contesto riguarda strutture pubbliche, perché spesso ci sono dettagli tecnici, limiti di accesso, persone da coordinare e tempi da rispettare.
          </p>
          <p className="leading-8 text-gray-300">
            Il cliente dovrebbe indicare punto da riprendere, eventuali limiti di accesso, urgenza, uso finale delle immagini e presenza di ostacoli. Il pilota, invece, dovrebbe rispondere spiegando fattibilità, sicurezza, condizioni operative, tempi indicativi e materiale consegnabile. In questo modo DroneGuard non diventa solo una pagina da trovare su Google, ma un punto di partenza pratico per far incontrare una richiesta reale con un operatore che può valutarla in modo professionale.
          </p>
        </div>
        
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-2xl font-bold">
            8. Come evitare richieste troppo generiche per scuola universita o edificio pubblico
          </h2>
          <p className="mb-5 leading-8 text-gray-300">
            Quando si parla di scuola universita o edificio pubblico per preventivo mirato, il primo errore è pensare che basti chiedere qualche foto dall alto. In realtà il risultato migliore nasce da una richiesta precisa: bisogna chiarire quali parti osservare, perché servono le immagini, chi le dovrà usare e che tipo di consegna è più adatta. Questo vale ancora di più quando il contesto riguarda strutture pubbliche, perché spesso ci sono dettagli tecnici, limiti di accesso, persone da coordinare e tempi da rispettare.
          </p>
          <p className="leading-8 text-gray-300">
            Il cliente dovrebbe indicare punto da riprendere, eventuali limiti di accesso, urgenza, uso finale delle immagini e presenza di ostacoli. Il pilota, invece, dovrebbe rispondere spiegando fattibilità, sicurezza, condizioni operative, tempi indicativi e materiale consegnabile. In questo modo DroneGuard non diventa solo una pagina da trovare su Google, ma un punto di partenza pratico per far incontrare una richiesta reale con un operatore che può valutarla in modo professionale.
          </p>
        </div>
        

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">Domande frequenti</h2>
          <div className="space-y-5">
            
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Posso pubblicare una richiesta per questo servizio?</h3>
              <p className="text-gray-300">Sì. Puoi usare DroneGuard per pubblicare una richiesta collegata a scuola universita o edificio pubblico per preventivo mirato e ricevere candidature da piloti drone interessati.</p>
            </div>
    
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Il drone sostituisce un tecnico o una perizia?</h3>
              <p className="text-gray-300">No. Il drone fornisce documentazione visiva. Verifiche strutturali, diagnosi, perizie e decisioni operative devono essere svolte da professionisti qualificati.</p>
            </div>
    
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Che materiale posso chiedere?</h3>
              <p className="text-gray-300">Puoi chiedere immagini generali, particolari dei punti critici, video descrittivi e materiale selezionato, in base allo scopo del lavoro e al tipo di consegna concordata con il pilota.</p>
            </div>
    
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Quanto costa pubblicare il lavoro?</h3>
              <p className="text-gray-300">Pubblicare una richiesta costa 5 crediti. I clienti ricevono 10 crediti gratuiti dopo la registrazione su DroneGuard.</p>
            </div>
    
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">I piloti pagano per candidarsi?</h3>
              <p className="text-gray-300">Sì. Rispondere o candidarsi a un annuncio costa 5 crediti. I nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.</p>
            </div>
    
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Il volo è sempre possibile?</h3>
              <p className="text-gray-300">No. Il pilota deve valutare meteo, sicurezza, privacy, ostacoli, persone presenti, spazi di decollo, area di volo e regole applicabili.</p>
            </div>
    
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Posso usare le immagini per un preventivo?</h3>
              <p className="text-gray-300">Sì, le immagini possono aiutare a spiegare meglio una situazione a imprese e tecnici. Il preventivo finale dipende comunque dal professionista incaricato.</p>
            </div>
    
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">DroneGuard esegue direttamente il lavoro?</h3>
              <p className="text-gray-300">No. DroneGuard mette in contatto clienti e piloti drone. Il servizio viene svolto dal professionista scelto dal cliente.</p>
            </div>
    
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">Trova un pilota drone per scuola universita o edificio pubblico per preventivo mirato</h2>
          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone disponibili per scuola universita o edificio pubblico per preventivo mirato, foto dall alto, video, controlli visivi e documentazione utile. La piattaforma ti aiuta a trasformare un esigenza generica in una richiesta chiara e più facile da valutare.
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
