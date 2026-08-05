"use client"

import {
  useCallback,
  useEffect,
  useState
} from "react"

import { toast } from "sonner"

export default function TeamMembersClient({
  canInvite,
  canUpdate,
  canManageOwner,
  canDeactivate,
  canSendEmail
}) {
  const [members, setMembers] = useState([])
  const [roles, setRoles] = useState([])

  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)

  const [editingUserId, setEditingUserId] = useState(null)
const [editDisplayName, setEditDisplayName] = useState("")
const [editRoleKey, setEditRoleKey] = useState("")
const [editActive, setEditActive] =
  useState(true)

const [editReason, setEditReason] =
  useState("")

const [savingMember, setSavingMember] =
  useState(false)

  const [
  passwordResetMember,
  setPasswordResetMember
] = useState(null)

const [
  passwordResetReason,
  setPasswordResetReason
] = useState("")

const [
  sendingPasswordReset,
  setSendingPasswordReset
] = useState(false)

  const [displayName, setDisplayName] =
  useState("")

const [email, setEmail] =
  useState("")

const [roleKey, setRoleKey] =
  useState("")

  const loadMembers = useCallback(async () => {
    try {
      setLoading(true)

      const response = await fetch(
        "/api/admin/team-members",
        {
          method: "GET",
          cache: "no-store"
        }
      )

      const data = await response.json()

      if (!response.ok) {
        toast.error(
          data.error ||
            "Errore caricamento membri Team."
        )

        return
      }

      setMembers(data.members || [])
      setRoles(data.roles || [])
    } catch (error) {
      console.error(
        "Errore caricamento Team:",
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
    loadMembers()
  }, [loadMembers])

  useEffect(() => {
  if (roles.length === 0) {
    setRoleKey("")
    return
  }

  setRoleKey((currentRoleKey) => {
    const roleStillAvailable =
      roles.some(
        (role) =>
          role.role_key ===
          currentRoleKey
      )

    if (roleStillAvailable) {
      return currentRoleKey
    }

    return roles[0].role_key
  })
}, [roles])

  const createMember = async (event) => {
    event.preventDefault()

    if (creating) return

    if (!roleKey) {
  toast.error(
    "Seleziona un ruolo Team valido."
  )

  return
}

    try {
      setCreating(true)

      const response = await fetch(
        "/api/admin/team-members",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
  displayName,
  email,
  roleKey
})
        }
      )

      const data = await response.json()

      if (!response.ok) {
        toast.error(
          data.error ||
            "Impossibile creare il membro Team."
        )

        return
      }

      if (data.recoveryEmailSent) {
  toast.success(
    data.message ||
      "Account Team creato e invito password inviato."
  )
} else {
  toast.warning(
    data.message ||
      "Account creato, ma l'invito password non è stato inviato."
  )
}

      setDisplayName("")
setEmail("")

setRoleKey(
  roles[0]?.role_key || ""
)

      await loadMembers()
    } catch (error) {
      console.error(
        "Errore creazione membro:",
        error
      )

      toast.error(
        "Errore imprevisto durante la creazione."
      )
    } finally {
      setCreating(false)
    }
  }

  const startEditingMember = (member) => {
  if (
    !canUpdate ||
    !member ||
    (
      member.roleKey === "owner" &&
      !canManageOwner
    )
  ) {
    return
  }

  setEditingUserId(
    member.userId
  )

  setEditDisplayName(
    member.displayName || ""
  )

  setEditRoleKey(
    member.roleKey || ""
  )

  setEditActive(
    Boolean(member.active)
  )

  setEditReason("")

}

const cancelEditingMember = () => {
  setEditingUserId(null)
  setEditDisplayName("")
  setEditRoleKey("")
  setEditActive(true)
  setEditReason("")
}

const saveMemberChanges = async (member) => {
  if (savingMember) return

  if (!editDisplayName.trim()) {
    toast.error("Inserisci il nome del membro.")
    return
  }

  const normalizedReason =
  editReason.trim()

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
    setSavingMember(true)

    const response = await fetch(
      "/api/admin/team-members",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
       body: JSON.stringify({
  userId:
    member.userId,

  displayName:
    editDisplayName.trim(),

  roleKey:
    editRoleKey,

  active:
    editActive,

  reason:
    normalizedReason
})
      }
    )

    const data = await response.json()

    if (!response.ok) {
      toast.error(
        data.error ||
          "Impossibile aggiornare il membro Team."
      )
      return
    }

    setMembers((currentMembers) =>
      currentMembers.map((currentMember) =>
        currentMember.userId === data.member.userId
          ? data.member
          : currentMember
      )
    )

    cancelEditingMember()
    toast.success("Membro Team aggiornato correttamente.")
  } catch (error) {
    console.error(
      "Errore aggiornamento membro Team:",
      error
    )

    toast.error(
      "Errore imprevisto durante l'aggiornamento."
    )
  } finally {
    setSavingMember(false)
  }
}

