"use client"

import {
  useEffect,
  useRef,
  useState
} from "react"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/client"

import {
  MapPin,
  Calendar,
  Users,
  Briefcase,
  CheckCircle2,
  Plane,
  Ruler,
  Bookmark
} from "lucide-react"

function isAssignedExpired(job) {
  if (job.status !== "assigned" || !job.assigned_at) return false

  const assignedAt = new Date(job.assigned_at)
  const expiresAt = new Date(assignedAt)
  expiresAt.setDate(expiresAt.getDate() + 7)

  return new Date() > expiresAt
}

function getApplicationErrorMessage(error) {
  const errorText = [
    error?.message,
    error?.details,
    error?.hint,
    error?.code
  ]
    .filter(Boolean)
    .join(" ")
    .toUpperCase()

  if (
    errorText.includes(
      "CANDIDATURE_SOSPESE"
    )
  ) {
    return "Le candidature sono temporaneamente sospese."
  }

  if (
    errorText.includes(
      "PIATTAFORMA_IN_MANUTENZIONE"
    )
  ) {
    return "DroneGuard è temporaneamente in manutenzione."
  }

  if (
    errorText.includes(
      "CREDITI_INSUFFICIENTI"
    )
  ) {
    return "Non hai abbastanza crediti per candidarti."
  }

  if (
    errorText.includes(
      "CANDIDATURA_GIA_PRESENTE"
    ) ||
    errorText.includes(
      "APPLICATIONS_JOB_PILOT_UNIQUE"
    ) ||
    errorText.includes(
      "DUPLICATE KEY"
    )
  ) {
    return "Ti sei già candidato a questo lavoro."
  }

  if (
    errorText.includes(
      "NUMERO_MASSIMO_CANDIDATURE_RAGGIUNTO"
    )
  ) {
    return "Questo lavoro ha già raggiunto il numero massimo di candidature."
  }

  if (
    errorText.includes(
      "LAVORO_NON_PIU_DISPONIBILE"
    )
  ) {
    return "Questo lavoro non è più disponibile."
  }

  if (
    errorText.includes(
      "LAVORO_NON_TROVATO"
    )
  ) {
    return "Il lavoro non è più disponibile."
  }

  if (
    errorText.includes(
      "SOLO_I_PILOTI_POSSONO_CANDIDARSI"
    )
  ) {
    return "Solo gli account pilota possono inviare candidature."
  }

  if (
    errorText.includes(
      "NON_PUOI_CANDIDARTI_AL_TUO_LAVORO"
    )
  ) {
    return "Non puoi candidarti a un lavoro pubblicato dal tuo account."
  }

  if (
    errorText.includes(
      "ACCOUNT_SOSPESO"
    )
  ) {
    return "Il tuo account è sospeso."
  }

  if (
    errorText.includes(
      "PREZZO_OBBLIGATORIO"
    )
  ) {
    return "Inserisci il prezzo della tua offerta."
  }

  if (
    errorText.includes(
      "PREZZO_NON_VALIDO"
    )
  ) {
    return "Inserisci un prezzo valido e maggiore di zero."
  }

  if (
    errorText.includes(
      "PREZZO_TROPPO_ELEVATO"
    )
  ) {
    return "Il prezzo inserito è troppo elevato."
  }

  if (
    errorText.includes(
      "PREZZO_MASSIMO_DUE_DECIMALI"
    )
  ) {
    return "Il prezzo può contenere al massimo due decimali."
  }

  if (
    errorText.includes(
      "UTENTE_NON_AUTENTICATO"
    ) ||
    errorText.includes(
      "JWT"
    )
  ) {
    return "La sessione è scaduta. Effettua nuovamente l'accesso."
  }

  if (
    errorText.includes(
      "CONTROLLO_PIATTAFORMA_NON_DISPONIBILE"
    )
  ) {
    return "Non è possibile verificare lo stato della piattaforma. Riprova tra poco."
  }

  if (
    errorText.includes(
      "REQUEST_ID_IN_CONFLITTO"
    )
  ) {
    return "La richiesta non è più valida. Riprova."
  }

  return (
    error?.message ||
    "Impossibile inviare la candidatura."
  )
}

