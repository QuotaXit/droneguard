"use client"

import {
  useEffect,
  useState
} from "react"

import {
  supabase
} from "@/lib/supabase/client"

export default function OnlineNowBadge({
  large = false
}) {
  const [
    online,
    setOnline
  ] = useState(0)

  const [
    connected,
    setConnected
  ] = useState(false)

  useEffect(() => {
    const channel =
      supabase
        .channel(
          "droneguard-site-online"
        )
        .on(
          "presence",
          {
            event: "sync"
          },
          () => {
            const state =
              channel
                .presenceState()

            setOnline(
              Object.keys(
                state || {}
              ).length
            )
          }
        )

    channel.subscribe(
      (status) => {
        setConnected(
          status ===
            "SUBSCRIBED"
        )
      }
    )

    return () => {
      supabase.removeChannel(
        channel
      )
    }
  }, [])

  if (large) {
    return (
      <div className="h-full rounded-2xl border border-green-400/20 bg-green-400/10 p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-green-300">
            Online ora
          </p>

          <span
            className={`h-2.5 w-2.5 rounded-full ${
              connected
                ? "bg-green-400"
                : "bg-gray-500"
            }`}
          />
        </div>

        <p className="mt-3 text-3xl font-black sm:text-4xl">
          {online}
        </p>

        <p className="mt-3 text-sm leading-6 text-green-200/60">
          Connessioni attive sul sito in questo momento.
        </p>
      </div>
    )
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-semibold text-green-300">
      <span
        className={`h-2 w-2 rounded-full ${
          connected
            ? "bg-green-400"
            : "bg-gray-500"
        }`}
      />

      {online} online
    </div>
  )
}