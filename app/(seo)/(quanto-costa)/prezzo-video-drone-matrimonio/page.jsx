import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Prezzo video drone matrimonio | DroneGuard",
  description:
    "Scopri il prezzo di un video matrimonio con drone. Richiedi preventivi da piloti drone per riprese aeree professionali del tuo evento."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Prezzi video matrimonio con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Prezzo video drone matrimonio
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Le riprese con drone per matrimoni permettono di catturare immagini
            spettacolari della cerimonia, della location e dei momenti più
            importanti della giornata. Grazie alle prospettive aeree è
            possibile realizzare video emozionanti e fotografie uniche che
            valorizzano l'evento. Il prezzo di un video matrimonio con drone
            può variare in base alla durata delle riprese, alla località,
            alle richieste degli sposi e al tipo di montaggio finale.
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
              Riprese della location
            </h2>

            <p className="text-gray-300">
              Immagini aeree di ville, castelli, agriturismi e strutture.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Momenti speciali
            </h2>

            <p className="text-gray-300">
              Riprese panoramiche della cerimonia e dei festeggiamenti.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Video professionali
            </h2>

            <p className="text-gray-300">
              Contenuti destinati a ricordi personali e condivisione.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché scegliere un drone per il matrimonio
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese aeree permettono di raccontare il matrimonio da una
            prospettiva completamente diversa rispetto alle tradizionali
            videocamere. Il drone consente di valorizzare la location,
            mostrare il contesto circostante e creare sequenze cinematografiche
            che arricchiscono il video finale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Sempre più coppie scelgono di integrare riprese con drone per
            ottenere un ricordo ancora più coinvolgente della giornata.
            Le immagini aeree risultano particolarmente efficaci in location
            panoramiche, ville storiche, agriturismi, spiagge e strutture
            immerse nella natura.
          </p>

          <p className="leading-8 text-gray-300">
            Un pilota drone professionista può contribuire alla realizzazione
            di contenuti unici rispettando le normative e le condizioni di
            sicurezza previste per il volo.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Da cosa dipende il prezzo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il costo di un servizio drone per matrimonio dipende da diversi
              fattori, tra cui la durata dell'evento, il numero di location,
              la complessità delle riprese e la richiesta di montaggi video
              professionali.
            </p>

            <p className="leading-8 text-gray-300">
              Alcuni sposi richiedono solamente riprese aeree della location,
              mentre altri desiderano integrare il drone in tutta la produzione
              video dell'evento. Ogni progetto può quindi avere caratteristiche
              differenti.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi più richiesti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese matrimonio con drone</li>
              <li>✅ Video aerei della location</li>
              <li>✅ Foto panoramiche</li>
              <li>✅ Video emozionali</li>
              <li>✅ Riprese cerimonia</li>
              <li>✅ Contenuti social e ricordi digitali</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come trovare un pilota drone per il matrimonio
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta indicando la data,
            la località e il tipo di servizio desiderato. I piloti drone
            interessati possono candidarsi e proporti la propria disponibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ricevere più candidature consente di confrontare diversi
            professionisti e scegliere la soluzione più adatta alle esigenze
            dell'evento.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma mette in contatto clienti e piloti drone in tutta
            Italia per eventi, matrimoni e cerimonie private.
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
                Descrivi il matrimonio e le riprese desiderate.
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