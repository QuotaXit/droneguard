import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per capannoni in vendita | DroneGuard",
  description:
    "Trova piloti drone per foto e video di capannoni in vendita, immobili industriali, magazzini, aree logistiche, piazzali, coperture e annunci immobiliari professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Riprese aeree per immobili industriali
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per capannoni in vendita
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi vendere, affittare o presentare un capannone industriale, un
            magazzino, un immobile produttivo, una piattaforma logistica, un
            deposito, un'area artigianale o un complesso commerciale? Con
            DroneGuard puoi trovare piloti drone disponibili per realizzare foto
            aeree, video panoramici, riprese dall'alto e contenuti visivi utili
            per mostrare capannoni in vendita, piazzali, accessi carrabili,
            parcheggi, tetti, coperture, baie di carico, aree esterne, strade di
            collegamento, zone industriali, vicinanza a svincoli, spazi di manovra
            e contesto produttivo. Un capannone non si valuta solo dai metri
            quadrati interni: contano anche accessibilità, posizione, spazi
            esterni, logistica, copertura, viabilità e possibilità operative.
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
              Vista completa del capannone
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può mostrare edificio, piazzale, tetto, ingressi, accessi
              camion, parcheggi, aree di carico e contesto industriale.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Annuncio più tecnico
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini dall'alto aiutano a comunicare meglio dimensioni,
              viabilità, spazi esterni e organizzazione generale dell'immobile.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Per aziende e agenzie
            </h2>
            <p className="leading-7 text-gray-300">
              Utile per proprietari, agenzie immobiliari industriali, società,
              investitori, imprese, logistiche e professionisti del settore.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per un capannone in vendita
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un capannone industriale o logistico ha caratteristiche che non sono
              sempre facili da spiegare con fotografie tradizionali. Da terra si
              può mostrare una facciata, un ingresso o una parte del piazzale, ma
              spesso non si riesce a far capire la dimensione reale della
              proprietà, la disposizione degli spazi esterni, la posizione rispetto
              alle strade, la facilità di accesso per camion e furgoni, la
              presenza di parcheggi o la possibilità di manovra.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone permette di mostrare il capannone nel suo insieme. Una
              ripresa dall'alto può evidenziare la copertura, le aree di carico e
              scarico, il piazzale, i confini, gli ingressi, la viabilità interna,
              il rapporto con altri edifici industriali, la distanza da strade
              principali, svincoli, zone produttive o aree commerciali. Per un
              potenziale acquirente o locatario, questi elementi possono essere
              molto importanti.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e ricevere candidature
              da piloti drone interessati. Puoi descrivere il capannone, la zona,
              gli elementi da riprendere e il materiale che vuoi ottenere per
              l'annuncio, la presentazione commerciale o la documentazione visiva.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Immobili industriali da valorizzare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Capannoni industriali in vendita</li>
              <li>✅ Magazzini e depositi</li>
              <li>✅ Immobili produttivi</li>
              <li>✅ Aree logistiche</li>
              <li>✅ Complessi artigianali</li>
              <li>✅ Piazzali e aree di manovra</li>
              <li>✅ Capannoni con baie di carico</li>
              <li>✅ Edifici commerciali con parcheggio</li>
              <li>✅ Immobili con coperture estese</li>
              <li>✅ Aree industriali da presentare online</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per capannoni, magazzini e aree logistiche
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le foto aeree possono rendere molto più chiara la presentazione di un
            capannone in vendita. Un immobile industriale viene spesso valutato in
            base a parametri pratici: metratura, altezza interna, accessi,
            piazzale, viabilità, parcheggi, stato della copertura, zona di
            carico, posizione rispetto alle infrastrutture e possibilità di
            utilizzo. Alcuni di questi elementi si capiscono meglio guardando
            l'immobile dall'alto.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Una ripresa con drone può mostrare la struttura completa, il piazzale,
            la distribuzione degli ingressi, la zona camion, le strade vicine, la
            presenza di altri capannoni, la distanza da zone residenziali o
            commerciali e la disposizione generale dell'area. Questo può essere
            utile per annunci immobiliari, presentazioni aziendali, schede
            investimento, proposte commerciali e documentazione da inviare a
            potenziali acquirenti.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini non sostituiscono planimetrie, certificazioni, verifiche
            tecniche o controlli edilizi, ma possono rendere la scheda molto più
            comprensibile e aiutare chi guarda l'annuncio a orientarsi meglio
            prima di fissare una visita.
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
                Crea il tuo account come proprietario, azienda, agenzia
                immobiliare, investitore, professionista o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il capannone, la zona, gli spazi esterni, gli accessi e
                il tipo di materiale che vuoi ricevere.
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
                Valuta il professionista più adatto in base alla zona, al tipo di
                immobile e al risultato desiderato.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Video drone per presentazioni commerciali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un video con drone può essere utile per presentare un capannone in
              modo più professionale. Il filmato può partire da una panoramica
              della zona industriale, avvicinarsi all'edificio, mostrare il
              piazzale, passare sopra la copertura, evidenziare gli accessi
              carrabili, la viabilità interna, le aree di carico e concludere con
              una vista generale dell'immobile.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di contenuto può essere usato per annunci premium, siti
              di agenzie immobiliari, presentazioni aziendali, schede investimento,
              campagne social e materiale commerciale da inviare a imprese o
              potenziali acquirenti.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Piazzali, accessi e viabilità
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Per un capannone, la parte esterna può essere decisiva. Un piazzale
              ampio, un accesso comodo, una buona area di manovra, parcheggi
              disponibili e collegamenti stradali favorevoli possono aumentare
              molto l'interesse dell'immobile. Il drone può aiutare a mostrare
              questi elementi in modo chiaro e immediato.
            </p>

            <p className="leading-8 text-gray-300">
              Le riprese dall'alto possono essere particolarmente utili quando il
              capannone si trova in una zona industriale, vicino a strade
              principali, svincoli, aree logistiche o altri immobili produttivi.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa chiedere al pilota drone per un capannone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ottenere un risultato utile, descrivi bene l'immobile e il tipo di
            riprese che desideri. Puoi chiedere una vista generale del capannone,
            foto del piazzale, riprese degli accessi, immagini della copertura,
            panoramiche della zona industriale, video della viabilità interna,
            riprese delle baie di carico, parcheggi, confini e aree esterne.
            Specifica anche se il materiale servirà per vendita, affitto,
            presentazione commerciale, valutazione preliminare o annuncio online.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi richiedere foto aeree, video breve, video orizzontale per sito
            web, video verticale per social, immagini da inserire in una brochure,
            materiale per portali immobiliari industriali o documentazione visiva
            da inviare a potenziali interessati. Più dettagli inserisci, più sarà
            semplice per il pilota capire il lavoro da svolgere.
          </p>

          <p className="leading-8 text-gray-300">
            Il pilota dovrà sempre valutare sicurezza, privacy, condizioni meteo,
            ostacoli, linee elettriche, presenza di persone, mezzi in movimento,
            attività produttive, spazi di decollo e regole applicabili al volo.
            DroneGuard mette in contatto cliente e professionista, ma la
            fattibilità operativa viene valutata dal pilota scelto.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per capannone in vendita
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e un breve video di un
              capannone industriale in vendita. Vorrei mostrare la struttura
              dall'alto, il piazzale, gli accessi camion, le aree di manovra, la
              copertura, i parcheggi, la strada di collegamento e il contesto
              della zona industriale. Il materiale sarà usato per un annuncio
              immobiliare e per una presentazione commerciale.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire subito il tipo di
            immobile, il risultato desiderato e gli elementi principali da
            valorizzare durante le riprese.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per capannoni?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla zona, alla distanza, alla durata del
            servizio, alla dimensione del capannone, alla complessità dell'area e
            al tipo di materiale richiesto. Un servizio con alcune foto aeree può
            essere diverso da un video completo con più passaggi, riprese da varie
            angolazioni, panoramiche del contesto industriale e consegna di
            contenuti selezionati.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la situazione operativa può incidere. Un capannone con attività
            in corso, mezzi in movimento, piazzali occupati, linee elettriche,
            aree vicine o spazi limitati richiede una valutazione più attenta
            rispetto a un immobile libero e facilmente accessibile. Per questo è
            utile pubblicare una richiesta dettagliata.
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
            pilota drone per foto e video di un capannone, un magazzino, un
            deposito o un immobile industriale in vendita.
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
                Il drone è utile per vendere un capannone?
              </h3>
              <p className="text-gray-300">
                Sì, può aiutare a mostrare edificio, piazzale, accessi,
                copertura, parcheggi, aree di carico, viabilità e contesto
                industriale.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Va bene anche per magazzini e aree logistiche?
              </h3>
              <p className="text-gray-300">
                Sì, il servizio può essere utile per magazzini, depositi, aree
                logistiche, complessi produttivi e immobili commerciali con
                piazzali esterni.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Le immagini drone sostituiscono una verifica tecnica?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce materiale visivo utile, ma non sostituisce
                perizie, verifiche edilizie, controlli tecnici, certificazioni o
                documentazione urbanistica.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare il materiale per annunci industriali?
              </h3>
              <p className="text-gray-300">
                Sì, foto e video possono essere usati per portali immobiliari,
                siti aziendali, brochure digitali e presentazioni commerciali,
                secondo gli accordi presi con il pilota.
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
            Trova un pilota drone per capannoni in vendita
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto e video di capannoni industriali,
            magazzini, depositi, aree logistiche, piazzali, accessi, coperture,
            parcheggi e immobili produttivi da vendere o affittare.
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