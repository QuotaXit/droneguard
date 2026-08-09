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

  const [earnings, setEarnings] = useState(() => {
    if (typeof window === "undefined") {
      return {}
    }

    try {
      const saved =
        window.localStorage.getItem(
          "pilot_job_earnings"
        )

      return saved
        ? JSON.parse(saved)
        : {}
    } catch {
      return {}
    }
  })

  const [earningInput, setEarningInput] = useState("")

  const openJobSummary = (job) => {
    setSelectedJob(job)
    setEarningInput(
      earnings[job.id] || ""
    )
  }

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

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto w-full max-w-7xl">

          <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-purple-300">
                Area pilota
              </p>

              <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl">
                Storico lavori
              </h1>

              <p className="mt-2 text-sm text-gray-400 sm:text-base">
                Tutti i lavori conclusi con successo dal tuo profilo.
              </p>
            </div>

            <div className="grid w-full gap-3 sm:grid-cols-2 lg:w-auto lg:min-w-[420px]">
              <div className="rounded-2xl border border-green-400/15 bg-green-400/[0.06] px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-300/70">
                  Entrate registrate
                </p>

                <div className="mt-2 flex items-end justify-between gap-4">
                  <h2 className="text-2xl font-black text-green-300 sm:text-3xl">
                    {formatEuro(totalEarnings)}
                  </h2>

                  <span className="text-xs text-gray-500">
                    Valore personale
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300/70">
                  Lavori completati
                </p>

                <div className="mt-2 flex items-end justify-between gap-4">
                  <h2 className="text-2xl font-black text-white sm:text-3xl">
                    {confirmedJobsCount}
                  </h2>

                  <span className="text-xs text-gray-500">
                    Del tuo profilo
                  </span>
                </div>
              </div>
            </div>
          </div>


          {loading ? (
            <div className="rounded-3xl border border-white/10 bg-[#140a3a] px-6 py-14 text-center">
              <p className="text-gray-400">
                Caricamento storico...
              </p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-[#140a3a] px-6 py-14 text-center">
              <h2 className="text-2xl font-bold">
                Nessun lavoro nello storico
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                I lavori conclusi con successo compariranno qui.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {jobs.map((job) => {
                const earning = getRealEarning(job)

                return (
                  <article
                    key={job.id}
                    className="group rounded-3xl border border-white/10 bg-[#140a3a] p-5 transition hover:border-green-400/25 hover:bg-[#170d42] sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-green-300">
                            Completato
                          </span>

                          <span className="text-xs text-gray-500">
                            {formatDate(
                              job.completed_at ||
                                job.updated_at ||
                                job.created_at
                            )}
                          </span>
                        </div>

                        <h3 className="truncate text-xl font-black text-white sm:text-2xl">
                          {job.title || "Lavoro senza titolo"}
                        </h3>
                      </div>

                      <div className="shrink-0 text-right">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">
                          Guadagno
                        </p>

                        <p className={`mt-1 text-lg font-black ${
                          earning
                            ? "text-green-300"
                            : "text-gray-500"
                        }`}>
                          {formatEuro(earning)}
                        </p>
                      </div>
                    </div>


                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">
                          Località
                        </p>

                        <p className="mt-1 truncate text-sm font-semibold text-gray-200">
                          📍 {job.location || "Non indicata"}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">
                          Data lavoro
                        </p>

                        <p className="mt-1 text-sm font-semibold text-gray-200">
                          📅 {formatDate(job.job_date || job.created_at)}
                        </p>
                      </div>
                    </div>


                    {job.description && (
                      <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-400">
                        {job.description}
                      </p>
                    )}


                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                      <div className="min-w-0">
                        <p className="text-xs text-gray-500">
                          ID lavoro
                        </p>

                        <p className="mt-1 max-w-[180px] truncate font-mono text-[11px] text-gray-600 sm:max-w-[260px]">
                          {job.id}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => openJobSummary(job)}
                        className="shrink-0 rounded-xl bg-green-500 px-4 py-2.5 text-sm font-black text-black transition hover:bg-green-400"
                      >
                        Vedi riepilogo
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </div>


      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#140a3a] p-5 text-white shadow-2xl sm:p-7">

            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-300">
                  Lavoro completato
                </p>

                <h2 className="mt-2 truncate text-2xl font-black sm:text-3xl">
                  {selectedJob.title || "Riepilogo lavoro"}
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Riepilogo dell&apos;attività conclusa.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold transition hover:bg-white/10"
              >
                ✕
              </button>
            </div>


            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Info
                label="Località"
                value={selectedJob.location}
              />

              <Info
                label="Data lavoro"
                value={formatDate(selectedJob.job_date)}
              />

              <Info
                label="Completato il"
                value={formatDate(
                  selectedJob.completed_at ||
                    selectedJob.updated_at ||
                    selectedJob.created_at
                )}
              />

              <Info
                label="Stato"
                value={selectedJob.status}
              />

              <Info
                label="Budget cliente"
                value={
                  selectedJob.budget ||
                  selectedJob.price ||
                  selectedJob.offer_price
                }
              />

              <Info
                label="Offerta candidatura"
                value={
                  selectedApplication?.offer ||
                  selectedApplication?.offer_price ||
                  selectedApplication?.price ||
                  selectedApplication?.amount
                }
              />
            </div>


            <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">
                Descrizione lavoro
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-200">
                {selectedJob.description ||
                  "Nessuna descrizione disponibile"}
              </p>
            </div>


            {selectedApplication?.message && (
              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">
                  Messaggio candidatura
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-200">
                  {selectedApplication.message}
                </p>
              </div>
            )}


            <div className="mt-4 rounded-2xl border border-green-400/15 bg-green-400/[0.05] p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
                <label className="flex-1">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-green-300/70">
                    Guadagno reale del pilota
                  </span>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Es. 250"
                    value={earningInput}
                    onChange={(e) =>
                      setEarningInput(e.target.value)
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600"
                  />
                </label>

                <button
                  type="button"
                  onClick={() => {
                    saveEarning()
                    toast.success("Guadagno salvato")
                  }}
                  className="rounded-xl bg-green-500 px-6 py-3 font-black text-black transition hover:bg-green-400"
                >
                  Salva
                </button>
              </div>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                Valore personale salvato solo sul tuo dispositivo.
              </p>
            </div>


            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-600">
                ID lavoro
              </p>

              <p className="mt-1 break-all font-mono text-xs text-gray-500">
                {selectedJob.id}
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
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">
        {label}
      </p>

      <p className="mt-2 break-words text-sm font-semibold text-gray-100">
        {value || "Non disponibile"}
      </p>
    </div>
  )
}
