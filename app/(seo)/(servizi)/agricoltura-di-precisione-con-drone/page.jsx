import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Agricoltura di precisione con drone | DroneGuard",
  description:
    "Trova professionisti drone per monitoraggio colture, agricoltura di precisione e analisi dei terreni."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Agricoltura di precisione con drone
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Analizza colture e terreni con tecnologie avanzate basate sui droni.
        </p>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
            Trova un professionista
          </button>
        </Link>
      </section>
    </main>
  )
}