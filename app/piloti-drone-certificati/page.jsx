import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Piloti drone certificati | DroneGuard",
  description:
    "Cerca piloti drone certificati per servizi professionali, riprese aeree, ispezioni, eventi e lavori tecnici."
}

export default function PilotiDroneCertificatiPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Piloti drone certificati per lavori professionali
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Su DroneGuard puoi entrare in contatto con piloti drone registrati e
          qualificati per servizi professionali in tutta Italia.
        </p>

        <div className="space-y-5 text-gray-300 leading-7 mb-10">
          <p>
            I piloti possono indicare certificazioni, esperienza, droni utilizzati
            e servizi offerti, così da aiutare i clienti a scegliere il professionista
            più adatto.
          </p>

          <p>
            La piattaforma è pensata per chi cerca un operatore drone per riprese,
            ispezioni, immobili, eventi, cantieri, agricoltura e attività tecniche.
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