import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Lavoro pilota drone | DroneGuard",
  description:
    "Scopri come trovare lavoro come pilota drone. Trova opportunità, clienti e collaborazioni attraverso DroneGuard."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per piloti drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Lavoro pilota drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Sempre più aziende, privati, enti pubblici e professionisti cercano
            servizi con drone per fotografie aeree, video, edilizia,
            agricoltura, ispezioni, monitoraggio cantieri e molte altre
            attività. Per un pilota drone trovare clienti può rappresentare una
            delle sfide principali. Attraverso DroneGuard è possibile entrare
            in contatto con persone che pubblicano richieste di lavoro e cercano
            operatori drone per svolgere servizi professionali in tutta Italia.
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
              Trova clienti
            </h2>
            <p className="leading-7 text-gray-300">
              Ricevi opportunità pubblicate da aziende e privati.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Amplia il portfolio
            </h2>
            <p className="leading-7 text-gray-300">
              Candidati a lavori in diversi settori professionali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Lavora in tutta Italia
            </h2>
            <p className="leading-7 text-gray-300">
              Trova opportunità nella tua città o in altre zone.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Come trovare lavoro come pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Molti piloti drone iniziano la propria attività dopo aver ottenuto
            l'attestato necessario per operare. Tuttavia, possedere un drone e
            una certificazione non basta: è fondamentale riuscire a trovare
            clienti e progetti reali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le opportunità possono arrivare da privati, imprese edili,
            agenzie immobiliari, aziende agricole, organizzatori di eventi,
            studi tecnici e molte altre realtà che necessitano di servizi con
            drone.
          </p>

          <p className="leading-8 text-gray-300">
            Avere accesso a richieste pubblicate da clienti può aiutare il
            pilota a trovare nuove collaborazioni e ampliare la propria rete
            professionale.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Settori con maggiore richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I servizi con drone vengono richiesti in numerosi settori. Tra i
            più comuni troviamo edilizia, monitoraggio cantieri, fotografia
            immobiliare, eventi, turismo, agricoltura, fotovoltaico,
            infrastrutture e ispezioni tecniche.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un pilota drone che sviluppa competenze in più ambiti può aumentare
            le possibilità di ricevere candidature e richieste di lavoro.
          </p>

          <p className="leading-8 text-gray-300">
            Molti professionisti iniziano con servizi fotografici e video per
            poi espandersi verso attività più specializzate.
          </p>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Vantaggi per i piloti
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Accesso a richieste pubblicate dai clienti</li>
              <li>✅ Possibilità di candidarsi ai lavori</li>
              <li>✅ Opportunità in diversi settori</li>
              <li>✅ Maggiore visibilità professionale</li>
              <li>✅ Possibilità di ampliare il portfolio</li>
              <li>✅ Collaborazioni in tutta Italia</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Chi può iscriversi
            </h2>

            <p className="leading-8 text-gray-300">
              Possono registrarsi piloti drone freelance, professionisti,
              operatori specializzati, videomaker e aziende che offrono servizi
              con drone.
            </p>
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
                Crea gratuitamente il tuo profilo pilota.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">2. Completa il profilo</h3>
              <p className="text-sm leading-6 text-gray-300">
                Inserisci informazioni e servizi offerti.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">3. Cerca lavori</h3>
              <p className="text-sm leading-6 text-gray-300">
                Visualizza le richieste pubblicate dai clienti.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">4. Candidati</h3>
              <p className="text-sm leading-6 text-gray-300">
                Invia la tua candidatura ai lavori interessanti.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È possibile trovare clienti come pilota drone?
              </h3>
              <p className="leading-7 text-gray-300">
                Sì, molti clienti pubblicano richieste di lavoro per servizi con drone.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto si guadagna come pilota drone?
              </h3>
              <p className="leading-7 text-gray-300">
                I compensi dipendono dal tipo di servizio, dall'esperienza e dal mercato di riferimento.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso lavorare in più settori?
              </h3>
              <p className="leading-7 text-gray-300">
                Sì, molti piloti operano in edilizia, eventi, agricoltura, turismo e altri ambiti.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Vuoi trovare lavoro come pilota drone?
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e scopri le opportunità
            pubblicate da clienti che cercano professionisti del settore drone.
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