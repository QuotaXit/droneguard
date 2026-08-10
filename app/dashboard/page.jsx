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

function getRomeDateString() {
  return new Intl.DateTimeFormat(
    "en-CA",
    {
      timeZone:
        "Europe/Rome",

      year:
        "numeric",

      month:
        "2-digit",

      day:
        "2-digit"
    }
  ).format(
    new Date()
  )
}


function formatInsuranceDate(
  value
) {
  if (!value) {
    return ""
  }

  const raw =
    String(value)
      .slice(0, 10)

  const [
    year,
    month,
    day
  ] =
    raw.split("-")

  if (
    !year ||
    !month ||
    !day
  ) {
    return raw
  }

  return `${day}/${month}/${year}`
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

  const [
  showInsuranceRequest,
  setShowInsuranceRequest
] = useState(false)

const [
  insuranceFile,
  setInsuranceFile
] = useState(null)

const [
  insuranceCompany,
  setInsuranceCompany
] = useState("")

const [
  insurancePolicyNumber,
  setInsurancePolicyNumber
] = useState("")

const [
  insuranceValidFrom,
  setInsuranceValidFrom
] = useState("")

const [
  insuranceValidUntil,
  setInsuranceValidUntil
] = useState("")

const [
  insuranceSending,
  setInsuranceSending
] = useState(false)

const [
  insuranceMessage,
  setInsuranceMessage
] = useState("")


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
            "id,email,role,name,surname,avatar_url,bio,drone,city,location,services,certifications,experience,credits,verified,cert_enac_verified,cert_a1a3_verified,cert_a2_verified,cert_sts_verified,cert_sts01_verified,cert_sts02_verified,cert_specific_verified,cert_open_verified,cert_cro_verified,cert_luc_verified,cert_bvlos_verified,cert_notturno_verified,cert_termografia_verified,cert_fpv_racing_verified,cert_request_sent,insurance_verified,insurance_request_sent,insurance_expires_at"
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

const handleInsuranceRequest =
  async (
    event
  ) => {
    event.preventDefault()

    if (
      insuranceCompany
        .trim()
        .length < 2
    ) {
      setInsuranceMessage(
        "Inserisci la compagnia assicurativa."
      )

      return
    }


    if (
      insurancePolicyNumber
        .trim()
        .length < 2
    ) {
      setInsuranceMessage(
        "Inserisci il numero della polizza."
      )

      return
    }


    if (
      !insuranceValidUntil
    ) {
      setInsuranceMessage(
        "Inserisci la data di scadenza."
      )

      return
    }


    if (
      insuranceValidFrom &&
      insuranceValidFrom >
        insuranceValidUntil
    ) {
      setInsuranceMessage(
        "La data di inizio non può essere successiva alla scadenza."
      )

      return
    }


    if (!insuranceFile) {
      setInsuranceMessage(
        "Carica una foto o un PDF dell'assicurazione."
      )

      return
    }


    try {

      setInsuranceSending(
        true
      )

      setInsuranceMessage(
        ""
      )


      const formData =
        new FormData()


      formData.append(
        "insuranceCompany",
        insuranceCompany.trim()
      )

      formData.append(
        "policyNumber",
        insurancePolicyNumber.trim()
      )

      formData.append(
        "validFrom",
        insuranceValidFrom
      )

      formData.append(
        "validUntil",
        insuranceValidUntil
      )

      formData.append(
        "file",
        insuranceFile
      )


      const response =
        await fetch(
          "/api/insurance-request",
          {
            method:
              "POST",

            body:
              formData
          }
        )


      let result =
        null


      try {
        result =
          await response.json()
      } catch {
        result =
          null
      }


      if (!response.ok) {
        throw new Error(
          result?.error ||
          "Errore durante l'invio dell'assicurazione."
        )
      }


      /*
       * Il database è già stato aggiornato
       * dall'API server.
       */
      setUserData(
        (
          current
        ) => {
          if (!current) {
            return current
          }

          return {
            ...current,

            insurance_request_sent:
              true
          }
        }
      )


      setInsuranceMessage(
        "Assicurazione inviata. Il Team DroneGuard controllerà il documento."
      )


      setInsuranceFile(
        null
      )

      setInsuranceCompany(
        ""
      )

      setInsurancePolicyNumber(
        ""
      )

      setInsuranceValidFrom(
        ""
      )

      setInsuranceValidUntil(
        ""
      )

      setShowInsuranceRequest(
        false
      )

    } catch (error) {

      console.error(
        "[dashboard] insurance request failed:",
        error
      )


      setInsuranceMessage(
        error instanceof Error
          ? error.message
          : "Errore durante l'invio. Riprova più tardi."
      )

    } finally {

      setInsuranceSending(
        false
      )
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

  const todayInRome =
  getRomeDateString()


const insuranceIsValid =
  Boolean(
    userData
      ?.insurance_verified ===
      true &&

    userData
      ?.insurance_expires_at &&

    String(
      userData
        .insurance_expires_at
    )
      .slice(
        0,
        10
      ) >=
      todayInRome
  )


const insuranceIsExpired =
  Boolean(
    userData
      ?.insurance_expires_at &&

    String(
      userData
        .insurance_expires_at
    )
      .slice(
        0,
        10
      ) <
      todayInRome
  )

  return (
  <div className="min-h-screen flex flex-col text-white">
    <Navbar logged />

    <main className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

        {/* HEADER */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
            Area pilota
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Dashboard Pilota
          </h1>

          <p className="mt-3 text-sm text-gray-400 sm:text-base">
            Controlla candidature, lavori, crediti e stato del tuo profilo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[330px_minmax(0,1fr)]">

          {/* SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">

            {/* PROFILO */}
            <section className="rounded-3xl border border-white/10 bg-[#140a3a] p-5 shadow-xl shadow-black/10 sm:p-6">
              <div className="text-center">

                {/* AVATAR */}
                {userData?.avatar_url ? (
                  <img
                    src={userData.avatar_url}
                    alt={`Foto profilo di ${fullName}`}
                    width={96}
                    height={96}
                    className="mx-auto h-24 w-24 rounded-full border-2 border-white/20 object-cover shadow-lg"
                  />
                ) : (
                  <div
                    aria-label={`Iniziali di ${fullName}`}
                    className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-green-400/30 bg-gradient-to-br from-green-400/20 to-cyan-400/20 text-2xl font-bold text-green-300"
                  >
                    {profileInitials}
                  </div>
                )}

                <h2 className="mt-4 text-2xl font-bold">
                  {fullName}
                </h2>

                {/* EMAIL */}
                <div className="mt-3 flex justify-center">
                  {emailVerified ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-xs font-semibold text-green-400">
                      <BadgeCheck size={13} />
                      Mail verificata
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1.5 text-xs font-semibold text-yellow-200">
                      Mail non verificata
                    </span>
                  )}
                </div>

                {/* CERTIFICAZIONI VERIFICATE */}
                <div className="mt-4 grid grid-cols-2 gap-2">

                  {userData?.cert_enac_verified && (
                    <span className="flex min-h-[34px] items-center justify-center gap-1 rounded-xl border border-green-400/15 bg-green-400/10 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-green-300">
                      <ShieldCheck size={12} />
                      ENAC
                    </span>
                  )}

                  {userData?.cert_a1a3_verified && (
                    <span className="flex min-h-[34px] items-center justify-center gap-1 rounded-xl border border-green-400/15 bg-green-400/10 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-green-300">
                      <BadgeCheck size={12} />
                      A1/A3
                    </span>
                  )}

                  {userData?.cert_a2_verified && (
                    <span className="flex min-h-[34px] items-center justify-center gap-1 rounded-xl border border-green-400/15 bg-green-400/10 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-green-300">
                      <BadgeCheck size={12} />
                      A2
                    </span>
                  )}

                  {userData?.cert_sts_verified && (
                    <span className="flex min-h-[34px] items-center justify-center gap-1 rounded-xl border border-green-400/15 bg-green-400/10 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-green-300">
                      <BadgeCheck size={12} />
                      STS
                    </span>
                  )}

                  {userData?.cert_sts01_verified && (
                    <span className="flex min-h-[34px] items-center justify-center gap-1 rounded-xl border border-green-400/15 bg-green-400/10 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-green-300">
                      <BadgeCheck size={12} />
                      STS-01
                    </span>
                  )}

                  {userData?.cert_sts02_verified && (
                    <span className="flex min-h-[34px] items-center justify-center gap-1 rounded-xl border border-green-400/15 bg-green-400/10 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-green-300">
                      <BadgeCheck size={12} />
                      STS-02
                    </span>
                  )}

                  {userData?.cert_specific_verified && (
                    <span className="flex min-h-[34px] items-center justify-center gap-1 rounded-xl border border-green-400/15 bg-green-400/10 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-green-300">
                      <BadgeCheck size={12} />
                      SPECIFIC
                    </span>
                  )}

                  {userData?.cert_open_verified && (
                    <span className="flex min-h-[34px] items-center justify-center gap-1 rounded-xl border border-green-400/15 bg-green-400/10 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-green-300">
                      <BadgeCheck size={12} />
                      OPEN
                    </span>
                  )}

                  {userData?.cert_cro_verified && (
                    <span className="flex min-h-[34px] items-center justify-center gap-1 rounded-xl border border-green-400/15 bg-green-400/10 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-green-300">
                      <BadgeCheck size={12} />
                      CRO
                    </span>
                  )}

                  {userData?.cert_luc_verified && (
                    <span className="flex min-h-[34px] items-center justify-center gap-1 rounded-xl border border-green-400/15 bg-green-400/10 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-green-300">
                      <BadgeCheck size={12} />
                      LUC
                    </span>
                  )}

                  {userData?.cert_bvlos_verified && (
                    <span className="flex min-h-[34px] items-center justify-center gap-1 rounded-xl border border-green-400/15 bg-green-400/10 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-green-300">
                      <BadgeCheck size={12} />
                      BVLOS
                    </span>
                  )}

                  {userData?.cert_notturno_verified && (
                    <span className="flex min-h-[34px] items-center justify-center gap-1 rounded-xl border border-green-400/15 bg-green-400/10 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-green-300">
                      <BadgeCheck size={12} />
                      NOTTURNO
                    </span>
                  )}

                  {userData?.cert_termografia_verified && (
                    <span className="flex min-h-[34px] items-center justify-center gap-1 rounded-xl border border-green-400/15 bg-green-400/10 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-green-300">
                      <BadgeCheck size={12} />
                      TERMOGRAFIA
                    </span>
                  )}

                  {userData?.cert_fpv_racing_verified && (
                    <span className="flex min-h-[34px] items-center justify-center gap-1 rounded-xl border border-green-400/15 bg-green-400/10 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-green-300">
                      <BadgeCheck size={12} />
                      FPV RACING
                    </span>
                  )}
                </div>

                {/* RICHIESTA CERTIFICAZIONE */}
                {!showCertRequest &&
                  !userData?.cert_request_sent &&
                  !hasVerifiedCertification && (
                    <button
                      type="button"
                      onClick={() =>
                        setShowCertRequest(true)
                      }
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-semibold text-white transition hover:bg-white/[0.08]"
                    >
                      <UploadCloud size={14} />
                      Carica certificazione ENAC
                    </button>
                  )}

                {userData?.cert_request_sent && (
                  <div className="mt-4 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-3 text-left">
                    <p className="text-xs font-semibold text-yellow-300">
                      Verifica in corso
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-300">
                      Hai già inviato la certificazione ENAC.
                      Attendi fino a 24 ore per la verifica.
                    </p>
                  </div>
                )}

                {hasVerifiedCertification && (
                  <div className="mt-4 rounded-2xl border border-green-400/20 bg-green-500/10 px-4 py-3 text-left">
                    <p className="text-xs font-semibold text-green-300">
                      Certificazione verificata
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-300">
                      Per aggiungere ulteriori certificazioni
                      contatta l&apos;assistenza.
                    </p>
                  </div>
                )}

                {showCertRequest &&
                  !userData?.cert_request_sent &&
                  !hasVerifiedCertification && (
                    <div className="mt-4 rounded-2xl border border-white/15 bg-[#0B0F2A]/70 p-4 text-left">

                      <div className="mb-3 flex items-center justify-between">
                        <h4 className="text-sm font-semibold">
                          Richiesta verifica ENAC
                        </h4>

                        <button
                          type="button"
                          onClick={() =>
                            setShowCertRequest(false)
                          }
                          className="text-gray-400 transition hover:text-white"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <form
                        onSubmit={handleCertificationRequest}
                        className="space-y-3"
                      >
                        <p className="text-xs leading-5 text-gray-300">
                          Carica una foto chiara del patentino ENAC
                          oppure il documento PDF digitale.
                        </p>

                        <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 p-4 text-center transition hover:bg-white/10">
                          <UploadCloud
                            size={24}
                            className="mb-2 text-green-400"
                          />

                          <span className="text-xs text-gray-300">
                            {certFile
                              ? certFile.name
                              : "Carica foto o PDF"}
                          </span>

                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) =>
                              setCertFile(
                                e.target.files?.[0] ||
                                  null
                              )
                            }
                            className="hidden"
                          />
                        </label>

                        <button
                          type="submit"
                          disabled={certSending}
                          className="w-full rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-green-400 disabled:opacity-60"
                        >
                          {certSending
                            ? "Invio in corso..."
                            : "Invia richiesta"}
                        </button>

                        {certMessage && (
                          <p className="text-xs leading-5 text-green-300">
                            {certMessage}
                          </p>
                        )}
                      </form>
                    </div>
                  )}

                  {/* =========================================
    ASSICURAZIONE
========================================= */}

<div className="mt-4 w-full border-t border-white/10 pt-4">


  {/* ASSICURAZIONE VERIFICATA */}
  {insuranceIsValid && (

    <div className="rounded-xl border border-green-400/20 bg-green-500/10 px-4 py-3">

      <div className="flex items-center justify-center gap-2">

        <ShieldCheck
          size={16}
          className="text-green-400"
        />

        <p className="text-xs font-semibold text-green-300">
          Assicurazione verificata
        </p>

      </div>


      <p className="mt-1 text-center text-xs text-gray-300">
        Valida fino al{" "}
        {formatInsuranceDate(
          userData
            ?.insurance_expires_at
        )}
      </p>

    </div>
  )}


  {/* RICHIESTA IN VERIFICA */}
  {userData
      ?.insurance_request_sent && (

    <div className="mt-2 rounded-xl border border-yellow-400/20 bg-yellow-500/10 px-4 py-3">

      <p className="text-xs font-semibold text-yellow-300">
        ⏳ Assicurazione in verifica
      </p>

      <p className="mt-1 text-xs leading-5 text-gray-300">
        Hai già inviato la tua assicurazione.
        Il Team DroneGuard controllerà il documento.
      </p>

    </div>
  )}


  {/* ASSICURAZIONE SCADUTA */}
  {insuranceIsExpired &&
   !userData?.insurance_request_sent && (

    <div className="mt-2 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3">

      <p className="text-xs font-semibold text-red-300">
        Assicurazione scaduta
      </p>

      <p className="mt-1 text-xs leading-5 text-gray-300">
        La polizza registrata è scaduta il{" "}
        {formatInsuranceDate(
          userData
            ?.insurance_expires_at
        )}.
        Carica la nuova assicurazione.
      </p>

    </div>
  )}


  {/* PULSANTE CARICAMENTO */}
  {!insuranceIsValid &&
   !userData?.insurance_request_sent &&
   !showInsuranceRequest && (

    <button
      type="button"
      onClick={() =>
        setShowInsuranceRequest(
          true
        )
      }
      className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/15"
    >
      <UploadCloud
        size={15}
      />

      {insuranceIsExpired
        ? "Carica nuova assicurazione"
        : "Carica la tua assicurazione"}
    </button>
  )}


  {/* FORM CARICAMENTO */}
  {showInsuranceRequest &&
   !userData?.insurance_request_sent &&
   !insuranceIsValid && (

    <div className="mt-3 rounded-2xl border border-white/15 bg-[#0B0F2A]/70 p-4">

      <div className="mb-4 flex items-center justify-between">

        <div>

          <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-400">
            Assicurazione
          </p>

          <h4 className="mt-1 text-sm font-semibold text-white">
            Richiesta verifica
          </h4>

        </div>


        <button
          type="button"
          disabled={
            insuranceSending
          }
          onClick={() =>
            setShowInsuranceRequest(
              false
            )
          }
          className="text-gray-400 transition hover:text-white"
        >
          <X
            size={16}
          />
        </button>

      </div>


      <form
        onSubmit={
          handleInsuranceRequest
        }
        className="space-y-3"
      >

        <div>

          <label className="mb-1.5 block text-left text-[11px] font-semibold text-gray-400">
            Compagnia assicurativa
          </label>

          <input
            type="text"
            required
            maxLength={150}
            value={
              insuranceCompany
            }
            onChange={(
              event
            ) =>
              setInsuranceCompany(
                event
                  .target
                  .value
              )
            }
            placeholder="Es. Allianz"
            className="w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-xs text-white outline-none transition focus:border-green-400/40"
          />

        </div>


        <div>

          <label className="mb-1.5 block text-left text-[11px] font-semibold text-gray-400">
            Numero polizza
          </label>

          <input
            type="text"
            required
            maxLength={100}
            value={
              insurancePolicyNumber
            }
            onChange={(
              event
            ) =>
              setInsurancePolicyNumber(
                event
                  .target
                  .value
              )
            }
            className="w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-xs text-white outline-none transition focus:border-green-400/40"
          />

        </div>


        <div className="grid grid-cols-2 gap-2">

          <div>

            <label className="mb-1.5 block text-left text-[11px] font-semibold text-gray-400">
              Valida dal
            </label>

            <input
              type="date"
              value={
                insuranceValidFrom
              }
              onChange={(
                event
              ) =>
                setInsuranceValidFrom(
                  event
                    .target
                    .value
                )
              }
              className="w-full rounded-xl border border-white/10 bg-black/20 px-2 py-2.5 text-xs text-white outline-none"
            />

          </div>


          <div>

            <label className="mb-1.5 block text-left text-[11px] font-semibold text-gray-400">
              Scadenza
            </label>

            <input
              type="date"
              required
              min={
                todayInRome
              }
              value={
                insuranceValidUntil
              }
              onChange={(
                event
              ) =>
                setInsuranceValidUntil(
                  event
                    .target
                    .value
                )
              }
              className="w-full rounded-xl border border-white/10 bg-black/20 px-2 py-2.5 text-xs text-white outline-none"
            />

          </div>

        </div>


        <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 p-4 text-center transition hover:bg-white/10">

          <UploadCloud
            size={22}
            className="mb-2 text-green-400"
          />

          <span className="text-xs text-gray-300">
            {insuranceFile
              ? insuranceFile.name
              : "Carica foto o PDF della polizza"}
          </span>


          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/jpeg,image/png,image/webp"
            onChange={(
              event
            ) =>
              setInsuranceFile(
                event
                  .target
                  .files?.[0] ||
                null
              )
            }
            className="hidden"
          />

        </label>


        <p className="text-[11px] leading-5 text-gray-500">
          PDF, JPG, PNG o WEBP. Massimo 10 MB.
          Il documento sarà visibile soltanto al Team DroneGuard.
        </p>


        <button
          type="submit"
          disabled={
            insuranceSending
          }
          className="w-full rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {insuranceSending
            ? "Invio in corso..."
            : "Invia assicurazione"}
        </button>


        {insuranceMessage && (

          <p className="text-xs leading-5 text-green-300">
            {insuranceMessage}
          </p>
        )}

      </form>

    </div>
  )}


</div>

                {/* DATI PROFILO */}
                <div className="mt-5 space-y-2 border-t border-white/10 pt-5">

                  <div className="rounded-xl bg-white/[0.03] px-4 py-3 text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600">
                      Esperienza
                    </p>
                    <p className="mt-1 text-sm text-gray-300">
                      {userData?.experience ||
                        "Esperienza non specificata"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] px-4 py-3 text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600">
                      Posizione
                    </p>
                    <p className="mt-1 text-sm text-gray-300">
                      {displayPosition}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] px-4 py-3 text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600">
                      Drone
                    </p>
                    <p className="mt-1 break-words text-sm text-gray-300">
                      {userData?.drone ||
                        "Drone non impostato"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] px-4 py-3 text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600">
                      Servizi
                    </p>
                    <p className="mt-1 break-words text-sm text-gray-300">
                      {userData?.services ||
                        "Nessun servizio inserito"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] px-4 py-3 text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600">
                      Certificazioni
                    </p>
                    <p className="mt-1 break-words text-sm text-gray-300">
                      {userData?.certifications ||
                        "Nessuna certificazione"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] px-4 py-3 text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600">
                      Bio
                    </p>
                    <p className="mt-1 break-words text-sm leading-5 text-gray-300">
                      {userData?.bio ||
                        "Nessuna bio inserita"}
                    </p>
                  </div>
                </div>

                <Link
                  href="/dashboard/settings"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold transition hover:bg-white/[0.08]"
                >
                  <Settings size={17} />
                  Modifica profilo
                </Link>
              </div>
            </section>

            {/* MENU */}
            <section className="rounded-3xl border border-white/10 bg-[#111735] p-5 shadow-xl shadow-black/10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                Navigazione
              </p>

              <h2 className="mt-1 text-lg font-bold">
                Menu
              </h2>

              <nav className="mt-4">
                <ul className="space-y-1 text-sm text-gray-300">

                  <li>
                    <Link
                      href="/dashboard/jobs"
                      className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      <Briefcase size={18} />
                      Storico lavori
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/dashboard/jobs-board"
                      className="flex items-center gap-3 rounded-xl bg-purple-400/[0.06] px-3 py-3 text-purple-300 transition hover:bg-purple-400/10"
                    >
                      <FileText size={18} />
                      Bacheca lavori
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/dashboard/job-data"
                      className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      <ClipboardList size={18} />
                      Dati lavoro
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/dashboard/reviews"
                      className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      <Star size={18} />
                      Recensioni
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/dashboard/credits"
                      className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      <CreditCard size={18} />
                      Crediti
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/dashboard/settings"
                      className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      <Settings size={18} />
                      Impostazioni
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
                  Logout
                </button>
              </nav>
            </section>
          </aside>

          {/* AREA PRINCIPALE */}
          <div className="space-y-6">

            <ActiveAnnouncements />

            {/* PANORAMICA */}
            <section className="rounded-3xl border border-white/10 bg-[#140a3a] p-5 shadow-xl shadow-black/10 sm:p-6 lg:p-8">

              <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-300">
                    Panoramica
                  </p>

                  <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                    Bentornato{userData?.name ? `, ${userData.name}` : ""}
                  </h2>

                  <p className="mt-2 text-sm text-gray-400">
                    Controlla rapidamente attività, candidature e crediti.
                  </p>
                </div>

                <Link
                  href="/dashboard/jobs-board"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-purple-500 px-5 py-3 font-bold text-white transition hover:bg-purple-400"
                >
                  <FileText size={18} />
                  Vai alla Bacheca
                </Link>
              </div>

              {/* STATISTICHE */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5">
                  <p className="text-sm text-gray-500">
                    Lavori completati
                  </p>

                  <div className="mt-4 flex items-end justify-between">
                    <p className="text-4xl font-black">
                      {completedJobs}
                    </p>

                    <CheckCircle2
                      size={22}
                      className="text-green-400/50"
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-purple-400/10 bg-purple-400/[0.045] p-5">
                  <p className="text-sm text-gray-500">
                    Candidature in attesa
                  </p>

                  <div className="mt-4 flex items-end justify-between">
                    <p className="text-4xl font-black text-purple-300">
                      {activeJobs}
                    </p>

                    <Plane
                      size={22}
                      className="text-purple-300/50"
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.035] p-5">
                  <p className="text-sm text-gray-500">
                    Lavori attivi
                  </p>

                  <div className="mt-4 flex items-end justify-between">
                    <p className="text-4xl font-black text-cyan-300">
                      {applications}
                    </p>

                    <Briefcase
                      size={22}
                      className="text-cyan-300/50"
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-green-400/10 bg-green-400/[0.04] p-5">
                  <p className="text-sm text-gray-500">
                    Crediti
                  </p>

                  <div className="mt-4 flex items-end justify-between">
                    <p className="text-4xl font-black text-green-400">
                      {credits}
                    </p>

                    <CreditCard
                      size={22}
                      className="text-green-400/50"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* PROSSIMI LAVORI */}
            <section className="rounded-3xl border border-white/10 bg-[#111735] p-5 shadow-xl shadow-black/10 sm:p-6">

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-400/10 text-purple-300">
                  <Clock3 size={18} />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Prossimi lavori
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Lavori assegnati e programmati.
                  </p>
                </div>
              </div>

              {upcomingJobs.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {upcomingJobs.map((job) => (
                    <article
                      key={job.id}
                      className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-bold text-white">
                          {job.title || "Lavoro"}
                        </h3>

                        <span className="rounded-full bg-green-400/10 px-2 py-1 text-[10px] font-bold tracking-wider text-green-300">
                          {getStatusLabel(job.status)}
                        </span>
                      </div>

                      <div className="mt-4 space-y-2 text-sm text-gray-400">
                        <p>
                          📍 {job.location || "Posizione non impostata"}
                        </p>

                        <p>
                          📅 {formatJobDate(job.job_date)}
                        </p>

                        <p className="text-cyan-300">
                          {getCountdownLabel(job.job_date)}
                        </p>
                      </div>

                      <Link
                        href={`/dashboard/job-data?jobId=${job.id}`}
                        className="mt-4 flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold transition hover:bg-white/[0.08]"
                      >
                        Vedi dati lavoro
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-5 py-8 text-center">
                  <Clock3
                    size={26}
                    className="mx-auto text-gray-600"
                  />

                  <p className="mt-3 font-medium text-gray-300">
                    Nessun lavoro programmato
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    I lavori assegnati compariranno qui.
                  </p>
                </div>
              )}
            </section>

            {/* AZIONI RAPIDE */}
            <section className="rounded-3xl border border-white/10 bg-[#111735] p-5 shadow-xl shadow-black/10 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                Azioni rapide
              </p>

              <h2 className="mt-1 text-xl font-bold">
                Cosa vuoi fare?
              </h2>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">

                <Link
                  href="/dashboard/jobs-board"
                  className="rounded-2xl border border-purple-400/15 bg-purple-400/[0.06] p-4 transition hover:-translate-y-0.5 hover:bg-purple-400/10"
                >
                  <FileText
                    size={20}
                    className="text-purple-300"
                  />

                  <p className="mt-3 font-bold">
                    Bacheca lavori
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Consulta le nuove richieste pubblicate.
                  </p>
                </Link>

                <Link
                  href="/dashboard/applications"
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
                >
                  <Plane
                    size={20}
                    className="text-blue-300"
                  />

                  <p className="mt-3 font-bold">
                    Le mie candidature
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Controlla lo stato delle candidature inviate.
                  </p>
                </Link>

                <Link
                  href="/dashboard/credits"
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
                >
                  <CreditCard
                    size={20}
                    className="text-green-300"
                  />

                  <p className="mt-3 font-bold">
                    Crediti
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Controlla il saldo disponibile.
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