import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per demolizioni | DroneGuard",
  description:
    "Trova piloti drone per demolizioni, cantieri edili, edifici da abbattere, documentazione prima e dopo, video e foto aeree dei lavori."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per demolizioni e cantieri
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per demolizioni
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi documentare una demolizione, un abbattimento controllato, la
            rimozione di una struttura, un cantiere di recupero, un edificio da
            smantellare, un capannone, una vecchia costruzione, un fabbricato
            agricolo o un'area industriale? Con DroneGuard puoi pubblicare una
            richiesta e trovare piloti drone disponibili per realizzare foto
            aeree, video, sopralluoghi visivi, documentazione prima e dopo e
            riprese utili a imprese edili, tecnici, proprietari, committenti,
            direttori lavori, amministratori e professionisti che devono seguire
            meglio le fasi della demolizione.
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
              Prima della demolizione
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video iniziali per documentare lo stato dell'edificio,
              delle coperture, delle facciate, degli accessi e dell'area di
              cantiere.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Durante i lavori
            </h2>
            <p className="text-gray-300">
              Segui visivamente le fasi di demolizione, rimozione, pulizia,
              movimentazione materiali e trasformazione dell'area.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Dopo l'intervento
            </h2>
            <p className="text-gray-300">
              Ottieni immagini finali dell'area liberata, del cantiere sistemato
              e del confronto tra stato iniziale e risultato finale.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per una demolizione
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Una demolizione può coinvolgere edifici, capannoni, fabbricati,
              strutture alte, tetti, facciate, cortili, piazzali, recinzioni,
              aree operative e zone difficili da osservare completamente da
              terra. Il drone permette di avere una visione più ampia dell'area,
              utile per documentare lo stato iniziale e seguire l'evoluzione del
              cantiere.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le immagini dall'alto possono essere utili per mostrare la posizione
              della struttura da demolire, gli spazi intorno all'edificio, gli
              accessi, le aree di deposito, la viabilità interna, la presenza di
              mezzi, le zone già liberate e lo stato dell'area dopo l'intervento.
              Questo tipo di documentazione può aiutare imprese, tecnici e
              committenti a comunicare in modo più chiaro.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone non sostituisce valutazioni tecniche, piani di sicurezza,
              autorizzazioni, direzione lavori o responsabilità professionali.
              Serve come supporto visivo per raccogliere immagini ordinate,
              confrontare le fasi e conservare una memoria chiara del lavoro
              svolto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per demolizioni
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree prima della demolizione</li>
              <li>✅ Video durante le fasi di abbattimento</li>
              <li>✅ Riprese di edifici, capannoni e strutture</li>
              <li>✅ Documentazione visiva per imprese e tecnici</li>
              <li>✅ Immagini per committenti e proprietari</li>
              <li>✅ Controllo visivo di aree operative e accessi</li>
              <li>✅ Riprese del cantiere dopo la demolizione</li>
              <li>✅ Materiale per report, archivio e comunicazioni</li>
              <li>✅ Confronto visivo prima, durante e dopo</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per edifici da demolire, capannoni e fabbricati
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può essere utile quando bisogna documentare edifici vecchi,
            capannoni industriali, depositi, fabbricati agricoli, immobili
            abbandonati, strutture danneggiate, muri, tettoie, coperture,
            porzioni di fabbricato o aree che devono essere liberate. Le riprese
            aeree permettono di osservare l'edificio nel suo insieme, mostrando
            anche parti che da terra sarebbero poco visibili.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Prima dell'intervento, le immagini possono documentare lo stato
            iniziale dell'immobile, la posizione rispetto agli edifici vicini, le
            aree di accesso, i piazzali, la presenza di vegetazione, recinzioni e
            ostacoli. Dopo la demolizione, le riprese possono mostrare il risultato
            finale, l'area sgomberata e la trasformazione dello spazio.
          </p>

          <p className="leading-8 text-gray-300">
            Questo materiale può essere utile per imprese edili, società di
            demolizione, tecnici, proprietari, committenti, enti, amministratori e
            professionisti che devono conservare una documentazione visiva chiara
            del lavoro.
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
                Crea il tuo account come cliente, proprietario, impresa,
                tecnico, committente, amministratore o pilota drone.
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
                Descrivi l'edificio, la zona, il tipo di demolizione, le fasi da
                documentare e il materiale che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti disponibilità,
                modalità operative e tipo di consegna.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Documentazione per imprese edili
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le imprese che si occupano di demolizioni possono usare foto e video
              drone per mostrare il lavoro svolto, documentare le fasi principali,
              aggiornare il committente e creare materiale da conservare in
              archivio. Una ripresa dall'alto permette di raccontare l'evoluzione
              del cantiere in modo più chiaro rispetto a fotografie scattate solo
              da terra.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale può essere usato anche per portfolio aziendale, sito
              web, comunicazioni commerciali, presentazioni e casi studio, sempre
              rispettando autorizzazioni, privacy e regole dell'area.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Supporto per tecnici e committenti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Tecnici, direttori lavori, proprietari e committenti possono
              richiedere immagini dall'alto per avere una panoramica più chiara
              dello stato dell'area. Questo può essere utile quando il cantiere è
              grande, quando ci sono più soggetti coinvolti o quando serve
              condividere aggiornamenti visivi con persone che non possono essere
              presenti sul posto.
            </p>

            <p className="leading-8 text-gray-300">
              Le foto e i video possono aiutare a mostrare cosa è stato rimosso,
              quali aree sono state liberate e come si presenta lo spazio dopo la
              demolizione.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Riprese prima, durante e dopo la demolizione
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Uno dei modi più utili per impiegare il drone in una demolizione è
            realizzare immagini in tre momenti: prima dell'intervento, durante le
            fasi principali e dopo la conclusione dei lavori. Questo permette di
            costruire un racconto visivo completo della trasformazione dell'area.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese iniziali possono mostrare l'edificio ancora presente, le
            coperture, le facciate, i confini dell'area, le strade di accesso e lo
            stato generale. Le riprese durante i lavori possono documentare
            l'avanzamento della demolizione, la rimozione dei materiali, la
            presenza dei mezzi e la progressiva liberazione dell'area. Le riprese
            finali possono mostrare lo spazio sistemato, pronto per nuove fasi o
            nuovi interventi.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard puoi richiedere una singola uscita oppure più interventi
            programmati, in base alla durata del cantiere e al tipo di
            documentazione che vuoi ottenere.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Demolizioni edili
            </h2>
            <p className="text-gray-300">
              Riprese per edifici, case, palazzi, strutture vecchie, muri,
              tettoie, fabbricati e cantieri di recupero.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Capannoni e aree industriali
            </h2>
            <p className="text-gray-300">
              Foto e video per capannoni, magazzini, depositi, piazzali,
              stabilimenti, strutture produttive e aree da riconvertire.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Aree da liberare
            </h2>
            <p className="text-gray-300">
              Materiale visivo per documentare spazi prima e dopo la demolizione,
              rimozioni, pulizie, sgomberi e trasformazioni dell'area.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            tipo di struttura e il risultato desiderato. Puoi indicare la città,
            la zona, se si tratta di un edificio, un capannone, un fabbricato, una
            tettoia, una struttura industriale, un muro o un'area esterna da
            liberare.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se ti servono foto prima della demolizione, video
            durante i lavori, immagini finali, documentazione per report,
            aggiornamenti al committente, materiale per archivio o contenuti per
            mostrare la trasformazione dell'area.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere informazioni pratiche come accesso al cantiere, orari
            disponibili, presenza di mezzi, zone di decollo, referente sul posto,
            eventuali limitazioni, distanza dagli edifici vicini e modalità di
            consegna dei file.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per demolizione
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per documentare una demolizione. Mi servono
              foto e video dell'edificio prima dei lavori, alcune riprese durante
              le fasi principali e immagini finali dell'area dopo la rimozione
              della struttura. Vorrei mostrare coperture, facciate, accessi,
              piazzale, mezzi presenti e trasformazione dello spazio. Il materiale
              verrà usato per aggiornamenti al committente e archivio lavori.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            cantiere, le fasi da riprendere, l'obiettivo delle immagini e il tipo
            di consegna desiderata.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per demolizioni?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per demolizioni può variare in base alla
            città, alla dimensione dell'area, alla durata delle riprese, alla
            complessità del cantiere, al numero di uscite richieste e al tipo di
            materiale finale. Una singola uscita per documentare il prima e dopo
            ha un costo diverso rispetto a un monitoraggio con più interventi
            durante tutta la demolizione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna incide sul prezzo. Alcuni clienti chiedono solo foto
            grezze, altri preferiscono foto selezionate, video brevi, montaggi,
            cartelle ordinate per data, riprese panoramiche o materiale già pronto
            da condividere con clienti, tecnici, proprietari o committenti.
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
                Posso usare il drone per documentare una demolizione?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video per documentare lo stato iniziale,
                le fasi di lavoro e il risultato finale dopo la demolizione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone può riprendere il cantiere durante i lavori?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere riprese durante le fasi principali, sempre nel
                rispetto delle regole del cantiere, della sicurezza, della privacy
                e delle autorizzazioni necessarie.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere foto prima e dopo?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare nella richiesta se vuoi documentare l'area
                prima della demolizione e poi dopo la conclusione dei lavori.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente la demolizione?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone. La
                demolizione deve essere svolta da imprese e professionisti
                competenti.
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
            Trova un pilota drone per demolizioni
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video, sopralluoghi visivi,
            documentazione prima e dopo, riprese di edifici, capannoni, fabbricati,
            cantieri e aree da liberare.
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