"use client"

import {
  useCallback,
  useEffect,
  useState
} from "react"

import {
  BadgeCheck,
  Clock3,
  ExternalLink,
  FileText,
  Loader2,
  RefreshCcw,
  ShieldCheck,
  X,
  XCircle
} from "lucide-react"

import { toast } from "sonner"

const STATUS_OPTIONS = [
  {
    value: "pending",
    label: "In attesa"
  },
  {
    value: "approved",
    label: "Approvate"
  },
  {
    value: "rejected",
    label: "Rifiutate"
  },
  {
    value: "all",
    label: "Tutte"
  }
]

const CERTIFICATION_OPTIONS = [
  {
    value: "a1a3",
    label: "A1/A3"
  },
  {
    value: "a2",
    label: "A2"
  },
  {
    value: "sts",
    label: "STS"
  },
  {
    value: "sts01",
    label: "STS-01"
  },
  {
    value: "sts02",
    label: "STS-02"
  },
  {
    value: "specific",
    label: "SPECIFIC"
  },
  {
    value: "open",
    label: "OPEN"
  },
  {
    value: "cro",
    label: "CRO"
  },
  {
    value: "luc",
    label: "LUC"
  },
  {
    value: "bvlos",
    label: "BVLOS"
  },
  {
    value: "notturno",
    label: "NOTTURNO"
  },
  {
    value: "termografia",
    label: "TERMOGRAFIA"
  },
  {
    value: "fpv_racing",
    label: "FPV RACING"
  },
  {
    value: "enac",
    label: "ENAC generica"
  }
]

