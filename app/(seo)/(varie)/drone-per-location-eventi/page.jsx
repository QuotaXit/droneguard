import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per location eventi | DroneGuard",
  description:
    "Trova piloti drone per location eventi, matrimoni, ville, sale ricevimenti, agriturismi e strutture per cerimonie. Richiedi foto aeree e video promozionali con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per eventi e cerimonie
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per location eventi
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Gestisci una location per eventi, una villa per matrimoni, una sala
            ricevimenti, un agriturismo, un casale, un resort, un ristorante con
            spazi esterni o una struttura dedicata a cerimonie e feste private?
            Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto aeree, video promozionali, riprese
            dall'alto e contenuti professionali per valorizzare la tua location.
            Il drone permette di mostrare ingresso, giardino, piscina, terrazze,
            parcheggio, panorama, spazi esterni, aree per cerimonie e tutto il
            contesto che rende speciale un luogo per eventi.
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
              Video per location eventi
            </h2>
            <p className="text-gray-300">
              Richiedi video aerei per presentare ville, giardini, sale esterne,
              piscine, terrazze, panorami e spazi dedicati agli eventi.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto aeree professionali
            </h2>
            <p className="text-gray-300">
              Ottieni fotografie dall'alto per sito web, social, brochure, pagine
              eventi, campagne pubblicitarie e presentazioni commerciali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti drone disponibili
            </h2>
            <p className="text-gray-300">
              Pubblica il lavoro, indica la zona della location e ricevi
              candidature da operatori drone interessati al servizio.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per una location eventi
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Una location eventi viene scelta anche per l'atmosfera che riesce a
              comunicare. Chi organizza un matrimonio, una festa privata, una
              cerimonia, un evento aziendale o una serata speciale vuole capire se
              quello spazio è adatto al tipo di esperienza che desidera creare.
              Le immagini professionali aiutano a trasmettere subito valore,
              eleganza e organizzazione.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le foto da terra sono importanti, ma spesso non riescono a mostrare
              tutta la struttura. Il drone può far vedere dall'alto il giardino,
              la piscina, la terrazza, la sala esterna, il parcheggio, gli accessi,
              il panorama, la disposizione degli spazi e il rapporto della location
              con il paesaggio circostante.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone
              disponibili nella tua zona. La piattaforma non realizza direttamente
              il servizio, ma mette in contatto gestori di location, strutture
              ricettive, ristoranti, ville per eventi e operatori drone.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per location eventi
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Video promozionali per location eventi</li>
              <li>✅ Foto aeree di ville e sale ricevimenti</li>
              <li>✅ Riprese di giardini, piscine e terrazze</li>
              <li>✅ Video per matrimoni, cerimonie e feste private</li>
              <li>✅ Contenuti per sito web, social e campagne sponsorizzate</li>
              <li>✅ Riprese per agriturismi, casali e resort</li>
              <li>✅ Foto per brochure e presentazioni commerciali</li>
              <li>✅ Video per eventi aziendali e serate speciali</li>
              <li>✅ Materiale per promuovere spazi esterni e panorami</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Video drone per ville, sale ricevimenti e spazi esterni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un video drone può rendere molto più forte la presentazione di una
            location eventi. In pochi secondi permette di mostrare la struttura
            nella sua interezza, valorizzando non solo gli interni, ma soprattutto
            gli spazi esterni e il contesto. Questo è utile per ville, casali,
            agriturismi, sale ricevimenti, resort, ristoranti panoramici e luoghi
            dedicati a matrimoni o cerimonie.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può mostrare il percorso di ingresso, il giardino, la zona
            della cerimonia, la piscina, la terrazza, il parcheggio, le aree per
            aperitivi, gli spazi per gli ospiti e il panorama. Questi elementi sono
            spesso decisivi per chi deve scegliere una location e vuole capire
            subito se lo spazio è adatto al proprio evento.
          </p>

          <p className="leading-8 text-gray-300">
            Il materiale può essere usato su sito web, Instagram, Facebook,
            TikTok, YouTube, brochure digitali, campagne pubblicitarie, pagine
            dedicate agli eventi, presentazioni commerciali e contenuti destinati
            a wedding planner, aziende e clienti privati.
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
                Crea il tuo account come cliente, location eventi, struttura
                ricettiva, ristorante o pilota drone.
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
                Descrivi la location, la zona, le aree da riprendere e il
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
              Drone per matrimoni e cerimonie
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le location per matrimoni possono ottenere un grande vantaggio dalle
              riprese aeree. Il drone può mostrare la villa, il giardino, l'area
              cerimonia, la piscina, il panorama, l'ingresso e gli spazi in cui si
              svolgono aperitivo, cena, festa e momenti fotografici.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di contenuto è utile per presentare la location a coppie,
              wedding planner, fotografi, agenzie e clienti che cercano un luogo
              speciale per un evento importante.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per eventi aziendali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le aziende cercano spesso location curate per meeting, convention,
              presentazioni, cene aziendali, eventi di brand, inaugurazioni e
              giornate promozionali. Le immagini aeree possono aiutare a mostrare
              meglio dimensioni, accessi, parcheggi, spazi esterni e atmosfera.
            </p>

            <p className="leading-8 text-gray-300">
              Un video drone può diventare un contenuto utile anche per promuovere
              la location verso aziende, agenzie eventi e professionisti che
              organizzano incontri aziendali.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per sito, social e brochure
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le fotografie aeree possono migliorare la comunicazione visiva di una
            location. Una buona foto dall'alto può diventare la copertina del sito,
            l'immagine principale di una pagina eventi, un post social, una
            creatività pubblicitaria o un contenuto da inserire in brochure e
            presentazioni digitali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone è particolarmente utile quando la location ha elementi
            esterni importanti: giardino, piscina, vista panoramica, terrazza,
            parco, corte interna, area cerimonia, parcheggio, ingresso scenografico
            o un contesto naturale che rende più forte l'immagine della struttura.
          </p>

          <p className="leading-8 text-gray-300">
            Pubblicando una richiesta su DroneGuard puoi spiegare se ti servono
            solo fotografie, un video breve, un video completo, riprese grezze,
            contenuti verticali per social o un pacchetto completo per promuovere
            la location.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ville e casali
            </h2>
            <p className="text-gray-300">
              Riprese aeree per valorizzare ville, casali, agriturismi, tenute,
              giardini, piscine, parcheggi, ingressi e panorami.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Sale ricevimenti
            </h2>
            <p className="text-gray-300">
              Video e foto per sale ricevimenti, ristoranti, strutture per
              cerimonie, spazi esterni e location per matrimoni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Eventi privati e aziendali
            </h2>
            <p className="text-gray-300">
              Contenuti utili per promuovere feste private, eventi aziendali,
              meeting, presentazioni, cerimonie e serate speciali.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta per una location eventi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            tipo di location e il risultato che vuoi ottenere. Puoi indicare il
            nome della struttura, la città, la provincia, il tipo di eventi che
            ospita e le aree che vuoi valorizzare con il drone.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se vuoi riprendere giardino, piscina, terrazza,
            parcheggio, ingresso, sala esterna, area cerimonia, vista panoramica,
            parco, corte interna o spazi destinati ad aperitivi e ricevimenti.
            Puoi anche indicare se preferisci riprese con la location vuota e
            ordinata, durante un evento reale o al tramonto.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere anche l'uso finale del materiale: sito web, social,
            campagne pubblicitarie, promozione matrimoni, brochure, reel verticali,
            presentazione per clienti, wedding planner o agenzie eventi.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per location eventi
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video promozionali di
              una location per matrimoni ed eventi. Vorrei riprese dall'alto della
              villa, del giardino, della piscina, dell'area cerimonia, del
              parcheggio, dell'ingresso e del panorama. Il materiale mi serve per
              sito web, social, brochure e promozione della location.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire subito il tipo di struttura,
            le zone da riprendere, il risultato desiderato e l'obiettivo
            commerciale del servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per location eventi?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per location eventi può variare in base
            alla zona, alla durata delle riprese, al tipo di materiale richiesto,
            alla grandezza della struttura, al numero di aree da riprendere e alla
            post-produzione. Un servizio fotografico semplice può avere un costo
            diverso rispetto a un video promozionale completo con montaggio,
            musica, color correction e formati per social.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il tipo di riprese può incidere. Una location può richiedere
            immagini ordinate senza persone, oppure contenuti durante un evento
            reale, un matrimonio, una cerimonia, un aperitivo o una serata
            aziendale. Ogni situazione richiede organizzazione e tempi diversi.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo fisso. La piattaforma permette di
            pubblicare il lavoro e ricevere candidature da piloti drone
            interessati, così cliente e professionista possono accordarsi sul
            servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso trovare un pilota drone per una location eventi?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta e ricevere
                candidature da piloti drone disponibili per foto e video di
                location eventi, ville, casali e sale ricevimenti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per promuovere matrimoni?
              </h3>
              <p className="text-gray-300">
                Sì, perché permette di mostrare dall'alto villa, giardino, piscina,
                area cerimonia, panorama, parcheggio e spazi dedicati agli ospiti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere riprese durante un evento?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare se vuoi contenuti con la location vuota,
                durante un evento, al tramonto, durante una cerimonia o per una
                campagna promozionale.
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
            Trova un pilota drone per la tua location eventi
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video promozionali, riprese
            professionali e contenuti visivi per location eventi, ville, sale
            ricevimenti, agriturismi, casali, ristoranti e strutture per cerimonie.
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