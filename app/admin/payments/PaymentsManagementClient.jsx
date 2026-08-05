"use client"

import {
  useCallback,
  useEffect,
  useState
} from "react"

import { toast } from "sonner"

const processingStatusLabels = {
  legacy: "Storico precedente",
  pending: "In attesa",
  processed: "Elaborato",
  failed: "Fallito",
  ignored: "Ignorato",
  refunded: "Rimborsato"
}

function getProcessingStatusLabel(status) {
  return (
    processingStatusLabels[status] ||
    status ||
    "Stato sconosciuto"
  )
}

function formatNumber(value) {
  return Number(
    value || 0
  ).toLocaleString("it-IT")
}

function formatCurrency(
  amountCents,
  currency = "eur"
) {
  const normalizedCurrency =
    String(currency || "eur")
      .trim()
      .toUpperCase()

  try {
    return new Intl.NumberFormat(
      "it-IT",
      {
        style: "currency",
        currency:
          normalizedCurrency || "EUR"
      }
    ).format(
      Number(amountCents || 0) / 100
    )
  } catch {
    return `${(
      Number(amountCents || 0) / 100
    ).toFixed(2)} €`
  }
}

function formatDate(value) {
  if (!value) {
    return "Data non disponibile"
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return "Data non disponibile"
  }

  return new Intl.DateTimeFormat(
    "it-IT",
    {
      dateStyle: "short",
      timeStyle: "short",
      timeZone: "Europe/Rome"
    }
  ).format(date)
}

function getUserName(user) {
  if (!user) {
    return "Utente non disponibile"
  }

  return (
    `${user.name || ""} ${
      user.surname || ""
    }`.trim() ||
    user.email ||
    "Utente non disponibile"
  )
}

function createRequestId() {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID ===
      "function"
  ) {
    return crypto.randomUUID()
  }

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    .replace(
      /[xy]/g,
      (character) => {
        const randomValue =
          Math.floor(
            Math.random() * 16
          )

        const value =
          character === "x"
            ? randomValue
            : (
                randomValue & 0x3
              ) | 0x8

        return value.toString(16)
      }
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

function ProcessingStatusBadge({
  status
}) {
  const classes = {
    processed:
      "bg-green-400/10 text-green-400",

    pending:
      "bg-yellow-400/10 text-yellow-300",

    failed:
      "bg-red-400/10 text-red-300",

    ignored:
      "bg-gray-400/10 text-gray-300",

    refunded:
      "bg-purple-400/10 text-purple-300",

    legacy:
      "bg-blue-400/10 text-blue-300"
  }

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
        classes[status] ||
        "bg-white/5 text-gray-300"
      }`}
    >
      {getProcessingStatusLabel(status)}
    </span>
  )
}

const refundStatusLabels = {
  pending_stripe:
    "In attesa di Stripe",

  succeeded:
    "Rimborso completato",

  failed:
    "Rimborso fallito",

  cancelled:
    "Rimborso annullato"
}

function getRefundStatusLabel(status) {
  return (
    refundStatusLabels[status] ||
    status ||
    "Stato non disponibile"
  )
}

function RefundStatusBadge({
  status
}) {
  const classes = {
    pending_stripe:
      "bg-yellow-400/10 text-yellow-300",

    succeeded:
      "bg-purple-400/10 text-purple-300",

    failed:
      "bg-red-400/10 text-red-300",

    cancelled:
      "bg-gray-400/10 text-gray-300"
  }

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
        classes[status] ||
        "bg-white/5 text-gray-300"
      }`}
    >
      {getRefundStatusLabel(status)}
    </span>
  )
}

