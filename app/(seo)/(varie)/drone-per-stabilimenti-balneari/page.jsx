import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per stabilimenti balneari | DroneGuard",
  description:
    "Trova piloti drone per stabilimenti balneari, lidi, spiagge, beach club e strutture turistiche sul mare. Richiedi foto aeree e video promozionali con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per turismo balneare
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per stabilimenti balneari
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai uno stabilimento balneare, un lido, un beach club, una spiaggia
            attrezzata o una struttura turistica sul mare? Con DroneGuard puoi
            pubblicare una richiesta e trovare piloti drone disponibili per
            realizzare foto aeree, video promozionali, riprese dall'alto e
            contenuti professionali per valorizzare la tua attività. Il drone
            permette di mostrare la spiaggia, gli ombrelloni, il mare, il
            ristorante, il bar, le cabine, le aree relax, gli accessi, il
            parcheggio, gli eventi e tutto il contesto costiero che rende unico
            uno stabilimento balneare.
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
              Video per stabilimenti
            </h2>
            <p className="text-gray-300">
              Richiedi video aerei per presentare spiaggia, ombrelloni, mare,
              ristorante, bar, cabine, eventi e servizi dello stabilimento.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto aeree per lidi
            </h2>
            <p className="text-gray-300">
              Ottieni fotografie dall'alto per sito web, social, campagne
              pubblicitarie, brochure digitali e promozione turistica.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti drone disponibili
            </h2>
            <p className="text-gray-300">
              Pubblica il lavoro, indica la località balneare e ricevi candidature
              da operatori drone interessati al servizio.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per uno stabilimento balneare
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Uno stabilimento balneare vive molto di immagine. Prima di scegliere
              dove passare una giornata al mare, una vacanza o un evento, molte
              persone guardano foto, video, social, recensioni e contenuti online.
              Avere immagini professionali può aiutare a comunicare meglio il
              valore della struttura e la qualità dell'esperienza offerta.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le foto da terra sono importanti, ma spesso non riescono a mostrare
              tutta l'organizzazione della spiaggia. Il drone può far vedere
              dall'alto la disposizione degli ombrelloni, la distanza dal mare, la
              grandezza dell'area, il ristorante, il bar, le passerelle, le cabine,
              il parcheggio, gli accessi e il panorama della costa.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone
              interessati. La piattaforma non realizza direttamente il servizio,
              ma mette in contatto gestori di stabilimenti balneari, lidi, beach
              club, strutture turistiche e operatori drone disponibili nella zona.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per stabilimenti balneari
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Video promozionali per stabilimenti balneari</li>
              <li>✅ Foto aeree di spiagge, lidi e beach club</li>
              <li>✅ Riprese di ombrelloni, lettini e aree relax</li>
              <li>✅ Video per sito web, social e campagne sponsorizzate</li>
              <li>✅ Contenuti per ristoranti e bar sulla spiaggia</li>
              <li>✅ Riprese di eventi, aperitivi e serate estive</li>
              <li>✅ Foto per brochure, listini e presentazioni digitali</li>
              <li>✅ Video per promozione turistica della località</li>
              <li>✅ Materiale per hotel, resort e strutture convenzionate</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Video drone per lidi, spiagge e beach club
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un video drone può rendere molto più forte la comunicazione di uno
            stabilimento balneare. In pochi secondi permette di mostrare il mare,
            la spiaggia, la disposizione degli spazi, l'atmosfera, i servizi e il
            contesto turistico. Questo tipo di contenuto è particolarmente utile
            quando si vuole promuovere la struttura prima dell'inizio della
            stagione estiva o durante i mesi di maggiore attività.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può valorizzare un lido elegante, una spiaggia attrezzata per
            famiglie, un beach club con eventi serali, uno stabilimento con
            ristorante, una struttura con area sportiva o una spiaggia collegata a
            hotel, resort e villaggi turistici. Le riprese dall'alto aiutano a
            comunicare ordine, ampiezza, posizione e atmosfera.
          </p>

          <p className="leading-8 text-gray-300">
            Il materiale può essere usato sul sito ufficiale, su Instagram,
            Facebook, TikTok, YouTube, campagne pubblicitarie, newsletter, portali
            turistici, pagine dedicate agli eventi, brochure digitali e contenuti
            promozionali per la stagione.
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
                Crea il tuo account come cliente, stabilimento balneare, agenzia,
                struttura turistica o pilota drone.
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
                Descrivi lo stabilimento, la località, le aree da riprendere e il
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
              Drone per beach club ed eventi estivi
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I beach club e gli stabilimenti che organizzano eventi possono usare
              il drone per creare contenuti molto efficaci. Aperitivi al tramonto,
              serate estive, eventi aziendali, feste private, musica dal vivo e
              giornate speciali possono essere raccontati con riprese aeree
              suggestive.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini dall'alto aiutano a mostrare il pubblico, l'atmosfera,
              la posizione sul mare, l'organizzazione degli spazi e il valore
              scenografico della location.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per ristoranti sulla spiaggia
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Molti stabilimenti balneari hanno ristoranti, bar, chioschi, aree
              aperitivo e zone dedicate alla ristorazione. Il drone può valorizzare
              la posizione del locale rispetto al mare, la terrazza, i tavoli
              esterni, il panorama, la spiaggia e l'atmosfera del servizio.
            </p>

            <p className="leading-8 text-gray-300">
              Questo contenuto può essere utile per social, prenotazioni, eventi,
              matrimoni, feste private e promozione della stagione estiva.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per promuovere la stagione estiva
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le fotografie aeree possono essere usate per migliorare la presenza
            online dello stabilimento. Una bella immagine dall'alto può diventare
            la copertina del sito, un post social, una creatività pubblicitaria,
            una pagina per eventi o un contenuto da inserire in brochure e
            materiali digitali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le foto con drone sono particolarmente utili quando lo stabilimento ha
            una posizione interessante, mare pulito, spiaggia ampia, ombrelloni
            ordinati, ristorante vista mare, parcheggio comodo, aree relax,
            gazebo, cabine curate o servizi aggiuntivi che meritano di essere
            mostrati da una prospettiva più ampia.
          </p>

          <p className="leading-8 text-gray-300">
            Pubblicando una richiesta su DroneGuard puoi spiegare se ti servono
            solo fotografie, un video breve, un video completo, riprese grezze,
            contenuti verticali per social o un pacchetto completo per la
            promozione dello stabilimento.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Stabilimenti e lidi
            </h2>
            <p className="text-gray-300">
              Riprese aeree per valorizzare spiaggia, ombrelloni, lettini, cabine,
              passerelle, accessi, parcheggi e servizi balneari.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Beach club e locali
            </h2>
            <p className="text-gray-300">
              Video e foto per beach club, aperitivi, serate estive, ristoranti
              sul mare, eventi privati e location turistiche.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Turismo e promozione
            </h2>
            <p className="text-gray-300">
              Contenuti visivi per promuovere la località, la costa, le attività
              turistiche e le strutture collegate allo stabilimento.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta per uno stabilimento balneare
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            tipo di servizio che ti serve. Puoi indicare il nome dello stabilimento,
            la località, la stagione o il periodo delle riprese, le aree da
            valorizzare e il tipo di contenuto che vuoi ottenere.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se vuoi riprendere la spiaggia, gli ombrelloni, la
            zona ristorante, il bar, il mare, le cabine, il parcheggio, gli accessi,
            l'area eventi, il tramonto, una giornata con clienti presenti o la
            struttura vuota e ordinata prima dell'apertura.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere anche l'uso finale del materiale: sito web, social,
            campagne pubblicitarie, promozione eventi, brochure, video per la
            stagione, reel verticali, presentazione commerciale o contenuti per
            hotel e strutture turistiche collegate.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per stabilimento balneare
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video promozionali di
              uno stabilimento balneare. Vorrei riprese dall'alto della spiaggia,
              degli ombrelloni, del mare, del ristorante, del bar, delle cabine,
              del parcheggio e delle aree relax. Il materiale mi serve per sito
              web, social, campagne pubblicitarie e promozione della stagione
              estiva.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire subito il tipo di struttura,
            le aree da riprendere, il risultato desiderato e l'obiettivo
            commerciale del servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per stabilimenti balneari?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per stabilimenti balneari può variare in
            base alla località, alla durata delle riprese, al tipo di materiale
            richiesto, alla grandezza della spiaggia, al numero di aree da
            riprendere e alla post-produzione. Un servizio fotografico semplice può
            avere un costo diverso rispetto a un video completo con montaggio,
            musica, color correction e formati per social.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il momento delle riprese può incidere sull'organizzazione. Alcuni
            stabilimenti preferiscono riprese al mattino con la spiaggia ordinata,
            altri vogliono mostrare la struttura piena di vita durante la stagione,
            altri ancora desiderano contenuti al tramonto o durante eventi
            particolari.
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
                Posso trovare un pilota drone per uno stabilimento balneare?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta e ricevere
                candidature da piloti drone disponibili per foto e video di lidi,
                spiagge e stabilimenti balneari.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per promuovere un lido?
              </h3>
              <p className="text-gray-300">
                Sì, perché permette di mostrare dall'alto spiaggia, ombrelloni,
                mare, servizi, ristorante, bar, accessi e atmosfera generale della
                struttura.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere riprese per eventi in spiaggia?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare se ti servono contenuti per eventi, aperitivi,
                serate, feste private, promozione stagionale o campagne social.
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
            Trova un pilota drone per il tuo stabilimento balneare
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video promozionali, riprese
            professionali e contenuti visivi per stabilimenti balneari, lidi,
            spiagge, beach club e strutture turistiche sul mare.
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