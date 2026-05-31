import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per perizie edili | DroneGuard",
  description:
    "Trova piloti drone per perizie edili, sopralluoghi tecnici, controlli su tetti, facciate, coperture e documentazione visiva di immobili e cantieri."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per tecnici e perizie
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per perizie edili
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi effettuare una perizia edile, un sopralluogo tecnico, una verifica
            visiva su un immobile, un controllo su coperture, facciate, tetti,
            gronde, balconi, terrazzi o aree difficili da raggiungere? Con
            DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto aeree, video tecnici e documentazione
            visiva utile a professionisti, imprese, amministratori, proprietari e
            consulenti. Il drone può aiutare a osservare parti dell'edificio non
            facilmente visibili da terra, fornendo immagini chiare da usare come
            supporto per valutazioni, relazioni, confronti e documentazione.
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
              Sopralluoghi tecnici
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video dall'alto per osservare tetti, facciate,
              coperture, gronde, balconi, terrazzi e parti alte dell'edificio.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione visiva
            </h2>
            <p className="text-gray-300">
              Ottieni materiale fotografico e video da usare come supporto per
              relazioni, perizie, archivi, confronti e comunicazioni tecniche.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti drone disponibili
            </h2>
            <p className="text-gray-300">
              Pubblica la richiesta, indica zona e tipo di immobile, e ricevi
              candidature da operatori drone interessati al servizio.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per una perizia edile
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Durante una perizia edile può essere necessario osservare parti di un
              fabbricato che non sono semplici da raggiungere. Tetti, coperture,
              facciate alte, gronde, cornicioni, balconi, terrazzi, lastrici solari
              e parti esterne possono richiedere punti di vista diversi rispetto a
              quelli disponibili da terra.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può fornire immagini e video utili a documentare lo stato
              visivo dell'immobile, individuare elementi da approfondire, mostrare
              dettagli a tecnici e proprietari, confrontare condizioni prima e dopo
              un intervento e raccogliere materiale ordinato da inserire in una
              relazione o in un archivio fotografico.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi trovare piloti drone disponibili per affiancare
              tecnici, amministratori, imprese, geometri, architetti, ingegneri,
              periti, consulenti e proprietari che hanno bisogno di immagini aeree
              chiare e professionali.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per perizie edili
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree per perizie edili</li>
              <li>✅ Video tecnici di immobili e fabbricati</li>
              <li>✅ Controllo visivo di tetti e coperture</li>
              <li>✅ Ispezione facciate, gronde e cornicioni</li>
              <li>✅ Riprese di balconi, terrazzi e lastrici solari</li>
              <li>✅ Documentazione per tecnici e amministratori</li>
              <li>✅ Materiale per relazioni e confronti fotografici</li>
              <li>✅ Sopralluoghi su immobili residenziali e industriali</li>
              <li>✅ Supporto visivo per imprese, periti e consulenti</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Sopralluogo edile con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un sopralluogo edile con drone può essere utile quando serve una
            visione più completa dell'immobile. Le immagini dall'alto possono
            mostrare lo stato di una copertura, la disposizione dei tetti, la
            presenza di terrazzi, gronde, lucernari, canali di scolo, camini,
            impianti, pannelli fotovoltaici o altre parti che da terra risultano
            difficili da osservare.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può essere impiegato anche per facciate, balconi, cornicioni,
            cortili interni, coperture industriali, capannoni, condomini, ville,
            edifici storici, strutture commerciali e cantieri. Il materiale
            raccolto può aiutare il tecnico a valutare meglio la situazione e a
            spiegare al cliente cosa è stato osservato.
          </p>

          <p className="leading-8 text-gray-300">
            Il drone non sostituisce la perizia del professionista abilitato, ma
            può diventare uno strumento di supporto visivo molto utile per
            raccogliere immagini, video e dettagli da analizzare successivamente.
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
                Crea il tuo account come cliente, tecnico, amministratore, impresa
                o pilota drone.
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
              Drone per tetti, gronde e coperture
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Tetti, gronde e coperture sono tra le parti più richieste nelle
              perizie edili con supporto drone. Le riprese dall'alto possono
              mostrare tegole, canali di scolo, camini, lucernari, pannelli,
              infiltrazioni visibili, punti critici e condizioni generali della
              copertura.
            </p>

            <p className="leading-8 text-gray-300">
              Questo materiale può essere utile per tecnici, amministratori di
              condominio, imprese di manutenzione, proprietari e consulenti che
              devono valutare interventi o documentare una situazione esistente.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per facciate e parti esterne
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le facciate possono presentare distacchi, crepe, macchie, parti
              ammalorate, cornicioni da verificare, balconi da osservare e zone alte
              difficili da controllare. Il drone può aiutare a ottenere immagini da
              diverse angolazioni, utili per una prima documentazione visiva.
            </p>

            <p className="leading-8 text-gray-300">
              Le riprese possono essere usate per confronti, relazioni, richieste
              di preventivo, dialogo con imprese e valutazioni successive da parte
              dei professionisti incaricati.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto e video per relazioni, archivi e confronti
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Durante una perizia edile è importante conservare materiale chiaro e
            ordinato. Le fotografie aeree possono essere inserite in relazioni,
            fascicoli, email, presentazioni, archivi digitali o documentazioni da
            condividere con clienti, imprese, amministratori, condomini o altri
            tecnici.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il video può essere utile quando serve mostrare un percorso visivo:
            dall'intero edificio al dettaglio di una copertura, da una facciata a
            un terrazzo, da un cortile interno a una zona difficilmente accessibile.
            Questo permette di spiegare meglio ciò che è stato osservato durante il
            sopralluogo.
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
              Condomini e immobili
            </h2>
            <p className="text-gray-300">
              Riprese aeree per condomini, ville, palazzi, edifici commerciali,
              strutture industriali, cortili, coperture e parti esterne.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Tecnici e periti
            </h2>
            <p className="text-gray-300">
              Utile per geometri, architetti, ingegneri, periti, consulenti,
              amministratori, imprese edili e proprietari.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione tecnica
            </h2>
            <p className="text-gray-300">
              Materiale visivo da usare per relazioni, richieste di preventivo,
              valutazioni, confronti fotografici e archivio lavori.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta per una perizia edile
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            tipo di immobile e le parti da riprendere. Puoi indicare città, zona,
            tipologia di edificio, altezza indicativa, presenza di cortili, tetti,
            terrazzi, facciate, gronde, balconi, coperture o aree interne non
            facilmente raggiungibili.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se il materiale serve a un tecnico, a un
            amministratore, a un'impresa, a un proprietario o a un consulente. Puoi
            anche indicare se vuoi foto dettagliate, video panoramico, immagini di
            particolari punti, materiale grezzo o una selezione ordinata delle
            riprese migliori.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere informazioni pratiche come accesso all'area, spazio per
            il decollo, presenza di persone, orari preferiti, eventuali ostacoli,
            autorizzazioni già disponibili e necessità di coordinarsi con il tecnico
            o con il proprietario dell'immobile.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per perizia edile
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di supporto a una
              perizia edile su un condominio. Mi servono riprese della copertura,
              delle gronde, dei cornicioni, delle facciate, dei balconi e del
              cortile interno. Il materiale verrà usato da un tecnico per
              documentazione visiva, relazione e valutazione degli interventi.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            immobile, le aree da riprendere, il risultato desiderato e l'uso finale
            del materiale.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per perizie edili?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per perizie edili può variare in base
            alla zona, alla durata delle riprese, alla complessità dell'immobile,
            al numero di parti da documentare, al tipo di materiale richiesto e
            alla consegna finale. Un breve sopralluogo fotografico può avere un
            costo diverso rispetto a una documentazione più completa con foto,
            video e più angolazioni.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il tipo di edificio può incidere. Un piccolo tetto, un condominio
            alto, una facciata complessa, una copertura industriale o un cortile
            interno richiedono tempi e organizzazione diversi. Più la richiesta è
            chiara, più sarà semplice ricevere candidature coerenti.
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
                Posso trovare un pilota drone per una perizia edile?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta e ricevere
                candidature da piloti drone disponibili per foto e video di supporto
                a perizie edili e sopralluoghi tecnici.
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
                ti serve, ad esempio foto, video, dettagli o panoramiche generali.
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
            Trova un pilota drone per perizie edili
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video tecnici, sopralluoghi,
            documentazione visiva e materiale di supporto per perizie edili,
            immobili, condomini, coperture, facciate, tetti e cantieri.
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