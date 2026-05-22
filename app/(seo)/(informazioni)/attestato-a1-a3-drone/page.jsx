import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Attestato A1 A3 Drone | DroneGuard",
  description:
    "Scopri cos'è l'attestato A1 A3 drone, a cosa serve e come iniziare a lavorare nel settore dei droni professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Attestati pilota drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Attestato A1 A3 Drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            L'attestato A1 A3 drone è uno dei primi passaggi per chi vuole
            iniziare a utilizzare i droni in modo consapevole e professionale.
            La formazione aiuta a comprendere normativa, sicurezza, responsabilità
            del pilota e regole operative.
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
            <h2 className="mb-3 text-xl font-semibold">Formazione</h2>
            <p className="text-gray-300">
              Conoscere le basi per pilotare droni in sicurezza.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Normativa</h2>
            <p className="text-gray-300">
              Comprendere regole, limiti e responsabilità operative.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Opportunità</h2>
            <p className="text-gray-300">
              Iniziare un percorso nel settore dei droni professionali.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cos'è l'attestato A1 A3 drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            L'attestato A1 A3 è spesso il primo certificato che molti piloti
            conseguono per avvicinarsi al mondo dei droni. Permette di acquisire
            conoscenze fondamentali sulle operazioni, sulla sicurezza e sulle
            responsabilità legate all'utilizzo di un drone.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per chi vuole lavorare con i droni, conoscere la normativa è
            essenziale. La formazione permette di capire come gestire il volo,
            quali attenzioni avere e come muoversi in modo più professionale.
          </p>

          <p className="leading-8 text-gray-300">
            Prima di svolgere attività professionali è sempre consigliabile
            verificare i requisiti aggiornati presso fonti ufficiali e seguire
            percorsi formativi adeguati.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché è utile per iniziare
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              L'attestato A1 A3 può rappresentare il primo passo per chi vuole
              trasformare l'utilizzo del drone in un'attività professionale.
              Dopo aver acquisito le basi, molti piloti scelgono di proseguire
              con ulteriori competenze e specializzazioni.
            </p>

            <p className="leading-8 text-gray-300">
              Riprese video, fotografie aeree, ispezioni, fotogrammetria,
              termografia e monitoraggi sono alcuni dei settori in cui un
              pilota drone può lavorare.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Settori professionali
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video con drone</li>
              <li>✅ Fotografia aerea</li>
              <li>✅ Ispezioni tecniche</li>
              <li>✅ Termografia</li>
              <li>✅ Fotogrammetria</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Agricoltura di precisione</li>
              <li>✅ Eventi e matrimoni</li>
            </ul>
          </div>
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