function isRefundActionAvailable(
  payment,
  canRefund
) {
  if (!canRefund || !payment) {
    return false
  }

  const latestRefund =
    payment.latestRefund

  /*
   * Una richiesta pendente può essere ripresa
   * usando lo stesso requestId.
   */
  if (
    latestRefund?.status ===
      "pending_stripe" &&
    latestRefund?.requestId
  ) {
    return true
  }

  /*
   * Un rimborso riuscito è definitivo.
   */
  if (
    latestRefund?.status ===
      "succeeded" ||
    payment.processingStatus ===
      "refunded"
  ) {
    return false
  }

  /*
   * Dopo un tentativo fallito o annullato
   * può essere avviata una nuova richiesta.
   */
  return (
    payment.processingStatus ===
      "processed" &&
    payment.paymentStatus ===
      "paid" &&
    Boolean(
      payment.paymentIntentId
    ) &&
    Number.isSafeInteger(
      Number(payment.amountCents)
    ) &&
    Number(payment.amountCents) > 0 &&
    Number.isInteger(
      Number(payment.credits)
    ) &&
    Number(payment.credits) > 0 &&
    typeof payment.livemode ===
      "boolean"
  )
}

function getRefundActionLabel(payment) {
  if (
    payment?.latestRefund?.status ===
      "pending_stripe"
  ) {
    return "Riprendi rimborso"
  }

  if (
    payment?.latestRefund?.status ===
      "failed" ||
    payment?.latestRefund?.status ===
      "cancelled"
  ) {
    return "Riprova rimborso"
  }

  return "Rimborsa pagamento"
}

function ModeBadge({ livemode }) {
  if (livemode === true) {
    return (
      <span className="inline-flex rounded-full bg-green-400/10 px-3 py-1 text-xs font-bold text-green-400">
        LIVE
      </span>
    )
  }

  if (livemode === false) {
    return (
      <span className="inline-flex rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-bold text-yellow-300">
        TEST
      </span>
    )
  }

  return (
    <span className="inline-flex rounded-full bg-white/5 px-3 py-1 text-xs font-bold text-gray-400">
      NON NOTA
    </span>
  )
}

function DetailBox({
  label,
  value,
  mono = false,
  className = ""
}) {
  return (
    <div
      className={`rounded-xl bg-white/[0.03] p-4 ${className}`}
    >
      <p className="text-xs uppercase tracking-wide text-gray-500">
        {label}
      </p>

      <p
        className={`mt-2 break-all ${
          mono
            ? "font-mono text-xs leading-6 text-gray-300"
            : "text-sm text-gray-200"
        }`}
      >
        {value || "Non disponibile"}
      </p>
    </div>
  )
}

