import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Video aerei con drone | DroneGuard",
  description:
    "Trova operatori drone per realizzare video aerei professionali per aziende, eventi e immobili."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Video aerei con drone
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Realizza contenuti video professionali con riprese aeree di alta qualità.
        </p>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
            Richiedi un servizio
          </button>
        </Link>
      </section>
    </main>
  )
}