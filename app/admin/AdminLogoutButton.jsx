"use client"

import {
  useState
} from "react"

import {
  LogOut
} from "lucide-react"

import {
  supabase
} from "@/lib/supabase/client"


export default function AdminLogoutButton({
  compact = false
}) {
  const [
    loading,
    setLoading
  ] = useState(false)


  async function handleLogout() {
    if (loading) {
      return
    }

    try {
      setLoading(true)

      const {
        error
      } =
        await supabase
          .auth
          .signOut()

      if (error) {
        throw error
      }

      window.location.replace(
        "/login"
      )

    } catch (error) {
      console.error(
        "[admin-logout] Logout fallito:",
        error
      )

      setLoading(false)
    }
  }


  if (compact) {
    return (
      <button
        type="button"
        onClick={handleLogout}
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-400/20 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-300 transition hover:bg-red-500/20 disabled:opacity-50"
      >
        <LogOut size={14} />

        {loading
          ? "Uscita..."
          : "Esci"}
      </button>
    )
  }


  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-red-400/20 bg-red-500/10 px-3 py-2.5 text-xs font-semibold text-red-300 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <LogOut size={15} />

      {loading
        ? "Uscita in corso..."
        : "Esci"}
    </button>
  )
}