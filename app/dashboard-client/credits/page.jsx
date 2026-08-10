"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/client"

function normalizeRole(role) {
  return role ? String(role).trim().toLowerCase() : ""
}

export default function CreditsPage() {
  const [credits, setCredits] = useState(0)
  const [loading, setLoading] = useState(true)
  const [checkoutLoading, setCheckoutLoading] = useState(null)
  const [userData, setUserData] = useState(null)

  const userRole = normalizeRole(userData?.role)
  const isClient = userRole === "client" || userRole === "cliente"

  useEffect(() => {
    const load = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser()

      if (!user) {
        setLoading(false)
        return
      }

      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .maybeSingle()

      if (error) {
        console.error(error)
        setLoading(false)
        return
      }

      if (data) {
        setUserData(data)
        setCredits(data.credits || 0)
      }

      setLoading(false)
    }

    load()
  }, [])

  const buyCredits = async (packageId) => {
    try {
      setCheckoutLoading(packageId)

      const {
        data: { user }
      } = await supabase.auth.getUser()

      if (!user) {
        toast.error("Devi accedere per acquistare crediti")
        return
      }

      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
  packageId
})
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.error || "Errore pagamento")
        return
      }

      window.location.href = data.url
    } catch (error) {
      console.error(error)
      toast.error("Errore imprevisto durante il pagamento")
    } finally {
      setCheckoutLoading(null)
    }
  }

  return (
  <div className="min-h-screen flex flex-col text-white">
    <Navbar logged />

    <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-emerald-300">
              Area cliente
            </p>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Crediti
            </h1>

            <p className="mt-3 max-w-2xl text-sm text-gray-400 sm:text-base">
              Acquista crediti da utilizzare per pubblicare nuovi lavori su DroneGuard.
            </p>
          </div>

          {/* CREDITI DISPONIBILI */}
          <div className="w-full rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] px-6 py-5 lg:w-[260px]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
              Crediti disponibili
            </p>

            <div className="mt-2 flex items-end justify-between">
              <h2 className="text-4xl font-black text-white">
                {loading ? "..." : credits}
              </h2>

              <span className="mb-1 text-sm text-gray-400">
                crediti
              </span>
            </div>
          </div>
        </div>

        {/* PACCHETTI */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          {/* BASIC */}
          <div className="flex flex-col rounded-3xl border border-white/10 bg-[#140a3a] p-6 shadow-xl shadow-black/10">
            <div className="mb-6">
              <div className="mb-4 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300">
                Basic
              </div>

              <h3 className="text-2xl font-black text-white">
                Ricarica veloce
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Per pubblicare un singolo lavoro.
              </p>
            </div>

            <div className="mb-6 rounded-2xl border border-white/10 bg-black/15 p-5">
              <div className="flex items-end gap-1">
                <span className="text-4xl font-black text-white">
                  €4
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  Crediti inclusi
                </span>

                <span className="text-xl font-bold text-yellow-300">
                  5
                </span>
              </div>
            </div>

            <button
              onClick={() => buyCredits("client_basic")}
              disabled={checkoutLoading === "client_basic"}
              className="mt-auto w-full rounded-xl bg-green-500 px-5 py-3.5 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {checkoutLoading === "client_basic"
                ? "Apertura pagamento..."
                : "Acquista"}
            </button>
          </div>

          {/* STANDARD */}
          <div className="flex flex-col rounded-3xl border border-cyan-400/20 bg-[#140a3a] p-6 shadow-xl shadow-black/10">
            <div className="mb-6">
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
                Standard
              </div>

              <h3 className="text-2xl font-black text-white">
                Più conveniente
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Ideale per pubblicare più lavori.
              </p>
            </div>

            <div className="mb-6 rounded-2xl border border-white/10 bg-black/15 p-5">
              <div className="flex items-end gap-1">
                <span className="text-4xl font-black text-white">
                  €9
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  Crediti inclusi
                </span>

                <span className="text-xl font-bold text-cyan-300">
                  40
                </span>
              </div>
            </div>

            <button
              onClick={() => buyCredits("client_standard")}
              disabled={checkoutLoading === "client_standard"}
              className="mt-auto w-full rounded-xl bg-green-500 px-5 py-3.5 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {checkoutLoading === "client_standard"
                ? "Apertura pagamento..."
                : "Acquista"}
            </button>
          </div>

          {/* PRO */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl border border-purple-400/30 bg-[#140a3a] p-6 shadow-xl shadow-purple-950/20">
            <div className="absolute right-0 top-0 rounded-bl-2xl bg-purple-500 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white">
              Più crediti
            </div>

            <div className="mb-6">
              <div className="mb-4 inline-flex rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-300">
                Pro
              </div>

              <h3 className="text-2xl font-black text-white">
                Professionale
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Per clienti che pubblicano frequentemente.
              </p>
            </div>

            <div className="mb-6 rounded-2xl border border-purple-400/20 bg-purple-400/[0.06] p-5">
              <div className="flex items-end gap-1">
                <span className="text-4xl font-black text-white">
                  €19.99
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  Crediti inclusi
                </span>

                <span className="text-xl font-bold text-purple-300">
                  120
                </span>
              </div>
            </div>

            <button
              onClick={() => buyCredits("client_pro")}
              disabled={checkoutLoading === "client_pro"}
              className="mt-auto w-full rounded-xl bg-green-500 px-5 py-3.5 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {checkoutLoading === "client_pro"
                ? "Apertura pagamento..."
                : "Acquista Pro"}
            </button>
          </div>
        </div>

        {/* INFO COSTO */}
        <div className="mt-6 flex items-center justify-center">
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-center text-sm text-gray-400">
            Ogni pubblicazione lavoro costa{" "}
            <span className="font-bold text-white">
              5 crediti
            </span>
          </div>
        </div>

      </div>
    </div>
  </div>
)
}