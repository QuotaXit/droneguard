"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import { getDashboardPath, isPilot } from "@/lib/auth-utils"

import {
  Briefcase,
  FileText,
  CreditCard,
  Settings,
  LogOut,
  Clock3,
  CheckCircle2,
  Plane,
  ClipboardList,
  Mail,
  BadgeCheck,
  ShieldCheck,
  UploadCloud,
  X,
  Star
} from "lucide-react"

const ACTIVE_JOB_STATUSES = ["assigned", "accepted", "in_progress"]
const APPLICATION_ACTIVE_STATUSES = ["pending"]


function getFullName(userData) {
  return `${userData?.name || ""} ${userData?.surname || ""}`.trim() || "Pilota"
}

function getDisplayPosition(userData) {
  return userData?.city || userData?.location || "Posizione non impostata"
}

function getJobTimestamp(job) {
  return job?.job_date || job?.created_at || ""
}

function sortJobsByDate(jobs) {
  return [...jobs].sort((a, b) => {
    const aDate = new Date(getJobTimestamp(a) || 0).getTime()
    const bDate = new Date(getJobTimestamp(b) || 0).getTime()
    return aDate - bDate
  })
}

function formatJobDate(value) {
  if (!value) return "Data non disponibile"

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(date)
}

function getCountdownLabel(jobDate) {
  if (!jobDate) {
    return "Data da confermare"
  }

  const now = new Date()
  const target = new Date(jobDate)

  if (Number.isNaN(target.getTime())) {
    return "Data non valida"
  }

  const diff = target.getTime() - now.getTime()
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const startOfTarget = new Date(
    target.getFullYear(),
    target.getMonth(),
    target.getDate()
  )
  const dayDiff = Math.floor(
    (startOfTarget.getTime() - startOfToday.getTime()) / (1000 * 60 * 60 * 24)
  )

  if (dayDiff < 0 && diff < 0) {
    return "da chiudere"
  }

  if (dayDiff === 0) {
    return "in corso"
  }

  if (diff <= 0) {
    return "in corso"
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)

  return `mancano ${days} giorni ${hours} ore`
}

function getStatusLabel(status) {
  if (status === "in_progress") {
    return "IN CORSO"
  }

  if (status === "accepted") {
    return "ACCETTATO"
  }

  return "ASSEGNATO"
}

