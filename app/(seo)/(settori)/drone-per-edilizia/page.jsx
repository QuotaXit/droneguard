import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per edilizia | DroneGuard",
  description:
    "Trova piloti drone per edilizia, cantieri, monitoraggi, ispezioni e rilievi professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per edilizia
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per edilizia
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            I droni stanno diventando uno strumento sempre più utile nel settore
            edilizio, perché permettono di effettuare rilievi, ispezioni,
            monitoraggi e riprese aeree in modo rapido, sicuro e professionale.
            Attraverso DroneGuard puoi trovare piloti drone per cantieri,
            imprese edili, studi tecnici, geometri, architetti, ingegneri e
            professionisti che hanno bisogno di immagini aeree, video,
            documentazione fotografica o controlli dettagliati di strutture,
            tetti, facciate e coperture. Pubblica la tua richiesta e ricevi
            candidature da operatori drone interessati al lavoro.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Registrati gratis
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Rilievi e monitoraggi
            </h2>
            <p className="leading-7 text-gray-300">
              Documentazione fotografica e video dall'alto per seguire
              l'avanzamento dei lavori, controllare cantieri e aggiornare
              clienti o tecnici.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ispezioni strutturali
            </h2>
            <p className="leading-7 text-gray-300">
              Controllo di tetti, facciate, coperture industriali, ponteggi,
              edifici e aree difficili da raggiungere con metodi tradizionali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video professionali
            </h2>
            <p className="leading-7 text-gray-300">
              Riprese aeree utili per presentazioni aziendali, documentazione
              tecnica, portfolio lavori, comunicazione e promozione immobiliare.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare un drone in edilizia
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Nel settore edilizio è spesso necessario controllare aree estese,
              edifici in quota o punti difficili da raggiungere. Il drone
              consente di ottenere una visuale completa dell'area di intervento
              senza dover ricorrere subito a ponteggi, piattaforme elevatrici o
              sopralluoghi complessi.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini raccolte possono aiutare imprese e professionisti a
              valutare lo stato di un immobile, documentare l'evoluzione di un
              cantiere, controllare coperture e facciate o creare materiale
              visivo da condividere con clienti, collaboratori e tecnici.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi richiesti in edilizia
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Monitoraggio cantieri con drone</li>
              <li>✅ Ispezione tetti e coperture</li>
              <li>✅ Ispezione facciate e strutture</li>
              <li>✅ Rilievi fotografici e video aerei</li>
              <li>✅ Documentazione lavori e avanzamento opere</li>
              <li>✅ Riprese per immobili, imprese e studi tecnici</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova piloti drone per cantieri, rilievi e ispezioni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard è una piattaforma che mette in contatto clienti e piloti
            drone. Non esegue direttamente i lavori, ma permette a chi ha bisogno
            di un servizio di pubblicare una richiesta e ricevere candidature da
            operatori interessati.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Se devi monitorare un cantiere, ispezionare una copertura,
            controllare una facciata, realizzare fotografie aeree o ottenere
            video professionali per un progetto edilizio, puoi descrivere il
            lavoro richiesto e attendere le proposte dei piloti disponibili.
          </p>

          <p className="leading-8 text-gray-300">
            Questo sistema permette di confrontare più candidature, valutare le
            offerte ricevute e scegliere il professionista più adatto in base
            alla zona, al tipo di intervento e alle esigenze del progetto.
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
                Crea il tuo account come cliente o come pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Riscatta i crediti
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti possono riscattare 50 crediti gratis, i clienti 10.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Pubblica il lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il servizio edilizio di cui hai bisogno.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi al tuo annuncio.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Crediti gratuiti per iniziare
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Su DroneGuard la registrazione è gratuita. Dopo l'accesso,
              nella sezione crediti, gli utenti trovano una tabella dedicata
              con il pulsante per riscattare i crediti iniziali.
            </p>

            <p className="leading-8 text-gray-300">
              I nuovi piloti possono riscattare 50 crediti gratuiti, mentre i
              nuovi clienti possono riscattare 10 crediti gratuiti. Quando i
              crediti terminano, è possibile acquistarne altri direttamente dal
              proprio account.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Per imprese edili e studi tecnici
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              La pagina è pensata per imprese edili, studi tecnici, geometri,
              architetti, ingegneri, amministratori, agenzie immobiliari e
              professionisti che cercano un operatore drone.
            </p>

            <p className="leading-8 text-gray-300">
              Che si tratti di un cantiere, di un edificio da ispezionare o di
              materiale visivo da realizzare, DroneGuard aiuta a trovare piloti
              drone disponibili per il servizio richiesto.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa un servizio drone per edilizia?
              </h3>
              <p className="leading-7 text-gray-300">
                Il costo dipende dalla zona, dal tipo di lavoro, dalla durata
                del servizio e dalle offerte dei piloti interessati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere ispezioni di tetti e facciate?
              </h3>
              <p className="leading-7 text-gray-300">
                Sì, puoi pubblicare richieste per ispezioni di tetti, facciate,
                coperture industriali, edifici e strutture difficili da
                raggiungere.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente i lavori?
              </h3>
              <p className="leading-7 text-gray-300">
                No. DroneGuard è un marketplace che mette in contatto clienti e
                piloti drone registrati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                I piloti e i clienti ricevono crediti gratis?
              </h3>
              <p className="leading-7 text-gray-300">
                Sì. I nuovi piloti possono riscattare 50 crediti gratuiti e i
                nuovi clienti possono riscattare 10 crediti gratuiti.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per edilizia
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica la tua richiesta e ricevi
            candidature da piloti drone interessati a rilievi, monitoraggi,
            ispezioni, riprese aeree e servizi professionali per edilizia.
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