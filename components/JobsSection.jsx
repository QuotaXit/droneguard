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
    <section className="relative text-white px-6 py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-krona)]">
  Esempi di richieste di lavoro
</h2>

        {/* SUBTITLE */}
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
  Scopri come possono apparire le richieste pubblicate dai clienti.
  I piloti registrati possono consultare gli annunci reali direttamente
  nella Bacheca lavori.
</p>

        {/* LIST */}
        <div className="mt-12 space-y-6 text-left">
          {variants.map((v) => (
            <JobCard key={v} variant={v} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed tracking-wide font-medium">
  Registrati come pilota, consulta le richieste disponibili
  e candidati ai lavori adatti alle tue competenze.
</p>

          <button
  type="button"
  onClick={handleStart}
  className="mt-6 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 px-10 py-3 font-semibold text-black shadow-lg transition hover:scale-105"
>
  Vai alla Bacheca lavori
</button>
        </div>
      </div>
    </section>
  )
}