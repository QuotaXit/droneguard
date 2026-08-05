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
    return "Non disponibile"
  }

  try {
    return new Intl.DateTimeFormat(
      "it-IT",
      {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Europe/Rome"
      }
    ).format(new Date(value))
  } catch {
    return String(value)
  }
}

function SummaryCard({
  label,
  enabled,
  activeText,
  inactiveText,
  description
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1028] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-gray-400">
            {label}
          </p>

          <p
            className={`mt-3 text-xl font-black ${
              enabled
                ? "text-green-300"
                : "text-red-300"
            }`}
          >
            {enabled
              ? activeText
              : inactiveText}
          </p>
        </div>

        <span
          className={`mt-1 h-3 w-3 rounded-full ${
            enabled
              ? "bg-green-400"
              : "bg-red-400"
          }`}
        />
      </div>

      <p className="mt-3 text-xs leading-5 text-gray-500">
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
  disabled
}) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.05]">
      <div className="min-w-0">
        <p className="font-semibold text-white">
          {label}
        </p>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          {description}
        </p>
      </div>

      <span className="relative mt-1 inline-flex shrink-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) =>
            onChange(
              event.target.checked
            )
          }
          disabled={disabled}
          className="peer sr-only"
        />

        <span className="h-7 w-12 rounded-full bg-gray-700 transition peer-checked:bg-green-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-50" />

        <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-5" />
      </span>
    </label>
  )
}

