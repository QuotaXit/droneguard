"use client"

import { useCallback, useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
import { italianCities } from "@/app/data/italianCities"
import { supabase } from "@/lib/supabase/client"

const certificationsList = [
  "A1/A3",
  "A2",
  "STS-01",
  "STS-02",
  "SPECIFIC",
  "OPEN",
  "CRO",
  "LUC",
  "BVLOS",
  "NOTTURNO",
  "TERMOGRAFIA",
  "FPV RACING"
]

const servicesList = [
  "Mappatura",
  "Fotogrammetria",
  "Matrimoni",
  "Eventi",
  "Sorveglianza",
  "Ispezioni tetti",
  "Ispezioni industriali",
  "Agricoltura",
  "Video cinematici",
  "Immobiliare",
  "Monitoraggio cantieri",
  "Termografia",
  "Ricerca dispersi",
  "FPV",
  "Pubblicità",
  "Turismo",
  "Controllo infrastrutture",
  "Riprese TV",
  "Sicurezza privata"
]

const experienceList = [
  "0-1 anni",
  "1-2 anni",
  "2-3 anni",
  "3-5 anni",
  "5+ anni"
]

const operatingRadiusOptions = [
  { value: 10, label: "10 km" },
  { value: 25, label: "25 km" },
  { value: 50, label: "50 km" },
  { value: 75, label: "75 km" },
  { value: 100, label: "100 km" },
  { value: 150, label: "150 km" },
  { value: 250, label: "250 km" },
  { value: 500, label: "500 km" },
  { value: 0, label: "Tutta Italia" }
]

const droneList = [

  "DJI Air 2",
  "DJI Air 2S",
  "DJI Air 3",
  "DJI Air 3S",

  "DJI Avata",
  "DJI Avata 2",

  "DJI FPV",

  "DJI Inspire 1",
  "DJI Inspire 2",
  "DJI Inspire 3",

  "DJI Mavic Pro",
  "DJI Mavic 2 Pro",
  "DJI Mavic 2 Zoom",
  "DJI Mavic 3",
  "DJI Mavic 3 Classic",
  "DJI Mavic 3 Cine",
  "DJI Mavic 3 Enterprise",
  "DJI Mavic 3 Thermal",
  "DJI Mavic 3 Multispectral",

  "DJI Mini 2",
  "DJI Mini 2 SE",
  "DJI Mini 3",
  "DJI Mini 3 Pro",
  "DJI Mini 4 Pro",
  "DJI Mini 5 Pro",
  "DJI Mini SE",

  "DJI Neo",

  "DJI Phantom 4",
  "DJI Phantom 4 Advanced",
  "DJI Phantom 4 Pro",
  "DJI Phantom 4 RTK",

  "DJI Matrice 4E",
  "DJI Matrice 4T",
  "DJI Matrice 30",
  "DJI Matrice 30T",
  "DJI Matrice 200",
  "DJI Matrice 210",
  "DJI Matrice 300 RTK",
  "DJI Matrice 350 RTK",
  "DJI Matrice 600",
  "DJI Matrice 3D",
  "DJI Matrice 3TD",

  "DJI Dock 2",

  "DJI FlyCart 30",

  "DJI Agras T10",
  "DJI Agras T20",
  "DJI Agras T25",
  "DJI Agras T30",
  "DJI Agras T40",
  "DJI Agras T50",

  "DJI Spark",

  "Autel EVO Nano+",
  "Autel EVO Lite+",
  "Autel EVO II",
  "Autel EVO II Pro",
  "Autel EVO Max 4T",
  "Autel Alpha",

  "Parrot Anafi",
  "Parrot Anafi USA",
  "Parrot Bebop 2",

  "Skydio 2+",
  "Skydio X2",

  "Yuneec Typhoon H",
  "Yuneec H520",

  "senseFly eBee X",
  "senseFly eBee Ag",

  "WingtraOne GEN II",

  "Quantum Systems Trinity Pro",

  "Freefly Alta X",

  "Altro"
]

function getFullName(name, surname) {
  return `${name || ""} ${surname || ""}`.trim() || "Pilota"
}

function getDisplayPosition(city, location) {
  return city || location || "Non impostata"
}

function ProfileInfoRow({ label, value }) {
  return (
    <div className="grid grid-cols-1 items-start gap-2 rounded-xl bg-white/[0.03] px-4 py-3 sm:grid-cols-[110px_1fr] sm:gap-3">
      <p className="text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
        {label}
      </p>

      <p className="break-words text-left text-sm font-medium text-gray-200 sm:text-center">
        {value}
      </p>
    </div>
  )
}

const availabilityWeekDays = [
  "Lun",
  "Mar",
  "Mer",
  "Gio",
  "Ven",
  "Sab",
  "Dom"
]

function getRomeTodayParts() {
  const parts =
    new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone: "Europe/Rome",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }
    ).formatToParts(new Date())

  const values = {}

  for (const part of parts) {
    if (
      part.type === "year" ||
      part.type === "month" ||
      part.type === "day"
    ) {
      values[part.type] =
        Number(part.value)
    }
  }

  return {
    year: values.year,
    month: values.month,
    day: values.day
  }
}

function createDateKey(
  year,
  month,
  day
) {
  return [
    year,
    String(month).padStart(2, "0"),
    String(day).padStart(2, "0")
  ].join("-")
}

function getRomeTodayKey() {
  const today =
    getRomeTodayParts()

  return createDateKey(
    today.year,
    today.month,
    today.day
  )
}

