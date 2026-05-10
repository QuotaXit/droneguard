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
      title: "Riprese aeree per immobili – Roma",
      desc: "Cerco pilota drone per riprese immobili di lusso. Richiesto stile cinematografico e drone 4K.",
      client: "Agenzia immobiliare (Roma)",
      brief: "Riprese esterne + panoramiche + montaggio base"
    },
    2: {
      title: "Sorveglianza complesso industriale – Milano",
      desc: "Richiesto pilota drone per monitoraggio sicurezza area industriale. Controllo perimetrale e report anomalie.",
      client: "Azienda logistica",
      brief: "Ispezione area + sorveglianza + report video"
    },
    3: {
      title: "Mappatura terreno agricolo – Bologna",
      desc: "Cerco operatore drone per mappatura di terreno agricolo. Richiesta precisione e utilizzo software GIS.",
      client: "Azienda agricola",
      brief: "Mappatura area + analisi terreno + esportazione dati"
    }
  }

  const job = jobs[variant] || jobs[1]

  return (
    <div className="flex flex-col justify-between gap-6 rounded-xl bg-gray-100 p-5 shadow-md sm:p-6 md:flex-row md:items-center">
      <div className="text-black">
        <h3 className="font-semibold text-xl">
          {job.title}
        </h3>

        <p className="text-base mt-2 max-w-md leading-relaxed">
          {job.desc}
        </p>

        <div className="text-base mt-3 leading-relaxed">
          🧑 Cliente: {job.client} <br />
          📄 Brief: {job.brief}
        </div>

        <p className="text-sm text-gray-500 mt-2">
          (esempio)
        </p>
      </div>

      <button
        onClick={handleGoToProfile}
        className="w-full rounded-full bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#6366f1] px-6 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(96,165,250,0.6)] transition hover:scale-105 sm:w-auto sm:py-2"
      >
        Accedi per sbloccare
      </button>
    </div>
  )
}
