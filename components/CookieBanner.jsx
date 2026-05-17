"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const choice = localStorage.getItem("cookie-consent")

    if (!choice) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#0B0F2A] p-5 text-white shadow-2xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="text-left">
          <h3 className="text-lg font-semibold">
            Privacy e gestione cookie
          </h3>

          <p className="mt-1 text-sm leading-6 text-gray-300">
            Utilizziamo cookie tecnici necessari al funzionamento del sito e,
            previo consenso, cookie statistici per migliorare l’esperienza utente.
            Continuando puoi accettare o rifiutare i cookie non necessari.
          </p>

          <p className="mt-2 text-xs leading-5 text-gray-400">
            Leggi la nostra{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold text-green-400 underline underline-offset-4 hover:text-green-300"
            >
              Privacy Policy e Termini di Utilizzo
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">

          <button
            onClick={rejectCookies}
            className="rounded-full border border-white/20 px-5 py-2 text-sm text-white transition hover:bg-white/10"
          >
            Rifiuta
          </button>

          <button
            onClick={acceptCookies}
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0B0F2A] transition hover:bg-gray-200"
          >
            Accetta
          </button>

        </div>

      </div>
    </div>
  )
}