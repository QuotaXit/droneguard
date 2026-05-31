import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per cantieri navali | DroneGuard",
  description:
    "Trova piloti drone per cantieri navali, barche, yacht, porti, rimessaggi, aree tecniche, lavori nautici e documentazione visiva dall'alto."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per nautica e cantieri navali
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per cantieri navali
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi realizzare foto aeree o video di un cantiere navale, un rimessaggio,
            un porto turistico, un'area tecnica, una barca, uno yacht, una flotta,
            un capannone nautico, un varo, un alaggio, una manutenzione o un lavoro
            su imbarcazioni? Con DroneGuard puoi pubblicare una richiesta e trovare
            piloti drone disponibili per creare immagini dall'alto, video
            professionali, documentazione visiva e riprese utili a cantieri navali,
            armatori, tecnici, società nautiche, porti, marine, rimessaggi,
            broker, agenzie e professionisti del settore.
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
              Cantieri e rimessaggi
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video di aree tecniche, piazzali, capannoni, barche
              in lavorazione, scafi, zone di alaggio e spazi di manutenzione.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Yacht e imbarcazioni
            </h2>
            <p className="text-gray-300">
              Ottieni immagini dall'alto di barche, yacht, gommoni, flotte,
              imbarcazioni in porto, in cantiere o pronte per vendita e promozione.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Materiale commerciale
            </h2>
            <p className="text-gray-300">
              Usa riprese drone per sito web, social, annunci, presentazioni,
              brochure, comunicazione aziendale e documentazione lavori.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone in un cantiere navale
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un cantiere navale può comprendere piazzali, capannoni, pontili,
              zone di alaggio, gru, carrelli, imbarcazioni in lavorazione, aree di
              rimessaggio, scafi, strutture tecniche e spazi esterni molto ampi.
              Fotografare tutto da terra spesso non basta per mostrare l'insieme
              dell'area, l'organizzazione degli spazi e il valore del lavoro
              svolto.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone permette di ottenere una prospettiva più completa e
              professionale. Le immagini dall'alto possono mostrare il cantiere,
              le barche presenti, le fasi di lavorazione, i piazzali, i pontili,
              gli accessi, gli spazi di manovra e il rapporto tra area tecnica e
              mare. Questo tipo di materiale può essere utile sia per documentare
              lavori sia per valorizzare commercialmente l'attività.
            </p>

            <p className="leading-8 text-gray-300">
              Le riprese devono sempre essere organizzate rispettando regole
              operative, sicurezza, autorizzazioni, privacy e indicazioni dell'area
              portuale o del cantiere. DroneGuard mette in contatto clienti e
              piloti drone: il servizio viene poi concordato tra le parti in base
              al luogo e al tipo di riprese richieste.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per cantieri navali
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree di cantieri navali e rimessaggi</li>
              <li>✅ Video di barche, yacht e imbarcazioni</li>
              <li>✅ Riprese di aree tecniche, piazzali e pontili</li>
              <li>✅ Documentazione visiva di lavori nautici</li>
              <li>✅ Immagini per vendita e promozione barche</li>
              <li>✅ Materiale per sito web e social aziendali</li>
              <li>✅ Riprese prima e dopo manutenzioni</li>
              <li>✅ Foto di flotte, marine e porti turistici</li>
              <li>✅ Video per cantieri, broker e società nautiche</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per barche, yacht e imbarcazioni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese con drone possono valorizzare molto una barca o uno yacht.
            Una vista dall'alto mostra le linee dello scafo, la coperta, la
            posizione in porto, l'area circostante e l'impatto visivo
            dell'imbarcazione. Questo può essere utile per vendita, noleggio,
            promozione, presentazioni, annunci, contenuti social e comunicazione
            commerciale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            In un cantiere navale, il drone può documentare anche le fasi di
            lavorazione: barca in secco, manutenzione dello scafo, verniciatura,
            preparazione al varo, movimentazione, lavori esterni, rimessaggio e
            risultato finale. Le immagini prima e dopo possono raccontare meglio
            il lavoro svolto e dare valore all'intervento.
          </p>

          <p className="leading-8 text-gray-300">
            Le foto e i video possono essere richiesti da cantieri, armatori,
            broker nautici, società di charter, marina, rimessaggi, officine,
            tecnici e professionisti che vogliono mostrare le imbarcazioni in modo
            più professionale.
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
                Crea il tuo account come cantiere navale, armatore, società
                nautica, broker, marina, tecnico, cliente o pilota drone.
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
                Descrivi il cantiere, la barca, la zona, il tipo di riprese e il
                materiale che vuoi ottenere.
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
              Video per cantieri, marine e aziende nautiche
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un video drone può aiutare un cantiere navale o una marina a
              presentarsi in modo più forte. Le riprese dall'alto possono mostrare
              dimensioni dell'area, pontili, piazzali, barche presenti, accessi,
              servizi, capannoni, zone operative e posizione rispetto al mare.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale può essere usato su sito web, social, presentazioni,
              brochure digitali, campagne pubblicitarie, contenuti per clienti,
              video istituzionali e comunicazioni aziendali.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Documentazione di lavori e manutenzioni
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le immagini con drone possono documentare lo stato di una barca o di
              un'area di cantiere prima, durante e dopo un intervento. Questo è
              utile per lavori importanti, manutenzioni esterne, rimessaggio,
              verniciature, ripristini, sistemazioni di piazzali, ampliamenti e
              interventi su strutture nautiche.
            </p>

            <p className="leading-8 text-gray-300">
              Foto e video ordinati possono essere condivisi con armatori,
              clienti, tecnici, responsabili, proprietà e soggetti coinvolti nel
              progetto.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per varo, alaggio e movimentazione imbarcazioni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Alcuni momenti della vita di una barca sono particolarmente adatti a
            essere raccontati con il drone: varo, alaggio, ingresso in porto,
            uscita dal cantiere, movimentazione in piazzale, preparazione alla
            stagione, consegna al cliente o ritorno in acqua dopo lavori di
            manutenzione. Le riprese dall'alto possono rendere questi momenti più
            scenografici e professionali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini possono essere usate per documentare il lavoro del
            cantiere, creare contenuti per il proprietario dell'imbarcazione,
            promuovere servizi nautici o raccontare una fase importante del
            progetto. Il drone permette di mostrare contemporaneamente la barca,
            l'area di manovra, il personale, i mezzi e il contesto del porto o del
            cantiere.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni ripresa deve essere pianificata con attenzione, soprattutto in
            presenza di persone, mezzi, gru, acqua, pontili, traffico portuale o
            aree operative regolamentate.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Cantieri navali
            </h2>
            <p className="text-gray-300">
              Riprese per aree tecniche, capannoni, piazzali, rimessaggi,
              lavorazioni, varo, alaggio e documentazione aziendale.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Yacht e broker nautici
            </h2>
            <p className="text-gray-300">
              Foto e video per vendita, promozione, noleggio, annunci, cataloghi,
              sito web, social e presentazioni commerciali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Porti e marine
            </h2>
            <p className="text-gray-300">
              Materiale visivo per pontili, banchine, posti barca, aree servizi,
              accessi, strutture turistiche e comunicazione della marina.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            servizio che ti serve. Puoi indicare la città, il porto, il cantiere,
            il tipo di imbarcazione, se si tratta di yacht, barca, gommone,
            rimessaggio, area tecnica, varo, alaggio, video promozionale o
            documentazione lavori.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se vuoi foto, video, riprese dall'alto della
            barca, immagini del cantiere, dettagli dello scafo, riprese in porto,
            materiale per vendita, video per social, documentazione prima e dopo
            un intervento o contenuti per sito web e presentazioni.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere informazioni pratiche come orari disponibili,
            presenza di personale o mezzi in movimento, referente sul posto, zona
            di decollo, autorizzazioni dell'area, eventuali limitazioni portuali,
            tempi di consegna e formato dei file richiesti.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per cantiere navale
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di un cantiere
              navale. Mi servono riprese dall'alto del piazzale, delle barche in
              lavorazione, dei capannoni, della zona di alaggio, dei pontili e di
              uno yacht appena terminato. Il materiale verrà usato per sito web,
              social aziendali, presentazione ai clienti e documentazione dei
              lavori eseguiti.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            area, le imbarcazioni da riprendere, la finalità del servizio e il
            tipo di consegna desiderata.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per cantieri navali?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla città, al porto, alla durata delle
            riprese, alla complessità dell'area, al numero di imbarcazioni da
            documentare, al tipo di video richiesto e alla consegna finale. Una
            semplice serie di foto aeree ha un costo diverso rispetto a un video
            promozionale completo, con più scene, riprese del cantiere, dettagli
            dello yacht e montaggio finale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche le condizioni operative possono incidere: aree portuali, permessi,
            presenza di mezzi, coordinamento con il cantiere, orari disponibili,
            sicurezza e limitazioni locali devono essere valutati prima del
            servizio.
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
                Posso usare il drone per riprendere un cantiere navale?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video di cantieri navali, rimessaggi,
                piazzali, pontili, barche, yacht, capannoni e aree tecniche.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Le riprese possono essere usate per vendere una barca?
              </h3>
              <p className="text-gray-300">
                Sì, foto e video drone possono essere usati per annunci, broker,
                siti web, social, presentazioni commerciali e materiale promozionale
                per yacht e imbarcazioni.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Servono autorizzazioni per volare in porto?
              </h3>
              <p className="text-gray-300">
                Dipende dalla zona, dalle regole locali, dall'area portuale e dal
                tipo di volo. Il servizio deve essere pianificato con un pilota
                competente e con le autorizzazioni necessarie.
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
            Trova un pilota drone per cantieri navali
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video, riprese di cantieri
            navali, yacht, barche, rimessaggi, porti, pontili, aree tecniche,
            varo, alaggio e documentazione visiva per il settore nautico.
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