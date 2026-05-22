import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Quanto costa una ripresa aerea per eventi | DroneGuard",
  description:
    "Scopri quanto costa una ripresa aerea con drone per eventi, manifestazioni, concerti, feste private e occasioni speciali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Prezzi riprese aeree eventi
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Quanto costa una ripresa aerea per eventi
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Le riprese aeree con drone permettono di valorizzare eventi,
            manifestazioni, concerti, festival, inaugurazioni e feste private
            attraverso immagini spettacolari e coinvolgenti. Grazie alla
            prospettiva dall'alto è possibile raccontare l'evento in modo più
            dinamico e professionale rispetto alle tradizionali riprese da
            terra. Il costo di una ripresa aerea per eventi dipende da diversi
            fattori, tra cui durata dell'evento, località, numero di operatori
            coinvolti e tipologia di materiale richiesto.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Richiedi preventivi gratuiti
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Eventi aziendali
            </h2>

            <p className="text-gray-300">
              Riprese professionali per aziende e attività commerciali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Manifestazioni
            </h2>

            <p className="text-gray-300">
              Documentazione di eventi pubblici, sportivi e culturali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Feste private
            </h2>

            <p className="text-gray-300">
              Riprese aeree per compleanni, cerimonie e occasioni speciali.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché scegliere un drone per il tuo evento
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un drone permette di mostrare l'intera area dell'evento, il numero
            di partecipanti e il contesto circostante con immagini ad alto
            impatto visivo. Questo tipo di contenuti è particolarmente utile
            per promozione, marketing, social media e documentazione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese aeree consentono inoltre di creare video più dinamici,
            offrendo punti di vista difficilmente ottenibili con altre
            tecnologie. Per questo motivo sono sempre più richieste in eventi
            pubblici e privati.
          </p>

          <p className="leading-8 text-gray-300">
            La qualità delle immagini ottenute può rappresentare un valore
            aggiunto importante per organizzatori, aziende e partecipanti.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Da cosa dipende il costo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il costo di una ripresa aerea per eventi dipende dalla durata
              delle attività, dalla complessità operativa, dal numero di
              location coinvolte e dalla tipologia di contenuti richiesti.
            </p>

            <p className="leading-8 text-gray-300">
              Alcuni clienti richiedono solamente riprese aeree, mentre altri
              necessitano di video completi, fotografie professionali e
              contenuti destinati alla comunicazione aziendale o ai social.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi disponibili
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese aeree eventi</li>
              <li>✅ Video promozionali</li>
              <li>✅ Fotografie professionali</li>
              <li>✅ Eventi sportivi</li>
              <li>✅ Manifestazioni pubbliche</li>
              <li>✅ Eventi aziendali</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come trovare un pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta indicando la data,
            la località e il tipo di evento. I piloti drone interessati
            possono candidarsi e proporti la propria disponibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ricevere più candidature consente di confrontare diversi
            professionisti e scegliere quello più adatto alle esigenze
            organizzative dell'evento.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma mette in contatto clienti e piloti drone in tutta
            Italia per eventi pubblici e privati.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">1. Registrati</h3>
              <p className="text-sm leading-6 text-gray-300">
                Crea gratuitamente il tuo account.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">2. Pubblica la richiesta</h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il tuo evento.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">3. Ricevi candidature</h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">4. Scegli il professionista</h3>
              <p className="text-sm leading-6 text-gray-300">
                Valuta le candidature ricevute.
              </p>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}