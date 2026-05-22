import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per turismo | DroneGuard",
  description:
    "Trova piloti drone per turismo, video promozionali, strutture ricettive, borghi, hotel, resort e valorizzazione del territorio."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per turismo
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per turismo
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            I droni sono diventati uno strumento molto efficace per promuovere
            territori, strutture ricettive, borghi, hotel, resort, agriturismi,
            stabilimenti balneari e destinazioni turistiche. Le immagini aeree
            permettono di raccontare un luogo da una prospettiva emozionante,
            mostrando paesaggi, posizione, spazi esterni e caratteristiche che
            spesso non emergono con fotografie tradizionali. Su DroneGuard puoi
            pubblicare una richiesta e ricevere candidature da piloti drone
            interessati a realizzare contenuti professionali per il turismo.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Registrati gratis
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Video promozionali
            </h2>
            <p className="leading-7 text-gray-300">
              Riprese aeree per promuovere destinazioni, strutture turistiche e
              attività locali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Strutture ricettive
            </h2>
            <p className="leading-7 text-gray-300">
              Foto e video per hotel, resort, agriturismi, B&B, campeggi e
              stabilimenti balneari.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Territorio e borghi
            </h2>
            <p className="leading-7 text-gray-300">
              Contenuti aerei per valorizzare paesaggi, centri storici,
              percorsi naturalistici e attrazioni turistiche.
            </p>
          </div>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare un drone nel turismo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Nel settore turistico l'immagine è fondamentale. Un video ben
              realizzato può aiutare una struttura, una destinazione o un
              territorio a comunicare meglio il proprio valore. Il drone
              permette di mostrare viste panoramiche, accessi, spazi esterni,
              posizione geografica e contesto naturale in modo molto più
              coinvolgente.
            </p>

            <p className="leading-8 text-gray-300">
              Le riprese dall'alto sono particolarmente utili per raccontare
              hotel vista mare, agriturismi immersi nel verde, borghi storici,
              percorsi naturalistici, spiagge, laghi, montagne, parchi e
              strutture ricettive con ampi spazi esterni.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per turismo
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Video promozionali turistici</li>
              <li>✅ Foto aeree per hotel e resort</li>
              <li>✅ Riprese per agriturismi e B&B</li>
              <li>✅ Valorizzazione borghi e territori</li>
              <li>✅ Contenuti social per strutture ricettive</li>
              <li>✅ Video per comuni, enti e operatori turistici</li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Video turistici con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I video turistici realizzati con drone consentono di creare contenuti
            emozionali e professionali. Una ripresa aerea può aprire un video
            mostrando il territorio, seguire un percorso, mostrare la posizione
            di una struttura o raccontare l'esperienza che un visitatore può
            vivere.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo tipo di contenuto può essere utilizzato su siti web, social
            network, campagne pubblicitarie, portali turistici e materiali di
            presentazione. Per molte attività turistiche, un buon video può
            fare la differenza tra un contenuto normale e una comunicazione
            realmente capace di attirare attenzione.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard puoi spiegare il tipo di video che desideri, la zona
            da riprendere, la durata del servizio e l'obiettivo del contenuto,
            così da ricevere candidature più adatte.
          </p>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Per hotel, resort e strutture ricettive
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Hotel, resort, agriturismi, campeggi, B&B e stabilimenti balneari
              possono utilizzare il drone per mostrare ambienti esterni, piscine,
              giardini, terrazze, spiagge, parcheggi, accessi e posizione
              rispetto ai punti di interesse.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini aeree aiutano il potenziale cliente a comprendere
              meglio l'esperienza offerta dalla struttura e a percepire il
              valore del soggiorno prima ancora di arrivare.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Per comuni e destinazioni turistiche
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Anche comuni, enti turistici, pro loco e organizzazioni locali
              possono utilizzare il drone per promuovere il territorio. Borghi,
              piazze, monumenti, percorsi naturalistici e aree panoramiche
              possono essere raccontati con immagini di grande impatto.
            </p>

            <p className="leading-8 text-gray-300">
              Questi contenuti possono essere usati per campagne di promozione
              territoriale, video istituzionali, eventi locali e comunicazione
              digitale.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Contenuti per social e pubblicità
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Oggi molte persone scoprono nuove destinazioni tramite social
            network, video brevi e contenuti visivi. Le riprese con drone sono
            perfette per creare materiale promozionale capace di catturare
            l'attenzione nei primi secondi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un hotel, un agriturismo o un territorio turistico possono usare
            immagini aeree per campagne su Instagram, TikTok, Facebook, YouTube,
            Google Ads o sul proprio sito ufficiale.
          </p>

          <p className="leading-8 text-gray-300">
            Pubblicando una richiesta su DroneGuard puoi indicare se ti servono
            video verticali, riprese orizzontali, fotografie, montaggio video o
            solo materiale grezzo da consegnare al tuo team marketing.
          </p>
        </div>

        <div className="mb-16 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                1. Registrati
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Crea un account gratuito come cliente.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica il lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi la struttura, il territorio o il servizio richiesto.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti drone interessati possono candidarsi al tuo annuncio.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Valuta le proposte ricevute in base alle tue esigenze.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Crediti per clienti e piloti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Su DroneGuard la registrazione è gratuita. I nuovi clienti possono
              riscattare 10 crediti gratuiti, mentre i nuovi piloti drone
              possono riscattare 50 crediti gratuiti dalla propria area
              personale.
            </p>

            <p className="leading-8 text-gray-300">
              Pubblicare un lavoro costa 5 crediti per i clienti. I piloti che
              vogliono candidarsi a un annuncio utilizzano 5 crediti. Quando i
              crediti terminano, è possibile acquistarne altri direttamente
              dall'account.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Trova il professionista adatto
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Ogni progetto turistico è diverso. Alcuni clienti cercano un video
              emozionale per una struttura ricettiva, altri vogliono foto aeree
              per un sito web, altri ancora hanno bisogno di contenuti per una
              campagna pubblicitaria.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi descrivere chiaramente il risultato che vuoi
              ottenere e ricevere candidature da piloti drone interessati al tuo
              progetto.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa un video turistico con drone?
              </h3>
              <p className="leading-7 text-gray-300">
                Il costo dipende dalla zona, dal tipo di struttura, dalla durata
                del servizio e dalle offerte dei piloti interessati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere video per hotel o agriturismi?
              </h3>
              <p className="leading-7 text-gray-300">
                Sì. Puoi pubblicare una richiesta per hotel, resort, B&B,
                agriturismi, stabilimenti balneari e altre strutture turistiche.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente i video?
              </h3>
              <p className="leading-7 text-gray-300">
                No. DroneGuard è una piattaforma che mette in contatto clienti e
                piloti drone registrati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere contenuti per social?
              </h3>
              <p className="leading-7 text-gray-300">
                Sì. Nella richiesta puoi indicare se ti servono video verticali,
                fotografie, contenuti promozionali o materiale per campagne
                pubblicitarie.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso cercare piloti nella mia zona?
              </h3>
              <p className="leading-7 text-gray-300">
                Sì. Puoi indicare la località del servizio e ricevere
                candidature da piloti interessati al lavoro.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Hai bisogno di un pilota drone per turismo?
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica la tua richiesta e ricevi
            candidature da piloti drone interessati a realizzare foto, video e
            contenuti professionali per turismo, strutture ricettive e
            promozione del territorio.
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