"use client"

import {
  useCallback,
  useEffect,
  useState
} from "react"

import { toast } from "sonner"

const reasonLabels = {
  opening_balance: "Saldo iniziale",
  signup_bonus: "Bonus registrazione",
  job_publish: "Pubblicazione lavoro",
  job_application: "Candidatura lavoro",
  stripe_purchase: "Acquisto Stripe",
  admin_adjustment: "Rettifica amministrativa",
  refund: "Rimborso"
}

function getReasonLabel(reason) {
  return reasonLabels[reason] ||
    reason ||
    "Movimento sconosciuto"
}

function formatDate(value) {
  if (!value) {
    return "Data non disponibile"
  }

  return new Intl.DateTimeFormat("it-IT", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Europe/Rome"
  }).format(new Date(value))
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("it-IT")
}

function getUserName(user) {
  if (!user) {
    return "Utente non disponibile"
  }

  return (
    `${user.name || ""} ${user.surname || ""}`.trim() ||
    user.email ||
    "Utente non disponibile"
  )
}

function SummaryCard({
  label,
  value,
  description,
  className = ""
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#0B1028] p-5 ${className}`}
    >
      <p className="text-sm text-gray-400">
        {label}
      </p>

      <p className="mt-3 text-3xl font-black sm:text-4xl">
        {value}
      </p>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  )
}

