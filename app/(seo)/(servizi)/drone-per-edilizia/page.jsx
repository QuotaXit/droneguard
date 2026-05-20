import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per edilizia | DroneGuard",
  description:
    "Trova piloti drone per edilizia, cantieri, monitoraggi e rilievi professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Drone per edilizia
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Soluzioni professionali con droni per imprese, tecnici e cantieri.
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