function calculateDistanceKm(
  latitude1,
  longitude1,
  latitude2,
  longitude2
) {
  const parseCoordinate = (
    value,
    min,
    max
  ) => {
    if (
      value === null ||
      value === undefined ||
      value === ""
    ) {
      return null
    }

    const number =
      Number(value)

    if (
      !Number.isFinite(number) ||
      number < min ||
      number > max
    ) {
      return null
    }

    return number
  }

  const lat1 =
    parseCoordinate(
      latitude1,
      -90,
      90
    )

  const lon1 =
    parseCoordinate(
      longitude1,
      -180,
      180
    )

  const lat2 =
    parseCoordinate(
      latitude2,
      -90,
      90
    )

  const lon2 =
    parseCoordinate(
      longitude2,
      -180,
      180
    )

  if (
    lat1 === null ||
    lon1 === null ||
    lat2 === null ||
    lon2 === null
  ) {
    return null
  }

  const toRadians = (degrees) =>
    degrees *
    (Math.PI / 180)

  const earthRadiusKm =
    6371.0088

  const deltaLatitude =
    toRadians(
      lat2 - lat1
    )

  const deltaLongitude =
    toRadians(
      lon2 - lon1
    )

  const firstLatitude =
    toRadians(lat1)

  const secondLatitude =
    toRadians(lat2)

  const haversine =
    Math.sin(
      deltaLatitude / 2
    ) ** 2 +
    Math.cos(firstLatitude) *
      Math.cos(secondLatitude) *
      Math.sin(
        deltaLongitude / 2
      ) ** 2

  const safeHaversine =
    Math.min(
      1,
      Math.max(
        0,
        haversine
      )
    )

  const centralAngle =
    2 *
    Math.atan2(
      Math.sqrt(
        safeHaversine
      ),
      Math.sqrt(
        1 - safeHaversine
      )
    )

  return (
    earthRadiusKm *
    centralAngle
  )
}

function normalizeJobDateKey(value) {
  if (!value) {
    return ""
  }

  const text =
    String(value).trim()

  /*
   * Supabase DATE normalmente arriva già:
   * YYYY-MM-DD
   */
  const directMatch =
    text.match(
      /^(\d{4}-\d{2}-\d{2})/
    )

  if (directMatch) {
    return directMatch[1]
  }

  /*
   * Fallback nel caso in futuro il valore
   * diventasse un timestamp.
   */
  const parsed =
    new Date(value)

  if (
    Number.isNaN(
      parsed.getTime()
    )
  ) {
    return ""
  }

  const parts =
    new Intl.DateTimeFormat(
      "en-US",
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
    ).formatToParts(
      parsed
    )

  const values = {}

  for (const part of parts) {
    if (
      part.type === "year" ||
      part.type === "month" ||
      part.type === "day"
    ) {
      values[part.type] =
        part.value
    }
  }

  if (
    !values.year ||
    !values.month ||
    !values.day
  ) {
    return ""
  }

  return (
    `${values.year}-${values.month}-${values.day}`
  )
}

