"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabase/client"

function normalizeRole(role) {
  return role ? String(role).trim().toLowerCase() : ""
}

export default function CreditsPage() {
  const [credits, setCredits] = useState(0)
  const [loading, setLoading] = useState(true)
  const [checkoutLoading, setCheckoutLoading] = useState(null)
  const [claimLoading, setClaimLoading] = useState(false)
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

  const claimClientFreeCredits = async () => {
    if (!userData) return

    if (!isClient) {
      alert("I 10 crediti gratuiti sono riservati solo ai clienti.")
      return
    }

    if (userData.free_credits_claimed) {
      alert("Hai già riscattato i crediti gratuiti ❌")
      return
    }

    try {
      setClaimLoading(true)

      const newCredits = Number(userData.credits || 0) + 10

      const { data, error } = await supabase
        .from("users")
        .update({
          credits: newCredits,
          free_credits_claimed: true
        })
        .eq("id", userData.id)
        .in("role", ["client", "cliente"])
        .select()
        .maybeSingle()

      if (error || !data) {
        console.error(error)
        alert("Bonus disponibile solo per account cliente ❌")
        return
      }

      setCredits(newCredits)

      setUserData((prev) => ({
        ...prev,
        credits: newCredits,
        free_credits_claimed: true
      }))

      alert("10 crediti aggiunti 🚀")
    } finally {
      setClaimLoading(false)
    }
  }

  const buyCredits = async (packageId) => {
    try {
      setCheckoutLoading(packageId)

      const {
        data: { user }
      } = await supabase.auth.getUser()

      if (!user) {
        alert("Devi accedere per acquistare crediti")
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
        alert(data.error || "Errore pagamento")
        return
      }

      window.location.href = data.url
    } catch (error) {
      console.error(error)
      alert("Errore imprevisto durante il pagamento")
    } finally {
      setCheckoutLoading(null)
    }
  }

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] p-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-[var(--font-krona)] mb-6">
            Crediti
          </h1>

          <div className="bg-white/5 border border-white/20 rounded-2xl p-8 mb-10 text-center">
            <p className="text-gray-400 mb-2">
              Crediti disponibili
            </p>

            <h2 className="text-5xl font-bold">
              {loading ? "..." : credits}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div
              className={`border rounded-2xl p-8 text-center ${
                isClient
                  ? "bg-white/5 border-green-400/30"
                  : "bg-white/5 border-white/20 opacity-60"
              }`}
            >
              <h3 className="text-2xl mb-2 font-semibold">
                Starter cliente
              </h3>

              <p className="text-gray-400 mb-4">
                Bonus iniziale
              </p>

              <h2 className="text-4xl font-bold mb-4 text-green-400">
                Gratis
              </h2>

              <p className="mb-6">
                10 crediti
              </p>

              <button
                onClick={claimClientFreeCredits}
                disabled={!isClient || userData?.free_credits_claimed || claimLoading}
                className="w-full py-3 bg-green-500 text-black rounded-lg font-medium hover:scale-105 transition disabled:opacity-40"
              >
                {!isClient
                  ? "Solo clienti"
                  : userData?.free_credits_claimed
                    ? "Già riscattati"
                    : claimLoading
                      ? "Caricamento..."
                      : "Riscatta"}
              </button>
            </div>

            <div className="bg-white/5 border border-white/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl mb-2 font-semibold">
                Basic
              </h3>

              <p className="text-gray-400 mb-4">
                Ricarica veloce
              </p>

              <h2 className="text-4xl font-bold mb-4">
                €4
              </h2>

              <p className="mb-6">
                5 crediti
              </p>

              <button
                onClick={() => buyCredits("client_basic")}
                disabled={checkoutLoading === "client_basic"}
                className="w-full py-3 bg-white text-black rounded-lg font-medium hover:scale-105 transition disabled:opacity-50"
              >
                {checkoutLoading === "client_basic"
                  ? "Apertura pagamento..."
                  : "Acquista"}
              </button>
            </div>

            <div className="bg-white/5 border border-white/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl mb-2 font-semibold">
                Standard
              </h3>

              <p className="text-gray-400 mb-4">
                Perfetto per iniziare
              </p>

              <h2 className="text-4xl font-bold mb-4">
                €9
              </h2>

              <p className="mb-6">
                40 crediti
              </p>

              <button
                onClick={() => buyCredits("client_standard")}
                disabled={checkoutLoading === "client_standard"}
                className="w-full py-3 bg-white text-black rounded-lg font-medium hover:scale-105 transition disabled:opacity-50"
              >
                {checkoutLoading === "client_standard"
                  ? "Apertura pagamento..."
                  : "Acquista"}
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 text-center shadow-xl">
              <h3 className="text-2xl mb-2 font-semibold">
                Pro
              </h3>

              <p className="text-white/80 mb-4">
                Per clienti professionali
              </p>

              <h2 className="text-4xl font-bold mb-4">
                €19.99
              </h2>

              <p className="mb-6">
                120 crediti
              </p>

              <button
                onClick={() => buyCredits("client_pro")}
                disabled={checkoutLoading === "client_pro"}
                className="w-full py-3 bg-white text-black rounded-lg font-medium hover:scale-105 transition disabled:opacity-50"
              >
                {checkoutLoading === "client_pro"
                  ? "Apertura pagamento..."
                  : "Acquista Pro"}
              </button>
            </div>
          </div>

          <div className="mt-10 text-center text-gray-400 text-sm">
            Ogni pubblicazione lavoro costa 5 crediti
          </div>
        </div>
      </div>
    </div>
  )
}