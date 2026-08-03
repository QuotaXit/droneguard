"use client"

import {
  useCallback,
  useEffect,
  useState
} from "react"

import { toast } from "sonner"

function getRoleLabel(role) {
  const normalizedRole = String(role || "")
    .trim()
    .toLowerCase()

  if (
    normalizedRole === "pilot" ||
    normalizedRole === "pilota"
  ) {
    return "Pilota"
  }

  if (
    normalizedRole === "client" ||
    normalizedRole === "cliente"
  ) {
    return "Cliente"
  }

  return role || "Ruolo sconosciuto"
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

function UserStatusBadge({ banned }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        banned
          ? "bg-red-400/10 text-red-300"
          : "bg-green-400/10 text-green-400"
      }`}
    >
      {banned ? "Sospeso" : "Attivo"}
    </span>
  )
}

function VerificationBadge({ verified }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        verified
          ? "bg-blue-400/10 text-blue-300"
          : "bg-white/5 text-gray-400"
      }`}
    >
      {verified ? "Verificato" : "Non verificato"}
    </span>
  )
}

export default function UsersManagementClient({
  canUpdate,
  canSuspend,
  canVerify,
  canDelete,
  canAdjustCredits
}) {
  const [users, setUsers] = useState([])

  const [loading, setLoading] = useState(true)
  const [selectedUser, setSelectedUser] =
    useState(null)

    const [statusActionUser, setStatusActionUser] =
  useState(null)

const [statusReason, setStatusReason] =
  useState("")

const [updatingStatus, setUpdatingStatus] =
  useState(false)

  const [searchInput, setSearchInput] =
    useState("")

  const [appliedSearch, setAppliedSearch] =
    useState("")

  const [roleFilter, setRoleFilter] =
    useState("all")

  const [statusFilter, setStatusFilter] =
    useState("all")

  const [page, setPage] = useState(1)

  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 25,
    total: 0,
    totalPages: 1
  })

  const loadUsers = useCallback(async () => {
    try {
      setLoading(true)

      const searchParams = new URLSearchParams({
        page: String(page),
        role: roleFilter,
        status: statusFilter
      })

      if (appliedSearch) {
        searchParams.set(
          "search",
          appliedSearch
        )
      }

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
            "Impossibile caricare gli utenti."
        )
        return
      }

      setUsers(data.users || [])

      setPagination(
        data.pagination || {
          page: 1,
          pageSize: 25,
          total: 0,
          totalPages: 1
        }
      )
    } catch (error) {
      console.error(
        "Errore caricamento utenti:",
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
    roleFilter,
    statusFilter,
    appliedSearch
  ])

  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  const applySearch = (event) => {
    event.preventDefault()

    setPage(1)
    setAppliedSearch(searchInput.trim())
  }

  const resetFilters = () => {
    setSearchInput("")
    setAppliedSearch("")
    setRoleFilter("all")
    setStatusFilter("all")
    setPage(1)
  }

  const previousPage = () => {
    setPage((currentPage) =>
      Math.max(1, currentPage - 1)
    )
  }

  const nextPage = () => {
    setPage((currentPage) =>
      Math.min(
        pagination.totalPages,
        currentPage + 1
      )
    )
  }

  const openStatusAction = (currentUser) => {
  setStatusActionUser(currentUser)
  setStatusReason("")
}

const closeStatusAction = () => {
  if (updatingStatus) return

  setStatusActionUser(null)
  setStatusReason("")
}

