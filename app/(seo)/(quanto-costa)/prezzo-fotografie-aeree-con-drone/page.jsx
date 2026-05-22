import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Prezzo fotografie aeree con drone | DroneGuard",
  description:
    "Scopri il prezzo delle fotografie aeree con drone per immobili, eventi, aziende, turismo, cantieri e attività professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Prezzi fotografia aerea
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Prezzo fotografie aeree con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Le fotografie aeree con drone sono una soluzione efficace per
            valorizzare immobili, eventi, strutture turistiche, aziende,
            cantieri e attività commerciali. Grazie al drone è possibile
            ottenere immagini professionali da prospettive elevate, utili per
            promozione, documentazione, marketing e presentazioni. Il prezzo
            delle fotografie aeree può variare in base al tipo di servizio,
            alla quantità di scatti richiesti, alla località e alla complessità
            dell'intervento.
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
              Fotografie immobiliari
            </h2>
            <p className="text-gray-300">
              Scatti aerei per ville, terreni, attività ricettive e proprietà.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Eventi e cerimonie
            </h2>
            <p className="text-gray-300">
              Immagini dall'alto per matrimoni, feste, eventi sportivi e manifestazioni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Aziende e turismo
            </h2>
            <p className="text-gray-300">
              Foto professionali per hotel, resort, agriturismi e attività commerciali.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Da cosa dipende il prezzo delle fotografie aeree
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il prezzo di un servizio fotografico con drone non è uguale per
            tutti i progetti. Una sessione fotografica per un piccolo immobile
            può richiedere tempi e organizzazione diversi rispetto a un lavoro
            per una struttura turistica, un cantiere o una grande area aziendale.
            Per questo motivo è importante descrivere con precisione il tipo di
            servizio richiesto.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Tra i fattori principali che incidono sul costo ci sono la durata
            dell'intervento, il numero di foto richieste, la distanza del luogo,
            la difficoltà dell'area di volo e l'eventuale necessità di editing
            o consegna di immagini ottimizzate per sito web, social network,
            annunci immobiliari o materiali pubblicitari.
          </p>

          <p className="leading-8 text-gray-300">
            Anche la qualità dell'attrezzatura utilizzata può influenzare il
            preventivo. Alcuni lavori richiedono droni con fotocamere ad alta
            risoluzione, capacità di scatto avanzate e maggiore stabilità per
            ottenere immagini nitide e professionali.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per fotografie professionali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le fotografie aeree permettono di mostrare spazi, edifici e
              paesaggi da un punto di vista più completo rispetto alle immagini
              tradizionali. Questo è particolarmente utile quando si vuole
              comunicare il valore di una proprietà, presentare un'attività o
              documentare un evento in modo più coinvolgente.
            </p>

            <p className="leading-8 text-gray-300">
              Nel settore immobiliare, turistico e aziendale, le immagini
              realizzate con drone possono migliorare la percezione del
              progetto e rendere più efficace la comunicazione visiva.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi fotografici disponibili
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Fotografie immobiliari</li>
              <li>✅ Foto per eventi e matrimoni</li>
              <li>✅ Scatti per hotel e resort</li>
              <li>✅ Foto per cantieri</li>
              <li>✅ Immagini per aziende</li>
              <li>✅ Fotografie per promozione turistica</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come richiedere un servizio fotografico con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta indicando la località,
            il tipo di fotografia desiderata, il numero indicativo di scatti e
            l'obiettivo del servizio. I piloti drone interessati possono
            candidarsi e proporti la propria disponibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo ti consente di confrontare più professionisti prima di
            scegliere quello più adatto al tuo progetto. Puoi valutare
            esperienza, disponibilità, tipologia di servizio e modalità di
            consegna del materiale fotografico.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma è pensata per semplificare il contatto tra clienti e
            piloti drone, evitando ricerche lunghe e permettendo di ricevere
            candidature mirate in base alla richiesta pubblicata.
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
                2. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il servizio fotografico.
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
                4. Scegli il professionista
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
                Quanto costano le fotografie aeree con drone?
              </h3>
              <p className="text-gray-300">
                Il prezzo dipende dal numero di scatti, dalla località, dalla durata del lavoro e dal tipo di utilizzo delle immagini.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere foto per un immobile?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta per ville, appartamenti, terreni, strutture ricettive e immobili commerciali.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente le fotografie?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone registrati sulla piattaforma.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per fotografie aeree
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente, pubblica la tua richiesta e ricevi
            candidature da piloti drone interessati a realizzare fotografie
            aeree professionali per il tuo progetto.
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