export default function SettingsManagementClient() {
  const [
    loading,
    setLoading
  ] = useState(true)

  const [
    saving,
    setSaving
  ] = useState(false)

  const [
    settings,
    setSettings
  ] = useState(null)

  const [
    form,
    setForm
  ] = useState(null)

  const [
    updater,
    setUpdater
  ] = useState(null)

  const [
    canManage,
    setCanManage
  ] = useState(false)

  const [
    confirmationOpen,
    setConfirmationOpen
  ] = useState(false)

  const [
    reason,
    setReason
  ] = useState("")

  const loadSettings =
    useCallback(async () => {
      try {
        setLoading(true)

        const response =
          await fetch(
            "/api/admin/settings",
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
              "Impossibile caricare le impostazioni."
          )

          return
        }

        if (!data?.settings) {
          toast.error(
            "Configurazione della piattaforma non valida."
          )

          return
        }

        setSettings(
          data.settings
        )

        setForm({
          registrationsEnabled:
            Boolean(
              data.settings
                .registrationsEnabled
            ),

          jobCreationEnabled:
            Boolean(
              data.settings
                .jobCreationEnabled
            ),

          applicationsEnabled:
            Boolean(
              data.settings
                .applicationsEnabled
            ),

          paymentsEnabled:
            Boolean(
              data.settings
                .paymentsEnabled
            )
        })

        setUpdater(
          data.updater ||
          null
        )

        setCanManage(
          Boolean(
            data.permissions
              ?.canManage
          )
        )
      } catch (error) {
        console.error(
          "[admin-settings] Errore caricamento:",
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

  const hasChanges =
    useMemo(() => {
      if (
        !settings ||
        !form
      ) {
        return false
      }

      return (
        form.registrationsEnabled !==
          settings.registrationsEnabled ||

        form.jobCreationEnabled !==
          settings.jobCreationEnabled ||

        form.applicationsEnabled !==
          settings.applicationsEnabled ||

        form.paymentsEnabled !==
          settings.paymentsEnabled
      )
    }, [
      settings,
      form
    ])

  const disabledServices =
    useMemo(() => {
      if (!form) {
        return []
      }

      const services = []

      if (
        !form.registrationsEnabled
      ) {
        services.push(
          "Registrazioni"
        )
      }

      if (
        !form.jobCreationEnabled
      ) {
        services.push(
          "Pubblicazione lavori"
        )
      }

      if (
        !form.applicationsEnabled
      ) {
        services.push(
          "Candidature"
        )
      }

      if (
        !form.paymentsEnabled
      ) {
        services.push(
          "Pagamenti"
        )
      }

      return services
    }, [form])

  const updateForm = (
    field,
    value
  ) => {
    setForm(
      (current) =>
        current
          ? {
              ...current,
              [field]: value
            }
          : current
    )
  }

  const resetChanges = () => {
    if (
      !settings ||
      saving
    ) {
      return
    }

    setForm({
      registrationsEnabled:
        settings.registrationsEnabled,

      jobCreationEnabled:
        settings.jobCreationEnabled,

      applicationsEnabled:
        settings.applicationsEnabled,

      paymentsEnabled:
        settings.paymentsEnabled
    })

    setReason("")
    setConfirmationOpen(false)
  }

  const openConfirmation = () => {
    if (
      !canManage ||
      !hasChanges ||
      !form
    ) {
      return
    }

    setReason("")
    setConfirmationOpen(true)
  }

  const closeConfirmation = () => {
    if (saving) {
      return
    }

    setConfirmationOpen(false)
    setReason("")
  }

  const saveSettings = async (
    event
  ) => {
    event.preventDefault()

    if (
      !form ||
      !canManage ||
      !hasChanges ||
      saving
    ) {
      return
    }

    const normalizedReason =
      reason.trim()

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
      setSaving(true)

      const response =
        await fetch(
          "/api/admin/settings",
          {
            method: "PATCH",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
              registrationsEnabled:
                form.registrationsEnabled,

              jobCreationEnabled:
                form.jobCreationEnabled,

              applicationsEnabled:
                form.applicationsEnabled,

              paymentsEnabled:
                form.paymentsEnabled,

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
            "Impossibile salvare le impostazioni."
        )

        return
      }

      if (!data?.settings) {
        toast.error(
          "Il server non ha restituito la configurazione aggiornata."
        )

        return
      }

      setSettings(
        data.settings
      )

      setForm({
        registrationsEnabled:
          data.settings
            .registrationsEnabled,

        jobCreationEnabled:
          data.settings
            .jobCreationEnabled,

        applicationsEnabled:
          data.settings
            .applicationsEnabled,

        paymentsEnabled:
          data.settings
            .paymentsEnabled
      })

      setUpdater(
        data.updater ||
        null
      )

      setReason("")
      setConfirmationOpen(false)

      toast.success(
        data.message ||
          "Impostazioni aggiornate correttamente."
      )
    } catch (error) {
      console.error(
        "[admin-settings] Errore salvataggio:",
        error
      )

      toast.error(
        "Errore imprevisto durante il salvataggio."
      )
    } finally {
      setSaving(false)
    }
  }

  if (
    loading &&
    !settings
  ) {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#0B1028] p-10 text-center text-sm text-gray-400">
        Caricamento impostazioni...
      </div>
    )
  }

  if (
    !settings ||
    !form
  ) {
    return (
      <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
        <p className="font-semibold text-red-300">
          Impostazioni non disponibili
        </p>

        <p className="mt-2 text-sm text-gray-400">
          Non è stato possibile recuperare la
          configurazione operativa della piattaforma.
        </p>

        <button
          type="button"
          onClick={loadSettings}
          className="mt-5 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/10"
        >
          Riprova
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          label="Registrazioni"
          enabled={
            settings
              .registrationsEnabled
          }
          activeText="Aperte"
          inactiveText="Bloccate"
          description="Creazione di nuovi account pilota e cliente."
        />

        <SummaryCard
          label="Nuovi lavori"
          enabled={
            settings
              .jobCreationEnabled
          }
          activeText="Consentiti"
          inactiveText="Bloccati"
          description="Pubblicazione di nuove richieste da parte dei clienti."
        />

        <SummaryCard
          label="Candidature"
          enabled={
            settings
              .applicationsEnabled
          }
          activeText="Consentite"
          inactiveText="Bloccate"
          description="Invio delle candidature da parte dei piloti."
        />

        <SummaryCard
          label="Pagamenti"
          enabled={
            settings
              .paymentsEnabled
          }
          activeText="Abilitati"
          inactiveText="Bloccati"
          description="Creazione di nuove sessioni Checkout Stripe."
        />
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#0B1028] p-5 sm:p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <h2 className="text-xl font-bold">
              Stato operativo
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
            disabled={
              loading ||
              saving
            }
            className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/10 disabled:opacity-50"
          >
            {loading
              ? "Aggiornamento..."
              : "Aggiorna"}
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#0B1028] p-5 sm:p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
            Controlli operativi
          </p>

          <h2 className="mt-3 text-2xl font-black">
            Funzioni della piattaforma
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-400">
            Ogni servizio può essere bloccato
            singolarmente senza attivare la modalità
            manutenzione globale.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-2">
          <ToggleRow
            label="Registrazioni abilitate"
            description="Permette la creazione di nuovi account pilota e cliente."
            checked={
              form
                .registrationsEnabled
            }
            onChange={(value) =>
              updateForm(
                "registrationsEnabled",
                value
              )
            }
            disabled={
              !canManage ||
              saving
            }
          />

          <ToggleRow
            label="Pubblicazione lavori abilitata"
            description="Permette ai clienti di pubblicare nuove richieste."
            checked={
              form
                .jobCreationEnabled
            }
            onChange={(value) =>
              updateForm(
                "jobCreationEnabled",
                value
              )
            }
            disabled={
              !canManage ||
              saving
            }
          />

          <ToggleRow
            label="Candidature abilitate"
            description="Permette ai piloti di candidarsi ai lavori disponibili."
            checked={
              form
                .applicationsEnabled
            }
            onChange={(value) =>
              updateForm(
                "applicationsEnabled",
                value
              )
            }
            disabled={
              !canManage ||
              saving
            }
          />

          <ToggleRow
            label="Pagamenti abilitati"
            description="Permette la creazione di nuove sessioni Checkout Stripe."
            checked={
              form
                .paymentsEnabled
            }
            onChange={(value) =>
              updateForm(
                "paymentsEnabled",
                value
              )
            }
            disabled={
              !canManage ||
              saving
            }
          />
        </div>

        {!canManage && (
          <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
            <p className="text-sm leading-6 text-yellow-100">
              Puoi consultare le impostazioni, ma
              non possiedi il permesso
              settings.manage per modificarle.
            </p>
          </div>
        )}

        {hasChanges && (
          <div className="mt-6 rounded-xl border border-blue-400/20 bg-blue-400/5 p-4">
            <p className="font-semibold text-blue-300">
              Modifiche non salvate
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Le modifiche avranno effetto soltanto
              dopo la conferma finale.
            </p>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={openConfirmation}
            disabled={
              !canManage ||
              !hasChanges ||
              saving
            }
            className="rounded-xl bg-green-500 px-5 py-3 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Salva modifiche
          </button>

          <button
            type="button"
            onClick={resetChanges}
            disabled={
              !hasChanges ||
              saving
            }
            className="rounded-xl border border-white/10 px-5 py-3 font-semibold transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Annulla modifiche
          </button>
        </div>
      </section>

      {confirmationOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 p-4">
          <form
            onSubmit={saveSettings}
            className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-yellow-400/30 bg-[#0B1028] p-6 shadow-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Conferma amministrativa
            </p>

            <h2 className="mt-3 text-2xl font-black">
              Aggiornare i servizi?
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Le modifiche diventeranno operative
              immediatamente e saranno registrate
              nel Registro attività.
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-semibold">
                Servizi che risulteranno bloccati
              </p>

              {disabledServices.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {disabledServices.map(
                    (service) => (
                      <span
                        key={service}
                        className="rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1.5 text-xs font-semibold text-red-200"
                      >
                        {service}
                      </span>
                    )
                  )}
                </div>
              ) : (
                <p className="mt-3 text-sm text-green-300">
                  Tutti i servizi risulteranno abilitati.
                </p>
              )}
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <label className="text-sm text-gray-300">
                  Motivazione obbligatoria
                </label>

                <span className="text-xs text-gray-500">
                  {reason.length}/500
                </span>
              </div>

              <textarea
                value={reason}
                onChange={(event) =>
                  setReason(
                    event.target.value
                      .slice(0, 500)
                  )
                }
                minLength={10}
                maxLength={500}
                required
                disabled={saving}
                rows={5}
                placeholder="Spiega il motivo della modifica..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 outline-none transition focus:border-yellow-400/50 disabled:opacity-50"
              />
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closeConfirmation}
                disabled={saving}
                className="rounded-xl border border-white/10 px-5 py-3 font-semibold transition hover:bg-white/10 disabled:opacity-50"
              >
                Annulla
              </button>

              <button
                type="submit"
                disabled={
                  saving ||
                  reason.trim()
                    .length < 10
                }
                className="rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {saving
                  ? "Salvataggio..."
                  : "Conferma modifiche"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}