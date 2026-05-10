"use client"

import { useRouter } from "next/navigation"

export default function Hero() {

const router = useRouter()

  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        
        {/* TITLE */}
        <h1 className="text-6xl font-bold leading-tight">
          Where Drone Work Happens
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          Un marketplace per piloti di droni e aziende. Trova lavori, assumi talenti e gestisci tutto in un’unica piattaforma sicura.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex justify-center gap-6">

  <button
    onClick={() => router.push("/login")}
    className="px-8 py-4 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 text-black font-medium shadow-lg hover:scale-105 transition"
  >
    Cerca Lavoro
  </button>

  <button
    onClick={() => router.push("/login")}
    className="px-8 py-4 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 text-black font-medium shadow-lg hover:scale-105 transition"
  >
    Pubblica il tuo lavoro
  </button>

</div>
        {/* STATS */}
        <div className="mt-16 flex justify-center items-center text-center">
          
          {/* ITEM 1 */}
          <div className="px-8">
            <p className="text-4xl font-bold text-white">50+</p>
            <p className="text-gray-300 mt-2">Piloti Certificati</p>
          </div>

          {/* LINE */}
          <div className="w-px h-12 bg-white/30" />

          {/* ITEM 2 */}
          <div className="px-8">
            <p className="text-4xl font-bold text-white">Ogni giorno</p>
            <p className="text-gray-300 mt-2">Nuovi lavori</p>
          </div>

          {/* LINE */}
          <div className="w-px h-12 bg-white/30" />

          {/* ITEM 3 */}
          <div className="px-8">
            <p className="text-4xl font-bold text-white">20+</p>
            <p className="text-gray-300 mt-2">Clienti verificati</p>
          </div>

        </div>

      </div>
    </section>
  )
}