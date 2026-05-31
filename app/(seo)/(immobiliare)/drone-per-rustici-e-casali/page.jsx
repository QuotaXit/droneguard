import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per rustici e casali | DroneGuard",
  description:
    "Trova piloti drone per foto e video di rustici, casali, proprietà in campagna, terreni, agriturismi, immobili rurali e annunci immobiliari professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Riprese aeree per casali, rustici e proprietà rurali
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per rustici e casali
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi vendere, affittare o valorizzare un rustico, un casale, una casa
            in campagna, una proprietà rurale, un agriturismo o un immobile con
            terreno? Con DroneGuard puoi trovare piloti drone disponibili per
            realizzare foto aeree, video panoramici, riprese esterne e contenuti
            visivi pensati per mostrare casali ristrutturati, rustici da
            recuperare, terreni agricoli, uliveti, vigneti, giardini, accessi,
            strade bianche, cortili, annessi, dependance, panorama e contesto
            naturale. Un casale non si racconta soltanto con le stanze interne:
            spesso il suo valore più forte è nell'atmosfera, nella posizione,
            nella privacy, nel terreno, nella vista e nel rapporto con la campagna
            circostante.
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
              Mostra il contesto rurale
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può mostrare il casale nel paesaggio, evidenziando
              campagna, colline, alberi, terreno, accessi e distanza dalle altre
              abitazioni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Valorizza terreno e pertinenze
            </h2>
            <p className="leading-7 text-gray-300">
              Riprese dall'alto utili per mostrare giardino, cortile, annessi,
              uliveto, vigneto, terreno agricolo, parcheggi e spazi esterni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Annunci più emozionali
            </h2>
            <p className="leading-7 text-gray-300">
              Foto e video con drone possono rendere più forte la presentazione
              di immobili rurali, casali di pregio e rustici in vendita.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per rustici e casali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un rustico o un casale ha caratteristiche diverse da un normale
              appartamento. Chi cerca questo tipo di immobile non guarda solo la
              casa, ma anche ciò che la circonda: tranquillità, panorama, terreno,
              privacy, accessi, distanza dal centro abitato, presenza di verde,
              possibilità di ristrutturazione, spazi esterni e atmosfera generale.
              Tutti questi elementi sono difficili da comunicare con poche foto
              scattate da terra.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone permette di mostrare il casale dall'alto e di far capire
              subito come la proprietà è inserita nel territorio. Una ripresa
              aerea può evidenziare il percorso di accesso, la forma del terreno,
              la posizione della casa, la presenza di alberi, cortili, annessi,
              strade, colline, campi, uliveti o vigneti. Questo aiuta il
              potenziale acquirente a immaginare meglio il valore complessivo
              della proprietà.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e ricevere candidature
              da piloti drone interessati. Puoi spiegare il tipo di immobile, la
              zona, gli elementi da valorizzare e il materiale che vuoi ricevere
              per l'annuncio o per la presentazione della proprietà.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Immobili rurali adatti al drone
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Casali in vendita</li>
              <li>✅ Rustici da ristrutturare</li>
              <li>✅ Case in campagna</li>
              <li>✅ Agriturismi e strutture rurali</li>
              <li>✅ Proprietà con uliveto</li>
              <li>✅ Proprietà con vigneto</li>
              <li>✅ Tenute con terreno</li>
              <li>✅ Casali con piscina</li>
              <li>✅ Immobili con annessi e dependance</li>
              <li>✅ Terreni agricoli collegati alla casa</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per casali in vendita
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le foto aeree possono rendere molto più comprensibile un annuncio
            dedicato a un casale. Da terra, spesso si vede solo la facciata o una
            parte del giardino. Dall'alto, invece, si può mostrare l'intera
            proprietà: edificio principale, cortile, strada di accesso, terreno,
            spazi verdi, alberi, eventuali annessi, distanza dalle altre case e
            rapporto con il paesaggio. Questo tipo di materiale è particolarmente
            utile quando l'immobile ha un valore legato alla posizione e agli
            esterni.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un casale immerso nel verde, una casa colonica ristrutturata, un
            rustico con terreno o un agriturismo possono apparire molto più
            interessanti se il potenziale acquirente riesce a vedere il contesto.
            Il drone può aiutare a far percepire tranquillità, spazio, privacy e
            potenzialità della proprietà, elementi che spesso fanno la differenza
            in questo tipo di mercato.
          </p>

          <p className="leading-8 text-gray-300">
            Il materiale può essere usato per annunci immobiliari, portali
            specializzati, sito dell'agenzia, social network, brochure digitali,
            presentazioni per clienti interessati e contenuti promozionali per
            immobili rurali o turistici.
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
                Crea il tuo account come proprietario, agenzia immobiliare,
                professionista, gestore di struttura o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il rustico, il casale, il terreno, la zona e il tipo di
                foto o video che vuoi ottenere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti drone interessati possono candidarsi e proporti la loro
                disponibilità per il servizio.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Valuta il professionista più adatto in base alla zona, al tipo di
                proprietà e al risultato desiderato.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Video drone per raccontare atmosfera e territorio
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un video con drone può essere particolarmente efficace per un casale
              o un rustico, perché permette di raccontare non solo la struttura,
              ma anche l'ambiente. Il video può partire da una panoramica della
              campagna, avvicinarsi lentamente all'immobile, mostrare il vialetto
              di accesso, passare sopra il giardino, evidenziare il terreno e
              concludere con una vista ampia della proprietà.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di contenuto può essere usato per annunci premium,
              campagne social, siti immobiliari, presentazioni dedicate e
              promozione di strutture rurali, agriturismi o proprietà da
              ristrutturare.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Rustici da ristrutturare e potenziale della proprietà
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Anche un rustico da ristrutturare può essere valorizzato con il
              drone. In questi casi, il valore non è sempre nell'edificio così
              com'è, ma nel potenziale: terreno, posizione, vista, volume,
              accessi, possibilità di recupero e contesto. Una ripresa dall'alto
              può aiutare a far capire meglio le possibilità future della
              proprietà.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini non sostituiscono valutazioni tecniche, pratiche
              edilizie o verifiche urbanistiche, ma possono rendere più chiara la
              presentazione iniziale dell'immobile.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa chiedere al pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per un casale o un rustico, puoi chiedere al pilota drone di
            realizzare una vista generale della proprietà, riprese degli accessi,
            immagini del terreno, panoramiche del paesaggio, foto del cortile,
            riprese di eventuali annessi, dependance, magazzini agricoli, piscina,
            uliveto, vigneto o strada di arrivo. Se il punto forte è la vista,
            scrivilo chiaramente nella richiesta. Se invece vuoi valorizzare il
            potenziale del terreno, specifica quali zone devono essere mostrate.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi richiedere foto per portali immobiliari, video breve per social,
            video orizzontale per sito web, riprese panoramiche, immagini
            descrittive per brochure o materiale da condividere con clienti,
            tecnici, investitori e agenzie. Più dettagli inserisci, più sarà
            semplice per il pilota capire il lavoro da svolgere.
          </p>

          <p className="leading-8 text-gray-300">
            Il pilota dovrà sempre valutare sicurezza, privacy, condizioni meteo,
            ostacoli, presenza di persone, animali, alberi, linee elettriche,
            spazi di decollo e regole applicabili. DroneGuard mette in contatto
            cliente e professionista, ma la fattibilità del servizio viene
            valutata dal pilota scelto.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per rustico o casale
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e un breve video di un
              casale in vendita in campagna. Vorrei mostrare la proprietà
              dall'alto, il terreno, il giardino, la strada di accesso, gli
              annessi, la distanza dalle abitazioni vicine e il panorama
              circostante. Il materiale sarà usato per un annuncio immobiliare
              online e per una presentazione ai potenziali acquirenti.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta di questo tipo è utile perché spiega chiaramente il tipo
            di immobile, l'obiettivo delle riprese e gli elementi principali da
            valorizzare.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per casali e rustici?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla zona, alla distanza, alla durata del
            servizio, alla dimensione della proprietà e al tipo di materiale
            richiesto. Un casale con grande terreno, accesso lungo, uliveto,
            piscina o più fabbricati può richiedere una pianificazione diversa
            rispetto a un piccolo rustico con pochi spazi esterni.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il tipo di consegna incide. Alcuni clienti hanno bisogno solo di
            foto aeree, altri vogliono un video emozionale, riprese da diverse
            angolazioni, materiale selezionato, contenuti per social o immagini
            pronte per un annuncio immobiliare. Per questo è utile descrivere bene
            il risultato desiderato.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette al
            cliente di pubblicare il lavoro, ricevere candidature e scegliere il
            pilota drone più adatto in base al tipo di proprietà e al materiale
            richiesto.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Crediti su DroneGuard
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione.
            Pubblicare un lavoro costa 5 crediti, quindi puoi iniziare cercando un
            pilota drone per foto e video di un casale, un rustico, un terreno o
            una proprietà rurale.
          </p>

          <p className="leading-8 text-gray-300">
            I nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.
            Rispondere o candidarsi a un annuncio costa 5 crediti. Questo sistema
            permette di collegare chi cerca un servizio drone con chi è disponibile
            a svolgerlo.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per vendere un casale?
              </h3>
              <p className="text-gray-300">
                Sì, il drone è molto utile per mostrare terreno, accessi, vista,
                privacy, posizione, giardino e contesto rurale della proprietà.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Va bene anche per rustici da ristrutturare?
              </h3>
              <p className="text-gray-300">
                Sì, le riprese aeree possono aiutare a mostrare il potenziale del
                rustico, il terreno collegato, gli accessi e il contesto in cui si
                trova.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare le immagini per annunci immobiliari?
              </h3>
              <p className="text-gray-300">
                Sì, foto e video possono essere usati per portali immobiliari,
                sito dell'agenzia, social, brochure digitali e presentazioni,
                secondo gli accordi presi con il pilota.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Le immagini drone sostituiscono una perizia?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce materiale visivo utile, ma non sostituisce
                perizie, rilievi, verifiche catastali, controlli urbanistici o
                valutazioni tecniche.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare una richiesta?
              </h3>
              <p className="text-gray-300">
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono
                10 crediti gratuiti dopo la registrazione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per rustici e casali
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto e video di rustici, casali, proprietà
            in campagna, agriturismi, terreni, uliveti, vigneti, giardini,
            accessi, panorama e annunci immobiliari professionali.
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