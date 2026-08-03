"use client"

import {
  useCallback,
  useEffect,
  useState
} from "react"

import { toast } from "sonner"

const emptyForm = {
  title: "",
  message: "",
  audience: "all",
  severity: "info",
  link: "",
  startsAt: "",
  endsAt: "",
  isDismissible: true,
  reason: ""
}

const statusLabels = {
  draft: "Bozza",
  published: "Pubblicato",
  archived: "Archiviato"
}

const audienceLabels = {
  all: "Tutti gli utenti",
  pilot: "Solo piloti",
  client: "Solo clienti"
}

const severityLabels = {
  info: "Informazione",
  success: "Successo",
  warning: "Attenzione",
  critical: "Critico"
}

function formatNumber(value) {
  return Number(value || 0)
    .toLocaleString("it-IT")
}

function formatDate(value) {
  if (!value) {
    return "Non impostata"
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return "Data non valida"
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

function toDateTimeLocal(value) {
  if (!value) {
    return ""
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return ""
  }

  const localDate = new Date(
    date.getTime() -
      date.getTimezoneOffset() * 60_000
  )

  return localDate
    .toISOString()
    .slice(0, 16)
}

function getCurrentVisibility(item) {
  if (item.status !== "published") {
    return false
  }

  const now = Date.now()

  const startsAt = item.startsAt
    ? new Date(item.startsAt).getTime()
    : null

  const endsAt = item.endsAt
    ? new Date(item.endsAt).getTime()
    : null

  if (
    startsAt !== null &&
    startsAt > now
  ) {
    return false
  }

  if (
    endsAt !== null &&
    endsAt <= now
  ) {
    return false
  }

  return true
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

      <p className="mt-3 text-3xl font-black">
        {value}
      </p>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  )
}

function StatusBadge({ status }) {
  const classes = {
    draft:
      "bg-yellow-400/10 text-yellow-300",

    published:
      "bg-green-400/10 text-green-400",

    archived:
      "bg-gray-400/10 text-gray-300"
  }

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
        classes[status] ||
        "bg-white/5 text-gray-300"
      }`}
    >
      {statusLabels[status] ||
        status ||
        "Sconosciuto"}
    </span>
  )
}

function SeverityBadge({ severity }) {
  const classes = {
    info:
      "bg-blue-400/10 text-blue-300",

    success:
      "bg-green-400/10 text-green-400",

    warning:
      "bg-yellow-400/10 text-yellow-300",

    critical:
      "bg-red-400/10 text-red-300"
  }

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
        classes[severity] ||
        "bg-white/5 text-gray-300"
      }`}
    >
      {severityLabels[severity] ||
        severity ||
        "Sconosciuta"}
    </span>
  )
}

function DetailBox({
  label,
  value,
  className = ""
}) {
  return (
    <div
      className={`rounded-xl bg-white/[0.03] p-4 ${className}`}
    >
      <p className="text-xs uppercase tracking-wide text-gray-500">
        {label}
      </p>

      <p className="mt-2 break-words text-sm leading-6 text-gray-200">
        {value || "Non disponibile"}
      </p>
    </div>
  )
}

