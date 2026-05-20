import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Video promozionali con drone | DroneGuard",
  description:
    "Trova operatori drone per video aziendali e promozionali professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-6 text-4xl font-bold">
          Video promozionali con drone
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-300">
          Realizza video promozionali professionali con riprese aeree ad alto
          impatto visivo per aziende, attività commerciali, hotel, strutture
          turistiche, eventi e campagne marketing.
        </p>

        <div className="mb-10 space-y-5 text-gray-300 leading-7">
          <p>
            Su DroneGuard puoi pubblicare una richiesta e ricevere candidature
            da piloti drone interessati al tuo progetto.
          </p>

          <p>
            Confronta più professionisti e scegli la soluzione più adatta alle
            tue esigenze di comunicazione e promozione.
          </p>
        </div>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
            Richiedi un preventivo
          </button>
        </Link>
      </section>
    </main>
  )
}