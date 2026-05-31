import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per ville in vendita | DroneGuard",
  description:
    "Trova piloti drone per foto e video di ville in vendita. Riprese aeree per valorizzare giardini, piscine, terreni, accessi, panorama e annunci immobiliari."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ville in vendita con riprese aeree
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per ville in vendita
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi vendere una villa e vuoi presentarla con immagini più complete,
            professionali e coinvolgenti? Con DroneGuard puoi trovare piloti drone
            disponibili per realizzare foto aeree, video immobiliari, riprese
            panoramiche e contenuti visivi pensati per valorizzare ville in
            vendita, case indipendenti, proprietà con piscina, giardini privati,
            terreni, accessi carrabili, terrazzi, dependance, cortili, aree verdi
            e contesti panoramici. Una villa non si racconta solo con le foto
            interne: spesso il valore principale si trova negli esterni, nella
            posizione, nella privacy, nella vista, nella grandezza del lotto e nel
            modo in cui la proprietà si inserisce nel paesaggio circostante.
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
              Valorizza la proprietà
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può mostrare la villa nel suo insieme, facendo vedere
              giardino, piscina, accessi, terrazzi, parcheggi, terreno e contesto.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Annuncio più completo
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini dall'alto aiutano il potenziale acquirente a capire
              meglio spazi, distanze, proporzioni e caratteristiche esterne.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Per privati e agenzie
            </h2>
            <p className="leading-7 text-gray-300">
              Il servizio può essere richiesto da proprietari, agenzie
              immobiliari, consulenti, costruttori e professionisti del settore.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per vendere una villa
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Una villa in vendita ha spesso caratteristiche che non possono
              essere spiegate bene con poche foto tradizionali. Gli interni sono
              importanti, ma per una proprietà di questo tipo contano molto anche
              il giardino, la piscina, il vialetto, il cancello, la distanza dalle
              altre abitazioni, la privacy, l'esposizione, il panorama, il terreno
              circostante e la qualità degli spazi esterni. Il drone permette di
              raccontare tutto questo in modo più chiaro e immediato.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Una ripresa aerea può far capire al potenziale acquirente come è
              organizzata la proprietà, dove si trova l'ingresso, quanto è grande
              il giardino, come sono disposti piscina e aree esterne, quali sono
              le pertinenze e che tipo di contesto circonda la casa. Questo è
              particolarmente utile quando l'immobile si trova in campagna, in
              collina, vicino al mare, in una zona panoramica o in un quartiere
              residenziale con spazi aperti.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta dettagliata e ricevere
              candidature da piloti drone interessati. Puoi spiegare il tipo di
              villa, la zona, il materiale richiesto e l'utilizzo finale delle
              immagini, così da trovare il professionista più adatto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa mostrare con il drone
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Vista generale della villa</li>
              <li>✅ Giardino e aree verdi</li>
              <li>✅ Piscina e zona relax</li>
              <li>✅ Cancello, vialetto e accessi</li>
              <li>✅ Terrazzi, porticati e balconi</li>
              <li>✅ Terreno circostante</li>
              <li>✅ Parcheggi e pertinenze</li>
              <li>✅ Panorama e vista dall'alto</li>
              <li>✅ Privacy rispetto alle case vicine</li>
              <li>✅ Contesto urbano, collinare o marittimo</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per ville, giardini e piscine
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            In una villa, gli esterni possono essere una delle parti più
            importanti dell'annuncio. Un giardino curato, una piscina, una zona
            pranzo all'aperto, un portico, un terrazzo panoramico o un ampio
            terreno possono aumentare molto l'interesse del potenziale acquirente.
            Tuttavia, da terra non è sempre facile far percepire dimensioni,
            disposizione e rapporto tra gli spazi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può realizzare immagini dall'alto che mostrano la villa come
            una vera proprietà completa. Si può vedere la casa, il giardino, la
            piscina, il percorso di ingresso, l'area parcheggio, le eventuali
            dependance e il terreno. Questo aiuta chi guarda l'annuncio a
            comprendere meglio il valore complessivo dell'immobile prima ancora
            di fissare una visita.
          </p>

          <p className="leading-8 text-gray-300">
            Le foto aeree possono essere usate nei portali immobiliari, nella
            scheda dell'immobile sul sito dell'agenzia, sui social, nelle
            sponsorizzate, nelle brochure digitali e nelle presentazioni ai
            clienti interessati.
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
                professionista o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi la villa, la zona, gli spazi esterni e il tipo di foto o
                video che vuoi ottenere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti drone interessati possono candidarsi e proporti la loro
                disponibilità.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Valuta il professionista più adatto in base alla zona, al lavoro
                richiesto e al risultato desiderato.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Video drone per ville di pregio
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Per una villa di pregio, un video con drone può creare una
              presentazione più emozionale rispetto a una semplice galleria
              fotografica. Il video può iniziare con una panoramica del contesto,
              avvicinarsi alla proprietà, mostrare il giardino, passare sopra la
              piscina, riprendere l'ingresso, evidenziare il panorama e concludere
              con una vista generale della villa.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di contenuto può essere usato per annunci premium,
              campagne social, video sul sito dell'agenzia, presentazioni per
              clienti interessati e materiale promozionale dedicato agli immobili
              di fascia alta.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Ville con terreno o vista panoramica
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Se la villa dispone di terreno, uliveto, parco, area agricola,
              bosco, giardino molto grande o vista panoramica, il drone può
              diventare uno strumento ancora più utile. Una ripresa dall'alto può
              far capire estensione, posizione, accessi e rapporto tra la casa e
              l'ambiente circostante.
            </p>

            <p className="leading-8 text-gray-300">
              In molti annunci, il terreno viene descritto solo con una metratura.
              Con il drone, invece, può essere mostrato visivamente, rendendo la
              scheda immobiliare più chiara e più convincente.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come preparare una richiesta per una villa in vendita
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, è importante descrivere bene la
            proprietà. Indica se si tratta di una villa singola, bifamiliare,
            villa con piscina, villa con terreno, casa indipendente, proprietà di
            lusso, villa al mare, villa in campagna o immobile panoramico.
            Specifica la città, la zona, la presenza di ostacoli, eventuali spazi
            da riprendere e il tipo di materiale che ti serve.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi chiedere foto aeree, video breve, video per social, video
            orizzontale per portali immobiliari, riprese panoramiche, immagini
            degli accessi, foto della piscina, riprese del giardino, vista del
            terreno, immagini del quartiere o materiale da usare per una brochure
            digitale. Più informazioni inserisci, più il pilota potrà capire il
            lavoro richiesto.
          </p>

          <p className="leading-8 text-gray-300">
            Ricorda che il pilota dovrà sempre valutare sicurezza, privacy,
            condizioni meteo, spazi di decollo, presenza di persone, ostacoli,
            aree vicine e regole applicabili al volo. DroneGuard mette in
            contatto cliente e professionista, ma l'organizzazione del servizio
            deve essere sempre gestita correttamente dal pilota scelto.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per villa in vendita
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di una villa in
              vendita. Vorrei mostrare la casa dall'alto, il giardino, la piscina,
              il vialetto di ingresso, il parcheggio, il terreno circostante e il
              panorama. Il materiale sarà utilizzato per un annuncio immobiliare,
              per il sito dell'agenzia e per una breve promozione sui social.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            immobile, l'obiettivo del servizio e gli elementi principali da
            valorizzare durante le riprese.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per una villa?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla zona, alla distanza, alla durata del
            lavoro, alla complessità della proprietà e al tipo di materiale
            richiesto. Un servizio con alcune foto aeree può essere diverso da un
            video completo con più riprese, angolazioni diverse, passaggi
            panoramici, selezione delle immagini e consegna di contenuti pronti
            per la pubblicazione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche le dimensioni della villa e degli esterni possono incidere. Una
            proprietà con grande giardino, piscina, terreno, dependance e vista
            panoramica richiede una pianificazione diversa rispetto a una casa
            indipendente più semplice. Per questo è utile pubblicare una richiesta
            chiara e lasciare che i piloti interessati valutino il lavoro.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette di
            pubblicare il lavoro, ricevere candidature e scegliere il pilota drone
            più adatto in base alle esigenze dell'immobile.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Crediti su DroneGuard
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione.
            Pubblicare un lavoro costa 5 crediti, quindi puoi iniziare cercando un
            pilota drone per la tua villa in vendita e ricevere candidature dai
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
                Il drone è utile per vendere una villa?
              </h3>
              <p className="text-gray-300">
                Sì, è molto utile quando la villa ha giardino, piscina, terreno,
                vista, accessi importanti o un contesto esterno da valorizzare.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare le riprese per un annuncio immobiliare?
              </h3>
              <p className="text-gray-300">
                Sì, foto e video possono essere usati per portali immobiliari,
                sito web, social, brochure digitali e presentazioni, secondo gli
                accordi presi con il pilota.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Va bene anche per ville con piscina?
              </h3>
              <p className="text-gray-300">
                Sì, le ville con piscina sono tra gli immobili più adatti alle
                riprese drone, perché la vista dall'alto mostra meglio la
                disposizione degli spazi esterni.
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
            Trova un pilota drone per ville in vendita
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto e video di ville in vendita, case
            indipendenti, proprietà con piscina, giardini, terreni, accessi,
            terrazzi, panorami e immobili da valorizzare negli annunci online.
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