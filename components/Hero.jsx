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
    <section className="relative overflow-hidden px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
          Dove clienti e piloti drone si incontrano
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
          Un marketplace per piloti di droni e clienti. Trova lavori o richiedi volo, gestisci tutto in un’unica piattaforma.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
          <button
  type="button"
  onClick={() => handleRoleAction("cliente")}
  className="w-full rounded-full bg-green-500 px-6 py-4 font-semibold text-black shadow-lg transition hover:scale-105 hover:bg-green-400 sm:w-auto sm:px-8"
>
  Richiedi un volo
</button>

          <button
  type="button"
  onClick={() => handleRoleAction("cliente")}
  className="w-full rounded-full bg-green-500 px-6 py-4 font-semibold text-black shadow-lg transition hover:scale-105 hover:bg-green-400 sm:w-auto sm:px-8"
>
  Richiedi un volo
</button>
        </div>
      </div>
    </section>
  )
}