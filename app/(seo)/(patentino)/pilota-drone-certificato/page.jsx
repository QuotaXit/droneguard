import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Certificato | DroneGuard",
  description:
    "Trova un pilota drone certificato per riprese aeree, ispezioni, termografia, fotogrammetria, eventi e servizi professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Professionisti drone qualificati
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Pilota Drone Certificato
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Cerchi un pilota drone certificato per un servizio professionale?
            Con DroneGuard puoi pubblicare una richiesta e ricevere candidature
            da piloti drone interessati. Riprese video, fotografie aeree,
            ispezioni tecniche, monitoraggio cantieri, termografia,
            fotogrammetria e rilievi professionali sono tra i servizi più
            richiesti sulla piattaforma.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Trova un pilota certificato
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Servizi professionali
            </h2>

            <p className="text-gray-300">
              Riprese aeree, fotografie e documentazione professionale.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ispezioni tecniche
            </h2>

            <p className="text-gray-300">
              Controlli su edifici, coperture, impianti e infrastrutture.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Rilievi e monitoraggi
            </h2>

            <p className="text-gray-300">
              Fotogrammetria, ortofoto e monitoraggio del territorio.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Chi è un pilota drone certificato
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un pilota drone certificato è un professionista che ha acquisito
            formazione e competenze necessarie per operare con droni in diversi
            contesti. Oggi i droni vengono utilizzati in numerosi settori e la
            richiesta di professionisti qualificati continua a crescere.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Aziende, studi tecnici, agenzie immobiliari, enti pubblici e
            privati utilizzano i droni per raccogliere immagini, video e dati
            utili per promozione, documentazione e analisi.
          </p>

          <p className="leading-8 text-gray-300">
            Per questo motivo trovare il professionista giusto è importante per
            ottenere un servizio adeguato alle proprie esigenze.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Servizi svolti dai piloti drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I piloti drone possono operare in diversi ambiti professionali.
              Alcuni sono specializzati nella produzione video e nella fotografia
              aerea, altri in attività tecniche come rilievi, ispezioni e
              termografia.
            </p>

            <p className="leading-8 text-gray-300">
              Grazie alla versatilità dei droni è possibile svolgere attività
              molto diverse tra loro e supportare aziende e privati in numerosi
              progetti.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi più richiesti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video professionali</li>
              <li>✅ Fotografia aerea</li>
              <li>✅ Ispezioni tecniche</li>
              <li>✅ Termografia</li>
              <li>✅ Fotogrammetria</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Controllo fotovoltaico</li>
              <li>✅ Eventi e matrimoni</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come trovare un pilota drone certificato
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Trovare il professionista giusto può richiedere tempo. Molti clienti
            cercano piloti drone nella propria zona per lavori specifici ma non
            sempre conoscono operatori disponibili.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta dettagliata indicando
            località, tipologia di servizio e obiettivi del progetto. I piloti
            interessati possono candidarsi direttamente.
          </p>

          <p className="leading-8 text-gray-300">
            Questo sistema permette di confrontare diverse candidature prima di
            scegliere il professionista più adatto.
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
              <p className="text-sm text-gray-300">
                Crea gratuitamente il tuo account.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica il lavoro
              </h3>
              <p className="text-sm text-gray-300">
                Descrivi il servizio richiesto.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>
              <p className="text-sm text-gray-300">
                I piloti interessati possono candidarsi.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il professionista
              </h3>
              <p className="text-sm text-gray-300">
                Valuta le candidature ricevute.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone certificato
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Pubblica gratuitamente il tuo progetto e ricevi candidature da
            piloti drone interessati al lavoro richiesto.
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