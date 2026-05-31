import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per porti turistici | DroneGuard",
  description:
    "Trova piloti drone per porti turistici, marine, pontili, yacht, barche, strutture nautiche, video promozionali e documentazione visiva dall'alto."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per porti, marine e nautica
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per porti turistici
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi realizzare foto aeree o video di un porto turistico, una marina,
            un approdo, un pontile, una banchina, un'area servizi, una flotta di
            barche, yacht, gommoni, posti barca, strutture nautiche o spazi
            dedicati al turismo? Con DroneGuard puoi pubblicare una richiesta e
            trovare piloti drone disponibili per creare immagini dall'alto, video
            promozionali, riprese panoramiche, documentazione visiva e materiale
            utile a porti turistici, marine, società nautiche, gestori, agenzie,
            broker, strutture ricettive, armatori e professionisti del settore.
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
              Porti e marine
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video dall'alto di pontili, banchine, posti barca,
              accessi, aree servizi, parcheggi, darsene e spazi turistici.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Barche e yacht
            </h2>
            <p className="text-gray-300">
              Ottieni immagini professionali di imbarcazioni ormeggiate, flotte,
              yacht in marina, barche in vendita o mezzi nautici da valorizzare.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Video promozionali
            </h2>
            <p className="text-gray-300">
              Usa riprese drone per sito web, social, campagne turistiche,
              presentazioni commerciali, contenuti per clienti e comunicazione.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per un porto turistico
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un porto turistico è un luogo molto visivo: mare, pontili, barche,
              yacht, banchine, servizi, strutture, aree verdi, parcheggi,
              ristoranti, club nautici e accessi creano un insieme che spesso si
              apprezza davvero solo dall'alto. Le fotografie da terra mostrano
              alcuni dettagli, ma non sempre riescono a comunicare la dimensione
              della marina, la qualità degli spazi e la posizione rispetto al
              territorio circostante.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone permette di raccontare un porto turistico in modo più
              completo. Le riprese aeree possono mostrare la disposizione dei
              pontili, la quantità di posti barca, il contesto paesaggistico, la
              vicinanza a spiagge, centri abitati o zone turistiche, la presenza di
              servizi e l'organizzazione generale della struttura.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di materiale può essere utile per promuovere la marina,
              presentare servizi nautici, valorizzare barche e yacht, aggiornare
              sito web e social, realizzare video istituzionali, documentare lavori
              nell'area portuale o mostrare il porto a clienti, partner e armatori.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per porti turistici
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree di porti turistici e marine</li>
              <li>✅ Video promozionali per strutture nautiche</li>
              <li>✅ Riprese di pontili, banchine e posti barca</li>
              <li>✅ Immagini di yacht, barche e flotte</li>
              <li>✅ Materiale per sito web, social e campagne</li>
              <li>✅ Documentazione visiva di lavori e manutenzioni</li>
              <li>✅ Riprese di aree servizi, parcheggi e accessi</li>
              <li>✅ Video per broker, armatori e società nautiche</li>
              <li>✅ Foto panoramiche del porto e del contesto turistico</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per marine, pontili e posti barca
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le marine e i porti turistici hanno spesso una struttura articolata:
            pontili galleggianti, banchine, darsene, posti barca, aree tecniche,
            servizi per armatori, parcheggi, uffici, club nautici, ristoranti,
            aree pedonali e spazi commerciali. Le immagini dall'alto permettono di
            mostrare tutto questo in modo ordinato e immediato.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un video drone può far capire rapidamente come è organizzato il porto,
            dove si trovano i pontili, come sono distribuiti i posti barca, quali
            servizi sono presenti e quale atmosfera offre la struttura. Questo è
            utile per clienti che devono scegliere dove ormeggiare, armatori che
            valutano una marina, società nautiche che vogliono promuovere i propri
            servizi o gestori che desiderano migliorare la comunicazione.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini possono essere usate anche per presentare nuove aree,
            lavori completati, ampliamenti, riqualificazioni, eventi nautici,
            raduni, fiere locali, regate o iniziative turistiche legate al mare.
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
                Crea il tuo account come porto turistico, marina, società nautica,
                broker, armatore, struttura turistica, cliente o pilota drone.
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
                Descrivi il porto, la marina, le aree da riprendere, il tipo di
                video o foto e la finalità del servizio.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti disponibilità,
                modalità operative, tempi e consegna dei file.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Video turistici per promuovere la marina
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un porto turistico vive anche della propria immagine. Un video drone
              può mostrare il mare, gli ormeggi, le barche, i servizi, la
              posizione, l'ambiente circostante e l'esperienza che la struttura
              offre ai clienti. Questo tipo di contenuto è molto utile per siti
              web, social, campagne pubblicitarie, video istituzionali e
              presentazioni commerciali.
            </p>

            <p className="leading-8 text-gray-300">
              Le riprese possono essere pensate per valorizzare la marina nel suo
              insieme oppure per raccontare aspetti specifici: posti barca,
              servizi per armatori, ristorazione, accessibilità, eventi, charter,
              yacht club, aree relax e collegamenti con località turistiche.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Documentazione di lavori portuali e manutenzioni
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Oltre alla comunicazione, il drone può essere utile per documentare
              lavori e manutenzioni. Pontili, banchine, aree tecniche, piazzali,
              parcheggi, accessi, opere di sistemazione, nuove strutture, zone
              riqualificate e interventi sui servizi portuali possono essere
              fotografati prima, durante e dopo i lavori.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini non sostituiscono controlli tecnici, autorizzazioni o
              verifiche professionali, ma possono creare una documentazione visiva
              chiara da condividere con gestori, proprietà, tecnici, imprese e
              soggetti coinvolti nel progetto.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per barche, yacht e annunci nautici
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese aeree possono valorizzare una singola imbarcazione o una
            flotta. Uno yacht ripreso dall'alto, in porto o in contesto marino,
            comunica immediatamente eleganza, dimensione e posizione. Questo può
            essere utile per broker nautici, agenzie, società di charter, armatori
            e cantieri che vogliono presentare barche in vendita, a noleggio o
            appena consegnate.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le foto drone possono essere usate per annunci, cataloghi, schede
            commerciali, pagine web, social, video promozionali e presentazioni ai
            clienti. Il drone può mostrare l'imbarcazione insieme alla marina,
            creando immagini più forti rispetto a fotografie scattate solo da
            banchina.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard puoi richiedere foto di una barca specifica, video di
            una flotta, riprese di yacht ormeggiati, immagini del porto o un
            servizio completo per raccontare sia la struttura che le imbarcazioni.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Porti turistici
            </h2>
            <p className="text-gray-300">
              Riprese per porti, darsene, pontili, banchine, posti barca, accessi,
              aree servizi, parcheggi e strutture dedicate alla nautica.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Marine e yacht club
            </h2>
            <p className="text-gray-300">
              Foto e video per marine private, club nautici, società di gestione,
              eventi, regate, servizi per armatori e promozione turistica.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Nautica commerciale
            </h2>
            <p className="text-gray-300">
              Materiale per broker, charter, armatori, cantieri, agenzie nautiche,
              venditori di yacht, società turistiche e operatori del mare.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            porto turistico o la marina. Puoi indicare la città, la località, il
            tipo di struttura, le aree da riprendere, se ti servono immagini dei
            pontili, delle banchine, dei posti barca, delle imbarcazioni, degli
            accessi, dei parcheggi o delle aree servizi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se vuoi foto, video, riprese panoramiche, immagini
            commerciali per sito web, materiale per social, video istituzionale,
            documentazione lavori, immagini per annunci nautici o riprese di
            barche e yacht specifici.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere informazioni pratiche come orari migliori, presenza di
            barche da riprendere, referente sul posto, zone di decollo,
            autorizzazioni dell'area, eventuali limitazioni portuali, necessità di
            coordinarsi con la direzione del porto e modalità di consegna dei file.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per porto turistico
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di un porto
              turistico. Mi servono riprese dall'alto dei pontili, dei posti
              barca, delle banchine, dell'area servizi, dei parcheggi, degli
              accessi e di alcune imbarcazioni ormeggiate. Il materiale verrà usato
              per aggiornare il sito web, creare contenuti social e presentare la
              marina a nuovi clienti.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito le aree da
            riprendere, la finalità del servizio e il tipo di materiale da
            consegnare.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per porti turistici?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla città, alla dimensione del porto,
            alla durata delle riprese, al numero di aree da documentare, alla
            presenza di imbarcazioni specifiche, al tipo di video richiesto e alla
            consegna finale. Una semplice serie di foto aeree ha un costo diverso
            rispetto a un video promozionale completo con più scene e montaggio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche le condizioni operative possono incidere: aree portuali, regole
            locali, permessi, presenza di persone, traffico nautico, coordinamento
            con la direzione del porto, sicurezza e orari disponibili devono
            essere valutati prima del servizio.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo fisso. La piattaforma permette di
            pubblicare il lavoro e ricevere candidature da piloti drone
            interessati, così cliente e professionista possono accordarsi sul
            servizio più adatto.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare il drone per promuovere un porto turistico?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video dall'alto per mostrare pontili,
                banchine, posti barca, imbarcazioni, servizi, accessi e contesto
                turistico della marina.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Le riprese possono essere usate per sito web e social?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere materiale fotografico o video da usare per
                sito web, social, campagne pubblicitarie, brochure digitali e
                presentazioni commerciali.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Servono autorizzazioni per volare in un porto?
              </h3>
              <p className="text-gray-300">
                Dipende dalla zona, dalle regole locali e dall'area portuale. Il
                servizio deve essere pianificato con un pilota competente e con le
                autorizzazioni necessarie.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere riprese di yacht e barche?
              </h3>
              <p className="text-gray-300">
                Sì, puoi indicare nella richiesta se vuoi riprese di imbarcazioni
                specifiche, yacht, flotte, barche in vendita o mezzi nautici da
                valorizzare.
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
            Trova un pilota drone per porti turistici
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video promozionali, riprese di
            porti turistici, marine, pontili, banchine, posti barca, yacht, barche,
            aree servizi e strutture nautiche.
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