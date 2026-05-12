"use client"

import JobCard from "./JobCard"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"

export default function JobsSection() {
  const router = useRouter()

  const variants = [1, 2, 3]

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
    <section className="relative text-white px-6 py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-krona)]">
          Missioni disponibili
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Sfoglia i lavori aerei nella bacheca lavoro. Candidati subito al prossimo lavoro.
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
            Accedi a missioni esclusive. Candidati, vola, guadagna.
          </p>

          <button
            onClick={handleStart}
            className="mt-6 px-10 py-2.5 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 text-black font-medium shadow-lg hover:scale-105 transition"
          >
            Inizia Adesso
          </button>
        </div>
      </div>
    </section>
  )
}