export default function Dashboard() {
  const router = useRouter()

  const [userData, setUserData] = useState(null)
  const [completedJobs, setCompletedJobs] = useState(0)
  const [activeJobs, setActiveJobs] = useState(0)
  const [applications, setApplications] = useState(0)
  const [credits, setCredits] = useState(0)
  const [upcomingJobs, setUpcomingJobs] = useState([])

  const [showCertRequest, setShowCertRequest] = useState(false)
  const [certFile, setCertFile] = useState(null)
  const [certSending, setCertSending] = useState(false)
  const [certMessage, setCertMessage] = useState("")


  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser()

      console.log("DASHBOARD AUTH USER:", user)
      console.log("DASHBOARD AUTH USER ID:", user?.id)

      if (!user) {
        setTimeout(() => {
          router.push("/login")
        }, 300)

        return
      }

      const { data, error } = await supabase
        .from("users")
        .select("id,email,role,name,surname,avatar_url,bio,drone,city,location,services,certifications,experience,credits,verified,cert_enac_verified")
        .eq("id", user.id)
        .maybeSingle()

      if (error) {
        console.error("[DASHBOARD] Error loading user profile:", error)
        console.log("[DASHBOARD] REDIRECT SOURCE: app/dashboard/page.jsx (query error)")
        console.log("[DASHBOARD] USER ID:", user.id)
        console.log("[DASHBOARD] FINAL REDIRECT: /login")
        router.replace("/login")
        return
      }

      if (!data) {
        console.error("[DASHBOARD] User profile not found in database")
        console.log("[DASHBOARD] REDIRECT SOURCE: app/dashboard/page.jsx (profile missing)")
        console.log("[DASHBOARD] USER ID:", user.id)
        console.log("[DASHBOARD] FINAL REDIRECT: /login")
        console.warn("[DASHBOARD] DO NOT CREATE USER HERE - Profile must exist from registration")
        router.replace("/login")
        return
      }

      if (!isPilot(data.role)) {
        console.log("[DASHBOARD] ROLE PROTECTION TRIGGERED - User is not a pilot")
        console.log("[DASHBOARD] REDIRECT SOURCE: app/dashboard/page.jsx")
        console.log("[DASHBOARD] USER ID:", user.id)
        console.log("[DASHBOARD] ROLE FROM USERS:", data.role)

        const correctPath = getDashboardPath(data.role)
        console.log("[DASHBOARD] FINAL REDIRECT:", correctPath)

        router.replace(correctPath)
        return
      }

      console.log("DASHBOARD USER DATA:", data)

      setUserData(data)
      setCredits(data?.credits || 0)

      const { count: completed } = await supabase
        .from("applications")
        .select("*", {
          count: "exact",
          head: true
        })
        .eq("pilot_id", user.id)
        .eq("status", "completed")

      setCompletedJobs(completed || 0)

      const { count: waiting } = await supabase
        .from("applications")
        .select("*", {
          count: "exact",
          head: true
        })
        .eq("pilot_id", user.id)
        .eq("status", "pending")

      setActiveJobs(waiting || 0)

      const { count: assignedCount } = await supabase
        .from("jobs")
        .select("*", {
          count: "exact",
          head: true
        })
        .eq("assigned_pilot", user.id)
        .in("status", ACTIVE_JOB_STATUSES)

      setApplications(assignedCount || 0)

      const {
        data: assignedJobs,
        error: assignedJobsError
      } = await supabase
        .from("jobs")
        .select("*")
        .eq("assigned_pilot", user.id)
        .in("status", ACTIVE_JOB_STATUSES)

      if (assignedJobsError) {
        console.error("Errore caricamento jobs assegnati:", assignedJobsError)
      }

      const {
        data: acceptedApplications,
        error: acceptedApplicationsError
      } = await supabase
        .from("applications")
        .select("job_id")
        .eq("pilot_id", user.id)
        .in("status", APPLICATION_ACTIVE_STATUSES)

      if (acceptedApplicationsError) {
        console.error("Errore caricamento applications accettate:", acceptedApplicationsError)
      }

      const applicationJobIds = [
        ...new Set(
          (acceptedApplications || [])
            .map((application) => application.job_id)
            .filter(Boolean)
        )
      ]

      let applicationJobs = []

      if (applicationJobIds.length > 0) {
        const {
          data: jobsFromApplications,
          error: jobsFromApplicationsError
        } = await supabase
          .from("jobs")
          .select("*")
          .in("id", applicationJobIds)
          .in("status", ACTIVE_JOB_STATUSES)

        if (jobsFromApplicationsError) {
          console.error("Errore caricamento jobs da applications:", jobsFromApplicationsError)
        } else {
          applicationJobs = jobsFromApplications || []
        }
      }

      const mergedJobsMap = new Map()

      ;[...(assignedJobs || []), ...applicationJobs].forEach((job) => {
        if (!job?.id) return
        mergedJobsMap.set(job.id, job)
      })

      const orderedUpcomingJobs = sortJobsByDate(
        Array.from(mergedJobsMap.values())
      )

      console.log("PILOT UPCOMING JOBS:", orderedUpcomingJobs)

      setUpcomingJobs(orderedUpcomingJobs)
    }

    getUser()
  }, [router])

  const fullName = getFullName(userData)
  const displayPosition = getDisplayPosition(userData)

  const handleCertificationRequest = async (e) => {
  e.preventDefault()

  if (!certFile) {
    setCertMessage("Carica una foto o un PDF della certificazione.")
    return
  }

  try {
    setCertSending(true)
    setCertMessage("")

    const formData = new FormData()
    formData.append("name", fullName)
    formData.append("email", userData?.email || "")
    formData.append("certification", userData?.certifications || "Non indicata")
    formData.append("file", certFile)

    const response = await fetch("/api/certification-request", {
      method: "POST",
      body: formData
    })

    if (!response.ok) {
      throw new Error("Errore invio richiesta")
    }

    setCertMessage("Richiesta inviata. Attendi fino a 24h per la verifica.")
    setCertFile(null)
  } catch (error) {
    console.error(error)
    setCertMessage("Errore durante l'invio. Riprova più tardi.")
  } finally {
    setCertSending(false)
  }
}

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="h-fit border border-white/20 rounded-2xl bg-white/5 p-5 backdrop-blur-md sm:p-8 lg:col-span-3 lg:min-h-[520px]">
            <h2 className="text-2xl font-[var(--font-krona)] mb-10">
              Menu
            </h2>

            <div className="space-y-5 text-base text-gray-300 sm:text-lg lg:space-y-6">
              <Link href="/dashboard/jobs">
                <div className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                  <Briefcase size={20} />
                  Storico lavori
                </div>
              </Link>

              <Link href="/dashboard/jobs-board">
                <div className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                  <FileText size={20} />
                  Bacheca lavori
                </div>
              </Link>

              <Link href="/dashboard/job-data">
                <div className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                  <ClipboardList size={20} />
                  Dati lavoro
                </div>
              </Link>

