"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { toast } from "sonner"
import Navbar from "@/components/Navbar"

export default function CreateJob() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")

  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  const [locationSuggestions, setLocationSuggestions] = useState([])
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false)

  const [creating, setCreating] = useState(false)

  const searchLocations = async () => {
  const query = location.trim()

  if (query.length < 3) {
    setLocationSuggestions([])
    setShowLocationSuggestions(false)
    return
  }

  try {
    const res = await fetch(
      `/api/address-search?q=${encodeURIComponent(query)}`
    )

    if (!res.ok) {
      setLocationSuggestions([])
      setShowLocationSuggestions(false)
      return
    }

    const data = await res.json()

    const results =
      Array.isArray(data)
        ? data
        : []

    setLocationSuggestions(results)

    setShowLocationSuggestions(
      results.length > 0
    )
  } catch (error) {
    console.error(
      "[create-job] Address search error:",
      error
    )

    setLocationSuggestions([])
    setShowLocationSuggestions(false)
  }
}


  const handleCreateJob = async (e) => {
    e.preventDefault()

    if (creating) return

    try {
      setCreating(true)

      const {
        data: { user }
      } = await supabase.auth.getUser()

      if (!user) return

      if (
  !Number.isFinite(latitude) ||
  !Number.isFinite(longitude)
) {
  toast.error(
    "Cerca il luogo e selezionalo dall'elenco prima di pubblicare."
  )

  return
}

// Crea il lavoro e scala 5 crediti nella stessa transazione
const requestId = crypto.randomUUID()

const {
  data: createdJobId,
  error: createError
} = await supabase.rpc(
  "create_job_with_credit",
  {
    p_request_id:
      requestId,

    p_title:
      title,

    p_description:
      description,

    p_location:
      location,

    p_job_date:
      date,

    p_latitude:
      latitude,

    p_longitude:
      longitude,

    p_image1:
      null,

    p_image2:
      null,

    p_image3:
      null
  }
)

if (createError) {
  console.error("Errore pubblicazione lavoro:", createError)

  const errorMessage = createError.message?.toLowerCase() || ""

  if (errorMessage.includes("crediti insufficienti")) {
    toast.error("Crediti insufficienti ❌")
  } else if (errorMessage.includes("solo i clienti")) {
    toast.error("Solo i clienti possono pubblicare lavori ❌")
  } else if (errorMessage.includes("data del lavoro")) {
    toast.error("La data del lavoro non può essere nel passato ❌")
  } else if (errorMessage.includes("account sospeso")) {
    toast.error("Il tuo account è sospeso ❌")
  } else {
    toast.error("Errore durante la pubblicazione del lavoro ❌")
  }

  return
}

if (!createdJobId) {
  toast.error("Il lavoro non è stato creato correttamente ❌")
  return
}

      try {
  const emailResponse =
    await fetch(
      "/api/send-job-emails",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({
          jobId:
            createdJobId
        })
      }
    )

  let emailData = null

  try {
    emailData =
      await emailResponse.json()
  } catch {
    emailData = null
  }

  if (!emailResponse.ok) {
    console.error(
      "Errore invio email ai piloti:",
      emailData?.error ||
        "Risposta email non valida"
    )
  } else if (
    Number(
      emailData?.failed || 0
    ) > 0
  ) {
    console.warn(
      "Alcune email ai piloti non sono state inviate:",
      emailData
    )
  }
} catch (emailError) {
  console.error(
    "Errore imprevisto invio email ai piloti:",
    emailError
  )
}

    
      toast.success("Lavoro pubblicato 🚀")
      window.location.href = "/dashboard-client"
    } finally {
      setCreating(false)
    }
  }

  return (
  <div className="min-h-screen bg-gradient-to-br from-[#070B1F] via-[#0D1742] to-[#08112F] text-white">
    <Navbar />

    <div className="relative overflow-hidden px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      {/* sfondi decorativi */}
      <div className="pointer-events-none absolute left-[-120px] top-[-80px] h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-140px] bottom-[-120px] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-3xl">
        {/* header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300">
            Cliente • Pubblica una richiesta
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Pubblica un lavoro
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Inserisci i dettagli del servizio di cui hai bisogno. I piloti
            interessati potranno vedere la richiesta e candidarsi.
          </p>
        </div>

        {/* card principale */}
        <div className="rounded-[30px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="mb-8 flex items-start justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
                Nuova richiesta
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Crea il tuo annuncio
              </h2>
            
            </div>

            <div className="hidden rounded-2xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-right sm:block">
              <p className="text-xs uppercase tracking-wide text-green-300">
                Costo pubblicazione
              </p>
              <p className="mt-1 text-lg font-bold text-white">
                5 crediti
              </p>
            </div>
          </div>

          <form onSubmit={handleCreateJob} className="space-y-6">
            {/* TITOLO */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Titolo lavoro
              </label>

              <input
                placeholder="Titolo lavoro"
                required
                minLength={10}
                maxLength={30}
                value={title}
                onChange={(e) => {
                  const value = e.target.value

                  const formatted = value.replace(
                    /\b\w/g,
                    (char) => char.toUpperCase()
                  )

                  setTitle(formatted)
                }}
                className="w-full rounded-2xl border border-white/10 bg-[#10183B]/80 px-5 py-4 text-xl font-semibold tracking-wide text-white outline-none transition placeholder:text-gray-500 focus:border-green-400/50 focus:bg-[#121d49]"
              />

              <p className="mt-2 text-xs text-gray-500">
                Inserisci un titolo chiaro e sintetico.
              </p>
            </div>

            {/* DESCRIZIONE */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Descrizione
              </label>

              <textarea
                placeholder="Descrizione"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[150px] w-full rounded-2xl border border-white/10 bg-[#10183B]/80 px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-green-400/50 focus:bg-[#121d49]"
              />

              <p className="mt-2 text-xs text-gray-500">
                Spiega bene cosa ti serve, così i piloti capiscono subito il lavoro.
              </p>
            </div>

            {/* LUOGO */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Luogo
              </label>

              <div className="relative">
                <div className="flex gap-3">
                  <input
                    placeholder="Luogo"
                    required
                    value={location}
                    onChange={(e) => {
  setLocation(e.target.value)

  setLatitude(null)
  setLongitude(null)

  setLocationSuggestions([])
  setShowLocationSuggestions(false)
}}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        searchLocations()
                      }
                    }}
                    className="w-full rounded-2xl border border-white/10 bg-[#10183B]/80 px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-green-400/50 focus:bg-[#121d49]"
                  />

                  <button
                    type="button"
                    onClick={searchLocations}
                    disabled={location.trim().length < 3}
                    className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Cerca
                  </button>
                </div>

                {showLocationSuggestions && locationSuggestions.length > 0 && (
                  <div className="absolute left-0 right-0 top-full z-50 mt-3 max-h-64 overflow-y-auto rounded-2xl border border-white/10 bg-[#0B1028] shadow-2xl">
                    {locationSuggestions.map((item) => (
                      <button
                        key={item.place_id}
                        type="button"
                        onClick={() => {
  const nextLatitude =
    Number(item.lat)

  const nextLongitude =
    Number(item.lon)

  if (
    !Number.isFinite(nextLatitude) ||
    !Number.isFinite(nextLongitude)
  ) {
    toast.error(
      "La località selezionata non contiene coordinate valide."
    )

    return
  }

  setLocation(item.display_name)
  setLatitude(nextLatitude)
  setLongitude(nextLongitude)

  setLocationSuggestions([])
  setShowLocationSuggestions(false)
}}
                        className="w-full border-b border-white/5 px-4 py-3 text-left text-sm text-white transition hover:bg-white/10"
                      >
                        {item.display_name}
                      </button>
                    ))}
                  </div>
                )}

         {Number.isFinite(latitude) &&
 Number.isFinite(longitude) && (
  <div className="mt-3 rounded-xl border border-green-400/15 bg-green-400/[0.06] px-4 py-3">
    <p className="text-xs font-semibold text-green-300">
      ✓ Località verificata
    </p>

    <p className="mt-1 text-xs text-gray-500">
      Le coordinate verranno utilizzate soltanto
      per calcolare la distanza dai piloti.
    </p>
  </div>
)}

              </div>
            </div>

            {/* DATA */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Data del lavoro
              </label>

              <input
                type="date"
                required
                value={date}
                min={new Date().toLocaleDateString("en-CA", {
                  timeZone: "Europe/Rome"
                })}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-[#10183B]/80 px-5 py-4 text-white outline-none transition [color-scheme:dark] focus:border-green-400/50 focus:bg-[#121d49]"
              />

              <p className="mt-2 text-xs text-gray-500">
                La data non può essere nel passato.
              </p>
            </div>

            {/* footer card / submit */}
            <div className="mt-2 rounded-2xl border border-white/10 bg-black/10 p-4 sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-white">
                    Pubblicazione annuncio
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Verranno scalati 5 crediti al momento della pubblicazione.
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Crediti richiesti
                  </p>
                  <p className="text-lg font-bold text-green-300">
                    5 crediti
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={creating}
                className="mt-5 w-full rounded-2xl bg-green-500 py-4 text-base font-semibold text-black shadow-lg shadow-green-500/20 transition hover:scale-[1.01] hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {creating ? "Pubblicazione..." : "Pubblica (5 crediti)"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)
}