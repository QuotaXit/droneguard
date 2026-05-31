import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per spiagge e lidi | DroneGuard",
  description:
    "Trova piloti drone per spiagge, lidi, stabilimenti balneari, beach club e località turistiche. Richiedi foto aeree e video promozionali con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per mare e turismo
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per spiagge e lidi
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Vuoi realizzare foto e video professionali di una spiaggia, un lido,
            uno stabilimento balneare, un beach club, una località turistica o una
            struttura sul mare? Con DroneGuard puoi pubblicare una richiesta e
            trovare piloti drone disponibili per riprese aeree, video promozionali,
            fotografie dall'alto e contenuti visivi da usare online. Il drone
            permette di mostrare il mare, la spiaggia, gli ombrelloni, i lettini,
            il lungomare, gli accessi, i parcheggi, i ristoranti, le aree relax,
            gli eventi e tutto il contesto costiero che rende una località più
            interessante agli occhi di clienti, turisti e visitatori.
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
              Video per spiagge
            </h2>
            <p className="text-gray-300">
              Richiedi video aerei per mostrare mare, spiaggia, lungomare,
              stabilimenti, servizi turistici, eventi e panorama costiero.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto aeree per lidi
            </h2>
            <p className="text-gray-300">
              Ottieni immagini dall'alto per social, sito web, campagne
              pubblicitarie, promozione turistica e contenuti stagionali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti drone nella zona
            </h2>
            <p className="text-gray-300">
              Pubblica la richiesta, indica la località balneare e ricevi
              candidature da operatori drone disponibili al servizio.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per spiagge e lidi
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Una spiaggia o un lido vengono scelti anche per l'impatto visivo.
              Mare pulito, ombrelloni ordinati, posizione comoda, servizi curati,
              ristorante, parcheggio, lungomare e panorama sono elementi che
              possono convincere una persona a scegliere una località, uno
              stabilimento o una struttura turistica.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le riprese da terra sono utili, ma spesso non riescono a far capire
              bene la grandezza della spiaggia, la distanza dal mare, la
              disposizione degli ombrelloni, la presenza di servizi, la vicinanza
              al centro abitato o il rapporto con hotel, resort, ristoranti e
              strutture vicine. Il drone permette di raccontare tutto questo da
              una prospettiva più completa.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone
              disponibili nella zona. La piattaforma non realizza direttamente il
              servizio, ma mette in contatto clienti, stabilimenti, strutture
              turistiche, agenzie e operatori drone professionali.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per spiagge e lidi
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Video promozionali per spiagge e lidi</li>
              <li>✅ Foto aeree di stabilimenti balneari</li>
              <li>✅ Riprese di mare, costa e lungomare</li>
              <li>✅ Video per beach club e locali sul mare</li>
              <li>✅ Contenuti per social, sito web e campagne ads</li>
              <li>✅ Foto per promozione turistica della località</li>
              <li>✅ Riprese di eventi, aperitivi e serate estive</li>
              <li>✅ Materiale per hotel, resort e strutture sul mare</li>
              <li>✅ Video per agenzie turistiche e attività stagionali</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Video drone per promuovere una spiaggia
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un video con drone può rendere molto più efficace la promozione di una
            spiaggia. In pochi secondi può mostrare il colore del mare, la forma
            della costa, la distanza dagli stabilimenti, il lungomare, gli accessi,
            le aree parcheggio, i servizi turistici e l'atmosfera generale della
            località.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo tipo di contenuto è utile per comuni turistici, strutture
            ricettive, lidi, agenzie, hotel, resort, stabilimenti balneari,
            ristoranti sul mare e attività che vogliono promuovere la stagione
            estiva. Le immagini dall'alto aiutano a comunicare subito ordine,
            bellezza, accessibilità e valore della destinazione.
          </p>

          <p className="leading-8 text-gray-300">
            Il materiale può essere usato su sito web, Instagram, Facebook,
            TikTok, YouTube, campagne sponsorizzate, newsletter, portali turistici,
            brochure digitali e contenuti promozionali per attrarre visitatori,
            clienti e turisti.
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
                Crea il tuo account come cliente, struttura turistica, lido,
                agenzia, attività sul mare o pilota drone.
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
                Descrivi spiaggia, località, aree da riprendere e materiale finale
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
              Drone per lidi e stabilimenti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I lidi e gli stabilimenti balneari possono usare il drone per
              mostrare dall'alto ombrelloni, lettini, cabine, ristorante, bar,
              area relax, passerelle, accessi e parcheggi. Questo aiuta a far
              percepire meglio l'organizzazione della struttura e la qualità dei
              servizi offerti.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini aeree sono utili per promuovere la stagione estiva,
              presentare nuove aree, mostrare eventi, aggiornare il sito web e
              creare contenuti più forti per i social.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per località turistiche sul mare
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Anche una località turistica può essere raccontata meglio con riprese
              aeree. Il drone può mostrare la costa, il porto, il lungomare, le
              spiagge, le attività, i ristoranti, gli hotel e il rapporto tra mare,
              città e servizi.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di contenuto può essere utile per promozione turistica,
              campagne territoriali, eventi stagionali, pagine social e materiale
              destinato ad agenzie o strutture ricettive.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per social, turismo e campagne estive
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le fotografie aeree sono perfette per raccontare il mare in modo
            immediato. Una foto dall'alto può mostrare la spiaggia, la costa, il
            colore dell'acqua, gli ombrelloni ordinati, i servizi turistici, il
            lungomare e il panorama. Sono contenuti molto adatti a campagne estive,
            social network e promozione online.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Una buona immagine con drone può essere usata come copertina del sito,
            post Instagram, creatività pubblicitaria, immagine per brochure,
            contenuto per newsletter, pagina eventi o presentazione commerciale.
            Per lidi, hotel, resort e località balneari può diventare un materiale
            molto utile per comunicare valore e atmosfera.
          </p>

          <p className="leading-8 text-gray-300">
            Pubblicando una richiesta su DroneGuard puoi specificare se ti servono
            fotografie singole, video breve, video completo, riprese grezze,
            contenuti verticali per social o un pacchetto completo per promuovere
            la spiaggia o il lido.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Spiagge e costa
            </h2>
            <p className="text-gray-300">
              Riprese aeree per valorizzare mare, sabbia, costa, lungomare,
              accessi, panorama, servizi turistici e località balneari.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Lidi e beach club
            </h2>
            <p className="text-gray-300">
              Video e foto per lidi, stabilimenti, beach club, ristoranti sul mare,
              aperitivi, serate ed eventi estivi.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Hotel e resort
            </h2>
            <p className="text-gray-300">
              Contenuti utili per strutture ricettive che vogliono mostrare la
              vicinanza alla spiaggia e il valore della posizione sul mare.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta per spiagge e lidi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            tipo di servizio che ti serve. Puoi indicare la località, il nome del
            lido o della spiaggia, il periodo delle riprese, le aree da valorizzare
            e il materiale finale che vuoi ottenere.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se vuoi riprendere il mare, la spiaggia, gli
            ombrelloni, il lungomare, il ristorante, il bar, le cabine, l'area
            relax, gli accessi, il parcheggio, un evento, un aperitivo o la
            struttura ordinata prima dell'apertura al pubblico.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere anche l'uso finale del materiale: sito web, social,
            campagne pubblicitarie, promozione turistica, reel verticali, video
            stagionale, brochure digitale, presentazione per clienti o contenuti
            per hotel e strutture collegate.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per spiaggia o lido
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video promozionali di
              un lido sul mare. Vorrei riprese dall'alto della spiaggia, degli
              ombrelloni, del mare, del lungomare, del ristorante, delle cabine,
              degli accessi e del parcheggio. Il materiale mi serve per sito web,
              social, campagne pubblicitarie e promozione della stagione estiva.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            struttura, le aree da riprendere e l'obiettivo commerciale del
            servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per spiagge e lidi?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per spiagge e lidi può variare in base
            alla località, alla durata delle riprese, al tipo di materiale
            richiesto, alla grandezza dell'area, al numero di punti da riprendere
            e alla post-produzione. Un servizio con sole fotografie può avere un
            costo diverso rispetto a un video completo con montaggio, musica,
            color correction e formati per social.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il momento scelto per le riprese può incidere. Alcuni clienti
            preferiscono riprese al mattino con la spiaggia ordinata, altri vogliono
            mostrare il lido durante la stagione, altri ancora desiderano contenuti
            al tramonto, durante eventi o in momenti con maggiore atmosfera.
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
                Posso trovare un pilota drone per una spiaggia o un lido?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta e ricevere
                candidature da piloti drone disponibili per foto e video di
                spiagge, lidi, stabilimenti balneari e beach club.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per la promozione turistica?
              </h3>
              <p className="text-gray-300">
                Sì, perché permette di mostrare dall'alto mare, costa, spiagge,
                servizi, lungomare, stabilimenti e panorama della località.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere contenuti per social?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare se ti servono video verticali, reel, foto,
                video breve, video completo o materiale pronto per campagne social.
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
            Trova un pilota drone per spiagge e lidi
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video promozionali, riprese
            professionali e contenuti visivi per spiagge, lidi, stabilimenti
            balneari, beach club, località turistiche e strutture sul mare.
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