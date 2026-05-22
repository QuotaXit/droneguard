import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per agricoltura | DroneGuard",
  description:
    "Trova piloti drone per agricoltura, monitoraggio colture, rilievi agricoli, documentazione terreni e servizi professionali con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per agricoltura
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per agricoltura
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            L'utilizzo dei droni in agricoltura consente di osservare terreni,
            coltivazioni e aree agricole da una prospettiva privilegiata.
            Attraverso immagini aeree e rilievi dettagliati è possibile
            documentare lo stato delle colture, monitorare grandi superfici e
            raccogliere informazioni utili per supportare le attività agricole.
            Su DroneGuard puoi pubblicare una richiesta e ricevere candidature
            da piloti drone interessati a collaborare con aziende agricole,
            agronomi, consorzi e professionisti del settore.
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
              Monitoraggio colture
            </h2>
            <p className="leading-7 text-gray-300">
              Osserva dall'alto coltivazioni e terreni agricoli con immagini
              aggiornate e panoramiche dettagliate.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Rilievi agricoli
            </h2>
            <p className="leading-7 text-gray-300">
              Acquisisci fotografie aeree e documentazione utile per la gestione
              e l'analisi delle superfici agricole.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione terreni
            </h2>
            <p className="leading-7 text-gray-300">
              Ottieni immagini professionali di campi, vigneti, oliveti e aree
              agricole di ogni dimensione.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Perché usare un drone in agricoltura
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Negli ultimi anni i droni hanno assunto un ruolo sempre più
            importante nel settore agricolo. Grazie alla possibilità di
            sorvolare ampie superfici in tempi ridotti, rappresentano uno
            strumento utile per osservare e documentare terreni, colture e aree
            rurali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini aeree consentono una visuale completa che spesso non è
            possibile ottenere da terra. Questo permette di valutare meglio lo
            stato generale delle coltivazioni e monitorare grandi appezzamenti.
          </p>

          <p className="leading-8 text-gray-300">
            Le fotografie e i video acquisiti possono inoltre essere utilizzati
            per relazioni, documentazione aziendale, presentazioni commerciali e
            archivio storico delle attività agricole.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Monitoraggio delle colture
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il monitoraggio delle colture è uno degli utilizzi più diffusi dei
            droni nel settore agricolo. Attraverso voli programmati è possibile
            ottenere una panoramica completa dell'area coltivata e documentarne
            l'evoluzione nel tempo.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini raccolte possono essere confrontate periodicamente per
            seguire la crescita delle coltivazioni e osservare eventuali
            variazioni all'interno dei terreni.
          </p>

          <p className="leading-8 text-gray-300">
            Questo tipo di documentazione è particolarmente utile per aziende
            agricole che gestiscono superfici estese o colture distribuite su
            più appezzamenti.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Rilievi e mappatura dei terreni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I droni vengono utilizzati anche per acquisire immagini aeree di
            terreni agricoli, vigneti, uliveti, serre e altre aree produttive.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Grazie alle moderne tecnologie di rilievo è possibile raccogliere
            una grande quantità di dati in tempi ridotti rispetto ai metodi
            tradizionali.
          </p>

          <p className="leading-8 text-gray-300">
            Le informazioni raccolte possono essere utilizzate come supporto a
            valutazioni tecniche, gestione aziendale e pianificazione delle
            attività agricole.
          </p>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Supporto alle aziende agricole
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Aziende agricole, agronomi e professionisti del settore possono
              utilizzare i droni per ottenere una visione più completa delle
              aree coltivate e documentare le attività svolte.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini aeree rappresentano uno strumento utile sia per la
              gestione operativa sia per la presentazione dei risultati ai
              clienti o ai partner commerciali.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Vantaggi dell'agricoltura di precisione
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Monitoraggio di grandi superfici</li>
              <li>✅ Documentazione delle colture</li>
              <li>✅ Immagini aeree professionali</li>
              <li>✅ Supporto alle decisioni operative</li>
              <li>✅ Controllo periodico dei terreni</li>
              <li>✅ Raccolta dati rapida ed efficiente</li>
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
                Descrivi il servizio agricolo richiesto.
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
                Valuta le candidature ricevute.
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
                Quanto costa un servizio drone agricolo?
              </h3>
              <p className="leading-7 text-gray-300">
                Il costo dipende dalla superficie da monitorare e dalle offerte
                ricevute dai piloti drone.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere rilievi periodici?
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
                Posso cercare piloti nella mia zona?
              </h3>
              <p className="leading-7 text-gray-300">
                Sì, puoi pubblicare la richiesta indicando la località del
                terreno o dell'azienda agricola.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Cerchi un pilota drone per agricoltura?
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e pubblica la tua richiesta.
            Ricevi candidature da piloti drone interessati a servizi agricoli,
            monitoraggio colture e rilievi professionali.
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