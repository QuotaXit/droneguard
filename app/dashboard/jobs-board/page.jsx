"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabase/client"

import {
  MapPin,
  Calendar,
  Users,
  Briefcase,
  CheckCircle2,
  Plane
} from "lucide-react"

function isAssignedExpired(job) {
  if (job.status !== "assigned" || !job.assigned_at) return false

  const assignedAt = new Date(job.assigned_at)
  const expiresAt = new Date(assignedAt)
  expiresAt.setDate(expiresAt.getDate() + 7)

  return new Date() > expiresAt
}

export default function JobsBoardPage() {
  const [jobs, setJobs] = useState([])
  const [offers, setOffers] = useState({})

  const [activeJobs, setActiveJobs] = useState(0)
  const [completedJobs, setCompletedJobs] = useState(0)
  const [pilotsCount, setPilotsCount] = useState(0)

  const loadJobs = async () => {
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.log(error)
      return
    }

    const visibleJobs = (data || []).filter((job) => {
      if (job.status === "completed") return false
      if (job.status === "assigned") return false
      if (isAssignedExpired(job)) return false
      return true
    })

    const jobsWithApplications = await Promise.all(
      visibleJobs.map(async (job) => {
        const { count } = await supabase
          .from("applications")
          .select("*", { count: "exact", head: true })
          .eq("job_id", job.id)

        return {
          ...job,
          applications: count || 0
        }
      })
    )

    setJobs(jobsWithApplications)
    setActiveJobs(jobsWithApplications.length)

    const { count: completed } = await supabase
      .from("jobs")
      .select("*", { count: "exact", head: true })
      .eq("status", "completed")

    setCompletedJobs(completed || 0)

    const { count: totalApplications } = await supabase
  .from("applications")
  .select("*", {
    count: "exact",
    head: true
  })

setPilotsCount(totalApplications || 0)
  }

  useEffect(() => {
    loadJobs()
  }, [])

  const applyToJob = async (jobId) => {
    const price = offers[jobId]

    if (!price) {
      alert("Inserisci il tuo prezzo ❌")
      return
    }

    const {
      data: { user }
    } = await supabase.auth.getUser()

    if (!user) return

    let targetJob = jobs.find((job) => job.id === jobId)

    if (!targetJob) {
      const { data: fetchedJob } = await supabase
        .from("jobs")
        .select("id, title, user_id, status")
        .eq("id", jobId)
        .single()

      targetJob = fetchedJob || null
    }

    if (targetJob?.status === "assigned" || targetJob?.status === "completed") {
      alert("Questo lavoro non è più disponibile ❌")
      loadJobs()
      return
    }

    const { data: profile } = await supabase
      .from("users")
      .select("credits")
      .eq("id", user.id)
      .single()

    if (!profile || profile.credits < 5) {
      alert("Crediti insufficienti ❌")
      return
    }

    const { count } = await supabase
      .from("applications")
      .select("*", { count: "exact", head: true })
      .eq("job_id", jobId)

    if (count >= 10) {
      alert("Numero massimo candidature raggiunto ❌")
      return
    }

    const { data: existing } = await supabase
      .from("applications")
      .select("*")
      .eq("job_id", jobId)
      .eq("pilot_id", user.id)
      .maybeSingle()

    if (existing) {
      alert("Ti sei già candidato ❌")
      return
    }

    const applicationData = {
      job_id: jobId,
      pilot_id: user.id,
      pilot_email: user.email || "",
      price,
      offer_price: price,
      message: "",
      status: "pending"
    }

    let { data: createdApplication, error } = await supabase
      .from("applications")
      .insert([applicationData])
      .select()
      .single()

    if (
      error &&
      String(error.message || "").toLowerCase().includes("pilot_email")
    ) {
      const fallbackPayload = {
        job_id: jobId,
        pilot_id: user.id,
        price,
        offer_price: price,
        message: "",
        status: "pending"
      }

      ;({ data: createdApplication, error } = await supabase
        .from("applications")
        .insert([fallbackPayload])
        .select()
        .single())
    }

    if (error) {
      console.error("[applications] create failed:", error)
      alert(
        "Errore candidatura: " +
          (error?.message || error?.details || error?.code || "errore sconosciuto")
      )
      return
    }

    const { error: creditsError } = await supabase
      .from("users")
      .update({
        credits: profile.credits - 5
      })
      .eq("id", user.id)

    if (creditsError) {
      console.error("[applications] credits update failed:", creditsError)
    }

    const notificationsToInsert = [
      {
        user_id: user.id,
        title: "Candidatura inviata",
        message: `La tua candidatura per "${targetJob?.title || "questo lavoro"}" è stata inviata.`,
        type: "application_submitted",
        read: false
      }
    ]

    if (targetJob?.user_id && targetJob.user_id !== user.id) {
      notificationsToInsert.push({
        user_id: targetJob.user_id,
        title: "Nuovo candidato",
        message: `Un pilota si è candidato al lavoro "${targetJob.title || "senza titolo"}".`,
        type: "new_candidate",
        read: false
      })
    }

    await supabase.from("notifications").insert(notificationsToInsert)

    console.log("[applications] created:", createdApplication)

    alert("Candidatura inviata 🚀")
    loadJobs()
  }

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]">
        <div className="max-w-[1700px] mx-auto flex gap-8 p-8">
          <div className="w-[320px] shrink-0">
            <div className="sticky top-8 border border-white/10 bg-[#140a3a] rounded-3xl p-7">
              <h2 className="text-3xl font-bold mb-8">Dashboard</h2>

              <div className="space-y-5">
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Plane size={20} />
                    <p className="text-gray-300">Lavori attuali</p>
                  </div>

                  <h3 className="text-4xl font-bold text-green-400">
                    {activeJobs}
                  </h3>
                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 size={20} />
                    <p className="text-gray-300">Lavori completati</p>
                  </div>

                  <h3 className="text-4xl font-bold text-cyan-400">
                    {completedJobs}
                  </h3>
                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Users size={20} />
