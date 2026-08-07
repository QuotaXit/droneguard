"use client"

import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import {
  getDashboardPath,
  isClient,
  isPilot
} from "@/lib/auth-utils"

export default function CTA() {
  const router = useRouter()

  const handleRoleAction = async (targetRole) => {
    const {
      data: { user },
      error: authError
    } = await supabase.auth.getUser()

    if (authError) {
      console.error(
        "Errore controllo sessione CTA homepage:",
        authError
      )

      router.push("/login")
      return
    }

    if (!user) {
      router.push(
        targetRole === "pilot"
          ? "/register?type=pilot"
          : "/register?type=cliente"
      )

      return
    }

    const {
      data: profile,
      error: profileError
    } = await supabase
      .from("users")
      .select("role")
      .eq("id", user.id)
      .maybeSingle()

    if (profileError || !profile) {
      console.error(
        "Impossibile recuperare il ruolo dalla CTA:",
        profileError
      )

      router.push("/login")
      return
    }

    if (
      targetRole === "pilot" &&
      isPilot(profile.role)
    ) {
      router.push("/dashboard/jobs-board")
      return
    }

    if (
      targetRole === "cliente" &&
      isClient(profile.role)
    ) {
      router.push("/dashboard-client/create-job")
      return
    }

    router.push(getDashboardPath(profile.role))
  }

  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-16 text-white sm:px-6 sm:pb-10 sm:pt-20 lg:px-8 lg:pb-12 lg:pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 md:flex-row">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Il prossimo volo parte da qui
          </h2>

          <p className="mt-4 leading-7 text-gray-300">
            Cerchi un pilota oppure nuove opportunità di lavoro?
            Entra in DroneGuard e utilizza la piattaforma in base
            alle tue esigenze.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => handleRoleAction("pilot")}
              className="w-full rounded-full border border-white/20 bg-white/10 px-7 py-3 font-semibold text-white transition hover:scale-105 hover:bg-white/15 sm:w-auto"
            >
              Cerca lavoro
            </button>

            <button
              type="button"
              onClick={() => handleRoleAction("cliente")}
              className="w-full rounded-full bg-green-500 px-7 py-3 font-semibold text-black shadow-lg transition hover:scale-105 hover:bg-green-400 sm:w-auto"
            >
              Richiedi un volo
            </button>
          </div>
        </div>

        <div className="h-[260px] w-full overflow-hidden rounded-3xl border border-white/20 shadow-2xl md:w-[520px]">
          <img
            src="/images/droneguard-cta.png"
            alt="Drone utilizzato per un servizio tramite DroneGuard"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
