"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { LogIn, Bell } from "lucide-react"
import { supabase } from "@/lib/supabase/client"

function normalizeRole(role) {
  return role ? String(role).trim().toLowerCase() : null
}

function cleanEncoding(text) {
  if (!text) return ""

  return text
    .replace(/Ã¨/g, "è")
    .replace(/Ã /g, "à")
    .replace(/Â/g, "")
    .replace(/ðŸš€/g, "🚀")
}

export default function Navbar() {
  const [user, setUser] = useState(null)
  const [userRole, setUserRole] = useState(null)
  const [notifications, setNotifications] = useState([])
  const [open, setOpen] = useState(false)
  const [authLoading, setAuthLoading] = useState(true)

  const realtimeChannelRef = useRef(null)

  useEffect(() => {
    let isActive = true

    const removeRealtimeChannel = () => {
      if (realtimeChannelRef.current) {
        supabase.removeChannel(realtimeChannelRef.current)
        realtimeChannelRef.current = null
      }
    }

    const resetAuthState = () => {
      setUser(null)
      setUserRole(null)
      setNotifications([])
      setOpen(false)
      removeRealtimeChannel()
    }

    const loadUserRole = async (userId) => {
      const { data, error } = await supabase
        .from("users")
        .select("role")
        .eq("id", userId)
        .maybeSingle()

      if (error) {
        console.error("[Navbar] role load failed:", error)
      }

      return normalizeRole(data?.role)
    }

    const applySession = async (session) => {
      const currentUser = session?.user || null

      if (!currentUser) {
        resetAuthState()
        setAuthLoading(false)
        return
      }

      setUser(currentUser)

      const role = await loadUserRole(currentUser.id)

      if (!isActive) return

      setUserRole(role)
      setAuthLoading(false)
    }

    const loadSession = async () => {
      const {
        data: { session },
        error
      } = await supabase.auth.getSession()

      if (error) {
        console.error("[Navbar] getSession failed:", error)
      }

      if (!isActive) return

      await applySession(session)
    }

    loadSession()

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!isActive) return
      applySession(session)
    })

    return () => {
      isActive = false
      subscription?.unsubscribe()
      removeRealtimeChannel()
    }
  }, [])

  useEffect(() => {
    if (!user?.id) return

    let isActive = true

    const loadNotifications = async () => {
      const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })

      if (error) {
        console.error("[notifications] load failed:", error)
        return
      }

      if (!isActive) return

      const onlyMyNotifications = (data || []).filter(
        (notification) => notification.user_id === user.id
      )

      setNotifications(onlyMyNotifications)
    }

    loadNotifications()

    if (realtimeChannelRef.current) {
      supabase.removeChannel(realtimeChannelRef.current)
      realtimeChannelRef.current = null
    }

    const channel = supabase
      .channel(`notifications-${user.id}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "notifications",
          filter: `user_id=eq.${user.id}`
        },
        (payload) => {
          const newNotification = payload.new

          if (newNotification?.user_id !== user.id) return

          setNotifications((prev) => {
            const alreadyExists = prev.some(
              (item) => item.id === newNotification.id
            )

            if (alreadyExists) return prev

            return [newNotification, ...prev]
          })
        }
      )
      .subscribe((status) => {
        if (status === "CHANNEL_ERROR") {
          console.warn("[notifications] realtime channel error:", status)
        }
      })

    realtimeChannelRef.current = channel

    return () => {
      isActive = false

      if (realtimeChannelRef.current) {
        supabase.removeChannel(realtimeChannelRef.current)
        realtimeChannelRef.current = null
      }
    }
  }, [user?.id])

  const markAsRead = async () => {
    if (!user?.id) return

    const { error } = await supabase
      .from("notifications")
      .update({ read: true })
      .eq("user_id", user.id)

    if (error) {
      console.error("[notifications] markAsRead failed:", error)
      return
    }

    setNotifications((prev) =>
      prev
        .filter((notification) => notification.user_id === user.id)
        .map((notification) => ({
          ...notification,
          read: true
        }))
    )
  }

  const unreadCount = notifications.filter(
    (notification) => notification.user_id === user?.id && !notification.read
  ).length

  const normalizedRole = normalizeRole(userRole)

  const profileHref =
    normalizedRole === "cliente" || normalizedRole === "client"
      ? "/dashboard-client"
      : normalizedRole === "pilota" || normalizedRole === "pilot"
        ? "/dashboard"
        : null

  return (
    <nav className="flex items-center justify-between border-b border-white/10 bg-[#0B0F2A] px-8 py-6 text-white">
      <Link href="/">
        <h1 className="cursor-pointer text-lg font-semibold">
          DroneGuard
        </h1>
      </Link>

      <div className="flex items-center gap-4">
        {!user && !authLoading && (
          <Link href="/login">
            <button className="flex items-center gap-3 rounded-full border-2 border-white px-6 py-3 transition hover:bg-white hover:text-black">
              <LogIn size={20} />
              Accedi
            </button>
          </Link>
        )}

        {user && (
          <>
            <Link href="/">
              <button className="rounded-full border border-white px-4 py-2 transition hover:bg-white hover:text-black">
                Home
              </button>
            </Link>

            {profileHref && (
              <Link href={profileHref}>
                <button className="rounded-full border border-white px-4 py-2 transition hover:bg-white hover:text-black">
                  Profilo
                </button>
              </Link>
            )}

            <div className="relative">
              <button
                onClick={() => {
                  setOpen((prev) => !prev)
                  markAsRead()
                }}
                className="relative rounded-full border border-white p-2 transition hover:bg-white hover:text-black"
              >
                <Bell size={20} />

                {unreadCount > 0 && (
                  <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">
                    {unreadCount}
                  </span>
                )}
              </button>

              {open && (
                <div className="absolute right-0 z-50 mt-3 w-80 rounded-xl border border-white/20 bg-[#0F1B4D] p-4 shadow-xl">
                  {notifications.length === 0 && (
                    <p className="text-sm text-gray-400">
                      Nessuna notifica
                    </p>
                  )}

                  {notifications.length > 0 && (
                    <div className="notification-scrollbar max-h-[420px] space-y-3 overflow-y-auto pr-1 scroll-smooth">
                      {notifications
                        .filter((notification) => notification.user_id === user.id)
                        .map((notification) => (
                          <div
                            key={notification.id}
                            className={`rounded-lg border border-white/5 p-3 text-sm transition-colors ${
                              notification.read
                                ? "bg-white/5 hover:bg-white/[0.07]"
                                : "bg-white/10 hover:bg-white/[0.12]"
                            }`}
                          >
                            <p className="font-medium">
                              {cleanEncoding(notification.title) || "Notifica"}
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                              {cleanEncoding(notification.message)}
                            </p>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  )
}