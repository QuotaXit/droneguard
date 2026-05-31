import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per resort e villaggi turistici | DroneGuard",
  description:
    "Trova piloti drone per resort, villaggi turistici, spa, hotel e strutture ricettive. Richiedi foto aeree e video promozionali con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per turismo e ospitalità
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per resort e villaggi turistici
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai un resort, un villaggio turistico, una spa, una struttura sul mare,
            un complesso ricettivo o un hotel con grandi spazi esterni? Con
            DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto aeree, video promozionali, riprese
            professionali e contenuti visivi pensati per valorizzare la tua
            struttura. Il drone permette di mostrare dall'alto piscine, spiaggia,
            giardini, aree relax, ristoranti, camere, percorsi interni, campi
            sportivi, accessi, parcheggi e tutto il contesto turistico che rende
            riconoscibile un resort o un villaggio.
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
              Video per resort
            </h2>
            <p className="text-gray-300">
              Richiedi video aerei per presentare struttura, piscina, mare,
              giardini, aree relax, camere, ristorante e servizi principali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto per villaggi turistici
            </h2>
            <p className="text-gray-300">
              Ottieni fotografie dall'alto per sito web, social, portali turistici,
              campagne pubblicitarie e cataloghi digitali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti drone disponibili
            </h2>
            <p className="text-gray-300">
              Pubblica il lavoro, indica zona e struttura, e ricevi candidature da
              operatori drone interessati al servizio.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per un resort
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un resort o un villaggio turistico non si racconta solo con le camere.
              Chi deve prenotare vuole vedere l'esperienza completa: il mare, la
              piscina, le aree verdi, i ristoranti, gli spazi dedicati alle famiglie,
              le zone relax, i percorsi interni, la posizione e l'atmosfera
              generale della struttura.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le immagini tradizionali da terra sono utili, ma spesso non riescono
              a far capire davvero la grandezza di un resort o l'organizzazione di
              un villaggio turistico. Il drone può mostrare la struttura nel suo
              insieme, evidenziando la distanza dal mare, la disposizione delle
              aree, il verde, i servizi, gli accessi e il rapporto con il paesaggio
              circostante.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta specifica e ricevere
              candidature da piloti drone disponibili. La piattaforma non realizza
              direttamente il servizio, ma mette in contatto strutture ricettive,
              agenzie, property manager e operatori drone professionali.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per resort
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Video promozionali per resort e villaggi turistici</li>
              <li>✅ Foto aeree di piscine, giardini e spiagge</li>
              <li>✅ Riprese di camere, ristoranti e aree comuni</li>
              <li>✅ Video per sito web, social e campagne pubblicitarie</li>
              <li>✅ Contenuti per portali turistici e agenzie viaggio</li>
              <li>✅ Riprese di spa, aree relax e servizi premium</li>
              <li>✅ Video per strutture sul mare o in montagna</li>
              <li>✅ Materiale per brochure digitali e presentazioni</li>
              <li>✅ Riprese per villaggi, camping, glamping e hotel</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Video drone per promuovere un resort
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un video drone può diventare uno dei contenuti più forti per promuovere
            un resort. In pochi secondi permette di far vedere la struttura da una
            prospettiva emozionale e completa, mostrando non solo gli edifici, ma
            anche l'ambiente, i servizi, la posizione e l'esperienza che il cliente
            può vivere durante il soggiorno.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per un resort sul mare, il drone può mostrare la spiaggia, gli ombrelloni,
            la piscina, il lungomare, le aree relax, i percorsi pedonali e la vista
            panoramica. Per un resort in montagna può valorizzare il paesaggio, i
            boschi, i sentieri, le terrazze, la spa e la posizione rispetto alle
            attrazioni naturali. Per un villaggio turistico può far capire meglio
            l'organizzazione degli spazi e dei servizi.
          </p>

          <p className="leading-8 text-gray-300">
            Il materiale può essere utilizzato sul sito ufficiale, sui social, nei
            video promozionali, nelle campagne pubblicitarie, nelle newsletter,
            nelle presentazioni commerciali e nei contenuti destinati ad agenzie o
            portali turistici.
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
                Crea il tuo account come cliente, resort, struttura ricettiva,
                agenzia o pilota drone.
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
                Descrivi la struttura, la zona, le aree da riprendere e il
                materiale finale che vuoi ottenere.
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
              Drone per resort sul mare
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I resort sul mare sono tra le strutture che possono beneficiare di più
              delle riprese aeree. Il drone può mostrare la distanza dalla spiaggia,
              il colore del mare, la piscina, le aree relax, i ristoranti, i
              vialetti interni, il parcheggio e il panorama circostante.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di video aiuta il potenziale ospite a capire subito il
              valore della struttura e l'esperienza che può vivere durante la
              vacanza.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per villaggi turistici
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un villaggio turistico ha spesso molte aree diverse: camere, bungalow,
              piscina, animazione, ristorante, bar, campi sportivi, spiaggia, area
              bambini, parcheggi e percorsi interni. Il drone può mostrare la
              struttura nel suo insieme e rendere più chiara l'organizzazione degli
              spazi.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini dall'alto sono utili per comunicare ampiezza, servizi,
              posizione e atmosfera generale, elementi importanti per chi deve
              scegliere una vacanza.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per sito, social e portali turistici
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le fotografie aeree possono migliorare la comunicazione visiva di un
            resort. Una foto dall'alto può diventare una copertina forte per il sito
            web, una galleria più completa per i portali turistici o un contenuto
            ideale per campagne social e annunci sponsorizzati.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini con drone sono particolarmente utili quando la struttura ha
            elementi esterni importanti: piscina, spiaggia privata, aree verdi,
            terrazze panoramiche, zona relax, campi sportivi, ristoranti all'aperto,
            accessi comodi, parcheggi o una posizione naturale interessante.
          </p>

          <p className="leading-8 text-gray-300">
            Pubblicando una richiesta su DroneGuard puoi indicare se ti servono
            fotografie singole, video breve, video completo, riprese grezze, formati
            verticali per social o materiale montato pronto da pubblicare.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Resort e hotel
            </h2>
            <p className="text-gray-300">
              Riprese aeree per valorizzare piscine, camere, giardini, spiagge,
              terrazze, ristoranti e servizi principali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Villaggi turistici
            </h2>
            <p className="text-gray-300">
              Video e foto per mostrare l'intera struttura, i percorsi interni,
              le aree comuni, la spiaggia e le attività.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Spa e strutture premium
            </h2>
            <p className="text-gray-300">
              Contenuti visivi per comunicare relax, panorama, esclusività, servizi
              benessere e atmosfera della struttura.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta per un resort
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            servizio che ti serve. Puoi indicare il nome della struttura, la città,
            la provincia, il tipo di resort, il periodo in cui vorresti effettuare
            le riprese e il risultato finale desiderato.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare quali aree vuoi valorizzare: piscina, spiaggia,
            giardino, camere, ristorante, spa, campi sportivi, area bambini,
            parcheggio, accessi, terrazze, vista panoramica o percorsi interni.
            Puoi indicare anche se ti servono riprese all'alba, al tramonto, durante
            un evento o in un momento in cui la struttura è particolarmente curata.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere dove userai il materiale: sito web, social, portali
            turistici, campagne pubblicitarie, cataloghi digitali, presentazioni
            commerciali, newsletter o video promozionali.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per resort
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video promozionali di
              un resort sul mare. Vorrei riprese dall'alto della struttura, della
              piscina, della spiaggia, dei giardini, del ristorante, delle aree
              relax, dei parcheggi e del panorama. Il materiale mi serve per sito
              web, social, portali turistici e campagne pubblicitarie.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire subito il tipo di struttura,
            le zone da riprendere, il livello del servizio e l'obiettivo commerciale
            del contenuto.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per resort?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per resort o villaggi turistici può
            variare in base alla zona, alla durata delle riprese, alla grandezza
            della struttura, al numero di aree da riprendere, al materiale richiesto
            e alla post-produzione. Un servizio con sole fotografie può essere
            diverso da un video promozionale completo con montaggio, musica,
            color correction e formati per social.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il tipo di struttura incide. Un resort con piscina, spiaggia,
            ristorante, spa, bungalow, percorsi interni e campi sportivi richiede
            una pianificazione diversa rispetto a una struttura più piccola. Per
            questo è importante descrivere bene il lavoro già nella richiesta.
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
                Posso trovare un pilota drone per un resort?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta e ricevere
                candidature da piloti drone disponibili per foto e video di resort,
                hotel e villaggi turistici.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per villaggi turistici grandi?
              </h3>
              <p className="text-gray-300">
                Sì, perché permette di mostrare dall'alto la disposizione degli
                spazi, i servizi, la piscina, la spiaggia, i percorsi interni e le
                aree comuni.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere foto e video insieme?
              </h3>
              <p className="text-gray-300">
                Sì, puoi indicare se ti servono fotografie, video, riprese grezze,
                video montato o formati specifici per social e sito web.
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
            Trova un pilota drone per il tuo resort
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video promozionali, riprese
            professionali e contenuti visivi per resort, villaggi turistici, hotel,
            spa e strutture ricettive.
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