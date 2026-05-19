import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Trova un pilota drone | DroneGuard",
  description:
    "Trova un pilota drone qualificato vicino a te. Pubblica una richiesta gratuita e ricevi candidature da piloti registrati su DroneGuard."
}

export default function TrovaPilotaDronePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Trova un pilota drone vicino a te
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Hai bisogno di un pilota drone per riprese video, fotografie aeree,
          eventi, ispezioni, immobili o lavori professionali? Su DroneGuard puoi
          pubblicare una richiesta e raggiungere piloti drone registrati nella tua zona.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-3">Come funziona</h2>
            <p className="text-gray-300 leading-7">
              Pubblica gratuitamente la tua richiesta, descrivi il lavoro e attendi
              le candidature dei piloti disponibili.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-3">Servizi disponibili</h2>
            <p className="text-gray-300 leading-7">
              Riprese aeree, matrimoni, eventi, ispezioni, termografia, edilizia,
              agricoltura, immobili e contenuti pubblicitari.
            </p>
          </div>
        </div>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
            Pubblica una richiesta gratuita
          </button>
        </Link>
      </section>
    </main>
  )
}