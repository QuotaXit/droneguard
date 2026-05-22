import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per infrastrutture | DroneGuard",
  description:
    "Trova piloti drone per infrastrutture, ponti, viadotti, gallerie, opere pubbliche e monitoraggio strutturale."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per infrastrutture
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per infrastrutture
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            I droni rappresentano uno strumento sempre più utilizzato per il
            monitoraggio e la documentazione delle infrastrutture. Attraverso
            immagini aeree e riprese ad alta definizione è possibile osservare
            ponti, viadotti, gallerie, strade, ferrovie e opere pubbliche da
            prospettive difficilmente raggiungibili con metodi tradizionali.
            Su DroneGuard puoi pubblicare una richiesta e ricevere candidature
            da piloti drone interessati a collaborare con aziende, enti,
            professionisti e società di ingegneria.
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
              Monitoraggio strutture
            </h2>
            <p className="leading-7 text-gray-300">
              Controllo visivo di infrastrutture e opere pubbliche.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ispezioni aeree
            </h2>
            <p className="leading-7 text-gray-300">
              Acquisizione di immagini dettagliate da punti difficili da
              raggiungere.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione tecnica
            </h2>
            <p className="leading-7 text-gray-300">
              Foto e video professionali per report e archiviazione.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Perché utilizzare un drone per le infrastrutture
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le infrastrutture richiedono controlli periodici e una
            documentazione accurata del loro stato. Grazie ai droni è possibile
            osservare grandi aree in tempi ridotti e raccogliere immagini utili
            per valutazioni tecniche e monitoraggi nel tempo.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ponti, viadotti, cavalcavia, gallerie e reti infrastrutturali
            possono essere documentati con maggiore rapidità rispetto a molte
            tecniche tradizionali.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini aeree permettono inoltre di creare report dettagliati e
            fornire una panoramica completa dell'opera.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione di ponti e viadotti
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I ponti e i viadotti sono tra le strutture più frequentemente
            monitorate tramite drone. Le riprese aeree consentono di osservare
            l'intera infrastruttura da più angolazioni e acquisire immagini
            dettagliate delle varie componenti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Grazie alla flessibilità operativa dei droni è possibile raggiungere
            punti difficilmente accessibili e documentare aree che richiederebbero
            interventi più complessi.
          </p>

          <p className="leading-8 text-gray-300">
            Questo approccio può contribuire a migliorare la raccolta delle
            informazioni e la gestione delle attività di controllo.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Monitoraggio di opere pubbliche
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le opere pubbliche richiedono spesso una documentazione costante
            dell'avanzamento dei lavori e dello stato delle infrastrutture.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Attraverso voli programmati è possibile creare uno storico
            fotografico utile per confronti nel tempo e aggiornamenti tecnici.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini raccolte possono essere utilizzate da enti pubblici,
            imprese e società di progettazione.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Infrastrutture stradali e ferroviarie
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I droni vengono utilizzati anche per documentare strade, linee
            ferroviarie, svincoli, cavalcavia e altre infrastrutture di
            trasporto.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese aeree consentono di ottenere una visione completa delle
            aree interessate e supportare attività di monitoraggio e
            pianificazione.
          </p>

          <p className="leading-8 text-gray-300">
            Questo tipo di servizio è richiesto da imprese, progettisti,
            amministrazioni e società specializzate.
          </p>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Chi utilizza questi servizi
            </h2>

            <p className="leading-8 text-gray-300">
              Società di ingegneria, studi tecnici, enti pubblici, imprese di
              costruzione e aziende specializzate utilizzano frequentemente i
              droni per monitorare e documentare infrastrutture.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Servizi più richiesti
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Ispezione ponti</li>
              <li>✅ Ispezione viadotti</li>
              <li>✅ Monitoraggio infrastrutture</li>
              <li>✅ Documentazione opere pubbliche</li>
              <li>✅ Foto aeree professionali</li>
              <li>✅ Video tecnici con drone</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Cerchi un pilota drone per infrastrutture?
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e ricevi candidature da
            piloti drone interessati a monitoraggio infrastrutturale,
            documentazione tecnica e ispezioni aeree professionali.
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