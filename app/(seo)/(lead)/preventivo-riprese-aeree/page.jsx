import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo riprese aeree | DroneGuard",
  description:
    "Richiedi un preventivo per riprese aeree con drone. Trova piloti drone per video professionali, immobili, cantieri, eventi, aziende, turismo e contenuti promozionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Preventivi per video e foto dall'alto
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Preventivo riprese aeree
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai bisogno di un preventivo per riprese aeree con drone? Con
            DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto e video professionali dall'alto. Le
            riprese aeree possono essere utili per immobili, ville, terreni,
            cantieri, aziende, hotel, agriturismi, eventi, matrimoni, strutture
            turistiche, contenuti social, video promozionali e presentazioni
            commerciali. Invece di cercare manualmente un operatore, puoi
            descrivere il lavoro che ti serve e ricevere candidature da piloti
            interessati.
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
              Foto e video aerei
            </h2>
            <p className="text-gray-300">
              Richiedi immagini dall'alto per immobili, aziende, eventi, cantieri,
              turismo, strutture ricettive e contenuti promozionali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti disponibili
            </h2>
            <p className="text-gray-300">
              Pubblica il lavoro e ricevi candidature da operatori drone
              interessati a realizzare il servizio nella tua zona.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Servizi su misura
            </h2>
            <p className="text-gray-300">
              Puoi richiedere solo foto, solo video, materiale grezzo, riprese
              selezionate oppure un video montato pronto da pubblicare.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere riprese aeree con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le riprese aeree con drone sono utili quando vuoi mostrare un luogo,
              un edificio, un'attività o un progetto da una prospettiva più ampia
              e professionale. Una vista dall'alto permette di raccontare meglio
              dimensioni, contesto, posizione, spazi esterni, accessi e rapporto
              con l'ambiente circostante. Questo è particolarmente utile per
              immobili, strutture turistiche, cantieri, aziende e attività che
              vogliono comunicare in modo più efficace.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Un video girato con drone può valorizzare una villa in vendita,
              mostrare un agriturismo, presentare un hotel, documentare un
              cantiere, raccontare un evento o creare materiale per social,
              pubblicità, sito web e campagne promozionali. Anche le fotografie
              aeree possono avere grande valore, soprattutto quando servono
              immagini chiare, ordinate e diverse dalle classiche foto da terra.
            </p>

            <p className="leading-8 text-gray-300">
              DroneGuard ti aiuta a trovare piloti drone interessati al lavoro. Tu
              pubblichi la richiesta, spieghi cosa vuoi ottenere e ricevi
              candidature da operatori disponibili. La piattaforma non esegue
              direttamente il servizio, ma mette in contatto clienti e piloti
              drone.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Riprese aeree che puoi richiedere
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese aeree professionali con drone</li>
              <li>✅ Video immobiliari per ville, case e terreni</li>
              <li>✅ Video promozionali per aziende</li>
              <li>✅ Riprese di cantieri e avanzamento lavori</li>
              <li>✅ Foto aeree per annunci immobiliari</li>
              <li>✅ Video per hotel, resort e agriturismi</li>
              <li>✅ Riprese per eventi e matrimoni</li>
              <li>✅ Contenuti social e pubblicitari</li>
              <li>✅ Materiale grezzo o video montato</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Preventivo riprese aeree per immobili
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese aeree sono molto richieste nel settore immobiliare. Una
            casa, una villa, un casale, un terreno o una struttura commerciale
            possono essere presentati meglio grazie a foto e video dall'alto. Il
            drone permette di mostrare giardini, piscine, accessi, parcheggi,
            spazi esterni, vista panoramica, posizione dell'immobile e rapporto
            con il contesto circostante.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per un annuncio immobiliare, le immagini aeree possono aumentare la
            qualità della presentazione e rendere l'immobile più interessante. Un
            video ben realizzato può mostrare il percorso verso la proprietà, la
            disposizione degli spazi esterni e il valore della zona. Questo è utile
            per agenzie immobiliari, proprietari, costruttori e professionisti che
            vogliono comunicare meglio il valore dell'immobile.
          </p>

          <p className="leading-8 text-gray-300">
            Quando pubblichi la richiesta, indica il tipo di immobile, la zona, il
            materiale che desideri e se ti servono solo riprese oppure anche un
            montaggio video finale.
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
                Crea gratuitamente il tuo account come cliente, azienda o pilota
                drone.
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
                3. Pubblica il lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il tipo di riprese, la zona, la data e il risultato che
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
              Riprese aeree per aziende
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'azienda può richiedere riprese aeree per creare video
              promozionali, contenuti per il sito web, presentazioni commerciali,
              materiale social o documentazione delle proprie sedi. Il drone può
              mostrare capannoni, uffici, stabilimenti, piazzali, aree produttive,
              cantieri, mezzi, strutture e spazi esterni in modo più dinamico e
              professionale.
            </p>

            <p className="leading-8 text-gray-300">
              Nella richiesta puoi specificare se il video deve essere emozionale,
              tecnico, commerciale, istituzionale o pensato per i social. Questo
              aiuta i piloti a capire il tipo di riprese da proporre.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Riprese aeree per turismo ed eventi
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Hotel, resort, agriturismi, stabilimenti balneari, campeggi,
              villaggi turistici e location per eventi possono valorizzarsi molto
              con immagini dall'alto. Il drone permette di mostrare la struttura,
              il paesaggio, gli spazi esterni, la vicinanza al mare, alla
              campagna, alla montagna o ad altri punti di interesse.
            </p>

            <p className="leading-8 text-gray-300">
              Anche per eventi e matrimoni, le riprese aeree possono aggiungere
              un punto di vista scenografico, utile per video ricordo, contenuti
              promozionali e presentazioni della location.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa indicare nella richiesta di preventivo
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più adatte è importante spiegare bene il
            lavoro. Scrivere solo “cerco riprese aeree” può non essere sufficiente,
            perché un pilota deve capire se si tratta di un immobile, un evento,
            un cantiere, un'azienda o una struttura turistica. Ogni contesto ha
            esigenze diverse, sia dal punto di vista delle riprese che
            dell'organizzazione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi indicare la città, il luogo esatto o la zona indicativa, il tipo
            di soggetto da riprendere, il risultato desiderato, la data, la durata
            stimata, il formato richiesto e se ti serve anche il montaggio video.
            Se hai esempi di stile, puoi descrivere se vuoi un video elegante,
            tecnico, emozionale, veloce per social o più istituzionale.
          </p>

          <p className="leading-8 text-gray-300">
            Una richiesta chiara permette ai piloti di capire subito se possono
            aiutarti e di candidarsi in modo più preciso. In questo modo risparmi
            tempo e aumenti le possibilità di trovare un operatore adatto.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Solo foto
            </h2>
            <p className="text-gray-300">
              Ideale per immobili, terreni, strutture turistiche, cantieri,
              aziende e annunci online.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Solo video
            </h2>
            <p className="text-gray-300">
              Perfetto per promozione, social, presentazioni, eventi, aziende,
              immobili e contenuti commerciali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Video montato
            </h2>
            <p className="text-gray-300">
              Puoi richiedere un contenuto finale pronto da pubblicare su sito,
              social, annunci, campagne o presentazioni.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costano le riprese aeree con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo delle riprese aeree con drone può variare in base al tipo di
            servizio, alla zona, alla durata del lavoro, al numero di riprese
            richieste, alla complessità del luogo e alla consegna finale. Una
            semplice sessione fotografica per un immobile può essere diversa da un
            video aziendale completo, da riprese per un evento o da un contenuto
            promozionale con montaggio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la post-produzione può incidere. Alcuni clienti vogliono solo il
            materiale grezzo, altri preferiscono un video già montato con tagli,
            musica, testi, selezione delle migliori clip e formato pronto per la
            pubblicazione. Per questo è utile specificare subito cosa desideri.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo fisso. La piattaforma permette di
            pubblicare una richiesta e ricevere candidature da piloti drone
            interessati, così cliente e professionista possono accordarsi sul
            servizio.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per riprese aeree
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare riprese aeree di una villa in
              vendita in provincia di Roma. Mi servono foto dall'alto, video degli
              esterni, riprese del giardino e una breve clip promozionale da usare
              online. Vorrei ricevere candidature da operatori disponibili nelle
              prossime settimane.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire subito il luogo, il tipo
            di servizio, il materiale richiesto e l'obiettivo finale delle riprese.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere un preventivo per riprese aeree?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta per riprese aeree
                con drone e ricevere candidature da piloti interessati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente le riprese?
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
                Posso richiedere solo foto aeree?
              </h3>
              <p className="text-gray-300">
                Sì, nella richiesta puoi specificare se vuoi solo foto, solo video,
                entrambi oppure un video montato.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Per quali settori sono utili le riprese aeree?
              </h3>
              <p className="text-gray-300">
                Sono utili per immobili, aziende, cantieri, turismo, eventi,
                matrimoni, agriturismi, hotel, promozione commerciale e contenuti
                social.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedi un preventivo per riprese aeree
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per riprese aeree professionali, foto dall'alto, video
            promozionali, immobili, aziende, cantieri, eventi, turismo e contenuti
            pronti per il web.
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