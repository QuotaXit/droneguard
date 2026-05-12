"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import {
  Briefcase,
  FileText,
  ClipboardList,
  CreditCard,
  Settings,
  LogOut,
  Star,
  MessageSquare,
  MapPin,
  CalendarDays
} from "lucide-react"

export default function ReviewsPage() {
  const router = useRouter()

  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadReviews = async () => {
      setLoading(true)

      const {
        data: { user }
      } = await supabase.auth.getUser()

      if (!user) {
        router.push("/login")
        return
      }

      const { data: reviewsData, error: reviewsError } = await supabase
        .from("reviews")
        .select(`
          id,
          job_id,
          client_id,
          pilot_id,
          rating,
          title,
          review,
          created_at
        `)
        .eq("pilot_id", user.id)
        .order("created_at", { ascending: false })

      if (reviewsError) {
        console.error("Errore caricamento recensioni:", reviewsError)
        setReviews([])
        setLoading(false)
        return
      }

      const jobIds = [
        ...new Set((reviewsData || []).map((item) => item.job_id).filter(Boolean))
      ]

      const clientIds = [
        ...new Set((reviewsData || []).map((item) => item.client_id).filter(Boolean))
      ]

      let jobsMap = {}
      let clientsMap = {}

      if (jobIds.length > 0) {
        const { data: jobsData, error: jobsError } = await supabase
          .from("jobs")
          .select("id,title,location,job_date")
          .in("id", jobIds)

        if (jobsError) {
          console.error("Errore caricamento lavori recensioni:", jobsError)
        }

        jobsMap = Object.fromEntries(
          (jobsData || []).map((job) => [job.id, job])
        )
      }

      if (clientIds.length > 0) {
        const { data: clientsData, error: clientsError } = await supabase
          .from("users")
          .select("id,name,surname")
          .in("id", clientIds)

        if (clientsError) {
          console.error("Errore caricamento clienti recensioni:", clientsError)
        }

        clientsMap = Object.fromEntries(
          (clientsData || []).map((client) => [client.id, client])
        )
      }

      const fullReviews = (reviewsData || []).map((review) => ({
        ...review,
        job: jobsMap[review.job_id] || null,
        client: clientsMap[review.client_id] || null
      }))

      setReviews(fullReviews)
      setLoading(false)
    }

    loadReviews()
  }, [router])

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="h-fit border border-white/20 rounded-2xl bg-white/5 p-5 backdrop-blur-md sm:p-8 lg:col-span-3 lg:min-h-[520px]">
            <h2 className="text-2xl font-[var(--font-krona)] mb-10">
              Menu
            </h2>

            <div className="space-y-5 text-base text-gray-300 sm:text-lg lg:space-y-6">
              <Link href="/dashboard/jobs">
                <div className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                  <Briefcase size={20} />
                  Storico lavori
                </div>
              </Link>

              <Link href="/dashboard/jobs-board">
                <div className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                  <FileText size={20} />
                  Bacheca lavori
                </div>
              </Link>

              <Link href="/dashboard/job-data">
                <div className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                  <ClipboardList size={20} />
                  Dati lavoro
                </div>
              </Link>

              <Link href="/dashboard/reviews">
                <div className="flex items-center gap-3 text-white transition cursor-pointer">
                  <Star size={20} />
                  Recensioni
                </div>
              </Link>

              <Link href="/dashboard/credits">
                <div className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                  <CreditCard size={20} />
                  Crediti
                </div>
              </Link>

              <Link href="/dashboard/settings">
                <div className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                  <Settings size={20} />
                  Impostazioni
                </div>
              </Link>

              <div className="border-t border-white/10 my-6" />

              <div
                onClick={async () => {
                  await supabase.auth.signOut()
                  router.refresh()
                  router.push("/")
                }}
                className="hover:text-red-400 cursor-pointer flex items-center gap-3 transition"
              >
                <LogOut size={20} />
                Logout
              </div>
            </div>
          </div>

          <div className="lg:col-span-9">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Recensioni
            </h1>

            <p className="text-gray-300 mb-10">
              Qui trovi le recensioni ricevute dai clienti dopo i lavori completati.
            </p>

            {loading ? (
              <p className="text-gray-300">Caricamento recensioni...</p>
            ) : reviews.length === 0 ? (
              <div className="rounded-3xl border border-white/20 bg-[#140a3a] p-10">
                <MessageSquare size={34} className="mb-4 text-gray-300" />
                <h2 className="text-2xl font-semibold mb-2">
                  Nessuna recensione ricevuta
                </h2>
                <p className="text-gray-300">
                  Quando un cliente lascerà una recensione, apparirà qui.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {reviews.map((review) => {
                  const clientName = `${review.client?.name || ""} ${review.client?.surname || ""}`.trim() || "Cliente"

                  return (
                    <div
                      key={review.id}
                      className="rounded-3xl border border-white/20 bg-[#140a3a] p-7 shadow-xl"
                    >
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div>
                          <p className="text-sm text-gray-400">
                            Recensione da
                          </p>

                          <h2 className="text-xl font-semibold">
                            {clientName}
                          </h2>
                        </div>

                        <div className="flex items-center gap-1 text-yellow-400 font-bold">
                          {Array.from({ length: Number(review.rating) || 0 }).map((_, index) => (
                            <Star key={index} size={20} fill="currentColor" />
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 mb-5">
                        <p className="text-sm text-gray-400 mb-1">
                          Titolo lavoro
                        </p>

                        <h3 className="text-lg font-semibold">
                          {review.job?.title || "Lavoro"}
                        </h3>

                        <div className="mt-4 space-y-2 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            <MapPin size={15} />
                            {review.job?.location || "Posizione non indicata"}
                          </div>

                          <div className="flex items-center gap-2">
                            <CalendarDays size={15} />
                            Data svolgimento:{" "}
                            {review.job?.job_date
                              ? new Date(review.job.job_date).toLocaleDateString("it-IT")
                              : "Data non indicata"}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-3">
                        {review.title || "Recensione"}
                      </h3>

                      <p className="text-gray-300 leading-7 whitespace-pre-line">
                        {review.review || "Nessun testo inserito."}
                      </p>

                      <p className="text-xs text-gray-500 mt-6">
                        Ricevuta il{" "}
                        {review.created_at
                          ? new Date(review.created_at).toLocaleDateString("it-IT")
                          : "Data non disponibile"}
                      </p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}