"use client"

import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"

export default function CTA() {
  const router = useRouter()

  const handleStart = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser()

    if (!user) {
      router.push("/login")
      return
    }

    const { data: profile } = await supabase
      .from("users")
      .select("role")
      .eq("id", user.id)
      .maybeSingle()

    const role = profile?.role?.toLowerCase()

    if (role === "cliente" || role === "client") {
      router.push("/dashboard-client")
      return
    }

    router.push("/dashboard")
  }

  return (
    <section className="relative overflow-hidden px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]" />

      {/* CONTENUTO */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 md:flex-row">
        
        {/* TESTO */}
<div className="max-w-xl">
  <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
    Ready to Launch <br /> Your Next Mission?
  </h2>

  <p className="text-gray-300 mt-4">
    Unisciti a una rete in crescita di piloti di droni certificati e aziende.
    Trova lavoro o assumi i migliori professionisti in pochi minuti.
  </p>

  <button
    onClick={handleStart}
    className="mt-6 w-full rounded-full bg-gradient-to-b from-gray-200 to-gray-300 px-8 py-3 font-medium text-black shadow-lg transition hover:scale-105 sm:w-auto sm:px-10"
  >
    Inizia qui
  </button>
</div>

{/* IMMAGINE */}
<div className="h-[220px] w-full overflow-hidden rounded-xl md:w-[400px]">
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
