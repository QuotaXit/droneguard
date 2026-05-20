import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per cantieri | DroneGuard",
  description:
    "Trova operatori drone per monitoraggio cantieri, rilievi e documentazione dei lavori."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Drone per cantieri
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Monitora l'avanzamento lavori e documenta il cantiere con immagini e video aerei.
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