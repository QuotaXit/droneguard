import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per camping e glamping | DroneGuard",
  description:
    "Trova piloti drone per camping, campeggi, glamping, villaggi turistici e strutture all'aperto. Richiedi foto aeree e video promozionali con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per campeggi e turismo outdoor
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per camping e glamping
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Gestisci un camping, un campeggio, un glamping, un villaggio turistico,
            un'area camper o una struttura ricettiva immersa nella natura? Con
            DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto aeree, video promozionali, riprese
            dall'alto e contenuti professionali per valorizzare la tua struttura.
            Il drone permette di mostrare piazzole, bungalow, tende, piscine,
            aree verdi, accessi, parcheggi, percorsi interni, zone relax, servizi,
            ristoranti, vicinanza al mare, lago, montagna o contesto naturale.
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
              Video per campeggi
            </h2>
            <p className="text-gray-300">
              Richiedi video aerei per presentare piazzole, bungalow, piscine,
              aree verdi, servizi, percorsi interni e atmosfera del camping.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto aeree per glamping
            </h2>
            <p className="text-gray-300">
              Ottieni fotografie dall'alto per sito web, social, portali turistici,
              campagne pubblicitarie e promozione della struttura.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti drone disponibili
            </h2>
            <p className="text-gray-300">
              Pubblica il lavoro, indica località e struttura, e ricevi candidature
              da operatori drone interessati al servizio.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per un camping
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un camping o un glamping non vende solo un posto dove dormire, ma
              un'esperienza all'aperto. Chi sceglie una struttura di questo tipo
              vuole capire se ci sono spazi verdi, servizi curati, aree relax,
              piscina, bungalow, piazzole comode, accessi semplici e un contesto
              naturale piacevole.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le foto da terra sono importanti, ma spesso non riescono a mostrare
              l'intera organizzazione della struttura. Il drone può far vedere
              dall'alto la disposizione delle piazzole, la distanza tra le aree, i
              percorsi interni, la piscina, il ristorante, il parcheggio, i servizi,
              la vicinanza alla spiaggia, al lago o al bosco e il rapporto con il
              paesaggio circostante.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone
              disponibili nella tua zona. La piattaforma non realizza direttamente
              il servizio, ma mette in contatto gestori di campeggi, villaggi,
              glamping, aree camper e operatori drone professionali.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per camping
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Video promozionali per camping e campeggi</li>
              <li>✅ Foto aeree per glamping e villaggi turistici</li>
              <li>✅ Riprese di piazzole, bungalow e tende</li>
              <li>✅ Video di piscine, aree relax e spazi verdi</li>
              <li>✅ Contenuti per sito web, social e campagne ads</li>
              <li>✅ Foto per portali turistici e prenotazioni online</li>
              <li>✅ Riprese di accessi, parcheggi e percorsi interni</li>
              <li>✅ Materiale per strutture al mare, lago o montagna</li>
              <li>✅ Video per promuovere stagione estiva e servizi outdoor</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Video drone per campeggi, villaggi e glamping
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un video con drone può rendere molto più chiara la presentazione di un
            camping. In pochi secondi permette di mostrare dimensioni, disposizione
            degli spazi, atmosfera, servizi e posizione della struttura. Questo è
            molto utile perché un campeggio spesso ha tante aree diverse che da
            terra non si capiscono subito.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può valorizzare un campeggio sul mare mostrando la distanza
            dalla spiaggia, la pineta, gli accessi, la piscina e le aree comuni.
            Può raccontare un camping in montagna mostrando boschi, percorsi,
            piazzole e panorama. Può presentare un glamping mettendo in evidenza
            tende, lodge, privacy, design degli spazi e contesto naturale.
          </p>

          <p className="leading-8 text-gray-300">
            Il materiale può essere usato su sito ufficiale, Instagram, Facebook,
            TikTok, YouTube, campagne pubblicitarie, portali turistici, newsletter,
            brochure digitali e contenuti promozionali per aumentare prenotazioni
            e visibilità online.
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
                Crea il tuo account come cliente, camping, glamping, villaggio
                turistico, area camper o pilota drone.
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
                Descrivi struttura, località, aree da riprendere e materiale finale
                che vuoi ottenere.
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
              Drone per camping sul mare
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I camping sul mare possono ottenere un grande vantaggio dalle riprese
              aeree. Il drone può mostrare la distanza dalla spiaggia, la pineta,
              le piazzole, i bungalow, la piscina, il ristorante, gli accessi al
              mare, il parcheggio e la posizione rispetto alla località turistica.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di contenuto aiuta l'ospite a capire subito dove si trova
              la struttura, quali servizi offre e quale esperienza può aspettarsi
              durante il soggiorno.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per glamping e strutture nella natura
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il glamping punta molto su atmosfera, natura e comfort. Il drone può
              mostrare lodge, tende, casette, percorsi interni, spazi privati,
              boschi, colline, lago, montagna o qualsiasi elemento naturale che
              renda la struttura diversa da un campeggio tradizionale.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini dall'alto aiutano a comunicare privacy, design,
              tranquillità e rapporto con l'ambiente, elementi molto importanti per
              chi cerca un'esperienza outdoor più curata.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per sito, social e portali turistici
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le fotografie aeree possono migliorare molto la comunicazione visiva di
            un camping. Una buona foto dall'alto può diventare la copertina del
            sito, un post social, una creatività pubblicitaria, una pagina dedicata
            ai servizi o un contenuto da inserire in portali turistici e brochure
            digitali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone è particolarmente utile quando la struttura ha elementi
            esterni importanti: piscina, aree verdi, piazzole ordinate, bungalow,
            accesso diretto al mare, vicinanza a un lago, area camper, zona sport,
            ristorante, area bambini, parcheggio o percorsi interni ben organizzati.
          </p>

          <p className="leading-8 text-gray-300">
            Pubblicando una richiesta su DroneGuard puoi specificare se ti servono
            solo fotografie, un video breve, un video completo, riprese grezze,
            contenuti verticali per social o un pacchetto completo per promuovere
            la struttura.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Campeggi e villaggi
            </h2>
            <p className="text-gray-300">
              Riprese aeree per valorizzare piazzole, bungalow, piscine, spazi
              comuni, servizi, aree verdi, ristoranti e percorsi interni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Glamping e lodge
            </h2>
            <p className="text-gray-300">
              Video e foto per tende attrezzate, lodge, casette, strutture premium,
              aree relax e soggiorni immersi nella natura.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Aree camper
            </h2>
            <p className="text-gray-300">
              Contenuti utili per mostrare accessi, piazzole camper, servizi,
              parcheggi, area carico/scarico e posizione della struttura.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta per un camping
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            tipo di struttura e il risultato che vuoi ottenere. Puoi indicare il
            nome del camping, la località, la provincia, il tipo di struttura e le
            aree principali che vuoi valorizzare con il drone.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se vuoi riprendere piazzole, bungalow, tende,
            lodge, piscina, area bambini, ristorante, accesso al mare, pineta,
            parcheggio, area camper, reception, servizi igienici, percorsi interni
            o panorama circostante. Puoi anche indicare se preferisci riprese con
            struttura ordinata, durante la stagione o al tramonto.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere anche l'uso finale del materiale: sito web, social,
            portali turistici, campagne pubblicitarie, reel verticali, brochure,
            video stagionale, presentazione commerciale o contenuti per aumentare
            le prenotazioni.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per camping o glamping
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video promozionali di
              un camping vicino al mare. Vorrei riprese dall'alto delle piazzole,
              dei bungalow, della piscina, della pineta, del ristorante, degli
              accessi alla spiaggia, del parcheggio e dei percorsi interni. Il
              materiale mi serve per sito web, social, portali turistici e campagne
              pubblicitarie.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire subito il tipo di struttura,
            le aree da riprendere, il risultato desiderato e l'obiettivo commerciale
            del servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per camping?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per camping, campeggi e glamping può
            variare in base alla zona, alla durata delle riprese, alla grandezza
            della struttura, al numero di aree da riprendere, al tipo di materiale
            richiesto e alla post-produzione. Un servizio con sole fotografie può
            avere un costo diverso rispetto a un video completo con montaggio,
            musica, color correction e formati per social.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il periodo delle riprese può incidere. Alcune strutture preferiscono
            riprese prima dell'apertura stagionale, con aree ordinate e vuote; altre
            vogliono mostrare il camping durante la stagione, con ospiti, atmosfera,
            attività e servizi in funzione.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo fisso. La piattaforma permette di
            pubblicare il lavoro e ricevere candidature da piloti drone interessati,
            così cliente e professionista possono accordarsi sul servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso trovare un pilota drone per un camping?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta e ricevere
                candidature da piloti drone disponibili per foto e video di
                camping, campeggi, glamping e villaggi turistici.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per un glamping?
              </h3>
              <p className="text-gray-300">
                Sì, perché permette di mostrare dall'alto tende, lodge, spazi
                privati, natura, percorsi interni, atmosfera e posizione della
                struttura.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere contenuti per social?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare se ti servono foto, video brevi, reel,
                contenuti verticali, video completo o materiale pronto per campagne
                social.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente il servizio?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone. Il servizio
                viene svolto dal professionista scelto dal cliente.
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
            Trova un pilota drone per il tuo camping
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video promozionali, riprese
            professionali e contenuti visivi per camping, campeggi, glamping,
            villaggi turistici, aree camper e strutture outdoor.
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