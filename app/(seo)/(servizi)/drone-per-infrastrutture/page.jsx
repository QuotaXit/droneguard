import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per infrastrutture | DroneGuard",
  description:
    "Trova operatori drone per ponti, viadotti, strade e infrastrutture."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-6 text-4xl font-bold">
          Drone per infrastrutture
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-300">
          Trova piloti drone specializzati nell'ispezione e nel monitoraggio
          di infrastrutture come ponti, viadotti, strade, gallerie e opere civili.
        </p>

        <div className="mb-10 space-y-5 text-gray-300 leading-7">
          <p>
            I droni consentono di effettuare controlli visivi rapidi e sicuri,
            riducendo tempi, costi e rischi rispetto alle ispezioni tradizionali.
          </p>

          <p>
            Pubblica la tua richiesta su DroneGuard e ricevi candidature da
            professionisti qualificati per il tuo progetto.
          </p>
        </div>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
            Trova un professionista
          </button>
        </Link>
      </section>
    </main>
  )
}