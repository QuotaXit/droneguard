import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per ristoranti e location | DroneGuard",
  description:
    "Trova piloti drone per ristoranti, location, locali, terrazze panoramiche e strutture sul mare. Richiedi foto aeree e video promozionali con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per ristoranti e locali
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per ristoranti e location
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai un ristorante, una location, un locale panoramico, una terrazza,
            un beach club, un agriturismo con ristorazione o una struttura per
            eventi? Con DroneGuard puoi pubblicare una richiesta e trovare piloti
            drone disponibili per realizzare foto aeree, video promozionali,
            riprese professionali e contenuti visivi per valorizzare la tua
            attività. Il drone permette di mostrare dall'alto la posizione del
            ristorante, la vista, gli spazi esterni, il giardino, la terrazza, il
            mare, il parcheggio, gli accessi e tutto il contesto che rende speciale
            una location.
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
              Video per ristoranti
            </h2>
            <p className="text-gray-300">
              Richiedi video aerei per presentare il locale, la terrazza, la vista,
              gli spazi esterni, il giardino e l'atmosfera della struttura.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto aeree per location
            </h2>
            <p className="text-gray-300">
              Ottieni fotografie dall'alto per sito web, social, campagne
              pubblicitarie, eventi, matrimoni e promozione online.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti drone disponibili
            </h2>
            <p className="text-gray-300">
              Pubblica il lavoro, indica zona e tipo di locale, e ricevi
              candidature da operatori drone interessati.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per un ristorante
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un ristorante oggi non viene scelto solo per il menu. Molti clienti
              guardano foto, video, social, posizione, atmosfera e recensioni prima
              di prenotare. Per questo motivo avere contenuti visivi professionali
              può aiutare a presentare meglio il locale e a comunicare il valore
              dell'esperienza offerta.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le foto classiche da terra sono utili per mostrare piatti, sala e
              dettagli interni, ma spesso non bastano per raccontare il contesto.
              Se il ristorante ha una terrazza panoramica, un giardino, una vista
              sul mare, una posizione in campagna, un'area esterna, una piscina o
              una location particolare, il drone può valorizzare tutto questo in
              modo molto più completo.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone
              disponibili nella tua zona. La piattaforma non realizza direttamente
              il servizio, ma mette in contatto ristoratori, gestori di location,
              strutture turistiche e operatori drone professionali.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per ristoranti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Video promozionali per ristoranti e locali</li>
              <li>✅ Foto aeree di terrazze, giardini e spazi esterni</li>
              <li>✅ Riprese di ristoranti sul mare o in campagna</li>
              <li>✅ Video per sito web, social e campagne sponsorizzate</li>
              <li>✅ Contenuti per location eventi e matrimoni</li>
              <li>✅ Riprese di beach club, agriturismi e resort</li>
              <li>✅ Foto per brochure, menu digitali e presentazioni</li>
              <li>✅ Video per eventi, serate e aperture stagionali</li>
              <li>✅ Materiale promozionale per prenotazioni online</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Video drone per ristoranti e locali panoramici
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un video realizzato con drone può rendere più forte la comunicazione
            di un ristorante, soprattutto quando il locale ha una posizione
            particolare. In pochi secondi è possibile mostrare la struttura, la
            vista, gli accessi, il parcheggio, la terrazza, il mare, la campagna o
            il centro storico in cui si trova.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per un ristorante sul mare, il drone può valorizzare la vicinanza alla
            spiaggia, il panorama, i tavoli esterni, il tramonto e l'atmosfera
            estiva. Per un ristorante in collina o in campagna può mostrare il
            paesaggio, il giardino, la strada di accesso, la tranquillità e gli
            spazi esterni. Per una location elegante può raccontare meglio il
            contesto e l'esperienza che il cliente può vivere.
          </p>

          <p className="leading-8 text-gray-300">
            Il materiale può essere usato su Instagram, Facebook, TikTok, YouTube,
            sito web, campagne pubblicitarie, pagine di prenotazione, brochure
            digitali, presentazioni commerciali e contenuti dedicati a eventi o
            matrimoni.
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
                Crea il tuo account come cliente, ristorante, struttura turistica,
                location eventi o pilota drone.
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
                Descrivi il ristorante, la zona, le aree da riprendere e il
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
              Drone per ristoranti sul mare
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I ristoranti sul mare possono ottenere un grande vantaggio dalle
              riprese aeree. Il drone può mostrare la posizione del locale rispetto
              alla spiaggia, la vista, i tavoli esterni, il tramonto, il lungomare,
              gli accessi e il contesto turistico circostante.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di contenuto è molto utile per promuovere cene estive,
              aperitivi, eventi privati, matrimoni, serate speciali e prenotazioni
              online.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per location eventi e matrimoni
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Molti ristoranti sono anche location per eventi, cerimonie, feste
              private, matrimoni, compleanni e incontri aziendali. Il drone può
              mostrare la struttura dall'alto, il giardino, la sala esterna, il
              parcheggio, gli spazi per gli ospiti e il panorama.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini aeree aiutano a comunicare meglio il valore della
              location a chi sta cercando un posto speciale per un evento importante.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per social, sito web e prenotazioni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le fotografie aeree possono essere usate per migliorare la presenza
            online di un ristorante. Una buona immagine dall'alto può diventare la
            copertina del sito, un post social, una creatività pubblicitaria, una
            pagina per eventi o un contenuto da inserire in brochure e presentazioni
            digitali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone è particolarmente utile quando il locale ha elementi esterni
            importanti: terrazza, giardino, piscina, vista panoramica, posizione
            vicino al mare, area aperitivo, parcheggio, ingresso scenografico o un
            contesto naturale interessante. Questi dettagli possono influenzare la
            scelta del cliente prima della prenotazione.
          </p>

          <p className="leading-8 text-gray-300">
            Pubblicando una richiesta su DroneGuard puoi spiegare se ti servono
            solo fotografie, video breve, video completo, riprese grezze, contenuti
            verticali per social o un pacchetto completo per promuovere il locale.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ristoranti e locali
            </h2>
            <p className="text-gray-300">
              Riprese aeree per valorizzare ingresso, terrazza, sala esterna,
              giardino, parcheggio, panorama e posizione del ristorante.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Location e cerimonie
            </h2>
            <p className="text-gray-300">
              Video e foto per location eventi, matrimoni, feste private,
              compleanni, cerimonie e serate aziendali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Turismo e ospitalità
            </h2>
            <p className="text-gray-300">
              Contenuti utili per ristoranti collegati ad hotel, resort,
              agriturismi, stabilimenti balneari e strutture ricettive.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta per un ristorante
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            tipo di servizio che ti serve. Puoi indicare il nome del ristorante,
            la città, la zona, il tipo di locale, il periodo delle riprese e il
            risultato finale desiderato.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se vuoi valorizzare la terrazza, il giardino, la
            vista, il mare, la piscina, l'ingresso, il parcheggio, la sala esterna,
            la zona aperitivo, l'area eventi o il contesto circostante. Puoi anche
            indicare se preferisci riprese durante il giorno, al tramonto, con il
            locale vuoto e ordinato oppure durante un evento.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere anche l'uso finale del materiale: sito web, social,
            campagne pubblicitarie, promozione eventi, prenotazioni online,
            brochure digitale, reel verticali o video promozionale completo.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per ristorante
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video promozionali di
              un ristorante con terrazza panoramica. Vorrei riprese dall'alto della
              struttura, della vista, dell'ingresso, del parcheggio, della sala
              esterna e dell'atmosfera del locale. Il materiale mi serve per sito
              web, social, campagne pubblicitarie e promozione degli eventi.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire subito il tipo di locale,
            le zone da riprendere, il risultato desiderato e l'obiettivo
            commerciale del servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per ristoranti?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per ristoranti e location può variare in
            base alla zona, alla durata delle riprese, al tipo di materiale
            richiesto, alla grandezza della struttura, al numero di aree da
            riprendere e alla post-produzione. Un servizio con sole fotografie può
            avere un costo diverso rispetto a un video completo con montaggio,
            musica, color correction e formati per social.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il momento delle riprese può incidere sull'organizzazione. Alcuni
            locali preferiscono riprese con la sala vuota e ordinata, altri vogliono
            mostrare il ristorante durante un evento, un aperitivo, una cena al
            tramonto o una serata particolare. Ogni esigenza richiede tempi e
            preparazione diversi.
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
                Posso trovare un pilota drone per un ristorante?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta e ricevere
                candidature da piloti drone disponibili per foto e video di
                ristoranti, locali e location.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile anche per piccoli ristoranti?
              </h3>
              <p className="text-gray-300">
                Sì, soprattutto se il locale ha una terrazza, un giardino, una
                vista panoramica, una posizione particolare o spazi esterni da
                valorizzare.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere riprese per eventi o matrimoni?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare se ti servono contenuti per eventi, cerimonie,
                feste private, serate aziendali, aperitivi o matrimoni.
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
            Trova un pilota drone per il tuo ristorante
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video promozionali, riprese
            professionali e contenuti visivi per ristoranti, location, locali,
            terrazze panoramiche e strutture per eventi.
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