"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const CONSENT_VERSION = "1.0"
const STORAGE_KEY = "droneguard-cookie-consent"

function getSavedConsent() {
  if (typeof window === "undefined") return null

  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return null

    return JSON.parse(saved)
  } catch {
    return null
  }
}

export function hasCookieConsent(category) {
  if (typeof window === "undefined") return false

  const consent = getSavedConsent()

  if (!consent) return false
  if (consent.version !== CONSENT_VERSION) return false

  return consent?.preferences?.[category] === true
}

export function openCookiePreferences() {
  if (typeof window === "undefined") return

  window.dispatchEvent(new Event("open-cookie-preferences"))
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)

  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const saved = getSavedConsent()

    if (!saved || saved.version !== CONSENT_VERSION) {
      setShowBanner(true)
      return
    }

    setAnalytics(saved.preferences?.analytics === true)
    setMarketing(saved.preferences?.marketing === true)

    const handleOpenPreferences = () => {
      const current = getSavedConsent()

      setAnalytics(current?.preferences?.analytics === true)
      setMarketing(current?.preferences?.marketing === true)

      setShowPreferences(true)
      setShowBanner(true)
    }

    window.addEventListener("open-cookie-preferences", handleOpenPreferences)

    return () => {
      window.removeEventListener("open-cookie-preferences", handleOpenPreferences)
    }
  }, [])

  useEffect(() => {
    const handleOpenPreferences = () => {
      const current = getSavedConsent()

      setAnalytics(current?.preferences?.analytics === true)
      setMarketing(current?.preferences?.marketing === true)

      setShowPreferences(true)
      setShowBanner(true)
    }

    window.addEventListener("open-cookie-preferences", handleOpenPreferences)

    return () => {
      window.removeEventListener("open-cookie-preferences", handleOpenPreferences)
    }
  }, [])

  const saveConsent = (preferences) => {
    const consent = {
      version: CONSENT_VERSION,
      createdAt: new Date().toISOString(),
      website: "DroneGuard",
      necessary: true,
      preferences: {
        analytics: preferences.analytics,
        marketing: preferences.marketing,
      },
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))

    window.dispatchEvent(
      new CustomEvent("droneguard-cookie-consent-updated", {
        detail: consent,
      })
    )

    setAnalytics(preferences.analytics)
    setMarketing(preferences.marketing)
    setShowBanner(false)
    setShowPreferences(false)
  }

  const rejectAll = () => {
    saveConsent({
      analytics: false,
      marketing: false,
    })
  }

  const acceptAll = () => {
    saveConsent({
      analytics: true,
      marketing: true,
    })
  }

  const savePreferences = () => {
    saveConsent({
      analytics,
      marketing,
    })
  }

  if (!showBanner) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#0B0F2A] p-5 text-white shadow-2xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="text-left">
            <h3 id="cookie-title" className="text-lg font-semibold">
              Privacy e gestione cookie
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-300">
              DroneGuard utilizza cookie tecnici necessari al funzionamento del
              sito. Con il tuo consenso possiamo usare anche cookie statistici
              e, se presenti, strumenti di marketing o terze parti per migliorare
              il servizio e misurare le prestazioni del sito.
            </p>

            <p className="mt-2 text-xs leading-5 text-gray-400">
              Puoi accettare tutti i cookie, rifiutare quelli non necessari o
              personalizzare le tue preferenze. Potrai modificarle in qualsiasi
              momento.
            </p>

            <p className="mt-2 text-xs leading-5 text-gray-400">
              Leggi la nostra{" "}
              <Link
                href="/privacy-policy"
                className="font-semibold text-green-400 underline underline-offset-4 hover:text-green-300"
              >
                Privacy Policy
              </Link>{" "}
              e la{" "}
              <Link
                href="/cookie-policy"
                className="font-semibold text-green-400 underline underline-offset-4 hover:text-green-300"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>

          <button
            onClick={rejectAll}
            aria-label="Chiudi e rifiuta i cookie non necessari"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-lg text-white transition hover:bg-white/10"
          >
            ×
          </button>
        </div>

        {showPreferences && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h4 className="text-base font-semibold">Preferenze cookie</h4>

            <div className="mt-4 space-y-4 text-sm">
              <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[#080C22] p-4">
                <div>
                  <p className="font-medium text-white">
                    Cookie tecnici necessari
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-400">
                    Servono per il funzionamento del sito, la sicurezza, il
                    salvataggio delle preferenze e le funzioni essenziali.
                    Non possono essere disattivati dal banner.
                  </p>
                </div>

                <span className="shrink-0 rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-300">
                  Sempre attivi
                </span>
              </div>

              <label className="flex cursor-pointer items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[#080C22] p-4">
                <div>
                  <p className="font-medium text-white">Cookie statistici</p>
                  <p className="mt-1 text-xs leading-5 text-gray-400">
                    Aiutano DroneGuard a capire quali pagine funzionano meglio,
                    quante visite arrivano e come migliorare il sito.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 h-5 w-5 shrink-0 accent-green-500"
                />
              </label>

              <label className="flex cursor-pointer items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[#080C22] p-4">
                <div>
                  <p className="font-medium text-white">Cookie marketing</p>
                  <p className="mt-1 text-xs leading-5 text-gray-400">
                    Possono essere usati per campagne pubblicitarie, pixel,
                    remarketing o strumenti di terze parti, solo se presenti
                    sul sito.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1 h-5 w-5 shrink-0 accent-green-500"
                />
              </label>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
          <button
            onClick={rejectAll}
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Rifiuta tutto
          </button>

          <button
            onClick={() => setShowPreferences((value) => !value)}
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {showPreferences ? "Nascondi preferenze" : "Personalizza"}
          </button>

          {showPreferences ? (
            <button
              onClick={savePreferences}
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0B0F2A] transition hover:bg-gray-200"
            >
              Salva preferenze
            </button>
          ) : (
            <button
              onClick={acceptAll}
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0B0F2A] transition hover:bg-gray-200"
            >
              Accetta tutto
            </button>
          )}
        </div>
      </div>
    </div>
  )
}