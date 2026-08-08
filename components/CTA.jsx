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
  <section className="relative overflow-hidden border-b border-white/5 bg-[#0A0F27]">
    {/* SFONDO */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/2 h-[480px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/[0.055] blur-[130px]" />
    </div>

    <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111735] shadow-2xl shadow-black/20">

        {/* DECORAZIONI */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-green-500/[0.08] blur-[90px]" />

        <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-[100px]" />

        <div className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">

          {/* TESTO */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
            <div className="inline-flex w-fit rounded-full border border-green-400/20 bg-green-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-green-300">
              DroneGuard
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Il prossimo volo
              <span className="block text-green-400">
                parte da qui
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Cerchi nuove opportunità di lavoro oppure hai
              bisogno di un servizio con drone? Scegli il percorso
              più adatto e accedi a DroneGuard.
            </p>

            {/* PERCORSI */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

              {/* PILOTA */}
              <button
                type="button"
                onClick={() =>
                  handleRoleAction("pilot")
                }
                className="group rounded-2xl bg-green-500 p-4 text-left text-black transition hover:-translate-y-0.5 hover:bg-green-400"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-black/60">
                  Sei un pilota?
                </span>

                <span className="mt-1 flex items-center justify-between gap-3 text-base font-black">
                  Cerca lavoro

                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>

              {/* CLIENTE */}
              <button
                type="button"
                onClick={() =>
                  handleRoleAction("cliente")
                }
                className="group rounded-2xl border border-white/15 bg-white/[0.05] p-4 text-left text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.09]"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                  Sei un cliente?
                </span>

                <span className="mt-1 flex items-center justify-between gap-3 text-base font-black">
                  Pubblica lavoro

                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
            </div>

            {/* MICRO INFO */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-500">
              <span className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Registrazione semplice
              </span>

              <span className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Piloti in tutta Italia
              </span>
            </div>
          </div>

          {/* IMMAGINE */}
          <div className="relative min-h-[300px] overflow-hidden border-t border-white/10 lg:min-h-[470px] lg:border-l lg:border-t-0">
            <img
              src="/images/droneguard-cta.png"
              alt="Drone utilizzato per un servizio tramite DroneGuard"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111735] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#111735]/60 lg:via-transparent lg:to-transparent" />

            {/* BADGE */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:min-w-[260px]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-green-400">
                Marketplace italiano
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Clienti e piloti drone, nello stesso posto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}