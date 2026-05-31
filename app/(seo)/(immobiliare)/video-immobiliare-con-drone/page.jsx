import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Video immobiliare con drone | DroneGuard",
  description:
    "Trova piloti drone per video immobiliari, riprese aeree di ville, case, terreni, casali, agenzie immobiliari, immobili di pregio e annunci professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per video immobiliari professionali
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Video immobiliare con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Un video immobiliare con drone permette di valorizzare case, ville,
            casali, terreni, appartamenti di pregio, strutture ricettive e immobili
            commerciali mostrando non solo gli spazi, ma anche il contesto in cui
            si trovano. Le riprese aeree aiutano a raccontare la posizione, il
            panorama, il giardino, la piscina, gli accessi, il terreno, la distanza
            dal mare, la vicinanza ai servizi e tutti quegli elementi che spesso
            non emergono da una semplice foto scattata da terra. Con DroneGuard
            puoi trovare piloti drone disponibili per realizzare video immobiliari
            professionali per agenzie, privati, property manager, costruttori,
            architetti e professionisti del settore.
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
              Annunci più professionali
            </h2>
            <p className="text-gray-300">
              Un video con drone può rendere l'annuncio immobiliare più curato,
              più completo e più capace di attirare l'attenzione di potenziali
              acquirenti.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Valorizzazione del contesto
            </h2>
            <p className="text-gray-300">
              Le riprese aeree mostrano posizione, panorama, accessi, giardino,
              terreno, piscina, quartiere e caratteristiche esterne dell'immobile.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Contenuti per social e portali
            </h2>
            <p className="text-gray-300">
              Il materiale video può essere usato su portali immobiliari, sito
              dell'agenzia, social network, campagne pubblicitarie e presentazioni.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché realizzare un video immobiliare con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Nel mercato immobiliare la prima impressione è fondamentale. Molti
              utenti scorrono rapidamente annunci, foto e schede immobiliari, e
              spesso decidono in pochi secondi se approfondire o passare oltre. Un
              video immobiliare con drone può rendere un annuncio più interessante
              perché mostra l'immobile in modo dinamico, emozionale e completo.
              Non si limita a far vedere stanze o dettagli, ma racconta la proprietà
              nel suo insieme.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone è particolarmente utile quando l'immobile ha elementi esterni
              importanti. Ville con giardino, case indipendenti, casali, agriturismi,
              terreni edificabili, immobili vista mare, strutture turistiche,
              capannoni, complessi residenziali e proprietà di pregio possono
              beneficiare molto di riprese dall'alto. Una vista aerea permette di
              capire meglio la dimensione dell'area, la distribuzione degli spazi,
              la posizione rispetto alle strade, la presenza di piscina, parcheggi,
              pertinenze, verde, accessi e panorama.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone
              interessati a realizzare il servizio. Puoi indicare la città, il tipo
              di immobile, il risultato desiderato e ricevere candidature da
              operatori disponibili nella tua zona.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Video immobiliari utili per
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Ville e case indipendenti</li>
              <li>✅ Casali, agriturismi e rustici</li>
              <li>✅ Terreni agricoli ed edificabili</li>
              <li>✅ Immobili di pregio e proprietà panoramiche</li>
              <li>✅ Hotel, B&B e strutture ricettive</li>
              <li>✅ Capannoni e immobili commerciali</li>
              <li>✅ Cantieri e nuove costruzioni</li>
              <li>✅ Agenzie immobiliari e property manager</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Video con drone per agenzie immobiliari
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per un'agenzia immobiliare, avere contenuti video di qualità può
            diventare un vantaggio competitivo. Un annuncio con un video ben
            realizzato può comunicare professionalità, cura e attenzione al valore
            dell'immobile. Inoltre, il video può essere riutilizzato in diversi
            canali: portali immobiliari, sito web dell'agenzia, campagne social,
            newsletter, presentazioni per clienti venditori e materiale promozionale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese con drone sono molto efficaci quando bisogna raccontare
            immobili difficili da descrivere solo con foto interne. Una villa può
            essere valorizzata mostrando il giardino e il contesto; un terreno può
            essere presentato evidenziando forma, accessi e posizione; un casale
            può essere raccontato insieme alla campagna circostante; una struttura
            turistica può mostrare camere, piscina, parcheggi, spazi esterni e
            panorama.
          </p>

          <p className="leading-8 text-gray-300">
            Anche per i privati che vendono un immobile importante, un video con
            drone può aiutare a presentare meglio la proprietà. Non sostituisce le
            fotografie tradizionali, ma le completa con una visione più ampia e
            coinvolgente.
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
                Crea gratuitamente il tuo account come cliente, agenzia immobiliare
                o pilota drone.
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
                Descrivi immobile, città, tipo di video, obiettivo e risultato che
                vuoi ottenere.
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
              Video per ville, terreni e casali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Ville, casali e terreni sono tra gli immobili che traggono più
              beneficio dalle riprese con drone. In questi casi il valore non è
              dato solo dagli interni, ma anche dallo spazio esterno, dalla
              posizione, dal panorama, dagli accessi e dal contesto. Un video
              dall'alto può mostrare elementi che spesso non si percepiscono dalle
              normali foto.
            </p>

            <p className="leading-8 text-gray-300">
              Per un terreno, il drone può aiutare a far capire meglio estensione,
              forma, accessi, posizione rispetto alle strade e caratteristiche
              dell'area. Per una villa o un casale, invece, può valorizzare
              giardino, piscina, vialetto, pertinenze, uliveti, vigneti o vista
              panoramica.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Video per social, annunci e campagne
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un video immobiliare con drone può essere adattato a diversi usi.
              Può servire per un annuncio completo, per un breve contenuto social,
              per una campagna pubblicitaria, per una presentazione al venditore o
              per arricchire la scheda dell'immobile sul sito dell'agenzia.
            </p>

            <p className="leading-8 text-gray-300">
              Quando pubblichi la richiesta su DroneGuard, puoi specificare se ti
              serve solo materiale grezzo, un montaggio breve, un video verticale
              per social, un video orizzontale per il sito o riprese da integrare
              con fotografie e immagini interne.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova piloti drone per video immobiliari
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta per un video immobiliare
            con drone e ricevere candidature da operatori interessati. È utile
            indicare la città, il tipo di immobile, la metratura indicativa degli
            spazi esterni, l'obiettivo del video e il formato che ti serve. Ad
            esempio, puoi richiedere un video per vendere una villa, promuovere un
            casale, mostrare un terreno, valorizzare un immobile vista mare o creare
            contenuti per una campagna social.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, specifica se ti serve solo il
            volo e la consegna del materiale, oppure anche il montaggio finale. Puoi
            indicare se vuoi riprese lente e cinematiche, immagini panoramiche,
            passaggi sopra il terreno, inquadrature della facciata, dettagli del
            giardino, vista della piscina, riprese del quartiere o collegamenti con
            gli interni realizzati da un altro professionista.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma può essere utilizzata da agenzie immobiliari, privati,
            costruttori, architetti, property manager, hotel, agriturismi, società
            immobiliari e professionisti che vogliono creare contenuti visivi più
            efficaci per promuovere una proprietà.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Un video con drone aiuta a vendere un immobile?
              </h3>
              <p className="text-gray-300">
                Può aiutare a presentare meglio l'immobile, soprattutto quando ci
                sono spazi esterni, vista, terreno, giardino, piscina o una
                posizione interessante da mostrare.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Per quali immobili conviene usare il drone?
              </h3>
              <p className="text-gray-300">
                Il drone è utile per ville, casali, terreni, immobili di pregio,
                strutture turistiche, capannoni, hotel, agriturismi, nuove
                costruzioni e proprietà con spazi esterni importanti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere anche il montaggio del video?
              </h3>
              <p className="text-gray-300">
                Sì, nella richiesta puoi specificare se ti serve solo materiale
                grezzo oppure anche un video montato per sito, portali immobiliari,
                social network o campagne pubblicitarie.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente video immobiliari?
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
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per video immobiliari
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e ricevi candidature
            da piloti drone interessati a realizzare video immobiliari, riprese
            aeree di ville, case, terreni, casali, immobili di pregio, strutture
            ricettive, annunci professionali e contenuti per agenzie immobiliari.
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