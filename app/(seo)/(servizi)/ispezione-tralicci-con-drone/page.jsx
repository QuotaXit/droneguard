import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione tralicci con drone | DroneGuard",
  description:
    "Trova piloti drone per il controllo di tralicci, antenne e infrastrutture in quota."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Ispezione tralicci con drone
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Effettua verifiche tecniche di tralicci e strutture verticali senza rischi.
        </p>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
            Richiedi preventivi
          </button>
        </Link>
      </section>
    </main>
  )
}