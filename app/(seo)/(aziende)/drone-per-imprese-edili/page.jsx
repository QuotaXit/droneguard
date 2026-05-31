import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per imprese edili | DroneGuard",
  description:
    "Trova piloti drone per imprese edili, monitoraggio cantieri, riprese aeree, avanzamento lavori, ispezioni, rilievi fotografici e documentazione tecnica."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per imprese edili e cantieri
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per imprese edili
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Le imprese edili possono utilizzare il drone per monitorare cantieri,
            documentare l'avanzamento dei lavori, controllare aree difficili da
            raggiungere, realizzare riprese aeree professionali e creare materiale
            visivo utile per clienti, direzione lavori, tecnici, investitori e
            comunicazione aziendale. Il drone permette di avere una visione ampia
            del cantiere, osservare lo stato delle opere, controllare coperture,
            strutture, terreni e aree esterne, riducendo i tempi necessari per
            raccogliere immagini e informazioni visive. Con DroneGuard puoi
            trovare piloti drone disponibili per collaborare con imprese edili,
            aziende di costruzione, ristrutturazione e manutenzione.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Registrati gratis
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Monitoraggio cantieri
            </h2>
            <p className="text-gray-300">
              Le riprese aeree permettono di seguire l'evoluzione del cantiere,
              documentare le fasi di lavoro e avere una visione aggiornata
              dell'area operativa.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione tecnica
            </h2>
            <p className="text-gray-300">
              Foto e video con drone possono essere utilizzati per relazioni,
              report, verifiche interne, presentazioni e aggiornamenti destinati
              a clienti e professionisti.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Controllo visivo dall'alto
            </h2>
            <p className="text-gray-300">
              Il drone consente di osservare coperture, tetti, facciate, aree
              esterne, ponteggi, piazzali, strutture e zone difficili da vedere
              completamente da terra.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché un'impresa edile può usare il drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Nel settore edile la documentazione visiva è sempre più importante.
              Un cantiere cambia rapidamente, le lavorazioni avanzano giorno dopo
              giorno e spesso è necessario conservare una traccia chiara delle
              diverse fasi. Il drone permette di fotografare e filmare l'area di
              lavoro dall'alto, mostrando in modo immediato ciò che da terra può
              risultare incompleto o difficile da comprendere. Per un'impresa
              edile, questo significa avere materiale più chiaro da condividere
              con clienti, tecnici, direzione lavori, amministratori, investitori
              o responsabili interni.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le riprese con drone possono essere utili nelle nuove costruzioni,
              nelle ristrutturazioni, negli interventi su coperture, nei lavori
              stradali, nei cantieri industriali, nei complessi residenziali e
              nelle opere di manutenzione. Una vista aerea aiuta a controllare
              l'organizzazione dell'area, la posizione dei materiali, lo stato
              delle opere esterne, l'avanzamento delle strutture, la pulizia del
              cantiere, gli accessi e il rapporto tra l'intervento e il contesto
              circostante.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard l'impresa edile può pubblicare una richiesta e
              trovare piloti drone interessati al lavoro. La piattaforma permette
              di descrivere il servizio necessario, indicare la zona, spiegare il
              tipo di cantiere e ricevere candidature da operatori disponibili.
              Questo semplifica la ricerca di un professionista e consente
              all'impresa di concentrarsi sull'organizzazione dei lavori.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone utili per imprese edili
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Monitoraggio avanzamento lavori</li>
              <li>✅ Riprese aeree di cantieri edili</li>
              <li>✅ Foto periodiche per report e documentazione</li>
              <li>✅ Ispezione visiva di tetti e coperture</li>
              <li>✅ Controllo aree esterne e piazzali</li>
              <li>✅ Video promozionali dell'impresa</li>
              <li>✅ Documentazione prima, durante e dopo i lavori</li>
              <li>✅ Supporto visivo per direzione lavori e clienti</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per monitoraggio cantieri e avanzamento lavori
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Uno degli utilizzi più interessanti del drone nel settore edile è il
            monitoraggio dell'avanzamento lavori. In un cantiere grande o complesso,
            le immagini dall'alto permettono di controllare l'evoluzione delle
            opere in modo rapido e visivo. Un'impresa può richiedere riprese
            periodiche settimanali, mensili o in momenti specifici del progetto,
            ottenendo un archivio ordinato delle fasi principali. Questo materiale
            può essere utile per dimostrare l'avanzamento, confrontare lo stato dei
            lavori nel tempo e mantenere aggiornati committenti e professionisti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le fotografie aeree possono mostrare l'intero cantiere, mentre i video
            possono raccontare meglio il contesto, le lavorazioni e la dimensione
            dell'intervento. Per lavori su edifici, ville, condomini, capannoni,
            strutture commerciali e complessi residenziali, il drone può offrire
            un punto di vista più completo rispetto alle immagini realizzate da
            terra. Questo è particolarmente utile quando ci sono aree esterne,
            ponteggi, coperture, tetti, piazzali o parti dell'edificio difficili
            da osservare.
          </p>

          <p className="leading-8 text-gray-300">
            Il materiale raccolto può essere utilizzato anche per comunicazione e
            marketing. Un'impresa edile che mostra i propri cantieri, i lavori
            completati e la qualità delle opere realizzate può presentarsi in modo
            più professionale a nuovi clienti. Video e foto con drone possono
            essere pubblicati sul sito aziendale, sui social, nelle brochure
            digitali e nelle presentazioni commerciali.
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
                Crea gratuitamente il tuo account come cliente, impresa edile o
                pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Ottieni crediti
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
                Descrivi il cantiere, la zona, il tipo di riprese e il risultato
                che ti serve.
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
              Documentare prima, durante e dopo i lavori
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può essere utilizzato in diverse fasi del lavoro. Prima
              dell'apertura del cantiere può servire per documentare lo stato dei
              luoghi, gli accessi, la posizione dell'area e il contesto circostante.
              Durante i lavori può aiutare a seguire l'avanzamento e a conservare
              materiale fotografico aggiornato. A fine intervento può produrre foto
              e video utili per mostrare il risultato finale.
            </p>

            <p className="leading-8 text-gray-300">
              Questa documentazione può essere preziosa anche in caso di confronti
              con il cliente, verifiche tecniche, aggiornamenti interni o
              presentazioni commerciali. Un archivio visivo ordinato permette di
              ricostruire le fasi del progetto con maggiore chiarezza.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Ispezioni visive di tetti e coperture
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Molte imprese edili lavorano su tetti, terrazzi, facciate, grondaie,
              coperture e parti alte degli edifici. In questi casi il drone può
              offrire una prima visione fotografica o video, utile per osservare
              la situazione e capire quali interventi approfondire. Questo non
              sostituisce le verifiche tecniche necessarie, ma può aiutare a
              raccogliere informazioni visive preliminari.
            </p>

            <p className="leading-8 text-gray-300">
              L'utilizzo del drone deve sempre rispettare sicurezza, privacy,
              normative e condizioni operative del luogo. Per questo è importante
              affidarsi a operatori competenti e valutare ogni intervento in base
              al contesto.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova piloti drone per cantieri, costruzioni e ristrutturazioni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard aiuta imprese edili e operatori drone a incontrarsi. Se
            hai bisogno di riprese per un cantiere, di fotografie periodiche, di
            un video finale del lavoro realizzato o di immagini aeree per una
            presentazione, puoi pubblicare una richiesta e aspettare le candidature
            dei piloti interessati. Questo metodo è semplice perché consente di
            descrivere il lavoro una sola volta e ricevere risposte da chi è
            disponibile.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            La piattaforma può essere utile per imprese di costruzione, ditte di
            ristrutturazione, aziende specializzate in tetti e coperture, società
            di manutenzione, imprese stradali, installatori, general contractor e
            professionisti che lavorano nel settore edile. Ogni richiesta può
            essere adattata al tipo di servizio: video promozionale, monitoraggio
            lavori, fotografie tecniche, ispezione visiva, rilievo fotografico o
            documentazione dello stato dei luoghi.
          </p>

          <p className="leading-8 text-gray-300">
            Per ottenere candidature più precise è utile descrivere bene il
            progetto: zona del cantiere, tipo di edificio, altezza indicativa,
            presenza di spazi esterni, obiettivo del servizio, data richiesta,
            eventuale necessità di video montato o solo materiale grezzo. Più la
            richiesta è chiara, più sarà semplice trovare un pilota adatto.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per un'impresa edile?
              </h3>
              <p className="text-gray-300">
                Sì, il drone può essere utile per monitorare cantieri, documentare
                avanzamento lavori, realizzare foto e video dall'alto, controllare
                aree esterne e creare materiale visivo per clienti e presentazioni.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere riprese periodiche del cantiere?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta specificando che ti servono
                riprese periodiche settimanali, mensili o in determinate fasi del
                lavoro.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente i servizi con drone?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard è una piattaforma che mette in contatto clienti e
                piloti drone. Il servizio viene svolto dal professionista scelto
                dal cliente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare una richiesta?
              </h3>
              <p className="text-gray-300">
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono 10
                crediti gratuiti dopo la registrazione, mentre i piloti ricevono
                50 crediti gratuiti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Per quali cantieri conviene usare il drone?
              </h3>
              <p className="text-gray-300">
                Il drone può essere utile per nuove costruzioni, ristrutturazioni,
                cantieri residenziali, capannoni, lavori su tetti, opere esterne,
                cantieri stradali, aree industriali e interventi di manutenzione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per la tua impresa edile
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e ricevi candidature
            da piloti drone interessati a realizzare riprese aeree, monitoraggio
            cantieri, video di avanzamento lavori, documentazione fotografica,
            ispezioni visive e contenuti professionali per imprese edili.
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