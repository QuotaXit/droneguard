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
  Ruler
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
  const [pilotsCount, setPilotsCount] = useState(0)

  const [cityFilter, setCityFilter] = useState("")
  const [workTypeFilter, setWorkTypeFilter] = useState("")

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

  const filteredJobs = jobs.filter((job) => {
    const cityMatch =
      !cityFilter ||
      String(job.location || "")
        .toLowerCase()
        .includes(cityFilter.toLowerCase())

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
        .includes(workTypeFilter.toLowerCase())

    return cityMatch && workTypeMatch
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
        )
    }
  })


setJobs(
  jobsWithDistance
)

  setActiveJobs(
    Number(
      data?.stats?.activeJobs || 0
    )
  )

  setCompletedJobs(
    Number(
      data?.stats?.completedJobs || 0
    )
  )

  setPilotsCount(
    Number(
      data?.stats?.totalApplications || 0
    )
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
        <div className="mx-auto flex w-full max-w-[1700px] flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:gap-8 lg:px-8">
          <div className="w-full lg:w-[320px] lg:shrink-0">
            <div className="rounded-3xl border border-white/10 bg-[#140a3a] p-5 sm:p-7 lg:sticky lg:top-8">
              <h2 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl">Dashboard</h2>

              <div className="space-y-5">
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Plane size={20} />
                    <p className="text-gray-300">Lavori attuali</p>
                  </div>

                  <h3 className="text-3xl font-bold text-green-400 sm:text-4xl">
                    {activeJobs}
                  </h3>
                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 size={20} />
                    <p className="text-gray-300">Lavori completati</p>
                  </div>

                  <h3 className="text-3xl font-bold text-cyan-400 sm:text-4xl">
                    {completedJobs}
                  </h3>
                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Users size={20} />
                    <p className="text-gray-300">Candidature totali</p>
                  </div>

                  <h3 className="text-3xl font-bold text-yellow-400 sm:text-4xl">
                    {pilotsCount}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-6xl">Bacheca lavori</h1>

              <p className="text-base text-gray-400 sm:text-xl">
                Esplora i lavori pubblicati dai clienti DroneGuard.
              </p>
            </div>

            {applicationsUnavailable ? (
  <div className="mb-8 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5">
    <h2 className="font-bold text-yellow-200">
      {maintenanceActive
        ? "DroneGuard è in manutenzione"
        : "Candidature temporaneamente sospese"}
    </h2>

    <p className="mt-2 text-sm leading-6 text-yellow-100/80">
      {maintenanceActive
        ? "In questo momento non è possibile inviare nuove candidature. I lavori pubblicati restano visibili."
        : "Il Team ha sospeso temporaneamente l’invio di nuove candidature. Riprova più tardi."}
    </p>
  </div>
) : null}

            <div className="mb-8 rounded-3xl border border-white/10 bg-[#140a3a] p-5 sm:p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <input
                  type="text"
                  placeholder="Filtra per città"
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#1d1250] p-4 text-white placeholder:text-gray-400 outline-none"
                />

                <input
                  type="text"
                  placeholder="Filtra per tipo lavoro"
                  value={workTypeFilter}
                  onChange={(e) => setWorkTypeFilter(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#1d1250] p-4 text-white placeholder:text-gray-400 outline-none"
                />

                <button
                  onClick={() => {
                    setCityFilter("")
                    setWorkTypeFilter("")
                  }}
                  className="w-full rounded-xl border border-white/10 bg-white/5 p-4 font-semibold text-white hover:bg-white/10 transition"
                >
                  Reset filtri
                </button>
              </div>
            </div>

            <div className="space-y-6 lg:max-h-[1320px] lg:space-y-8 lg:overflow-y-auto lg:pr-3">
              {filteredJobs.length === 0 && (
                <div className="border border-white/10 bg-[#140a3a] rounded-3xl p-14 text-center">
                  <h2 className="text-3xl font-bold mb-4">
                    Nessun lavoro disponibile
                  </h2>

                  <p className="text-gray-400">
                    I clienti non hanno ancora pubblicato lavori.
                  </p>
                </div>
              )}

              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="rounded-3xl border border-white/10 bg-[#140a3a] p-5 sm:p-8"
                >
                  <div className="flex flex-col justify-between gap-6 lg:flex-row lg:gap-8">
                    <div className="max-w-2xl flex-1">
                      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                        <Briefcase size={24} />
                        <h2 className="text-2xl font-bold sm:text-3xl">{job.title}</h2>
                      </div>

                      <p className="mb-6 text-base leading-relaxed text-gray-300 sm:text-lg">
                        {job.description}
                      </p>

                      <div className="mb-6 flex flex-wrap gap-4 text-gray-400">

  <div className="flex items-center gap-2 text-base">
    <MapPin size={16} />

    <span>
      {job.location}
    </span>
  </div>


  <div className="flex items-center gap-2 text-base">
    <Calendar size={16} />

    <span>
      {job.job_date}
    </span>
  </div>


  {Number.isFinite(
    job.distanceKm
  ) ? (
    <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-1.5 text-sm font-semibold text-cyan-200">
      <Ruler size={15} />

      <span>
        {Math.round(
          job.distanceKm
        )} km dalla tua base
      </span>
    </div>
  ) : (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-gray-500">
      <Ruler size={15} />

      <span>
        Distanza non disponibile
      </span>
    </div>
  )}

</div>

{job.isUnavailableOnJobDate && (
  <div className="mb-6 rounded-2xl border border-red-400/20 bg-red-500/[0.08] px-4 py-3">

    <div className="flex items-start gap-3">

      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-300">
        <Calendar size={17} />
      </div>

      <div>
        <p className="text-sm font-bold text-red-200">
          Hai indicato che non sei disponibile in questa data
        </p>

        <p className="mt-1 text-xs leading-5 text-red-100/60">
          Il calendario è indicativo:
          puoi comunque inviare la candidatura
          se la tua disponibilità è cambiata.
        </p>
      </div>

    </div>

  </div>
)}

                      {(job.image1 || job.image2 || job.image3) && (
                        <div className="flex gap-4 mt-4 flex-wrap">
                          {job.image1 && (
                            <img
                              src={job.image1}
                              alt="Lavoro"
                              className="w-36 h-28 rounded-2xl object-cover border border-white/10"
                            />
                          )}

                          {job.image2 && (
                            <img
                              src={job.image2}
                              alt="Lavoro"
                              className="w-36 h-28 rounded-2xl object-cover border border-white/10"
                            />
                          )}

                          {job.image3 && (
                            <img
                              src={job.image3}
                              alt="Lavoro"
                              className="w-36 h-28 rounded-2xl object-cover border border-white/10"
                            />
                          )}
                        </div>
                      )}
                    </div>

                    <div className="w-full lg:w-[300px]">
                      <input
  type="number"
  min="0.01"
  max="10000000"
  step="0.01"
  inputMode="decimal"
  placeholder="La tua offerta €"
  value={offers[job.id] || ""}
  disabled={
  applicationsUnavailable ||
  Boolean(
    submittingJobs[job.id]
  ) ||
  job.applications >= 10
}
  onChange={(e) =>
    setOffers((current) => ({
      ...current,
      [job.id]:
        e.target.value
    }))
  }
  className="mb-4 w-full rounded-xl border border-white/10 bg-[#1d1250] p-4 text-lg disabled:cursor-not-allowed disabled:opacity-60"
/>

                      <button
  type="button"
  disabled={
  applicationsUnavailable ||
  Boolean(
    submittingJobs[job.id]
  ) ||
  job.applications >= 10
}
  onClick={() =>
    applyToJob(job.id)
  }
  className="w-full rounded-xl bg-green-500 py-4 text-lg font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
>
  {submittingJobs[job.id]
  ? "Invio candidatura..."
  : maintenanceActive
    ? "Piattaforma in manutenzione"
    : !applicationsEnabled
      ? "Candidature sospese"
      : job.applications >= 10
        ? "Candidature complete"
        : "Candidati • 5 crediti"}
</button>

                      <div className="mt-5 bg-white/5 rounded-xl p-5 border border-white/10">
                        <div className="flex items-center gap-2 mb-3">
                          <Users size={18} />
                          <p className="font-semibold text-lg">Candidature</p>
                        </div>

                        <p className="text-4xl font-bold">
                          {job.applications}/10
                        </p>

                        <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                          Al momento si sono candidati {job.applications} piloti.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {jobs.length > 6 && (
              <p className="mt-4 text-sm text-gray-500">
                La bacheca mostra circa 6 annunci visibili: scorri la lista per
                vedere gli altri.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}