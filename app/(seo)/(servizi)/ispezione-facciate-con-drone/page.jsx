import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione facciate con drone | DroneGuard",
  description:
    "Trova operatori drone per controlli e verifiche di facciate, edifici e strutture."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Ispezione facciate con drone
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Analizza facciate e strutture in quota con immagini ad alta definizione.
        </p>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
            Trova un pilota drone
          </button>
        </Link>
      </section>
    </main>
  )
}