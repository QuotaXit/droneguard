"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabase/client"
import { Lock, CheckCircle2 } from "lucide-react"

export default function ResetPasswordPage() {
  const router = useRouter()

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleUpdatePassword = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    if (!password || !confirmPassword) {
      setError("Inserisci e conferma la nuova password.")
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError("La password deve contenere almeno 6 caratteri.")
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError("Le password non coincidono.")
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.updateUser({
      password
    })

    if (error) {
      setError("Link scaduto o non valido. Richiedi un nuovo recupero password.")
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)

    setTimeout(() => {
      router.push("/login")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] text-white">
      <Navbar />

      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/5 p-7 shadow-2xl backdrop-blur-md sm:p-9">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15 text-green-400">
            <Lock size={28} />
          </div>

          <h1 className="text-3xl font-bold leading-tight">
            Crea nuova password
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-300">
            Inserisci una nuova password per accedere al tuo account DroneGuard.
          </p>

          {success && (
            <div className="mt-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} />
                <p>Password aggiornata con successo. Verrai reindirizzato al login.</p>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleUpdatePassword} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-200">
                Nuova password
              </label>

              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nuova password"
                className="w-full rounded-2xl border border-white/10 bg-white/90 px-4 py-4 text-black outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-400/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-200">
                Conferma password
              </label>

              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Conferma password"
                className="w-full rounded-2xl border border-white/10 bg-white/90 px-4 py-4 text-black outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-400/30"
              />
            </div>

            <button
              type="submit"
              disabled={loading || success}
              className="w-full rounded-2xl bg-green-500 px-6 py-4 font-semibold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Aggiornamento..." : "Aggiorna password"}
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}