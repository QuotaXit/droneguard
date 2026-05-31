import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per case vacanza | DroneGuard",
  description:
    "Trova piloti drone per foto e video di case vacanza, B&B, ville, appartamenti turistici, agriturismi e immobili da affittare online."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Foto e video drone per affitti turistici
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per case vacanza
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai una casa vacanza, una villa da affittare, un appartamento
            turistico, un B&B, un agriturismo o una struttura ricettiva e vuoi
            presentarla meglio online? Con DroneGuard puoi trovare piloti drone
            disponibili per realizzare foto aeree, video panoramici, riprese
            esterne e contenuti visivi pensati per valorizzare case vacanza,
            giardini, piscine, terrazzi, accessi, parcheggi, vista mare, vista
            montagna, campagna circostante, distanza dalla spiaggia, spazi esterni
            e posizione reale della struttura. Le immagini dall'alto possono
            aiutare il futuro ospite a capire subito dove si trova l'alloggio, che
            atmosfera offre e quali elementi lo rendono diverso da altre proposte.
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
              Più valore all'annuncio
            </h2>
            <p className="leading-7 text-gray-300">
              Foto e video con drone possono rendere più curato l'annuncio di una
              casa vacanza, mostrando esterni, vista, contesto e punti forti.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Mostra la posizione
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può far vedere vicinanza al mare, alla campagna, al centro,
              alle colline, ai servizi o ad altri elementi importanti per l'ospite.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Per host e proprietari
            </h2>
            <p className="leading-7 text-gray-300">
              Il servizio può essere richiesto da host, proprietari, agenzie,
              gestori di affitti brevi, B&B, agriturismi e strutture ricettive.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per una casa vacanza
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Chi prenota una casa vacanza online vuole capire subito se
              l'alloggio è adatto al proprio viaggio. Le foto interne sono
              fondamentali, ma spesso non bastano a raccontare tutto. Una casa
              vacanza può avere un giardino, una piscina, una terrazza panoramica,
              una vista sul mare, un accesso comodo, un parcheggio privato, un
              cortile esterno, una zona barbecue o una posizione tranquilla in
              campagna. Se questi elementi non vengono mostrati bene, l'annuncio
              rischia di sembrare meno interessante di quanto sia realmente.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può creare una presentazione più completa, perché permette
              di mostrare la struttura nel suo contesto. Una ripresa dall'alto può
              far vedere la distanza dalla spiaggia, la posizione rispetto al
              centro abitato, la presenza di verde intorno, il panorama, la strada
              di accesso, il parcheggio, la disposizione del giardino e le aree
              esterne dedicate agli ospiti. Tutti questi dettagli possono aiutare
              una persona a scegliere con maggiore sicurezza.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e ricevere candidature
              da piloti drone interessati. Puoi spiegare il tipo di struttura, la
              zona, il materiale che ti serve e l'utilizzo finale delle immagini,
              così da trovare il professionista più adatto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Strutture ideali per il drone
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Case vacanza al mare</li>
              <li>✅ Ville con piscina</li>
              <li>✅ B&B e affittacamere</li>
              <li>✅ Agriturismi e casali</li>
              <li>✅ Appartamenti turistici con terrazzo</li>
              <li>✅ Chalet e case in montagna</li>
              <li>✅ Strutture con giardino</li>
              <li>✅ Case immerse nella natura</li>
              <li>✅ Residence e piccoli complessi</li>
              <li>✅ Immobili per affitti brevi</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per annunci di case vacanza
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Gli annunci di case vacanza vengono confrontati velocemente. Un
            viaggiatore guarda immagini, posizione, prezzo, recensioni e servizi,
            poi decide se salvare l'alloggio o passare a un'altra proposta. Per
            questo motivo, una galleria fotografica chiara e curata può fare una
            grande differenza. Le immagini con drone possono aggiungere una
            prospettiva che normalmente manca: la visione completa della
            struttura e dell'ambiente circostante.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Una casa al mare può essere valorizzata mostrando la distanza dalla
            spiaggia, la vista sulla costa, il percorso di accesso e gli spazi
            esterni. Una villa con piscina può essere raccontata mostrando la
            disposizione tra casa, giardino, zona relax e parcheggio. Un
            agriturismo può essere presentato evidenziando campi, natura,
            tranquillità e ampiezza degli spazi. Un appartamento con terrazzo può
            essere valorizzato mostrando la vista e il contesto urbano.
          </p>

          <p className="leading-8 text-gray-300">
            Il materiale realizzato può essere usato su portali di affitti brevi,
            siti web, pagine social, campagne promozionali, brochure digitali,
            schede struttura e contenuti per attirare nuovi ospiti.
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
                Crea un account come proprietario, host, gestore, agenzia o
                pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi la casa vacanza, la zona, gli esterni e il tipo di foto
                o video che vuoi ottenere.
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
                struttura e al risultato desiderato.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Video drone per attirare più attenzione
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un breve video con drone può essere molto utile per presentare una
              casa vacanza in modo più emozionale. Il video può iniziare con una
              panoramica della zona, avvicinarsi alla struttura, mostrare il
              giardino, passare sopra la piscina, evidenziare il terrazzo, far
              vedere il panorama e concludere con una vista generale dell'alloggio.
              Questo tipo di contenuto è adatto soprattutto ai social, alle
              campagne sponsorizzate e alle pagine di presentazione della
              struttura.
            </p>

            <p className="leading-8 text-gray-300">
              Non serve sempre un video lungo. Anche una clip breve, ordinata e
              ben ripresa può aiutare a comunicare atmosfera, posizione e punti di
              forza della casa vacanza.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Mostrare vista, esterni e contesto
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Molti ospiti scelgono una casa vacanza non solo per le stanze, ma
              anche per quello che possono vivere fuori: colazione in terrazza,
              relax in piscina, vista al tramonto, giardino per la famiglia,
              tranquillità, parcheggio comodo o distanza ridotta dal mare. Il
              drone può mostrare questi elementi in modo diretto e più credibile.
            </p>

            <p className="leading-8 text-gray-300">
              Una buona immagine dall'alto può far capire subito se la struttura
              è isolata, centrale, panoramica, vicina alla spiaggia, immersa nella
              natura o adatta a un certo tipo di soggiorno.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per una casa vacanza
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, descrivi bene la struttura:
            casa vacanza, villa, appartamento turistico, B&B, agriturismo,
            residence, casale, chalet o immobile per affitti brevi. Indica la
            città, la zona, il tipo di contesto e quali elementi vuoi valorizzare.
            Puoi specificare se la casa si trova vicino al mare, in campagna, in
            montagna, in centro storico, in collina o in una località turistica.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Scrivi se ti servono foto aeree, video breve, video verticale per
            social, video orizzontale per sito web, riprese della piscina, vista
            del giardino, panoramiche della zona, immagini della strada di
            accesso, dettagli del parcheggio o contenuti per migliorare l'annuncio
            online. Più la richiesta è chiara, più sarà semplice per il pilota
            capire il tipo di lavoro da svolgere.
          </p>

          <p className="leading-8 text-gray-300">
            Il pilota dovrà sempre valutare sicurezza, privacy, condizioni meteo,
            presenza di persone, ostacoli, spazi di decollo, aree vicine e regole
            applicabili al volo. DroneGuard mette in contatto cliente e
            professionista, ma ogni servizio deve essere organizzato correttamente
            dal pilota scelto.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per casa vacanza
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e un breve video di una
              casa vacanza vicino al mare. Vorrei mostrare la struttura
              dall'alto, il giardino, il terrazzo, la strada di accesso, il
              parcheggio e la distanza dalla spiaggia. Il materiale sarà usato per
              migliorare l'annuncio online, il sito web e i canali social.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire subito il tipo di
            struttura, il risultato desiderato e gli elementi da valorizzare nelle
            riprese.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per case vacanza?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla zona, alla distanza, alla durata del
            servizio, alla complessità della struttura e al tipo di materiale
            richiesto. Un servizio con alcune foto aeree può essere diverso da un
            video più completo con più passaggi, riprese da diverse angolazioni,
            selezione del materiale e consegna di contenuti pronti per la
            pubblicazione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il tipo di casa vacanza incide. Una villa con piscina e grande
            giardino richiede una ripresa diversa rispetto a un piccolo
            appartamento con terrazzo, a un agriturismo con terreno o a una casa
            al mare dove è importante mostrare il rapporto con la spiaggia. Per
            questo è utile pubblicare una richiesta dettagliata e lasciare che i
            piloti interessati valutino il lavoro.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette al
            cliente di pubblicare il lavoro, ricevere candidature e scegliere il
            pilota drone più adatto in base alle esigenze della struttura.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Crediti su DroneGuard
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione.
            Pubblicare un lavoro costa 5 crediti, quindi puoi iniziare cercando un
            pilota drone per la tua casa vacanza e ricevere candidature dai
            professionisti interessati.
          </p>

          <p className="leading-8 text-gray-300">
            I nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.
            Rispondere o candidarsi a un annuncio costa 5 crediti. Questo sistema
            aiuta a collegare chi ha bisogno di foto o video con drone e chi è
            disponibile a realizzarli.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per una casa vacanza?
              </h3>
              <p className="text-gray-300">
                Sì, soprattutto se la struttura ha giardino, piscina, terrazzo,
                vista, posizione particolare o spazi esterni da valorizzare.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare le immagini su portali turistici?
              </h3>
              <p className="text-gray-300">
                Sì, foto e video possono essere usati per annunci, sito web,
                social e materiali promozionali, secondo gli accordi presi con il
                pilota.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Va bene anche per B&B e agriturismi?
              </h3>
              <p className="text-gray-300">
                Sì, il drone può essere utile per B&B, agriturismi, casali,
                residence, affittacamere, ville e strutture ricettive.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente il servizio?
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
            Trova un pilota drone per case vacanza
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto e video di case vacanza, ville,
            appartamenti turistici, B&B, agriturismi, strutture ricettive,
            giardini, piscine, terrazzi, panorami e immobili per affitti brevi.
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