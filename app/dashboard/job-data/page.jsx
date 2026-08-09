"use client"

import { Suspense, useCallback, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Navbar from "@/components/Navbar"
import JobDocumentsPanel from "@/components/JobDocumentsPanel"
import { toast } from "sonner"
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

function hasAppointmentDetails(
  assignment
) {
  return Boolean(
    String(
      assignment?.exact_location ||
        ""
    ).trim() &&
    String(
      assignment?.meeting_point ||
        ""
    ).trim() &&
    String(
      assignment?.arrival_time ||
        ""
    ).trim()
  )
}

function toDateTimeLocalValue(
  value
) {
  if (!value) {
    return ""
  }

  const raw =
    String(value)
      .trim()
      .replace(" ", "T")

  if (
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(
      raw
    )
  ) {
    return raw.slice(0, 16)
  }

  const date =
    new Date(value)

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return ""
  }

  const localDate =
    new Date(
      date.getTime() -
        date.getTimezoneOffset() *
          60_000
    )

  return localDate
    .toISOString()
    .slice(0, 16)
}

function JobDataContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const jobId = searchParams.get("jobId")

  const [selectedAssignment, setSelectedAssignment] = useState(null)
  const [selectedJob, setSelectedJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [completing, setCompleting] = useState(false)

  const [
  appointmentConfirming,
  setAppointmentConfirming
] = useState(false)

const [
  currentUserId,
  setCurrentUserId
] = useState(null)

const [
  appointmentChangeRequest,
  setAppointmentChangeRequest
] = useState(null)

const [
  appointmentChangeLoading,
  setAppointmentChangeLoading
] = useState(false)

const [
  showAppointmentChangeModal,
  setShowAppointmentChangeModal
] = useState(false)

const [
  proposedExactLocation,
  setProposedExactLocation
] = useState("")

const [
  proposedMeetingPoint,
  setProposedMeetingPoint
] = useState("")

const [
  proposedArrivalTime,
  setProposedArrivalTime
] = useState("")

const [
  proposedAppointmentNote,
  setProposedAppointmentNote
] = useState("")

const [
  appointmentChangeSending,
  setAppointmentChangeSending
] = useState(false)

const [
  appointmentChangeResponding,
  setAppointmentChangeResponding
] = useState(false)

const [
  appointmentChangeCancelling,
  setAppointmentChangeCancelling
] = useState(false)

  const clearCurrentJob = () => {
  setSelectedAssignment(null)
  setSelectedJob(null)
  setAppointmentChangeRequest(
    null
  )
  setLoading(false)
}

const loadAppointmentChangeRequest =
  useCallback(
    async (assignmentId) => {
      if (!assignmentId) {
        setAppointmentChangeRequest(
          null
        )

        return null
      }

      try {
        setAppointmentChangeLoading(
          true
        )

        const {
          data,
          error
        } = await supabase
          .from(
            "job_appointment_change_requests"
          )
          .select(`
            id,
            job_id,
            assignment_id,
            requester_id,
            recipient_id,

            current_job_date,
            current_exact_location,
            current_meeting_point,
            current_arrival_time,

            proposed_job_date,
            proposed_exact_location,
            proposed_meeting_point,
            proposed_arrival_time,

            note,
            status,
            created_at,
            responded_at,
            cancelled_at
          `)
          .eq(
            "assignment_id",
            assignmentId
          )
          .eq(
            "status",
            "pending"
          )
          .order(
            "created_at",
            {
              ascending:
                false
            }
          )
          .limit(1)
          .maybeSingle()

        if (error) {
          throw error
        }

        setAppointmentChangeRequest(
          data || null
        )

        return data || null

      } catch (error) {
        console.error(
          "[appointment-change-pilot] Caricamento richiesta fallito:",
          error
        )

        setAppointmentChangeRequest(
          null
        )

        return null
      } finally {
        setAppointmentChangeLoading(
          false
        )
      }
    },
    []
  )

  const loadData = useCallback(async () => {
    setLoading(true)

    const {
      data: { user }
    } = await supabase.auth.getUser()

    if (!user) {
      clearCurrentJob()
      return
    }
   setCurrentUserId(
  user.id
)

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


   if (assignment) {
  setSelectedAssignment(
    assignment
  )

  setSelectedJob(
    assignment.jobs || null
  )

  await loadAppointmentChangeRequest(
    assignment.id
  )

  setLoading(false)

  return
}

     /*
     * Un lavoro può essere mostrato al pilota
     * soltanto quando esiste una vera assegnazione
     * collegata al suo account.
     */
    clearCurrentJob()
  }, [
  jobId,
  loadAppointmentChangeRequest
])

  useEffect(() => {
    loadData()
  }, [loadData])

    const completeJob = async () => {
    if (completing) {
      return
    }

    const currentJob =
      selectedAssignment?.jobs ||
      selectedJob ||
      null

    const activeJobId =
      selectedAssignment?.job_id ||
      currentJob?.id

    if (!activeJobId) {
      toast.error(
        "Errore: lavoro non trovato."
      )

      return
    }

    const confirmed = window.confirm(
      "Confermi di aver completato questo lavoro con successo?"
    )

    if (!confirmed) {
      return
    }

    setCompleting(true)

    try {
      const {
        data,
        error
      } = await supabase.rpc(
        "confirm_job_completion",
        {
          p_job_id:
            activeJobId
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
            "LAVORO_NON_TROVATO"
          )
        ) {
          throw new Error(
            "Il lavoro non è più disponibile."
          )
        }

        if (
          errorText.includes(
            "LAVORO_NON_CONFERMABILE"
          )
        ) {
          throw new Error(
            "Questo lavoro non può essere confermato come completato."
          )
        }

        if (
          errorText.includes(
            "NON_SEI_PARTE_DI_QUESTO_LAVORO"
          )
        ) {
          throw new Error(
            "Non sei autorizzato a confermare questo lavoro."
          )
        }

        if (
          errorText.includes(
            "CANDIDATURA_ACCETTATA_NON_TROVATA"
          )
        ) {
          throw new Error(
            "La candidatura accettata collegata al lavoro non è stata trovata."
          )
        }

        if (
          errorText.includes(
            "ASSEGNAZIONE_LAVORO_INCOERENTE"
          )
        ) {
          throw new Error(
            "I dati dell’assegnazione non sono coerenti. Contatta l’assistenza."
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

      if (data?.completed) {
        setSelectedAssignment(null)
        setSelectedJob(null)

        toast.success(
          data?.already_processed
            ? "Il lavoro risultava già completato."
            : "Lavoro completato e confermato da entrambe le parti ✅"
        )

        router.replace(
          "/dashboard/jobs"
        )

        return
      }

      if (
        data?.waiting_for === "client"
      ) {
        toast.success(
          data?.already_processed
            ? "La tua conferma era già stata registrata. Manca ancora la conferma del cliente."
            : "Conferma registrata. Ora manca la conferma del cliente."
        )
      } else {
        toast.success(
          "Conferma registrata correttamente."
        )
      }

      /*
       * Il lavoro rimane assegnato finché anche
       * il cliente non conferma il completamento.
       */
      await loadData()
    } catch (error) {
      console.error(
        "[confirm-job-completion] RPC failed:",
        error
      )

      toast.error(
        error?.message ||
        "Impossibile confermare il completamento del lavoro."
      )

      await loadData()
    } finally {
      setCompleting(false)
    }
  }

  const confirmAppointment =
  async () => {
    if (
      appointmentConfirming
    ) {
      return
    }

    const currentJob =
      selectedAssignment?.jobs ||
      selectedJob ||
      null

    const activeJobId =
      selectedAssignment?.job_id ||
      currentJob?.id

    if (
      !activeJobId ||
      !selectedAssignment
    ) {
      toast.error(
        "I dati dell'appuntamento non sono disponibili."
      )

      return
    }

    if (
      !hasAppointmentDetails(
        selectedAssignment
      )
    ) {
      toast.error(
        "Posizione, punto di ritrovo e orario devono essere presenti prima della conferma."
      )

      return
    }

    try {
      setAppointmentConfirming(
        true
      )

      const {
        data,
        error
      } = await supabase.rpc(
        "confirm_job_appointment",
        {
          p_job_id:
            activeJobId
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
            "ASSEGNAZIONE_NON_TROVATA"
          )
        ) {
          throw new Error(
            "L'assegnazione non è stata trovata."
          )
        }

        if (
          errorText.includes(
            "POSIZIONE_APPUNTAMENTO_MANCANTE"
          ) ||
          errorText.includes(
            "PUNTO_RITROVO_MANCANTE"
          ) ||
          errorText.includes(
            "ORARIO_APPUNTAMENTO_MANCANTE"
          )
        ) {
          throw new Error(
            "I dati dell'appuntamento non sono completi."
          )
        }

        if (
          errorText.includes(
            "NON_SEI_PARTE_DI_QUESTO_LAVORO"
          )
        ) {
          throw new Error(
            "Non sei autorizzato a confermare questo appuntamento."
          )
        }

        if (
          errorText.includes(
            "APPUNTAMENTO_NON_CONFERMABILE"
          ) ||
          errorText.includes(
            "LAVORO_NON_CONFERMABILE"
          )
        ) {
          throw new Error(
            "Questo appuntamento non può più essere confermato."
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
        data?.appointment_confirmed
      ) {
        toast.success(
          "Appuntamento confermato da entrambe le parti ✅"
        )
      } else if (
        data?.already_confirmed
      ) {
        toast.success(
          "La tua conferma era già registrata. Manca ancora quella del cliente."
        )
      } else {
        toast.success(
          "Appuntamento confermato. Ora manca la conferma del cliente."
        )
      }

      await loadData()
    } catch (error) {
      console.error(
        "[appointment-pilot] Conferma fallita:",
        error
      )

      toast.error(
        error?.message ||
          "Impossibile confermare l'appuntamento."
      )
    } finally {
      setAppointmentConfirming(
        false
      )
    }
  }

  const openAppointmentChangeModal =
  () => {
    const currentJob =
      selectedAssignment?.jobs ||
      selectedJob ||
      null

    if (
      !selectedAssignment ||
      !currentJob?.id
    ) {
      toast.error(
        "Dati appuntamento non disponibili."
      )

      return
    }

    if (
      !hasAppointmentDetails(
        selectedAssignment
      )
    ) {
      toast.error(
        "L'appuntamento deve essere completo prima di richiederne la modifica."
      )

      return
    }

    setProposedExactLocation(
      String(
        selectedAssignment
          .exact_location ||
          ""
      )
    )

    setProposedMeetingPoint(
      String(
        selectedAssignment
          .meeting_point ||
          ""
      )
    )

    setProposedArrivalTime(
      toDateTimeLocalValue(
        selectedAssignment
          .arrival_time
      )
    )

    setProposedAppointmentNote(
      ""
    )

    setShowAppointmentChangeModal(
      true
    )
  }

  const sendAppointmentChangeRequest =
  async () => {
    if (
      appointmentChangeSending
    ) {
      return
    }

    const currentJob =
      selectedAssignment?.jobs ||
      selectedJob ||
      null

    if (!currentJob?.id) {
      toast.error(
        "Lavoro non disponibile."
      )

      return
    }

    const cleanLocation =
      proposedExactLocation.trim()

    const cleanMeetingPoint =
      proposedMeetingPoint.trim()

    const cleanArrivalTime =
      proposedArrivalTime.trim()

    const cleanNote =
      proposedAppointmentNote.trim()

    if (!cleanLocation) {
      toast.error(
        "Inserisci la nuova posizione."
      )

      return
    }

    if (!cleanMeetingPoint) {
      toast.error(
        "Inserisci il nuovo punto di ritrovo."
      )

      return
    }

    if (!cleanArrivalTime) {
      toast.error(
        "Inserisci la nuova data e ora."
      )

      return
    }

    if (
      cleanNote.length >
      1000
    ) {
      toast.error(
        "La nota può contenere massimo 1000 caratteri."
      )

      return
    }

    try {
      setAppointmentChangeSending(
        true
      )

      const {
        data,
        error
      } = await supabase.rpc(
        "request_job_appointment_change",
        {
          p_job_id:
            currentJob.id,

          p_proposed_exact_location:
            cleanLocation,

          p_proposed_meeting_point:
            cleanMeetingPoint,

          p_proposed_arrival_time:
            cleanArrivalTime,

          p_note:
            cleanNote ||
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
            "RICHIESTA_MODIFICA_GIA_IN_ATTESA"
          )
        ) {
          throw new Error(
            "Esiste già una richiesta di modifica in attesa."
          )
        }

        if (
          errorText.includes(
            "NESSUNA_MODIFICA_PROPOSTA"
          )
        ) {
          throw new Error(
            "Modifica almeno un dato dell'appuntamento."
          )
        }

        if (
          errorText.includes(
            "APPUNTAMENTO_NON_MODIFICABILE"
          ) ||
          errorText.includes(
            "LAVORO_NON_MODIFICABILE"
          )
        ) {
          throw new Error(
            "Questo appuntamento non può più essere modificato."
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
          "Risposta richiesta modifica non valida."
        )
      }

      toast.success(
        data?.already_processed
          ? "Questa proposta era già stata inviata."
          : "Richiesta di modifica inviata al cliente ✅"
      )

      setShowAppointmentChangeModal(
        false
      )

      await loadAppointmentChangeRequest(
        selectedAssignment.id
      )

    } catch (error) {
      console.error(
        "[appointment-change-pilot] Invio fallito:",
        error
      )

      toast.error(
        error?.message ||
          "Impossibile inviare la richiesta."
      )
    } finally {
      setAppointmentChangeSending(
        false
      )
    }
  }

  const respondAppointmentChange =
  async (accept) => {
    if (
      appointmentChangeResponding ||
      !appointmentChangeRequest?.id
    ) {
      return
    }

    if (!accept) {
      const confirmed =
        window.confirm(
          "Vuoi rifiutare questa proposta di modifica?"
        )

      if (!confirmed) {
        return
      }
    }

    try {
      setAppointmentChangeResponding(
        true
      )

      const {
        data,
        error
      } = await supabase.rpc(
        "respond_job_appointment_change",
        {
          p_request_id:
            appointmentChangeRequest.id,

          p_accept:
            Boolean(accept)
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
            "RICHIESTA_GIA_RISOLTA"
          )
        ) {
          throw new Error(
            "Questa richiesta è già stata risolta."
          )
        }

        if (
          errorText.includes(
            "RICHIESTA_NON_AUTORIZZATA"
          )
        ) {
          throw new Error(
            "Non sei autorizzato a rispondere a questa richiesta."
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
        data?.error_code ===
        "RICHIESTA_MODIFICA_OBSOLETA"
      ) {
        toast.error(
          "La proposta non è più valida perché l'appuntamento è già cambiato."
        )

        setAppointmentChangeRequest(
          null
        )

        await loadData()

        return
      }


      if (
        data?.success !== true
      ) {
        throw new Error(
          "Risposta modifica appuntamento non valida."
        )
      }


      if (accept) {
        toast.success(
          "Nuovo appuntamento accettato ✅ Le conferme sono state azzerate."
        )

        setAppointmentChangeRequest(
          null
        )

        await loadData()
      } else {
        toast.success(
          "Proposta rifiutata. L'appuntamento originale non è stato modificato."
        )

        await loadAppointmentChangeRequest(
          selectedAssignment?.id
        )
      }

    } catch (error) {
      console.error(
        "[appointment-change-pilot] Risposta fallita:",
        error
      )

      toast.error(
        error?.message ||
          "Impossibile rispondere alla richiesta."
      )
    } finally {
      setAppointmentChangeResponding(
        false
      )
    }
  }

  const cancelAppointmentChange =
  async () => {
    if (
      appointmentChangeCancelling ||
      !appointmentChangeRequest?.id
    ) {
      return
    }

    const confirmed =
      window.confirm(
        "Vuoi annullare la tua richiesta di modifica?"
      )

    if (!confirmed) {
      return
    }

    try {
      setAppointmentChangeCancelling(
        true
      )

      const {
        data,
        error
      } = await supabase.rpc(
        "cancel_job_appointment_change",
        {
          p_request_id:
            appointmentChangeRequest.id
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
            "RICHIESTA_NON_ANNULLABILE"
          )
        ) {
          throw new Error(
            "Questa richiesta non può più essere annullata."
          )
        }

        if (
          errorText.includes(
            "RICHIESTA_NON_AUTORIZZATA"
          )
        ) {
          throw new Error(
            "Non sei autorizzato ad annullare questa richiesta."
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

      toast.success(
        "Richiesta di modifica annullata."
      )

      setAppointmentChangeRequest(
        null
      )

    } catch (error) {
      console.error(
        "[appointment-change-pilot] Annullamento fallito:",
        error
      )

      toast.error(
        error?.message ||
          "Impossibile annullare la richiesta."
      )
    } finally {
      setAppointmentChangeCancelling(
        false
      )
    }
  }

  const job = selectedAssignment?.jobs || selectedJob || null
  const hasOperationalData = Boolean(selectedAssignment)

   const pilotAlreadyConfirmed =
    Boolean(job?.pilot_completed_at)

  const waitingForClient =
    pilotAlreadyConfirmed &&
    !job?.client_completed_at &&
    job?.status !== "completed"

    const appointmentClientConfirmed =
  Boolean(
    selectedAssignment
      ?.appointment_client_confirmed_at
  )

const appointmentPilotConfirmed =
  Boolean(
    selectedAssignment
      ?.appointment_pilot_confirmed_at
  )

const appointmentConfirmed =
  Boolean(
    selectedAssignment
      ?.appointment_confirmed_at
  )

const appointmentReady =
  hasAppointmentDetails(
    selectedAssignment
  )

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

      <div className="min-h-screen bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Dati lavoro
            </h1>

            <p className="text-base text-gray-400 sm:text-lg">
              Informazioni operative inviate dai clienti
            </p>
          </div>

          {loading && (
            <div className="text-gray-400">
              Caricamento...
            </div>
          )}

          {!loading && !selectedAssignment && !selectedJob && (
            <div className="rounded-3xl border border-white/10 bg-[#140a3a] p-6 sm:p-10">
              <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
                Nessun dato lavoro
              </h2>

              <p className="text-gray-400">
                Nessun cliente ti ha ancora inviato dettagli operativi.
              </p>
            </div>
          )}

          {!loading && (selectedAssignment || selectedJob) && (
            <div className="rounded-3xl border border-white/10 bg-[#140a3a] p-5 sm:p-8">
              <div className="flex flex-col gap-5 mb-8 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
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
                  <div className={`rounded-xl px-4 py-2 text-sm font-bold sm:px-5 sm:text-base ${
                    hasOperationalData
                      ? "bg-green-500 text-black"
                      : "bg-white/10 text-white"
                  }`}>
                    {hasOperationalData
                      ? "DATI RICEVUTI"
                      : "LAVORO ASSEGNATO - DATI IN ATTESA"}
                  </div>

                  {job?.status !== "completed" && (
  waitingForClient ? (
    <div className="w-full rounded-xl border border-amber-300/30 bg-amber-400/10 px-5 py-3 text-center text-sm font-bold text-amber-200 lg:w-auto">
      Completamento confermato • In attesa del cliente
    </div>
  ) : (
    <button
      type="button"
      onClick={completeJob}
      disabled={completing}
      className="w-full rounded-xl bg-green-500 px-5 py-3 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60 lg:w-auto"
    >
      {completing
        ? "Conferma in corso..."
        : "Conferma completamento lavoro"}
    </button>
  )
)}
                </div>
              </div>

              {hasOperationalData && (
  <div className="mb-6 rounded-2xl border border-purple-400/20 bg-purple-400/[0.06] p-5 sm:p-6">

    <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-300">
      Appuntamento
    </p>

    <h3 className="mt-2 text-xl font-bold">
      Conferma con il cliente
    </h3>

    <p className="mt-2 text-sm leading-6 text-gray-400">
      Controlla luogo, punto di ritrovo e orario
      prima di confermare.
    </p>


    <div className="mt-5 grid gap-3 sm:grid-cols-2">

      <div className="rounded-xl border border-white/10 bg-black/20 p-4">
        <p className="text-xs uppercase tracking-wider text-gray-500">
          Cliente
        </p>

        <p
          className={`mt-2 font-bold ${
            appointmentClientConfirmed
              ? "text-green-300"
              : "text-amber-200"
          }`}
        >
          {appointmentClientConfirmed
            ? "✅ Confermato"
            : "⏳ Da confermare"}
        </p>
      </div>


      <div className="rounded-xl border border-white/10 bg-black/20 p-4">
        <p className="text-xs uppercase tracking-wider text-gray-500">
          Pilota
        </p>

        <p
          className={`mt-2 font-bold ${
            appointmentPilotConfirmed
              ? "text-green-300"
              : "text-amber-200"
          }`}
        >
          {appointmentPilotConfirmed
            ? "✅ Confermato"
            : "⏳ Da confermare"}
        </p>
      </div>

    </div>


    {appointmentConfirmed ? (
      <div className="mt-4 rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-center font-bold text-green-300">
        ✅ Appuntamento confermato da entrambe le parti
      </div>
    ) : appointmentPilotConfirmed ? (
      <div className="mt-4 rounded-xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-center font-semibold text-amber-200">
        La tua conferma è registrata • In attesa del cliente
      </div>
    ) : (
      <button
        type="button"
        onClick={
          confirmAppointment
        }
        disabled={
          appointmentConfirming ||
          !appointmentReady
        }
        className="mt-4 w-full rounded-xl bg-green-500 px-5 py-3.5 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {appointmentConfirming
          ? "Conferma in corso..."
          : appointmentClientConfirmed
            ? "Conferma appuntamento"
            : "Conferma appuntamento"}
      </button>
    )}


    {!appointmentReady && (
      <p className="mt-3 text-xs leading-5 text-gray-500">
        La conferma sarà disponibile quando il
        cliente avrà inserito posizione precisa,
        punto di ritrovo e orario.
      </p>
    )}

    {appointmentChangeLoading && (
  <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm text-gray-400">
    Controllo richieste di modifica...
  </div>
)}


{!appointmentChangeLoading &&
  appointmentChangeRequest && (

  <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-5">

    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
      Modifica appuntamento
    </p>


    {appointmentChangeRequest
      .requester_id ===
    currentUserId ? (

      <>
        <h4 className="mt-2 text-lg font-bold">
          Proposta inviata al cliente
        </h4>

        <p className="mt-2 text-sm text-gray-400">
          Il cliente deve ancora accettare o rifiutare la modifica.
        </p>


        <div className="mt-4 space-y-3">

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Nuova posizione
            </p>

            <p className="mt-2 font-semibold">
              {
                appointmentChangeRequest
                  .proposed_exact_location
              }
            </p>
          </div>


          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Nuovo punto di ritrovo
            </p>

            <p className="mt-2 font-semibold">
              {
                appointmentChangeRequest
                  .proposed_meeting_point
              }
            </p>
          </div>


          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Nuova data e ora
            </p>

            <p className="mt-2 font-semibold">
              {formatDateTime(
                appointmentChangeRequest
                  .proposed_arrival_time
              )}
            </p>
          </div>

        </div>


        {appointmentChangeRequest
          .note && (
          <div className="mt-3 rounded-xl border border-white/10 bg-black/20 p-4">

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Nota
            </p>

            <p className="mt-2 whitespace-pre-line text-sm text-gray-300">
              {
                appointmentChangeRequest
                  .note
              }
            </p>

          </div>
        )}


        <button
          type="button"
          disabled={
            appointmentChangeCancelling
          }
          onClick={
            cancelAppointmentChange
          }
          className="mt-4 w-full rounded-xl border border-red-400/20 bg-red-400/[0.06] px-5 py-3 font-bold text-red-300 transition hover:bg-red-400/10 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {appointmentChangeCancelling
            ? "Annullamento..."
            : "Annulla richiesta"}
        </button>
      </>

    ) : (

      <>
        <h4 className="mt-2 text-lg font-bold">
          Il cliente propone una modifica
        </h4>

        <p className="mt-2 text-sm text-gray-400">
          L&apos;appuntamento attuale resterà invariato finché non accetti.
        </p>


        <div className="mt-4 grid gap-3 sm:grid-cols-2">

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Attuale
            </p>

            <p className="mt-3 text-sm text-gray-400">
              {
                appointmentChangeRequest
                  .current_exact_location
              }
            </p>

            <p className="mt-2 text-sm text-gray-400">
              {
                appointmentChangeRequest
                  .current_meeting_point
              }
            </p>

            <p className="mt-2 text-sm text-gray-400">
              {formatDateTime(
                appointmentChangeRequest
                  .current_arrival_time
              )}
            </p>

          </div>


          <div className="rounded-xl border border-green-400/20 bg-green-400/[0.05] p-4">

            <p className="text-xs uppercase tracking-wider text-green-300">
              Proposta
            </p>

            <p className="mt-3 text-sm font-semibold text-white">
              {
                appointmentChangeRequest
                  .proposed_exact_location
              }
            </p>

            <p className="mt-2 text-sm font-semibold text-white">
              {
                appointmentChangeRequest
                  .proposed_meeting_point
              }
            </p>

            <p className="mt-2 text-sm font-semibold text-white">
              {formatDateTime(
                appointmentChangeRequest
                  .proposed_arrival_time
              )}
            </p>

          </div>

        </div>


        {appointmentChangeRequest
          .note && (
          <div className="mt-3 rounded-xl border border-white/10 bg-black/20 p-4">

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Nota del cliente
            </p>

            <p className="mt-2 whitespace-pre-line text-sm text-gray-300">
              {
                appointmentChangeRequest
                  .note
              }
            </p>

          </div>
        )}


        <div className="mt-4 grid gap-3 sm:grid-cols-2">

          <button
            type="button"
            disabled={
              appointmentChangeResponding
            }
            onClick={() =>
              respondAppointmentChange(
                false
              )
            }
            className="rounded-xl border border-red-400/20 bg-red-400/[0.06] px-5 py-3 font-bold text-red-300 transition hover:bg-red-400/10 disabled:opacity-50"
          >
            Rifiuta
          </button>


          <button
            type="button"
            disabled={
              appointmentChangeResponding
            }
            onClick={() =>
              respondAppointmentChange(
                true
              )
            }
            className="rounded-xl bg-green-500 px-5 py-3 font-bold text-black transition hover:bg-green-400 disabled:opacity-50"
          >
            {appointmentChangeResponding
              ? "Operazione..."
              : "Accetta modifica"}
          </button>

        </div>
      </>

    )}

  </div>
)}


{!appointmentChangeLoading &&
  !appointmentChangeRequest &&
  appointmentReady && (

  <button
    type="button"
    onClick={
      openAppointmentChangeModal
    }
    className="mt-4 w-full rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-3.5 font-bold text-cyan-200 transition hover:bg-cyan-400/[0.12]"
  >
    Richiedi modifica appuntamento
  </button>

)}

  </div>
)}

<JobDocumentsPanel
  jobId={job?.id}
/>

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
      {showAppointmentChangeModal &&
  selectedAssignment && (

  <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">

    <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#140a3a] p-5 text-white shadow-2xl sm:p-8">

      <div className="flex items-start justify-between gap-4">

        <div>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            Appuntamento
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            Richiedi modifica
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Il cliente dovrà accettare la nuova proposta.
          </p>

        </div>


        <button
          type="button"
          disabled={
            appointmentChangeSending
          }
          onClick={() =>
            setShowAppointmentChangeModal(
              false
            )
          }
          className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10 disabled:opacity-50"
        >
          ✕
        </button>

      </div>


      <div className="mt-7 space-y-5">

        <label className="block">

          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
            Posizione precisa
          </span>

          <input
            value={
              proposedExactLocation
            }
            onChange={(event) =>
              setProposedExactLocation(
                event.target.value
              )
            }
            className="w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-white outline-none"
          />

        </label>


        <label className="block">

          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
            Punto di ritrovo
          </span>

          <input
            value={
              proposedMeetingPoint
            }
            onChange={(event) =>
              setProposedMeetingPoint(
                event.target.value
              )
            }
            className="w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-white outline-none"
          />

        </label>


        <label className="block">

          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
            Nuova data e ora
          </span>

          <input
            type="datetime-local"
            value={
              proposedArrivalTime
            }
            onChange={(event) =>
              setProposedArrivalTime(
                event.target.value
              )
            }
            className="w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-white outline-none [color-scheme:dark]"
          />

        </label>


        <label className="block">

          <div className="mb-2 flex items-center justify-between gap-3">

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
              Nota opzionale
            </span>

            <span className="text-xs text-gray-500">
              {proposedAppointmentNote.length}/1000
            </span>

          </div>

          <textarea
            value={
              proposedAppointmentNote
            }
            maxLength={1000}
            onChange={(event) =>
              setProposedAppointmentNote(
                event.target.value
              )
            }
            placeholder="Spiega brevemente il motivo della modifica..."
            className="h-32 w-full resize-none rounded-2xl border border-white/10 bg-black/20 p-4 text-white outline-none placeholder:text-gray-600"
          />

        </label>


        <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-sm leading-6 text-amber-100/70">
          L&apos;appuntamento attuale non verrà modificato finché il cliente non accetterà la proposta.
        </div>


        <div className="grid gap-3 sm:grid-cols-2">

          <button
            type="button"
            disabled={
              appointmentChangeSending
            }
            onClick={() =>
              setShowAppointmentChangeModal(
                false
              )
            }
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 font-semibold transition hover:bg-white/10 disabled:opacity-50"
          >
            Annulla
          </button>


          <button
            type="button"
            disabled={
              appointmentChangeSending
            }
            onClick={
              sendAppointmentChangeRequest
            }
            className="rounded-xl bg-green-500 px-5 py-4 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {appointmentChangeSending
              ? "Invio..."
              : "Invia proposta"}
          </button>

        </div>

      </div>

    </div>

  </div>
)}
    </div>
  )
}

export default function JobDataPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen text-white">
          <Navbar logged />
          <div className="min-h-screen bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
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