export default function JobsBoardPage() {
  const [jobs, setJobs] = useState([])
  const [offers, setOffers] = useState({})

  const [
    submittingJobs,
    setSubmittingJobs
  ] = useState({})

  /*
   * Conserva lo stesso request ID quando una chiamata
   * deve essere ripetuta dopo un errore di rete.
   */
  const applicationRequestIds =
    useRef({})

  const [activeJobs, setActiveJobs] = useState(0)
  const [completedJobs, setCompletedJobs] = useState(0)
  const [myApplications, setMyApplications] = useState(0)

  const [cityFilter, setCityFilter] = useState("")
  const [workTypeFilter, setWorkTypeFilter] = useState("")

  const [
  savedOnly,
  setSavedOnly
] = useState(false)

const [
  savingJobId,
  setSavingJobId
] = useState(null)

  const [
  applicationsEnabled,
  setApplicationsEnabled
] = useState(true)

const [
  maintenanceActive,
  setMaintenanceActive
] = useState(false)

  const applicationsUnavailable =
    maintenanceActive ||
    !applicationsEnabled

  const filteredJobs =
  jobs.filter((job) => {
    const cityMatch =
      !cityFilter ||
      String(
        job.location || ""
      )
        .toLowerCase()
        .includes(
          cityFilter.toLowerCase()
        )

    const workTypeMatch =
      !workTypeFilter ||
      String(
        job.type ||
          job.work_type ||
          job.category ||
          job.service ||
          job.title ||
          ""
      )
        .toLowerCase()
        .includes(
          workTypeFilter.toLowerCase()
        )

    const savedMatch =
      !savedOnly ||
      job.isSaved === true

    return (
      cityMatch &&
      workTypeMatch &&
      savedMatch
    )
  })

  const loadJobs = async () => {
  const {
    data,
    error
  } = await supabase.rpc(
    "get_jobs_board_snapshot"
  )

  if (error) {
    console.error(
      "[jobs-board] Caricamento bacheca fallito:",
      error
    )

    toast.error(
      "Impossibile caricare la bacheca lavori."
    )

    return
  }

  const boardJobs =
  Array.isArray(data?.jobs)
    ? data.jobs
    : []

  /*
   * Le statistiche laterali devono appartenere
   * esclusivamente al pilota autenticato.
   * Non usiamo i contatori globali dello snapshot.
   */
  const {
    data: { user },
    error: authError
  } = await supabase.auth.getUser()

  if (authError) {
    console.error(
      "[jobs-board] Profilo autenticato non disponibile:",
      authError
    )
  }

  if (user?.id) {
    const [
      activeAssignmentsResult,
      completedAssignmentsResult,
      applicationsResult
    ] = await Promise.all([
      supabase
        .from("job_assignments")
        .select("id", {
          count: "exact",
          head: true
        })
        .eq("pilot_id", user.id)
        .in("status", ACTIVE_STATUSES),

      supabase
        .from("job_assignments")
        .select("id", {
          count: "exact",
          head: true
        })
        .eq("pilot_id", user.id)
        .eq("status", "completed"),

      supabase
        .from("applications")
        .select("id", {
          count: "exact",
          head: true
        })
        .eq("pilot_id", user.id)
    ])

    if (activeAssignmentsResult.error) {
      console.error(
        "[jobs-board] Conteggio lavori attivi non disponibile:",
        activeAssignmentsResult.error
      )
    }

    if (completedAssignmentsResult.error) {
      console.error(
        "[jobs-board] Conteggio lavori completati non disponibile:",
        completedAssignmentsResult.error
      )
    }

    if (applicationsResult.error) {
      console.error(
        "[jobs-board] Conteggio candidature non disponibile:",
        applicationsResult.error
      )
    }

    setActiveJobs(
      Number(
        activeAssignmentsResult.count || 0
      )
    )

    setCompletedJobs(
      Number(
        completedAssignmentsResult.count || 0
      )
    )

    setMyApplications(
      Number(
        applicationsResult.count || 0
      )
    )
  } else {
    setActiveJobs(0)
    setCompletedJobs(0)
    setMyApplications(0)
  }

    const jobIds =
  boardJobs
    .map((job) => job.id)
    .filter(Boolean)

let savedJobIds =
  new Set()

if (jobIds.length > 0) {
  const {
    data: savedRows,
    error: savedError
  } = await supabase
    .from("pilot_saved_jobs")
    .select("job_id")
    .in(
      "job_id",
      jobIds
    )

  if (savedError) {
    console.error(
      "[jobs-board] Lavori salvati non disponibili:",
      savedError
    )
  } else {
    savedJobIds =
      new Set(
        (savedRows || [])
          .map(
            (row) =>
              row.job_id
          )
          .filter(Boolean)
      )
  }
}

const pilotBaseLatitude =
  data?.pilotBase?.latitude

const pilotBaseLongitude =
  data?.pilotBase?.longitude


/*
 * Recuperiamo l'intervallo delle date
 * presenti nella Bacheca.
 */
const jobDateKeys =
  [
    ...new Set(
      boardJobs
        .map(
          (job) =>
            normalizeJobDateKey(
              job.job_date
            )
        )
        .filter(Boolean)
    )
  ].sort()


let unavailableDateSet =
  new Set()


/*
 * La RLS della tabella garantisce che
 * il pilota possa leggere esclusivamente
 * le proprie indisponibilità.
 *
 * Un eventuale errore del calendario
 * NON deve impedire di usare la Bacheca.
 */
if (jobDateKeys.length > 0) {
  const firstDate =
    jobDateKeys[0]

  const lastDate =
    jobDateKeys[
      jobDateKeys.length - 1
    ]

  const {
    data: unavailableRows,
    error: unavailableError
  } = await supabase
    .from(
      "pilot_unavailable_dates"
    )
    .select(
      "unavailable_date"
    )
    .gte(
      "unavailable_date",
      firstDate
    )
    .lte(
      "unavailable_date",
      lastDate
    )


  if (unavailableError) {
    console.error(
      "[jobs-board] Disponibilità pilota non disponibile:",
      unavailableError
    )
  } else {
    unavailableDateSet =
      new Set(
        (unavailableRows || [])
          .map(
            (row) =>
              row.unavailable_date
          )
          .filter(Boolean)
      )
  }
}


const jobsWithDistance =
  boardJobs.map((job) => {
    const distanceKm =
      calculateDistanceKm(
        pilotBaseLatitude,
        pilotBaseLongitude,
        job.latitude,
        job.longitude
      )

    const jobDateKey =
      normalizeJobDateKey(
        job.job_date
      )

    return {
      ...job,

      distanceKm:
        Number.isFinite(
          distanceKm
        )
          ? distanceKm
          : null,

      jobDateKey,

      isUnavailableOnJobDate:
        Boolean(
          jobDateKey &&
          unavailableDateSet.has(
            jobDateKey
          )
        ),
isSaved:
  savedJobIds.has(
    job.id
  )
    }
  })


const orderedJobs =
  [...jobsWithDistance].sort(
    (firstJob, secondJob) => {
      const firstDate =
        normalizeJobDateKey(
          firstJob.job_date
        ) || "9999-12-31"

      const secondDate =
        normalizeJobDateKey(
          secondJob.job_date
        ) || "9999-12-31"

      const dateComparison =
        firstDate.localeCompare(
          secondDate
        )

      if (dateComparison !== 0) {
        return dateComparison
      }

      const firstCreatedAt =
        new Date(
          firstJob.created_at || 0
        ).getTime()

      const secondCreatedAt =
        new Date(
          secondJob.created_at || 0
        ).getTime()

      return (
        secondCreatedAt -
        firstCreatedAt
      )
    }
  )

setJobs(
  orderedJobs
)

  setApplicationsEnabled(
    Boolean(
      data?.applicationsEnabled
    )
  )

  setMaintenanceActive(
    Boolean(
      data?.maintenanceActive
    )
  )
}

useEffect(() => {
    loadJobs()
  }, [])

const toggleSavedJob =
  async (job) => {
    if (
      !job?.id ||
      savingJobId
    ) {
      return
    }

    const nextSaved =
      !job.isSaved

    try {
      setSavingJobId(
        job.id
      )

      const {
        data,
        error
      } = await supabase.rpc(
        "set_pilot_saved_job",
        {
          p_job_id:
            job.id,

          p_saved:
            nextSaved
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
            "LAVORO_NON_SALVABILE"
          )
        ) {
          throw new Error(
            "Questo lavoro non è più disponibile per il salvataggio."
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
          "RISPOSTA_SALVATAGGIO_NON_VALIDA"
        )
      }

      setJobs(
        (current) =>
          current.map(
            (currentJob) =>
              currentJob.id ===
              job.id
                ? {
                    ...currentJob,
                    isSaved:
                      nextSaved
                  }
                : currentJob
          )
      )

      toast.success(
        nextSaved
          ? "Lavoro salvato 🔖"
          : "Lavoro rimosso dai salvati."
      )
    } catch (error) {
      console.error(
        "[saved-job] Modifica fallita:",
        error
      )

      toast.error(
        error?.message ||
          "Impossibile aggiornare i lavori salvati."
      )
    } finally {
      setSavingJobId(
        null
      )
    }
  }

      const applyToJob = async (jobId) => {
    if (submittingJobs[jobId]) {
      return
    }

     if (applicationsUnavailable) {
    toast.error(
      maintenanceActive
        ? "DroneGuard è temporaneamente in manutenzione."
        : "Le candidature sono temporaneamente sospese."
    )

    return
  }

    const rawPrice = String(
      offers[jobId] ?? ""
    )
      .trim()
      .replace(",", ".")

    if (!rawPrice) {
      toast.error(
        "Inserisci il tuo prezzo."
      )
      return
    }

    /*
     * Accetta soltanto numeri positivi
     * con massimo due cifre decimali.
     */
    if (
      !/^\d+(?:\.\d{1,2})?$/.test(
        rawPrice
      )
    ) {
      toast.error(
        "Inserisci un prezzo valido con massimo due decimali."
      )
      return
    }

    const normalizedPrice =
      Number(rawPrice)

    if (
      !Number.isFinite(
        normalizedPrice
      ) ||
      normalizedPrice <= 0
    ) {
      toast.error(
        "Il prezzo deve essere maggiore di zero."
      )
      return
    }

    if (
      normalizedPrice >
      10000000
    ) {
      toast.error(
        "Il prezzo inserito è troppo elevato."
      )
      return
    }

    const requestKey =
      String(jobId)

    const previousRequest =
      applicationRequestIds.current[
        requestKey
      ]

    let requestId

    /*
     * Conserva lo stesso UUID se l'utente
     * ripete la stessa candidatura dopo
     * un errore di rete.
     */
    if (
      previousRequest &&
      previousRequest.price ===
        normalizedPrice
    ) {
      requestId =
        previousRequest.requestId
    } else {
      requestId =
        crypto.randomUUID()

      applicationRequestIds.current[
        requestKey
      ] = {
        requestId,
        price: normalizedPrice
      }
    }

    setSubmittingJobs(
      (current) => ({
        ...current,
        [jobId]: true
      })
    )

    try {
      const {
        data,
        error
      } = await supabase.rpc(
        "apply_to_job_with_credit",
        {
          p_request_id:
            requestId,

          p_job_id:
            jobId,

          p_offer_price:
            normalizedPrice,

          p_message:
            ""
        }
      )

      if (error) {
        const normalizedError = [
          error.message,
          error.details,
          error.hint,
          error.code
        ]
          .filter(Boolean)
          .join(" ")
          .toUpperCase()

        /*
         * Un request ID in conflitto non
         * deve essere riutilizzato.
         */
        if (
          normalizedError.includes(
            "REQUEST_ID_IN_CONFLITTO"
          )
        ) {
          delete applicationRequestIds
            .current[requestKey]
        }

        throw error
      }

      /*
       * La RPC ha completato insieme:
       * candidatura, addebito, ledger
       * e notifiche.
       */
      delete applicationRequestIds
        .current[requestKey]

      setOffers(
        (current) => ({
          ...current,
          [jobId]: ""
        })
      )

      if (
        data?.already_processed
      ) {
        toast.success(
          "Candidatura già elaborata correttamente."
        )
      } else {
        toast.success(
          "Candidatura inviata 🚀"
        )
      }

      await loadJobs()
    } catch (error) {
      console.error(
        "[applications] RPC failed:",
        error
      )

      toast.error(
        getApplicationErrorMessage(
          error
        )
      )

      const normalizedError = [
        error?.message,
        error?.details,
        error?.hint,
        error?.code
      ]
        .filter(Boolean)
        .join(" ")
        .toUpperCase()

      /*
       * Per questi errori il tentativo
       * è concluso e al prossimo clic
       * verrà generato un nuovo UUID.
       */
      const terminalErrors = [
        "CANDIDATURA_GIA_PRESENTE",
        "NUMERO_MASSIMO_CANDIDATURE_RAGGIUNTO",
        "LAVORO_NON_PIU_DISPONIBILE",
        "LAVORO_NON_TROVATO",
        "CANDIDATURE_SOSPESE",
        "PIATTAFORMA_IN_MANUTENZIONE",
        "CREDITI_INSUFFICIENTI",
        "SOLO_I_PILOTI_POSSONO_CANDIDARSI",
        "NON_PUOI_CANDIDARTI_AL_TUO_LAVORO",
        "ACCOUNT_SOSPESO",
        "PREZZO_"
      ]

      if (
        terminalErrors.some(
          (terminalError) =>
            normalizedError.includes(
              terminalError
            )
        )
      ) {
        delete applicationRequestIds
          .current[requestKey]
      }

      /*
       * Aggiorna subito la bacheca quando
       * il lavoro o il numero di candidature
       * potrebbero essere cambiati.
       */
      if (
        normalizedError.includes(
          "LAVORO_NON_PIU_DISPONIBILE"
        ) ||
        normalizedError.includes(
          "LAVORO_NON_TROVATO"
        ) ||
        normalizedError.includes(
          "NUMERO_MASSIMO_CANDIDATURE_RAGGIUNTO"
        ) ||
        normalizedError.includes(
          "CANDIDATURA_GIA_PRESENTE"
        )
      ) {
        await loadJobs()
      }
    } finally {
      setSubmittingJobs(
        (current) => ({
          ...current,
          [jobId]: false
        })
      )
    }
  }

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]">
        <div className="mx-auto grid w-full max-w-[1560px] grid-cols-1 gap-5 px-4 py-5 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-6 lg:px-8 lg:py-7">

          <aside className="h-fit rounded-3xl border border-white/10 bg-[#140a3a] p-4 lg:sticky lg:top-7">

            <div className="mb-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-300">
                Il tuo profilo
              </p>

              <h2 className="mt-1 text-xl font-bold">
                Riepilogo pilota
              </h2>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Questi numeri riguardano soltanto il tuo account.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-green-300">
                    <Plane size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs text-gray-500">
                      Lavori attivi
                    </p>

                    <p className="text-xs font-semibold text-gray-300">
                      Assegnati a te
                    </p>
                  </div>
                </div>

                <span className="ml-3 text-2xl font-black text-green-400">
                  {activeJobs}
                </span>
              </div>


              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <CheckCircle2 size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs text-gray-500">
                      Completati
                    </p>

                    <p className="text-xs font-semibold text-gray-300">
                      Dal tuo profilo
                    </p>
                  </div>
                </div>

                <span className="ml-3 text-2xl font-black text-cyan-400">
                  {completedJobs}
                </span>
              </div>


              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                    <Users size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs text-gray-500">
                      Candidature
                    </p>

                    <p className="text-xs font-semibold text-gray-300">
                      Inviate da te
                    </p>
                  </div>
                </div>

                <span className="ml-3 text-2xl font-black text-amber-300">
                  {myApplications}
                </span>
              </div>

            </div>
          </aside>


          <main className="min-w-0">

            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300">
                  Opportunità
                </p>

                <h1 className="mt-1 text-3xl font-black sm:text-4xl lg:text-5xl">
                  Bacheca lavori
                </h1>

                <p className="mt-2 text-sm text-gray-400 sm:text-base">
                  I lavori più vicini alla scadenza sono mostrati per primi.
                </p>
              </div>

              <div className="w-fit rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-gray-300">
                {jobs.length} {jobs.length === 1 ? "lavoro disponibile" : "lavori disponibili"}
              </div>
            </div>


            {applicationsUnavailable ? (
              <div className="mb-4 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4">
                <h2 className="font-bold text-yellow-200">
                  {maintenanceActive
                    ? "DroneGuard è in manutenzione"
                    : "Candidature temporaneamente sospese"}
                </h2>

                <p className="mt-1 text-sm leading-6 text-yellow-100/80">
                  {maintenanceActive
                    ? "In questo momento non è possibile inviare nuove candidature. I lavori pubblicati restano visibili."
                    : "Il Team ha sospeso temporaneamente l’invio di nuove candidature. Riprova più tardi."}
                </p>
              </div>
            ) : null}


            <div className="mb-5 rounded-2xl border border-white/10 bg-[#140a3a] p-3.5 sm:p-4">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto_auto]">

                <input
                  type="text"
                  placeholder="Città"
                  value={cityFilter}
                  onChange={(e) =>
                    setCityFilter(
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#1d1250] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Tipo di lavoro"
                  value={workTypeFilter}
                  onChange={(e) =>
                    setWorkTypeFilter(
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#1d1250] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setSavedOnly(
                      (current) =>
                        !current
                    )
                  }
                  className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                    savedOnly
                      ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                      : "border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  <Bookmark
                    size={17}
                    fill={
                      savedOnly
                        ? "currentColor"
                        : "none"
                    }
                  />

                  {savedOnly
                    ? "Tutti"
                    : "Salvati"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setCityFilter("")
                    setWorkTypeFilter("")
                    setSavedOnly(false)
                  }}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Reset
                </button>

              </div>
            </div>


            {filteredJobs.length === 0 ? (
              <div className="rounded-3xl border border-white/10 bg-[#140a3a] px-6 py-14 text-center">
                <h2 className="text-2xl font-bold">
                  {jobs.length === 0
                    ? "Nessun lavoro disponibile"
                    : "Nessun risultato con questi filtri"}
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  {jobs.length === 0
                    ? "Al momento non ci sono nuovi lavori aperti."
                    : "Modifica o azzera i filtri per vedere gli altri lavori."}
                </p>
              </div>
            ) : (
              <div className="grid gap-4 xl:grid-cols-2">

                {filteredJobs.map((job) => (
                  <article
                    key={job.id}
                    className="flex min-w-0 flex-col rounded-3xl border border-white/10 bg-[#140a3a] p-4 sm:p-5"
                  >

                    <div className="flex items-start justify-between gap-3">

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-purple-300">
                          <Briefcase size={15} />
                          Lavoro disponibile
                        </div>

                        <h2 className="mt-2 line-clamp-2 text-xl font-bold text-white sm:text-2xl">
                          {job.title}
                        </h2>
                      </div>


                      <button
                        type="button"
                        aria-label={
                          job.isSaved
                            ? "Rimuovi dai salvati"
                            : "Salva lavoro"
                        }
                        title={
                          job.isSaved
                            ? "Rimuovi dai salvati"
                            : "Salva lavoro"
                        }
                        disabled={
                          savingJobId ===
                          job.id
                        }
                        onClick={() =>
                          toggleSavedJob(job)
                        }
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition disabled:cursor-not-allowed disabled:opacity-50 ${
                          job.isSaved
                            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                            : "border-white/10 bg-white/[0.04] text-gray-400 hover:bg-white/[0.08] hover:text-white"
                        }`}
                      >
                        <Bookmark
                          size={18}
                          fill={
                            job.isSaved
                              ? "currentColor"
                              : "none"
                          }
                        />
                      </button>

                    </div>


                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-400">
                      {job.description}
                    </p>


                    <div className="mt-4 flex flex-wrap gap-2">

                      <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/20 px-2.5 py-1.5 text-xs text-gray-300">
                        <MapPin size={14} className="text-rose-300" />
                        <span className="max-w-[220px] truncate">
                          {job.location}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/20 px-2.5 py-1.5 text-xs text-gray-300">
                        <Calendar size={14} className="text-purple-300" />
                        <span>
                          {job.job_date}
                        </span>
                      </div>

                      <div
                        className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs ${
                          Number.isFinite(
                            job.distanceKm
                          )
                            ? "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-200"
                            : "border-white/10 bg-black/20 text-gray-500"
                        }`}
                      >
                        <Ruler size={14} />

                        <span>
                          {Number.isFinite(
                            job.distanceKm
                          )
                            ? `${Math.round(
                                job.distanceKm
                              )} km`
                            : "Distanza n/d"}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/20 px-2.5 py-1.5 text-xs text-gray-300">
                        <Users size={14} className="text-amber-300" />
                        <span>
                          {job.applications}/10 candidati
                        </span>
                      </div>

                    </div>


                    {job.isUnavailableOnJobDate && (
                      <div className="mt-3 rounded-xl border border-red-400/20 bg-red-500/[0.07] px-3 py-2.5">
                        <p className="text-xs font-semibold text-red-200">
                          Non disponibile nel tuo calendario per questa data
                        </p>

                        <p className="mt-1 text-xs leading-5 text-red-100/50">
                          Puoi comunque candidarti se la tua disponibilità è cambiata.
                        </p>
                      </div>
                    )}


                    {(job.image1 ||
                      job.image2 ||
                      job.image3) && (
                      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">

                        {[
                          job.image1,
                          job.image2,
                          job.image3
                        ]
                          .filter(Boolean)
                          .map(
                            (
                              image,
                              index
                            ) => (
                              <img
                                key={`${job.id}-${index}`}
                                src={image}
                                alt={`Immagine lavoro ${index + 1}`}
                                className="h-16 w-24 shrink-0 rounded-xl border border-white/10 object-cover"
                              />
                            )
                          )}

                      </div>
                    )}


                    <div className="mt-auto pt-4">

                      <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto]">

                        <input
                          type="number"
                          min="0.01"
                          max="10000000"
                          step="0.01"
                          inputMode="decimal"
                          placeholder="La tua offerta €"
                          value={
                            offers[job.id] ||
                            ""
                          }
                          disabled={
                            applicationsUnavailable ||
                            Boolean(
                              submittingJobs[
                                job.id
                              ]
                            ) ||
                            job.applications >=
                              10
                          }
                          onChange={(e) =>
                            setOffers(
                              (current) => ({
                                ...current,
                                [job.id]:
                                  e.target.value
                              })
                            )
                          }
                          className="w-full rounded-xl border border-white/10 bg-[#1d1250] px-4 py-3 text-sm text-white outline-none disabled:cursor-not-allowed disabled:opacity-60"
                        />

                        <button
                          type="button"
                          disabled={
                            applicationsUnavailable ||
                            Boolean(
                              submittingJobs[
                                job.id
                              ]
                            ) ||
                            job.applications >=
                              10
                          }
                          onClick={() =>
                            applyToJob(
                              job.id
                            )
                          }
                          className="rounded-xl bg-green-500 px-5 py-3 text-sm font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {submittingJobs[
                            job.id
                          ]
                            ? "Invio..."
                            : maintenanceActive
                              ? "Manutenzione"
                              : !applicationsEnabled
                                ? "Sospese"
                                : job.applications >=
                                    10
                                  ? "Complete"
                                  : "Candidati • 5 crediti"}
                        </button>

                      </div>

                    </div>

                  </article>
                ))}

              </div>
            )}

          </main>

        </div>
      </div>
    </div>
  )
}
