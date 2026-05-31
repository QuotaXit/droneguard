import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per perizie immobiliari | DroneGuard",
  description:
    "Trova piloti drone per perizie immobiliari, sopralluoghi tecnici, controlli su tetti, facciate, coperture, terreni e documentazione visiva di immobili."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per immobili e perizie
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per perizie immobiliari
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi effettuare una perizia immobiliare, un sopralluogo tecnico, una
            verifica visiva su un edificio, un controllo di tetti, facciate,
            balconi, terrazzi, gronde, coperture, terreni o aree difficili da
            raggiungere? Con DroneGuard puoi pubblicare una richiesta e trovare
            piloti drone disponibili per realizzare foto aeree, video tecnici e
            documentazione visiva utile a proprietari, tecnici, agenzie
            immobiliari, amministratori, periti, geometri, architetti, ingegneri,
            imprese e consulenti.
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
              Perizie immobiliari
            </h2>
            <p className="text-gray-300">
              Richiedi immagini e video dall’alto per documentare lo stato di un
              immobile, una copertura, una facciata, un terreno o una struttura.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Sopralluoghi tecnici
            </h2>
            <p className="text-gray-300">
              Ottieni materiale visivo utile per tecnici, periti, amministratori,
              agenzie immobiliari, imprese e proprietari.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti drone disponibili
            </h2>
            <p className="text-gray-300">
              Pubblica la tua esigenza, indica zona e tipo di immobile, e ricevi
              candidature da operatori drone interessati al servizio.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare un drone per una perizia immobiliare
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Durante una perizia immobiliare può essere necessario osservare
              parti dell’immobile che non sono facilmente visibili da terra. Tetti,
              coperture, gronde, facciate alte, balconi, terrazzi, cortili interni,
              terreni, confini e aree esterne possono richiedere un punto di vista
              più ampio e dettagliato.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può fornire foto e video utili a documentare lo stato
              dell’immobile, raccogliere materiale visivo da consegnare a un
              tecnico, mostrare dettagli difficili da raggiungere, confrontare la
              situazione prima e dopo un intervento e supportare relazioni,
              valutazioni, sopralluoghi e richieste di preventivo.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi entrare in contatto con piloti drone disponibili
              per supportare perizie immobiliari, controlli visivi, documentazione
              fotografica, video tecnici e rilievi aerei su immobili residenziali,
              commerciali, industriali e terreni.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per perizie immobiliari
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree per perizie immobiliari</li>
              <li>✅ Video tecnici di immobili e fabbricati</li>
              <li>✅ Controllo visivo di tetti e coperture</li>
              <li>✅ Ispezione facciate, balconi e terrazzi</li>
              <li>✅ Riprese di gronde, cornicioni e lastrici solari</li>
              <li>✅ Documentazione per tecnici e amministratori</li>
              <li>✅ Materiale visivo per relazioni e valutazioni</li>
              <li>✅ Riprese di terreni, confini e aree esterne</li>
              <li>✅ Supporto per immobili residenziali e industriali</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Sopralluogo immobiliare con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un sopralluogo immobiliare con drone può essere utile quando serve una
            visione più completa dell’edificio o dell’area da valutare. Le immagini
            dall’alto possono mostrare coperture, terrazzi, cortili, facciate,
            gronde, camini, lucernari, pannelli fotovoltaici, aree verdi,
            parcheggi, accessi, confini e parti non semplici da osservare da terra.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può essere usato su condomini, ville, palazzi, fabbricati
            rurali, capannoni, immobili commerciali, strutture industriali, aree
            esterne, terreni edificabili e immobili da vendere, acquistare,
            ristrutturare o valutare.
          </p>

          <p className="leading-8 text-gray-300">
            Il drone non sostituisce il lavoro del tecnico abilitato, del perito o
            del professionista incaricato. Può però diventare uno strumento di
            supporto visivo molto utile per raccogliere immagini, video e dettagli
            da analizzare successivamente.
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
                Crea il tuo account come cliente, tecnico, amministratore,
                proprietario, agenzia immobiliare o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Ricevi crediti
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I clienti ricevono 10 crediti gratuiti e i piloti ricevono 50
                crediti dopo la registrazione.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi immobile, zona, parti da riprendere e materiale che vuoi
                ottenere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti la propria
                disponibilità.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per tetti, coperture e terrazzi
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Tetti, coperture e terrazzi sono tra le parti più importanti da
              documentare in una perizia immobiliare. Le riprese dall’alto possono
              mostrare lo stato generale della copertura, eventuali punti critici
              visibili, tegole danneggiate, gronde, canali di scolo, camini,
              lucernari, antenne, pannelli e altri elementi presenti sul tetto.
            </p>

            <p className="leading-8 text-gray-300">
              Questo materiale può essere utile per proprietari, tecnici,
              amministratori di condominio, imprese di manutenzione, agenzie
              immobiliari e consulenti che devono valutare un immobile o
              documentarne lo stato.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per facciate, balconi e parti esterne
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le facciate possono presentare crepe, distacchi, macchie, parti
              ammalorate, cornicioni da verificare, balconi da osservare e zone
              alte difficili da controllare. Il drone può aiutare a ottenere
              immagini da diverse angolazioni, utili come prima documentazione
              visiva.
            </p>

            <p className="leading-8 text-gray-300">
              Le riprese possono essere usate per confronti, relazioni, richieste
              di preventivo, valutazioni successive, dialogo con imprese e
              documentazione da condividere con il professionista incaricato.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto e video per relazioni, valutazioni e archivi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            In una perizia immobiliare è importante avere materiale chiaro,
            ordinato e facilmente consultabile. Le fotografie aeree possono essere
            inserite in relazioni, fascicoli, email, presentazioni, archivi
            digitali, documentazioni tecniche o comunicazioni tra proprietari,
            agenzie, amministratori, imprese e professionisti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il video può essere utile quando serve mostrare un percorso visivo:
            dall’intero immobile al dettaglio della copertura, dalla facciata al
            terrazzo, dal cortile interno al terreno, fino alle parti più difficili
            da osservare da terra. Questo permette di spiegare meglio ciò che è
            stato ripreso durante il sopralluogo.
          </p>

          <p className="leading-8 text-gray-300">
            Pubblicando una richiesta su DroneGuard puoi indicare se ti servono
            solo foto, solo video, materiale grezzo, immagini selezionate, cartelle
            ordinate per zona o contenuti da consegnare a un tecnico incaricato.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Immobili residenziali
            </h2>
            <p className="text-gray-300">
              Riprese aeree per ville, appartamenti, condomini, palazzi,
              coperture, terrazzi, cortili, giardini e parti esterne.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Immobili commerciali
            </h2>
            <p className="text-gray-300">
              Documentazione visiva per negozi, uffici, strutture ricettive,
              capannoni, magazzini, parcheggi e aree produttive.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Terreni e aree esterne
            </h2>
            <p className="text-gray-300">
              Foto e video per terreni, lotti, confini, accessi, aree agricole,
              spazi esterni e immobili con grandi superfici.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta per una perizia immobiliare
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            tipo di immobile e le parti da riprendere. Puoi indicare città, zona,
            tipologia di edificio, altezza indicativa, presenza di cortili, tetti,
            terrazzi, facciate, gronde, balconi, coperture, terreni, confini o
            aree esterne non facilmente raggiungibili.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se il materiale serve a un tecnico, a un perito, a
            un amministratore, a un’agenzia immobiliare, a un’impresa, a un
            proprietario o a un consulente. Puoi anche indicare se vuoi foto
            dettagliate, video panoramico, immagini di particolari punti, materiale
            grezzo o una selezione ordinata delle riprese migliori.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere informazioni pratiche come accesso all’area, spazio per
            il decollo, presenza di persone, orari preferiti, eventuali ostacoli,
            autorizzazioni già disponibili e necessità di coordinarsi con il
            tecnico, il proprietario o l’amministratore.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per perizia immobiliare
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di supporto a una
              perizia immobiliare su un condominio. Mi servono riprese della
              copertura, delle gronde, dei cornicioni, delle facciate, dei balconi,
              del cortile interno e delle parti esterne dell’edificio. Il materiale
              verrà usato da un tecnico per documentazione visiva, relazione e
              valutazione dello stato dell’immobile.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            immobile, le aree da riprendere, il risultato desiderato e l’uso finale
            del materiale.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per agenzie immobiliari, tecnici e proprietari
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese drone possono essere richieste da molte figure diverse. Un
            proprietario può aver bisogno di documentare lo stato della propria
            casa, un’agenzia immobiliare può voler mostrare meglio un immobile, un
            tecnico può richiedere immagini di supporto, un amministratore può
            voler verificare parti comuni e un’impresa può avere bisogno di
            materiale visivo prima di proporre un intervento.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            In tutti questi casi DroneGuard aiuta a pubblicare la richiesta e a
            ricevere candidature da piloti drone disponibili. Il cliente può
            spiegare il lavoro, indicare la zona, descrivere il risultato atteso e
            scegliere il professionista più adatto.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma non sostituisce il rapporto diretto tra cliente e
            professionista, ma rende più semplice trovare operatori drone
            interessati a servizi immobiliari, tecnici e documentali.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Vantaggi delle riprese drone per immobili
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il principale vantaggio del drone è la possibilità di osservare
              l’immobile da punti di vista difficili da ottenere con una semplice
              visita da terra. Questo può rendere più chiara la situazione generale
              e aiutare a individuare aree da approfondire.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini possono essere archiviate, condivise, confrontate nel
              tempo e utilizzate come supporto visivo per discussioni tecniche,
              preventivi, valutazioni e comunicazioni tra le parti coinvolte.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Limiti e responsabilità
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le riprese drone sono un supporto visivo. Le valutazioni tecniche,
              le certificazioni, le relazioni, le conclusioni della perizia e le
              responsabilità professionali restano sempre in capo ai soggetti
              abilitati e incaricati.
            </p>

            <p className="leading-8 text-gray-300">
              Il pilota drone può fornire materiale fotografico e video, mentre il
              tecnico o il perito interpreta i dati visivi secondo le proprie
              competenze e responsabilità.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per perizie immobiliari?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per perizie immobiliari può variare in
            base alla zona, alla durata delle riprese, alla complessità
            dell’immobile, al numero di parti da documentare, al tipo di materiale
            richiesto e alla consegna finale. Un breve sopralluogo fotografico può
            avere un costo diverso rispetto a una documentazione completa con foto,
            video e più angolazioni.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il tipo di immobile può incidere. Una villa, un condominio alto,
            una facciata complessa, una copertura industriale, un terreno esteso o
            un cortile interno richiedono tempi e organizzazione diversi. Più la
            richiesta è chiara, più sarà semplice ricevere candidature coerenti.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo fisso. La piattaforma permette di
            pubblicare il lavoro e ricevere candidature da piloti drone
            interessati, così cliente e professionista possono accordarsi sul
            servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso trovare un pilota drone per una perizia immobiliare?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta e ricevere
                candidature da piloti drone disponibili per foto e video di supporto
                a perizie immobiliari e sopralluoghi tecnici.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce il tecnico o il perito?
              </h3>
              <p className="text-gray-300">
                No, il drone è uno strumento di supporto visivo. Le valutazioni,
                le relazioni e le responsabilità tecniche restano sempre in capo ai
                professionisti incaricati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere foto dettagliate di tetti e facciate?
              </h3>
              <p className="text-gray-300">
                Sì, puoi indicare le parti da riprendere e il tipo di materiale che
                ti serve, ad esempio foto, video, dettagli, panoramiche generali o
                materiale ordinato per zone.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare le immagini per una relazione immobiliare?
              </h3>
              <p className="text-gray-300">
                Sì, le immagini possono essere usate come supporto visivo per
                relazioni, valutazioni, confronti, archivi e comunicazioni tra
                cliente, tecnico e altri soggetti coinvolti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente il servizio?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone. Il servizio
                viene svolto dal professionista scelto dal cliente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare una richiesta?
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
                Sì, rispondere o candidarsi a un annuncio costa 5 crediti. I nuovi
                piloti ricevono 50 crediti gratuiti dopo la registrazione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per perizie immobiliari
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video tecnici, sopralluoghi,
            documentazione visiva e materiale di supporto per perizie immobiliari,
            immobili, condomini, coperture, facciate, tetti, terrazzi, terreni e
            aree esterne.
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