export default function PaymentsManagementClient() {
  const [payments, setPayments] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  const [
    selectedPayment,
    setSelectedPayment
  ] = useState(null)

  const [canRefund, setCanRefund] =
  useState(false)

  const [
  refundPayment,
  setRefundPayment
] = useState(null)

const [
  refundReason,
  setRefundReason
] = useState("")

const [
  refundConfirmation,
  setRefundConfirmation
] = useState("")

const [
  refundRequestId,
  setRefundRequestId
] = useState("")

const [
  refunding,
  setRefunding
] = useState(false)

  const [
    searchInput,
    setSearchInput
  ] = useState("")

  const [
    appliedSearch,
    setAppliedSearch
  ] = useState("")

  const [
    statusFilter,
    setStatusFilter
  ] = useState("all")

  const [
    modeFilter,
    setModeFilter
  ] = useState("all")

  const [page, setPage] =
    useState(1)

  const [summary, setSummary] =
    useState({
      totalCount: 0,
      processedCount: 0,
      failedCount: 0,
      pendingCount: 0,
      legacyCount: 0,
      refundedCount: 0,
      testCount: 0,
      liveCount: 0,
      grossAmountCents: 0,
      creditsSold: 0
    })

  const [
    pagination,
    setPagination
  ] = useState({
    page: 1,
    pageSize: 30,
    total: 0,
    totalPages: 1
  })

  const loadPayments =
    useCallback(async () => {
      try {
        setLoading(true)

        const searchParams =
          new URLSearchParams({
            page: String(page),
            status: statusFilter,
            mode: modeFilter
          })

        if (appliedSearch) {
          searchParams.set(
            "search",
            appliedSearch
          )
        }

        const response = await fetch(
          `/api/admin/payments?${searchParams.toString()}`,
          {
            method: "GET",
            cache: "no-store"
          }
        )

        const data =
          await response.json()

        if (!response.ok) {
          toast.error(
            data.error ||
              "Impossibile caricare i pagamenti."
          )

          setCanRefund(false)

          return
        }

        setPayments(
          data.payments || []
        )

        setCanRefund(
  Boolean(
    data.permissions?.canRefund
  )
)

        setSummary(
          data.summary || {
            totalCount: 0,
            processedCount: 0,
            failedCount: 0,
            pendingCount: 0,
            legacyCount: 0,
            refundedCount: 0,
            testCount: 0,
            liveCount: 0,
            grossAmountCents: 0,
            creditsSold: 0
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
          "Errore caricamento pagamenti:",
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
      modeFilter,
      appliedSearch
    ])

  useEffect(() => {
    loadPayments()
  }, [loadPayments])

  const applySearch = (event) => {
    event.preventDefault()

    setPage(1)

    setAppliedSearch(
      searchInput.trim()
    )
  }

  const resetFilters = () => {
    setSearchInput("")
    setAppliedSearch("")
    setStatusFilter("all")
    setModeFilter("all")
    setPage(1)
  }

  const openRefundModal = (payment) => {
  if (
    !canRefund ||
    !payment ||
    refunding
  ) {
    return
  }

  const existingRefund =
    payment.latestRefund

  const canResume =
    existingRefund?.status ===
      "pending_stripe" &&
    existingRefund?.requestId

  setRefundPayment(payment)
  setRefundConfirmation("")

  setRefundReason(
    canResume
      ? existingRefund.reason || ""
      : ""
  )

  setRefundRequestId(
    canResume
      ? existingRefund.requestId
      : createRequestId()
  )
}

const closeRefundModal = () => {
  if (refunding) {
    return
  }

  setRefundPayment(null)
  setRefundReason("")
  setRefundConfirmation("")
  setRefundRequestId("")
}

const submitRefund = async () => {
  if (
    !canRefund ||
    !refundPayment ||
    refunding
  ) {
    return
  }

  const normalizedReason =
    refundReason.trim()

  if (
    normalizedReason.length < 10 ||
    normalizedReason.length > 500
  ) {
    toast.error(
      "La motivazione deve contenere da 10 a 500 caratteri."
    )

    return
  }

  if (
  refundConfirmation
    .trim()
    .toUpperCase() !==
  "RIMBORSA"
) {
  toast.error(
    "Scrivi RIMBORSA per confermare l’operazione."
  )

  return
}

  if (!refundRequestId) {
    toast.error(
      "Identificativo della richiesta non disponibile."
    )

    return
  }

  try {
    setRefunding(true)

    const response = await fetch(
      "/api/admin/payments/refund",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          paymentId:
            refundPayment.id,

          requestId:
            refundRequestId,

          reason:
            normalizedReason
        })
      }
    )

    const data =
      await response.json()

    if (!response.ok) {
      toast.error(
        data.error ||
          "Impossibile completare il rimborso."
      )

      /*
       * L'esito Stripe potrebbe essere incerto.
       * Aggiorna il registro senza creare
       * una seconda richiesta.
       */
      if (data.refundPending) {
  setRefundPayment(null)
  setRefundReason("")
  setRefundConfirmation("")
  setRefundRequestId("")
  setSelectedPayment(null)

  await loadPayments()
}

      return
    }

    toast.success(
      data.message ||
        (
          data.pending
            ? "Rimborso in attesa di conferma Stripe."
            : "Pagamento rimborsato correttamente."
        )
    )

    setRefundPayment(null)
setRefundReason("")
setRefundConfirmation("")
setRefundRequestId("")
setSelectedPayment(null)

    await loadPayments()
  } catch (error) {
    console.error(
      "Errore richiesta rimborso:",
      error
    )

    toast.error(
      "Errore imprevisto durante il rimborso."
    )
  } finally {
    setRefunding(false)
  }
}

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          label="Incasso elaborato"
          value={formatCurrency(
            summary.grossAmountCents,
            "eur"
          )}
          description="Totale dei pagamenti elaborati correttamente."
          className="border-green-400/20 bg-green-400/5"
        />

        <SummaryCard
          label="Pagamenti"
          value={formatNumber(
            summary.totalCount
          )}
          description={`${formatNumber(
            summary.processedCount
          )} elaborati correttamente.`}
        />

        <SummaryCard
          label="Crediti venduti"
          value={formatNumber(
            summary.creditsSold
          )}
          description="Crediti accreditati tramite acquisti Stripe."
          className="border-yellow-400/20 bg-yellow-400/5"
        />

        <SummaryCard
          label="Problemi"
          value={formatNumber(
            summary.failedCount +
              summary.pendingCount
          )}
          description={`${formatNumber(
            summary.failedCount
          )} falliti e ${formatNumber(
            summary.pendingCount
          )} in attesa.`}
          className="border-red-400/20 bg-red-400/5"
        />
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-white/10 bg-[#0B1028] p-4">
          <p className="text-xs uppercase text-gray-500">
            Modalità test
          </p>

          <p className="mt-2 text-xl font-bold text-yellow-300">
            {formatNumber(
              summary.testCount
            )}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#0B1028] p-4">
          <p className="text-xs uppercase text-gray-500">
            Modalità live
          </p>

          <p className="mt-2 text-xl font-bold text-green-400">
            {formatNumber(
              summary.liveCount
            )}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#0B1028] p-4">
          <p className="text-xs uppercase text-gray-500">
            Storici
          </p>

          <p className="mt-2 text-xl font-bold text-blue-300">
            {formatNumber(
              summary.legacyCount
            )}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#0B1028] p-4">
          <p className="text-xs uppercase text-gray-500">
            Rimborsati
          </p>

          <p className="mt-2 text-xl font-bold text-purple-300">
            {formatNumber(
              summary.refundedCount
            )}
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#0B1028] p-5 sm:p-6">
        <form
          onSubmit={applySearch}
          className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_220px_180px_auto]"
        >
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Cerca pagamento
            </label>

            <input
              value={searchInput}
              onChange={(event) =>
                setSearchInput(
                  event.target.value
                )
              }
              placeholder="Email, utente, sessione, evento o pacchetto"
              maxLength={120}
              className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-green-400/50"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Stato elaborazione
            </label>

            <select
              value={statusFilter}
              onChange={(event) => {
                setStatusFilter(
                  event.target.value
                )

                setPage(1)
              }}
              className="w-full rounded-xl border border-white/10 bg-[#111735] p-3 outline-none"
            >
              <option value="all">
                Tutti gli stati
              </option>

              <option value="processed">
                Elaborati
              </option>

              <option value="pending">
                In attesa
              </option>

              <option value="failed">
                Falliti
              </option>

              <option value="ignored">
                Ignorati
              </option>

              <option value="refunded">
                Rimborsati
              </option>

              <option value="legacy">
                Storici
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Modalità Stripe
            </label>

            <select
              value={modeFilter}
              onChange={(event) => {
                setModeFilter(
                  event.target.value
                )

                setPage(1)
              }}
              className="w-full rounded-xl border border-white/10 bg-[#111735] p-3 outline-none"
            >
              <option value="all">
                Tutte
              </option>

              <option value="test">
                Test
              </option>

              <option value="live">
                Live
              </option>

              <option value="unknown">
                Non nota
              </option>
            </select>
          </div>

          <div className="flex items-end gap-2">
            <button
              type="submit"
              className="rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400"
            >
              Cerca
            </button>

            <button
              type="button"
              onClick={resetFilters}
              className="rounded-xl border border-white/10 px-4 py-3 text-sm transition hover:bg-white/10"
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
              Registro pagamenti
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              {pagination.total} pagamenti trovati
            </p>
          </div>

          <button
            type="button"
            onClick={loadPayments}
            disabled={loading}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10 disabled:opacity-50"
          >
            Aggiorna
          </button>
        </div>

        {loading ? (
          <div className="p-8 text-center text-sm text-gray-400">
            Caricamento pagamenti...
          </div>
        ) : payments.length === 0 ? (
          <div className="p-8 text-center">
            <p className="font-semibold">
              Nessun pagamento trovato
            </p>

            <p className="mt-2 text-sm text-gray-400">
              I pagamenti Stripe compariranno qui
              dopo l’elaborazione del webhook.
            </p>
          </div>
        ) : (
          <>
            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full min-w-[1200px]">
                <thead className="border-b border-white/10 bg-white/[0.02]">
                  <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-5 py-4">
                      Utente
                    </th>

                    <th className="px-5 py-4">
                      Pacchetto
                    </th>

                    <th className="px-5 py-4">
                      Importo
                    </th>

                    <th className="px-5 py-4">
                      Crediti
                    </th>

                    <th className="px-5 py-4">
                      Stato
                    </th>

                    <th className="px-5 py-4">
                      Modalità
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
                  {payments.map(
                    (payment) => (
                      <tr
                        key={payment.id}
                        className="hover:bg-white/[0.03]"
                      >
                        <td className="px-5 py-4">
                          <p className="font-semibold">
                            {getUserName(
                              payment.user
                            )}
                          </p>

                          <p className="mt-1 text-sm text-gray-400">
                            {payment.user
                              ?.email ||
                              "Email non disponibile"}
                          </p>
                        </td>

                        <td className="px-5 py-4">
                          <p className="font-semibold">
                            {payment.package
                              ?.name ||
                              payment.packageId ||
                              "Pacchetto non disponibile"}
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
                            {payment.packageId ||
                              "Nessun identificativo"}
                          </p>
                        </td>

                        <td className="px-5 py-4 font-semibold">
                          {formatCurrency(
                            payment.amountCents,
                            payment.currency
                          )}
                        </td>

                        <td className="px-5 py-4 font-bold text-yellow-300">
                          {payment.credits ===
                          null
                            ? "—"
                            : `+${formatNumber(
                                payment.credits
                              )}`}
                        </td>

                        <td className="px-5 py-4">
                          <ProcessingStatusBadge
                            status={
                              payment.processingStatus
                            }
                          />
                        </td>

                        <td className="px-5 py-4">
                          <ModeBadge
                            livemode={
                              payment.livemode
                            }
                          />
                        </td>

                        <td className="px-5 py-4 text-sm text-gray-400">
                          {formatDate(
                            payment.createdAt
                          )}
                        </td>

                        <td className="px-5 py-4 text-right">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedPayment(
                                payment
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
              {payments.map(
                (payment) => (
                  <div
                    key={payment.id}
                    className="p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">
                          {getUserName(
                            payment.user
                          )}
                        </p>

                        <p className="mt-1 break-all text-sm text-gray-400">
                          {payment.user
                            ?.email ||
                            "Email non disponibile"}
                        </p>
                      </div>

                      <ModeBadge
                        livemode={
                          payment.livemode
                        }
                      />
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500">
                          Importo
                        </p>

                        <p className="mt-1 font-semibold">
                          {formatCurrency(
                            payment.amountCents,
                            payment.currency
                          )}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500">
                          Crediti
                        </p>

                        <p className="mt-1 font-semibold text-yellow-300">
                          {payment.credits ===
                          null
                            ? "—"
                            : `+${formatNumber(
                                payment.credits
                              )}`}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500">
                          Stato
                        </p>

                        <div className="mt-2">
                          <ProcessingStatusBadge
                            status={
                              payment.processingStatus
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-500">
                          Data
                        </p>

                        <p className="mt-1">
                          {formatDate(
                            payment.createdAt
                          )}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedPayment(
                          payment
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
                  Math.max(
                    1,
                    current - 1
                  )
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

      {selectedPayment && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
          <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0B1028] p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                  Pagamento Stripe
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  {formatCurrency(
                    selectedPayment.amountCents,
                    selectedPayment.currency
                  )}
                </h2>

                <div className="mt-3 flex flex-wrap gap-2">
                  <ProcessingStatusBadge
                    status={
                      selectedPayment.processingStatus
                    }
                  />

                  <ModeBadge
                    livemode={
                      selectedPayment.livemode
                    }
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedPayment(null)
                }
                className="rounded-lg border border-white/10 px-3 py-2 text-sm transition hover:bg-white/10"
              >
                Chiudi
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <DetailBox
                label="Utente"
                value={getUserName(
                  selectedPayment.user
                )}
              />

              <DetailBox
                label="Email"
                value={
                  selectedPayment.user
                    ?.email
                }
              />

              <DetailBox
                label="Pacchetto"
                value={
                  selectedPayment.package
                    ?.name ||
                  selectedPayment.packageId
                }
              />

              <DetailBox
                label="Crediti accreditati"
                value={
                  selectedPayment.credits ===
                  null
                    ? "Non disponibili"
                    : formatNumber(
                        selectedPayment.credits
                      )
                }
              />

              <DetailBox
                label="Stato pagamento Stripe"
                value={
                  selectedPayment.paymentStatus
                }
              />

              <DetailBox
                label="Data elaborazione"
                value={formatDate(
                  selectedPayment.processedAt
                )}
              />

              <DetailBox
                label="Checkout Session"
                value={
                  selectedPayment.checkoutSessionId
                }
                mono
                className="sm:col-span-2"
              />

              <DetailBox
                label="Payment Intent"
                value={
                  selectedPayment.paymentIntentId
                }
                mono
                className="sm:col-span-2"
              />

              <DetailBox
                label="Evento Stripe"
                value={
                  selectedPayment.stripeEventId
                }
                mono
                className="sm:col-span-2"
              />

              <DetailBox
                label="Identificativo pagamento"
                value={
                  selectedPayment.id
                }
                mono
                className="sm:col-span-2"
              />
            </div>

            {selectedPayment.failureMessage && (
              <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/5 p-4">
                <p className="text-xs uppercase text-red-300">
                  Errore elaborazione
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-300">
                  {
                    selectedPayment.failureMessage
                  }
                </p>
              </div>
            )}

                        <section className="mt-6 rounded-xl border border-white/10 p-4">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Gestione rimborso
                  </p>

                  <h3 className="mt-2 text-lg font-bold">
                    Rimborso totale Stripe
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                    Il rimborso restituisce l’intero importo
                    del pagamento e rimuove tutti i crediti
                    acquistati con questo pacchetto.
                  </p>
                </div>

                {selectedPayment.latestRefund && (
                  <RefundStatusBadge
                    status={
                      selectedPayment
                        .latestRefund
                        .status
                    }
                  />
                )}
              </div>

              {selectedPayment.latestRefund ? (
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <DetailBox
                    label="Stato richiesta"
                    value={getRefundStatusLabel(
                      selectedPayment
                        .latestRefund
                        .status
                    )}
                  />

                  <DetailBox
                    label="Stato Stripe"
                    value={
                      selectedPayment
                        .latestRefund
                        .stripeStatus
                    }
                  />

                  <DetailBox
                    label="Importo rimborso"
                    value={formatCurrency(
                      selectedPayment
                        .latestRefund
                        .amountCents,
                      selectedPayment
                        .latestRefund
                        .currency
                    )}
                  />

                  <DetailBox
                    label="Crediti stornati"
                    value={formatNumber(
                      selectedPayment
                        .latestRefund
                        .creditsReversed
                    )}
                  />

                  <DetailBox
                    label="Creata il"
                    value={formatDate(
                      selectedPayment
                        .latestRefund
                        .createdAt
                    )}
                  />

                  <DetailBox
                    label="Completata il"
                    value={
                      selectedPayment
                        .latestRefund
                        .completedAt
                        ? formatDate(
                            selectedPayment
                              .latestRefund
                              .completedAt
                          )
                        : "Non completata"
                    }
                  />

                  <DetailBox
                    label="Refund ID Stripe"
                    value={
                      selectedPayment
                        .latestRefund
                        .stripeRefundId
                    }
                    mono
                    className="sm:col-span-2"
                  />

                  <DetailBox
                    label="Motivazione"
                    value={
                      selectedPayment
                        .latestRefund
                        .reason
                    }
                    className="sm:col-span-2"
                  />
                </div>
              ) : (
                <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-gray-400">
                  Non è stata ancora avviata alcuna
                  richiesta di rimborso per questo pagamento.
                </div>
              )}

              {selectedPayment.latestRefund
                ?.failureMessage && (
                <div className="mt-4 rounded-xl border border-red-400/20 bg-red-400/5 p-4">
                  <p className="text-xs uppercase text-red-300">
                    Errore rimborso
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    {
                      selectedPayment
                        .latestRefund
                        .failureMessage
                    }
                  </p>
                </div>
              )}

              {isRefundActionAvailable(
                selectedPayment,
                canRefund
              ) && (
                <button
                  type="button"
                  onClick={() =>
                    openRefundModal(
                      selectedPayment
                    )
                  }
                  disabled={refunding}
                  className="mt-5 w-full rounded-xl bg-red-500 px-5 py-3 font-bold text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {getRefundActionLabel(
                    selectedPayment
                  )}
                </button>
              )}

              {!canRefund &&
                selectedPayment
                  .processingStatus ===
                  "processed" && (
                  <p className="mt-4 text-sm text-gray-500">
                    Non possiedi il permesso necessario
                    per effettuare rimborsi.
                  </p>
                )}

              {selectedPayment
                .processingStatus ===
                "refunded" && (
                <p className="mt-4 rounded-xl border border-purple-400/20 bg-purple-400/5 p-4 text-sm text-purple-300">
                  Questo pagamento è già stato
                  rimborsato definitivamente.
                </p>
              )}
            </section>

            {selectedPayment.latestEvent && (
              <section className="mt-6 rounded-xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Ultimo evento collegato
                </p>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <DetailBox
                    label="Tipo evento"
                    value={
                      selectedPayment
                        .latestEvent
                        .eventType
                    }
                  />

                  <DetailBox
                    label="Stato evento"
                    value={
                      selectedPayment
                        .latestEvent
                        .processingStatus
                    }
                  />

                  <DetailBox
                    label="Event ID"
                    value={
                      selectedPayment
                        .latestEvent
                        .eventId
                    }
                    mono
                    className="sm:col-span-2"
                  />

                  <DetailBox
                    label="Ricevuto"
                    value={formatDate(
                      selectedPayment
                        .latestEvent
                        .receivedAt
                    )}
                  />

                  <DetailBox
                    label="Elaborato"
                    value={formatDate(
                      selectedPayment
                        .latestEvent
                        .processedAt
                    )}
                  />
                </div>
              </section>
            )}

            <section className="mt-6 rounded-xl border border-white/10 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Metadata
              </p>

              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words text-xs leading-6 text-gray-300">
                {JSON.stringify(
                  selectedPayment.metadata,
                  null,
                  2
                )}
              </pre>
            </section>
          </div>
        </div>
      )}

      {refundPayment && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-red-400/20 bg-[#0B1028] p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
                  Operazione irreversibile
                </p>

                <h2 className="mt-3 text-2xl font-black">
                  {refundPayment.latestRefund
                    ?.status ===
                    "pending_stripe"
                    ? "Riprendi il rimborso"
                    : "Rimborsa il pagamento"}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Verrà richiesto a Stripe il rimborso
                  totale del pagamento. Tutti i crediti
                  acquistati con questo pagamento verranno
                  sottratti dal saldo dell’utente.
                </p>
              </div>

              <button
                type="button"
                onClick={closeRefundModal}
                disabled={refunding}
                className="rounded-lg border border-white/10 px-3 py-2 text-sm transition hover:bg-white/10 disabled:opacity-50"
              >
                Chiudi
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <DetailBox
                label="Utente"
                value={getUserName(
                  refundPayment.user
                )}
              />

              <DetailBox
                label="Email"
                value={
                  refundPayment.user?.email
                }
              />

              <DetailBox
                label="Importo da rimborsare"
                value={formatCurrency(
                  refundPayment.amountCents,
                  refundPayment.currency
                )}
              />

              <DetailBox
                label="Crediti da stornare"
                value={formatNumber(
                  refundPayment.credits
                )}
              />

              <DetailBox
                label="Modalità Stripe"
                value={
                  refundPayment.livemode
                    ? "LIVE"
                    : "TEST"
                }
              />

              <DetailBox
                label="Pacchetto"
                value={
                  refundPayment.package?.name ||
                  refundPayment.packageId
                }
              />

              <DetailBox
                label="Payment Intent"
                value={
                  refundPayment.paymentIntentId
                }
                mono
                className="sm:col-span-2"
              />

              <DetailBox
                label="Identificativo richiesta"
                value={refundRequestId}
                mono
                className="sm:col-span-2"
              />
            </div>

            {refundPayment.latestRefund
              ?.status ===
              "pending_stripe" && (
              <div className="mt-5 rounded-xl border border-yellow-400/30 bg-yellow-400/5 p-4">
                <p className="font-bold text-yellow-300">
                  Richiesta Stripe già avviata
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Verrà riutilizzato lo stesso identificativo
                  della richiesta. Non verrà creato un secondo
                  rimborso intenzionale.
                </p>

                {refundPayment.latestRefund
                  .stripeRefundId && (
                  <p className="mt-3 break-all font-mono text-xs text-gray-400">
                    {
                      refundPayment.latestRefund
                        .stripeRefundId
                    }
                  </p>
                )}
              </div>
            )}

            <div className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Motivazione amministrativa
              </label>

              <textarea
                value={refundReason}
                onChange={(event) =>
                  setRefundReason(
                    event.target.value.slice(
                      0,
                      500
                    )
                  )
                }
                disabled={refunding}
                minLength={10}
                maxLength={500}
                required
                placeholder="Spiega il motivo del rimborso..."
                className="h-28 w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-red-400/50 disabled:opacity-60"
              />

              <div className="mt-2 flex justify-between gap-4 text-xs text-gray-500">
                <span>
                  Da 10 a 500 caratteri
                </span>

                <span>
                  {refundReason.length}/500
                </span>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/5 p-4">
              <label className="block text-sm font-semibold text-red-200">
                Scrivi RIMBORSA per confermare
              </label>

              <input
                value={refundConfirmation}
                onChange={(event) =>
                  setRefundConfirmation(
                    event.target.value.slice(
                      0,
                      20
                    )
                  )
                }
                disabled={refunding}
                autoComplete="off"
                placeholder="RIMBORSA"
                className="mt-3 w-full rounded-xl border border-red-400/20 bg-black/20 p-3 font-mono uppercase outline-none focus:border-red-400/60 disabled:opacity-60"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={submitRefund}
                disabled={
                  refunding ||
                  refundReason.trim().length <
                    10 ||
                  refundConfirmation
                    .trim()
                    .toUpperCase() !==
                    "RIMBORSA"
                }
                className="flex-1 rounded-xl bg-red-500 px-5 py-3 font-bold text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {refunding
                  ? "Elaborazione rimborso..."
                  : refundPayment.latestRefund
                        ?.status ===
                      "pending_stripe"
                    ? "Riprendi richiesta Stripe"
                    : "Conferma rimborso totale"}
              </button>

              <button
                type="button"
                onClick={closeRefundModal}
                disabled={refunding}
                className="rounded-xl border border-white/10 px-5 py-3 font-semibold transition hover:bg-white/10 disabled:opacity-50"
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