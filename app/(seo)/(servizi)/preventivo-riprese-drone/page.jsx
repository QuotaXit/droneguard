import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo riprese drone | DroneGuard",
  description:
    "Richiedi preventivi per riprese aeree con drone. Trova piloti drone per eventi, immobili, aziende, cantieri, turismo e video professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per riprese aeree
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Preventivo riprese drone
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    Cerchi un professionista per realizzare riprese aeree con drone? Su
    DroneGuard puoi pubblicare una richiesta e ricevere candidature da piloti
    drone interessati al tuo progetto. Le riprese con drone sono ideali per
    eventi, immobili, aziende, cantieri, turismo, marketing, social media e
    produzioni video professionali. Ogni pilota può proporre la propria
    disponibilità e il cliente può valutare esperienza, attrezzatura,
    tipologia di servizio e preventivo ricevuto.
  </p>

  <div className="mt-8">
    <Link href="/register">
      <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
        Richiedi un preventivo
      </button>
    </Link>
  </div>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Riprese professionali
    </h2>
    <p className="text-gray-300">
      Trova piloti drone per video aerei, fotografie dall'alto e contenuti
      visivi di qualità.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Più candidature
    </h2>
    <p className="text-gray-300">
      Pubblica una richiesta e ricevi proposte da operatori interessati al tuo
      progetto.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Preventivo su misura
    </h2>
    <p className="text-gray-300">
      Confronta offerte, disponibilità, attrezzature e servizi inclusi prima
      di scegliere.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Richiedere un preventivo per riprese con drone
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Il costo di una ripresa con drone può variare in base al tipo di lavoro,
    alla durata dell'intervento, alla località, alla complessità delle riprese
    e al materiale richiesto. Un video per un immobile, ad esempio, può avere
    esigenze diverse rispetto a un evento, un cantiere, una struttura
    turistica o una produzione aziendale.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Su DroneGuard puoi descrivere il progetto in modo semplice, indicando cosa
    vuoi riprendere, dove si trova il luogo dell'intervento, quando vorresti
    effettuare il lavoro e che tipo di risultato ti serve.
  </p>

  <p className="leading-8 text-gray-300">
    I piloti interessati possono candidarsi e proporti una soluzione in base
    alla propria esperienza, disponibilità e attrezzatura. In questo modo puoi
    ricevere più preventivi e scegliere il professionista più adatto.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Per quali lavori puoi richiedere un preventivo
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le riprese aeree con drone possono essere utilizzate in molti settori:
      video promozionali, eventi privati, matrimoni, immobili, strutture
      ricettive, aziende, cantieri, manifestazioni, sport, turismo e contenuti
      per social media.
    </p>

    <p className="leading-8 text-gray-300">
      Ogni progetto può richiedere un approccio diverso. Per questo è utile
      pubblicare una richiesta dettagliata, così i piloti possono capire meglio
      il lavoro e proporti un preventivo più adatto.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi più richiesti
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese video aeree</li>
      <li>✅ Fotografie con drone</li>
      <li>✅ Video per immobili</li>
      <li>✅ Riprese per eventi e matrimoni</li>
      <li>✅ Video aziendali</li>
      <li>✅ Contenuti per turismo e hotel</li>
      <li>✅ Riprese per cantieri</li>
      <li>✅ Video promozionali per social</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Cosa indicare nella richiesta
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Per ricevere candidature più precise è utile descrivere chiaramente il
    tipo di ripresa che desideri. Puoi indicare se ti servono solo fotografie,
    video, riprese per social, contenuti montati, immagini di un immobile,
    riprese di un evento o materiale per uso aziendale.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    È importante specificare anche la località, la data indicativa, la durata
    prevista dell'intervento e qualsiasi dettaglio utile sul luogo da
    riprendere. Più informazioni fornisci, più sarà semplice per i piloti
    valutare il lavoro.
  </p>

  <p className="leading-8 text-gray-300">
    Dopo aver ricevuto le candidature potrai confrontare le proposte e
    scegliere il pilota drone che ritieni più adatto alle esigenze del tuo
    progetto.
  </p>
</div>

<div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
  <h2 className="mb-4 text-3xl font-bold">
    Come funziona DroneGuard
  </h2>

  <div className="grid gap-6 md:grid-cols-4">
    <div>
      <h3 className="mb-2 font-semibold text-green-400">1. Registrati</h3>
      <p className="text-sm leading-6 text-gray-300">
        Crea gratuitamente il tuo account.
      </p>
    </div>

    <div>
      <h3 className="mb-2 font-semibold text-green-400">2. Pubblica la richiesta</h3>
      <p className="text-sm leading-6 text-gray-300">
        Descrivi le riprese drone che ti servono.
      </p>
    </div>

    <div>
      <h3 className="mb-2 font-semibold text-green-400">3. Ricevi preventivi</h3>
      <p className="text-sm leading-6 text-gray-300">
        I piloti interessati possono candidarsi al lavoro.
      </p>
    </div>

    <div>
      <h3 className="mb-2 font-semibold text-green-400">4. Scegli il pilota</h3>
      <p className="text-sm leading-6 text-gray-300">
        Valuta esperienza, proposta e disponibilità.
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
        Quanto costa una ripresa con drone?
      </h3>
      <p className="text-gray-300">
        Il prezzo dipende dal tipo di servizio, dalla località, dalla durata
        del lavoro, dall'attrezzatura utilizzata e dal materiale richiesto.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Posso ricevere più preventivi?
      </h3>
      <p className="text-gray-300">
        Sì, pubblicando una richiesta su DroneGuard puoi ricevere candidature
        da più piloti drone interessati al tuo progetto.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Per quali progetti posso richiedere riprese drone?
      </h3>
      <p className="text-gray-300">
        Puoi richiedere riprese per eventi, immobili, aziende, cantieri,
        turismo, marketing, social media e produzioni video.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        DroneGuard realizza direttamente le riprese?
      </h3>
      <p className="text-gray-300">
        No, DroneGuard mette in contatto clienti e piloti drone registrati
        sulla piattaforma.
      </p>
    </div>
  </div>
</div>

<div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
  <h2 className="mb-4 text-3xl font-bold">
    Richiedi un preventivo per riprese drone
  </h2>

  <p className="mb-6 max-w-3xl leading-8 text-gray-700">
    Registrati su DroneGuard, pubblica la tua richiesta e ricevi candidature
    da piloti drone disponibili per realizzare riprese aeree professionali
    nella tua zona.
  </p>

  <Link href="/register">
    <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
      Richiedi un preventivo
    </button>
  </Link>
</div>
      </section>
    </main>
  )
}