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
  Plane
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

  setJobs(boardJobs)

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

                      <div className="flex flex-wrap gap-6 text-gray-400 mb-6">
                        <div className="flex items-center gap-2 text-base">
                          <MapPin size={16} />
                          {job.location}
                        </div>

                        <div className="flex items-center gap-2 text-base">
                          <Calendar size={16} />
                          {job.job_date}
                        </div>
                      </div>

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