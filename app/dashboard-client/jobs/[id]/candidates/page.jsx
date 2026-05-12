"use client"

import { useCallback, useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/client"
import {
  MapPin,
  Calendar,
  Plane,
  BadgeEuro,
  CheckCircle2,
  Users,
  Star,
  MessageSquare,
  X
} from "lucide-react"

const DEFAULT_PILOT_BIO = "Nessuna bio disponibile"
const DEFAULT_PILOT_DRONE = "Drone non specificato"
const DEFAULT_PILOT_CITY = "Italia"
const DEFAULT_PILOT_EXPERIENCE = "Esperienza non specificata"
const DEFAULT_PILOT_CERTIFICATIONS = "Nessuna certificazione"
const DEFAULT_PILOT_SERVICE = "Servizio non specificato"
const DEFAULT_PILOT_NAME = "Pilota DroneGuard"

function safeText(value) {
  if (Array.isArray(value)) return value.filter(Boolean).join(", ")
  if (value === null || value === undefined) return ""
  return String(value).trim()
}

function formatPrice(value) {
  if (value === null || value === undefined || value === "") {
    return "Offerta non disponibile"
  }

  const amount = Number(value)

  if (Number.isNaN(amount)) {
    return `EUR ${value}`
  }

  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  }).format(amount)
}

function getPilotDisplayData(pilot) {
  const name =
    safeText(pilot?.name) ||
    safeText(pilot?.full_name) ||
    safeText(pilot?.fullName) ||
    safeText(pilot?.username)

  const surname =
    safeText(pilot?.surname) ||
    safeText(pilot?.last_name) ||
    safeText(pilot?.lastName)

  const fullName =
    [name, surname].filter(Boolean).join(" ") ||
    safeText(pilot?.email) ||
    DEFAULT_PILOT_NAME

  const bio =
    safeText(pilot?.bio) ||
    safeText(pilot?.description) ||
    safeText(pilot?.about) ||
    DEFAULT_PILOT_BIO

  const drone =
    safeText(pilot?.drone) ||
    safeText(pilot?.drone_model) ||
    safeText(pilot?.droneModel) ||
    DEFAULT_PILOT_DRONE

  const city =
    safeText(pilot?.city) ||
    safeText(pilot?.location) ||
    safeText(pilot?.address) ||
    DEFAULT_PILOT_CITY

  const services =
    safeText(pilot?.services) ||
    safeText(pilot?.service) ||
    safeText(pilot?.category) ||
    DEFAULT_PILOT_SERVICE

  const certifications =
    safeText(pilot?.certifications) ||
    safeText(pilot?.certification) ||
    safeText(pilot?.licenses) ||
    DEFAULT_PILOT_CERTIFICATIONS

  const experience =
    safeText(pilot?.experience) ||
    safeText(pilot?.years_experience) ||
    safeText(pilot?.yearsExperience) ||
    DEFAULT_PILOT_EXPERIENCE

  const initials = `${name?.[0] || "P"}${surname?.[0] || "D"}`.toUpperCase()

  return {
    avatarUrl:
      safeText(pilot?.avatar_url) ||
      safeText(pilot?.avatar) ||
      safeText(pilot?.photo_url),
    fullName,
    bio,
    drone,
    city,
    services,
    certifications,
    experience,
    initials,
    verified: Boolean(pilot?.verified)
  }
}

function getStatusMeta(status) {
  if (status === "accepted") {
    return {
      label: "Confermato",
      className: "bg-emerald-400/90 text-black"
    }
  }

  if (status === "completed") {
    return {
      label: "Completato",
      className: "bg-cyan-400/90 text-black"
    }
  }

  if (status === "rejected") {
    return {
      label: "Rifiutato",
      className: "bg-red-500/90 text-white"
    }
  }

  return {
    label: "In attesa",
    className: "bg-amber-400/90 text-black"
  }
}

