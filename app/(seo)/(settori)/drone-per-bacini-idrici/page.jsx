import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per bacini idrici | DroneGuard",
  description:
    "Drone per bacini idrici: trova piloti drone per foto, video, sopralluoghi aerei e documentazione visiva. Pubblica una richiesta su DroneGuard e scegli il candidato per laghetti, invasi, bacini artificiali, sponde, argini, accessi, vegetazione, canali e aree agricole o naturali vicine."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Acqua, ambiente e gestione territoriale con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per bacini idrici: foto e video per sponde, livelli, accessi e aree naturali circostanti
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Cerchi un pilota drone per laghetti, invasi, bacini artificiali, sponde, argini, accessi, vegetazione, canali e aree agricole o naturali vicine? Con DroneGuard puoi pubblicare una richiesta chiara,
            spiegare il tipo di lavoro da svolgere e ricevere candidature da operatori interessati. Una pagina come
            questa è pensata per intercettare chi cerca un servizio specifico, ma anche per aiutare il cliente a capire
            cosa chiedere davvero: non soltanto &quot;mi serve un drone&quot;, ma foto, video, panoramiche, dettagli visivi,
            documentazione ordinata e materiale utile per decisioni tecniche, commerciali o organizzative.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Pubblica il tuo lavoro
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
              Richiesta mirata
            </h2>
            <p className="leading-7 text-gray-300">
              Descrivi luogo, obiettivo, urgenza, tipo di immagini richieste e punti da documentare. Più la richiesta
              è precisa, più un pilota può capire se il servizio è fattibile e candidarsi con una proposta concreta.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Materiale utile
            </h2>
            <p className="leading-7 text-gray-300">
              Puoi chiedere foto panoramiche, video brevi, dettagli ravvicinati, viste dall'alto, sequenze ordinate
              per area e materiale da condividere con tecnici, clienti, fornitori, direzione o collaboratori.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Scegli il candidato
            </h2>
            <p className="leading-7 text-gray-300">
              DroneGuard non impone un professionista unico: il cliente pubblica il lavoro, riceve candidature e può
              scegliere il pilota drone più adatto in base a zona, esperienza, disponibilità e proposta.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere drone per bacini idrici
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un servizio con drone è utile quando serve una visione dall'alto chiara e comprensibile di laghetti, invasi, bacini artificiali, sponde, argini, accessi, vegetazione, canali e aree agricole o naturali vicine.
              Da terra spesso si vedono solo porzioni separate: un ingresso, un tratto di recinzione, una facciata,
              un piazzale, una strada o una singola area tecnica. Il drone aiuta a collegare queste informazioni in
              un quadro unico, mostrando proporzioni, distanze, accessi, ostacoli, spazi di manovra e punti che
              meritano attenzione. Per drone per bacini idrici, questo tipo di documentazione può essere utile prima di
              un intervento, dopo un evento atmosferico, durante una presentazione, nella gestione di una struttura
              o nella richiesta di un preventivo.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il vantaggio non è soltanto estetico. Foto e video dall'alto possono aiutare a spiegare una situazione
              a persone che non sono presenti sul posto: un tecnico, un amministratore, un cliente, un socio, un
              responsabile, un'impresa incaricata o un ufficio interno. Una sequenza ordinata di immagini può ridurre
              dubbi, telefonate e sopralluoghi inutili, perché permette a tutti di partire dalla stessa base visiva.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone non sostituisce una perizia, una verifica strutturale, una diagnosi specialistica o un controllo
              eseguito da professionisti abilitati. Può però fornire una prima documentazione visiva molto efficace,
              soprattutto quando il tema riguarda aree esterne, spazi grandi, coperture, confini, parcheggi, percorsi,
              zone verdi, impianti o parti difficili da osservare completamente da terra.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far documentare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ sponde, argini e punti di accesso</li>
              <li>✅ vegetazione, canali e zone di deposito materiale</li>
              <li>✅ panoramiche del bacino e delle aree vicine</li>
              <li>✅ documentazione dopo siccità, piena o lavori</li>
              <li>✅ foto per manutenzione e confronto tecnico</li>
              <li>✅ video per presentazioni ambientali o agricole</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché usare un drone in questo settore
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nel settore acqua, ambiente e gestione territoriale, molte decisioni dipendono dalla capacità di leggere uno spazio nel suo
            insieme. Una struttura può sembrare semplice quando viene osservata da un solo punto, ma cambiare punto
            di vista fa emergere collegamenti, proporzioni e criticità che altrimenti restano poco evidenti. Il drone
            consente di mostrare il rapporto tra accessi, aree operative, zone di sosta, confini, coperture e percorsi,
            creando un materiale visivo facile da comprendere anche per chi non conosce il luogo.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per consorzi, comuni, gestori bacini, tecnici ambientali, agronomi, associazioni e società di manutenzione, avere immagini aggiornate può essere importante in molte fasi: preparare un
            preventivo, valutare un intervento, mostrare l'area a un cliente, documentare un problema, presentare una
            struttura, raccontare un progetto, confrontare lo stato prima e dopo i lavori o archiviare una situazione
            nel tempo. Non sempre serve un grande montaggio video: a volte bastano foto ordinate, dettagli chiari e
            una panoramica generale eseguita con attenzione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            La differenza la fa la richiesta iniziale. Un cliente che scrive solo poche parole rischia di ricevere risposte
            generiche; un cliente che indica cosa vuole vedere, perché gli serve e come userà il materiale permette al
            pilota di valutare meglio distanza, tempi, complessità, sicurezza, modalità di consegna e limiti operativi.
            Per questo DroneGuard punta a trasformare la ricerca del pilota in un annuncio concreto, leggibile e utile.
          </p>

          <p className="leading-8 text-gray-300">
            Anche dal punto di vista SEO, una pagina specifica come questa aiuta a intercettare ricerche reali: persone
            che non cercano semplicemente &quot;drone&quot;, ma un servizio collegato al proprio problema. Chi cerca drone per bacini idrici
            probabilmente ha già un bisogno preciso e vuole capire chi può aiutarlo, quali immagini può richiedere e come
            impostare una domanda chiara a un professionista.
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
                Crea un account come cliente, azienda, tecnico, struttura, professionista o pilota drone.
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
                Pubblicare una richiesta costa 5 crediti. Scrivi luogo, obiettivo, materiale richiesto e urgenza.
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
              Per clienti, aziende e tecnici
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di pubblicare un annuncio per drone per bacini idrici, prepara una descrizione semplice ma completa.
              Indica il comune o la zona, il tipo di struttura, l'obiettivo della ripresa, l'orario preferito, la presenza
              di persone, mezzi o attività in corso, eventuali referenti sul posto e il materiale che vuoi ricevere. Se
              ti servono immagini da condividere con un tecnico, con un'impresa o con un cliente, scrivilo subito.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Specifica anche se vuoi un risultato più tecnico o più promozionale. Una ripresa per manutenzione richiede
              spesso dettagli ordinati, lati dell'edificio, punti critici e immagini non troppo artistiche. Una ripresa
              per marketing, invece, può richiedere movimento, luce migliore, viste emozionali, inquadrature larghe e
              materiale adatto a sito, social, brochure o presentazioni commerciali.
            </p>

            <p className="leading-8 text-gray-300">
              Se hai dubbi, puoi scrivere nella richiesta che desideri un confronto con il pilota prima del lavoro. In
              molti casi il professionista può suggerire quali riprese hanno senso, quali sono superflue e quali aspetti
              devono essere verificati sul posto. Una buona comunicazione iniziale evita incomprensioni e rende il
              servizio più utile per tutti.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Per piloti drone e operatori professionali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Una candidatura efficace deve essere concreta. Spiega in quale zona operi, quali servizi puoi offrire,
              che tipo di materiale consegni e quali informazioni ti servono prima di confermare il lavoro. Per drone per bacini idrici,
              il cliente apprezza risposte chiare: disponibilità, tempi indicativi, esempi di consegna, attenzione alla
              sicurezza e capacità di distinguere tra riprese tecniche e riprese promozionali.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Prima del volo valuta sempre meteo, ostacoli, persone presenti, spazio disponibile, privacy, vincoli locali,
              aree sensibili, eventuali autorizzazioni e regole applicabili. Se il servizio si svolge vicino a strutture
              pubbliche, infrastrutture, aree affollate o zone operative, è ancora più importante chiarire cosa è possibile
              fare, cosa non è possibile promettere e quali condizioni devono essere rispettate.
            </p>

            <p className="leading-8 text-gray-300">
              DroneGuard può aiutarti a trovare richieste specifiche invece di cercare clienti in modo casuale. Rispondere
              bene a un annuncio significa leggere il problema, proporre una soluzione e spiegare al cliente perché il tuo
              servizio può essere adatto. Una risposta generica costa crediti e rischia di non convincere; una risposta
              mirata può trasformare una richiesta SEO in un lavoro reale.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta efficace
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Una richiesta efficace per drone per bacini idrici dovrebbe rispondere a cinque domande: dove si trova il luogo,
            cosa deve essere ripreso, perché ti serve il materiale, quando vorresti effettuare il servizio e come vuoi
            ricevere le immagini. Scrivere queste informazioni fin dall'inizio permette ai piloti di capire se possono
            candidarsi e di evitare messaggi ripetitivi per ottenere dettagli di base.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nel caso di laghetti, invasi, bacini artificiali, sponde, argini, accessi, vegetazione, canali e aree agricole o naturali vicine, puoi indicare se il lavoro riguarda controllo visivo, promozione, manutenzione,
            documentazione per preventivo, presentazione, evento, vendita, assicurazione, archivio fotografico o confronto
            tecnico. Puoi chiedere foto panoramiche, video breve, dettagli di punti precisi, immagini ordinate per area,
            file separati per lato o una consegna semplice da girare via email o link.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Aggiungi eventuali limiti pratici: orari di apertura, presenza di clienti, attività in corso, mezzi in movimento,
            zone da evitare, accesso al parcheggio, referente sul posto, regole interne e urgenza. Se il luogo è molto grande,
            può essere utile indicare una priorità: prima le coperture, poi i parcheggi, poi gli accessi, oppure prima le
            riprese promozionali e poi i dettagli tecnici.
          </p>

          <p className="leading-8 text-gray-300">
            Ricorda che una pagina SEO deve portare a una richiesta reale, non solo a testo lungo. L'obiettivo è aiutare
            chi arriva da Google a capire cosa può chiedere e come pubblicare un annuncio utile. Per questo ogni pagina
            di DroneGuard deve essere ricca, ma anche pratica: deve parlare alle persone che hanno un problema concreto
            e cercano un pilota drone per risolverlo con foto e video dall'alto.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per drone per bacini idrici
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per documentare un bacino idrico: sponde, argini, accessi, vegetazione, canali collegati e panoramica generale. Il materiale servirà per manutenzione e valutazioni ambientali.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Un esempio così funziona perché indica il contesto, i punti da documentare e l'uso finale del materiale.
            Il pilota può valutare se servono solo immagini panoramiche, dettagli più ravvicinati, riprese promozionali,
            una sequenza tecnica o una combinazione di contenuti. Più è chiaro il risultato atteso, più sarà semplice
            ricevere candidature adatte e confrontare le proposte.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per drone per bacini idrici?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può cambiare in base alla città, alla distanza del pilota, alla durata del lavoro, alla complessità
            dell'area, al numero di punti da documentare, alla tipologia di materiale richiesto e all'urgenza. Un breve
            video panoramico richiede un impegno diverso rispetto a una documentazione completa con molte aree, dettagli,
            cartelle ordinate e consegna pensata per tecnici o comunicazione aziendale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il tipo di consegna incide: foto grezze, immagini selezionate, video montato, riprese verticali per social,
            materiale organizzato per cartelle, confronto prima e dopo, oppure sopralluoghi ripetuti nel tempo. Prima di
            scegliere il pilota, è utile specificare cosa vuoi davvero ricevere e chiedere come verranno consegnati i file.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non stabilisce un prezzo unico. La piattaforma serve a pubblicare la richiesta e mettere in contatto
            cliente e pilota. Saranno poi le parti a concordare costo, tempi, consegna, limiti del lavoro e modalità operative.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Riprese promozionali
            </h2>
            <p className="leading-7 text-gray-300">
              Ideali per siti web, social, brochure, presentazioni, annunci, campagne locali, video emozionali e contenuti
              che devono valorizzare una struttura o un servizio.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione tecnica
            </h2>
            <p className="leading-7 text-gray-300">
              Utile quando servono immagini ordinate, punti specifici, confronti visivi, stato dei luoghi, supporto a
              preventivi, manutenzioni o valutazioni interne.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Archivio nel tempo
            </h2>
            <p className="leading-7 text-gray-300">
              Ripetere una ripresa a distanza di settimane o mesi permette di confrontare cambiamenti, lavori, stagioni,
              danni, miglioramenti o evoluzione di un'area.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Sicurezza, privacy e limiti operativi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Ogni servizio con drone deve essere valutato dal pilota in base al luogo, alle regole applicabili e alle condizioni
            reali. Non è corretto promettere che un volo sia sempre possibile: possono esserci persone, ostacoli, strade,
            edifici sensibili, aree riservate, interferenze, meteo sfavorevole, spazi insufficienti o vincoli locali. Una
            richiesta chiara aiuta il pilota a capire in anticipo quali verifiche servono.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Quando il servizio riguarda laghetti, invasi, bacini artificiali, sponde, argini, accessi, vegetazione, canali e aree agricole o naturali vicine, è importante evitare riprese inutili di persone, targhe,
            aree private non pertinenti o zone non autorizzate. Il cliente dovrebbe indicare l'area corretta e il pilota
            dovrebbe organizzare il lavoro in modo prudente, spiegando cosa può consegnare e cosa deve essere escluso.
          </p>

          <p className="leading-8 text-gray-300">
            La qualità del risultato dipende anche da orario, luce, meteo e organizzazione sul posto. Per molte strutture,
            scegliere una fascia oraria con meno persone o meno mezzi in movimento può rendere il lavoro più semplice e
            il materiale finale più pulito. Per riprese promozionali, invece, luce e stagione possono fare una grande differenza.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare DroneGuard per drone per bacini idrici?
              </h3>
              <p className="text-gray-300">
                Sì. Puoi pubblicare una richiesta e cercare piloti drone disponibili per foto, video, sopralluoghi visivi
                e documentazione collegata a laghetti, invasi, bacini artificiali, sponde, argini, accessi, vegetazione, canali e aree agricole o naturali vicine.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce un tecnico o una perizia?
              </h3>
              <p className="text-gray-300">
                No. Il drone può fornire documentazione visiva, ma verifiche tecniche, relazioni specialistiche, perizie,
                misurazioni ufficiali e decisioni operative devono essere svolte da professionisti qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Che materiale posso chiedere al pilota?
              </h3>
              <p className="text-gray-300">
                Puoi chiedere foto panoramiche, video dall'alto, dettagli di punti specifici, immagini ordinate per area,
                riprese promozionali, materiale per preventivi o documentazione prima e dopo un intervento.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare un lavoro?
              </h3>
              <p className="text-gray-300">
                Pubblicare una richiesta costa 5 crediti. I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione
                su DroneGuard.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                I piloti pagano per candidarsi?
              </h3>
              <p className="text-gray-300">
                Sì. Rispondere o candidarsi a un annuncio costa 5 crediti. I nuovi piloti ricevono 50 crediti gratuiti
                dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il volo è sempre possibile?
              </h3>
              <p className="text-gray-300">
                No. Il pilota deve valutare sicurezza, meteo, ostacoli, persone presenti, privacy, area di volo e norme
                applicabili prima di confermare il servizio.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per drone per bacini idrici
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica il tuo lavoro e descrivi in modo chiaro il servizio che ti serve. Puoi
            ricevere candidature da piloti drone interessati e scegliere il candidato più adatto per zona, esperienza,
            disponibilità e proposta.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/register">
              <button className="rounded-xl bg-[#0B0F2A] px-6 py-3 font-semibold text-white transition hover:bg-[#151b45]">
                Crea una richiesta
              </button>
            </Link>

            <Link href="/come-funziona">
              <button className="rounded-xl border border-[#0B0F2A]/20 px-6 py-3 font-semibold text-[#0B0F2A] transition hover:bg-gray-100">
                Scopri come funziona
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
