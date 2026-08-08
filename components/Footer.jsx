"use client"

import Link from "next/link"
import { openCookiePreferences } from "@/components/CookieBanner"

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#080C1D]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="rounded-3xl border border-white/[0.07] bg-[#0D132D] p-6 sm:p-8">

          {/* PARTE SUPERIORE */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-start">

            {/* BRAND */}
            <div>
              <p className="text-2xl font-black tracking-tight text-white">
                Drone
                <span className="text-green-400">
                  Guard
                </span>
              </p>

              <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
                Il punto d&apos;incontro tra clienti e piloti drone.
              </p>
            </div>

            {/* LINK */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">

              {/* NAVIGAZIONE */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                  Piattaforma
                </p>

                <div className="mt-4 flex flex-col gap-3">
                  <Link
                    href="/come-funziona"
                    className="w-fit text-sm text-gray-400 transition hover:text-white"
                  >
                    Come funziona
                  </Link>

                  <Link
                    href="/contattaci"
                    className="w-fit text-sm text-gray-400 transition hover:text-white"
                  >
                    Contattaci
                  </Link>

                  <Link
                    href="/faq"
                    className="w-fit text-sm text-gray-400 transition hover:text-white"
                  >
                    FAQ
                  </Link>
                </div>
              </div>

              {/* LEGALE */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                  Privacy e preferenze
                </p>

                <div className="mt-4 flex flex-col gap-3">
                  <Link
                    href="/privacy-policy"
                    className="w-fit text-sm text-gray-400 transition hover:text-white"
                  >
                    Privacy e Termini
                  </Link>

                  <Link
                    href="/cookie-policy"
                    className="w-fit text-sm text-gray-400 transition hover:text-white"
                  >
                    Cookie Policy
                  </Link>

                  <button
                    type="button"
                    onClick={openCookiePreferences}
                    className="w-fit text-left text-sm text-gray-400 transition hover:text-white"
                  >
                    Gestisci preferenze cookie
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* BARRA FINALE */}
          <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.07] pt-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © 2026 DroneGuard.it — Tutti i diritti riservati
            </p>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />

              <span>
                Marketplace italiano per servizi con drone
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}