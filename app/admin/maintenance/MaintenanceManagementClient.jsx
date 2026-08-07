"use client"

import {
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react"

import { toast } from "sonner"

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

function dateTimeLocalToIso(value) {
  if (!value) {
    return null
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return null
  }

  return date.toISOString()
}

function StatusBadge({
  enabled,
  activeLabel = "Attivo",
  inactiveLabel = "Disattivato"
}) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
        enabled
          ? "bg-green-400/10 text-green-400"
          : "bg-red-400/10 text-red-300"
      }`}
    >
      {enabled
        ? activeLabel
        : inactiveLabel}
    </span>
  )
}

function SummaryCard({
  label,
  enabled,
  activeText,
  inactiveText,
  description
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        enabled
          ? "border-green-400/20 bg-green-400/5"
          : "border-red-400/20 bg-red-400/5"
      }`}
    >
      <p className="text-sm text-gray-400">
        {label}
      </p>

      <p
        className={`mt-3 text-2xl font-black ${
          enabled
            ? "text-green-400"
            : "text-red-300"
        }`}
      >
        {enabled
          ? activeText
          : inactiveText}
      </p>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  )
}

function ToggleRow({
  label,
  description,
  checked,
  onChange,
  disabled,
  danger = false
}) {
  return (
    <label
      className={`flex items-start justify-between gap-5 rounded-2xl border p-5 ${
        danger && !checked
          ? "border-red-400/30 bg-red-400/5"
          : "border-white/10 bg-white/[0.03]"
      } ${
        disabled
          ? "cursor-not-allowed opacity-60"
          : "cursor-pointer"
      }`}
    >
      <span>
        <span className="block font-bold">
          {label}
        </span>

        <span className="mt-2 block text-sm leading-6 text-gray-400">
          {description}
        </span>
      </span>

      <span className="relative mt-1 inline-flex shrink-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) =>
            onChange(event.target.checked)
          }
          disabled={disabled}
          className="peer sr-only"
        />

        <span className="h-7 w-12 rounded-full bg-gray-700 transition peer-checked:bg-green-500 peer-disabled:opacity-50" />

        <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-5" />
      </span>
    </label>
  )
}

export default function MaintenanceManagementClient() {
  const [loading, setLoading] =
    useState(true)

  const [saving, setSaving] =
    useState(false)

  const [settings, setSettings] =
    useState(null)

  const [updater, setUpdater] =
    useState(null)

  const [canManage, setCanManage] =
    useState(false)

  const [form, setForm] =
    useState(null)

  const [
    confirmationOpen,
    setConfirmationOpen
  ] = useState(false)

  const loadSettings =
    useCallback(async () => {
      try {
        setLoading(true)

        const response = await fetch(
          "/api/admin/maintenance",
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
              "Impossibile caricare le impostazioni."
          )

          return
        }

        setSettings(data.settings)
        setUpdater(data.updater || null)

        setCanManage(
          Boolean(
            data.permissions?.canManage
          )
        )

        setForm({
  maintenanceEnabled:
    data.settings
      .maintenanceEnabled,

  maintenanceTitle:
    data.settings
      .maintenanceTitle,

  maintenanceMessage:
    data.settings
      .maintenanceMessage,

  maintenanceStartsAt:
    toDateTimeLocal(
      data.settings
        .maintenanceStartsAt
    ),

  maintenanceEndsAt:
    toDateTimeLocal(
      data.settings
        .maintenanceEndsAt
    ),

  reason: ""
})
      } catch (error) {
        console.error(
          "Errore caricamento manutenzione:",
          error
        )

        toast.error(
          "Errore imprevisto durante il caricamento."
        )
      } finally {
        setLoading(false)
      }
    }, [])

  useEffect(() => {
    loadSettings()
  }, [loadSettings])

  const updateForm = (
    field,
    value
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value
    }))
  }

  const hasChanges =
    useMemo(() => {
      if (!settings || !form) {
        return false
      }

      return (
  form.maintenanceEnabled !==
    settings.maintenanceEnabled ||

  form.maintenanceTitle.trim() !==
    settings.maintenanceTitle ||

  form.maintenanceMessage.trim() !==
    settings.maintenanceMessage ||

  form.maintenanceStartsAt !==
    toDateTimeLocal(
      settings.maintenanceStartsAt
    ) ||

  form.maintenanceEndsAt !==
    toDateTimeLocal(
      settings.maintenanceEndsAt
    )
)
    }, [
      settings,
      form
    ])


  const openConfirmation = () => {
    if (!form || !canManage) {
      return
    }

    const title =
      form.maintenanceTitle.trim()

    const message =
      form.maintenanceMessage.trim()

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
      form.maintenanceStartsAt &&
      form.maintenanceEndsAt &&
      new Date(
        form.maintenanceEndsAt
      ) <=
        new Date(
          form.maintenanceStartsAt
        )
    ) {
      toast.error(
        "La data di fine deve essere successiva alla data di inizio."
      )

      return
    }

    if (!hasChanges) {
      toast.error(
        "Non ci sono modifiche da salvare."
      )

      return
    }

    const normalizedReason =
  form.reason.trim()

