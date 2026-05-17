"use client"

import { Suspense, useEffect, useRef, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { createBrowserClient } from "@supabase/ssr"

const getCallbackSupabase = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      isSingleton: false,
      auth: {
        detectSessionInUrl: false
      }
    }
  )

const getSafeNextPath = (next) => {
  if (!next || !next.startsWith("/") || next.startsWith("//")) {
    return "/login"
  }

  return next
}

function AuthCallbackContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const hasHandledCallback = useRef(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (hasHandledCallback.current) return

    hasHandledCallback.current = true

    const handleAuth = async () => {
      const callbackSupabase = getCallbackSupabase()
      const code = searchParams.get("code")
      const next = getSafeNextPath(searchParams.get("next"))

      try {
        if (code) {
          const { data, error } = await callbackSupabase.auth.exchangeCodeForSession(code)

          if (error || !data?.session) {
            console.error("Errore callback Supabase:", error)
            setError("Sessione scaduta o link non valido. Richiedi un nuovo link.")
            return
          }

          router.replace(next)
          return
        }

        const hash = window.location.hash

        if (hash) {
          const params = new URLSearchParams(hash.substring(1))
          const access_token = params.get("access_token")
          const refresh_token = params.get("refresh_token")
          const hashError = params.get("error_description") || params.get("error")

          if (hashError) {
            setError("Link non valido o scaduto. Richiedi un nuovo link di accesso.")
            return
          }

          if (access_token && refresh_token) {
            const { error } = await callbackSupabase.auth.setSession({
              access_token,
              refresh_token
            })

            if (error) {
              console.error("Errore setSession:", error)
              setError("Sessione scaduta o link non valido. Richiedi un nuovo link.")
              return
            }

            router.replace(next)
            return
          }
        }

        setError("Link non valido o scaduto. Richiedi un nuovo link di accesso.")
      } catch (err) {
        console.error("Errore callback Supabase:", err)
        setError("Sessione scaduta o link non valido. Richiedi un nuovo link.")
      }
    }

    handleAuth()
  }, [router, searchParams])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6 text-center">
      {error || "Accesso sicuro in corso..."}
    </div>
  )
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          Accesso sicuro in corso...
        </div>
      }
    >
      <AuthCallbackContent />
    </Suspense>
  )
}