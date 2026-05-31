import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per uliveti | DroneGuard",
  description:
    "Trova piloti drone per uliveti, aziende agricole, oliveti, terreni, frantoi, agricoltura, video promozionali e documentazione visiva dall'alto."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per agricoltura e aziende olivicole
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per uliveti
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi realizzare foto aeree, video promozionali o documentazione visiva
            di un uliveto, un oliveto, un frantoio, un'azienda agricola, un
            terreno coltivato, un casale, una tenuta, un agriturismo o un'area
            rurale? Con DroneGuard puoi pubblicare una richiesta e trovare piloti
            drone disponibili per riprese dall'alto, immagini panoramiche, video
            aziendali, sopralluoghi visivi e materiale utile a produttori di olio,
            aziende agricole, agronomi, tecnici, proprietari, consulenti, frantoi,
            agenzie marketing e strutture legate al turismo rurale.
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
              Riprese di uliveti
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video dall'alto di ulivi, terreni, filari, colline,
              strade poderali, casali, frantoi e aree agricole.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Video per olio e frantoi
            </h2>
            <p className="text-gray-300">
              Ottieni contenuti per sito web, social, e-commerce, presentazioni,
              turismo rurale, comunicazione aziendale e promozione dell'olio.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione agricola
            </h2>
            <p className="text-gray-300">
              Usa immagini aeree per osservare terreni, accessi, pendenze, zone
              difficili da raggiungere e organizzazione dell'azienda agricola.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per un uliveto
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un uliveto può estendersi su colline, pendii, terreni agricoli,
              strade poderali, muretti, casali, frantoi e zone rurali di grande
              valore paesaggistico. Da terra non sempre è facile mostrare la
              dimensione reale della proprietà, la disposizione degli alberi, la
              forma del terreno o il rapporto tra azienda agricola e territorio.
              Il drone permette di raccontare tutto questo con una visione più
              ampia, ordinata e professionale.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le riprese dall'alto possono essere utili per documentare lo stato
              generale dell'uliveto, valorizzare il paesaggio, mostrare il lavoro
              agricolo, presentare un frantoio, promuovere olio extravergine,
              raccontare la raccolta delle olive, creare contenuti per il sito web
              o realizzare materiale visivo per social, brochure e comunicazione
              aziendale.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone non sostituisce agronomi, tecnici agricoli o consulenti
              specializzati, ma può essere un supporto visivo molto utile per
              osservare, documentare e comunicare meglio il valore dell'uliveto,
              della produzione e dell'azienda agricola.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per uliveti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree di uliveti e oliveti</li>
              <li>✅ Video promozionali per aziende agricole</li>
              <li>✅ Riprese di terreni, colline e strade poderali</li>
              <li>✅ Documentazione visiva per produttori di olio</li>
              <li>✅ Immagini per frantoi, siti web e social</li>
              <li>✅ Video per raccolta olive e lavorazioni agricole</li>
              <li>✅ Foto panoramiche di casali, tenute e agriturismi</li>
              <li>✅ Materiale per turismo rurale e vendita online</li>
              <li>✅ Supporto visivo per tecnici, agronomi e proprietari</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per aziende agricole, frantoi e produttori di olio
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un'azienda che produce olio non vende solo un prodotto, ma racconta un
            territorio, una tradizione, una cura agricola e un processo produttivo.
            Le immagini con drone possono mostrare gli uliveti, i terreni, la
            posizione della tenuta, il frantoio, le strade interne, i casali e il
            paesaggio che circonda l'azienda. Questo rende la comunicazione più
            forte e più credibile.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un video dall'alto può essere usato per presentare l'azienda agricola,
            promuovere l'olio extravergine, aggiornare il sito web, creare
            contenuti per Instagram e Facebook, raccontare la raccolta delle
            olive, valorizzare il frantoio o preparare materiale per fiere,
            degustazioni, e-commerce e brochure digitali.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard puoi richiedere un servizio semplice con foto aeree
            dell'uliveto oppure un servizio più completo con video, riprese del
            frantoio, immagini durante la raccolta, panoramiche della tenuta e
            contenuti pensati per la comunicazione aziendale.
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
                Crea il tuo account come azienda agricola, produttore di olio,
                frantoio, proprietario, agronomo, tecnico o pilota drone.
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
                Descrivi l'uliveto, la città, la tenuta, le aree da riprendere e
                il tipo di foto o video che vuoi ottenere.
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
              Riprese durante raccolta olive e lavorazioni
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              La raccolta delle olive è uno dei momenti più importanti per un
              produttore. Il drone può documentare gli ulivi, il personale al
              lavoro, i mezzi agricoli, le cassette, i percorsi interni, il
              paesaggio e l'atmosfera della campagna. Questo materiale può
              diventare un contenuto molto utile per raccontare il lavoro reale
              che c'è dietro ogni bottiglia di olio.
            </p>

            <p className="leading-8 text-gray-300">
              Le riprese possono essere richieste anche in altri momenti
              dell'anno: potatura, manutenzione dei terreni, sistemazione delle
              strade interne, pulizia, irrigazione, controllo visivo generale e
              preparazione dell'azienda agricola alla stagione produttiva.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Immagini per sito web, social ed e-commerce
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Chi vende olio online o promuove un frantoio ha bisogno di immagini
              forti. Le foto aeree possono mostrare la provenienza del prodotto,
              il territorio, la dimensione della tenuta e la cura degli uliveti.
              Questo aiuta a rendere più credibile la comunicazione e a
              differenziare l'azienda da chi usa immagini generiche.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale può essere usato per pagine prodotto, sito web,
              campagne social, reel, video istituzionali, landing page, cataloghi,
              brochure digitali, presentazioni per clienti e contenuti dedicati al
              turismo rurale.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per osservare terreni, filari e accessi agricoli
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Oltre alla comunicazione, il drone può essere utile per avere una
            panoramica visiva dell'uliveto. Dall'alto si possono osservare la
            disposizione degli alberi, i confini dei terreni, le strade poderali,
            le zone più difficili da raggiungere, le pendenze, gli accessi, i
            casali, le aree di lavoro e la relazione tra i diversi appezzamenti
            agricoli.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo tipo di documentazione può essere utile per proprietari,
            agronomi, tecnici e responsabili agricoli che vogliono condividere
            immagini chiare del territorio. Non è una diagnosi tecnica o agronomica,
            ma una documentazione visiva che può aiutare a vedere meglio l'insieme
            dell'azienda e a spiegare la situazione a persone che non sono sul
            posto.
          </p>

          <p className="leading-8 text-gray-300">
            Se servono analisi specialistiche, mappe, rilievi, termografia,
            agricoltura di precisione o dati tecnici, è importante specificarlo
            nella richiesta e rivolgersi a piloti e professionisti con strumenti e
            competenze adeguate.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Produttori di olio
            </h2>
            <p className="text-gray-300">
              Riprese per aziende olivicole, frantoi, produttori di olio
              extravergine, tenute agricole, casali e comunicazione del prodotto.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Terreni agricoli
            </h2>
            <p className="text-gray-300">
              Foto e video di uliveti, oliveti, appezzamenti, colline, strade
              poderali, confini agricoli, accessi e zone di lavorazione.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Turismo rurale
            </h2>
            <p className="text-gray-300">
              Materiale visivo per agriturismi, degustazioni, visite in frantoio,
              esperienze agricole, eventi, social e promozione aziendale.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene
            l'uliveto e il risultato desiderato. Puoi indicare la città, la zona,
            il tipo di azienda, la dimensione indicativa dei terreni, se ci sono
            colline, filari, frantoio, casale, agriturismo, area degustazione o
            strade interne da riprendere.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se vuoi foto aeree, video promozionale, riprese
            durante la raccolta olive, immagini per sito web, contenuti social,
            documentazione dei terreni, materiale per e-commerce, presentazioni o
            una panoramica completa della tenuta.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere informazioni pratiche come orari migliori per la luce,
            presenza di persone o mezzi agricoli, referente sul posto, aree di
            decollo, eventuali limitazioni, necessità di coordinarsi con il lavoro
            agricolo e modalità di consegna dei file.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per uliveto
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di un uliveto e
              del nostro frantoio. Mi servono riprese dall'alto degli alberi, dei
              terreni, delle colline, della strada di accesso, del casale e
              dell'area di lavorazione. Il materiale verrà usato per sito web,
              social, promozione dell'olio extravergine e presentazione
              dell'azienda agricola.”
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
            Quanto costa un servizio drone per uliveti?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla città, alla distanza, alla dimensione
            dell'uliveto, alla durata delle riprese, alla quantità di aree da
            documentare, alla presenza di un frantoio o di una struttura turistica
            e al tipo di materiale finale richiesto. Una semplice serie di foto
            aeree ha un costo diverso rispetto a un video promozionale completo
            con riprese della tenuta, del frantoio, degli ulivi e del territorio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna incide sul prezzo. Alcune aziende chiedono solo file
            grezzi, altre preferiscono foto selezionate, video montati, reel per
            social, cartelle ordinate, immagini per brochure o contenuti già
            pronti per sito web, e-commerce e comunicazione aziendale.
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
                Posso usare il drone per promuovere un produttore di olio?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video dall'alto per mostrare uliveti,
                terreni, frantoi, casali, colline, aree di lavorazione e
                territorio.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Le riprese possono essere fatte durante la raccolta olive?
              </h3>
              <p className="text-gray-300">
                Sì, puoi indicare nella richiesta se vuoi documentare la raccolta,
                il lavoro agricolo, i mezzi, le persone presenti e le attività
                nell'uliveto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone può aiutare a osservare i terreni?
              </h3>
              <p className="text-gray-300">
                Sì, le immagini dall'alto possono offrire una panoramica visiva
                della disposizione degli ulivi e dei terreni. Per analisi tecniche
                o agronomiche servono strumenti e professionisti adeguati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare il materiale per e-commerce e social?
              </h3>
              <p className="text-gray-300">
                Sì, foto e video drone possono essere usati per sito web, social,
                e-commerce, brochure digitali, presentazioni, turismo rurale e
                comunicazione aziendale.
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
            Trova un pilota drone per uliveti
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video promozionali, riprese di
            uliveti, oliveti, frantoi, aziende agricole, colline, casali, strade
            poderali, raccolta olive, turismo rurale e documentazione visiva
            agricola.
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