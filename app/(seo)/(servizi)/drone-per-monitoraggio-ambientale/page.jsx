import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per monitoraggio ambientale | DroneGuard",
  description:
    "Trova piloti drone per monitoraggio ambientale, controllo del territorio, aree naturali, boschi, parchi e documentazione ambientale."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per monitoraggio ambientale
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per monitoraggio ambientale
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            I droni rappresentano uno strumento sempre più utilizzato per il
            monitoraggio ambientale, il controllo del territorio e la
            documentazione di aree naturali. Attraverso immagini aeree e video
            ad alta definizione è possibile osservare boschi, parchi, fiumi,
            laghi, coste e ampie superfici in modo rapido ed efficiente.
            Attraverso DroneGuard puoi pubblicare una richiesta e ricevere
            candidature da piloti drone interessati a collaborare con enti,
            aziende, professionisti e organizzazioni che operano nel settore
            ambientale.
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
              Monitoraggio territorio
            </h2>
            <p className="leading-7 text-gray-300">
              Controllo e osservazione di ampie aree tramite immagini aeree.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Aree naturali
            </h2>
            <p className="leading-7 text-gray-300">
              Documentazione di parchi, boschi, laghi, coste e zone protette.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione ambientale
            </h2>
            <p className="leading-7 text-gray-300">
              Foto e video professionali per report e archiviazione.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Perché utilizzare un drone per il monitoraggio ambientale
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il monitoraggio dell'ambiente richiede spesso l'osservazione di
            superfici molto estese. Attraverso i droni è possibile acquisire
            immagini aeree dettagliate in tempi ridotti e ottenere una visione
            completa del territorio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese dall'alto consentono di documentare aree difficilmente
            raggiungibili e di raccogliere materiale utile per analisi,
            relazioni e attività di controllo.
          </p>

          <p className="leading-8 text-gray-300">
            Per enti pubblici, aziende e professionisti, i droni rappresentano
            uno strumento efficace per osservare e documentare il territorio in
            modo rapido e professionale.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Controllo del territorio con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini aeree consentono di osservare ampie superfici da una
            prospettiva privilegiata. Questo rende i droni particolarmente utili
            per il controllo del territorio e la documentazione di aree rurali,
            urbane e naturali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Attraverso voli programmati è possibile acquisire immagini
            aggiornate e confrontarle nel tempo per osservare eventuali
            cambiamenti.
          </p>

          <p className="leading-8 text-gray-300">
            Questo tipo di attività viene utilizzato da enti, professionisti e
            organizzazioni che hanno necessità di osservare aree estese senza
            effettuare continui sopralluoghi a terra.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Monitoraggio di boschi e aree naturali
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Boschi, foreste, parchi naturali e aree protette possono essere
            documentati con maggiore facilità grazie all'utilizzo dei droni.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese aeree consentono di ottenere una panoramica completa
            dell'area e creare archivi fotografici aggiornati nel tempo.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini raccolte possono essere utilizzate per report,
            presentazioni, documentazione tecnica e attività informative.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Documentazione ambientale
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le fotografie e i video acquisiti tramite drone possono essere
            utilizzati per documentare aree naturali, corsi d'acqua, coste,
            montagne e altri ambienti di interesse.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo materiale può essere inserito in report, pubblicazioni,
            presentazioni istituzionali e progetti di valorizzazione del
            territorio.
          </p>

          <p className="leading-8 text-gray-300">
            La documentazione visiva rappresenta spesso uno strumento utile per
            comunicare in modo chiaro informazioni legate all'ambiente e al
            territorio.
          </p>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Supporto a enti e professionisti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Enti pubblici, associazioni, aziende e professionisti possono
              utilizzare i droni per raccogliere informazioni visive e
              documentare attività legate alla gestione del territorio.
            </p>

            <p className="leading-8 text-gray-300">
              I contenuti acquisiti possono essere utilizzati sia per finalità
              operative sia per attività informative e divulgative.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Vantaggi delle immagini aeree
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Visione completa del territorio</li>
              <li>✅ Monitoraggio di grandi superfici</li>
              <li>✅ Riduzione dei tempi di osservazione</li>
              <li>✅ Documentazione fotografica professionale</li>
              <li>✅ Supporto a report e studi</li>
              <li>✅ Contenuti per enti e organizzazioni</li>
            </ul>
          </div>
        </div>

        <div className="mb-16 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
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
                2. Pubblica il lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi l'area e il servizio richiesto.
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
                Valuta le proposte ricevute.
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
                Quanto costa un monitoraggio ambientale con drone?
              </h3>
              <p className="leading-7 text-gray-300">
                Il costo varia in base all'area da documentare e alle offerte
                ricevute dai piloti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere controlli periodici?
              </h3>
              <p className="leading-7 text-gray-300">
                Sì, puoi specificare la frequenza direttamente nella richiesta.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente i lavori?
              </h3>
              <p className="leading-7 text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso trovare piloti nella mia zona?
              </h3>
              <p className="leading-7 text-gray-300">
                Sì, puoi indicare la località direttamente nella richiesta.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Cerchi un pilota drone per monitoraggio ambientale?
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e ricevi candidature da
            piloti drone interessati a servizi di monitoraggio ambientale e
            documentazione del territorio.
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