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
    <Navbar logged />

    <main className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

        {/* HEADER */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-400">
            Area cliente
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Dashboard Cliente
          </h1>

          <p className="mt-3 text-sm text-gray-400 sm:text-base">
            Gestisci i tuoi lavori, il profilo e i crediti DroneGuard.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">

          {/* SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">

            {/* PROFILO */}
            <section className="rounded-3xl border border-white/10 bg-[#140a3a] p-6 shadow-xl shadow-black/10">
              <div className="text-center">
                {userData?.avatar_url ? (
                  <img
                    src={userData.avatar_url}
                    alt={`Foto profilo di ${profileName || "cliente"}`}
                    width={96}
                    height={96}
                    className="mx-auto h-24 w-24 rounded-full border-2 border-white/20 object-cover shadow-lg"
                  />
                ) : (
                  <div
                    aria-label={`Iniziali di ${profileName || "cliente"}`}
                    className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-green-400/30 bg-gradient-to-br from-green-400/20 to-cyan-400/20 text-2xl font-bold text-green-300"
                  >
                    {profileInitials}
                  </div>
                )}

                <h2 className="mt-4 text-2xl font-bold">
                  {profileName || "Profilo cliente"}
                </h2>

                {emailVerified ? (
                  <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-400">
                    ✓ Mail verificata
                  </span>
                ) : (
                  <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-300">
                    Mail non verificata
                  </span>
                )}

                <div className="mt-6 space-y-2 border-t border-white/10 pt-5">

                  <div className="rounded-xl bg-white/[0.03] px-4 py-3 text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600">
                      Posizione
                    </p>

                    <p className="mt-1 text-sm text-gray-300">
                      {userData?.city || "Città non impostata"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] px-4 py-3 text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600">
                      Ragione sociale
                    </p>

                    <p className="mt-1 break-words text-sm text-gray-300">
                      {userData?.company_name || "Non inserita"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] px-4 py-3 text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600">
                      Partita IVA
                    </p>

                    <p className="mt-1 break-words text-sm text-gray-300">
                      {userData?.vat_number || "P.IVA non inserita"}
                    </p>
                  </div>
                </div>

                <Link
                  href="/dashboard-client/settings"
                  className="mt-5 flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold transition hover:bg-white/[0.08]"
                >
                  Modifica profilo
                </Link>
              </div>
            </section>

            {/* MENU */}
            <section className="rounded-3xl border border-white/10 bg-[#111735] p-5 shadow-xl shadow-black/10">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                  Navigazione
                </p>

                <h2 className="mt-1 text-lg font-bold">
                  Menu
                </h2>
              </div>

              <nav>
                <ul className="space-y-1 text-sm text-gray-300">

                  <li>
                    <Link
                      href="/dashboard-client/in-progress"
                      className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      <Briefcase size={18} />
                      <span>Lavori in corso</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/dashboard-client/create-job"
                      className="flex items-center gap-3 rounded-xl bg-green-400/[0.06] px-3 py-3 text-green-300 transition hover:bg-green-400/10"
                    >
                      <Plane size={18} />
                      <span>Pubblica lavoro</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/dashboard-client/jobs"
                      className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      <Briefcase size={18} />
                      <span>Lavori attivi</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/dashboard-client/history"
                      className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      <History size={18} />
                      <span>Storico lavori</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/dashboard-client/credits"
                      className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      <CreditCard size={18} />
                      <span>Crediti</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/dashboard-client/settings"
                      className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      <Settings size={18} />
                      <span>Impostazioni</span>
                    </Link>
                  </li>
                </ul>

                <div className="my-5 border-t border-white/[0.07]" />

                <div className="space-y-1">
                  <Link
                    href="/faq"
                    className="block rounded-xl px-3 py-2.5 text-sm text-gray-500 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    FAQ
                  </Link>

                  <Link
                    href="/come-funziona"
                    className="block rounded-xl px-3 py-2.5 text-sm text-gray-500 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    Come funziona
                  </Link>

                  <Link
                    href="/contattaci"
                    className="block rounded-xl px-3 py-2.5 text-sm text-gray-500 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    Contattaci
                  </Link>

                  <Link
                    href="/privacy-policy"
                    className="block rounded-xl px-3 py-2.5 text-sm text-gray-500 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    Privacy e Termini
                  </Link>
                </div>

                <div className="my-5 border-t border-white/[0.07]" />

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
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-gray-400 transition hover:bg-red-500/10 hover:text-red-300"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </nav>
            </section>
          </aside>

          {/* AREA PRINCIPALE */}
          <div className="space-y-6">

            <ActiveAnnouncements />

            {/* DASHBOARD CARD */}
            <section className="rounded-3xl border border-white/10 bg-[#140a3a] p-5 shadow-xl shadow-black/10 sm:p-6 lg:p-8">

              <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-400">
                    Panoramica
                  </p>

                  <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                    Bentornato{userData?.name ? `, ${userData.name}` : ""}
                  </h2>

                  <p className="mt-2 text-sm text-gray-400">
                    Controlla rapidamente lo stato dei tuoi lavori e dei tuoi crediti.
                  </p>
                </div>

                <Link
                  href="/dashboard-client/create-job"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-bold text-black transition hover:bg-green-400"
                >
                  <Plane size={18} />
                  Pubblica lavoro
                </Link>
              </div>

              {/* STATS */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5">
                  <p className="text-sm text-gray-500">
                    Lavori pubblicati
                  </p>

                  <div className="mt-4 flex items-end justify-between">
                    <p className="text-4xl font-black text-white">
                      {publishedJobs}
                    </p>

                    <Briefcase
                      size={22}
                      className="text-gray-600"
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-green-400/10 bg-green-400/[0.045] p-5">
                  <p className="text-sm text-gray-500">
                    Crediti disponibili
                  </p>

                  <div className="mt-4 flex items-end justify-between">
                    <p className="text-4xl font-black text-green-400">
                      {userData?.credits || 0}
                    </p>

                    <CreditCard
                      size={22}
                      className="text-green-400/40"
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.035] p-5">
                  <p className="text-sm text-gray-500">
                    Lavori completati
                  </p>

                  <div className="mt-4 flex items-end justify-between">
                    <p className="text-4xl font-black text-cyan-400">
                      {completedJobs}
                    </p>

                    <CheckCircle2
                      size={22}
                      className="text-cyan-400/40"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* AZIONI RAPIDE */}
            <section className="rounded-3xl border border-white/10 bg-[#111735] p-5 shadow-xl shadow-black/10 sm:p-6">
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                  Azioni rapide
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Cosa vuoi fare?
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                <Link
                  href="/dashboard-client/create-job"
                  className="group rounded-2xl border border-green-400/15 bg-green-400/[0.06] p-4 transition hover:-translate-y-0.5 hover:bg-green-400/10"
                >
                  <Plane
                    size={20}
                    className="text-green-400"
                  />

                  <p className="mt-3 font-bold">
                    Pubblica lavoro
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Crea una nuova richiesta per i piloti.
                  </p>
                </Link>

                <Link
                  href="/dashboard-client/jobs"
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
                >
                  <Briefcase
                    size={20}
                    className="text-blue-300"
                  />

                  <p className="mt-3 font-bold">
                    Lavori attivi
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Gestisci le richieste già pubblicate.
                  </p>
                </Link>

                <Link
                  href="/dashboard-client/credits"
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
                >
                  <CreditCard
                    size={20}
                    className="text-purple-300"
                  />

                  <p className="mt-3 font-bold">
                    Crediti
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Controlla il saldo o acquista nuovi crediti.
                  </p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
)
}
