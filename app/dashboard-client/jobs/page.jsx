"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabase/client"
import Link from "next/link"

import {
  Briefcase,
  Users,
  CheckCircle2,
  Bell,
  Eye,
  Trash2,
  Pencil,
  Clock3,
  X,
  Lock
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
  const [showCloseModal, setShowCloseModal] = useState(false)

  const [editTitle, setEditTitle] = useState("")
  const [editDescription, setEditDescription] = useState("")
  const [editLocation, setEditLocation] = useState("")
  const [editDate, setEditDate] = useState("")

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

  const deleteJob = async (id) => {
    const confirmDelete = window.confirm("Vuoi eliminare questo lavoro?")

    if (!confirmDelete) return

    await supabase.from("jobs").delete().eq("id", id)

    alert("Lavoro eliminato ✅")

    loadJobs()
  }

  const cancelJob = async (job) => {
    const confirmCancel = window.confirm("Vuoi annullare questo lavoro?")

    if (!confirmCancel) return

    await supabase
      .from("jobs")
      .update({
        status: "cancelled",
        close_reason: "cancelled"
      })
      .eq("id", job.id)

    await supabase
      .from("conversations")
      .update({
        status: "closed"
      })
      .eq("job_id", job.id)

    alert("Lavoro annullato ✅")

    loadJobs()
  }

  const completeJobSuccess = async (job) => {
    const confirmComplete = window.confirm(
      "Vuoi segnare questo lavoro come terminato con successo?"
    )

    if (!confirmComplete) return

    await supabase
      .from("jobs")
      .update({
        status: "completed",
        close_reason: "success"
      })
      .eq("id", job.id)

    await supabase
      .from("conversations")
      .update({
        status: "closed"
      })
      .eq("job_id", job.id)

    alert("Lavoro terminato con successo ✅")

    loadJobs()
  }

  const openEditModal = (job) => {
    setSelectedJob(job)

    setEditTitle(job.title || "")
    setEditDescription(job.description || "")
    setEditLocation(job.location || "")
    setEditDate(job.job_date || "")

    setShowEditModal(true)
  }

  const saveJobChanges = async () => {
    if (!selectedJob) return

    if (selectedJob.status === "assigned") {
      alert("Non puoi modificare un annuncio dopo aver assegnato il pilota.")
      return
    }

    const { error } = await supabase
      .from("jobs")
      .update({
        title: editTitle,
        description: editDescription,
        location: editLocation,
        job_date: editDate
      })
      .eq("id", selectedJob.id)

    if (error) {
      console.log(error)
      alert("Errore salvataggio")
      return
    }

    alert("Annuncio aggiornato ✅")

    setShowEditModal(false)

    loadJobs()
  }

  const openCloseModal = (job) => {
    setSelectedJob(job)
    setShowCloseModal(true)
  }

  const closeJob = async (reason) => {
    if (!selectedJob) return

    await supabase
      .from("jobs")
      .update({
        status: "completed",
        close_reason: reason
      })
      .eq("id", selectedJob.id)

    await supabase
      .from("conversations")
      .update({
        status: "closed"
      })
      .eq("job_id", selectedJob.id)

    alert("Lavoro chiuso con successo ✅")

    setShowCloseModal(false)

    loadJobs()
  }

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] p-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-5xl font-bold mb-3">Lavori attivi</h1>

              <p className="text-gray-400 text-lg">
                Gestisci i tuoi annunci e controlla i candidati.
              </p>
            </div>

            <Link href="/dashboard-client/create-job">
              <button className="bg-green-500 px-6 py-4 rounded-2xl text-black font-semibold text-lg hover:bg-green-400 transition">
                + Nuovo lavoro
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-10">
            <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={22} />
                <p className="text-gray-300">Lavori attivi</p>
              </div>

              <h2 className="text-5xl font-bold text-green-400">
                {activeJobs}
              </h2>
            </div>

            <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lock size={22} />
                <p className="text-gray-300">Assegnati</p>
              </div>

              <h2 className="text-5xl font-bold text-yellow-400">
                {assignedJobs}
              </h2>
            </div>

            <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users size={22} />
                <p className="text-gray-300">Candidature ricevute</p>
              </div>

              <h2 className="text-5xl font-bold text-yellow-400">
                {totalApplications}
              </h2>
            </div>

            <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bell size={22} />
                <p className="text-gray-300">Nuove notifiche</p>
              </div>

              <h2 className="text-5xl font-bold text-red-400">
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
            <div className="grid grid-cols-3 gap-7">
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
                      <div className="flex justify-between items-center mb-4">
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

                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => openEditModal(job)}
                          className="bg-green-500 text-black py-3 rounded-xl font-semibold hover:bg-green-400 transition flex items-center justify-center gap-2"
                        >
                          <Pencil size={16} />
                          Dettagli
                        </button>

                        <Link href={`/dashboard-client/jobs/${job.id}/candidates`}>
                          <button className="w-full bg-green-500 text-black py-3 rounded-xl font-semibold hover:bg-green-400 transition flex items-center justify-center gap-2">
                            <Eye size={16} />
                            Vedi candidati
                          </button>
                        </Link>

                        {job.status === "assigned" ? (
                          <button
                            onClick={() => completeJobSuccess(job)}
                            className="bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-400 transition flex items-center justify-center gap-2"
                          >
                            <CheckCircle2 size={16} />
                            Terminato con successo
                          </button>
                        ) : (
                          <button
                            onClick={() => openCloseModal(job)}
                            className="bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-400 transition flex items-center justify-center gap-2"
                          >
                            <Clock3 size={16} />
                            Chiudi lavoro
                          </button>
                        )}

                        {job.status === "assigned" ? (
                          <button
                            onClick={() => cancelJob(job)}
                            className="bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-400 transition flex items-center justify-center gap-2"
                          >
                            <Trash2 size={16} />
                            Annulla lavoro
                          </button>
                        ) : (
                          <button
                            onClick={() => deleteJob(job.id)}
                            className="bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-400 transition flex items-center justify-center gap-2"
                          >
                            <Trash2 size={16} />
                            Elimina
                          </button>
                        )}
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
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-8 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">
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
                  onClick={saveJobChanges}
                  className="w-full bg-green-500 text-black py-4 rounded-2xl font-bold hover:bg-green-400 transition"
                >
                  Salva modifiche
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {showCloseModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-5">
          <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-8 w-full max-w-xl relative">
            <button
              onClick={() => setShowCloseModal(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
            >
              <X size={24} />
            </button>

            <h2 className="text-4xl font-bold mb-4 leading-tight pr-10">
              Sei sicuro di voler chiudere il lavoro?
            </h2>

            <p className="text-gray-400 text-lg mb-8">
              Seleziona il motivo della chiusura.
            </p>

            <div className="space-y-5">
              <button
                onClick={() => closeJob("found_pilot")}
                className="w-full bg-green-500 text-black py-5 rounded-2xl font-bold text-2xl hover:bg-green-400 transition"
              >
                Trovato pilota
              </button>

              <button
                onClick={() => closeJob("cancelled")}
                className="w-full bg-red-500 text-white py-5 rounded-2xl font-bold text-2xl hover:bg-red-400 transition"
              >
                Annulla il lavoro
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}