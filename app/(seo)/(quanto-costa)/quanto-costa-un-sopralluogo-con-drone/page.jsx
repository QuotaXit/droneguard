import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Quanto costa un sopralluogo con drone | DroneGuard",
  description:
    "Scopri quanto costa un sopralluogo con drone per edilizia, immobili, impianti, terreni e controlli professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Prezzi sopralluoghi con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Quanto costa un sopralluogo con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Il sopralluogo con drone è una soluzione moderna e veloce per
            ottenere immagini dettagliate di edifici, terreni, impianti,
            infrastrutture e aree difficili da raggiungere. Grazie alle
            riprese aeree è possibile effettuare verifiche preliminari,
            raccogliere documentazione fotografica e analizzare una situazione
            senza ricorrere a ponteggi o accessi complessi. Il costo di un
            sopralluogo con drone varia in base all'area da ispezionare,
            alla durata dell'intervento e al tipo di documentazione richiesta.
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
              Edifici e coperture
            </h2>

            <p className="text-gray-300">
              Verifiche preliminari di tetti, facciate e strutture.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Terreni e aree
            </h2>

            <p className="text-gray-300">
              Controllo di terreni agricoli, edificabili e aree industriali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Impianti e infrastrutture
            </h2>

            <p className="text-gray-300">
              Sopralluoghi tecnici per impianti e opere civili.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché effettuare un sopralluogo con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I sopralluoghi tradizionali possono richiedere molto tempo e
            l'utilizzo di attrezzature specifiche per raggiungere determinate
            aree. Un drone permette invece di ottenere rapidamente una visione
            completa della situazione, riducendo tempi operativi e costi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini raccolte possono essere utilizzate per valutazioni
            tecniche, preventivi, progettazione, manutenzione e verifiche
            preliminari. Questo rende il drone uno strumento molto utile
            sia per professionisti che per privati.
          </p>

          <p className="leading-8 text-gray-300">
            Grazie alle riprese ad alta definizione è possibile individuare
            dettagli e criticità difficilmente osservabili da terra.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Da cosa dipende il costo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il costo di un sopralluogo con drone dipende dalla località,
              dalla superficie da controllare, dalla complessità operativa
              e dalla quantità di materiale richiesto dal cliente.
            </p>

            <p className="leading-8 text-gray-300">
              Alcuni sopralluoghi prevedono solamente fotografie panoramiche,
              mentre altri richiedono video dettagliati, report fotografici
              o documentazione tecnica da utilizzare in fase progettuale.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Utilizzi più richiesti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Sopralluoghi edilizi</li>
              <li>✅ Verifica coperture</li>
              <li>✅ Controllo terreni</li>
              <li>✅ Ispezione impianti</li>
              <li>✅ Valutazioni preliminari</li>
              <li>✅ Documentazione fotografica</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come richiedere un sopralluogo
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta indicando la località,
            il tipo di area da controllare e le tue esigenze specifiche.
            I piloti drone interessati possono candidarsi e proporti la
            propria disponibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ricevere più candidature consente di confrontare diversi
            professionisti e scegliere la soluzione più adatta al progetto.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma mette in contatto clienti e piloti drone in tutta
            Italia per sopralluoghi tecnici e professionali.
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
                Descrivi l'area da controllare.
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