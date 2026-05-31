import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per ristrutturazioni | DroneGuard",
  description:
    "Trova piloti drone per ristrutturazioni, cantieri edili, tetti, facciate, condomini, ville, immobili e documentazione visiva dei lavori."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per ristrutturazioni
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per ristrutturazioni
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi documentare una ristrutturazione, controllare lo stato di un
            immobile, seguire i lavori su tetti, facciate, coperture, terrazzi,
            cortili, ville, condomini, capannoni o edifici commerciali? Con
            DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto aeree, video, sopralluoghi visivi e
            materiale utile a imprese, tecnici, proprietari, amministratori,
            direttori lavori, architetti, geometri e committenti che vogliono
            osservare meglio l'immobile e documentare le fasi della
            ristrutturazione.
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
              Prima dei lavori
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video iniziali per documentare lo stato
              dell'immobile, delle coperture, delle facciate e delle aree esterne.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Durante il cantiere
            </h2>
            <p className="text-gray-300">
              Segui l'avanzamento della ristrutturazione con immagini dall'alto,
              video periodici e materiale visivo ordinato.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Dopo l'intervento
            </h2>
            <p className="text-gray-300">
              Ottieni immagini finali utili per mostrare il risultato, aggiornare
              il cliente, valorizzare il lavoro o archiviare la documentazione.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone in una ristrutturazione
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In una ristrutturazione ci sono molte aree che possono essere
              difficili da osservare bene da terra: tetti, coperture, gronde,
              facciate alte, terrazzi, cortili interni, lucernari, ponteggi,
              capannoni, pareti esterne e spazi posteriori dell'immobile. Il
              drone può aiutare a ottenere una visione più ampia e ordinata,
              mostrando l'edificio nel suo insieme e permettendo di raccogliere
              immagini utili per comunicare meglio lo stato dei lavori.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le riprese aeree possono essere utili prima dell'inizio dei lavori,
              durante le fasi principali e al termine dell'intervento. Prima
              permettono di documentare lo stato iniziale dell'immobile. Durante
              il cantiere aiutano a mostrare l'avanzamento. Alla fine permettono
              di confrontare il prima e dopo, valorizzando il risultato ottenuto.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone non sostituisce sopralluoghi tecnici, verifiche
              professionali o responsabilità di progettisti e direttori lavori,
              ma può diventare un supporto visivo molto utile per proprietari,
              imprese, amministratori, tecnici e committenti.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per ristrutturazioni
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree prima, durante e dopo i lavori</li>
              <li>✅ Video di avanzamento ristrutturazione</li>
              <li>✅ Riprese di tetti, coperture e facciate</li>
              <li>✅ Documentazione visiva per tecnici e imprese</li>
              <li>✅ Materiale per proprietari e committenti</li>
              <li>✅ Foto per amministratori di condominio</li>
              <li>✅ Riprese per ville, palazzi e immobili commerciali</li>
              <li>✅ Controllo visivo di aree difficili da raggiungere</li>
              <li>✅ Immagini finali per portfolio e comunicazione</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per tetti, facciate e coperture in ristrutturazione
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Molte ristrutturazioni riguardano parti esterne dell'edificio:
            coperture, tetti, terrazzi, facciate, balconi, gronde, canali,
            cornicioni, cortili e strutture alte. Osservare queste aree da terra
            può essere complicato, soprattutto quando l'immobile è grande, quando
            ci sono ponteggi, quando il tetto non è facilmente accessibile o quando
            serve una documentazione completa da condividere con più persone.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone permette di ottenere immagini dall'alto e da angolazioni
            diverse, mostrando dettagli e panoramiche che spesso non si riescono a
            fotografare bene dal basso. Questo può aiutare a descrivere meglio il
            lavoro, organizzare il cantiere, confrontare preventivi, preparare
            report o semplicemente conservare una memoria visiva dello stato
            dell'edificio.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini possono essere utili a imprese edili, geometri, architetti,
            ingegneri, direttori lavori, amministratori, proprietari e clienti
            finali.
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
                Crea il tuo account come cliente, proprietario, tecnico, impresa,
                amministratore, committente o pilota drone.
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
                3. Pubblica il lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi l'immobile, la città, il tipo di ristrutturazione e il
                materiale fotografico o video che vuoi ottenere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti disponibilità,
                tempi, modalità operative e tipo di consegna.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Documentazione per proprietari e committenti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Chi commissiona una ristrutturazione spesso vuole capire come stanno
              procedendo i lavori. Le immagini con drone possono rendere più
              semplice la comunicazione tra impresa, tecnico e proprietario,
              soprattutto quando il committente non può essere presente spesso in
              cantiere o quando l'immobile si trova in un'altra città.
            </p>

            <p className="leading-8 text-gray-300">
              Foto e video possono essere condivisi via email, inseriti in report,
              archiviati in cartelle ordinate o usati per mostrare l'evoluzione
              del progetto in modo chiaro e immediato.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Materiale per imprese e professionisti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Per un'impresa edile, un architetto, un geometra o un professionista
              tecnico, il materiale realizzato con drone può servire anche a
              valorizzare il lavoro svolto. Un video prima e dopo, oppure una
              serie di immagini durante il cantiere, può diventare un contenuto
              utile per portfolio, sito web, presentazioni e comunicazione
              professionale.
            </p>

            <p className="leading-8 text-gray-300">
              Mostrare bene una ristrutturazione conclusa aiuta a raccontare la
              qualità dell'intervento e a rendere più visibile il risultato finale.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Riprese drone prima e dopo una ristrutturazione
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il confronto prima e dopo è uno degli utilizzi più efficaci del drone
            nelle ristrutturazioni. Le immagini iniziali mostrano lo stato reale
            dell'immobile prima dell'intervento: facciate rovinate, coperture da
            sistemare, cortili da riqualificare, edifici da recuperare, aree
            esterne da sistemare o strutture da trasformare.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini finali mostrano invece il risultato raggiunto. Questo tipo
            di materiale può essere utile per proprietari, agenzie immobiliari,
            imprese, tecnici e clienti che vogliono conservare o mostrare la
            trasformazione dell'immobile.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard puoi richiedere un singolo servizio fotografico, un
            video finale, oppure un pacchetto con più uscite in momenti diversi
            della ristrutturazione.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ville e abitazioni
            </h2>
            <p className="text-gray-300">
              Foto e video per ristrutturazioni di case indipendenti, ville,
              casali, abitazioni private, giardini, cortili, tetti e facciate.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Condomini e palazzi
            </h2>
            <p className="text-gray-300">
              Riprese utili per amministratori, tecnici e imprese che devono
              documentare lavori su facciate, coperture, balconi e parti comuni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Immobili commerciali
            </h2>
            <p className="text-gray-300">
              Materiale visivo per negozi, strutture ricettive, uffici, capannoni,
              magazzini, aree esterne e immobili destinati ad attività.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene
            l'immobile e il tipo di ristrutturazione. Puoi indicare la città, la
            zona, se si tratta di una villa, un condominio, un appartamento con
            terrazzo, un capannone, un edificio commerciale o una struttura più
            grande.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se ti servono foto iniziali, video durante i
            lavori, immagini finali, riprese di tetto e facciata, documentazione
            per report, materiale per il committente, contenuti per portfolio o
            confronto prima e dopo.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere informazioni pratiche come accesso all'immobile,
            presenza di ponteggi, spazi per decollo, orari preferiti, referente
            sul posto, eventuali limitazioni dell'area e modalità di consegna dei
            file.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per ristrutturazione
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di una
              ristrutturazione. Mi servono riprese dell'immobile prima dei lavori,
              alcune immagini durante il cantiere e un video finale del risultato.
              Vorrei documentare tetto, facciate, cortile, ponteggi e aree esterne.
              Il materiale verrà usato per aggiornare il committente e conservare
              una documentazione ordinata dell'intervento.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            immobile, le fasi da documentare, l'obiettivo del servizio e il tipo
            di consegna desiderata.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per ristrutturazioni?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per ristrutturazioni può variare in base
            alla città, alla dimensione dell'immobile, alla durata delle riprese,
            alla complessità dell'area, al numero di uscite richieste e al tipo di
            consegna. Una singola uscita per foto finali ha un costo diverso
            rispetto a un monitoraggio completo prima, durante e dopo il cantiere.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il materiale finale incide sul prezzo. Alcuni clienti chiedono
            solo foto grezze, altri preferiscono foto selezionate, video brevi,
            montaggi, cartelle ordinate, riprese panoramiche o contenuti già
            pronti per essere condivisi con clienti, tecnici o committenti.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo fisso. La piattaforma permette di
            pubblicare il lavoro e ricevere candidature da piloti drone
            interessati, così cliente e professionista possono accordarsi sul
            servizio più adatto.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare il drone per documentare una ristrutturazione?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video per documentare lo stato
                iniziale, l'avanzamento dei lavori e il risultato finale.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone può riprendere tetti e facciate?
              </h3>
              <p className="text-gray-300">
                Sì, un pilota drone può realizzare immagini di tetti, coperture,
                facciate, terrazzi, gronde, cortili e parti alte dell'immobile,
                sempre rispettando regole e autorizzazioni necessarie.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere un confronto prima e dopo?
              </h3>
              <p className="text-gray-300">
                Sì, nella richiesta puoi specificare se vuoi immagini prima
                dell'intervento e riprese finali per mostrare la trasformazione
                dell'immobile.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente le riprese?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone. Il
                servizio viene svolto dal professionista scelto dal cliente.
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
            Trova un pilota drone per ristrutturazioni
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video, sopralluoghi visivi,
            documentazione prima e dopo, riprese di tetti, facciate, coperture,
            cortili e materiale utile a imprese, tecnici, proprietari,
            amministratori e committenti.
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