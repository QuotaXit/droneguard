import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo video drone | DroneGuard",
  description:
    "Richiedi un preventivo per video con drone. Trova piloti drone per video aziendali, immobiliari, turistici, eventi, cantieri, hotel, agriturismi e contenuti promozionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Preventivi per video professionali con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Preventivo video drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Vuoi realizzare un video con drone per un immobile, un'azienda, un
            hotel, un agriturismo, un evento, un cantiere o una struttura da
            promuovere? Con DroneGuard puoi pubblicare una richiesta e ricevere
            candidature da piloti drone disponibili nella tua zona. Il video con
            drone permette di mostrare luoghi, spazi esterni, edifici, terreni,
            attività e progetti da un punto di vista più scenografico e
            professionale, utile per siti web, social, annunci immobiliari,
            presentazioni commerciali e contenuti promozionali.
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
              Video promozionali
            </h2>
            <p className="text-gray-300">
              Richiedi video con drone per aziende, immobili, hotel, agriturismi,
              cantieri, eventi, location e attività da valorizzare online.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti drone disponibili
            </h2>
            <p className="text-gray-300">
              Pubblica la richiesta, indica la zona e ricevi candidature da
              operatori drone interessati a realizzare il tuo video.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Video su misura
            </h2>
            <p className="text-gray-300">
              Puoi chiedere materiale grezzo, riprese selezionate oppure un video
              montato pronto per sito web, social, pubblicità o presentazioni.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un video con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un video con drone è utile quando vuoi raccontare un luogo o
              un'attività in modo più completo rispetto alle semplici riprese da
              terra. La prospettiva aerea permette di mostrare dimensioni,
              contesto, accessi, spazi esterni, posizione, paesaggio e rapporto
              con l'ambiente circostante. Questo rende il drone particolarmente
              interessante per immobili, strutture turistiche, aziende, cantieri,
              eventi e attività che vogliono comunicare meglio il proprio valore.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Un video drone può essere utilizzato per promuovere una villa in
              vendita, presentare un hotel, mostrare un agriturismo, documentare
              un cantiere, raccontare un evento, valorizzare una location o
              creare contenuti per social e campagne pubblicitarie. Le immagini
              dall'alto danno al contenuto un aspetto più professionale e aiutano
              a catturare l'attenzione di chi guarda.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi descrivere il video che vuoi realizzare e
              ricevere candidature da piloti drone interessati. La piattaforma non
              esegue direttamente il servizio, ma mette in contatto clienti e
              operatori drone, così puoi scegliere il professionista più adatto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Video con drone che puoi richiedere
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Video immobiliari con drone</li>
              <li>✅ Video promozionali per aziende</li>
              <li>✅ Video per hotel, resort e agriturismi</li>
              <li>✅ Video per cantieri e avanzamento lavori</li>
              <li>✅ Video per eventi e matrimoni</li>
              <li>✅ Video per strutture turistiche</li>
              <li>✅ Video per stabilimenti balneari</li>
              <li>✅ Video social e pubblicitari</li>
              <li>✅ Riprese drone con montaggio finale</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Preventivo video drone per immobili
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nel settore immobiliare, un video con drone può fare una grande
            differenza nella presentazione di una proprietà. Una villa, un casale,
            un terreno, un appartamento con vista, una struttura commerciale o un
            immobile di pregio possono essere raccontati meglio attraverso riprese
            aeree che mostrano posizione, spazi esterni, accessi, giardino,
            piscina, panorama e contesto circostante.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per un'agenzia immobiliare o un proprietario, il video drone può
            rendere l'annuncio più interessante e professionale. Le riprese
            dall'alto aiutano a far capire subito il valore dell'immobile e della
            zona, soprattutto quando ci sono elementi esterni importanti come
            terreno, vista, giardino, mare, campagna, parcheggi o ampi spazi
            aperti.
          </p>

          <p className="leading-8 text-gray-300">
            Quando pubblichi la richiesta, indica il tipo di immobile, la zona, il
            risultato che vuoi ottenere e se ti serve solo il materiale video
            oppure anche un montaggio finale pronto da caricare online.
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
                Descrivi il video, la zona, il tipo di soggetto da riprendere e
                il risultato che desideri.
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
              Video drone per aziende
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le aziende possono usare il video con drone per presentare sedi,
              capannoni, uffici, cantieri, stabilimenti, mezzi, aree produttive,
              piazzali e spazi esterni. Un contenuto video realizzato anche con
              riprese aeree può essere utilizzato sul sito aziendale, sui social,
              nelle presentazioni commerciali e nelle campagne di comunicazione.
            </p>

            <p className="leading-8 text-gray-300">
              Nella richiesta puoi specificare se vuoi un video istituzionale,
              promozionale, tecnico, emozionale o pensato per social e pubblicità.
              Questo aiuta il pilota a capire meglio lo stile delle riprese e il
              tipo di risultato che desideri.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Video drone per turismo e strutture ricettive
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Hotel, resort, agriturismi, campeggi, stabilimenti balneari,
              villaggi turistici e location possono valorizzarsi molto con un
              video drone. Le riprese dall'alto permettono di mostrare la
              struttura, la posizione, il paesaggio, la vicinanza al mare, alla
              campagna, alla montagna o ad altri punti di interesse.
            </p>

            <p className="leading-8 text-gray-300">
              Un video ben pensato può essere utile per il sito web, per i portali
              turistici, per i social e per campagne pubblicitarie. Nella
              richiesta puoi indicare quali aree vuoi mostrare e quale messaggio
              vuoi comunicare.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Video drone per cantieri edili
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il video con drone può essere molto utile anche nei cantieri edili.
            Le imprese possono documentare l'avanzamento lavori, mostrare le fasi
            principali di un progetto, creare contenuti per clienti e investitori
            oppure conservare un archivio visivo dello stato del cantiere. Le
            riprese aeree aiutano a mostrare l'intera area operativa, gli accessi,
            la disposizione dei materiali, le strutture e il contesto circostante.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un video periodico può raccontare l'evoluzione del lavoro nel tempo,
            mentre un video finale può essere usato dall'impresa per presentare il
            progetto concluso. Questo tipo di contenuto può essere utile per
            imprese edili, general contractor, studi tecnici, società immobiliari,
            installatori e aziende che lavorano su grandi aree o strutture.
          </p>

          <p className="leading-8 text-gray-300">
            Per ottenere candidature più precise, indica nella richiesta se ti
            serve un video singolo, un monitoraggio periodico, un video finale o
            materiale grezzo da usare internamente.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Materiale grezzo
            </h2>
            <p className="text-gray-300">
              Puoi richiedere solo le riprese originali, utili se hai già chi si
              occupa del montaggio o della comunicazione.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Video montato
            </h2>
            <p className="text-gray-300">
              Puoi chiedere un contenuto finale pronto per sito, social, annunci,
              campagne pubblicitarie o presentazioni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Riprese su misura
            </h2>
            <p className="text-gray-300">
              Descrivi lo stile che desideri: elegante, tecnico, emozionale,
              commerciale, turistico o pensato per i social.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa indicare nella richiesta di preventivo video drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più adatte è importante spiegare bene il tipo
            di video che vuoi realizzare. Un pilota drone deve sapere se il
            servizio riguarda un immobile, un'azienda, un evento, un hotel, un
            cantiere, un terreno o una struttura turistica. Ogni contesto richiede
            un approccio diverso e può avere esigenze specifiche.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi indicare la città o la zona, il soggetto da riprendere, la data
            indicativa, la durata del video finale, il formato richiesto, il tipo
            di consegna, la necessità di montaggio e lo stile desiderato. Se vuoi
            un video per Instagram, TikTok, YouTube, sito web o annunci
            immobiliari, è utile scriverlo subito nella richiesta.
          </p>

          <p className="leading-8 text-gray-300">
            Più la richiesta è chiara, più sarà semplice per i piloti capire se
            possono aiutarti e candidarsi in modo mirato. Questo ti permette di
            risparmiare tempo e ricevere risposte più coerenti con il risultato
            che vuoi ottenere.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per video con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare un video promozionale di un
              agriturismo in provincia di Roma. Vorrei riprese dall'alto della
              struttura, del giardino, della piscina e del paesaggio circostante.
              Mi serve un video breve, elegante e pronto da pubblicare sul sito e
              sui social. Vorrei ricevere candidature da operatori disponibili
              nelle prossime settimane.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Un testo di questo tipo aiuta il pilota a capire subito il luogo, il
            risultato richiesto, lo stile del video e il tipo di consegna finale.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un video con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un video con drone può cambiare in base alla zona, alla
            durata delle riprese, al tipo di soggetto, alla complessità del luogo,
            al numero di scene richieste e alla consegna finale. Un video breve
            per un immobile non ha le stesse esigenze di un video aziendale, di
            un video turistico o di un contenuto promozionale completo con
            montaggio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la post-produzione può incidere sul prezzo. Alcuni clienti
            vogliono solo le riprese grezze, altri desiderano un video completo
            con musica, tagli, testi, selezione delle migliori scene e formato
            pronto per la pubblicazione. Per questo è importante indicare subito
            cosa ti serve.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo fisso. La piattaforma permette di
            pubblicare una richiesta e ricevere candidature da piloti drone
            interessati, così cliente e professionista possono accordarsi sui
            dettagli del servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere un preventivo per video con drone?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta per video con
                drone e ricevere candidature da piloti interessati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente i video?
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
                Posso chiedere un video già montato?
              </h3>
              <p className="text-gray-300">
                Sì, nella richiesta puoi specificare se vuoi solo materiale grezzo
                oppure un video montato pronto per la pubblicazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Per quali settori è utile un video drone?
              </h3>
              <p className="text-gray-300">
                È utile per immobili, aziende, hotel, agriturismi, cantieri,
                eventi, turismo, location, social, pubblicità e presentazioni.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedi un preventivo per video con drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per video immobiliari, aziendali, turistici, promozionali,
            cantieri, eventi, hotel, agriturismi, strutture ricettive e contenuti
            professionali pronti per il web.
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