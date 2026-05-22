import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per fotovoltaico | DroneGuard",
  description:
    "Trova piloti drone per impianti fotovoltaici, ispezioni pannelli solari, documentazione impianti e monitoraggio aree fotovoltaiche."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per fotovoltaico
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per fotovoltaico
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            I droni sono sempre più utilizzati nel settore fotovoltaico per
            documentare impianti, effettuare controlli visivi e acquisire
            immagini aeree di pannelli solari e parchi fotovoltaici.
            Attraverso DroneGuard puoi pubblicare una richiesta e ricevere
            candidature da piloti drone interessati a collaborare con aziende,
            installatori, manutentori e proprietari di impianti fotovoltaici.
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
              Ispezione pannelli
            </h2>
            <p className="leading-7 text-gray-300">
              Controllo visivo di impianti fotovoltaici e pannelli solari.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione impianti
            </h2>
            <p className="leading-7 text-gray-300">
              Foto e video aerei per report e archiviazione.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Monitoraggio aree
            </h2>
            <p className="leading-7 text-gray-300">
              Visione completa di impianti e parchi fotovoltaici.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Perché utilizzare un drone per il fotovoltaico
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Gli impianti fotovoltaici possono occupare superfici molto estese,
            rendendo difficile il controllo completo da terra. Grazie ai droni
            è possibile acquisire rapidamente immagini dettagliate e panoramiche
            dell'intero impianto.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le fotografie aeree consentono di documentare la disposizione dei
            pannelli, verificare lo stato generale dell'area e creare materiale
            utile per relazioni e attività aziendali.
          </p>

          <p className="leading-8 text-gray-300">
            Sempre più aziende scelgono il drone come supporto per monitoraggio,
            documentazione e promozione dei propri impianti.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezioni di impianti fotovoltaici
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Uno degli utilizzi più richiesti riguarda l'ispezione visiva dei
            pannelli solari e delle strutture di supporto.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Attraverso immagini ad alta definizione è possibile osservare
            l'impianto da diverse prospettive senza dover effettuare lunghi
            sopralluoghi manuali.
          </p>

          <p className="leading-8 text-gray-300">
            Questo tipo di documentazione può essere utile per manutentori,
            installatori e proprietari di impianti.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Documentazione e report fotografici
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini raccolte tramite drone possono essere utilizzate per
            report tecnici, documentazione interna, presentazioni aziendali e
            archiviazione storica dell'impianto.
          </p>

          <p className="leading-8 text-gray-300">
            Foto e video professionali permettono di mostrare in modo chiaro le
            dimensioni e la struttura dell'area fotovoltaica.
          </p>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Chi utilizza questi servizi
            </h2>

            <p className="leading-8 text-gray-300">
              Aziende energetiche, installatori fotovoltaici, manutentori,
              professionisti tecnici e proprietari di impianti utilizzano
              frequentemente i droni per documentare e controllare le proprie
              strutture.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Servizi più richiesti
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Ispezione pannelli fotovoltaici</li>
              <li>✅ Foto aeree impianti solari</li>
              <li>✅ Video professionali</li>
              <li>✅ Documentazione tecnica</li>
              <li>✅ Monitoraggio impianti</li>
              <li>✅ Report fotografici</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Cerchi un pilota drone per il tuo impianto fotovoltaico?
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e ricevi candidature da
            piloti drone interessati a servizi per impianti fotovoltaici e
            pannelli solari.
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