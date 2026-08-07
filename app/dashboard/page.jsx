"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import ActiveAnnouncements from "@/components/dashboard/ActiveAnnouncements"
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
  const [emailVerified, setEmailVerified] = useState(false)


  const [showCertRequest, setShowCertRequest] = useState(false)
  const [certFile, setCertFile] = useState(null)
  const [certSending, setCertSending] = useState(false)
  const [certMessage, setCertMessage] = useState("")


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
            "id,email,role,name,surname,avatar_url,bio,drone,city,location,services,certifications,experience,credits,verified,cert_enac_verified,cert_a1a3_verified,cert_a2_verified,cert_sts_verified,cert_sts01_verified,cert_sts02_verified,cert_specific_verified,cert_open_verified,cert_cro_verified,cert_luc_verified,cert_bvlos_verified,cert_notturno_verified,cert_termografia_verified,cert_fpv_racing_verified,cert_request_sent"
          )
          .eq("id", user.id)
          .maybeSingle()

        if (!active) return

        if (profileError) {
          console.error(
            "Errore caricamento profilo pilota:",
            profileError
          )

          router.replace("/login")
          return
        }

        if (!profile) {
          console.error(
            "Profilo pilota non trovato per l'utente:",
            user.id
          )

          router.replace("/login")
          return
        }

        if (!isPilot(profile.role)) {
          router.replace(
            getDashboardPath(profile.role)
          )

          return
        }

        const [
          completedResult,
          pendingApplicationsResult,
          assignedJobsResult
        ] = await Promise.all([
          supabase
            .from("jobs")
            .select("*", {
              count: "exact",
              head: true
            })
            .eq("assigned_pilot", user.id)
            .eq("status", "completed"),

          supabase
            .from("applications")
            .select("*", {
              count: "exact",
              head: true
            })
            .eq("pilot_id", user.id)
            .eq("status", "pending"),

          supabase
            .from("jobs")
            .select("*", {
              count: "exact"
            })
            .eq("assigned_pilot", user.id)
            .in("status", ACTIVE_JOB_STATUSES)
        ])

        if (!active) return

        if (completedResult.error) {
          console.error(
            "Errore conteggio lavori completati:",
            completedResult.error
          )
        }

        if (pendingApplicationsResult.error) {
          console.error(
            "Errore conteggio candidature in attesa:",
            pendingApplicationsResult.error
          )
        }

        if (assignedJobsResult.error) {
          console.error(
            "Errore caricamento lavori assegnati:",
            assignedJobsResult.error
          )
        }

        const orderedUpcomingJobs = sortJobsByDate(
          assignedJobsResult.data || []
        )

        setUserData(profile)
        setCredits(Number(profile.credits || 0))

        setCompletedJobs(
          completedResult.count || 0
        )

        setActiveJobs(
          pendingApplicationsResult.count || 0
        )

        setApplications(
          assignedJobsResult.count || 0
        )

        setUpcomingJobs(orderedUpcomingJobs)
      } catch (error) {
        console.error(
          "Errore imprevisto dashboard pilota:",
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

  const fullName = getFullName(userData)

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

  const displayPosition = getDisplayPosition(userData)

  const handleCertificationRequest = async (event) => {
  event.preventDefault()

  if (!certFile) {
    setCertMessage(
      "Carica una foto o un PDF della certificazione."
    )
    return
  }

  try {
    setCertSending(true)
    setCertMessage("")

    const formData = new FormData()

    /*
     * Il server ricava nome, email, ruolo e
     * certificazioni direttamente dalla sessione
     * e dal profilo dell'utente.
     */
    formData.append("file", certFile)

    const response = await fetch(
      "/api/certification-request",
      {
        method: "POST",
        body: formData
      }
    )

    let result = null

    try {
      result = await response.json()
    } catch {
      result = null
    }

    if (!response.ok) {
      throw new Error(
        result?.error ||
          "Errore durante l'invio della richiesta."
      )
    }

    /*
     * Aggiorniamo soltanto lo stato locale della pagina.
     * Il database è già stato aggiornato dall'API server.
     */
    setUserData((currentUserData) => {
      if (!currentUserData) {
        return currentUserData
      }

      return {
        ...currentUserData,
        cert_request_sent: true
      }
    })

    setCertMessage(
      "Richiesta inviata. Il Team DroneGuard controllerà il documento."
    )

    setCertFile(null)
    setShowCertRequest(false)
  } catch (error) {
    console.error(
      "[dashboard] certification request failed:",
      error
    )

    setCertMessage(
      error instanceof Error
        ? error.message
        : "Errore durante l'invio. Riprova più tardi."
    )
  } finally {
    setCertSending(false)
  }
}

 const hasVerifiedCertification = Boolean(
    userData?.cert_enac_verified ||
    userData?.cert_a1a3_verified ||
    userData?.cert_a2_verified ||
    userData?.cert_sts_verified ||
    userData?.cert_sts01_verified ||
    userData?.cert_sts02_verified ||
    userData?.cert_specific_verified ||
    userData?.cert_open_verified ||
    userData?.cert_cro_verified ||
    userData?.cert_luc_verified ||
    userData?.cert_bvlos_verified ||
    userData?.cert_notturno_verified ||
    userData?.cert_termografia_verified ||
    userData?.cert_fpv_racing_verified
  )

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="h-fit border border-white/20 rounded-2xl bg-white/5 p-5 backdrop-blur-md sm:p-8 lg:col-span-3 lg:min-h-[520px]">
            <h2 className="text-2xl font-[var(--font-krona)] mb-10">
              Menu
            </h2>

                        <ul className="space-y-2 text-base text-gray-300">

              <li>
                <Link
                  href="/dashboard/jobs"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Briefcase size={20} />
                  <span>Storico lavori</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/jobs-board"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-green-500/10 hover:text-green-300"
                >
                  <FileText size={20} />
                  <span>Bacheca lavori</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/job-data"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <ClipboardList size={20} />
                  <span>Dati lavoro</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/reviews"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Star size={20} />
                  <span>Recensioni</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/credits"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <CreditCard size={20} />
                  <span>Crediti</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/settings"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Settings size={20} />
                  <span>Impostazioni</span>
                </Link>
              </li>

              <li aria-hidden="true" className="py-3">
                <div className="border-t border-white/10" />
              </li>

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

              <li aria-hidden="true" className="py-3">
                <div className="border-t border-white/10" />
              </li>

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

          <div className="lg:col-span-3 lg:order-3">
            <div className="border border-white/20 rounded-2xl p-6 bg-white/5 backdrop-blur-md">
              <h2 className="text-xl font-[var(--font-krona)] mb-4">
                Profilo
              </h2>

              <div className="text-center">
                {userData?.avatar_url ? (
  <img
    src={userData.avatar_url}
    alt={`Foto profilo di ${fullName}`}
    width={80}
    height={80}
    className="mx-auto mb-4 h-20 w-20 rounded-full border border-white/20 object-cover"
  />
) : (
  <div
    aria-label={`Iniziali di ${fullName}`}
    className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-green-400/30 bg-gradient-to-br from-green-400/20 to-cyan-400/20 text-xl font-bold text-green-300"
  >
    {profileInitials}
  </div>
)}

                <h3 className="text-xl font-semibold">
                  {fullName}
                </h3>

                <div className="mt-3 space-y-2">
  <div className="flex items-center justify-center gap-2">
  <Mail size={14} />

  {emailVerified ? (
    <span className="inline-flex items-center gap-1 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-black">
      <BadgeCheck size={13} />
      Mail verificata
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-200">
      ⚠️ Mail non verificata
    </span>
  )}
</div>

  <div className="flex flex-col items-center gap-2">


  {/* CERTIFICAZIONI SPECIFICHE */}

  <div className="grid grid-cols-2 gap-2 w-full max-w-[260px] mx-auto">

  {userData?.cert_enac_verified && (
    <span className="min-h-[34px] text-center text-[11px] bg-green-500 px-2 py-2 rounded-xl flex items-center justify-center gap-1 leading-tight">
      <ShieldCheck size={13} />
      ENAC verificata
    </span>
  )}

  {userData?.cert_a1a3_verified && (
      <span className="min-h-[34px] text-center text-[11px] bg-green-500 px-2 py-2 rounded-xl flex items-center justify-center gap-1 leading-tight">
        <BadgeCheck size={13} />
        A1/A3 verificata
      </span>
    )}

    {userData?.cert_a2_verified && (
      <span className="min-h-[34px] text-center text-[11px] bg-green-500 px-2 py-2 rounded-xl flex items-center justify-center gap-1 leading-tight">
        <BadgeCheck size={13} />
        A2 verificata
      </span>
    )}

    {userData?.cert_sts_verified && (
  <span className="min-h-[34px] text-center text-[11px] bg-green-500 px-2 py-2 rounded-xl flex items-center justify-center gap-1 leading-tight">
    <BadgeCheck size={13} />
    STS verificata
  </span>
)}

    {userData?.cert_sts01_verified && (
      <span className="min-h-[34px] text-center text-[11px] bg-green-500 px-2 py-2 rounded-xl flex items-center justify-center gap-1 leading-tight">
        <BadgeCheck size={13} />
        STS-01 verificata
      </span>
    )}

    {userData?.cert_sts02_verified && (
      <span className="min-h-[34px] text-center text-[11px] bg-green-500 px-2 py-2 rounded-xl flex items-center justify-center gap-1 leading-tight">
        <BadgeCheck size={13} />
        STS-02 verificata
      </span>
    )}

    {userData?.cert_specific_verified && (
      <span className="min-h-[34px] text-center text-[11px] bg-green-500 px-2 py-2 rounded-xl flex items-center justify-center gap-1 leading-tight">
        <BadgeCheck size={13} />
        SPECIFIC verificata
      </span>
    )}

    {userData?.cert_open_verified && (
      <span className="min-h-[34px] text-center text-[11px] bg-green-500 px-2 py-2 rounded-xl flex items-center justify-center gap-1 leading-tight">
        <BadgeCheck size={13} />
        OPEN verificata
      </span>
    )}

    {userData?.cert_cro_verified && (
      <span className="min-h-[34px] text-center text-[11px] bg-green-500 px-2 py-2 rounded-xl flex items-center justify-center gap-1 leading-tight">
        <BadgeCheck size={13} />
        CRO verificata
      </span>
    )}

    {userData?.cert_luc_verified && (
      <span className="min-h-[34px] text-center text-[11px] bg-green-500 px-2 py-2 rounded-xl flex items-center justify-center gap-1 leading-tight">
        <BadgeCheck size={13} />
        LUC verificata
      </span>
    )}

    {userData?.cert_bvlos_verified && (
      <span className="min-h-[34px] text-center text-[11px] bg-green-500 px-2 py-2 rounded-xl flex items-center justify-center gap-1 leading-tight">
        <BadgeCheck size={13} />
        BVLOS verificata
      </span>
    )}

    {userData?.cert_notturno_verified && (
      <span className="min-h-[34px] text-center text-[11px] bg-green-500 px-2 py-2 rounded-xl flex items-center justify-center gap-1 leading-tight">
        <BadgeCheck size={13} />
        NOTTURNO verificata
      </span>
    )}

    {userData?.cert_termografia_verified && (
      <span className="min-h-[34px] text-center text-[11px] bg-green-500 px-2 py-2 rounded-xl flex items-center justify-center gap-1 leading-tight">
        <BadgeCheck size={13} />
        TERMOGRAFIA verificata
      </span>
    )}

    {userData?.cert_fpv_racing_verified && (
      <span className="min-h-[34px] text-center text-[11px] bg-green-500 px-2 py-2 rounded-xl flex items-center justify-center gap-1 leading-tight">
        <BadgeCheck size={13} />
        FPV RACING verificata
      </span>
    )}

  </div>

</div>
{!showCertRequest && !userData?.cert_request_sent && !hasVerifiedCertification && (
  <button
    type="button"
    onClick={() => setShowCertRequest(true)}
    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/15"
  >
    <UploadCloud size={14} />
    Carica certificazione ENAC
  </button>
)}

{userData?.cert_request_sent && (
  <div className="mt-2 rounded-xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-3">
    <p className="text-xs font-semibold text-yellow-300">
      ⏳ Verifica in corso
    </p>

    <p className="mt-1 text-xs text-gray-300">
      Hai già inviato la certificazione ENAC.
      Attendi fino a 24 ore per la verifica.
      Non è possibile inviare altri documenti finché la richiesta è in lavorazione.
    </p>
  </div>
)}

{hasVerifiedCertification && (
  <div className="mt-2 rounded-xl border border-green-400/20 bg-green-500/10 px-4 py-3">
    <p className="text-xs font-semibold text-green-300">
      ✅ Certificazione verificata
    </p>

    <p className="mt-1 text-xs text-gray-300">
      Per aggiungere ulteriori certificazioni contatta l'assistenza.
    </p>
  </div>
)}

{showCertRequest &&
 !userData?.cert_request_sent &&
 !hasVerifiedCertification && (
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

</div>
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
<Link
  href="/dashboard/settings"
  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
>
  <Settings size={18} />
  Modifica profilo
</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-6 lg:order-2">
  <ActiveAnnouncements />

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
                      Candidature in attesa
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
                      Lavori attivi
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

                      <Link
  href={`/dashboard/job-data?jobId=${job.id}`}
  className="mt-4 flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold transition hover:bg-white/10"
>
  Vedi dati lavoro
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
