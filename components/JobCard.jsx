"use client"

import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import {
  getDashboardPath,
  isPilot
} from "@/lib/auth-utils"

export default function JobCard({ variant = 1 }) {
  const router = useRouter()

    const handleOpenJobsBoard = async () => {
    const {
      data: { user },
      error: authError
    } = await supabase.auth.getUser()

    if (authError) {
      console.error(
        "Errore controllo sessione card esempio:",
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

  const jobs = {
    1: {
      tag: "RIPRESE AEREE",
      title: "Riprese aeree per immobili – Roma",
      desc: "Cerco pilota drone per riprese immobili di lusso. Richiesto stile cinematografico e drone 4K.",
      client: "Agenzia immobiliare (Roma)",
      brief: "Riprese esterne + panoramiche + montaggio base",
      location: "Roma, Lazio",
      published: "Esempio dimostrativo",
      deadline: "Da concordare",
      type: "Riprese immobili",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500"
    },
    2: {
      tag: "ISPEZIONE",
      title: "Sorveglianza complesso industriale – Milano",
      desc: "Richiesto pilota drone per monitoraggio sicurezza area industriale. Controllo perimetrale e report anomalie.",
      client: "Azienda logistica",
      brief: "Ispezione area + sorveglianza + report video",
      location: "Milano, Lombardia",
      published: "Esempio dimostrativo",
      deadline: "Da concordare",
      type: "Ispezione industriale",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=500"
    },
    3: {
      tag: "MAPPATURA",
      title: "Mappatura terreno agricolo – Bologna",
      desc: "Cerco operatore drone per mappatura di terreno agricolo. Richiesta precisione e utilizzo software GIS.",
      client: "Azienda agricola",
      brief: "Mappatura area + analisi terreno + esportazione dati",
      location: "Bologna, Emilia-Romagna",
      published: "Esempio dimostrativo",
      deadline: "Da concordare",
      type: "Mappatura agricola",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=500"
    }
  }

  const job = jobs[variant] || jobs[1]

  return (
  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111735] transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-[#141D40]">

    {/* TESTATA CARD */}
    <div className="border-b border-white/[0.07] p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-300">
          {job.tag}
        </span>

        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-600">
          Esempio
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold leading-snug text-white">
        {job.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-400">
        {job.desc}
      </p>
    </div>

    {/* DATI */}
    <div className="flex flex-1 flex-col p-5 sm:p-6">

      <div className="space-y-3">
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-gray-600">
            Cliente
          </p>

          <p className="mt-1 text-sm font-medium text-gray-200">
            {job.client}
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-gray-600">
            Brief
          </p>

          <p className="mt-1 text-sm leading-5 text-gray-300">
            {job.brief}
          </p>
        </div>
      </div>

      {/* META */}
      <div className="mt-5 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-white/[0.035] p-3">
          <p className="text-[10px] uppercase tracking-wider text-gray-600">
            Posizione
          </p>

          <p className="mt-1 text-xs font-medium text-gray-300">
            📍 {job.location}
          </p>
        </div>

        <div className="rounded-xl bg-white/[0.035] p-3">
          <p className="text-[10px] uppercase tracking-wider text-gray-600">
            Tipologia
          </p>

          <p className="mt-1 text-xs font-medium text-gray-300">
            ◇ {job.type}
          </p>
        </div>

        <div className="rounded-xl bg-white/[0.035] p-3">
          <p className="text-[10px] uppercase tracking-wider text-gray-600">
            Compenso
          </p>

          <p className="mt-1 text-xs font-medium text-gray-300">
            Inserisci il tuo prezzo
          </p>
        </div>

        <div className="rounded-xl bg-white/[0.035] p-3">
          <p className="text-[10px] uppercase tracking-wider text-gray-600">
            Scadenza
          </p>

          <p className="mt-1 text-xs font-medium text-gray-300">
            {job.deadline}
          </p>
        </div>
      </div>

      {/* PUBBLICAZIONE */}
      <div className="mt-4 flex items-center justify-between border-t border-white/[0.07] pt-4">
        <span className="text-xs text-gray-600">
          {job.published}
        </span>

        <span className="h-2 w-2 rounded-full bg-green-400" />
      </div>

      {/* CTA */}
      <button
        type="button"
        onClick={handleOpenJobsBoard}
        className="mt-5 w-full rounded-xl border border-blue-400/20 bg-blue-500/10 px-5 py-3.5 text-sm font-bold text-blue-200 transition hover:border-blue-400/30 hover:bg-blue-500/20 hover:text-white"
      >
        Scopri la Bacheca lavori
      </button>
    </div>
  </article>
)
}