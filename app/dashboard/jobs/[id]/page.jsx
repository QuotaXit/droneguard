"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/client"

export default function JobDetail() {
  const { id } = useParams()

  const [job, setJob] = useState(null)
  const [applications, setApplications] = useState([])

  useEffect(() => {
    const load = async () => {
      const { data: jobData } = await supabase
        .from("jobs")
        .select("*")
        .eq("id", id)
        .single()

      setJob(jobData)

      const { data: apps } = await supabase
        .from("applications")
        .select("*")
        .eq("job_id", id)
        .order("created_at", { ascending: true })

      setApplications(apps || [])
    }

    load()
  }, [id])

  const handleAccept = async (pilotId) => {
    if (!confirm("Sei sicuro di selezionare questo pilota?")) return

    // 🔥 assegna job
    const { error: updateJobError } = await supabase
      .from("jobs")
      .update({
        status: "assigned",
        assigned_pilot: pilotId
      })
      .eq("id", id)

    if (updateJobError) {
      console.error(
        "[job-assign] job update failed:",
        updateJobError
      )
      toast.error("Errore aggiornamento lavoro")
      return
    }

    // 🔥 accetta uno
    const { error: acceptError } = await supabase
      .from("applications")
      .update({ status: "accepted" })
      .eq("job_id", id)
      .eq("pilot_id", pilotId)

    if (acceptError) {
      console.error(
        "[job-assign] accept failed:",
        acceptError
      )
      toast.error("Errore assegnazione")
      return
    }

    // 🔥 rifiuta altri
    const { error: rejectError } = await supabase
      .from("applications")
      .update({ status: "rejected" })
      .eq("job_id", id)
      .neq("pilot_id", pilotId)

    if (rejectError) {
      console.error(
        "[job-assign] reject others failed:",
        rejectError
      )
      toast.error("Errore rifiuto candidature")
    }

    // 🔔 NOTIFICA
    const { error: notifError } = await supabase
      .from("notifications")
      .insert([
        {
          user_id: pilotId,
          type: "application_accepted",
          title: "Candidatura accettata",
          message: `La tua candidatura per "${job?.title || "questo lavoro"}" è stata accettata.`,
          read: false
        },
        {
          user_id: pilotId,
          type: "job_assigned",
          title: "Nuovo lavoro assegnato",
          message: "Hai ricevuto un nuovo lavoro",
          read: false
        }
      ])

    if (notifError) {
      console.error(
        "[notifications] legacy assign flow failed:",
        notifError
      )
    }

    toast.success("Pilota selezionato ✅")

    // reload dati
    location.reload()
  }

  if (!job) return null

  return (
    <div className="min-h-screen text-white">

      <Navbar logged />

      <div className="min-h-screen bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">

        <div className="max-w-4xl mx-auto mb-10">
          <h1 className="mb-4 text-2xl font-[var(--font-krona)] sm:text-3xl">
            {job.title}
          </h1>

          <p className="text-gray-300 mb-4">
            {job.description}
          </p>

          <div className="text-sm text-gray-400">
            📍 {job.location} <br />
            📅 {job.job_date}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-6">
            Candidature ({applications.length}/10)
          </h2>

          {applications.map((app) => (
            <div
              key={app.id}
              className="flex flex-col gap-4 rounded-xl border border-white/20 bg-white/5 p-5 sm:flex-row sm:items-center sm:justify-between"
            >

              <div>
                <p className="font-semibold">
                  Pilota ID: {app.pilot_id}
                </p>

                <p className="text-gray-400 text-sm">
                  {app.message || "Nessun messaggio"}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {new Date(app.created_at).toLocaleDateString()}
                </p>
              </div>

              <div className="sm:text-right">

                <p className="text-green-400 text-xl font-bold">
                  {app.price}€
                </p>

                {job.status === "open" && (
                  <button
                    onClick={() => handleAccept(app.pilot_id)}
                    className="mt-2 bg-green-500 px-4 py-2 rounded-lg text-black text-sm"
                  >
                    Accetta
                  </button>
                )}

                {app.status === "accepted" && (
                  <p className="text-green-400 text-sm mt-2">
                    ✔ Selezionato
                  </p>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
