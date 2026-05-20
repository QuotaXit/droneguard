import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Noleggio pilota drone | DroneGuard",
  description:
    "Trova piloti drone disponibili per lavori professionali, riprese aeree, ispezioni e servizi tecnici in tutta Italia."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-6 text-4xl font-bold">
          Noleggio pilota drone
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-300">
          Su DroneGuard puoi trovare piloti drone disponibili per lavori
          professionali, riprese aeree, ispezioni tecniche, eventi, cantieri
          e servizi per aziende.
        </p>

        <div className="mb-10 space-y-5 leading-7 text-gray-300">
          <p>
            Pubblica una richiesta indicando il tipo di servizio di cui hai
            bisogno e ricevi candidature dai piloti interessati.
          </p>

          <p>
            Ogni pilota può presentare la propria offerta, così puoi valutare
            disponibilità, esperienza, attrezzatura e prezzo.
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