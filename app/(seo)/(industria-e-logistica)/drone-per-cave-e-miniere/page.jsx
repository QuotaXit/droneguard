import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per cave e miniere | DroneGuard",
  description:
    "Trova piloti drone per cave, miniere, siti estrattivi, rilievi visivi, documentazione aree, piazzali, fronti di scavo e monitoraggio lavori."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per cave, miniere e siti estrattivi
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per cave e miniere
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi documentare una cava, una miniera, un sito estrattivo, un fronte
            di scavo, un piazzale, un deposito di materiale, una strada interna,
            un'area di lavorazione o un sito produttivo all'aperto? Con DroneGuard
            puoi pubblicare una richiesta e trovare piloti drone disponibili per
            realizzare foto aeree, video di sopralluogo, riprese dall'alto,
            documentazione visiva e materiale utile a imprese, tecnici,
            responsabili di sito, direttori lavori, proprietari, consulenti,
            geometri, ingegneri e professionisti che devono osservare meglio
            l'area e seguire le attività nel tempo.
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
              Cave e siti estrattivi
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video dall'alto per documentare fronti di scavo,
              piazzali, piste interne, depositi, aree operative e zone di lavoro.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione periodica
            </h2>
            <p className="text-gray-300">
              Ottieni immagini ordinate nel tempo per seguire l'evoluzione del
              sito, confrontare fasi diverse e conservare un archivio visivo.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Supporto visivo tecnico
            </h2>
            <p className="text-gray-300">
              Usa il materiale per report, riunioni, comunicazioni interne,
              aggiornamenti, presentazioni e confronto con tecnici e responsabili.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per cave e miniere
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Cave, miniere e siti estrattivi sono aree spesso molto estese,
              difficili da osservare completamente da terra. Possono comprendere
              fronti di scavo, gradoni, piazzali, piste interne, cumuli di
              materiale, zone di deposito, macchinari, aree di carico, bacini,
              recinzioni, versanti e spazi operativi distribuiti su superfici
              ampie. Una visione dall'alto può aiutare a comprendere meglio la
              disposizione generale del sito.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone permette di raccogliere immagini panoramiche e dettagliate
              senza dover raggiungere fisicamente ogni punto dell'area. Le foto e
              i video possono mostrare lo stato del sito, le zone operative, le
              aree interessate da lavorazioni, la posizione dei materiali, la
              viabilità interna e l'evoluzione visiva delle attività nel tempo.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone non sostituisce rilievi tecnici certificati, verifiche
              geologiche, valutazioni di sicurezza, autorizzazioni, misurazioni
              ufficiali o responsabilità professionali. Può però essere un
              supporto visivo molto utile per documentare, comunicare, archiviare
              e seguire meglio l'andamento delle attività.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per cave e miniere
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree di cave e siti estrattivi</li>
              <li>✅ Video di sopralluogo dell'area operativa</li>
              <li>✅ Riprese di fronti di scavo e gradoni</li>
              <li>✅ Documentazione di piazzali e piste interne</li>
              <li>✅ Immagini di cumuli, depositi e aree di carico</li>
              <li>✅ Materiale per report e aggiornamenti</li>
              <li>✅ Riprese periodiche per confronto visivo</li>
              <li>✅ Foto prima e dopo interventi sull'area</li>
              <li>✅ Supporto visivo per imprese, tecnici e responsabili</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per fronti di scavo, piazzali e depositi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            In una cava o in un sito minerario può essere importante documentare
            fronti di scavo, pareti, gradoni, zone di movimentazione, cumuli,
            piazzali, piste di accesso, aree di carico e punti in cui vengono
            depositati materiali. Le immagini dall'alto aiutano a vedere meglio
            l'insieme dell'area e a mostrare la relazione tra le diverse zone del
            sito.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il materiale drone può essere utile per raccontare l'avanzamento delle
            attività, mostrare l'organizzazione del sito, preparare aggiornamenti
            interni, documentare cambiamenti nel tempo o condividere una
            panoramica chiara con tecnici, responsabili, proprietà e consulenti.
            In molti casi una fotografia aerea rende più comprensibile la
            situazione rispetto a molte immagini scattate da terra.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi richiedere immagini generali dell'intera cava oppure dettagli di
            zone specifiche, come un fronte di scavo, un piazzale, una pista
            interna, un cumulo di materiale o un'area dove sono previsti lavori di
            sistemazione.
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
                Crea il tuo account come azienda, responsabile di sito, tecnico,
                proprietario, consulente, impresa o pilota drone.
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
                Descrivi la cava, la miniera, la zona da riprendere, la finalità
                del servizio e il materiale che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti disponibilità,
                modalità operative, tempi e consegna dei file.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Monitoraggio visivo nel tempo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le attività in cava cambiano nel tempo. Fronti di scavo, cumuli,
              piste, aree di deposito e piazzali possono modificarsi settimana
              dopo settimana o mese dopo mese. Richiedere riprese periodiche con
              drone permette di creare un archivio visivo ordinato e confrontare
              l'evoluzione dell'area in momenti diversi.
            </p>

            <p className="leading-8 text-gray-300">
              Questo può essere utile per aggiornamenti interni, comunicazioni con
              proprietà e responsabili, presentazioni, documentazione lavori,
              controlli visivi generali e memoria storica del sito.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Materiale per report e riunioni
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Foto e video aerei possono rendere più semplice spiegare una
              situazione durante una riunione. Una panoramica dall'alto può
              mostrare accessi, depositi, zone operative, punti critici visibili,
              aree già lavorate e spazi ancora da gestire.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale può essere inserito in report, presentazioni,
              documenti interni, archivi fotografici, comunicazioni verso tecnici,
              consulenti, proprietà e soggetti coinvolti nella gestione del sito.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per viabilità interna, accessi e aree di lavoro
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            In un sito estrattivo la viabilità interna è spesso fondamentale.
            Strade sterrate, piste di servizio, accessi per mezzi pesanti, aree di
            manovra, piazzali di carico e percorsi tra le varie zone operative
            possono essere documentati con immagini dall'alto. Questo aiuta a
            mostrare come è organizzato il sito e come le diverse aree sono
            collegate tra loro.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese possono essere richieste anche per documentare lavori di
            sistemazione, ampliamenti, nuove piste, pulizia di aree, gestione dei
            depositi, variazioni dei piazzali o modifiche alla disposizione
            interna. Il drone consente di avere una visione complessiva che può
            essere utile sia per comunicazione sia per archivio.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni servizio deve essere organizzato rispettando regole operative,
            sicurezza dell'area, autorizzazioni, privacy e indicazioni del
            responsabile del sito.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Cave di materiali
            </h2>
            <p className="text-gray-300">
              Riprese per cave di pietra, sabbia, ghiaia, materiali inerti,
              aree di estrazione, fronti di scavo, cumuli e piazzali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Miniere e siti produttivi
            </h2>
            <p className="text-gray-300">
              Foto e video per siti minerari, aree produttive all'aperto, piste,
              accessi, depositi, zone di carico e aree operative estese.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione lavori
            </h2>
            <p className="text-gray-300">
              Materiale visivo per report, monitoraggio periodico, archivio,
              comunicazioni interne, aggiornamenti e confronto tra fasi diverse.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            sito e il tipo di immagini che servono. Puoi indicare la città, la
            zona, se si tratta di una cava, una miniera, un sito estrattivo, un
            piazzale, un fronte di scavo, una strada interna o un'area di deposito
            da documentare.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se ti servono foto generali, video panoramici,
            immagini di dettaglio, riprese periodiche, documentazione prima e
            dopo, materiale per report, immagini per riunioni interne o una
            panoramica completa dell'intero sito.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere informazioni pratiche come accesso all'area, orari
            disponibili, presenza di mezzi in movimento, referente sul posto, zone
            di decollo, eventuali limitazioni operative, necessità di coordinarsi
            con la sicurezza del sito e modalità di consegna dei file.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per cava o miniera
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di una cava. Mi
              servono riprese dall'alto del fronte di scavo, dei piazzali, delle
              piste interne, dei cumuli di materiale, delle aree di carico e della
              zona operativa generale. Il materiale verrà usato per documentazione
              interna, aggiornamenti periodici e presentazione dello stato del
              sito ai responsabili.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di area,
            le zone da riprendere, la finalità del servizio e il tipo di consegna
            desiderata.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per cave e miniere?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla città, alla distanza, alla dimensione
            dell'area, alla durata delle riprese, alla complessità operativa del
            sito, alla presenza di zone da documentare separatamente e al tipo di
            materiale finale richiesto. Una semplice panoramica aerea ha un costo
            diverso rispetto a un servizio periodico con più uscite e consegne
            ordinate nel tempo.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna incide sul prezzo. Alcune aziende chiedono solo file
            grezzi, altre preferiscono foto selezionate, video brevi, cartelle
            ordinate per data, immagini divise per area, materiale per report o
            contenuti già pronti per presentazioni interne.
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
                Posso usare il drone per documentare una cava?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video dall'alto per documentare fronti
                di scavo, piazzali, piste interne, depositi, cumuli e aree
                operative del sito.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere riprese periodiche?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare se ti servono riprese mensili, settimanali,
                a fasi precise o semplicemente immagini prima e dopo determinati
                interventi.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce un rilievo tecnico?
              </h3>
              <p className="text-gray-300">
                No, le immagini drone sono un supporto visivo. Per rilievi,
                misurazioni, valutazioni geologiche o verifiche ufficiali servono
                professionisti e strumenti adeguati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Le riprese possono essere fatte con mezzi in movimento?
              </h3>
              <p className="text-gray-300">
                Dipende dall'organizzazione del sito e dalle condizioni operative.
                Il servizio va sempre coordinato con il responsabile dell'area e
                svolto nel rispetto della sicurezza e delle regole previste.
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
            Trova un pilota drone per cave e miniere
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video, sopralluoghi visivi,
            documentazione di cave, miniere, siti estrattivi, fronti di scavo,
            piazzali, depositi, piste interne, cumuli di materiale e aree
            operative.
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