export default function AnnouncementsManagementClient() {
  const [
    announcements,
    setAnnouncements
  ] = useState([])

  const [loading, setLoading] =
    useState(true)

  const [canManage, setCanManage] =
    useState(false)

  const [
    selectedAnnouncement,
    setSelectedAnnouncement
  ] = useState(null)

  const [
    editorOpen,
    setEditorOpen
  ] = useState(false)

  const [
    editingAnnouncement,
    setEditingAnnouncement
  ] = useState(null)

  const [form, setForm] =
    useState(emptyForm)

  const [saving, setSaving] =
    useState(false)

  const [
    actionAnnouncement,
    setActionAnnouncement
  ] = useState(null)

  const [
    actionType,
    setActionType
  ] = useState("")

  const [
    actionReason,
    setActionReason
  ] = useState("")

  const [
    processingAction,
    setProcessingAction
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
    audienceFilter,
    setAudienceFilter
  ] = useState("all")

  const [
    severityFilter,
    setSeverityFilter
  ] = useState("all")

  const [page, setPage] =
    useState(1)

  const [summary, setSummary] =
    useState({
      total: 0,
      drafts: 0,
      published: 0,
      archived: 0
    })

  const [
    pagination,
    setPagination
  ] = useState({
    page: 1,
    pageSize: 25,
    total: 0,
    totalPages: 1
  })

  const loadAnnouncements =
    useCallback(async () => {
      try {
        setLoading(true)

        const searchParams =
          new URLSearchParams({
            page: String(page),
            status: statusFilter,
            audience: audienceFilter,
            severity: severityFilter
          })

        if (appliedSearch) {
          searchParams.set(
            "search",
            appliedSearch
          )
        }

        const response = await fetch(
          `/api/admin/announcements?${searchParams.toString()}`,
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
              "Impossibile caricare gli avvisi."
          )

          return
        }

        setAnnouncements(
          data.announcements || []
        )

        setSummary(
          data.summary || {
            total: 0,
            drafts: 0,
            published: 0,
            archived: 0
          }
        )

        setPagination(
          data.pagination || {
            page: 1,
            pageSize: 25,
            total: 0,
            totalPages: 1
          }
        )

        setCanManage(
          Boolean(
            data.permissions?.canManage
          )
        )
      } catch (error) {
        console.error(
          "Errore caricamento avvisi:",
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
      audienceFilter,
      severityFilter,
      appliedSearch
    ])

  useEffect(() => {
    loadAnnouncements()
  }, [loadAnnouncements])

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
    setAudienceFilter("all")
    setSeverityFilter("all")
    setPage(1)
  }

  const updateForm = (
    field,
    value
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value
    }))
  }

  const openCreate = () => {
    setEditingAnnouncement(null)
    setForm(emptyForm)
    setEditorOpen(true)
  }

  const openEdit = (item) => {
    setEditingAnnouncement(item)

    setForm({
      title:
        item.title || "",

      message:
        item.message || "",

      audience:
        item.audience || "all",

      severity:
        item.severity || "info",

      link:
        item.link || "",

      startsAt:
        toDateTimeLocal(
          item.startsAt
        ),

      endsAt:
        toDateTimeLocal(
          item.endsAt
        ),

      isDismissible:
        item.isDismissible !== false,

      reason: ""
    })

    setEditorOpen(true)
  }

  const closeEditor = () => {
    if (saving) {
      return
    }

    setEditorOpen(false)
    setEditingAnnouncement(null)
    setForm(emptyForm)
  }

  const submitEditor = async (
    event
  ) => {
    event.preventDefault()

    if (saving) {
      return
    }

    const title =
      form.title.trim()

    const message =
      form.message.trim()

    if (
      title.length < 3 ||
      title.length > 150
    ) {
      toast.error(
        "Il titolo deve contenere da 3 a 150 caratteri."
      )

      return
    }

    if (
      message.length < 5 ||
      message.length > 2000
    ) {
      toast.error(
        "Il messaggio deve contenere da 5 a 2.000 caratteri."
      )

      return
    }

    if (
      form.startsAt &&
      form.endsAt &&
      new Date(form.endsAt) <=
        new Date(form.startsAt)
    ) {
      toast.error(
        "La data di fine deve essere successiva alla data di inizio."
      )

      return
    }

    if (
      form.link &&
      (
        !form.link.startsWith("/") ||
        form.link.startsWith("//")
      )
    ) {
      toast.error(
        "Il collegamento deve essere interno, per esempio /dashboard."
      )

      return
    }

    const payload = {
      title,
      message,
      audience:
        form.audience,
      severity:
        form.severity,
      link:
        form.link.trim() || null,
      startsAt:
        form.startsAt || null,
      endsAt:
        form.endsAt || null,
      isDismissible:
        form.isDismissible,
      reason:
        form.reason.trim() || null
    }

    try {
      setSaving(true)

      const editing =
        Boolean(
          editingAnnouncement
        )

      const response = await fetch(
        "/api/admin/announcements",
        {
          method:
            editing
              ? "PATCH"
              : "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify(
            editing
              ? {
                  ...payload,

                  action:
                    "update",

                  announcementId:
                    editingAnnouncement.id
                }
              : payload
          )
        }
      )

      const data =
        await response.json()

      if (!response.ok) {
        toast.error(
          data.error ||
            "Impossibile salvare l’avviso."
        )

        return
      }

      toast.success(
        data.message ||
          "Avviso salvato correttamente."
      )

      setEditorOpen(false)
      setEditingAnnouncement(null)
      setForm(emptyForm)

      await loadAnnouncements()
    } catch (error) {
      console.error(
        "Errore salvataggio avviso:",
        error
      )

      toast.error(
        "Errore imprevisto durante il salvataggio."
      )
    } finally {
      setSaving(false)
    }
  }

  const openAction = (
    item,
    action
  ) => {
    setActionAnnouncement(item)
    setActionType(action)
    setActionReason("")
  }

  const closeAction = () => {
    if (processingAction) {
      return
    }

    setActionAnnouncement(null)
    setActionType("")
    setActionReason("")
  }

  const submitAction = async () => {
    if (
      !actionAnnouncement ||
      !actionType ||
      processingAction
    ) {
      return
    }

    try {
      setProcessingAction(true)

      const response = await fetch(
        "/api/admin/announcements",
        {
          method: "PATCH",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            announcementId:
              actionAnnouncement.id,

            action:
              actionType,

            reason:
              actionReason.trim() ||
              null
          })
        }
      )

      const data =
        await response.json()

      if (!response.ok) {
        toast.error(
          data.error ||
            "Impossibile completare l’operazione."
        )

        return
      }

      toast.success(
        data.message ||
          "Operazione completata."
      )

      closeAction()
      setSelectedAnnouncement(null)

      await loadAnnouncements()
    } catch (error) {
      console.error(
        "Errore comando avviso:",
        error
      )

      toast.error(
        "Errore imprevisto durante l’operazione."
      )
    } finally {
      setProcessingAction(false)
    }
  }

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          label="Avvisi totali"
          value={formatNumber(
            summary.total
          )}
          description="Tutte le comunicazioni create."
        />

        <SummaryCard
          label="Bozze"
          value={formatNumber(
            summary.drafts
          )}
          description="Avvisi ancora non visibili."
          className="border-yellow-400/20 bg-yellow-400/5"
        />

        <SummaryCard
          label="Pubblicati"
          value={formatNumber(
            summary.published
          )}
          description="Avvisi pubblicati o programmati."
          className="border-green-400/20 bg-green-400/5"
        />

        <SummaryCard
          label="Archiviati"
          value={formatNumber(
            summary.archived
          )}
          description="Comunicazioni non più attive."
        />
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#0B1028] p-5 sm:p-6">
        <form
          onSubmit={applySearch}
          className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_180px_180px_180px_auto]"
        >
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Cerca
            </label>

            <input
              value={searchInput}
              onChange={(event) =>
                setSearchInput(
                  event.target.value
                )
              }
              placeholder="Titolo o contenuto"
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
                setStatusFilter(
                  event.target.value
                )

                setPage(1)
              }}
              className="w-full rounded-xl border border-white/10 bg-[#111735] p-3 outline-none"
            >
              <option value="all">
                Tutti
              </option>

              <option value="draft">
                Bozze
              </option>

              <option value="published">
                Pubblicati
              </option>

              <option value="archived">
                Archiviati
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Destinatari
            </label>

            <select
              value={audienceFilter}
              onChange={(event) => {
                setAudienceFilter(
                  event.target.value
                )

                setPage(1)
              }}
              className="w-full rounded-xl border border-white/10 bg-[#111735] p-3 outline-none"
            >
              <option value="all">
                Tutti
              </option>

              <option value="pilot">
                Piloti
              </option>

              <option value="client">
                Clienti
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Gravità
            </label>

            <select
              value={severityFilter}
              onChange={(event) => {
                setSeverityFilter(
                  event.target.value
                )

                setPage(1)
              }}
              className="w-full rounded-xl border border-white/10 bg-[#111735] p-3 outline-none"
            >
              <option value="all">
                Tutte
              </option>

              <option value="info">
                Informazione
              </option>

              <option value="success">
                Successo
              </option>

              <option value="warning">
                Attenzione
              </option>

              <option value="critical">
                Critico
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
              Registro avvisi
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              {pagination.total} avvisi trovati
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {canManage && (
              <button
                type="button"
                onClick={openCreate}
                className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-black hover:bg-green-400"
              >
                Nuovo avviso
              </button>
            )}

            <button
              type="button"
              onClick={loadAnnouncements}
              disabled={loading}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/10 disabled:opacity-50"
            >
              Aggiorna
            </button>
          </div>
        </div>

        {loading ? (
          <div className="p-8 text-center text-sm text-gray-400">
            Caricamento avvisi...
          </div>
        ) : announcements.length === 0 ? (
          <div className="p-8 text-center">
            <p className="font-semibold">
              Nessun avviso trovato
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Le nuove comunicazioni compariranno qui.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {announcements.map(
              (item) => (
                <article
                  key={item.id}
                  className="p-5"
                >
                  <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <StatusBadge
                          status={item.status}
                        />

                        <SeverityBadge
                          severity={item.severity}
                        />

                        {getCurrentVisibility(
                          item
                        ) && (
                          <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-black">
                            Visibile ora
                          </span>
                        )}
                      </div>

                      <h3 className="mt-4 text-xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-gray-300">
                        {item.message}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                        <span>
                          Destinatari:{" "}
                          {audienceLabels[
                            item.audience
                          ]}
                        </span>

                        <span>
                          Inizio:{" "}
                          {formatDate(
                            item.startsAt
                          )}
                        </span>

                        <span>
                          Fine:{" "}
                          {formatDate(
                            item.endsAt
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:max-w-[310px] lg:justify-end">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedAnnouncement(
                            item
                          )
                        }
                        className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/10"
                      >
                        Dettagli
                      </button>

                      {canManage &&
                        item.status !==
                          "archived" && (
                          <button
                            type="button"
                            onClick={() =>
                              openEdit(item)
                            }
                            className="rounded-lg border border-blue-400/30 px-4 py-2 text-sm font-semibold text-blue-300 hover:bg-blue-400/10"
                          >
                            Modifica
                          </button>
                        )}

                      {canManage &&
                        item.status ===
                          "draft" && (
                          <button
                            type="button"
                            onClick={() =>
                              openAction(
                                item,
                                "publish"
                              )
                            }
                            className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-black hover:bg-green-400"
                          >
                            Pubblica
                          </button>
                        )}

                      {canManage &&
                        item.status !==
                          "archived" && (
                          <button
                            type="button"
                            onClick={() =>
                              openAction(
                                item,
                                "archive"
                              )
                            }
                            className="rounded-lg border border-red-400/30 px-4 py-2 text-sm font-semibold text-red-300 hover:bg-red-400/10"
                          >
                            Archivia
                          </button>
                        )}
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
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

      {editorOpen && canManage && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 p-4">
          <form
            onSubmit={submitEditor}
            className="max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0B1028] p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                  Gestione avviso
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  {editingAnnouncement
                    ? "Modifica avviso"
                    : "Nuovo avviso"}
                </h2>

                {!editingAnnouncement && (
                  <p className="mt-2 text-sm text-gray-400">
                    Il nuovo avviso verrà salvato come bozza.
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={closeEditor}
                disabled={saving}
                className="rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-white/10 disabled:opacity-50"
              >
                Chiudi
              </button>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Titolo
                </label>

                <input
                  value={form.title}
                  onChange={(event) =>
                    updateForm(
                      "title",
                      event.target.value.slice(
                        0,
                        150
                      )
                    )
                  }
                  minLength={3}
                  maxLength={150}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-green-400/50"
                />

                <p className="mt-2 text-right text-xs text-gray-500">
                  {form.title.length}/150
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Messaggio
                </label>

                <textarea
                  value={form.message}
                  onChange={(event) =>
                    updateForm(
                      "message",
                      event.target.value.slice(
                        0,
                        2000
                      )
                    )
                  }
                  minLength={5}
                  maxLength={2000}
                  required
                  className="h-40 w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-green-400/50"
                />

                <p className="mt-2 text-right text-xs text-gray-500">
                  {form.message.length}/2000
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Destinatari
                  </label>

                  <select
                    value={form.audience}
                    onChange={(event) =>
                      updateForm(
                        "audience",
                        event.target.value
                      )
                    }
                    className="w-full rounded-xl border border-white/10 bg-[#111735] p-3 outline-none"
                  >
                    <option value="all">
                      Tutti gli utenti
                    </option>

                    <option value="pilot">
                      Solo piloti
                    </option>

                    <option value="client">
                      Solo clienti
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Gravità
                  </label>

                  <select
                    value={form.severity}
                    onChange={(event) =>
                      updateForm(
                        "severity",
                        event.target.value
                      )
                    }
                    className="w-full rounded-xl border border-white/10 bg-[#111735] p-3 outline-none"
                  >
                    <option value="info">
                      Informazione
                    </option>

                    <option value="success">
                      Successo
                    </option>

                    <option value="warning">
                      Attenzione
                    </option>

                    <option value="critical">
                      Critico
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Collegamento interno facoltativo
                </label>

                <input
                  value={form.link}
                  onChange={(event) =>
                    updateForm(
                      "link",
                      event.target.value.slice(
                        0,
                        500
                      )
                    )
                  }
                  placeholder="/dashboard"
                  maxLength={500}
                  className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-green-400/50"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Inizio facoltativo
                  </label>

                  <input
                    type="datetime-local"
                    value={form.startsAt}
                    onChange={(event) =>
                      updateForm(
                        "startsAt",
                        event.target.value
                      )
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Fine facoltativa
                  </label>

                  <input
                    type="datetime-local"
                    value={form.endsAt}
                    onChange={(event) =>
                      updateForm(
                        "endsAt",
                        event.target.value
                      )
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none"
                  />
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <input
                  type="checkbox"
                  checked={
                    form.isDismissible
                  }
                  onChange={(event) =>
                    updateForm(
                      "isDismissible",
                      event.target.checked
                    )
                  }
                  className="mt-1 h-4 w-4"
                />

                <span>
                  <span className="block font-semibold">
                    L’utente può chiudere l’avviso
                  </span>

                  <span className="mt-1 block text-sm text-gray-400">
                    Una volta chiuso, non verrà più mostrato a quell’utente.
                  </span>
                </span>
              </label>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Nota amministrativa facoltativa
                </label>

                <textarea
                  value={form.reason}
                  onChange={(event) =>
                    updateForm(
                      "reason",
                      event.target.value.slice(
                        0,
                        500
                      )
                    )
                  }
                  maxLength={500}
                  className="h-24 w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={saving}
                className="w-full rounded-xl bg-green-500 px-5 py-3 font-bold text-black hover:bg-green-400 disabled:opacity-50"
              >
                {saving
                  ? "Salvataggio..."
                  : editingAnnouncement
                    ? "Salva modifiche"
                    : "Crea bozza"}
              </button>
            </div>
          </form>
        </div>
      )}

      {actionAnnouncement && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 p-4">
          <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#0B1028] p-6 shadow-2xl">
            <h2 className="text-2xl font-bold">
              {actionType === "publish"
                ? "Pubblica avviso"
                : "Archivia avviso"}
            </h2>

            <p className="mt-3 text-gray-300">
              {actionType === "publish"
                ? `Vuoi rendere disponibile “${actionAnnouncement.title}”?`
                : `Vuoi archiviare “${actionAnnouncement.title}”?`}
            </p>

            <div className="mt-5">
              <label className="mb-2 block text-sm text-gray-400">
                Motivazione facoltativa
              </label>

              <textarea
                value={actionReason}
                onChange={(event) =>
                  setActionReason(
                    event.target.value.slice(
                      0,
                      500
                    )
                  )
                }
                maxLength={500}
                className="h-28 w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 outline-none"
              />
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={submitAction}
                disabled={processingAction}
                className={`flex-1 rounded-xl px-5 py-3 font-bold disabled:opacity-50 ${
                  actionType === "publish"
                    ? "bg-green-500 text-black hover:bg-green-400"
                    : "bg-red-500 text-white hover:bg-red-400"
                }`}
              >
                {processingAction
                  ? "Operazione in corso..."
                  : actionType === "publish"
                    ? "Conferma pubblicazione"
                    : "Conferma archiviazione"}
              </button>

              <button
                type="button"
                onClick={closeAction}
                disabled={processingAction}
                className="rounded-xl border border-white/10 px-5 py-3 hover:bg-white/10 disabled:opacity-50"
              >
                Annulla
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedAnnouncement && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0B1028] p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap gap-2">
                  <StatusBadge
                    status={
                      selectedAnnouncement.status
                    }
                  />

                  <SeverityBadge
                    severity={
                      selectedAnnouncement.severity
                    }
                  />
                </div>

                <h2 className="mt-4 text-2xl font-bold">
                  {selectedAnnouncement.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedAnnouncement(
                    null
                  )
                }
                className="rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-white/10"
              >
                Chiudi
              </button>
            </div>

            <p className="mt-6 whitespace-pre-wrap leading-7 text-gray-300">
              {selectedAnnouncement.message}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <DetailBox
                label="Destinatari"
                value={
                  audienceLabels[
                    selectedAnnouncement
                      .audience
                  ]
                }
              />

              <DetailBox
                label="Chiusura consentita"
                value={
                  selectedAnnouncement
                    .isDismissible
                    ? "Sì"
                    : "No"
                }
              />

              <DetailBox
                label="Inizio"
                value={formatDate(
                  selectedAnnouncement
                    .startsAt
                )}
              />

              <DetailBox
                label="Fine"
                value={formatDate(
                  selectedAnnouncement
                    .endsAt
                )}
              />

              <DetailBox
                label="Pubblicato"
                value={formatDate(
                  selectedAnnouncement
                    .publishedAt
                )}
              />

              <DetailBox
                label="Archiviato"
                value={formatDate(
                  selectedAnnouncement
                    .archivedAt
                )}
              />

              <DetailBox
                label="Collegamento"
                value={
                  selectedAnnouncement.link
                }
                className="sm:col-span-2"
              />

              <DetailBox
                label="Creato da"
                value={
                  selectedAnnouncement
                    .creator
                    ?.displayName ||
                  "Operatore non disponibile"
                }
              />

              <DetailBox
                label="Ultima modifica"
                value={
                  selectedAnnouncement
                    .updater
                    ?.displayName ||
                  "Operatore non disponibile"
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}