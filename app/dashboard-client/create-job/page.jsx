"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase/client"
import { toast } from "sonner"
import Navbar from "@/components/Navbar"

export default function CreateJob() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")

  const [locationSuggestions, setLocationSuggestions] = useState([])
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false)

  const [creating, setCreating] = useState(false)

  useEffect(() => {
    const searchLocations = async () => {
      if (location.trim().length < 3) {
        setLocationSuggestions([])
        setShowLocationSuggestions(false)
        return
      }

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=6&countrycodes=it&q=${encodeURIComponent(
            location
          )}`
        )

        const data = await res.json()

        setLocationSuggestions(data || [])
        setShowLocationSuggestions(true)
      } catch (error) {
        console.log(error)
      }
    }

    const timer = setTimeout(searchLocations, 500)

    return () => clearTimeout(timer)
  }, [location])


  const handleCreateJob = async (e) => {
    e.preventDefault()

    if (creating) return

    try {
      setCreating(true)

      const {
        data: { user }
      } = await supabase.auth.getUser()

      if (!user) return

// Crea il lavoro e scala 5 crediti nella stessa transazione
const requestId = crypto.randomUUID()

const { data: createdJobId, error: createError } = await supabase.rpc(
  "create_job_with_credit",
  {
    p_request_id: requestId,
    p_title: title,
    p_description: description,
    p_location: location,
    p_job_date: date,
p_image1: null,
p_image2: null,
p_image3: null
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
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/20 bg-white/5 p-5 sm:p-8">
          <h2 className="mb-6 text-xl font-[var(--font-krona)] sm:text-2xl">
            Pubblica un lavoro
          </h2>

          <form onSubmit={handleCreateJob} className="space-y-4">
            {/* TITOLO */}
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
              className="w-full rounded-lg border border-white/20 bg-transparent p-4 text-xl font-bold tracking-wide sm:text-2xl"
            />

            {/* DESCRIZIONE */}
            <textarea
              placeholder="Descrizione"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-lg bg-transparent border border-white/20"
            />

            {/* LUOGO */}
            <div className="relative">
              <input
                placeholder="Luogo"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onFocus={() => {
                  if (locationSuggestions.length > 0) {
                    setShowLocationSuggestions(true)
                  }
                }}
                className="w-full p-3 rounded-lg bg-transparent border border-white/20"
              />

              {showLocationSuggestions && locationSuggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-64 overflow-y-auto rounded-xl border border-white/20 bg-[#140a3a] shadow-xl">
                  {locationSuggestions.map((item) => (
                    <button
                      key={item.place_id}
                      type="button"
                      onClick={() => {
                        setLocation(item.display_name)
                        setShowLocationSuggestions(false)
                      }}
                      className="w-full border-b border-white/10 px-4 py-3 text-left text-sm text-white hover:bg-white/10"
                    >
                      {item.display_name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* DATA */}
            <input
              type="date"
              required
              value={date}
              min={new Date().toLocaleDateString("en-CA", {
  timeZone: "Europe/Rome"
})}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 rounded-lg bg-transparent border border-white/20 text-white"
            />

            <button
              type="submit"
              disabled={creating}
              className="w-full bg-green-500 py-3 rounded-lg text-black font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {creating ? "Pubblicazione..." : "Pubblica (5 crediti)"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}