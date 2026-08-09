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
  }, [])


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

      const updates = {
  name: name?.trim() || "",
  surname: surname?.trim() || "",
  bio: bio?.trim() || "",
  drone: drone.join(", "),
  services: services.join(", "),
  certifications: certifications.join(", "),
  experience,
  city: location || "",
  location: location || "",
  email_new_jobs: emailNewJobs
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
    setLocation(e.target.value)
    setCity(e.target.value)
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
              onChange={(e) =>
                setEmailNewJobs(
                  e.target.checked
                )
              }
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