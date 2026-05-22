import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Operatore Drone Professionale | DroneGuard",
  description:
    "Trova un operatore drone professionale per riprese aeree, ispezioni tecniche, termografia, fotogrammetria e servizi specializzati."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Professionisti dei servizi drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Operatore Drone Professionale
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Cerchi un operatore drone professionale per un progetto aziendale,
            tecnico o promozionale? Con DroneGuard puoi pubblicare una richiesta
            e ricevere candidature da piloti drone interessati. Riprese video,
            fotografie aeree, monitoraggio cantieri, termografia, fotogrammetria,
            rilievi topografici e ispezioni tecniche sono solo alcuni dei servizi
            che possono essere richiesti tramite la piattaforma.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Trova un operatore drone
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
              Video e fotografie aeree per aziende, immobili ed eventi.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ispezioni tecniche
            </h2>
            <p className="text-gray-300">
              Controlli su edifici, coperture, impianti e infrastrutture.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Rilievi e monitoraggi
            </h2>
            <p className="text-gray-300">
              Fotogrammetria, ortofoto e documentazione professionale.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Chi è un operatore drone professionale
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un operatore drone professionale utilizza sistemi UAS per svolgere
            attività che richiedono immagini aeree, raccolta dati, controlli
            tecnici e documentazione visiva. Oggi i droni vengono utilizzati in
            edilizia, agricoltura, turismo, immobiliare, industria ed eventi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Grazie alle nuove tecnologie è possibile ottenere rapidamente
            informazioni dettagliate senza ricorrere a metodi più costosi o
            complessi. Per questo motivo sempre più aziende si affidano a
            operatori drone qualificati.
          </p>

          <p className="leading-8 text-gray-300">
            Con DroneGuard puoi trovare professionisti interessati al tuo
            progetto pubblicando gratuitamente una richiesta.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Servizi richiesti più frequentemente
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Gli operatori drone possono svolgere attività creative e tecniche.
              Molti clienti utilizzano i droni per realizzare contenuti video,
              fotografie aeree e materiale promozionale.
            </p>

            <p className="leading-8 text-gray-300">
              Altri servizi riguardano ispezioni di edifici, monitoraggio
              cantieri, controlli di impianti fotovoltaici, rilievi topografici
              e documentazione tecnica.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Attività disponibili
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video aeree</li>
              <li>✅ Fotografie professionali</li>
              <li>✅ Ispezioni tetti e facciate</li>
              <li>✅ Termografia con drone</li>
              <li>✅ Fotogrammetria</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Rilievi topografici</li>
              <li>✅ Eventi e matrimoni</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un operatore drone professionale
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo varia in base alla tipologia del servizio richiesto, alla
            località, alla durata delle operazioni e agli obiettivi del progetto.
            Una semplice ripresa video ha esigenze differenti rispetto a una
            termografia o a un rilievo tecnico.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard non esistono prezzi fissi. I clienti pubblicano una
            richiesta e ricevono candidature dai piloti interessati.
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
              <p className="text-sm text-gray-300">
                Crea gratuitamente il tuo account.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica il lavoro
              </h3>
              <p className="text-sm text-gray-300">
                Descrivi il servizio richiesto.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>
              <p className="text-sm text-gray-300">
                I professionisti possono candidarsi.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm text-gray-300">
                Valuta le candidature ricevute.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A]">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un operatore drone professionale
          </h2>

          <p className="mb-6 leading-8 text-gray-700">
            Pubblica gratuitamente il tuo progetto e ricevi candidature da
            operatori drone interessati.
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