function getAvailabilityCalendar(
  year,
  month
) {
  const numberOfDays =
    new Date(
      Date.UTC(
        year,
        month,
        0
      )
    ).getUTCDate()

  const firstDay =
    new Date(
      Date.UTC(
        year,
        month - 1,
        1
      )
    ).getUTCDay()

  /*
   * JS: domenica = 0
   * Calendario DroneGuard: lunedì = 0
   */
  const emptyBefore =
    (firstDay + 6) % 7

  return [
    ...Array(emptyBefore).fill(null),

    ...Array.from(
      {
        length:
          numberOfDays
      },
      (_, index) =>
        index + 1
    )
  ]
}

function getAvailabilityMonthLabel(
  year,
  month
) {
  return new Intl.DateTimeFormat(
    "it-IT",
    {
      month: "long",
      year: "numeric",
      timeZone: "UTC"
    }
  ).format(
    new Date(
      Date.UTC(
        year,
        month - 1,
        1
      )
    )
  )
}

export default function SettingsPage() {
  const [user, setUser] = useState(null)
  const [userProfile, setUserProfile] = useState(null)

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [bio, setBio] = useState("")
  const [certifications, setCertifications] = useState([])
  const [experience, setExperience] = useState("")
  const [services, setServices] = useState([])
  const [city, setCity] = useState("")
  const [location, setLocation] = useState("")
  const [drone, setDrone] = useState([])
  const [loading, setLoading] = useState(false)
  const [avatar, setAvatar] = useState("")
  const [emailNewJobs, setEmailNewJobs] = useState(true)

  const [baseLatitude, setBaseLatitude] = useState(null)
  const [baseLongitude, setBaseLongitude] = useState(null)
  const [operatingRadiusKm, setOperatingRadiusKm] = useState(50)
  const [emailJobsWithinRadius, setEmailJobsWithinRadius] = useState(false)

  const [
  availabilityMonth,
  setAvailabilityMonth
] = useState(() => {
  const today =
    getRomeTodayParts()

  return {
    year: today.year,
    month: today.month
  }
})

const [
  unavailableDates,
  setUnavailableDates
] = useState(
  () => new Set()
)

const [
  availabilityLoading,
  setAvailabilityLoading
] = useState(false)

const [
  availabilitySavingDate,
  setAvailabilitySavingDate
] = useState("")

  const [completedJobs, setCompletedJobs] = useState(0)
  const [activeJobs, setActiveJobs] = useState(0)
  const [totalFlights, setTotalFlights] = useState(0)

  const [currentEmail, setCurrentEmail] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")

  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const applyProfileState = useCallback((profileData) => {
    if (!profileData) return

    setUserProfile(profileData)
    setName(profileData.name || "")
    setSurname(profileData.surname || "")
    setBio(profileData.bio || "")
    setDrone(profileData.drone ? profileData.drone.split(",").map((x) => x.trim()).filter(Boolean) : [])
    setServices(profileData.services ? profileData.services.split(",").map((x) => x.trim()).filter(Boolean) : [])
    setCertifications(profileData.certifications ? profileData.certifications.split(",").map((x) => x.trim()).filter(Boolean) : [])
    setExperience(profileData.experience || "")
    setCity(profileData.city || "")
    setLocation(profileData.location || profileData.city || "")
    setAvatar(profileData.avatar_url || "")
    setEmailNewJobs(profileData.email_new_jobs ?? true)

    const latitude =
  profileData.base_latitude === null ||
  profileData.base_latitude === undefined
    ? null
    : Number(profileData.base_latitude)

const longitude =
  profileData.base_longitude === null ||
  profileData.base_longitude === undefined
    ? null
    : Number(profileData.base_longitude)

setBaseLatitude(
  Number.isFinite(latitude)
    ? latitude
    : null
)

setBaseLongitude(
  Number.isFinite(longitude)
    ? longitude
    : null
)

const savedRadius =
  Number(profileData.operating_radius_km)

setOperatingRadiusKm(
  Number.isFinite(savedRadius)
    ? savedRadius
    : 50
)

setEmailJobsWithinRadius(
  profileData.email_jobs_within_radius ??
    false
)
  }, [])

  const resolveBaseCoordinates = async (place) => {
  const cleanPlace = String(place || "").trim()

  if (!cleanPlace) {
    return null
  }

  try {
    const response = await fetch(
      `/api/address-search?q=${encodeURIComponent(
        cleanPlace
      )}`
    )

    if (!response.ok) {
      return null
    }

    const results = await response.json()

    const firstResult =
      Array.isArray(results) &&
      results.length > 0
        ? results[0]
        : null

    if (!firstResult) {
      return null
    }

    const latitude =
      Number(firstResult.lat)

    const longitude =
      Number(firstResult.lon)

    if (
      !Number.isFinite(latitude) ||
      !Number.isFinite(longitude)
    ) {
      return null
    }

    return {
      latitude,
      longitude
    }
  } catch (error) {
    console.error(
      "[pilot-settings] Coordinate base operativa:",
      error
    )

    return null
  }
}

const loadUnavailableDates =
  useCallback(
    async (
      pilotId,
      year,
      month
    ) => {
      if (!pilotId) {
        return
      }

      const lastDay =
        new Date(
          Date.UTC(
            year,
            month,
            0
          )
        ).getUTCDate()

      const firstDate =
        createDateKey(
          year,
          month,
          1
        )

      const lastDate =
        createDateKey(
          year,
          month,
          lastDay
        )

      try {
        setAvailabilityLoading(
          true
        )

        const {
          data,
          error
        } = await supabase
          .from(
            "pilot_unavailable_dates"
          )
          .select(
            "unavailable_date"
          )
          .eq(
            "pilot_id",
            pilotId
          )
          .gte(
            "unavailable_date",
            firstDate
          )
          .lte(
            "unavailable_date",
            lastDate
          )
          .order(
            "unavailable_date",
            {
              ascending: true
            }
          )

        if (error) {
          throw error
        }

        setUnavailableDates(
          new Set(
            (data || [])
              .map(
                (row) =>
                  row.unavailable_date
              )
              .filter(Boolean)
          )
        )
      } catch (error) {
        console.error(
          "[pilot-settings] Calendario disponibilità:",
          error
        )

        toast.error(
          "Impossibile caricare il calendario."
        )
      } finally {
        setAvailabilityLoading(
          false
        )
      }
    },
    []
  )

  const loadUser = useCallback(async () => {
    const {
      data: { user: currentUser }
    } = await supabase.auth.getUser()

    if (!currentUser) return

    setUser(currentUser)
    setCurrentEmail(currentUser.email)

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", currentUser.id)
      .maybeSingle()

    if (error) {
      console.error("Errore caricamento profilo:", error)
      toast.error("Errore caricamento profilo")
      return
    }

    const profileData = data

if (!profileData) {
  toast.error(
    "Profilo non trovato. Contatta l'assistenza senza creare un nuovo account."
  )
  return
}

    applyProfileState(profileData)

    const { count: completed } = await supabase
      .from("applications")
      .select("*", { count: "exact", head: true })
      .eq("pilot_id", currentUser.id)
      .eq("status", "completed")

    setCompletedJobs(completed || 0)

    const { count: active } = await supabase
      .from("applications")
      .select("*", { count: "exact", head: true })
      .eq("pilot_id", currentUser.id)
      .eq("status", "accepted")

    setActiveJobs(active || 0)

    const { count: flights } = await supabase
      .from("applications")
      .select("*", { count: "exact", head: true })
      .eq("pilot_id", currentUser.id)

    setTotalFlights(flights || 0)
  }, [applyProfileState])

  useEffect(() => {
    loadUser()
  }, [loadUser])

  useEffect(() => {
  if (!user?.id) {
    return
  }

  loadUnavailableDates(
    user.id,
    availabilityMonth.year,
    availabilityMonth.month
  )
}, [
  user?.id,
  availabilityMonth.year,
  availabilityMonth.month,
  loadUnavailableDates
])

const changeAvailabilityMonth = (
  direction
) => {
  setAvailabilityMonth(
    (current) => {
      const candidate =
        new Date(
          Date.UTC(
            current.year,
            current.month - 1 +
              direction,
            1
          )
        )

      const next = {
        year:
          candidate.getUTCFullYear(),

        month:
          candidate.getUTCMonth() +
          1
      }

      /*
       * Non mostriamo mesi precedenti
       * a quello corrente.
       */
      const today =
        getRomeTodayParts()

      if (
        next.year < today.year ||
        (
          next.year ===
            today.year &&
          next.month <
            today.month
        )
      ) {
        return current
      }

      return next
    }
  )
}


const toggleUnavailableDate =
  async (dateKey) => {
    if (
      !dateKey ||
      availabilitySavingDate
    ) {
      return
    }

    if (
      dateKey <
      getRomeTodayKey()
    ) {
      return
    }

    const currentlyUnavailable =
      unavailableDates.has(
        dateKey
      )

    const nextUnavailable =
      !currentlyUnavailable

    try {
      setAvailabilitySavingDate(
        dateKey
      )

      const {
        data,
        error
      } = await supabase.rpc(
        "set_pilot_unavailable_date",
        {
          p_date:
            dateKey,

          p_unavailable:
            nextUnavailable
        }
      )

      if (error) {
        throw error
      }

      if (
        data?.success !== true
      ) {
        throw new Error(
          "RISPOSTA_CALENDARIO_NON_VALIDA"
        )
      }

      setUnavailableDates(
        (current) => {
          const next =
            new Set(current)

          if (nextUnavailable) {
            next.add(dateKey)
          } else {
            next.delete(dateKey)
          }

          return next
        }
      )

      toast.success(
        nextUnavailable
          ? "Giorno segnato come non disponibile."
          : "Giorno nuovamente disponibile."
      )
    } catch (error) {
      console.error(
        "[pilot-settings] Modifica disponibilità:",
        error
      )

      const message =
        String(
          error?.message || ""
        ).toUpperCase()

      if (
        message.includes(
          "DATA_NEL_PASSATO"
        )
      ) {
        toast.error(
          "Non puoi modificare una data passata."
        )
      } else if (
        message.includes(
          "ACCOUNT_NON_ATTIVO"
        )
      ) {
        toast.error(
          "Il tuo account non può modificare il calendario."
        )
      } else {
        toast.error(
          "Impossibile aggiornare la disponibilità."
        )
      }
    } finally {
      setAvailabilitySavingDate(
        ""
      )
    }
  }

  const uploadAvatar = async (e) => {
    const file = e.target.files[0]

    if (!file || !user) return

    const fileExt = file.name.split(".").pop()
    const fileName = `${user.id}-${Date.now()}.${fileExt}`

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(fileName, file, {
        upsert: true
      })

    if (uploadError) {
      console.log(uploadError)
      toast.error("Errore upload immagine")
      return
    }

    const {
      data: { publicUrl }
    } = supabase.storage.from("avatars").getPublicUrl(fileName)

    setAvatar(publicUrl)

    const { error: updateError } = await supabase
      .from("users")
      .update({
        avatar_url: publicUrl
      })
      .eq("id", user.id)

    if (updateError) {
      console.log(updateError)
      toast.error("Errore salvataggio avatar")
      return
    }

    setUserProfile((prev) =>
      prev
        ? {
            ...prev,
            avatar_url: publicUrl
          }
        : prev
    )

    toast.success("Foto profilo aggiornata")
  }

  const saveProfile = async () => {
    try {
      setLoading(true)

      const {
        data: { user: currentUser }
      } = await supabase.auth.getUser()

      if (!currentUser) {
        toast.error("Utente non autenticato")
        return
      }

      let nextBaseLatitude =
  baseLatitude

let nextBaseLongitude =
  baseLongitude

const hasSavedCoordinates =
  Number.isFinite(nextBaseLatitude) &&
  Number.isFinite(nextBaseLongitude)

if (
  location?.trim() &&
  !hasSavedCoordinates
) {
  const coordinates =
    await resolveBaseCoordinates(
      location
    )

  if (coordinates) {
    nextBaseLatitude =
      coordinates.latitude

    nextBaseLongitude =
      coordinates.longitude

    setBaseLatitude(
      coordinates.latitude
    )

    setBaseLongitude(
      coordinates.longitude
    )
  } else if (
    emailNewJobs &&
    emailJobsWithinRadius
  ) {
    toast.error(
      "Non sono riuscito a determinare le coordinate della base operativa. Riprova prima di attivare il filtro per distanza."
    )

    return
  }
}

if (
  emailNewJobs &&
  emailJobsWithinRadius &&
  !location?.trim()
) {
  toast.error(
    "Seleziona una base operativa prima di attivare il filtro per distanza."
  )

  return
}

      const updates = {
  name: name?.trim() || "",
  surname: surname?.trim() || "",
  bio: bio?.trim() || "",
  drone: drone.join(", "),
  services: services.join(", "),
  certifications: certifications.join(", "),
  experience,

  city:
    location || "",

  location:
    location || "",

  email_new_jobs:
    emailNewJobs,

  base_latitude:
    nextBaseLatitude,

  base_longitude:
    nextBaseLongitude,

  operating_radius_km:
    Number(operatingRadiusKm),

  email_jobs_within_radius:
    emailNewJobs
      ? emailJobsWithinRadius
      : false
}

const { data, error } = await supabase
  .from("users")
  .update(updates)
  .eq("id", currentUser.id)
  .select()
  .single()

      if (error) {
        console.error("Errore Supabase settings:", error)
        toast.error(`Errore salvataggio: ${error.message}`)
        return
      }

      if (!data) {
        toast.error("Errore: Supabase non ha restituito il profilo salvato")
        return
      }

      applyProfileState(data)
      toast.success("Profilo aggiornato")
    } catch (err) {
      console.error("Errore imprevisto settings:", err)
      toast.error("Errore imprevisto durante il salvataggio.")
    } finally {
      setLoading(false)
    }
  }

  const updateEmail = async () => {
    if (!newEmail.trim() || !confirmEmail.trim()) {
      toast.error("Inserisci e conferma la nuova email")
      return
    }

    if (newEmail.trim() !== confirmEmail.trim()) {
      toast.error("Le email non coincidono")
      return
    }

    const { error } = await supabase.auth.updateUser({
      email: newEmail.trim()
    })

    if (error) {
      toast.error(error.message)
      return
    }

    setNewEmail("")
    setConfirmEmail("")
    toast.success("Controlla la nuova email per confermare la modifica")
  }

  const updatePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("Compila tutti i campi password")
      return
    }

    if (newPassword !== confirmPassword) {
      toast.error("Le password non coincidono")
      return
    }

    if (newPassword.length < 6) {
      toast.error("La nuova password deve avere almeno 6 caratteri")
      return
    }

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email: currentEmail,
      password: currentPassword
    })

    if (loginError) {
      toast.error("Password attuale non corretta")
      return
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword
    })

    if (error) {
      toast.error(error.message)
      return
    }

    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
    toast.success("Password aggiornata con successo")
  }

  const deleteAccount = async () => {
  const confirmation = window.prompt(
    "Questa operazione disattiverà definitivamente il tuo account e rimuoverà i dati personali.\n\nScrivi ELIMINA per confermare."
  )

  if (confirmation === null) {
    return
  }

  if (
    confirmation
      .trim()
      .toUpperCase() !== "ELIMINA"
  ) {
    toast.error(
      "Conferma non valida. Devi scrivere ELIMINA."
    )
    return
  }

  try {
    const response = await fetch(
      "/api/account",
      {
        method: "DELETE",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({
          confirmation: "ELIMINA"
        })
      }
    )

    let result = null

    try {
      result = await response.json()
    } catch {
      result = null
    }

    /*
     * Se la RPC ha già disattivato l’account,
     * l’utente deve comunque essere disconnesso,
     * anche in caso di errore successivo su Auth.
     */
    if (
      !response.ok &&
      !result?.accountDeactivated
    ) {
      throw new Error(
        result?.error ||
          "Non è stato possibile disattivare l’account."
      )
    }

    await supabase.auth.signOut()

    window.location.replace("/")
  } catch (error) {
    console.error(
      "[pilot-settings] account deactivation failed:",
      error
    )

    toast.error(
      error instanceof Error
        ? error.message
        : "Errore durante la disattivazione dell’account."
    )
  }
}

  const fullName = getFullName(name, surname)
  const displayPosition = getDisplayPosition(city, location)

  const availabilityCalendar =
  getAvailabilityCalendar(
    availabilityMonth.year,
    availabilityMonth.month
  )

