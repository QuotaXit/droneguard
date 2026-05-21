import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per impianti fotovoltaici | DroneGuard",
  description:
    "Trova professionisti per ispezioni e controlli di impianti fotovoltaici con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
  <Navbar />

  <section className="mx-auto max-w-6xl px-6 py-20">
    <div className="mb-14 max-w-4xl">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
    DroneGuard per il fotovoltaico
  </p>

  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
    Drone per impianti fotovoltaici
  </h1>

  <p className="text-lg leading-8 text-gray-300">
    I droni rappresentano una soluzione moderna ed efficace per l'ispezione di
    impianti fotovoltaici, pannelli solari e parchi fotovoltaici. Grazie alle
    riprese aeree è possibile controllare rapidamente grandi superfici,
    documentare lo stato dell'impianto e individuare eventuali anomalie senza
    interrompere la produzione energetica. Attraverso DroneGuard puoi trovare
    piloti drone qualificati per monitoraggio, ispezioni e documentazione
    fotografica di impianti fotovoltaici in tutta Italia.
  </p>

  <div className="mt-8">
    <Link href="/register">
      <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
        Registrati gratis
      </button>
    </Link>
  </div>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Ispezione pannelli solari
    </h2>
    <p className="text-gray-300">
      Controlli rapidi per verificare lo stato dei moduli e documentare
      eventuali criticità.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Monitoraggio impianti
    </h2>
    <p className="text-gray-300">
      Controlli periodici e acquisizione di immagini utili per manutenzione e
      gestione dell'impianto.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Sicurezza operativa
    </h2>
    <p className="text-gray-300">
      Ispezioni effettuate senza accessi in quota o interventi complessi sulle
      strutture.
    </p>
  </div>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Perché usare un drone per il fotovoltaico
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Gli impianti fotovoltaici possono occupare superfici molto ampie e
      richiedere controlli periodici per verificarne lo stato generale. Il
      drone permette di acquisire immagini dettagliate in tempi ridotti,
      facilitando le attività di monitoraggio e documentazione.
    </p>

    <p className="leading-8 text-gray-300">
      Questa tecnologia è utilizzata sia per piccoli impianti installati su
      edifici privati sia per grandi parchi fotovoltaici destinati alla
      produzione energetica.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi disponibili
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Ispezione pannelli fotovoltaici</li>
      <li>✅ Monitoraggio impianti solari</li>
      <li>✅ Riprese aeree professionali</li>
      <li>✅ Documentazione fotografica</li>
      <li>✅ Controllo parchi fotovoltaici</li>
      <li>✅ Supporto a manutenzione e verifiche</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova professionisti per ispezioni fotovoltaiche
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard mette in contatto clienti e piloti drone attraverso una
    piattaforma semplice e intuitiva. Puoi pubblicare una richiesta indicando
    il tipo di impianto, la località e il servizio richiesto.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I piloti interessati possono candidarsi e proporti la propria disponibilità,
    permettendoti di confrontare più professionisti prima di scegliere quello
    più adatto alle tue esigenze.
  </p>

  <p className="leading-8 text-gray-300">
    La piattaforma è utile per aziende, installatori, manutentori,
    professionisti e proprietari di impianti che necessitano di documentazione
    e controlli effettuati tramite drone.
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
        Crea un account come cliente o pilota drone.
      </p>
    </div>

    <div>
      <h3 className="mb-2 font-semibold text-green-400">2. Riscatta i crediti</h3>
      <p className="text-sm leading-6 text-gray-300">
        50 crediti per i piloti e 10 per i clienti.
      </p>
    </div>

    <div>
      <h3 className="mb-2 font-semibold text-green-400">3. Pubblica il lavoro</h3>
      <p className="text-sm leading-6 text-gray-300">
        Descrivi l'impianto e il servizio richiesto.
      </p>
    </div>

    <div>
      <h3 className="mb-2 font-semibold text-green-400">4. Ricevi candidature</h3>
      <p className="text-sm leading-6 text-gray-300">
        I piloti interessati possono candidarsi.
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
        Quanto costa un'ispezione con drone?
      </h3>
      <p className="text-gray-300">
        Il costo dipende dalla dimensione dell'impianto e dal tipo di servizio richiesto.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        DroneGuard esegue direttamente le ispezioni?
      </h3>
      <p className="text-gray-300">
        No, DroneGuard mette in contatto clienti e piloti drone registrati.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Posso richiedere controlli periodici?
      </h3>
      <p className="text-gray-300">
        Sì, puoi specificarlo nella richiesta pubblicata sulla piattaforma.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 text-xl font-semibold">
        Sono previsti crediti gratuiti?
      </h3>
      <p className="text-gray-300">
        Sì, 50 crediti per i nuovi piloti e 10 crediti per i nuovi clienti.
      </p>
    </div>
  </div>
</div>

<div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone per impianti fotovoltaici
  </h2>

  <p className="mb-6 max-w-3xl leading-8 text-gray-700">
    Registrati su DroneGuard, pubblica la tua richiesta e ricevi candidature
    da piloti drone interessati a ispezioni, monitoraggio e controlli di
    impianti fotovoltaici e pannelli solari.
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