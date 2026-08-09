"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/client"
import { Users } from "lucide-react"

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

  const loadJobs = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser()

    if (!user) return

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

setSelectedPilot(pilotProfile)
setShowPilotModal(true)

  const openJobDetailsModal = async (job) => {
    setSelectedJob(job)
    setSentJobDetails(null)

    const { data, error } = await supabase
      .from("job_assignments")
      .select("*")
      .eq("job_id", job.id)
      .eq("pilot_id", job.pilot_id)
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

    setSentJobDetails(data || null)
    setShowDetailsModal(true)
  }

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 lg:col-span-3 lg:block lg:space-y-6">
            <div className="bg-[#140a3a] p-6 rounded-2xl border border-white/10">
              <p className="text-gray-400">Piloti contattati</p>
              <h2 className="text-3xl font-bold text-yellow-400 sm:text-4xl">
                {stats.pilots}
              </h2>
            </div>

            <div className="bg-[#140a3a] p-6 rounded-2xl border border-white/10">
              <p className="text-gray-400">Lavori completati</p>
              <h2 className="text-3xl font-bold text-green-400 sm:text-4xl">
                {stats.completed}
              </h2>
            </div>

            <div className="bg-[#140a3a] p-6 rounded-2xl border border-white/10">
              <p className="text-gray-400">Attivi</p>
              <h2 className="text-3xl font-bold text-cyan-400 sm:text-4xl">
                {stats.active}
              </h2>
            </div>
          </div>

          <div className="lg:col-span-9">
            <h1 className="mb-8 text-3xl font-bold sm:text-4xl lg:text-5xl">Lavori in corso</h1>

            {jobs.length === 0 ? (
              <div className="rounded-2xl bg-[#140a3a] p-6 text-center sm:p-10">
                Nessun lavoro in corso
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-[#140a3a] rounded-2xl border border-white/10 overflow-hidden"
                  >
                    {job.image1 && (
                      <img
                        src={job.image1}
                        alt={job.title || "Lavoro"}
                        className="w-full h-48 object-cover"
                      />
                    )}

                    <div className="p-6 text-center">
                      <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:justify-between">
                        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                          IN CORSO
                        </span>

                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Users size={14} />
                          {job.applications}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>

                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="mb-5 space-y-3 text-center">
  <div>
    <p className="text-xs uppercase tracking-widest text-gray-500">
      📍 Posizione
    </p>
    <p className="text-lg font-bold text-white">
      {job.location}
    </p>
  </div>

  <div>
    <p className="text-xs uppercase tracking-widest text-gray-500">
      📅 Data
    </p>
    <p className="text-lg font-bold text-white">
      {job.job_date}
    </p>

{job.assignment && (
  <div
    className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
      job.assignment
        .appointment_confirmed_at
        ? "border-green-400/20 bg-green-400/10 text-green-300"
        : job.assignment
              .appointment_client_confirmed_at
          ? "border-amber-400/20 bg-amber-400/10 text-amber-200"
          : job.assignment
                .appointment_pilot_confirmed_at
            ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-200"
            : hasAppointmentDetails(
                  job.assignment
                )
              ? "border-purple-400/20 bg-purple-400/10 text-purple-200"
              : "border-white/10 bg-white/[0.04] text-gray-400"
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

  </div>
</div>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <button
                          onClick={() => openPilotDetails(job.pilot_id)}
                          className="bg-green-500 text-black py-2 rounded-lg font-semibold hover:bg-green-400 transition"
                        >
                          Dettagli pilota
                        </button>

                        <button
                          onClick={() => openJobDetailsModal(job)}
                          className="bg-green-500 text-black py-2 rounded-lg font-semibold hover:bg-green-400 transition"
                        >
                          Vedi dati
                        </button>

                        {job.client_completed_at &&
!job.pilot_completed_at ? (
  <div className="rounded-lg border border-amber-300/30 bg-amber-400/10 px-4 py-2 text-center text-sm font-bold text-amber-200">
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
    className="rounded-lg bg-red-500 py-2 font-semibold text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-60"
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
  className="rounded-lg bg-red-500 py-2 font-semibold text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-50"
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
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

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
              <p>📍 {selectedPilot.city || "Non impostata"}</p>
              <p>🚁 {selectedPilot.drone || "Non specificato"}</p>
              <p>🎯 Esperienza: {selectedPilot.experience || "Non impostata"}</p>
              <p>
                📜 Certificazioni:{" "}
                {selectedPilot.certifications || "Nessuna"}
              </p>
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
              Dati inviati al pilota
            </h2>

            <p className="mb-8 text-sm text-gray-400">
              Dati operativi per il lavoro: {selectedJob.title}
            </p>

            {!sentJobDetails ? (
              <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-center text-yellow-300 font-bold">
                Nessun dato è stato ancora inviato al pilota.
              </div>
            ) : (
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
    {sentJobDetails.arrival_time ||
      "Non indicato"}
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
                        {sentJobDetails.email || "Non indicata"}
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

  </div>
)}

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