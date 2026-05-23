import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Come Trovare Lavoro con Drone | DroneGuard",
  description:
    "Scopri come trovare lavoro con drone, quali servizi proporre e come usare DroneGuard per candidarti a richieste reali pubblicate dai clienti."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Opportunità con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Come Trovare Lavoro con Drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Trovare lavoro con drone è possibile, ma non basta possedere un
            drone e saperlo pilotare. Il mercato richiede professionalità,
            chiarezza, capacità di proporre servizi utili e un modo efficace per
            entrare in contatto con clienti interessati. Aziende, privati,
            tecnici, agenzie immobiliari, imprese edili e organizzatori di
            eventi cercano sempre più spesso piloti drone per riprese, foto,
            ispezioni, rilievi e monitoraggi.
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
            Da dove iniziare per lavorare con un drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il primo passo è capire quale tipo di servizio si vuole offrire. Un
            pilota drone può lavorare in molti settori diversi, ma ogni settore
            richiede competenze, attrezzature e approccio differenti. Chi vuole
            fare video per eventi dovrà puntare sulla qualità visiva, sulla
            composizione delle immagini e sulla capacità di raccontare un
            momento. Chi invece vuole lavorare nelle ispezioni o nei rilievi
            dovrà concentrarsi su precisione, sicurezza, documentazione e
            affidabilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per iniziare è utile creare un profilo professionale, preparare
            alcuni esempi dei propri lavori e spiegare in modo semplice quali
            servizi si possono offrire. Molti clienti non conoscono i dettagli
            tecnici del mondo drone: cercano qualcuno che sappia ascoltare la
            richiesta, proporre una soluzione e realizzare il lavoro in modo
            chiaro.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard aiuta proprio in questa fase, perché permette ai piloti
            di essere presenti in una piattaforma dedicata e candidarsi alle
            richieste pubblicate dai clienti.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Scegli il settore
            </h2>

            <p className="text-gray-300">
              Riprese, immobili, edilizia, agricoltura, ispezioni, eventi o
              rilievi tecnici.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Crea un profilo chiaro
            </h2>

            <p className="text-gray-300">
              Presenta competenze, zona di lavoro, attrezzatura e servizi
              disponibili.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Candidati ai lavori
            </h2>

            <p className="text-gray-300">
              Rispondi alle richieste più adatte alla tua esperienza e alla tua
              disponibilità.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quali servizi drone sono più richiesti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I servizi più richiesti cambiano in base alla zona e al tipo di
              clientela. In molte città sono molto cercate le riprese video per
              eventi, matrimoni, strutture ricettive, attività commerciali e
              immobili. In altri casi la domanda arriva da imprese edili, studi
              tecnici, amministratori di condominio o aziende che hanno bisogno
              di controllare tetti, facciate, impianti fotovoltaici, cantieri o
              aree difficili da raggiungere.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Anche rilievi topografici, fotogrammetria e termografia possono
              offrire buone opportunità, soprattutto per piloti che hanno
              acquisito competenze più tecniche. La cosa importante è non
              presentarsi in modo generico, ma spiegare chiaramente cosa si sa
              fare e quali problemi si possono risolvere per il cliente.
            </p>

            <p className="leading-8 text-gray-300">
              Un pilota che comunica bene il proprio valore ha più possibilità
              di ricevere contatti e trasformare una richiesta in un lavoro.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Settori dove trovare lavoro
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese aeree per eventi</li>
              <li>✅ Video matrimonio con drone</li>
              <li>✅ Foto immobiliari e turistiche</li>
              <li>✅ Ispezione tetti e facciate</li>
              <li>✅ Controllo impianti fotovoltaici</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Rilievi topografici</li>
              <li>✅ Fotogrammetria e mappature</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come trovare clienti per servizi drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Molti piloti provano a trovare clienti pubblicando contenuti sui
            social, creando un sito personale o contattando direttamente aziende
            locali. Sono strategie utili, ma richiedono tempo e costanza. Il
            problema è che spesso il pilota deve cercare persone che forse non
            hanno ancora un bisogno preciso.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Con una piattaforma come DroneGuard, invece, il pilota può
            intercettare richieste già pubblicate. Questo significa che il
            cliente ha già manifestato un interesse e sta cercando qualcuno per
            svolgere un lavoro. Per chi vuole trovare lavoro con drone, questo è
            un vantaggio importante perché riduce il tempo perso in contatti
            casuali e aumenta la possibilità di parlare con persone realmente
            interessate.
          </p>

          <p className="leading-8 text-gray-300">
            Naturalmente è sempre importante presentarsi bene: una candidatura
            chiara, educata e professionale può fare la differenza rispetto a un
            messaggio frettoloso o troppo generico.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard per chi cerca lavoro
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                1. Crea l'account
              </h3>
              <p className="text-sm text-gray-300">
                Registrati come pilota drone sulla piattaforma.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Completa il profilo
              </h3>
              <p className="text-sm text-gray-300">
                Inserisci città, servizi, esperienza e informazioni utili.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Valuta le richieste
              </h3>
              <p className="text-sm text-gray-300">
                Guarda i lavori pubblicati dai clienti e scegli quelli adatti.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Invia candidatura
              </h3>
              <p className="text-sm text-gray-300">
                Proponiti al cliente con un messaggio professionale.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Consigli per aumentare le possibilità di lavorare
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per trovare lavoro con drone è utile curare ogni dettaglio. Il
            profilo deve essere completo, la descrizione deve spiegare cosa sai
            fare e le candidature devono essere personalizzate. Quando rispondi
            a una richiesta, cerca di far capire al cliente che hai letto bene il
            progetto e che puoi aiutarlo davvero.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile anche specializzarsi. Un pilota che comunica di fare
            qualsiasi cosa rischia di sembrare poco chiaro. Invece, indicare due
            o tre servizi principali può rendere il profilo più forte:
            fotografia aerea, ispezioni tecniche, eventi, fotogrammetria o
            monitoraggio cantieri.
          </p>

          <p className="leading-8 text-gray-300">
            Con il tempo, ogni lavoro può diventare un'opportunità per creare
            fiducia, migliorare il portfolio e ricevere nuove richieste.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Inizia a trovare lavoro con il tuo drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard, crea il tuo profilo pilota e
            candidati alle richieste pubblicate dai clienti.
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