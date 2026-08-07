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

  const [showReviewModal, setShowReviewModal] = useState(false)
  const [selectedReviewJob, setSelectedReviewJob] = useState(null)
  const [reviewRating, setReviewRating] = useState(5)
  const [reviewTitle, setReviewTitle] = useState("")
  const [reviewText, setReviewText] = useState("")
  const [reviewLoading, setReviewLoading] = useState(false)

    const loadHistory = async () => {
    setLoading(true)

    try {
      const {
        data: { user }
      } = await supabase.auth.getUser()

      if (!user) {
        setJobs([])
        return
      }

      // Recupera i lavori completati e annullati del cliente
      const { data: jobsData, error: jobsError } = await supabase
        .from("jobs")
        .select("*")
        .eq("user_id", user.id)
        .in("status", ["completed", "cancelled"])
        .order("created_at", {
          ascending: false
        })

      if (jobsError) {
        console.error("Errore caricamento storico:", jobsError)
        toast.error("Impossibile caricare lo storico dei lavori")
        setJobs([])
        return
      }

      const loadedJobs = jobsData || []

      // Conta le candidature ricevute per ogni lavoro
      const jobsWithApplications = await Promise.all(
        loadedJobs.map(async (job) => {
          const { count, error: applicationsError } = await supabase
            .from("applications")
            .select("*", {
              count: "exact",
              head: true
            })
            .eq("job_id", job.id)

          if (applicationsError) {
            console.error(
              `Errore candidature lavoro ${job.id}:`,
              applicationsError
            )
          }

          return {
            ...job,
            applications: count || 0,
            hasReview: false
          }
        })
      )

      // Recupera solamente gli ID dei lavori completati
      const completedJobIds = jobsWithApplications
        .filter((job) => job.status === "completed")
        .map((job) => job.id)

      let reviewedJobIds = new Set()

      // Controlla quali lavori possiedono già una recensione
      if (completedJobIds.length > 0) {
        const { data: reviewsData, error: reviewsError } = await supabase
          .from("reviews")
          .select("job_id")
          .eq("client_id", user.id)
          .in("job_id", completedJobIds)

        if (reviewsError) {
          console.error(
            "Errore controllo recensioni esistenti:",
            reviewsError
          )
        } else {
          reviewedJobIds = new Set(
            (reviewsData || [])
              .map((review) => review.job_id)
              .filter(Boolean)
          )
        }
      }

      const finalJobs = jobsWithApplications.map((job) => ({
        ...job,
        hasReview: reviewedJobIds.has(job.id)
      }))

      setJobs(finalJobs)

      const completedJobs = finalJobs.filter(
        (job) => job.status === "completed"
      )

      const cancelledJobs = finalJobs.filter(
        (job) => job.status === "cancelled"
      )

      const totalApplications = finalJobs.reduce(
        (sum, job) => sum + Number(job.applications || 0),
        0
      )

      setTotalCount(finalJobs.length)
      setConfirmedCount(completedJobs.length)
      setCancelledCount(cancelledJobs.length)
      setApplicationsCount(totalApplications)
    } catch (error) {
      console.error("Errore imprevisto caricamento storico:", error)
      toast.error("Errore imprevisto durante il caricamento")
      setJobs([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {

    loadHistory()

  }, [])

  const openReviewModal = (job) => {
    setSelectedReviewJob(job)
    setReviewRating(5)
    setReviewTitle("")
    setReviewText("")
    setShowReviewModal(true)
  }

    const saveReview = async () => {
    if (!selectedReviewJob || reviewLoading) return

    const cleanTitle = reviewTitle.trim()
    const cleanReview = reviewText.trim()
    const numericRating = Number(reviewRating)

    if (
      selectedReviewJob.status !== "completed" ||
      selectedReviewJob.hasReview
    ) {
      toast.error("La recensione non è disponibile per questo lavoro")
      return
    }

    if (
      !Number.isInteger(numericRating) ||
      numericRating < 1 ||
      numericRating > 5
    ) {
      toast.error("Seleziona una valutazione valida")
      return
    }

    if (cleanTitle.length < 3) {
      toast.error("Il titolo deve contenere almeno 3 caratteri")
      return
    }

    if (cleanTitle.length > 100) {
      toast.error("Il titolo non può superare 100 caratteri")
      return
    }

    if (cleanReview.length < 10) {
      toast.error("La recensione deve contenere almeno 10 caratteri")
      return
    }

    if (cleanReview.length > 2000) {
      toast.error("La recensione non può superare 2000 caratteri")
      return
    }

    try {
      setReviewLoading(true)

      const { data, error } = await supabase.rpc(
        "create_job_review",
        {
          p_job_id: selectedReviewJob.id,
          p_rating: numericRating,
          p_title: cleanTitle,
          p_review: cleanReview
        }
      )

      if (error) {
        console.error("Errore creazione recensione:", error)

        const errorMessage = String(
          error.message || ""
        ).toUpperCase()

        if (errorMessage.includes("RECENSIONE_GIA_PRESENTE")) {
          toast.error("Hai già recensito questo lavoro")
        } else if (
          errorMessage.includes("LAVORO_NON_COMPLETATO")
        ) {
          toast.error("Puoi recensire soltanto un lavoro completato")
        } else if (
          errorMessage.includes(
            "NON_SEI_IL_PROPRIETARIO_DEL_LAVORO"
          )
        ) {
          toast.error("Non puoi recensire questo lavoro")
        } else if (
          errorMessage.includes("PILOTA_NON_ASSEGNATO")
        ) {
          toast.error("Non risulta alcun pilota assegnato")
        } else if (
          errorMessage.includes("ACCOUNT_SOSPESO")
        ) {
          toast.error("Il tuo account è sospeso")
        } else if (
          errorMessage.includes("SOLO_CLIENTI")
        ) {
          toast.error("Solo i clienti possono lasciare recensioni")
        } else if (
          errorMessage.includes("VALUTAZIONE_NON_VALIDA")
        ) {
          toast.error("La valutazione deve essere compresa tra 1 e 5")
        } else if (
          errorMessage.includes("TITOLO_TROPPO_CORTO")
        ) {
          toast.error("Il titolo deve contenere almeno 3 caratteri")
        } else if (
          errorMessage.includes("TITOLO_TROPPO_LUNGO")
        ) {
          toast.error("Il titolo non può superare 100 caratteri")
        } else if (
          errorMessage.includes("RECENSIONE_TROPPO_CORTA")
        ) {
          toast.error("La recensione deve contenere almeno 10 caratteri")
        } else if (
          errorMessage.includes("RECENSIONE_TROPPO_LUNGA")
        ) {
          toast.error("La recensione non può superare 2000 caratteri")
        } else {
          toast.error("Errore durante il salvataggio della recensione")
        }

        return
      }

      if (!data?.created) {
        toast.error("La recensione non è stata creata correttamente")
        return
      }

      setJobs((currentJobs) =>
        currentJobs.map((job) =>
          job.id === selectedReviewJob.id
            ? {
                ...job,
                hasReview: true
              }
            : job
        )
      )

      toast.success("Recensione pubblicata ✅")

      setShowReviewModal(false)
      setSelectedReviewJob(null)
      setReviewRating(5)
      setReviewTitle("")
      setReviewText("")
    } catch (error) {
      console.error("Errore imprevisto recensione:", error)
      toast.error("Errore imprevisto durante il salvataggio")
    } finally {
      setReviewLoading(false)
    }
  }

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

{job.status === "completed" && (
  job.hasReview ? (
    <button
      type="button"
      disabled
      className="mt-5 w-full cursor-not-allowed rounded-xl border border-green-400/30 bg-green-500/10 py-3 font-bold text-green-300"
    >
      Recensione già inviata
    </button>
  ) : (
    <button
      type="button"
      onClick={() => openReviewModal(job)}
      className="mt-5 w-full rounded-xl bg-yellow-400 py-3 font-bold text-black transition hover:bg-yellow-300"
    >
      Lascia recensione
    </button>
  )
)}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {showReviewModal && selectedReviewJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#140a3a] p-6 text-white">

            <h2 className="mb-2 text-3xl font-bold">
              Lascia recensione
            </h2>

            <p className="mb-6 text-gray-400">
              Recensione per: {selectedReviewJob.title}
            </p>

            <label className="mb-2 block text-sm text-gray-300">
              Valutazione
            </label>

            <select
  value={reviewRating}
  onChange={(e) => setReviewRating(e.target.value)}
  className="mb-4 w-full rounded-xl bg-white/10 p-3 text-white outline-none"
>
  <option value="5" className="text-black">
    5 stelle
  </option>

  <option value="4" className="text-black">
    4 stelle
  </option>

  <option value="3" className="text-black">
    3 stelle
  </option>

  <option value="2" className="text-black">
    2 stelle
  </option>

  <option value="1" className="text-black">
    1 stella
  </option>
</select>

            <label className="mb-2 block text-sm text-gray-300">
              Titolo recensione
            </label>

            <input
  type="text"
  value={reviewTitle}
  onChange={(e) => setReviewTitle(e.target.value)}
  placeholder="Esempio: Ottimo pilota"
  minLength={3}
  maxLength={100}
  disabled={reviewLoading}
  className="mb-2 w-full rounded-xl bg-white/10 p-3 text-white outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
/>

<p className="mb-4 text-right text-xs text-gray-500">
  {reviewTitle.length}/100
</p>

            <label className="mb-2 block text-sm text-gray-300">
              Recensione
            </label>

            <textarea
  value={reviewText}
  onChange={(e) => setReviewText(e.target.value)}
  placeholder="Scrivi com'è andato il lavoro..."
  rows={5}
  minLength={10}
  maxLength={2000}
  disabled={reviewLoading}
  className="mb-2 w-full resize-none rounded-xl bg-white/10 p-3 text-white outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
/>

<p className="mb-6 text-right text-xs text-gray-500">
  {reviewText.length}/2000
</p>

            <div className="grid grid-cols-2 gap-4">

              <button
  type="button"
  onClick={() => {
    setShowReviewModal(false)
    setSelectedReviewJob(null)
    setReviewRating(5)
    setReviewTitle("")
    setReviewText("")
  }}
  disabled={reviewLoading}
  className="rounded-xl border border-white/10 bg-white/5 py-3 font-semibold transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
>
  Chiudi
</button>

              <button
  type="button"
  onClick={saveReview}
  disabled={
    reviewLoading ||
    reviewTitle.trim().length < 3 ||
    reviewText.trim().length < 10
  }
  className="rounded-xl bg-green-500 py-3 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
>
  {reviewLoading ? "Salvataggio..." : "Pubblica recensione"}
</button>

            </div>

          </div>
        </div>
      )}

    </div>
  )
}