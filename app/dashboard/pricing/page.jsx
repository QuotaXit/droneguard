"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/client"
import {
  CreditCard,
  Users
} from "lucide-react"

function normalizeRole(role) {
  return role ? String(role).trim().toLowerCase() : ""
}

export default function PricingPage() {
  const [credits, setCredits] = useState(0)
  const [pilots, setPilots] = useState(0)
  const [userData, setUserData] = useState(null)
  const [claimLoading, setClaimLoading] = useState(false)
  const [checkoutLoading, setCheckoutLoading] = useState(null)
  const [emailVerified, setEmailVerified] = useState(false)

  const userRole = normalizeRole(userData?.role)
  const isPilot = userRole === "pilot" || userRole === "pilota"

  useEffect(() => {
    const loadData = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser()

      setEmailVerified(!!user?.email_confirmed_at)

      if (!user) return

      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .maybeSingle()

      if (error) {
        console.error(error)
        return
      }

      if (data) {
        setUserData(data)
        setCredits(data.credits || 0)
      }

      const { count } = await supabase
        .from("users")
        .select("*", { count: "exact", head: true })
        .eq("role", "pilot")

      setPilots(count || 0)
    }

    loadData()
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
          packageId,
          userId: user.id
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

  const claimFreeCredits = async () => {
    if (!userData) return

    if (!isPilot) {
      toast.error("I 50 crediti gratuiti sono riservati solo ai piloti.")
      return
    }

    if (userData.free_credits_claimed) {
      toast.error("Hai già riscattato i crediti ❌")
      return
    }

    try {
      setClaimLoading(true)

      const newCredits = Number(userData.credits || 0) + 50

      const { data, error } = await supabase
        .from("users")
        .update({
          credits: newCredits,
          free_credits_claimed: true
        })
        .eq("id", userData.id)
        .in("role", ["pilot", "pilota"])
        .select()
        .maybeSingle()

      if (error || !data) {
        console.error(error)
        toast.error("Bonus disponibile solo per account pilota ❌")
        return
      }

      setCredits(newCredits)

      setUserData((prev) => ({
        ...prev,
        credits: newCredits,
        free_credits_claimed: true
      }))

      toast.success("50 crediti aggiunti 🚀")
    } finally {
      setClaimLoading(false)
    }
  }

  const sendVerificationEmail = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser()

    if (!user?.email) {
      toast.error("Email non trovata")
      return
    }

    const { error } = await supabase.auth.resend({
      type: "signup",
      email: user.email
    })

    if (error) {
      console.log(error)
      toast.error("Errore invio email")
      return
    }

    toast.success("Email di conferma inviata ✅")
  }

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="max-w-7xl mx-auto space-y-10">
          <div>
            <h1 className="mb-3 text-3xl font-bold sm:text-4xl">
              Crediti DroneGuard
            </h1>

            <p className="text-gray-400">
              Acquista crediti o riscatta il bonus iniziale.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <CreditCard size={24} className="mb-3" />

              <p className="text-sm text-gray-400">
                Crediti
              </p>

              <h2 className="text-3xl font-bold text-green-400 sm:text-4xl">
                {credits}
              </h2>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Users size={24} className="mb-3" />

              <p className="text-sm text-gray-400">
                Piloti registrati
              </p>

              <h2 className="text-3xl font-bold text-cyan-400 sm:text-4xl">
                {pilots}
              </h2>
            </div>

            <div className="relative min-h-[150px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5" />

              <div className="relative flex h-full min-h-[110px] items-center justify-center">
<h3 className="select-none text-center text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">                  
               <span className="text-white">
                    Drone
                  </span>

                  <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    Guard
                  </span>
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className={`rounded-2xl p-6 text-center border ${
                isPilot
                  ? "bg-[#140a3a] border-green-400/30"
                  : "bg-white/5 border-white/10 opacity-60"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">
                Starter pilota
              </h3>

              <p className="mb-4 text-3xl font-bold text-green-400 sm:text-4xl">
                50 crediti
              </p>

              {!isPilot && (
                <p className="text-sm text-gray-400 mb-4">
                  Riservato solo ai piloti.
                </p>
              )}

              <button
                onClick={claimFreeCredits}
                disabled={!isPilot || userData?.free_credits_claimed || claimLoading}
                className="w-full py-3 rounded-lg bg-green-500 text-black font-semibold disabled:opacity-40"
              >
                {!isPilot
                  ? "Solo piloti"
                  : userData?.free_credits_claimed
                    ? "Già riscattati"
                    : claimLoading
                      ? "Caricamento..."
                      : "Gratis"}
              </button>
            </div>

            <div className="bg-[#140a3a] border border-white/10 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">
                Standard
              </h3>

              <p className="mb-2 text-3xl font-bold sm:text-4xl">
                €9
              </p>

              <p className="text-gray-400 mb-4">
                40 crediti
              </p>

              <button
                onClick={() => buyCredits("pilot_standard")}
                disabled={checkoutLoading === "pilot_standard"}
                className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 disabled:opacity-50"
              >
                {checkoutLoading === "pilot_standard"
                  ? "Apertura pagamento..."
                  : "Acquista"}
              </button>
            </div>

            <div className="bg-[#140a3a] border border-yellow-400 rounded-2xl p-6 text-center relative">
              <span className="absolute top-3 right-3 text-xs bg-yellow-400 text-black px-2 py-1 rounded-full">
                BEST
              </span>

              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                Pro
              </h3>

              <p className="mb-2 text-3xl font-bold sm:text-4xl">
                €19
              </p>

              <p className="text-gray-400 mb-4">
                100 crediti
              </p>

              <button
                onClick={() => buyCredits("pilot_best")}
                disabled={checkoutLoading === "pilot_best"}
                className="w-full py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 disabled:opacity-50"
              >
                {checkoutLoading === "pilot_best"
                  ? "Apertura pagamento..."
                  : "Migliore scelta"}
              </button>
            </div>

            <div className="bg-[#140a3a] border border-white/10 rounded-2xl p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Ricarica veloce
              </h3>

              <p className="text-3xl font-bold mb-2">
                5 crediti
              </p>

              <p className="text-gray-400 mb-4">
                €4
              </p>

              <button
                onClick={() => buyCredits("pilot_small")}
                disabled={checkoutLoading === "pilot_small"}
                className="w-full py-3 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 disabled:opacity-50"
              >
                {checkoutLoading === "pilot_small"
                  ? "Apertura pagamento..."
                  : "Compra"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}