import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Trova un pilota drone per impianti compostaggio | DroneGuard",
  description: "Trova un pilota drone per impianti compostaggio: pubblica una richiesta su DroneGuard, confronta candidature e scegli piloti drone per foto, video, sopralluoghi e documentazione visiva."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ricerca piloti drone professionali
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Trova un pilota drone per impianti compostaggio: pubblica la richiesta su DroneGuard
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Quando devi organizzare impianti compostaggio, la difficoltà non è soltanto trovare qualcuno con un drone. Serve un pilota che capisca il contesto, sappia leggere la richiesta, valuti gli spazi di volo, prepari il materiale giusto e comunichi in modo chiaro prima, durante e dopo il servizio. DroneGuard nasce proprio per trasformare una ricerca generica in una richiesta ordinata: il cliente descrive cosa deve documentare, i piloti interessati si candidano e chi pubblica può scegliere il profilo più adatto.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Pubblica la richiesta
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
            <h2 className="mb-3 text-xl font-semibold">Richiesta mirata</h2>
            <p className="leading-7 text-gray-300">
              Descrivi luogo, obiettivo, urgenza e punti da documentare. Per impianti compostaggio puoi indicare in modo chiaro cosa vuoi riprendere e perché ti serve il materiale.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Candidature dei piloti</h2>
            <p className="leading-7 text-gray-300">
              I piloti interessati possono rispondere all annuncio e spiegare disponibilità, consegna, esperienza e limiti operativi prima di concordare il lavoro.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Scelta del candidato</h2>
            <p className="leading-7 text-gray-300">
              Confronta le risposte ricevute e scegli il profilo più adatto in base a chiarezza, zona, esperienza, materiale proposto e comunicazione.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché cercare un pilota drone per impianti compostaggio
            </h2>
            <p className="mb-5 leading-8 text-gray-300">Una pagina dedicata a impianti compostaggio è utile perché molte persone cercano un servizio preciso e non vogliono perdere tempo con messaggi casuali. Chi ha bisogno di immagini dall alto spesso deve spiegare la situazione a un tecnico, a un amministratore, a un cliente, a un impresa, a una direzione aziendale o a un assicuratore. Per questo la richiesta deve indicare obiettivo, luogo, urgenza, tipo di consegna e punti da riprendere, come cumuli, piazzali, aree operative, accessi, recinzioni e coperture.</p>
            <p className="mb-5 leading-8 text-gray-300">DroneGuard non è una semplice vetrina statica. La piattaforma aiuta a collegare domanda e offerta: da una parte ci sono gestori e consulenti ambientali; dall altra ci sono piloti drone che possono valutare il lavoro e candidarsi. Questo rende la ricerca più concreta, perché il cliente non deve solo cercare un numero di telefono, ma può pubblicare un annuncio con informazioni utili e ricevere risposte mirate.</p>
            <p className="leading-8 text-gray-300">Per impianti compostaggio, le immagini aeree possono aiutare a vedere proporzioni, accessi, criticità visibili, elementi nascosti da terra e rapporto tra l area da controllare e il contesto circostante. Non sempre serve un lavoro complesso: a volte bastano foto panoramiche, un breve video e alcuni dettagli ravvicinati. In altri casi può servire una documentazione più ordinata, con cartelle separate, riprese per lato, percorso video o confronto tra diverse zone.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">Cosa puoi indicare nella richiesta</h3>
            <ul className="space-y-4 text-gray-300">
              <li>✅ area o città dove deve essere svolto il servizio</li>
              <li>✅ obiettivo del lavoro e uso finale del materiale</li>
              <li>✅ punti da riprendere: cumuli, piazzali, aree operative, accessi, recinzioni e coperture</li>
              <li>✅ foto, video, dettagli ravvicinati o cartelle ordinate</li>
              <li>✅ urgenza, orari possibili e referente sul posto</li>
              <li>✅ eventuali limiti di accesso, privacy, ostacoli o aree sensibili</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Una ricerca più concreta rispetto ai contatti casuali</h2>
          <p className="mb-5 leading-8 text-gray-300">Il vantaggio del drone è la rapidità con cui può offrire una visione d insieme. Da terra spesso si osservano singoli dettagli, mentre dall alto diventa più facile capire come sono collegati tra loro accessi, coperture, recinzioni, spazi esterni, zone operative e punti critici. Per chi deve prendere una decisione, anche una semplice sequenza di immagini può rendere il confronto molto più chiaro.</p>
          <p className="mb-5 leading-8 text-gray-300">Prima di pubblicare la richiesta, conviene scrivere in modo semplice ma preciso. Indica dove si trova il lavoro, quale problema vuoi documentare, se serve solo una panoramica o anche dettagli, se ci sono limiti di orario, persone presenti, ostacoli, edifici vicini o aree private. Più la richiesta è chiara, più il pilota potrà rispondere con una proposta realistica.</p>
          <p className="leading-8 text-gray-300">Per impianti compostaggio, un annuncio efficace non deve promettere risultati tecnici che spettano a professionisti abilitati. Il drone può produrre materiale visivo, ma non sostituisce perizie, certificazioni, relazioni strutturali, diagnosi ufficiali o decisioni operative. Proprio per questo è utile descrivere il materiale richiesto come supporto visivo: foto, video, panoramiche, dettagli e documentazione da condividere con chi dovrà poi valutare.</p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">Come funziona DroneGuard</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">1. Registrati</h3>
              <p className="text-sm leading-6 text-gray-300">Crea un account come cliente o come pilota drone e accedi alla piattaforma.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-green-400">2. Ricevi crediti</h3>
              <p className="text-sm leading-6 text-gray-300">I clienti ricevono 10 crediti gratuiti, mentre i piloti ricevono 50 crediti gratuiti dopo la registrazione.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-green-400">3. Pubblica o rispondi</h3>
              <p className="text-sm leading-6 text-gray-300">Pubblicare una richiesta costa 5 crediti. Anche candidarsi o rispondere a un annuncio costa 5 crediti per il pilota.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-green-400">4. Scegli il contatto</h3>
              <p className="text-sm leading-6 text-gray-300">Il cliente confronta le candidature ricevute e decide quale pilota contattare per organizzare il servizio.</p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">Per clienti, aziende e tecnici</h2>
            <p className="mb-5 leading-8 text-gray-300">Il cliente può usare DroneGuard anche quando non conosce il prezzo giusto. Pubblicando una richiesta, può ricevere candidature e capire come diversi piloti impostano il lavoro. Alcuni offriranno un servizio base, altri una consegna più completa, altri ancora potranno proporre sopralluoghi ripetuti, montaggio video o organizzazione del materiale per cartelle. La scelta finale resta al cliente.</p>
            <p className="mb-5 leading-8 text-gray-300">DroneGuard usa un sistema a crediti pensato per far partire la piattaforma in modo semplice. I clienti ricevono 10 crediti gratuiti dopo la registrazione e pubblicare un lavoro costa 5 crediti. I piloti ricevono 50 crediti gratuiti dopo la registrazione e rispondere o candidarsi a un annuncio costa 5 crediti. Questo aiuta a mantenere le richieste più concrete e le candidature più mirate.</p>
            <p className="leading-8 text-gray-300">Nel caso di impianti compostaggio, il costo finale del servizio non è uguale per tutti. Dipende da distanza, durata, complessità, numero di punti da riprendere, consegna richiesta, urgenza, necessità di montaggio, eventuale ripetizione delle riprese e livello di preparazione. Una richiesta dettagliata permette al pilota di formulare una proposta più corretta e al cliente di confrontare meglio le candidature.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">Per piloti drone e operatori</h2>
            <p className="mb-5 leading-8 text-gray-300">Per il pilota drone, una pagina come questa è importante perché intercetta clienti con bisogni reali. Chi cerca impianti compostaggio non sta leggendo una pagina generica sui droni: sta cercando qualcuno che possa aiutarlo in una situazione concreta. Una candidatura professionale dovrebbe quindi spiegare area di operatività, esperienza simile, disponibilità, limiti del servizio, modalità di consegna e aspetti da verificare prima del volo.</p>
            <p className="mb-5 leading-8 text-gray-300">Una buona risposta del pilota non dovrebbe limitarsi a dire disponibile. Meglio indicare quali immagini possono essere utili, quali informazioni mancano, se serve un referente sul posto, se ci sono vincoli di accesso e quali condizioni meteo o operative potrebbero influenzare il lavoro. Questo approccio aumenta la fiducia del cliente e riduce incomprensioni.</p>
            <p className="leading-8 text-gray-300">Per i piloti, DroneGuard può diventare uno spazio utile per trovare richieste in settori diversi: edilizia, immobiliare, industria, agricoltura, turismo, eventi, fotovoltaico, ambiente e infrastrutture. Ogni pagina SEO aumenta le possibilità che un cliente arrivi con una necessità precisa e pubblichi un lavoro reale.</p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Che materiale chiedere per impianti compostaggio</h2>
          <p className="mb-5 leading-8 text-gray-300">Le immagini possono servire per molte finalità: mostrare una situazione prima di un intervento, documentare lo stato di fatto, preparare un preventivo, confrontare più aree, presentare un immobile o una struttura, spiegare un problema a distanza o archiviare materiale utile nel tempo. Per questo la consegna deve essere pensata in base all uso finale, non solo al volo in sé.</p>
          <p className="mb-5 leading-8 text-gray-300">Se il materiale serve a un tecnico, può essere utile chiedere immagini ordinate, nomi file chiari e riprese dei lati principali. Se serve a un cliente o a una direzione, può essere utile un video breve e comprensibile. Se serve per promozione, bisogna pensare anche a inquadrature pulite, luce, ritmo e contesto. La stessa area può essere ripresa in modi diversi a seconda dell obiettivo.</p>
          <p className="leading-8 text-gray-300">La sicurezza resta centrale. Il pilota deve valutare persone presenti, ostacoli, edifici vicini, linee, alberi, mezzi in movimento, privacy, meteo, vento e regole applicabili. Il cliente deve agevolare questa valutazione fornendo informazioni vere e complete. Un annuncio chiaro non serve solo alla SEO: serve a preparare un lavoro più ordinato.</p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">Esempio di annuncio pronto da pubblicare</h2>
          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per impianti compostaggio. Vorrei foto panoramiche, video breve e immagini dei punti principali: cumuli, piazzali, aree operative, accessi, recinzioni e coperture. Il materiale servirà per valutare la situazione, confrontarmi con tecnici o collaboratori e capire meglio come organizzare eventuali interventi. Indicherò zona, orari disponibili, referente sul posto e urgenza.”
            </p>
          </div>
          <p className="mt-6 leading-8 text-gray-300">Un annuncio ben scritto dovrebbe contenere luogo o zona, tipo di area, obiettivo, punti da documentare, materiale desiderato, urgenza, disponibilità oraria, eventuale referente e limiti di accesso. Se possibile, conviene aggiungere una descrizione concreta come: vorrei foto panoramiche, dettagli di cumuli, piazzali, aree operative, accessi, recinzioni e coperture, video breve e consegna ordinata per condividere il materiale con i tecnici.</p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-xl font-semibold">Foto panoramiche</h3>
            <p className="leading-7 text-gray-300">Utili per mostrare contesto, accessi, dimensioni e rapporto tra l area principale e gli elementi vicini.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-xl font-semibold">Dettagli visivi</h3>
            <p className="leading-7 text-gray-300">Utili per evidenziare punti specifici, parti alte, aree difficili da raggiungere, danni o elementi da confrontare.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-xl font-semibold">Video ordinato</h3>
            <p className="leading-7 text-gray-300">Utile per spiegare il percorso, la posizione dei punti principali e la situazione generale in modo comprensibile.</p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Sicurezza, privacy e fattibilità</h2>
          <p className="mb-5 leading-8 text-gray-300">Un altro elemento da considerare è la privacy. Se nelle riprese possono comparire persone, targhe, proprietà vicine o aree sensibili, bisogna gestire il servizio con attenzione. Il cliente dovrebbe indicare eventuali limiti e il pilota dovrebbe chiarire come intende evitare immagini non necessarie o trattare il materiale consegnato.</p>
          <p className="mb-5 leading-8 text-gray-300">Per impianti compostaggio, anche la tempistica può fare la differenza. Dopo un evento atmosferico, dopo una segnalazione o prima di una riunione, il cliente può avere urgenza. In altri casi, invece, è meglio aspettare luce favorevole, meteo stabile o un orario in cui l area sia più libera. Specificare la scadenza aiuta il pilota a capire se può realmente prendere l incarico.</p>
          <p className="leading-8 text-gray-300">Il cliente non deve conoscere tutti i termini tecnici. Può descrivere il problema con parole semplici. Sarà il pilota a fare domande, proporre soluzioni e chiarire cosa è possibile realizzare. Questa è la forza di una piattaforma verticale: trasforma una ricerca vaga in una conversazione più professionale.</p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Come confrontare le candidature</h2>
            <p className="mb-5 leading-8 text-gray-300">Per i clienti, invece, la piattaforma evita di dover cercare a caso tra siti, social e contatti sparsi. Pubblicare una richiesta permette di mettere nero su bianco il bisogno e aspettare candidature da chi è interessato. Questo non garantisce automaticamente il risultato, ma rende il processo più ordinato e misurabile.</p>
            <p className="mb-5 leading-8 text-gray-300">Nel confronto tra candidature, non guardare solo il prezzo. Valuta chiarezza, esperienza, disponibilità, qualità della comunicazione, esempi di lavori simili, consegna proposta e attenzione alla sicurezza. Per impianti compostaggio, un prezzo troppo basso ma senza dettagli può diventare meno utile di una proposta leggermente più alta ma ben spiegata.</p>
            <p className="leading-8 text-gray-300">Una volta scelto il pilota, è utile confermare per iscritto obiettivo, orario, punto di incontro, referente, consegna, formato del materiale e limiti del servizio. Così entrambe le parti sanno cosa aspettarsi. DroneGuard favorisce il contatto, ma la qualità del lavoro dipende anche da una comunicazione chiara tra cliente e professionista.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">Valuta questi aspetti</h3>
            <ul className="space-y-4 text-gray-300">
              <li>✅ risposta chiara e non generica</li>
              <li>✅ esperienza in lavori simili a impianti compostaggio</li>
              <li>✅ attenzione a sicurezza, meteo e privacy</li>
              <li>✅ formato della consegna e tempi realistici</li>
              <li>✅ disponibilità a fare domande prima del servizio</li>
              <li>✅ prezzo coerente con complessità e materiale richiesto</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Dopo il servizio: usa bene foto e video</h2>
          <p className="mb-5 leading-8 text-gray-300">Dopo il servizio, il materiale può essere archiviato per confronti futuri. Nel tempo, ripetere una ripresa nello stesso punto può mostrare cambiamenti, avanzamenti, danni, miglioramenti o manutenzioni eseguite. Questo è utile soprattutto per aree estese, coperture, cantieri, terreni, impianti e strutture difficili da osservare da terra.</p>
          <p className="mb-5 leading-8 text-gray-300">Una pagina dedicata a impianti compostaggio lavora quindi su due obiettivi: portare traffico qualificato e spiegare al visitatore cosa fare subito. Il cliente deve capire che può registrarsi, usare i crediti gratuiti, pubblicare il lavoro e scegliere il candidato. Il pilota deve capire che può iscriversi, ricevere crediti gratuiti e candidarsi agli annunci compatibili con la propria esperienza.</p>
          <p className="leading-8 text-gray-300">Il risultato migliore nasce quando cliente e pilota collaborano. Il cliente spiega il contesto e l uso finale del materiale; il pilota valuta fattibilità, sicurezza e modalità. Così foto e video non restano immagini casuali, ma diventano documentazione utile per decidere, mostrare, confrontare e comunicare.</p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-3xl font-bold">Perché questa ricerca porta clienti più qualificati</h2>
          <p className="mb-5 leading-8 text-gray-300">Il linguaggio deve restare concreto. Non servono promesse esagerate: servono indicazioni pratiche, esempi, limiti chiari e invito all azione. Chi arriva su DroneGuard deve sentirsi guidato: descrivi il lavoro, pubblica la richiesta, confronta le risposte, scegli il pilota e organizza il servizio.</p>
          <p className="mb-5 leading-8 text-gray-300">Per impianti compostaggio, DroneGuard può essere il punto di partenza per trasformare un bisogno visivo in una richiesta professionale. Che si tratti di controllo, promozione, documentazione, sopralluogo, ispezione visiva o supporto a una valutazione, la piattaforma aiuta a trovare piloti drone e a creare un contatto più ordinato tra chi cerca e chi offre il servizio.</p>
          <p className="leading-8 text-gray-300">
            Questa pagina è pensata per chi è un cliente che cerca rapidamente un professionista. Il testo accompagna l utente dalla ricerca iniziale fino all azione concreta: registrarsi, pubblicare il lavoro, spiegare il bisogno e scegliere il candidato più adatto.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">Domande frequenti</h2>
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Posso usare DroneGuard per impianti compostaggio?</h3>
              <p className="leading-7 text-gray-300">Sì. Puoi pubblicare una richiesta dedicata a impianti compostaggio, indicare luogo, obiettivo e materiale richiesto, poi valutare le candidature dei piloti drone interessati.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Quanto costa pubblicare una richiesta?</h3>
              <p className="leading-7 text-gray-300">Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione, così possono iniziare a testare la piattaforma.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">I piloti pagano per candidarsi?</h3>
              <p className="leading-7 text-gray-300">Sì. Rispondere o candidarsi a un annuncio costa 5 crediti. I nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Che materiale posso chiedere?</h3>
              <p className="leading-7 text-gray-300">Puoi chiedere foto panoramiche, video, dettagli ravvicinati e documentazione ordinata dei punti più importanti, come cumuli, piazzali, aree operative, accessi, recinzioni e coperture.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Il drone sostituisce un tecnico?</h3>
              <p className="leading-7 text-gray-300">No. Il drone fornisce documentazione visiva. Perizie, certificazioni, diagnosi tecniche e decisioni operative devono essere svolte da professionisti qualificati.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Il volo è sempre possibile?</h3>
              <p className="leading-7 text-gray-300">No. Il pilota deve valutare sicurezza, meteo, ostacoli, persone presenti, privacy, area di volo e regole applicabili prima di confermare il servizio.</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">Trova un pilota drone per impianti compostaggio</h2>
          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta dettagliata e ricevi candidature da piloti interessati. Che tu debba organizzare impianti compostaggio, preparare un sopralluogo, documentare una situazione o creare materiale visivo, una richiesta chiara aumenta le possibilità di trovare il professionista giusto.
          </p>
          <Link href="/register">
            <button className="rounded-xl bg-[#0B0F2A] px-6 py-3 font-semibold text-white transition hover:bg-[#11183f]">
              Inizia ora
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
