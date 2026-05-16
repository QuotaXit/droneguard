"use client"

import { useCallback, useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
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
  "DJI Mini 4 Pro",
  "DJI Mini 3 Pro",
  "DJI Mini 3",
  "DJI Air 3",
  "DJI Air 3S",
  "DJI Mavic 3 Pro",
  "DJI Mavic 3 Classic",
  "DJI Mavic 3 Enterprise",
  "DJI Matrice 30",
  "DJI Matrice 30T",
  "DJI Matrice 300 RTK",
  "DJI Matrice 350 RTK",
  "DJI Phantom 4 RTK",
  "DJI Avata 2",
  "DJI FPV",
  "Autel EVO II Pro",
  "Autel EVO Max 4T",
  "Parrot Anafi",
  "Parrot Anafi USA",
  "Yuneec H520E",
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
  const [addressResults, setAddressResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [avatar, setAvatar] = useState("")

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
  }, [])

  const searchAddress = async (value) => {
    if (value.length < 3) {
      setAddressResults([])
      return
    }

    const res = await fetch(`/api/address-search?q=${value}`)
    const data = await res.json()
    setAddressResults(data)
  }

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

    let profileData = data

    if (!profileData) {
      const insertData = {
        id: currentUser.id,
        email: currentUser.email,
        role: "pilot",
        name: "",
        surname: "",
        bio: "",
        drone: "",
        city: "",
        location: "",
        services: "",
        certifications: "",
        experience: "",
        credits: 50,
        verified: false
      }

      const { data: createdUser, error: createError } = await supabase
        .from("users")
        .insert(insertData)
        .select()
        .single()

      if (createError) {
        toast.error("Errore creazione profilo")
        return
      }

      profileData = createdUser
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
        id: currentUser.id,
        email: currentUser.email,
        role: "pilot",
        name: name?.trim() || "",
        surname: surname?.trim() || "",
        bio: bio?.trim() || "",
        drone: drone.join(", "),
        services: services.join(", "),
        certifications: certifications.join(", "),
        experience,
        city: location || "",
        location: location || "",
        credits: userProfile?.credits ?? 50,
        verified: userProfile?.verified ?? false
      }

      const { data, error } = await supabase
        .from("users")
        .upsert(updates, { onConflict: "id" })
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
    const confirmDelete = window.confirm("Vuoi davvero eliminare l'account?")

    if (!confirmDelete) return

    await supabase.from("users").delete().eq("id", user.id)
    await supabase.auth.signOut()

    window.location.href = "/"
  }

  const fullName = getFullName(name, surname)
  const displayPosition = getDisplayPosition(city, location)

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] p-4 md:p-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-[#140a3a] p-6">
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
                    className="h-32 w-32 rounded-full border-2 border-white/20 object-cover"
                  />

                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/60 opacity-0 transition group-hover:opacity-100">
                    <span className="text-sm font-medium">Cambia foto</span>
                  </div>
                </label>

                <h2 className="mt-5 text-3xl font-bold">{fullName}</h2>

                <p className="mt-2 text-sm font-medium text-green-400">
                  Pilota verificato
                </p>

                <div className="mt-6 w-full border-t border-white/10 pt-5">
                  <div className="space-y-3">
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
                      value={drone.length > 0 ? drone.join(", ") : "Non impostato"}
                    />

                    <ProfileInfoRow
                      label="Servizio"
                      value={services || "Non inserito"}
                    />

                    <ProfileInfoRow
                      label="Certificato"
                      value={certifications.length > 0 ? certifications.join(", ") : "Nessuna"}
                    />
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-5">
                    <p className="mb-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Biografia
                    </p>

                    <p className="rounded-xl bg-white/[0.03] px-4 py-4 text-center text-sm leading-relaxed text-gray-200">
                      {bio || "Nessuna bio inserita"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#140a3a] p-6">
              <h3 className="mb-4 text-lg font-semibold">Statistiche</h3>

              <div className="space-y-4">
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-sm text-gray-400">Candidature Inviate</p>
                  <h2 className="mt-2 text-3xl font-bold">{totalFlights}</h2>
                </div>

                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-sm text-gray-400">Lavori completati</p>
                  <h2 className="mt-2 text-3xl font-bold">{completedJobs}</h2>
                </div>

                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-sm text-gray-400">In attesa</p>
                  <h2 className="mt-2 text-3xl font-bold">{activeJobs}</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-8">
            <div className="rounded-3xl border border-white/10 bg-[#140a3a] p-6 md:p-8">
              <h2 className="mb-8 text-2xl font-bold sm:text-3xl">
                Informazioni professionali
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      Nome
                    </label>

                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-black/20 p-4"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      Cognome
                    </label>

                    <input
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-black/20 p-4"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between">
                    <label className="text-sm text-gray-400">
                      Bio professionale
                    </label>

                    <span className="text-sm text-gray-500">
                      {bio.length}/120
                    </span>
                  </div>

                  <textarea
                    maxLength={120}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="h-36 w-full resize-none rounded-2xl border border-white/10 bg-black/20 p-4"
                  />
                </div>

<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
  <label className="mb-2 block text-sm text-gray-400">
    Drone
  </label>

  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
    <div className="mb-3 flex flex-wrap gap-2">
      {drone.length > 0 ? (
        drone.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-black"
          >
            {item}

            <button
              type="button"
              onClick={() =>
                setDrone(drone.filter((d) => d !== item))
              }
              className="text-black opacity-70 hover:opacity-100"
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
        const value = e.target.value

        if (!value) return

        if (drone.includes(value)) return

        if (drone.length >= 3) {
          toast.error("Puoi selezionare massimo 3 droni.")
          return
        }

        setDrone([...drone, value])
      }}
      className="w-full rounded-xl border border-white/10 bg-[#140a3a] p-3 text-white"
      defaultValue=""
    >
      <option value="" disabled>
        Seleziona drone
      </option>

      {droneList.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
</div>
                  <div>
  <label className="mb-2 block text-sm text-gray-400">
    Certificazioni
  </label>

  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
    <div className="mb-3 flex flex-wrap gap-2">
      {certifications.length > 0 ? (
        certifications.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white"
          >
            {item}

            <button
              type="button"
              onClick={() =>
                setCertifications(
                  certifications.filter((c) => c !== item)
                )
              }
              className="text-white opacity-70 hover:opacity-100"
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
        const value = e.target.value

        if (!value) return

        if (certifications.includes(value)) return

        if (certifications.length >= 3) {
          toast.error("Puoi selezionare massimo 3 certificazioni.")
          return
        }

        setCertifications([...certifications, value])
      }}
      className="w-full rounded-xl border border-white/10 bg-[#140a3a] p-3 text-white"
      defaultValue=""
    >
      <option value="" disabled>
        Seleziona certificazione
      </option>

      {certificationsList.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
</div>
                  <div>
  <label className="mb-2 block text-sm text-gray-400">
    Servizi offerti
  </label>

  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
    <div className="mb-3 flex flex-wrap gap-2">
      {services.length > 0 ? (
        services.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-full bg-purple-500 px-3 py-1 text-sm font-medium text-white"
          >
            {item}

            <button
              type="button"
              onClick={() =>
                setServices(services.filter((s) => s !== item))
              }
              className="text-white opacity-70 hover:opacity-100"
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
        const value = e.target.value

        if (!value) return

        if (services.includes(value)) return

        if (services.length >= 3) {
          toast.error("Puoi selezionare massimo 3 servizi.")
          return
        }

        setServices([...services, value])
      }}
      className="w-full rounded-xl border border-white/10 bg-[#140a3a] p-3 text-white"
      defaultValue=""
    >
      <option value="" disabled>
        Seleziona servizio
      </option>

      {servicesList.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
</div>
                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      Esperienza
                    </label>

                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <option value="">Seleziona</option>

                      {experienceList.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <label className="mb-2 block text-sm text-gray-400">
                    Posizione
                  </label>

                  <input
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value)
                      setCity(e.target.value)
                      searchAddress(e.target.value)
                    }}
                    className="w-full rounded-2xl border border-white/10 bg-black/20 p-4"
                  />

                  {addressResults.length > 0 && (
                    <div className="absolute left-0 top-full z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-2xl border border-white/10 bg-[#1b114d]">
                      {addressResults.map((item) => (
                        <div
                          key={item.place_id}
                          onClick={() => {
                            setLocation(item.display_name)
                            setCity(item.display_name)
                            setAddressResults([])
                          }}
                          className="cursor-pointer border-b border-white/5 p-4 hover:bg-white/10"
                        >
                          {item.display_name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={saveProfile}
                  disabled={loading}
                  className="w-full rounded-2xl bg-green-500 py-5 text-lg font-bold text-black transition hover:bg-green-400 disabled:opacity-60"
                >
                  {loading ? "Salvataggio..." : "Salva modifiche"}
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#140a3a] p-6">
              <h2 className="mb-6 text-2xl font-semibold">Email</h2>

              <input
                value={currentEmail}
                disabled
                autoComplete="off"
                className="mb-5 w-full rounded-xl border border-white/20 bg-white/10 p-4 text-gray-300"
              />

              <input
                type="email"
                placeholder="Nuova email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                autoComplete="new-email"
                name="new-email"
                className="mb-5 w-full rounded-xl border border-white/20 bg-transparent p-4 text-white placeholder:text-gray-400"
              />

              <input
                type="email"
                placeholder="Conferma nuova email"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                autoComplete="new-email-confirm"
                name="confirm-new-email"
                className="mb-5 w-full rounded-xl border border-white/20 bg-transparent p-4 text-white placeholder:text-gray-400"
              />

              <button
                onClick={updateEmail}
                className="w-full rounded-xl bg-green-500 px-6 py-4 text-black transition hover:bg-green-400 sm:w-auto"
              >
                Aggiorna email
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#140a3a] p-6">
              <h2 className="mb-6 text-2xl font-semibold">Sicurezza</h2>

              <input
                type="password"
                placeholder="Password attuale"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                autoComplete="current-password"
                name="current-password"
                className="mb-5 w-full rounded-xl border border-white/20 bg-transparent p-4 text-white placeholder:text-gray-400"
              />

              <input
                type="password"
                placeholder="Nuova password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                autoComplete="new-password"
                name="new-password"
                className="mb-5 w-full rounded-xl border border-white/20 bg-transparent p-4 text-white placeholder:text-gray-400"
              />

              <input
                type="password"
                placeholder="Conferma nuova password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
                name="confirm-new-password"
                className="mb-5 w-full rounded-xl border border-white/20 bg-transparent p-4 text-white placeholder:text-gray-400"
              />

              <button
                onClick={updatePassword}
                className="w-full rounded-xl bg-green-500 px-6 py-4 text-black transition hover:bg-green-400 sm:w-auto"
              >
                Cambia password
              </button>
            </div>

            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6">
              <h2 className="mb-3 text-2xl font-semibold text-red-400">
                Elimina account
              </h2>

              <p className="mb-6 text-gray-400">
                Questa operazione è irreversibile, assicurati di non avere crediti.
              </p>

              <button
                onClick={deleteAccount}
                className="w-full rounded-lg bg-red-500 px-6 py-3 sm:w-auto"
              >
                Elimina account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
