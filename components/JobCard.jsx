"use client"

import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"

export default function JobCard({ variant = 1 }) {
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

  const jobs = {
    1: {
      tag: "RIPRESE AEREE",
      title: "Riprese aeree per immobili – Roma",
      desc: "Cerco pilota drone per riprese immobili di lusso. Richiesto stile cinematografico e drone 4K.",
      client: "Agenzia immobiliare (Roma)",
      brief: "Riprese esterne + panoramiche + montaggio base",
      location: "Roma, Lazio",
      published: "Pubblicato 2 giorni fa",
      deadline: "15/06/2025",
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
      published: "Pubblicato 3 giorni fa",
      deadline: "20/06/2025",
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
      published: "Pubblicato 1 giorno fa",
      deadline: "10/06/2025",
      type: "Mappatura agricola",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=500"
    }
  }

  const job = jobs[variant] || jobs[1]

  return (
    <div className="grid gap-6 rounded-3xl border border-white/10 bg-[#0F1535]/80 p-5 shadow-xl backdrop-blur-md sm:p-6 lg:grid-cols-[220px_1fr_300px] lg:items-center">
      <img
        src={job.image}
        alt={job.title}
        className="h-56 w-full rounded-2xl object-cover lg:h-52"
      />

      <div className="text-white">
        <span className="mb-4 inline-flex rounded-lg bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-200">
          {job.tag}
        </span>

        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-500">
  ESEMPIO ANNUNCIO
</p>

        <h3 className="text-2xl font-bold">
          {job.title}
        </h3>

        <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-300">
          {job.desc}
        </p>

        <div className="mt-5 space-y-3 text-base text-gray-300">
          <p>
            🏢 Cliente: {job.client}
          </p>

          <p>
            📄 Brief: {job.brief}
          </p>
        </div>

        <p className="mt-5 text-sm text-gray-400">
          📍 {job.location} · {job.published}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
        <div className="space-y-3 text-sm text-gray-300">
          <p>✓ Budget: Da definire</p>
          <p>📅 Scadenza: {job.deadline}</p>
          <p>◇ Tipologia: {job.type}</p>
        </div>

        <button
          onClick={handleGoToProfile}
          className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#6366f1] px-6 py-4 text-base font-semibold text-white shadow-[0_0_20px_rgba(96,165,250,0.6)] transition hover:scale-105"
        >
          Accedi per sbloccare 🔒
        </button>
      </div>
    </div>
  )
}