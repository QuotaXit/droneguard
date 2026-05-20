import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Riprese drone eventi | DroneGuard",
  description:
    "Trova piloti drone per eventi, manifestazioni, concerti, fiere e occasioni speciali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Riprese drone eventi
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Cattura immagini e video aerei professionali per eventi e manifestazioni.
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