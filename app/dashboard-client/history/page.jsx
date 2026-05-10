"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/client"

import {
  History,
  CheckCircle2,
  XCircle,
  Briefcase,
  Users,
  CalendarDays,
  MapPin
} from "lucide-react"

export default function ClientHistoryPage() {

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  // 🔥 STATS
  const [confirmedCount, setConfirmedCount] = useState(0)
  const [cancelledCount, setCancelledCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [applicationsCount, setApplicationsCount] = useState(0)

  const loadHistory = async () => {

    setLoading(true)

    const {
        data: { user }
      } = await supabase.auth.getUser()

    if (!user) return

    // 🔥 PRENDE TUTTI I JOB CHIUSI / COMPLETATI
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .eq("user_id", user.id)
      .in("status", ["completed", "cancelled"])
      .order("created_at", {
        ascending: false
      })

    if (error) {
      console.log(error)
      setLoading(false)
      return
    }

    // 🔥 COUNT CANDIDATURE
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

    setJobs(jobsWithApplications)

    // 🔥 STATS
    setTotalCount(jobsWithApplications.length)

    const confirmed = jobsWithApplications.filter(
      (job) => job.status === "completed"
    )

    const cancelled = jobsWithApplications.filter(
      (job) => job.status === "cancelled"
    )

    setConfirmedCount(confirmed.length)
    setCancelledCount(cancelled.length)

    const totalApplications = jobsWithApplications.reduce(
      (sum, job) => sum + job.applications,
      0
    )

    setApplicationsCount(totalApplications)

    setLoading(false)

  }

  useEffect(() => {

    loadHistory()

  }, [])

  return (
    <div className="min-h-screen flex flex-col text-white">

      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="mb-10">

            <h1 className="mb-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Storico lavori
            </h1>

            <p className="text-base text-gray-400 sm:text-lg">
              Tutti i lavori completati o annullati.
            </p>

          </div>

          {/* STATS */}
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

            {/* TOTALI */}
            <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-3 mb-4">
                <History size={22} />
                <p className="text-gray-300">
                  Totale lavori
                </p>
              </div>

              <h2 className="text-4xl font-bold text-cyan-400 sm:text-5xl">
                {totalCount}
              </h2>

            </div>

            {/* COMPLETATI */}
            <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 size={22} />
                <p className="text-gray-300">
                  Confermati
                </p>
              </div>

              <h2 className="text-4xl font-bold text-green-400 sm:text-5xl">
                {confirmedCount}
              </h2>

            </div>

            {/* ANNULLATI */}
            <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-3 mb-4">
                <XCircle size={22} />
                <p className="text-gray-300">
                  Annullati
                </p>
              </div>

              <h2 className="text-4xl font-bold text-red-400 sm:text-5xl">
                {cancelledCount}
              </h2>

            </div>

            {/* CANDIDATURE */}
            <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-3 mb-4">
                <Users size={22} />
                <p className="text-gray-300">
                  Candidature ricevute
                </p>
              </div>

              <h2 className="text-4xl font-bold text-yellow-400 sm:text-5xl">
                {applicationsCount}
              </h2>

            </div>

          </div>

          {/* EMPTY */}
          {!loading && jobs.length === 0 && (

            <div className="bg-[#140a3a] border border-white/10 rounded-3xl p-14 text-center">

              <h2 className="text-3xl font-bold mb-4">
                Nessuno storico disponibile
              </h2>

              <p className="text-gray-400">
                I lavori completati o annullati appariranno qui.
              </p>

            </div>

          )}

          {/* JOBS */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">

            {jobs.map((job) => (

              <div
                key={job.id}
                className="bg-[#140a3a] border border-white/10 rounded-3xl overflow-hidden"
              >

                {/* FOTO */}
                {job.image1 && (

                  <img
                    src={job.image1}
                    className="w-full h-52 object-cover"
                  />

                )}

                <div className="p-6">

                  {/* STATUS */}
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <span className={`
                      px-3 py-1 rounded-full text-xs font-semibold
                      ${job.status === "completed"
                        ? "bg-green-500 text-black"
                        : "bg-red-500 text-white"}
                    `}>

                      {job.status === "completed" && "COMPLETATO"}
{job.status === "cancelled" && "ANNULLATO"}
{job.status === "assigned" && "ASSEGNATO"}

                    </span>

                    <div className="flex items-center gap-2 text-sm text-gray-400">

                      <Users size={15} />

                      {job.applications} candidati

                    </div>

                  </div>

                  {/* TITOLO */}
                  <h3 className="text-2xl font-bold mb-3">
                    {job.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-300 mb-5 line-clamp-3 leading-relaxed">
                    {job.description}
                  </p>

                  {/* INFO */}
                  <div className="space-y-3 text-sm text-gray-400">

                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {job.location}
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {job.job_date}
                    </div>

                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      Stato: {job.status}
                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  )
}
