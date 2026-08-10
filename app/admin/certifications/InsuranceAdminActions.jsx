"use client"

import {
  useState
} from "react"

import {
  Loader2,
  Pencil,
  Trash2,
  X
} from "lucide-react"

import {
  toast
} from "sonner"


export default function InsuranceAdminActions({
  request,
  canReview,
  onChanged
}) {

  const [
    editOpen,
    setEditOpen
  ] = useState(false)

  const [
    deleteOpen,
    setDeleteOpen
  ] = useState(false)

  const [
    company,
    setCompany
  ] = useState(
    request
      ?.insuranceCompany ||
    ""
  )

  const [
    policyNumber,
    setPolicyNumber
  ] = useState(
    request
      ?.policyNumber ||
    ""
  )

  const [
    validFrom,
    setValidFrom
  ] = useState(
    request
      ?.validFrom ||
    ""
  )

  const [
    validUntil,
    setValidUntil
  ] = useState(
    request
      ?.validUntil ||
    ""
  )

  const [
    editReason,
    setEditReason
  ] = useState("")

  const [
    deleteReason,
    setDeleteReason
  ] = useState("")

  const [
    submitting,
    setSubmitting
  ] = useState(false)


  if (!canReview) {
    return null
  }


  async function updateInsurance(
    event
  ) {
    event.preventDefault()

    if (submitting) {
      return
    }


    if (
      company.trim().length <
      2
    ) {
      toast.error(
        "Inserisci la compagnia assicurativa."
      )

      return
    }


    if (
      policyNumber.trim().length <
      2
    ) {
      toast.error(
        "Inserisci il numero della polizza."
      )

      return
    }


    if (!validUntil) {
      toast.error(
        "Inserisci la scadenza."
      )

      return
    }


    if (
      editReason.trim().length <
      10
    ) {
      toast.error(
        "Inserisci una motivazione di almeno 10 caratteri."
      )

      return
    }


    try {
      setSubmitting(
        true
      )


      const response =
        await fetch(
          `/api/admin/insurances/${request.id}`,
          {
            method:
              "PATCH",

            headers: {
              "Content-Type":
                "application/json"
            },

            body:
              JSON.stringify({
                insuranceCompany:
                  company.trim(),

                policyNumber:
                  policyNumber.trim(),

                validFrom,

                validUntil,

                reason:
                  editReason.trim()
              })
          }
        )


      let result =
        null

      try {
        result =
          await response.json()
      } catch {
        result =
          null
      }


      if (!response.ok) {
        throw new Error(
          result?.error ||
          "Impossibile modificare l'assicurazione."
        )
      }


      toast.success(
        result?.message ||
        "Assicurazione modificata."
      )


      setEditOpen(
        false
      )

      setEditReason(
        ""
      )


      if (
        typeof onChanged ===
        "function"
      ) {
        await onChanged()
      }

    } catch (error) {

      toast.error(
        error instanceof Error
          ? error.message
          : "Errore durante la modifica."
      )

    } finally {
      setSubmitting(
        false
      )
    }
  }


  async function deleteInsurance() {

    if (
      submitting
    ) {
      return
    }


    if (
      deleteReason
        .trim()
        .length < 10
    ) {
      toast.error(
        "Inserisci una motivazione di almeno 10 caratteri."
      )

      return
    }


    try {
      setSubmitting(
        true
      )


      const response =
        await fetch(
          `/api/admin/insurances/${request.id}`,
          {
            method:
              "DELETE",

            headers: {
              "Content-Type":
                "application/json"
            },

            body:
              JSON.stringify({
                reason:
                  deleteReason
                    .trim()
              })
          }
        )


      let result =
        null

      try {
        result =
          await response.json()
      } catch {
        result =
          null
      }


      if (!response.ok) {
        throw new Error(
          result?.error ||
          "Impossibile eliminare l'assicurazione."
        )
      }


      toast.success(
        result?.message ||
        "Assicurazione eliminata."
      )


      if (
        result?.warning
      ) {
        toast.warning(
          result.warning
        )
      }


      setDeleteOpen(
        false
      )

      setDeleteReason(
        ""
      )


      if (
        typeof onChanged ===
        "function"
      ) {
        await onChanged()
      }

    } catch (error) {

      toast.error(
        error instanceof Error
          ? error.message
          : "Errore durante l'eliminazione."
      )

    } finally {
      setSubmitting(
        false
      )
    }
  }


  return (
    <>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">

        <button
          type="button"
          onClick={() =>
            setEditOpen(true)
          }
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-yellow-400/20 bg-yellow-500/10 px-4 py-3 text-sm font-bold text-yellow-200 transition hover:bg-yellow-500/20"
        >
          <Pencil
            size={16}
          />

          Modifica
        </button>


        <button
          type="button"
          onClick={() =>
            setDeleteOpen(
              true
            )
          }
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-200 transition hover:bg-red-500/20"
        >
          <Trash2
            size={16}
          />

          Elimina
        </button>

      </div>


      {/* =============================================
          MODIFICA
      ============================================= */}

      {editOpen && (

        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">

          <form
            onSubmit={
              updateInsurance
            }
            className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0B1028] p-6 shadow-2xl"
          >

            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">
                  Team DroneGuard
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  Modifica assicurazione
                </h2>
              </div>


              <button
                type="button"
                disabled={
                  submitting
                }
                onClick={() =>
                  setEditOpen(
                    false
                  )
                }
                className="rounded-xl border border-white/10 p-2 text-gray-400 hover:bg-white/10"
              >
                <X
                  size={20}
                />
              </button>

            </div>


            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  Compagnia
                </label>

                <input
                  type="text"
                  value={
                    company
                  }
                  onChange={(
                    event
                  ) =>
                    setCompany(
                      event
                        .target
                        .value
                    )
                  }
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-yellow-400/40"
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  Numero polizza
                </label>

                <input
                  type="text"
                  value={
                    policyNumber
                  }
                  onChange={(
                    event
                  ) =>
                    setPolicyNumber(
                      event
                        .target
                        .value
                    )
                  }
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-yellow-400/40"
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  Valida dal
                </label>

                <input
                  type="date"
                  value={
                    validFrom
                  }
                  onChange={(
                    event
                  ) =>
                    setValidFrom(
                      event
                        .target
                        .value
                    )
                  }
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  Scadenza
                </label>

                <input
                  type="date"
                  required
                  value={
                    validUntil
                  }
                  onChange={(
                    event
                  ) =>
                    setValidUntil(
                      event
                        .target
                        .value
                    )
                  }
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
                />

              </div>

            </div>


            <div className="mt-5">

              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Motivo della modifica
              </label>

              <textarea
                value={
                  editReason
                }
                maxLength={
                  1000
                }
                onChange={(
                  event
                ) =>
                  setEditReason(
                    event
                      .target
                      .value
                  )
                }
                placeholder="Es. Correzione della data di scadenza indicata nella polizza."
                className="h-24 w-full resize-none rounded-xl border border-white/10 bg-black/20 p-4 outline-none focus:border-yellow-400/40"
              />

            </div>


            <button
              type="submit"
              disabled={
                submitting
              }
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 font-black text-black transition hover:bg-yellow-300 disabled:opacity-50"
            >
              {submitting && (
                <Loader2
                  size={18}
                  className="animate-spin"
                />
              )}

              Salva modifiche
            </button>

          </form>
        </div>
      )}


      {/* =============================================
          ELIMINA
      ============================================= */}

      {deleteOpen && (

        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">

          <div className="w-full max-w-lg rounded-3xl border border-red-400/20 bg-[#0B1028] p-6 shadow-2xl">

            <h2 className="text-2xl font-black text-red-200">
              Eliminare l'assicurazione?
            </h2>


            <p className="mt-3 text-sm leading-6 text-gray-400">
              L'operazione rimuoverà questa registrazione e DroneGuard ricalcolerà automaticamente lo stato assicurativo del pilota.
            </p>


            <textarea
              value={
                deleteReason
              }
              maxLength={
                1000
              }
              onChange={(
                event
              ) =>
                setDeleteReason(
                  event
                    .target
                    .value
                )
              }
              placeholder="Motivo dell'eliminazione..."
              className="mt-5 h-24 w-full resize-none rounded-xl border border-red-400/20 bg-black/20 p-4 outline-none"
            />


            <div className="mt-5 grid grid-cols-2 gap-3">

              <button
                type="button"
                disabled={
                  submitting
                }
                onClick={() =>
                  setDeleteOpen(
                    false
                  )
                }
                className="rounded-xl border border-white/10 px-4 py-3 font-bold text-gray-300 hover:bg-white/5"
              >
                Annulla
              </button>


              <button
                type="button"
                disabled={
                  submitting
                }
                onClick={
                  deleteInsurance
                }
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 font-black text-white hover:bg-red-400 disabled:opacity-50"
              >
                {submitting && (
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                )}

                Elimina
              </button>

            </div>

          </div>
        </div>
      )}

    </>
  )
}