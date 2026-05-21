import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per cantieri | DroneGuard",
  description:
    "Trova piloti drone per monitoraggio cantieri, rilievi aerei, documentazione lavori e controllo avanzamento opere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per edilizia e cantieri
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per cantieri
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            L'utilizzo del drone nei cantieri consente di monitorare
            l'avanzamento dei lavori in modo rapido, sicuro e dettagliato.
            Attraverso foto e video aerei è possibile documentare ogni fase del
            progetto, controllare lo stato delle opere, creare materiale utile
            per relazioni tecniche e condividere aggiornamenti con clienti,
            imprese, progettisti e direzione lavori. Su DroneGuard puoi
            pubblicare una richiesta e ricevere candidature da piloti drone
            interessati a servizi per cantieri edili, infrastrutturali,
            industriali e immobiliari.
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
              Monitoraggio lavori
            </h2>
            <p className="leading-7 text-gray-300">
              Controlla l'evoluzione del cantiere con immagini aggiornate e
              confronti periodici tra le varie fasi operative.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione fotografica
            </h2>
            <p className="leading-7 text-gray-300">
              Ottieni foto e video aerei utili per archiviazione, report,
              presentazioni aziendali e comunicazione con il cliente.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Controllo aree difficili
            </h2>
            <p className="leading-7 text-gray-300">
              Osserva dall'alto zone complesse o difficili da raggiungere,
              riducendo tempi, rischi e sopralluoghi manuali.
            </p>
          </div>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare un drone in cantiere
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In un cantiere edile o infrastrutturale è spesso necessario avere
              una visione chiara dello stato dei lavori. Il drone permette di
              raccogliere immagini dall'alto in tempi ridotti, mostrando
              l'intera area operativa, l'organizzazione degli spazi, le zone di
              accesso, i materiali presenti e l'avanzamento delle opere.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di documentazione è utile per imprese edili,
              geometri, architetti, ingegneri, committenti, agenzie immobiliari
              e aziende che vogliono seguire un progetto in modo più preciso.
              Le immagini aeree possono essere utilizzate per verifiche
              periodiche, confronti temporali, aggiornamenti interni e
              comunicazione professionale.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per cantieri
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Monitoraggio avanzamento lavori</li>
              <li>✅ Foto e video aerei del cantiere</li>
              <li>✅ Documentazione periodica delle opere</li>
              <li>✅ Controllo coperture, strutture e aree operative</li>
              <li>✅ Supporto a imprese, tecnici e committenti</li>
              <li>✅ Materiale visivo per report e presentazioni</li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Monitoraggio cantieri con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il monitoraggio dei cantieri con drone è particolarmente utile
            quando il progetto si sviluppa nel tempo e serve una documentazione
            costante dell'avanzamento. Attraverso voli programmati è possibile
            ottenere immagini confrontabili tra loro, utili per valutare
            progressi, ritardi, modifiche e stato generale dell'area.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese aeree permettono di mostrare il cantiere da prospettive
            difficili da ottenere con fotografie tradizionali. Questo rende più
            semplice comunicare l'evoluzione del progetto anche a persone che
            non sono presenti fisicamente sul posto, come clienti, investitori,
            proprietari o responsabili aziendali.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard puoi cercare piloti drone disponibili per servizi
            occasionali o ricorrenti, in base alle esigenze del tuo progetto.
            Nella richiesta puoi specificare la zona del cantiere, il tipo di
            documentazione desiderata, la frequenza dei rilievi e ogni dettaglio
            utile per ricevere candidature più adatte.
          </p>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Per imprese edili e professionisti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I servizi con drone possono essere richiesti da imprese edili,
              studi tecnici, amministratori, società immobiliari, responsabili
              di progetto e professionisti che hanno bisogno di immagini chiare
              e aggiornate del cantiere.
            </p>

            <p className="leading-8 text-gray-300">
              Che si tratti di un edificio residenziale, un capannone, una
              ristrutturazione, un'infrastruttura o un'area industriale, il
              drone può offrire una panoramica utile per seguire meglio
              l'evoluzione dei lavori.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Foto, video e contenuti professionali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Oltre al controllo tecnico, le riprese con drone possono essere
              utilizzate anche per creare contenuti professionali da inserire in
              presentazioni, portfolio aziendali, comunicazioni commerciali,
              aggiornamenti per il cliente o materiale promozionale.
            </p>

            <p className="leading-8 text-gray-300">
              La documentazione visiva di un cantiere può valorizzare il lavoro
              svolto dall'impresa e mostrare in modo chiaro la qualità
              dell'intervento, l'organizzazione dell'area e l'avanzamento del
              progetto nel tempo.
            </p>
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
                Crea un account come cliente o come pilota drone.
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
                Descrivi il cantiere, la zona e il servizio richiesto.
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

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Crediti per clienti e piloti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Su DroneGuard la registrazione è gratuita. Dopo l'accesso,
              nella sezione crediti, ogni utente può visualizzare la tabella
              dedicata e il pulsante per riscattare i crediti iniziali.
            </p>

            <p className="leading-8 text-gray-300">
              I nuovi piloti possono riscattare 50 crediti gratuiti, mentre i
              nuovi clienti possono riscattare 10 crediti gratuiti. Quando i
              crediti terminano, è possibile acquistarne altri direttamente
              dall'account.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Trova il professionista adatto
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Ogni cantiere può avere esigenze diverse. Alcuni clienti cercano
              semplici foto aeree, altri hanno bisogno di monitoraggi periodici,
              video professionali, riprese per presentazioni o documentazione
              utile per seguire l'evoluzione dei lavori.
            </p>

            <p className="leading-8 text-gray-300">
              Pubblicando una richiesta su DroneGuard puoi spiegare il tipo di
              servizio necessario e ricevere candidature da operatori drone
              interessati, confrontando le proposte in base alle tue necessità.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa un drone per monitorare un cantiere?
              </h3>
              <p className="leading-7 text-gray-300">
                Il costo dipende dalla zona, dalla dimensione del cantiere, dal
                tipo di riprese richieste e dalle offerte dei piloti interessati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente i lavori?
              </h3>
              <p className="leading-7 text-gray-300">
                No. DroneGuard è una piattaforma che mette in contatto clienti e
                piloti drone registrati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere monitoraggi periodici?
              </h3>
              <p className="leading-7 text-gray-300">
                Sì. Nella richiesta puoi indicare se hai bisogno di un servizio
                singolo o di controlli ripetuti nel tempo.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                I piloti ricevono crediti gratuiti?
              </h3>
              <p className="leading-7 text-gray-300">
                Sì. I nuovi piloti possono riscattare 50 crediti gratuiti dalla
                sezione crediti del proprio account.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Anche i clienti hanno crediti gratis?
              </h3>
              <p className="leading-7 text-gray-300">
                Sì. I nuovi clienti possono riscattare 10 crediti gratuiti dopo
                la registrazione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Hai bisogno di un pilota drone per il tuo cantiere?
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica la tua richiesta e ricevi
            candidature da piloti drone interessati a monitoraggio cantieri,
            riprese aeree, documentazione lavori e contenuti professionali.
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