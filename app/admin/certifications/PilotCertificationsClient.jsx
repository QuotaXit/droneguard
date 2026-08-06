"use client"

import {
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react"

import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Plus,
  RefreshCcw,
  Search,
  ShieldCheck,
  X
} from "lucide-react"

import { toast } from "sonner"

const EMPTY_PAGINATION = {
  page: 1,
  pageSize: 30,
  total: 0,
  totalPages: 1
}

function normalizeKeys(values) {
  return [
    ...new Set(
      Array.isArray(values)
        ? values
            .map((value) =>
              String(value || "")
                .trim()
                .toLowerCase()
            )
            .filter(Boolean)
        : []
    )
  ].sort()
}

export default function PilotCertificationsClient({
  canReview
}) {
  const [
    pilots,
    setPilots
  ] = useState([])

  const [
    certificationCatalog,
    setCertificationCatalog
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
    searchInput,
    setSearchInput
  ] = useState("")

  const [
    appliedSearch,
    setAppliedSearch
  ] = useState("")

  const [
    page,
    setPage
  ] = useState(1)

  const [
    pagination,
    setPagination
  ] = useState(
    EMPTY_PAGINATION
  )

  const [
    selectedPilot,
    setSelectedPilot
  ] = useState(null)

  const [
    selectedCertifications,
    setSelectedCertifications
  ] = useState([])

  const [
    reason,
    setReason
  ] = useState("")

  const [
    submitting,
    setSubmitting
  ] = useState(false)

  const loadPilots =
    useCallback(
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
              page:
                String(page)
            })

          if (appliedSearch) {
            searchParams.set(
              "search",
              appliedSearch
            )
          }

          const response =
            await fetch(
              `/api/admin/certifications/pilots?${searchParams.toString()}`,
              {
                method: "GET",
                cache: "no-store"
              }
            )

          let result = null

          try {
            result =
              await response.json()
          } catch {
            result = null
          }

          if (!response.ok) {
            throw new Error(
              result?.error ||
                "Impossibile caricare i piloti."
            )
          }

          const nextPilots =
            Array.isArray(
              result?.pilots
            )
              ? result.pilots
              : []

          const nextCatalog =
            Array.isArray(
              result
                ?.certificationCatalog
            )
              ? result
                  .certificationCatalog
              : []

          setPilots(
            nextPilots
          )

          setCertificationCatalog(
            nextCatalog
          )

          setPagination({
            page:
              Number(
                result?.pagination
                  ?.page || 1
              ),

            pageSize:
              Number(
                result?.pagination
                  ?.pageSize || 30
              ),

            total:
              Number(
                result?.pagination
                  ?.total || 0
              ),

            totalPages:
              Math.max(
                1,
                Number(
                  result
                    ?.pagination
                    ?.totalPages || 1
                )
              )
          })
        } catch (error) {
          console.error(
            "[admin-certification-pilots] load failed:",
            error
          )

          toast.error(
            error instanceof Error
              ? error.message
              : "Errore durante il caricamento dei piloti."
          )
        } finally {
          setLoading(false)
          setRefreshing(false)
        }
      },
      [
        page,
        appliedSearch
      ]
    )

  useEffect(() => {
    loadPilots()
  }, [loadPilots])

  const catalogLabelMap =
    useMemo(
      () =>
        new Map(
          certificationCatalog.map(
            (certification) => [
              certification.key,
              certification.label
            ]
          )
        ),
      [certificationCatalog]
    )

  const selectedPilotActive =
    useMemo(
      () =>
        normalizeKeys(
          selectedPilot
            ?.activeCertifications
        ),
      [selectedPilot]
    )

  const applySearch = (
    event
  ) => {
    event.preventDefault()

    setPage(1)

    setAppliedSearch(
      searchInput
        .trim()
        .slice(0, 120)
    )
  }

  const resetSearch = () => {
    setSearchInput("")
    setAppliedSearch("")
    setPage(1)
  }

  const openCertificationManager = (
    pilot
  ) => {
    if (
      !canReview ||
      !pilot?.id
    ) {
      return
    }

    setSelectedPilot(pilot)

    setSelectedCertifications([])

    setReason("")
  }

  const closeCertificationManager =
    () => {
      if (submitting) {
        return
      }

      setSelectedPilot(null)

      setSelectedCertifications([])

      setReason("")
    }

  const toggleCertification = (
    certificationKey
  ) => {
    if (
      submitting ||
      !certificationKey ||
      selectedPilotActive.includes(
        certificationKey
      )
    ) {
      return
    }

    setSelectedCertifications(
      (current) => {
        if (
          current.includes(
            certificationKey
          )
        ) {
          return current.filter(
            (item) =>
              item !==
              certificationKey
          )
        }

        return [
          ...current,
          certificationKey
        ].sort()
      }
    )
  }

  const submitCertifications =
    async (event) => {
      event.preventDefault()

      if (
        submitting ||
        !selectedPilot?.id ||
        !canReview
      ) {
        return
      }

      const certifications =
        normalizeKeys(
          selectedCertifications
        )

      const normalizedReason =
        reason.trim()

      if (
        certifications.length === 0
      ) {
        toast.error(
          "Seleziona almeno una nuova certificazione."
        )

        return
      }

      if (
        normalizedReason.length <
          10 ||
        normalizedReason.length >
          500
      ) {
        toast.error(
          "La motivazione deve contenere da 10 a 500 caratteri."
        )

        return
      }

      try {
        setSubmitting(true)

        const response =
          await fetch(
            "/api/admin/certifications/pilots",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json"
              },

              body:
                JSON.stringify({
                  pilotUserId:
                    selectedPilot.id,

                  certifications,

                  reason:
                    normalizedReason
                })
            }
          )

        let result = null

        try {
          result =
            await response.json()
        } catch {
          result = null
        }

        if (!response.ok) {
          throw new Error(
            result?.error ||
              "Impossibile aggiungere le certificazioni."
          )
        }

        const activeCertifications =
          normalizeKeys(
            result?.result
              ?.activeCertifications
          )

        setPilots(
          (currentPilots) =>
            currentPilots.map(
              (pilot) =>
                pilot.id ===
                selectedPilot.id
                  ? {
                      ...pilot,

                      activeCertifications,

                      certificationCount:
                        activeCertifications
                          .length,

                      verified:
                        result?.result
                          ?.verified !==
                        false,

                      certificationIndicator:
                        result?.result
                          ?.certificationIndicator !==
                        false
                    }
                  : pilot
            )
        )

        toast.success(
          result?.message ||
            "Certificazioni aggiunte correttamente."
        )

        setSelectedPilot(null)

        setSelectedCertifications([])

        setReason("")
      } catch (error) {
        console.error(
          "[admin-certification-pilots] add failed:",
          error
        )

        toast.error(
          error instanceof Error
            ? error.message
            : "Errore durante l'aggiunta delle certificazioni."
        )
      } finally {
        setSubmitting(false)
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
    <>
      <section className="rounded-3xl border border-blue-400/20 bg-[#0B1028] p-6 sm:p-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
              Archivio certificazioni
            </p>

            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              Certificazioni dei piloti
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-gray-400">
              Consulta tutti i piloti registrati,
              visualizza le certificazioni già
              verificate e aggiungi quelle ricevute
              e controllate tramite email.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              loadPilots({
                showMainLoader:
                  false
              })
            }
            disabled={
              loading ||
              refreshing
            }
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RefreshCcw
              size={17}
              className={
                refreshing
                  ? "animate-spin"
                  : ""
              }
            />

            Aggiorna piloti
          </button>
        </div>

        <form
          onSubmit={applySearch}
          className="mt-6 flex flex-col gap-3 lg:flex-row"
        >
          <div className="relative flex-1">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="search"
              value={searchInput}
              onChange={(event) =>
                setSearchInput(
                  event.target.value.slice(
                    0,
                    120
                  )
                )
              }
              maxLength={120}
              placeholder="Cerca per nome, cognome o email..."
              className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-11 pr-4 outline-none transition focus:border-blue-400/50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-blue-500 px-5 py-3 font-bold text-white transition hover:bg-blue-400 disabled:opacity-50"
          >
            Cerca
          </button>

          <button
            type="button"
            onClick={resetSearch}
            disabled={
              loading ||
              (
                !searchInput &&
                !appliedSearch
              )
            }
            className="rounded-xl border border-white/10 px-5 py-3 font-semibold text-gray-300 transition hover:bg-white/10 disabled:opacity-40"
          >
            Azzera
          </button>
        </form>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-gray-500">
          <p>
            Piloti trovati:{" "}
            <span className="font-semibold text-gray-300">
              {pagination.total}
            </span>
          </p>

          <p>
            Pagina {pagination.page} di{" "}
            {pagination.totalPages}
          </p>
        </div>
      </section>

      {loading ? (
        <section className="flex min-h-72 items-center justify-center rounded-3xl border border-white/10 bg-[#0B1028]">
          <div className="text-center">
            <Loader2
              size={34}
              className="mx-auto animate-spin text-blue-300"
            />

            <p className="mt-4 text-sm text-gray-400">
              Caricamento piloti e certificazioni...
            </p>
          </div>
        </section>
      ) : pilots.length === 0 ? (
        <section className="rounded-3xl border border-white/10 bg-[#0B1028] px-6 py-16 text-center">
          <ShieldCheck
            size={42}
            className="mx-auto text-blue-300"
          />

          <h3 className="mt-5 text-xl font-bold">
            Nessun pilota trovato
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Modifica la ricerca oppure aggiorna
            l’elenco.
          </p>
        </section>
      ) : (
        <section className="grid gap-5 xl:grid-cols-2">
          {pilots.map(
            (pilot) => (
              <article
                key={pilot.id}
                className="rounded-3xl border border-white/10 bg-[#0B1028] p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="truncate text-xl font-bold">
                      {pilot.fullName}
                    </h3>

                    <p className="mt-1 break-all text-sm text-gray-400">
                      {pilot.email ||
                        "Email non disponibile"}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {pilot.banned && (
                      <span className="rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-300">
                        Sospeso
                      </span>
                    )}

                    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-200">
                      {pilot.certificationCount}{" "}
                      certificazioni
                    </span>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Certificazioni verificate
                  </p>

                  {pilot
                    .activeCertifications
                    .length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {pilot
                        .activeCertifications
                        .map(
                          (
                            certification
                          ) => (
                            <span
                              key={
                                certification
                              }
                              className="inline-flex items-center gap-1 rounded-full bg-green-400/10 px-3 py-1.5 text-xs font-semibold text-green-200"
                            >
                              <BadgeCheck
                                size={13}
                              />

                              {catalogLabelMap.get(
                                certification
                              ) ||
                                certification}
                            </span>
                          )
                        )}
                    </div>
                  ) : (
                    <p className="mt-3 text-sm text-gray-400">
                      Nessuna certificazione specifica
                      verificata.
                    </p>
                  )}
                </div>

                {pilot
                  .legacyCertifications && (
                  <div className="mt-4 rounded-2xl border border-yellow-400/20 bg-yellow-500/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300">
                      Certificazioni dichiarate
                    </p>

                    <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-300">
                      {
                        pilot
                          .legacyCertifications
                      }
                    </p>
                  </div>
                )}

                {canReview && (
                  <button
                    type="button"
                    onClick={() =>
                      openCertificationManager(
                        pilot
                      )
                    }
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 font-bold text-white transition hover:bg-blue-400"
                  >
                    <Plus size={18} />

                    Aggiungi certificazione
                  </button>
                )}
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
              onClick={previousPage}
              disabled={
                pagination.page <= 1
              }
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold disabled:opacity-40"
            >
              <ChevronLeft
                size={17}
              />

              Precedente
            </button>

            <span className="text-sm text-gray-400">
              {pagination.page} /{" "}
              {pagination.totalPages}
            </span>

            <button
              type="button"
              onClick={nextPage}
              disabled={
                pagination.page >=
                pagination.totalPages
              }
              className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
            >
              Successiva

              <ChevronRight
                size={17}
              />
            </button>
          </div>
        )}

      {selectedPilot &&
        canReview && (
          <div className="fixed inset-0 z-[160] flex items-center justify-center bg-black/90 p-4">
            <form
              onSubmit={
                submitCertifications
              }
              className="max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-blue-400/30 bg-[#0B1028] p-6 shadow-2xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Gestione manuale
                  </p>

                  <h2 className="mt-3 text-2xl font-black">
                    Aggiungi certificazioni
                  </h2>

                  <p className="mt-2 font-semibold">
                    {
                      selectedPilot.fullName
                    }
                  </p>

                  <p className="mt-1 break-all text-sm text-gray-400">
                    {selectedPilot.email}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={
                    closeCertificationManager
                  }
                  disabled={submitting}
                  className="rounded-xl border border-white/10 p-2 transition hover:bg-white/10 disabled:opacity-50"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-6 rounded-2xl border border-green-400/20 bg-green-500/5 p-4">
                <p className="text-sm font-semibold text-green-300">
                  Operazione additiva
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Le certificazioni già attive
                  rimarranno invariate. Questa
                  operazione può soltanto aggiungerne
                  di nuove.
                </p>
              </div>

              <fieldset className="mt-6">
                <legend className="text-lg font-bold">
                  Certificazioni
                </legend>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {certificationCatalog.map(
                    (certification) => {
                      const alreadyActive =
                        selectedPilotActive.includes(
                          certification.key
                        )

                      const selected =
                        selectedCertifications.includes(
                          certification.key
                        )

                      return (
                        <label
                          key={
                            certification.key
                          }
                          className={`flex items-center gap-3 rounded-2xl border p-4 ${
                            alreadyActive
                              ? "cursor-not-allowed border-green-400/20 bg-green-500/10"
                              : selected
                                ? "cursor-pointer border-blue-400/40 bg-blue-500/10"
                                : "cursor-pointer border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={
                              alreadyActive ||
                              selected
                            }
                            disabled={
                              alreadyActive ||
                              submitting
                            }
                            onChange={() =>
                              toggleCertification(
                                certification.key
                              )
                            }
                            className="h-4 w-4"
                          />

                          <span className="font-semibold">
                            {
                              certification.label
                            }
                          </span>

                          {alreadyActive && (
                            <span className="ml-auto text-xs font-semibold text-green-300">
                              Già attiva
                            </span>
                          )}
                        </label>
                      )
                    }
                  )}
                </div>
              </fieldset>

              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label className="text-sm font-semibold">
                    Motivazione amministrativa
                  </label>

                  <span className="text-xs text-gray-500">
                    {reason.length}/500
                  </span>
                </div>

                <textarea
                  value={reason}
                  onChange={(event) =>
                    setReason(
                      event.target.value.slice(
                        0,
                        500
                      )
                    )
                  }
                  required
                  minLength={10}
                  maxLength={500}
                  disabled={submitting}
                  rows={5}
                  placeholder="Esempio: certificazione ricevuta via email e verificata sul documento allegato..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 p-4 outline-none transition focus:border-blue-400/50 disabled:opacity-60"
                />

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  La motivazione verrà registrata
                  nel Registro attività.
                </p>
              </div>

              <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={
                    closeCertificationManager
                  }
                  disabled={submitting}
                  className="rounded-xl border border-white/10 px-5 py-3 font-semibold transition hover:bg-white/10 disabled:opacity-50"
                >
                  Annulla
                </button>

                <button
                  type="submit"
                  disabled={
                    submitting ||
                    selectedCertifications
                      .length === 0 ||
                    reason.trim()
                      .length < 10
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 font-bold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-40"
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

                  {submitting
                    ? "Salvataggio..."
                    : "Conferma aggiunta"}
                </button>
              </div>
            </form>
          </div>
        )}
    </>
  )
}