<Link href="/dashboard/reviews">
  <div className="flex items-center gap-3 hover:text-white transition cursor-pointer">
    <Star size={20} />
    Recensioni
  </div>
</Link>


              <Link href="/dashboard/credits">
                <div className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                  <CreditCard size={20} />
                  Crediti
                </div>
              </Link>

              <Link href="/dashboard/settings">
                <div className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                  <Settings size={20} />
                  Impostazioni
                </div>
              </Link>

              <div className="border-t border-white/10 my-6" />

              <div
                onClick={async () => {
                  await supabase.auth.signOut()
                  router.refresh()
                  router.push("/")
                }}
                className="hover:text-red-400 cursor-pointer flex items-center gap-3 transition"
              >
                <LogOut size={20} />
                Logout
              </div>
              <div className="border-t border-white/10 my-6" />

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
          </div>

          <div className="lg:col-span-3 lg:order-3">
            <div className="border border-white/20 rounded-2xl p-6 bg-white/5 backdrop-blur-md">
              <h2 className="text-xl font-[var(--font-krona)] mb-4">
                Profilo
              </h2>

              <div className="text-center">
                <img
                  src={
                    userData?.avatar_url ||
                    "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=400"
                  }
                  alt={fullName}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />

                <h3 className="text-xl font-semibold">
                  {fullName}
                </h3>

                <div className="mt-3 space-y-2">
  <div className="flex items-center justify-center gap-2">
    <Mail size={14} />
    <span className="text-xs bg-green-500 px-3 py-1 rounded-full inline-flex items-center gap-1">
      <BadgeCheck size={13} />
      mail verificata
    </span>
  </div>

  <div className="flex items-center justify-center gap-2">
    <ShieldCheck size={14} />
    {userData?.cert_enac_verified ? (
      <span className="text-xs bg-green-500 px-3 py-1 rounded-full inline-flex items-center gap-1">
        <BadgeCheck size={13} />
        Certif. ENAC verificata
      </span>
    ) : (
      <button
        type="button"
        onClick={() => setShowCertRequest(true)}
        className="text-xs bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold hover:bg-yellow-400 transition"
      >
        Certif. ENAC non verificata
      </button>
    )}
  </div>
</div>

