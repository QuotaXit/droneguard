"use client"

import {
  useCallback,
  useEffect,
  useState
} from "react"

import { toast } from "sonner"

function getStatusLabel(status) {
  const labels = {
  open: "Aperto",
  assigned: "Assegnato",
  completed: "Completato",
  cancelled: "Annullato"
}

  return labels[status] || status || "Aperto"
}

function getApplicationStatusLabel(status) {
  const labels = {
  pending: "In attesa",
  accepted: "Accettata",
  rejected: "Rifiutata",
  completed: "Completata",
  cancelled: "Annullata"
}

  return labels[status] || status || "In attesa"
}

function formatDate(value, includeTime = false) {
  if (!value) {
    return "Non disponibile"
  }

  return new Intl.DateTimeFormat("it-IT", {
    dateStyle: "short",
    ...(includeTime
      ? {
          timeStyle: "short"
        }
      : {}),
    timeZone: "Europe/Rome"
  }).format(new Date(value))
}

function formatPrice(value) {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return "Non indicato"
  }

  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR"
  }).format(Number(value))
}

function JobStatusBadge({ status }) {
  const classes = {
  open: "bg-green-400/10 text-green-400",
  assigned: "bg-yellow-400/10 text-yellow-300",
  completed: "bg-blue-400/10 text-blue-300",
  cancelled: "bg-red-400/10 text-red-300"
}

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        classes[status] ||
        "bg-white/5 text-gray-300"
      }`}
    >
      {getStatusLabel(status)}
    </span>
  )
}

function BooleanRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg bg-white/[0.03] px-3 py-2">
      <span className="text-sm text-gray-400">
        {label}
      </span>

      <span
        className={`text-sm font-semibold ${
          value
            ? "text-green-400"
            : "text-gray-500"
        }`}
      >
        {value ? "Sì" : "No"}
      </span>
    </div>
  )
}

export default function JobsManagementClient({
  canUpdate,
  canClose,
  canReopen
}) {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  const [selectedJob, setSelectedJob] =
    useState(null)

    const [actionMode, setActionMode] =
  useState(null)

const [actionReason, setActionReason] =
  useState("")

const [
  submittingAction,
  setSubmittingAction
] = useState(false)

const [editTitle, setEditTitle] =
  useState("")

const [
  editDescription,
  setEditDescription
] = useState("")

const [editLocation, setEditLocation] =
  useState("")

const [editJobDate, setEditJobDate] =
  useState("")

  const [searchInput, setSearchInput] =
    useState("")

  const [appliedSearch, setAppliedSearch] =
    useState("")

  const [statusFilter, setStatusFilter] =
    useState("all")

  const [page, setPage] = useState(1)

  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 20,
    total: 0,
    totalPages: 1
  })

  const loadJobs = useCallback(async () => {
    try {
      setLoading(true)

      const searchParams = new URLSearchParams({
        page: String(page),
        status: statusFilter
      })

      if (appliedSearch) {
        searchParams.set(
          "search",
          appliedSearch
        )
      }

      const response = await fetch(
        `/api/admin/jobs?${searchParams.toString()}`,
        {
          method: "GET",
          cache: "no-store"
        }
      )

      const data = await response.json()

      if (!response.ok) {
        toast.error(
          data.error ||
            "Impossibile caricare i lavori."
        )
        return
      }

      setJobs(data.jobs || [])

      setPagination(
        data.pagination || {
          page: 1,
          pageSize: 20,
          total: 0,
          totalPages: 1
        }
      )
    } catch (error) {
      console.error(
        "Errore caricamento lavori:",
        error
      )

      toast.error(
        "Errore imprevisto durante il caricamento."
      )
    } finally {
      setLoading(false)
    }
  }, [
    page,
    statusFilter,
    appliedSearch
  ])

  useEffect(() => {
    loadJobs()
  }, [loadJobs])

  const applySearch = (event) => {
    event.preventDefault()

    setPage(1)
    setAppliedSearch(searchInput.trim())
  }

  const resetFilters = () => {
  setSearchInput("")
  setAppliedSearch("")
  setStatusFilter("all")
  setPage(1)
}

const openJobAction = (mode) => {
  if (!selectedJob) {
    return
  }

  const normalizedMode =
    String(mode || "")
      .trim()
      .toLowerCase()

  const normalizedStatus =
    String(
      selectedJob.status || ""
    )
      .trim()
      .toLowerCase()

  if (
    ![
      "update",
      "cancel",
      "reopen"
    ].includes(normalizedMode)
  ) {
    toast.error(
      "Operazione non valida."
    )
    return
  }

  if (
    normalizedMode === "update" &&
    ![
      "open",
      "assigned"
    ].includes(normalizedStatus)
  ) {
    toast.error(
      "Questo lavoro non può essere modificato."
    )
    return
  }

  if (
    normalizedMode === "cancel" &&
    ![
      "open",
      "assigned"
    ].includes(normalizedStatus)
  ) {
    toast.error(
      "Questo lavoro non può essere chiuso."
    )
    return
  }

  if (
    normalizedMode === "reopen" &&
    normalizedStatus !== "cancelled"
  ) {
    toast.error(
      "Soltanto un lavoro annullato può essere riaperto."
    )
    return
  }

  setActionMode(normalizedMode)
  setActionReason("")

  setEditTitle(
    String(
      selectedJob.title || ""
    )
  )

  setEditDescription(
    String(
      selectedJob.description || ""
    )
  )

  setEditLocation(
    String(
      selectedJob.location || ""
    )
  )

  setEditJobDate(
    selectedJob.jobDate
      ? String(
          selectedJob.jobDate
        ).slice(0, 10)
      : ""
  )
}

const closeJobAction = () => {
  if (submittingAction) {
    return
  }

  setActionMode(null)
  setActionReason("")
  setEditTitle("")
  setEditDescription("")
  setEditLocation("")
  setEditJobDate("")
}

const submitJobAction = async (
  event
) => {
  event.preventDefault()

  if (
    !selectedJob ||
    !actionMode ||
    submittingAction
  ) {
    return
  }

  const normalizedReason =
    actionReason.trim()

  if (
    normalizedReason.length < 10 ||
    normalizedReason.length > 500
  ) {
    toast.error(
      "La motivazione deve contenere da 10 a 500 caratteri."
    )
    return
  }

  const payload = {
    action: actionMode,
    jobId: selectedJob.id,
    reason: normalizedReason
  }

  if (actionMode === "update") {
    const normalizedTitle =
      editTitle
        .trim()
        .replace(/\s+/g, " ")

    const normalizedDescription =
      editDescription.trim()

    const normalizedLocation =
      editLocation
        .trim()
        .replace(/\s+/g, " ")

    const normalizedJobDate =
      editJobDate.trim()

    if (
      normalizedTitle.length < 3 ||
      normalizedTitle.length > 150
    ) {
      toast.error(
        "Il titolo deve contenere da 3 a 150 caratteri."
      )
      return
    }

    if (
      normalizedDescription.length <
        5 ||
      normalizedDescription.length >
        5000
    ) {
      toast.error(
        "La descrizione deve contenere da 5 a 5000 caratteri."
      )
      return
    }

    if (
      normalizedLocation.length < 2 ||
      normalizedLocation.length > 500
    ) {
      toast.error(
        "La località deve contenere da 2 a 500 caratteri."
      )
      return
    }

    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(
        normalizedJobDate
      )
    ) {
      toast.error(
        "Inserisci una data valida."
      )
      return
    }

    payload.title =
      normalizedTitle

    payload.description =
      normalizedDescription

    payload.location =
      normalizedLocation

    payload.jobDate =
      normalizedJobDate
  }

  try {
    setSubmittingAction(true)

    const response = await fetch(
      "/api/admin/jobs",
      {
        method: "PATCH",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify(
          payload
        )
      }
    )

    let data = null

    try {
      data = await response.json()
    } catch {
      data = null
    }

    if (!response.ok) {
      toast.error(
        data?.error ||
          "Impossibile completare l’operazione."
      )
      return
    }

    toast.success(
      data?.message ||
        "Operazione completata correttamente."
    )

    setActionMode(null)
    setActionReason("")
    setEditTitle("")
    setEditDescription("")
    setEditLocation("")
    setEditJobDate("")
    setSelectedJob(null)

    await loadJobs()
  } catch (error) {
    console.error(
      "Errore gestione lavoro:",
      error
    )

    toast.error(
      "Errore imprevisto durante l’operazione."
    )
  } finally {
    setSubmittingAction(false)
  }
}

return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-white/10 bg-[#0B1028] p-5 sm:p-6">
        <form
          onSubmit={applySearch}
          className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_220px_auto]"
        >
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Cerca lavoro
            </label>

            <input
              value={searchInput}
              onChange={(event) =>
                setSearchInput(event.target.value)
              }
              placeholder="Titolo, descrizione, luogo o cliente"
              maxLength={100}
              className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-green-400/50"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Stato
            </label>

            <select
              value={statusFilter}
              onChange={(event) => {
                setStatusFilter(event.target.value)
                setPage(1)
              }}
              className="w-full rounded-xl border border-white/10 bg-[#111735] p-3 outline-none"
            >
              <option value="all">
                Tutti gli stati
              </option>

              <option value="open">
                Aperti
              </option>

              <option value="assigned">
                Assegnati
              </option>

             <option value="completed">
  Completati
</option>

<option value="cancelled">
  Annullati
</option>
            </select>
          </div>

          <div className="flex items-end gap-2">
            <button
              type="submit"
              className="rounded-xl bg-green-500 px-5 py-3 font-semibold text-black hover:bg-green-400"
            >
              Cerca
            </button>

            <button
              type="button"
              onClick={resetFilters}
              className="rounded-xl border border-white/10 px-4 py-3 text-sm hover:bg-white/10"
            >
              Azzera
            </button>
          </div>
        </form>
      </section>

      <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1028]">
        <div className="flex flex-col justify-between gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold">
              Lavori presenti
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              {pagination.total} lavori trovati
            </p>
          </div>

          <button
            type="button"
            onClick={loadJobs}
            disabled={loading}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/10 disabled:opacity-50"
          >
            Aggiorna
          </button>
        </div>

        {loading ? (
          <div className="p-8 text-center text-sm text-gray-400">
            Caricamento lavori...
          </div>
        ) : jobs.length === 0 ? (
          <div className="p-8 text-center text-sm text-gray-400">
            Nessun lavoro trovato.
          </div>
        ) : (
          <>
            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full min-w-[1100px]">
                <thead className="border-b border-white/10 bg-white/[0.02]">
                  <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-5 py-4">
                      Lavoro
                    </th>

                    <th className="px-5 py-4">
                      Cliente
                    </th>

                    <th className="px-5 py-4">
                      Pilota
                    </th>

                    <th className="px-5 py-4">
                      Candidature
                    </th>

                    <th className="px-5 py-4">
                      Data lavoro
                    </th>

                    <th className="px-5 py-4">
                      Stato
                    </th>

                    <th className="px-5 py-4 text-right">
                      Azioni
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/10">
                  {jobs.map((job) => (
                    <tr
                      key={job.id}
                      className="hover:bg-white/[0.03]"
                    >
                      <td className="px-5 py-4">
                        <p className="font-semibold">
                          {job.title}
                        </p>

                        <p className="mt-1 max-w-xs truncate text-sm text-gray-400">
                          {job.location ||
                            "Luogo non disponibile"}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <p className="text-sm font-medium">
                          {job.client
                            ? `${job.client.name} ${job.client.surname}`.trim() ||
                              job.client.email
                            : job.clientName ||
                              "Cliente non disponibile"}
                        </p>

                        {job.client?.email && (
                          <p className="mt-1 text-xs text-gray-500">
                            {job.client.email}
                          </p>
                        )}
                      </td>

                      <td className="px-5 py-4">
                        {job.pilot ? (
                          <>
                            <p className="text-sm font-medium">
                              {`${job.pilot.name} ${job.pilot.surname}`.trim() ||
                                job.pilot.email}
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                              {job.pilot.email}
                            </p>
                          </>
                        ) : (
                          <span className="text-sm text-gray-500">
                            Non assegnato
                          </span>
                        )}
                      </td>

                      <td className="px-5 py-4">
                        <span className="rounded-full bg-purple-400/10 px-3 py-1 text-xs font-semibold text-purple-300">
                          {job.applicationsCount}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-300">
                        {formatDate(job.jobDate)}
                      </td>

                      <td className="px-5 py-4">
                        <JobStatusBadge
                          status={job.status}
                        />
                      </td>

                      <td className="px-5 py-4 text-right">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedJob(job)
                          }
                          className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/10"
                        >
                          Dettagli
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="divide-y divide-white/10 lg:hidden">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-semibold">
                        {job.title}
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        {job.location ||
                          "Luogo non disponibile"}
                      </p>
                    </div>

                    <JobStatusBadge
                      status={job.status}
                    />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500">
                        Candidature
                      </p>

                      <p className="mt-1 font-semibold">
                        {job.applicationsCount}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">
                        Data
                      </p>

                      <p className="mt-1">
                        {formatDate(job.jobDate)}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">
                        Cliente
                      </p>

                      <p className="mt-1">
                        {job.client
                          ? `${job.client.name} ${job.client.surname}`.trim() ||
                            job.client.email
                          : "Non disponibile"}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">
                        Pilota
                      </p>

                      <p className="mt-1">
                        {job.pilot
                          ? `${job.pilot.name} ${job.pilot.surname}`.trim() ||
                            job.pilot.email
                          : "Non assegnato"}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedJob(job)
                    }
                    className="mt-4 w-full rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/10"
                  >
                    Apri dettagli
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 p-5 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-400">
            Pagina {pagination.page} di{" "}
            {pagination.totalPages}
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() =>
                setPage((current) =>
                  Math.max(1, current - 1)
                )
              }
              disabled={
                loading ||
                pagination.page <= 1
              }
              className="rounded-lg border border-white/10 px-4 py-2 text-sm disabled:opacity-40"
            >
              Precedente
            </button>

            <button
              type="button"
              onClick={() =>
                setPage((current) =>
                  Math.min(
                    pagination.totalPages,
                    current + 1
                  )
                )
              }
              disabled={
                loading ||
                pagination.page >=
                  pagination.totalPages
              }
              className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-black disabled:opacity-40"
            >
              Successiva
            </button>
          </div>
        </div>
      </section>

      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
          <div className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0B1028] p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <JobStatusBadge
                    status={selectedJob.status}
                  />

                  <span className="text-xs text-gray-500">
                    ID: {selectedJob.id}
                  </span>
                </div>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  {selectedJob.title}
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Pubblicato il{" "}
                  {formatDate(
                    selectedJob.createdAt,
                    true
                  )}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedJob(null)
                }
                className="rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-white/10"
              >
                Chiudi
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Luogo
                </p>

                <p className="mt-2 text-sm">
                  {selectedJob.location ||
                    "Non indicato"}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Data lavoro
                </p>

                <p className="mt-2 text-sm">
                  {formatDate(
                    selectedJob.jobDate
                  )}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Prezzo
                </p>

                <p className="mt-2 text-sm font-semibold text-yellow-300">
                  {formatPrice(
                    selectedJob.price
                  )}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Descrizione
              </p>

              <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-gray-300">
                {selectedJob.description ||
                  "Nessuna descrizione disponibile."}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <section className="rounded-xl border border-white/10 p-4">
                <h3 className="font-semibold text-green-400">
                  Cliente
                </h3>

                <p className="mt-3">
                  {selectedJob.client
                    ? `${selectedJob.client.name} ${selectedJob.client.surname}`.trim() ||
                      selectedJob.client.email
                    : selectedJob.clientName ||
                      "Non disponibile"}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  {selectedJob.client?.email ||
                    "Email non disponibile"}
                </p>

                <p className="mt-2 text-xs text-gray-500">
                  ID:{" "}
                  {selectedJob.clientId ||
                    "Non disponibile"}
                </p>
              </section>

              <section className="rounded-xl border border-white/10 p-4">
                <h3 className="font-semibold text-yellow-300">
                  Pilota assegnato
                </h3>

                {selectedJob.pilot ? (
                  <>
                    <p className="mt-3">
                      {`${selectedJob.pilot.name} ${selectedJob.pilot.surname}`.trim() ||
                        selectedJob.pilot.email}
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      {selectedJob.pilot.email}
                    </p>

                    <p className="mt-2 text-xs text-gray-500">
                      ID: {selectedJob.pilotId}
                    </p>
                  </>
                ) : (
                  <p className="mt-3 text-sm text-gray-500">
                    Nessun pilota assegnato.
                  </p>
                )}
              </section>
            </div>

            {selectedJob.assignment && (
              <section className="mt-6 rounded-xl border border-blue-400/20 bg-blue-400/5 p-5">
                <h3 className="text-lg font-bold text-blue-300">
                  Dettagli operativi
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <BooleanRow
                    label="Autorizzazione"
                    value={
                      selectedJob.assignment
                        .hasAuthorization
                    }
                  />

                  <BooleanRow
                    label="Parcheggio"
                    value={
                      selectedJob.assignment
                        .hasParking
                    }
                  />

                  <BooleanRow
                    label="Corrente disponibile"
                    value={
                      selectedJob.assignment
                        .hasPower
                    }
                  />

                  <BooleanRow
                    label="Volo urbano"
                    value={
                      selectedJob.assignment
                        .urbanFlight
                    }
                  />

                  <BooleanRow
                    label="Persone presenti"
                    value={
                      selectedJob.assignment
                        .peoplePresent
                    }
                  />
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase text-gray-500">
                      Punto incontro
                    </p>

                    <p className="mt-1 text-sm">
                      {selectedJob.assignment
                        .meetingPoint ||
                        "Non indicato"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase text-gray-500">
                      Orario arrivo
                    </p>

                    <p className="mt-1 text-sm">
                      {selectedJob.assignment
                        .arrivalTime ||
                        "Non indicato"}
                    </p>
                  </div>
                </div>
              </section>
            )}

            <section className="mt-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold">
                  Candidature
                </h3>

                <span className="rounded-full bg-purple-400/10 px-3 py-1 text-xs font-semibold text-purple-300">
                  {selectedJob.applicationsCount}
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {selectedJob.applications.length === 0 ? (
                  <div className="rounded-xl border border-white/10 p-4 text-sm text-gray-500">
                    Nessuna candidatura ricevuta.
                  </div>
                ) : (
                  selectedJob.applications.map(
                    (application) => (
                      <div
                        key={application.id}
                        className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                      >
                        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                          <div>
                            <p className="font-semibold">
                              {application.pilot
                                ? `${application.pilot.name} ${application.pilot.surname}`.trim() ||
                                  application.pilotEmail
                                : application.pilotEmail}
                            </p>

                            <p className="mt-1 text-sm text-gray-400">
                              {application.pilotEmail}
                            </p>

                            <p className="mt-2 text-xs text-gray-500">
                              Inviata il{" "}
                              {formatDate(
                                application.createdAt,
                                true
                              )}
                            </p>
                          </div>

                          <div className="text-left sm:text-right">
                            <p className="font-semibold text-yellow-300">
                              {formatPrice(
                                application.offerPrice
                              )}
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                              {getApplicationStatusLabel(
                                application.status
                              )}
                            </p>
                          </div>
                        </div>

                        {application.message && (
                          <p className="mt-3 whitespace-pre-wrap rounded-lg bg-black/20 p-3 text-sm leading-6 text-gray-300">
                            {application.message}
                          </p>
                        )}
                      </div>
                    )
                  )
                )}
              </div>
            </section>

            <section className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
  <p className="font-semibold text-yellow-300">
    Comandi amministrativi
  </p>

  <p className="mt-2 text-sm text-gray-400">
    Le operazioni vengono registrate nel registro
    amministrativo e richiedono una motivazione.
  </p>

  <div className="mt-4 flex flex-wrap gap-2">
    {canUpdate &&
      ["open", "assigned"].includes(
        String(
          selectedJob.status || ""
        )
          .trim()
          .toLowerCase()
      ) && (
        <button
          type="button"
          onClick={() =>
            openJobAction("update")
          }
          disabled={submittingAction}
          className="rounded-lg border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300 transition hover:bg-blue-400/20 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Modifica lavoro
        </button>
      )}

    {canClose &&
      ["open", "assigned"].includes(
        String(
          selectedJob.status || ""
        )
          .trim()
          .toLowerCase()
      ) && (
        <button
          type="button"
          onClick={() =>
            openJobAction("cancel")
          }
          disabled={submittingAction}
          className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-400/20 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Chiudi lavoro
        </button>
      )}

    {canReopen &&
      String(
        selectedJob.status || ""
      )
        .trim()
        .toLowerCase() ===
        "cancelled" && (
        <button
          type="button"
          onClick={() =>
            openJobAction("reopen")
          }
          disabled={submittingAction}
          className="rounded-lg border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300 transition hover:bg-green-400/20 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Riapri lavoro
        </button>
      )}

    {String(
      selectedJob.status || ""
    )
      .trim()
      .toLowerCase() ===
      "completed" && (
      <span className="rounded-lg border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
        Il lavoro completato non può essere modificato
      </span>
    )}
  </div>
</section>
          </div>
        </div>
      )}

      {selectedJob && actionMode && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 p-4">
          <form
            onSubmit={submitJobAction}
            className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0B1028] p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.18em] ${
                    actionMode === "update"
                      ? "text-blue-300"
                      : actionMode === "cancel"
                        ? "text-red-300"
                        : "text-green-300"
                  }`}
                >
                  {actionMode === "update"
                    ? "Modifica amministrativa"
                    : actionMode === "cancel"
                      ? "Chiusura amministrativa"
                      : "Riapertura amministrativa"}
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {selectedJob.title}
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  ID: {selectedJob.id}
                </p>
              </div>

              <button
                type="button"
                onClick={closeJobAction}
                disabled={submittingAction}
                className="rounded-lg border border-white/10 px-3 py-2 text-sm transition hover:bg-white/10 disabled:opacity-50"
              >
                Chiudi
              </button>
            </div>

            {actionMode === "update" && (
              <div className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Titolo
                  </label>

                  <input
                    type="text"
                    value={editTitle}
                    onChange={(event) =>
                      setEditTitle(
                        event.target.value
                      )
                    }
                    minLength={3}
                    maxLength={150}
                    disabled={submittingAction}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none transition focus:border-blue-400/50 disabled:opacity-60"
                  />

                  <p className="mt-1 text-right text-xs text-gray-500">
                    {editTitle.length}/150
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Descrizione
                  </label>

                  <textarea
                    value={editDescription}
                    onChange={(event) =>
                      setEditDescription(
                        event.target.value
                      )
                    }
                    minLength={5}
                    maxLength={5000}
                    rows={7}
                    disabled={submittingAction}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 outline-none transition focus:border-blue-400/50 disabled:opacity-60"
                  />

                  <p className="mt-1 text-right text-xs text-gray-500">
                    {editDescription.length}/5000
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Località
                  </label>

                  <input
                    type="text"
                    value={editLocation}
                    onChange={(event) =>
                      setEditLocation(
                        event.target.value
                      )
                    }
                    minLength={2}
                    maxLength={500}
                    disabled={submittingAction}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none transition focus:border-blue-400/50 disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Data del lavoro
                  </label>

                  <input
                    type="date"
                    value={editJobDate}
                    onChange={(event) =>
                      setEditJobDate(
                        event.target.value
                      )
                    }
                    disabled={submittingAction}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#111735] p-3 outline-none transition focus:border-blue-400/50 disabled:opacity-60"
                  />
                </div>
              </div>
            )}

            {actionMode === "cancel" && (
              <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                <p className="font-semibold text-red-300">
                  Conferma chiusura del lavoro
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Il lavoro diventerà annullato. Le candidature,
                  le assegnazioni e le conversazioni operative
                  verranno chiuse secondo lo stato attuale del
                  lavoro.
                </p>
              </div>
            )}

            {actionMode === "reopen" && (
              <div className="mt-6 rounded-xl border border-green-400/20 bg-green-400/10 p-4">
                <p className="font-semibold text-green-300">
                  Conferma riapertura del lavoro
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Il lavoro tornerà aperto. L’eventuale pilota
                  assegnato verrà scollegato e le candidature
                  annullate potranno tornare in attesa.
                </p>
              </div>
            )}

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Motivazione amministrativa
              </label>

              <textarea
                value={actionReason}
                onChange={(event) =>
                  setActionReason(
                    event.target.value
                  )
                }
                minLength={10}
                maxLength={500}
                rows={4}
                disabled={submittingAction}
                required
                placeholder="Inserisci una motivazione da 10 a 500 caratteri..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 outline-none transition focus:border-yellow-400/50 disabled:opacity-60"
              />

              <p className="mt-1 text-right text-xs text-gray-500">
                {actionReason.length}/500
              </p>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closeJobAction}
                disabled={submittingAction}
                className="rounded-xl border border-white/10 px-5 py-3 font-semibold transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Annulla
              </button>

              <button
                type="submit"
                disabled={submittingAction}
                className={`rounded-xl px-5 py-3 font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${
                  actionMode === "update"
                    ? "bg-blue-500 text-white hover:bg-blue-400"
                    : actionMode === "cancel"
                      ? "bg-red-500 text-white hover:bg-red-400"
                      : "bg-green-500 text-black hover:bg-green-400"
                }`}
              >
                {submittingAction
                  ? "Operazione in corso..."
                  : actionMode === "update"
                    ? "Salva modifiche"
                    : actionMode === "cancel"
                      ? "Conferma chiusura"
                      : "Conferma riapertura"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}