"use client"

import JobCard from "./JobCard"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import {
  getDashboardPath,
  isPilot
} from "@/lib/auth-utils"

export default function JobsSection() {
  const router = useRouter()

  const variants = [1, 2, 3]

    const handleStart = async () => {
    const {
      data: { user },
      error: authError
    } = await supabase.auth.getUser()

    if (authError) {
      console.error(
        "Errore controllo sessione sezione lavori:",
        authError
      )

      router.push("/login")
      return
    }

    if (!user) {
      router.push("/register?type=pilot")
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
        "Impossibile recuperare il ruolo:",
        profileError
      )

      router.push("/login")
      return
    }

    if (isPilot(profile.role)) {
      router.push("/dashboard/jobs-board")
      return
    }

    router.push(
      getDashboardPath(profile.role)
    )
  }

  return (
  <section className="relative overflow-hidden border-b border-white/5 bg-[#0A0F27]">
    {/* SFONDO */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.045] blur-[130px]" />
    </div>

    <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

      {/* HEADER */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
          Opportunità
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Esempi di richieste di lavoro
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          Scopri come possono apparire le richieste pubblicate
          dai clienti. I piloti registrati possono consultare
          gli annunci reali direttamente nella Bacheca lavori.
        </p>
      </div>

      {/* CARD */}
      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {variants.map((v) => (
          <JobCard
            key={v}
            variant={v}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-3xl border border-white/[0.08] bg-[#111735] p-6 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-400">
              Sei un pilota?
            </p>

            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Trova nuove opportunità di lavoro
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
              Registrati come pilota, consulta le richieste
              disponibili e candidati ai lavori adatti alle
              tue competenze.
            </p>
          </div>

          <button
            type="button"
            onClick={handleStart}
            className="shrink-0 rounded-xl bg-green-500 px-7 py-3.5 font-bold text-black transition hover:-translate-y-0.5 hover:bg-green-400"
          >
            Vai alla Bacheca lavori
          </button>
        </div>
      </div>
    </div>
  </section>
)
}