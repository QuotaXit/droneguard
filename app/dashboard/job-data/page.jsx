"use client"

import { Suspense, useCallback, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Navbar from "@/components/Navbar"
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

    if (!user) {
      clearCurrentJob()
      return
    }


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
      setSelectedAssignment(assignment)
      setSelectedJob(assignment.jobs || null)
      setLoading(false)
      return
    }

     /*
     * Un lavoro può essere mostrato al pilota
     * soltanto quando esiste una vera assegnazione
     * collegata al suo account.
     */
    clearCurrentJob()
  }, [jobId])

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

  </div>
)}

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
