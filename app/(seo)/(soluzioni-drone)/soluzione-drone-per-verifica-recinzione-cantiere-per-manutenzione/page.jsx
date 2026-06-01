import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Soluzione drone per verifica recinzione cantiere per manutenzione | DroneGuard",
  description: "Soluzione drone per verifica recinzione cantiere per manutenzione: pubblica una richiesta su DroneGuard e trova piloti drone per foto, video, sopralluoghi, documentazione visiva e servizi aerei per verifica recinzione cantiere, utili a imprese e coordinatori sicurezza."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Nuove soluzioni drone per clienti e aziende
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Soluzione drone per verifica recinzione cantiere per manutenzione: pubblica il lavoro e scegli il pilota
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            La soluzione drone per verifica recinzione cantiere per manutenzione nasce per chi ha bisogno di immagini chiare, video dall alto e documentazione visiva comprensibile senza partire da ricerche generiche o contatti casuali. In molti casi il problema è semplice da spiegare a voce ma difficile da mostrare: un punto alto, un area estesa, una copertura, un terreno, un impianto, un piazzale o una struttura che non si vede bene da terra. Con DroneGuard il cliente può pubblicare una richiesta mirata, indicare l obiettivo e ricevere candidature da piloti drone interessati. Il drone è utile quando serve una prospettiva più ampia, una sequenza di immagini ordinate o un video che faccia capire il rapporto tra più punti di un area, di un edificio, di un terreno o di una struttura.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Pubblica la richiesta
              </button>
            </Link>
            <Link href="/come-funziona">
              <button className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Come funziona
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Richiesta mirata</h2>
            <p className="leading-7 text-gray-300">Descrivi luogo, obiettivo, urgenza e materiale desiderato. Una richiesta chiara aiuta i piloti a capire se possono candidarsi e con quale proposta.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Materiale utile</h2>
            <p className="leading-7 text-gray-300">Puoi chiedere foto, video, dettagli e panoramiche. Per verifica recinzione cantiere per manutenzione conviene spiegare se il materiale servirà per preventivo, manutenzione, presentazione o archivio.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Contatto ordinato</h2>
            <p className="leading-7 text-gray-300">DroneGuard mette in contatto clienti e piloti drone. Il cliente pubblica il lavoro, i piloti interessati si candidano e il committente sceglie.</p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Quando usare una soluzione drone per verifica recinzione cantiere per manutenzione</h2>
            <p className="mb-5 leading-8 text-gray-300">Questa pagina è pensata per intercettare chi cerca un servizio concreto nel settore cantieri e rilievi. Non si limita a ripetere parole chiave, ma spiega come preparare una richiesta utile per imprese e coordinatori sicurezza. Una buona pagina SEO deve portare a un azione reale: registrarsi, descrivere il lavoro, chiarire cosa serve e scegliere il candidato più adatto tra quelli disponibili.</p>
            <p className="mb-5 leading-8 text-gray-300">Per verifica recinzione cantiere per manutenzione, la vista dall alto può aiutare a documentare reti, pannelli, accessi, varchi, perimetro, segnalazioni e zone confinanti. Questo tipo di materiale può servire prima di una manutenzione, prima di una vendita, prima di un intervento, dopo un danno, durante una valutazione tecnica o per creare contenuti promozionali più completi. La cosa importante è spiegare al pilota non solo cosa deve riprendere, ma anche perché quelle immagini servono.</p>
            <p className="mb-5 leading-8 text-gray-300">Molte richieste falliscono perché sono troppo generiche. Scrivere soltanto mi serve un drone non basta. Una richiesta efficace per verifica recinzione cantiere per manutenzione dovrebbe indicare città o zona, tipo di area, obiettivo, punti da documentare, urgenza, materiale desiderato, eventuale referente sul posto e limiti di accesso. In questo modo il pilota può valutare meglio distanza, complessità, durata e consegna.</p>
            <p className="leading-8 text-gray-300">La documentazione con drone può essere utile quando per programmare la manutenzione. In questi casi il cliente può avere bisogno di immagini panoramiche per capire l insieme, dettagli ravvicinati per mostrare punti specifici e video brevi per far comprendere il collegamento tra più zone. Non sempre serve un montaggio complesso: spesso serve materiale chiaro, ordinato e facile da condividere.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">Cosa puoi far documentare</h3>
            <ul className="space-y-4 text-gray-300">
              <li>✅ foto panoramiche per capire il contesto di verifica recinzione cantiere per manutenzione</li>
              <li>✅ dettagli ravvicinati di reti, pannelli, accessi, varchi, perimetro, segnalazioni e zone confinanti</li>
              <li>✅ video brevi dall alto per mostrare collegamenti e proporzioni</li>
              <li>✅ materiale ordinato da condividere con tecnici, imprese, clienti o amministratori</li>
              <li>✅ documentazione prima e dopo un intervento, quando utile</li>
              <li>✅ immagini per preventivi, presentazioni, archivi interni o contenuti promozionali</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Perché questa pagina è utile per cantieri e rilievi</h2>
          <p className="mb-5 leading-8 text-gray-300">Nel caso di verifica recinzione cantiere, il drone non deve essere visto solo come strumento spettacolare. Il valore vero è la chiarezza. Un immagine aerea può far capire posizione, proporzioni, accessi, ostacoli, confini visivi, parti alte, aree nascoste e relazioni tra più elementi. Questo aiuta il cliente a parlare meglio con tecnici, imprese, amministratori, assicurazioni, responsabili interni o potenziali acquirenti.</p>
          <p className="mb-5 leading-8 text-gray-300">DroneGuard rende più ordinato il contatto tra domanda e offerta. Il cliente pubblica il lavoro, i piloti interessati valutano se candidarsi e il committente può scegliere in base a disponibilità, chiarezza, esperienza, prezzo proposto e tipo di consegna. Per verifica recinzione cantiere per manutenzione, questo approccio è più utile di una ricerca casuale, perché la richiesta parte già con un obiettivo definito.</p>
          <p className="mb-5 leading-8 text-gray-300">Su DroneGuard il cliente può registrarsi e pubblicare una richiesta spiegando luogo, obiettivo, urgenza e materiale desiderato. I clienti ricevono 10 crediti gratuiti dopo la registrazione e pubblicare un lavoro costa 5 crediti.</p>
          <p className="leading-8 text-gray-300">I piloti drone possono registrarsi, ricevere 50 crediti gratuiti e candidarsi agli annunci compatibili con la propria zona e la propria esperienza. Rispondere o candidarsi a un annuncio costa 5 crediti per il pilota.</p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">Come funziona DroneGuard</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">1. Registrati</h3>
              <p className="text-sm leading-6 text-gray-300">Crea un account come cliente, azienda, tecnico, proprietario o pilota drone.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-green-400">2. Usa i crediti</h3>
              <p className="text-sm leading-6 text-gray-300">I clienti ricevono 10 crediti gratuiti. I piloti ricevono 50 crediti gratuiti dopo la registrazione.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-green-400">3. Pubblica il lavoro</h3>
              <p className="text-sm leading-6 text-gray-300">Pubblicare una richiesta costa 5 crediti. Spiega il luogo e cosa deve essere ripreso.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-green-400">4. Scegli il pilota</h3>
              <p className="text-sm leading-6 text-gray-300">I piloti interessati possono candidarsi. Rispondere a un annuncio costa 5 crediti.</p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">Per clienti, tecnici e aziende</h2>
            <p className="mb-5 leading-8 text-gray-300">La piattaforma non impone un prezzo unico. Cliente e professionista possono confrontarsi su tempi, consegna, modalità operative, limiti del servizio e compenso, scegliendo la soluzione più adatta al lavoro richiesto.</p>
            <p className="mb-5 leading-8 text-gray-300">Per preparare bene una richiesta di verifica recinzione cantiere per manutenzione, conviene dividere il bisogno in tre parti. La prima è il contesto: edificio, terreno, impianto, struttura, area esterna, cantiere, attività ricettiva o zona comunale. La seconda è l obiettivo: controllo visivo, documentazione, promozione, preventivo, confronto tecnico, archivio o supporto a una decisione. La terza è la consegna: foto, video, dettagli, cartelle ordinate, riprese da più lati o materiale pronto da condividere.</p>
            <p className="leading-8 text-gray-300">Se il materiale riguarda reti, pannelli, accessi, varchi, perimetro, segnalazioni e zone confinanti, il cliente dovrebbe indicare quali punti sono più importanti. Non serve usare termini perfetti, ma serve essere concreti. Si può scrivere, ad esempio, che servono foto del lato nord, immagini del tetto, riprese del piazzale, video dell accesso principale, dettagli delle zone danneggiate o panoramiche per mostrare l intera area.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">Per piloti drone e operatori</h2>
            <p className="mb-5 leading-8 text-gray-300">Una pagina dedicata a verifica recinzione cantiere per manutenzione deve parlare sia ai clienti sia ai piloti. Il cliente deve capire cosa può chiedere e come pubblicare un lavoro. Il pilota deve capire che tipo di richiesta potrebbe ricevere, quali informazioni valutare e come presentare una candidatura professionale. Questo doppio linguaggio rende la pagina più utile e meno artificiale.</p>
            <p className="mb-5 leading-8 text-gray-300">Per imprese e coordinatori sicurezza, la rapidità può essere importante, ma non deve eliminare la precisione. Una ripresa veloce può essere utile per farsi un idea, ma quando il materiale deve essere usato per preventivi, riunioni, assicurazioni o presentazioni, conviene chiedere una consegna più ordinata. Il pilota può proporre foto panoramiche, dettagli ravvicinati, video brevi e una struttura di file comprensibile.</p>
            <p className="leading-8 text-gray-300">Un altro aspetto importante è la comparabilità. Riprendere la stessa area in momenti diversi permette di confrontare avanzamento, degrado, danni, manutenzioni, stato prima e dopo un intervento o cambiamenti stagionali. Per verifica recinzione cantiere per manutenzione, questa possibilità può essere molto utile quando il problema non si esaurisce in una singola foto ma richiede un archivio visivo nel tempo.</p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Come scrivere un annuncio efficace</h2>
          <p className="mb-5 leading-8 text-gray-300">Il volo deve sempre essere valutato dal pilota in base a sicurezza, meteo, ostacoli, persone presenti, privacy, spazio disponibile e regole applicabili. Per questo è meglio non promettere risultati impossibili prima di aver compreso bene il contesto operativo.</p>
          <p className="mb-5 leading-8 text-gray-300">DroneGuard serve a mettere in contatto cliente e pilota, ma non sostituisce valutazioni tecniche, perizie, diagnosi strutturali, certificazioni o decisioni operative che spettano a professionisti qualificati.</p>
          <p className="mb-5 leading-8 text-gray-300">Il cliente deve descrivere in modo veritiero l area, indicare eventuali limiti di accesso e chiarire l uso finale del materiale. Il pilota deve spiegare cosa può fare, cosa deve verificare e quali condizioni rendono il servizio fattibile.</p>
          <p className="leading-8 text-gray-300">Il costo di un servizio drone per verifica recinzione cantiere per manutenzione dipende da molti fattori: distanza del pilota, complessità del volo, durata, numero di punti da documentare, tipo di consegna, urgenza, eventuale montaggio video, ripetizione delle riprese e difficoltà di accesso. Per questo DroneGuard non promette un prezzo fisso, ma favorisce il confronto tra richiesta e candidatura.</p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">Esempio di richiesta pronta</h2>
          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">Cerco un pilota drone per verifica recinzione cantiere per manutenzione. Vorrei foto panoramiche, video dall alto e dettagli di reti, pannelli, accessi, varchi, perimetro, segnalazioni e zone confinanti. Il materiale mi serve per programmare la manutenzione, con consegna ordinata e facile da condividere.</p>
          </div>
          <p className="mt-6 leading-8 text-gray-300">Per imprese e coordinatori sicurezza, la piattaforma può diventare uno strumento pratico: non serve cercare numeri a caso, chiedere nei gruppi o spiegare cento volte lo stesso problema. Basta pubblicare una richiesta completa e lasciare che i piloti interessati valutino la candidatura. Questo semplifica il primo contatto e rende il processo più professionale.</p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">Materiale fotografico e video</h2>
            <p className="mb-5 leading-8 text-gray-300">Una richiesta ben scritta può ridurre incomprensioni sul preventivo. Se il cliente indica subito che vuole foto di reti, pannelli, accessi, varchi, perimetro, segnalazioni e zone confinanti, il pilota può stimare meglio il tempo necessario. Se invece la richiesta resta vaga, il professionista dovrà fare più domande e potrebbe non candidarsi. La chiarezza aiuta entrambe le parti.</p>
            <p className="mb-5 leading-8 text-gray-300">Per cantieri e rilievi, spesso il valore della ripresa non sta nella quantità di file, ma nella loro utilità. Dieci immagini ordinate possono essere più utili di cento foto casuali. Un video breve può spiegare meglio di una lunga registrazione non montata. Un dettaglio ravvicinato può servire solo se accompagnato da una panoramica che mostra dove si trova.</p>
            <p className="leading-8 text-gray-300">Quando pubblichi un lavoro su DroneGuard, puoi specificare se vuoi materiale grezzo o selezionato, se preferisci consegna tramite link, se il video deve essere montato, se servono riprese verticali per social o orizzontali per presentazioni, se vuoi immagini da condividere con un tecnico o materiale promozionale per il pubblico.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">Sicurezza, privacy e limiti</h2>
            <p className="mb-5 leading-8 text-gray-300">Nel caso di verifica recinzione cantiere per manutenzione, può essere utile allegare una descrizione del percorso, del punto di accesso, dell area in cui il pilota potrà operare e degli eventuali vincoli. Ad esempio orari disponibili, presenza di persone, attività in corso, cancelli, cortili, aree private, traffico interno, mezzi in movimento o zone da non riprendere.</p>
            <p className="mb-5 leading-8 text-gray-300">Per i piloti, una candidatura efficace dovrebbe evitare frasi generiche. Meglio indicare zona operativa, esperienza simile, tipo di drone o attrezzatura disponibile, formato di consegna, tempi indicativi, limiti da verificare e domande utili per capire il lavoro. Chi cerca verifica recinzione cantiere per manutenzione apprezza risposte concrete e ordinate.</p>
            <p className="leading-8 text-gray-300">Per i clienti, la scelta del pilota non dovrebbe basarsi solo sul prezzo. Bisogna valutare chiarezza della risposta, attenzione alla sicurezza, disponibilità, esempi di lavori simili, comprensione dell obiettivo e capacità di consegnare materiale utile. Un prezzo basso senza spiegazioni può essere meno interessante di una proposta leggermente più alta ma completa.</p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Quanto può costare un servizio drone per verifica recinzione cantiere per manutenzione</h2>
          <p className="mb-5 leading-8 text-gray-300">Il drone può essere usato in molti modi: per controllo visivo, per documentazione, per marketing, per confronto tecnico, per archivio lavori, per supporto a riunioni o per descrivere meglio un problema. Per verifica recinzione cantiere per manutenzione, il cliente dovrebbe scegliere l uso principale e comunicarlo subito, perché da quello dipende il tipo di ripresa.</p>
          <p className="mb-5 leading-8 text-gray-300">Se il materiale deve servire a una perizia, a una diagnosi tecnica o a un documento ufficiale, è necessario coinvolgere professionisti qualificati. Il pilota può produrre immagini e video, ma la lettura tecnica dei dati deve essere fatta da chi ha competenza specifica. Questa distinzione rende la comunicazione più corretta e protegge sia cliente sia pilota.</p>
          <p className="mb-5 leading-8 text-gray-300">Una buona pagina SEO su verifica recinzione cantiere per manutenzione deve usare parole semplici, esempi concreti e inviti chiari. Deve spiegare cosa si può documentare, quando conviene usare il drone, cosa scrivere nella richiesta, quali limiti considerare e come funziona DroneGuard. In questo modo la pagina non resta un testo vuoto, ma diventa una porta d ingresso verso una richiesta reale.</p>
          <p className="mb-5 leading-8 text-gray-300">Esempio di richiesta: cerco un pilota drone per verifica recinzione cantiere per manutenzione. Vorrei foto panoramiche, video dall alto e dettagli di reti, pannelli, accessi, varchi, perimetro, segnalazioni e zone confinanti. Il materiale mi serve per programmare la manutenzione, per condividerlo con le persone coinvolte e valutare meglio il lavoro da fare. Posso indicare un referente sul posto e specificare orari, accessi e zone da evitare.</p>
          <p className="leading-8 text-gray-300">Questo esempio funziona perché contiene contesto, obiettivo, materiale richiesto e uso finale. Il pilota può capire se la richiesta rientra nella sua esperienza, se deve fare domande, se servono verifiche preliminari e quale tipo di consegna proporre. Una richiesta chiara aumenta la qualità delle candidature.</p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Approfondimento 1: organizzare meglio verifica recinzione cantiere per manutenzione</h2>
          <p className="mb-5 leading-8 text-gray-300">Per ottenere un buon risultato con verifica recinzione cantiere per manutenzione, il cliente dovrebbe pensare al materiale finale prima ancora del volo. Se l obiettivo è un confronto tecnico, serviranno immagini ordinate e dettagli. Se l obiettivo è promozionale, serviranno inquadrature più pulite e una narrazione visiva. Se l obiettivo è manutentivo, serviranno punti riconoscibili e una sequenza logica.</p>
          <p className="leading-8 text-gray-300">Anche il pilota può lavorare meglio quando riceve un annuncio completo. Sapere che bisogna riprendere reti, pannelli, accessi, varchi, perimetro, segnalazioni e zone confinanti permette di stimare durata, percorso, distanza, ostacoli, consegna e limiti operativi. DroneGuard aiuta a trasformare questa preparazione in un contatto diretto tra cliente e professionista.</p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Approfondimento 2: organizzare meglio verifica recinzione cantiere per manutenzione</h2>
          <p className="mb-5 leading-8 text-gray-300">Per ottenere un buon risultato con verifica recinzione cantiere per manutenzione, il cliente dovrebbe pensare al materiale finale prima ancora del volo. Se l obiettivo è un confronto tecnico, serviranno immagini ordinate e dettagli. Se l obiettivo è promozionale, serviranno inquadrature più pulite e una narrazione visiva. Se l obiettivo è manutentivo, serviranno punti riconoscibili e una sequenza logica.</p>
          <p className="leading-8 text-gray-300">Anche il pilota può lavorare meglio quando riceve un annuncio completo. Sapere che bisogna riprendere reti, pannelli, accessi, varchi, perimetro, segnalazioni e zone confinanti permette di stimare durata, percorso, distanza, ostacoli, consegna e limiti operativi. DroneGuard aiuta a trasformare questa preparazione in un contatto diretto tra cliente e professionista.</p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Approfondimento 3: organizzare meglio verifica recinzione cantiere per manutenzione</h2>
          <p className="mb-5 leading-8 text-gray-300">Per ottenere un buon risultato con verifica recinzione cantiere per manutenzione, il cliente dovrebbe pensare al materiale finale prima ancora del volo. Se l obiettivo è un confronto tecnico, serviranno immagini ordinate e dettagli. Se l obiettivo è promozionale, serviranno inquadrature più pulite e una narrazione visiva. Se l obiettivo è manutentivo, serviranno punti riconoscibili e una sequenza logica.</p>
          <p className="leading-8 text-gray-300">Anche il pilota può lavorare meglio quando riceve un annuncio completo. Sapere che bisogna riprendere reti, pannelli, accessi, varchi, perimetro, segnalazioni e zone confinanti permette di stimare durata, percorso, distanza, ostacoli, consegna e limiti operativi. DroneGuard aiuta a trasformare questa preparazione in un contatto diretto tra cliente e professionista.</p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Approfondimento 4: organizzare meglio verifica recinzione cantiere per manutenzione</h2>
          <p className="mb-5 leading-8 text-gray-300">Per ottenere un buon risultato con verifica recinzione cantiere per manutenzione, il cliente dovrebbe pensare al materiale finale prima ancora del volo. Se l obiettivo è un confronto tecnico, serviranno immagini ordinate e dettagli. Se l obiettivo è promozionale, serviranno inquadrature più pulite e una narrazione visiva. Se l obiettivo è manutentivo, serviranno punti riconoscibili e una sequenza logica.</p>
          <p className="leading-8 text-gray-300">Anche il pilota può lavorare meglio quando riceve un annuncio completo. Sapere che bisogna riprendere reti, pannelli, accessi, varchi, perimetro, segnalazioni e zone confinanti permette di stimare durata, percorso, distanza, ostacoli, consegna e limiti operativi. DroneGuard aiuta a trasformare questa preparazione in un contatto diretto tra cliente e professionista.</p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Approfondimento 5: organizzare meglio verifica recinzione cantiere per manutenzione</h2>
          <p className="mb-5 leading-8 text-gray-300">Per ottenere un buon risultato con verifica recinzione cantiere per manutenzione, il cliente dovrebbe pensare al materiale finale prima ancora del volo. Se l obiettivo è un confronto tecnico, serviranno immagini ordinate e dettagli. Se l obiettivo è promozionale, serviranno inquadrature più pulite e una narrazione visiva. Se l obiettivo è manutentivo, serviranno punti riconoscibili e una sequenza logica.</p>
          <p className="leading-8 text-gray-300">Anche il pilota può lavorare meglio quando riceve un annuncio completo. Sapere che bisogna riprendere reti, pannelli, accessi, varchi, perimetro, segnalazioni e zone confinanti permette di stimare durata, percorso, distanza, ostacoli, consegna e limiti operativi. DroneGuard aiuta a trasformare questa preparazione in un contatto diretto tra cliente e professionista.</p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Approfondimento 6: organizzare meglio verifica recinzione cantiere per manutenzione</h2>
          <p className="mb-5 leading-8 text-gray-300">Per ottenere un buon risultato con verifica recinzione cantiere per manutenzione, il cliente dovrebbe pensare al materiale finale prima ancora del volo. Se l obiettivo è un confronto tecnico, serviranno immagini ordinate e dettagli. Se l obiettivo è promozionale, serviranno inquadrature più pulite e una narrazione visiva. Se l obiettivo è manutentivo, serviranno punti riconoscibili e una sequenza logica.</p>
          <p className="leading-8 text-gray-300">Anche il pilota può lavorare meglio quando riceve un annuncio completo. Sapere che bisogna riprendere reti, pannelli, accessi, varchi, perimetro, segnalazioni e zone confinanti permette di stimare durata, percorso, distanza, ostacoli, consegna e limiti operativi. DroneGuard aiuta a trasformare questa preparazione in un contatto diretto tra cliente e professionista.</p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">Approfondimento 7: organizzare meglio verifica recinzione cantiere per manutenzione</h2>
          <p className="mb-5 leading-8 text-gray-300">Per ottenere un buon risultato con verifica recinzione cantiere per manutenzione, il cliente dovrebbe pensare al materiale finale prima ancora del volo. Se l obiettivo è un confronto tecnico, serviranno immagini ordinate e dettagli. Se l obiettivo è promozionale, serviranno inquadrature più pulite e una narrazione visiva. Se l obiettivo è manutentivo, serviranno punti riconoscibili e una sequenza logica.</p>
          <p className="leading-8 text-gray-300">Anche il pilota può lavorare meglio quando riceve un annuncio completo. Sapere che bisogna riprendere reti, pannelli, accessi, varchi, perimetro, segnalazioni e zone confinanti permette di stimare durata, percorso, distanza, ostacoli, consegna e limiti operativi. DroneGuard aiuta a trasformare questa preparazione in un contatto diretto tra cliente e professionista.</p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">Domande frequenti</h2>
          <div className="space-y-5">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Posso pubblicare una richiesta per verifica recinzione cantiere per manutenzione?</h3>
              <p className="leading-7 text-gray-300">Sì. Puoi creare un annuncio su DroneGuard, descrivere il lavoro, indicare il materiale desiderato e ricevere candidature da piloti drone interessati.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Quanto costa pubblicare un lavoro?</h3>
              <p className="leading-7 text-gray-300">Pubblicare una richiesta costa 5 crediti. I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">I piloti hanno crediti gratuiti?</h3>
              <p className="leading-7 text-gray-300">Sì. I piloti ricevono 50 crediti gratuiti dopo la registrazione e rispondere a un annuncio costa 5 crediti.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Che materiale posso chiedere?</h3>
              <p className="leading-7 text-gray-300">Puoi chiedere foto panoramiche, video dall alto, dettagli ravvicinati e materiale ordinato relativo a reti, pannelli, accessi, varchi, perimetro, segnalazioni e zone confinanti.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Il drone sostituisce una perizia?</h3>
              <p className="leading-7 text-gray-300">No. Il drone fornisce documentazione visiva. Perizie, diagnosi tecniche e certificazioni devono essere svolte da professionisti qualificati.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Il volo è sempre possibile?</h3>
              <p className="leading-7 text-gray-300">No. Il pilota deve valutare sicurezza, meteo, ostacoli, privacy, persone presenti, spazio disponibile e regole applicabili.</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">Trova un pilota drone per verifica recinzione cantiere per manutenzione</h2>
          <p className="mb-6 max-w-3xl leading-8 text-gray-700">Registrati su DroneGuard, pubblica una richiesta chiara e confronta le candidature dei piloti interessati. Una soluzione drone per verifica recinzione cantiere per manutenzione può aiutarti a ottenere immagini più comprensibili, materiale ordinato e un contatto più professionale.</p>
          <Link href="/register">
            <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">Inizia ora</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
