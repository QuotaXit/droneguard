"use client"

import { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/client"

import {
  Mail,
  Shield,
  CreditCard,
  Bell,
  Trash2,
  Building2,
  MapPin,
  FileText,
  User,
  Camera,
} from "lucide-react"

export default function SettingsClientPage() {

  const [user, setUser] = useState(null)

  // 🔥 PROFILO
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [bio, setBio] = useState("")
  const [city, setCity] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [vatNumber, setVatNumber] = useState("")
  const [avatar, setAvatar] = useState(
)

  const [credits, setCredits] = useState(0)

  // 🔥 LOADING
  const [loading, setLoading] = useState(false)

  // EMAIL
  const [currentEmail, setCurrentEmail] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")

  // PASSWORD
  const [currentPassword, setCurrentPassword] = useState("")
const [newPassword, setNewPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")

  // NOTIFICHE
  const [emailNotifications, setEmailNotifications] =
    useState(true)

  // 🔥 CITTÀ ITALIANE
  const cities = useMemo(
    () =>
      [
        "Agrigento",
        "Alessandria",
        "Ancona",
        "Aosta",
        "Arezzo",
        "Ascoli Piceno",
        "Asti",
        "Avellino",
        "Bari",
        "Barletta",
        "Belluno",
        "Benevento",
        "Bergamo",
        "Biella",
        "Bologna",
        "Bolzano",
        "Brescia",
        "Brindisi",
        "Cagliari",
        "Caltanissetta",
        "Campobasso",
        "Caserta",
        "Catania",
        "Catanzaro",
        "Chieti",
        "Como",
        "Cosenza",
        "Cremona",
        "Crotone",
        "Cuneo",
        "Enna",
        "Ferrara",
        "Firenze",
        "Foggia",
        "Forlì",
        "Frosinone",
        "Genova",
        "Gorizia",
        "Grosseto",
        "Imperia",
        "Isernia",
        "L'Aquila",
        "La Spezia",
        "Latina",
        "Lecce",
        "Lecco",
        "Livorno",
        "Lodi",
        "Lucca",
        "Macerata",
        "Mantova",
        "Massa",
        "Matera",
        "Messina",
        "Milano",
        "Modena",
        "Monza",
        "Napoli",
        "Novara",
        "Nuoro",
        "Oristano",
        "Padova",
        "Palermo",
        "Parma",
        "Pavia",
        "Perugia",
        "Pesaro",
        "Pescara",
        "Piacenza",
        "Pisa",
        "Pistoia",
        "Pordenone",
        "Potenza",
        "Prato",
        "Ragusa",
        "Ravenna",
        "Reggio Calabria",
        "Reggio Emilia",
        "Rieti",
        "Rimini",
        "Roma",
        "Rovigo",
        "Salerno",
        "Sassari",
        "Savona",
        "Siena",
        "Siracusa",
        "Sondrio",
        "Taranto",
        "Teramo",
        "Terni",
        "Torino",
        "Trapani",
        "Trento",
        "Treviso",
        "Trieste",
        "Udine",
        "Varese",
        "Venezia",
        "Verbano-Cusio-Ossola",
        "Vercelli",
        "Verona",
        "Vibo Valentia",
        "Vicenza",
        "Viterbo",
      ].sort(),
    []
  )

  // 🔥 VALIDAZIONI
  const validateBio = (text) => {
    const regex = /^[a-zA-Z0-9À-ÿ\s]+$/
    return regex.test(text)
  }

  const validateVat = (text) => {
    const regex = /^[0-9]{11}$/
    return regex.test(text)
  }

  // 🔥 LOAD USER
  useEffect(() => {

    const loadUser = async () => {

      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) return

      setUser(user)

      setCurrentEmail(user.email)

      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .single()

      if (error) {
        console.log(error)
        return
      }

      if (data) {

        setName(data.name || "")
        setSurname(data.surname || "")
        setBio(data.bio || "")
        setCity(data.city || "")
        setCompanyName(data.company_name || "")
        setVatNumber(data.vat_number || "")
        setCredits(data.credits || 0)

        setAvatar(
          data.avatar_url ||
            "https://randomuser.me/api/portraits/men/32.jpg"
        )
      }
    }

    loadUser()

  }, [])

  // 🔥 UPLOAD FOTO
  const uploadAvatar = async (e) => {

    try {

      const file = e.target.files[0]

      if (!file || !user) return

      const fileExt = file.name.split(".").pop()

      const fileName = `${user.id}.${fileExt}`

      const filePath = `avatars/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, {
          upsert: true,
        })

      if (uploadError) {
        console.log(uploadError)
        toast.error("Errore upload immagine ❌")
        return
      }

      const {
  data: { publicUrl }
} = supabase.storage
  .from("avatars")
  .getPublicUrl(filePath) // 🔥 CORRETTO

const finalUrl = `${publicUrl}?t=${Date.now()}`

      const { error } = await supabase
        .from("users")
        .update({
          avatar_url: finalUrl,
        })
        .eq("id", user.id)

      if (error) {
        console.log(error)
        return
      }

      setAvatar(finalUrl)

      toast.success("Foto profilo aggiornata ✅")

    } catch (err) {

      console.log(err)

      toast.error("Errore upload ❌")
    }
  }

  // 🔥 SAVE PROFILE
  const saveProfile = async () => {

    try {

      if (!user) {
        toast.error("Utente non trovato ❌")
        return
      }

      // 🔥 BIO MAX 120
      if (bio.length > 120) {
        toast.error("La biografia può avere massimo 120 caratteri ❌")
        return
      }

      // 🔥 BIO SOLO LETTERE E NUMERI
      if (bio && !validateBio(bio)) {
        toast.error("La biografia può contenere solo lettere e numeri ❌")
        return
      }

      // 🔥 SOCIETÀ MAX 20
      if (companyName.length > 20) {
        toast.error("Nome società massimo 20 caratteri ❌")
        return
      }

      // 🔥 PIVA
      if (vatNumber && !validateVat(vatNumber)) {
        toast.error("Partita IVA non valida ❌")
        return
      }

      setLoading(true)

      const { error } = await supabase
        .from("users")
        .update({
          name,
          surname,
          bio,
          city,
          company_name: companyName,
          vat_number: vatNumber,
        })
        .eq("id", user.id)

      if (error) {
        console.log(error)
        toast.error(error.message)
        return
      }

      toast.success("Profilo aggiornato ✅")

    } catch (err) {

      console.log(err)

      toast.error("Errore imprevisto ❌")

    } finally {

      setLoading(false)

    }
  }

  // 🔥 UPDATE EMAIL
  const updateEmail = async () => {

    if (!newEmail || !confirmEmail) {
      toast.error("Compila tutti i campi")
      return
    }

    if (newEmail !== confirmEmail) {
      toast.error("Le email non coincidono ❌")
      return
    }

    const { error } = await supabase.auth.updateUser({
      email: newEmail,
    })

    if (error) {
      toast.error("Errore aggiornamento email ❌")
      return
    }

    toast.success("Email aggiornata ✅")

    setNewEmail("")
    setConfirmEmail("")
  }

  // 🔥 UPDATE PASSWORD
  const updatePassword = async () => {
  if (
    !currentPassword ||
    !newPassword ||
    !confirmPassword
  ) {
    toast.error("Compila tutti i campi")
    return
  }

  if (newPassword !== confirmPassword) {
    toast.error(
      "Le nuove password non coincidono ❌"
    )
    return
  }

  /*
   * Verifica prima la password attuale.
   */
  const { error: loginError } =
    await supabase.auth.signInWithPassword({
      email: currentEmail,
      password: currentPassword
    })

  if (loginError) {
    toast.error(
      "Password attuale non corretta ❌"
    )
    return
  }

  /*
   * Solo dopo la verifica aggiorna
   * realmente la password.
   */
  const { error } =
    await supabase.auth.updateUser({
      password: newPassword
    })

  if (error) {
    toast.error(
      "Errore aggiornamento password ❌"
    )
    return
  }

  setCurrentPassword("")
  setNewPassword("")
  setConfirmPassword("")

  toast.success(
    "Password aggiornata con successo ✅"
  )
}

  // 🔥 DELETE ACCOUNT
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
     * Anche quando la disattivazione database
     * è riuscita ma il blocco Auth ha restituito
     * un errore, l’utente deve essere disconnesso.
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
      "[client-settings] account deactivation failed:",
      error
    )

    toast.error(
      error instanceof Error
        ? error.message
        : "Errore durante la disattivazione dell’account."
    )
  }
}

  return (
  <div className="min-h-screen flex flex-col text-white">
    <Navbar />

    <main className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

        {/* HEADER */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-400">
            Area cliente
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Impostazioni Cliente
          </h1>

          <p className="mt-3 text-sm text-gray-400 sm:text-base">
            Gestisci il tuo profilo e le impostazioni del tuo account.
          </p>
        </div>

        {/* PROFILO + INFORMAZIONI */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[330px_minmax(0,1fr)]">

          {/* SINISTRA */}
          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">

            {/* PROFILO */}
            <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#140a3a] p-6 shadow-xl shadow-black/10">
              <div className="flex flex-col items-center text-center">

                <label className="group relative cursor-pointer">
                  <img
                    src={avatar}
                    alt={`${name || "Cliente"} ${surname || ""}`.trim()}
                    className="h-28 w-28 rounded-full border-2 border-white/20 object-cover shadow-lg"
                  />

                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/60 opacity-0 transition group-hover:opacity-100">
                    <Camera size={24} />
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={uploadAvatar}
                    className="hidden"
                  />
                </label>

                <h2 className="mt-4 text-2xl font-bold">
                  {`${name || "Cliente"} ${surname || ""}`.trim()}
                </h2>

                <span className="mt-2 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-400">
                  Cliente verificato
                </span>

                <div className="mt-6 w-full space-y-2 border-t border-white/10 pt-5">

                  <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-3 text-left">
                    <MapPin
                      size={17}
                      className="shrink-0 text-green-400"
                    />

                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600">
                        Posizione
                      </p>

                      <p className="mt-1 break-words text-sm text-gray-300">
                        {city || "Città non impostata"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-3 text-left">
                    <Building2
                      size={17}
                      className="shrink-0 text-green-400"
                    />

                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600">
                        Società
                      </p>

                      <p className="mt-1 break-words text-sm text-gray-300">
                        {companyName || "Società non impostata"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-3 text-left">
                    <FileText
                      size={17}
                      className="shrink-0 text-green-400"
                    />

                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600">
                        Partita IVA
                      </p>

                      <p className="mt-1 break-words text-sm text-gray-300">
                        {vatNumber || "P.IVA non inserita"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CREDITI */}
            <section className="rounded-3xl border border-white/10 bg-[#140a3a] p-6 shadow-xl shadow-black/10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <CreditCard
                      size={20}
                      className="text-green-400"
                    />

                    <h2 className="font-bold">
                      Crediti
                    </h2>
                  </div>

                  <p className="mt-4 text-4xl font-black">
                    {credits}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Crediti disponibili per pubblicare lavori.
                  </p>
                </div>
              </div>

              <Link
                href="/dashboard-client/credits"
                className="mt-5 flex w-full items-center justify-center rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400"
              >
                Acquista crediti
              </Link>
            </section>
          </aside>

          {/* INFORMAZIONI PROFILO */}
          <section className="rounded-3xl border border-white/10 bg-[#140a3a] p-5 shadow-xl shadow-black/10 sm:p-6 lg:p-8">

            <div className="mb-7 flex items-start gap-3 border-b border-white/10 pb-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                <User size={20} />
              </div>

              <div>
                <h2 className="text-xl font-bold sm:text-2xl">
                  Informazioni profilo
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Aggiorna i dati mostrati nel tuo profilo cliente.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Nome
                </label>

                <input
                  placeholder="Nome"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition focus:border-green-400/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Cognome
                </label>

                <input
                  placeholder="Cognome"
                  value={surname}
                  onChange={(e) =>
                    setSurname(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition focus:border-green-400/50"
                />
              </div>

              {/* CITTÀ */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Città
                </label>

                <select
                  value={city}
                  onChange={(e) =>
                    setCity(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0B1028] px-4 py-3.5 text-white outline-none transition [color-scheme:dark] focus:border-green-400/50"
                >
                  <option
                    value=""
                    className="bg-[#0B1028] text-white"
                  >
                    Seleziona città
                  </option>

                  {cities.map((c) => (
                    <option
                      key={c}
                      value={c}
                      className="bg-[#0B1028] text-white"
                    >
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* SOCIETÀ */}
              <div>
  <label className="mb-2 block text-sm text-gray-400">
    Ragione sociale
  </label>

  <input
    placeholder="Ragione sociale"
    value={companyName}
    maxLength={20}
    onChange={(e) =>
      setCompanyName(
        e.target.value
      )
    }
    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition focus:border-green-400/50"
  />
</div>

              {/* PIVA */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-gray-400">
                  Partita IVA
                </label>

                <input
                  placeholder="Partita IVA"
                  value={vatNumber}
                  maxLength={11}
                  onChange={(e) => {
                    const value =
                      e.target.value.replace(
                        /\D/g,
                        ""
                      )

                    setVatNumber(value)
                  }}
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition focus:border-green-400/50"
                />
              </div>
            </div>

            <div className="mt-7 flex justify-end border-t border-white/10 pt-6">
              <button
                onClick={saveProfile}
                disabled={loading}
                className="w-full rounded-xl bg-green-500 px-7 py-3.5 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {loading
                  ? "Salvataggio..."
                  : "Salva modifiche"}
              </button>
            </div>
          </section>
        </div>

        {/* EMAIL + SICUREZZA */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* EMAIL */}
          <section className="rounded-3xl border border-white/10 bg-[#140a3a] p-5 shadow-xl shadow-black/10 sm:p-6">
            <div className="mb-5 flex items-start gap-3 border-b border-white/10 pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                <Mail size={18} />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Email
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Modifica l'indirizzo email dell'account.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Email attuale
                </label>

                <input
                  value={currentEmail}
                  disabled
                  className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-gray-400"
                />
              </div>

              <input
                placeholder="Nuova email"
                value={newEmail}
                onChange={(e) =>
                  setNewEmail(e.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition placeholder:text-gray-600 focus:border-green-400/50"
              />

              <input
                placeholder="Conferma nuova email"
                value={confirmEmail}
                onChange={(e) =>
                  setConfirmEmail(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition placeholder:text-gray-600 focus:border-green-400/50"
              />

              <button
                onClick={updateEmail}
                className="rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400"
              >
                Aggiorna email
              </button>
            </div>
          </section>

          {/* SICUREZZA */}
          <section className="rounded-3xl border border-white/10 bg-[#140a3a] p-5 shadow-xl shadow-black/10 sm:p-6">
            <div className="mb-5 flex items-start gap-3 border-b border-white/10 pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                <Shield size={18} />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Sicurezza
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Aggiorna la password di accesso.
                </p>
              </div>
            </div>

            <div className="space-y-4">
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
  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition placeholder:text-gray-600 focus:border-green-400/50"
/>

              <input
                type="password"
                placeholder="Nuova password"
                value={newPassword}
                onChange={(e) =>
                  setNewPassword(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition placeholder:text-gray-600 focus:border-green-400/50"
              />

              <input
                type="password"
                placeholder="Conferma nuova password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition placeholder:text-gray-600 focus:border-green-400/50"
              />

              <button
                onClick={updatePassword}
                className="rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400"
              >
                Cambia password
              </button>
            </div>
          </section>
        </div>

        {/* ZONA PERICOLO */}
        <section className="mt-6 rounded-3xl border border-red-500/20 bg-red-500/[0.07] p-5 shadow-xl shadow-black/10 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <div className="flex items-center gap-2 text-red-400">
                <Trash2 size={18} />

                <p className="text-xs font-semibold uppercase tracking-[0.16em]">
                  Zona pericolo
                </p>
              </div>

              <h2 className="mt-2 text-xl font-bold text-red-300">
                Elimina account
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                Questa operazione è irreversibile. Tutti i tuoi dati
                verranno eliminati, assicurati di non avere crediti.
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

