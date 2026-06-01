import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per officine industriali | DroneGuard",
  description:
    "Drone per officine industriali: trova piloti drone per foto, video, ispezioni visive e documentazione di officine industriali, aree industriali, logistica, capannoni, piazzali e strutture operative."
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
            Drone per officine industriali: foto, video e controlli visivi dall'alto
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai bisogno di immagini chiare per officine industriali, aree produttive, capannoni, piazzali, accessi,
            coperture o spazi operativi difficili da valutare da terra? Con DroneGuard puoi pubblicare
            una richiesta e trovare piloti drone disponibili per realizzare foto, video e documentazione
            visiva dall'alto. Il drone può essere utile per aziende, tecnici, responsabili di stabilimento,
            property manager, imprese di manutenzione e operatori logistici che vogliono capire meglio lo
            stato di un'area prima di un intervento, di una vendita, di una presentazione o di una richiesta
            di preventivo.
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
              Contesto industriale
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di capannoni, piazzali, coperture, gru esterne, depositi, accessi e aree di lavorazione all'aperto. Una panoramica aerea aiuta a vedere insieme parti che da terra
              risultano separate, nascoste o difficili da confrontare.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Materiale utile
            </h2>
            <p className="leading-7 text-gray-300">
              Puoi chiedere foto panoramiche, video brevi, dettagli ravvicinati, riprese dei punti critici e
              materiale ordinato da condividere con tecnici, manutentori, clienti o direzione aziendale.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Contatto mirato
            </h2>
            <p className="leading-7 text-gray-300">
              DroneGuard mette in contatto chi cerca un servizio con piloti drone interessati. Il cliente pubblica
              la richiesta e può valutare le candidature ricevute.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere drone per officine industriali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In ambito industriale e logistico ci sono molte situazioni in cui una vista dall'alto può rendere
              più semplice capire lo stato reale di un'area. Un piazzale può sembrare ordinato da terra, ma
              dall'alto si possono osservare meglio spazi di manovra, zone di deposito, accessi, percorsi dei
              mezzi, coperture, recinzioni e punti in cui potrebbero essere necessari interventi. Per officine industriali,
              il drone può offrire una documentazione visiva rapida e comprensibile, utile quando bisogna
              spiegare una situazione a persone che non sono presenti sul posto.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Una richiesta può nascere prima di una manutenzione, dopo un evento atmosferico, durante la
              gestione di un immobile industriale, in fase di vendita o locazione, per una presentazione aziendale
              o per una valutazione interna. Foto e video permettono di mostrare proporzioni, accessi, ostacoli,
              superfici esterne, collegamenti tra aree e condizioni generali. Questo può aiutare l'azienda a
              preparare un confronto con fornitori, tecnici, imprese, assicurazioni o consulenti.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone non sostituisce una perizia tecnica, una verifica strutturale o un controllo eseguito da
              personale qualificato. Può però fornire una prima base visiva molto utile, soprattutto quando il
              problema riguarda aree ampie, punti alti, coperture, piazzali, zone esterne o parti difficili da
              osservare in modo completo da terra.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far documentare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ capannoni, piazzali, coperture, gru esterne, depositi, accessi e aree di lavorazione all'aperto</li>
              <li>✅ coperture, tettoie, gronde, pluviali e lucernari</li>
              <li>✅ piazzali, parcheggi, accessi e aree di manovra</li>
              <li>✅ recinzioni, confini, cancelli e zone perimetrali</li>
              <li>✅ danni visibili, parti deformate, ristagni o criticità esterne</li>
              <li>✅ foto e video da usare per preventivi o valutazioni interne</li>
              <li>✅ materiale promozionale per presentare l'azienda o l'immobile</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché il drone è utile in industria e logistica
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le aree industriali e logistiche sono spesso grandi, articolate e composte da più elementi: capannoni,
            piazzali, magazzini, banchine di carico, accessi per mezzi pesanti, tettoie, impianti esterni, zone di
            deposito e percorsi interni. Fotografare tutto solo da terra può risultare complicato, perché ogni
            immagine mostra un dettaglio ma non sempre fa capire il quadro generale. Il drone aiuta a costruire
            una visione d'insieme, mantenendo comunque la possibilità di riprendere dettagli specifici.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per officine, carpenterie, aziende meccaniche, manutentori e tecnici, avere immagini ordinate può velocizzare molte decisioni. Un responsabile può mostrare
            il problema alla direzione, un tecnico può preparare un sopralluogo più preciso, un'impresa può capire
            meglio le dimensioni dell'intervento e un cliente può vedere come si presenta l'area prima di una visita.
            Anche quando il lavoro finale dovrà essere eseguito da specialisti, la documentazione con drone può
            rendere più chiara la conversazione iniziale.
          </p>

          <p className="leading-8 text-gray-300">
            Un altro vantaggio è la possibilità di archiviare lo stato di un'area nel tempo. Ripetendo le riprese a
            distanza di mesi, si può confrontare l'evoluzione di una copertura, di un piazzale, di una zona di
            stoccaggio o di un cantiere interno. Questo non significa fare sorveglianza continua, ma creare una
            documentazione visiva utile per manutenzione, gestione e comunicazione aziendale.
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
                Crea un account come cliente, azienda, tecnico, proprietario, responsabile logistico o pilota drone.
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
                Pubblicare una richiesta costa 5 crediti. Descrivi luogo, obiettivo, urgenza e materiale richiesto.
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
              Per aziende e responsabili tecnici
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di chiedere un servizio con drone, prepara una descrizione semplice ma completa. Indica il tipo
              di area, la città, l'altezza indicativa delle strutture, la presenza di piazzali o mezzi in movimento,
              il motivo della richiesta e il materiale che ti serve. Per officine industriali, può essere utile specificare se
              vuoi una panoramica generale, dettagli di parti precise o immagini da usare in un confronto tecnico.
            </p>

            <p className="leading-8 text-gray-300">
              Aggiungi anche eventuali limiti pratici: orari di accesso, aree interdette, presenza di personale,
              necessità di coordinarsi con un referente interno, punti da evitare e zone dove il pilota potrà operare
              in sicurezza. Più informazioni fornisci, più il pilota potrà valutare correttamente fattibilità, tempi
              e modalità del servizio.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Per piloti drone e operatori professionali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Una candidatura efficace non deve essere generica. Spiega in quale zona operi, che tipo di esperienza
              hai con aree industriali o logistiche, quale materiale puoi consegnare e quali aspetti devono essere
              verificati prima del volo. In contesti come officine industriali, il cliente apprezza risposte chiare, concrete e
              orientate alla sicurezza.
            </p>

            <p className="leading-8 text-gray-300">
              Ricorda di valutare condizioni meteo, spazio disponibile, ostacoli, persone presenti, privacy,
              regolamenti applicabili e possibili interferenze con l'attività aziendale. Se il servizio richiede
              immagini ravvicinate di parti alte o zone complesse, chiarisci sempre cosa è possibile fare e cosa va
              verificato sul posto prima di promettere un risultato.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta efficace
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, evita richieste troppo brevi come "mi serve un drone". Scrivi invece
            cosa deve essere ripreso, perché ti serve il materiale e come verrà utilizzato. Ad esempio puoi indicare
            se le immagini serviranno per manutenzione, vendita, assicurazione, preventivo, documentazione interna,
            presentazione commerciale o confronto con un tecnico.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nel caso di officine industriali, specifica se il punto principale riguarda capannoni, piazzali, coperture, gru esterne, depositi, accessi e aree di lavorazione all'aperto. Se ci sono zone danneggiate,
            ristagni, infiltrazioni, parti sollevate, accessi difficili o aree da misurare visivamente, scrivilo nella
            richiesta. Il pilota potrà capire se servono foto panoramiche, dettagli ravvicinati, video di percorso o
            una sequenza di immagini ordinate per lato, reparto o zona.
          </p>

          <p className="leading-8 text-gray-300">
            Non dimenticare la parte pratica: indirizzo o zona, disponibilità oraria, referente sul posto, eventuali
            autorizzazioni interne, limiti di accesso e urgenza. Anche una richiesta SEO deve portare a una richiesta
            reale e chiara, perché DroneGuard funziona meglio quando il cliente sa spiegare il lavoro e il pilota può
            rispondere in modo preciso.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per officine industriali
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per documentare officine industriali in un'area aziendale. Vorrei foto panoramiche, video dall'alto e immagini dei punti più importanti: capannoni, piazzali, coperture, gru esterne, depositi, accessi e aree di lavorazione all'aperto. Il materiale servirà per una valutazione interna, per parlare con tecnici e imprese e per preparare eventuali interventi o presentazioni.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta di questo tipo è utile perché spiega il contesto, indica cosa deve essere ripreso e chiarisce
            l'uso finale del materiale. Il pilota può valutare meglio distanza, durata, complessità, rischi operativi,
            consegna richiesta e condizioni necessarie per svolgere il lavoro in modo ordinato.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per officine industriali?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base a diversi fattori: città, distanza del pilota, dimensione dell'area, durata
            del lavoro, complessità del volo, numero di punti da documentare, tipo di consegna e urgenza. Un breve
            video panoramico di un piazzale non ha lo stesso impegno di una documentazione completa di un grande
            stabilimento con più coperture, accessi e zone operative.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il materiale finale incide sul preventivo. Alcuni clienti chiedono solo foto e video grezzi, altri
            vogliono immagini selezionate, cartelle ordinate, video montato, riprese ripetute nel tempo o dettagli di
            singole parti. Prima di scegliere il pilota, conviene spiegare bene cosa ti aspetti e chiedere come verrà
            consegnato il materiale.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico per il servizio. La piattaforma serve a pubblicare la richiesta e
            ricevere candidature da piloti interessati. Cliente e professionista possono poi accordarsi direttamente
            su prezzo, tempi, modalità, consegna e limiti del lavoro.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare DroneGuard per officine industriali?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta e cercare piloti drone disponibili per foto, video e controlli visivi
                collegati a officine industriali, aree industriali, logistica e strutture esterne.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce un tecnico?
              </h3>
              <p className="text-gray-300">
                No. Il drone può fornire documentazione visiva, ma verifiche strutturali, perizie, misurazioni tecniche
                e decisioni operative devono essere svolte da professionisti qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Che materiale posso chiedere?
              </h3>
              <p className="text-gray-300">
                Puoi chiedere foto panoramiche, video dall'alto, dettagli ravvicinati, immagini dei punti critici e
                materiale ordinato per zona, lato o intervento da valutare.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare un lavoro?
              </h3>
              <p className="text-gray-300">
                Pubblicare una richiesta costa 5 crediti. I nuovi clienti ricevono 10 crediti gratuiti dopo la
                registrazione su DroneGuard.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                I piloti pagano per candidarsi?
              </h3>
              <p className="text-gray-300">
                Sì, rispondere o candidarsi a un annuncio costa 5 crediti. I nuovi piloti ricevono 50 crediti gratuiti
                dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il volo è sempre possibile?
              </h3>
              <p className="text-gray-300">
                No. Il pilota deve valutare sicurezza, meteo, ostacoli, persone presenti, privacy, area di volo e
                regole applicabili prima di confermare il servizio.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per officine industriali
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone disponibili per documentare
            officine industriali, aree industriali, piazzali logistici, capannoni, coperture, accessi, recinzioni, depositi e
            strutture esterne. La piattaforma ti aiuta a trasformare un'esigenza generica in una richiesta chiara
            e più facile da valutare.
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