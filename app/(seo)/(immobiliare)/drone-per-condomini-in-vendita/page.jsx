import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per condomini in vendita | DroneGuard",
  description:
    "Trova piloti drone per foto e video di condomini in vendita, palazzine, complessi residenziali, facciate, coperture, cortili e annunci immobiliari professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Riprese aeree per condomini e palazzine
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per condomini in vendita
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi presentare un condominio in vendita, una palazzina, un complesso
            residenziale, un edificio cielo-terra, un immobile da valorizzare o un
            fabbricato con più unità abitative? Con DroneGuard puoi trovare piloti
            drone disponibili per realizzare foto aeree, video esterni, riprese
            panoramiche e contenuti visivi utili per mostrare condomini,
            palazzine, facciate, cortili, ingressi, parcheggi, coperture,
            terrazzi, aree comuni, giardini condominiali, accessi carrabili,
            contesto urbano e posizione dell'edificio. Il drone può aiutare a
            raccontare meglio un immobile residenziale complesso, mostrando non
            solo la facciata, ma anche l'inserimento dell'edificio nel quartiere,
            gli spazi esterni e le caratteristiche che da terra spesso non si
            riescono a comunicare bene.
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
              Vista completa dell'edificio
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può mostrare il condominio nel suo insieme, includendo
              facciate, tetto, cortile, ingressi, parcheggi, terrazzi e aree
              comuni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Annunci più chiari
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini dall'alto possono aiutare acquirenti, investitori e
              agenzie a capire meglio posizione, dimensioni e contesto del
              fabbricato.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Per vendite e valutazioni
            </h2>
            <p className="leading-7 text-gray-300">
              Utile per proprietari, agenzie immobiliari, investitori, società,
              amministratori e professionisti che devono presentare un edificio.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per un condominio in vendita
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un condominio, una palazzina o un edificio con più unità abitative
              non sempre si riesce a descrivere bene con poche foto da terra. Una
              foto frontale può mostrare solo una facciata, ma non permette di
              capire la forma dell'edificio, il rapporto con le strade, la
              presenza di cortili, parcheggi, giardini, terrazzi, accessi,
              coperture o aree comuni. Per chi deve valutare l'acquisto di un
              intero fabbricato, queste informazioni visive possono essere molto
              importanti.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone permette di ottenere una visione più ampia e ordinata del
              condominio. Una ripresa dall'alto può mostrare l'edificio nel
              quartiere, evidenziare le strade vicine, la posizione rispetto ai
              servizi, la disposizione degli spazi esterni, la copertura, gli
              accessi carrabili, le aree verdi, i parcheggi e gli eventuali
              elementi che aumentano il valore percepito dell'immobile.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e ricevere candidature
              da piloti drone interessati. Puoi indicare il tipo di edificio, la
              zona, il materiale che ti serve e l'utilizzo finale delle immagini,
              così da trovare il professionista più adatto al servizio.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi mostrare con il drone
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Condomini in vendita</li>
              <li>✅ Palazzine residenziali</li>
              <li>✅ Edifici cielo-terra</li>
              <li>✅ Complessi con più appartamenti</li>
              <li>✅ Facciate e prospetti esterni</li>
              <li>✅ Coperture, tetti e terrazzi</li>
              <li>✅ Cortili e aree comuni</li>
              <li>✅ Parcheggi e accessi carrabili</li>
              <li>✅ Giardini condominiali</li>
              <li>✅ Contesto urbano e strade vicine</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per palazzine e complessi residenziali
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le foto aeree possono essere molto utili quando l'immobile da vendere
            non è una singola abitazione, ma un intero edificio o un complesso
            residenziale. In questi casi l'acquirente potrebbe voler capire la
            dimensione reale del fabbricato, la disposizione delle unità, la
            presenza di balconi, terrazzi, cortili, box, posti auto, spazi comuni
            e aree verdi. Una normale galleria fotografica può non bastare.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può mostrare il condominio da più angolazioni, includendo la
            vista frontale, laterale e dall'alto. Può evidenziare il rapporto tra
            edificio e strada, l'accesso principale, l'eventuale ingresso
            carrabile, le zone condominiali, la copertura, il cortile interno e il
            contesto circostante. Questo materiale può rendere l'annuncio più
            chiaro, soprattutto per immobili destinati a investitori, imprese,
            fondi, società o acquirenti interessati a più unità.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini possono essere usate nei portali immobiliari, nelle schede
            dell'agenzia, in una brochure digitale, in una presentazione per
            potenziali investitori, in una pagina dedicata sul sito o in materiale
            informativo da inviare a clienti selezionati.
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
                società, amministratore, professionista o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il condominio, la zona, gli spazi esterni e il tipo di
                materiale fotografico o video che vuoi ottenere.
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
                edificio e al risultato che vuoi ottenere.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Video drone per presentazioni immobiliari
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un video con drone può essere utile per presentare un condominio in
              modo più ordinato e professionale. Il filmato può partire da una
              panoramica del quartiere, avvicinarsi all'edificio, mostrare la
              facciata, passare sopra la copertura, evidenziare cortile, accessi,
              parcheggi e concludere con una vista generale del fabbricato. Questo
              tipo di contenuto può aiutare a spiegare meglio un immobile
              complesso rispetto a una semplice serie di fotografie.
            </p>

            <p className="leading-8 text-gray-300">
              Il video può essere usato per annunci premium, social network,
              presentazioni aziendali, schede investimento, materiale per
              investitori o comunicazioni commerciali dell'agenzia immobiliare.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Facciate, coperture e aree comuni
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In un condominio, gli elementi esterni possono incidere molto sulla
              percezione dell'immobile. Facciate, tetto, terrazzi, balconi, cortili
              e aree comuni raccontano lo stato generale del fabbricato e possono
              aiutare un acquirente a comprendere meglio la struttura. Il drone
              può fornire una visione visiva più completa di queste parti.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini non sostituiscono ispezioni tecniche, perizie o
              valutazioni professionali, ma possono essere un supporto utile per
              documentare e presentare meglio l'edificio.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per un condominio in vendita
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, descrivi bene il tipo di
            immobile: condominio, palazzina, edificio cielo-terra, complesso
            residenziale, fabbricato con più appartamenti, immobile da
            ristrutturare o proprietà destinata a investitori. Indica la città,
            la zona, il numero indicativo di piani, la presenza di cortili,
            giardini, parcheggi, box, terrazzi, coperture o accessi da mostrare.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi richiedere foto aeree, video breve, riprese della facciata, vista
            della copertura, panoramiche del quartiere, immagini degli accessi,
            documentazione delle aree comuni, riprese del cortile, video per
            social, materiale per portali immobiliari o contenuti da inserire in
            una presentazione commerciale. Più dettagli inserisci, più sarà facile
            per il pilota capire il lavoro.
          </p>

          <p className="leading-8 text-gray-300">
            Il pilota dovrà sempre valutare sicurezza, privacy, condizioni meteo,
            edifici vicini, presenza di persone, strade, ostacoli, antenne, linee
            elettriche, spazi di decollo e regole applicabili. DroneGuard mette in
            contatto cliente e professionista, ma la fattibilità del volo viene
            valutata dal pilota scelto.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per condominio in vendita
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e un breve video di una
              palazzina in vendita. Vorrei mostrare la facciata, il tetto, il
              cortile interno, gli accessi, i parcheggi, il contesto urbano e la
              posizione dell'edificio rispetto alle strade vicine. Il materiale
              sarà usato per un annuncio immobiliare e per una presentazione a
              potenziali investitori.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire subito il tipo di
            immobile, gli elementi da riprendere e l'uso finale del materiale
            fotografico o video.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per condomini?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla città, alla zona, alla durata del
            servizio, alla dimensione dell'edificio e al tipo di materiale
            richiesto. Un servizio con alcune foto aeree può essere diverso da un
            video completo con più riprese, panoramiche del quartiere, immagini
            della copertura, riprese delle aree comuni e consegna di contenuti
            selezionati per uso commerciale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il contesto urbano può incidere. Un condominio in una zona
            densa, vicino a strade trafficate, edifici alti, antenne o spazi
            pubblici richiede una valutazione diversa rispetto a una palazzina con
            cortile ampio e spazi esterni liberi. Per questo è importante
            pubblicare una richiesta chiara e dettagliata.
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
            pilota drone per foto e video di un condominio, una palazzina o un
            complesso residenziale in vendita.
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
                Il drone è utile per vendere un condominio?
              </h3>
              <p className="text-gray-300">
                Sì, può aiutare a mostrare l'edificio nel suo insieme, il
                contesto, gli accessi, le facciate, il tetto, il cortile e gli
                spazi comuni.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Va bene anche per palazzine e complessi residenziali?
              </h3>
              <p className="text-gray-300">
                Sì, il servizio può essere utile per palazzine, complessi
                residenziali, edifici cielo-terra e immobili con più unità
                abitative.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Le immagini drone sostituiscono una perizia?
              </h3>
              <p className="text-gray-300">
                No, le immagini con drone sono materiale visivo utile, ma non
                sostituiscono perizie, ispezioni tecniche, verifiche edilizie o
                valutazioni professionali.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare le riprese per investitori?
              </h3>
              <p className="text-gray-300">
                Sì, il materiale può essere usato per presentazioni, annunci,
                brochure digitali e comunicazioni commerciali, secondo gli accordi
                presi con il pilota.
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
            Trova un pilota drone per condomini in vendita
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto e video di condomini, palazzine,
            edifici cielo-terra, complessi residenziali, facciate, coperture,
            cortili, parcheggi, accessi e annunci immobiliari professionali.
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