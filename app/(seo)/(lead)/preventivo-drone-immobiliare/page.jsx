import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo drone immobiliare | DroneGuard",
  description:
    "Richiedi un preventivo per drone immobiliare. Trova piloti drone per video immobiliari, foto aeree, ville, case, terreni, agenzie immobiliari e annunci professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Preventivi drone per immobili
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Preventivo drone immobiliare
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Vuoi richiedere un preventivo per un servizio drone immobiliare? Con
            DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto aeree, video immobiliari, riprese di
            ville, case, appartamenti, terreni, casali, capannoni, immobili
            commerciali e proprietà da vendere o affittare. Il drone permette di
            mostrare un immobile da una prospettiva più ampia, valorizzando spazi
            esterni, giardini, piscine, accessi, posizione, vista panoramica e
            contesto circostante.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Richiedi un preventivo
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto aeree immobiliari
            </h2>
            <p className="text-gray-300">
              Richiedi immagini dall'alto per valorizzare ville, case, terreni,
              giardini, piscine, accessi, parcheggi e spazi esterni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Video immobiliari
            </h2>
            <p className="text-gray-300">
              Trova piloti drone per video promozionali destinati ad annunci,
              agenzie immobiliari, social, siti web e presentazioni di vendita.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti nella tua zona
            </h2>
            <p className="text-gray-300">
              Pubblica la richiesta, indica la zona dell'immobile e ricevi
              candidature da operatori drone disponibili.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché richiedere un preventivo drone per immobili
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Nel settore immobiliare la qualità della presentazione conta molto.
              Foto e video realizzati con drone possono aiutare a mostrare meglio
              il valore di una proprietà, soprattutto quando l'immobile ha spazi
              esterni importanti, una posizione interessante, una vista panoramica,
              un grande terreno, un giardino, una piscina, un accesso particolare
              o un contesto che merita di essere visto dall'alto.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Un annuncio immobiliare con immagini aeree può comunicare più
              informazioni rispetto alle sole fotografie da terra. Il drone può
              mostrare la posizione dell'edificio, la distanza dalla strada, la
              disposizione del terreno, la presenza di parcheggi, aree verdi,
              ingressi, confini, esposizione e rapporto con il quartiere o con il
              paesaggio circostante.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta specifica e ricevere
              candidature da piloti drone interessati. La piattaforma non esegue
              direttamente il servizio, ma mette in contatto clienti, agenzie
              immobiliari, proprietari e operatori drone disponibili.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone immobiliari
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree per annunci immobiliari</li>
              <li>✅ Video drone per ville e case</li>
              <li>✅ Riprese di giardini, piscine e terreni</li>
              <li>✅ Video per agenzie immobiliari</li>
              <li>✅ Foto e video di casali e proprietà di pregio</li>
              <li>✅ Riprese di capannoni e immobili commerciali</li>
              <li>✅ Video promozionali per vendita o affitto</li>
              <li>✅ Materiale per portali immobiliari e social</li>
              <li>✅ Contenuti per costruttori e imprese edili</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per annunci immobiliari più professionali
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un annuncio immobiliare deve far capire rapidamente il valore della
            proprietà. Le immagini da terra sono importanti, ma spesso non bastano
            per raccontare tutto. Il drone può aggiungere una visione più completa,
            mostrando la casa dall'alto, il terreno, gli spazi esterni, il
            quartiere, la strada di accesso, il panorama e la disposizione generale
            dell'immobile.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo è utile soprattutto per ville, casali, terreni edificabili,
            proprietà in campagna, immobili vicino al mare, strutture turistiche,
            complessi residenziali, capannoni, lotti commerciali e case con spazi
            esterni importanti. Un potenziale acquirente può capire meglio la
            dimensione reale della proprietà e immaginare con più facilità il
            contesto in cui si trova.
          </p>

          <p className="leading-8 text-gray-300">
            Se vuoi vendere o affittare un immobile, puoi usare DroneGuard per
            trovare un pilota drone e richiedere foto, video, materiale grezzo o
            un contenuto finale pronto da pubblicare online.
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
                Crea gratuitamente il tuo account come cliente, agenzia
                immobiliare, proprietario o pilota drone.
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
                Descrivi l'immobile, la zona, il tipo di riprese e il materiale
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
              Preventivo drone per ville e case
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Una villa o una casa indipendente può essere valorizzata molto con
              riprese aeree. Il drone può mostrare il giardino, la piscina, il
              vialetto, gli accessi, il terreno, la posizione dell'abitazione e il
              contesto circostante. Questo tipo di materiale può rendere l'annuncio
              più completo e aiutare l'acquirente a capire meglio gli spazi.
            </p>

            <p className="leading-8 text-gray-300">
              Nella richiesta puoi specificare se vuoi solo fotografie, un video
              breve, una clip promozionale o un contenuto montato pronto da usare
              su portali immobiliari, social o sito web.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Preventivo drone per terreni e lotti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Per terreni agricoli, terreni edificabili, lotti, aree esterne e
              proprietà ampie, il drone può aiutare a mostrare dimensioni, confini
              indicativi, accessi, strade vicine, esposizione, pendenze e rapporto
              con il paesaggio circostante. Le immagini aeree sono utili quando da
              terra è difficile far capire l'estensione reale dell'area.
            </p>

            <p className="leading-8 text-gray-300">
              Se il terreno deve essere venduto o presentato a un cliente, foto e
              video dall'alto possono rendere la comunicazione molto più chiara e
              professionale.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per agenzie immobiliari
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le agenzie immobiliari possono utilizzare i servizi drone per rendere
            più forti gli annunci, distinguersi dalla concorrenza e presentare gli
            immobili in modo più moderno. Un video aereo ben realizzato può essere
            usato per portali immobiliari, social network, campagne sponsorizzate,
            sito dell'agenzia, newsletter e presentazioni ai clienti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone è particolarmente utile per immobili di pregio, ville, casali,
            terreni, complessi residenziali, immobili turistici, capannoni e
            strutture commerciali. Anche quando l'immobile non è di lusso, una
            buona ripresa aerea può aiutare a mostrare dettagli che nelle immagini
            tradizionali non emergono.
          </p>

          <p className="leading-8 text-gray-300">
            Con DroneGuard un'agenzia può pubblicare una richiesta ogni volta che
            ha bisogno di un pilota drone per un nuovo immobile, indicando zona,
            tipo di proprietà, materiale richiesto e tempi desiderati.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Vendita immobili
            </h2>
            <p className="text-gray-300">
              Foto e video con drone possono aiutare a presentare meglio case,
              ville, terreni, casali e immobili commerciali in vendita.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Affitti e strutture
            </h2>
            <p className="text-gray-300">
              Utile anche per case vacanza, agriturismi, resort, B&B, ville per
              eventi e strutture ricettive da promuovere online.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Costruttori e cantieri
            </h2>
            <p className="text-gray-300">
              Le imprese possono mostrare nuove costruzioni, complessi
              residenziali, lotti e avanzamento lavori con immagini dall'alto.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta di preventivo immobiliare
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante spiegare bene il
            tipo di immobile e il risultato che vuoi ottenere. Un pilota drone deve
            sapere se deve riprendere una villa, un appartamento, un terreno, un
            capannone, un casale, una struttura turistica o un immobile
            commerciale. Ogni proprietà richiede un approccio diverso.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi indicare la città o la zona, il tipo di immobile, la presenza di
            spazi esterni, giardino, piscina, terreno, parcheggio, accessi o vista
            panoramica. È utile specificare se desideri solo fotografie, solo
            video, entrambi, materiale grezzo o un montaggio finale pronto da
            pubblicare.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi anche indicare l'uso finale del materiale: annuncio immobiliare,
            sito dell'agenzia, social, brochure digitale, video promozionale,
            presentazione al cliente o campagna pubblicitaria. Questo aiuta il
            pilota a capire meglio lo stile da proporre.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per drone immobiliare
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di una villa in
              vendita in provincia di Roma. Vorrei riprese dall'alto della casa,
              del giardino, della piscina, degli accessi e del terreno circostante.
              Mi serve materiale professionale per annuncio immobiliare, sito web
              e social. Vorrei ricevere candidature da operatori disponibili nelle
              prossime settimane.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire subito il tipo di immobile,
            la zona, il materiale richiesto e l'obiettivo finale del servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone immobiliare?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone immobiliare può variare in base alla
            zona, al tipo di immobile, alla durata delle riprese, al materiale
            richiesto e alla post-produzione. Una semplice sessione fotografica
            per un terreno può essere diversa da un video completo per una villa,
            da un servizio per un'agenzia immobiliare o da un contenuto
            promozionale con montaggio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il tipo di consegna incide. Alcuni clienti vogliono solo foto
            aeree, altri preferiscono video, riprese grezze, immagini selezionate
            o un video finale pronto per portali immobiliari e social. Più la
            richiesta è chiara, più sarà semplice ricevere candidature coerenti.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo fisso. La piattaforma permette di
            pubblicare una richiesta e ricevere candidature da piloti drone
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
                Posso richiedere un preventivo drone per un immobile?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta per foto e video
                immobiliari con drone e ricevere candidature da piloti interessati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente il servizio?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard è una piattaforma che mette in contatto clienti e
                piloti drone. Il servizio viene svolto dal professionista scelto
                dal cliente.
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

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Per quali immobili è utile il drone?
              </h3>
              <p className="text-gray-300">
                Il drone è utile per ville, case indipendenti, terreni, casali,
                immobili commerciali, capannoni, strutture turistiche e proprietà
                con spazi esterni.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso chiedere solo foto aeree?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare se ti servono solo fotografie, solo video,
                entrambi oppure un video montato pronto per la pubblicazione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedi un preventivo drone immobiliare
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per foto aeree, video immobiliari, ville, case, terreni,
            casali, capannoni, immobili commerciali, agenzie immobiliari e annunci
            professionali.
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