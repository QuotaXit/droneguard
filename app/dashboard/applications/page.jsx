"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabase/client"
import Link from "next/link"

export default function ApplicationsPage() {
  const [applications, setApplications] = useState([])

  useEffect(() => {
    const fetchApplications = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser()
      if (!user) return

      const { data, error } = await supabase
        .from("applications")
        .select(`
          id,
          status,
          created_at,
          jobs (
            id,
            title,
            description,
            budget,
            location
          )
        `)
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })

      if (!error) {
        setApplications(data)
      } else {
        console.log(error)
      }
    }

    fetchApplications()
  }, [])

  return (
    <div className="min-h-screen flex flex-col text-white">

      {/* NAVBAR */}
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">

        <div className="max-w-6xl mx-auto">

          {/* TITLE */}
          <h1 className="mb-10 text-2xl font-[var(--font-krona)] sm:text-3xl">
            Le mie candidature
          </h1>

          {/* LISTA */}
          <div className="space-y-6">

            {applications.length === 0 && (
              <p className="text-gray-400">
                Non ti sei ancora candidato a nessun lavoro.
              </p>
            )}

            {applications.map((app) => (
              <div
                key={app.id}
                className="border border-white/20 rounded-2xl p-6 bg-white/5 backdrop-blur-md"
              >

                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                  <h2 className="text-xl font-semibold">
                    {app.jobs?.title}
                  </h2>

                  {/* STATUS */}
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    app.status === "accepted"
                      ? "bg-green-500"
                      : app.status === "rejected"
                      ? "bg-red-500"
                      : "bg-yellow-500 text-black"
                  }`}>
                    {app.status}
                  </span>

                </div>

                <p className="text-gray-300 text-sm mb-3">
                  {app.jobs?.description}
                </p>

                <div className="flex flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:justify-between">

                  <span>💰 Budget: {app.jobs?.budget}€</span>
                  <span>📍 {app.jobs?.location}</span>

                </div>

                <div className="mt-4">
                  <Link href={`/jobs/${app.jobs?.id}`}>
                    <button className="border border-white/30 px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
                      Vedi lavoro
                    </button>
                  </Link>
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  )
}
