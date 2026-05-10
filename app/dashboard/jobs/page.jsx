"use client"

import { useEffect, useMemo, useState } from "react"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/client"

export default function MyJobs() {
  const [jobs, setJobs] = useState([])
  const [applicationsMap, setApplicationsMap] = useState({})
  const [loading, setLoading] = useState(true)
  const [selectedJob, setSelectedJob] = useState(null)
  const [earnings, setEarnings] = useState({})
  const [earningInput, setEarningInput] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem("pilot_job_earnings")
    if (saved) {
      try {
        setEarnings(JSON.parse(saved))
      } catch {
        setEarnings({})
      }
    }
  }, [])

  useEffect(() => {
    if (selectedJob) {
      setEarningInput(earnings[selectedJob.id] || "")
    }
  }, [selectedJob, earnings])

  const saveEarning = () => {
    if (!selectedJob) return

    const updated = {
      ...earnings,
      [selectedJob.id]: earningInput
    }

    setEarnings(updated)
    localStorage.setItem("pilot_job_earnings", JSON.stringify(updated))
  }

  useEffect(() => {
    const getJobs = async () => {
      setLoading(true)

      const {
        data: { user }
      } = await supabase.auth.getUser()

      if (!user) {
        setLoading(false)
        return
      }

      const { data: completedApps } = await supabase
        .from("applications")
        .select("*")
        .eq("pilot_id", user.id)
        .eq("status", "completed")

      const appsByJobId = {}

      ;(completedApps || []).forEach((app) => {
        if (app?.job_id) appsByJobId[app.job_id] = app
      })

      setApplicationsMap(appsByJobId)

      const jobIds = completedApps?.map((app) => app.job_id).filter(Boolean) || []

      let jobsFromApps = []

      if (jobIds.length > 0) {
        const { data: jobsData } = await supabase
          .from("jobs")
          .select("*")
          .in("id", jobIds)

        jobsFromApps = jobsData || []
      }

      const { data: jobsAssigned } = await supabase
        .from("jobs")
        .select("*")
        .eq("assigned_pilot", user.id)
        .eq("status", "completed")

      const map = new Map()

      ;[...(jobsFromApps || []), ...(jobsAssigned || [])].forEach((job) => {
        if (job?.id) map.set(job.id, job)
      })

      const finalJobs = Array.from(map.values()).sort(
        (a, b) =>
          new Date(b.completed_at || b.updated_at || b.created_at) -
          new Date(a.completed_at || a.updated_at || a.created_at)
      )

      setJobs(finalJobs)
      setLoading(false)
    }

    getJobs()
  }, [])

  const formatDate = (value) => {
    if (!value) return "Data non disponibile"

    const date = new Date(value)

    if (Number.isNaN(date.getTime())) {
      return value
    }

    return date.toLocaleDateString("it-IT")
  }

  const formatEuro = (value) => {
    if (value === null || value === undefined || value === "") return "Non impostato"

    const amount = Number(value)

    if (Number.isNaN(amount)) {
      return `${value}€`
    }

    return `${amount.toLocaleString("it-IT")}€`
  }

  const getRealEarning = (job) => {
    return earnings[job.id] || ""
  }

  const totalEarnings = useMemo(() => {
    return jobs.reduce((total, job) => {
      const value = Number(earnings[job.id])
      return total + (Number.isNaN(value) ? 0 : value)
    }, 0)
  }, [jobs, earnings])

  const confirmedJobsCount = jobs.length

  const selectedApplication = useMemo(() => {
    if (!selectedJob) return null
    return applicationsMap[selectedJob.id] || null
  }, [selectedJob, applicationsMap])

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-5 py-8 md:p-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Storico lavori
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Lavori conclusi con successo
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="bg-white/5 border border-white/20 rounded-3xl p-6">
              <p className="text-gray-400 text-sm mb-2">Entrate totali</p>
              <h2 className="text-3xl font-bold text-green-400">
                {formatEuro(totalEarnings)}
              </h2>
            </div>

            <div className="bg-white/5 border border-white/20 rounded-3xl p-6">
              <p className="text-gray-400 text-sm mb-2">Lavori confermati</p>
              <h2 className="text-3xl font-bold">
                {confirmedJobsCount}
              </h2>
            </div>
          </div>

          <div className="space-y-7">
            {loading ? (
              <div className="text-center py-16">
                <p className="text-gray-400 text-xl">Caricamento...</p>
              </div>
            ) : jobs.length === 0 ? (
              <div className="text-center py-16">
                <h2 className="text-3xl font-bold mb-3">
                  Nessun lavoro nello storico
                </h2>

                <p className="text-gray-400 text-lg">
                  I lavori conclusi con successo compariranno qui.
                </p>
              </div>
            ) : (
              jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white/5 border border-white/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between gap-6 md:items-center hover:border-green-400/40 transition"
                >
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {job.title || "Lavoro senza titolo"}
                    </h3>

                    <p className="text-gray-300 text-base md:text-lg">
                      📍 {job.location || "Posizione non indicata"}
                    </p>

                    {job.description && (
                      <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-7">
                        {job.description}
                      </p>
                    )}

                    <p className="text-gray-400 text-sm md:text-base">
                      Data lavoro: {formatDate(job.job_date || job.created_at)}
                    </p>

                    <p className="text-gray-400 text-sm md:text-base">
                      Completato il: {formatDate(job.completed_at || job.updated_at || job.created_at)}
                    </p>

                    <p className="text-green-400 text-lg font-semibold">
                      Guadagno: {formatEuro(getRealEarning(job))}
                    </p>
                  </div>

                  <div className="md:text-right md:min-w-[180px]">
                    <span className="text-xs px-5 py-2 rounded-full mb-4 inline-block md:block bg-green-500 text-black font-bold">
                      COMPLETATO
                    </span>

                    <button
                      onClick={() => setSelectedJob(job)}
                      className="w-full md:w-auto bg-green-500 hover:bg-green-400 transition text-black px-7 py-4 rounded-2xl font-bold text-base md:text-lg"
                    >
                      Vedi riepilogo
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="max-h-[90vh] w-full max-w-[95vw] overflow-y-auto rounded-3xl border border-white/20 bg-[#140a3a] p-5 text-white shadow-2xl md:max-w-3xl md:p-6">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-1">
                  {selectedJob.title || "Riepilogo lavoro"}
                </h2>

                <p className="text-gray-400 text-sm md:text-base">
                  Dettagli del lavoro concluso
                </p>
              </div>

              <button
                onClick={() => setSelectedJob(null)}
                className="border border-white/30 px-4 py-2 rounded-xl hover:bg-white/10 text-sm"
              >
                Chiudi
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <Info label="Titolo" value={selectedJob.title} />
              <Info label="Località" value={selectedJob.location} />
              <Info label="Data lavoro" value={formatDate(selectedJob.job_date)} />
              <Info label="Completato il" value={formatDate(selectedJob.completed_at || selectedJob.updated_at)} />
              <Info label="Stato" value={selectedJob.status} />
              <Info label="Budget cliente" value={selectedJob.budget || selectedJob.price || selectedJob.offer_price} />
              <Info
                label="Offerta candidatura"
                value={
                  selectedApplication?.offer ||
                  selectedApplication?.offer_price ||
                  selectedApplication?.price ||
                  selectedApplication?.amount
                }
              />
              <Info label="ID lavoro" value={selectedJob.id} />
            </div>

            <div className="mt-3 bg-black/20 rounded-2xl p-4">
              <p className="text-gray-400 text-sm mb-2">
                Descrizione lavoro
              </p>

              <p className="text-base leading-7">
                {selectedJob.description || "Nessuna descrizione disponibile"}
              </p>
            </div>

            {selectedApplication?.message && (
              <div className="mt-3 bg-black/20 rounded-2xl p-4">
                <p className="text-gray-400 text-sm mb-2">
                  Messaggio candidatura
                </p>

                <p className="text-base leading-7">
                  {selectedApplication.message}
                </p>
              </div>
            )}

            <div className="mt-3 bg-black/20 rounded-2xl p-4">
              <p className="text-gray-400 text-sm mb-3">
                Guadagno reale del pilota
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="number"
                  placeholder="Es. 250"
                  value={earningInput}
                  onChange={(e) => setEarningInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white text-black outline-none text-base"
                />

                <button
                  onClick={saveEarning}
                  className="rounded-xl bg-green-500 px-6 py-3 font-bold text-black hover:bg-green-400"
                >
                  Salva
                </button>
              </div>

              <p className="text-gray-500 text-xs mt-3">
                Questo valore sarà mostrato nello storico come guadagno reale.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Info({ label, value }) {
  return (
    <div className="bg-black/20 rounded-2xl p-4">
      <p className="text-gray-400 text-xs mb-2">
        {label}
      </p>

      <p className="text-base font-semibold break-all">
        {value || "Non disponibile"}
      </p>
    </div>
  )
}
