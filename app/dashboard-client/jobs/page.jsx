"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/client"
import Link from "next/link"

import {
  Briefcase,
  Users,
  Bell,
  Eye,
  Pencil,
  X,
  Lock,
  Copy
} from "lucide-react"

function isAssignedExpired(job) {
  if (job.status !== "assigned" || !job.assigned_at) return false

  const assignedAt = new Date(job.assigned_at)
  const expiresAt = new Date(assignedAt)
  expiresAt.setDate(expiresAt.getDate() + 7)

  return new Date() > expiresAt
}

function getDaysLeft(job) {
  if (job.status !== "assigned" || !job.assigned_at) return null

  const assignedAt = new Date(job.assigned_at)
  const expiresAt = new Date(assignedAt)
  expiresAt.setDate(expiresAt.getDate() + 7)

  const diff = expiresAt.getTime() - new Date().getTime()
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24))

  return days > 0 ? days : 0
}

function getJobStatusLabel(job) {
  if (job.status === "assigned") return "PILOTA ASSEGNATO"
  if (job.status === "completed") return "COMPLETATO"
  return "ATTIVO"
}

function getJobStatusClass(job) {
  if (job.status === "assigned") return "bg-yellow-400 text-black"
  if (job.status === "completed") return "bg-cyan-400 text-black"
  return "bg-green-500 text-black"
}

