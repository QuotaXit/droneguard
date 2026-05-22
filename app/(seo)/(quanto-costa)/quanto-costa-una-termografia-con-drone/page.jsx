import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Quanto costa una termografia con drone | DroneGuard",
  description:
    "Scopri quanto costa una termografia con drone per fotovoltaico, edilizia, coperture, impianti e controlli professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Prezzi termografia con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Quanto costa una termografia con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            La termografia con drone è una tecnologia utilizzata per individuare
            anomalie termiche, dispersioni di calore, problemi agli impianti,
            difetti nei pannelli fotovoltaici e criticità strutturali. Grazie
            all'utilizzo di termocamere installate sui droni è possibile
            analizzare rapidamente superfici estese senza la necessità di
            ponteggi, piattaforme elevatrici o interventi invasivi. Il costo di
            una termografia con drone varia in base al tipo di struttura,
            all'estensione dell'area da analizzare e agli obiettivi del rilievo.
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
              Impianti fotovoltaici
            </h2>

            <p className="text-gray-300">
              Individuazione di pannelli difettosi e anomalie termiche.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Edifici e coperture
            </h2>

            <p className="text-gray-300">
              Analisi di dispersioni energetiche e problemi strutturali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Impianti industriali
            </h2>

            <p className="text-gray-300">
              Controlli tecnici e manutenzione preventiva.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            A cosa serve una termografia con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            La termografia aerea consente di rilevare differenze di temperatura
            invisibili a occhio nudo. Attraverso immagini termiche è possibile
            individuare rapidamente anomalie che potrebbero indicare problemi
            tecnici, guasti o dispersioni energetiche.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questa tecnologia viene utilizzata in numerosi settori tra cui
            edilizia, energia, manutenzione industriale, agricoltura e
            gestione delle infrastrutture. Grazie al drone è possibile
            raggiungere zone difficilmente accessibili riducendo tempi e costi
            operativi.
          </p>

          <p className="leading-8 text-gray-300">
            I dati raccolti possono essere utilizzati per valutazioni tecniche,
            manutenzioni preventive e monitoraggi periodici di impianti e
            strutture.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Da cosa dipende il costo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il costo di una termografia con drone dipende principalmente
              dall'estensione dell'area da analizzare, dalla complessità
              dell'intervento e dal tipo di report richiesto. Un piccolo
              impianto fotovoltaico richiede generalmente attività differenti
              rispetto a una copertura industriale o a un grande parco solare.
            </p>

            <p className="leading-8 text-gray-300">
              Anche la necessità di elaborazioni tecniche, report dettagliati e
              documentazione professionale può influenzare il preventivo finale.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Applicazioni più richieste
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Termografia fotovoltaica</li>
              <li>✅ Controllo coperture</li>
              <li>✅ Analisi dispersioni termiche</li>
              <li>✅ Ispezioni industriali</li>
              <li>✅ Monitoraggio impianti</li>
              <li>✅ Verifiche energetiche</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come richiedere una termografia professionale
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Attraverso DroneGuard puoi pubblicare una richiesta indicando il
            tipo di impianto o struttura da analizzare. I piloti drone
            interessati possono candidarsi e proporti la propria disponibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ricevere più candidature ti permette di confrontare professionisti
            differenti e valutare l'offerta più adatta alle tue esigenze.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma è utilizzata da privati, aziende, installatori,
            manutentori e professionisti che necessitano di controlli
            termografici eseguiti con drone.
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
                Descrivi la struttura da analizzare.
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
                Quanto costa una termografia con drone?
              </h3>

              <p className="text-gray-300">
                Dipende dalla superficie da analizzare, dal tipo di impianto e dalla documentazione richiesta.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                La termografia è utile per il fotovoltaico?
              </h3>

              <p className="text-gray-300">
                Sì, è uno dei metodi più utilizzati per individuare anomalie nei pannelli solari.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente le termografie?
              </h3>

              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone registrati.
              </p>
            </div>

          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per termografia
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente, pubblica la tua richiesta e ricevi
            candidature da piloti drone specializzati in termografia e
            ispezioni tecniche.
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