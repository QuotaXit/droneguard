import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per annunci immobiliari | DroneGuard",
  description:
    "Trova piloti drone per annunci immobiliari professionali. Foto e video aerei per case, ville, terreni, casali, attici, immobili di pregio e agenzie immobiliari."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Annunci immobiliari con foto e video drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per annunci immobiliari
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Vuoi rendere un annuncio immobiliare più completo, più professionale
            e più interessante per chi cerca casa online? Con DroneGuard puoi
            trovare piloti drone disponibili per realizzare foto aeree, video
            panoramici, riprese esterne e contenuti visivi pensati per annunci
            immobiliari di case, ville, appartamenti con terrazzo, terreni,
            casali, rustici, immobili di pregio, strutture ricettive e proprietà
            con grandi spazi esterni. Un annuncio con immagini dall'alto può
            aiutare il potenziale acquirente a capire meglio la posizione
            dell'immobile, il contesto, gli accessi, il giardino, la piscina, il
            terreno, le distanze, l'esposizione e tutte quelle caratteristiche
            che spesso non emergono con le sole foto scattate da terra.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Cerca un pilota drone
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Annunci più visibili
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini aeree possono rendere l'annuncio più riconoscibile tra
              tante schede simili, attirando l'attenzione fin dai primi secondi.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Contesto più chiaro
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone mostra l'immobile dall'alto e aiuta a far capire meglio
              strade, accessi, giardino, terreno, panorama e posizione reale.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Materiale per portali e social
            </h2>
            <p className="leading-7 text-gray-300">
              Foto e video possono essere usati per portali immobiliari, sito
              web, social network, brochure digitali e presentazioni ai clienti.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone in un annuncio immobiliare
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Quando una persona apre un annuncio immobiliare, vuole capire subito
              se quella casa merita una visita. Le foto interne sono importanti,
              ma spesso raccontano solo una parte della proprietà. Un immobile può
              avere una posizione ottima, una vista aperta, un grande giardino,
              un terreno collegato, una piscina, un cortile, un ingresso comodo o
              una zona esterna molto interessante. Se questi elementi non vengono
              mostrati bene, l'annuncio rischia di perdere forza.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone permette di aggiungere una prospettiva diversa, più ampia
              e più immediata. Una ripresa dall'alto può far vedere come la casa
              è inserita nel quartiere, quanto spazio ha intorno, dove si trova
              l'ingresso, quali sono i confini del terreno, come sono disposti gli
              esterni e quali elementi rendono interessante la proprietà. Questo
              aiuta chi guarda l'annuncio a orientarsi meglio e a immaginare
              l'immobile nel suo contesto reale.
            </p>

            <p className="leading-8 text-gray-300">
              Per agenzie immobiliari, proprietari e professionisti, il drone può
              diventare uno strumento utile per migliorare la presentazione degli
              immobili più importanti, distinguere gli annunci dalla concorrenza
              e comunicare maggiore cura nella promozione della proprietà.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Annunci dove il drone è utile
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Ville con giardino o piscina</li>
              <li>✅ Case indipendenti in vendita</li>
              <li>✅ Attici con terrazzo panoramico</li>
              <li>✅ Casali e rustici in campagna</li>
              <li>✅ Terreni edificabili o agricoli</li>
              <li>✅ Immobili di lusso</li>
              <li>✅ Case vacanza e seconde case</li>
              <li>✅ Strutture ricettive in vendita</li>
              <li>✅ Capannoni e immobili commerciali</li>
              <li>✅ Proprietà con vista mare o collina</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per annunci immobiliari online
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Gli annunci immobiliari online vengono spesso confrontati rapidamente.
            L'utente scorre molte schede, guarda le immagini principali e decide
            se aprire o meno l'annuncio. Per questo motivo, una foto aerea ben
            fatta può diventare una risorsa importante, soprattutto quando
            l'immobile ha caratteristiche esterne che meritano di essere viste
            subito. Una villa ripresa dall'alto, un casale immerso nel verde, un
            terreno con accesso chiaro o un attico con terrazzo panoramico possono
            comunicare molto più valore rispetto a una semplice foto frontale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le foto con drone possono essere usate come immagine principale
            dell'annuncio, come galleria aggiuntiva, come materiale per una
            brochure digitale o come contenuto per campagne pubblicitarie. Possono
            mostrare il rapporto tra l'immobile e gli spazi esterni, evidenziare
            distanze, visuali, parcheggi, pertinenze, accessi e aree circostanti.
            In molti casi aiutano anche a evitare dubbi iniziali da parte del
            potenziale acquirente, perché rendono più chiara la disposizione
            generale della proprietà.
          </p>

          <p className="leading-8 text-gray-300">
            Una buona galleria immobiliare dovrebbe accompagnare il visitatore in
            modo ordinato: prima una visione generale, poi gli esterni, poi gli
            interni, poi i dettagli più importanti. Il drone può aiutare proprio
            nella prima parte del racconto, cioè nella presentazione complessiva
            dell'immobile.
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
                Crea il tuo account come cliente, agenzia immobiliare,
                proprietario, professionista o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica l'annuncio di lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi l'immobile, la zona, il tipo di foto o video richiesto e
                l'uso che farai del materiale.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti drone interessati possono rispondere alla richiesta e
                proporti la loro disponibilità.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il professionista
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Valuta il pilota più adatto in base al tipo di immobile, alla
                zona e al risultato che vuoi ottenere.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Video drone per annunci immobiliari
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Oltre alle foto, un breve video con drone può rendere l'annuncio
              più coinvolgente. Il video può partire da una vista panoramica,
              avvicinarsi lentamente all'immobile, mostrare il giardino, passare
              sopra la piscina, far vedere la strada di accesso e concludere con
              una visione generale della proprietà. Questo tipo di contenuto è
              molto utile per social network, campagne sponsorizzate e pagine
              dedicate agli immobili di maggiore valore.
            </p>

            <p className="leading-8 text-gray-300">
              Un video non deve essere per forza lungo. Anche pochi secondi ben
              realizzati possono aiutare a creare un impatto visivo forte e a far
              percepire meglio l'atmosfera della proprietà.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Annunci per immobili con esterni importanti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone è particolarmente utile quando l'immobile ha qualcosa da
              mostrare fuori dalle mura: giardino, terreno, vialetto, piscina,
              cortile, terrazzo, vista panoramica, parco, uliveto, vigneto o
              posizione isolata. In questi casi, limitarsi alle foto interne può
              ridurre il valore percepito dell'annuncio.
            </p>

            <p className="leading-8 text-gray-300">
              Mostrare bene gli esterni aiuta il cliente a capire se l'immobile
              corrisponde davvero alle sue esigenze prima ancora di fissare una
              visita.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa chiedere al pilota drone per il tuo annuncio
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ottenere un risultato utile, è importante spiegare bene cosa deve
            essere ripreso. Puoi chiedere una vista frontale dell'immobile, alcune
            immagini dall'alto, un video panoramico, riprese del giardino, della
            piscina, della strada di accesso, dei confini, del terreno, del
            quartiere o del panorama. Se l'annuncio riguarda una villa, può essere
            utile mostrare il rapporto tra casa e spazi esterni. Se riguarda un
            terreno, può essere utile mostrare accessi, forma del lotto e contesto
            urbano. Se riguarda un casale, può essere utile mostrare privacy,
            campagna e distanza dalle abitazioni vicine.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi anche specificare il formato del materiale: foto per portale
            immobiliare, video verticale per social, video orizzontale per sito
            web, breve clip promozionale, immagini da inserire in una brochure o
            materiale da consegnare al proprietario. Più dettagli inserisci nella
            richiesta, più sarà facile ricevere candidature coerenti.
          </p>

          <p className="leading-8 text-gray-300">
            Il pilota valuterà sempre fattibilità, sicurezza, condizioni meteo,
            privacy, ostacoli, presenza di persone, aree vicine e regole di volo.
            DroneGuard ti aiuta a trovare professionisti disponibili, ma ogni
            volo deve essere organizzato correttamente dal pilota scelto.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per annuncio immobiliare
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e un breve video di una
              casa indipendente in vendita. Mi servono immagini dall'alto per
              mostrare il giardino, l'accesso, il parcheggio, la posizione
              dell'immobile e il contesto circostante. Il materiale sarà usato per
              un annuncio immobiliare online, per il sito dell'agenzia e per una
              breve promozione sui social.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta di questo tipo è chiara perché indica il tipo di
            immobile, il materiale richiesto, gli elementi da riprendere e l'uso
            finale delle immagini.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per annunci immobiliari?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla città, alla distanza, alla durata
            del servizio, al tipo di immobile e al materiale richiesto. Un servizio
            fotografico semplice con alcune immagini aeree può essere diverso da
            un lavoro più completo con video, più passaggi, riprese da diverse
            angolazioni e consegna di contenuti già selezionati.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la complessità del luogo incide. Una villa isolata, un terreno
            grande, un immobile vicino a zone sensibili, un centro abitato o una
            proprietà con molti elementi da riprendere possono richiedere
            valutazioni differenti. Per questo è utile pubblicare una richiesta
            dettagliata e lasciare che i piloti interessati propongano la loro
            disponibilità.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette al
            cliente di pubblicare il lavoro e ai piloti drone di candidarsi. Le
            parti potranno poi accordarsi sui dettagli del servizio.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Crediti e pubblicazione richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Su DroneGuard i nuovi clienti ricevono 10 crediti gratuiti dopo la
            registrazione. Pubblicare un lavoro costa 5 crediti, quindi puoi
            iniziare pubblicando una richiesta per il tuo annuncio immobiliare e
            vedere quali piloti drone sono disponibili nella zona.
          </p>

          <p className="leading-8 text-gray-300">
            I nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.
            Rispondere o candidarsi a un annuncio costa 5 crediti. Questo sistema
            permette di mettere in contatto chi cerca un servizio drone con chi è
            interessato a svolgerlo.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per un annuncio immobiliare?
              </h3>
              <p className="text-gray-300">
                Sì, soprattutto quando l'immobile ha esterni, giardino, terreno,
                vista, piscina, accessi o un contesto importante da mostrare.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare le foto drone sui portali immobiliari?
              </h3>
              <p className="text-gray-300">
                Sì, le immagini possono essere usate per portali immobiliari,
                sito web, social e materiali promozionali, secondo gli accordi
                presi con il pilota.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Va bene anche per terreni?
              </h3>
              <p className="text-gray-300">
                Sì, il drone è molto utile per mostrare terreni edificabili,
                agricoli, lotti, accessi, confini e aree circostanti.
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
                Quanto costa pubblicare la richiesta?
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
            Trova un pilota drone per annunci immobiliari
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto e video aerei per annunci
            immobiliari, case in vendita, ville, terreni, casali, attici, immobili
            di pregio, strutture ricettive e proprietà da valorizzare online.
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