function MovementBadge({ amount }) {
  const positive = Number(amount) >= 0

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-bold ${
        positive
          ? "bg-green-400/10 text-green-400"
          : "bg-red-400/10 text-red-300"
      }`}
    >
      {positive ? "+" : ""}
      {formatNumber(amount)}
    </span>
  )
}

export default function CreditsManagementClient({
  canAdjust
}) {
  const [movements, setMovements] = useState([])
  const [loading, setLoading] = useState(true)

  const [selectedMovement, setSelectedMovement] =
    useState(null)

    const [adjustmentOpen, setAdjustmentOpen] =
  useState(false)

const [adjustmentUserSearch, setAdjustmentUserSearch] =
  useState("")

const [adjustmentUserResults, setAdjustmentUserResults] =
  useState([])

const [searchingAdjustmentUsers, setSearchingAdjustmentUsers] =
  useState(false)

const [selectedAdjustmentUser, setSelectedAdjustmentUser] =
  useState(null)

const [adjustmentAmount, setAdjustmentAmount] =
  useState("")

const [adjustmentReason, setAdjustmentReason] =
  useState("")

const [adjustmentRequestId, setAdjustmentRequestId] =
  useState("")

const [submittingAdjustment, setSubmittingAdjustment] =
  useState(false)

  const [searchInput, setSearchInput] =
    useState("")

  const [appliedSearch, setAppliedSearch] =
    useState("")

  const [reasonFilter, setReasonFilter] =
    useState("all")

  const [page, setPage] = useState(1)

  const [summary, setSummary] = useState({
    currentCredits: 0,
    movementCount: 0,
    creditsAdded: 0,
    creditsSpent: 0
  })

  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 30,
    total: 0,
    totalPages: 1
  })

  const loadMovements = useCallback(async () => {
    try {
      setLoading(true)

      const searchParams = new URLSearchParams({
        page: String(page),
        reason: reasonFilter
      })

      if (appliedSearch) {
        searchParams.set(
          "search",
          appliedSearch
        )
      }

      const response = await fetch(
        `/api/admin/credits?${searchParams.toString()}`,
        {
          method: "GET",
          cache: "no-store"
        }
      )

      const data = await response.json()

      if (!response.ok) {
        toast.error(
          data.error ||
            "Impossibile caricare i movimenti."
        )

        return
      }

      setMovements(data.movements || [])

      setSummary(
        data.summary || {
          currentCredits: 0,
          movementCount: 0,
          creditsAdded: 0,
          creditsSpent: 0
        }
      )

      setPagination(
        data.pagination || {
          page: 1,
          pageSize: 30,
          total: 0,
          totalPages: 1
        }
      )
    } catch (error) {
      console.error(
        "Errore caricamento crediti:",
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
    reasonFilter,
    appliedSearch
  ])

  useEffect(() => {
    loadMovements()
  }, [loadMovements])

  const applySearch = (event) => {
    event.preventDefault()

    setPage(1)
    setAppliedSearch(searchInput.trim())
  }

  const resetFilters = () => {
    setSearchInput("")
    setAppliedSearch("")
    setReasonFilter("all")
    setPage(1)
  }

  const openAdjustmentModal = () => {
  setAdjustmentOpen(true)
  setAdjustmentUserSearch("")
  setAdjustmentUserResults([])
  setSelectedAdjustmentUser(null)
  setAdjustmentAmount("")
  setAdjustmentReason("")
  setAdjustmentRequestId(crypto.randomUUID())
}

const closeAdjustmentModal = () => {
  if (submittingAdjustment) return

  setAdjustmentOpen(false)
  setAdjustmentUserSearch("")
  setAdjustmentUserResults([])
  setSelectedAdjustmentUser(null)
  setAdjustmentAmount("")
  setAdjustmentReason("")
  setAdjustmentRequestId("")
}

const searchUsersForAdjustment = async () => {
  const normalizedSearch =
    adjustmentUserSearch.trim()

  if (normalizedSearch.length < 2) {
    toast.error(
      "Inserisci almeno 2 caratteri per cercare un utente."
    )
    return
  }

  try {
    setSearchingAdjustmentUsers(true)

    const searchParams = new URLSearchParams({
      search: normalizedSearch,
      page: "1",
      role: "all",
      status: "all"
    })

    const response = await fetch(
      `/api/admin/users?${searchParams.toString()}`,
      {
        method: "GET",
        cache: "no-store"
      }
    )

    const data = await response.json()

    if (!response.ok) {
      toast.error(
        data.error ||
          "Impossibile cercare gli utenti."
      )
      return
    }

    setAdjustmentUserResults(data.users || [])

    if (!data.users?.length) {
      toast.error(
        "Nessun utente trovato con questa ricerca."
      )
    }
  } catch (error) {
    console.error(
      "Errore ricerca utente rettifica:",
      error
    )

    toast.error(
      "Errore imprevisto durante la ricerca."
    )
  } finally {
    setSearchingAdjustmentUsers(false)
  }
}

const submitAdjustment = async () => {
  if (
    !selectedAdjustmentUser ||
    submittingAdjustment
  ) {
    return
  }

  const amount = Number(adjustmentAmount)
  const reason = adjustmentReason.trim()

  if (!Number.isInteger(amount) || amount === 0) {
    toast.error(
      "Inserisci una quantità intera diversa da zero."
    )
    return
  }

  if (Math.abs(amount) > 10000) {
    toast.error(
      "La rettifica massima è di 10.000 crediti."
    )
    return
  }

  if (
    reason.length < 10 ||
    reason.length > 500
  ) {
    toast.error(
      "La motivazione deve contenere da 10 a 500 caratteri."
    )
    return
  }

  const expectedBalance =
    Number(selectedAdjustmentUser.credits || 0) +
    amount

  if (expectedBalance < 0) {
    toast.error(
      "La rettifica porterebbe il saldo sotto zero."
    )
    return
  }

  try {
    setSubmittingAdjustment(true)

    const response = await fetch(
      "/api/admin/credits",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: selectedAdjustmentUser.id,
          amount,
          reason,
          requestId:
            adjustmentRequestId ||
            crypto.randomUUID()
        })
      }
    )

    const data = await response.json()

    if (!response.ok) {
      toast.error(
        data.error ||
          "Impossibile completare la rettifica."
      )
      return
    }

    toast.success(
      data.message ||
        "Rettifica completata correttamente."
    )

    closeAdjustmentModal()
    await loadMovements()
  } catch (error) {
    console.error(
      "Errore rettifica crediti:",
      error
    )

    toast.error(
      "Errore imprevisto durante la rettifica."
    )
  } finally {
    setSubmittingAdjustment(false)
  }
}

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          label="Crediti disponibili"
          value={formatNumber(
            summary.currentCredits
          )}
          description="Somma attuale dei saldi di piloti e clienti."
          className="border-yellow-400/20 bg-yellow-400/5"
        />

        <SummaryCard
          label="Movimenti registrati"
          value={formatNumber(
            summary.movementCount
          )}
          description="Numero complessivo di righe presenti nel ledger."
        />

        <SummaryCard
          label="Crediti aggiunti"
          value={`+${formatNumber(
            summary.creditsAdded
          )}`}
          description="Totale dei movimenti positivi registrati."
          className="border-green-400/20 bg-green-400/5"
        />

        <SummaryCard
          label="Crediti spesi"
          value={`-${formatNumber(
            summary.creditsSpent
          )}`}
          description="Totale dei movimenti negativi registrati."
          className="border-red-400/20 bg-red-400/5"
        />
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#0B1028] p-5 sm:p-6">
        <form
          onSubmit={applySearch}
          className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_260px_auto]"
        >
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Cerca utente
            </label>

            <input
              value={searchInput}
              onChange={(event) =>
                setSearchInput(event.target.value)
              }
              placeholder="Email, nome, cognome o città"
              maxLength={100}
              className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-green-400/50"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Tipo movimento
            </label>

            <select
              value={reasonFilter}
              onChange={(event) => {
                setReasonFilter(event.target.value)
                setPage(1)
              }}
              className="w-full rounded-xl border border-white/10 bg-[#111735] p-3 outline-none"
            >
              <option value="all">
                Tutti i movimenti
              </option>

              <option value="opening_balance">
                Saldo iniziale
              </option>

              <option value="signup_bonus">
                Bonus registrazione
              </option>

              <option value="job_publish">
                Pubblicazione lavoro
              </option>

              <option value="job_application">
                Candidatura lavoro
              </option>

              <option value="stripe_purchase">
                Acquisto Stripe
              </option>

              <option value="admin_adjustment">
                Rettifica amministrativa
              </option>

              <option value="refund">
                Rimborso
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
              Registro crediti
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              {pagination.total} movimenti trovati
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
           {canAdjust && (
  <button
    type="button"
    onClick={openAdjustmentModal}
    className="rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300"
  >
    Nuova rettifica
  </button>
)}

            <button
              type="button"
              onClick={loadMovements}
              disabled={loading}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/10 disabled:opacity-50"
            >
              Aggiorna
            </button>
          </div>
        </div>

        {loading ? (
          <div className="p-8 text-center text-sm text-gray-400">
            Caricamento movimenti...
          </div>
        ) : movements.length === 0 ? (
          <div className="p-8 text-center text-sm text-gray-400">
            Nessun movimento trovato.
          </div>
        ) : (
          <>
            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full min-w-[1100px]">
                <thead className="border-b border-white/10 bg-white/[0.02]">
                  <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-5 py-4">
                      Utente
                    </th>

                    <th className="px-5 py-4">
                      Tipo
                    </th>

                    <th className="px-5 py-4">
                      Movimento
                    </th>

                    <th className="px-5 py-4">
                      Prima
                    </th>

                    <th className="px-5 py-4">
                      Dopo
                    </th>

                    <th className="px-5 py-4">
                      Operatore
                    </th>

                    <th className="px-5 py-4">
                      Data
                    </th>

                    <th className="px-5 py-4 text-right">
                      Azioni
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/10">
                  {movements.map((movement) => (
                    <tr
                      key={movement.id}
                      className="hover:bg-white/[0.03]"
                    >
                      <td className="px-5 py-4">
                        <p className="font-semibold">
                          {getUserName(
                            movement.user
                          )}
                        </p>

                        <p className="mt-1 text-sm text-gray-400">
                          {movement.user?.email ||
                            "Email non disponibile"}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <span className="rounded-full bg-purple-400/10 px-3 py-1 text-xs font-semibold text-purple-300">
                          {getReasonLabel(
                            movement.reason
                          )}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <MovementBadge
                          amount={movement.amount}
                        />
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-400">
                        {formatNumber(
                          movement.balanceBefore
                        )}
                      </td>

                      <td className="px-5 py-4 font-semibold text-yellow-300">
                        {formatNumber(
                          movement.balanceAfter
                        )}
                      </td>

                      <td className="px-5 py-4 text-sm">
                        {movement.actor
                          ?.displayName ||
                          "Sistema"}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-400">
                        {formatDate(
                          movement.createdAt
                        )}
                      </td>

                      <td className="px-5 py-4 text-right">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedMovement(
                              movement
                            )
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
              {movements.map((movement) => (
                <div
                  key={movement.id}
                  className="p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold">
                        {getUserName(
                          movement.user
                        )}
                      </p>

                      <p className="mt-1 break-all text-sm text-gray-400">
                        {movement.user?.email ||
                          "Email non disponibile"}
                      </p>
                    </div>

                    <MovementBadge
                      amount={movement.amount}
                    />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500">
                        Tipo
                      </p>

                      <p className="mt-1">
                        {getReasonLabel(
                          movement.reason
                        )}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">
                        Saldo finale
                      </p>

                      <p className="mt-1 font-semibold text-yellow-300">
                        {formatNumber(
                          movement.balanceAfter
                        )}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">
                        Operatore
                      </p>

                      <p className="mt-1">
                        {movement.actor
                          ?.displayName ||
                          "Sistema"}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">
                        Data
                      </p>

                      <p className="mt-1">
                        {formatDate(
                          movement.createdAt
                        )}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedMovement(
                        movement
                      )
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

      {selectedMovement && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0B1028] p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                  Movimento crediti
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  {getReasonLabel(
                    selectedMovement.reason
                  )}
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedMovement(null)
                }
                className="rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-white/10"
              >
                Chiudi
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Utente
                </p>

                <p className="mt-2 font-semibold">
                  {getUserName(
                    selectedMovement.user
                  )}
                </p>

                <p className="mt-1 break-all text-sm text-gray-400">
                  {selectedMovement.user?.email ||
                    "Email non disponibile"}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Movimento
                </p>

                <div className="mt-2">
                  <MovementBadge
                    amount={
                      selectedMovement.amount
                    }
                  />
                </div>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Saldo precedente
                </p>

                <p className="mt-2 text-xl font-bold">
                  {formatNumber(
                    selectedMovement.balanceBefore
                  )}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Saldo successivo
                </p>

                <p className="mt-2 text-xl font-bold text-yellow-300">
                  {formatNumber(
                    selectedMovement.balanceAfter
                  )}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Operatore
                </p>

                <p className="mt-2">
                  {selectedMovement.actor
                    ?.displayName ||
                    "Sistema"}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Data
                </p>

                <p className="mt-2">
                  {formatDate(
                    selectedMovement.createdAt
                  )}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4 sm:col-span-2">
                <p className="text-xs uppercase text-gray-500">
                  Riferimento
                </p>

                <p className="mt-2 text-sm">
                  {selectedMovement.referenceType ||
                    "Nessun tipo"}
                </p>

                <p className="mt-1 break-all font-mono text-xs text-gray-400">
                  {selectedMovement.referenceId ||
                    "Nessun identificativo"}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4 sm:col-span-2">
                <p className="text-xs uppercase text-gray-500">
                  Chiave idempotenza
                </p>

                <p className="mt-2 break-all font-mono text-xs text-gray-300">
                  {selectedMovement.idempotencyKey}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 p-4">
              <p className="text-xs uppercase text-gray-500">
                Metadata
              </p>

              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words text-xs leading-6 text-gray-300">
                {JSON.stringify(
                  selectedMovement.metadata,
                  null,
                  2
                )}
              </pre>
            </div>
          </div>
        </div>
      )}

{adjustmentOpen && canAdjust && (
  <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 p-4">
    <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0B1028] p-6 shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
            Rettifica amministrativa
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Modifica saldo crediti
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Usa un numero positivo per aggiungere crediti
            e un numero negativo per rimuoverli.
          </p>
        </div>

        <button
          type="button"
          onClick={closeAdjustmentModal}
          disabled={submittingAdjustment}
          className="rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-white/10 disabled:opacity-50"
        >
          Chiudi
        </button>
      </div>

      {!selectedAdjustmentUser ? (
        <section className="mt-6">
          <label className="mb-2 block text-sm text-gray-400">
            Cerca utente
          </label>

          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              value={adjustmentUserSearch}
              onChange={(event) =>
                setAdjustmentUserSearch(
                  event.target.value
                )
              }
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault()
                  searchUsersForAdjustment()
                }
              }}
              placeholder="Email, nome, cognome o città"
              maxLength={100}
              className="flex-1 rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-yellow-400/50"
            />

            <button
              type="button"
              onClick={searchUsersForAdjustment}
              disabled={searchingAdjustmentUsers}
              className="rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-black disabled:opacity-50"
            >
              {searchingAdjustmentUsers
                ? "Ricerca..."
                : "Cerca"}
            </button>
          </div>

          <div className="mt-4 space-y-2">
            {adjustmentUserResults.map(
              (currentUser) => (
                <button
                  key={currentUser.id}
                  type="button"
                  onClick={() => {
                    setSelectedAdjustmentUser(
                      currentUser
                    )
                    setAdjustmentUserResults([])
                  }}
                  className="flex w-full flex-col justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-yellow-400/30 sm:flex-row sm:items-center"
                >
                  <div>
                    <p className="font-semibold">
                      {`${currentUser.name} ${currentUser.surname}`.trim() ||
                        "Nome non disponibile"}
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      {currentUser.email}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-xs text-gray-500">
                      Saldo
                    </p>

                    <p className="mt-1 font-bold text-yellow-300">
                      {formatNumber(
                        currentUser.credits
                      )}{" "}
                      crediti
                    </p>
                  </div>
                </button>
              )
            )}
          </div>
        </section>
      ) : (
        <section className="mt-6 space-y-5">
          <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="font-semibold">
                  {`${selectedAdjustmentUser.name} ${selectedAdjustmentUser.surname}`.trim() ||
                    "Nome non disponibile"}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  {selectedAdjustmentUser.email}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-xs text-gray-500">
                  Saldo attuale
                </p>

                <p className="mt-1 text-xl font-bold text-yellow-300">
                  {formatNumber(
                    selectedAdjustmentUser.credits
                  )}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedAdjustmentUser(null)
                setAdjustmentAmount("")
                setAdjustmentReason("")
              }}
              disabled={submittingAdjustment}
              className="mt-4 text-sm font-semibold text-yellow-300 hover:underline disabled:opacity-50"
            >
              Cambia utente
            </button>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Quantità crediti
            </label>

            <input
              type="number"
              step="1"
              min="-10000"
              max="10000"
              value={adjustmentAmount}
              onChange={(event) =>
                setAdjustmentAmount(
                  event.target.value
                )
              }
              placeholder="Esempio: 20 oppure -10"
              className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-yellow-400/50"
            />

            <p className="mt-2 text-xs text-gray-500">
              Positivo per aggiungere, negativo per rimuovere.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/[0.03] p-4">
              <p className="text-xs uppercase text-gray-500">
                Saldo prima
              </p>

              <p className="mt-2 text-xl font-bold">
                {formatNumber(
                  selectedAdjustmentUser.credits
                )}
              </p>
            </div>

            <div className="rounded-xl bg-white/[0.03] p-4">
              <p className="text-xs uppercase text-gray-500">
                Saldo previsto
              </p>

              <p
                className={`mt-2 text-xl font-bold ${
                  Number(
                    selectedAdjustmentUser.credits ||
                      0
                  ) +
                    Number(
                      adjustmentAmount || 0
                    ) <
                  0
                    ? "text-red-300"
                    : "text-yellow-300"
                }`}
              >
                {formatNumber(
                  Number(
                    selectedAdjustmentUser.credits ||
                      0
                  ) +
                    Number(
                      adjustmentAmount || 0
                    )
                )}
              </p>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <label className="text-sm text-gray-400">
                Motivazione obbligatoria
              </label>

              <span className="text-xs text-gray-500">
                {adjustmentReason.length}/500
              </span>
            </div>

            <textarea
              value={adjustmentReason}
              onChange={(event) =>
                setAdjustmentReason(
                  event.target.value.slice(0, 500)
                )
              }
              minLength={10}
              maxLength={500}
              placeholder="Spiega il motivo della rettifica..."
              className="h-32 w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-yellow-400/50"
            />
          </div>

          <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-4">
            <p className="text-sm leading-6 text-gray-300">
              La rettifica modifica immediatamente il saldo
              dell’utente e viene registrata in modo permanente
              nel ledger e nel registro amministrativo.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={submitAdjustment}
              disabled={
                submittingAdjustment ||
                !Number.isInteger(
                  Number(adjustmentAmount)
                ) ||
                Number(adjustmentAmount) === 0 ||
                adjustmentReason.trim().length <
                  10 ||
                Number(
                  selectedAdjustmentUser.credits ||
                    0
                ) +
                  Number(
                    adjustmentAmount || 0
                  ) <
                  0
              }
              className="flex-1 rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black disabled:cursor-not-allowed disabled:opacity-40"
            >
              {submittingAdjustment
                ? "Rettifica in corso..."
                : "Conferma rettifica"}
            </button>

            <button
              type="button"
              onClick={closeAdjustmentModal}
              disabled={submittingAdjustment}
              className="rounded-xl border border-white/10 px-5 py-3 text-sm hover:bg-white/10 disabled:opacity-50"
            >
              Annulla
            </button>
          </div>
        </section>
      )}
    </div>
  </div>
)}

    </div>
  )
}