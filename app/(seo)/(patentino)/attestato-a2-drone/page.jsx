import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Attestato A2 Drone | DroneGuard",
  description:
    "Scopri cos'è l'attestato A2 drone, a cosa serve e come trovare nuove opportunità professionali nel settore dei droni."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Attestati e lavoro drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Attestato A2 Drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            L'attestato A2 drone è un passaggio importante per molti piloti che
            vogliono ampliare le proprie competenze e avvicinarsi al lavoro
            professionale con i droni. Conoscere normativa, sicurezza e gestione
            delle operazioni aiuta a operare in modo più consapevole.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Registrati come pilota
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Formazione avanzata</h2>
            <p className="text-gray-300">
              Sviluppa competenze utili per operazioni più professionali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Sicurezza</h2>
            <p className="text-gray-300">
              Impara a pianificare e gestire meglio le attività con drone.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Opportunità</h2>
            <p className="text-gray-300">
              Accedi a nuovi settori e richieste professionali.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cos'è l'attestato A2 drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            L'attestato A2 drone è spesso scelto da chi vuole approfondire la
            propria preparazione e operare con maggiore consapevolezza. È una
            certificazione collegata alla formazione del pilota e alla gestione
            delle operazioni in determinati scenari.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per chi desidera lavorare con i droni, la formazione è fondamentale.
            Conoscere le regole, i limiti operativi e le responsabilità permette
            di offrire servizi più seri e professionali.
          </p>

          <p className="leading-8 text-gray-300">
            Prima di svolgere lavori professionali è sempre consigliabile
            verificare i requisiti aggiornati presso fonti ufficiali e seguire
            percorsi formativi adeguati.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché può essere utile ai piloti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Avere una preparazione più completa può aiutare il pilota drone a
              presentarsi meglio ai clienti e ad affrontare lavori più
              strutturati. Le aziende cercano spesso professionisti affidabili,
              capaci di pianificare correttamente il servizio richiesto.
            </p>

            <p className="leading-8 text-gray-300">
              Riprese video, ispezioni tecniche, fotogrammetria, termografia,
              monitoraggio cantieri e rilievi sono settori in cui competenza ed
              esperienza possono fare la differenza.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Settori professionali
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video professionali</li>
              <li>✅ Fotografia aerea</li>
              <li>✅ Ispezioni tecniche</li>
              <li>✅ Termografia</li>
              <li>✅ Fotogrammetria</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Fotovoltaico e infrastrutture</li>
              <li>✅ Eventi e immobili</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come trovare lavoro dopo l'attestato A2
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Dopo aver ottenuto formazione ed esperienza, molti piloti cercano
            nuovi clienti attraverso portfolio, sito web personale, social
            network, passaparola e piattaforme dedicate.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard permette ai piloti di candidarsi ai lavori pubblicati dai
            clienti, creando un collegamento diretto tra chi cerca servizi con
            drone e chi può offrirli.
          </p>

          <p className="leading-8 text-gray-300">
            Un profilo completo con città, servizi offerti e attrezzatura
            disponibile può aiutare il pilota a presentarsi meglio.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard per i piloti
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">1. Registrati</h3>
              <p className="text-sm text-gray-300">
                Crea gratuitamente il tuo profilo pilota.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">2. Completa il profilo</h3>
              <p className="text-sm text-gray-300">
                Inserisci competenze, città e servizi offerti.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">3. Cerca lavori</h3>
              <p className="text-sm text-gray-300">
                Visualizza le richieste pubblicate dai clienti.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">4. Candidati</h3>
              <p className="text-sm text-gray-300">
                Rispondi agli annunci più adatti al tuo profilo.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova opportunità come pilota drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e candidati ai lavori
            pubblicati dai clienti.
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