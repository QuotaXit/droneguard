import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per immobili | DroneGuard",
  description:
    "Trova piloti drone per immobili, fotografie aeree, video immobiliari, promozione immobili e riprese professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per immobili
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per immobili
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Le riprese con drone sono diventate uno strumento sempre più
            utilizzato nel settore immobiliare. Foto e video aerei permettono
            di valorizzare abitazioni, ville, residence, terreni, strutture
            commerciali e immobili di pregio mostrando prospettive che non
            possono essere ottenute con fotografie tradizionali. Su DroneGuard
            puoi pubblicare una richiesta e ricevere candidature da piloti
            drone interessati a realizzare servizi per il settore immobiliare.
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
              Foto aeree
            </h2>
            <p className="leading-7 text-gray-300">
              Immagini professionali per valorizzare immobili e proprietà.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Video immobiliari
            </h2>
            <p className="leading-7 text-gray-300">
              Riprese cinematografiche per presentazioni e promozione.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Marketing immobiliare
            </h2>
            <p className="leading-7 text-gray-300">
              Contenuti professionali per agenzie e professionisti del settore.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Perché utilizzare un drone per gli immobili
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Quando una persona cerca una casa, una villa o un immobile
            commerciale, le immagini rappresentano uno degli elementi più
            importanti. Le fotografie aeree permettono di mostrare non solo
            l'edificio ma anche il contesto circostante, le strade di accesso,
            il quartiere, il giardino e gli spazi esterni.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un servizio con drone può contribuire a rendere un annuncio più
            professionale e più interessante rispetto a una semplice galleria
            fotografica tradizionale.
          </p>

          <p className="leading-8 text-gray-300">
            Le riprese aeree sono oggi utilizzate da agenzie immobiliari,
            costruttori, investitori e proprietari privati che desiderano
            valorizzare al meglio un immobile.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Foto aeree per immobili
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le fotografie realizzate con drone consentono di evidenziare
            caratteristiche difficili da mostrare con una fotocamera da terra.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ville, terreni, strutture ricettive, residence e complessi
            immobiliari possono essere presentati in modo più completo e
            professionale.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini aeree vengono spesso utilizzate in annunci online,
            brochure, siti web e materiale pubblicitario.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Video immobiliari professionali
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Oltre alle fotografie, molti professionisti scelgono di realizzare
            video con drone per mostrare l'immobile attraverso riprese fluide e
            coinvolgenti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            I video permettono di raccontare meglio la proprietà e creare una
            presentazione più moderna e professionale.
          </p>

          <p className="leading-8 text-gray-300">
            Questo tipo di contenuto è particolarmente apprezzato nel settore
            immobiliare di fascia medio-alta e negli immobili turistici.
          </p>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Chi utilizza questi servizi
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Agenzie immobiliari, imprese di costruzione, investitori,
              proprietari e società di gestione immobiliare utilizzano sempre
              più spesso i droni per valorizzare le proprie proprietà.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini aeree aiutano a comunicare meglio il valore di un
              immobile e a catturare l'attenzione di potenziali acquirenti.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Servizi più richiesti
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree immobiliari</li>
              <li>✅ Video drone per immobili</li>
              <li>✅ Riprese ville e residence</li>
              <li>✅ Presentazioni immobiliari</li>
              <li>✅ Contenuti marketing</li>
              <li>✅ Documentazione immobili</li>
            </ul>
          </div>
        </div>

        <div className="mb-16 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
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
              <h3 className="mb-2 font-semibold text-green-400">2. Pubblica il lavoro</h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi l'immobile e il servizio richiesto.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">3. Ricevi candidature</h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">4. Scegli il pilota</h3>
              <p className="text-sm leading-6 text-gray-300">
                Valuta le proposte ricevute.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Cerchi un pilota drone per immobili?
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e ricevi candidature da
            piloti drone interessati a realizzare foto e video professionali
            per il tuo immobile.
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