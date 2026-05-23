import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Offerte Lavoro Pilota Drone | DroneGuard",
  description:
    "Trova offerte di lavoro per pilota drone, scopri come candidarti a progetti professionali e usa DroneGuard per ricevere nuove opportunità nel settore droni."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Lavoro pilota drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Offerte Lavoro Pilota Drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Le offerte di lavoro per pilota drone sono sempre più richieste da
            aziende, privati, agenzie immobiliari, studi tecnici, imprese edili,
            organizzatori di eventi e professionisti che hanno bisogno di
            immagini aeree, ispezioni, rilievi o video professionali. Il drone è
            diventato uno strumento utile in moltissimi settori e, per questo,
            chi possiede competenze reali può trasformare la propria esperienza
            in nuove opportunità lavorative.
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
            Dove trovare offerte di lavoro per pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Uno dei problemi principali per molti piloti drone non è solo saper
            volare, ma trovare clienti interessati ai propri servizi. Spesso un
            pilota ha l'attrezzatura, il patentino, esperienza sul campo e una
            buona qualità di ripresa, ma non sa dove trovare richieste concrete.
            Le offerte possono arrivare da passaparola, social network, agenzie
            locali o contatti diretti, ma non sempre questi canali portano
            risultati costanti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard nasce proprio per semplificare questo passaggio: i
            clienti pubblicano una richiesta e i piloti interessati possono
            candidarsi. In questo modo il pilota non deve cercare continuamente
            persone interessate, ma può consultare richieste già pubblicate e
            scegliere quelle più adatte alla propria zona, alle proprie
            competenze e alla propria disponibilità.
          </p>

          <p className="leading-8 text-gray-300">
            Questo approccio è utile sia per chi lavora già nel settore, sia per
            chi sta iniziando e vuole costruire un portfolio con progetti reali.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Clienti reali
            </h2>

            <p className="text-gray-300">
              Le richieste arrivano da persone e aziende che cercano un servizio
              drone concreto.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Zone diverse
            </h2>

            <p className="text-gray-300">
              Puoi trovare opportunità in base alla tua città o alle aree in cui
              sei disponibile a lavorare.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Più settori
            </h2>

            <p className="text-gray-300">
              Eventi, edilizia, immobili, ispezioni, agricoltura, rilievi e
              riprese promozionali.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quali lavori può svolgere un pilota drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le offerte di lavoro per pilota drone possono essere molto diverse
              tra loro. Alcuni clienti cercano video aerei per eventi,
              matrimoni, strutture ricettive o attività commerciali. Altri hanno
              bisogno di fotografie aeree per immobili, terreni o promozioni
              aziendali. Nel settore tecnico, invece, il drone viene usato per
              ispezionare tetti, facciate, impianti fotovoltaici, cantieri,
              coperture industriali e infrastrutture.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Ci sono poi richieste più specialistiche, come fotogrammetria,
              rilievi topografici, termografia, agricoltura di precisione e
              monitoraggio periodico di aree o lavori. Ogni pilota può
              specializzarsi nei servizi che conosce meglio e candidarsi solo ai
              progetti compatibili con le proprie competenze.
            </p>

            <p className="leading-8 text-gray-300">
              Per questo motivo è importante avere un profilo chiaro, descrivere
              bene i servizi offerti e indicare l'attrezzatura disponibile.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Esempi di offerte drone
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video per eventi e matrimoni</li>
              <li>✅ Foto aeree per immobili e strutture turistiche</li>
              <li>✅ Ispezione tetti, facciate e coperture</li>
              <li>✅ Monitoraggio cantieri edili</li>
              <li>✅ Rilievi e fotogrammetria con drone</li>
              <li>✅ Termografia e impianti fotovoltaici</li>
              <li>✅ Video promozionali per aziende</li>
              <li>✅ Agricoltura di precisione</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come candidarsi alle offerte di lavoro con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Quando un cliente pubblica una richiesta, il pilota può valutare il
            tipo di lavoro, la zona, le informazioni disponibili e decidere se
            candidarsi. Una candidatura efficace dovrebbe essere chiara,
            professionale e specifica. Non basta scrivere un messaggio generico:
            è meglio spiegare quale esperienza si ha, che tipo di drone si
            utilizza, quali risultati si possono ottenere e perché si è adatti a
            quel progetto.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il prezzo può variare in base al lavoro richiesto. Una breve
            ripresa aerea per un evento non ha lo stesso valore di un'ispezione
            tecnica complessa o di un rilievo con elaborazione dati. Su
            DroneGuard ogni pilota può proporsi in base alla propria esperienza
            e il cliente può valutare le candidature ricevute.
          </p>

          <p className="leading-8 text-gray-300">
            Questo rende il marketplace utile perché mette in contatto domanda e
            offerta senza obbligare il pilota a inseguire continuamente nuovi
            clienti.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard per trovare lavoro
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                1. Registrati
              </h3>
              <p className="text-sm text-gray-300">
                Crea il tuo account pilota su DroneGuard.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Completa il profilo
              </h3>
              <p className="text-sm text-gray-300">
                Inserisci città, servizi, esperienza e attrezzatura.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Guarda le richieste
              </h3>
              <p className="text-sm text-gray-300">
                Consulta i lavori pubblicati dai clienti.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Candidati
              </h3>
              <p className="text-sm text-gray-300">
                Invia la tua proposta ai progetti più interessanti.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché usare una piattaforma per piloti drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Una piattaforma dedicata ai servizi drone aiuta a rendere più
            ordinato il rapporto tra clienti e piloti. Il cliente può spiegare
            cosa gli serve, mentre il pilota può valutare se il lavoro è adatto
            alle proprie competenze. Questo riduce perdite di tempo e permette a
            entrambe le parti di partire da una richiesta più chiara.
          </p>

          <p className="leading-8 text-gray-300">
            Per un pilota drone, essere presente su DroneGuard significa avere
            un canale in più per ricevere opportunità, costruire relazioni
            professionali e aumentare la visibilità nel mercato dei droni.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova nuove offerte di lavoro come pilota drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard, completa il tuo profilo e
            inizia a candidarti alle richieste pubblicate dai clienti.
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