const openPasswordReset = (member) => {
  if (
    !member ||
    !canUpdate ||
    !canSendEmail ||
    !member.active ||
    (
      member.roleKey === "owner" &&
      !canManageOwner
    )
  ) {
    return
  }

  setPasswordResetMember(member)
  setPasswordResetReason("")
}

const closePasswordReset = () => {
  if (sendingPasswordReset) {
    return
  }

  setPasswordResetMember(null)
  setPasswordResetReason("")
}

const sendPasswordReset = async () => {
  if (
    !passwordResetMember ||
    sendingPasswordReset
  ) {
    return
  }

  const normalizedReason =
    passwordResetReason.trim()

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
    setSendingPasswordReset(true)

    const response = await fetch(
      "/api/admin/team-members/password-reset",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          userId:
            passwordResetMember.userId,

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
          "Impossibile inviare il recupero password."
      )

      return
    }

    toast.success(
      data.message ||
        "Email di recupero password inviata."
    )

    setPasswordResetMember(null)
    setPasswordResetReason("")
  } catch (error) {
    console.error(
      "Errore recupero password Team:",
      error
    )

    toast.error(
      "Errore imprevisto durante l'invio del recupero password."
    )
  } finally {
    setSendingPasswordReset(false)
  }
}

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[420px_1fr]">
      {canInvite &&
  canSendEmail && (
        <section className="rounded-2xl border border-white/10 bg-[#0B1028] p-6">
          <div>
            <h2 className="text-xl font-bold">
              Nuovo account Team
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
  Crea l’account Team e invia automaticamente
  un link sicuro per scegliere la password.
</p>
          </div>

          <form
            onSubmit={createMember}
            className="mt-6 space-y-4"
          >
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Nome visualizzato
              </label>

              <input
                value={displayName}
                onChange={(event) =>
                  setDisplayName(event.target.value)
                }
                required
                minLength={2}
                maxLength={80}
                className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-green-400/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
                autoComplete="off"
                className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-green-400/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Ruolo
              </label>

              <select
                value={roleKey}
                onChange={(event) =>
                  setRoleKey(event.target.value)
                }
                disabled={
  creating ||
  roles.length === 0
}
                required
                className="w-full rounded-xl border border-white/10 bg-[#111735] p-3 outline-none focus:border-green-400/50"
              >
                {roles.map((role) => (
                  <option
                    key={role.role_key}
                    value={role.role_key}
                  >
                    {role.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={
  creating ||
  !roleKey ||
  roles.length === 0
}
              className="w-full rounded-xl bg-green-500 px-5 py-3 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {creating
  ? "Creazione e invio..."
  : "Crea account e invia invito"}
            </button>
          </form>
        </section>
      )}

      <section className="rounded-2xl border border-white/10 bg-[#0B1028] p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">
              Membri del Team
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              {members.length} account configurati
            </p>
          </div>

          <button
            type="button"
            onClick={loadMembers}
            disabled={loading}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10 disabled:opacity-50"
          >
            Aggiorna
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {loading ? (
            <div className="rounded-xl border border-white/10 p-5 text-sm text-gray-400">
              Caricamento membri...
            </div>
          ) : members.length === 0 ? (
            <div className="rounded-xl border border-white/10 p-5 text-sm text-gray-400">
              Nessun membro Team trovato.
            </div>
          ) : (
           members.map((member) => {
  const isEditing =
    editingUserId === member.userId

  return (
    <div
      key={member.userId}
      className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
    >
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Nome visualizzato
            </label>

            <input
              value={editDisplayName}
              onChange={(event) =>
                setEditDisplayName(event.target.value)
              }
              minLength={2}
              maxLength={80}
              className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-green-400/50"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Ruolo
            </label>

            <select
              value={editRoleKey}
              onChange={(event) =>
                setEditRoleKey(event.target.value)
              }
              disabled={member.isCurrentUser}
              className="w-full rounded-xl border border-white/10 bg-[#111735] p-3 outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              {roles.map((role) => (
                <option
                  key={role.role_key}
                  value={role.role_key}
                >
                  {role.name}
                </option>
              ))}
            </select>

            {member.isCurrentUser && (
              <p className="mt-2 text-xs text-yellow-300">
                Non puoi cambiare il ruolo del tuo stesso account.
              </p>
            )}
          </div>

          <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 p-3">
            <input
              type="checkbox"
              checked={editActive}
              disabled={
  member.isCurrentUser ||
  !canDeactivate
}
              onChange={(event) =>
                setEditActive(event.target.checked)
              }
            />

            <span className="text-sm">
              Account Team attivo
            </span>
          </label>

          {!member.isCurrentUser &&
  !canDeactivate && (
    <p className="text-xs text-yellow-300">
      Non hai il permesso di disattivare o riattivare questo account.
    </p>
  )}

          <div>
  <label className="mb-2 block text-sm text-gray-400">
    Motivazione amministrativa
  </label>

  <textarea
    value={editReason}
    onChange={(event) =>
      setEditReason(
        event.target.value.slice(
          0,
          500
        )
      )
    }
    disabled={savingMember}
    minLength={10}
    maxLength={500}
    required
    placeholder="Spiega il motivo della modifica..."
    className="h-24 w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-green-400/50 disabled:opacity-60"
  />

  <div className="mt-2 flex justify-between gap-4 text-xs text-gray-500">
    <span>
      Da 10 a 500 caratteri
    </span>

    <span>
      {editReason.length}/500
    </span>
  </div>
</div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() =>
                saveMemberChanges(member)
              }
              disabled={
  savingMember ||
  editReason.trim().length < 10
}
              className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-black disabled:opacity-50"
            >
              {savingMember
                ? "Salvataggio..."
                : "Salva modifiche"}
            </button>

            <button
              type="button"
              onClick={cancelEditingMember}
              disabled={savingMember}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 hover:bg-white/10 disabled:opacity-50"
            >
              Annulla
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-semibold">
                {member.displayName}
              </p>

              {member.isCurrentUser && (
                <span className="rounded-full bg-purple-400/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-purple-300">
                  Tu
                </span>
              )}
            </div>

            <p className="mt-1 truncate text-sm text-gray-400">
              {member.email}
            </p>

            <p className="mt-2 text-xs text-gray-500">
              ID: {member.userId}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">
              {member.roleName}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                member.active
                  ? "bg-green-400/10 text-green-400"
                  : "bg-red-400/10 text-red-300"
              }`}
            >
              {member.active
                ? "Attivo"
                : "Disattivato"}
            </span>

            {canUpdate &&
  (
    member.roleKey !== "owner" ||
    canManageOwner
  ) && (
    <button
      type="button"
      onClick={() =>
        startEditingMember(member)
      }
      className="rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-gray-300 transition hover:bg-white/10"
    >
      Modifica
    </button>
  )}

  {canUpdate &&
  canSendEmail &&
  member.active &&
  (
    member.roleKey !== "owner" ||
    canManageOwner
  ) && (
    <button
      type="button"
      onClick={() =>
        openPasswordReset(member)
      }
      className="rounded-lg border border-blue-400/30 bg-blue-400/10 px-3 py-2 text-xs font-semibold text-blue-300 transition hover:bg-blue-400/20"
    >
      Recupera password
    </button>
  )}
          </div>
        </div>
      )}
    </div>
  )
})
          )}
        </div>
      </section>

{passwordResetMember && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4"
    role="dialog"
    aria-modal="true"
    aria-labelledby="password-reset-title"
  >
    <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0B1028] p-6 shadow-2xl">
      <h2
        id="password-reset-title"
        className="text-xl font-bold"
      >
        Invia recupero password
      </h2>

      <p className="mt-3 text-sm leading-6 text-gray-400">
        Verrà inviata un’email di recupero a:
      </p>

      <div className="mt-3 rounded-xl border border-white/10 bg-black/20 p-4">
        <p className="font-semibold">
          {passwordResetMember.displayName}
        </p>

        <p className="mt-1 break-all text-sm text-gray-400">
          {passwordResetMember.email}
        </p>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm text-gray-400">
          Motivazione amministrativa
        </label>

        <textarea
          value={passwordResetReason}
          onChange={(event) =>
            setPasswordResetReason(
              event.target.value.slice(
                0,
                500
              )
            )
          }
          disabled={sendingPasswordReset}
          minLength={10}
          maxLength={500}
          required
          placeholder="Spiega perché stai inviando il recupero password..."
          className="h-28 w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-blue-400/50 disabled:opacity-60"
        />

        <div className="mt-2 flex justify-between gap-4 text-xs text-gray-500">
          <span>
            Da 10 a 500 caratteri
          </span>

          <span>
            {passwordResetReason.length}/500
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={closePasswordReset}
          disabled={sendingPasswordReset}
          className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/10 disabled:opacity-50"
        >
          Annulla
        </button>

        <button
          type="button"
          onClick={sendPasswordReset}
          disabled={
            sendingPasswordReset ||
            passwordResetReason.trim()
              .length < 10
          }
          className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {sendingPasswordReset
            ? "Invio in corso..."
            : "Invia recupero"}
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  )
}
