"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060B26]">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">

          <Link href="/come-funziona" className="hover:text-white transition">
            Come funziona
          </Link>

          <Link href="/contattaci" className="hover:text-white transition">
            Contattaci
          </Link>

          <Link href="/faq" className="hover:text-white transition">
            FAQ
          </Link>

          <Link href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>

        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          © 2026 DroneGuard.it
        </div>

      </div>
    </footer>
  )
}