"use client"

import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"

export default function Hero() {
  const router = useRouter()

  const handleGoToProfile = async () => {
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
    <section className="relative text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h1 className="text-6xl font-bold leading-tight">
          Where Drone Work Happens
        </h1>

        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          Un marketplace per piloti di droni e aziende. Trova lavori, assumi talenti e gestisci tutto in un’unica piattaforma sicura.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button
            onClick={handleGoToProfile}
            className="px-8 py-4 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 text-black font-medium shadow-lg hover:scale-105 transition"
          >
            Cerca Lavoro
          </button>

          <button
            onClick={handleGoToProfile}
            className="px-8 py-4 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 text-black font-medium shadow-lg hover:scale-105 transition"
          >
            Pubblica il tuo lavoro
          </button>
        </div>

        <div className="mt-16 flex justify-center items-center text-center">
          <div className="px-8">
            <p className="text-4xl font-bold text-white">50+</p>
            <p className="text-gray-300 mt-2">Piloti Certificati</p>
          </div>

          <div className="w-px h-12 bg-white/30" />

          <div className="px-8">
            <p className="text-4xl font-bold text-white">Ogni giorno</p>
            <p className="text-gray-300 mt-2">Nuovi lavori</p>
          </div>

          <div className="w-px h-12 bg-white/30" />

          <div className="px-8">
            <p className="text-4xl font-bold text-white">20+</p>
            <p className="text-gray-300 mt-2">Clienti verificati</p>
          </div>
        </div>
      </div>
    </section>
  )
}