"use client"

import { Suspense, useCallback, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabase/client"

const ACTIVE_STATUSES = ["assigned", "accepted", "in_progress", "active", "details_sent"]
const CLOSED_STATUSES = ["completed", "cancelled"]

function formatJobDate(value) {
  if (!value) return "Data non indicata"

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

function formatDateTime(value) {
  if (!value) return "Data non indicata"

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date)
}

function isClosedStatus(status) {
  return CLOSED_STATUSES.includes(String(status || "").trim().toLowerCase())
}

function getAssignmentLocation(assignment) {
  return (
    assignment?.precise_location ||
    assignment?.exact_location ||
    assignment?.location ||
    assignment?.address ||
    assignment?.jobs?.location ||
    "Nessuna posizione indicata"
  )
}

function getMeetingPoint(assignment) {
  return assignment?.meeting_point || assignment?.meeting || "Nessun punto di ritrovo indicato"
}

function getPhone(assignment) {
  return assignment?.phone || assignment?.client_phone || "Nessun telefono indicato"
}

function getEmail(assignment) {
  return assignment?.email || assignment?.client_email || "Nessuna email indicata"
}

function getOperationalNotes(assignment) {
  return (
    assignment?.notes ||
    assignment?.operational_notes ||
    assignment?.description ||
    "Nessuna nota operativa"
  )
}

function getJobDate(assignment) {
  return assignment?.jobs?.job_date || assignment?.job_date || ""
}

function JobDataContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const jobId = searchParams.get("jobId")

  const [userId, setUserId] = useState("")
  const [selectedAssignment, setSelectedAssignment] = useState(null)
  const [selectedJob, setSelectedJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [completing, setCompleting] = useState(false)

  const clearCurrentJob = () => {
    setSelectedAssignment(null)
    setSelectedJob(null)
    setLoading(false)
  }

  const loadData = useCallback(async () => {
    setLoading(true)

    const {
      data: { user }
    } = await supabase.auth.getUser()

    console.log("JOB DATA USER:", user)
    console.log("JOB DATA JOB ID PARAM:", jobId)

    if (!user) {
      setUserId("")
      clearCurrentJob()
      return
    }

    setUserId(user.id)

    let query = supabase
      .from("job_assignments")
      .select(`
        *,
        jobs (*)
      `)
      .eq("pilot_id", user.id)
      .in("status", ACTIVE_STATUSES)
      .order("created_at", { ascending: false })

    if (jobId) {
      query = query.eq("job_id", jobId)
    }

    const { data: assignments, error: assignmentsError } = await query

    console.log("JOB DATA ASSIGNMENTS RAW:", assignments)
    console.log("JOB DATA ASSIGNMENTS ERROR:", assignmentsError)
    console.log("PILOT ID:", user.id)

    if (assignmentsError) {
      console.error("Errore caricamento job assignments:", assignmentsError)
    }

    const activeAssignments = (assignments || []).filter((assignment) => {
      const assignmentStatus = String(assignment?.status || "").trim().toLowerCase()
      const jobStatus = String(assignment?.jobs?.status || "").trim().toLowerCase()

      const assignmentActive = ACTIVE_STATUSES.includes(assignmentStatus)
      const assignmentNotClosed = !isClosedStatus(assignmentStatus)
      const jobNotClosed = !isClosedStatus(jobStatus)

      return assignmentActive && assignmentNotClosed && jobNotClosed
    })

    const assignment = activeAssignments?.[0] || null

    console.log("SELECTED ASSIGNMENT:", assignment)

    if (assignment) {
      setSelectedAssignment(assignment)
      setSelectedJob(assignment.jobs || null)
      setLoading(false)
      return
    }

    const { data: apps, error: appsError } = await supabase
      .from("applications")
      .select("*")
      .eq("pilot_id", user.id)
      .in("status", ACTIVE_STATUSES)
      .order("created_at", { ascending: false })

    console.log("JOB DATA FALLBACK APPLICATIONS:", apps)
    console.log("JOB DATA FALLBACK APPLICATIONS ERROR:", appsError)

    if (appsError) {
      clearCurrentJob()
      return
    }

    const activeApps = (apps || []).filter((application) => {
      const appStatus = String(application?.status || "").trim().toLowerCase()
      return ACTIVE_STATUSES.includes(appStatus) && !isClosedStatus(appStatus)
    })

    const selectedJobId =
      jobId ||
      activeApps?.find((application) => application.job_id)?.job_id ||
      null

    if (!selectedJobId) {
      clearCurrentJob()
      return
    }

    let fallbackQuery = supabase
      .from("jobs")
      .select("*")
      .eq("id", selectedJobId)
      .in("status", ACTIVE_STATUSES)

    const { data: fallbackJob, error: jobError } = await fallbackQuery.maybeSingle()

    console.log("JOB DATA FALLBACK SELECTED JOB:", fallbackJob)
    console.log("JOB DATA FALLBACK JOB ERROR:", jobError)

    if (jobError || !fallbackJob || isClosedStatus(fallbackJob?.status)) {
      clearCurrentJob()
      return
    }

    setSelectedAssignment(null)
    setSelectedJob(fallbackJob)
    setLoading(false)
  }, [jobId])

  useEffect(() => {
    loadData()
  }, [loadData])

  const completeJob = async () => {
    const currentJob = selectedAssignment?.jobs || selectedJob || null
    const activeJobId = selectedAssignment?.job_id || currentJob?.id

    if (!activeJobId || !userId) {
      alert("Errore: lavoro o utente non trovato")
      return
    }

    const confirmed = window.confirm(
      "Confermi di aver completato questo lavoro con successo?"
    )

    if (!confirmed) return

    setCompleting(true)

    try {
      const completedAt = new Date().toISOString()

      const { error: jobsError } = await supabase
        .from("jobs")
        .update({
          status: "completed",
          completed_at: completedAt
        })
        .eq("id", activeJobId)

      console.log("JOB COMPLETE ERROR:", jobsError)

      if (jobsError) {
        alert("Errore chiusura lavoro: " + jobsError.message)
        return
      }

      const { error: appError } = await supabase
        .from("applications")
        .update({
          status: "completed",
          completed_at: completedAt
        })
        .eq("job_id", activeJobId)
        .eq("pilot_id", userId)

      if (appError) {
        alert("Errore aggiornamento applications: " + appError.message)
        return
      }

      const { error: assignmentError } = await supabase
        .from("job_assignments")
        .update({
          status: "completed",
          completed_at: completedAt
        })
        .eq("job_id", activeJobId)
        .eq("pilot_id", userId)

      if (assignmentError) {
        alert("Errore aggiornamento job_assignments: " + assignmentError.message)
        return
      }

      setSelectedAssignment(null)
      setSelectedJob(null)

      alert("Lavoro concluso con successo")
      router.replace("/dashboard/jobs")
    } finally {
      setCompleting(false)
    }
  }

  const job = selectedAssignment?.jobs || selectedJob || null
  const hasOperationalData = Boolean(selectedAssignment)

  const location = selectedAssignment
    ? getAssignmentLocation(selectedAssignment)
    : job?.location || "Nessuna posizione indicata"

  const meetingPoint = selectedAssignment
    ? getMeetingPoint(selectedAssignment)
    : "Nessun punto di ritrovo indicato"

  const phone = selectedAssignment
    ? getPhone(selectedAssignment)
    : job?.client_phone || "Nessun telefono indicato"

  const email = selectedAssignment
    ? getEmail(selectedAssignment)
    : job?.client_email || "Nessuna email indicata"

  const operationalNotes = selectedAssignment
    ? getOperationalNotes(selectedAssignment)
    : job?.description || "Nessuna nota operativa"

  const jobDate = selectedAssignment
    ? getJobDate(selectedAssignment)
    : job?.job_date || ""

  return (
    <div className="min-h-screen text-white">
      <Navbar logged />

      <div className="min-h-screen bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] p-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h1 className="text-5xl font-bold mb-4">
              Dati lavoro
            </h1>

            <p className="text-gray-400 text-lg">
              Informazioni operative inviate dai clienti
            </p>
          </div>

          {loading && (
            <div className="text-gray-400">
              Caricamento...
            </div>
          )}

          {!loading && !selectedAssignment && !selectedJob && (
            <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-10">
              <h2 className="text-3xl font-bold mb-3">
                Nessun dato lavoro
              </h2>

              <p className="text-gray-400">
                Nessun cliente ti ha ancora inviato dettagli operativi.
              </p>
            </div>
          )}

          {!loading && (selectedAssignment || selectedJob) && (
            <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-8">
              <div className="flex flex-col gap-5 mb-8 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    {job?.title || "Lavoro"}
                  </h2>

                  <div className="flex flex-wrap gap-5 text-gray-400">
                    <div>
                      Posizione: {location}
                    </div>

                    <div>
                      Data: {formatJobDate(jobDate)}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 lg:items-end">
                  <div className={`px-5 py-2 rounded-xl font-bold ${
                    hasOperationalData
                      ? "bg-green-500 text-black"
                      : "bg-white/10 text-white"
                  }`}>
                    {hasOperationalData
                      ? "DATI RICEVUTI"
                      : "LAVORO ASSEGNATO - DATI IN ATTESA"}
                  </div>

                  {job?.status !== "completed" && (
                    <button
                      onClick={completeJob}
                      disabled={completing}
                      className="bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl px-5 py-3 transition disabled:opacity-60"
                    >
                      {completing
                        ? "Chiusura in corso..."
                        : "Concludi lavoro con successo"}
                    </button>
                  )}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                <div className="bg-black/20 rounded-2xl p-5">
                  <p className="text-gray-400 mb-2">
                    Posizione precisa
                  </p>

                  <h3 className="text-lg font-semibold">
                    {location}
                  </h3>
                </div>

                <div className="bg-black/20 rounded-2xl p-5">
                  <p className="text-gray-400 mb-2">
                    Punto di ritrovo
                  </p>

                  <h3 className="text-lg font-semibold">
                    {meetingPoint}
                  </h3>
                </div>

                <div className="bg-black/20 rounded-2xl p-5">
                  <p className="text-gray-400 mb-2">
                    Telefono
                  </p>

                  <h3 className="text-lg font-semibold">
                    {phone}
                  </h3>
                </div>

                <div className="bg-black/20 rounded-2xl p-5">
                  <p className="text-gray-400 mb-2">
                    Email
                  </p>

                  <h3 className="text-lg font-semibold break-all">
                    {email}
                  </h3>
                </div>

                <div className="bg-black/20 rounded-2xl p-5">
                  <p className="text-gray-400 mb-2">
                    Data e orario
                  </p>

                  <h3 className="text-lg font-semibold">
                    {selectedAssignment?.arrival_time
                      ? formatDateTime(selectedAssignment.arrival_time)
                      : formatJobDate(jobDate)}
                  </h3>
                </div>

                <div className="bg-black/20 rounded-2xl p-5">
                  <p className="text-gray-400 mb-2">
                    Stato lavoro
                  </p>

                  <h3 className="text-lg font-semibold uppercase">
                    {job?.status || selectedAssignment?.status || "Non specificato"}
                  </h3>
                </div>
              </div>

              <div className="mt-5 bg-black/20 rounded-2xl p-5">
                <p className="text-gray-400 mb-2">
                  Note operative
                </p>

                <p className="text-lg leading-8 text-gray-100">
                  {operationalNotes}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function JobDataPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen text-white">
          <Navbar logged />
          <div className="min-h-screen bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] p-10">
            <div className="max-w-6xl mx-auto text-gray-400">
              Caricamento...
            </div>
          </div>
        </div>
      }
    >
      <JobDataContent />
    </Suspense>
  )
}