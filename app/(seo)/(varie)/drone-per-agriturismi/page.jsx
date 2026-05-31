import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per agriturismi | DroneGuard",
  description:
    "Trova piloti drone per agriturismi, casali, aziende agricole e strutture ricettive in campagna. Richiedi foto aeree e video promozionali con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per turismo rurale
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per agriturismi
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai un agriturismo, un casale, una struttura in campagna, una tenuta,
            un'azienda agricola con ospitalità o una location immersa nel verde?
            Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto aeree, video promozionali, riprese
            dall'alto e contenuti professionali per valorizzare la tua struttura.
            Il drone permette di mostrare non solo l'edificio, ma anche il terreno,
            i campi, i vigneti, gli uliveti, la piscina, i giardini, i percorsi,
            la vista panoramica e tutto il contesto naturale che rende unico un
            agriturismo.
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
              Foto aeree per agriturismi
            </h2>
            <p className="text-gray-300">
              Valorizza casali, giardini, piscina, terreni, accessi, parcheggi,
              campi coltivati e spazi esterni con immagini dall'alto.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Video promozionali
            </h2>
            <p className="text-gray-300">
              Richiedi video con drone per sito web, social, portali turistici,
              campagne pubblicitarie e presentazioni della struttura.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piloti drone disponibili
            </h2>
            <p className="text-gray-300">
              Pubblica il lavoro, indica la zona dell'agriturismo e ricevi
              candidature da operatori drone interessati.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per un agriturismo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un agriturismo non vende solo camere o servizi, ma anche atmosfera,
              natura, tranquillità, paesaggio ed esperienza. Chi cerca un soggiorno
              in campagna vuole capire dove si trova la struttura, quanto verde la
              circonda, che tipo di panorama offre e quali spazi esterni può
              vivere durante la permanenza.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le riprese tradizionali da terra sono importanti, ma spesso non
              riescono a raccontare davvero l'estensione di una tenuta o il valore
              del contesto. Il drone può mostrare il casale dall'alto, i campi
              coltivati, il vigneto, l'uliveto, la piscina, il giardino, i vialetti,
              le aree relax, gli accessi e la posizione rispetto al paesaggio
              circostante.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi cercare un pilota drone senza perdere tempo in
              ricerche manuali. Pubblicando una richiesta, puoi spiegare il lavoro
              che ti serve e ricevere candidature da operatori disponibili nella
              zona dell'agriturismo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per agriturismi
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Video promozionali per agriturismi</li>
              <li>✅ Foto aeree di casali e strutture rurali</li>
              <li>✅ Riprese di terreni, vigneti e uliveti</li>
              <li>✅ Video per sito web e social network</li>
              <li>✅ Foto di piscina, giardino e aree esterne</li>
              <li>✅ Contenuti per portali turistici e annunci online</li>
              <li>✅ Riprese per aziende agricole con ospitalità</li>
              <li>✅ Materiale per campagne pubblicitarie</li>
              <li>✅ Video per location eventi e matrimoni in campagna</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Video drone per agriturismi e casali
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un video drone può rendere molto più efficace la presentazione di un
            agriturismo. In pochi secondi permette di mostrare la struttura nel suo
            ambiente reale: non solo camere e interni, ma anche natura, spazi
            esterni, panorama e atmosfera. Questo è importante perché chi sceglie
            un agriturismo spesso cerca un'esperienza diversa da un hotel
            tradizionale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Se la struttura ha un casale storico, una piscina panoramica, un grande
            giardino, terreni agricoli, animali, vigneti, uliveti, percorsi
            naturalistici o una vista particolare, il drone può aiutare a
            valorizzare tutto questo in modo immediato. Le immagini dall'alto
            comunicano dimensione, posizione e identità della struttura.
          </p>

          <p className="leading-8 text-gray-300">
            Il materiale può essere usato per il sito ufficiale, le pagine social,
            le campagne pubblicitarie, le schede sui portali turistici, le brochure
            digitali, i video promozionali e le presentazioni per eventi privati o
            matrimoni.
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
                Crea il tuo account come cliente, agriturismo, struttura
                ricettiva, azienda agricola o pilota drone.
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
                Descrivi l'agriturismo, la zona, le aree da riprendere e il
                materiale che vuoi ottenere.
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
              Drone per agriturismi con piscina
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              La piscina è spesso uno dei punti più forti di un agriturismo. Con il
              drone puoi mostrarla dall'alto insieme al giardino, alle aree relax,
              ai lettini, al casale e al panorama circostante. Questo permette al
              potenziale ospite di capire subito l'atmosfera della struttura.
            </p>

            <p className="leading-8 text-gray-300">
              Le riprese aeree sono particolarmente efficaci quando la piscina si
              trova in una posizione panoramica, vicino a vigneti, uliveti, colline
              o spazi verdi importanti.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per tenute, vigneti e uliveti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Molti agriturismi sono collegati ad aziende agricole, cantine,
              frantoi o tenute con terreni coltivati. Il drone può mostrare
              vigneti, uliveti, campi, filari, percorsi interni, aree produttive e
              rapporto tra la struttura ricettiva e l'attività agricola.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di contenuto è utile anche per raccontare la storia
              dell'azienda, il legame con il territorio e l'esperienza autentica
              offerta agli ospiti.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per promuovere il turismo rurale
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le fotografie aeree sono molto utili per promuovere un agriturismo
            online. Possono essere usate nella home del sito, nelle gallerie
            fotografiche, nei post social, negli annunci turistici, nelle campagne
            pubblicitarie e nei materiali destinati ad agenzie o clienti privati.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Una foto dall'alto può mostrare in modo immediato ciò che rende forte
            la struttura: panorama, verde, piscina, spazi esterni, tranquillità,
            ampiezza della proprietà, distanza dalle strade principali e contesto
            naturale. Per molti ospiti questi elementi sono decisivi nella scelta.
          </p>

          <p className="leading-8 text-gray-300">
            Pubblicando una richiesta su DroneGuard puoi indicare se ti servono
            solo fotografie, solo video, riprese grezze, montaggio finale o un
            pacchetto completo di contenuti per promuovere l'agriturismo.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Agriturismi e casali
            </h2>
            <p className="text-gray-300">
              Riprese aeree per valorizzare strutture rurali, casali, camere,
              ristoranti, cortili, giardini e spazi esterni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Aziende agricole
            </h2>
            <p className="text-gray-300">
              Video e foto per aziende agricole con ospitalità, terreni, colture,
              vigneti, uliveti e attività legate al territorio.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Location per eventi
            </h2>
            <p className="text-gray-300">
              Ideale anche per agriturismi che ospitano matrimoni, feste private,
              cerimonie, degustazioni ed eventi aziendali.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta per un agriturismo
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante spiegare bene il
            tipo di struttura e il risultato che vuoi ottenere. Puoi indicare la
            città, la provincia, il tipo di agriturismo, la presenza di piscina,
            terreni, giardino, vigneti, uliveti, ristorante, camere, aree relax o
            zone dedicate agli eventi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se ti servono foto, video, entrambi, materiale
            grezzo o un montaggio finale. Puoi anche indicare il periodo migliore
            per le riprese, ad esempio quando il verde è curato, la piscina è
            aperta, i campi sono in ordine o la struttura è pronta per la stagione.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere dove userai il materiale: sito web, social, portali
            turistici, campagne sponsorizzate, brochure, video promozionale,
            presentazione commerciale o contenuti per matrimoni ed eventi.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per agriturismo
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video promozionali di
              un agriturismo in campagna. Vorrei riprese dall'alto del casale,
              della piscina, del giardino, dei terreni, degli uliveti, del
              parcheggio e del panorama circostante. Il materiale mi serve per
              sito web, social, portali turistici e promozione della struttura.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            struttura, le zone da riprendere e l'obiettivo finale del servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per agriturismi?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per agriturismi può variare in base alla
            zona, alla durata delle riprese, alla grandezza della struttura, al
            numero di aree da riprendere, al tipo di materiale richiesto e alla
            post-produzione. Un servizio con sole fotografie può avere un costo
            diverso rispetto a un video completo con montaggio e formati per
            social.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la complessità della struttura può incidere. Un piccolo casale
            richiede un lavoro diverso rispetto a una tenuta con piscina, ristorante,
            camere, vigneti, uliveti, percorsi interni e spazi per eventi. Per
            questo conviene descrivere bene il lavoro nella richiesta.
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
                Posso trovare un pilota drone per un agriturismo?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta e ricevere
                candidature da piloti drone disponibili per foto e video di
                agriturismi, casali e strutture rurali.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per agriturismi piccoli?
              </h3>
              <p className="text-gray-300">
                Sì, soprattutto se la struttura ha spazi esterni, giardino,
                piscina, vista panoramica, terreni o un contesto naturale da
                valorizzare.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere solo foto aeree?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare se ti servono solo fotografie, solo video,
                entrambi oppure un contenuto montato pronto per la pubblicazione.
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
            Trova un pilota drone per il tuo agriturismo
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video promozionali, riprese
            professionali e contenuti visivi per agriturismi, casali, aziende
            agricole, strutture ricettive e location immerse nel verde.
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