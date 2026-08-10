"use client"

import {
  useEffect,
  useRef
} from "react"

import {
  usePathname
} from "next/navigation"

import {
  supabase
} from "@/lib/supabase/client"

export default function SitePresenceTracker() {
  const pathname =
    usePathname()

  const presenceIdRef =
    useRef(null)

  if (
    !presenceIdRef.current &&
    typeof crypto !==
      "undefined"
  ) {
    presenceIdRef.current =
      crypto.randomUUID()
  }

  const shouldTrack =
    Boolean(pathname) &&
    !pathname.startsWith(
      "/admin"
    )

  useEffect(() => {
    if (!shouldTrack) {
      return
    }

    if (
      window.location.hostname ===
        "localhost" ||
      window.location.hostname ===
        "127.0.0.1"
    ) {
      return
    }

    const channel =
      supabase.channel(
        "droneguard-site-online",
        {
          config: {
            presence: {
              key:
                presenceIdRef.current
            }
          }
        }
      )

    channel.subscribe(
      async (status) => {
        if (
          status !==
          "SUBSCRIBED"
        ) {
          return
        }

        await channel.track({
          online_at:
            new Date()
              .toISOString()
        })
      }
    )

    return () => {
      channel
        .untrack()
        .catch(() => {})

      supabase
        .removeChannel(
          channel
        )
    }
  }, [
    shouldTrack
  ])

  return null
}