import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Costo riprese con drone | Prezzi e preventivi | DroneGuard",
  description:
    "Scopri il costo delle riprese con drone per eventi, aziende, immobili, turismo, matrimoni e produzioni video professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Prezzi riprese aeree
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Costo riprese con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Le riprese con drone sono sempre più richieste da privati,
            aziende, professionisti e organizzatori di eventi. Grazie alla
            possibilità di ottenere immagini spettacolari da prospettive
            uniche, i droni vengono utilizzati per matrimoni, eventi,
            immobili, turismo, promozione aziendale, cantieri e produzioni
            video professionali. Il costo di una ripresa con drone può
            variare in base a diversi fattori, tra cui la durata del lavoro,
            la complessità operativa, la località e il tipo di materiale
            richiesto.
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
              Eventi e matrimoni
            </h2>

            <p className="text-gray-300">
              Riprese aeree per matrimoni, feste private e manifestazioni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Aziende e marketing
            </h2>

            <p className="text-gray-300">
              Video promozionali per attività commerciali e imprese.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Immobili e turismo
            </h2>

            <p className="text-gray-300">
              Valorizzazione di strutture, hotel, resort e proprietà.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Da cosa dipende il costo delle riprese con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Ogni progetto è differente e per questo motivo non esiste un
            prezzo standard valido per tutte le situazioni. Una semplice
            ripresa di pochi minuti richiede un'organizzazione diversa
            rispetto a una produzione video completa destinata a campagne
            pubblicitarie o promozionali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo finale dipende dalla durata delle riprese, dal numero
            di location coinvolte, dalle condizioni operative e dalle
            eventuali esigenze di montaggio video o post-produzione.
          </p>

          <p className="leading-8 text-gray-300">
            In alcuni casi possono essere necessarie autorizzazioni o
            valutazioni preliminari dell'area di volo, soprattutto in
            contesti urbani o vicino a infrastrutture particolari.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché scegliere le riprese aeree
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le riprese aeree permettono di raccontare luoghi, eventi e
              attività da una prospettiva completamente diversa rispetto alle
              tradizionali riprese da terra. Questo consente di ottenere
              contenuti più coinvolgenti e professionali.
            </p>

            <p className="leading-8 text-gray-300">
              Negli ultimi anni il drone è diventato uno strumento
              fondamentale per il marketing turistico, immobiliare e
              aziendale grazie all'elevata qualità delle immagini ottenibili.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Utilizzi più richiesti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese matrimoni</li>
              <li>✅ Eventi sportivi</li>
              <li>✅ Video aziendali</li>
              <li>✅ Promozione turistica</li>
              <li>✅ Agenzie immobiliari</li>
              <li>✅ Produzioni video professionali</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come ottenere preventivi da piloti drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta specificando il tipo
            di riprese desiderato, la località e le informazioni utili sul
            progetto. I piloti interessati possono candidarsi e proporti la
            propria disponibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ricevere più candidature permette di confrontare diversi
            professionisti e scegliere quello più adatto alle proprie
            esigenze.
          </p>

          <p className="leading-8 text-gray-300">
            Questo sistema è particolarmente utile per eventi, aziende e
            attività che desiderano valutare più opzioni prima di affidare
            l'incarico.
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
                Crea gratuitamente il tuo account.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica il progetto
              </h3>

              <p className="text-sm leading-6 text-gray-300">
                Inserisci tutte le informazioni utili.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>

              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>

              <p className="text-sm leading-6 text-gray-300">
                Valuta le candidature ricevute.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costano le riprese con drone?
              </h3>

              <p className="text-gray-300">
                Dipende dalla durata del lavoro, dalla località e dal tipo di contenuto richiesto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso ricevere più preventivi?
              </h3>

              <p className="text-gray-300">
                Sì, puoi ricevere candidature da più piloti drone registrati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard effettua direttamente le riprese?
              </h3>

              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone professionisti.
              </p>
            </div>

          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per le tue riprese
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente, pubblica il tuo progetto e ricevi
            candidature da piloti drone interessati a realizzare riprese
            video professionali.
          </p>

          <Link href="/register">
            <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
              Registrati gratis
            </button>
          </Link>
        </div>

      </section>
    </main>
  )
}