<p className="text-gray-300">Candidature totali</p>                 
 </div>

                  <h3 className="text-4xl font-bold text-yellow-400">
                    {pilotsCount}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-12">
              <h1 className="text-6xl font-bold mb-4">Bacheca lavori</h1>

              <p className="text-gray-400 text-xl">
                Esplora i lavori pubblicati dai clienti DroneGuard.
              </p>
            </div>

            <div className="max-h-[1320px] space-y-8 overflow-y-auto pr-3">
              {jobs.length === 0 && (
                <div className="border border-white/10 bg-[#140a3a] rounded-3xl p-14 text-center">
                  <h2 className="text-3xl font-bold mb-4">
                    Nessun lavoro disponibile
                  </h2>

                  <p className="text-gray-400">
                    I clienti non hanno ancora pubblicato lavori.
                  </p>
                </div>
              )}

              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="border border-white/10 bg-[#140a3a] rounded-3xl p-8"
                >
                  <div className="flex justify-between gap-8">
                    <div className="flex-1 max-w-2xl">
                      <div className="flex items-center gap-4 mb-5">
                        <Briefcase size={24} />
                        <h2 className="text-3xl font-bold">{job.title}</h2>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-6 text-gray-400 mb-6">
                        <div className="flex items-center gap-2 text-base">
                          <MapPin size={16} />
                          {job.location}
                        </div>

                        <div className="flex items-center gap-2 text-base">
                          <Calendar size={16} />
                          {job.job_date}
                        </div>
                      </div>

                      {(job.image1 || job.image2 || job.image3) && (
                        <div className="flex gap-4 mt-4 flex-wrap">
                          {job.image1 && (
                            <img
                              src={job.image1}
                              alt="Lavoro"
                              className="w-36 h-28 rounded-2xl object-cover border border-white/10"
                            />
                          )}

                          {job.image2 && (
                            <img
                              src={job.image2}
                              alt="Lavoro"
                              className="w-36 h-28 rounded-2xl object-cover border border-white/10"
                            />
                          )}

                          {job.image3 && (
                            <img
                              src={job.image3}
                              alt="Lavoro"
                              className="w-36 h-28 rounded-2xl object-cover border border-white/10"
                            />
                          )}
                        </div>
                      )}
                    </div>

                    <div className="w-[300px]">
                      <input
                        type="number"
                        placeholder="La tua offerta €"
                        value={offers[job.id] || ""}
                        onChange={(e) =>
                          setOffers({
                            ...offers,
                            [job.id]: e.target.value
                          })
                        }
                        className="w-full mb-4 p-4 rounded-xl bg-[#1d1250] border border-white/10 text-lg"
                      />

                      <button
                        onClick={() => applyToJob(job.id)}
                        className="w-full py-4 rounded-xl bg-green-500 text-black font-bold text-lg hover:bg-green-400 transition"
                      >
                        Candidati • 5 crediti
                      </button>

                      <div className="mt-5 bg-white/5 rounded-xl p-5 border border-white/10">
                        <div className="flex items-center gap-2 mb-3">
                          <Users size={18} />
                          <p className="font-semibold text-lg">Candidature</p>
                        </div>

                        <p className="text-4xl font-bold">
                          {job.applications}/10
                        </p>

                        <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                          Al momento si sono candidati {job.applications} piloti.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {jobs.length > 6 && (
              <p className="mt-4 text-sm text-gray-500">
                La bacheca mostra circa 6 annunci visibili: scorri la lista per
                vedere gli altri.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}