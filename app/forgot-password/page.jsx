"use client"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabase/client"
import { Mail, ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleResetPassword = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    const cleanEmail = email.trim().toLowerCase()

    if (!cleanEmail) {
      setError("Inserisci l’email del tuo account.")
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.resetPasswordForEmail(cleanEmail, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`
    })

    if (error) {
      setError("Non è stato possibile inviare l’email di recupero. Riprova tra poco.")
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] text-white">
      <Navbar />

      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/5 p-7 shadow-2xl backdrop-blur-md sm:p-9">
          
          <Link
            href="/login"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Torna al login
          </Link>

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15 text-green-400">
            <ShieldCheck size={28} />
          </div>

          <h1 className="text-3xl font-bold leading-tight">
            Recupera password
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-300">
            Inserisci l’email associata al tuo account DroneGuard. Ti invieremo un link sicuro per creare una nuova password.
          </p>

          {success && (
            <div className="mt-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} />
                <p>
                  Email inviata. Controlla la tua casella di posta e segui il link per reimpostare la password.
                </p>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleResetPassword} className="mt-8">
            <label className="mb-2 block text-sm font-medium text-gray-200">
              Email account
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="esempio@email.it"
                className="w-full rounded-2xl border border-white/10 bg-white/90 py-4 pl-12 pr-4 text-black outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-400/30"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-2xl bg-green-500 px-6 py-4 font-semibold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Invio in corso..." : "Invia link recupero password"}
            </button>
          </form>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#0B102A]/60 p-4 text-xs leading-6 text-gray-400">
            Per sicurezza non condividere mai il link ricevuto via email. DroneGuard non ti chiederà mai la password.
          </div>
        </div>
      </main>
    </div>
  )
}