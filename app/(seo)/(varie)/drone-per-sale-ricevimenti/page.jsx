import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per sale ricevimenti | DroneGuard",
  description:
    "Trova piloti drone per sale ricevimenti, ville, location matrimoni, ristoranti per cerimonie e strutture eventi. Richiedi foto aeree e video promozionali con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per cerimonie e ricevimenti
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per sale ricevimenti
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Gestisci una sala ricevimenti, una villa per matrimoni, un ristorante
            per cerimonie, una location per feste private o una struttura dedicata
            a eventi importanti? Con DroneGuard puoi pubblicare una richiesta e
            trovare piloti drone disponibili per realizzare foto aeree, video
            promozionali, riprese dall'alto e contenuti professionali per
            valorizzare la tua struttura. Il drone permette di mostrare ingresso,
            giardino, piscina, terrazze, parcheggio, panorama, spazi esterni,
            area cerimonia e tutto ciò che rende una sala ricevimenti adatta a
            matrimoni, comunioni, battesimi, feste private ed eventi aziendali.
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
              Video per sale ricevimenti
            </h2>
            <p className="text-gray-300">
              Richiedi video aerei per presentare sala, giardino, ingresso,
              piscina, terrazze, parcheggio e spazi dedicati agli ospiti.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto aeree professionali
            </h2>
            <p className="text-gray-300">
              Ottieni immagini dall'alto per sito web, social, brochure,
              campagne pubblicitarie e promozione della location.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti drone disponibili
            </h2>
            <p className="text-gray-300">
              Pubblica il lavoro, indica la zona della sala ricevimenti e ricevi
              candidature da operatori drone interessati.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per una sala ricevimenti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Una sala ricevimenti deve comunicare eleganza, organizzazione,
              ampiezza e atmosfera. Chi cerca una location per matrimonio, festa
              privata, comunione, battesimo, anniversario o evento aziendale vuole
              capire subito se la struttura è adatta al tipo di giornata che
              immagina. Le immagini professionali aiutano a trasmettere il valore
              della location prima ancora della visita dal vivo.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le foto da terra sono importanti, ma spesso non riescono a mostrare
              tutta la struttura. Il drone può riprendere dall'alto il giardino,
              la piscina, l'ingresso, il parcheggio, la terrazza, l'area aperitivo,
              gli spazi esterni, la sala, i percorsi interni e il panorama
              circostante. Questo permette al cliente di percepire meglio la
              dimensione reale della location.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone
              disponibili nella tua zona. La piattaforma non realizza direttamente
              il servizio, ma mette in contatto gestori di sale ricevimenti,
              ristoranti, ville, location per matrimoni e operatori drone.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per sale ricevimenti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Video promozionali per sale ricevimenti</li>
              <li>✅ Foto aeree di ville, ristoranti e location</li>
              <li>✅ Riprese di giardini, piscine e terrazze</li>
              <li>✅ Video per matrimoni, cerimonie e feste private</li>
              <li>✅ Contenuti per sito web, social e campagne sponsorizzate</li>
              <li>✅ Riprese di ingresso, parcheggio e aree esterne</li>
              <li>✅ Foto per brochure e presentazioni commerciali</li>
              <li>✅ Video per eventi aziendali e serate speciali</li>
              <li>✅ Materiale per promuovere sale interne ed esterne</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Video drone per matrimoni, cerimonie ed eventi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un video drone può rendere molto più efficace la presentazione di una
            sala ricevimenti. In pochi secondi permette di mostrare la struttura
            dall'alto, far capire la disposizione degli spazi e valorizzare tutto
            ciò che rende la location speciale. Questo è particolarmente utile
            quando la sala dispone di giardino, piscina, terrazza panoramica, area
            aperitivo, ampio parcheggio o ingresso scenografico.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per una villa per matrimoni, il drone può mostrare il percorso di
            ingresso, il parco, la zona della cerimonia, il ricevimento all'aperto,
            la piscina, la facciata e il panorama. Per un ristorante per cerimonie
            può valorizzare l'organizzazione degli spazi, l'area esterna, la
            posizione e la comodità degli accessi.
          </p>

          <p className="leading-8 text-gray-300">
            Il materiale può essere usato su sito web, Instagram, Facebook,
            TikTok, YouTube, brochure digitali, campagne pubblicitarie, pagine
            dedicate ai matrimoni, presentazioni commerciali e contenuti destinati
            a coppie, famiglie, aziende e organizzatori di eventi.
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
                Crea il tuo account come cliente, sala ricevimenti, ristorante,
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
                Descrivi la sala, la zona, le aree da riprendere e il materiale
                finale che vuoi ottenere.
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
              Drone per matrimoni e ricevimenti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le sale ricevimenti che ospitano matrimoni possono utilizzare le
              riprese aeree per mostrare meglio la struttura alle coppie che stanno
              scegliendo la location. Il drone può valorizzare il giardino, la
              zona cerimonia, l'area aperitivo, la piscina, la facciata, il
              parcheggio e il panorama.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di contenuto può essere inserito nelle pagine dedicate ai
              matrimoni, nelle brochure digitali, sui social e nelle campagne
              pubblicitarie rivolte a coppie e wedding planner.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per feste private ed eventi aziendali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Una sala ricevimenti può ospitare anche compleanni, comunioni,
              battesimi, feste di laurea, anniversari, meeting, cene aziendali e
              presentazioni. Le immagini dall'alto aiutano a mostrare spazi,
              accessi, parcheggi, aree esterne e atmosfera generale della location.
            </p>

            <p className="leading-8 text-gray-300">
              Un video drone può diventare un contenuto utile per raggiungere
              aziende, famiglie e organizzatori di eventi che cercano una struttura
              curata e ben presentata.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per sito, social e brochure
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le fotografie aeree possono migliorare la comunicazione visiva di una
            sala ricevimenti. Una buona immagine dall'alto può diventare la
            copertina del sito, l'immagine principale della pagina matrimoni, un
            post social, una creatività pubblicitaria o un contenuto da inserire in
            brochure e presentazioni commerciali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone è particolarmente utile quando la struttura ha elementi
            esterni importanti: giardino, piscina, terrazza, parco, ingresso
            elegante, corte interna, sala esterna, parcheggio, vista panoramica o
            spazi dedicati agli ospiti. Questi dettagli possono influenzare molto
            la scelta del cliente.
          </p>

          <p className="leading-8 text-gray-300">
            Pubblicando una richiesta su DroneGuard puoi spiegare se ti servono
            solo fotografie, un video breve, un video completo, riprese grezze,
            contenuti verticali per social o un pacchetto completo per promuovere
            la tua sala ricevimenti.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Sale ricevimenti
            </h2>
            <p className="text-gray-300">
              Riprese aeree per valorizzare sale, ingressi, parcheggi, giardini,
              piscine, terrazze, cortili e aree esterne.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ville e ristoranti
            </h2>
            <p className="text-gray-300">
              Video e foto per ville, ristoranti per cerimonie, casali,
              agriturismi e location con spazi interni ed esterni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Cerimonie ed eventi
            </h2>
            <p className="text-gray-300">
              Contenuti utili per promuovere matrimoni, comunioni, battesimi,
              compleanni, feste private ed eventi aziendali.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta per una sala ricevimenti
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            tipo di struttura e il risultato che vuoi ottenere. Puoi indicare il
            nome della sala ricevimenti, la città, la provincia, il tipo di eventi
            che ospita e le aree che vuoi valorizzare con il drone.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se vuoi riprendere ingresso, parcheggio, giardino,
            piscina, terrazza, sala esterna, area aperitivo, zona cerimonia,
            facciata, panorama o percorsi interni. Puoi anche indicare se vuoi
            riprese con la sala vuota e ordinata, durante un evento reale, al
            tramonto o in un momento preciso della giornata.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere anche l'uso finale del materiale: sito web, social,
            campagne pubblicitarie, promozione matrimoni, brochure, reel verticali,
            presentazione per clienti, wedding planner, famiglie o aziende.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per sala ricevimenti
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video promozionali di
              una sala ricevimenti per matrimoni ed eventi. Vorrei riprese
              dall'alto della struttura, del giardino, della piscina, dell'ingresso,
              del parcheggio, della terrazza e degli spazi esterni. Il materiale
              mi serve per sito web, social, brochure e promozione della location.”
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
            Quanto costa un servizio drone per sale ricevimenti?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per sale ricevimenti può variare in base
            alla zona, alla durata delle riprese, al tipo di materiale richiesto,
            alla grandezza della struttura, al numero di aree da riprendere e alla
            post-produzione. Un servizio fotografico semplice può avere un costo
            diverso rispetto a un video promozionale completo con montaggio,
            musica, color correction e formati per social.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il tipo di contenuto richiesto può incidere. Alcune sale vogliono
            immagini ordinate senza ospiti, altre preferiscono riprese durante un
            matrimonio, una cerimonia, un aperitivo, una serata aziendale o un
            evento reale. Ogni situazione richiede organizzazione diversa.
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
                Posso trovare un pilota drone per una sala ricevimenti?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta e ricevere
                candidature da piloti drone disponibili per foto e video di sale
                ricevimenti, ville, ristoranti e location per cerimonie.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per promuovere matrimoni?
              </h3>
              <p className="text-gray-300">
                Sì, perché permette di mostrare dall'alto giardino, piscina,
                ingresso, parcheggio, panorama, area cerimonia e spazi dedicati
                agli ospiti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere video durante un evento?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare se vuoi contenuti con la sala vuota, durante
                un matrimonio, una cerimonia, un evento aziendale o al tramonto.
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
            Trova un pilota drone per la tua sala ricevimenti
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video promozionali, riprese
            professionali e contenuti visivi per sale ricevimenti, ville,
            ristoranti per cerimonie, location matrimoni e strutture per eventi.
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