export default function CandidatesPage() {
  const params = useParams()

  const [candidates, setCandidates] = useState([])
  const [job, setJob] = useState(null)
  const [loadingAssign, setLoadingAssign] = useState(null)
  const [sendingDetails, setSendingDetails] = useState(false)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [selectedPilot, setSelectedPilot] = useState(null)
  const [showReviewsModal, setShowReviewsModal] = useState(false)
  const [selectedReviewPilot, setSelectedReviewPilot] = useState(null)
  const [pilotReviews, setPilotReviews] = useState([])
  const [reviewsLoading, setReviewsLoading] = useState(false)

  const [meetingPoint, setMeetingPoint] = useState("")
  const [exactLocation, setExactLocation] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [arrivalTime] = useState("")
  const [priority] = useState("normal")
  const [notes, setNotes] = useState("")
  const [addressResults, setAddressResults] = useState([])

  const [hasAuthorization] = useState(false)
  const [hasParking] = useState(false)
  const [hasPower] = useState(false)
  const [urbanFlight] = useState(false)
  const [peoplePresent] = useState(false)

  const loadJob = useCallback(async () => {
    if (!params?.id) return null

    const { data: jobData, error: jobError } = await supabase
      .from("jobs")
      .select("*")
      .eq("id", params.id)
      .single()

    if (jobError) {
      console.log("CANDIDATES JOB ERROR:", jobError)
      return null
    }

    setJob(jobData)
    return jobData
  }, [params?.id])

  const loadCandidates = useCallback(async () => {
    if (!params?.id) return

    await loadJob()

    const { data: apps, error: appsError } = await supabase
      .from("applications")
      .select("*")
      .eq("job_id", params.id)
      .order("created_at", { ascending: true })

    if (appsError) {
      console.log("CANDIDATES APPLICATIONS ERROR:", appsError)
      setCandidates([])
      return
    }

    const pilotIds = [
      ...new Set(
        (apps || [])
          .map((app) => app.pilot_id || app.user_id)
          .filter(Boolean)
      )
    ]

    let pilots = []

    if (pilotIds.length > 0) {
      const result = await supabase.from("users").select("*").in("id", pilotIds)
      pilots = result.data || []
      console.log("CANDIDATES PILOTS ERROR:", result.error)
    }

    const pilotsMap = new Map((pilots || []).map((pilot) => [pilot.id, pilot]))

    // 🔥 CARICA JOB_ASSIGNMENTS PER OGNI CANDIDATO
    const finalCandidates = await Promise.all(
      (apps || []).map(async (application) => {
        const profileId = application.pilot_id || application.user_id
        const pilotProfile = pilotsMap.get(profileId) || null

        // Controlla se esiste un record in job_assignments con dati inviati
        const { data: assignment, error: assignmentError } = await supabase
          .from("job_assignments")
          .select("*")
          .eq("job_id", params.id)
          .eq("pilot_id", profileId)
          .maybeSingle()

        if (assignmentError) {
          console.log("JOB_ASSIGNMENTS LOAD ERROR:", assignmentError)
        }

        // 🔥 DETERMINA SE DATI SONO STATI INVIATI
        const hasSentDetails =
          assignment &&
          (assignment.status === "details_sent" ||
            Boolean(
              assignment.meeting_point ||
              assignment.exact_location ||
              assignment.phone ||
              assignment.email ||
              assignment.notes
            ))

        return {
          ...application,
          pilot_id: application.pilot_id || application.user_id,
          pilot: pilotProfile,
          assignment: assignment || null,
          hasSentDetails: hasSentDetails || false
        }
      })
    )

    setCandidates(finalCandidates)
  }, [params?.id, loadJob])

  useEffect(() => {
    loadCandidates()
  }, [loadCandidates])

  const openDetailsModal = (application) => {
    setSelectedPilot(application)

    // 🔥 PRE-RIEMPI I CAMPI SE DATI SONO GIÀ STATI INVIATI
    if (application.assignment) {
      setMeetingPoint(application.assignment.meeting_point || "")
      setExactLocation(application.assignment.exact_location || "")
      setPhone(application.assignment.phone || "")
      setEmail(application.assignment.email || "")
      setNotes(application.assignment.notes || "")
    } else {
      // Resetta i campi se non ci sono dati precedenti
      setMeetingPoint("")
      setExactLocation("")
      setPhone("")
      setEmail("")
      setNotes("")
    }

    setShowDetailsModal(true)
  }

  const searchAddress = async (value) => {
    setExactLocation(value)

    if (value.length < 3) {
      setAddressResults([])
      return
    }

    try {
      const res = await fetch(`/api/address-search?q=${encodeURIComponent(value)}`)
      const data = await res.json()
      setAddressResults(Array.isArray(data) ? data : [])
    } catch (error) {
      console.log("ADDRESS SEARCH ERROR:", error)
      setAddressResults([])
    }
  }

  const sendJobDetails = async () => {
    if (sendingDetails) return

    try {
      if (!selectedPilot) {
        toast.error("Pilota non selezionato")
        return
      }

      if (!exactLocation.trim()) {
        toast.error("Inserisci la posizione precisa")
        return
      }

      if (!meetingPoint.trim()) {
        toast.error("Inserisci il punto di ritrovo")
        return
      }

      if (!phone.trim()) {
        toast.error("Inserisci il telefono")
        return
      }

      if (!email.trim()) {
        toast.error("Inserisci l'email")
        return
      }

      setSendingDetails(true)

      const {
        data: { user },
        error: userError
      } = await supabase.auth.getUser()

      if (userError) {
        console.log("USER ERROR:", userError)
        alert("Errore utente: sessione non valida")
        return
      }

      if (!user) {
        alert("Devi effettuare il login")
        return
      }

      const payload = {
        job_id: params.id,
        pilot_id: selectedPilot.pilot_id,
        client_id: user.id,
        exact_location: exactLocation.trim(),
        meeting_point: meetingPoint.trim(),
        phone: phone.trim(),
        email: email.trim(),
        arrival_time: arrivalTime,
        priority,
        notes: notes.trim(),
        has_authorization: hasAuthorization,
        has_parking: hasParking,
        has_power: hasPower,
        urban_flight: urbanFlight,
        people_present: peoplePresent,
        status: "details_sent"
      }

      console.log("SEND JOB DATA PAYLOAD:", payload)

      // 🔥 UPSERT - Se esiste aggiorna, se non esiste inserisce
      // Evita duplicate key error su (job_id, pilot_id)
      const { data: upsertResult, error: upsertError } = await supabase
        .from("job_assignments")
        .upsert([payload], {
          onConflict: "job_id,pilot_id"
        })
        .select()

      console.log("UPSERT RESULT:", upsertResult)
      console.log("UPSERT ERROR:", upsertError)

      if (upsertError) {
        console.log("UPSERT ERROR:", upsertError)
        toast.error(`Errore invio dati: ${upsertError.message}`)
        return
      }

      const { error: notificationError } = await supabase.from("notifications").insert([
        {
          user_id: selectedPilot.pilot_id,
          title: "Dati lavoro ricevuti",
          message: "Il cliente ha inviato le informazioni operative del lavoro.",
          type: "job_details",
          read: false
        }
      ])

      if (notificationError) {
        console.log("NOTIFICATION ERROR:", notificationError)
      }

      toast.success("Dati lavoro inviati ✅")
      setShowDetailsModal(false)
      setMeetingPoint("")
      setExactLocation("")
      setPhone("")
      setEmail("")
      setNotes("")
      setAddressResults([])

      await loadCandidates()
    } catch (err) {
      console.log("SEND JOB DETAILS GENERAL ERROR:", err)
      toast.error("Errore generale invio dati lavoro")
    } finally {
      setSendingDetails(false)
    }
  }

  const acceptPilot = async (application) => {
    try {
      const confirmAccept = window.confirm("Vuoi assegnare il lavoro a questo pilota?")

      if (!confirmAccept) return

      setLoadingAssign(application.id)

      const {
        data: { user }
      } = await supabase.auth.getUser()

      if (!user) {
        alert("Utente non trovato")
        return
      }

      const { data: updatedJob, error: jobError } = await supabase
        .from("jobs")
        .update({
          status: "assigned",
          assigned_pilot: application.pilot_id
        })
        .eq("id", params.id)
        .eq("user_id", user.id)
        .select("id,status,assigned_pilot,user_id")
        .maybeSingle()

      if (jobError || !updatedJob) {
        alert("Errore: assegnazione non salvata su jobs")
        return
      }

      const { data: acceptedRows, error: acceptError } = await supabase
        .from("applications")
        .update({ status: "accepted" })
        .eq("id", application.id)
        .select("id,job_id,pilot_id,status")

      if (acceptError || !acceptedRows || acceptedRows.length === 0) {
        alert("Errore candidatura: Supabase ha aggiornato 0 righe")
        return
      }

      const { error: rejectError } = await supabase
        .from("applications")
        .update({ status: "rejected" })
        .eq("job_id", params.id)
        .neq("id", application.id)

      if (rejectError) {
        alert("Errore aggiornamento altre candidature")
        return
      }

      const { data: assignment, error: assignmentError } = await supabase
        .from("job_assignments")
        .upsert(
          {
            job_id: params.id,
            pilot_id: application.pilot_id,
            client_id: user.id,
            status: "assigned"
          },
          { onConflict: "job_id,pilot_id" }
        )
        .select("id,job_id,pilot_id,client_id,status")
        .maybeSingle()

      if (assignmentError || !assignment) {
        alert("Errore creazione assegnazione lavoro")
        return
      }

      let conversationId = null

      const { data: existingConversation } = await supabase
        .from("conversations")
        .select("*")
        .eq("job_id", params.id)
        .maybeSingle()

      if (existingConversation) {
        conversationId = existingConversation.id
      } else {
        const { data: newConversation, error: convError } = await supabase
          .from("conversations")
          .insert([
            {
              client_id: user.id,
              pilot_id: application.pilot_id,
              job_id: params.id,
              status: "active"
            }
          ])
          .select()
          .single()

        if (convError || !newConversation) {
          toast.error("Errore creazione chat")
          return
        }

        conversationId = newConversation.id
      }

      await supabase
        .from("applications")
        .update({ conversation_id: conversationId })
        .eq("id", application.id)

      await supabase.from("notifications").insert([
        {
          user_id: application.pilot_id,
          title: "Candidatura accettata",
          message: `La tua candidatura per "${job?.title || "questo lavoro"}" è stata accettata.`,
          type: "application_accepted",
          read: false
        },
        {
          user_id: application.pilot_id,
          title: "Nuovo lavoro assegnato",
          message: `Ti è stato assegnato il lavoro "${job?.title || "questo lavoro"}"`,
          type: "job_assigned",
          read: false
        }
      ])

      toast.success("Lavoro assegnato con successo ✅")
      await loadCandidates()
    } catch (err) {
      console.log("ASSIGN GENERAL ERROR:", err)
      toast.error("Errore generale assegnazione")
    } finally {
      setLoadingAssign(null)
    }
  }

  const openPilotReviews = async (application) => {
  setSelectedReviewPilot(application)
  setShowReviewsModal(true)
  setReviewsLoading(true)
  setPilotReviews([])

  const { data, error } = await supabase
    .from("reviews")
    .select("id,rating,title,review,created_at,job_id")
    .eq("pilot_id", application.pilot_id)
    .order("created_at", { ascending: false })

  if (error) {
    console.log("PILOT REVIEWS ERROR:", error)
    toast.error("Errore caricamento recensioni")
    setPilotReviews([])
  } else {
    setPilotReviews(data || [])
  }

  setReviewsLoading(false)
}

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] p-6 sm:p-8 lg:p-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h1 className="mb-4 text-3xl font-bold sm:text-5xl">Candidati</h1>
            <p className="text-lg text-gray-400">{job?.title}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#140a3a] p-6 sm:p-8">
            <div className="mb-8 flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="mb-2 text-2xl font-bold sm:text-3xl">{job?.title}</h2>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-cyan-300" />
                    <span>Localita: {job?.location || "Non indicata"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-cyan-300" />
                    <span>
                      Data:{" "}
                      {job?.job_date
                        ? new Date(job.job_date).toLocaleDateString("it-IT")
                        : "Non indicata"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xl">
                <Users size={24} />
                {candidates.length} candidati
              </div>
            </div>

            {candidates.length === 0 && (
              <div className="py-16 text-center">
                <h2 className="mb-3 text-3xl font-bold">Nessun candidato</h2>
                <p className="text-gray-400">Nessun pilota si è ancora candidato.</p>
              </div>
            )}

            <div className="space-y-6">
              {candidates.map((application) => {
                const pilot = application.pilot || {}
                const pilotInfo = getPilotDisplayData(pilot)
                const statusMeta = getStatusMeta(application.status)
                const offerValue = application.price ?? application.offer_price ?? null

                return (
                  <div
                    key={application.id}
                    className="rounded-[28px] border border-white/10 bg-black/20 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-6"
                  >
                    <div className="grid gap-6 xl:grid-cols-[260px_minmax(0,1fr)_240px]">
                      <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                        <div className="flex items-start gap-4 xl:block">
                          {pilotInfo.avatarUrl ? (
                            <img
                              src={pilotInfo.avatarUrl}
                              alt={pilotInfo.fullName}
                              className="h-28 w-28 rounded-[24px] object-cover object-center shadow-lg ring-1 ring-white/10"
                              loading="lazy"
                              decoding="async"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div className="flex h-28 w-28 items-center justify-center rounded-[24px] bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-emerald-400/20 text-3xl font-bold text-white shadow-lg ring-1 ring-white/10">
                              {pilotInfo.initials}
                            </div>
                          )}

                          <div className="min-w-0 flex-1 xl:mt-5">
                            <p className="mb-2 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-300">
                              Pilota
                            </p>

                            <h2 className="text-2xl font-bold leading-tight">
                              {pilotInfo.fullName}
                            </h2>

                            <div className="mt-4 flex items-center gap-2 text-sm text-gray-300">
                              <MapPin size={16} className="text-cyan-300" />
                              <span>{pilotInfo.city}</span>
                            </div>

                            <button
  type="button"
  onClick={() => openPilotReviews(application)}
  className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-black/20 p-4 text-sm font-bold text-white transition hover:bg-white/10"
>
  <Star size={18} className="text-yellow-400" />
  Vedi recensioni pilota
</button>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                        <div className="flex h-full flex-col justify-between gap-5">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
                              Bio professionale
                            </p>
                            <p className="mt-3 text-sm leading-7 text-gray-200">
                              {pilotInfo.bio}
                            </p>
                          </div>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
                                Drone utilizzato
                              </p>
                              <div className="mt-3 flex items-center gap-3 text-white">
                                <Plane size={18} className="text-cyan-300" />
                                <span className="text-sm font-medium">
                                  {pilotInfo.drone}
                                </span>
                              </div>
                            </div>

                            <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
                                Servizio
                              </p>
                              <p className="mt-3 text-sm font-medium text-white">
                                {pilotInfo.services}
                              </p>
                            </div>

                            <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
                                Esperienza
                              </p>
                              <p className="mt-3 text-sm font-medium text-white">
                                {pilotInfo.experience}
                              </p>
                            </div>

                            <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
    Certificazioni
  </p>
  <p className="mt-3 text-sm font-medium text-white">
    {pilotInfo.certifications}
  </p>
</div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                        <div className="flex h-full flex-col justify-between gap-5">
                          <div className="space-y-4">
                            <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
                                Offerta del pilota
                              </p>
                              <div className="mt-3 flex items-center gap-3">
                                <BadgeEuro size={20} className="text-emerald-300" />
                                <p className="break-words text-2xl font-bold text-white sm:text-3xl">
                                  {formatPrice(offerValue)}
                                </p>
                              </div>
                            </div>

                            <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
                                Stato candidatura
                              </p>
                              <div
                                className={`mt-3 rounded-2xl px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.18em] ${statusMeta.className}`}
                              >
                                {statusMeta.label}
                              </div>
                            </div>
                          </div>

                          <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
                              Messaggio candidatura
                            </p>
                            <p className="mt-3 text-sm leading-6 text-gray-200">
                              {application.message || "Nessun messaggio inviato"}
                            </p>
                          </div>

                          <div className="space-y-3">
                            {application.status === "pending" && (
                              <button
                                disabled={loadingAssign === application.id}
                                onClick={() => acceptPilot(application)}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-4 font-bold text-black transition hover:bg-green-400 disabled:opacity-50"
                              >
                                <CheckCircle2 size={20} />
                                {loadingAssign === application.id
                                  ? "Assegnazione..."
                                  : "Assegna lavoro"}
                              </button>
                            )}

                            {application.status === "accepted" && (
                              <button
                                onClick={() => openDetailsModal(application)}
                                className={`w-full rounded-xl py-4 font-bold transition ${
                                  application.hasSentDetails
                                    ? "bg-cyan-500 text-black hover:bg-cyan-400"
                                    : "bg-green-500 text-black hover:bg-green-400"
                                }`}
                              >
                                {application.hasSentDetails
                                  ? "Vedi/Modifica dati"
                                  : "Invia dati lavoro"}
                              </button>
                            )}

                            {application.status === "rejected" && (
                              <div className="rounded-xl border border-white/[0.08] bg-black/20 px-4 py-4 text-center text-sm text-gray-400">
                                Candidatura non selezionata
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {showDetailsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">
          <div className="max-h-[90vh] w-full max-w-[95vw] overflow-y-auto rounded-3xl border border-white/10 bg-[#140a3a] p-5 text-white sm:max-w-3xl sm:p-8">
            <h2 className="mb-2 text-2xl font-bold sm:text-4xl">
              {selectedPilot?.hasSentDetails ? "Modifica dati lavoro" : "Invia dati lavoro"}
            </h2>

            <p className="mb-8 text-sm text-gray-400">
              {selectedPilot
                ? `Dettagli operativi per ${getPilotDisplayData(selectedPilot.pilot).fullName}`
                : "Dettagli operativi del lavoro"}
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="relative">
                <input
                  placeholder="Posizione precisa"
                  value={exactLocation}
                  onChange={(e) => searchAddress(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/20 p-4"
                />

                {addressResults.length > 0 && (
                  <div className="absolute left-0 top-full z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-2xl border border-white/10 bg-[#1b114d]">
                    {addressResults.map((item) => (
                      <div
                        key={item.place_id}
                        onClick={() => {
                          setExactLocation(item.display_name)
                          setAddressResults([])
                        }}
                        className="cursor-pointer border-b border-white/5 p-4 hover:bg-white/10"
                      >
                        {item.display_name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <input
                placeholder="Punto di ritrovo"
                value={meetingPoint}
                onChange={(e) => setMeetingPoint(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/20 p-4"
              />

              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Telefono"
                value={phone}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/\D/g, "")
                  setPhone(onlyNumbers)
                }}
                className="w-full rounded-2xl border border-white/10 bg-black/20 p-4"
              />

              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/20 p-4"
              />
            </div>

            <textarea
              placeholder="Note operative"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="mt-5 h-40 w-full rounded-2xl border border-white/10 bg-black/20 p-4"
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                disabled={sendingDetails}
                onClick={() => setShowDetailsModal(false)}
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 py-4 font-semibold transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Chiudi
              </button>

              <button
                disabled={sendingDetails}
                onClick={sendJobDetails}
                className="flex-1 rounded-2xl bg-green-500 py-4 text-lg font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sendingDetails ? "Invio..." : "Invia dati lavoro"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showReviewsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">
          <div className="max-h-[90vh] w-full max-w-[95vw] overflow-y-auto rounded-3xl border border-white/10 bg-[#140a3a] p-5 text-white sm:max-w-3xl sm:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold sm:text-4xl">
                  Recensioni pilota
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  {selectedReviewPilot
                    ? getPilotDisplayData(selectedReviewPilot.pilot).fullName
                    : "Pilota"}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowReviewsModal(false)}
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {reviewsLoading ? (
              <p className="text-gray-300">Caricamento recensioni...</p>
            ) : pilotReviews.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
                <MessageSquare size={32} className="mx-auto mb-3 text-gray-400" />

                <h3 className="text-xl font-bold">
                  Nessuna recensione
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Questo pilota non ha ancora ricevuto recensioni.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {pilotReviews.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <h3 className="text-xl font-bold">
                        {item.title || "Recensione"}
                      </h3>

                      <div className="flex items-center gap-1 text-yellow-400">
                        {Array.from({ length: Number(item.rating) || 0 }).map(
                          (_, index) => (
                            <Star key={index} size={18} fill="currentColor" />
                          )
                        )}
                      </div>
                    </div>

                    <p className="whitespace-pre-line text-sm leading-6 text-gray-300">
                      {item.review || "Nessun testo inserito."}
                    </p>

                    <p className="mt-4 text-xs text-gray-500">
                      Ricevuta il{" "}
                      {item.created_at
                        ? new Date(item.created_at).toLocaleDateString("it-IT")
                        : "Data non disponibile"}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  )
}
