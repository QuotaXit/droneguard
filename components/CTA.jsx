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
    <section className="relative overflow-hidden px-4 pt-16 pb-8 text-white sm:px-6 sm:pt-20 sm:pb-10 lg:px-8 lg:pt-24 lg:pb-12">
      
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
    Unisciti a una rete in crescita di piloti di droni certificati e clienti.
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
<div className="h-[260px] w-full overflow-hidden rounded-3xl border border-white/20 shadow-2xl md:w-[520px]">

  <img
    src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200"
    alt="Drone"
    className="h-full w-full object-cover"
  />

</div>

      </div>

    </section>
  )
}
