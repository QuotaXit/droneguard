"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import JobDocumentsPanel from "@/components/JobDocumentsPanel"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/client"
import {
  ShieldCheck,
  Users
} from "lucide-react"

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


function formatAppointmentDateTime(
  value
) {
  if (!value) {
    return "Non indicato"
  }

  const normalized =
    String(value)
      .trim()
      .replace(" ", "T")

  const date =
    new Date(normalized)

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return String(value)
  }

  return new Intl.DateTimeFormat(
    "it-IT",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }
  ).format(date)
}

export default function InProgressJobs() {
  const [jobs, setJobs] = useState([])
  const [stats, setStats] = useState({
    pilots: 0,
    completed: 0,
    active: 0
  })

  const [selectedPilot, setSelectedPilot] = useState(null)
  const [showPilotModal, setShowPilotModal] = useState(false)

  const [selectedJob, setSelectedJob] = useState(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [sentJobDetails, setSentJobDetails] = useState(null)

    const [completingJobId, setCompletingJobId] =
    useState(null)

     const [cancellingJobId, setCancellingJobId] =
    useState(null)

    const [
  confirmingAppointmentJobId,
  setConfirmingAppointmentJobId
] = useState(null)

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

const [
  editingJobDetails,
  setEditingJobDetails
] = useState(false)

const [
  detailExactLocation,
  setDetailExactLocation
] = useState("")

const [
  detailMeetingPoint,
  setDetailMeetingPoint
] = useState("")

const [
  detailArrivalTime,
  setDetailArrivalTime
] = useState("")

const [
  detailPhone,
  setDetailPhone
] = useState("")

const [
  detailEmail,
  setDetailEmail
] = useState("")

const [
  detailNotes,
  setDetailNotes
] = useState("")

const [
  savingJobDetails,
  setSavingJobDetails
] = useState(false)

  const loadJobs = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser()

    if (!user) return

    setCurrentUserId(
  user.id
)

    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .eq("user_id", user.id)
      .eq("status", "assigned")
      .order("created_at", { ascending: false })

    if (error) {
  console.error(
    "[in-progress] Caricamento lavori fallito:",
    error
  )

  toast.error(
    "Impossibile caricare i lavori in corso."
  )

  setJobs([])
  return
}

    const jobIds =
  (data || [])
    .map((job) => job.id)
    .filter(Boolean)

let assignmentsMap =
  new Map()

if (jobIds.length > 0) {
  const {
    data: assignmentRows,
    error: assignmentsError
  } = await supabase
    .from("job_assignments")
    .select(`
      id,
      job_id,
      pilot_id,
      client_id,
      exact_location,
      meeting_point,
      arrival_time,
      status,
      appointment_client_confirmed_at,
      appointment_pilot_confirmed_at,
      appointment_confirmed_at
    `)
    .in(
      "job_id",
      jobIds
    )

  if (assignmentsError) {
    console.error(
      "[in-progress] Stato appuntamenti non disponibile:",
      assignmentsError
    )
  } else {
    assignmentsMap =
      new Map(
        (assignmentRows || [])
          .filter(
            (assignment) =>
              assignment.job_id &&
              assignment.pilot_id
          )
          .map(
            (assignment) => [
              `${assignment.job_id}:${assignment.pilot_id}`,
              assignment
            ]
          )
      )
  }
}


const jobsWithApplications =
  await Promise.all(
    (data || []).map(
      async (job) => {
        const {
          count,
          error: countError
        } = await supabase
          .from("applications")
          .select("*", {
            count:
              "exact",

            head:
              true
          })
          .eq(
            "job_id",
            job.id
          )

        if (countError) {
          console.error(
            `[in-progress] Conteggio candidature fallito per il lavoro ${job.id}:`,
            countError
          )
        }

        const pilotId =
          job.assigned_pilot ||
          job.pilot_id ||
          null

        const assignment =
          pilotId
            ? assignmentsMap.get(
                `${job.id}:${pilotId}`
              ) || null
            : null

        return {
          ...job,

          applications:
            count || 0,

          pilot_id:
            pilotId,

          assignment
        }
      }
    )
  )

    setJobs(jobsWithApplications)

    const { count: completed } = await supabase
      .from("jobs")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id)
      .eq("status", "completed")

    setStats({
      pilots: jobsWithApplications.length,
      completed: completed || 0,
      active: jobsWithApplications.length
    })
  }

  useEffect(() => {
    loadJobs()
  }, [])

  const cancelJob = async (jobId) => {
    if (
      cancellingJobId ||
      !jobId
    ) {
      return
    }

    const confirmed = window.confirm(
      "Vuoi annullare questo lavoro? Il lavoro resterà nello storico e il pilota verrà avvisato."
    )

    if (!confirmed) {
      return
    }

    setCancellingJobId(jobId)

    try {
      const {
        data,
        error
      } = await supabase.rpc(
        "cancel_job",
        {
          p_job_id:
            jobId
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
            "NON_SEI_IL_PROPRIETARIO_DEL_LAVORO"
          )
        ) {
          throw new Error(
            "Non sei autorizzato ad annullare questo lavoro."
          )
        }

        if (
          errorText.includes(
            "LAVORO_GIA_COMPLETATO"
          )
        ) {
          throw new Error(
            "Un lavoro già completato non può essere annullato."
          )
        }

        if (
          errorText.includes(
            "LAVORO_IN_ATTESA_DI_DOPPIA_CONFERMA"
          )
        ) {
          throw new Error(
            "Il completamento è già stato confermato da una delle parti. Il lavoro non può più essere annullato."
          )
        }

        if (
          errorText.includes(
            "LAVORO_NON_ANNULLABILE"
          )
        ) {
          throw new Error(
            "Questo lavoro non può essere annullato."
          )
        }

        if (
          errorText.includes(
            "DATI_COMPLETAMENTO_INCOERENTI"
          )
        ) {
          throw new Error(
            "I dati del completamento non sono coerenti. Contatta l’assistenza."
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

      toast.success(
        data?.already_processed
          ? "Il lavoro risultava già annullato."
          : "Lavoro annullato e pilota notificato ✅"
      )

      /*
       * Il caricamento rimuove dalla schermata
       * il lavoro diventato cancelled e aggiorna
       * i contatori con lo stato reale del database.
       */
      await loadJobs()
    } catch (error) {
      console.error(
        "[cancel-job] RPC failed:",
        error
      )

      toast.error(
        error?.message ||
        "Impossibile annullare il lavoro."
      )

      await loadJobs()
    } finally {
      setCancellingJobId(null)
    }
  }

  const completeJob = async (jobId) => {
    if (
      completingJobId ||
      !jobId
    ) {
      return
    }

    const confirmed = window.confirm(
      "Confermi che il lavoro è stato completato?"
    )

    if (!confirmed) {
      return
    }

    setCompletingJobId(jobId)

    try {
      const {
        data,
        error
      } = await supabase.rpc(
        "confirm_job_completion",
        {
          p_job_id:
            jobId
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
        toast.success(
          data?.already_processed
            ? "Il lavoro risultava già completato."
            : "Lavoro completato e confermato da entrambe le parti ✅"
        )
      } else if (
        data?.waiting_for === "pilot"
      ) {
        toast.success(
          data?.already_processed
            ? "La tua conferma era già registrata. Manca ancora quella del pilota."
            : "Conferma registrata. Ora manca la conferma del pilota."
        )
      } else {
        toast.success(
          "Conferma registrata correttamente."
        )
      }

      /*
       * Ricarica sempre lo stato reale:
       * il lavoro scompare solamente quando
       * entrambe le parti hanno confermato.
       */
      await loadJobs()
    } catch (error) {
      console.error(
        "[client-confirm-completion] RPC failed:",
        error
      )

      toast.error(
        error?.message ||
        "Impossibile confermare il completamento."
      )

      await loadJobs()
    } finally {
      setCompletingJobId(null)
    }
  }

  const confirmAppointment =
  async (
    job,
    assignment
  ) => {
    if (
      confirmingAppointmentJobId ||
      !job?.id
    ) {
      return
    }

    if (
      !hasAppointmentDetails(
        assignment
      )
    ) {
      toast.error(
        "Prima devono essere presenti posizione, punto di ritrovo e orario."
      )

      return
    }

    try {
      setConfirmingAppointmentJobId(
        job.id
      )

      const {
        data,
        error
      } = await supabase.rpc(
        "confirm_job_appointment",
        {
          p_job_id:
            job.id
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
            "L'assegnazione del lavoro non è stata trovata."
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
            "I dati dell'appuntamento non sono ancora completi."
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
          "La tua conferma era già registrata. Manca ancora quella del pilota."
        )
      } else {
        toast.success(
          "Appuntamento confermato. Ora manca la conferma del pilota."
        )
      }


      /*
       * Aggiorna i dati del modal.
       */
      const pilotId =
        job.pilot_id ||
        job.assigned_pilot

      if (pilotId) {
        const {
          data:
            refreshedAssignment,
          error:
            refreshError
        } = await supabase
          .from(
            "job_assignments"
          )
          .select("*")
          .eq(
            "job_id",
            job.id
          )
          .eq(
            "pilot_id",
            pilotId
          )
          .maybeSingle()

        if (
          !refreshError &&
          refreshedAssignment
        ) {
          setSentJobDetails(
            refreshedAssignment
          )

          setSelectedJob(
            (current) =>
              current?.id ===
              job.id
                ? {
                    ...current,
                    assignment:
                      refreshedAssignment
                  }
                : current
          )
        }
      }

      await loadJobs()
    } catch (error) {
      console.error(
        "[appointment-client] Conferma fallita:",
        error
      )

      toast.error(
        error?.message ||
          "Impossibile confermare l'appuntamento."
      )
    } finally {
      setConfirmingAppointmentJobId(
        null
      )
    }
  }

  const openPilotDetails = async (pilotId) => {
    if (!pilotId) return

    const { data, error } = await supabase.rpc(
  "get_client_visible_pilots",
  {
    p_pilot_ids: [pilotId]
  }
)

const pilotProfile =
  Array.isArray(data) && data.length > 0
    ? data[0]
    : null

    if (error) {
  console.error(
    "[in-progress] Caricamento profilo pilota fallito:",
    error
  )

  toast.error(
    "Impossibile caricare il profilo del pilota."
  )

  return
}

    if (!pilotProfile) {
  toast.error("Profilo pilota non trovato")
  return
}

setSelectedPilot(
      pilotProfile
    )

    setShowPilotModal(
      true
    )
  }

  const loadAppointmentChangeRequest =
  async (jobId) => {
    if (!jobId) {
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
          "job_id",
          jobId
        )
        .eq(
          "status",
          "pending"
        )
        .order(
          "created_at",
          {
            ascending: false
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
        "[appointment-change-client] Caricamento richiesta fallito:",
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
  }

  const openJobDetailsModal =
  async (job) => {
    setSelectedJob(job)
    setSentJobDetails(null)
    setAppointmentChangeRequest(
      null
    )

    const {
      data: { user },
      error: userError
    } = await supabase.auth.getUser()

    if (userError || !user) {
      toast.error(
        "Sessione non valida. Effettua nuovamente l'accesso."
      )

      return
    }

    const accountEmail =
      String(
        user.email || ""
      )
        .trim()
        .toLowerCase()

    const pilotId =
      job.pilot_id ||
      job.assigned_pilot ||
      null

    if (!pilotId) {
      toast.error(
        "Pilota assegnato non disponibile."
      )

      return
    }

    const {
      data,
      error
    } = await supabase
      .from("job_assignments")
      .select("*")
      .eq(
        "job_id",
        job.id
      )
      .eq(
        "pilot_id",
        pilotId
      )
      .maybeSingle()

    if (error) {
      console.error(
        "[in-progress] Caricamento dati operativi fallito:",
        error
      )

      toast.error(
        "Impossibile caricare i dati operativi del lavoro."
      )

      return
    }

    const assignment =
      data || null

    setSentJobDetails(
      assignment
    )

    setDetailExactLocation(
      assignment?.exact_location ||
        assignment?.precise_location ||
        ""
    )

    setDetailMeetingPoint(
      assignment?.meeting_point ||
        ""
    )

    setDetailArrivalTime(
      toDateTimeLocalValue(
        assignment?.arrival_time ||
          ""
      )
    )

    setDetailPhone(
      assignment?.phone ||
        ""
    )

    setDetailEmail(
      accountEmail
    )

    setDetailNotes(
      assignment?.notes ||
        ""
    )

    const detailsComplete =
      Boolean(
        assignment &&
        hasAppointmentDetails(
          assignment
        ) &&
        String(
          assignment.phone || ""
        ).trim() &&
        accountEmail
      )

    setEditingJobDetails(
      !detailsComplete
    )

    await loadAppointmentChangeRequest(
      job.id
    )

    setShowDetailsModal(true)
  }

  const saveJobDetails =
  async () => {
    if (
      savingJobDetails ||
      !selectedJob?.id
    ) {
      return
    }

    const pilotId =
      selectedJob.pilot_id ||
      selectedJob.assigned_pilot ||
      null

    if (!pilotId) {
      toast.error(
        "Pilota assegnato non disponibile."
      )

      return
    }

    const cleanExactLocation =
      detailExactLocation.trim()

    const cleanMeetingPoint =
      detailMeetingPoint.trim()

    const cleanArrivalTime =
      detailArrivalTime.trim()

    const cleanPhone =
      detailPhone.trim()

    const cleanNotes =
      detailNotes.trim()

    if (!cleanExactLocation) {
      toast.error(
        "Inserisci la posizione precisa."
      )
      return
    }

    if (!cleanMeetingPoint) {
      toast.error(
        "Inserisci il punto di ritrovo."
      )
      return
    }

    if (!cleanArrivalTime) {
      toast.error(
        "Inserisci data e ora dell'appuntamento."
      )
      return
    }

    if (cleanPhone.length < 5) {
      toast.error(
        "Inserisci un numero di telefono valido."
      )
      return
    }

    if (cleanNotes.length > 3000) {
      toast.error(
        "Le note possono contenere massimo 3000 caratteri."
      )
      return
    }

    try {
      setSavingJobDetails(true)

      const {
        data: { user },
        error: userError
      } = await supabase.auth.getUser()

      if (userError || !user) {
        throw new Error(
          "Sessione non valida. Effettua nuovamente l'accesso."
        )
      }

      const accountEmail =
        String(
          user.email || ""
        )
          .trim()
          .toLowerCase()

      if (!accountEmail) {
        throw new Error(
          "Email dell'account non disponibile."
        )
      }

      const { error } =
        await supabase.rpc(
          "save_job_assignment_details",
          {
            p_job_id:
              selectedJob.id,

            p_pilot_id:
              pilotId,

            p_exact_location:
              cleanExactLocation,

            p_meeting_point:
              cleanMeetingPoint,

            p_phone:
              cleanPhone,

            /*
             * Il database viene hardenizzato per
             * usare comunque l'email di auth.users.
             */
            p_email:
              accountEmail,

            p_arrival_time:
              cleanArrivalTime,

            p_priority:
              sentJobDetails?.priority ||
              "normal",

            p_notes:
              cleanNotes,

            p_has_authorization:
              Boolean(
                sentJobDetails?.has_authorization
              ),

            p_has_parking:
              Boolean(
                sentJobDetails?.has_parking
              ),

            p_has_power:
              Boolean(
                sentJobDetails?.has_power
              ),

            p_urban_flight:
              Boolean(
                sentJobDetails?.urban_flight
              ),

            p_people_present:
              Boolean(
                sentJobDetails?.people_present
              )
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
            "EMAIL_ACCOUNT_NON_DISPONIBILE"
          )
        ) {
          throw new Error(
            "Email dell'account non disponibile."
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
            "ASSEGNAZIONE_NON_AUTORIZZATA"
          ) ||
          errorText.includes(
            "NON_SEI_IL_PROPRIETARIO_DEL_LAVORO"
          )
        ) {
          throw new Error(
            "Non sei autorizzato a modificare i dati di questo lavoro."
          )
        }

        if (
          errorText.includes(
            "DETTAGLI_NON_MODIFICABILI"
          )
        ) {
          throw new Error(
            "I dati di questo lavoro non possono più essere modificati."
          )
        }

        throw error
      }

      const {
        data: refreshedAssignment,
        error: refreshError
      } = await supabase
        .from("job_assignments")
        .select("*")
        .eq(
          "job_id",
          selectedJob.id
        )
        .eq(
          "pilot_id",
          pilotId
        )
        .maybeSingle()

      if (refreshError) {
        throw refreshError
      }

      setSentJobDetails(
        refreshedAssignment || null
      )

      setDetailEmail(
        accountEmail
      )

      setEditingJobDetails(false)

      toast.success(
        "Dati salvati e inviati al pilota ✅"
      )

      await loadAppointmentChangeRequest(
        selectedJob.id
      )

      await loadJobs()

    } catch (error) {
      console.error(
        "[in-progress] Salvataggio dati lavoro fallito:",
        error
      )

      toast.error(
        error?.message ||
          "Impossibile salvare i dati del lavoro."
      )
    } finally {
      setSavingJobDetails(false)
    }
  }

  const openAppointmentChangeModal =
  () => {
    if (
      !selectedJob?.id ||
      !sentJobDetails
    ) {
      toast.error(
        "Dati appuntamento non disponibili."
      )

      return
    }

    if (
      !hasAppointmentDetails(
        sentJobDetails
      )
    ) {
      toast.error(
        "L'appuntamento deve essere completo prima di richiederne la modifica."
      )

      return
    }

    setProposedExactLocation(
      String(
        sentJobDetails
          .exact_location ||
          ""
      )
    )

    setProposedMeetingPoint(
      String(
        sentJobDetails
          .meeting_point ||
          ""
      )
    )

    setProposedArrivalTime(
      toDateTimeLocalValue(
        sentJobDetails
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
      appointmentChangeSending ||
      !selectedJob?.id
    ) {
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
      cleanNote.length > 1000
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
            selectedJob.id,

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
          : "Richiesta di modifica inviata al pilota ✅"
      )

      setShowAppointmentChangeModal(
        false
      )

      await loadAppointmentChangeRequest(
        selectedJob.id
      )

    } catch (error) {
      console.error(
        "[appointment-change-client] Invio fallito:",
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

        setShowDetailsModal(
          false
        )

        await loadJobs()

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

        /*
         * Chiudiamo il modal e ricarichiamo
         * completamente i dati perché sono
         * cambiati job_date + assegnazione.
         */
        setAppointmentChangeRequest(
          null
        )

        setShowDetailsModal(
          false
        )

        await loadJobs()
      } else {
        toast.success(
          "Proposta rifiutata. L'appuntamento originale non è stato modificato."
        )

        await loadAppointmentChangeRequest(
          selectedJob.id
        )
      }

    } catch (error) {
      console.error(
        "[appointment-change-client] Risposta fallita:",
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
        "[appointment-change-client] Annullamento fallito:",
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

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <main className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

          {/* HEADER + STATISTICHE */}
          <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-300">
                Area cliente
              </p>

              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Lavori in corso
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                Gestisci i lavori assegnati, i dati operativi e le conferme con il pilota.
              </p>
            </div>

            <div className="grid w-full grid-cols-3 gap-2 sm:gap-3 lg:w-auto lg:min-w-[500px]">
              <div className="rounded-2xl border border-yellow-400/10 bg-yellow-400/[0.045] px-3 py-3.5 sm:px-4">
                <p className="truncate text-[10px] font-bold uppercase tracking-[0.12em] text-yellow-300/70 sm:text-xs">
                  Piloti contattati
                </p>
                <p className="mt-1.5 text-2xl font-black text-yellow-300 sm:text-3xl">
                  {stats.pilots}
                </p>
              </div>

              <div className="rounded-2xl border border-green-400/10 bg-green-400/[0.045] px-3 py-3.5 sm:px-4">
                <p className="truncate text-[10px] font-bold uppercase tracking-[0.12em] text-green-300/70 sm:text-xs">
                  Completati
                </p>
                <p className="mt-1.5 text-2xl font-black text-green-300 sm:text-3xl">
                  {stats.completed}
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.045] px-3 py-3.5 sm:px-4">
                <p className="truncate text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-300/70 sm:text-xs">
                  Attivi
                </p>
                <p className="mt-1.5 text-2xl font-black text-cyan-300 sm:text-3xl">
                  {stats.active}
                </p>
              </div>
            </div>
          </div>

          {jobs.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-[#140a3a] px-6 py-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl">
                🚁
              </div>

              <h2 className="mt-4 text-xl font-bold sm:text-2xl">
                Nessun lavoro in corso
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                Quando assegnerai un lavoro a un pilota, comparirà qui con tutte le informazioni operative.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {jobs.map((job) => (
                <article
                  key={job.id}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-[#140a3a] shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
                >
                  {job.image1 && (
                    <div className="p-3 pb-0">
                      <img
                        src={job.image1}
                        alt={job.title || "Lavoro"}
                        className="h-36 w-full rounded-2xl object-cover sm:h-40"
                      />
                    </div>
                  )}

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-yellow-200">
                        In corso
                      </span>

                      <div className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-white/[0.07] bg-white/[0.035] px-2.5 py-1.5 text-xs font-semibold text-gray-400">
                        <Users size={14} />
                        {job.applications}
                      </div>
                    </div>

                    <div className="mt-4 min-w-0">
                      <h3 className="truncate text-xl font-black text-white sm:text-2xl">
                        {job.title}
                      </h3>

                      <p className="mt-1.5 line-clamp-2 min-h-[40px] text-sm leading-5 text-gray-400">
                        {job.description}
                      </p>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2.5">
                      <div className="min-w-0 rounded-2xl border border-white/[0.07] bg-black/20 px-3.5 py-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">
                          📍 Posizione
                        </p>
                        <p className="mt-1.5 truncate text-sm font-bold text-white sm:text-base">
                          {job.location}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/[0.07] bg-black/20 px-3.5 py-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">
                          📅 Data
                        </p>
                        <p className="mt-1.5 text-sm font-bold text-white sm:text-base">
                          {job.job_date}
                        </p>
                      </div>
                    </div>

                    {job.assignment && (
                      <div
                        className={`mt-3 rounded-2xl border px-4 py-3 text-center text-xs font-bold sm:text-sm ${
                          job.assignment
                            .appointment_confirmed_at
                            ? "border-green-400/20 bg-green-400/[0.08] text-green-300"
                            : job.assignment
                                  .appointment_client_confirmed_at
                              ? "border-amber-400/20 bg-amber-400/[0.08] text-amber-200"
                              : job.assignment
                                    .appointment_pilot_confirmed_at
                                ? "border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-200"
                                : hasAppointmentDetails(
                                      job.assignment
                                  )
                                  ? "border-purple-400/20 bg-purple-400/[0.08] text-purple-200"
                                  : "border-white/10 bg-white/[0.035] text-gray-400"
                        }`}
                      >
                        {job.assignment
                          .appointment_confirmed_at
                          ? "✅ Appuntamento confermato"
                          : job.assignment
                                .appointment_client_confirmed_at
                            ? "⏳ Appuntamento • In attesa del pilota"
                            : job.assignment
                                  .appointment_pilot_confirmed_at
                              ? "📅 Il pilota ha già confermato"
                              : hasAppointmentDetails(
                                    job.assignment
                                )
                                ? "📅 Appuntamento da confermare"
                                : "📅 Dettagli appuntamento incompleti"}
                      </div>
                    )}

                    <div className="mt-4 grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => openPilotDetails(job.pilot_id)}
className="rounded-xl border border-yellow-400/30 bg-yellow-400 px-4 py-3 font-bold text-black transition hover:bg-yellow-300"
                      >
                        Dettagli pilota
                      </button>

                      <button
                        type="button"
                        onClick={() => openJobDetailsModal(job)}
className="rounded-xl border border-yellow-400/30 bg-yellow-400 px-4 py-3 font-bold text-black transition hover:bg-yellow-300"
                      >
                        Vedi dati
                      </button>

                      {job.client_completed_at &&
                      !job.pilot_completed_at ? (
                        <div className="flex min-h-[42px] items-center justify-center rounded-xl border border-amber-300/25 bg-amber-400/[0.08] px-3 py-2 text-center text-xs font-bold leading-4 text-amber-200 sm:text-sm">
                          Conferma inviata • In attesa del pilota
                        </div>
                      ) : (
                        <button
                          type="button"
                          disabled={
                            completingJobId === job.id
                          }
                          onClick={() =>
                            completeJob(job.id)
                          }
                          className="rounded-xl bg-green-500 px-3 py-2.5 text-sm font-black text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {completingJobId === job.id
                            ? "Conferma in corso..."
                            : job.pilot_completed_at
                              ? "Conferma e completa lavoro"
                              : "Conferma completamento"}
                        </button>
                      )}

                      <button
                        type="button"
                        disabled={
                          cancellingJobId === job.id ||
                          completingJobId === job.id ||
                          Boolean(
                            job.client_completed_at ||
                            job.pilot_completed_at
                          )
                        }
                        onClick={() =>
                          cancelJob(job.id)
                        }
className="rounded-xl border border-red-500/30 bg-red-500 px-4 py-3 font-bold text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {cancellingJobId === job.id
                          ? "Annullamento..."
                          : job.client_completed_at ||
                              job.pilot_completed_at
                            ? "Annullamento non disponibile"
                            : "Annulla"}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      {showAppointmentChangeModal &&
  selectedJob &&
  sentJobDetails && (

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
            Il pilota dovrà accettare la nuova proposta.
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
          L&apos;appuntamento attuale non verrà modificato finché il pilota non accetterà la proposta.
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

      {showPilotModal && selectedPilot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-h-[90vh] w-full max-w-[95vw] overflow-y-auto rounded-3xl border border-white/10 bg-[#140a3a] p-5 text-center sm:max-w-xl sm:p-8">
            <button
              onClick={() => setShowPilotModal(false)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ✕
            </button>

            <img
              src={
                selectedPilot.avatar_url ||
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
              }
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              alt="Pilota"
            />

            <h2 className="text-2xl font-bold">
              {selectedPilot.name} {selectedPilot.surname}
            </h2>

            <p className="text-green-400 mb-4">Pilota verificato</p>

            <div className="space-y-2 text-gray-300 text-sm mb-6">

  <p>
    📍{" "}
    {selectedPilot.city ||
      "Non impostata"}
  </p>

  <p>
    🚁{" "}
    {selectedPilot.drone ||
      "Non specificato"}
  </p>

  <p>
    🎯 Esperienza:{" "}
    {selectedPilot.experience ||
      "Non impostata"}
  </p>

  <p>
    📜 Certificazioni:{" "}
    {selectedPilot.certifications ||
      "Nessuna"}
  </p>


  {selectedPilot
      .insurance_verified ===
    true && (

    <div className="flex justify-center pt-2">

      <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1.5 text-xs font-bold text-green-300">

        <ShieldCheck
          size={14}
        />

        Assicurazione verificata

      </span>

    </div>
  )}

</div>

            <div className="border-t border-white/10 pt-4">
              <p className="text-xs text-gray-400 mb-2">BIOGRAFIA</p>

              <p className="text-gray-300">
                {selectedPilot.bio || "Nessuna biografia inserita"}
              </p>
            </div>
          </div>
        </div>
      )}

      {showDetailsModal && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">
          <div className="max-h-[90vh] w-full max-w-[95vw] overflow-y-auto rounded-3xl border border-white/10 bg-[#140a3a] p-5 text-white sm:max-w-4xl sm:p-8">
            <h2 className="mb-2 text-2xl font-bold sm:text-4xl">
              {editingJobDetails
                ? "Dati operativi del lavoro"
                : "Dati inviati al pilota"}
            </h2>

            <p className="mb-8 text-sm text-gray-400">
              {editingJobDetails
                ? "Inserisci le informazioni che serviranno al pilota per l'appuntamento."
                : "Dati operativi per il lavoro:"}{" "}
              {selectedJob.title}
            </p>

            {editingJobDetails ? (
              <div className="rounded-2xl border border-white/10 bg-black/10 p-5 sm:p-6">
                <div className="grid gap-5 sm:grid-cols-2">

                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-semibold text-gray-300">
                      Posizione precisa
                    </span>
                    <input
                      value={detailExactLocation}
                      onChange={(event) =>
                        setDetailExactLocation(
                          event.target.value
                        )
                      }
                      placeholder="Es. Via Roma 10, Roma"
                      className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none focus:border-green-400/40"
                    />
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-semibold text-gray-300">
                      Punto di ritrovo
                    </span>
                    <input
                      value={detailMeetingPoint}
                      onChange={(event) =>
                        setDetailMeetingPoint(
                          event.target.value
                        )
                      }
                      placeholder="Es. Cancello principale"
                      className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none focus:border-green-400/40"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-gray-300">
                      Data e ora appuntamento
                    </span>
                    <input
                      type="datetime-local"
                      value={detailArrivalTime}
                      onChange={(event) =>
                        setDetailArrivalTime(
                          event.target.value
                        )
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none [color-scheme:dark] focus:border-green-400/40"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-gray-300">
                      Telefono
                    </span>
                    <input
                      type="tel"
                      value={detailPhone}
                      onChange={(event) =>
                        setDetailPhone(
                          event.target.value
                        )
                      }
                      placeholder="Numero di telefono"
                      className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none focus:border-green-400/40"
                    />
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-semibold text-gray-300">
                      Email account
                    </span>
                    <input
                      type="email"
                      value={detailEmail}
                      readOnly
                      disabled
                      className="w-full cursor-not-allowed rounded-xl border border-white/10 bg-white/[0.04] p-4 text-gray-400 opacity-80"
                    />
                    <p className="mt-2 text-xs text-gray-500">
                      L&apos;email viene presa automaticamente dall&apos;account DroneGuard e non può essere modificata qui.
                    </p>
                  </label>

                  <label className="block sm:col-span-2">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-gray-300">
                        Note operative
                      </span>
                      <span className="text-xs text-gray-500">
                        {detailNotes.length}/3000
                      </span>
                    </div>
                    <textarea
                      value={detailNotes}
                      maxLength={3000}
                      onChange={(event) =>
                        setDetailNotes(
                          event.target.value
                        )
                      }
                      placeholder="Indicazioni utili per il pilota..."
                      className="h-28 w-full resize-none rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none placeholder:text-gray-600 focus:border-green-400/40"
                    />
                  </label>

                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {sentJobDetails && (
                    <button
                      type="button"
                      disabled={savingJobDetails}
                      onClick={() =>
                        setEditingJobDetails(false)
                      }
                      className="rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 font-semibold transition hover:bg-white/10 disabled:opacity-50"
                    >
                      Annulla modifiche
                    </button>
                  )}

                  <button
                    type="button"
                    disabled={savingJobDetails}
                    onClick={saveJobDetails}
                    className={`${
                      sentJobDetails
                        ? ""
                        : "sm:col-span-2"
                    } rounded-xl bg-green-500 px-5 py-3.5 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50`}
                  >
                    {savingJobDetails
                      ? "Salvataggio..."
                      : "Salva e invia al pilota"}
                  </button>
                </div>
              </div>
            ) : !sentJobDetails ? (
              <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-center">
                <p className="font-bold text-yellow-300">
                  Nessun dato è stato ancora inviato al pilota.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setEditingJobDetails(true)
                  }
                  className="mt-4 rounded-xl bg-green-500 px-5 py-3 font-bold text-black transition hover:bg-green-400"
                >
                  Inserisci dati
                </button>
              </div>
            ) : (
              <>
                <div className="overflow-x-auto rounded-2xl border border-white/10">
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <tbody>
                      <tr className="border-b border-white/10">
                        <th className="w-1/3 bg-black/20 p-4 text-gray-400">
                          Posizione precisa
                        </th>
                        <td className="p-4">
                          {sentJobDetails.exact_location ||
                            sentJobDetails.precise_location ||
                            "Non indicata"}
                        </td>
                      </tr>

                      <tr className="border-b border-white/10">
                        <th className="w-1/3 bg-black/20 p-4 text-gray-400">
                          Punto di ritrovo
                        </th>
                        <td className="p-4">
                          {sentJobDetails.meeting_point || "Non indicato"}
                        </td>
                      </tr>

                      <tr className="border-b border-white/10">
                        <th className="w-1/3 bg-black/20 p-4 text-gray-400">
                          Orario appuntamento
                        </th>
                        <td className="p-4">
                          {sentJobDetails.arrival_time
                            ? formatAppointmentDateTime(
                                sentJobDetails.arrival_time
                              )
                            : "Non indicato"}
                        </td>
                      </tr>

                      <tr className="border-b border-white/10">
                        <th className="w-1/3 bg-black/20 p-4 text-gray-400">
                          Telefono
                        </th>
                        <td className="p-4">
                          {sentJobDetails.phone || "Non indicato"}
                        </td>
                      </tr>

                      <tr className="border-b border-white/10">
                        <th className="w-1/3 bg-black/20 p-4 text-gray-400">
                          Email
                        </th>
                        <td className="p-4">
                          {detailEmail ||
                            sentJobDetails.email ||
                            "Non indicata"}
                        </td>
                      </tr>

                      <tr className="border-b border-white/10">
                        <th className="w-1/3 bg-black/20 p-4 text-gray-400">
                          Note operative
                        </th>
                        <td className="p-4 whitespace-pre-wrap">
                          {sentJobDetails.notes || "Nessuna nota"}
                        </td>
                      </tr>

                      <tr>
                        <th className="w-1/3 bg-black/20 p-4 text-gray-400">
                          Stato
                        </th>
                        <td className="p-4">
                          {sentJobDetails.status === "details_sent"
                            ? "Dati inviati"
                            : sentJobDetails.status || "Non indicato"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setEditingJobDetails(true)
                  }
                  className="mt-4 w-full rounded-xl border border-green-400/20 bg-green-400/[0.08] px-5 py-3.5 font-bold text-green-300 transition hover:bg-green-400/[0.12]"
                >
                  Modifica dati
                </button>
              </>
            )}

            {sentJobDetails && (
  <div className="mt-6 rounded-2xl border border-purple-400/20 bg-purple-400/[0.06] p-5">

    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-300">
        Appuntamento
      </p>

      <h3 className="mt-2 text-xl font-bold text-white">
        Conferma con il pilota
      </h3>
    </div>


    <div className="mt-5 grid gap-3 sm:grid-cols-2">

      <div className="rounded-xl border border-white/10 bg-black/20 p-4">
        <p className="text-xs uppercase tracking-wider text-gray-500">
          Cliente
        </p>

        <p
          className={`mt-2 font-bold ${
            sentJobDetails
              .appointment_client_confirmed_at
              ? "text-green-300"
              : "text-amber-200"
          }`}
        >
          {sentJobDetails
            .appointment_client_confirmed_at
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
            sentJobDetails
              .appointment_pilot_confirmed_at
              ? "text-green-300"
              : "text-amber-200"
          }`}
        >
          {sentJobDetails
            .appointment_pilot_confirmed_at
            ? "✅ Confermato"
            : "⏳ Da confermare"}
        </p>
      </div>

    </div>


    {sentJobDetails
      .appointment_confirmed_at ? (
      <div className="mt-4 rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-center font-bold text-green-300">
        ✅ Appuntamento confermato da entrambe le parti
      </div>
    ) : sentJobDetails
        .appointment_client_confirmed_at ? (
      <div className="mt-4 rounded-xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-center font-semibold text-amber-200">
        La tua conferma è registrata • In attesa del pilota
      </div>
    ) : (
      <button
        type="button"
        disabled={
          confirmingAppointmentJobId ===
            selectedJob.id ||
          !hasAppointmentDetails(
            sentJobDetails
          )
        }
        onClick={() =>
          confirmAppointment(
            selectedJob,
            sentJobDetails
          )
        }
        className="mt-4 w-full rounded-xl bg-green-500 px-5 py-3.5 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {confirmingAppointmentJobId ===
        selectedJob.id
          ? "Conferma in corso..."
          : sentJobDetails
              .appointment_pilot_confirmed_at
            ? "Conferma appuntamento"
            : "Conferma appuntamento"}
      </button>
    )}


    {!hasAppointmentDetails(
      sentJobDetails
    ) && (
      <p className="mt-3 text-xs leading-5 text-gray-500">
        Prima della conferma devono essere presenti
        posizione precisa, punto di ritrovo e orario.
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
          Proposta inviata al pilota
        </h4>

        <p className="mt-2 text-sm text-gray-400">
          Il pilota deve ancora accettare o rifiutare la modifica.
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
              {formatAppointmentDateTime(
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
          Il pilota propone una modifica
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
              {formatAppointmentDateTime(
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
              {formatAppointmentDateTime(
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
              Nota del pilota
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
  hasAppointmentDetails(
    sentJobDetails
  ) && (

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
  jobId={selectedJob.id}
/>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 py-4 font-semibold transition hover:bg-white/10"
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