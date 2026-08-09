"use client"

import {
  useCallback,
  useEffect,
  useState
} from "react"

import Link from "next/link"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabase/client"
import { toast } from "sonner"

import {
  Calendar,
  CheckCircle2,
  Euro,
  Mail,
  MapPin,
  XCircle
} from "lucide-react"


function formatDate(value) {
  if (!value) {
    return "Data non indicata"
  }

  try {
    return new Date(
      `${value}T12:00:00`
    ).toLocaleDateString(
      "it-IT"
    )
  } catch {
    return "Data non indicata"
  }
}


function formatPrice(value) {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return "Da concordare"
  }

  const amount =
    Number(value)

  if (
    !Number.isFinite(amount)
  ) {
    return "Da concordare"
  }

  return new Intl.NumberFormat(
    "it-IT",
    {
      style: "currency",
      currency: "EUR"
    }
  ).format(amount)
}


function getApplicationStatus(
  status
) {
  if (status === "accepted") {
    return {
      label: "Accettata",
      className:
        "border-green-400/20 bg-green-400/10 text-green-300"
    }
  }

  if (status === "rejected") {
    return {
      label: "Non selezionata",
      className:
        "border-red-400/20 bg-red-400/10 text-red-300"
    }
  }

  if (status === "completed") {
    return {
      label: "Completata",
      className:
        "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
    }
  }

  return {
    label: "In attesa",
    className:
      "border-amber-400/20 bg-amber-400/10 text-amber-300"
  }
}


function getInvitationStatus(
  status
) {
  if (status === "accepted") {
    return {
      label: "Invito accettato",
      className:
        "border-green-400/20 bg-green-400/10 text-green-300"
    }
  }

  if (status === "declined") {
    return {
      label: "Invito rifiutato",
      className:
        "border-red-400/20 bg-red-400/10 text-red-300"
    }
  }

  if (status === "cancelled") {
    return {
      label: "Invito annullato",
      className:
        "border-white/10 bg-white/5 text-gray-400"
    }
  }

  return {
    label: "In attesa",
    className:
      "border-purple-400/20 bg-purple-400/10 text-purple-200"
  }
}


