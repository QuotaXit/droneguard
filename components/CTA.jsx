"use client"

import { useRouter } from "next/navigation"

export default function CTA() {

  const router = useRouter()

  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]" />

      {/* CONTENUTO */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* TESTO */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold leading-tight">
            Ready to Launch <br /> Your Next Mission?
          </h2>

          <p className="text-gray-300 mt-4">
            Unisciti a una rete in crescita di piloti di droni certificati e aziende.
            Trova lavoro o assumi i migliori professionisti in pochi minuti.
          </p>

          {/* 🔥 FIX LOGIN */}
          <button
            onClick={() => router.push("/login")}
            className="mt-6 px-10 py-2.5 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 text-black font-medium shadow-lg hover:scale-105 transition"
          >
            Inizia qui
          </button>
        </div>

        {/* IMMAGINE */}
        <div className="w-full md:w-[400px] h-[220px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1508614589041-895b88991e3e"
            alt="Drone"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* TESTO CURVO */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 opacity-30"
        viewBox="0 0 1000 200"
      >
        <path
          id="curve"
          d="M 0 150 Q 500 50 1000 150"
          fill="transparent"
        />
        <text fill="white" fontSize="20" letterSpacing="2">
          <textPath href="#curve" startOffset="0%">
            Fly your skills. Find your mission. Fly your skills. Find your mission.
          </textPath>
        </text>
      </svg>

    </section>
  )
}