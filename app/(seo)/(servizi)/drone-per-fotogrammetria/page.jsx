import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per fotogrammetria | DroneGuard",
  description:
    "Trova professionisti per fotogrammetria, rilievi e modellazione 3D con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
  <Navbar />

  <section className="mx-auto max-w-6xl px-6 py-20">
    <h1 className="mb-6 text-4xl font-bold">
      Drone per fotogrammetria
    </h1>

    <p className="mb-8 text-lg leading-8 text-gray-300">
      La fotogrammetria con drone permette di acquisire immagini aeree ad alta
      precisione e trasformarle in ortofoto, modelli 3D, nuvole di punti e
      mappe dettagliate. Questa tecnologia viene utilizzata in edilizia,
      topografia, infrastrutture, agricoltura e monitoraggio del territorio,
      offrendo dati accurati e riducendo tempi e costi rispetto ai metodi
      tradizionali. Su DroneGuard puoi trovare piloti drone specializzati in
      rilievi fotogrammetrici professionali in tutta Italia.
    </p>

    <div className="grid gap-6 md:grid-cols-3 mb-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Ortofoto ad alta risoluzione
        </h2>
        <p className="text-gray-300">
          Generazione di mappe dettagliate e georeferenziate per analisi,
          progettazione e documentazione tecnica.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Modellazione 3D
        </h2>
        <p className="text-gray-300">
          Creazione di modelli tridimensionali di edifici, terreni,
          infrastrutture e aree di interesse.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Rilievi topografici
        </h2>
        <p className="text-gray-300">
          Acquisizione di dati precisi per professionisti, studi tecnici,
          geometri, architetti e ingegneri.
        </p>
      </div>
    </div>

    <h2 className="mb-4 text-2xl font-bold">
      Trova un pilota drone per fotogrammetria
    </h2>

    <p className="mb-8 text-gray-300 leading-8">
      Pubblica gratuitamente la tua richiesta su DroneGuard e ricevi
      candidature da operatori drone qualificati. Confronta le proposte e
      scegli il professionista più adatto per rilievi topografici,
      fotogrammetria aerea, modellazione 3D e acquisizione dati ad alta
      precisione.
    </p>

    <Link href="/register">
      <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
        Trova un pilota drone
      </button>
    </Link>
  </section>
</main>
  )
}