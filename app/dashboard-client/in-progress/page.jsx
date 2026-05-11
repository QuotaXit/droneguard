"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/client"
import { Users } from "lucide-react"

export default function InProgressJobs() {
  const [jobs, setJobs] = useState([])
  const [stats, setStats] = useState({
    pilots: 0,
    completed: 0,
    active: 0
  })

  const [selectedPilot, setSelectedPilot] = useState(null)
  const [showPilotModal, setShowPilotModal] = useState(false)

  const [selectedJob, setSelectedJob] = useState(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [sentJobDetails, setSentJobDetails] = useState(null)

  const loadJobs = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser()

    if (!user) return

    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .eq("user_id", user.id)
      .eq("status", "assigned")
      .order("created_at", { ascending: false })

    if (error) {
      console.log(error)
      return
    }

    const jobsWithApplications = await Promise.all(
      (data || []).map(async (job) => {
        const { count } = await supabase
          .from("applications")
          .select("*", { count: "exact", head: true })
          .eq("job_id", job.id)

        const { data: app } = await supabase
          .from("applications")
          .select("pilot_id")
          .eq("job_id", job.id)
          .eq("status", "accepted")
          .maybeSingle()

        return {
          ...job,
          applications: count || 0,
          pilot_id: app?.pilot_id || job.assigned_pilot
        }
      })
    )

    setJobs(jobsWithApplications)

    const { count: completed } = await supabase
      .from("jobs")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id)
      .eq("status", "completed")

    setStats({
      pilots: jobsWithApplications.length,
      completed: completed || 0,
      active: jobsWithApplications.length
    })
  }

  useEffect(() => {
    loadJobs()
  }, [])

  const cancelJob = async (jobId) => {
    if (!confirm("Vuoi annullare ed eliminare il lavoro?")) return

    await supabase
      .from("conversations")
      .update({ status: "closed" })
      .eq("job_id", jobId)

    await supabase
      .from("applications")
      .delete()
      .eq("job_id", jobId)

    await supabase
      .from("job_assignments")
      .delete()
      .eq("job_id", jobId)

    const { error } = await supabase
      .from("jobs")
      .delete()
      .eq("id", jobId)

    if (error) {
      console.log(error)
      toast.error("Errore durante l'eliminazione del lavoro")
      return
    }

    setJobs((prev) => prev.filter((job) => job.id !== jobId))

    setStats((prev) => ({
      ...prev,
      active: Math.max(prev.active - 1, 0),
      pilots: Math.max(prev.pilots - 1, 0)
    }))
  }

  const completeJob = async (jobId) => {
    if (!confirm("Segnare come completato?")) return

    const { error } = await supabase
      .from("jobs")
      .update({
        status: "completed"
      })
      .eq("id", jobId)

    if (error) {
      console.log(error)
      toast.error("Errore durante il completamento del lavoro")
      return
    }

    await supabase
      .from("applications")
      .update({ status: "completed" })
      .eq("job_id", jobId)
      .eq("status", "accepted")

    await supabase
      .from("conversations")
      .update({ status: "closed" })
      .eq("job_id", jobId)

    setJobs((prev) => prev.filter((job) => job.id !== jobId))

    setStats((prev) => ({
      ...prev,
      active: Math.max(prev.active - 1, 0),
      pilots: Math.max(prev.pilots - 1, 0),
      completed: prev.completed + 1
    }))
  }

  const openPilotDetails = async (pilotId) => {
    if (!pilotId) return

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", pilotId)
      .maybeSingle()

    if (error) {
      console.log(error)
      toast.error("Errore caricamento pilota")
      return
    }

    if (!data) {
      toast.error("Profilo pilota non trovato")
      return
    }

    setSelectedPilot(data)
    setShowPilotModal(true)
  }

  const openJobDetailsModal = async (job) => {
    setSelectedJob(job)
    setSentJobDetails(null)

    const { data, error } = await supabase
      .from("job_assignments")
      .select("*")
      .eq("job_id", job.id)
      .eq("pilot_id", job.pilot_id)
      .maybeSingle()

    if (error) {
      console.log(error)
      toast.error("Errore caricamento dati")
      return
    }

    setSentJobDetails(data || null)
    setShowDetailsModal(true)
  }

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 lg:col-span-3 lg:block lg:space-y-6">
            <div className="bg-[#140a3a] p-6 rounded-2xl border border-white/10">
              <p className="text-gray-400">Piloti contattati</p>
              <h2 className="text-3xl font-bold text-yellow-400 sm:text-4xl">
                {stats.pilots}
              </h2>
            </div>

            <div className="bg-[#140a3a] p-6 rounded-2xl border border-white/10">
              <p className="text-gray-400">Lavori completati</p>
              <h2 className="text-3xl font-bold text-green-400 sm:text-4xl">
                {stats.completed}
              </h2>
            </div>

            <div className="bg-[#140a3a] p-6 rounded-2xl border border-white/10">
              <p className="text-gray-400">Attivi</p>
              <h2 className="text-3xl font-bold text-cyan-400 sm:text-4xl">
                {stats.active}
              </h2>
            </div>
          </div>

          <div className="lg:col-span-9">
            <h1 className="mb-8 text-3xl font-bold sm:text-4xl lg:text-5xl">Lavori in corso</h1>

            {jobs.length === 0 ? (
              <div className="rounded-2xl bg-[#140a3a] p-6 text-center sm:p-10">
                Nessun lavoro in corso
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-[#140a3a] rounded-2xl border border-white/10 overflow-hidden"
                  >
                    {job.image1 && (
                      <img
                        src={job.image1}
                        alt={job.title || "Lavoro"}
                        className="w-full h-48 object-cover"
                      />
                    )}

                    <div className="p-6 text-center">
                      <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:justify-between">
                        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                          IN CORSO
                        </span>

                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Users size={14} />
                          {job.applications}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>

                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="mb-5 space-y-3 text-center">
  <div>
    <p className="text-xs uppercase tracking-widest text-gray-500">
      📍 Posizione
    </p>
    <p className="text-lg font-bold text-white">
      {job.location}
    </p>
  </div>

  <div>
    <p className="text-xs uppercase tracking-widest text-gray-500">
      📅 Data
    </p>
    <p className="text-lg font-bold text-white">
      {job.job_date}
    </p>
  </div>
</div>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <button
                          onClick={() => openPilotDetails(job.pilot_id)}
                          className="bg-green-500 text-black py-2 rounded-lg font-semibold hover:bg-green-400 transition"
                        >
                          Dettagli pilota
                        </button>

                        <button
                          onClick={() => openJobDetailsModal(job)}
                          className="bg-green-500 text-black py-2 rounded-lg font-semibold hover:bg-green-400 transition"
                        >
                          Vedi dati
                        </button>

                        <button
                          onClick={() => completeJob(job.id)}
                          className="bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-400 transition"
                        >
                          Completato
                        </button>

                        <button
                          onClick={() => cancelJob(job.id)}
                          className="bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-400 transition"
                        >
                          Annulla
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {showPilotModal && selectedPilot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-h-[90vh] w-full max-w-[95vw] overflow-y-auto rounded-3xl border border-white/10 bg-[#140a3a] p-5 text-center sm:max-w-xl sm:p-8">
            <button
              onClick={() => setShowPilotModal(false)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ✕
            </button>

            <img
              src={
                selectedPilot.avatar_url ||
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
              }
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              alt="Pilota"
            />

            <h2 className="text-2xl font-bold">
              {selectedPilot.name} {selectedPilot.surname}
            </h2>

            <p className="text-green-400 mb-4">Pilota verificato</p>

            <div className="space-y-2 text-gray-300 text-sm mb-6">
              <p>📍 {selectedPilot.city || "Non impostata"}</p>
              <p>🚁 {selectedPilot.drone || "Non specificato"}</p>
              <p>🎯 Esperienza: {selectedPilot.experience || "Non impostata"}</p>
              <p>
                📜 Certificazioni:{" "}
                {selectedPilot.certifications || "Nessuna"}
              </p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="text-xs text-gray-400 mb-2">BIOGRAFIA</p>

              <p className="text-gray-300">
                {selectedPilot.bio || "Nessuna biografia inserita"}
              </p>
            </div>
          </div>
        </div>
      )}

      {showDetailsModal && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">
          <div className="max-h-[90vh] w-full max-w-[95vw] overflow-y-auto rounded-3xl border border-white/10 bg-[#140a3a] p-5 text-white sm:max-w-4xl sm:p-8">
            <h2 className="mb-2 text-2xl font-bold sm:text-4xl">
              Dati inviati al pilota
            </h2>

            <p className="mb-8 text-sm text-gray-400">
              Dati operativi per il lavoro: {selectedJob.title}
            </p>

            {!sentJobDetails ? (
              <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-center text-yellow-300 font-bold">
                Nessun dato è stato ancora inviato al pilota.
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <tbody>
                    <tr className="border-b border-white/10">
                      <th className="w-1/3 bg-black/20 p-4 text-gray-400">
                        Posizione precisa
                      </th>
                      <td className="p-4">
                        {sentJobDetails.exact_location ||
                          sentJobDetails.precise_location ||
                          "Non indicata"}
                      </td>
                    </tr>

                    <tr className="border-b border-white/10">
                      <th className="w-1/3 bg-black/20 p-4 text-gray-400">
                        Punto di ritrovo
                      </th>
                      <td className="p-4">
                        {sentJobDetails.meeting_point || "Non indicato"}
                      </td>
                    </tr>

                    <tr className="border-b border-white/10">
                      <th className="w-1/3 bg-black/20 p-4 text-gray-400">
                        Telefono
                      </th>
                      <td className="p-4">
                        {sentJobDetails.phone || "Non indicato"}
                      </td>
                    </tr>

                    <tr className="border-b border-white/10">
                      <th className="w-1/3 bg-black/20 p-4 text-gray-400">
                        Email
                      </th>
                      <td className="p-4">
                        {sentJobDetails.email || "Non indicata"}
                      </td>
                    </tr>

                    <tr className="border-b border-white/10">
                      <th className="w-1/3 bg-black/20 p-4 text-gray-400">
                        Note operative
                      </th>
                      <td className="p-4 whitespace-pre-wrap">
                        {sentJobDetails.notes || "Nessuna nota"}
                      </td>
                    </tr>

                    <tr>
                      <th className="w-1/3 bg-black/20 p-4 text-gray-400">
                        Stato
                      </th>
                      <td className="p-4">
                        {sentJobDetails.status === "details_sent"
                          ? "Dati inviati"
                          : sentJobDetails.status || "Non indicato"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 py-4 font-semibold transition hover:bg-white/10"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
