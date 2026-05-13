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

    if (!newPassword || !confirmPassword) {
      toast.error("Compila tutti i campi")
      return
    }

    if (newPassword !== confirmPassword) {
      toast.error("Le password non coincidono ❌")
      return
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })

    if (error) {
      toast.error("Errore aggiornamento password ❌")
      return
    }

    toast.success("Password aggiornata ✅")

    setNewPassword("")
    setConfirmPassword("")
  }

  // 🔥 DELETE ACCOUNT
  const deleteAccount = async () => {

    const confirmDelete = window.confirm(
      "Vuoi davvero eliminare il tuo account?"
    )

    if (!confirmDelete) return

    await supabase
      .from("users")
      .delete()
      .eq("id", user.id)

    await supabase.auth.signOut()

    window.location.href = "/"
  }

  return (
    <div className="min-h-screen flex flex-col text-white">

      <Navbar />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">

        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="mb-10">

            <h1 className="mb-2 text-3xl font-bold sm:text-4xl">
              Impostazioni Cliente
            </h1>

            <p className="text-gray-400">
              Gestisci il tuo account.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">

            {/* LEFT */}
            <div className="space-y-6 lg:col-span-4">

              {/* CARD PROFILO */}
              <div className="bg-[#140a3a] border border-white/10 rounded-2xl p-6">

                <div className="flex flex-col items-center text-center">

                  {/* FOTO */}
                  <label className="relative group cursor-pointer">

                    <img
                      src={avatar}
                      className="w-32 h-32 rounded-full object-cover border border-white/20"
                    />

                    <div className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition">

                      <Camera size={28} />

                    </div>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={uploadAvatar}
                      className="hidden"
                    />

                  </label>

                  <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
  {`${name || "Cliente"} ${surname || ""}`.trim()}
</h2>

                  <p className="text-green-400 text-sm mt-1">
                    Cliente verificato
                  </p>

                  <div className="mt-5 space-y-3 text-sm text-gray-300">

  <div className="flex items-center justify-center gap-2">
    <MapPin size={16} />
    <span>
      {city || "Città non impostata"}
    </span>
  </div>

  <div className="flex items-center justify-center gap-2">
    <Building2 size={16} />
    <span>
      {companyName || "Società non impostata"}
    </span>
  </div>

  <div className="flex items-center justify-center gap-2">
    <FileText size={16} />
    <span>
      {vatNumber || "P.IVA non inserita"}
    </span>
  </div>
</div>


                </div>

              </div>

              {/* CREDITI */}
              <div className="bg-[#140a3a] border border-white/10 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-5">

                  <CreditCard size={22} />

                  <h2 className="text-xl font-semibold">
                    Crediti
                  </h2>

                </div>

                <h3 className="mb-2 text-4xl font-bold sm:text-5xl">
                  {credits}
                </h3>

                <p className="text-sm text-gray-400 mb-5">
                  Crediti disponibili per pubblicare lavori
                </p>

                <Link href="/dashboard-client/credits">
  <button className="w-full py-3 rounded-lg bg-green-500 text-black font-medium hover:bg-green-400 transition">
    Acquista crediti
  </button>
</Link>

              </div>

            </div>

            {/* RIGHT */}
            <div className="space-y-6 lg:col-span-8">

              {/* INFO */}
              <div className="bg-[#140a3a] border border-white/10 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-6">

                  <User size={22} />

                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Informazioni profilo
                  </h2>

                </div>

                <div className="space-y-4">

                  <input
                    placeholder="Nome"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    className="w-full bg-[#1b1147] border border-white/10 rounded-lg p-3"
                  />

                  <input
                    placeholder="Cognome"
                    value={surname}
                    onChange={(e) =>
                      setSurname(e.target.value)
                    }
                    className="w-full bg-[#1b1147] border border-white/10 rounded-lg p-3"
                  />
                  {/* CITTÀ */}
                  <select
                    value={city}
                    onChange={(e) =>
                      setCity(e.target.value)
                    }
                    className="w-full bg-[#1b1147] border border-white/10 rounded-lg p-3"
                  >

                    <option value="">
                      Seleziona città
                    </option>

                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}

                  </select>

                  {/* SOCIETÀ */}
                  <input
                    placeholder="Nome società"
                    value={companyName}
                    maxLength={20}
                    onChange={(e) =>
                      setCompanyName(e.target.value)
                    }
                    className="w-full bg-[#1b1147] border border-white/10 rounded-lg p-3"
                  />

                  {/* PIVA */}
                  <input
                    placeholder="Partita IVA"
                    value={vatNumber}
                    maxLength={11}
                    onChange={(e) => {

                      const value =
                        e.target.value.replace(/\D/g, "")

                      setVatNumber(value)

                    }}
                    className="w-full bg-[#1b1147] border border-white/10 rounded-lg p-3"
                  />

                  <button
                    onClick={saveProfile}
                    disabled={loading}
                    className="w-full bg-green-500 py-3 rounded-lg text-black font-medium disabled:opacity-50"
                  >
                    {loading
                      ? "Salvataggio..."
                      : "Salva modifiche"}
                  </button>

                </div>

              </div>

              {/* EMAIL */}
              <div className="bg-[#140a3a] border border-white/10 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-6">

                  <Mail size={22} />

                  <h2 className="text-xl font-semibold">
                    Email
                  </h2>

                </div>

                <input
                  value={currentEmail}
                  disabled
                  className="w-full mb-4 bg-white/10 border border-white/10 rounded-lg p-3 text-gray-400"
                />

                <input
                  placeholder="Nuova email"
                  value={newEmail}
                  onChange={(e) =>
                    setNewEmail(e.target.value)
                  }
                  className="w-full mb-4 bg-[#1b1147] border border-white/10 rounded-lg p-3"
                />

                <input
                  placeholder="Conferma nuova email"
                  value={confirmEmail}
                  onChange={(e) =>
                    setConfirmEmail(e.target.value)
                  }
                  className="w-full mb-4 bg-[#1b1147] border border-white/10 rounded-lg p-3"
                />

                <button
                  onClick={updateEmail}
                  className="w-full rounded-lg bg-green-500 px-5 py-3 font-medium text-black sm:w-auto"
                >
                  Aggiorna email
                </button>

              </div>

              {/* PASSWORD */}
              <div className="bg-[#140a3a] border border-white/10 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-6">

                  <Shield size={22} />

                  <h2 className="text-xl font-semibold">
                    Sicurezza
                  </h2>

                </div>

                <input
                  type="password"
                  placeholder="Nuova password"
                  value={newPassword}
                  onChange={(e) =>
                    setNewPassword(e.target.value)
                  }
                  className="w-full mb-4 bg-[#1b1147] border border-white/10 rounded-lg p-3"
                />

                <input
                  type="password"
                  placeholder="Conferma nuova password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  className="w-full mb-4 bg-[#1b1147] border border-white/10 rounded-lg p-3"
                />

                <button
                  onClick={updatePassword}
                  className="w-full rounded-lg bg-green-500 px-5 py-3 font-medium text-black sm:w-auto"
                >
                  Cambia password
                </button>

              </div>

              {/* DELETE */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-4">

                  <Trash2
                    size={22}
                    className="text-red-400"
                  />

                  <h2 className="text-xl text-red-400 font-semibold">
                    Elimina account
                  </h2>

                </div>

                <p className="text-sm text-gray-300 mb-5">

                  Questa operazione è irreversibile.
                  Tutti i tuoi dati verranno eliminati, assicurati di non avere crediti.

                </p>

                <button
                  onClick={deleteAccount}
                  className="w-full rounded-lg bg-red-500 px-5 py-3 font-medium sm:w-auto"
                >
                  Elimina account
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
