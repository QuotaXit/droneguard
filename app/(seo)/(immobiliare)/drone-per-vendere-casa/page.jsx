import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per vendere casa | DroneGuard",
  description:
    "Trova un pilota drone per vendere casa con foto e video aerei. Pubblica una richiesta per valorizzare ville, immobili, terreni, giardini, terrazzi e proprietà."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Foto e video drone per immobili in vendita
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per vendere casa
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Vuoi vendere una casa, una villa, un terreno, un casale, un immobile
            con giardino o una proprietà che merita di essere mostrata dall'alto?
            Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto e video aerei pensati per annunci
            immobiliari, agenzie, privati, proprietari, investitori e
            professionisti. Il drone può aiutare a valorizzare tetti, giardini,
            terrazzi, piscine, cortili, terreni, accessi, vista panoramica,
            posizione dell'immobile e contesto circostante, rendendo l'annuncio
            più completo e più chiaro per chi guarda online.
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
              Foto aeree per annunci
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini dall'alto per mostrare meglio casa, giardino,
              terreno, terrazzi, piscina, accessi e posizione dell'immobile.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Video immobiliare
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può realizzare video panoramici utili per presentare una
              villa, un casale, una proprietà di pregio o un immobile con spazi
              esterni importanti.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Per privati e agenzie
            </h2>
            <p className="leading-7 text-gray-300">
              Il servizio può essere richiesto da proprietari, agenzie
              immobiliari, home stager, investitori, costruttori e professionisti
              del settore casa.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per vendere casa
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Quando una persona cerca casa online, le immagini sono spesso il
              primo elemento che decide se aprire un annuncio o ignorarlo. Le foto
              classiche mostrano gli interni e qualche dettaglio esterno, ma non
              sempre riescono a far capire la posizione dell'immobile, la grandezza
              del giardino, la distanza dalla strada, la vista, il contesto del
              quartiere o il valore degli spazi esterni. Il drone può aggiungere
              una prospettiva diversa e rendere l'annuncio più completo.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le riprese aeree sono particolarmente utili per ville, case
              indipendenti, casali, rustici, immobili con terreno, proprietà con
              piscina, agriturismi, case al mare, case in campagna, attici con
              terrazzo, immobili panoramici e strutture con spazi esterni
              importanti. In questi casi, mostrare solo una foto da terra può
              ridurre il valore percepito dell'immobile.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta specificando il tipo di
              immobile, la zona, il materiale che desideri ricevere e l'obiettivo
              dell'annuncio. I piloti drone interessati possono candidarsi e
              proporti la propria disponibilità per realizzare foto, video o un
              pacchetto visivo più completo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi valorizzare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Villa in vendita</li>
              <li>✅ Casa indipendente</li>
              <li>✅ Giardino e spazi esterni</li>
              <li>✅ Piscina e area relax</li>
              <li>✅ Terreno e confini indicativi</li>
              <li>✅ Terrazzo panoramico</li>
              <li>✅ Vista mare, campagna o collina</li>
              <li>✅ Accessi, cortili e parcheggi</li>
              <li>✅ Contesto e posizione dell'immobile</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto drone per annunci immobiliari
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le foto con drone possono rendere un annuncio immobiliare più
            interessante perché mostrano ciò che spesso non si riesce a spiegare
            bene con le parole. Un potenziale acquirente può capire meglio dove
            si trova la casa, quanto sono ampi gli spazi esterni, come è disposto
            il giardino, se c'è una piscina, come si accede alla proprietà e quale
            vista si può avere dall'immobile. Questo può essere molto utile quando
            la proprietà ha caratteristiche esterne importanti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un pilota drone può realizzare immagini da diverse altezze e
            angolazioni: foto frontali, laterali, panoramiche, dall'alto, dal
            giardino verso la casa, dalla casa verso il panorama o da punti che
            mostrano la posizione rispetto al territorio circostante. Queste
            immagini possono essere usate su portali immobiliari, sito agenzia,
            social, brochure, presentazioni o messaggi da inviare a potenziali
            clienti.
          </p>

          <p className="leading-8 text-gray-300">
            Se vuoi un risultato più commerciale, scrivilo nella richiesta. Puoi
            indicare che il materiale serve per vendere casa e che vuoi immagini
            ordinate, luminose, pulite e pensate per valorizzare l'immobile, non
            solo per documentarlo.
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
                professionista, azienda o pilota drone.
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
                3. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi l'immobile, la zona, gli spazi da valorizzare e il tipo
                di foto o video che vuoi ottenere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e tu puoi scegliere il
                professionista più adatto al servizio immobiliare.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per villa in vendita
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Una villa spesso ha elementi che meritano di essere mostrati
              dall'alto: giardino, piscina, viale d'ingresso, terrazzi, patio,
              vista panoramica, terreno, alberi, zone relax, parcheggi e contesto
              circostante. Il drone può aiutare a raccontare meglio la proprietà
              e far capire all'acquirente il valore degli spazi esterni.
            </p>

            <p className="leading-8 text-gray-300">
              Le riprese possono essere utili per annunci di vendita, promozione
              sui social, sito dell'agenzia, presentazioni private o materiale da
              inviare a clienti interessati prima di una visita.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per casa con terreno
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Se la casa ha un terreno, un giardino ampio, un uliveto, un vigneto,
              una zona agricola o un'area esterna importante, il drone può
              mostrare molto meglio la dimensione e la disposizione della
              proprietà. Da terra, spesso, questi elementi non si capiscono bene.
            </p>

            <p className="leading-8 text-gray-300">
              Una ripresa aerea può aiutare a mostrare accessi, posizione, confini
              indicativi, spazi liberi, distanza da altre abitazioni e rapporto
              tra casa e terreno circostante.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Video drone per presentare una proprietà
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un video con drone può essere molto efficace quando si vuole
            raccontare una proprietà in modo più emozionale e completo. Un
            movimento lento dall'alto, una panoramica del giardino, un passaggio
            intorno alla casa o una ripresa che mostra la vista possono aiutare
            l'utente a immaginare meglio l'immobile prima ancora di visitarlo. Per
            case di pregio, ville, casali, immobili turistici o proprietà con
            panorama, il video può diventare un elemento importante
            dell'annuncio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il video può essere richiesto in formato semplice, come materiale
            grezzo da montare successivamente, oppure come clip più ordinata da
            utilizzare sui social, sul sito dell'agenzia o in una campagna
            promozionale. Nella richiesta puoi specificare se ti serve un video
            breve, un video panoramico, riprese verticali per social o materiale
            orizzontale per portali e sito web.
          </p>

          <p className="leading-8 text-gray-300">
            È importante spiegare al pilota quali elementi vuoi valorizzare:
            facciata, ingresso, piscina, giardino, terreno, vista, strada di
            accesso, terrazzo o posizione rispetto al quartiere. Più il messaggio
            è chiaro, più sarà facile ottenere un risultato adatto alla vendita.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta drone per vendere casa
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, descrivi il tipo di immobile:
            villa, casa indipendente, appartamento con terrazzo, casale, rustico,
            attico, immobile con giardino, casa con terreno, agriturismo o
            proprietà di pregio. Indica la città, la zona, le caratteristiche da
            valorizzare e il tipo di materiale che vuoi ricevere. Puoi chiedere
            foto, video, riprese verticali, riprese orizzontali o una selezione
            di immagini adatte agli annunci.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Scrivi anche dove userai il materiale: portale immobiliare, sito
            agenzia, social, brochure, presentazione a clienti, vendita privata o
            campagna promozionale. Questo aiuta il pilota a capire se deve
            concentrarsi su immagini più tecniche, più commerciali o più
            emozionali. Se hai già foto interne, puoi chiedere solo riprese
            esterne e panoramiche; se invece vuoi un servizio completo, puoi
            descrivere tutte le aree da mostrare.
          </p>

          <p className="leading-8 text-gray-300">
            Ricorda che il pilota dovrà valutare sicurezza, privacy, spazi di
            volo, ostacoli, meteo, presenza di persone, edifici vicini e regole
            applicabili. Se la proprietà si trova in centro abitato, vicino a
            strade, vicino ad altri edifici o in una zona con limitazioni, è utile
            indicarlo subito nella richiesta.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta drone per vendere casa
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di una villa in
              vendita in provincia di Roma. Vorrei valorizzare il giardino, la
              piscina, il viale d'ingresso, la vista e il terreno intorno alla
              casa. Il materiale mi serve per un annuncio immobiliare e per una
              breve clip da pubblicare sui social dell'agenzia.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito che il servizio
            ha un obiettivo commerciale e che le immagini devono valorizzare
            l'immobile, non solo documentarlo.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa usare un drone per vendere casa?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per vendere casa può variare in base
            alla città, al tipo di immobile, alla durata del lavoro, al numero di
            foto richieste, alla presenza di video, al formato di consegna e alla
            complessità del volo. Una semplice serie di foto esterne può avere un
            costo diverso rispetto a un video immobiliare completo per una villa,
            un casale o una proprietà con terreno.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche l'obiettivo del materiale può incidere. Se ti servono solo
            immagini grezze, il lavoro può essere più semplice. Se invece vuoi
            riprese curate, video per social, passaggi cinematografici, selezione
            immagini o materiale pronto per un'agenzia, il pilota dovrà organizzare
            il servizio in modo diverso.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette di
            pubblicare la richiesta e ricevere candidature da piloti drone
            interessati. Cliente e professionista potranno poi accordarsi sui
            dettagli del servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare il drone per vendere casa?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi trovare piloti drone disponibili per foto
                e video aerei utili a valorizzare immobili in vendita.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È utile anche per appartamenti?
              </h3>
              <p className="text-gray-300">
                Può essere utile soprattutto se l'appartamento ha terrazzo,
                attico, vista panoramica, edificio particolare o posizione da
                valorizzare.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso chiedere video per social?
              </h3>
              <p className="text-gray-300">
                Sì, nella richiesta puoi specificare se vuoi materiale verticale,
                orizzontale, video breve, clip promozionale o riprese grezze.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il pilota monta anche il video?
              </h3>
              <p className="text-gray-300">
                Dipende dal professionista. Puoi scrivere nella richiesta se ti
                serve solo materiale grezzo o anche un video montato.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare la richiesta?
              </h3>
              <p className="text-gray-300">
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono
                10 crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                I piloti pagano per candidarsi?
              </h3>
              <p className="text-gray-300">
                Sì, rispondere o candidarsi a un annuncio costa 5 crediti. I
                nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente le riprese?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone. Il
                servizio viene svolto dal professionista scelto dal cliente.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per vendere casa
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto e video aerei di case, ville,
            immobili, terreni, giardini, terrazzi, piscine, proprietà di pregio e
            spazi esterni da valorizzare negli annunci immobiliari.
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