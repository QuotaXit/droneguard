"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import ActiveAnnouncements from "@/components/dashboard/ActiveAnnouncements"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import { getDashboardPath, isClient } from "@/lib/auth-utils"

import {
  Briefcase,
  History,
  CreditCard,
  Settings,
  LogOut,
  Plane,
  CheckCircle2
} from "lucide-react"

export default function ClientDashboard() {

  const [userData, setUserData] = useState(null)

  const [completedJobs, setCompletedJobs] = useState(0)

  const [publishedJobs, setPublishedJobs] = useState(0)

  const [emailVerified, setEmailVerified] = useState(false)

  const router = useRouter()

  const profileName = [
  userData?.name,
  userData?.surname
]
  .map((value) => String(value || "").trim())
  .filter(Boolean)
  .join(" ")

const profileInitials = [
  userData?.name,
  userData?.surname
]
  .map((value) =>
    String(value || "")
      .trim()
      .charAt(0)
      .toUpperCase()
  )
  .filter(Boolean)
  .join("")
  .slice(0, 2) || "DG"

    useEffect(() => {
    let active = true

    const loadDashboard = async () => {
      try {
        const {
          data: { user },
          error: authError
        } = await supabase.auth.getUser()

        if (!active) return

        if (authError || !user) {
          router.replace("/login")
          return
        }

        setEmailVerified(
  Boolean(
    user.email_confirmed_at ||
    user.confirmed_at
  )
)

        const {
          data: profile,
          error: profileError
        } = await supabase
          .from("users")
          .select(
            "id, role, name, surname, avatar_url, city, company_name, vat_number, credits"
          )
          .eq("id", user.id)
          .maybeSingle()

        if (!active) return

        if (profileError) {
          console.error(
            "Errore caricamento profilo cliente:",
            profileError
          )

          router.replace("/login")
          return
        }

        if (!profile) {
          console.error(
            "Profilo cliente non trovato per l'utente:",
            user.id
          )

          router.replace("/login")
          return
        }

        if (!isClient(profile.role)) {
          router.replace(
            getDashboardPath(profile.role)
          )

          return
        }

        const [
          publishedResult,
          completedResult
        ] = await Promise.all([
          supabase
            .from("jobs")
            .select("*", {
              count: "exact",
              head: true
            })
            .eq("user_id", user.id),

          supabase
            .from("jobs")
            .select("*", {
              count: "exact",
              head: true
            })
            .eq("user_id", user.id)
            .eq("status", "completed")
        ])

        if (!active) return

        if (publishedResult.error) {
          console.error(
            "Errore conteggio lavori pubblicati:",
            publishedResult.error
          )
        }

        if (completedResult.error) {
          console.error(
            "Errore conteggio lavori completati:",
            completedResult.error
          )
        }

        setUserData(profile)
        setPublishedJobs(
          publishedResult.count || 0
        )
        setCompletedJobs(
          completedResult.count || 0
        )
      } catch (error) {
        console.error(
          "Errore imprevisto dashboard cliente:",
          error
        )

        if (active) {
          router.replace("/login")
        }
      }
    }

    loadDashboard()

    return () => {
      active = false
    }
  }, [router])

  return (
    <div className="min-h-screen flex flex-col text-white">

      {/* NAVBAR */}
      <Navbar logged />

      {/* CONTENUTO */}
      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">

          {/* MENU */}
          <div className="rounded-2xl border border-white/20 bg-white/5 p-5 backdrop-blur-md sm:p-8 lg:col-span-3">

            <h2 className="text-2xl font-[var(--font-krona)] mb-10">
              Menu
            </h2>

                        <ul className="space-y-2 text-base text-gray-300">

              <li>
                <Link
                  href="/dashboard-client/in-progress"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-5 w-5 items-center justify-center"
                  >
                    ⏳
                  </span>

                  <span>Lavori in corso</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard-client/create-job"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-green-500/10 hover:text-green-300"
                >
                  <Plane size={20} />
                  <span>Richiedi volo</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard-client/jobs"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Briefcase size={20} />
                  <span>Lavori attivi</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard-client/history"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <History size={20} />
                  <span>Storico lavori</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard-client/credits"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <CreditCard size={20} />
                  <span>Crediti</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard-client/settings"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Settings size={20} />
                  <span>Impostazioni</span>
                </Link>
              </li>

              <li
                aria-hidden="true"
                className="my-5 border-t border-white/10"
              />

              <li>
                <Link
                  href="/faq"
                  className="block w-full rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/10 hover:text-white"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/come-funziona"
                  className="block w-full rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/10 hover:text-white"
                >
                  Come funziona
                </Link>
              </li>

              <li>
                <Link
                  href="/contattaci"
                  className="block w-full rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/10 hover:text-white"
                >
                  Contattaci
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="block w-full rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/10 hover:text-white"
                >
                  Privacy e Termini
                </Link>
              </li>

              <li
                aria-hidden="true"
                className="my-5 border-t border-white/10"
              />

              <li>
                <button
                  type="button"
                  onClick={async () => {
                    const { error } =
                      await supabase.auth.signOut()

                    if (error) {
                      console.error(
                        "Errore durante il logout:",
                        error
                      )

                      return
                    }

                    window.location.href = "/"
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors hover:bg-red-500/10 hover:text-red-300"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </li>

            </ul>
          </div>

          {/* PROFILO */}
          <div className="rounded-2xl border border-white/20 bg-white/5 p-6 text-center backdrop-blur-md lg:col-span-3">

  <h2 className="text-xl font-[var(--font-krona)] mb-4">
    Profilo
  </h2>

  {/* AVATAR */}
{userData?.avatar_url ? (
  <img
    src={userData.avatar_url}
    alt={`Foto profilo di ${profileName || "cliente"}`}
    width={96}
    height={96}
    className="mx-auto mb-4 h-24 w-24 rounded-full border border-white/20 object-cover"
  />
) : (
  <div
    aria-label={`Iniziali di ${profileName || "cliente"}`}
    className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-green-400/30 bg-gradient-to-br from-green-400/20 to-cyan-400/20 text-2xl font-bold text-green-300"
  >
    {profileInitials}
  </div>
)}

  {/* NOME */}
<h3 className="text-lg font-semibold">
  {profileName || "Profilo cliente"}
</h3>

  {/* BADGE */}
  {emailVerified ? (
  <span className="inline-flex items-center gap-1 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-black">
    ✅ Mail verificata
  </span>
) : (
  <span className="inline-flex items-center gap-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-200">
    ⚠️ Mail non verificata
  </span>
)}

  {/* INFO */}
<div className="mt-6 space-y-4 text-center">
  <div>
    <p className="text-sm font-bold text-white">
      📍 Posizione
    </p>
    <p className="text-gray-300">
      {userData?.city || "Città non impostata"}
    </p>
  </div>

  <div>
    <p className="text-sm font-bold text-white">
      🏢 Azienda
    </p>
    <p className="text-gray-300">
      {userData?.company_name || "Nessuna azienda"}
    </p>
  </div>

  <div>
    <p className="text-sm font-bold text-white">
      🧾 Partita IVA
    </p>
    <p className="text-gray-300 break-words">
      {userData?.vat_number || "P.IVA non inserita"}
    </p>
  </div>
</div>

  {/* CTA */}
<Link
  href="/dashboard-client/settings"
  className="mt-5 inline-flex items-center justify-center rounded-lg border border-white/30 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
>
  Modifica profilo
</Link>

</div>


          {/* DASHBOARD */}
<div className="space-y-6 lg:col-span-6">
  <ActiveAnnouncements />

  <div className="rounded-2xl border border-white/20 bg-[#140a3a] p-5 sm:p-8">

            <h2 className="mb-1 text-xl font-semibold sm:text-2xl">
              Dashboard Cliente
            </h2>

            <p className="text-gray-400 text-sm mb-6">
              Gestisci i tuoi lavori e i crediti
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

              {/* LAVORI PUBBLICATI */}
              <div className="bg-white/5 p-5 rounded-xl border border-white/10">

                <p className="text-gray-400 text-sm">
                  Lavori pubblicati
                </p>

                <h3 className="text-2xl font-semibold mt-2">
                  {publishedJobs}
                </h3>

              </div>

              {/* CREDITI */}
              <div className="bg-white/5 p-5 rounded-xl border border-white/10">

                <p className="text-gray-400 text-sm">
                  Crediti disponibili
                </p>

                <h3 className="text-2xl font-semibold mt-2 text-green-400">
                  {userData?.credits || 0}
                </h3>

              </div>

              {/* COMPLETATI */}
              <div className="bg-white/5 p-5 rounded-xl border border-white/10">

                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <CheckCircle2 size={16} />
                  Lavori completati
                </div>

                <h3 className="text-2xl font-semibold mt-2 text-cyan-400">
                  {completedJobs}
                </h3>

              </div>

            </div>

            {/* CTA */}
<div className="mt-8">
  <Link
    href="/dashboard-client/create-job"
    className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-3 font-semibold text-black transition hover:bg-green-400"
  >
    <Plane size={20} />
    Richiedi un volo
  </Link>
</div>

                    </div>

        </div>

      </div>

    </div>
      </div>
  )
}
