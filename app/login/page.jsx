"use client"

import { useState } from "react"
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
      toast.error("Password errata")        
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
        .single()

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

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENUTO */}
      <div className="relative flex flex-1 items-center justify-center px-4 py-8 text-white sm:px-6">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]" />

        {/* CARD */}
        <form
          onSubmit={handleLogin}
          className="relative z-10 w-full max-w-sm rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-md sm:p-8"
        >

          {/* EMAIL */}
          <label className="block text-lg mb-2">
            email
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-6 px-4 py-3 rounded-lg bg-white/80 text-black outline-none"
          />

          {/* PASSWORD */}
          <label className="block text-lg mb-2">
            password
          </label>

          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 px-4 py-3 rounded-lg bg-white/80 text-black outline-none"
          />

          {/* BUTTON */}
          <div className="flex justify-end">

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-green-500 text-black font-medium hover:bg-green-400 transition disabled:opacity-50"
            >
              {loading ? "Accesso..." : "Accedi"}
            </button>

          </div>

          {/* REGISTER */}
          <p className="text-center text-sm text-gray-300 mt-6">

            non hai un account?{" "}

            <a
              href="/register"
              className="underline hover:text-white"
            >
              registrati ora
            </a>

          </p>

        </form>

      </div>

    </div>
  )
}