export default function ClientJobs() {
  const [jobs, setJobs] = useState([])

  const [activeJobs, setActiveJobs] = useState(0)
  const [completedJobs, setCompletedJobs] = useState(0)
  const [assignedJobs, setAssignedJobs] = useState(0)
  const [totalApplications, setTotalApplications] = useState(0)
  const [notifications, setNotifications] = useState(0)

  const [selectedJob, setSelectedJob] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)

  const [editTitle, setEditTitle] = useState("")
  const [editDescription, setEditDescription] = useState("")
  const [editLocation, setEditLocation] = useState("")
  const [editDate, setEditDate] = useState("")

   const [savingJob, setSavingJob] =
    useState(false)

  const loadJobs = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser()

    if (!user) return

    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", {
        ascending: false
      })

    if (error) {
      console.log(error)
      return
    }

    const jobsWithApplications = await Promise.all(
      (data || []).map(async (job) => {
        const { count } = await supabase
          .from("applications")
          .select("*", {
            count: "exact",
            head: true
          })
          .eq("job_id", job.id)

        return {
          ...job,
          applications: count || 0
        }
      })
    )

    const visibleJobs = jobsWithApplications.filter((job) => {
      if (job.status === "completed") return false
      if (isAssignedExpired(job)) return false
      return true
    })

    const active = visibleJobs.filter(
      (job) => job.status !== "assigned" && job.status !== "completed"
    )

    const assigned = visibleJobs.filter((job) => job.status === "assigned")

    const completed = jobsWithApplications.filter(
      (job) => job.status === "completed"
    )

    const total = jobsWithApplications.reduce(
      (sum, job) => sum + job.applications,
      0
    )

    setJobs(visibleJobs)
    setActiveJobs(active.length)
    setAssignedJobs(assigned.length)
    setCompletedJobs(completed.length)
    setTotalApplications(total)
    setNotifications(total)
  }

  useEffect(() => {
    loadJobs()
  }, [])


  const openEditModal = (job) => {
    setSelectedJob(job)

    setEditTitle(job.title || "")
    setEditDescription(job.description || "")
    setEditLocation(job.location || "")
    setEditDate(job.job_date || "")

    setShowEditModal(true)
  }

    const saveJobChanges = async () => {
    if (
      savingJob ||
      !selectedJob?.id
    ) {
      return
    }

    if (
      selectedJob.status !== "open"
    ) {
      toast.error(
        "Puoi modificare soltanto un lavoro ancora aperto."
      )

      return
    }

    const normalizedTitle =
      editTitle.trim()

    const normalizedDescription =
      editDescription.trim()

    const normalizedLocation =
      editLocation.trim()

    if (!normalizedTitle) {
      toast.error(
        "Inserisci il titolo del lavoro."
      )

      return
    }

    if (!normalizedDescription) {
      toast.error(
        "Inserisci la descrizione del lavoro."
      )

      return
    }

    if (!normalizedLocation) {
      toast.error(
        "Inserisci la località del lavoro."
      )

      return
    }

    if (!editDate) {
      toast.error(
        "Inserisci la data del lavoro."
      )

      return
    }

    setSavingJob(true)

    try {
      const {
        data,
        error
      } = await supabase.rpc(
        "update_open_job",
        {
          p_job_id:
            selectedJob.id,

          p_title:
            normalizedTitle,

          p_description:
            normalizedDescription,

          p_location:
            normalizedLocation,

          p_job_date:
            editDate
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
            "PIATTAFORMA_IN_MANUTENZIONE"
          )
        ) {
          throw new Error(
            "DroneGuard è temporaneamente in manutenzione."
          )
        }

        if (
          errorText.includes(
            "LAVORO_NON_TROVATO"
          )
        ) {
          throw new Error(
            "Il lavoro non è più disponibile."
          )
        }

        if (
          errorText.includes(
            "NON_SEI_IL_PROPRIETARIO_DEL_LAVORO"
          )
        ) {
          throw new Error(
            "Non sei autorizzato a modificare questo lavoro."
          )
        }

        if (
          errorText.includes(
            "SOLO_I_LAVORI_APERTI_POSSONO_ESSERE_MODIFICATI"
          )
        ) {
          throw new Error(
            "Il lavoro non è più aperto e non può essere modificato."
          )
        }

        if (
          errorText.includes(
            "DATA_LAVORO_NEL_PASSATO"
          )
        ) {
          throw new Error(
            "La data del lavoro non può essere nel passato."
          )
        }

        if (
          errorText.includes(
            "TITOLO_TROPPO_LUNGO"
          )
        ) {
          throw new Error(
            "Il titolo può contenere massimo 150 caratteri."
          )
        }

        if (
          errorText.includes(
            "DESCRIZIONE_TROPPO_LUNGA"
          )
        ) {
          throw new Error(
            "La descrizione può contenere massimo 5000 caratteri."
          )
        }

        if (
          errorText.includes(
            "LOCALITA_TROPPO_LUNGA"
          )
        ) {
          throw new Error(
            "La località inserita è troppo lunga."
          )
        }

        if (
          errorText.includes(
            "ACCOUNT_SOSPESO"
          )
        ) {
          throw new Error(
            "Il tuo account è sospeso."
          )
        }

        throw error
      }

      toast.success(
        data?.already_processed
          ? "L’annuncio conteneva già questi dati."
          : "Annuncio aggiornato ✅"
      )

      setShowEditModal(false)
      setSelectedJob(null)

      await loadJobs()
    } catch (error) {
      console.error(
        "[update-open-job] RPC failed:",
        error
      )

      toast.error(
        error?.message ||
        "Impossibile aggiornare l’annuncio."
      )

      await loadJobs()
    } finally {
      setSavingJob(false)
    }
  }


  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="mb-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Lavori attivi</h1>

              <p className="text-base text-gray-400 sm:text-lg">
                Gestisci i tuoi annunci e controlla i candidati.
              </p>
            </div>

            <Link href="/dashboard-client/create-job">
              <button className="w-full rounded-2xl bg-green-500 px-6 py-4 text-base font-semibold text-black transition hover:bg-green-400 sm:w-auto sm:text-lg">
                + Nuovo lavoro
              </button>
            </Link>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={22} />
                <p className="text-gray-300">Lavori attivi</p>
              </div>

              <h2 className="text-4xl font-bold text-green-400 sm:text-5xl">
                {activeJobs}
              </h2>
            </div>

            <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lock size={22} />
                <p className="text-gray-300">Assegnati</p>
              </div>

              <h2 className="text-4xl font-bold text-yellow-400 sm:text-5xl">
                {assignedJobs}
              </h2>
            </div>

            <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users size={22} />
                <p className="text-gray-300">Candidature ricevute</p>
              </div>

              <h2 className="text-4xl font-bold text-yellow-400 sm:text-5xl">
                {totalApplications}
              </h2>
            </div>

            <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bell size={22} />
                <p className="text-gray-300">Nuove notifiche</p>
              </div>

              <h2 className="text-4xl font-bold text-red-400 sm:text-5xl">
                {notifications}
              </h2>
            </div>
          </div>

          {jobs.length === 0 ? (
            <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-14 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Nessun lavoro pubblicato
              </h2>

              <p className="text-gray-400">
                Pubblica il tuo primo annuncio DroneGuard.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
              {jobs.map((job) => {
                const daysLeft = getDaysLeft(job)

                return (
                  <div
                    key={job.id}
                    className={`bg-[#140a3a] border rounded-3xl overflow-hidden ${
                      job.status === "assigned"
                        ? "border-yellow-400/40 opacity-90"
                        : "border-white/10"
                    }`}
                  >
                    {job.image1 && (
                      <div className="relative">
                        <img
                          src={job.image1}
                          alt={job.title || "Lavoro"}
                          className={`w-full h-52 object-cover ${
                            job.status === "assigned" ? "opacity-50" : ""
                          }`}
                        />

                        {job.status === "assigned" && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/45">
                            <div className="rounded-2xl bg-yellow-400 px-5 py-3 text-center text-black font-black">
                              PILOTA ASSEGNATO
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-6">
                      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getJobStatusClass(
                            job
                          )}`}
                        >
                          {getJobStatusLabel(job)}
                        </span>

                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Users size={15} />
                          {job.applications} candidati
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-3">{job.title}</h3>

                      <p className="text-gray-300 mb-5 line-clamp-3 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="space-y-2 text-sm text-gray-400 mb-6">
                        <div>📍 {job.location}</div>
                        <div>📅 {job.job_date}</div>
                      </div>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
  <button
    onClick={() =>
      openEditModal(job)
    }
    className="flex items-center justify-center gap-2 rounded-xl bg-green-500 py-3 font-semibold text-black transition hover:bg-green-400"
  >
    <Pencil size={16} />
    Dettagli
  </button>

  <Link
    href={`/dashboard-client/jobs/${job.id}/candidates`}
  >
    <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3 font-semibold text-black transition hover:bg-green-400">
      <Eye size={16} />
      Vedi candidati
    </button>
  </Link>

  <Link
  href={`/dashboard-client/create-job?duplicate=${encodeURIComponent(
    job.id
  )}`}
  className="flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] py-3 font-semibold text-cyan-200 transition hover:bg-cyan-400/[0.12] sm:col-span-2"
>
  <Copy size={16} />
  Duplica lavoro
</Link>
</div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="max-h-[90vh] w-full max-w-[95vw] overflow-y-auto rounded-3xl border border-white/10 bg-[#140a3a] p-5 sm:max-w-2xl sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold sm:text-3xl">
                {selectedJob?.status === "assigned"
                  ? "Dettagli annuncio"
                  : "Modifica annuncio"}
              </h2>

              <button onClick={() => setShowEditModal(false)}>
                <X />
              </button>
            </div>

            <div className="space-y-5">
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Titolo"
                disabled={selectedJob?.status === "assigned"}
                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 disabled:opacity-70"
              />

              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                placeholder="Descrizione"
                disabled={selectedJob?.status === "assigned"}
                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 h-40 disabled:opacity-70"
              />

              <input
                value={editLocation}
                onChange={(e) => setEditLocation(e.target.value)}
                placeholder="Luogo"
                disabled={selectedJob?.status === "assigned"}
                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 disabled:opacity-70"
              />

              <input
                type="date"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
                disabled={selectedJob?.status === "assigned"}
                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 disabled:opacity-70"
              />

              {selectedJob?.status === "assigned" ? (
                <button
                  onClick={() => setShowEditModal(false)}
                  className="w-full bg-green-500 text-black py-4 rounded-2xl font-bold hover:bg-green-400 transition"
                >
                  Chiudi dettagli
                </button>
              ) : (
                <button
  type="button"
  onClick={saveJobChanges}
  disabled={savingJob}
  className="w-full rounded-2xl bg-green-500 py-4 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
>
  {savingJob
    ? "Salvataggio..."
    : "Salva modifiche"}
</button>
              )}
            </div>
          </div>
        </div>
      )}

      
    </div>
  )
}
