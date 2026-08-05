"use client"

import {
  useCallback,
  useEffect,
  useState
} from "react"

import { toast } from "sonner"

function formatDate(value) {
  if (!value) {
    return "Data non disponibile"
  }

  try {
    return new Intl.DateTimeFormat(
      "it-IT",
      {
        dateStyle: "short",
        timeStyle: "medium",
        timeZone: "Europe/Rome"
      }
    ).format(new Date(value))
  } catch {
    return String(value)
  }
}

function formatJson(value) {
  if (
    value === null ||
    value === undefined
  ) {
    return "Nessun dato"
  }

  try {
    return JSON.stringify(
      value,
      null,
      2
    )
  } catch {
    return String(value)
  }
}

function getActionLabel(action) {
  const labels = {
    "team.owner.bootstrap":
      "Creazione Owner iniziale",

    "team.member.create":
      "Creazione membro Team",

    "team.member.update":
      "Modifica membro Team",

    "team.member.deactivate":
      "Disattivazione membro Team",

    "team.member.remove":
      "Rimozione membro Team",

    "team.permissions.restrict":
      "Modifica permessi Team",

    "platform.settings.update":
      "Modifica impostazioni piattaforma",

    "user.suspend":
      "Sospensione utente",

    "user.reactivate":
      "Riattivazione utente",

    "users.update":
      "Modifica dati utente",

    "users.deactivate":
      "Disattivazione definitiva utente",

    "jobs.update":
      "Modifica lavoro",

    "jobs.cancel":
      "Annullamento lavoro",

    "jobs.reopen":
      "Riapertura lavoro",

    "credits.adjust":
      "Rettifica crediti",

    "certification.approve":
      "Approvazione certificazione",

    "certification.reject":
      "Rifiuto certificazione"
  }

  return (
    labels[action] ||
    action ||
    "Azione sconosciuta"
  )
}

function getTargetLabel(targetType) {
  const labels = {
    user: "Utente",
    job: "Lavoro",
    team_member: "Membro Team",
    certification: "Certificazione",
    credits: "Crediti",
    platform: "Piattaforma",
    settings: "Impostazioni",
    announcement: "Avviso",
    maintenance: "Manutenzione"
  }

  return (
    labels[targetType] ||
    targetType ||
    "Oggetto non disponibile"
  )
}

function ActionBadge({ action }) {
  return (
    <span className="inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-300">
      {getActionLabel(action)}
    </span>
  )
}

