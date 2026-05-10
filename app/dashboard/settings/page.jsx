"use client"

import { useCallback, useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
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
    <div className="grid grid-cols-[110px_1fr] items-start gap-3 rounded-xl bg-white/[0.03] px-4 py-3">
      <p className="text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
        {label}
      </p>

      <p className="text-center text-sm font-medium text-gray-200">
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
  const [certifications, setCertifications] = useState("")
  const [experience, setExperience] = useState("")
  const [services, setServices] = useState("")
  const [city, setCity] = useState("")
  const [location, setLocation] = useState("")
  const [drone, setDrone] = useState("")
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
    setDrone(profileData.drone || "")
    setServices(profileData.services || "")
    setCertifications(profileData.certifications || "")
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
      alert(`Errore caricamento profilo: ${error.message}`)
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
        alert(`Errore creazione profilo: ${createError.message}`)
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
      alert("Errore upload immagine")
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
      alert("Errore salvataggio avatar")
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

    alert("Foto profilo aggiornata")
  }

  const saveProfile = async () => {
    try {
      setLoading(true)

      const {
        data: { user: currentUser }
      } = await supabase.auth.getUser()

      if (!currentUser) {
        alert("Utente non autenticato")
        return
      }

      const updates = {
        id: currentUser.id,
        email: currentUser.email,
        role: "pilot",
        name: name?.trim() || "",
        surname: surname?.trim() || "",
        bio: bio?.trim() || "",
        drone,
        services,
        certifications,
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
        alert(`Errore salvataggio: ${error.message}`)
        return
      }

      if (!data) {
        alert("Errore: Supabase non ha restituito il profilo salvato")
        return
      }

      applyProfileState(data)
      alert("Profilo aggiornato")
    } catch (err) {
      console.error("Errore imprevisto settings:", err)
      alert("Errore imprevisto durante il salvataggio.")
    } finally {
      setLoading(false)
    }
  }

  const updateEmail = async () => {
    if (!newEmail.trim() || !confirmEmail.trim()) {
      alert("Inserisci e conferma la nuova email")
      return
    }

    if (newEmail.trim() !== confirmEmail.trim()) {
      alert("Le email non coincidono")
      return
    }

    const { error } = await supabase.auth.updateUser({
      email: newEmail.trim()
    })

    if (error) {
      alert(error.message)
      return
    }

    setNewEmail("")
    setConfirmEmail("")
    alert("Controlla la nuova email per confermare la modifica")
  }

  const updatePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Compila tutti i campi password")
      return
    }

    if (newPassword !== confirmPassword) {
      alert("Le password non coincidono")
      return
    }

    if (newPassword.length < 6) {
      alert("La nuova password deve avere almeno 6 caratteri")
      return
    }

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email: currentEmail,
      password: currentPassword
    })

    if (loginError) {
      alert("Password attuale non corretta")
      return
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword
    })

    if (error) {
      alert(error.message)
      return
    }

    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
    alert("Password aggiornata")
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
                      value={drone || "Non impostato"}
                    />

                    <ProfileInfoRow
                      label="Servizio"
                      value={services || "Non inserito"}
                    />

                    <ProfileInfoRow
                      label="Certificato"
                      value={certifications || "Nessuna"}
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
              <h2 className="mb-8 text-3xl font-bold">
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

                    <select
                      value={drone}
                      onChange={(e) => setDrone(e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <option value="">Seleziona drone</option>

                      {droneList.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      Certificazione
                    </label>

                    <select
                      value={certifications}
                      onChange={(e) => setCertifications(e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <option value="">Seleziona</option>

                      {certificationsList.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      Servizi offerti
                    </label>

                    <select
                      value={services}
                      onChange={(e) => setServices(e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <option value="">Seleziona</option>

                      {servicesList.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
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
                className="rounded-xl bg-green-500 px-6 py-4 text-black transition hover:bg-green-400"
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
                className="rounded-xl bg-green-500 px-6 py-4 text-black transition hover:bg-green-400"
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
                className="rounded-lg bg-red-500 px-6 py-3"
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