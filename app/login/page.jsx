"use client"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import { getDashboardPath } from "@/lib/auth-utils"

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      // LOGIN
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
  console.log(error)
  toast.error("Email o password non corretti")
  await supabase.auth.signOut()
  return
}

      // USER
      const user = authData.user

      if (!user) {
        toast.error("Utente non trovato")
        return
      }

      // RUOLO
      const { data: profile, error: profileError } = await supabase
        .from("users")
        .select("role")
        .eq("id", user.id)
        .maybeSingle()

      if (profileError) {
        console.error("[Login] Profile error:", profileError)
        toast.error("Errore caricamento profilo")
        return
      }

      if (!profile) {
        console.error("[Login] Profilo non trovato per user:", user.id)
        toast.error("Profilo utente non trovato")
        await supabase.auth.signOut()
        return
      }

      // LOG DIAGNOSTICI
      console.log("[Login] ===== LOGIN REDIRECT FLOW =====")
      console.log("[Login] REDIRECT SOURCE: app/login/page.jsx")
      console.log("[Login] USER ID:", user.id)
      console.log("[Login] USER EMAIL:", user.email)
      console.log("[Login] ROLE FROM USERS (raw):", profile.role)

      // REDIRECT BASATO SU RUOLO
      const dashboardPath = getDashboardPath(profile.role)

      console.log("[Login] FINAL REDIRECT:", dashboardPath)
      console.log("[Login] ===== END LOGIN REDIRECT FLOW =====")

      router.replace(dashboardPath)

    } catch (err) {

      console.log("LOGIN ERROR:", err)

      toast.error("Errore login")

    } finally {

      setLoading(false)

    }

  }

  return (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    <div className="relative flex flex-1 items-center justify-center px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]" />

      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-[430px] rounded-[28px] border border-white/10 bg-[rgba(20,10,58,0.88)] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur sm:p-7"
      >
        {/* HEADER */}
        <div className="mb-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-emerald-300">
            DroneGuard
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight">
            Bentornato
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Accedi al tuo account per continuare su DroneGuard.
          </p>
        </div>

        {/* CAMPI */}
        <div className="rounded-2xl border border-white/10 bg-black/10 p-4 sm:p-5">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="nome@email.it"
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-green-400/10"
            />
          </div>

          <div className="mt-4">
            <div className="mb-2 flex items-center justify-between gap-4">
              <label className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-xs font-semibold text-gray-400 transition hover:text-green-300"
              >
                Password dimenticata?
              </Link>
            </div>

            <input
              type="password"
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Inserisci la password"
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-green-400/10"
            />
          </div>
        </div>

        {/* LOGIN */}
        <button
          type="submit"
          disabled={loading}
          className="mt-5 w-full rounded-2xl bg-green-500 px-5 py-3.5 text-base font-black text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "Accesso..."
            : "Accedi"}
        </button>

        {/* REGISTRAZIONE */}
        <div className="mt-5 text-center">
          <p className="text-sm text-gray-400">
            Non hai ancora un account?{" "}
            <Link
              href="/register"
              className="font-bold text-white underline underline-offset-4 transition hover:text-green-300"
            >
              Registrati
            </Link>
          </p>
        </div>

        {/* CONFERMA EMAIL */}
        <div className="mt-5 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.05] px-4 py-4 text-center">
          <p className="text-sm font-semibold text-gray-300">
            Non hai ricevuto la mail di conferma?
          </p>

          <Link
            href="/resend-confirmation"
            className="mt-1.5 inline-block text-sm font-bold text-emerald-300 transition hover:text-emerald-200 hover:underline"
          >
            Reinvia email di conferma
          </Link>
        </div>

        <p className="mt-5 text-center text-[11px] leading-5 text-gray-600">
          Accesso riservato agli utenti registrati su DroneGuard.
        </p>
      </form>
    </div>
  </div>
)
}