import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per immobili di lusso | DroneGuard",
  description:
    "Trova piloti drone per foto e video di immobili di lusso, ville prestigiose, attici, proprietà esclusive, resort, casali di pregio e annunci immobiliari premium."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Riprese premium per immobili esclusivi
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per immobili di lusso
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Gli immobili di lusso richiedono una presentazione diversa da un
            normale annuncio immobiliare. Una villa prestigiosa, un attico
            panoramico, una proprietà con piscina, un casale ristrutturato, una
            tenuta, una residenza vista mare o un immobile esclusivo devono essere
            raccontati con immagini curate, prospettive ampie e contenuti capaci
            di trasmettere valore. Con DroneGuard puoi trovare piloti drone
            disponibili per realizzare foto aeree, video immobiliari, riprese
            panoramiche e contenuti visivi pensati per valorizzare immobili di
            pregio, proprietà importanti, ville di lusso, case con grandi esterni,
            terreni, parchi privati, accessi scenografici, piscine, terrazze,
            giardini e contesti unici.
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
              Presentazione premium
            </h2>
            <p className="leading-7 text-gray-300">
              Le riprese drone possono dare all'annuncio un aspetto più elegante,
              completo e adatto a immobili con valore elevato o caratteristiche
              esclusive.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Valorizza ogni dettaglio
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può mostrare piscina, giardino, parco, vista, terrazzi,
              accessi, dependance, terreno, privacy e posizione della proprietà.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Per agenzie e proprietari
            </h2>
            <p className="leading-7 text-gray-300">
              Ideale per agenzie immobiliari, proprietari, consulenti,
              investitori, costruttori e professionisti che curano immobili di
              fascia alta.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché il drone è utile negli immobili di lusso
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un immobile di lusso non viene scelto solo per la metratura o per il
              numero di stanze. Spesso il valore reale si trova nell'insieme:
              posizione, privacy, architettura, panorama, qualità degli esterni,
              esposizione, accessi, giardino, piscina, parco, terreno, servizi,
              contesto e sensazione generale della proprietà. Raccontare tutto
              questo con semplici foto da terra può essere difficile, perché il
              potenziale acquirente non riesce sempre a percepire le proporzioni
              e il rapporto tra gli spazi.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone permette di costruire una narrazione visiva più ampia. Una
              ripresa dall'alto può mostrare l'arrivo alla proprietà, il cancello,
              il vialetto, il giardino, la piscina, la vista, la distanza dalle
              altre abitazioni, il terreno circostante e l'inserimento
              dell'immobile nel paesaggio. Per una proprietà di pregio, questi
              elementi possono essere decisivi nella percezione del valore.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone
              disponibili per servizi immobiliari premium. Puoi indicare il tipo
              di immobile, la zona, il materiale desiderato e l'obiettivo della
              presentazione, così da ricevere candidature più coerenti.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Immobili di pregio da valorizzare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Ville di lusso in vendita</li>
              <li>✅ Attici panoramici</li>
              <li>✅ Proprietà con piscina</li>
              <li>✅ Casali ristrutturati di pregio</li>
              <li>✅ Tenute e residenze esclusive</li>
              <li>✅ Immobili vista mare</li>
              <li>✅ Ville con parco privato</li>
              <li>✅ Resort e strutture ricettive</li>
              <li>✅ Case con grandi terrazzi</li>
              <li>✅ Proprietà con terreno e dependance</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per immobili esclusivi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le foto aeree possono rendere molto più chiara la presentazione di un
            immobile esclusivo. Una villa con piscina, ad esempio, può essere
            mostrata nel suo insieme: ingresso, giardino, zona relax, parcheggio,
            spazi esterni, terrazzi e rapporto con il panorama. Un attico può
            essere valorizzato facendo vedere la terrazza, la vista, il contesto
            urbano e la posizione rispetto ai punti di interesse. Un casale di
            pregio può essere raccontato mostrando campagna, terreno, accessi,
            privacy e rapporto con il paesaggio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            In un annuncio premium, ogni immagine deve aiutare il potenziale
            acquirente a percepire qualità e valore. Le riprese drone possono
            essere usate come apertura della galleria fotografica, come elemento
            distintivo del sito dell'agenzia, come contenuto per campagne social,
            come materiale per presentazioni private o come supporto per brochure
            digitali dedicate a clienti selezionati.
          </p>

          <p className="leading-8 text-gray-300">
            Il drone non sostituisce le fotografie interne professionali, ma le
            completa. Insieme, foto interne, immagini aeree e video possono creare
            una presentazione più forte, più ordinata e più adatta a immobili di
            fascia alta.
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
                Crea un account come proprietario, agenzia immobiliare,
                professionista, consulente o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi l'immobile di lusso, la zona, gli esterni e il tipo di
                materiale fotografico o video che vuoi ottenere.
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
                Valuta il professionista più adatto in base al tipo di proprietà,
                alla zona e al risultato desiderato.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Video drone per immobili di pregio
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un video drone può essere particolarmente efficace per presentare un
              immobile di lusso. Il filmato può iniziare con una panoramica del
              territorio, avvicinarsi lentamente alla proprietà, mostrare il
              cancello, il vialetto, il giardino, la piscina, la facciata, i
              terrazzi, il panorama e concludere con una visione ampia
              dell'intera residenza. Questo tipo di racconto visivo aiuta a creare
              un'impressione più forte rispetto a una semplice sequenza di foto.
            </p>

            <p className="leading-8 text-gray-300">
              Il video può essere usato per annunci premium, landing page
              dedicate, social network, presentazioni private, campagne
              pubblicitarie e materiali promozionali dell'agenzia immobiliare.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Privacy, contesto e percezione del valore
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In molti immobili di lusso, la privacy è uno degli aspetti più
              importanti. Una ripresa dall'alto può aiutare a mostrare la distanza
              dalle altre abitazioni, la presenza di verde intorno, l'accesso
              riservato, la posizione arretrata rispetto alla strada e la
              protezione visiva offerta dal terreno o dal parco privato.
            </p>

            <p className="leading-8 text-gray-300">
              Questo non significa mostrare dettagli sensibili, ma valorizzare il
              contesto generale della proprietà in modo elegante, chiaro e
              professionale.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per un immobile di lusso
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ottenere candidature più adatte, descrivi bene la proprietà:
            villa di lusso, attico panoramico, casale di pregio, immobile vista
            mare, residenza con piscina, tenuta, villa con parco, struttura
            ricettiva o proprietà esclusiva. Indica la città, la zona, il tipo di
            contesto, gli elementi da valorizzare e l'uso che farai del materiale
            realizzato.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi richiedere foto aeree, video emozionale, riprese panoramiche,
            immagini dell'ingresso, passaggi sulla piscina, viste del giardino,
            riprese del parco, immagini del terreno, dettagli degli accessi,
            panoramiche del quartiere, video verticale per social o video
            orizzontale per sito e portali immobiliari. Se vuoi un risultato
            premium, è utile spiegare anche lo stile desiderato: elegante,
            descrittivo, emozionale, ordinato, turistico o commerciale.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni volo deve essere valutato dal pilota in base a sicurezza,
            privacy, condizioni meteo, ostacoli, spazi disponibili, presenza di
            persone e regole applicabili. DroneGuard ti aiuta a trovare piloti
            drone, ma l'organizzazione operativa del servizio viene gestita dal
            professionista scelto.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per immobile di lusso
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di una villa di
              lusso in vendita. Vorrei valorizzare la proprietà dall'alto,
              mostrando il cancello di ingresso, il vialetto, il giardino, la
              piscina, il parco privato, la facciata, la vista panoramica e il
              contesto circostante. Il materiale sarà usato per un annuncio
              premium, per il sito dell'agenzia e per una presentazione dedicata a
              clienti interessati.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire che il lavoro non è
            solo documentativo, ma anche promozionale e orientato a valorizzare un
            immobile di fascia alta.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per immobili di lusso?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla zona, alla distanza, alla durata del
            servizio, alla complessità della proprietà e al tipo di materiale
            richiesto. Un servizio fotografico con alcune immagini aeree può avere
            un costo diverso rispetto a un video premium con più riprese,
            pianificazione degli angoli, selezione del materiale e consegna di
            contenuti pronti per la pubblicazione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Gli immobili di pregio spesso richiedono più attenzione: bisogna
            scegliere bene le prospettive, evitare immagini inutili, valorizzare
            gli esterni, mostrare il contesto senza creare confusione e produrre
            materiale coerente con il livello della proprietà. Per questo è utile
            pubblicare una richiesta chiara e lasciare che i piloti interessati
            valutino il lavoro.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette al
            cliente di pubblicare il lavoro, ricevere candidature e scegliere il
            pilota drone più adatto in base al tipo di immobile e al risultato
            desiderato.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Crediti su DroneGuard
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione.
            Pubblicare un lavoro costa 5 crediti, quindi puoi iniziare cercando un
            pilota drone per un immobile di lusso e ricevere candidature dai
            professionisti interessati.
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
                Il drone è utile per immobili di lusso?
              </h3>
              <p className="text-gray-300">
                Sì, è molto utile per valorizzare ville, attici, proprietà con
                piscina, casali di pregio, immobili vista mare, tenute e residenze
                con grandi spazi esterni.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare il video per un annuncio premium?
              </h3>
              <p className="text-gray-300">
                Sì, foto e video possono essere usati per annunci premium, sito
                web, social, brochure digitali e presentazioni, secondo gli accordi
                presi con il pilota.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Va bene anche per attici e terrazzi?
              </h3>
              <p className="text-gray-300">
                Sì, il drone può essere utile anche per attici panoramici,
                terrazzi importanti e proprietà con vista da valorizzare.
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
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono
                10 crediti gratuiti dopo la registrazione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per immobili di lusso
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per foto e video di immobili di lusso, ville prestigiose,
            attici panoramici, casali di pregio, proprietà con piscina, tenute,
            residenze vista mare e annunci immobiliari premium.
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