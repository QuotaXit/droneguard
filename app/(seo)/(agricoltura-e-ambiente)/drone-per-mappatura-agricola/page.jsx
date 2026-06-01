import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per mappatura agricola | DroneGuard",
  description:
    "Drone per mappatura agricola: foto, ortofoto, panoramiche e rilievi visivi per terreni agricoli, appezzamenti, confini, filari e accessi. Trova piloti drone su DroneGuard per richieste agricole e ambientali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Agricoltura e ambiente con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per mappatura agricola: trova piloti drone per foto, video e sopralluoghi ambientali
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai bisogno di un servizio con drone per fondi agricoli da documentare, appezzamenti da presentare, aree da confrontare e terreni con confini o accessi poco chiari? Con DroneGuard puoi pubblicare una richiesta,
            spiegare cosa devi documentare e ricevere candidature da piloti drone interessati. Una ripresa dall'alto
            può aiutare a vedere meglio superfici ampie, punti difficili da raggiungere, differenze tra zone vicine,
            accessi, confini, danni visibili, ristagni, vegetazione e dettagli che da terra rischiano di passare
            inosservati. Questa pagina è pensata per chi cerca drone per mappatura agricola e vuole preparare una richiesta chiara,
            utile e concreta.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Pubblica una richiesta
              </button>
            </Link>

            <Link href="/trova-pilota-drone">
              <button className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Trova piloti drone
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Vista completa dell'area
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone permette di osservare dall'alto fondi agricoli da documentare, appezzamenti da presentare, aree da confrontare e terreni con confini o accessi poco chiari. Una panoramica aerea aiuta a collegare
              dettagli, accessi, zone difficili e parti del terreno che da terra vengono viste separatamente.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Materiale ordinato
            </h2>
            <p className="leading-7 text-gray-300">
              Puoi chiedere foto panoramiche, video brevi, immagini dei punti critici e cartelle ordinate per zona,
              lato, appezzamento, intervento o problema da mostrare a tecnici, clienti o collaboratori.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Richiesta mirata
            </h2>
            <p className="leading-7 text-gray-300">
              DroneGuard mette in contatto clienti e piloti. Il cliente pubblica il lavoro, il pilota valuta la
              fattibilità e può candidarsi se il servizio rientra nella sua zona e nelle sue competenze.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere drone per mappatura agricola
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un servizio di drone per mappatura agricola può essere utile quando devi capire meglio lo stato di un'area agricola,
              naturale o rurale senza limitarti a poche fotografie scattate da terra. Il drone consente di ottenere
              una visione d'insieme di fondi agricoli da documentare, appezzamenti da presentare, aree da confrontare e terreni con confini o accessi poco chiari, mantenendo la possibilità di riprendere anche dettagli precisi.
              Questo è utile quando devi spiegare una situazione a una persona che non è presente sul posto oppure
              quando vuoi confrontare più zone dello stesso terreno.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              La richiesta può nascere prima di un intervento, dopo un evento atmosferico, durante una fase di
              controllo stagionale, prima di una vendita, in vista di una bonifica, per organizzare manutenzioni,
              per creare materiale informativo o per documentare lo stato di un terreno nel tempo. In molti casi
              la parte più importante non è solo la bellezza del video, ma la possibilità di vedere con ordine
              dove si trovano accessi, confini, ostacoli, zone umide, parti danneggiate o differenze evidenti.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone non sostituisce una perizia tecnica, una valutazione agronomica, una relazione ambientale
              o un sopralluogo professionale eseguito da figure abilitate. Può però fornire una base visiva molto
              utile per iniziare la valutazione, preparare domande più precise, chiedere preventivi più chiari e
              ridurre il rischio di spiegazioni confuse.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far documentare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ confini, strade poderali, fossi, capezzagne, filari, fabbricati rurali, aree coltivate e zone non lavorate</li>
              <li>✅ accessi, strade poderali, cancelli, recinzioni e aree di manovra</li>
              <li>✅ zone con acqua, ristagni, fossi, canali, erosioni o parti difficili da raggiungere</li>
              <li>✅ danni visibili dopo grandine, vento, pioggia intensa, incendi, siccità o lavori recenti</li>
              <li>✅ confini indicativi, panoramiche del fondo, collegamenti con fabbricati rurali e percorsi interni</li>
              <li>✅ immagini utili per agronomi, periti, manutentori, imprese, assicurazioni o amministrazioni</li>
              <li>✅ materiale promozionale per raccontare meglio l'azienda agricola o il territorio</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché il drone è utile in agricoltura e ambiente
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Campi, boschi, corsi d'acqua, argini, serre, frutteti, pascoli e aree naturali hanno spesso un problema
            comune: sono grandi, irregolari e difficili da leggere con un solo sguardo. Camminare tutto il terreno
            richiede tempo e non sempre permette di capire come le parti sono collegate tra loro. Una ripresa con
            drone crea invece una visione più ampia e immediata, utile per orientarsi e per decidere dove entrare
            con controlli più approfonditi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nel caso di drone per mappatura agricola, il drone può aiutare a avere una base visiva chiara per parlare di superfici, accessi, colture e stato generale del terreno. Questa utilità è ancora più evidente quando
            il terreno presenta zone diverse: una parte più verde e una più secca, un lato allagato e un lato
            asciutto, un accesso libero e un accesso ostruito, una fascia danneggiata e una parte in buone condizioni.
            Le immagini dall'alto rendono più semplice descrivere il problema senza affidarsi solo alla memoria.
          </p>

          <p className="leading-8 text-gray-300">
            La documentazione visiva può essere condivisa con un tecnico, con un socio, con un cliente, con un
            proprietario, con un'impresa o con un referente pubblico. Invece di inviare messaggi lunghi e poco
            chiari, puoi mostrare foto e video ordinati. Questo aiuta anche il pilota drone a capire il risultato
            che ti aspetti e a proporti una consegna più adatta.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard per questa richiesta
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                1. Registrati
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Crea un account come cliente, azienda agricola, tecnico, proprietario, amministrazione o pilota drone.
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
                Pubblicare una richiesta costa 5 crediti. Spiega luogo, obiettivo, urgenza e materiale desiderato.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Valuta i piloti
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
              Per clienti, aziende agricole e tecnici
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di pubblicare una richiesta per drone per mappatura agricola, prepara una descrizione semplice ma completa.
              Indica la località, il tipo di area, la dimensione indicativa, il motivo del servizio, il risultato
              che vuoi ottenere e le zone da documentare. Se il lavoro riguarda fondi agricoli da documentare, appezzamenti da presentare, aree da confrontare e terreni con confini o accessi poco chiari, specifica anche
              quali parti sono più importanti e se ci sono accessi particolari, cancelli, strade sterrate o orari
              da rispettare.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Inserire dettagli pratici aiuta a ricevere risposte migliori. Un pilota può valutare distanza,
              tempi, sicurezza, meteo, ostacoli e modalità di consegna solo se capisce il contesto. Scrivere
              "mi serve un drone" è troppo generico; scrivere cosa deve essere visto, da quale lato e con quale
              finalità rende la candidatura più precisa.
            </p>

            <p className="leading-8 text-gray-300">
              Puoi chiedere materiale grezzo, foto selezionate, video brevi, cartelle divise per area, riprese
              prima e dopo un intervento o una documentazione pensata per essere condivisa con un tecnico. Più
              chiara è la richiesta, più semplice sarà confrontare le candidature ricevute.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Per piloti drone e operatori professionali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Una candidatura efficace per drone per mappatura agricola deve essere concreta. Indica in quale zona operi, che tipo
              di esperienza hai in contesti agricoli o ambientali, quale materiale puoi consegnare e quali
              informazioni ti servono prima di confermare il servizio. Il cliente deve capire che non stai
              rispondendo in modo automatico, ma hai letto la richiesta e sai valutare il contesto.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di promettere riprese ravvicinate o voli complessi, considera sempre sicurezza, distanza
              da persone e strutture, presenza di animali, linee elettriche, ostacoli, meteo, privacy, aree
              sensibili e regole applicabili. In agricoltura e ambiente, il pilota non deve solo fare immagini:
              deve anche rispettare il luogo in cui opera.
            </p>

            <p className="leading-8 text-gray-300">
              Spiega al cliente la differenza tra semplice documentazione visiva, riprese promozionali e rilievi
              tecnici più avanzati. Se servono misurazioni, ortofoto o elaborazioni specifiche, chiarisci tempi,
              limiti e consegne. Questo evita equivoci e aumenta la fiducia.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta efficace
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature davvero utili, scrivi la richiesta come se stessi accompagnando il pilota
            sul posto. Indica cosa si vede entrando nell'area, dove si trovano gli accessi, quali parti sono
            prioritarie e quale problema vuoi chiarire. Una buona richiesta per drone per mappatura agricola dovrebbe spiegare
            se ti servono immagini generali, dettagli di punti specifici, video di percorso o materiale diviso
            per zone.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nel caso di fondi agricoli da documentare, appezzamenti da presentare, aree da confrontare e terreni con confini o accessi poco chiari, specifica se vuoi riprendere confini, strade poderali, fossi, capezzagne, filari, fabbricati rurali, aree coltivate e zone non lavorate. Indica anche se ci sono aree
            da evitare, presenza di animali, persone, mezzi agricoli, linee elettriche, serre, fabbricati,
            recinzioni o zone sensibili. Queste informazioni permettono al pilota di fare una prima valutazione
            più seria e di risponderti in modo meno generico.
          </p>

          <p className="leading-8 text-gray-300">
            Non dimenticare l'uso finale del materiale. Le immagini servono per un preventivo, per una relazione,
            per un'assicurazione, per una bonifica, per un controllo interno, per la vendita di un terreno o per
            promuovere un'azienda agricola? Lo stesso volo può essere impostato in modo diverso a seconda dello
            scopo. DroneGuard aiuta proprio a trasformare una necessità generica in una richiesta chiara.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per drone per mappatura agricola
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per una mappatura agricola visiva di alcuni appezzamenti. Mi servono immagini dall'alto, confini indicativi, accessi, strade poderali e panoramiche dei campi.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta di questo tipo funziona perché contiene contesto, obiettivo, punti da riprendere e
            utilizzo del materiale. Il pilota può capire se servono foto, video, dettagli ravvicinati, riprese
            ripetute o una consegna organizzata per cartelle. Inoltre può valutare in anticipo eventuali limiti
            pratici legati all'area.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Approfondimento SEO: cosa cerca davvero chi vuole drone per mappatura agricola
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Una pagina dedicata a drone per mappatura agricola deve parlare prima di tutto a chi ha un problema reale sul territorio. Non basta dire che il drone fa belle immagini: bisogna spiegare quando quelle immagini aiutano davvero, quali informazioni possono essere raccolte e come trasformare una ripresa aerea in materiale utile per decidere. Nel caso di fondi agricoli da documentare, appezzamenti da presentare, aree da confrontare e terreni con confini o accessi poco chiari, la vista dall'alto può rendere immediatamente più leggibile il rapporto tra terreno, accessi, colture, acqua, vegetazione e punti critici.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il valore principale è la chiarezza. Una foto da terra mostra spesso un dettaglio isolato, mentre una ripresa dall'alto permette di collegare quel dettaglio al resto dell'area. Per questo una richiesta su DroneGuard dovrebbe indicare con precisione cosa si vuole vedere: confini, strade poderali, fossi, capezzagne, filari, fabbricati rurali, aree coltivate e zone non lavorate. In questo modo il pilota può capire se il lavoro richiede una semplice panoramica, una sequenza di foto ordinate, un video descrittivo o più passaggi in momenti diversi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per proprietari terrieri, aziende agricole, tecnici, agronomi, consulenti immobiliari rurali e amministratori di fondi, il materiale con drone può diventare una base di confronto. Può servire prima di chiamare un'impresa, prima di chiedere un preventivo, prima di parlare con un tecnico o prima di decidere se fare un sopralluogo più approfondito. Il drone non sostituisce il giudizio di agronomi, geologi, periti, tecnici ambientali o professionisti qualificati, ma può rendere la conversazione molto più concreta perché tutti guardano le stesse immagini.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un altro aspetto importante è l'archivio. Ripetere un servizio di drone per mappatura agricola nel tempo permette di confrontare lo stato dell'area in periodi diversi: prima di un intervento, dopo una pioggia intensa, dopo una manutenzione, durante la stagione agricola o dopo un evento imprevisto. Anche quando non si cercano misurazioni tecniche avanzate, avere immagini ordinate aiuta a ricordare come si presentava il terreno e a comunicare meglio le decisioni.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard nasce proprio per semplificare questo incontro tra domanda e offerta. Il cliente non deve cercare a caso un operatore su internet: può pubblicare una richiesta descrivendo luogo, obiettivo, urgenza e materiale richiesto. I piloti interessati possono candidarsi e spiegare cosa possono consegnare. Per lavori collegati a drone per mappatura agricola, questo sistema è utile perché ogni area è diversa e ogni incarico va valutato in base a sicurezza, meteo, ostacoli, privacy e condizioni locali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Chi arriva su Google cercando drone per mappatura agricola spesso non sa ancora come trasformare il bisogno in un incarico. Potrebbe avere un campo da controllare, una zona allagata, un tratto da documentare, una bonifica da pianificare o un danno da mostrare a un referente. La pagina deve quindi guidare l'utente verso una richiesta concreta, evitando promesse assolute e spiegando in modo semplice cosa può essere utile chiedere al pilota.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un buon contenuto SEO per drone per mappatura agricola deve parlare anche ai piloti. Un operatore drone che legge una richiesta ben scritta può rispondere meglio, indicare limiti e proporre una consegna più adatta. Questo rende la piattaforma più ordinata: il cliente riceve risposte più chiare, il pilota evita perdite di tempo e il lavoro parte con aspettative più realistiche.
          </p>

          <p className="leading-8 text-gray-300">
            Per questo motivo una pagina come questa non deve essere solo una vetrina: deve accompagnare il
            cliente verso l'azione giusta. La cosa più importante è pubblicare una richiesta concreta, con luogo,
            obiettivo, materiale richiesto e priorità. Così DroneGuard può diventare un punto di incontro tra chi
            ha bisogno di documentare un'area e chi ha le competenze per farlo con un drone.
          </p>
        </div>

        <div className="mb-14 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h2 className="mb-3 text-2xl font-bold">
              Prima del volo
            </h2>
            <p className="leading-8 text-gray-300">
              Prepara indirizzo, referente, accessi, orari disponibili, obiettivo del servizio, punti da riprendere
              e indicazioni su eventuali ostacoli. Se possibile, allega una mappa, una foto da terra o una breve
              descrizione dei confini.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h2 className="mb-3 text-2xl font-bold">
              Durante il servizio
            </h2>
            <p className="leading-8 text-gray-300">
              Il pilota valuta condizioni reali, meteo, persone presenti, animali, ostacoli, aree da evitare e
              sicurezza operativa. Il cliente deve chiarire le priorità senza chiedere manovre rischiose o non
              valutate.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h2 className="mb-3 text-2xl font-bold">
              Dopo la consegna
            </h2>
            <p className="leading-8 text-gray-300">
              Organizza foto e video per zona, data o problema. Un archivio ordinato permette di confrontare
              l'area nel tempo, condividere il materiale con tecnici e preparare interventi successivi.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per drone per mappatura agricola?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base a città, distanza del pilota, dimensione dell'area, durata del servizio,
            complessità del volo, numero di punti da documentare, urgenza e tipo di consegna. Un breve video
            panoramico non ha lo stesso impegno di una documentazione completa con molte foto, più punti critici,
            riprese prima e dopo e cartelle ordinate per appezzamento.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il contesto incide sul preventivo. Lavorare in un campo aperto può essere diverso da operare
            vicino a serre, argini, boschi, strade, linee elettriche, animali, persone o aree sensibili. Per questo
            è importante descrivere bene la situazione nella richiesta e lasciare al pilota la possibilità di
            fare domande prima di confermare il servizio.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma serve a pubblicare la richiesta e ricevere
            candidature. Cliente e professionista possono poi accordarsi direttamente su prezzo, tempi, modalità,
            limiti del lavoro e consegna finale.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Idee di contenuto da chiedere al pilota
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-green-400">
                Foto utili
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• panoramica generale dell'area da più altezze</li>
                <li>• immagini dei confini, degli accessi e delle strade interne</li>
                <li>• dettagli dei punti critici indicati dal cliente</li>
                <li>• confronto tra zone sane e zone problematiche</li>
                <li>• foto finali organizzate per cartella o sequenza</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-green-400">
                Video utili
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• video panoramico dell'intera area</li>
                <li>• passaggio lento sopra il punto principale</li>
                <li>• percorso dagli accessi fino alla zona da documentare</li>
                <li>• ripresa descrittiva per presentazioni o comunicazioni</li>
                <li>• breve video prima e dopo un intervento</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Altri casi pratici collegati a drone per mappatura agricola
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un cliente può usare DroneGuard quando deve mostrare un problema a distanza, preparare una richiesta
            di intervento o semplicemente capire meglio l'area prima di muovere persone e mezzi. In agricoltura e
            ambiente questa esigenza è frequente, perché molti punti sono lontani dagli accessi principali e non
            sempre è comodo raggiungerli subito a piedi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per drone per mappatura agricola, le riprese possono essere richieste anche in modo periodico. Una sequenza mensile o stagionale
            può raccontare cambiamenti, miglioramenti, peggioramenti o effetti di un intervento. Non serve sempre
            un'elaborazione complessa: a volte bastano foto ordinate, coerenti e scattate dagli stessi punti di vista.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            La pagina è costruita anche per intercettare ricerche più lunghe, come "pilota drone per drone per mappatura agricola",
            "preventivo drone per drone per mappatura agricola", "foto con drone per drone per mappatura agricola" o "servizio drone per drone per mappatura agricola". Queste ricerche
            non sono solo parole chiave: sono segnali di un cliente che potrebbe avere bisogno di pubblicare
            un lavoro concreto.
          </p>

          <p className="leading-8 text-gray-300">
            Per questo il contenuto insiste su esempi, preparazione della richiesta, materiale da chiedere e limiti
            del servizio. Una pagina lunga, chiara e specifica aiuta sia il posizionamento sia la conversione, perché
            porta l'utente dalla ricerca alla pubblicazione dell'annuncio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare DroneGuard per drone per mappatura agricola?
              </h3>
              <p className="text-gray-300">
                Sì. Puoi pubblicare una richiesta e cercare piloti drone disponibili per foto, video, sopralluoghi
                visivi e documentazione collegata a fondi agricoli da documentare, appezzamenti da presentare, aree da confrontare e terreni con confini o accessi poco chiari.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce un tecnico?
              </h3>
              <p className="text-gray-300">
                No. Il drone fornisce materiale visivo, ma valutazioni tecniche, agronomiche, ambientali, strutturali
                o assicurative devono essere svolte da professionisti qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Che materiale posso chiedere?
              </h3>
              <p className="text-gray-300">
                Puoi chiedere foto panoramiche, video dall'alto, dettagli ravvicinati, immagini prima e dopo,
                cartelle ordinate e riprese dei punti più importanti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il volo è sempre possibile?
              </h3>
              <p className="text-gray-300">
                No. Il pilota deve valutare sicurezza, meteo, ostacoli, persone, animali, privacy, aree sensibili
                e regole applicabili prima di confermare il servizio.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare una richiesta?
              </h3>
              <p className="text-gray-300">
                Pubblicare una richiesta costa 5 crediti. I nuovi clienti ricevono 10 crediti gratuiti dopo la
                registrazione su DroneGuard.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa candidarsi per un pilota?
              </h3>
              <p className="text-gray-300">
                Rispondere o candidarsi a un annuncio costa 5 crediti. I nuovi piloti ricevono 50 crediti gratuiti
                dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Devo conoscere già il tipo di drone?
              </h3>
              <p className="text-gray-300">
                Non necessariamente. Puoi spiegare il risultato che ti serve; sarà il pilota a indicare cosa può
                fare, quali limiti ci sono e quale materiale può consegnare.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso chiedere immagini ripetute nel tempo?
              </h3>
              <p className="text-gray-300">
                Sì. Per molte esigenze agricole e ambientali è utile ripetere le riprese a distanza di settimane
                o mesi, così da confrontare lo stato dell'area nel tempo.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per drone per mappatura agricola
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica la tua richiesta e descrivi cosa ti serve: area, obiettivo,
            punti da documentare, urgenza e consegna desiderata. I piloti interessati potranno candidarsi e tu
            potrai scegliere il professionista più adatto al lavoro.
          </p>

          <Link href="/register">
            <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
              Inizia ora su DroneGuard
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
