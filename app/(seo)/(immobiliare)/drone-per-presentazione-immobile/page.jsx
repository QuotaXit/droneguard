import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per presentazione immobile | DroneGuard",
  description:
    "Trova piloti drone per presentare immobili con foto e video aerei. Riprese per ville, case, terreni, agenzie immobiliari, annunci, brochure e presentazioni professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Presentazioni immobiliari con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per presentazione immobile
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi presentare un immobile in modo più professionale, completo e
            convincente? Con DroneGuard puoi trovare piloti drone disponibili per
            realizzare foto aeree, video immobiliari, riprese panoramiche e
            contenuti visivi pensati per valorizzare case, ville, attici, terreni,
            casali, condomini, capannoni, hotel, strutture ricettive e proprietà
            con spazi esterni importanti. Una buona presentazione immobiliare non
            deve limitarsi a mostrare qualche stanza: deve aiutare chi guarda a
            capire posizione, contesto, accessi, esterni, panorama, giardino,
            piscina, terrazzi, terreno, parcheggi, spazi comuni e caratteristiche
            che rendono l'immobile diverso dagli altri.
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
              Presentazione più completa
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone permette di mostrare l'immobile nel suo insieme, includendo
              esterni, accessi, giardini, terrazzi, terreno, vista e contesto.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Materiale per annunci e brochure
            </h2>
            <p className="leading-7 text-gray-300">
              Foto e video possono essere usati per portali immobiliari, sito
              dell'agenzia, social, presentazioni, brochure digitali e schede
              commerciali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Per vendere meglio
            </h2>
            <p className="leading-7 text-gray-300">
              Una presentazione più curata può aiutare proprietari, agenzie e
              professionisti a comunicare meglio il valore reale della proprietà.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per presentare un immobile
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Quando un immobile viene presentato online, il potenziale cliente
              non ha ancora visitato la proprietà. Deve farsi un'idea attraverso
              immagini, descrizione, planimetrie e materiale promozionale. Se le
              foto mostrano solo gli interni o pochi dettagli esterni, spesso
              manca una parte fondamentale del racconto: dove si trova l'immobile,
              cosa lo circonda, quali spazi offre, come si accede, che vista ha e
              quale atmosfera trasmette.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può aggiungere una visione più ampia e più immediata. Una
              ripresa dall'alto può mostrare la casa nel suo contesto, la villa
              con il giardino, il terreno con i confini visibili, il casale
              immerso nella campagna, l'attico con la vista panoramica, il
              capannone con il piazzale, l'hotel con piscina o il condominio con
              cortile e accessi. Questo rende la presentazione più chiara e più
              utile per chi deve decidere se approfondire.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e ricevere candidature
              da piloti drone interessati. Puoi spiegare il tipo di immobile, la
              zona, gli elementi da valorizzare e il materiale che ti serve per
              creare una presentazione immobiliare più professionale.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Immobili da presentare con drone
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Ville e case indipendenti</li>
              <li>✅ Appartamenti con terrazzi</li>
              <li>✅ Attici panoramici</li>
              <li>✅ Terreni edificabili</li>
              <li>✅ Casali e rustici</li>
              <li>✅ Condomini e palazzine</li>
              <li>✅ Capannoni e immobili industriali</li>
              <li>✅ Hotel e strutture ricettive</li>
              <li>✅ Immobili di lusso</li>
              <li>✅ Proprietà con giardino, piscina o vista</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per una presentazione immobiliare più chiara
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le foto aeree possono diventare la parte iniziale di una presentazione
            immobiliare. Prima di entrare nei dettagli, chi guarda dovrebbe capire
            subito che tipo di proprietà ha davanti: una villa con grande esterno,
            un terreno con accesso stradale, un casale isolato, un attico con
            vista, un condominio in un certo quartiere o un capannone con piazzale
            e area di manovra. Il drone aiuta a creare questa prima visione
            generale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Una presentazione efficace può seguire un ordine semplice: prima la
            vista generale dell'immobile, poi il contesto, poi gli esterni, poi
            gli interni, poi i dettagli. Le immagini con drone possono coprire la
            parte più difficile da ottenere con fotografie tradizionali: posizione,
            proporzioni, accessi, spazi esterni, vicinanza ad altri edifici,
            strade, servizi, panorama e rapporto con il territorio.
          </p>

          <p className="leading-8 text-gray-300">
            Questo materiale può essere utile per portali immobiliari, siti di
            agenzie, landing page dedicate, brochure digitali, dossier per
            investitori, presentazioni ai proprietari, post social, campagne
            sponsorizzate e schede commerciali da inviare a clienti interessati.
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
                2. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi l'immobile, la zona, il tipo di presentazione che vuoi
                creare e il materiale richiesto.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti drone interessati possono candidarsi e proporti la loro
                disponibilità per il servizio.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Valuta il professionista più adatto in base al tipo di immobile,
                alla zona e al risultato desiderato.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Video drone per presentazioni professionali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un video con drone può rendere la presentazione immobiliare più
              dinamica e più emozionale. Il filmato può partire da una panoramica
              della zona, avvicinarsi all'immobile, mostrare ingresso, giardino,
              piscina, terrazzi, terreno, parcheggi o spazi esterni e concludere
              con una vista generale. Questo tipo di contenuto è utile quando
              l'immobile ha un valore visivo importante e deve essere comunicato
              in modo più forte rispetto a una semplice galleria di foto.
            </p>

            <p className="leading-8 text-gray-300">
              Il video può essere usato su sito dell'agenzia, social network,
              campagne sponsorizzate, pagine dedicate, presentazioni commerciali e
              materiali da inviare a potenziali acquirenti o investitori.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Presentazioni per proprietari e clienti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Per un'agenzia immobiliare, il materiale drone può essere utile non
              solo per trovare acquirenti, ma anche per mostrare al proprietario
              che l'immobile viene seguito con cura. Una presentazione con foto
              aeree e video può comunicare professionalità, attenzione al dettaglio
              e capacità di promuovere la proprietà in modo moderno.
            </p>

            <p className="leading-8 text-gray-300">
              Questo può essere importante soprattutto per immobili di pregio,
              ville, terreni, casali, hotel, capannoni e proprietà che hanno
              caratteristiche esterne da valorizzare.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa inserire in una presentazione immobiliare con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Una presentazione immobiliare efficace dovrebbe aiutare il cliente a
            capire l'immobile senza confusione. Puoi chiedere al pilota drone una
            vista generale della proprietà, immagini degli accessi, riprese degli
            spazi esterni, foto del giardino, video del terreno, panoramiche del
            quartiere, immagini della piscina, viste della terrazza, riprese del
            tetto, panoramiche della strada di arrivo o dettagli della posizione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per una villa, può essere utile mostrare casa, giardino, piscina e
            privacy. Per un terreno, accessi, forma e contesto. Per un casale,
            campagna, strada bianca, terreno e panorama. Per un attico, terrazzo e
            vista. Per un capannone, piazzale, accessi e copertura. Per un hotel,
            ingresso, piscina, parcheggi e posizione rispetto ai punti turistici.
          </p>

          <p className="leading-8 text-gray-300">
            Più la richiesta è chiara, più sarà facile ricevere candidature
            coerenti. Specifica sempre l'uso finale del materiale: annuncio,
            brochure, social, sito web, video promozionale, presentazione a
            investitori o documentazione per clienti interessati.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per presentazione immobile
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e un breve video di una
              proprietà da presentare online. Vorrei mostrare l'immobile
              dall'alto, gli accessi, il giardino, il terreno, il panorama e il
              contesto circostante. Il materiale sarà usato per un annuncio
              immobiliare, una brochure digitale e una presentazione da inviare a
              potenziali clienti interessati.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito che il servizio
            non deve essere solo documentativo, ma anche ordinato e pensato per
            valorizzare l'immobile all'interno di una presentazione commerciale.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per presentare un immobile?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla zona, alla distanza, alla durata del
            servizio, alla complessità della proprietà e al tipo di materiale
            richiesto. Una semplice serie di foto aeree può avere un costo diverso
            rispetto a un video completo con più riprese, angolazioni diverse,
            selezione del materiale e consegna di contenuti pronti per l'uso su
            portali, sito web o social.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il tipo di immobile incide. Una villa con piscina, un terreno
            grande, un casale isolato, un capannone industriale, un hotel o un
            attico in centro città richiedono valutazioni diverse. Per questo è
            utile pubblicare una richiesta dettagliata e spiegare il risultato che
            vuoi ottenere.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette al
            cliente di pubblicare il lavoro, ricevere candidature e scegliere il
            pilota drone più adatto in base al tipo di presentazione immobiliare
            desiderata.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Crediti su DroneGuard
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione.
            Pubblicare un lavoro costa 5 crediti, quindi puoi iniziare cercando un
            pilota drone per realizzare foto e video per la presentazione di un
            immobile.
          </p>

          <p className="leading-8 text-gray-300">
            I nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.
            Rispondere o candidarsi a un annuncio costa 5 crediti. Questo sistema
            permette di collegare chi cerca un servizio drone con chi è disponibile
            a svolgerlo.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per presentare un immobile?
              </h3>
              <p className="text-gray-300">
                Sì, soprattutto quando l'immobile ha esterni, vista, terreno,
                giardino, piscina, accessi, terrazzi o un contesto importante da
                mostrare.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare il materiale per una brochure?
              </h3>
              <p className="text-gray-300">
                Sì, foto e video possono essere usati per brochure digitali,
                presentazioni, annunci, social e sito web, secondo gli accordi
                presi con il pilota.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Va bene anche per agenzie immobiliari?
              </h3>
              <p className="text-gray-300">
                Sì, un'agenzia può usare DroneGuard per cercare piloti drone per
                singoli immobili o per collaborazioni nella propria zona.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente le riprese?
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
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono
                10 crediti gratuiti dopo la registrazione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per presentare un immobile
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto e video per presentazioni
            immobiliari, annunci online, brochure digitali, ville, terreni,
            casali, attici, hotel, capannoni e immobili da valorizzare.
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