export default function AuditManagementClient() {
  const [entries, setEntries] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  const [
    selectedEntry,
    setSelectedEntry
  ] = useState(null)

  const [
    searchInput,
    setSearchInput
  ] = useState("")

  const [
    actionInput,
    setActionInput
  ] = useState("")

  const [
    targetTypeInput,
    setTargetTypeInput
  ] = useState("")

  const [
    dateFromInput,
    setDateFromInput
  ] = useState("")

  const [
    dateToInput,
    setDateToInput
  ] = useState("")

  const [
    appliedFilters,
    setAppliedFilters
  ] = useState({
    search: "",
    action: "",
    targetType: "",
    dateFrom: "",
    dateTo: ""
  })

  const [page, setPage] =
    useState(1)

  const [
    pagination,
    setPagination
  ] = useState({
    page: 1,
    pageSize: 50,
    total: 0,
    totalPages: 1
  })

  const loadEntries =
    useCallback(async () => {
      try {
        setLoading(true)

        const searchParams =
          new URLSearchParams({
            page: String(page)
          })

        if (
          appliedFilters.search
        ) {
          searchParams.set(
            "search",
            appliedFilters.search
          )
        }

        if (
          appliedFilters.action
        ) {
          searchParams.set(
            "action",
            appliedFilters.action
          )
        }

        if (
          appliedFilters.targetType
        ) {
          searchParams.set(
            "targetType",
            appliedFilters.targetType
          )
        }

        if (
          appliedFilters.dateFrom
        ) {
          searchParams.set(
            "dateFrom",
            appliedFilters.dateFrom
          )
        }

        if (
          appliedFilters.dateTo
        ) {
          searchParams.set(
            "dateTo",
            appliedFilters.dateTo
          )
        }

        const response =
          await fetch(
            `/api/admin/audit?${searchParams.toString()}`,
            {
              method: "GET",
              cache: "no-store"
            }
          )

        let data = null

        try {
          data =
            await response.json()
        } catch {
          data = null
        }

        if (!response.ok) {
          toast.error(
            data?.error ||
              "Impossibile caricare il registro delle attività."
          )

          return
        }

        setEntries(
          Array.isArray(
            data?.entries
          )
            ? data.entries
            : []
        )

        setPagination(
          data?.pagination || {
            page: 1,
            pageSize: 50,
            total: 0,
            totalPages: 1
          }
        )
      } catch (error) {
        console.error(
          "Errore caricamento registro attività:",
          error
        )

        toast.error(
          "Errore imprevisto durante il caricamento del registro."
        )
      } finally {
        setLoading(false)
      }
    }, [
      page,
      appliedFilters
    ])

  useEffect(() => {
    loadEntries()
  }, [loadEntries])

  const applyFilters = (
    event
  ) => {
    event.preventDefault()

    if (
      dateFromInput &&
      dateToInput &&
      dateFromInput >
        dateToInput
    ) {
      toast.error(
        "La data iniziale non può essere successiva alla data finale."
      )

      return
    }

    setPage(1)

    setAppliedFilters({
      search:
        searchInput.trim(),

      action:
        actionInput.trim(),

      targetType:
        targetTypeInput.trim(),

      dateFrom:
        dateFromInput,

      dateTo:
        dateToInput
    })
  }

  const resetFilters = () => {
    setSearchInput("")
    setActionInput("")
    setTargetTypeInput("")
    setDateFromInput("")
    setDateToInput("")

    setPage(1)

    setAppliedFilters({
      search: "",
      action: "",
      targetType: "",
      dateFrom: "",
      dateTo: ""
    })
  }

  const previousPage = () => {
    setPage(
      (currentPage) =>
        Math.max(
          1,
          currentPage - 1
        )
    )
  }

  const nextPage = () => {
    setPage(
      (currentPage) =>
        Math.min(
          pagination.totalPages,
          currentPage + 1
        )
    )
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-white/10 bg-[#0B1028] p-5 sm:p-6">
        <form
          onSubmit={applyFilters}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Ricerca
              </label>

              <input
                type="text"
                value={searchInput}
                onChange={(event) =>
                  setSearchInput(
                    event.target.value
                      .slice(0, 100)
                  )
                }
                maxLength={100}
                placeholder="Azione, oggetto, ID o motivazione"
                className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none transition focus:border-green-400/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Azione
              </label>

              <input
                type="text"
                value={actionInput}
                onChange={(event) =>
                  setActionInput(
                    event.target.value
                      .slice(0, 120)
                  )
                }
                maxLength={120}
                placeholder="Esempio: users.deactivate"
                className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none transition focus:border-green-400/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Tipo oggetto
              </label>

              <input
                type="text"
                value={
                  targetTypeInput
                }
                onChange={(event) =>
                  setTargetTypeInput(
                    event.target.value
                      .slice(0, 100)
                  )
                }
                maxLength={100}
                placeholder="Esempio: user"
                className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none transition focus:border-green-400/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Dal giorno
              </label>

              <input
                type="date"
                value={dateFromInput}
                onChange={(event) =>
                  setDateFromInput(
                    event.target.value
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-[#111735] p-3 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Al giorno
              </label>

              <input
                type="date"
                value={dateToInput}
                onChange={(event) =>
                  setDateToInput(
                    event.target.value
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-[#111735] p-3 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Applica filtri
            </button>

            <button
              type="button"
              onClick={resetFilters}
              disabled={loading}
              className="rounded-xl border border-white/10 px-5 py-3 font-semibold text-gray-300 transition hover:bg-white/10 disabled:opacity-50"
            >
              Azzera filtri
            </button>

            <button
              type="button"
              onClick={loadEntries}
              disabled={loading}
              className="rounded-xl border border-white/10 px-5 py-3 font-semibold text-gray-300 transition hover:bg-white/10 disabled:opacity-50"
            >
              Aggiorna
            </button>
          </div>
        </form>
      </section>

      <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1028]">
        <div className="flex flex-col justify-between gap-3 border-b border-white/10 p-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold">
              Operazioni registrate
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              {pagination.total} attività trovate
            </p>
          </div>

          <p className="text-sm text-gray-400">
            Pagina {pagination.page} di{" "}
            {pagination.totalPages}
          </p>
        </div>

        {loading ? (
          <div className="p-10 text-center text-sm text-gray-400">
            Caricamento registro...
          </div>
        ) : entries.length === 0 ? (
          <div className="p-10 text-center text-sm text-gray-400">
            Nessuna attività trovata con i filtri selezionati.
          </div>
        ) : (
          <>
            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full min-w-[1100px]">
                <thead className="border-b border-white/10 bg-white/[0.02]">
                  <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-5 py-4">
                      Data
                    </th>

                    <th className="px-5 py-4">
                      Operatore
                    </th>

                    <th className="px-5 py-4">
                      Azione
                    </th>

                    <th className="px-5 py-4">
                      Oggetto
                    </th>

                    <th className="px-5 py-4">
                      Motivazione
                    </th>

                    <th className="px-5 py-4 text-right">
                      Dettagli
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/10">
                  {entries.map(
                    (entry) => (
                      <tr
                        key={entry.id}
                        className="transition hover:bg-white/[0.03]"
                      >
                        <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-300">
                          {formatDate(
                            entry.createdAt
                          )}
                        </td>

                        <td className="px-5 py-4">
                          <p className="font-semibold">
                            {entry.actor
                              ?.displayName ||
                              "Sistema"}
                          </p>

                          <p className="mt-1 break-all text-xs text-gray-500">
                            {entry.actor
                              ?.email ||
                              entry.actor
                                ?.roleKey ||
                              "Operazione automatica"}
                          </p>
                        </td>

                        <td className="px-5 py-4">
                          <ActionBadge
                            action={
                              entry.action
                            }
                          />
                        </td>

                        <td className="px-5 py-4">
                          <p className="text-sm font-medium">
                            {getTargetLabel(
                              entry.targetType
                            )}
                          </p>

                          <p className="mt-1 max-w-[260px] truncate font-mono text-xs text-gray-500">
                            {entry.targetId ||
                              "Nessun ID"}
                          </p>
                        </td>

                        <td className="max-w-[300px] px-5 py-4 text-sm text-gray-400">
                          <p className="line-clamp-3">
                            {entry.reason ||
                              "Nessuna motivazione"}
                          </p>
                        </td>

                        <td className="px-5 py-4 text-right">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedEntry(
                                entry
                              )
                            }
                            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
                          >
                            Apri
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            <div className="divide-y divide-white/10 lg:hidden">
              {entries.map(
                (entry) => (
                  <div
                    key={entry.id}
                    className="p-5"
                  >
                    <div className="flex flex-col gap-3">
                      <ActionBadge
                        action={
                          entry.action
                        }
                      />

                      <div>
                        <p className="font-semibold">
                          {entry.actor
                            ?.displayName ||
                            "Sistema"}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          {formatDate(
                            entry.createdAt
                          )}
                        </p>
                      </div>

                      <div className="rounded-xl bg-white/[0.03] p-3">
                        <p className="text-xs uppercase tracking-wide text-gray-500">
                          Oggetto
                        </p>

                        <p className="mt-2 text-sm">
                          {getTargetLabel(
                            entry.targetType
                          )}
                        </p>

                        <p className="mt-1 break-all font-mono text-xs text-gray-500">
                          {entry.targetId ||
                            "Nessun ID"}
                        </p>
                      </div>

                      {entry.reason && (
                        <p className="text-sm leading-6 text-gray-400">
                          {entry.reason}
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedEntry(
                            entry
                          )
                        }
                        className="w-full rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
                      >
                        Apri dettagli
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </>
        )}

        <div className="flex flex-col justify-between gap-3 border-t border-white/10 p-5 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-400">
            Pagina {pagination.page} di{" "}
            {pagination.totalPages}
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={previousPage}
              disabled={
                loading ||
                pagination.page <= 1
              }
              className="rounded-lg border border-white/10 px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
            >
              Precedente
            </button>

            <button
              type="button"
              onClick={nextPage}
              disabled={
                loading ||
                pagination.page >=
                  pagination.totalPages
              }
              className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-40"
            >
              Successiva
            </button>
          </div>
        </div>
      </section>

      {selectedEntry && (
        <div className="fixed inset-0 z-[140] flex items-center justify-center bg-black/85 p-4">
          <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0B1028] p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                  Dettaglio attività
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  {getActionLabel(
                    selectedEntry.action
                  )}
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  {formatDate(
                    selectedEntry.createdAt
                  )}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedEntry(null)
                }
                className="rounded-lg border border-white/10 px-3 py-2 text-sm transition hover:bg-white/10"
              >
                Chiudi
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Operatore
                </p>

                <p className="mt-2 font-semibold">
                  {selectedEntry.actor
                    ?.displayName ||
                    "Sistema"}
                </p>

                <p className="mt-1 break-all text-sm text-gray-400">
                  {selectedEntry.actor
                    ?.email ||
                    "Email non disponibile"}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Ruolo:{" "}
                  {selectedEntry.actor
                    ?.roleKey ||
                    "system"}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Oggetto
                </p>

                <p className="mt-2 font-semibold">
                  {getTargetLabel(
                    selectedEntry.targetType
                  )}
                </p>

                <p className="mt-1 break-all font-mono text-xs text-gray-400">
                  {selectedEntry.targetId ||
                    "ID non disponibile"}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
              <p className="text-xs uppercase tracking-wide text-yellow-300">
                Motivazione
              </p>

              <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-300">
                {selectedEntry.reason ||
                  "Nessuna motivazione registrata."}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-semibold text-red-300">
                  Dati precedenti
                </p>

                <pre className="max-h-[420px] overflow-auto rounded-xl border border-red-400/20 bg-black/30 p-4 text-xs leading-6 text-gray-300">
                  {formatJson(
                    selectedEntry.oldData
                  )}
                </pre>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold text-green-300">
                  Dati successivi
                </p>

                <pre className="max-h-[420px] overflow-auto rounded-xl border border-green-400/20 bg-black/30 p-4 text-xs leading-6 text-gray-300">
                  {formatJson(
                    selectedEntry.newData
                  )}
                </pre>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                ID registrazione
              </p>

              <p className="mt-2 break-all font-mono text-xs text-gray-300">
                {selectedEntry.id}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}