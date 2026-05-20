import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per impianti fotovoltaici | DroneGuard",
  description:
    "Trova professionisti per ispezioni e controlli di impianti fotovoltaici con drone."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-6 text-4xl font-bold">
          Drone per impianti fotovoltaici
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-300">
          Trova piloti drone specializzati nell'ispezione e nel monitoraggio
          di impianti fotovoltaici, pannelli solari e parchi fotovoltaici.
        </p>

        <div className="mb-10 space-y-5 text-gray-300 leading-7">
          <p>
            Grazie ai droni è possibile effettuare controlli rapidi e sicuri,
            individuando anomalie, danni e problemi di rendimento senza
            interrompere il funzionamento dell'impianto.
          </p>

          <p>
            Pubblica la tua richiesta su DroneGuard e ricevi offerte da
            professionisti qualificati in tutta Italia.
          </p>
        </div>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
            Richiedi un'ispezione
          </button>
        </Link>
      </section>
    </main>
  )
}