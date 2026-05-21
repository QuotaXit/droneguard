import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Agricoltura di precisione con drone | DroneGuard",
  description:
    "Trova piloti drone per agricoltura di precisione, monitoraggio colture, rilievi multispettrali e analisi dei terreni."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per aziende agricole
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Agricoltura di precisione con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            L'agricoltura di precisione con drone permette di monitorare colture,
            terreni e appezzamenti agricoli in modo rapido, dettagliato e
            organizzato. Attraverso immagini aeree, rilievi multispettrali e
            dati raccolti dall'alto, aziende agricole, agronomi e tecnici del
            settore possono ottenere informazioni utili per valutare lo stato
            delle coltivazioni, individuare stress vegetativo, problemi di
            irrigazione, differenze di crescita e possibili aree critiche.
            Su DroneGuard puoi pubblicare una richiesta e ricevere candidature
            da piloti drone interessati al servizio.
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
              Controlla lo stato delle coltivazioni e individua zone che
              potrebbero richiedere interventi mirati.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Rilievi multispettrali
            </h2>
            <p className="leading-7 text-gray-300">
              Ottieni dati utili per analizzare vigore vegetativo, sviluppo
              delle colture e differenze tra aree del campo.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Analisi dei terreni
            </h2>
            <p className="leading-7 text-gray-300">
              Raccogli informazioni dall'alto per supportare valutazioni
              tecniche, pianificazione agricola e gestione delle risorse.
            </p>
          </div>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare un drone in agricoltura
            </h2>
            <p className="mb-5 leading-8 text-gray-300">
              Il drone consente di osservare grandi superfici agricole in tempi
              ridotti, riducendo la necessità di controlli manuali lunghi e
              complessi. Le riprese aeree permettono di avere una visione
              generale del campo e di notare differenze che da terra possono
              risultare difficili da individuare.
            </p>
            <p className="leading-8 text-gray-300">
              Questo tipo di servizio può essere utile per vigneti, uliveti,
              frutteti, campi seminativi, serre, aziende agricole estese e
              terreni che richiedono controlli periodici. Le informazioni
              raccolte possono aiutare il cliente a prendere decisioni più
              consapevoli su irrigazione, trattamenti, manutenzione e gestione
              delle colture.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi agricoli richiesti
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>✅ Monitoraggio dello stato delle colture</li>
              <li>✅ Riprese aeree di terreni agricoli</li>
              <li>✅ Rilievi multispettrali con drone</li>
              <li>✅ Controllo irrigazione e aree critiche</li>
              <li>✅ Supporto ad agronomi e aziende agricole</li>
              <li>✅ Documentazione fotografica e video</li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Trova piloti drone per agricoltura di precisione
          </h2>
          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard non esegue direttamente i lavori, ma mette in contatto
            clienti e piloti drone. Questo significa che un'azienda agricola,
            un agronomo o un professionista del settore può pubblicare una
            richiesta descrivendo il tipo di servizio necessario, la zona
            dell'intervento e le informazioni più importanti.
          </p>
          <p className="mb-5 leading-8 text-gray-300">
            I piloti drone registrati possono visualizzare le opportunità
            disponibili e candidarsi quando il lavoro è compatibile con le loro
            competenze, la loro attrezzatura e la zona operativa. Il cliente può
            così confrontare le candidature ricevute e scegliere il
            professionista più adatto.
          </p>
          <p className="leading-8 text-gray-300">
            Questo sistema è utile perché permette di ricevere proposte diverse,
            valutare disponibilità e competenze e trovare operatori specializzati
            in servizi agricoli con drone, rilievi tecnici, monitoraggi e
            acquisizione di immagini ad alta definizione.
          </p>
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
                Il cliente descrive il servizio agricolo di cui ha bisogno.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi al lavoro.
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
              nella sezione crediti, gli utenti trovano una tabella dedicata
              con il pulsante per riscattare i crediti iniziali.
            </p>
            <p className="leading-8 text-gray-300">
              I nuovi piloti possono riscattare 50 crediti gratuiti, mentre i
              nuovi clienti possono riscattare 10 crediti gratuiti. Una volta
              terminati, è possibile acquistare nuovi crediti direttamente dal
              proprio account.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Ideale per aziende agricole e tecnici
            </h2>
            <p className="mb-5 leading-8 text-gray-300">
              I servizi con drone possono essere richiesti da aziende agricole,
              agronomi, cooperative, proprietari di terreni, tecnici e
              professionisti che hanno bisogno di immagini, video o dati raccolti
              dall'alto.
            </p>
            <p className="leading-8 text-gray-300">
              Che si tratti di controllare un vigneto, monitorare un campo,
              valutare zone difficili da raggiungere o documentare lo stato di
              un terreno, DroneGuard aiuta a trovare operatori drone disponibili
              per il servizio richiesto.
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
                Quanto costa un servizio drone per agricoltura?
              </h3>
              <p className="leading-7 text-gray-300">
                Il costo dipende dalla zona, dalla dimensione del terreno, dal
                tipo di rilievo richiesto e dalle offerte dei piloti interessati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente i rilievi agricoli?
              </h3>
              <p className="leading-7 text-gray-300">
                No. DroneGuard è una piattaforma che mette in contatto clienti e
                piloti drone registrati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere rilievi multispettrali?
              </h3>
              <p className="leading-7 text-gray-300">
                Sì, puoi indicare nella richiesta che hai bisogno di rilievi
                multispettrali o servizi specifici per agricoltura di precisione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                I piloti ricevono crediti gratis?
              </h3>
              <p className="leading-7 text-gray-300">
                Sì. I nuovi piloti possono riscattare 50 crediti gratuiti dalla
                sezione crediti del proprio account.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Anche i clienti ricevono crediti?
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
            Hai bisogno di un pilota drone per l'agricoltura?
          </h2>
          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica la tua richiesta e ricevi
            candidature da piloti drone interessati a servizi agricoli,
            monitoraggio colture, rilievi multispettrali e analisi dei terreni.
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