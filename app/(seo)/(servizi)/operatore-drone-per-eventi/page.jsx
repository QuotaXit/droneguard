import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Operatore drone per eventi | DroneGuard",
  description:
    "Trova piloti drone per matrimoni, eventi, concerti e manifestazioni."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Operatore drone per eventi
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Trova operatori drone per eventi, matrimoni, concerti,
          manifestazioni sportive e occasioni speciali.
        </p>

        <div className="space-y-5 text-gray-300 leading-7 mb-10">
          <p>
            Pubblica gratuitamente la tua richiesta e ricevi candidature
            dai piloti drone interessati.
          </p>

          <p>
            Confronta esperienza, attrezzatura e offerte per trovare
            il professionista più adatto al tuo evento.
          </p>
        </div>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
            Trova un pilota drone
          </button>
        </Link>
      </section>
    </main>
  )
}