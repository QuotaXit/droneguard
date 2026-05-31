import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per B&B e case vacanza | DroneGuard",
  description:
    "Trova piloti drone per B&B, case vacanza, affitti brevi, ville turistiche e strutture ricettive. Richiedi foto aeree e video promozionali con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per strutture ricettive
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per B&B e case vacanza
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai un B&B, una casa vacanza, una villa turistica, un appartamento per
            affitti brevi o una struttura ricettiva e vuoi valorizzarla con foto e
            video professionali? Con DroneGuard puoi pubblicare una richiesta e
            trovare piloti drone disponibili per realizzare riprese aeree, video
            promozionali, fotografie dall'alto e contenuti visivi da usare su sito
            web, social, portali turistici e annunci online. Il drone permette di
            mostrare meglio la posizione della struttura, gli spazi esterni, il
            giardino, la piscina, il panorama, gli accessi, il parcheggio e tutto
            il contesto circostante.
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
              Foto aeree per B&B
            </h2>
            <p className="text-gray-300">
              Richiedi immagini dall'alto per valorizzare facciata, giardino,
              piscina, terrazze, ingresso, parcheggio e posizione della struttura.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Video per case vacanza
            </h2>
            <p className="text-gray-300">
              Ottieni video promozionali per annunci turistici, portali di
              prenotazione, social network, sito web e campagne pubblicitarie.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti nella tua zona
            </h2>
            <p className="text-gray-300">
              Pubblica la richiesta, indica città e struttura, e ricevi candidature
              da operatori drone disponibili al servizio.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per un B&B
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Nel settore degli affitti brevi e delle strutture ricettive, la
              prima impressione conta moltissimo. Un ospite sceglie spesso dove
              dormire guardando foto, video, posizione e sensazione generale della
              struttura. Per questo motivo avere contenuti visivi curati può fare
              la differenza tra un annuncio normale e un annuncio più professionale.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le riprese con drone aiutano a mostrare elementi che le fotografie
              tradizionali non riescono sempre a raccontare. Una casa vacanza può
              essere valorizzata mostrando la distanza dal mare, la vista, il
              giardino, la piscina, il terreno, il parcheggio, la zona esterna, la
              strada di accesso e il contesto in cui si trova.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone
              interessati. La piattaforma non realizza direttamente il servizio,
              ma mette in contatto proprietari, gestori, agenzie e operatori drone
              disponibili nella zona richiesta.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per B&B e case vacanza
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree per B&B e affittacamere</li>
              <li>✅ Video promozionali per case vacanza</li>
              <li>✅ Riprese di ville turistiche e appartamenti</li>
              <li>✅ Video per portali turistici e annunci online</li>
              <li>✅ Foto dall'alto di giardini, piscine e terrazze</li>
              <li>✅ Contenuti per social network e sito web</li>
              <li>✅ Riprese di strutture vicino al mare o in campagna</li>
              <li>✅ Materiale per agenzie immobiliari e property manager</li>
              <li>✅ Video per affitti brevi e promozione turistica</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Video drone per annunci turistici
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un video con drone può rendere più forte la presentazione di una casa
            vacanza o di un B&B. In pochi secondi permette di far vedere non solo
            la struttura, ma anche ciò che la circonda. Questo è molto utile quando
            la proprietà ha un punto di forza esterno, come un giardino, una
            piscina, una terrazza panoramica, una vista sul mare, un terreno, un
            accesso privato o una posizione particolare.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per una casa vacanza vicino al mare, il drone può mostrare la distanza
            dalla spiaggia, il contesto del quartiere, gli accessi e il panorama.
            Per una villa in campagna può valorizzare il verde, la privacy, gli
            spazi esterni, la piscina e l'atmosfera. Per un appartamento turistico
            può aiutare a mostrare la zona, la vicinanza ai servizi e il contesto
            urbano.
          </p>

          <p className="leading-8 text-gray-300">
            Il materiale può essere usato per migliorare l'immagine della
            struttura su sito web, social, campagne pubblicitarie, presentazioni
            digitali e annunci destinati agli ospiti.
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
                Crea il tuo account come cliente, proprietario, gestore, agenzia
                o pilota drone.
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
                3. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi struttura, città, tipo di riprese, periodo e materiale
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
              Drone per case vacanza al mare
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le case vacanza al mare possono ottenere un grande vantaggio dalle
              riprese aeree. Il drone può mostrare la distanza dalla spiaggia, il
              lungomare, la vista, la zona esterna, il parcheggio, la posizione
              della struttura e il contesto turistico circostante.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di contenuto aiuta l'ospite a capire meglio dove si
              trova la struttura e quale esperienza può aspettarsi prima ancora di
              prenotare.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per ville e strutture in campagna
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Ville, casali, agriturismi, case immerse nel verde e strutture in
              campagna possono essere valorizzate molto bene con il drone. Le
              immagini dall'alto permettono di mostrare spazi esterni, privacy,
              giardino, piscina, terreno, vialetti e paesaggio circostante.
            </p>

            <p className="leading-8 text-gray-300">
              Per una struttura turistica con esterni importanti, il drone può
              diventare uno strumento molto utile per comunicare atmosfera,
              dimensioni e valore della proprietà.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per portali turistici e social
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le foto aeree possono essere usate per migliorare la comunicazione
            visiva della struttura. Una buona immagine dall'alto può diventare
            perfetta per la copertina del sito web, per una galleria fotografica,
            per un annuncio, per una campagna social o per una brochure digitale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo è utile soprattutto quando la struttura ha qualcosa da mostrare
            fuori dalle mura interne: piscina, patio, terrazza, vista panoramica,
            giardino, parcheggio, ingresso, terreno, strada di accesso o posizione
            rispetto al mare, al centro storico, alla montagna o ad attrazioni
            turistiche.
          </p>

          <p className="leading-8 text-gray-300">
            Pubblicando una richiesta su DroneGuard puoi indicare se ti servono
            fotografie singole, video breve, video montato, riprese grezze o un
            pacchetto completo di contenuti per promuovere la struttura.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Proprietari privati
            </h2>
            <p className="text-gray-300">
              Ideale per chi gestisce una casa vacanza, una villa, un appartamento
              turistico o una struttura da promuovere online.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Agenzie e property manager
            </h2>
            <p className="text-gray-300">
              Utile per agenzie, gestori di affitti brevi e property manager che
              vogliono contenuti migliori per più strutture.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Strutture turistiche
            </h2>
            <p className="text-gray-300">
              Perfetto per B&B, affittacamere, ville turistiche, case al mare,
              casali, agriturismi e piccoli resort.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta per un B&B
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante spiegare bene il
            tipo di struttura e il risultato che vuoi ottenere. Puoi indicare la
            città, la zona, il tipo di immobile, il numero di aree da riprendere e
            il materiale finale desiderato.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se vuoi valorizzare piscina, giardino, terrazza,
            panorama, vicinanza al mare, spazi esterni, ingresso, parcheggio,
            camere, area relax o contesto naturale. Puoi anche indicare se ti
            servono foto, video, entrambi, riprese grezze o un video montato pronto
            da pubblicare.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere anche l'uso finale del materiale: sito web, annuncio,
            social, portali turistici, campagne pubblicitarie, brochure digitale o
            presentazione per clienti e ospiti.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per B&B o casa vacanza
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di una casa
              vacanza vicino al mare. Vorrei riprese dall'alto della struttura,
              del giardino, della piscina, della distanza dalla spiaggia, del
              parcheggio e del panorama. Il materiale mi serve per sito web,
              social e annunci turistici. Vorrei ricevere candidature da operatori
              disponibili nella zona.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire subito il tipo di struttura,
            la zona da riprendere, il materiale necessario e l'obiettivo finale del
            servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per B&B?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per B&B o case vacanza può variare in
            base alla zona, al tipo di struttura, alla durata delle riprese, al
            materiale richiesto, alla presenza di post-produzione e al risultato
            finale desiderato. Un semplice servizio fotografico può essere diverso
            da un video completo con montaggio, musica e formati per social.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la grandezza della proprietà può incidere. Una piccola struttura
            con solo qualche foto esterna richiede un lavoro diverso rispetto a una
            villa con piscina, giardino, terreno, terrazze e più aree da riprendere.
            Per questo conviene descrivere bene il lavoro nella richiesta.
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
                Posso trovare un pilota drone per il mio B&B?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta e ricevere
                candidature da piloti drone disponibili per foto e video di B&B,
                case vacanza e strutture ricettive.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile anche per piccole strutture?
              </h3>
              <p className="text-gray-300">
                Sì, soprattutto se la struttura ha una buona posizione, spazi
                esterni, giardino, piscina, terrazza, vista o un contesto
                interessante da mostrare.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere solo fotografie?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare se ti servono solo foto, solo video, entrambi
                oppure un contenuto montato pronto per la pubblicazione.
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
            Trova un pilota drone per il tuo B&B
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video promozionali e contenuti
            professionali per B&B, case vacanza, ville turistiche, affitti brevi e
            strutture ricettive.
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