export default function ApplicationsPage() {
  const [
    applications,
    setApplications
  ] = useState([])

  const [
    invitations,
    setInvitations
  ] = useState([])

  const [
    loading,
    setLoading
  ] = useState(true)

  const [
    respondingInvitationId,
    setRespondingInvitationId
  ] = useState(null)


  const fetchData =
    useCallback(
      async () => {
        try {
          setLoading(true)

          const {
            data: {
              user
            }
          } =
            await supabase.auth.getUser()

          if (!user) {
            setApplications([])
            setInvitations([])
            return
          }


          const [
            applicationsResult,
            invitationsResult
          ] =
            await Promise.all([
              supabase
                .from(
                  "applications"
                )
                .select(`
                  id,
                  status,
                  created_at,
                  pilot_id,
                  user_id,
                  jobs (
                    id,
                    title,
                    description,
                    price,
                    location,
                    job_date,
                    status
                  )
                `)
                .or(
                  `pilot_id.eq.${user.id},user_id.eq.${user.id}`
                )
                .order(
                  "created_at",
                  {
                    ascending:
                      false
                  }
                ),

              supabase
                .from(
                  "job_invitations"
                )
                .select(`
                  id,
                  job_id,
                  client_id,
                  pilot_id,
                  message,
                  status,
                  created_at,
                  responded_at,
                  jobs (
                    id,
                    title,
                    description,
                    price,
                    location,
                    job_date,
                    status
                  )
                `)
                .eq(
                  "pilot_id",
                  user.id
                )
                .order(
                  "created_at",
                  {
                    ascending:
                      false
                  }
                )
            ])


          if (
            applicationsResult.error
          ) {
            console.error(
              "[applications] Caricamento candidature fallito:",
              applicationsResult.error
            )

            setApplications([])
          } else {
            setApplications(
              applicationsResult.data ||
                []
            )
          }


          if (
            invitationsResult.error
          ) {
            console.error(
              "[job-invitations] Caricamento inviti fallito:",
              invitationsResult.error
            )

            setInvitations([])
          } else {
            setInvitations(
              invitationsResult.data ||
                []
            )
          }

        } catch (error) {
          console.error(
            "[applications] Caricamento pagina fallito:",
            error
          )

          toast.error(
            "Impossibile caricare candidature e inviti."
          )
        } finally {
          setLoading(false)
        }
      },
      []
    )


  useEffect(() => {
    fetchData()
  }, [fetchData])


  const respondInvitation =
    async (
      invitation,
      accept
    ) => {
      if (
        !invitation?.id ||
        respondingInvitationId
      ) {
        return
      }


      if (!accept) {
        const confirmed =
          window.confirm(
            "Vuoi rifiutare questo invito?"
          )

        if (!confirmed) {
          return
        }
      }


      try {
        setRespondingInvitationId(
          invitation.id
        )


        const {
          data,
          error
        } = await supabase.rpc(
          "respond_job_invitation",
          {
            p_invitation_id:
              invitation.id,

            p_accept:
              Boolean(accept)
          }
        )


        if (error) {
          const errorText = [
            error.message,
            error.details,
            error.hint,
            error.code
          ]
            .filter(Boolean)
            .join(" ")
            .toUpperCase()


          if (
            errorText.includes(
              "LAVORO_NON_PIU_DISPONIBILE"
            )
          ) {
            throw new Error(
              "Questo lavoro non è più disponibile."
            )
          }


          if (
            errorText.includes(
              "INVITO_GIA_RISPOSTO"
            )
          ) {
            throw new Error(
              "Hai già risposto a questo invito."
            )
          }


          if (
            errorText.includes(
              "INVITO_NON_AUTORIZZATO"
            )
          ) {
            throw new Error(
              "Non sei autorizzato a rispondere a questo invito."
            )
          }


          if (
            errorText.includes(
              "ACCOUNT_NON_ATTIVO"
            )
          ) {
            throw new Error(
              "Il tuo account non può effettuare questa operazione."
            )
          }


          throw error
        }


        if (
          data?.success !== true
        ) {
          throw new Error(
            "Risposta invito non valida."
          )
        }


        toast.success(
          accept
            ? "Invito accettato ✅"
            : "Invito rifiutato."
        )


        await fetchData()

      } catch (error) {
        console.error(
          "[job-invitation] Risposta invito fallita:",
          error
        )

        toast.error(
          error?.message ||
            "Impossibile rispondere all'invito."
        )
      } finally {
        setRespondingInvitationId(
          null
        )
      }
    }


  return (
    <div className="min-h-screen flex flex-col text-white">

      <Navbar logged />


      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">

        <div className="mx-auto max-w-6xl">


          {/* HEADER */}

          <div className="mb-10">

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              Area pilota
            </p>

            <h1 className="mt-3 text-3xl font-black sm:text-4xl">
              Candidature e inviti
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Controlla le tue candidature e gli inviti ricevuti direttamente dai clienti.
            </p>

          </div>


          {loading ? (

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center text-gray-400">
              Caricamento...
            </div>

          ) : (
            <div className="space-y-12">


              {/* ============================================= */}
              {/* INVITI RICEVUTI */}
              {/* ============================================= */}

              <section>

                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

                  <div>

                    <div className="flex items-center gap-2 text-purple-300">
                      <Mail size={20} />

                      <p className="text-xs font-bold uppercase tracking-[0.2em]">
                        Inviti diretti
                      </p>
                    </div>

                    <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                      Inviti ricevuti
                    </h2>

                  </div>


                  <p className="text-sm text-gray-500">
                    {invitations.length}{" "}
                    {invitations.length === 1
                      ? "invito"
                      : "inviti"}
                  </p>

                </div>


                {invitations.length === 0 ? (

                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">

                    <Mail
                      size={34}
                      className="mx-auto text-gray-600"
                    />

                    <h3 className="mt-4 text-xl font-bold">
                      Nessun invito ricevuto
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      Quando un cliente ti inviterà direttamente a un lavoro, lo troverai qui.
                    </p>

                  </div>

                ) : (

                  <div className="space-y-5">

                    {invitations.map(
                      (invitation) => {
                        const invitationStatus =
                          getInvitationStatus(
                            invitation.status
                          )

                        const invitationJob =
                          invitation.jobs

                        const isResponding =
                          respondingInvitationId ===
                          invitation.id


                        return (
                          <div
                            key={
                              invitation.id
                            }
                            className="rounded-3xl border border-purple-400/15 bg-[#140a3a] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.20)] sm:p-6"
                          >

                            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                              <div className="min-w-0 flex-1">

                                <div className="flex flex-wrap items-center gap-3">

                                  <span
                                    className={`rounded-full border px-3 py-1 text-xs font-bold ${invitationStatus.className}`}
                                  >
                                    {invitationStatus.label}
                                  </span>

                                  <span className="text-xs text-gray-500">
                                    Ricevuto{" "}
                                    {invitation.created_at
                                      ? new Date(
                                          invitation.created_at
                                        ).toLocaleDateString(
                                          "it-IT"
                                        )
                                      : ""}
                                  </span>

                                </div>


                                <h3 className="mt-4 text-xl font-black sm:text-2xl">
                                  {invitationJob?.title ||
                                    "Lavoro DroneGuard"}
                                </h3>


                                {invitationJob?.description && (
                                  <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-300">
                                    {invitationJob.description}
                                  </p>
                                )}


                                <div className="mt-5 flex flex-wrap gap-3">

                                  <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-black/20 px-3 py-2 text-sm text-gray-300">
                                    <MapPin
                                      size={16}
                                      className="text-cyan-300"
                                    />

                                    {invitationJob?.location ||
                                      "Località non indicata"}
                                  </div>


                                  <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-black/20 px-3 py-2 text-sm text-gray-300">
                                    <Calendar
                                      size={16}
                                      className="text-cyan-300"
                                    />

                                    {formatDate(
                                      invitationJob?.job_date
                                    )}
                                  </div>


                                  <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-black/20 px-3 py-2 text-sm text-gray-300">
                                    <Euro
                                      size={16}
                                      className="text-emerald-300"
                                    />

                                    {formatPrice(
                                      invitationJob?.price
                                    )}
                                  </div>

                                </div>


                                {invitation.message && (

                                  <div className="mt-5 rounded-2xl border border-purple-400/15 bg-purple-400/[0.06] p-4">

                                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-purple-300">
                                      Messaggio del cliente
                                    </p>

                                    <p className="mt-2 whitespace-pre-line text-sm leading-6 text-gray-200">
                                      {invitation.message}
                                    </p>

                                  </div>

                                )}

                              </div>


                              <div className="w-full shrink-0 lg:w-[230px]">

                                {invitation.status ===
                                  "pending" && (
                                  <div className="space-y-3">

                                    <button
                                      type="button"
                                      disabled={
                                        isResponding
                                      }
                                      onClick={() =>
                                        respondInvitation(
                                          invitation,
                                          true
                                        )
                                      }
                                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                      <CheckCircle2
                                        size={18}
                                      />

                                      {isResponding
                                        ? "Operazione..."
                                        : "Accetta invito"}
                                    </button>


                                    <button
                                      type="button"
                                      disabled={
                                        isResponding
                                      }
                                      onClick={() =>
                                        respondInvitation(
                                          invitation,
                                          false
                                        )
                                      }
                                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 font-semibold text-red-300 transition hover:bg-red-400/10 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                      <XCircle
                                        size={18}
                                      />

                                      Rifiuta
                                    </button>

                                  </div>
                                )}


                                {invitation.status ===
                                  "accepted" && (

                                  <div className="space-y-3">

                                    <div className="rounded-xl border border-green-400/20 bg-green-400/[0.07] p-4 text-center text-sm text-green-200">
                                      Hai accettato l&apos;invito.
                                      Ora puoi candidarti normalmente al lavoro.
                                    </div>

                                    <Link
                                      href="/dashboard/jobs-board"
                                      className="block"
                                    >
                                      <span className="block w-full rounded-xl bg-cyan-400 px-4 py-3 text-center font-bold text-black transition hover:bg-cyan-300">
                                        Vai alla bacheca lavori
                                      </span>
                                    </Link>

                                  </div>

                                )}


                                {invitation.status ===
                                  "declined" && (

                                  <div className="rounded-xl border border-red-400/15 bg-red-400/[0.05] p-4 text-center text-sm text-red-200">
                                    Hai rifiutato questo invito.
                                  </div>

                                )}


                                {invitation.status ===
                                  "cancelled" && (

                                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-gray-400">
                                    Il cliente ha annullato questo invito.
                                  </div>

                                )}

                              </div>

                            </div>

                          </div>
                        )
                      }
                    )}

                  </div>

                )}

              </section>


              {/* ============================================= */}
              {/* CANDIDATURE */}
              {/* ============================================= */}

              <section>

                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                      Attività
                    </p>

                    <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                      Le mie candidature
                    </h2>

                  </div>


                  <p className="text-sm text-gray-500">
                    {applications.length}{" "}
                    {applications.length === 1
                      ? "candidatura"
                      : "candidature"}
                  </p>

                </div>


                {applications.length === 0 ? (

                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">

                    <p className="text-gray-400">
                      Non ti sei ancora candidato a nessun lavoro.
                    </p>

                    <Link
                      href="/dashboard/jobs-board"
                      className="mt-5 inline-block rounded-xl bg-cyan-400 px-5 py-3 font-bold text-black transition hover:bg-cyan-300"
                    >
                      Cerca lavori
                    </Link>

                  </div>

                ) : (

                  <div className="space-y-5">

                    {applications.map(
                      (application) => {
                        const status =
                          getApplicationStatus(
                            application.status
                          )

                        const applicationJob =
                          application.jobs


                        return (
                          <div
                            key={
                              application.id
                            }
                            className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md sm:p-6"
                          >

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                              <div className="min-w-0">

                                <h3 className="text-xl font-bold">
                                  {applicationJob?.title ||
                                    "Lavoro DroneGuard"}
                                </h3>

                                {applicationJob?.description && (
                                  <p className="mt-3 text-sm leading-6 text-gray-300">
                                    {applicationJob.description}
                                  </p>
                                )}

                              </div>


                              <span
                                className={`shrink-0 rounded-full border px-3 py-1 text-xs font-bold ${status.className}`}
                              >
                                {status.label}
                              </span>

                            </div>


                            <div className="mt-5 flex flex-wrap gap-3 text-sm">

                              <span className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-black/20 px-3 py-2 text-gray-300">
                                <Euro
                                  size={16}
                                  className="text-emerald-300"
                                />

                                {formatPrice(
                                  applicationJob?.price
                                )}
                              </span>


                              <span className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-black/20 px-3 py-2 text-gray-300">
                                <MapPin
                                  size={16}
                                  className="text-cyan-300"
                                />

                                {applicationJob?.location ||
                                  "Località non indicata"}
                              </span>


                              <span className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-black/20 px-3 py-2 text-gray-300">
                                <Calendar
                                  size={16}
                                  className="text-cyan-300"
                                />

                                {formatDate(
                                  applicationJob?.job_date
                                )}
                              </span>

                            </div>


                            <div className="mt-5">

                              <Link
                                href="/dashboard/jobs-board"
                                className="inline-flex rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold transition hover:bg-white/10"
                              >
                                Apri bacheca lavori
                              </Link>

                            </div>

                          </div>
                        )
                      }
                    )}

                  </div>

                )}

              </section>

            </div>
          )}

        </div>

      </div>

    </div>
  )
}