"use client"

import {
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react"

import { toast } from "sonner"

const CATEGORY_LABELS = {
  announcements: "Avvisi",
  audit: "Registro attività",
  certifications: "Certificazioni",
  credits: "Crediti",
  dashboard: "Panoramica",
  emails: "Email",
  jobs: "Lavori",
  maintenance: "Manutenzione",
  payments: "Pagamenti",
  settings: "Impostazioni",
  team: "Account Team",
  users: "Utenti",
  other: "Altri permessi"
}

const PERMISSION_DEPENDENCIES = {
  "announcements.manage":
    "announcements.view",

  "certifications.review":
    "certifications.view",

  "credits.adjust":
    "credits.view",

  "emails.retry":
    "emails.view",

  "emails.send":
    "emails.view",

  "jobs.close":
    "jobs.view",

  "jobs.reopen":
    "jobs.view",

  "jobs.update":
    "jobs.view",

  "maintenance.manage":
    "maintenance.view",

  "payments.refund":
    "payments.view",

  "settings.manage":
    "settings.view",

  "team.deactivate":
    "team.view",

  "team.invite":
    "team.view",

  "team.update":
    "team.view",

  "users.delete":
    "users.view",

  "users.suspend":
    "users.view",

  "users.update":
    "users.view",

  "users.verify":
    "users.view"
}

function normalizeKeys(values) {
  return [
    ...new Set(
      Array.isArray(values)
        ? values
            .map((value) =>
              String(
                value || ""
              )
                .trim()
                .toLowerCase()
            )
            .filter(Boolean)
        : []
    )
  ].sort()
}

function arraysMatch(
  firstValues,
  secondValues
) {
  const first =
    normalizeKeys(firstValues)

  const second =
    normalizeKeys(secondValues)

  if (
    first.length !==
    second.length
  ) {
    return false
  }

  return first.every(
    (value, index) =>
      value === second[index]
  )
}

export default function TeamPermissionsClient({
  canManagePermissions
}) {
  const [
    roles,
    setRoles
  ] = useState([])

  const [
    permissionCatalog,
    setPermissionCatalog
  ] = useState([])

  const [
    selectedRoleKey,
    setSelectedRoleKey
  ] = useState("")

  const [
    initialPermissions,
    setInitialPermissions
  ] = useState([])

  const [
    selectedPermissions,
    setSelectedPermissions
  ] = useState([])

  const [
    reason,
    setReason
  ] = useState("")

  const [
    loading,
    setLoading
  ] = useState(true)

  const [
    saving,
    setSaving
  ] = useState(false)

  const loadPermissions =
    useCallback(async () => {
      if (!canManagePermissions) {
        setLoading(false)
        return
      }

      try {
        setLoading(true)

        const response =
          await fetch(
            "/api/admin/team-permissions",
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
              "Impossibile caricare i permessi dei ruoli."
          )

          return
        }

        const nextRoles =
          Array.isArray(data.roles)
            ? data.roles
            : []

        const nextCatalog =
          Array.isArray(
            data.permissionCatalog
          )
            ? data.permissionCatalog
            : []

        setRoles(nextRoles)

        setPermissionCatalog(
          nextCatalog
        )

        const firstRole =
          nextRoles[0] || null

        const firstPermissions =
          normalizeKeys(
            firstRole?.permissions
          )

        setSelectedRoleKey(
          firstRole?.roleKey || ""
        )

        setInitialPermissions(
          firstPermissions
        )

        setSelectedPermissions(
          firstPermissions
        )

        setReason("")
      } catch (error) {
        console.error(
          "Errore caricamento permessi Team:",
          error
        )

        toast.error(
          "Errore imprevisto durante il caricamento dei permessi."
        )
      } finally {
        setLoading(false)
      }
    }, [canManagePermissions])

  useEffect(() => {
    loadPermissions()
  }, [loadPermissions])

  const selectedRole =
    useMemo(
      () =>
        roles.find(
          (role) =>
            role.roleKey ===
            selectedRoleKey
        ) || null,
      [
        roles,
        selectedRoleKey
      ]
    )

  const groupedPermissions =
    useMemo(() => {
      const groups =
        new Map()

      for (
        const permission of
        permissionCatalog
      ) {
        const category =
          String(
            permission.category ||
              "other"
          )
            .trim()
            .toLowerCase() ||
          "other"

        if (!groups.has(category)) {
          groups.set(
            category,
            []
          )
        }

        groups
          .get(category)
          .push(permission)
      }

      return [
        ...groups.entries()
      ]
        .map(
          ([
            category,
            permissions
          ]) => ({
            category,

            label:
              CATEGORY_LABELS[
                category
              ] || category,

            permissions:
              [...permissions].sort(
                (
                  firstPermission,
                  secondPermission
                ) =>
                  String(
                    firstPermission.name ||
                      ""
                  ).localeCompare(
                    String(
                      secondPermission.name ||
                        ""
                    ),
                    "it"
                  )
              )
          })
        )
        .sort(
          (
            firstGroup,
            secondGroup
          ) =>
            firstGroup.label.localeCompare(
              secondGroup.label,
              "it"
            )
        )
    }, [permissionCatalog])

  const hasChanges =
    !arraysMatch(
      initialPermissions,
      selectedPermissions
    )

  const selectRole = (
    roleKey
  ) => {
    if (saving) {
      return
    }

    const role =
      roles.find(
        (currentRole) =>
          currentRole.roleKey ===
          roleKey
      )

    if (!role) {
      return
    }

    const rolePermissions =
      normalizeKeys(
        role.permissions
      )

    setSelectedRoleKey(
      role.roleKey
    )

    setInitialPermissions(
      rolePermissions
    )

    setSelectedPermissions(
      rolePermissions
    )

    setReason("")
  }

  const togglePermission = (
    permissionKey,
    checked
  ) => {
    if (
      saving ||
      !permissionKey
    ) {
      return
    }

    setSelectedPermissions(
      (currentPermissions) => {
        const nextPermissions =
          new Set(
            normalizeKeys(
              currentPermissions
            )
          )

        if (checked) {
          nextPermissions.add(
            permissionKey
          )

          const dependency =
            PERMISSION_DEPENDENCIES[
              permissionKey
            ]

          if (dependency) {
            nextPermissions.add(
              dependency
            )
          }
        } else {
          nextPermissions.delete(
            permissionKey
          )

          /*
           * Se viene rimosso un permesso
           * di visualizzazione, vengono
           * rimossi anche i comandi che
           * dipendono da esso.
           */
          for (
            const [
              operationPermission,
              requiredPermission
            ] of Object.entries(
              PERMISSION_DEPENDENCIES
            )
          ) {
            if (
              requiredPermission ===
                permissionKey
            ) {
              nextPermissions.delete(
                operationPermission
              )
            }
          }
        }

        return [
          ...nextPermissions
        ].sort()
      }
    )
  }

  const selectAllPermissions =
    () => {
      if (saving) {
        return
      }

      setSelectedPermissions(
        normalizeKeys(
          permissionCatalog.map(
            (permission) =>
              permission.permissionKey
          )
        )
      )
    }

  const clearPermissions =
    () => {
      if (saving) {
        return
      }

      setSelectedPermissions([])
    }

  const resetChanges =
    () => {
      if (saving) {
        return
      }

      setSelectedPermissions(
        normalizeKeys(
          initialPermissions
        )
      )

      setReason("")
    }

  const savePermissions =
    async () => {
      if (
        saving ||
        !selectedRole
      ) {
        return
      }

      if (!hasChanges) {
        toast.error(
          "Non ci sono modifiche da salvare."
        )

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
            "/api/admin/team-permissions",
            {
              method: "PUT",

              headers: {
                "Content-Type":
                  "application/json"
              },

              body:
                JSON.stringify({
                  roleKey:
                    selectedRole.roleKey,

                  permissionKeys:
                    selectedPermissions,

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
              "Impossibile aggiornare i permessi del ruolo."
          )

          return
        }

        const effectivePermissions =
          normalizeKeys(
            data.result
              ?.permissions
          )

        setRoles(
          (currentRoles) =>
            currentRoles.map(
              (role) =>
                role.roleKey ===
                selectedRole.roleKey
                  ? {
                      ...role,

                      permissions:
                        effectivePermissions
                    }
                  : role
            )
        )

        setInitialPermissions(
          effectivePermissions
        )

        setSelectedPermissions(
          effectivePermissions
        )

        setReason("")

        toast.success(
          data.message ||
            "Permessi del ruolo aggiornati correttamente."
        )
      } catch (error) {
        console.error(
          "Errore salvataggio permessi Team:",
          error
        )

        toast.error(
          "Errore imprevisto durante l'aggiornamento dei permessi."
        )
      } finally {
        setSaving(false)
      }
    }

  if (!canManagePermissions) {
    return null
  }

  return (
    <section className="rounded-2xl border border-white/10 bg-[#0B1028] p-6">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
            Sicurezza ruoli
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Permessi del Team
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-400">
            Configura cosa possono vedere e gestire
            Amministratori, Supporto, Finanza,
            Contenuti e Tecnici. I permessi
            dell’Owner non sono modificabili.
          </p>
        </div>

        <button
          type="button"
          onClick={
            loadPermissions
          }
          disabled={
            loading ||
            saving
          }
          className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-gray-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "Caricamento..."
            : "Aggiorna matrice"}
        </button>
      </div>

      {loading ? (
        <div className="mt-6 rounded-xl border border-white/10 p-5 text-sm text-gray-400">
          Caricamento ruoli e permessi...
        </div>
      ) : roles.length === 0 ? (
        <div className="mt-6 rounded-xl border border-white/10 p-5 text-sm text-gray-400">
          Nessun ruolo modificabile trovato.
        </div>
      ) : (
        <div className="mt-7 grid gap-6 xl:grid-cols-[300px_1fr]">
          <aside className="space-y-3">
            {roles.map(
              (role) => {
                const selected =
                  role.roleKey ===
                  selectedRoleKey

                return (
                  <button
                    key={
                      role.roleKey
                    }
                    type="button"
                    onClick={() =>
                      selectRole(
                        role.roleKey
                      )
                    }
                    disabled={saving}
                    aria-pressed={
                      selected
                    }
                    className={`w-full rounded-xl border p-4 text-left transition disabled:cursor-not-allowed disabled:opacity-60 ${
                      selected
                        ? "border-purple-400/40 bg-purple-400/10"
                        : "border-white/10 bg-black/10 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-bold">
                          {role.name}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-400">
                          {role.description}
                        </p>
                      </div>

                      <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-semibold text-gray-300">
                        {
                          role.permissions
                            .length
                        }
                      </span>
                    </div>

                    <p className="mt-3 text-xs text-gray-500">
                      {
                        role.activeMemberCount
                      } attivi su{" "}
                      {
                        role.memberCount
                      } membri
                    </p>
                  </button>
                )
              }
            )}
          </aside>

          {selectedRole && (
            <div>
              <div className="rounded-xl border border-white/10 bg-black/10 p-4">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-bold">
                      {
                        selectedRole.name
                      }
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {
                        selectedPermissions.length
                      } permessi selezionati
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={
                        selectAllPermissions
                      }
                      disabled={saving}
                      className="rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-gray-300 hover:bg-white/10 disabled:opacity-50"
                    >
                      Seleziona tutti
                    </button>

                    <button
                      type="button"
                      onClick={
                        clearPermissions
                      }
                      disabled={saving}
                      className="rounded-lg border border-red-400/30 px-3 py-2 text-xs font-semibold text-red-300 hover:bg-red-400/10 disabled:opacity-50"
                    >
                      Rimuovi tutti
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-5">
                {groupedPermissions.map(
                  (group) => (
                    <fieldset
                      key={
                        group.category
                      }
                      className="rounded-xl border border-white/10 bg-black/10 p-4"
                    >
                      <legend className="px-2 text-sm font-bold text-green-300">
                        {group.label}
                      </legend>

                      <div className="mt-2 grid gap-3 lg:grid-cols-2">
                        {group.permissions.map(
                          (
                            permission
                          ) => {
                            const checked =
                              selectedPermissions.includes(
                                permission
                                  .permissionKey
                              )

                            return (
                              <label
                                key={
                                  permission.permissionKey
                                }
                                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                                  checked
                                    ? "border-green-400/30 bg-green-400/5"
                                    : "border-white/10 bg-black/10 hover:bg-white/[0.04]"
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={
                                    checked
                                  }
                                  disabled={
                                    saving
                                  }
                                  onChange={(
                                    event
                                  ) =>
                                    togglePermission(
                                      permission
                                        .permissionKey,
                                      event
                                        .target
                                        .checked
                                    )
                                  }
                                  className="mt-1 h-4 w-4"
                                />

                                <span className="min-w-0">
                                  <span className="block text-sm font-semibold">
                                    {
                                      permission.name
                                    }
                                  </span>

                                  <span className="mt-1 block text-xs leading-5 text-gray-400">
                                    {
                                      permission.description
                                    }
                                  </span>

                                  <span className="mt-2 block break-all font-mono text-[10px] text-gray-600">
                                    {
                                      permission.permissionKey
                                    }
                                  </span>
                                </span>
                              </label>
                            )
                          }
                        )}
                      </div>
                    </fieldset>
                  )
                )}
              </div>

              <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
                <p className="text-sm font-semibold text-yellow-300">
                  Dipendenze automatiche
                </p>

                <p className="mt-2 text-xs leading-5 text-gray-400">
                  Quando assegni un comando operativo,
                  viene mantenuto automaticamente anche
                  il relativo permesso di visualizzazione.
                </p>
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-sm text-gray-400">
                  Motivazione amministrativa
                </label>

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
                  disabled={saving}
                  minLength={10}
                  maxLength={500}
                  placeholder="Spiega perché stai modificando i permessi del ruolo..."
                  className="h-28 w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-purple-400/50 disabled:opacity-60"
                />

                <div className="mt-2 flex justify-between gap-4 text-xs text-gray-500">
                  <span>
                    Da 10 a 500 caratteri
                  </span>

                  <span>
                    {reason.length}/500
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={
                    resetChanges
                  }
                  disabled={
                    saving ||
                    !hasChanges
                  }
                  className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Annulla modifiche
                </button>

                <button
                  type="button"
                  onClick={
                    savePermissions
                  }
                  disabled={
                    saving ||
                    !hasChanges ||
                    reason.trim()
                      .length < 10
                  }
                  className="rounded-xl bg-purple-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-purple-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {saving
                    ? "Salvataggio..."
                    : "Salva permessi"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}