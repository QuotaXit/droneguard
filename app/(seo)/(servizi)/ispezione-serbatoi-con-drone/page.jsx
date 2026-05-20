import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione serbatoi con drone | DroneGuard",
  description:
    "Trova piloti drone per ispezioni di serbatoi, impianti industriali e strutture tecniche."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Ispezione serbatoi con drone
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Controlla serbatoi e impianti industriali in sicurezza grazie ai droni professionali.
        </p>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
            Richiedi un'ispezione
          </button>
        </Link>
      </section>
    </main>
  )
}