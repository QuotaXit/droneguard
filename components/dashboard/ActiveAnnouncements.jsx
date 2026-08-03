"use client"

import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import {
  CircleCheck,
  ExternalLink,
  Info,
  OctagonAlert,
  TriangleAlert,
  X
} from "lucide-react"

import { supabase } from "@/lib/supabase/client"

const SEVERITY_CONFIG = {
  info: {
    icon: Info,
    label: "Informazione",
    container:
      "border-cyan-400/25 bg-cyan-500/10",
    iconBox:
      "border-cyan-400/20 bg-cyan-500/15 text-cyan-300",
    label: "text-cyan-300",
    link:
      "border-cyan-400/20 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/20"
  },

  success: {
    icon: CircleCheck,
    label: "Aggiornamento",
    container:
      "border-emerald-400/25 bg-emerald-500/10",
    iconBox:
      "border-emerald-400/20 bg-emerald-500/15 text-emerald-300",
    label: "text-emerald-300",
    link:
      "border-emerald-400/20 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500/20"
  },

  warning: {
    icon: TriangleAlert,
    label: "Avviso",
    container:
      "border-amber-400/25 bg-amber-500/10",
    iconBox:
      "border-amber-400/20 bg-amber-500/15 text-amber-300",
    label: "text-amber-300",
    link:
      "border-amber-400/20 bg-amber-500/10 text-amber-200 hover:bg-amber-500/20"
  },

  critical: {
    icon: OctagonAlert,
    label: "Avviso importante",
    container:
      "border-red-400/30 bg-red-500/10",
    iconBox:
      "border-red-400/25 bg-red-500/15 text-red-300",
    label: "text-red-300",
    link:
      "border-red-400/25 bg-red-500/10 text-red-200 hover:bg-red-500/20"
  }
}

function getSeverityConfig(severity) {
  return (
    SEVERITY_CONFIG[
      String(severity || "")
        .trim()
        .toLowerCase()
    ] || SEVERITY_CONFIG.info
  )
}

function isSafeInternalLink(value) {
  if (typeof value !== "string") {
    return false
  }

  const link = value.trim()

  return (
    link.startsWith("/") &&
    !link.startsWith("//")
  )
}

export default function ActiveAnnouncements() {
  const [announcements, setAnnouncements] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  const [errorMessage, setErrorMessage] =
    useState("")

  const [dismissingId, setDismissingId] =
    useState("")

  const loadAnnouncements = useCallback(
    async () => {
      setLoading(true)
      setErrorMessage("")

      const {
        data,
        error
      } = await supabase.rpc(
        "get_my_active_announcements"
      )

      if (error) {
        console.error(
          "[announcements] load failed:",
          error
        )

        setAnnouncements([])
        setErrorMessage(
          "Non è stato possibile caricare gli avvisi."
        )
        setLoading(false)
        return
      }

      setAnnouncements(
        Array.isArray(data) ? data : []
      )

      setLoading(false)
    },
    []
  )

  useEffect(() => {
    loadAnnouncements()
  }, [loadAnnouncements])

  const dismissAnnouncement = async (
    announcementId
  ) => {
    if (
      !announcementId ||
      dismissingId
    ) {
      return
    }

    setDismissingId(announcementId)
    setErrorMessage("")

    const {
      data,
      error
    } = await supabase.rpc(
      "dismiss_my_announcement",
      {
        p_announcement_id:
          announcementId
      }
    )

    if (error || data !== true) {
      console.error(
        "[announcements] dismiss failed:",
        error
      )

      setErrorMessage(
        "Non è stato possibile chiudere l’avviso."
      )

      setDismissingId("")
      return
    }

    setAnnouncements((current) =>
      current.filter(
        (announcement) =>
          announcement.id !==
          announcementId
      )
    )

    setDismissingId("")
  }

  if (loading) {
    return (
      <div className="space-y-3">
        <div className="h-28 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
      </div>
    )
  }

  if (
    announcements.length === 0 &&
    !errorMessage
  ) {
    return null
  }

  return (
    <section
      aria-label="Comunicazioni DroneGuard"
      className="space-y-3"
    >
      {errorMessage && (
        <div className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3">
          <p className="text-sm text-red-200">
            {errorMessage}
          </p>
        </div>
      )}

      {announcements.map(
        (announcement) => {
          const config =
            getSeverityConfig(
              announcement.severity
            )

          const SeverityIcon =
            config.icon

          const safeLink =
            isSafeInternalLink(
              announcement.link
            )
              ? announcement.link.trim()
              : ""

          const isDismissing =
            dismissingId ===
            announcement.id

          return (
            <article
              key={announcement.id}
              className={`relative overflow-hidden rounded-2xl border p-5 sm:p-6 ${config.container}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${config.iconBox}`}
                >
                  <SeverityIcon
                    size={21}
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p
                        className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${config.label}`}
                      >
                        {config.label}
                      </p>

                      <h2 className="mt-1 pr-8 text-lg font-semibold text-white sm:text-xl">
                        {announcement.title}
                      </h2>
                    </div>

                    {announcement.is_dismissible && (
                      <button
                        type="button"
                        aria-label="Chiudi avviso"
                        title="Chiudi avviso"
                        disabled={isDismissing}
                        onClick={() =>
                          dismissAnnouncement(
                            announcement.id
                          )
                        }
                        className="absolute right-4 top-4 rounded-lg p-2 text-white/60 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <X
                          size={18}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>

                  <p className="mt-3 whitespace-pre-line text-sm leading-6 text-gray-200">
                    {announcement.message}
                  </p>

                  {safeLink && (
                    <Link
                      href={safeLink}
                      className={`mt-4 inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${config.link}`}
                    >
                      Apri collegamento

                      <ExternalLink
                        size={15}
                        aria-hidden="true"
                      />
                    </Link>
                  )}

                  {!announcement.is_dismissible && (
                    <p className="mt-4 text-xs text-white/50">
                      Comunicazione obbligatoria
                    </p>
                  )}
                </div>
              </div>
            </article>
          )
        }
      )}
    </section>
  )
}