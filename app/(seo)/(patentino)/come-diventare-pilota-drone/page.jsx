import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Come Diventare Pilota Drone | DroneGuard",
  description:
    "Scopri come diventare pilota drone, ottenere gli attestati necessari e iniziare a lavorare nel settore dei droni professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Guida per aspiranti piloti drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Come Diventare Pilota Drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Diventare pilota drone è un obiettivo sempre più diffuso grazie
            alla crescita dei servizi professionali con droni. Riprese video,
            fotografie aeree, ispezioni tecniche, termografia, agricoltura di
            precisione e rilievi topografici sono solo alcuni dei settori in
            cui i droni vengono utilizzati ogni giorno.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Registrati come pilota
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Chi è un pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un pilota drone è una persona che utilizza un drone per effettuare
            operazioni di volo. Alcuni piloti utilizzano il drone per hobby,
            mentre altri lavorano nel settore professionale offrendo servizi a
            privati, aziende, enti pubblici e professionisti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Oggi i droni vengono impiegati in numerosi ambiti come edilizia,
            immobiliare, agricoltura, turismo, eventi, industria e monitoraggio
            ambientale.
          </p>

          <p className="leading-8 text-gray-300">
            Per svolgere determinate attività è necessario conoscere la
            normativa e ottenere gli attestati richiesti.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Formazione
            </h2>

            <p className="text-gray-300">
              Impara normativa, sicurezza e gestione delle operazioni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Esperienza pratica
            </h2>

            <p className="text-gray-300">
              Acquisisci esperienza di volo in diversi scenari operativi.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Lavoro professionale
            </h2>

            <p className="text-gray-300">
              Offri servizi drone a clienti e aziende.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quali attestati servono
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Gli attestati più conosciuti sono A1/A3 e A2. Il percorso varia in
            base al tipo di operazioni che si intendono svolgere e alle
            caratteristiche dei droni utilizzati.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Prima di iniziare è sempre consigliabile informarsi sulla normativa
            vigente e verificare quali requisiti siano necessari per le proprie
            attività.
          </p>

          <p className="leading-8 text-gray-300">
            Una buona formazione rappresenta la base per lavorare in modo più
            professionale e consapevole.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Settori in cui lavorano i piloti drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I piloti drone professionisti possono specializzarsi in diversi
              ambiti. Alcuni si concentrano sulle riprese video e sulla
              fotografia aerea, altri sulle ispezioni tecniche, la
              fotogrammetria o l'agricoltura di precisione.
            </p>

            <p className="leading-8 text-gray-300">
              La scelta dipende dalle competenze personali, dall'attrezzatura
              utilizzata e dal mercato di riferimento.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Settori principali
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video professionali</li>
              <li>✅ Fotografia aerea</li>
              <li>✅ Ispezioni tecniche</li>
              <li>✅ Termografia</li>
              <li>✅ Fotogrammetria</li>
              <li>✅ Agricoltura di precisione</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Eventi e matrimoni</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come trovare clienti come pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Una delle sfide principali per chi inizia è trovare clienti.
            Molti piloti utilizzano siti web, social network, pubblicità e
            marketplace per promuovere i propri servizi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard permette ai piloti di candidarsi alle richieste
            pubblicate dai clienti, creando un punto di incontro tra domanda e
            offerta nel settore drone.
          </p>

          <p className="leading-8 text-gray-300">
            Questo consente ai professionisti di aumentare la visibilità e
            trovare nuove opportunità di lavoro.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard per i piloti
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                1. Registrati
              </h3>
              <p className="text-sm text-gray-300">
                Crea gratuitamente il profilo pilota.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Completa il profilo
              </h3>
              <p className="text-sm text-gray-300">
                Inserisci competenze e attrezzature.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Cerca lavori
              </h3>
              <p className="text-sm text-gray-300">
                Visualizza le richieste pubblicate.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Candidati
              </h3>
              <p className="text-sm text-gray-300">
                Invia la tua candidatura ai clienti.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Inizia il tuo percorso come pilota drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e scopri nuove opportunità
            nel settore dei servizi professionali con drone.
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