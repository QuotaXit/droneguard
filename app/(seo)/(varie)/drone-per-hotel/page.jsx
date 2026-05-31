import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per hotel | DroneGuard",
  description:
    "Trova piloti drone per hotel, alberghi, resort e strutture ricettive. Richiedi riprese aeree, video promozionali e foto professionali con drone."
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
            Drone per hotel
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Cerchi un pilota drone per realizzare foto e video professionali del
            tuo hotel? Con DroneGuard puoi pubblicare una richiesta e trovare
            operatori drone disponibili per riprese aeree di alberghi, resort,
            strutture ricettive, hotel sul mare, hotel in montagna, boutique
            hotel, agriturismi, spa, villaggi turistici e location destinate
            all'accoglienza. Il drone permette di mostrare la struttura da una
            prospettiva più ampia, valorizzando posizione, panorama, piscina,
            giardino, terrazze, accessi, parcheggi, area esterna e contesto
            circostante.
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
              Video promozionali per hotel
            </h2>
            <p className="text-gray-300">
              Richiedi video aerei per presentare la struttura, gli spazi esterni,
              la posizione, il panorama e i servizi principali dell'hotel.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto aeree professionali
            </h2>
            <p className="text-gray-300">
              Ottieni fotografie dall'alto per sito web, portali turistici,
              social, campagne pubblicitarie e schede di prenotazione.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti drone nella tua zona
            </h2>
            <p className="text-gray-300">
              Pubblica la richiesta, indica città e struttura, e ricevi candidature
              da piloti drone interessati al servizio.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per un hotel
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Nel settore turistico l'immagine è fondamentale. Prima di prenotare,
              un cliente vuole capire dove si trova la struttura, che atmosfera
              offre, quali spazi esterni sono disponibili e cosa la rende diversa
              dalle altre. Le classiche foto da terra sono utili, ma spesso non
              riescono a mostrare bene il valore complessivo di un hotel.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le riprese con drone permettono di raccontare la struttura in modo
              più completo. Un video aereo può mostrare l'hotel dall'alto, la
              distanza dal mare, la vista sulle montagne, la vicinanza al centro,
              il giardino, la piscina, il parcheggio, le terrazze panoramiche, le
              aree relax e tutto il contesto intorno alla proprietà.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard non devi cercare manualmente operatori uno per uno.
              Puoi pubblicare una richiesta, descrivere il servizio che ti serve e
              ricevere candidature da piloti drone disponibili a lavorare nella
              tua zona.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per hotel
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Video promozionali per hotel e alberghi</li>
              <li>✅ Riprese aeree di resort e strutture turistiche</li>
              <li>✅ Foto dall'alto per sito web e portali online</li>
              <li>✅ Video per social network e campagne sponsorizzate</li>
              <li>✅ Riprese di piscine, giardini e terrazze panoramiche</li>
              <li>✅ Video per hotel sul mare o in montagna</li>
              <li>✅ Contenuti per booking, portali turistici e agenzie</li>
              <li>✅ Materiale promozionale per brochure digitali</li>
              <li>✅ Riprese per hotel, B&B, resort e agriturismi</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Video drone per hotel e strutture ricettive
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un video realizzato con drone può diventare uno degli strumenti più
            efficaci per promuovere un hotel. In pochi secondi permette di mostrare
            l'impatto visivo della struttura, la posizione, il paesaggio e i punti
            di forza che spesso non emergono nelle fotografie tradizionali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per un hotel sul mare, il drone può mostrare la distanza dalla
            spiaggia, la vista panoramica, la piscina, il lungomare e le aree
            esterne. Per una struttura in montagna può valorizzare il paesaggio,
            i sentieri, le valli, i boschi e la posizione rispetto alle attrazioni
            locali. Per un hotel in città può evidenziare la vicinanza ai punti di
            interesse, agli accessi principali e al contesto urbano.
          </p>

          <p className="leading-8 text-gray-300">
            Il materiale può essere usato sul sito ufficiale dell'hotel, sui
            social, nelle campagne pubblicitarie, nei video promozionali, nelle
            presentazioni commerciali e nei contenuti destinati a portali di
            prenotazione o agenzie turistiche.
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
                Crea il tuo account come cliente, struttura ricettiva, agenzia o
                pilota drone.
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
                Descrivi hotel, città, tipo di riprese, periodo e risultato che
                vuoi ottenere.
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
              Drone per hotel sul mare
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Gli hotel sul mare possono ottenere un grande vantaggio dalle riprese
              aeree. Il drone può mostrare la posizione della struttura rispetto
              alla spiaggia, il panorama, il lungomare, la piscina, gli spazi
              esterni, il parcheggio, gli accessi e la distanza dai servizi
              principali.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di contenuto è molto utile per comunicare subito il
              valore della struttura a chi sta cercando una vacanza, un weekend o
              un soggiorno in una località turistica.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per resort e strutture turistiche
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Resort, villaggi turistici, spa, agriturismi e strutture con ampi
              spazi esterni possono usare il drone per mostrare aree verdi,
              piscine, camere, vialetti, zone relax, ristoranti, campi sportivi e
              percorsi interni.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini dall'alto aiutano il cliente a capire meglio dimensioni,
              organizzazione degli spazi e atmosfera generale della struttura.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per hotel, portali e social
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le fotografie con drone possono essere usate in molti modi: homepage
            del sito, galleria fotografica, schede camera, pagine dedicate alla
            struttura, campagne social, annunci sponsorizzati, brochure digitali,
            newsletter, portali turistici e materiali per agenzie di viaggio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Una buona foto aerea può aiutare a comunicare in modo immediato la
            posizione dell'hotel. Questo è particolarmente importante quando la
            struttura ha una vista panoramica, si trova vicino al mare, è immersa
            nel verde, ha una piscina, un grande giardino, un parcheggio privato o
            un contesto esterno che rappresenta un vero punto di forza.
          </p>

          <p className="leading-8 text-gray-300">
            Pubblicando una richiesta su DroneGuard puoi spiegare se ti servono
            solo foto, solo video, entrambi oppure un contenuto montato pronto per
            essere pubblicato.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Hotel e alberghi
            </h2>
            <p className="text-gray-300">
              Riprese aeree per mostrare facciata, ingresso, terrazze, parcheggi,
              piscina, giardino e posizione della struttura.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Resort e spa
            </h2>
            <p className="text-gray-300">
              Video promozionali per raccontare aree relax, piscine, percorsi,
              zone verdi, ristorazione e servizi esclusivi.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              B&B e case vacanza
            </h2>
            <p className="text-gray-300">
              Foto e video con drone per valorizzare piccole strutture ricettive,
              ville, appartamenti turistici e case vacanza.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta per un video drone hotel
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            servizio che ti serve. Puoi indicare il nome della struttura, la città,
            il tipo di hotel, il periodo in cui vorresti effettuare le riprese e
            il risultato finale desiderato.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se vuoi valorizzare la piscina, il giardino, la
            vista panoramica, la posizione vicino al mare, la vicinanza al centro,
            le camere, il ristorante, la spa, le terrazze, il parcheggio o altre
            aree particolari. Più la richiesta è chiara, più il pilota potrà capire
            il tipo di lavoro da proporre.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi anche indicare dove userai il materiale: sito web, Instagram,
            Facebook, TikTok, YouTube, portali turistici, campagne pubblicitarie,
            brochure digitale o presentazione commerciale.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per hotel
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video promozionali di
              un hotel sul mare. Vorrei riprese dall'alto della struttura, della
              piscina, della spiaggia vicina, del parcheggio, delle terrazze e del
              contesto panoramico. Il materiale mi serve per sito web, social e
              campagne pubblicitarie. Vorrei ricevere candidature da operatori
              disponibili nella zona.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            struttura, le zone da riprendere e l'obiettivo commerciale del
            servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per hotel?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per hotel può variare in base alla zona,
            alla durata delle riprese, al tipo di materiale richiesto, alla
            grandezza della struttura, alla post-produzione e alla consegna finale.
            Un semplice servizio fotografico può avere un costo diverso rispetto a
            un video promozionale completo con montaggio, musica, color correction
            e formato per social.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il numero di aree da riprendere può incidere: facciata, piscina,
            giardino, camere, terrazze, ristorante, spiaggia, parcheggio, panorama
            e spazi comuni richiedono tempi diversi. Per questo è importante
            spiegare bene il lavoro già nella richiesta.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo fisso. La piattaforma permette di
            pubblicare il lavoro e ricevere candidature da piloti drone
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
                Posso trovare un pilota drone per il mio hotel?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta e ricevere
                candidature da piloti drone disponibili per foto e video di hotel.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente le riprese?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard è una piattaforma che mette in contatto clienti e
                piloti drone. Il servizio viene svolto dal professionista scelto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Per quali strutture è utile il drone?
              </h3>
              <p className="text-gray-300">
                Il drone è utile per hotel, alberghi, resort, spa, B&B,
                agriturismi, case vacanza, villaggi turistici e strutture
                ricettive.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere solo fotografie aeree?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare se ti servono solo foto, solo video, entrambi
                oppure un contenuto montato pronto per la pubblicazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare un lavoro?
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
            Trova un pilota drone per il tuo hotel
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video promozionali, riprese
            professionali e contenuti visivi per hotel, resort, B&B, agriturismi e
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