import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per eventi | DroneGuard",
  description:
    "Trova piloti drone per eventi, matrimoni, concerti, manifestazioni e riprese aeree professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per eventi
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per eventi
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Le riprese con drone rappresentano una soluzione sempre più
            richiesta per eventi pubblici e privati. Grazie alle immagini
            aeree è possibile raccontare un evento da prospettive spettacolari,
            mostrando il contesto, il pubblico e i momenti più importanti.
            Attraverso DroneGuard puoi pubblicare una richiesta e ricevere
            candidature da piloti drone interessati a collaborare per
            matrimoni, eventi aziendali, concerti, manifestazioni sportive,
            fiere e iniziative pubbliche.
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
              Matrimoni
            </h2>
            <p className="leading-7 text-gray-300">
              Riprese aeree per valorizzare il giorno più importante.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Eventi aziendali
            </h2>
            <p className="leading-7 text-gray-300">
              Video professionali per aziende, convention e meeting.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Manifestazioni
            </h2>
            <p className="leading-7 text-gray-300">
              Documentazione aerea di eventi pubblici e privati.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Perché utilizzare un drone durante un evento
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un drone permette di ottenere immagini e video impossibili da
            realizzare con una normale fotocamera. Le riprese dall'alto
            consentono di mostrare l'intera location, il pubblico presente,
            l'organizzazione dell'evento e i momenti più significativi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo tipo di contenuto è particolarmente apprezzato per
            matrimoni, concerti, eventi sportivi, festival, inaugurazioni e
            manifestazioni pubbliche.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini aeree possono essere utilizzate per ricordi personali,
            comunicazione aziendale, promozione online e contenuti social.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Riprese drone per matrimoni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I matrimoni sono tra gli eventi più richiesti nel settore delle
            riprese con drone. Le immagini aeree consentono di valorizzare la
            location, gli spazi esterni e i momenti più emozionanti della
            giornata.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ville, castelli, agriturismi e strutture per eventi possono essere
            mostrati da prospettive spettacolari, creando video memorabili.
          </p>

          <p className="leading-8 text-gray-300">
            Molte coppie scelgono oggi il drone per aggiungere un elemento
            cinematografico al proprio servizio video.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">
            Eventi aziendali e promozionali
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Aziende e organizzatori utilizzano i droni per documentare meeting,
            convention, inaugurazioni, fiere e presentazioni di prodotti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini raccolte possono essere utilizzate per video
            istituzionali, campagne pubblicitarie e contenuti destinati ai
            social network.
          </p>

          <p className="leading-8 text-gray-300">
            Un video professionale realizzato con drone contribuisce a
            valorizzare il brand e l'immagine dell'organizzazione.
          </p>
        </div>

        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Chi utilizza questi servizi
            </h2>

            <p className="leading-8 text-gray-300">
              Privati, wedding planner, organizzatori di eventi, aziende,
              associazioni e enti pubblici utilizzano frequentemente i droni
              per creare contenuti professionali e documentare eventi.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Servizi più richiesti
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese matrimoni</li>
              <li>✅ Eventi aziendali</li>
              <li>✅ Concerti e festival</li>
              <li>✅ Manifestazioni sportive</li>
              <li>✅ Video promozionali</li>
              <li>✅ Foto aeree professionali</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Cerchi un pilota drone per il tuo evento?
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e ricevi candidature da
            piloti drone interessati a realizzare foto e video professionali
            per il tuo evento.
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