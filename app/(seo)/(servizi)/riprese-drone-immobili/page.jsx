import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Riprese drone immobili | DroneGuard",
  description:
    "Trova piloti drone per fotografie e video aerei di immobili, ville, hotel e strutture ricettive."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Riprese drone immobili
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Valorizza immobili e proprietà con fotografie e video aerei professionali.
        </p>

        <Link href="/register">
          <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
            Richiedi un servizio
          </button>
        </Link>
      </section>
    </main>
  )
}