if (
  normalizedReason.length < 10 ||
  normalizedReason.length > 500
) {
  toast.error(
    "La motivazione deve contenere da 10 a 500 caratteri."
  )

  return
}

    setConfirmationOpen(true)
  }

  const closeConfirmation = () => {
    if (saving) {
      return
    }

    setConfirmationOpen(false)
  }

  const saveSettings = async () => {
    if (
      !form ||
      saving ||
      !canManage
    ) {
      return
    }

    try {
      setSaving(true)

      const response = await fetch(
        "/api/admin/maintenance",
        {
          method: "PATCH",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            maintenanceEnabled:
              form.maintenanceEnabled,

            maintenanceTitle:
              form.maintenanceTitle.trim(),

            maintenanceMessage:
              form.maintenanceMessage.trim(),

            maintenanceStartsAt:
  dateTimeLocalToIso(
    form.maintenanceStartsAt
  ),

maintenanceEndsAt:
  dateTimeLocalToIso(
    form.maintenanceEndsAt
  ),

           reason:
  form.reason.trim()
          })
        }
      )

      const data =
        await response.json()

      if (!response.ok) {
        toast.error(
          data.error ||
            "Impossibile aggiornare le impostazioni."
        )

        return
      }

      toast.success(
        data.message ||
          "Impostazioni aggiornate."
      )

      setConfirmationOpen(false)

      await loadSettings()
    } catch (error) {
      console.error(
        "Errore aggiornamento manutenzione:",
        error
      )

      toast.error(
        "Errore imprevisto durante il salvataggio."
      )
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#0B1028] p-8 text-center text-gray-400">
        Caricamento stato operativo...
      </div>
    )
  }

  if (!settings || !form) {
    return (
      <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6 text-red-300">
        Impostazioni operative non disponibili.
      </div>
    )
  }

  return (
    <div className="space-y-6">
     <section className="grid grid-cols-1 gap-4 lg:max-w-xl">
  <SummaryCard
    label="Manutenzione"
    enabled={
      !settings.maintenanceActive
    }
    activeText="Sito operativo"
    inactiveText="Manutenzione attiva"
    description={
      settings.maintenanceEnabled &&
      !settings.maintenanceActive
        ? "Manutenzione configurata ma non ancora attiva."
        : "Stato effettivo della piattaforma in questo momento."
    }
  />
</section>

      <section className="rounded-2xl border border-white/10 bg-[#0B1028] p-5 sm:p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <h2 className="text-xl font-bold">
              Stato attuale
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Ultimo aggiornamento:{" "}
              {formatDate(
                settings.updatedAt
              )}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Operatore:{" "}
              {updater?.displayName ||
                "Sistema o operatore non disponibile"}
            </p>
          </div>

          <button
            type="button"
            onClick={loadSettings}
            disabled={loading}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/10 disabled:opacity-50"
          >
            Aggiorna
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-white/[0.03] p-4">
            <p className="text-xs uppercase text-gray-500">
              Titolo manutenzione
            </p>

            <p className="mt-2 font-semibold">
              {settings.maintenanceTitle}
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.03] p-4">
            <p className="text-xs uppercase text-gray-500">
              Stato programmato
            </p>

            <div className="mt-2">
              <StatusBadge
                enabled={
                  settings.maintenanceEnabled
                }
                activeLabel="Configurata"
                inactiveLabel="Non configurata"
              />
            </div>
          </div>

          <div className="rounded-xl bg-white/[0.03] p-4">
            <p className="text-xs uppercase text-gray-500">
              Inizio
            </p>

            <p className="mt-2">
              {formatDate(
                settings
                  .maintenanceStartsAt
              )}
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.03] p-4">
            <p className="text-xs uppercase text-gray-500">
              Fine
            </p>

            <p className="mt-2">
              {formatDate(
                settings
                  .maintenanceEndsAt
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#0B1028] p-5 sm:p-6">
        <div>
          <h2 className="text-xl font-bold">
            Configurazione operativa
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Le modifiche non vengono salvate automaticamente.
            Sarà richiesta una conferma finale.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <ToggleRow
            label="Modalità manutenzione"
            description="Quando diventa attiva, gli utenti verranno indirizzati alla pagina di manutenzione. Il Team continuerà ad accedere."
            checked={
              form.maintenanceEnabled
            }
            onChange={(value) =>
              updateForm(
                "maintenanceEnabled",
                value
              )
            }
            disabled={!canManage}
            danger
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Titolo mostrato agli utenti
              </label>

              <input
                value={
                  form.maintenanceTitle
                }
                onChange={(event) =>
                  updateForm(
                    "maintenanceTitle",
                    event.target.value.slice(
                      0,
                      150
                    )
                  )
                }
                disabled={!canManage}
                maxLength={150}
                className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-green-400/50 disabled:opacity-60"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Periodo
              </label>

              <p className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm leading-6 text-gray-400">
                Senza date, la manutenzione viene
                considerata attiva immediatamente quando
                l’interruttore è abilitato.
              </p>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Messaggio mostrato agli utenti
            </label>

            <textarea
              value={
                form.maintenanceMessage
              }
              onChange={(event) =>
                updateForm(
                  "maintenanceMessage",
                  event.target.value.slice(
                    0,
                    2000
                  )
                )
              }
              disabled={!canManage}
              maxLength={2000}
              className="h-32 w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-green-400/50 disabled:opacity-60"
            />

            <p className="mt-2 text-right text-xs text-gray-500">
              {
                form
                  .maintenanceMessage
                  .length
              }
              /2000
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Inizio manutenzione
              </label>

              <input
                type="datetime-local"
                value={
                  form
                    .maintenanceStartsAt
                }
                onChange={(event) =>
                  updateForm(
                    "maintenanceStartsAt",
                    event.target.value
                  )
                }
                disabled={!canManage}
                className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none disabled:opacity-60"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Fine manutenzione
              </label>

              <input
                type="datetime-local"
                value={
                  form
                    .maintenanceEndsAt
                }
                onChange={(event) =>
                  updateForm(
                    "maintenanceEndsAt",
                    event.target.value
                  )
                }
                disabled={!canManage}
                className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none disabled:opacity-60"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Motivazione amministrativa
            </label>

            <textarea
              value={form.reason}
              minLength={10}
              required
              onChange={(event) =>
                updateForm(
                  "reason",
                  event.target.value.slice(
                    0,
                    500
                  )
                )
              }
              disabled={!canManage}
              maxLength={500}
              placeholder="Spiega il motivo della modifica..."
              className="h-24 w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 outline-none disabled:opacity-60"
            />

            <p className="mt-2 text-xs text-gray-500">
              La motivazione verrà inserita nel registro
              amministrativo.
            </p>
          </div>

          {canManage && (
            <button
              type="button"
              onClick={openConfirmation}
              disabled={
                saving ||
                !hasChanges
              }
              className="w-full rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Verifica e salva modifiche
            </button>
          )}
        </div>
      </section>

      {confirmationOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 p-4">
          <div className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0B1028] p-6 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Conferma operativa
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Salva le nuove impostazioni?
            </h2>

            <p className="mt-3 leading-7 text-gray-300">
              Le impostazioni verranno registrate
              immediatamente nel database.
            </p>
            <div
  className={`mt-5 rounded-xl border p-4 ${
    form.maintenanceEnabled
      ? "border-red-400/30 bg-red-400/5"
      : "border-green-400/20 bg-green-400/5"
  }`}
>
  <p
    className={`font-bold ${
      form.maintenanceEnabled
        ? "text-red-300"
        : "text-green-300"
    }`}
  >
    Stato dopo il salvataggio
  </p>

  <p className="mt-2 text-sm leading-6 text-gray-300">
    {form.maintenanceEnabled
      ? "La modalità manutenzione risulterà abilitata."
      : "La modalità manutenzione risulterà disabilitata e il sito resterà operativo."}
  </p>

  {form.maintenanceStartsAt && (
    <p className="mt-3 text-xs text-gray-400">
      Inizio:{" "}
      {formatDate(
        form.maintenanceStartsAt
      )}
    </p>
  )}

  {form.maintenanceEndsAt && (
    <p className="mt-1 text-xs text-gray-400">
      Fine:{" "}
      {formatDate(
        form.maintenanceEndsAt
      )}
    </p>
  )}
</div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={saveSettings}
                disabled={saving}
                className="flex-1 rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black hover:bg-yellow-300 disabled:opacity-50"
              >
                {saving
                  ? "Salvataggio..."
                  : "Conferma modifiche"}
              </button>

              <button
                type="button"
                onClick={closeConfirmation}
                disabled={saving}
                className="rounded-xl border border-white/10 px-5 py-3 hover:bg-white/10 disabled:opacity-50"
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