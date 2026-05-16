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
  const [certificazioni, setCertificazioni] = useState([])
  const [esperienza, setEsperienza] = useState("")
  const [drone, setDrone] = useState([])
  const [openDrone, setOpenDrone] = useState(false)
  const [openCert, setOpenCert] = useState(false)
  const [openExp, setOpenExp] = useState(false)
  const [searchDrone, setSearchDrone] = useState("")
  const [loading, setLoading] = useState(false)
  const [acceptedRules, setAcceptedRules] = useState(false)

  const cities = [
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
    "Carbonia",
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
    "Fermo",
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
    "La Spezia",
    "L'Aquila",
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
    "Verbania",
    "Vercelli",
    "Verona",
    "Vibo Valentia",
    "Vicenza",
    "Viterbo"
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

  "DJI Mini 2",
  "DJI Mini 2 SE",
  "DJI Mini 3",
  "DJI Mini 3 Pro",
  "DJI Mini 4 Pro",

  "DJI Phantom 4",
  "DJI Phantom 4 Advanced",
  "DJI Phantom 4 Pro",
  "DJI Phantom 4 RTK",

  "DJI Matrice 30",
  "DJI Matrice 30T",
  "DJI Matrice 4E",
  "DJI Matrice 4T",
  "DJI Matrice 200",
  "DJI Matrice 210",
  "DJI Matrice 300 RTK",
  "DJI Matrice 350 RTK",
  "DJI Matrice 600",

  "DJI Agras T10",
  "DJI Agras T20",
  "DJI Agras T30",
  "DJI Agras T40",

  "Autel EVO Nano+",
  "Autel EVO Lite+",
  "Autel EVO II",
  "Autel EVO II Pro",
  "Autel EVO Max 4T",

  "Parrot Anafi",
  "Parrot Anafi USA",

  "Skydio 2+",
  "Skydio X2",

  "Yuneec Typhoon H",
  "Yuneec H520",

  "Altro"
]

  const filteredDrones = droneList.filter((item) =>
    item.toLowerCase().includes(searchDrone.toLowerCase())
  )

  const certificationsList = ["A1/A3", "A2", "SPECIFIC", "CERTIFIED"]
  const experienceList = ["0-1 anni", "1-2 anni", "2-3 anni", "3-5 anni", "5+ anni"]

  const switchType = (newType) => {
    setType(newType)
    setCertificazioni([])
    setEsperienza("")
    setDrone([])
    setAcceptedRules(false)
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

      if (!password || password.length < 6) {
        toast.error("La password deve contenere almeno 6 caratteri.")
        return
      }

      if (type === "pilot") {
        if (!nome.trim()) {
          toast.error("Inserisci il nome.")
          return
        }

        if (!cognome.trim()) {
          toast.error("Inserisci il cognome.")
          return
        }

        if (certificazioni.length === 0) {
          toast.error("Seleziona almeno una certificazione.")
          return
        }

        if (!esperienza) {
          toast.error("Seleziona l'esperienza.")
          return
        }

        if (drone.length === 0) {
          toast.error("Seleziona almeno un drone.")
          return
        }

        if (!acceptedRules) {
          toast.error("Devi accettare la dichiarazione prima di registrarti.")
          return
        }
      }

      if (type === "pilot" && !acceptedRules) {
        toast.error("Devi accettare la dichiarazione prima di registrarti.")
        return
      }

      if (type === "cliente") {
        if (!nome.trim()) {
          toast.error("Inserisci il nome.")
          return
        }

        if (!cognome.trim()) {
          toast.error("Inserisci il cognome.")
          return
        }

        if (!citta) {
          toast.error("Seleziona la città.")
          return
        }

        if (!ragioneSociale.trim()) {
          toast.error("Inserisci ragione sociale o nome attività.")
          return
        }
      }

      const normalizedEmail = email.trim().toLowerCase()
      const emailValidationError = validateEmailAddress(normalizedEmail)

      if (emailValidationError) {
        setEmailError(emailValidationError)
        return
      }

      if (!password || password.length < 6) {
        toast.error("La password deve contenere almeno 6 caratteri.")
        return
      }

      const { error: authError } = await supabase.auth.signUp({
        email: normalizedEmail,
        password,
        options: {
          emailRedirectTo: "https://www.droneguard.it/auth/callback",
          data: {
            role: type,
            username,
            name: nome,
            surname: cognome,
            city: citta || "",
            company_name: ragioneSociale || "",
            vat_number: partitaIva || "",
            certifications: type === "pilot" ? certificazioni.join(", ") : "",
            experience: type === "pilot" ? esperienza : "",
            drone: type === "pilot" ? drone.join(", ") : "",
            credits: type === "pilot" ? 50 : 0,
            verified: false
          }
        }
      })

      if (authError) {
        toast.error(authError.message)
        return
      }

      toast.success("Registrazione avviata. Controlla la tua email ( casella spam ) per confermare l'account.")
      router.push("/login")
    } catch (err) {
      console.error("REGISTER ERROR:", err)
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
                <div onClick={() => { setOpenCert(!openCert); setOpenExp(false); setOpenDrone(false) }} className="input cursor-pointer">
                  {certificazioni.length > 0 ? certificazioni.join(", ") : "Certificazioni"}
                </div>

                {openCert && (
                  <div className="dropdown">
                    {certificationsList.map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          if (certificazioni.includes(item)) {
                            setCertificazioni(certificazioni.filter((c) => c !== item))
                          } else if (certificazioni.length < 3) {
                            setCertificazioni([...certificazioni, item])
                          } else {
                            toast.error("Puoi selezionare massimo 3 certificazioni.")
                          }
                        }}
                        className="item"
                      >
                        {certificazioni.includes(item) ? "✓ " : ""}
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <div onClick={() => { setOpenExp(!openExp); setOpenCert(false); setOpenDrone(false) }} className="input cursor-pointer">
                  {esperienza || "Esperienza"}
                </div>

                {openExp && (
                  <div className="dropdown">
                    {experienceList.map((item) => (
                      <div key={item} onClick={() => { setEsperienza(item); setOpenExp(false) }} className="item">
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <div onClick={() => { setOpenDrone(!openDrone); setOpenCert(false); setOpenExp(false) }} className="input cursor-pointer">
                  {drone.length > 0 ? drone.join(", ") : "Seleziona drone"}
                </div>

                {openDrone && (
                  <div className="dropdown h-52 overflow-y-auto">
                    <input placeholder="Cerca..." value={searchDrone} onChange={(e) => setSearchDrone(e.target.value)} className="input mb-2" />

                    {filteredDrones.map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          if (drone.includes(item)) {
                            setDrone(drone.filter((d) => d !== item))
                          } else if (drone.length < 3) {
                            setDrone([...drone, item])
                          } else {
                            toast.error("Puoi selezionare massimo 3 droni.")
                          }
                        }}
                        className="item"
                      >
                        {drone.includes(item) ? "✓ " : ""}
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
                  <option key={item} value={item}>{item}</option>
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
                if (emailError) setEmailError("")
              }}
              className={`input ${emailError ? "border-red-500" : ""}`}
            />

            {emailError && <p className="mt-2 text-sm text-red-300">{emailError}</p>}
          </div>

          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />

          {type === "pilot" && (
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-3 text-xs leading-5 text-gray-300">
              <input
                type="checkbox"
                checked={acceptedRules}
                onChange={(e) => setAcceptedRules(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-green-500"
              />

              <span>
                Dichiaro di essere in possesso delle certificazioni ENAC indicate, di operare nel rispetto delle normative vigenti e di assumermi la responsabilità dei dati inseriti. Ogni pagamento per il lavoro svolto, avviene tra le parti al di fuori della piattaforma DroneGuard.
              </span>
            </label>
          )}

          <button disabled={loading || (type === "pilot" && !acceptedRules)} className="w-full rounded-lg bg-green-500 py-3 text-black disabled:opacity-60">
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
          color: white;
        }

        .input::placeholder {
          color: rgba(255,255,255,0.7);
        }

        .input option {
          color: black;
          background: white;
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