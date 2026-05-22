import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Servizi Drone Professionali | DroneGuard",
  description:
    "Trova servizi drone professionali per riprese aeree, fotografie, ispezioni, termografia, fotogrammetria, edilizia, eventi e aziende."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi professionali con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Servizi Drone Professionali
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Cerchi servizi drone professionali per un progetto aziendale,
            tecnico, immobiliare o promozionale? Con DroneGuard puoi pubblicare
            una richiesta e ricevere candidature da piloti drone interessati.
            Riprese video, fotografie aeree, ispezioni tecniche, termografia,
            fotogrammetria, monitoraggio cantieri, eventi e rilievi sono solo
            alcuni dei servizi che puoi richiedere.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Richiedi un servizio drone
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Riprese aeree</h2>
            <p className="text-gray-300">
              Video e fotografie con drone per aziende, eventi, immobili e turismo.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Servizi tecnici</h2>
            <p className="text-gray-300">
              Ispezioni, controlli, monitoraggi e documentazione tecnica.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Rilievi con drone</h2>
            <p className="text-gray-300">
              Fotogrammetria, ortofoto, mappature e rilievi professionali.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quali servizi drone professionali puoi richiedere
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I droni vengono utilizzati in molti settori perché permettono di
            ottenere immagini, video e dati da prospettive difficili da
            raggiungere con strumenti tradizionali. Un servizio drone
            professionale può essere utile per documentare un immobile,
            controllare una struttura, promuovere un’attività, seguire
            l’avanzamento di un cantiere o realizzare contenuti visivi di forte
            impatto.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard semplifica la ricerca del professionista giusto:
            descrivi il lavoro, indica la zona, aggiungi le informazioni utili
            e ricevi candidature da piloti drone interessati.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni richiesta può essere diversa, per questo la piattaforma lascia
            libertà al cliente di spiegare il progetto e ai piloti di candidarsi
            in base alla propria esperienza.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Settori più richiesti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I servizi con drone sono molto richiesti in edilizia, immobiliare,
              agricoltura, industria, turismo, eventi, infrastrutture e
              monitoraggio ambientale. Ogni settore può utilizzare il drone per
              ridurre tempi, migliorare la documentazione e ottenere una visione
              più completa dell’area di lavoro.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi trovare operatori disponibili per servizi
              creativi, tecnici e professionali in base alle esigenze del tuo
              progetto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi disponibili
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video con drone</li>
              <li>✅ Fotografie aeree professionali</li>
              <li>✅ Ispezioni tetti e facciate</li>
              <li>✅ Controllo pannelli fotovoltaici</li>
              <li>✅ Termografia con drone</li>
              <li>✅ Fotogrammetria e ortofoto</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Eventi, matrimoni e turismo</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Servizi drone per aziende e privati
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le aziende possono usare i droni per controllare aree produttive,
            realizzare video promozionali, monitorare lavori, documentare
            immobili o analizzare strutture. I privati possono invece richiedere
            servizi per eventi, matrimoni, proprietà, terreni o esigenze
            personali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard mette in contatto chi ha bisogno di un servizio con drone
            con piloti interessati a candidarsi. Non devi cercare manualmente
            decine di contatti: pubblichi la richiesta e attendi le candidature.
          </p>

          <p className="leading-8 text-gray-300">
            Questo sistema è utile anche quando non sai ancora quale sia il
            servizio più adatto: descrivendo il progetto, puoi ricevere risposte
            da professionisti che conoscono il settore.
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
                Spiega quale servizio drone ti serve.
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
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costano i servizi drone professionali?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone professionale dipende dal tipo di
            lavoro richiesto, dalla durata, dalla zona, dalla complessità del
            volo e dal materiale finale desiderato. Una ripresa video per un
            evento può avere esigenze diverse rispetto a un’ispezione tecnica,
            a una termografia o a un rilievo fotogrammetrico.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard non c’è un prezzo unico imposto. Il cliente pubblica
            la richiesta e i piloti interessati possono candidarsi. In questo
            modo è possibile confrontare diverse proposte prima di scegliere.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedi servizi drone professionali
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Pubblica gratuitamente il tuo progetto e ricevi candidature da
            piloti drone interessati.
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