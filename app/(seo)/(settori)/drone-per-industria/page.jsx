import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per industria | DroneGuard",
  description:
    "Trova piloti drone per industria, impianti industriali, monitoraggio strutture, documentazione tecnica e riprese professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per industria
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per industria
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            I droni sono sempre più utilizzati nel settore industriale per
            documentare impianti, monitorare strutture, acquisire immagini
            aeree e supportare attività di controllo e gestione. Attraverso
            DroneGuard puoi pubblicare una richiesta e ricevere candidature
            da piloti drone interessati a collaborare con aziende industriali,
            stabilimenti produttivi, impianti logistici e società di servizi.
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
              Monitoraggio impianti
            </h2>
            <p className="leading-7 text-gray-300">
              Controllo visivo di impianti industriali e aree produttive.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione tecnica
            </h2>
            <p className="leading-7 text-gray-300">
              Foto e video professionali per report aziendali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Controllo strutture
            </h2>
            <p className="leading-7 text-gray-300">
              Visione completa di stabilimenti e infrastrutture industriali.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Perché utilizzare un drone nell'industria
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Gli impianti industriali possono occupare superfici molto estese
            e comprendere strutture difficili da monitorare completamente da
            terra. Grazie ai droni è possibile acquisire immagini aeree
            dettagliate e ottenere rapidamente una panoramica dell'intera area.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese consentono di documentare edifici, magazzini,
            infrastrutture produttive, aree logistiche e impianti industriali
            da prospettive particolarmente utili per attività di controllo.
          </p>

          <p className="leading-8 text-gray-300">
            Sempre più aziende scelgono di utilizzare i droni per migliorare
            la documentazione e la comunicazione interna dei propri impianti.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Monitoraggio di impianti industriali
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Attraverso voli programmati è possibile acquisire immagini
            aggiornate degli impianti e documentare eventuali modifiche nel
            tempo.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini possono essere utilizzate per report, presentazioni
            aziendali e documentazione tecnica interna.
          </p>

          <p className="leading-8 text-gray-300">
            Questo tipo di attività è particolarmente utile per stabilimenti
            produttivi, centri logistici e aree industriali.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Foto e video per aziende
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le aziende possono utilizzare foto e video realizzati con drone
            per presentazioni commerciali, siti web, materiale promozionale
            e comunicazione istituzionale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini aeree permettono di mostrare dimensioni, organizzazione
            e capacità produttiva degli impianti in modo professionale.
          </p>

          <p className="leading-8 text-gray-300">
            Un video realizzato con drone rappresenta spesso un contenuto di
            forte impatto per clienti e partner commerciali.
          </p>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Chi utilizza questi servizi
            </h2>

            <p className="leading-8 text-gray-300">
              Industrie manifatturiere, aziende logistiche, imprese
              produttive, società energetiche e operatori industriali
              utilizzano frequentemente servizi professionali con drone.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Servizi più richiesti
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Monitoraggio impianti</li>
              <li>✅ Foto aeree industriali</li>
              <li>✅ Video aziendali</li>
              <li>✅ Documentazione tecnica</li>
              <li>✅ Controllo aree produttive</li>
              <li>✅ Riprese professionali</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Cerchi un pilota drone per la tua azienda?
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e ricevi candidature da
            piloti drone interessati a collaborare con aziende e impianti
            industriali.
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