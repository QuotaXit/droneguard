"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import { isPilot, getDashboardPath } from "@/lib/auth-utils"

export default function ProfilePage() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    let isActive = true

    const redirectByRole = async () => {
      const {
        data: { user },
        error: userError
      } = await supabase.auth.getUser()

      if (userError) {
        console.error("[dashboard/profile] getUser failed:", userError)
      }

      if (!user) {
        const finalRedirect = "/login"

        console.log("[dashboard/profile] redirect check:", {
          userId: null,
          roleReadFromUsers: null,
          pathname,
          finalRedirect,
          reason: "User not authenticated"
        })

        if (isActive) {
          router.replace(finalRedirect)
        }

        return
      }

      const { data, error } = await supabase
        .from("users")
        .select("role")
        .eq("id", user.id)
        .single()

      if (error) {
        console.error("[dashboard/profile] role load failed:", error)
      }

      // 🔥 PROTEZIONE: SOLO PILOTI POSSONO ACCEDERE A /dashboard/profile
      // Se non sei un pilota, vieni reindirizzato alla tua dashboard giusta
      if (!isPilot(data?.role)) {
        const finalRedirect = getDashboardPath(data?.role)
        
        console.log("[dashboard/profile] redirect check - USER NOT PILOT:", {
          userId: user.id,
          roleReadFromUsers: data?.role,
          pathname,
          finalRedirect,
          reason: "User is not a pilot - redirecting to correct dashboard"
        })

        if (isActive) {
          router.replace(finalRedirect)
        }

        return
      }

      console.log("[dashboard/profile] redirect check - USER IS PILOT:", {
        userId: user.id,
        roleReadFromUsers: data?.role,
        pathname,
        finalRedirect: pathname,
        reason: "User is pilot - allowing access to profile page"
      })
    }

    redirectByRole()

    return () => {
      isActive = false
    }
  }, [pathname, router])

  return null
  }
