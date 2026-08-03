"use client"

import {
  useCallback,
  useEffect,
  useState
} from "react"

import { toast } from "sonner"

export default function TeamMembersClient({
  canInvite
}) {
  const [members, setMembers] = useState([])
  const [roles, setRoles] = useState([])

  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)

  const [editingUserId, setEditingUserId] = useState(null)
const [editDisplayName, setEditDisplayName] = useState("")
const [editRoleKey, setEditRoleKey] = useState("")
const [editActive, setEditActive] = useState(true)
const [savingMember, setSavingMember] = useState(false)

  const [displayName, setDisplayName] = useState(
    "Assistenza DroneGuard"
  )

  const [email, setEmail] = useState(
    "assistenza@droneguard.it"
  )

  const [roleKey, setRoleKey] = useState("owner")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] =
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

  const createMember = async (event) => {
    event.preventDefault()

    if (creating) return

    if (password !== confirmPassword) {
      toast.error("Le password non coincidono.")
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
            roleKey,
            password
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

      toast.success(
        `Account ${data.member.email} creato correttamente.`
      )

      setDisplayName("")
      setEmail("")
      setRoleKey("owner")
      setPassword("")
      setConfirmPassword("")

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
  setEditingUserId(member.userId)
  setEditDisplayName(member.displayName || "")
  setEditRoleKey(member.roleKey || "")
  setEditActive(Boolean(member.active))
}

const cancelEditingMember = () => {
  setEditingUserId(null)
  setEditDisplayName("")
  setEditRoleKey("")
  setEditActive(true)
}

const saveMemberChanges = async (member) => {
  if (savingMember) return

  if (!editDisplayName.trim()) {
    toast.error("Inserisci il nome del membro.")
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
          userId: member.userId,
          displayName: editDisplayName.trim(),
          roleKey: editRoleKey,
          active: editActive
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

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[420px_1fr]">
      {canInvite && (
        <section className="rounded-2xl border border-white/10 bg-[#0B1028] p-6">
          <div>
            <h2 className="text-xl font-bold">
              Nuovo account Team
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              L’account verrà creato direttamente
              in Supabase Auth e sarà subito confermato.
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

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                required
                minLength={12}
                autoComplete="new-password"
                className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-green-400/50"
              />

              <p className="mt-2 text-xs leading-5 text-gray-500">
                Minimo 12 caratteri, con maiuscola,
                minuscola, numero e simbolo.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Conferma password
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(
                    event.target.value
                  )
                }
                required
                minLength={12}
                autoComplete="new-password"
                className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-green-400/50"
              />
            </div>

            <button
              type="submit"
              disabled={creating}
              className="w-full rounded-xl bg-green-500 px-5 py-3 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {creating
                ? "Creazione account..."
                : "Crea account Team"}
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
              disabled={member.isCurrentUser}
              onChange={(event) =>
                setEditActive(event.target.checked)
              }
            />

            <span className="text-sm">
              Account Team attivo
            </span>
          </label>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() =>
                saveMemberChanges(member)
              }
              disabled={savingMember}
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

            <button
              type="button"
              onClick={() =>
                startEditingMember(member)
              }
              className="rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-gray-300 transition hover:bg-white/10"
            >
              Modifica
            </button>
          </div>
        </div>
      )}
    </div>
  )
})
          )}
        </div>
      </section>
    </div>
  )
}