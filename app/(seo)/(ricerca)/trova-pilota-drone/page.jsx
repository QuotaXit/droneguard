import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Trova pilota drone | DroneGuard",
  description:
    "Trova piloti drone per riprese aeree, ispezioni, termografia, rilievi topografici, matrimoni, eventi e servizi professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard marketplace droni
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Trova pilota drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Se hai bisogno di trovare un pilota drone per riprese aeree,
            fotografie professionali, ispezioni tecniche, termografia,
            rilievi topografici, monitoraggio cantieri, eventi o matrimoni,
            DroneGuard ti aiuta a pubblicare una richiesta e ricevere
            candidature da operatori drone interessati. La piattaforma nasce
            per mettere in contatto clienti e piloti drone in modo semplice,
            veloce e organizzato, senza dover cercare manualmente decine di
            contatti diversi.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Trova un pilota drone
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Riprese video professionali
            </h2>
            <p className="text-gray-300">
              Trova piloti drone per video aziendali, eventi, turismo,
              immobili, matrimoni e contenuti promozionali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ispezioni e controlli tecnici
            </h2>
            <p className="text-gray-300">
              Richiedi operatori drone per tetti, facciate, fotovoltaico,
              impianti industriali e strutture difficili da raggiungere.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Rilievi e fotogrammetria
            </h2>
            <p className="text-gray-300">
              Pubblica richieste per rilievi topografici, mappature,
              fotogrammetria, ortofoto e modelli 3D.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per il tuo progetto
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Cercare un pilota drone può diventare complicato quando non si sa
            a chi rivolgersi, quali servizi richiedere o quali competenze
            servono per il proprio progetto. Un lavoro semplice, come alcune
            riprese aeree per un immobile, richiede esigenze diverse rispetto
            a un'ispezione tecnica di una copertura industriale o a un rilievo
            fotogrammetrico.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi descrivere il servizio di cui hai bisogno e
            lasciare che siano i piloti interessati a candidarsi. In questo
            modo puoi ricevere proposte mirate e valutare più professionisti
            prima di scegliere quello più adatto.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma è pensata per privati, aziende, studi tecnici,
            imprese edili, agenzie immobiliari, organizzatori di eventi,
            installatori, manutentori e professionisti che cercano servizi
            drone in Italia.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Servizi che puoi richiedere
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Su DroneGuard puoi pubblicare richieste per molti tipi di
              servizi con drone. Alcuni clienti cercano video emozionali per
              eventi o matrimoni, altri hanno bisogno di controlli tecnici,
              ispezioni, documentazione fotografica o rilievi professionali.
            </p>

            <p className="leading-8 text-gray-300">
              Ogni richiesta può essere descritta in modo chiaro indicando
              località, obiettivo del lavoro, periodo desiderato e dettagli
              utili per aiutare i piloti a valutare la candidatura.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi disponibili
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese aeree</li>
              <li>✅ Fotografie con drone</li>
              <li>✅ Termografia</li>
              <li>✅ Ispezione tetti e facciate</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Fotogrammetria e rilievi topografici</li>
              <li>✅ Eventi e matrimoni</li>
              <li>✅ Fotovoltaico e impianti industriali</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché utilizzare DroneGuard
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard semplifica la ricerca di un pilota drone perché
            permette al cliente di pubblicare una richiesta e ricevere
            candidature direttamente dalla piattaforma. Invece di contattare
            singoli professionisti uno alla volta, puoi spiegare il lavoro una
            sola volta e attendere le proposte dei piloti interessati.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo sistema è utile soprattutto quando non conosci già un
            operatore nella tua zona o quando vuoi confrontare più candidature
            prima di decidere. Ogni progetto può avere esigenze differenti:
            località, tipo di drone, esperienza, disponibilità, attrezzatura e
            tempi di consegna possono cambiare molto da un servizio all'altro.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non esegue direttamente i lavori, ma mette in contatto
            clienti e piloti drone registrati, offrendo uno spazio dedicato
            alla pubblicazione delle richieste e alla candidatura dei
            professionisti.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Come trovare il professionista giusto
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Per trovare il pilota drone più adatto è importante descrivere
              bene il lavoro. Una richiesta completa aiuta i professionisti a
              capire meglio il progetto e a candidarsi in modo più preciso.
            </p>

            <p className="leading-8 text-gray-300">
              Indica sempre città, tipo di servizio, obiettivo finale, periodo
              indicativo e qualsiasi informazione utile sulla location o sulla
              struttura da riprendere o ispezionare.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa inserire nella richiesta
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Località del lavoro</li>
              <li>✅ Tipo di servizio richiesto</li>
              <li>✅ Data o periodo indicativo</li>
              <li>✅ Obiettivo del progetto</li>
              <li>✅ Eventuali dettagli tecnici</li>
              <li>✅ Materiale desiderato: foto, video o report</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Piloti drone per aziende e privati
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I servizi drone possono essere utili sia per clienti privati sia
            per aziende. Un privato può cercare un pilota drone per un
            matrimonio, una festa, una proprietà immobiliare o un sopralluogo.
            Un'azienda può invece aver bisogno di riprese promozionali,
            monitoraggio cantieri, ispezioni tecniche, fotogrammetria o
            documentazione professionale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche studi tecnici, architetti, geometri, amministratori di
            condominio e installatori possono utilizzare il drone per ottenere
            immagini e dati utili alla propria attività.
          </p>

          <p className="leading-8 text-gray-300">
            Qualunque sia il progetto, DroneGuard ti permette di pubblicare una
            richiesta e ricevere candidature da piloti interessati al lavoro.
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
                Crea gratuitamente il tuo account come cliente o pilota.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica il lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il servizio drone di cui hai bisogno.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi al tuo annuncio.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Valuta le candidature ricevute e scegli il professionista.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Come posso trovare un pilota drone?
              </h3>
              <p className="text-gray-300">
                Puoi registrarti su DroneGuard, pubblicare una richiesta e
                ricevere candidature da piloti drone interessati al tuo
                progetto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente i lavori?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard è una piattaforma che mette in contatto clienti
                e piloti drone registrati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso cercare piloti per servizi tecnici?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare richieste per ispezioni, termografia,
                fotogrammetria, rilievi, monitoraggio cantieri e altri servizi
                professionali.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                La registrazione è gratuita?
              </h3>
              <p className="text-gray-300">
                Sì, la registrazione è gratuita. I nuovi clienti ricevono 10
                crediti gratuiti e i nuovi piloti ricevono 50 crediti gratuiti.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone vicino a te
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard, pubblica la tua richiesta
            e ricevi candidature da piloti drone interessati a realizzare il
            tuo progetto.
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