const availabilityMonthLabel =
  getAvailabilityMonthLabel(
    availabilityMonth.year,
    availabilityMonth.month
  )

const todayKey =
  getRomeTodayKey()

const todayParts =
  getRomeTodayParts()

const showingCurrentMonth =
  availabilityMonth.year ===
    todayParts.year &&
  availabilityMonth.month ===
    todayParts.month

  return (
  <div className="min-h-screen flex flex-col text-white">
    <Navbar logged />

    <main className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

        {/* HEADER */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-400">
            Area personale
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Impostazioni pilota
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Gestisci il profilo professionale, i dati di accesso
            e le preferenze del tuo account DroneGuard.
          </p>
        </div>

        {/* PROFILO + INFORMAZIONI PROFESSIONALI */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[330px_minmax(0,1fr)]">

          {/* COLONNA SINISTRA */}
          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">

            {/* PROFILO */}
            <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#140a3a] shadow-xl shadow-black/10">
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <label className="group relative cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={uploadAvatar}
                      className="hidden"
                    />

                    <img
                      src={
                        avatar ||
                        "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=400"
                      }
                      alt={fullName}
                      className="h-28 w-28 rounded-full border-2 border-white/20 object-cover shadow-lg"
                    />

                    <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/60 opacity-0 transition group-hover:opacity-100">
                      <span className="text-xs font-semibold">
                        Cambia foto
                      </span>
                    </div>
                  </label>

                  <h2 className="mt-4 text-2xl font-bold">
                    {fullName}
                  </h2>

                  <span className="mt-2 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-400">
                    Pilota verificato
                  </span>
                </div>

                <div className="mt-6 space-y-2 border-t border-white/10 pt-5">
                  <ProfileInfoRow
                    label="Esperienza"
                    value={experience || "Non impostata"}
                  />

                  <ProfileInfoRow
                    label="Posizione"
                    value={displayPosition}
                  />

                  <ProfileInfoRow
  label="Raggio"
  value={
    operatingRadiusKm === 0
      ? "Tutta Italia"
      : `${operatingRadiusKm} km`
  }
/>

                  <ProfileInfoRow
                    label="Drone"
                    value={
                      drone.length > 0
                        ? drone.join(", ")
                        : "Non impostato"
                    }
                  />

                  <ProfileInfoRow
                    label="Servizio"
                    value={
                      services.length > 0
                        ? services.join(" • ")
                        : "Non inserito"
                    }
                  />

                  <ProfileInfoRow
                    label="Certificato"
                    value={
                      certifications.length > 0
                        ? certifications.join(", ")
                        : "Nessuna"
                    }
                  />
                </div>

                <div className="mt-5 border-t border-white/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Biografia
                  </p>

                  <p className="mt-3 rounded-2xl bg-white/[0.03] px-4 py-3 text-sm leading-6 text-gray-300">
                    {bio || "Nessuna bio inserita"}
                  </p>
                </div>
              </div>
            </section>

            {/* STATISTICHE */}
            <section className="rounded-3xl border border-white/10 bg-[#140a3a] p-5 shadow-xl shadow-black/10">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">
                    Statistiche
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Attività del tuo profilo
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-2xl bg-white/[0.04] px-2 py-4 text-center">
                  <p className="text-2xl font-bold">
                    {totalFlights}
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-gray-500">
                    Candidature
                  </p>
                </div>

                <div className="rounded-2xl bg-white/[0.04] px-2 py-4 text-center">
                  <p className="text-2xl font-bold text-green-400">
                    {completedJobs}
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-gray-500">
                    Completati
                  </p>
                </div>

                <div className="rounded-2xl bg-white/[0.04] px-2 py-4 text-center">
                  <p className="text-2xl font-bold text-yellow-300">
                    {activeJobs}
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-gray-500">
                    In corso
                  </p>
                </div>
              </div>
            </section>
          </aside>

          {/* INFORMAZIONI PROFESSIONALI */}
          <section className="rounded-3xl border border-white/10 bg-[#140a3a] p-5 shadow-xl shadow-black/10 sm:p-6 lg:p-8">
            <div className="mb-7 border-b border-white/10 pb-5">
              <h2 className="text-2xl font-bold">
                Informazioni professionali
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Queste informazioni compongono il tuo profilo pilota.
              </p>
            </div>

            <div className="space-y-6">

              {/* NOME / COGNOME */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">
                    Nome
                  </label>

                  <input
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition focus:border-green-400/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">
                    Cognome
                  </label>

                  <input
                    value={surname}
                    onChange={(e) =>
                      setSurname(e.target.value)
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition focus:border-green-400/50"
                  />
                </div>
              </div>

              {/* BIO */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-400">
                    Bio professionale
                  </label>

                  <span className="text-xs text-gray-500">
                    {bio.length}/120
                  </span>
                </div>

                <textarea
                  maxLength={120}
                  value={bio}
                  onChange={(e) =>
                    setBio(e.target.value)
                  }
                  placeholder="Descrivi brevemente la tua esperienza..."
                  className="h-28 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition placeholder:text-gray-600 focus:border-green-400/50"
                />
              </div>

              {/* DRONE + CERTIFICAZIONI */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* DRONE */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">
                    Drone
                  </label>

                  <div className="min-h-[132px] rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-3 flex min-h-[32px] flex-wrap gap-2">
                      {drone.length > 0 ? (
                        drone.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 rounded-full bg-green-500 px-3 py-1.5 text-xs font-semibold text-black"
                          >
                            {item}

                            <button
                              type="button"
                              onClick={() =>
                                setDrone(
                                  drone.filter(
                                    (d) => d !== item
                                  )
                                )
                              }
                              className="text-black/60 transition hover:text-black"
                            >
                              ×
                            </button>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-gray-500">
                          Seleziona massimo 3 droni
                        </p>
                      )}
                    </div>

                    <select
                      onChange={(e) => {
                        const value =
                          e.target.value

                        if (!value) return
                        if (drone.includes(value)) return

                        if (drone.length >= 3) {
                          toast.error(
                            "Puoi selezionare massimo 3 droni."
                          )
                          return
                        }

                        setDrone([
                          ...drone,
                          value
                        ])
                      }}
                      className="w-full rounded-xl border border-white/10 bg-[#140a3a] p-3 text-sm text-white outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seleziona drone
                      </option>

                      {droneList.map((item) => (
                        <option
                          key={item}
                          value={item}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* CERTIFICAZIONI */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">
                    Certificazioni
                  </label>

                  <div className="min-h-[132px] rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-3 flex min-h-[32px] flex-wrap gap-2">
                      {certifications.length > 0 ? (
                        certifications.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 rounded-full bg-blue-500 px-3 py-1.5 text-xs font-semibold text-white"
                          >
                            {item}

                            <button
                              type="button"
                              onClick={() =>
                                setCertifications(
                                  certifications.filter(
                                    (c) =>
                                      c !== item
                                  )
                                )
                              }
                              className="text-white/60 transition hover:text-white"
                            >
                              ×
                            </button>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-gray-500">
                          Seleziona massimo 3 certificazioni
                        </p>
                      )}
                    </div>

                    <select
                      onChange={(e) => {
                        const value =
                          e.target.value

                        if (!value) return
                        if (
                          certifications.includes(
                            value
                          )
                        ) {
                          return
                        }

                        if (
                          certifications.length >= 3
                        ) {
                          toast.error(
                            "Puoi selezionare massimo 3 certificazioni."
                          )
                          return
                        }

                        setCertifications([
                          ...certifications,
                          value
                        ])
                      }}
                      className="w-full rounded-xl border border-white/10 bg-[#140a3a] p-3 text-sm text-white outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seleziona certificazione
                      </option>

                      {certificationsList.map(
                        (item) => (
                          <option
                            key={item}
                            value={item}
                          >
                            {item}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
              </div>

              {/* SERVIZI + ESPERIENZA */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* SERVIZI */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">
                    Servizi offerti
                  </label>

                  <div className="min-h-[132px] rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-3 flex min-h-[32px] flex-wrap gap-2">
                      {services.length > 0 ? (
                        services.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 rounded-full bg-purple-500 px-3 py-1.5 text-xs font-semibold text-white"
                          >
                            {item}

                            <button
                              type="button"
                              onClick={() =>
                                setServices(
                                  services.filter(
                                    (s) => s !== item
                                  )
                                )
                              }
                              className="text-white/60 transition hover:text-white"
                            >
                              ×
                            </button>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-gray-500">
                          Seleziona massimo 3 servizi
                        </p>
                      )}
                    </div>

                    <select
                      onChange={(e) => {
                        const value =
                          e.target.value

                        if (!value) return
                        if (
                          services.includes(value)
                        ) {
                          return
                        }

                        if (services.length >= 3) {
                          toast.error(
                            "Puoi selezionare massimo 3 servizi."
                          )
                          return
                        }

                        setServices([
                          ...services,
                          value
                        ])
                      }}
                      className="w-full rounded-xl border border-white/10 bg-[#140a3a] p-3 text-sm text-white outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seleziona servizio
                      </option>

                      {servicesList.map((item) => (
                        <option
                          key={item}
                          value={item}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* ESPERIENZA */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">
                    Esperienza
                  </label>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <select
                      value={experience}
                      onChange={(e) =>
                        setExperience(
                          e.target.value
                        )
                      }
                      className="w-full rounded-xl border border-white/10 bg-[#140a3a] p-3.5 text-white outline-none"
                    >
                      <option value="">
                        Seleziona esperienza
                      </option>

                      {experienceList.map(
                        (item) => (
                          <option
                            key={item}
                            value={item}
                          >
                            {item}
                          </option>
                        )
                      )}
                    </select>

                    <p className="mt-3 text-xs leading-5 text-gray-500">
                      Indica gli anni di esperienza come pilota.
                    </p>
                  </div>
                </div>
              </div>

              {/* POSIZIONE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-400">
                  Posizione
                </label>

                <select
  value={location}
  onChange={(e) => {
  const nextLocation =
    e.target.value

  setLocation(nextLocation)
  setCity(nextLocation)

  /*
   * La città è cambiata:
   * le vecchie coordinate non sono più valide.
   * Verranno ricalcolate al salvataggio.
   */
  setBaseLatitude(null)
  setBaseLongitude(null)
}}
  className="w-full rounded-xl border border-white/10 bg-[#0B1028] px-4 py-3.5 text-white outline-none transition focus:border-green-400/50 [color-scheme:dark]"
>
  <option
    value=""
    className="bg-[#0B1028] text-white"
  >
    Seleziona città
  </option>

  {italianCities.map(
    (cityName) => (
      <option
        key={cityName}
        value={cityName}
        className="bg-[#0B1028] text-white"
      >
        {cityName}
      </option>
    )
  )}
</select>
              </div>

              {/* RAGGIO OPERATIVO */}
<div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-5">
  <div className="mb-5">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
      Raggio operativo
    </p>

    <h3 className="mt-2 text-lg font-bold text-white">
      Area in cui preferisci lavorare
    </h3>

    <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
      Il raggio parte dalla città impostata nel tuo profilo.
      Non limita la Bacheca lavori: potrai continuare a vedere
      tutti gli annunci disponibili.
    </p>
  </div>

  <div className="grid gap-4 md:grid-cols-2">

    {/* BASE */}
    <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
        Base operativa
      </p>

      <p className="mt-2 text-base font-bold text-white">
        {location || "Non impostata"}
      </p>

      <p className="mt-2 text-xs leading-5 text-gray-500">
        {Number.isFinite(baseLatitude) &&
        Number.isFinite(baseLongitude)
          ? "Coordinate della base salvate."
          : location
            ? "Le coordinate verranno calcolate al prossimo salvataggio."
            : "Seleziona prima la tua città."}
      </p>
    </div>


    {/* RAGGIO */}
    <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
        Distanza massima
      </label>

      <select
        value={operatingRadiusKm}
        onChange={(e) =>
          setOperatingRadiusKm(
            Number(e.target.value)
          )
        }
        className="w-full rounded-xl border border-white/10 bg-[#0B1028] px-4 py-3 text-white outline-none transition focus:border-cyan-400/50 [color-scheme:dark]"
      >
        {operatingRadiusOptions.map(
          (option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-[#0B1028] text-white"
            >
              {option.label}
            </option>
          )
        )}
      </select>

      <p className="mt-2 text-xs leading-5 text-gray-500">
        {operatingRadiusKm === 0
          ? "Nessun limite di distanza."
          : `Preferenza attuale: entro ${operatingRadiusKm} km dalla tua base.`}
      </p>
    </div>
  </div>


  {/* FILTRO EMAIL */}
  <label
    className={`mt-4 flex items-start justify-between gap-5 rounded-2xl border p-4 transition ${
      emailNewJobs
        ? "cursor-pointer border-white/[0.08] bg-black/20"
        : "cursor-not-allowed border-white/[0.05] bg-black/10 opacity-50"
    }`}
  >
    <div>
      <p className="font-semibold text-gray-200">
        Limita le email al mio raggio
      </p>

      <p className="mt-1 text-sm leading-6 text-gray-500">
        Ricevi notifiche dei nuovi lavori soltanto quando
        il lavoro si trova entro il raggio operativo scelto.
      </p>

      {!emailNewJobs && (
        <p className="mt-2 text-xs font-semibold text-amber-300">
          Attiva prima le email “Nuovi lavori pubblicati”.
        </p>
      )}
    </div>

    <input
      type="checkbox"
      checked={
        emailJobsWithinRadius
      }
      disabled={!emailNewJobs}
      onChange={(e) =>
        setEmailJobsWithinRadius(
          e.target.checked
        )
      }
      className="mt-1 h-5 w-5 shrink-0 accent-cyan-400"
    />
  </label>
</div>

{/* DISPONIBILITÀ */}
<div className="rounded-2xl border border-purple-400/15 bg-purple-400/[0.04] p-5 sm:p-6">

  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
        Disponibilità
      </p>

      <h3 className="mt-2 text-lg font-bold text-white">
        Calendario operativo
      </h3>

      <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
        Sei considerato disponibile di default.
        Tocca soltanto i giorni in cui non puoi
        accettare lavori.
      </p>
    </div>


    <div className="flex items-center gap-2">

      <button
        type="button"
        disabled={
          showingCurrentMonth ||
          availabilityLoading
        }
        onClick={() =>
          changeAvailabilityMonth(
            -1
          )
        }
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg font-bold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Mese precedente"
      >
        ←
      </button>

      <button
        type="button"
        disabled={
          availabilityLoading
        }
        onClick={() =>
          changeAvailabilityMonth(
            1
          )
        }
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg font-bold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Mese successivo"
      >
        →
      </button>

    </div>
  </div>


  <div className="mt-6 rounded-2xl border border-white/[0.08] bg-black/20 p-3 sm:p-5">

    <div className="mb-5 flex items-center justify-between gap-3">

      <h4 className="text-lg font-bold capitalize text-white">
        {availabilityMonthLabel}
      </h4>

      {availabilityLoading && (
        <span className="text-xs font-semibold text-purple-300">
          Caricamento...
        </span>
      )}

    </div>


    {/* GIORNI SETTIMANA */}
    <div className="grid grid-cols-7 gap-1 sm:gap-2">

      {availabilityWeekDays.map(
        (day) => (
          <div
            key={day}
            className="pb-2 text-center text-[10px] font-bold uppercase tracking-wider text-gray-600 sm:text-xs"
          >
            {day}
          </div>
        )
      )}


      {/* GIORNI MESE */}
      {availabilityCalendar.map(
        (day, index) => {
          if (!day) {
            return (
              <div
                key={`empty-${index}`}
                aria-hidden="true"
                className="aspect-square"
              />
            )
          }

          const dateKey =
            createDateKey(
              availabilityMonth.year,
              availabilityMonth.month,
              day
            )

          const isPast =
            dateKey <
            todayKey

          const isToday =
            dateKey ===
            todayKey

          const isUnavailable =
            unavailableDates.has(
              dateKey
            )

          const isSaving =
            availabilitySavingDate ===
            dateKey

          return (
            <button
              key={dateKey}
              type="button"
              disabled={
                isPast ||
                availabilityLoading ||
                Boolean(
                  availabilitySavingDate
                )
              }
              onClick={() =>
                toggleUnavailableDate(
                  dateKey
                )
              }
              title={
                isUnavailable
                  ? "Non disponibile"
                  : "Disponibile"
              }
              className={`relative aspect-square rounded-xl border text-sm font-bold transition sm:rounded-2xl ${
                isUnavailable
                  ? "border-red-400/40 bg-red-500/15 text-red-200"
                  : isPast
                    ? "cursor-not-allowed border-white/[0.03] bg-white/[0.02] text-gray-700"
                    : "border-white/[0.08] bg-white/[0.04] text-gray-200 hover:border-green-400/30 hover:bg-green-400/10"
              } ${
                isToday
                  ? "ring-1 ring-cyan-400/60"
                  : ""
              }`}
            >

              <span>
                {day}
              </span>

              {isUnavailable && (
                <span className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-red-400 sm:bottom-2" />
              )}

              {isSaving && (
                <span className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/60 text-[9px] text-white sm:rounded-2xl">
                  ...
                </span>
              )}

            </button>
          )
        }
      )}

    </div>


    {/* LEGENDA */}
    <div className="mt-5 flex flex-wrap gap-3 border-t border-white/[0.07] pt-4">

      <div className="flex items-center gap-2 text-xs text-gray-400">
        <span className="h-3 w-3 rounded-full bg-green-400/70" />
        Disponibile
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-400">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        Non disponibile
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-400">
        <span className="h-3 w-3 rounded-full border border-cyan-400" />
        Oggi
      </div>

    </div>
  </div>


  <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3">
    <p className="text-xs leading-5 text-gray-500">
      Il calendario è indicativo: una giornata segnata
      come non disponibile non impedisce comunque di
      candidarti a un lavoro.
    </p>
  </div>

</div>

              {/* SALVATAGGIO */}
              <div className="flex justify-end border-t border-white/10 pt-6">
                <button
                  onClick={saveProfile}
                  disabled={loading}
                  className="w-full rounded-xl bg-green-500 px-8 py-3.5 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {loading
                    ? "Salvataggio..."
                    : "Salva modifiche"}
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* ACCOUNT */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* EMAIL */}
          <section className="rounded-3xl border border-white/10 bg-[#140a3a] p-5 shadow-xl shadow-black/10 sm:p-6">
            <div className="mb-5 border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold">
                Email
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Gestisci l'indirizzo email del tuo account.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Email attuale
                </label>

                <input
                  value={currentEmail}
                  disabled
                  autoComplete="off"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-gray-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Nuova email
                </label>

                <input
                  type="email"
                  placeholder="Inserisci la nuova email"
                  value={newEmail}
                  onChange={(e) =>
                    setNewEmail(e.target.value)
                  }
                  autoComplete="new-email"
                  name="new-email"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-gray-600 focus:border-green-400/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Conferma nuova email
                </label>

                <input
                  type="email"
                  placeholder="Ripeti la nuova email"
                  value={confirmEmail}
                  onChange={(e) =>
                    setConfirmEmail(
                      e.target.value
                    )
                  }
                  autoComplete="new-email-confirm"
                  name="confirm-new-email"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-gray-600 focus:border-green-400/50"
                />
              </div>

              <div className="pt-2">
                <button
                  onClick={updateEmail}
                  className="rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400"
                >
                  Aggiorna email
                </button>
              </div>
            </div>
          </section>

          {/* SICUREZZA */}
          <section className="rounded-3xl border border-white/10 bg-[#140a3a] p-5 shadow-xl shadow-black/10 sm:p-6">
            <div className="mb-5 border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold">
                Sicurezza
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Modifica la password di accesso.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Password attuale
                </label>

                <input
                  type="password"
                  placeholder="Password attuale"
                  value={currentPassword}
                  onChange={(e) =>
                    setCurrentPassword(
                      e.target.value
                    )
                  }
                  autoComplete="current-password"
                  name="current-password"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-gray-600 focus:border-green-400/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Nuova password
                </label>

                <input
                  type="password"
                  placeholder="Nuova password"
                  value={newPassword}
                  onChange={(e) =>
                    setNewPassword(
                      e.target.value
                    )
                  }
                  autoComplete="new-password"
                  name="new-password"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-gray-600 focus:border-green-400/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Conferma nuova password
                </label>

                <input
                  type="password"
                  placeholder="Ripeti la nuova password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  autoComplete="new-password"
                  name="confirm-new-password"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-gray-600 focus:border-green-400/50"
                />
              </div>

              <div className="pt-2">
                <button
                  onClick={updatePassword}
                  className="rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400"
                >
                  Cambia password
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* NOTIFICHE */}
        <section className="mt-6 rounded-3xl border border-white/10 bg-[#140a3a] p-5 shadow-xl shadow-black/10 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold">
                Notifiche email
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Scegli quali aggiornamenti ricevere via email.
              </p>
            </div>

            <button
              onClick={saveProfile}
              className="rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400"
            >
              Salva preferenze
            </button>
          </div>

          <label className="mt-5 flex cursor-pointer items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div>
              <p className="font-medium text-gray-200">
                Nuovi lavori pubblicati
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Ricevi un'email quando vengono pubblicati nuovi lavori.
              </p>
            </div>

            <input
              type="checkbox"
              checked={emailNewJobs}
              onChange={(e) => {
  const enabled =
    e.target.checked

  setEmailNewJobs(enabled)

  if (!enabled) {
    setEmailJobsWithinRadius(
      false
    )
  }
}}
              className="h-5 w-5 shrink-0 accent-green-500"
            />
          </label>
        </section>

        {/* ZONA PERICOLO */}
        <section className="mt-6 rounded-3xl border border-red-500/20 bg-red-500/[0.07] p-5 shadow-xl shadow-black/10 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
                Zona pericolo
              </p>

              <h2 className="mt-2 text-xl font-bold text-red-300">
                Elimina account
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                Questa operazione è irreversibile.
                Assicurati di non avere crediti prima di procedere.
              </p>
            </div>

            <button
              onClick={deleteAccount}
              className="shrink-0 rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-400"
            >
              Elimina account
            </button>
          </div>
        </section>
      </div>
    </main>
  </div>
)
}