import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per home staging esterno | DroneGuard",
  description:
    "Trova piloti drone per valorizzare esterni immobiliari, giardini, piscine, terrazzi, accessi, terreni, facciate e presentazioni immobiliari professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Valorizzazione esterna degli immobili
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per home staging esterno
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Vuoi valorizzare gli esterni di un immobile prima di pubblicare un
            annuncio, organizzare una vendita o presentare una proprietà a
            potenziali clienti? Con DroneGuard puoi trovare piloti drone
            disponibili per realizzare foto aeree, video panoramici e riprese
            esterne utili per home staging esterno, presentazioni immobiliari,
            annunci online, ville, case indipendenti, giardini, piscine, terrazzi,
            cortili, accessi, terreni, facciate, parcheggi e spazi aperti. Quando
            una casa ha un esterno importante, non basta mostrarla da dentro:
            bisogna far capire atmosfera, ordine, posizione, vista, spazi
            disponibili e rapporto tra immobile e contesto.
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
              Esterni più curati
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può aiutare a mostrare giardino, piscina, vialetto,
              ingresso, terrazzo, cortile, terreno e spazi esterni in modo più
              ordinato.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Annunci più professionali
            </h2>
            <p className="leading-7 text-gray-300">
              Foto e video aerei possono rendere una scheda immobiliare più
              completa, più elegante e più utile per chi valuta l'immobile online.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Per privati e agenzie
            </h2>
            <p className="leading-7 text-gray-300">
              Ideale per proprietari, agenzie immobiliari, home stager,
              consulenti, investitori e professionisti che vogliono valorizzare
              una proprietà.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Cos'è l'home staging esterno con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              L'home staging esterno consiste nel presentare gli spazi fuori casa
              nel modo più ordinato, chiaro e attraente possibile. Non significa
              modificare la realtà dell'immobile, ma valorizzare ciò che già
              esiste: un giardino pulito, un accesso ben visibile, una piscina
              fotografata dalla giusta angolazione, un terrazzo panoramico, un
              cortile ampio, un vialetto curato, una vista interessante o un
              terreno che completa la proprietà.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può essere molto utile perché offre una prospettiva che da
              terra non si riesce ad ottenere. Una ripresa dall'alto può mostrare
              la disposizione degli spazi esterni, il rapporto tra casa e
              giardino, l'ingresso, il parcheggio, la piscina, i confini, la
              posizione nel quartiere o il panorama. Questo aiuta chi guarda
              l'annuncio a capire meglio il valore complessivo dell'immobile.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e ricevere candidature
              da piloti drone interessati. Puoi spiegare quali spazi vuoi
              valorizzare, che tipo di materiale ti serve e se le immagini saranno
              usate per un annuncio, una brochure, un video social o una
              presentazione immobiliare.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Esterni da valorizzare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Giardini privati</li>
              <li>✅ Piscine e zone relax</li>
              <li>✅ Terrazzi panoramici</li>
              <li>✅ Cortili e vialetti</li>
              <li>✅ Ingressi e accessi carrabili</li>
              <li>✅ Facciate principali</li>
              <li>✅ Terreni collegati alla casa</li>
              <li>✅ Parcheggi e aree esterne</li>
              <li>✅ Vista mare, collina o città</li>
              <li>✅ Spazi esterni per annunci immobiliari</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto drone per valorizzare gli spazi esterni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            In molti annunci immobiliari, gli esterni vengono mostrati poco o male.
            Una casa può avere un giardino interessante, una piscina, un cortile,
            un terreno, un terrazzo o una vista panoramica, ma se questi elementi
            non vengono fotografati nel modo giusto, il loro valore rischia di non
            essere percepito. Il drone può aiutare a creare immagini più ampie,
            ordinate e utili per raccontare meglio la proprietà.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per una villa, le foto aeree possono mostrare il rapporto tra casa,
            giardino, piscina e accessi. Per un appartamento con terrazzo possono
            evidenziare la vista e la posizione. Per un casale possono mostrare
            campagna, strada di arrivo, terreno e privacy. Per una casa in vendita
            con cortile, il drone può far capire meglio dimensione e disposizione
            degli spazi esterni.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini possono essere usate su portali immobiliari, sito
            dell'agenzia, social network, campagne pubblicitarie, brochure
            digitali, schede commerciali e presentazioni per proprietari o
            acquirenti interessati.
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
                professionista, home stager o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi l'immobile, gli spazi esterni da valorizzare e il tipo di
                foto o video che vuoi ottenere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti drone interessati possono candidarsi e proporti la loro
                disponibilità per il servizio richiesto.
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
              Prima di pubblicare l'annuncio
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di pubblicare un annuncio immobiliare, può essere utile
              preparare gli esterni e poi documentarli con immagini curate.
              Tagliare l'erba, ordinare il giardino, liberare il vialetto,
              sistemare arredi esterni, pulire la piscina, valorizzare il terrazzo
              e scegliere il momento giusto della giornata possono rendere le
              riprese molto più efficaci.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone può poi mostrare il risultato da una prospettiva ampia,
              aiutando a creare un annuncio più completo e più gradevole per chi
              sta valutando l'immobile online.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Per immobili con giardino, piscina o vista
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone è particolarmente utile quando l'immobile ha un elemento
              esterno forte. Una piscina, un grande giardino, una vista panoramica,
              un terrazzo abitabile, un terreno, un accesso scenografico o una
              zona relax possono diventare il punto principale della presentazione
              immobiliare.
            </p>

            <p className="leading-8 text-gray-300">
              Mostrare bene questi elementi può aiutare il potenziale acquirente a
              percepire meglio lo stile di vita collegato alla proprietà, non solo
              le sue caratteristiche tecniche.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Video drone per home staging esterno
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un video con drone può rendere l'home staging esterno ancora più
            efficace. Il filmato può partire da una vista panoramica della zona,
            avvicinarsi alla proprietà, mostrare l'ingresso, passare sopra il
            giardino, evidenziare la piscina, riprendere il terrazzo, mostrare la
            vista e concludere con una panoramica dell'immobile. Questo tipo di
            contenuto può essere molto utile per annunci premium, social network,
            campagne sponsorizzate e presentazioni immobiliari.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il video non deve necessariamente essere lungo. Anche una breve clip
            ben organizzata può far percepire meglio ordine, spazio, luce,
            posizione e atmosfera. Per molti immobili, soprattutto ville, case
            vacanza, casali, attici e proprietà con piscina, un video dall'alto
            può comunicare in pochi secondi ciò che una descrizione testuale fatica
            a spiegare.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi chiedere al pilota drone un video orizzontale per sito e portali,
            un video verticale per social, una serie di brevi clip o una raccolta
            di immagini da usare insieme alle fotografie tradizionali.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa chiedere al pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ottenere un buon risultato, descrivi con precisione gli esterni da
            valorizzare. Puoi chiedere foto del giardino, riprese della piscina,
            vista del terrazzo, immagini dell'ingresso, panoramiche del vialetto,
            riprese del terreno, foto del cortile, video della vista, immagini
            della facciata principale, panoramiche della zona o contenuti pensati
            per mostrare meglio il contesto.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Se stai facendo home staging esterno, specifica cosa è stato
            sistemato o cosa vuoi far notare: arredi esterni, zona pranzo,
            illuminazione, piante, prato, piscina, pergola, zona relax, accesso
            pedonale, parcheggio, vista panoramica o privacy. Questo aiuta il
            pilota a capire quali inquadrature possono essere più utili.
          </p>

          <p className="leading-8 text-gray-300">
            Il pilota dovrà sempre valutare sicurezza, privacy, condizioni meteo,
            ostacoli, presenza di persone, edifici vicini, alberi, linee
            elettriche, spazi di decollo e regole applicabili. DroneGuard mette in
            contatto cliente e professionista, ma la fattibilità del servizio
            viene valutata dal pilota scelto.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per home staging esterno
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e un breve video degli
              esterni di una villa in vendita. Abbiamo sistemato il giardino, la
              piscina, il vialetto e la zona relax esterna. Vorremmo valorizzare
              la proprietà dall'alto, mostrare la disposizione degli spazi, la
              vista, l'ingresso e il contesto circostante. Il materiale sarà usato
              per un annuncio immobiliare, per il sito dell'agenzia e per una
              campagna social.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire che il servizio deve
            valorizzare l'immobile in modo promozionale, mostrando gli esterni già
            preparati e ordinati per la vendita.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per home staging esterno?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla zona, alla distanza, alla durata del
            servizio, alla dimensione degli esterni e al tipo di materiale
            richiesto. Un servizio con alcune foto aeree può essere diverso da un
            video completo con più passaggi, riprese da diverse angolazioni,
            selezione delle immagini e contenuti pronti per annunci, social o
            presentazioni.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il tipo di immobile incide. Una villa con grande giardino, una
            casa con piscina, un attico con terrazzo, un casale con terreno o una
            casa vacanza con vista richiedono riprese diverse. Per questo è utile
            pubblicare una richiesta dettagliata e spiegare bene quali esterni
            vuoi valorizzare.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette al
            cliente di pubblicare il lavoro, ricevere candidature e scegliere il
            pilota drone più adatto in base al tipo di immobile e al risultato
            desiderato.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Crediti su DroneGuard
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione.
            Pubblicare un lavoro costa 5 crediti, quindi puoi iniziare cercando un
            pilota drone per realizzare foto e video dedicati all'home staging
            esterno di un immobile.
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
                Il drone è utile per home staging esterno?
              </h3>
              <p className="text-gray-300">
                Sì, può aiutare a valorizzare giardini, piscine, terrazzi,
                accessi, cortili, terreni, vista e spazi esterni dell'immobile.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usarlo prima di pubblicare l'annuncio?
              </h3>
              <p className="text-gray-300">
                Sì, è utile proprio prima della pubblicazione, dopo aver ordinato
                gli esterni e preparato la proprietà per foto, video e
                presentazione online.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Va bene anche per agenzie immobiliari?
              </h3>
              <p className="text-gray-300">
                Sì, un'agenzia può usare DroneGuard per cercare piloti drone per
                valorizzare gli esterni degli immobili più importanti.
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
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono
                10 crediti gratuiti dopo la registrazione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per home staging esterno
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto e video dedicati alla valorizzazione
            esterna di immobili, ville, giardini, piscine, terrazzi, cortili,
            terreni, facciate, accessi e presentazioni immobiliari professionali.
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