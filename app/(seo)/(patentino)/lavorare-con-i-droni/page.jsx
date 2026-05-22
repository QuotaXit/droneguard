import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Lavorare con i Droni | DroneGuard",
  description:
    "Scopri come lavorare con i droni, quali opportunità offre il settore e come trovare nuovi clienti come pilota drone professionista."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Carriera professionale con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Lavorare con i Droni
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Lavorare con i droni è diventata una possibilità concreta per molte
            persone. Oggi i droni vengono utilizzati in edilizia, agricoltura,
            fotovoltaico, immobiliare, turismo, eventi, industria e monitoraggio
            ambientale. La crescita del settore ha creato nuove opportunità per
            piloti drone, operatori specializzati e professionisti che vogliono
            offrire servizi innovativi.
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
            È possibile lavorare con i droni?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Negli ultimi anni il mercato dei droni professionali è cresciuto
            rapidamente. Sempre più aziende utilizzano immagini aeree, rilievi,
            ispezioni e monitoraggi per migliorare efficienza e raccolta dati.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo ha creato nuove opportunità per chi desidera trasformare la
            propria passione per il volo in un'attività professionale. Molti
            piloti lavorano come liberi professionisti, mentre altri collaborano
            con aziende, studi tecnici e società specializzate.
          </p>

          <p className="leading-8 text-gray-300">
            Le possibilità di crescita dipendono dalle competenze acquisite,
            dalla specializzazione scelta e dalla capacità di trovare clienti.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Formazione
            </h2>

            <p className="text-gray-300">
              Acquisire competenze tecniche e operative.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Specializzazione
            </h2>

            <p className="text-gray-300">
              Scegliere uno o più settori professionali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Clienti
            </h2>

            <p className="text-gray-300">
              Costruire una rete di contatti e opportunità.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Settori dove lavorano i piloti drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I droni vengono impiegati in moltissimi ambiti professionali.
              Alcuni piloti si occupano principalmente di riprese video e foto
              aeree, mentre altri operano in settori più tecnici.
            </p>

            <p className="leading-8 text-gray-300">
              La possibilità di specializzarsi permette di costruire una carriera
              in base alle proprie competenze e interessi.
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
              <li>✅ Fotovoltaico e infrastrutture</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come trovare clienti nel settore drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Uno degli aspetti più importanti per chi vuole lavorare con i droni
            è trovare clienti. Molti professionisti utilizzano social network,
            sito web personale, portfolio online e campagne pubblicitarie per
            promuovere i propri servizi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un'altra soluzione consiste nell'utilizzare piattaforme specializzate
            che permettono ai piloti di entrare in contatto con clienti che
            stanno già cercando un servizio drone.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard è stato creato proprio per facilitare questo incontro tra
            domanda e offerta.
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
                Invia candidature ai clienti.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Inizia a lavorare con i droni
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e scopri nuove opportunità
            professionali nel settore drone.
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