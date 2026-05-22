import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Costo ispezione tetto con drone | DroneGuard",
  description:
    "Scopri il costo di un'ispezione del tetto con drone. Richiedi preventivi da piloti drone per controlli, verifiche e documentazione fotografica."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Prezzi ispezioni con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Costo ispezione tetto con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            L'ispezione del tetto con drone rappresenta una soluzione rapida,
            sicura ed efficiente per controllare coperture residenziali,
            industriali e commerciali. Grazie alle immagini aeree ad alta
            definizione è possibile verificare lo stato del tetto senza
            utilizzare ponteggi, piattaforme elevatrici o interventi invasivi.
            Il costo di un'ispezione con drone varia in base alle dimensioni
            della copertura, alla complessità dell'intervento e al tipo di
            documentazione richiesta.
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
              Tetti residenziali
            </h2>

            <p className="text-gray-300">
              Controlli di abitazioni, ville, condomini e coperture private.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Coperture industriali
            </h2>

            <p className="text-gray-300">
              Ispezioni di capannoni, magazzini e strutture produttive.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione tecnica
            </h2>

            <p className="text-gray-300">
              Foto e video utili per manutenzione e verifiche professionali.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché utilizzare un drone per controllare un tetto
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le coperture sono spesso difficili da raggiungere e la loro
            ispezione può richiedere attrezzature costose e tempi elevati.
            Utilizzando un drone è possibile ottenere rapidamente immagini
            dettagliate dell'intera superficie senza mettere a rischio gli
            operatori.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questa tecnologia è particolarmente utile per individuare danni,
            infiltrazioni, tegole danneggiate, problemi strutturali o zone che
            necessitano di manutenzione. Le immagini raccolte consentono una
            valutazione più precisa dello stato della copertura.
          </p>

          <p className="leading-8 text-gray-300">
            Le ispezioni con drone vengono utilizzate sia da privati sia da
            imprese, amministratori di condominio, studi tecnici e aziende che
            gestiscono grandi strutture.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Da cosa dipende il costo dell'ispezione
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il costo di un'ispezione tetto con drone dipende da diversi
              fattori. Tra i principali troviamo la superficie da controllare,
              l'altezza dell'edificio, la complessità della copertura e la
              quantità di materiale richiesto.
            </p>

            <p className="leading-8 text-gray-300">
              Alcuni interventi prevedono semplici fotografie aeree, mentre
              altri possono richiedere video dettagliati, report tecnici o
              controlli specifici per manutenzioni e verifiche professionali.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Controlli più richiesti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Verifica stato copertura</li>
              <li>✅ Controllo infiltrazioni</li>
              <li>✅ Analisi danni da maltempo</li>
              <li>✅ Ispezione tegole e pannelli</li>
              <li>✅ Controlli pre manutenzione</li>
              <li>✅ Documentazione fotografica</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come richiedere un'ispezione con DroneGuard
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta indicando la tipologia
            di edificio, la località e il tipo di controllo richiesto. I
            piloti drone interessati possono candidarsi e proporti la propria
            disponibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ricevere più candidature consente di confrontare professionisti
            diversi e scegliere quello più adatto alle proprie esigenze.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma mette in contatto clienti e piloti drone in tutta
            Italia per controlli, verifiche e documentazione tecnica.
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
                Descrivi il tetto e il controllo richiesto.
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

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa un'ispezione tetto con drone?
              </h3>

              <p className="text-gray-300">
                Il costo varia in base alle dimensioni della copertura e al tipo di documentazione richiesta.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È necessario salire sul tetto?
              </h3>

              <p className="text-gray-300">
                Nella maggior parte dei casi no. Il drone permette di effettuare il controllo da terra.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente le ispezioni?
              </h3>

              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone registrati.
              </p>
            </div>

          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per ispezioni tetti
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente, pubblica la tua richiesta e ricevi
            candidature da piloti drone specializzati in controlli e
            ispezioni di coperture e tetti.
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