"use client"

import {
  useEffect
} from "react"

import {
  usePathname
} from "next/navigation"

export default function SiteAnalyticsTracker() {
  const pathname =
    usePathname()

  useEffect(() => {
    if (!pathname) {
      return
    }

    /*
     * Il Centro Operativo non deve
     * aumentare le visite pubbliche.
     */
    if (
      pathname === "/admin" ||
      pathname.startsWith(
        "/admin/"
      )
    ) {
      return
    }

    /*
     * Non registriamo localhost.
     */
    if (
      window.location.hostname ===
        "localhost" ||
      window.location.hostname ===
        "127.0.0.1"
    ) {
      return
    }

    fetch(
      "/api/analytics/page-view",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          path:
            pathname
        }),

        keepalive: true
      }
    ).catch(() => {
      /*
       * Le statistiche non devono
       * mai bloccare il sito.
       */
    })
  }, [
    pathname
  ])

  return null
}