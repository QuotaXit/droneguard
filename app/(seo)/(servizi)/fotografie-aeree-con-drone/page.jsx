import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Fotografie aeree con drone | DroneGuard",
  description:
    "Servizi professionali di fotografia aerea con drone per immobili, eventi e aziende."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-6 text-4xl font-bold">
          Fotografie aeree con drone
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-300">
          Trova piloti drone per realizzare fotografie aeree professionali
          di immobili, eventi, strutture turistiche, aziende e cantieri.
        </p>

        <div className="mb-10 space-y-5 text-gray-300 leading-7">
          <p>
            Le fotografie aeree consentono di mostrare prospettive uniche e
            valorizzare attività commerciali, proprietà immobiliari e progetti
            professionali.
          </p>

          <p>
            Pubblica gratuitamente la tua richiesta su DroneGuard e ricevi
            candidature da operatori drone qualificati in tutta Italia.
          </p>
        </div>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
            Richiedi un servizio
          </button>
        </Link>
      </section>
    </main>
  )
}