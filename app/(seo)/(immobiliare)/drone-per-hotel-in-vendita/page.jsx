import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per hotel in vendita | DroneGuard",
  description:
    "Trova piloti drone per foto e video di hotel in vendita, alberghi, resort, B&B, strutture ricettive, piscine, esterni e annunci immobiliari professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Riprese aeree per hotel e strutture ricettive
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per hotel in vendita
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi vendere, presentare o valorizzare un hotel, un albergo, un
            resort, un B&B, una struttura ricettiva, un agriturismo, una villa
            turistica o un immobile destinato all'ospitalità? Con DroneGuard puoi
            trovare piloti drone disponibili per realizzare foto aeree, video
            panoramici, riprese esterne e contenuti visivi utili per mostrare
            facciate, ingresso, piscina, giardini, parcheggi, terrazze, vista
            mare, vista montagna, aree comuni, spazi esterni, accessi, posizione,
            contesto turistico e punti di forza della struttura. Un hotel in
            vendita non si valuta solo per camere e metratura: contano anche
            posizione, immagine, accessibilità, potenziale commerciale, atmosfera
            e rapporto con il territorio circostante.
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
              Presenta la struttura
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può mostrare hotel, ingresso, giardino, piscina, parcheggi,
              terrazze, aree esterne e contesto turistico in modo più completo.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Valorizza la posizione
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini dall'alto possono far vedere vicinanza al mare, al
              centro, alla montagna, ai servizi, alle strade o ai punti di
              interesse.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Per vendite e investimenti
            </h2>
            <p className="leading-7 text-gray-300">
              Utile per proprietari, agenzie immobiliari, investitori, società,
              gestori, consulenti e professionisti del settore turistico.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per un hotel in vendita
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un hotel o una struttura ricettiva ha bisogno di una presentazione
              visiva diversa rispetto a un normale immobile. Chi valuta l'acquisto
              di un albergo vuole capire non solo com'è fatto l'edificio, ma anche
              dove si trova, come si presenta dall'esterno, quali spazi offre agli
              ospiti, quanto è visibile, quanto è accessibile e quale potenziale
              turistico può avere. Le foto da terra possono mostrare una parte
              della struttura, ma spesso non bastano a raccontare il contesto.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone permette di mostrare l'hotel nel suo insieme. Una ripresa
              dall'alto può evidenziare la posizione rispetto al mare, alla città,
              alla montagna, alla campagna o alle strade principali. Può mostrare
              piscina, parcheggio, giardino, terrazze, spazi esterni, ingresso,
              aree comuni, panorama, distanza da altre strutture e rapporto con il
              territorio. Per un potenziale investitore, questi dettagli possono
              essere molto importanti.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e ricevere candidature
              da piloti drone interessati. Puoi descrivere la struttura, la zona,
              gli elementi da valorizzare e il materiale che vuoi ottenere per
              annuncio, presentazione commerciale, brochure o comunicazione a
              investitori.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Strutture ricettive da valorizzare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Hotel in vendita</li>
              <li>✅ Alberghi e pensioni</li>
              <li>✅ Resort e villaggi turistici</li>
              <li>✅ B&B e affittacamere</li>
              <li>✅ Agriturismi e casali turistici</li>
              <li>✅ Strutture con piscina</li>
              <li>✅ Hotel vista mare</li>
              <li>✅ Strutture in montagna</li>
              <li>✅ Immobili turistici con giardino</li>
              <li>✅ Complessi ricettivi da presentare online</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per hotel, resort e strutture ricettive
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le foto aeree possono rendere molto più chiara la presentazione di un
            hotel in vendita. In una struttura ricettiva, gli spazi esterni
            possono avere un peso enorme: piscina, area relax, parcheggio,
            giardino, terrazza panoramica, accesso principale, cortile, area
            ristorante, vista e distanza dai luoghi turistici. Da terra questi
            elementi possono sembrare separati; dall'alto, invece, si capisce
            meglio come sono collegati tra loro.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Una ripresa con drone può mostrare la struttura nel suo contesto
            reale. Per un hotel al mare, può essere utile mostrare la vicinanza
            alla spiaggia o al lungomare. Per una struttura in montagna, può
            essere importante far vedere panorama, accessi e paesaggio. Per un
            agriturismo o un resort, possono contare terreni, natura, piscina,
            spazi verdi e tranquillità. Per un albergo in città, invece, il drone
            può aiutare a comunicare posizione, accessibilità e rapporto con il
            quartiere.
          </p>

          <p className="leading-8 text-gray-300">
            Il materiale può essere usato per annunci immobiliari, presentazioni
            commerciali, portali di vendita, sito dell'agenzia, dossier per
            investitori, campagne social, brochure digitali e comunicazioni
            dedicate a potenziali acquirenti.
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
                investitore, gestore, consulente o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi l'hotel, la zona, gli esterni, la posizione e il tipo di
                foto o video che vuoi ottenere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti drone interessati possono candidarsi e proporti la loro
                disponibilità per il servizio richiesto.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Valuta il professionista più adatto in base alla zona, al tipo di
                struttura e al risultato desiderato.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Video drone per presentazioni a investitori
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un video con drone può essere molto efficace per presentare un hotel
              a potenziali acquirenti o investitori. Il filmato può partire da una
              panoramica del territorio, avvicinarsi alla struttura, mostrare
              l'ingresso, la facciata, la piscina, il parcheggio, le terrazze, gli
              spazi esterni e concludere con una vista ampia dell'intero immobile.
              Questo tipo di contenuto aiuta a comunicare dimensione, immagine e
              potenziale della struttura.
            </p>

            <p className="leading-8 text-gray-300">
              Il video può essere usato in presentazioni riservate, annunci
              premium, pagine dedicate, social network, brochure digitali e
              materiali commerciali per agenzie e società.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Piscina, giardini, parcheggi e accessi
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In un hotel, gli spazi esterni possono incidere molto sulla
              percezione del valore. Una piscina ben posizionata, un giardino
              curato, un parcheggio ampio, un ingresso comodo, una terrazza vista
              mare o un'area relax possono rendere la struttura più interessante.
              Il drone può mostrare questi elementi in modo chiaro e ordinato.
            </p>

            <p className="leading-8 text-gray-300">
              Le riprese dall'alto aiutano a far capire come gli spazi sono
              distribuiti, quanto sono accessibili e come si collegano al resto
              della struttura.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa chiedere al pilota drone per un hotel
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ottenere un risultato utile, descrivi bene la struttura e indica
            cosa vuoi valorizzare. Puoi chiedere una vista generale dell'hotel,
            riprese dell'ingresso, immagini della piscina, foto del giardino,
            panoramiche del parcheggio, video della terrazza, vista della
            posizione rispetto al mare o al centro, riprese delle aree comuni
            esterne e immagini del contesto turistico. Se la struttura ha un punto
            forte particolare, come vista mare, spa, parco, spiaggia vicina o
            grande area esterna, scrivilo chiaramente nella richiesta.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi richiedere foto aeree, video breve, video orizzontale per sito
            web, video verticale per social, contenuti per annunci immobiliari,
            materiale per brochure, immagini per una scheda investimento o riprese
            da inserire in una presentazione commerciale. Più dettagli inserisci,
            più sarà semplice per il pilota capire il tipo di servizio richiesto.
          </p>

          <p className="leading-8 text-gray-300">
            Il pilota dovrà sempre valutare sicurezza, privacy, condizioni meteo,
            presenza di ospiti o personale, ostacoli, strade vicine, edifici,
            alberi, spazi di decollo e regole applicabili al volo. DroneGuard
            mette in contatto cliente e professionista, ma la fattibilità
            operativa viene valutata dal pilota scelto.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per hotel in vendita
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e un breve video di un
              hotel in vendita. Vorrei mostrare la struttura dall'alto, l'ingresso,
              il parcheggio, la piscina, il giardino, le terrazze, la posizione
              rispetto al mare e il contesto turistico circostante. Il materiale
              sarà usato per un annuncio immobiliare, una brochure digitale e una
              presentazione per potenziali investitori.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            struttura, l'obiettivo commerciale e gli elementi principali da
            valorizzare durante le riprese.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per hotel in vendita?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla zona, alla distanza, alla durata del
            servizio, alla dimensione della struttura, alla complessità degli
            spazi esterni e al tipo di materiale richiesto. Un servizio con alcune
            foto aeree può essere diverso da un video completo con più passaggi,
            riprese da diverse angolazioni, selezione del materiale e consegna di
            contenuti pronti per una presentazione commerciale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il tipo di struttura incide. Un piccolo B&B, un hotel urbano, un
            resort con piscina, un agriturismo con terreno o un albergo sul mare
            richiedono riprese diverse. Per questo è utile descrivere bene gli
            spazi da mostrare, l'uso finale del materiale e il livello di
            presentazione desiderato.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette al
            cliente di pubblicare il lavoro, ricevere candidature e scegliere il
            pilota drone più adatto in base alla struttura e al risultato
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
            pilota drone per foto e video di un hotel, un resort, un B&B, un
            agriturismo o una struttura ricettiva in vendita.
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
                Il drone è utile per vendere un hotel?
              </h3>
              <p className="text-gray-300">
                Sì, può aiutare a mostrare struttura, posizione, esterni,
                piscina, parcheggi, accessi, panorama e contesto turistico.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Va bene anche per resort e B&B?
              </h3>
              <p className="text-gray-300">
                Sì, il servizio può essere utile per hotel, resort, B&B,
                agriturismi, affittacamere, ville turistiche e strutture
                ricettive.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare il video per investitori?
              </h3>
              <p className="text-gray-300">
                Sì, foto e video possono essere usati per presentazioni,
                brochure digitali, annunci premium e materiali commerciali,
                secondo gli accordi presi con il pilota.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Le immagini drone sostituiscono una valutazione tecnica?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce materiale visivo utile, ma non sostituisce
                perizie, valutazioni, verifiche urbanistiche, documenti tecnici o
                analisi economiche della struttura.
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
            Trova un pilota drone per hotel in vendita
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto e video di hotel, alberghi, resort,
            B&B, agriturismi, strutture ricettive, piscine, giardini, parcheggi,
            terrazze, vista mare e immobili turistici in vendita.
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