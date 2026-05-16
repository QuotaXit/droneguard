"use client"

import { Suspense, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabase/client"

function AuthCallbackContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleAuth = async () => {
      const code = searchParams.get("code")
      const next = searchParams.get("next") || "/login"

      if (code) {
        await supabase.auth.exchangeCodeForSession(code)
      }

      router.replace(next)
    }

    handleAuth()
  }, [router, searchParams])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      Accesso sicuro in corso...
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