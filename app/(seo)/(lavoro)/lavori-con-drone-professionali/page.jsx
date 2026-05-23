import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Lavori con Drone Professionali | DroneGuard",
  description:
    "Scopri quali lavori professionali si possono fare con un drone e come usare DroneGuard per trovare nuove richieste dai clienti."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Professione drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Lavori con Drone Professionali
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            I lavori con drone professionali sono sempre più richiesti da
            aziende, privati, tecnici, agenzie immobiliari, imprese edili,
            attività turistiche e organizzatori di eventi. Il drone permette di
            realizzare immagini aeree, video, fotografie, ispezioni, rilievi e
            controlli in modo rapido, moderno e sicuro. Con DroneGuard puoi
            creare il tuo profilo pilota e candidarti alle richieste pubblicate
            dai clienti che cercano servizi professionali con drone.
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
            Quali sono i lavori professionali con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un drone può essere utilizzato in molti ambiti diversi. Nel settore
            creativo viene scelto per riprese video, fotografie aeree, contenuti
            promozionali, matrimoni, eventi, strutture turistiche, hotel,
            agriturismi, stabilimenti balneari e attività commerciali. In questi
            casi il valore del servizio è legato alla qualità delle immagini e
            alla capacità di raccontare un luogo, un evento o un'attività da un
            punto di vista più coinvolgente.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nel settore tecnico, invece, il drone è utile per ispezionare tetti,
            facciate, capannoni, pannelli fotovoltaici, cantieri, terreni e
            strutture difficili da raggiungere. Il cliente cerca spesso un modo
            più veloce e sicuro per ottenere immagini, documentazione o
            informazioni visive senza dover usare ponteggi, scale o interventi
            più complessi.
          </p>

          <p className="leading-8 text-gray-300">
            Per questo motivo i lavori con drone professionali possono essere
            molto diversi tra loro, ma hanno un elemento comune: aiutano il
            cliente a risolvere un problema o a ottenere un risultato concreto.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Riprese e foto
            </h2>
            <p className="text-gray-300">
              Video aerei, fotografie professionali, eventi, immobili e contenuti
              promozionali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ispezioni tecniche
            </h2>
            <p className="text-gray-300">
              Controllo visivo di tetti, facciate, impianti, cantieri e
              strutture in quota.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Rilievi e monitoraggi
            </h2>
            <p className="text-gray-300">
              Supporto per edilizia, agricoltura, terreni, aree operative e
              documentazione tecnica.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché i clienti cercano piloti drone professionali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Molti clienti cercano un pilota drone perché vogliono ottenere un
              risultato migliore rispetto a foto o video tradizionali. Un video
              con drone può valorizzare un immobile, raccontare un matrimonio,
              mostrare una location turistica o promuovere un'attività in modo
              più moderno. Le riprese dall'alto attirano l'attenzione e aiutano
              a comunicare meglio spazi, dimensioni e contesto.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Altri clienti, invece, hanno una necessità pratica. Devono
              controllare una copertura, verificare lo stato di una facciata,
              osservare un impianto fotovoltaico, monitorare un cantiere o
              documentare una zona difficile da raggiungere. In questi casi il
              drone permette di ridurre tempi, costi e rischi rispetto ad altri
              metodi di controllo.
            </p>

            <p className="leading-8 text-gray-300">
              Un pilota professionale deve quindi saper ascoltare la richiesta,
              proporre il servizio più adatto e comunicare con chiarezza cosa
              può realizzare.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Esempi di lavori con drone
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Video promozionali per aziende</li>
              <li>✅ Riprese drone per matrimoni</li>
              <li>✅ Foto aeree per immobili</li>
              <li>✅ Ispezione tetti e coperture</li>
              <li>✅ Controllo facciate e condomini</li>
              <li>✅ Monitoraggio cantieri edili</li>
              <li>✅ Ispezione pannelli fotovoltaici</li>
              <li>✅ Rilievi di terreni e aree operative</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come trovare lavori professionali con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per trovare lavori con drone è importante essere visibili nel posto
            giusto. Molti piloti pubblicano contenuti sui social, creano un sito
            personale o contattano direttamente aziende locali. Sono strategie
            utili, ma spesso richiedono molto tempo e non sempre portano a
            richieste concrete.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard offre un approccio diverso: permette ai clienti di
            pubblicare una richiesta e ai piloti di candidarsi quando il lavoro
            è in linea con le proprie competenze. In questo modo il pilota non
            deve soltanto cercare clienti a freddo, ma può rispondere a persone
            che hanno già manifestato un bisogno.
          </p>

          <p className="leading-8 text-gray-300">
            Una buona candidatura deve essere semplice, educata e specifica. Il
            cliente deve capire subito che hai letto la richiesta e che puoi
            offrire una soluzione adatta al lavoro da svolgere.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard per i piloti
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                1. Registrazione
              </h3>
              <p className="text-sm text-gray-300">
                Crea gratuitamente il tuo account come pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Profilo
              </h3>
              <p className="text-sm text-gray-300">
                Inserisci servizi, città, esperienza e informazioni utili.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Richieste
              </h3>
              <p className="text-sm text-gray-300">
                Consulta i lavori pubblicati dai clienti sulla piattaforma.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Candidatura
              </h3>
              <p className="text-sm text-gray-300">
                Invia una proposta chiara e professionale al cliente.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come presentarsi per ottenere più lavori
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nei lavori con drone professionali la fiducia è fondamentale. Il
            cliente vuole sapere che il pilota è serio, disponibile e capace di
            gestire il lavoro in modo ordinato. Per questo è utile creare un
            profilo completo, spiegare bene i servizi offerti e indicare con
            chiarezza la zona in cui si lavora.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il modo in cui rispondi alle richieste è importante. Evita
            messaggi troppo brevi o generici. Spiega cosa puoi fare, quali
            informazioni ti servono e come organizzeresti il servizio. Un
            cliente che riceve una risposta chiara sarà più propenso a prenderti
            in considerazione.
          </p>

          <p className="leading-8 text-gray-300">
            Con il tempo, ogni lavoro completato può aiutarti a costruire
            esperienza, migliorare la reputazione e ricevere nuove richieste.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova lavori professionali con drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, crea il tuo profilo pilota e candidati
            alle richieste pubblicate dai clienti che cercano servizi con drone.
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