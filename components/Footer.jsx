"use client"

import Link from "next/link"
import { openCookiePreferences } from "@/components/CookieBanner"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060B26]">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">

          <Link href="/come-funziona" className="transition hover:text-white">
            Come funziona
          </Link>

          <Link href="/contattaci" className="transition hover:text-white">
            Contattaci
          </Link>

          <Link href="/faq" className="transition hover:text-white">
            FAQ
          </Link>

          <Link href="/privacy-policy" className="transition hover:text-white">
            Privacy Policy
          </Link>

          <Link href="/cookie-policy" className="transition hover:text-white">
            Cookie Policy
          </Link>

          <button
            type="button"
            onClick={openCookiePreferences}
            className="transition hover:text-white"
          >
            Gestisci preferenze cookie
          </button>

        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          © 2026 DroneGuard.it - Tutti i diritti riservati
        </div>

      </div>
    </footer>
  )
}