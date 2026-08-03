"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase/client"

export default function AccountSuspendedPage() {
  const [loading, setLoading] =
    useState(false)

  const logout = async () => {
    try {
      setLoading(true)
      await supabase.auth.signOut()
    } finally {
      window.location.href = "/login"
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#070A18] via-[#0F1B4D] to-[#070A18] p-4 text-white">
      <div className="w-full max-w-lg rounded-3xl border border-red-400/20 bg-[#0B1028] p-8 text-center shadow-2xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-400/10 text-3xl text-red-300">
          !
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
          Account sospeso
        </p>

        <h1 className="mt-3 text-3xl font-black">
          Accesso temporaneamente bloccato
        </h1>

        <p className="mt-4 leading-7 text-gray-400">
          Questo account non può accedere alle
          funzioni riservate di DroneGuard.
          Contatta l'assistenza per ulteriori
          informazioni.
        </p>

        <a
          href="mailto:assistenza@droneguard.it"
          className="mt-6 block rounded-xl border border-white/10 px-5 py-3 font-semibold text-gray-200 transition hover:bg-white/10"
        >
          Contatta assistenza
        </a>

        <button
          type="button"
          onClick={logout}
          disabled={loading}
          className="mt-3 w-full rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-400 disabled:opacity-50"
        >
          {loading
            ? "Uscita..."
            : "Esci dall'account"}
        </button>
      </div>
    </main>
  )
}