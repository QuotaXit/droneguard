import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per attici e terrazzi | DroneGuard",
  description:
    "Trova piloti drone per foto e video di attici, terrazzi panoramici, appartamenti con vista, immobili di pregio e annunci immobiliari professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Riprese aeree per attici e terrazzi
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per attici e terrazzi
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi valorizzare un attico in vendita, un appartamento con grande
            terrazzo, una proprietà panoramica o un immobile con vista importante?
            Con DroneGuard puoi trovare piloti drone disponibili per realizzare
            foto aeree, video immobiliari, riprese esterne e contenuti visivi
            pensati per mostrare terrazzi, viste panoramiche, esposizione, piano
            alto, contesto urbano, distanza dal mare, vista collina, skyline,
            coperture, spazi esterni e caratteristiche che spesso non emergono
            con le sole fotografie interne. Un attico non si racconta solo con la
            metratura: il valore percepito dipende molto dalla luce, dalla vista,
            dalla privacy, dagli spazi aperti e dalla sensazione che il terrazzo
            riesce a trasmettere.
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
              Mostra la vista reale
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può aiutare a mostrare panorama, esposizione, altezza,
              contesto e visuale reale del terrazzo o dell'attico.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Valorizza gli spazi esterni
            </h2>
            <p className="leading-7 text-gray-300">
              Terrazzi, balconi ampi, zone relax, solarium, pergole e aree
              esterne possono essere raccontati meglio con immagini dall'alto.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ideale per annunci premium
            </h2>
            <p className="leading-7 text-gray-300">
              Foto e video drone possono rendere più completo l'annuncio di
              attici, appartamenti panoramici e immobili di pregio.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per un attico
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un attico viene spesso scelto per elementi che non sono sempre
              facili da comunicare con fotografie tradizionali: il terrazzo, la
              vista, la luminosità, la privacy, l'altezza rispetto agli edifici
              vicini, la posizione nel quartiere e la qualità dello spazio
              esterno. Chi guarda un annuncio vuole capire se quel terrazzo è
              davvero vivibile, se la vista è aperta, se l'immobile è esposto bene
              e se il contesto circostante valorizza la proprietà.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone permette di aggiungere una prospettiva più completa. Una
              ripresa esterna può mostrare il piano alto, la posizione
              dell'appartamento, l'ampiezza del terrazzo, il panorama, la distanza
              dagli edifici vicini, la presenza di mare, parchi, monumenti,
              colline o skyline urbano. Per un attico di pregio, questi dettagli
              possono incidere molto sulla percezione del valore.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e ricevere candidature
              da piloti drone interessati. Puoi spiegare il tipo di immobile, la
              zona, il terrazzo da valorizzare, la vista da mostrare e il tipo di
              materiale che ti serve per l'annuncio.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi valorizzare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Attici panoramici</li>
              <li>✅ Terrazzi abitabili</li>
              <li>✅ Vista mare o vista città</li>
              <li>✅ Esposizione e luminosità</li>
              <li>✅ Piano alto e privacy</li>
              <li>✅ Solarium e zone relax</li>
              <li>✅ Pergole, arredi esterni e piante</li>
              <li>✅ Contesto urbano circostante</li>
              <li>✅ Distanza da parchi o punti di interesse</li>
              <li>✅ Immobili di pregio con spazi aperti</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto drone per terrazzi panoramici
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il terrazzo è spesso il punto forte di un attico. Può essere uno
            spazio per pranzi all'aperto, momenti di relax, piante, zona barbecue,
            vista al tramonto o semplice respiro rispetto alla città. Tuttavia,
            nelle foto tradizionali, un terrazzo può sembrare più piccolo, meno
            luminoso o meno importante di quanto sia realmente. Le immagini con
            drone possono aiutare a far percepire meglio ampiezza, posizione,
            esposizione e rapporto con il panorama.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Una ripresa dall'esterno può mostrare l'attico nel suo contesto,
            evidenziando l'altezza dell'immobile, la vista aperta, la distanza da
            altri palazzi, il quartiere e gli elementi che rendono interessante la
            proprietà. Per un annuncio immobiliare, questo può essere molto utile:
            chi cerca un attico vuole vedere il terrazzo, ma vuole anche capire
            cosa vede dal terrazzo.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini possono essere usate nei portali immobiliari, sul sito
            dell'agenzia, nei social, nelle sponsorizzate, nelle brochure digitali
            e nelle presentazioni dedicate agli immobili di fascia alta.
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
                Crea un account come proprietario, agenzia immobiliare,
                professionista o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi l'attico, il terrazzo, la zona, la vista e il materiale
                fotografico o video che vuoi ottenere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti drone interessati possono candidarsi e proporti la loro
                disponibilità.
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
              Video drone per attici di pregio
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un video con drone può essere molto efficace per presentare un
              attico di pregio. Il filmato può partire da una panoramica della
              città, avvicinarsi al palazzo, mostrare il terrazzo dall'esterno,
              evidenziare la vista, far percepire l'altezza e concludere con una
              ripresa ampia del contesto. Questo tipo di contenuto può rendere
              l'annuncio più emozionale e più adatto a immobili di fascia alta.
            </p>

            <p className="leading-8 text-gray-300">
              Il video può essere usato per annunci premium, social network,
              campagne sponsorizzate, sito dell'agenzia, presentazioni private e
              materiali promozionali dedicati al singolo immobile.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Vista, privacy e posizione
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In un attico, la posizione è fondamentale. Non basta dire che si
              trova a un piano alto: bisogna mostrare cosa significa davvero. Il
              drone può aiutare a far capire se la vista è aperta, se il terrazzo
              è riservato, se ci sono edifici vicini, se il contesto è elegante,
              se l'immobile domina una zona panoramica o se gode di una visuale
              particolare.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di comunicazione visiva può aiutare il potenziale
              acquirente a valutare meglio l'immobile prima ancora di organizzare
              una visita.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per attici e terrazzi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, descrivi bene l'immobile:
            attico, superattico, appartamento con terrazzo, immobile panoramico,
            proprietà con vista mare, terrazzo in centro storico, appartamento di
            pregio o casa con ampi spazi esterni. Indica la città, la zona, il
            piano indicativo, il tipo di vista e quali elementi vuoi valorizzare.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi richiedere foto aeree, video breve, riprese del terrazzo, vista
            dall'esterno, panoramiche del quartiere, immagini della posizione del
            palazzo, video verticale per social, video orizzontale per sito web o
            materiale da inserire in un annuncio immobiliare. Se il terrazzo è il
            punto forte, scrivilo chiaramente nella richiesta.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni volo deve essere valutato dal pilota in base a sicurezza,
            privacy, condizioni meteo, ostacoli, presenza di persone, edifici
            vicini, spazi disponibili e regole applicabili. DroneGuard mette in
            contatto cliente e professionista, ma sarà il pilota scelto a valutare
            la fattibilità del servizio.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per attico con terrazzo
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e un breve video di un
              attico in vendita. Vorrei valorizzare il terrazzo, la vista
              panoramica, la posizione del palazzo, l'esposizione e il contesto
              circostante. Il materiale sarà usato per un annuncio immobiliare
              online, per il sito dell'agenzia e per una promozione sui social.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito che il punto
            centrale del servizio è la valorizzazione della vista e dello spazio
            esterno, non solo una semplice ripresa generica dell'edificio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per attici e terrazzi?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla città, alla zona, alla durata del
            servizio, alla complessità del contesto urbano e al tipo di materiale
            richiesto. Un servizio con alcune foto esterne può essere diverso da
            un video completo con più passaggi, riprese panoramiche, consegna di
            materiale selezionato e contenuti pronti per la pubblicazione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Gli attici si trovano spesso in aree urbane, vicino ad altri edifici,
            strade, persone e ostacoli. Per questo il pilota dovrà valutare con
            attenzione la fattibilità del volo, gli spazi disponibili e le
            condizioni di sicurezza. Una richiesta dettagliata aiuta a ricevere
            candidature più corrette.
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
            pilota drone per foto e video di un attico o di un terrazzo
            panoramico.
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
                Il drone è utile per vendere un attico?
              </h3>
              <p className="text-gray-300">
                Sì, soprattutto quando l'attico ha terrazzo, vista panoramica,
                privacy, piano alto o un contesto esterno importante da mostrare.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso mostrare la vista dal terrazzo?
              </h3>
              <p className="text-gray-300">
                Sì, il pilota può realizzare immagini e video utili a mostrare la
                vista e il contesto, sempre nel rispetto di sicurezza e privacy.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Va bene anche per appartamenti con terrazzo?
              </h3>
              <p className="text-gray-300">
                Sì, il servizio può essere utile anche per appartamenti con
                terrazzi grandi, balconi panoramici o spazi esterni da
                valorizzare.
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
            Trova un pilota drone per attici e terrazzi
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto e video di attici, terrazzi
            panoramici, appartamenti con vista, immobili di pregio, spazi esterni
            e annunci immobiliari professionali.
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