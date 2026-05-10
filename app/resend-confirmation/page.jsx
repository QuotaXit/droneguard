"use client"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabase/client"
import { Mail, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react"

export default function ResendConfirmationPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleResend = async (e) => {
    e.preventDefault()

    if (loading) return

    setLoading(true)
    setSuccess("")
    setError("")

    const cleanEmail = email.trim().toLowerCase()

    if (!cleanEmail) {
      setError("Inserisci la tua email.")
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email: cleanEmail,
        options: {
          emailRedirectTo: "https://www.droneguard.it/auth/callback"
        }
      })

      if (error) {
        setError(error.message || "Non è stato possibile inviare la conferma.")
        return
      }

      setSuccess("Email di conferma inviata. Controlla anche Spam o Posta indesiderata.")
      setEmail("")
    } catch (err) {
      console.error("RESEND CONFIRMATION ERROR:", err)
      setError("Errore imprevisto. Riprova più tardi.")
    } finally {
      setLoading(false)
    }
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
            <Mail size={28} />
          </div>

          <h1 className="text-3xl font-bold">
            Reinvia conferma email
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-300">
            Inserisci l’email usata per registrarti. Ti invieremo un nuovo link di conferma account.
          </p>

          {success && (
            <div className="mt-6 flex gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300">
              <CheckCircle2 size={20} />
              <p>{success}</p>
            </div>
          )}

          {error && (
            <div className="mt-6 flex gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
              <AlertCircle size={20} />
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleResend} className="mt-8">
            <label className="mb-2 block text-sm font-medium text-gray-200">
              Email account
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="esempio@email.it"
              className="w-full rounded-2xl border border-white/10 bg-white/90 px-4 py-4 text-black outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-400/30"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-2xl bg-green-500 px-6 py-4 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Invio in corso..." : "Reinvia email di conferma"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs leading-5 text-gray-400">
            Se usi Outlook o Hotmail controlla anche Spam/Posta indesiderata.
          </p>
        </div>
      </main>
    </div>
  )
}