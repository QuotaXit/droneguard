import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Termografia con drone | DroneGuard",
  description:
    "Trova piloti drone per termografia, ispezioni termiche, pannelli fotovoltaici, tetti, edifici e impianti."
}

export default function TermografiaConDronePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Termografia con drone
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          La termografia con drone permette di individuare dispersioni termiche,
          anomalie su pannelli fotovoltaici, infiltrazioni, problemi su coperture,
          impianti ed edifici in modo rapido e sicuro.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-3">A cosa serve</h2>
            <p className="text-gray-300 leading-7">
              Fotovoltaico, tetti, facciate, edifici, impianti industriali,
              ricerca dispersioni e controlli tecnici.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-3">Perché usare un drone</h2>
            <p className="text-gray-300 leading-7">
              Riduce tempi, costi e rischi rispetto alle ispezioni tradizionali,
              soprattutto su aree difficili da raggiungere.
            </p>
          </div>
        </div>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
            Pubblica una richiesta
          </button>
        </Link>
      </section>
    </main>
  )
}