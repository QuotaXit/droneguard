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
    <section className="relative overflow-hidden px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
          Where Drone Work Happens
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
          Un marketplace per piloti di droni e clienti. Trova lavori, assumi
          talenti e gestisci tutto in un’unica piattaforma sicura.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
          <button
            onClick={handleGoToProfile}
            className="w-full rounded-full bg-gradient-to-b from-gray-200 to-gray-300 px-6 py-4 font-medium text-black shadow-lg transition hover:scale-105 sm:w-auto sm:px-8"
          >
            Cerca Lavoro
          </button>

          <button
            onClick={handleGoToProfile}
            className="w-full rounded-full bg-gradient-to-b from-gray-200 to-gray-300 px-6 py-4 font-medium text-black shadow-lg transition hover:scale-105 sm:w-auto sm:px-8"
          >
            Pubblica il tuo lavoro
          </button>
        </div>
      </div>
    </section>
  )
}