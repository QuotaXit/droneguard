"use client"

import InsuranceAdminActions from "./InsuranceAdminActions"

import {
  useCallback,
  useEffect,
  useState
} from "react"

import {
  Clock3,
  ExternalLink,
  FileText,
  Loader2,
  RefreshCcw,
  ShieldCheck,
  X,
  XCircle
} from "lucide-react"

import {
  toast
} from "sonner"


const STATUS_OPTIONS = [
  {
    value:
      "pending",
    label:
      "In attesa"
  },
  {
    value:
      "approved",
    label:
      "Approvate"
  },
  {
    value:
      "rejected",
    label:
      "Rifiutate"
  },
  {
    value:
      "all",
    label:
      "Tutte"
  }
]


function getStatusLabel(
  status
) {
  if (
    status === "approved"
  ) {
    return "Approvata"
  }

  if (
    status === "rejected"
  ) {
    return "Rifiutata"
  }

  return "In attesa"
}


function getStatusClasses(
  status
) {
  if (
    status === "approved"
  ) {
    return (
      "border-green-400/20 " +
      "bg-green-500/10 " +
      "text-green-300"
    )
  }

  if (
    status === "rejected"
  ) {
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


function getPilotName(
  pilot
) {
  if (!pilot) {
    return (
      "Pilota non disponibile"
    )
  }

  return (
    `${pilot.name || ""} ${
      pilot.surname || ""
    }`.trim() ||
    pilot.email ||
    "Pilota non disponibile"
  )
}


function formatFileSize(
  value
) {
  const bytes =
    Number(value || 0)

  if (
    !Number.isFinite(
      bytes
    ) ||
    bytes <= 0
  ) {
    return "Dimensione non disponibile"
  }

  if (
    bytes <
    1024
  ) {
    return `${bytes} B`
  }

  if (
    bytes <
    1024 * 1024
  ) {
    return `${(
      bytes / 1024
    ).toFixed(1)} KB`
  }

  return `${(
    bytes /
    (
      1024 *
      1024
    )
  ).toFixed(1)} MB`
}


function formatDate(
  value
) {
  if (!value) {
    return "Non disponibile"
  }

  const parts =
    String(value)
      .slice(
        0,
        10
      )
      .split("-")

  if (
    parts.length !== 3
  ) {
    return value
  }

  return [
    parts[2],
    parts[1],
    parts[0]
  ].join("/")
}


function formatDateTime(
  value
) {
  if (!value) {
    return "Non disponibile"
  }

  const date =
    new Date(value)

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return "Non disponibile"
  }

  return new Intl
    .DateTimeFormat(
      "it-IT",
      {
        dateStyle:
          "short",

        timeStyle:
          "short",

        timeZone:
          "Europe/Rome"
      }
    )
    .format(date)
}


export default function InsurancesManagementClient({
  canReview
}) {

  const [
    requests,
    setRequests
  ] = useState([])

  const [
    loading,
    setLoading
  ] = useState(true)

  const [
    refreshing,
    setRefreshing
  ] = useState(false)

  const [
    statusFilter,
    setStatusFilter
  ] = useState(
    "pending"
  )

  const [
    page,
    setPage
  ] = useState(1)

  const [
    pagination,
    setPagination
  ] = useState({
    page: 1,
    pageSize: 20,
    total: 0,
    totalPages: 1
  })

  const [
    selectedRequest,
    setSelectedRequest
  ] = useState(null)

  const [
    reviewNotes,
    setReviewNotes
  ] = useState("")

  const [
    rejectionReason,
    setRejectionReason
  ] = useState("")

  const [
    submitting,
    setSubmitting
  ] = useState(false)


  /*
   * =====================================================
   * CARICAMENTO
   * =====================================================
   */

  const loadRequests =
    useCallback(
      async ({
        showMainLoader =
          true
      } = {}) => {
        try {

          if (
            showMainLoader
          ) {
            setLoading(
              true
            )
          } else {
            setRefreshing(
              true
            )
          }


          const searchParams =
            new URLSearchParams({
              page:
                String(
                  page
                ),

              status:
                statusFilter
            })


          const response =
            await fetch(
              `/api/admin/insurances?${searchParams.toString()}`,
              {
                method:
                  "GET",

                cache:
                  "no-store"
              }
            )


          let result =
            null

          try {
            result =
              await response
                .json()
          } catch {
            result =
              null
          }


          if (
            !response.ok
          ) {
            throw new Error(
              result?.error ||
                "Impossibile caricare le assicurazioni."
            )
          }


          setRequests(
            Array.isArray(
              result?.requests
            )
              ? result.requests
              : []
          )


          setPagination(
            result
              ?.pagination || {
              page,
              pageSize:
                20,
              total:
                0,
              totalPages:
                1
            }
          )

        } catch (error) {

          console.error(
            "[admin-insurances] load failed:",
            error
          )

          setRequests([])

          toast.error(
            error instanceof
              Error
              ? error.message
              : "Errore durante il caricamento."
          )

        } finally {
          setLoading(
            false
          )

          setRefreshing(
            false
          )
        }
      },
      [
        page,
        statusFilter
      ]
    )


  useEffect(
    () => {
      loadRequests()
    },
    [
      loadRequests
    ]
  )


  /*
   * =====================================================
   * FILTRI
   * =====================================================
   */

  const changeStatusFilter = (
    newStatus
  ) => {
    setPage(1)

    setStatusFilter(
      newStatus
    )
  }


  /*
   * =====================================================
   * MODALE
   * =====================================================
   */

  const openRequest = (
    request
  ) => {
    setSelectedRequest(
      request
    )

    setReviewNotes(
      request.reviewNotes ||
        ""
    )

    setRejectionReason(
      request
        .rejectionReason ||
        ""
    )
  }


  const closeRequest =
    () => {
      if (submitting) {
        return
      }

      setSelectedRequest(
        null
      )

      setReviewNotes(
        ""
      )

      setRejectionReason(
        ""
      )
    }


  /*
   * =====================================================
   * REVISIONE
   * =====================================================
   */

  const submitReview =
    async (
      decision
    ) => {

      if (
        !selectedRequest ||
        submitting
      ) {
        return
      }


      if (
        selectedRequest
          .status !==
        "pending"
      ) {
        toast.error(
          "Questa richiesta è già stata revisionata."
        )

        return
      }


      if (!canReview) {
        toast.error(
          "Non hai il permesso di revisionare assicurazioni."
        )

        return
      }


      const normalizedReason =
        rejectionReason
          .trim()


      if (
        decision ===
          "rejected" &&
        (
          normalizedReason
            .length < 5 ||
          normalizedReason
            .length >
            1000
        )
      ) {
        toast.error(
          "La motivazione del rifiuto deve contenere da 5 a 1000 caratteri."
        )

        return
      }


      try {

        setSubmitting(
          true
        )


        const response =
          await fetch(
            "/api/admin/insurances",
            {
              method:
                "PATCH",

              headers: {
                "Content-Type":
                  "application/json"
              },

              body:
                JSON.stringify({
                  requestId:
                    selectedRequest
                      .id,

                  decision,

                  reviewNotes:
                    reviewNotes
                      .trim(),

                  rejectionReason:
                    decision ===
                    "rejected"
                      ? normalizedReason
                      : ""
                })
            }
          )


        let result =
          null

        try {
          result =
            await response
              .json()
        } catch {
          result =
            null
        }


        if (
          !response.ok
        ) {
          throw new Error(
            result?.error ||
              "Non è stato possibile completare la revisione."
          )
        }


        toast.success(
          result?.message ||
            (
              decision ===
              "approved"
                ? "Assicurazione approvata."
                : "Assicurazione rifiutata."
            )
        )


        closeRequest()


        await loadRequests({
          showMainLoader:
            false
        })

      } catch (error) {

        console.error(
          "[admin-insurances] review failed:",
          error
        )

        toast.error(
          error instanceof
            Error
            ? error.message
            : "Errore durante la revisione."
        )

      } finally {
        setSubmitting(
          false
        )
      }
    }


  const previousPage =
    () => {
      setPage(
        (
          current
        ) =>
          Math.max(
            1,
            current - 1
          )
      )
    }


  const nextPage =
    () => {
      setPage(
        (
          current
        ) =>
          Math.min(
            pagination
              .totalPages,
            current + 1
          )
      )
    }


  /*
   * =====================================================
   * UI
   * =====================================================
   */

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <section className="rounded-3xl border border-white/10 bg-[#0B1028] p-6 sm:p-8">

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
              Verifica piloti
            </p>

            <h1 className="mt-2 text-3xl font-black">
              Assicurazioni
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
              Controlla le polizze assicurative inviate dai piloti e gestisci la verifica.
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
                showMainLoader:
                  false
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


      {/* FILTRI */}
      <section className="rounded-3xl border border-white/10 bg-[#0B1028] p-4 sm:p-6">

        <div className="flex flex-wrap gap-2">

          {STATUS_OPTIONS.map(
            (
              option
            ) => (
              <button
                key={
                  option.value
                }
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


      {/* LOADING */}
      {loading ? (

        <div className="flex min-h-72 items-center justify-center rounded-3xl border border-white/10 bg-[#0B1028]">

          <div className="text-center">

            <Loader2
              size={34}
              className="mx-auto animate-spin text-green-400"
            />

            <p className="mt-4 text-sm text-gray-400">
              Caricamento assicurazioni...
            </p>

          </div>
        </div>

      ) : requests.length ===
        0 ? (

        /* EMPTY */
        <div className="flex min-h-72 items-center justify-center rounded-3xl border border-white/10 bg-[#0B1028] p-6">

          <div className="max-w-md text-center">

            <ShieldCheck
              size={42}
              className="mx-auto text-gray-600"
            />

            <h2 className="mt-4 text-xl font-bold">
              Nessuna richiesta trovata
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Non sono presenti assicurazioni con questo stato.
            </p>

          </div>
        </div>

      ) : (

        /* CARDS */
        <section className="grid gap-4 xl:grid-cols-2">

          {requests.map(
            (
              request
            ) => (

              <article
                key={
                  request.id
                }
                className="rounded-3xl border border-white/10 bg-[#0B1028] p-5 sm:p-6"
              >

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  <div className="min-w-0">

                    <h2 className="truncate text-xl font-bold">
                      {getPilotName(
                        request.pilot
                      )}
                    </h2>

                    <p className="mt-1 break-all text-sm text-gray-400">
                      {request
                        .pilot
                        ?.email ||
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


                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                    <p className="text-xs text-gray-500">
                      Compagnia
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      {request
                        .insuranceCompany ||
                        "Non indicata"}
                    </p>

                  </div>


                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                    <p className="text-xs text-gray-500">
                      Numero polizza
                    </p>

                    <p className="mt-2 break-all font-semibold text-white">
                      {request
                        .policyNumber ||
                        "Non indicato"}
                    </p>

                  </div>


                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                    <p className="text-xs text-gray-500">
                      Valida dal
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      {request
                        .validFrom
                        ? formatDate(
                            request.validFrom
                          )
                        : "Non indicata"}
                    </p>

                  </div>


                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                    <p className="text-xs text-gray-500">
                      Scadenza
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      {formatDate(
                        request.validUntil
                      )}
                    </p>

                  </div>

                </div>


                <div className="mt-3 grid gap-3 sm:grid-cols-2">

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                    <p className="text-xs text-gray-500">
                      Documento
                    </p>

                    <p className="mt-2 break-all font-semibold text-white">
                      {request
                        .originalFilename ||
                        "Documento"}
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


                {/* APPROVATA */}
                {request.status ===
                  "approved" && (

                  <div className="mt-4 rounded-2xl border border-green-400/20 bg-green-500/10 p-4">

                    <div className="flex items-center gap-2 text-green-300">

                      <ShieldCheck
                        size={18}
                      />

                      <p className="font-bold">
                        Assicurazione verificata
                      </p>

                    </div>

                    <p className="mt-2 text-sm text-green-100/70">
                      Valida fino al{" "}
                      {formatDate(
                        request.validUntil
                      )}
                    </p>

                  </div>
                )}


                {/* RIFIUTATA */}
                {request.status ===
                  "rejected" && (

                  <div className="mt-4 rounded-2xl border border-red-400/20 bg-red-500/10 p-4">

                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
                      Motivazione rifiuto
                    </p>

                    <p className="mt-2 text-sm leading-6 text-red-100">
                      {request
                        .rejectionReason ||
                        "Motivazione non disponibile"}
                    </p>

                  </div>
                )}


                <div className="mt-5 flex flex-col gap-3 sm:flex-row">

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
                      openRequest(
                        request
                      )
                    }
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-bold text-black transition hover:bg-green-400"
                  >
                    {request.status ===
                    "pending"
                      ? "Revisiona"
                      : "Vedi dettagli"}
                  </button>

                </div>

                {request.status ===
  "approved" && (

  <InsuranceAdminActions
    request={
      request
    }
    canReview={
      canReview
    }
    onChanged={() =>
      loadRequests({
        showMainLoader:
          false
      })
    }
  />
)}

              </article>
            )
          )}

        </section>
      )}


      {/* PAGINAZIONE */}
      {!loading &&
        pagination
          .totalPages >
          1 && (

        <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-[#0B1028] p-4">

          <button
            type="button"
            disabled={
              page <= 1
            }
            onClick={
              previousPage
            }
            className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Pagina precedente
          </button>


          <p className="text-sm text-gray-400">
            Pagina {page} di{" "}
            {pagination
              .totalPages}
          </p>


          <button
            type="button"
            disabled={
              page >=
              pagination
                .totalPages
            }
            onClick={
              nextPage
            }
            className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Pagina successiva
          </button>

        </div>
      )}


      {/* =================================================
          MODALE
      ================================================= */}
      {selectedRequest && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">

          <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0B1028] shadow-2xl">

            {/* HEADER MODALE */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0B1028] p-5 sm:p-6">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                  Richiesta assicurazione
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  {getPilotName(
                    selectedRequest
                      .pilot
                  )}
                </h2>

              </div>


              <button
                type="button"
                disabled={
                  submitting
                }
                onClick={
                  closeRequest
                }
                className="rounded-xl border border-white/10 p-2.5 text-gray-400 transition hover:bg-white/10 hover:text-white disabled:opacity-50"
              >
                <X
                  size={20}
                />
              </button>

            </div>


            <div className="space-y-5 p-5 sm:p-6">

              <div className="grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                    Pilota
                  </p>

                  <p className="mt-3 font-semibold">
                    {getPilotName(
                      selectedRequest
                        .pilot
                    )}
                  </p>

                  <p className="mt-1 break-all text-sm text-gray-400">
                    {selectedRequest
                      .pilot
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
                      selectedRequest
                        .status
                    )}`}
                  >
                    {getStatusLabel(
                      selectedRequest
                        .status
                    )}
                  </span>

                  <p className="mt-3 text-sm text-gray-400">
                    {formatDateTime(
                      selectedRequest
                        .createdAt
                    )}
                  </p>

                </div>

              </div>


              <div className="grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <p className="text-xs text-gray-500">
                    Compagnia assicurativa
                  </p>

                  <p className="mt-2 font-semibold">
                    {selectedRequest
                      .insuranceCompany}
                  </p>

                </div>


                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <p className="text-xs text-gray-500">
                    Numero polizza
                  </p>

                  <p className="mt-2 break-all font-semibold">
                    {selectedRequest
                      .policyNumber}
                  </p>

                </div>


                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <p className="text-xs text-gray-500">
                    Inizio validità
                  </p>

                  <p className="mt-2 font-semibold">
                    {selectedRequest
                      .validFrom
                      ? formatDate(
                          selectedRequest
                            .validFrom
                        )
                      : "Non indicata"}
                  </p>

                </div>


                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <p className="text-xs text-gray-500">
                    Scadenza
                  </p>

                  <p className="mt-2 font-semibold">
                    {formatDate(
                      selectedRequest
                        .validUntil
                    )}
                  </p>

                </div>

              </div>


              {/* DOCUMENTO */}
              {selectedRequest
                .documentUrl && (

                <a
                  href={
                    selectedRequest
                      .documentUrl
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


              {/* REVISIONE */}
              {selectedRequest
                  .status ===
                "pending" &&
                canReview && (

                <>
                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-300">
                      Note interne
                    </label>

                    <textarea
                      value={
                        reviewNotes
                      }
                      onChange={(
                        event
                      ) =>
                        setReviewNotes(
                          event
                            .target
                            .value
                            .slice(
                              0,
                              2000
                            )
                        )
                      }
                      disabled={
                        submitting
                      }
                      maxLength={
                        2000
                      }
                      placeholder="Note opzionali sulla verifica..."
                      className="h-24 w-full resize-none rounded-2xl border border-white/10 bg-black/20 p-4 text-sm outline-none transition focus:border-green-400/40 disabled:opacity-50"
                    />

                    <p className="mt-2 text-right text-xs text-gray-600">
                      {reviewNotes
                        .length}
                      /2000
                    </p>

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-300">
                      Motivazione in caso di rifiuto
                    </label>

                    <textarea
                      value={
                        rejectionReason
                      }
                      onChange={(
                        event
                      ) =>
                        setRejectionReason(
                          event
                            .target
                            .value
                            .slice(
                              0,
                              1000
                            )
                        )
                      }
                      disabled={
                        submitting
                      }
                      maxLength={
                        1000
                      }
                      placeholder="Compilala soltanto se devi rifiutare il documento..."
                      className="h-24 w-full resize-none rounded-2xl border border-white/10 bg-black/20 p-4 text-sm outline-none transition focus:border-red-400/40 disabled:opacity-50"
                    />

                    <p className="mt-2 text-right text-xs text-gray-600">
                      {rejectionReason
                        .length}
                      /1000
                    </p>

                  </div>


                  <div className="grid gap-3 sm:grid-cols-2">

                    <button
                      type="button"
                      disabled={
                        submitting
                      }
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

                      Rifiuta
                    </button>


                    <button
                      type="button"
                      disabled={
                        submitting
                      }
                      onClick={() =>
                        submitReview(
                          "approved"
                        )
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-4 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {submitting ? (
                        <Loader2
                          size={18}
                          className="animate-spin"
                        />
                      ) : (
                        <ShieldCheck
                          size={18}
                        />
                      )}

                      Approva assicurazione
                    </button>

                  </div>
                </>
              )}


              {/* DETTAGLI REVISIONE */}
              {selectedRequest
                  .status !==
                "pending" && (

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <div className="flex items-center gap-2">

                    {selectedRequest
                        .status ===
                      "approved" ? (
                      <ShieldCheck
                        size={19}
                        className="text-green-400"
                      />
                    ) : (
                      <XCircle
                        size={19}
                        className="text-red-400"
                      />
                    )}

                    <p className="font-bold">
                      Revisione completata
                    </p>

                  </div>


                  {selectedRequest
                    .reviewedAt && (

                    <p className="mt-3 text-sm text-gray-400">
                      Revisionata il{" "}
                      {formatDateTime(
                        selectedRequest
                          .reviewedAt
                      )}
                    </p>
                  )}


                  {selectedRequest
                    .reviewNotes && (

                    <div className="mt-4">

                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        Note interne
                      </p>

                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        {selectedRequest
                          .reviewNotes}
                      </p>

                    </div>
                  )}


                  {selectedRequest
                      .status ===
                    "rejected" &&
                    selectedRequest
                      .rejectionReason && (

                    <div className="mt-4">

                      <p className="text-xs uppercase tracking-wide text-red-300">
                        Motivazione rifiuto
                      </p>

                      <p className="mt-2 text-sm leading-6 text-red-100">
                        {selectedRequest
                          .rejectionReason}
                      </p>

                    </div>
                  )}

                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  )
}