const submitStatusChange = async () => {
  if (!statusActionUser || updatingStatus) return

  const normalizedReason = statusReason.trim()

  if (
    normalizedReason.length < 10 ||
    normalizedReason.length > 500
  ) {
    toast.error(
      "La motivazione deve contenere da 10 a 500 caratteri."
    )
    return
  }

  const newBannedStatus =
    !statusActionUser.banned

  try {
    setUpdatingStatus(true)

    const response = await fetch(
      "/api/admin/users",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: statusActionUser.id,
          banned: newBannedStatus,
          reason: normalizedReason
        })
      }
    )

    const data = await response.json()

    if (!response.ok) {
      toast.error(
        data.error ||
          "Impossibile modificare lo stato dell'account."
      )
      return
    }

    setUsers((currentUsers) =>
      currentUsers.map((currentUser) =>
        currentUser.id === data.user.id
          ? data.user
          : currentUser
      )
    )

    setSelectedUser((currentUser) =>
      currentUser?.id === data.user.id
        ? data.user
        : currentUser
    )

    setStatusActionUser(null)
    setStatusReason("")

    toast.success(
      data.message ||
        "Stato account aggiornato correttamente."
    )
  } catch (error) {
    console.error(
      "Errore aggiornamento stato utente:",
      error
    )

    toast.error(
      "Errore imprevisto durante l'operazione."
    )
  } finally {
    setUpdatingStatus(false)
  }
}

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-white/10 bg-[#0B1028] p-5 sm:p-6">
        <form
          onSubmit={applySearch}
          className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_190px_190px_auto]"
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
              maxLength={80}
              className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-green-400/50"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Ruolo
            </label>

            <select
              value={roleFilter}
              onChange={(event) => {
                setRoleFilter(event.target.value)
                setPage(1)
              }}
              className="w-full rounded-xl border border-white/10 bg-[#111735] p-3 outline-none"
            >
              <option value="all">
                Tutti i ruoli
              </option>

              <option value="pilot">
                Piloti
              </option>

              <option value="cliente">
                Clienti
              </option>
            </select>
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

              <option value="active">
                Attivi
              </option>

              <option value="banned">
                Sospesi
              </option>
            </select>
          </div>

          <div className="flex items-end gap-2">
            <button
              type="submit"
              className="flex-1 rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400"
            >
              Cerca
            </button>

            <button
              type="button"
              onClick={resetFilters}
              className="rounded-xl border border-white/10 px-4 py-3 text-sm text-gray-300 transition hover:bg-white/10"
            >
              Azzera
            </button>
          </div>
        </form>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#0B1028]">
        <div className="flex flex-col justify-between gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold">
              Utenti registrati
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              {pagination.total} account trovati
            </p>
          </div>

          <button
            type="button"
            onClick={loadUsers}
            disabled={loading}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10 disabled:opacity-50"
          >
            Aggiorna
          </button>
        </div>

        {loading ? (
          <div className="p-8 text-center text-sm text-gray-400">
            Caricamento utenti...
          </div>
        ) : users.length === 0 ? (
          <div className="p-8 text-center text-sm text-gray-400">
            Nessun utente trovato con questi filtri.
          </div>
        ) : (
          <>
            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full min-w-[1000px]">
                <thead className="border-b border-white/10 bg-white/[0.02]">
                  <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-5 py-4">
                      Utente
                    </th>

                    <th className="px-5 py-4">
                      Ruolo
                    </th>

                    <th className="px-5 py-4">
                      Città
                    </th>

                    <th className="px-5 py-4">
                      Crediti
                    </th>

                    <th className="px-5 py-4">
                      Stato
                    </th>

                    <th className="px-5 py-4">
                      Verifica
                    </th>

                    <th className="px-5 py-4 text-right">
                      Azioni
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/10">
                  {users.map((currentUser) => (
                    <tr
                      key={currentUser.id}
                      className="transition hover:bg-white/[0.03]"
                    >
                      <td className="px-5 py-4">
                        <p className="font-semibold">
                          {`${currentUser.name} ${currentUser.surname}`.trim() ||
                            "Nome non disponibile"}
                        </p>

                        <p className="mt-1 text-sm text-gray-400">
                          {currentUser.email}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <span className="rounded-full bg-purple-400/10 px-3 py-1 text-xs font-semibold text-purple-300">
                          {getRoleLabel(
                            currentUser.role
                          )}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-300">
                        {currentUser.city ||
                          "Non impostata"}
                      </td>

                      <td className="px-5 py-4 font-semibold text-yellow-300">
                        {currentUser.credits}
                      </td>

                      <td className="px-5 py-4">
                        <UserStatusBadge
                          banned={currentUser.banned}
                        />
                      </td>

                      <td className="px-5 py-4">
                        <VerificationBadge
                          verified={
                            currentUser.verified
                          }
                        />
                      </td>

                      <td className="px-5 py-4 text-right">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedUser(
                              currentUser
                            )
                          }
                          className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
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
              {users.map((currentUser) => (
                <div
                  key={currentUser.id}
                  className="p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-semibold">
                        {`${currentUser.name} ${currentUser.surname}`.trim() ||
                          "Nome non disponibile"}
                      </p>

                      <p className="mt-1 break-all text-sm text-gray-400">
                        {currentUser.email}
                      </p>
                    </div>

                    <UserStatusBadge
                      banned={currentUser.banned}
                    />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500">
                        Ruolo
                      </p>

                      <p className="mt-1 font-medium">
                        {getRoleLabel(
                          currentUser.role
                        )}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">
                        Crediti
                      </p>

                      <p className="mt-1 font-semibold text-yellow-300">
                        {currentUser.credits}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">
                        Città
                      </p>

                      <p className="mt-1">
                        {currentUser.city ||
                          "Non impostata"}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">
                        Verifica
                      </p>

                      <p className="mt-1">
                        {currentUser.verified
                          ? "Verificato"
                          : "Non verificato"}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedUser(currentUser)
                    }
                    className="mt-4 w-full rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
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

      {selectedUser && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0B1028] p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                  Profilo utente
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {`${selectedUser.name} ${selectedUser.surname}`.trim() ||
                    "Nome non disponibile"}
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedUser(null)
                }
                className="rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-white/10"
              >
                Chiudi
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Email
                </p>

                <p className="mt-2 break-all text-sm">
                  {selectedUser.email}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Ruolo
                </p>

                <p className="mt-2 text-sm">
                  {getRoleLabel(
                    selectedUser.role
                  )}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Città
                </p>

                <p className="mt-2 text-sm">
                  {selectedUser.city ||
                    "Non impostata"}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Crediti disponibili
                </p>

                <p className="mt-2 text-xl font-bold text-yellow-300">
                  {selectedUser.credits}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Stato
                </p>

                <div className="mt-2">
                  <UserStatusBadge
                    banned={selectedUser.banned}
                  />
                </div>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Verifica
                </p>

                <div className="mt-2">
                  <VerificationBadge
                    verified={
                      selectedUser.verified
                    }
                  />
                </div>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4 sm:col-span-2">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Registrazione
                </p>

                <p className="mt-2 text-sm">
                  {formatDate(
                    selectedUser.createdAt
                  )}
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4 sm:col-span-2">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  ID account
                </p>

                <p className="mt-2 break-all font-mono text-xs text-gray-300">
                  {selectedUser.id}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
  <p className="text-sm font-semibold text-yellow-300">
    Comandi amministrativi
  </p>

  <p className="mt-2 text-sm leading-6 text-gray-400">
    Ogni modifica viene registrata nel registro
    delle attività amministrative.
  </p>

  <div className="mt-4 flex flex-wrap gap-2">
    {canSuspend && (
      <button
        type="button"
        onClick={() =>
          openStatusAction(selectedUser)
        }
        className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
          selectedUser.banned
            ? "bg-green-500 text-black hover:bg-green-400"
            : "bg-red-500 text-white hover:bg-red-400"
        }`}
      >
        {selectedUser.banned
          ? "Riattiva account"
          : "Sospendi account"}
      </button>
    )}

    {canVerify && (
      <span className="rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-500">
        Verifica da collegare
      </span>
    )}

    {canAdjustCredits && (
      <span className="rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-500">
        Crediti da collegare
      </span>
    )}

    {canUpdate && (
      <span className="rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-500">
        Modifica dati da collegare
      </span>
    )}

    {canDelete && (
      <span className="rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-500">
        Eliminazione da collegare
      </span>
    )}
  </div>
</div>
            </div>
          </div>
      )}

{statusActionUser && (
  <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 p-4">
    <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0B1028] p-6 shadow-2xl">
      <div>
        <p
          className={`text-sm font-semibold uppercase tracking-[0.2em] ${
            statusActionUser.banned
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {statusActionUser.banned
            ? "Riattivazione account"
            : "Sospensione account"}
        </p>

        <h2 className="mt-3 text-2xl font-bold">
          {`${statusActionUser.name} ${statusActionUser.surname}`.trim() ||
            statusActionUser.email}
        </h2>

        <p className="mt-2 break-all text-sm text-gray-400">
          {statusActionUser.email}
        </p>
      </div>

      <div
        className={`mt-5 rounded-xl border p-4 ${
          statusActionUser.banned
            ? "border-green-400/20 bg-green-400/5"
            : "border-red-400/20 bg-red-400/5"
        }`}
      >
        <p className="text-sm leading-6 text-gray-300">
          {statusActionUser.banned
            ? "L'utente potrà nuovamente accedere alla piattaforma."
            : "L'utente non potrà più accedere alla piattaforma finché non verrà riattivato."}
        </p>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between gap-4">
          <label className="text-sm text-gray-400">
            Motivazione obbligatoria
          </label>

          <span className="text-xs text-gray-500">
            {statusReason.length}/500
          </span>
        </div>

        <textarea
          value={statusReason}
          onChange={(event) =>
            setStatusReason(
              event.target.value.slice(0, 500)
            )
          }
          minLength={10}
          maxLength={500}
          placeholder={
            statusActionUser.banned
              ? "Inserisci il motivo della riattivazione..."
              : "Inserisci il motivo della sospensione..."
          }
          className="h-32 w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-green-400/50"
        />

        <p className="mt-2 text-xs text-gray-500">
          Minimo 10 caratteri. La motivazione verrà
          salvata nel registro amministrativo.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={submitStatusChange}
          disabled={
            updatingStatus ||
            statusReason.trim().length < 10
          }
          className={`flex-1 rounded-xl px-5 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-40 ${
            statusActionUser.banned
              ? "bg-green-500 text-black"
              : "bg-red-500 text-white"
          }`}
        >
          {updatingStatus
            ? "Operazione in corso..."
            : statusActionUser.banned
              ? "Conferma riattivazione"
              : "Conferma sospensione"}
        </button>

        <button
          type="button"
          onClick={closeStatusAction}
          disabled={updatingStatus}
          className="rounded-xl border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:bg-white/10 disabled:opacity-50"
        >
          Annulla
        </button>
      </div>
    </div>
  </div>
)}


    </div>
  )
}