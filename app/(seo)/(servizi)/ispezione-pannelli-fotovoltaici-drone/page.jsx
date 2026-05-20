import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione pannelli fotovoltaici con drone | DroneGuard",
  description:
    "Trova professionisti per controlli di impianti fotovoltaici con droni e termocamere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Ispezione pannelli fotovoltaici con drone
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Verifica guasti, anomalie e rendimento degli impianti fotovoltaici.
        </p>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
            Richiedi un controllo
          </button>
        </Link>
      </section>
    </main>
  )
}