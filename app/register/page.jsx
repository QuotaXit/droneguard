"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/client"

const allowedDomains = [
  "gmail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "icloud.com",
  "yahoo.com",
  "outlook.it",
  "libero.it",
  "virgilio.it",
  "alice.it",
  "tim.it",
  "pec.it"
]

function validateEmailAddress(value) {
  const normalizedEmail = value.trim().toLowerCase()

  if (!normalizedEmail) {
    return "Inserisci un indirizzo email."
  }

  if (normalizedEmail.includes(" ")) {
    return "L'email non può contenere spazi."
  }

  if (!normalizedEmail.includes("@")) {
    return "L'email deve contenere @."
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(normalizedEmail)) {
    return "Inserisci un indirizzo email valido."
  }

  const emailDomain = normalizedEmail.split("@")[1]?.toLowerCase()

  if (!allowedDomains.includes(emailDomain)) {
    return "Usa un indirizzo email valido: Gmail, Outlook, Hotmail, iCloud, Yahoo, Libero o Virgilio."
  }

  return ""
}

export default function RegisterPage() {
  const router = useRouter()

  const [type, setType] = useState("pilot")
  const [username, setUsername] = useState("")
  const [nome, setNome] = useState("")
  const [cognome, setCognome] = useState("")
  const [citta, setCitta] = useState("")
  const [ragioneSociale, setRagioneSociale] = useState("")
  const [partitaIva, setPartitaIva] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [certificazioni, setCertificazioni] = useState("")
  const [esperienza, setEsperienza] = useState("")
  const [drone, setDrone] = useState("")
  const [openDrone, setOpenDrone] = useState(false)
  const [openCert, setOpenCert] = useState(false)
  const [openExp, setOpenExp] = useState(false)
  const [searchDrone, setSearchDrone] = useState("")
  const [loading, setLoading] = useState(false)

  const cities = ["Milano", "Roma", "Torino", "Napoli", "Bologna", "Firenze"]

  const droneList = [
    "DJI Air 2S",
    "DJI Air 3",
    "DJI Avata",
    "DJI Avata 2",
    "DJI Inspire 2",
    "DJI Mavic 3",
    "DJI Mini 3 Pro",
    "DJI Mini 4 Pro",
    "DJI Matrice 300 RTK",
    "DJI Matrice 350 RTK",
    "Autel EVO II",
    "Autel EVO Lite+",
    "Parrot Anafi",
    "Skydio 2+",
    "Yuneec Typhoon H"
  ]

  const filteredDrones = droneList.filter((item) =>
    item.toLowerCase().includes(searchDrone.toLowerCase())
  )

  const certificationsList = ["A1/A3", "A2", "SPECIFIC", "CERTIFIED"]
  const experienceList = ["0-1 anni", "1-2 anni", "2-3 anni", "3-5 anni", "5+ anni"]

  const switchType = (newType) => {
    setType(newType)
    setCertificazioni("")
    setEsperienza("")
    setDrone("")
  }

  useEffect(() => {
    const closeAll = () => {
      setOpenCert(false)
      setOpenExp(false)
      setOpenDrone(false)
    }

    window.addEventListener("click", closeAll)

    return () => window.removeEventListener("click", closeAll)
  }, [])

  const handleRegister = async (e) => {
    e.preventDefault()

    if (loading) return

    try {
      setLoading(true)
      setEmailError("")

      const normalizedEmail = email.trim().toLowerCase()
      const emailValidationError = validateEmailAddress(normalizedEmail)

      if (emailValidationError) {
        setEmailError(emailValidationError)
        return
      }

      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: normalizedEmail,
        password,
        options: {
          data: {
            name: nome,
            role: type
          }
        }
      })

      if (authError) {
        toast.error(authError.message)
        return
      }

      if (!authData?.user?.id) {
        toast.error("Registrazione incompleta: utente Auth non trovato.")
        return
      }

      const insertData = {
        id: authData.user.id,
        email: normalizedEmail,
        role: type,
        username,
        name: nome,
        surname: cognome,
        city: citta || "",
        company_name: ragioneSociale,
        vat_number: partitaIva,
        certifications: type === "pilot" ? certificazioni : "",
        experience: type === "pilot" ? esperienza : "",
        drone: type === "pilot" ? drone : "",
        credits: type === "pilot" ? 50 : 0,
        verified: false
      }

      console.log("USER INSERT DATA:", insertData)

      const { error: insertError } = await supabase
        .from("users")
        .upsert(insertData)

      console.log("USER INSERT ERROR:", insertError)

      if (insertError) {
        toast.error(`Errore salvataggio profilo: ${insertError.message}`)
        return
      }

      toast.success("Registrazione completata. Controlla la tua email per confermare l'account.")
      router.push("/login")
    } catch {
      toast.error("Errore durante la registrazione.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="relative flex flex-1 items-start justify-center px-4 py-8 text-white sm:items-center sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]" />

        <form
          onSubmit={handleRegister}
          className="relative z-10 w-full max-w-sm space-y-4 rounded-2xl border border-white/20 bg-white/5 p-6 sm:p-8"
        >
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => switchType("pilot")}
              className={`flex-1 rounded py-2 ${type === "pilot" ? "bg-white text-black" : "border"}`}
            >
              Pilota
            </button>

            <button
              type="button"
              onClick={() => switchType("cliente")}
              className={`flex-1 rounded py-2 ${type === "cliente" ? "bg-white text-black" : "border"}`}
            >
              Cliente
            </button>
          </div>

          {type === "pilot" && (
            <>
              <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} className="input" />
              <input placeholder="Cognome" value={cognome} onChange={(e) => setCognome(e.target.value)} className="input" />

              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <div
                  onClick={() => {
                    setOpenCert(!openCert)
                    setOpenExp(false)
                    setOpenDrone(false)
                  }}
                  className="input cursor-pointer"
                >
                  {certificazioni || "Certificazioni"}
                </div>

                {openCert && (
                  <div className="dropdown">
                    {certificationsList.map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          setCertificazioni(item)
                          setOpenCert(false)
                        }}
                        className="item"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <div
                  onClick={() => {
                    setOpenExp(!openExp)
                    setOpenCert(false)
                    setOpenDrone(false)
                  }}
                  className="input cursor-pointer"
                >
                  {esperienza || "Esperienza"}
                </div>

                {openExp && (
                  <div className="dropdown">
                    {experienceList.map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          setEsperienza(item)
                          setOpenExp(false)
                        }}
                        className="item"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <div
                  onClick={() => {
                    setOpenDrone(!openDrone)
                    setOpenCert(false)
                    setOpenExp(false)
                  }}
                  className="input cursor-pointer"
                >
                  {drone || "Seleziona drone"}
                </div>

                {openDrone && (
                  <div className="dropdown h-52 overflow-y-auto">
                    <input
                      placeholder="Cerca..."
                      value={searchDrone}
                      onChange={(e) => setSearchDrone(e.target.value)}
                      className="input mb-2"
                    />

                    {filteredDrones.map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          setDrone(item)
                          setOpenDrone(false)
                        }}
                        className="item"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

          {type === "cliente" && (
            <>
              <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} className="input" />
              <input placeholder="Cognome" value={cognome} onChange={(e) => setCognome(e.target.value)} className="input" />

              <select value={citta} onChange={(e) => setCitta(e.target.value)} className="input">
                <option value="">Seleziona città</option>
                {cities.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <input placeholder="Ragione sociale" value={ragioneSociale} onChange={(e) => setRagioneSociale(e.target.value)} className="input" />
              <input placeholder="Partita IVA" value={partitaIva} onChange={(e) => setPartitaIva(e.target.value)} className="input" />
            </>
          )}

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (emailError) {
                  setEmailError("")
                }
              }}
              className={`input bg-white text-black ${emailError ? "border-red-500" : ""}`}
            />

            {emailError && (
              <p className="mt-2 text-sm text-red-300">
                {emailError}
              </p>
            )}

            <p className="mt-2 text-xs text-gray-300">
              Sono accettati solo provider email comuni. La conferma finale resta via email Supabase.
            </p>
          </div>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input bg-white text-black"
          />

          <button
            disabled={loading}
            className="w-full rounded-lg bg-green-500 py-3 text-black disabled:opacity-60"
          >
            {loading ? "Registrazione..." : "Registrati"}
          </button>
        </form>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.2);
          background: transparent;
        }
        .dropdown {
          position: absolute;
          width: 100%;
          background: #0F1B4D;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 8px;
          padding: 8px;
          margin-top: 5px;
          z-index: 50;
        }
        .item {
          padding: 8px;
          cursor: pointer;
          border-radius: 6px;
        }
        .item:hover {
          background: rgba(255,255,255,0.1);
        }
      `}</style>
    </div>
  )
}
