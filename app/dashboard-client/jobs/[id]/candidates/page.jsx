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
  Heart,
  UserPlus,
  ShieldCheck,
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

  verified:
    Boolean(
      pilot?.verified
    ),

  insuranceVerified:
    pilot?.insurance_verified ===
    true
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

function getJobInvitationStatusMeta(
  status
) {
  if (status === "accepted") {
    return {
      label: "Accettato",
      className:
        "border-green-400/20 bg-green-400/10 text-green-300"
    }
  }

  if (status === "declined") {
    return {
      label: "Rifiutato",
      className:
        "border-red-400/20 bg-red-400/10 text-red-300"
    }
  }

  if (status === "cancelled") {
    return {
      label: "Annullato",
      className:
        "border-white/10 bg-white/5 text-gray-400"
    }
  }

  return {
    label: "In attesa",
    className:
      "border-amber-400/20 bg-amber-400/10 text-amber-300"
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

  const [compareIds, setCompareIds] = useState([])
  const [showCompareModal, setShowCompareModal] = useState(false)
  const [
  favoriteSavingPilotId,
  setFavoriteSavingPilotId
] = useState(null)

const [
  favoritesOnly,
  setFavoritesOnly
] = useState(false)

const [
  invitePilot,
  setInvitePilot
] = useState(null)

const [
  inviteJobs,
  setInviteJobs
] = useState([])

const [
  inviteJobId,
  setInviteJobId
] = useState("")

const [
  inviteMessage,
  setInviteMessage
] = useState("")

const [
  inviteJobsLoading,
  setInviteJobsLoading
] = useState(false)

const [
  invitationSending,
  setInvitationSending
] = useState(false)

const [
  sentInvitations,
  setSentInvitations
] = useState([])

const [
  cancelingInvitationId,
  setCancelingInvitationId
] = useState(null)

  const [meetingPoint, setMeetingPoint] = useState("")
  const [exactLocation, setExactLocation] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [
  arrivalTime,
  setArrivalTime
] = useState("")
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
  const result = await supabase.rpc(
    "get_client_visible_pilots",
    {
      p_pilot_ids: pilotIds
    }
  )

  pilots = result.data || []

  if (result.error) {
    console.error(
      "CANDIDATES PILOTS ERROR:",
      result.error
    )
  }
}

    const pilotsMap = new Map(
  (pilots || []).map((pilot) => [
    pilot.id,
    pilot
  ])
)

let favoritePilotIds =
  new Set()

if (pilotIds.length > 0) {
  const {
    data: favoriteRows,
    error: favoritesError
  } = await supabase
    .from(
      "client_favorite_pilots"
    )
    .select(
      "pilot_id"
    )
    .in(
      "pilot_id",
      pilotIds
    )

  if (favoritesError) {
    console.error(
      "[candidates] Preferiti non disponibili:",
      favoritesError
    )
  } else {
    favoritePilotIds =
      new Set(
        (favoriteRows || [])
          .map(
            (row) =>
              row.pilot_id
          )
          .filter(Boolean)
      )
  }
}

const reviewStatsMap = new Map()

if (pilotIds.length > 0) {
  const {
    data: reviewsData,
    error: reviewsError
  } = await supabase
    .from("reviews")
    .select("pilot_id,rating")
    .in("pilot_id", pilotIds)

  if (reviewsError) {
    console.error(
      "CANDIDATES REVIEW STATS ERROR:",
      reviewsError
    )
  } else {
    for (const review of reviewsData || []) {
      if (!review?.pilot_id) continue

      const current =
        reviewStatsMap.get(review.pilot_id) || {
          total: 0,
          count: 0
        }

      const rating = Number(review.rating)

      if (Number.isFinite(rating)) {
        current.total += rating
        current.count += 1
      }

      reviewStatsMap.set(
        review.pilot_id,
        current
      )
    }
  }
}

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

        const reviewStats =
  reviewStatsMap.get(profileId) || {
    total: 0,
    count: 0
  }

return {
  ...application,

  pilot_id:
    application.pilot_id ||
    application.user_id,

  pilot:
    pilotProfile,

  assignment:
    assignment || null,

  hasSentDetails:
    hasSentDetails || false,

  reviewCount:
    reviewStats.count,

  averageRating:
    reviewStats.count > 0
      ? reviewStats.total /
        reviewStats.count
      : null,

  isFavorite:
    favoritePilotIds.has(
      profileId
    )
}
      })
    )

    setCandidates(finalCandidates)
    setCompareIds((current) =>
  current.filter((applicationId) =>
    finalCandidates.some(
      (candidate) =>
        candidate.id === applicationId
    )
  )
)
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
      setArrivalTime(
  application.assignment.arrival_time
    ? String(
        application.assignment.arrival_time
      ).slice(0, 16)
    : ""
)
      setNotes(application.assignment.notes || "")
   } else {
  setMeetingPoint("")
  setExactLocation("")
  setPhone("")
  setEmail("")
  setArrivalTime("")
  setNotes("")
}

    setShowDetailsModal(true)
  }

  const searchAddress = async () => {
  const query = exactLocation.trim()

  if (query.length < 3) {
    setAddressResults([])
    return
  }

  try {
    const res = await fetch(
      `/api/address-search?q=${encodeURIComponent(query)}`
    )

    if (!res.ok) {
      setAddressResults([])
      return
    }

    const data = await res.json()

    setAddressResults(
      Array.isArray(data)
        ? data
        : []
    )
  } catch (error) {
    console.error(
      "[candidates] Address search error:",
      error
    )

    setAddressResults([])
  }
}

    const sendJobDetails = async () => {
    if (sendingDetails) {
      return
    }

    if (
      !selectedPilot?.pilot_id ||
      !params?.id
    ) {
      toast.error(
        "Pilota o lavoro non valido."
      )

      return
    }

    if (!exactLocation.trim()) {
      toast.error(
        "Inserisci la posizione precisa."
      )

      return
    }

    if (!meetingPoint.trim()) {
      toast.error(
        "Inserisci il punto di ritrovo."
      )

      return
    }

    if (!arrivalTime) {
  toast.error(
    "Inserisci data e orario dell'appuntamento."
  )

  return
}

    if (!phone.trim()) {
      toast.error(
        "Inserisci il telefono."
      )

      return
    }

    if (!email.trim()) {
      toast.error(
        "Inserisci l'email."
      )

      return
    }

    setSendingDetails(true)

    try {
      const {
        data,
        error
      } = await supabase.rpc(
        "save_job_assignment_details",
        {
          p_job_id:
            params.id,

          p_pilot_id:
            selectedPilot.pilot_id,

          p_exact_location:
            exactLocation.trim(),

          p_meeting_point:
            meetingPoint.trim(),

          p_phone:
            phone.trim(),

          p_email:
            email.trim(),

          p_arrival_time:
            arrivalTime || "",

          p_priority:
            priority || "normal",

          p_notes:
            notes.trim(),

          p_has_authorization:
            Boolean(hasAuthorization),

          p_has_parking:
            Boolean(hasParking),

          p_has_power:
            Boolean(hasPower),

          p_urban_flight:
            Boolean(urbanFlight),

          p_people_present:
            Boolean(peoplePresent)
        }
      )

      if (error) {
        const errorText = [
          error.message,
          error.details,
          error.hint,
          error.code
        ]
          .filter(Boolean)
          .join(" ")
          .toUpperCase()

        if (
          errorText.includes(
            "PIATTAFORMA_IN_MANUTENZIONE"
          )
        ) {
          throw new Error(
            "DroneGuard è temporaneamente in manutenzione."
          )
        }

        if (
          errorText.includes(
            "LAVORO_NON_ASSEGNATO"
          )
        ) {
          throw new Error(
            "Il lavoro non risulta assegnato."
          )
        }

        if (
          errorText.includes(
            "PILOTA_NON_ASSEGNATO_AL_LAVORO"
          )
        ) {
          throw new Error(
            "Il pilota selezionato non è assegnato a questo lavoro."
          )
        }

        if (
          errorText.includes(
            "ASSEGNAZIONE_NON_TROVATA"
          )
        ) {
          throw new Error(
            "L’assegnazione del lavoro non è stata trovata."
          )
        }

        if (
          errorText.includes(
            "NON_SEI_IL_PROPRIETARIO_DEL_LAVORO"
          ) ||
          errorText.includes(
            "ASSEGNAZIONE_NON_AUTORIZZATA"
          )
        ) {
          throw new Error(
            "Non sei autorizzato a modificare i dati di questo lavoro."
          )
        }

        if (
          errorText.includes(
            "TELEFONO_NON_VALIDO"
          )
        ) {
          throw new Error(
            "Inserisci un numero di telefono valido."
          )
        }

        if (
          errorText.includes(
            "EMAIL_NON_VALIDA"
          )
        ) {
          throw new Error(
            "Inserisci un indirizzo email valido."
          )
        }

        if (
          errorText.includes(
            "NOTE_TROPPO_LUNGHE"
          )
        ) {
          throw new Error(
            "Le note possono contenere massimo 3000 caratteri."
          )
        }

        if (
          errorText.includes(
            "ACCOUNT_SOSPESO"
          )
        ) {
          throw new Error(
            "Il tuo account è sospeso."
          )
        }

        throw error
      }

      if (data?.already_processed) {
        toast.success(
          "I dati erano già stati salvati correttamente."
        )
      } else {
        toast.success(
          "Dati lavoro inviati ✅"
        )
      }

      setShowDetailsModal(false)
      setMeetingPoint("")
      setExactLocation("")
      setPhone("")
      setEmail("")
      setArrivalTime("")
      setNotes("")
      setAddressResults([])

      await loadCandidates()
    } catch (error) {
      console.error(
        "[job-details] RPC failed:",
        error
      )

      toast.error(
        error?.message ||
        "Impossibile salvare i dati del lavoro."
      )
    } finally {
      setSendingDetails(false)
    }
  }

    const acceptPilot = async (application) => {
    if (
      loadingAssign ||
      !application?.id ||
      !params?.id
    ) {
      return
    }

    const confirmAccept = window.confirm(
      "Vuoi assegnare il lavoro a questo pilota?"
    )

    if (!confirmAccept) {
      return
    }

    setLoadingAssign(application.id)

    try {
      const {
        data,
        error
      } = await supabase.rpc(
        "assign_job_to_pilot",
        {
          p_job_id:
            params.id,

          p_application_id:
            application.id
        }
      )

      if (error) {
        const errorText = [
          error.message,
          error.details,
          error.hint,
          error.code
        ]
          .filter(Boolean)
          .join(" ")
          .toUpperCase()

        if (
          errorText.includes(
            "PIATTAFORMA_IN_MANUTENZIONE"
          )
        ) {
          throw new Error(
            "DroneGuard è temporaneamente in manutenzione."
          )
        }

        if (
          errorText.includes(
            "LAVORO_GIA_ASSEGNATO_AD_ALTRO_PILOTA"
          )
        ) {
          throw new Error(
            "Il lavoro è già stato assegnato a un altro pilota."
          )
        }

        if (
          errorText.includes(
            "LAVORO_NON_ASSEGNABILE"
          )
        ) {
          throw new Error(
            "Questo lavoro non può più essere assegnato."
          )
        }

        if (
          errorText.includes(
            "CANDIDATURA_NON_ASSEGNABILE"
          )
        ) {
          throw new Error(
            "Questa candidatura non può più essere accettata."
          )
        }

        if (
          errorText.includes(
            "CANDIDATURA_NON_TROVATA"
          )
        ) {
          throw new Error(
            "La candidatura selezionata non è più disponibile."
          )
        }

        if (
          errorText.includes(
            "NON_SEI_IL_PROPRIETARIO_DEL_LAVORO"
          )
        ) {
          throw new Error(
            "Non sei autorizzato ad assegnare questo lavoro."
          )
        }

        if (
          errorText.includes(
            "PILOTA_SOSPESO"
          )
        ) {
          throw new Error(
            "Il pilota selezionato è sospeso e non può ricevere il lavoro."
          )
        }

        if (
          errorText.includes(
            "CONVERSAZIONE_LAVORO_INCOERENTE"
          )
        ) {
          throw new Error(
            "La conversazione collegata al lavoro non è coerente. Contatta l’assistenza."
          )
        }

        if (
          errorText.includes(
            "ACCOUNT_SOSPESO"
          )
        ) {
          throw new Error(
            "Il tuo account è sospeso."
          )
        }

        throw error
      }

      if (data?.already_processed) {
        toast.success(
          "Il lavoro era già stato assegnato correttamente."
        )
      } else {
        toast.success(
          "Lavoro assegnato con successo ✅"
        )
      }

      await loadCandidates()
    } catch (error) {
      console.error(
        "[assign-job] RPC failed:",
        error
      )

      toast.error(
        error?.message ||
        "Impossibile assegnare il lavoro."
      )

      /*
       * Ricarica lo stato reale perché il lavoro
       * potrebbe essere stato assegnato da un’altra
       * scheda o richiesta contemporanea.
       */
      await loadCandidates()
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

const toggleCompareCandidate = (
  applicationId
) => {
  setCompareIds((current) => {
    if (
      current.includes(
        applicationId
      )
    ) {
      return current.filter(
        (id) =>
          id !== applicationId
      )
    }

    if (current.length >= 3) {
      toast.error(
        "Puoi confrontare massimo 3 piloti."
      )

      return current
    }

    return [
      ...current,
      applicationId
    ]
  })
}

const openInvitePilotModal =
  async (application) => {
    const pilotId =
      application?.pilot_id ||
      application?.user_id

    if (!pilotId) {
      toast.error(
        "Pilota non valido."
      )

      return
    }

    setInvitePilot(
      application
    )

    setInviteJobs([])
setSentInvitations([])
setInviteJobId("")
setInviteMessage("")
setInviteJobsLoading(true)

    try {
      const {
        data: {
          user
        }
      } =
        await supabase.auth.getUser()

      if (!user) {
        throw new Error(
          "Sessione non disponibile."
        )
      }

      const [
  jobsResult,
  invitationsResult
] = await Promise.all([
  supabase
    .from("jobs")
    .select(`
      id,
      title,
      location,
      job_date,
      status
    `)
    .eq(
      "user_id",
      user.id
    )
    .eq(
      "status",
      "open"
    )
    .neq(
      "id",
      params.id
    )
    .order(
      "created_at",
      {
        ascending: false
      }
    ),

  supabase
    .from(
      "job_invitations"
    )
    .select(`
      id,
      job_id,
      pilot_id,
      message,
      status,
      created_at,
      responded_at,
      cancelled_at,
      jobs (
        id,
        title,
        location,
        job_date,
        status
      )
    `)
    .eq(
      "client_id",
      user.id
    )
    .eq(
      "pilot_id",
      pilotId
    )
    .order(
      "created_at",
      {
        ascending: false
      }
    )
    .limit(20)
])


if (jobsResult.error) {
  throw jobsResult.error
}


if (
  invitationsResult.error
) {
  throw invitationsResult.error
}


setInviteJobs(
  jobsResult.data || []
)

setSentInvitations(
  invitationsResult.data || []
)
    } catch (error) {
      console.error(
        "[job-invitation] Caricamento lavori fallito:",
        error
      )

      toast.error(
        "Impossibile caricare i lavori disponibili."
      )

      setInvitePilot(null)
    } finally {
      setInviteJobsLoading(
        false
      )
    }
  }

  const sendPilotInvitation =
  async () => {
    if (invitationSending) {
      return
    }

    const pilotId =
      invitePilot?.pilot_id ||
      invitePilot?.user_id

    if (!pilotId) {
      toast.error(
        "Pilota non valido."
      )

      return
    }

    if (!inviteJobId) {
      toast.error(
        "Seleziona il lavoro."
      )

      return
    }

    const cleanMessage =
      inviteMessage.trim()

    if (
      cleanMessage.length >
      1000
    ) {
      toast.error(
        "Il messaggio può contenere massimo 1000 caratteri."
      )

      return
    }

    try {
      setInvitationSending(
        true
      )

      const {
        data,
        error
      } = await supabase.rpc(
        "create_job_invitation",
        {
          p_job_id:
            inviteJobId,

          p_pilot_id:
            pilotId,

          p_message:
            cleanMessage ||
            null
        }
      )

      if (error) {
        const errorText = [
          error.message,
          error.details,
          error.hint,
          error.code
        ]
          .filter(Boolean)
          .join(" ")
          .toUpperCase()

        if (
          errorText.includes(
            "PILOTA_HA_GIA_CANDIDATURA"
          )
        ) {
          throw new Error(
            "Questo pilota si è già candidato al lavoro selezionato."
          )
        }

        if (
          errorText.includes(
            "LAVORO_NON_INVITABILE"
          )
        ) {
          throw new Error(
            "Il lavoro selezionato non è più disponibile per gli inviti."
          )
        }

        if (
          errorText.includes(
            "PILOTA_NON_ATTIVO"
          )
        ) {
          throw new Error(
            "Questo pilota non è più attivo."
          )
        }

        if (
          errorText.includes(
            "PILOTA_NON_COLLEGATO_AL_CLIENTE"
          )
        ) {
          throw new Error(
            "Questo pilota non può essere invitato dal tuo account."
          )
        }

        if (
          errorText.includes(
            "NON_SEI_IL_PROPRIETARIO_DEL_LAVORO"
          )
        ) {
          throw new Error(
            "Non sei autorizzato a utilizzare questo lavoro."
          )
        }

        if (
          errorText.includes(
            "MESSAGGIO_TROPPO_LUNGO"
          )
        ) {
          throw new Error(
            "Il messaggio è troppo lungo."
          )
        }

        if (
          errorText.includes(
            "ACCOUNT_NON_ATTIVO"
          )
        ) {
          throw new Error(
            "Il tuo account non può effettuare questa operazione."
          )
        }

        throw error
      }

      if (
        data?.success !== true
      ) {
        throw new Error(
          "Risposta invito non valida."
        )
      }

      toast.success(
        data?.already_processed
          ? "L'invito era già stato inviato a questo pilota."
          : "Invito inviato al pilota ✅"
      )

      const selectedInviteJob =
  inviteJobs.find(
    (item) =>
      item.id ===
      inviteJobId
  ) || null


setSentInvitations(
  (current) => [
    {
      id:
        data.invitation_id,

      job_id:
        data.job_id,

      pilot_id:
        pilotId,

      message:
        cleanMessage ||
        null,

      status:
        data.status ||
        "pending",

      created_at:
        new Date().toISOString(),

      jobs:
        selectedInviteJob
    },

    ...current.filter(
      (item) =>
        item.id !==
        data.invitation_id
    )
  ]
)


setInviteJobId("")
setInviteMessage("")
    } catch (error) {
      console.error(
        "[job-invitation] Invio fallito:",
        error
      )

      toast.error(
        error?.message ||
          "Impossibile inviare l'invito."
      )
    } finally {
      setInvitationSending(
        false
      )
    }
  }

  const cancelPilotInvitation =
  async (invitation) => {
    if (
      !invitation?.id ||
      cancelingInvitationId
    ) {
      return
    }


    const confirmed =
      window.confirm(
        "Vuoi annullare questo invito?"
      )

    if (!confirmed) {
      return
    }


    try {
      setCancelingInvitationId(
        invitation.id
      )


      const {
        data,
        error
      } = await supabase.rpc(
        "cancel_job_invitation",
        {
          p_invitation_id:
            invitation.id
        }
      )


      if (error) {
        const errorText = [
          error.message,
          error.details,
          error.hint,
          error.code
        ]
          .filter(Boolean)
          .join(" ")
          .toUpperCase()


        if (
          errorText.includes(
            "INVITO_NON_ANNULLABILE"
          )
        ) {
          throw new Error(
            "Questo invito non può più essere annullato."
          )
        }


        if (
          errorText.includes(
            "INVITO_NON_AUTORIZZATO"
          )
        ) {
          throw new Error(
            "Non sei autorizzato ad annullare questo invito."
          )
        }


        if (
          errorText.includes(
            "INVITO_NON_TROVATO"
          )
        ) {
          throw new Error(
            "L'invito non è più disponibile."
          )
        }


        if (
          errorText.includes(
            "ACCOUNT_NON_ATTIVO"
          )
        ) {
          throw new Error(
            "Il tuo account non può effettuare questa operazione."
          )
        }


        throw error
      }


      if (
        data?.success !== true
      ) {
        throw new Error(
          "Risposta annullamento non valida."
        )
      }


      setSentInvitations(
        (current) =>
          current.map(
            (item) =>
              item.id ===
              invitation.id
                ? {
                    ...item,
                    status:
                      "cancelled",
                    cancelled_at:
                      new Date().toISOString()
                  }
                : item
          )
      )


      toast.success(
        "Invito annullato."
      )

    } catch (error) {
      console.error(
        "[job-invitation] Annullamento fallito:",
        error
      )

      toast.error(
        error?.message ||
          "Impossibile annullare l'invito."
      )
    } finally {
      setCancelingInvitationId(
        null
      )
    }
  }

const toggleFavoritePilot =
  async (application) => {
    const pilotId =
      application?.pilot_id ||
      application?.user_id

    if (
      !pilotId ||
      favoriteSavingPilotId
    ) {
      return
    }

    const nextFavorite =
      !application.isFavorite

    try {
      setFavoriteSavingPilotId(
        pilotId
      )

      const {
        data,
        error
      } = await supabase.rpc(
        "set_client_favorite_pilot",
        {
          p_pilot_id:
            pilotId,

          p_favorite:
            nextFavorite
        }
      )

      if (error) {
        const errorText = [
          error.message,
          error.details,
          error.hint,
          error.code
        ]
          .filter(Boolean)
          .join(" ")
          .toUpperCase()

        if (
          errorText.includes(
            "PILOTA_NON_ATTIVO"
          )
        ) {
          throw new Error(
            "Questo pilota non è più attivo."
          )
        }

        if (
          errorText.includes(
            "PILOTA_NON_COLLEGATO_AL_CLIENTE"
          )
        ) {
          throw new Error(
            "Non puoi aggiungere questo pilota ai preferiti."
          )
        }

        if (
          errorText.includes(
            "ACCOUNT_NON_ATTIVO"
          )
        ) {
          throw new Error(
            "Il tuo account non può effettuare questa operazione."
          )
        }

        throw error
      }

      if (data?.success !== true) {
        throw new Error(
          "RISPOSTA_PREFERITO_NON_VALIDA"
        )
      }


      setCandidates(
        (current) =>
          current.map(
            (candidate) => {
              const candidatePilotId =
                candidate.pilot_id ||
                candidate.user_id

              if (
                candidatePilotId !==
                pilotId
              ) {
                return candidate
              }

              return {
                ...candidate,

                isFavorite:
                  nextFavorite
              }
            }
          )
      )


      toast.success(
        nextFavorite
          ? "Pilota aggiunto ai preferiti ❤️"
          : "Pilota rimosso dai preferiti."
      )
    } catch (error) {
      console.error(
        "[favorite-pilot] Modifica fallita:",
        error
      )

      toast.error(
        error?.message ||
          "Impossibile aggiornare i preferiti."
      )
    } finally {
      setFavoriteSavingPilotId(
        null
      )
    }
  }

const compareCandidates =
  candidates.filter((candidate) =>
    compareIds.includes(
      candidate.id
    )
  )

  const visibleCandidates =
  favoritesOnly
    ? candidates.filter(
        (candidate) =>
          candidate.isFavorite ===
          true
      )
    : candidates

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

            {compareCandidates.length > 0 && (
  <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] p-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p className="font-bold text-white">
        {compareCandidates.length}
        {" "}
        {compareCandidates.length === 1
          ? "pilota selezionato"
          : "piloti selezionati"}
      </p>

      <p className="mt-1 text-sm text-gray-400">
        Puoi confrontare da 2 a 3 candidati.
      </p>
    </div>

    <div className="flex gap-3">
      <button
        type="button"
        onClick={() =>
          setCompareIds([])
        }
        className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/10"
      >
        Azzera
      </button>

      <button
        type="button"
        disabled={
          compareCandidates.length < 2
        }
        onClick={() =>
          setShowCompareModal(true)
        }
        className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Confronta candidati
      </button>
    </div>
  </div>
)}

            {candidates.length === 0 && (
              <div className="py-16 text-center">
                <h2 className="mb-3 text-3xl font-bold">Nessun candidato</h2>
                <p className="text-gray-400">Nessun pilota si è ancora candidato.</p>
              </div>
            )}

            {candidates.length > 0 && (
  <div className="mb-6 flex flex-wrap items-center justify-between gap-3">

    <button
      type="button"
      onClick={() =>
        setFavoritesOnly(
          (current) =>
            !current
        )
      }
      className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold transition ${
        favoritesOnly
          ? "border-red-400/30 bg-red-400/10 text-red-200"
          : "border-white/10 bg-white/[0.04] text-gray-300 hover:bg-white/[0.08]"
      }`}
    >
      <Heart
        size={17}
        fill={
          favoritesOnly
            ? "currentColor"
            : "none"
        }
      />

      {favoritesOnly
        ? "Mostra tutti"
        : "Solo preferiti"}
    </button>


    <p className="text-sm text-gray-500">
      {
        candidates.filter(
          (candidate) =>
            candidate.isFavorite
        ).length
      }{" "}
      preferiti
    </p>

  </div>
)}

            <div className="space-y-6">
              {visibleCandidates.map((application) => {
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

<button
  type="button"
  disabled={
    favoriteSavingPilotId ===
    (
      application.pilot_id ||
      application.user_id
    )
  }
  onClick={() =>
    toggleFavoritePilot(
      application
    )
  }
  className={`mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border p-4 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-50 ${
    application.isFavorite
      ? "border-red-400/30 bg-red-400/10 text-red-200"
      : "border-white/[0.08] bg-black/20 text-white hover:bg-white/10"
  }`}
>
  <Heart
    size={18}
    fill={
      application.isFavorite
        ? "currentColor"
        : "none"
    }
  />

  {favoriteSavingPilotId ===
  (
    application.pilot_id ||
    application.user_id
  )
    ? "Salvataggio..."
    : application.isFavorite
      ? "Pilota preferito"
      : "Aggiungi ai preferiti"}
</button>

<button
  type="button"
  onClick={() =>
    openInvitePilotModal(
      application
    )
  }
  className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-purple-400/20 bg-purple-400/[0.08] p-4 text-sm font-bold text-purple-200 transition hover:bg-purple-400/[0.14]"
>
  <UserPlus
    size={18}
  />

  Invita a un lavoro
</button>

<label
  className={`mt-3 flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition ${
    compareIds.includes(application.id)
      ? "border-cyan-400/30 bg-cyan-400/10"
      : "border-white/[0.08] bg-black/20 hover:bg-white/[0.06]"
  }`}
>
  <input
    type="checkbox"
    checked={
      compareIds.includes(
        application.id
      )
    }
    onChange={() =>
      toggleCompareCandidate(
        application.id
      )
    }
    className="h-4 w-4 accent-cyan-400"
  />

  <div>
    <p className="text-sm font-bold text-white">
      Confronta
    </p>

    <p className="mt-0.5 text-[11px] text-gray-500">
      Seleziona fino a 3 piloti
    </p>
  </div>
</label>

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


  {pilotInfo.insuranceVerified && (

    <div className="mt-3">

      <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1.5 text-[11px] font-bold text-green-300">

        <ShieldCheck
          size={13}
        />

        Assicurazione verificata

      </span>

    </div>
  )}

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
                <div className="flex gap-2">
  <input
    placeholder="Posizione precisa"
    value={exactLocation}
    onChange={(e) => {
      setExactLocation(
        e.target.value
      )

      setAddressResults([])
    }}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        e.preventDefault()
        searchAddress()
      }
    }}
    className="w-full rounded-2xl border border-white/10 bg-black/20 p-4"
  />

  <button
    type="button"
    onClick={searchAddress}
    disabled={
      exactLocation.trim().length < 3
    }
    className="shrink-0 rounded-2xl border border-white/10 px-4 py-3 font-medium hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
  >
    Cerca
  </button>
</div>

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

              <div>
  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
    Data e orario appuntamento
  </p>

  <input
    type="datetime-local"
    value={arrivalTime}
    min={
      job?.job_date
        ? `${job.job_date}T00:00`
        : undefined
    }
    max={
      job?.job_date
        ? `${job.job_date}T23:59`
        : undefined
    }
    onChange={(e) =>
      setArrivalTime(
        e.target.value
      )
    }
    className="w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-white [color-scheme:dark]"
  />
</div>

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

      {invitePilot && (
  <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">

    <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#140a3a] p-5 text-white shadow-2xl sm:p-8">

      <div className="flex items-start justify-between gap-4">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300">
            Invito pilota
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            Invita a un lavoro
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            {getPilotDisplayData(
              invitePilot.pilot
            ).fullName}
          </p>
        </div>


        <button
          type="button"
          disabled={
            invitationSending
          }
          onClick={() => {
            setInvitePilot(null)
            setInviteJobs([])
            setSentInvitations([])
            setInviteJobId("")
            setInviteMessage("")
          }}
          className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10 disabled:opacity-50"
        >
          <X size={20} />
        </button>

      </div>


      <div className="mt-7">

        {sentInvitations.length > 0 && (
  <div className="mb-6">

    <div className="mb-3 flex items-center justify-between gap-3">

      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
        Inviti già inviati
      </p>

      <span className="text-xs text-gray-500">
        {sentInvitations.length}
      </span>

    </div>


    <div className="space-y-3">

      {sentInvitations.map(
        (invitation) => {
          const statusMeta =
            getJobInvitationStatusMeta(
              invitation.status
            )

          return (
            <div
              key={
                invitation.id
              }
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
            >

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div className="min-w-0">

                  <p className="font-bold text-white">
                    {invitation.jobs?.title ||
                      "Lavoro DroneGuard"}
                  </p>


                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">

                    <span>
                      {invitation.jobs?.location ||
                        "Località non indicata"}
                    </span>

                    <span>
                      •
                    </span>

                    <span>
                      {invitation.created_at
                        ? new Date(
                            invitation.created_at
                          ).toLocaleDateString(
                            "it-IT"
                          )
                        : ""}
                    </span>

                  </div>

                </div>


                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-xs font-bold ${statusMeta.className}`}
                >
                  {statusMeta.label}
                </span>

              </div>


              {invitation.message && (
                <p className="mt-3 whitespace-pre-line text-sm leading-6 text-gray-400">
                  {invitation.message}
                </p>
              )}


              {invitation.status ===
                "pending" && (

                <button
                  type="button"
                  disabled={
                    cancelingInvitationId ===
                    invitation.id
                  }
                  onClick={() =>
                    cancelPilotInvitation(
                      invitation
                    )
                  }
                  className="mt-4 w-full rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-sm font-bold text-red-300 transition hover:bg-red-400/10 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {cancelingInvitationId ===
                  invitation.id
                    ? "Annullamento..."
                    : "Annulla invito"}
                </button>

              )}

            </div>
          )
        }
      )}

    </div>

  </div>
)}

        {inviteJobsLoading ? (
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center text-gray-400">
            Caricamento lavori...
          </div>
        ) : inviteJobs.length === 0 ? (
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.08] p-6">

            <p className="font-bold text-amber-200">
              Nessun altro lavoro aperto
            </p>

            <p className="mt-2 text-sm leading-6 text-amber-100/60">
              Per invitare questo pilota devi avere almeno un altro lavoro aperto.
            </p>

          </div>
        ) : (
          <>
            <label className="block">

              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                Seleziona lavoro
              </span>

              <select
                value={
                  inviteJobId
                }
                onChange={(e) =>
                  setInviteJobId(
                    e.target.value
                  )
                }
                className="w-full rounded-2xl border border-white/10 bg-[#1d1250] p-4 text-white outline-none [color-scheme:dark]"
              >
                <option value="">
                  Seleziona un lavoro
                </option>

                {inviteJobs.map(
                  (inviteJob) => (
                    <option
                      key={
                        inviteJob.id
                      }
                      value={
                        inviteJob.id
                      }
                    >
                      {inviteJob.title}
                      {" — "}
                      {inviteJob.location ||
                        "Località non indicata"}
                    </option>
                  )
                )}
              </select>

            </label>


            <label className="mt-5 block">

              <div className="mb-2 flex items-center justify-between gap-3">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                  Messaggio opzionale
                </span>

                <span className="text-xs text-gray-500">
                  {inviteMessage.length}/1000
                </span>

              </div>

              <textarea
                value={
                  inviteMessage
                }
                maxLength={1000}
                onChange={(e) =>
                  setInviteMessage(
                    e.target.value
                  )
                }
                placeholder="Scrivi un breve messaggio al pilota..."
                className="h-32 w-full resize-none rounded-2xl border border-white/10 bg-black/20 p-4 text-white outline-none placeholder:text-gray-600"
              />

            </label>


            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                disabled={
                  invitationSending
                }
                onClick={() => {
                  setInvitePilot(null)
                  setInviteJobs([])
                  setSentInvitations([])
                  setInviteJobId("")
                  setInviteMessage("")
                }}
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-4 font-semibold transition hover:bg-white/10 disabled:opacity-50"
              >
                Annulla
              </button>


              <button
                type="button"
                disabled={
                  invitationSending ||
                  !inviteJobId
                }
                onClick={
                  sendPilotInvitation
                }
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-4 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <UserPlus
                  size={19}
                />

                {invitationSending
                  ? "Invio..."
                  : "Invia invito"}
              </button>

            </div>
          </>
        )}

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


    {showCompareModal && (
  <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
    <div className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0D1230] p-5 shadow-2xl sm:p-7">

      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            Confronto piloti
          </p>

          <h2 className="mt-2 text-2xl font-black text-white sm:text-4xl">
            Confronta i candidati
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Confronta offerta, esperienza,
            attrezzatura, certificazioni e
            recensioni prima di scegliere.
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            setShowCompareModal(false)
          }
          className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
        >
          <X size={20} />
        </button>
      </div>


      <div className="overflow-x-auto rounded-3xl border border-white/10">
        <table className="w-full min-w-[800px] border-collapse text-left">

          <thead>
            <tr className="bg-[#080C22]">
              <th className="w-44 border-b border-white/10 p-4 text-sm text-gray-500">
                Caratteristica
              </th>

              {compareCandidates.map(
                (application) => {
                  const pilotInfo =
                    getPilotDisplayData(
                      application.pilot
                    )

                  return (
                    <th
                      key={application.id}
                      className="min-w-[230px] border-b border-l border-white/10 p-5 align-top"
                    >
                      <div className="flex items-center gap-3">
                        {pilotInfo.avatarUrl ? (
                          <img
                            src={
                              pilotInfo.avatarUrl
                            }
                            alt={
                              pilotInfo.fullName
                            }
                            className="h-12 w-12 rounded-xl object-cover ring-1 ring-white/10"
                            loading="lazy"
                            decoding="async"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 font-bold text-cyan-300">
                            {
                              pilotInfo.initials
                            }
                          </div>
                        )}

                        <div className="min-w-0">
                          <p className="truncate font-bold text-white">
                            {
                              pilotInfo.fullName
                            }
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
                            {
                              pilotInfo.city
                            }
                          </p>
                        </div>
                      </div>
                    </th>
                  )
                }
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-white/[0.07]">

            <tr>
              <td className="p-4 text-sm font-semibold text-gray-500">
                Offerta
              </td>

              {compareCandidates.map(
                (application) => (
                  <td
                    key={application.id}
                    className="border-l border-white/[0.07] p-4 text-lg font-bold text-emerald-300"
                  >
                    {formatPrice(
                      application.price ??
                        application.offer_price ??
                        null
                    )}
                  </td>
                )
              )}
            </tr>


            <tr>
              <td className="p-4 text-sm font-semibold text-gray-500">
                Città
              </td>

              {compareCandidates.map(
                (application) => {
                  const info =
                    getPilotDisplayData(
                      application.pilot
                    )

                  return (
                    <td
                      key={application.id}
                      className="border-l border-white/[0.07] p-4 text-sm text-white"
                    >
                      {info.city}
                    </td>
                  )
                }
              )}
            </tr>


            <tr>
              <td className="p-4 text-sm font-semibold text-gray-500">
                Esperienza
              </td>

              {compareCandidates.map(
                (application) => {
                  const info =
                    getPilotDisplayData(
                      application.pilot
                    )

                  return (
                    <td
                      key={application.id}
                      className="border-l border-white/[0.07] p-4 text-sm text-gray-200"
                    >
                      {info.experience}
                    </td>
                  )
                }
              )}
            </tr>


            <tr>
              <td className="p-4 text-sm font-semibold text-gray-500">
                Drone
              </td>

              {compareCandidates.map(
                (application) => {
                  const info =
                    getPilotDisplayData(
                      application.pilot
                    )

                  return (
                    <td
                      key={application.id}
                      className="border-l border-white/[0.07] p-4 text-sm text-gray-200"
                    >
                      {info.drone}
                    </td>
                  )
                }
              )}
            </tr>


            <tr>
              <td className="p-4 text-sm font-semibold text-gray-500">
                Servizi
              </td>

              {compareCandidates.map(
                (application) => {
                  const info =
                    getPilotDisplayData(
                      application.pilot
                    )

                  return (
                    <td
                      key={application.id}
                      className="border-l border-white/[0.07] p-4 text-sm leading-6 text-gray-200"
                    >
                      {info.services}
                    </td>
                  )
                }
              )}
            </tr>


            <tr>
              <td className="p-4 text-sm font-semibold text-gray-500">
                Certificazioni
              </td>

              {compareCandidates.map(
                (application) => {
                  const info =
                    getPilotDisplayData(
                      application.pilot
                    )

                  return (
                    <td
                      key={application.id}
                      className="border-l border-white/[0.07] p-4 text-sm leading-6 text-gray-200"
                    >
                      {
                        info.certifications
                      }
                    </td>
                  )
                }
              )}
            </tr>

<tr>

  <td className="p-4 text-sm font-semibold text-gray-500">
    Assicurazione
  </td>


  {compareCandidates.map(
    (
      application
    ) => {

      const info =
        getPilotDisplayData(
          application.pilot
        )

      return (
        <td
          key={
            application.id
          }
          className="border-l border-white/[0.07] p-4"
        >

          {info.insuranceVerified ? (

            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1.5 text-xs font-bold text-green-300">

              <ShieldCheck
                size={13}
              />

              Verificata

            </span>

          ) : (

            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-500">
              Non verificata
            </span>

          )}

        </td>
      )
    }
  )}

</tr>

            <tr>
              <td className="p-4 text-sm font-semibold text-gray-500">
                Verifica DroneGuard
              </td>

              {compareCandidates.map(
                (application) => {
                  const info =
                    getPilotDisplayData(
                      application.pilot
                    )

                  return (
                    <td
                      key={application.id}
                      className="border-l border-white/[0.07] p-4"
                    >
                      {info.verified ? (
                        <span className="inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-bold text-green-300">
                          Verificato
                        </span>
                      ) : (
                        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-gray-400">
                          Non verificato
                        </span>
                      )}
                    </td>
                  )
                }
              )}
            </tr>


            <tr>
              <td className="p-4 text-sm font-semibold text-gray-500">
                Recensioni
              </td>

              {compareCandidates.map(
                (application) => (
                  <td
                    key={application.id}
                    className="border-l border-white/[0.07] p-4"
                  >
                    {application.reviewCount >
                    0 ? (
                      <div>
                        <div className="flex items-center gap-2">
                          <Star
                            size={18}
                            fill="currentColor"
                            className="text-yellow-400"
                          />

                          <span className="font-bold text-white">
                            {Number(
                              application.averageRating
                            ).toFixed(1)}
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-gray-500">
                          {
                            application.reviewCount
                          }
                          {" "}
                          {application.reviewCount ===
                          1
                            ? "recensione"
                            : "recensioni"}
                        </p>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">
                        Nessuna recensione
                      </span>
                    )}
                  </td>
                )
              )}
            </tr>


            <tr>
              <td className="p-4 text-sm font-semibold text-gray-500">
                Stato candidatura
              </td>

              {compareCandidates.map(
                (application) => {
                  const status =
                    getStatusMeta(
                      application.status
                    )

                  return (
                    <td
                      key={application.id}
                      className="border-l border-white/[0.07] p-4"
                    >
                      <span
                        className={`inline-flex rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-wider ${status.className}`}
                      >
                        {status.label}
                      </span>
                    </td>
                  )
                }
              )}
            </tr>

          </tbody>
        </table>
      </div>


      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() =>
            setShowCompareModal(false)
          }
          className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
        >
          Chiudi
        </button>
      </div>

    </div>
  </div>
)}

 </div>
  )
}

