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

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-6 text-4xl font-bold">
          Drone per fotogrammetria
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-300">
          Trova piloti drone specializzati in fotogrammetria, rilievi topografici,
          modellazione 3D e acquisizione dati ad alta precisione.
        </p>

        <div className="mb-10 space-y-5 text-gray-300 leading-7">
          <p>
            La fotogrammetria con drone consente di ottenere ortofoto,
            modelli tridimensionali e mappe dettagliate per edilizia,
            topografia, infrastrutture e agricoltura.
          </p>

          <p>
            Pubblica la tua richiesta su DroneGuard e ricevi candidature
            da professionisti qualificati in tutta Italia.
          </p>
        </div>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
            Trova un professionista
          </button>
        </Link>
      </section>
    </main>
  )
}