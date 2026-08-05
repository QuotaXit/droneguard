"use client"

import {
  useCallback,
  useEffect,
  useState
} from "react"

import { toast } from "sonner"

const EMPTY_SUMMARY = {
  total: 0,
  pending: 0,
  sending: 0,
  sent: 0,
  failed: 0,
  cancelled: 0
}

function formatDate(value) {
  if (!value) {
    return "Non disponibile"
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

function getStatusLabel(status) {
  const labels = {
    pending: "In attesa",
    sending: "Invio in corso",
    sent: "Inviata",
    failed: "Fallita",
    cancelled: "Annullata"
  }

  return (
    labels[status] ||
    status ||
    "Sconosciuto"
  )
}

function getCategoryLabel(category) {
  const labels = {
    certification_request:
      "Richiesta certificazione",

    contact_message:
      "Messaggio contatti",

    new_job_available:
      "Nuovo lavoro",

   account_notification:
  "Notifica account",

manual_team_email:
  "Email manuale Team"
  }

  return (
    labels[category] ||
    category ||
    "Categoria sconosciuta"
  )
}

function StatusBadge({ status }) {
  const styles = {
    pending:
      "border-yellow-400/20 bg-yellow-400/10 text-yellow-300",

    sending:
      "border-blue-400/20 bg-blue-400/10 text-blue-300",

    sent:
      "border-green-400/20 bg-green-400/10 text-green-300",

    failed:
      "border-red-400/20 bg-red-400/10 text-red-300",

    cancelled:
      "border-gray-400/20 bg-gray-400/10 text-gray-300"
  }

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${
        styles[status] ||
        styles.cancelled
      }`}
    >
      {getStatusLabel(status)}
    </span>
  )
}

function SummaryCard({
  label,
  value,
  description
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1028] p-5">
      <p className="text-sm text-gray-400">
        {label}
      </p>

      <p className="mt-3 text-3xl font-black">
        {value}
      </p>

      <p className="mt-2 text-xs text-gray-500">
        {description}
      </p>
    </div>
  )
}

export default function EmailsManagementClient({
  canSend
}) {
  const [
    deliveries,
    setDeliveries
  ] = useState([])

  const [loading, setLoading] =
    useState(true)

  const [
    summary,
    setSummary
  ] = useState(EMPTY_SUMMARY)

  const [
    canRetry,
    setCanRetry
  ] = useState(false)

  const [
    selectedDelivery,
    setSelectedDelivery
  ] = useState(null)

  const [
    detailLoading,
    setDetailLoading
  ] = useState(false)

  const [
    retryDelivery,
    setRetryDelivery
  ] = useState(null)

  const [
    retryReason,
    setRetryReason
  ] = useState("")

  const [
    retrying,
    setRetrying
  ] = useState(false)

  const [
  composeOpen,
  setComposeOpen
] = useState(false)

const [
  composeRecipientEmail,
  setComposeRecipientEmail
] = useState("")

const [
  composeRecipientName,
  setComposeRecipientName
] = useState("")

const [
  composeSubject,
  setComposeSubject
] = useState("")

const [
  composeMessage,
  setComposeMessage
] = useState("")

const [
  composeReason,
  setComposeReason
] = useState("")

const [
  composeRequestId,
  setComposeRequestId
] = useState("")

const [
  composing,
  setComposing
] = useState(false)

  const [
    searchInput,
    setSearchInput
  ] = useState("")

  const [
    statusInput,
    setStatusInput
  ] = useState("all")

  const [
    categoryInput,
    setCategoryInput
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
    status: "all",
    category: "",
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
    pageSize: 40,
    total: 0,
    totalPages: 1
  })

  const loadDeliveries =
    useCallback(async () => {
      try {
        setLoading(true)

        const searchParams =
          new URLSearchParams({
            page: String(page),
            status:
              appliedFilters.status
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
          appliedFilters.category
        ) {
          searchParams.set(
            "category",
            appliedFilters.category
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
            `/api/admin/emails?${searchParams.toString()}`,
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
              "Impossibile caricare gli invii email."
          )

          return
        }

        setDeliveries(
          Array.isArray(
            data?.deliveries
          )
            ? data.deliveries
            : []
        )

        setSummary(
          data?.summary ||
          EMPTY_SUMMARY
        )

        setPagination(
          data?.pagination || {
            page: 1,
            pageSize: 40,
            total: 0,
            totalPages: 1
          }
        )

        setCanRetry(
          Boolean(
            data?.permissions
              ?.canRetry
          )
        )
      } catch (error) {
        console.error(
          "Errore caricamento email Team:",
          error
        )

        toast.error(
          "Errore imprevisto durante il caricamento delle email."
        )
      } finally {
        setLoading(false)
      }
    }, [
      page,
      appliedFilters
    ])

  useEffect(() => {
    loadDeliveries()
  }, [loadDeliveries])

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

      status:
        statusInput,

      category:
        categoryInput.trim(),

      dateFrom:
        dateFromInput,

      dateTo:
        dateToInput
    })
  }

  const resetFilters = () => {
    setSearchInput("")
    setStatusInput("all")
    setCategoryInput("")
    setDateFromInput("")
    setDateToInput("")

    setPage(1)

    setAppliedFilters({
      search: "",
      status: "all",
      category: "",
      dateFrom: "",
      dateTo: ""
    })
  }

  const openDelivery = async (
    delivery
  ) => {
    if (!delivery?.id) {
      return
    }

    setSelectedDelivery(
      delivery
    )

    try {
      setDetailLoading(true)

      const response =
        await fetch(
          `/api/admin/emails?deliveryId=${encodeURIComponent(
            delivery.id
          )}`,
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
            "Impossibile caricare il dettaglio dell'email."
        )

        return
      }

      if (!data?.delivery?.id) {
        toast.error(
          "Dettaglio email non valido."
        )

        return
      }

      setSelectedDelivery(
        data.delivery
      )

      setCanRetry(
        Boolean(
          data?.permissions
            ?.canRetry
        )
      )
    } catch (error) {
      console.error(
        "Errore dettaglio email:",
        error
      )

      toast.error(
        "Errore imprevisto durante il caricamento del dettaglio."
      )
    } finally {
      setDetailLoading(false)
    }
  }

  const closeDelivery = () => {
    if (detailLoading) {
      return
    }

    setSelectedDelivery(null)
  }

  const openRetry = (
    delivery
  ) => {
    if (
      !canRetry ||
      delivery?.status !== "failed"
    ) {
      return
    }

    setRetryDelivery(delivery)
    setRetryReason("")
  }

  const closeRetry = () => {
    if (retrying) {
      return
    }

    setRetryDelivery(null)
    setRetryReason("")
  }

  const submitRetry = async (
    event
  ) => {
    event.preventDefault()

    if (
      !retryDelivery ||
      retrying
    ) {
      return
    }

    const normalizedReason =
      retryReason.trim()

    if (
      normalizedReason.length < 10 ||
      normalizedReason.length > 500
    ) {
      toast.error(
        "La motivazione deve contenere da 10 a 500 caratteri."
      )

      return
    }

    try {
      setRetrying(true)

      const response =
        await fetch(
          "/api/admin/emails",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
              deliveryId:
                retryDelivery.id,

              reason:
                normalizedReason
            })
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
            "Impossibile reinviare l'email."
        )

        return
      }

      setRetryDelivery(null)
      setRetryReason("")
      setSelectedDelivery(null)

      toast.success(
        data?.message ||
          "Email reinviata correttamente."
      )

      await loadDeliveries()
    } catch (error) {
      console.error(
        "Errore reinvio email:",
        error
      )

      toast.error(
        "Errore imprevisto durante il reinvio dell'email."
      )
    } finally {
      setRetrying(false)
    }
  }

  const resetComposeForm = () => {
  setComposeRecipientEmail("")
  setComposeRecipientName("")
  setComposeSubject("")
  setComposeMessage("")
  setComposeReason("")
  setComposeRequestId("")
}

const openCompose = () => {
  if (
    !canSend ||
    composing
  ) {
    return
  }

  if (
    typeof globalThis.crypto
      ?.randomUUID !== "function"
  ) {
    toast.error(
      "Il browser non riesce a generare un identificativo sicuro per l'invio."
    )

    return
  }

  setSelectedDelivery(null)
  setRetryDelivery(null)
  setRetryReason("")

  resetComposeForm()

  setComposeRequestId(
    globalThis.crypto.randomUUID()
  )

  setComposeOpen(true)
}

const closeCompose = () => {
  if (composing) {
    return
  }

  setComposeOpen(false)
  resetComposeForm()
}

const submitCompose = async (
  event
) => {
  event.preventDefault()

  if (
    !canSend ||
    !composeOpen ||
    composing
  ) {
    return
  }

  const recipientEmail =
    composeRecipientEmail
      .trim()
      .toLowerCase()

  const recipientName =
    composeRecipientName.trim()

  const subject =
    composeSubject
      .trim()
      .replace(/\s+/g, " ")

  const message =
    composeMessage.trim()

  const reason =
    composeReason.trim()

  const requestId =
    composeRequestId.trim()

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

  if (
    !uuidPattern.test(
      requestId
    )
  ) {
    toast.error(
      "Identificativo di sicurezza dell'invio non valido. Chiudi e riapri la finestra."
    )

    return
  }

  if (
    !emailPattern.test(
      recipientEmail
    )
  ) {
    toast.error(
      "Inserisci un indirizzo email destinatario valido."
    )

    return
  }

  if (
    recipientName.length > 200
  ) {
    toast.error(
      "Il nome del destinatario non può superare 200 caratteri."
    )

    return
  }

  if (
    subject.length < 3 ||
    subject.length > 200
  ) {
    toast.error(
      "L'oggetto deve contenere da 3 a 200 caratteri."
    )

    return
  }

  if (
    message.length < 10 ||
    message.length > 10_000
  ) {
    toast.error(
      "Il messaggio deve contenere da 10 a 10.000 caratteri."
    )

    return
  }

  if (
    reason.length < 10 ||
    reason.length > 500
  ) {
    toast.error(
      "La motivazione amministrativa deve contenere da 10 a 500 caratteri."
    )

    return
  }

  try {
    setComposing(true)

    const response =
      await fetch(
        "/api/admin/emails/compose",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            requestId,
            recipientEmail,
            recipientName,
            subject,
            message,
            reason
          })
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
      if (
        data?.deliveryCreated
      ) {
        toast.error(
          "L'invio è stato registrato ma non completato. Controllalo nell'elenco Email prima di effettuare un nuovo invio."
        )
      } else {
        toast.error(
          data?.error ||
            "Impossibile inviare l'email."
        )
      }

      return
    }

    setComposeOpen(false)
    resetComposeForm()

    toast.success(
      data?.message ||
        "Email inviata correttamente."
    )

    setPage(1)

    await loadDeliveries()
  } catch (error) {
    console.error(
      "Errore composizione email:",
      error
    )

    toast.error(
      "Errore imprevisto durante l'invio dell'email."
    )
  } finally {
    setComposing(false)
  }
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
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        <SummaryCard
          label="Totali"
          value={summary.total}
          description="Tutti gli invii registrati."
        />

        <SummaryCard
          label="In attesa"
          value={summary.pending}
          description="Email non ancora elaborate."
        />

        <SummaryCard
          label="In corso"
          value={summary.sending}
          description="Invii attualmente elaborati."
        />

        <SummaryCard
          label="Inviate"
          value={summary.sent}
          description="Accettate dal provider."
        />

        <SummaryCard
          label="Fallite"
          value={summary.failed}
          description="Invii terminati con errore."
        />

        <SummaryCard
          label="Annullate"
          value={summary.cancelled}
          description="Invii annullati."
        />
            </section>

      {canSend && (
        <section className="flex flex-col justify-between gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/5 p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Comunicazione diretta
            </p>

            <h2 className="mt-2 text-xl font-bold">
              Invia una nuova email
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
              Invia una comunicazione tracciata verso
              un singolo destinatario. L’operazione
              richiede una motivazione amministrativa
              e viene registrata nel Registro attività.
            </p>
          </div>

          <button
            type="button"
            onClick={openCompose}
            disabled={composing}
            className="shrink-0 rounded-xl bg-blue-500 px-5 py-3 font-bold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {composing
              ? "Invio in corso..."
              : "+ Componi email"}
          </button>
        </section>
      )}

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
                      .slice(0, 120)
                  )
                }
                maxLength={120}
                placeholder="Email, oggetto, errore o ID"
                className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none transition focus:border-green-400/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Stato
              </label>

              <select
                value={statusInput}
                onChange={(event) =>
                  setStatusInput(
                    event.target.value
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-[#111735] p-3 outline-none"
              >
                <option value="all">
                  Tutti gli stati
                </option>

                <option value="pending">
                  In attesa
                </option>

                <option value="sending">
                  In corso
                </option>

                <option value="sent">
                  Inviate
                </option>

                <option value="failed">
                  Fallite
                </option>

                <option value="cancelled">
                  Annullate
                </option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Categoria
              </label>

              <input
                type="text"
                value={categoryInput}
                onChange={(event) =>
                  setCategoryInput(
                    event.target.value
                      .slice(0, 100)
                  )
                }
                maxLength={100}
                placeholder="Esempio: contact_message"
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
              className="rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400 disabled:opacity-50"
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
              onClick={loadDeliveries}
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
              Registro invii email
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              {pagination.total} invii trovati
            </p>
          </div>

          <p className="text-sm text-gray-400">
            Pagina {pagination.page} di{" "}
            {pagination.totalPages}
          </p>
        </div>

        {loading ? (
          <div className="p-10 text-center text-sm text-gray-400">
            Caricamento email...
          </div>
        ) : deliveries.length === 0 ? (
          <div className="p-10 text-center text-sm text-gray-400">
            Nessun invio trovato.
          </div>
        ) : (
          <>
            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full min-w-[1150px]">
                <thead className="border-b border-white/10 bg-white/[0.02]">
                  <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-5 py-4">
                      Data
                    </th>

                    <th className="px-5 py-4">
                      Destinatario
                    </th>

                    <th className="px-5 py-4">
                      Categoria
                    </th>

                    <th className="px-5 py-4">
                      Oggetto
                    </th>

                    <th className="px-5 py-4">
                      Stato
                    </th>

                    <th className="px-5 py-4">
                      Tentativi
                    </th>

                    <th className="px-5 py-4 text-right">
                      Azioni
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/10">
                  {deliveries.map(
                    (delivery) => (
                      <tr
                        key={delivery.id}
                        className="transition hover:bg-white/[0.03]"
                      >
                        <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-300">
                          {formatDate(
                            delivery.createdAt
                          )}
                        </td>

                        <td className="px-5 py-4">
                          <p className="font-semibold">
                            {delivery.recipientName ||
                              "Destinatario"}
                          </p>

                          <p className="mt-1 break-all text-xs text-gray-500">
                            {delivery.recipientEmail}
                          </p>
                        </td>

                        <td className="px-5 py-4 text-sm text-gray-300">
                          {getCategoryLabel(
                            delivery.category
                          )}
                        </td>

                        <td className="max-w-[280px] px-5 py-4">
                          <p className="truncate text-sm">
                            {delivery.subject}
                          </p>
                        </td>

                        <td className="px-5 py-4">
                          <StatusBadge
                            status={
                              delivery.status
                            }
                          />
                        </td>

                        <td className="px-5 py-4 text-sm">
                          {delivery.attemptCount}/
                          {delivery.maxAttempts}
                        </td>

                        <td className="px-5 py-4 text-right">
                          <button
                            type="button"
                            onClick={() =>
                              openDelivery(
                                delivery
                              )
                            }
                            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
                          >
                            Dettagli
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            <div className="divide-y divide-white/10 lg:hidden">
              {deliveries.map(
                (delivery) => (
                  <div
                    key={delivery.id}
                    className="p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-semibold">
                          {delivery.recipientName ||
                            delivery.recipientEmail}
                        </p>

                        <p className="mt-1 break-all text-xs text-gray-500">
                          {delivery.recipientEmail}
                        </p>
                      </div>

                      <StatusBadge
                        status={
                          delivery.status
                        }
                      />
                    </div>

                    <p className="mt-4 text-sm font-medium">
                      {delivery.subject}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500">
                          Categoria
                        </p>

                        <p className="mt-1">
                          {getCategoryLabel(
                            delivery.category
                          )}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500">
                          Tentativi
                        </p>

                        <p className="mt-1">
                          {delivery.attemptCount}/
                          {delivery.maxAttempts}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-xs text-gray-500">
                      {formatDate(
                        delivery.createdAt
                      )}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        openDelivery(
                          delivery
                        )
                      }
                      className="mt-4 w-full rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
                    >
                      Apri dettagli
                    </button>
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
              className="rounded-lg border border-white/10 px-4 py-2 text-sm disabled:opacity-40"
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
              className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-black disabled:opacity-40"
            >
              Successiva
            </button>
          </div>
        </div>
      </section>

      {selectedDelivery && (
        <div className="fixed inset-0 z-[140] flex items-center justify-center bg-black/85 p-4">
          <div className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0B1028] p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                  Dettaglio email
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  {selectedDelivery.subject}
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  {formatDate(
                    selectedDelivery.createdAt
                  )}
                </p>
              </div>

              <button
                type="button"
                onClick={closeDelivery}
                disabled={detailLoading}
                className="rounded-lg border border-white/10 px-3 py-2 text-sm transition hover:bg-white/10 disabled:opacity-50"
              >
                Chiudi
              </button>
            </div>

            {detailLoading ? (
              <div className="mt-8 rounded-xl border border-white/10 p-8 text-center text-sm text-gray-400">
                Caricamento dettaglio...
              </div>
            ) : (
              <>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  <div className="rounded-xl bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Destinatario
                    </p>

                    <p className="mt-2 font-semibold">
                      {selectedDelivery.recipientName ||
                        "Non disponibile"}
                    </p>

                    <p className="mt-1 break-all text-sm text-gray-400">
                      {selectedDelivery.recipientEmail}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Mittente
                    </p>

                    <p className="mt-2 font-semibold">
                      {selectedDelivery.senderName}
                    </p>

                    <p className="mt-1 break-all text-sm text-gray-400">
                      {selectedDelivery.senderEmail}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Stato
                    </p>

                    <div className="mt-2">
                      <StatusBadge
                        status={
                          selectedDelivery.status
                        }
                      />
                    </div>

                    <p className="mt-3 text-sm text-gray-400">
                      Tentativi:{" "}
                      {selectedDelivery.attemptCount}/
                      {selectedDelivery.maxAttempts}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Categoria
                    </p>

                    <p className="mt-2 text-sm">
                      {getCategoryLabel(
                        selectedDelivery.category
                      )}
                    </p>

                    <p className="mt-1 font-mono text-xs text-gray-500">
                      {selectedDelivery.category}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Provider
                    </p>

                    <p className="mt-2 text-sm">
                      {selectedDelivery.provider}
                    </p>

                    <p className="mt-1 break-all font-mono text-xs text-gray-500">
                      {selectedDelivery.providerMessageId ||
                        "ID non disponibile"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Origine
                    </p>

                    <p className="mt-2 text-sm">
                      {selectedDelivery.sourceType ||
                        "Non disponibile"}
                    </p>

                    <p className="mt-1 break-all font-mono text-xs text-gray-500">
                      {selectedDelivery.sourceId ||
                        "Nessun ID"}
                    </p>
                  </div>
                </div>

                {selectedDelivery.lastError && (
                  <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/5 p-4">
                    <p className="text-sm font-semibold text-red-300">
                      Ultimo errore
                    </p>

                    <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-300">
                      {selectedDelivery.lastError}
                    </p>
                  </div>
                )}

                <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-2">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-blue-300">
                      Contenuto testuale
                    </p>

                    <pre className="max-h-[420px] overflow-auto whitespace-pre-wrap rounded-xl border border-blue-400/20 bg-black/30 p-4 text-xs leading-6 text-gray-300">
                      {selectedDelivery
                        .requestPayload
                        ?.text ||
                        "Versione testuale non disponibile."}
                    </pre>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-semibold text-purple-300">
                      Contenuto HTML
                    </p>

                    <pre className="max-h-[420px] overflow-auto whitespace-pre-wrap rounded-xl border border-purple-400/20 bg-black/30 p-4 text-xs leading-6 text-gray-300">
                      {selectedDelivery
                        .requestPayload
                        ?.html ||
                        "Versione HTML non disponibile."}
                    </pre>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-semibold text-green-300">
                      Risposta provider
                    </p>

                    <pre className="max-h-[360px] overflow-auto rounded-xl border border-green-400/20 bg-black/30 p-4 text-xs leading-6 text-gray-300">
                      {formatJson(
                        selectedDelivery.providerResponse
                      )}
                    </pre>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-semibold text-yellow-300">
                      Metadati
                    </p>

                    <pre className="max-h-[360px] overflow-auto rounded-xl border border-yellow-400/20 bg-black/30 p-4 text-xs leading-6 text-gray-300">
                      {formatJson(
                        selectedDelivery.metadata
                      )}
                    </pre>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    ID invio
                  </p>

                  <p className="mt-2 break-all font-mono text-xs text-gray-300">
                    {selectedDelivery.id}
                  </p>
                </div>

                {canRetry &&
                  selectedDelivery.status ===
                    "failed" && (
                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={() =>
                          openRetry(
                            selectedDelivery
                          )
                        }
                        className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-400"
                      >
                        Reinvio amministrativo
                      </button>
                    </div>
                  )}
              </>
            )}
          </div>
        </div>
      )}

      {composeOpen && canSend && (
        <div className="fixed inset-0 z-[160] flex items-center justify-center bg-black/90 p-4">
          <form
            onSubmit={submitCompose}
            className="max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-blue-400/30 bg-[#0B1028] p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Comunicazione diretta
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  Componi una nuova email
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
                  La comunicazione verrà inviata a un
                  singolo destinatario, registrata nel
                  sistema Email e associata al tuo account
                  Team.
                </p>
              </div>

              <button
                type="button"
                onClick={closeCompose}
                disabled={composing}
                className="rounded-lg border border-white/10 px-3 py-2 text-sm transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Chiudi
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email destinatario
                </label>

                <input
                  type="email"
                  value={composeRecipientEmail}
                  onChange={(event) =>
                    setComposeRecipientEmail(
                      event.target.value.slice(
                        0,
                        320
                      )
                    )
                  }
                  required
                  maxLength={320}
                  disabled={composing}
                  autoComplete="off"
                  placeholder="utente@example.com"
                  className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none transition focus:border-blue-400/50 disabled:opacity-60"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Nome destinatario
                </label>

                <input
                  type="text"
                  value={composeRecipientName}
                  onChange={(event) =>
                    setComposeRecipientName(
                      event.target.value.slice(
                        0,
                        200
                      )
                    )
                  }
                  maxLength={200}
                  disabled={composing}
                  autoComplete="off"
                  placeholder="Nome facoltativo"
                  className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none transition focus:border-blue-400/50 disabled:opacity-60"
                />

                <p className="mt-2 text-right text-xs text-gray-500">
                  {composeRecipientName.length}/200
                </p>
              </div>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <label className="text-sm text-gray-300">
                  Oggetto
                </label>

                <span className="text-xs text-gray-500">
                  {composeSubject.length}/200
                </span>
              </div>

              <input
                type="text"
                value={composeSubject}
                onChange={(event) =>
                  setComposeSubject(
                    event.target.value.slice(
                      0,
                      200
                    )
                  )
                }
                required
                minLength={3}
                maxLength={200}
                disabled={composing}
                placeholder="Oggetto della comunicazione"
                className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none transition focus:border-blue-400/50 disabled:opacity-60"
              />
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <label className="text-sm text-gray-300">
                  Messaggio
                </label>

                <span className="text-xs text-gray-500">
                  {composeMessage.length}/10.000
                </span>
              </div>

              <textarea
                value={composeMessage}
                onChange={(event) =>
                  setComposeMessage(
                    event.target.value.slice(
                      0,
                      10_000
                    )
                  )
                }
                required
                minLength={10}
                maxLength={10_000}
                disabled={composing}
                rows={12}
                placeholder="Scrivi il contenuto dell'email..."
                className="w-full resize-y rounded-xl border border-white/10 bg-black/20 p-3 leading-6 outline-none transition focus:border-blue-400/50 disabled:opacity-60"
              />
            </div>

            <div className="mt-5 rounded-xl border border-blue-400/20 bg-blue-400/5 p-4">
              <p className="text-sm font-semibold text-blue-300">
                Contenuto protetto
              </p>

              <p className="mt-2 text-xs leading-5 text-gray-400">
                Il testo viene convertito automaticamente
                in un’email DroneGuard. Eventuale codice
                HTML inserito nel messaggio verrà mostrato
                come testo e non verrà eseguito.
              </p>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <label className="text-sm text-gray-300">
                  Motivazione amministrativa
                </label>

                <span className="text-xs text-gray-500">
                  {composeReason.length}/500
                </span>
              </div>

              <textarea
                value={composeReason}
                onChange={(event) =>
                  setComposeReason(
                    event.target.value.slice(
                      0,
                      500
                    )
                  )
                }
                required
                minLength={10}
                maxLength={500}
                disabled={composing}
                rows={4}
                placeholder="Spiega perché stai inviando questa comunicazione..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 outline-none transition focus:border-blue-400/50 disabled:opacity-60"
              />

              <p className="mt-2 text-xs leading-5 text-gray-500">
                La motivazione sarà registrata nel
                Registro attività. Il messaggio completo
                non verrà copiato nel registro audit.
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
              <p className="text-sm leading-6 text-gray-300">
                Controlla attentamente destinatario,
                oggetto e contenuto. Dopo la conferma
                l’invio non può essere annullato.
              </p>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closeCompose}
                disabled={composing}
                className="rounded-xl border border-white/10 px-5 py-3 font-semibold transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Annulla
              </button>

              <button
                type="submit"
                disabled={
                  composing ||
                  !composeRecipientEmail.trim() ||
                  composeSubject.trim().length < 3 ||
                  composeMessage.trim().length < 10 ||
                  composeReason.trim().length < 10 ||
                  !composeRequestId
                }
                className="rounded-xl bg-blue-500 px-5 py-3 font-bold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {composing
                  ? "Invio in corso..."
                  : "Conferma e invia"}
              </button>
            </div>
          </form>
        </div>
      )}

      {retryDelivery && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 p-4">
          <form
            onSubmit={submitRetry}
            className="w-full max-w-lg rounded-2xl border border-red-400/30 bg-[#0B1028] p-6 shadow-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
              Reinvio amministrativo
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              {retryDelivery.subject}
            </h2>

            <p className="mt-2 break-all text-sm text-gray-400">
              {retryDelivery.recipientEmail}
            </p>

            <div className="mt-5 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
              <p className="text-sm leading-6 text-gray-300">
                Verrà creato un nuovo invio collegato
                al tentativo fallito. L’operazione sarà
                registrata nel Registro attività.
              </p>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <label className="text-sm text-gray-300">
                  Motivazione obbligatoria
                </label>

                <span className="text-xs text-gray-500">
                  {retryReason.length}/500
                </span>
              </div>

              <textarea
                value={retryReason}
                onChange={(event) =>
                  setRetryReason(
                    event.target.value
                      .slice(0, 500)
                  )
                }
                minLength={10}
                maxLength={500}
                required
                disabled={retrying}
                rows={5}
                placeholder="Spiega il motivo del reinvio..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 outline-none transition focus:border-red-400/50 disabled:opacity-60"
              />
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closeRetry}
                disabled={retrying}
                className="rounded-xl border border-white/10 px-5 py-3 font-semibold transition hover:bg-white/10 disabled:opacity-50"
              >
                Annulla
              </button>

              <button
                type="submit"
                disabled={
                  retrying ||
                  retryReason.trim()
                    .length < 10
                }
                className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {retrying
                  ? "Reinvio in corso..."
                  : "Conferma reinvio"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}