function formatDateTime(value) {
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

function formatFileSize(value) {
  const bytes = Number(value || 0)

  if (
    !Number.isFinite(bytes) ||
    bytes <= 0
  ) {
    return "Dimensione non disponibile"
  }

  if (bytes < 1024) {
    return `${bytes} B`
  }

  if (bytes < 1024 * 1024) {
    return `${(
      bytes / 1024
    ).toFixed(1)} KB`
  }

  return `${(
    bytes /
    (1024 * 1024)
  ).toFixed(1)} MB`
}

function getPilotName(pilot) {
  const fullName = [
    pilot?.name,
    pilot?.surname
  ]
    .filter(Boolean)
    .join(" ")
    .trim()

  return (
    fullName ||
    pilot?.email ||
    "Pilota non disponibile"
  )
}

function getStatusLabel(status) {
  if (status === "approved") {
    return "Approvata"
  }

  if (status === "rejected") {
    return "Rifiutata"
  }

  return "In attesa"
}

function getStatusClasses(status) {
  if (status === "approved") {
    return (
      "border-green-400/20 " +
      "bg-green-500/10 " +
      "text-green-300"
    )
  }

  if (status === "rejected") {
    return (
      "border-red-400/20 " +
      "bg-red-500/10 " +
      "text-red-300"
    )
  }

  return (
    "border-yellow-400/20 " +
    "bg-yellow-500/10 " +
    "text-yellow-300"
  )
}

function getCertificationLabel(value) {
  return (
    CERTIFICATION_OPTIONS.find(
      (item) => item.value === value
    )?.label ||
    value
  )
}

export default function CertificationsManagementClient({
  canReview
}) {
  const [requests, setRequests] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  const [refreshing, setRefreshing] =
    useState(false)

  const [statusFilter, setStatusFilter] =
    useState("pending")

  const [page, setPage] =
    useState(1)

  const [pagination, setPagination] =
    useState({
      page: 1,
      pageSize: 20,
      total: 0,
      totalPages: 1
    })

  const [selectedRequest, setSelectedRequest] =
    useState(null)

  const [
    selectedCertifications,
    setSelectedCertifications
  ] = useState([])

  const [reviewNotes, setReviewNotes] =
    useState("")

  const [
    rejectionReason,
    setRejectionReason
  ] = useState("")

  const [submitting, setSubmitting] =
    useState(false)

  const loadRequests = useCallback(
    async ({
      showMainLoader = true
    } = {}) => {
      try {
        if (showMainLoader) {
          setLoading(true)
        } else {
          setRefreshing(true)
        }

        const searchParams =
          new URLSearchParams({
            page: String(page),
            status: statusFilter
          })

        const response = await fetch(
          `/api/admin/certifications?${searchParams.toString()}`,
          {
            method: "GET",
            cache: "no-store"
          }
        )

        let result = null

        try {
          result = await response.json()
        } catch {
          result = null
        }

        if (!response.ok) {
          throw new Error(
            result?.error ||
              "Impossibile caricare le certificazioni."
          )
        }

        setRequests(
          Array.isArray(result?.requests)
            ? result.requests
            : []
        )

        setPagination(
          result?.pagination || {
            page,
            pageSize: 20,
            total: 0,
            totalPages: 1
          }
        )
      } catch (error) {
        console.error(
          "[admin-certifications] load failed:",
          error
        )

        setRequests([])

        toast.error(
          error instanceof Error
            ? error.message
            : "Errore durante il caricamento."
        )
      } finally {
        setLoading(false)
        setRefreshing(false)
      }
    },
    [
      page,
      statusFilter
    ]
  )

  useEffect(() => {
    loadRequests()
  }, [loadRequests])

  const changeStatusFilter = (
    newStatus
  ) => {
    setPage(1)
    setStatusFilter(newStatus)
  }

  const openRequest = (request) => {
    setSelectedRequest(request)

    setSelectedCertifications(
      Array.isArray(
        request.approvedCertifications
      )
        ? request.approvedCertifications
        : []
    )

    setReviewNotes(
      request.reviewNotes || ""
    )

    setRejectionReason(
      request.rejectionReason || ""
    )
  }

  const closeRequest = () => {
    if (submitting) {
      return
    }

    setSelectedRequest(null)
    setSelectedCertifications([])
    setReviewNotes("")
    setRejectionReason("")
  }

  const toggleCertification = (
    certification
  ) => {
    setSelectedCertifications(
      (current) => {
        if (
          current.includes(
            certification
          )
        ) {
          return current.filter(
            (item) =>
              item !== certification
          )
        }

        return [
          ...current,
          certification
        ]
      }
    )
  }

  const submitReview = async (
    decision
  ) => {
    if (
      !selectedRequest ||
      submitting
    ) {
      return
    }

    if (
      selectedRequest.status !==
      "pending"
    ) {
      toast.error(
        "Questa richiesta è già stata revisionata."
      )
      return
    }

    if (!canReview) {
      toast.error(
        "Non hai il permesso di revisionare certificazioni."
      )
      return
    }

    if (
      decision === "approved" &&
      selectedCertifications.length === 0
    ) {
      toast.error(
        "Seleziona almeno una certificazione."
      )
      return
    }

    const normalizedRejectionReason =
      rejectionReason.trim()

    if (
      decision === "rejected" &&
      (
        normalizedRejectionReason.length <
          5 ||
        normalizedRejectionReason.length >
          1000
      )
    ) {
      toast.error(
        "La motivazione del rifiuto deve contenere da 5 a 1000 caratteri."
      )
      return
    }

    try {
      setSubmitting(true)

      const response = await fetch(
        "/api/admin/certifications",
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            requestId:
              selectedRequest.id,

            decision,

            approvedCertifications:
              decision === "approved"
                ? selectedCertifications
                : [],

            reviewNotes:
              reviewNotes.trim(),

            rejectionReason:
              decision === "rejected"
                ? normalizedRejectionReason
                : ""
          })
        }
      )

      let result = null

      try {
        result = await response.json()
      } catch {
        result = null
      }

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "Non è stato possibile completare la revisione."
        )
      }

      toast.success(
        result?.message ||
          (
            decision === "approved"
              ? "Certificazione approvata."
              : "Certificazione rifiutata."
          )
      )

      closeRequest()

      await loadRequests({
        showMainLoader: false
      })
    } catch (error) {
      console.error(
        "[admin-certifications] review failed:",
        error
      )

      toast.error(
        error instanceof Error
          ? error.message
          : "Errore durante la revisione."
      )
    } finally {
      setSubmitting(false)
    }
  }

  const previousPage = () => {
    setPage((currentPage) =>
      Math.max(
        1,
        currentPage - 1
      )
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

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-[#0B1028] p-6 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-green-400">
              Verifica piloti
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Certificazioni
            </h1>

            <p className="mt-3 max-w-3xl leading-7 text-gray-400">
              Controlla i documenti inviati dai piloti,
              seleziona le certificazioni riconosciute
              e approva oppure rifiuta la richiesta.
            </p>
          </div>

          <button
            type="button"
            disabled={
              loading ||
              refreshing
            }
            onClick={() =>
              loadRequests({
                showMainLoader: false
              })
            }
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RefreshCcw
              size={17}
              className={
                refreshing
                  ? "animate-spin"
                  : ""
              }
            />

            Aggiorna
          </button>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-[#0B1028] p-4 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {STATUS_OPTIONS.map(
            (option) => (
              <button
                key={option.value}
                type="button"
                onClick={() =>
                  changeStatusFilter(
                    option.value
                  )
                }
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  statusFilter ===
                  option.value
                    ? "bg-green-500 text-black"
                    : "border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >
                {option.label}
              </button>
            )
          )}
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Totale risultati:{" "}
          {pagination.total}
        </p>
      </section>

      {loading ? (
        <div className="flex min-h-72 items-center justify-center rounded-3xl border border-white/10 bg-[#0B1028]">
          <div className="text-center">
            <Loader2
              size={34}
              className="mx-auto animate-spin text-green-400"
            />

            <p className="mt-4 text-sm text-gray-400">
              Caricamento certificazioni...
            </p>
          </div>
        </div>
      ) : requests.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-[#0B1028] px-6 py-16 text-center">
          <ShieldCheck
            size={42}
            className="mx-auto text-green-400"
          />

          <h2 className="mt-5 text-xl font-bold">
            Nessuna richiesta trovata
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Non sono presenti certificazioni con
            questo stato.
          </p>
        </div>
      ) : (
        <section className="grid gap-5 xl:grid-cols-2">
          {requests.map(
            (request) => (
              <article
                key={request.id}
                className="rounded-3xl border border-white/10 bg-[#0B1028] p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h2 className="truncate text-xl font-bold">
                      {getPilotName(
                        request.pilot
                      )}
                    </h2>

                    <p className="mt-1 break-all text-sm text-gray-400">
                      {request.pilot?.email ||
                        "Email non disponibile"}
                    </p>
                  </div>

                  <span
                    className={`w-fit rounded-full border px-3 py-1.5 text-xs font-semibold ${getStatusClasses(
                      request.status
                    )}`}
                  >
                    {getStatusLabel(
                      request.status
                    )}
                  </span>
                </div>

                <div className="mt-5 space-y-4 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Certificazioni dichiarate
                    </p>

                    <p className="mt-2 leading-6 text-gray-200">
                      {request.declaredCertifications ||
                        "Nessuna certificazione dichiarata"}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs text-gray-500">
                        Documento
                      </p>

                      <p className="mt-2 break-all font-semibold text-white">
                        {request.originalFilename}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {formatFileSize(
                          request.fileSize
                        )}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs text-gray-500">
                        Inviata
                      </p>

                      <p className="mt-2 font-semibold text-white">
                        {formatDateTime(
                          request.createdAt
                        )}
                      </p>
                    </div>
                  </div>

                  {request.status ===
                    "approved" && (
                    <div className="rounded-2xl border border-green-400/20 bg-green-500/10 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                        Certificazioni approvate
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {request
                          .approvedCertifications
                          ?.map(
                            (
                              certification
                            ) => (
                              <span
                                key={
                                  certification
                                }
                                className="rounded-full bg-green-400/10 px-3 py-1.5 text-xs font-semibold text-green-200"
                              >
                                {getCertificationLabel(
                                  certification
                                )}
                              </span>
                            )
                          )}
                      </div>
                    </div>
                  )}

                  {request.status ===
                    "rejected" && (
                    <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
                        Motivazione rifiuto
                      </p>

                      <p className="mt-2 leading-6 text-red-100">
                        {request.rejectionReason ||
                          "Motivazione non disponibile"}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  {request.documentUrl ? (
                    <a
                      href={
                        request.documentUrl
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold transition hover:bg-white/10"
                    >
                      <ExternalLink
                        size={16}
                      />

                      Apri documento
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-500"
                    >
                      <FileText
                        size={16}
                      />

                      Documento non disponibile
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      openRequest(request)
                    }
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-bold text-black transition hover:bg-green-400"
                  >
                    {request.status ===
                    "pending"
                      ? "Revisiona"
                      : "Vedi dettagli"}
                  </button>
                </div>
              </article>
            )
          )}
        </section>
      )}

      {!loading &&
        pagination.totalPages > 1 && (
          <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-[#0B1028] p-4">
            <button
              type="button"
              disabled={page <= 1}
              onClick={previousPage}
              className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Pagina precedente
            </button>

            <p className="text-sm text-gray-400">
              Pagina {page} di{" "}
              {pagination.totalPages}
            </p>

            <button
              type="button"
              disabled={
                page >=
                pagination.totalPages
              }
              onClick={nextPage}
              className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Pagina successiva
            </button>
          </div>
        )}

      {selectedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0B1028] shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0B1028] p-5 sm:p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                  Richiesta certificazione
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  {getPilotName(
                    selectedRequest.pilot
                  )}
                </h2>
              </div>

              <button
                type="button"
                disabled={submitting}
                onClick={closeRequest}
                className="rounded-xl p-2 text-gray-400 transition hover:bg-white/10 hover:text-white disabled:opacity-50"
              >
                <X size={22} />
              </button>
            </div>

            <div className="space-y-6 p-5 sm:p-7">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                    Pilota
                  </p>

                  <p className="mt-3 font-semibold">
                    {getPilotName(
                      selectedRequest.pilot
                    )}
                  </p>

                  <p className="mt-1 break-all text-sm text-gray-400">
                    {selectedRequest.pilot
                      ?.email ||
                      "Email non disponibile"}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                    Stato
                  </p>

                  <span
                    className={`mt-3 inline-flex rounded-full border px-3 py-1.5 text-xs font-semibold ${getStatusClasses(
                      selectedRequest.status
                    )}`}
                  >
                    {getStatusLabel(
                      selectedRequest.status
                    )}
                  </span>

                  <p className="mt-3 text-sm text-gray-400">
                    {formatDateTime(
                      selectedRequest.createdAt
                    )}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Certificazioni dichiarate
                </p>

                <p className="mt-3 leading-7 text-gray-200">
                  {selectedRequest
                    .declaredCertifications ||
                    "Nessuna certificazione dichiarata"}
                </p>
              </div>

              {selectedRequest.documentUrl && (
                <a
                  href={
                    selectedRequest.documentUrl
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-5 py-4 font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
                >
                  <ExternalLink
                    size={18}
                  />

                  Apri documento privato
                </a>
              )}

              {selectedRequest.status ===
                "pending" &&
                canReview && (
                  <>
                    <div>
                      <div className="mb-4">
                        <h3 className="text-lg font-bold">
                          Certificazioni riconosciute
                        </h3>

                        <p className="mt-1 text-sm text-gray-400">
                          Seleziona soltanto quelle
                          visibili e valide nel documento.
                        </p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {CERTIFICATION_OPTIONS.map(
                          (certification) => {
                            const checked =
                              selectedCertifications.includes(
                                certification.value
                              )

                            return (
                              <label
                                key={
                                  certification.value
                                }
                                className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition ${
                                  checked
                                    ? "border-green-400/30 bg-green-500/10"
                                    : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={
                                    checked
                                  }
                                  onChange={() =>
                                    toggleCertification(
                                      certification.value
                                    )
                                  }
                                  className="h-4 w-4 accent-green-500"
                                />

                                <span className="text-sm font-semibold">
                                  {
                                    certification.label
                                  }
                                </span>
                              </label>
                            )
                          }
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-gray-200">
                        Note interne
                      </label>

                      <textarea
                        value={reviewNotes}
                        onChange={(event) =>
                          setReviewNotes(
                            event.target.value
                          )
                        }
                        maxLength={2000}
                        rows={4}
                        placeholder="Note facoltative sulla verifica..."
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/40"
                      />

                      <p className="mt-1 text-right text-xs text-gray-500">
                        {reviewNotes.length}
                        /2000
                      </p>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-gray-200">
                        Motivazione del rifiuto
                      </label>

                      <textarea
                        value={
                          rejectionReason
                        }
                        onChange={(event) =>
                          setRejectionReason(
                            event.target.value
                          )
                        }
                        maxLength={1000}
                        rows={4}
                        placeholder="Obbligatoria soltanto in caso di rifiuto..."
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-400/40"
                      />

                      <p className="mt-1 text-right text-xs text-gray-500">
                        {
                          rejectionReason.length
                        }
                        /1000
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <button
                        type="button"
                        disabled={submitting}
                        onClick={() =>
                          submitReview(
                            "rejected"
                          )
                        }
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-red-400/20 bg-red-500/10 px-5 py-4 font-bold text-red-200 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {submitting ? (
                          <Loader2
                            size={18}
                            className="animate-spin"
                          />
                        ) : (
                          <XCircle
                            size={18}
                          />
                        )}

                        Rifiuta richiesta
                      </button>

                      <button
                        type="button"
                        disabled={submitting}
                        onClick={() =>
                          submitReview(
                            "approved"
                          )
                        }
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-4 font-black text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {submitting ? (
                          <Loader2
                            size={18}
                            className="animate-spin"
                          />
                        ) : (
                          <BadgeCheck
                            size={18}
                          />
                        )}

                        Approva certificazione
                      </button>
                    </div>
                  </>
                )}

              {selectedRequest.status ===
                "approved" && (
                <div className="rounded-2xl border border-green-400/20 bg-green-500/10 p-5">
                  <div className="flex items-center gap-2 text-green-300">
                    <BadgeCheck
                      size={20}
                    />

                    <h3 className="font-bold">
                      Richiesta approvata
                    </h3>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedRequest
                      .approvedCertifications
                      ?.map(
                        (certification) => (
                          <span
                            key={
                              certification
                            }
                            className="rounded-full bg-green-400/10 px-3 py-1.5 text-xs font-semibold text-green-200"
                          >
                            {getCertificationLabel(
                              certification
                            )}
                          </span>
                        )
                      )}
                  </div>

                  <p className="mt-4 text-sm text-green-100">
                    Revisionata il{" "}
                    {formatDateTime(
                      selectedRequest.reviewedAt
                    )}
                  </p>
                </div>
              )}

              {selectedRequest.status ===
                "rejected" && (
                <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-5">
                  <div className="flex items-center gap-2 text-red-300">
                    <XCircle
                      size={20}
                    />

                    <h3 className="font-bold">
                      Richiesta rifiutata
                    </h3>
                  </div>

                  <p className="mt-4 leading-7 text-red-100">
                    {selectedRequest
                      .rejectionReason ||
                      "Motivazione non disponibile"}
                  </p>

                  <p className="mt-4 text-sm text-red-200/70">
                    Revisionata il{" "}
                    {formatDateTime(
                      selectedRequest.reviewedAt
                    )}
                  </p>
                </div>
              )}

              {selectedRequest.status ===
                "pending" &&
                !canReview && (
                  <div className="rounded-2xl border border-yellow-400/20 bg-yellow-500/10 p-5">
                    <div className="flex items-center gap-2 text-yellow-300">
                      <Clock3
                        size={20}
                      />

                      <p className="font-semibold">
                        Puoi visualizzare la richiesta,
                        ma non hai il permesso di
                        approvarla o rifiutarla.
                      </p>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}