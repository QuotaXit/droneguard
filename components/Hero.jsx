"use client"

import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import {
  getDashboardPath,
  isClient,
  isPilot
} from "@/lib/auth-utils"

export default function Hero() {
  const router = useRouter()

    const handleRoleAction = async (targetRole) => {
    const {
      data: { user },
      error: authError
    } = await supabase.auth.getUser()

    if (authError) {
      console.error(
        "Errore controllo sessione homepage:",
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
        "Impossibile recuperare il ruolo dell'utente:",
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

    router.push(
      getDashboardPath(profile.role)
    )
  }

  return (
  <section className="relative overflow-hidden border-b border-white/5 bg-[#0A0D1F]">
    {/* Decorazioni sfondo */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-[-220px] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-green-500/[0.05] blur-[100px]" />

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-500/[0.05] blur-[100px]" />
    </div>

    <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/[0.07] px-4 py-2 text-xs font-semibold text-green-300 sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          Marketplace italiano per servizi con drone
        </div>

        {/* Titolo */}
        <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
          Dove clienti e piloti drone
          <span className="block bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
            si incontrano
          </span>
        </h1>

        {/* Descrizione */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
          Un marketplace per piloti di droni e clienti.
          Trova lavori o richiedi un volo e gestisci tutto
          in un'unica piattaforma.
        </p>

        {/* CTA */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() =>
              handleRoleAction("pilot")
            }
            className="group w-full rounded-xl bg-green-500 px-7 py-3.5 font-bold text-black shadow-lg shadow-green-500/10 transition hover:-translate-y-0.5 hover:bg-green-400 sm:w-auto"
          >
            Ricevi un volo
          </button>

          <button
            type="button"
            onClick={() =>
              handleRoleAction("cliente")
            }
            className="w-full rounded-xl border border-white/15 bg-white/[0.05] px-7 py-3.5 font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.09] sm:w-auto"
          >
            Richiedi un volo
          </button>
        </div>

        {/* Micro-info */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-gray-500 sm:text-sm">
          <span className="flex items-center gap-2">
            <span className="text-green-400">
              ✓
            </span>
            Registrazione semplice
          </span>

          <span className="flex items-center gap-2">
            <span className="text-green-400">
              ✓
            </span>
            Piloti in tutta Italia
          </span>

          <span className="flex items-center gap-2">
            <span className="text-green-400">
              ✓
            </span>
            Contatto diretto
          </span>
        </div>
      </div>
    </div>
  </section>
)
}