{showCertRequest && (
  <div className="rounded-2xl border border-white/15 bg-[#0B0F2A]/70 p-4">
    <div className="mb-3 flex items-center justify-between">
      <h4 className="text-sm font-semibold text-white">
        Richiesta verifica ENAC
      </h4>

      <button
        type="button"
        onClick={() => setShowCertRequest(false)}
        className="text-gray-400 hover:text-white"
      >
        <X size={16} />
      </button>
    </div>

    <form onSubmit={handleCertificationRequest} className="space-y-3">
      <p className="text-xs leading-5 text-gray-300">
        Carica una foto chiara del patentino ENAC oppure il documento PDF digitale.
      </p>

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 p-4 text-center hover:bg-white/10">
        <UploadCloud size={24} className="mb-2 text-green-400" />

        <span className="text-xs text-gray-300">
          {certFile ? certFile.name : "Carica foto o PDF"}
        </span>

        <input
          type="file"
          accept="image/*,.pdf"
          onChange={(e) => setCertFile(e.target.files?.[0] || null)}
          className="hidden"
        />
      </label>

      <button
        type="submit"
        disabled={certSending}
        className="w-full rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-green-400 disabled:opacity-60"
      >
        {certSending ? "Invio in corso..." : "Invia richiesta"}
      </button>

      {certMessage && (
        <p className="text-xs leading-5 text-green-300">
          {certMessage}
        </p>
      )}
    </form>
  </div>
)}

                <div className="mt-5 space-y-4 text-left">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500">
                      Esperienza
                    </p>
                    <p className="mt-1 text-sm text-gray-200">
                      {userData?.experience || "Esperienza non specificata"}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500">
                      Posizione
                    </p>
                    <p className="mt-1 text-sm text-gray-200">
                      {displayPosition}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500">
                      Drone
                    </p>
                    <p className="mt-1 text-sm text-gray-200">
                      {userData?.drone || "Drone non impostato"}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500">
                      Servizio
                    </p>
                    <p className="mt-1 text-sm text-gray-200">
                      {userData?.services || "Nessun servizio inserito"}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500">
                      Certificazione
                    </p>
                    <p className="mt-1 text-sm text-gray-200">
                      {userData?.certifications || "Nessuna certificazione"}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500">
                      Bio
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-200">
                      {userData?.bio || "Nessuna bio inserita"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-6 lg:order-2">
            <div className="rounded-2xl border border-white/20 bg-[#140a3a] p-5 sm:p-8">
              <h2 className="mb-6 text-xl font-semibold sm:text-2xl">
                Dashboard Pilota
              </h2>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={22} />

                    <p className="text-gray-300">
                      Lavori completati
                    </p>
                  </div>

                  <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                    {completedJobs}
                  </h2>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center gap-3">
                    <Plane size={22} />

                    <p className="text-gray-300">
                      Candidature inviate
                    </p>
                  </div>

                  <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                    {activeJobs}
                  </h2>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center gap-3">
                    <FileText size={22} />

                    <p className="text-gray-300">
                      In attesa
                    </p>
                  </div>

                  <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                    {applications}
                  </h2>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center gap-3">
                    <CreditCard size={22} />

                    <p className="text-gray-300">
                      Crediti
                    </p>
                  </div>

                  <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                    {credits}
                  </h2>
                </div>
              </div>
            </div>

            <div className="border border-white/20 rounded-2xl p-6 bg-[#140a3a]">
              <div className="flex items-center gap-2 mb-4">
                <Clock3 size={18} />

                <h3 className="text-lg font-semibold">
                  Prossimi lavori
                </h3>
              </div>

              {upcomingJobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {upcomingJobs.map((job) => (
                    <div
                      key={job.id}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <h4 className="font-semibold text-white">
                        {job.title || "Lavoro"}
                      </h4>

                      <p className="mt-2 text-sm text-gray-300">
                        📍 {job.location || "Posizione non impostata"}
                      </p>

                      <p className="mt-1 text-sm text-gray-300">
                        📅 {formatJobDate(job.job_date)}
                      </p>

                      <p className="mt-1 text-sm text-cyan-300">
                        ⏱ {getCountdownLabel(job.job_date)}
                      </p>

                      <p className="mt-1 text-xs font-semibold tracking-[0.2em] text-emerald-300">
                        {getStatusLabel(job.status)}
                      </p>

                      <Link href={`/dashboard/job-data?jobId=${job.id}`}>
                        <button className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold transition hover:bg-white/10">
                          Vedi dati lavoro
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-sm">
                  Nessun lavoro programmato
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
