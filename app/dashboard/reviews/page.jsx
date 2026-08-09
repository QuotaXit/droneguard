"use client"

import {
  useEffect,
  useMemo,
  useState
} from "react"

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


function formatDate(value) {
  if (!value) {
    return "Data non disponibile"
  }

  const date =
    new Date(value)

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return String(value)
  }

  return new Intl.DateTimeFormat(
    "it-IT",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }
  ).format(date)
}


function RatingStars({
  rating,
  size = 17
}) {
  const numericRating =
    Math.max(
      0,
      Math.min(
        5,
        Number(rating) || 0
      )
    )

  return (
    <div className="flex items-center gap-1">
      {Array.from({
        length: 5
      }).map((_, index) => {
        const active =
          index <
          Math.round(
            numericRating
          )

        return (
          <Star
            key={index}
            size={size}
            fill={
              active
                ? "currentColor"
                : "none"
            }
            className={
              active
                ? "text-yellow-400"
                : "text-white/15"
            }
          />
        )
      })}
    </div>
  )
}


export default function ReviewsPage() {
  const router =
    useRouter()

  const [
    reviews,
    setReviews
  ] = useState([])

  const [
    loading,
    setLoading
  ] = useState(true)


  useEffect(() => {
    const loadReviews =
      async () => {
        setLoading(true)

        const {
          data: { user }
        } =
          await supabase.auth
            .getUser()

        if (!user) {
          router.push(
            "/login"
          )

          return
        }

        const {
          data: reviewsData,
          error: reviewsError
        } =
          await supabase
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
            .eq(
              "pilot_id",
              user.id
            )
            .order(
              "created_at",
              {
                ascending: false
              }
            )

        if (reviewsError) {
          console.error(
            "Errore caricamento recensioni:",
            reviewsError
          )

          setReviews([])
          setLoading(false)

          return
        }

        const jobIds = [
          ...new Set(
            (reviewsData || [])
              .map(
                (item) =>
                  item.job_id
              )
              .filter(Boolean)
          )
        ]

        const clientIds = [
          ...new Set(
            (reviewsData || [])
              .map(
                (item) =>
                  item.client_id
              )
              .filter(Boolean)
          )
        ]

        let jobsMap = {}
        let clientsMap = {}

        if (
          jobIds.length > 0
        ) {
          const {
            data: jobsData,
            error: jobsError
          } =
            await supabase
              .from("jobs")
              .select(
                "id,title,location,job_date"
              )
              .in(
                "id",
                jobIds
              )

          if (jobsError) {
            console.error(
              "Errore caricamento lavori recensioni:",
              jobsError
            )
          }

          jobsMap =
            Object.fromEntries(
              (jobsData || [])
                .map(
                  (job) => [
                    job.id,
                    job
                  ]
                )
            )
        }

        if (
          clientIds.length > 0
        ) {
          const {
            data: clientsData,
            error: clientsError
          } =
            await supabase
              .from("users")
              .select(
                "id,name,surname"
              )
              .in(
                "id",
                clientIds
              )

          if (clientsError) {
            console.error(
              "Errore caricamento clienti recensioni:",
              clientsError
            )
          }

          clientsMap =
            Object.fromEntries(
              (clientsData || [])
                .map(
                  (client) => [
                    client.id,
                    client
                  ]
                )
            )
        }

        const fullReviews =
          (reviewsData || [])
            .map(
              (review) => ({
                ...review,

                job:
                  jobsMap[
                    review.job_id
                  ] ||
                  null,

                client:
                  clientsMap[
                    review.client_id
                  ] ||
                  null
              })
            )

        setReviews(
          fullReviews
        )

        setLoading(false)
      }

    loadReviews()
  }, [router])


  const averageRating =
    useMemo(() => {
      if (
        reviews.length === 0
      ) {
        return 0
      }

      const validRatings =
        reviews
          .map(
            (review) =>
              Number(
                review.rating
              )
          )
          .filter(
            (rating) =>
              Number.isFinite(
                rating
              ) &&
              rating > 0
          )

      if (
        validRatings.length === 0
      ) {
        return 0
      }

      return (
        validRatings.reduce(
          (
            total,
            rating
          ) =>
            total + rating,
          0
        ) /
        validRatings.length
      )
    }, [reviews])


  const fiveStarReviews =
    useMemo(
      () =>
        reviews.filter(
          (review) =>
            Number(
              review.rating
            ) === 5
        ).length,
      [reviews]
    )


  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-8">

          <aside className="h-fit rounded-3xl border border-white/10 bg-[#140a3a] p-4 lg:sticky lg:top-8">

            <div className="border-b border-white/10 px-2 pb-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300">
                Navigazione
              </p>

              <h2 className="mt-1 text-xl font-black">
                Menu
              </h2>
            </div>


            <nav className="mt-3 space-y-1">

              <Link
                href="/dashboard/jobs"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-gray-400 transition hover:bg-white/[0.06] hover:text-white"
              >
                <Briefcase size={17} />
                Storico lavori
              </Link>


              <Link
                href="/dashboard/jobs-board"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-gray-400 transition hover:bg-white/[0.06] hover:text-white"
              >
                <FileText size={17} />
                Bacheca lavori
              </Link>


              <Link
                href="/dashboard/job-data"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-gray-400 transition hover:bg-white/[0.06] hover:text-white"
              >
                <ClipboardList size={17} />
                Dati lavoro
              </Link>


              <Link
                href="/dashboard/reviews"
                className="flex items-center gap-3 rounded-xl border border-yellow-400/15 bg-yellow-400/[0.06] px-3 py-2.5 text-sm font-bold text-yellow-200"
              >
                <Star size={17} />
                Recensioni
              </Link>


              <Link
                href="/dashboard/credits"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-gray-400 transition hover:bg-white/[0.06] hover:text-white"
              >
                <CreditCard size={17} />
                Crediti
              </Link>


              <Link
                href="/dashboard/settings"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-gray-400 transition hover:bg-white/[0.06] hover:text-white"
              >
                <Settings size={17} />
                Impostazioni
              </Link>

            </nav>


            <div className="my-4 border-t border-white/10" />


            <button
              type="button"
              onClick={
                async () => {
                  await supabase.auth
                    .signOut()

                  router.refresh()
                  router.push("/")
                }
              }
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-gray-400 transition hover:bg-red-400/[0.08] hover:text-red-300"
            >
              <LogOut size={17} />
              Logout
            </button>

          </aside>


          <main className="min-w-0">

            <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300">
                  Reputazione pilota
                </p>

                <h1 className="mt-1 text-3xl font-black sm:text-4xl lg:text-5xl">
                  Recensioni
                </h1>

                <p className="mt-2 max-w-2xl text-sm text-gray-400 sm:text-base">
                  Feedback ricevuti dai clienti dopo i lavori completati.
                </p>
              </div>


              <div className="grid w-full gap-3 sm:grid-cols-3 xl:w-auto xl:min-w-[560px]">

                <div className="rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.05] px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-yellow-300/70">
                    Valutazione media
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-3">
                    <span className="text-2xl font-black text-white">
                      {reviews.length > 0
                        ? averageRating.toFixed(1)
                        : "—"}
                    </span>

                    <RatingStars
                      rating={
                        averageRating
                      }
                      size={15}
                    />
                  </div>
                </div>


                <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-300/70">
                    Recensioni
                  </p>

                  <p className="mt-2 text-2xl font-black text-white">
                    {reviews.length}
                  </p>
                </div>


                <div className="rounded-2xl border border-green-400/15 bg-green-400/[0.05] px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-green-300/70">
                    5 stelle
                  </p>

                  <p className="mt-2 text-2xl font-black text-green-300">
                    {fiveStarReviews}
                  </p>
                </div>

              </div>

            </div>


            {loading ? (
              <div className="rounded-3xl border border-white/10 bg-[#140a3a] px-6 py-14 text-center">
                <p className="text-gray-400">
                  Caricamento recensioni...
                </p>
              </div>
            ) : reviews.length === 0 ? (
              <div className="rounded-3xl border border-white/10 bg-[#140a3a] p-8 text-center sm:p-12">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-gray-400">
                  <MessageSquare size={23} />
                </div>

                <h2 className="mt-4 text-2xl font-black">
                  Nessuna recensione ricevuta
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Quando un cliente lascerà una recensione, apparirà qui.
                </p>

              </div>
            ) : (
              <div className="grid gap-4 xl:grid-cols-2">

                {reviews.map(
                  (review) => {
                    const clientName =
                      `${review.client?.name || ""} ${review.client?.surname || ""}`
                        .trim() ||
                      "Cliente"

                    return (
                      <article
                        key={review.id}
                        className="rounded-3xl border border-white/10 bg-[#140a3a] p-5 transition hover:border-yellow-400/20 hover:bg-[#170d42] sm:p-6"
                      >

                        <div className="flex items-start justify-between gap-4">

                          <div className="min-w-0">
                            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">
                              Recensione da
                            </p>

                            <h2 className="mt-1 truncate text-lg font-black text-white">
                              {clientName}
                            </h2>
                          </div>


                          <div className="shrink-0 text-right">
                            <RatingStars
                              rating={
                                review.rating
                              }
                            />

                            <p className="mt-1 text-xs font-bold text-yellow-300/70">
                              {Number(
                                review.rating
                              ) || 0}/5
                            </p>
                          </div>

                        </div>


                        <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">

                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">
                            Lavoro
                          </p>

                          <h3 className="mt-1 truncate text-base font-bold text-white">
                            {review.job?.title ||
                              "Lavoro"}
                          </h3>


                          <div className="mt-3 grid gap-2 text-xs text-gray-400 sm:grid-cols-2">

                            <div className="flex min-w-0 items-center gap-2">
                              <MapPin
                                size={14}
                                className="shrink-0 text-purple-300"
                              />

                              <span className="truncate">
                                {review.job?.location ||
                                  "Posizione non indicata"}
                              </span>
                            </div>


                            <div className="flex items-center gap-2">
                              <CalendarDays
                                size={14}
                                className="shrink-0 text-cyan-300"
                              />

                              <span>
                                {review.job?.job_date
                                  ? formatDate(
                                      review.job.job_date
                                    )
                                  : "Data non indicata"}
                              </span>
                            </div>

                          </div>

                        </div>


                        <div className="mt-4">

                          <h3 className="text-lg font-black text-white">
                            {review.title ||
                              "Recensione"}
                          </h3>

                          <p className="mt-2 whitespace-pre-line text-sm leading-6 text-gray-300">
                            {review.review ||
                              "Nessun testo inserito."}
                          </p>

                        </div>


                        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">

                          <span className="text-xs text-gray-500">
                            Ricevuta il{" "}
                            {formatDate(
                              review.created_at
                            )}
                          </span>

                          <span className="rounded-full border border-yellow-400/15 bg-yellow-400/[0.05] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-yellow-200">
                            Feedback verificato
                          </span>

                        </div>

                      </article>
                    )
                  }
                )}

              </div>
            )}

          </main>

        </div>
      </div>
    </div>
  )
}
