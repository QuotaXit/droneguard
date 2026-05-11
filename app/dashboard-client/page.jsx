"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
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

  const router = useRouter()

  useEffect(() => {

    const getUser = async () => {

      console.log("[dashboard-client] Starting session check", {
        timestamp: new Date().toISOString()
      })

      const {
        data: { user }
      } = await supabase.auth.getUser()

      console.log("[dashboard-client] Session check result:", {
        userId: user?.id,
        sessionExists: !!user,
        userEmail: user?.email,
        timestamp: new Date().toISOString()
      })

      if (!user) {

        console.warn("[dashboard-client] No user found, will redirect after 300ms delay")

        // ⏱️ Debounce 300ms per permettere a Navbar di caricare l'auth
        const timeoutId = setTimeout(() => {

          console.log("[dashboard-client] Executing redirect to /login")

          router.push("/login")

        }, 300)

        return () => clearTimeout(timeoutId)
      }

      // 🔥 DATI UTENTE
      const { data } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .single()

      console.log("[dashboard-client] User data loaded:", {
        userId: user.id,
        role: data?.role
      })

      // 🔥 PROTEZIONE ROLE-BASED - SOLO CLIENT POSSONO ACCEDERE A /DASHBOARD-CLIENT
      if (!isClient(data?.role)) {
        console.log("[dashboard-client] ROLE PROTECTION TRIGGERED")
        console.log("[dashboard-client] REDIRECT SOURCE: app/dashboard-client/page.jsx")
        console.log("[dashboard-client] USER ID:", user.id)
        console.log("[dashboard-client] ROLE FROM USERS:", data?.role)
        
        const correctPath = getDashboardPath(data?.role)
        console.log("[dashboard-client] FINAL REDIRECT:", correctPath)
        
        router.replace(correctPath)
        return
      }

      setUserData(data)

      // 🔥 LAVORI PUBBLICATI
      const { count: published } = await supabase
        .from("jobs")
        .select("*", {
          count: "exact",
          head: true
        })
        .eq("user_id", user.id)

      setPublishedJobs(published || 0)

      // 🔥 LAVORI COMPLETATI
      const { count: completed } = await supabase
        .from("jobs")
        .select("*", {
          count: "exact",
          head: true
        })
        .eq("user_id", user.id)
        .eq("status", "completed")

      setCompletedJobs(completed || 0)

    }

    getUser()

  }, [])

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

            <ul className="space-y-5 text-base text-gray-300 sm:text-lg lg:space-y-6">

<Link href="/dashboard-client/in-progress">
  <div className="flex items-center gap-3">
    ⏳ Lavori in corso
  </div>
</Link>


              <Link href="/dashboard-client/create-job">
                <div className="flex items-center gap-3 cursor-pointer hover:text-green-400 transition">
                  <Plane size={20} />
                  Richiedi volo
                </div>
              </Link>

              <Link href="/dashboard-client/jobs">
                <li className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <Briefcase size={20} />
                  Lavori attivi
                </li>
              </Link>

              <Link href="/dashboard-client/history">
                <li className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <History size={20} />
                  Storico lavori
                </li>
              </Link>

              <Link href="/dashboard-client/credits">
                <li className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <CreditCard size={20} />
                  Crediti
                </li>
              </Link>

              <Link href="/dashboard-client/settings">
                <li className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <Settings size={20} />
                  Impostazioni
                </li>
              </Link>

              <div className="border-t border-white/10 my-6" />
              <div className="space-y-3 text-sm text-gray-300">

  <Link href="/come-funziona">
  <div className="flex items-center gap-3 hover:text-white transition cursor-pointer text-base">
    Come funziona
  </div>
</Link>

<Link href="/contattaci">
  <div className="flex items-center gap-3 hover:text-white transition cursor-pointer text-base">
    Contattaci
  </div>
</Link>

<Link href="/privacy-policy">
  <div className="flex items-center gap-3 hover:text-white transition cursor-pointer text-base">
    Privacy e Policy
  </div>
</Link>

</div>

<div className="border-t border-white/10 my-6" />

              <li
                onClick={async () => {

                  await supabase.auth.signOut()

                  await supabase.auth.signOut()

window.location.href = "/"

                  router.push("/")

                }}
                className="flex items-center gap-3 cursor-pointer hover:text-red-400"
              >
                <LogOut size={20} />
                Logout
              </li>

            </ul>
          </div>

          {/* PROFILO */}
          <div className="rounded-2xl border border-white/20 bg-white/5 p-6 text-center backdrop-blur-md lg:col-span-3">

  <h2 className="text-xl font-[var(--font-krona)] mb-4">
    Profilo
  </h2>

  {/* AVATAR */}
  <img
    src={
      userData?.avatar_url ||
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=400"
    }
    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border border-white/20"
  />

  {/* NOME */}
  <h3 className="text-lg font-semibold">
    {userData?.name || "Nome"} {userData?.surname || ""}
  </h3>

  {/* BADGE */}
  <span className="inline-flex items-center gap-1 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-black">
    ✅ Mail verificata
  </span>

  {/* INFO */}
  <div className="mt-5 space-y-2 text-sm text-gray-300">

    <p>
      📍 {userData?.city || "Città non impostata"}
    </p>

    <p>
      🏢 {userData?.company_name || "Nessuna azienda"}
    </p>

    <p>
      🧾 {userData?.vat_number || "P.IVA non inserita"}
    </p>

    <p className="text-xs text-gray-400 mt-2">
      {userData?.email || "Email non disponibile"}
    </p>

  </div>

  {/* CTA */}
  <Link href="/dashboard-client/settings">
    <button className="mt-5 border border-white/30 px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition">
      Modifica profilo
    </button>
  </Link>

</div>


          {/* DASHBOARD */}
          <div className="rounded-2xl border border-white/20 bg-[#140a3a] p-5 sm:p-8 lg:col-span-6">

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

              <Link href="/dashboard-client/create-job">

                <button className="w-full py-3 rounded-lg bg-green-500 text-black font-medium hover:bg-green-400 transition">
                  Pubblica un lavoro
                </button>

              </Link>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
