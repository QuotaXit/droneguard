"use client"

import {
  useCallback,
  useEffect,
  useState
} from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
import { italianCities } from "@/app/data/italianCities"
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
  const [acceptedLegal, setAcceptedLegal] = useState(false)
  const [
    registrationStatusLoading,
    setRegistrationStatusLoading
  ] = useState(true)

  const [
    registrationsEnabled,
    setRegistrationsEnabled
  ] = useState(true)

  const [
    registrationBlockedMessage,
    setRegistrationBlockedMessage
  ] = useState("")

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

  const filteredDrones = droneList.filter((item) =>
    item.toLowerCase().includes(searchDrone.toLowerCase())
  )

  const certificationsList = ["A1/A3", "A2", "SPECIFIC", "CERTIFIED"]
  const experienceList = ["0-1 anni", "1-2 anni", "2-3 anni", "3-5 anni", "5+ anni"]

    const checkRegistrationAvailability =
    useCallback(async ({
      updateUi = true
    } = {}) => {
      try {
        const response = await fetch(
          "/api/platform-status",
          {
            method: "GET",
            cache: "no-store",

            headers: {
              Accept:
                "application/json"
            }
          }
        )

        const data =
          await response
            .json()
            .catch(() => null)

        if (
          !response.ok ||
          !data?.success ||
          !data?.status
        ) {
          throw new Error(
            "PLATFORM_STATUS_UNAVAILABLE"
          )
        }

        const maintenanceActive =
          Boolean(
            data.status
              .maintenanceActive
          )

        const allowed =
          Boolean(
            data.status
              .registrationsEnabled
          ) &&
          !maintenanceActive

        let message = ""

        if (maintenanceActive) {
          message =
            data.status
              .maintenanceMessage ||
            "DroneGuard è temporaneamente in manutenzione."
        } else if (!allowed) {
          message =
            "Le nuove registrazioni sono temporaneamente sospese."
        }

        if (updateUi) {
          setRegistrationsEnabled(
            allowed
          )

          setRegistrationBlockedMessage(
            message
          )
        }

        return {
          allowed,
          message
        }
      } catch (error) {
        console.error(
          "[register] Controllo registrazioni fallito:",
          error
        )

        const message =
          "Non è possibile verificare la disponibilità delle registrazioni. Riprova tra poco."

        if (updateUi) {
          setRegistrationsEnabled(
            false
          )

          setRegistrationBlockedMessage(
            message
          )
        }

        return {
          allowed: false,
          message
        }
      }
    }, [])

  const switchType = (newType) => {
    setType(newType)
    setCertificazioni([])
    setEsperienza("")
    setDrone([])
    setAcceptedRules(false)
  }

   useEffect(() => {
    const requestedType = new URLSearchParams(
      window.location.search
    ).get("type")

    const normalizedType = String(
      requestedType || ""
    )
      .trim()
      .toLowerCase()

    if (
      normalizedType === "cliente" ||
      normalizedType === "client" ||
      normalizedType === "customer"
    ) {
      setType("cliente")
      return
    }

    if (
      normalizedType === "pilot" ||
      normalizedType === "pilota"
    ) {
      setType("pilot")
    }
  }, [])

  useEffect(() => {
    const closeAll = () => {
      setOpenCert(false)
      setOpenExp(false)
      setOpenDrone(false)
    }

    window.addEventListener("click", closeAll)

    return () => window.removeEventListener("click", closeAll)
  }, [])

    useEffect(() => {
    let active = true

    async function loadAvailability() {
      setRegistrationStatusLoading(
        true
      )

      const result =
        await checkRegistrationAvailability({
          updateUi: false
        })

      if (!active) {
        return
      }

      setRegistrationsEnabled(
        result.allowed
      )

      setRegistrationBlockedMessage(
        result.message
      )

      setRegistrationStatusLoading(
        false
      )
    }

    loadAvailability()

    return () => {
      active = false
    }
  }, [
    checkRegistrationAvailability
  ])

  const handleRegister = async (e) => {
    e.preventDefault()

    if (loading) return

        try {
      setLoading(true)
      setEmailError("")

      /*
       * Ricontrollo immediato:
       * impedisce l'invio se il Team ha bloccato
       * le registrazioni dopo l'apertura della pagina.
       */
      const availability =
        await checkRegistrationAvailability()

      if (!availability.allowed) {
        toast.error(
          availability.message ||
          "Le nuove registrazioni sono temporaneamente sospese."
        )

        return
      }

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

      if (!password || password.length < 6) {
        toast.error("La password deve contenere almeno 6 caratteri.")
        return
      }

      if (!acceptedLegal) {
  toast.error(
    "Devi accettare la Privacy Policy e i Termini di utilizzo."
  )
  return
}

      if (type === "pilot") {
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
          toast.error(
            "Devi accettare la dichiarazione del pilota prima di registrarti."
          )
          return
        }
      }

      if (type === "cliente") {
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

   const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  window.location.origin
).replace(/\/+$/, "")

const emailRedirectTo = `${siteUrl}/auth/callback`

      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: normalizedEmail,
        password,
        options: {
          emailRedirectTo,
          data: {
            role: type,
            username,
            name: nome,
            surname: cognome,
            city: citta || "",
            legal_accepted: true,
            legal_accepted_at: new Date().toISOString(),
            legal_document_version: "2026-05-31",
            company_name: ragioneSociale || "",
            vat_number: partitaIva || "",
            certifications: type === "pilot" ? certificazioni.join(", ") : "",
            experience: type === "pilot" ? esperienza : "",
            drone: type === "pilot" ? drone.join(", ") : "",
          }
        }
      })

            if (authError) {
        /*
         * La disponibilità potrebbe essere cambiata
         * tra il controllo e l'inserimento in Auth.
         */
        const availabilityAfterError =
          await checkRegistrationAvailability()

        if (
          !availabilityAfterError.allowed
        ) {
          toast.error(
            availabilityAfterError
              .message ||
            "Le nuove registrazioni sono temporaneamente sospese."
          )

          return
        }

        const normalizedError =
          String(
            authError.message || ""
          ).toUpperCase()

        if (
          normalizedError.includes(
            "REGISTRATIONS_DISABLED"
          ) ||
          normalizedError.includes(
            "REGISTRATION_CONTROL_UNAVAILABLE"
          )
        ) {
          setRegistrationsEnabled(
            false
          )

          setRegistrationBlockedMessage(
            "Le nuove registrazioni sono temporaneamente sospese."
          )

          toast.error(
            "Le nuove registrazioni sono temporaneamente sospese."
          )

          return
        }

        toast.error(
          authError.message ||
          "Impossibile completare la registrazione."
        )

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

    <div className="relative flex flex-1 justify-center px-4 py-8 text-white sm:px-6 lg:px-8 lg:py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]" />

      <form
        onSubmit={handleRegister}
        className="relative z-10 w-full max-w-[560px] rounded-[28px] border border-white/10 bg-[rgba(20,10,58,0.88)] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur sm:p-6"
      >
        <div className="mb-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-emerald-300">
            DroneGuard
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Registrazione
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Crea il tuo account e accedi alla piattaforma come{" "}
            <span className="font-semibold text-white">
              {type === "pilot" ? "pilota" : "cliente"}.
            </span>
          </p>
        </div>

        {registrationStatusLoading ? (
          <div className="mb-4 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-sm leading-6 text-cyan-100">
            Controllo disponibilità delle registrazioni...
          </div>
        ) : !registrationsEnabled ? (
          <div className="mb-4 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 px-4 py-3">
            <p className="font-bold text-yellow-200">
              Registrazioni temporaneamente sospese
            </p>

            <p className="mt-2 text-sm leading-6 text-yellow-100/80">
              {registrationBlockedMessage ||
                "Al momento non è possibile creare un nuovo account. Riprova più tardi."}
            </p>
          </div>
        ) : null}

        <div className="mb-5 rounded-2xl border border-white/10 bg-white/[0.04] p-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => switchType("pilot")}
              className={`rounded-xl px-4 py-3 text-sm font-bold transition ${
                type === "pilot"
                  ? "bg-white text-slate-950"
                  : "border border-white/15 bg-transparent text-white hover:bg-white/5"
              }`}
            >
              Pilota
            </button>

            <button
              type="button"
              onClick={() => switchType("cliente")}
              className={`rounded-xl px-4 py-3 text-sm font-bold transition ${
                type === "cliente"
                  ? "bg-white text-slate-950"
                  : "border border-white/15 bg-transparent text-white hover:bg-white/5"
              }`}
            >
              Cliente
            </button>
          </div>
        </div>

        {type === "pilot" && (
          <>
            <div className="mb-5 rounded-2xl border border-white/10 bg-black/10 p-4 sm:p-5">
              <div className="mb-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  Dati profilo
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="input"
                />

                <input
                  placeholder="Cognome"
                  value={cognome}
                  onChange={(e) => setCognome(e.target.value)}
                  className="input"
                />
              </div>

              <div className="mt-3">
                <select
                  value={citta}
                  onChange={(e) => setCitta(e.target.value)}
                  className="input"
                >
                  <option value="">Seleziona città</option>

                  {italianCities.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-5 rounded-2xl border border-white/10 bg-black/10 p-4 sm:p-5">
              <div className="mb-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  Profilo pilota
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div
                  className="relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    onClick={() => {
                      setOpenCert(!openCert)
                      setOpenExp(false)
                      setOpenDrone(false)
                    }}
                    className="input cursor-pointer"
                  >
                    {certificazioni.length > 0
                      ? certificazioni.join(", ")
                      : "Certificazioni"}
                  </div>

                  {openCert && (
                    <div className="dropdown">
                      {certificationsList.map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            if (certificazioni.includes(item)) {
                              setCertificazioni(
                                certificazioni.filter(
                                  (c) => c !== item
                                )
                              )
                            } else if (
                              certificazioni.length < 3
                            ) {
                              setCertificazioni([
                                ...certificazioni,
                                item
                              ])
                            } else {
                              toast.error(
                                "Puoi selezionare massimo 3 certificazioni."
                              )
                            }
                          }}
                          className="item"
                        >
                          {certificazioni.includes(item)
                            ? "✓ "
                            : ""}
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onClick={(e) => e.stopPropagation()}
                >
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
              </div>

              <div
                className="relative mt-3"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  onClick={() => {
                    setOpenDrone(!openDrone)
                    setOpenCert(false)
                    setOpenExp(false)
                  }}
                  className="input cursor-pointer"
                >
                  {drone.length > 0
                    ? drone.join(", ")
                    : "Seleziona drone"}
                </div>

                {openDrone && (
                  <div className="dropdown h-56 overflow-y-auto">
                    <input
                      placeholder="Cerca drone..."
                      value={searchDrone}
                      onChange={(e) =>
                        setSearchDrone(e.target.value)
                      }
                      className="input mb-2"
                    />

                    {filteredDrones.map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          if (drone.includes(item)) {
                            setDrone(
                              drone.filter(
                                (d) => d !== item
                              )
                            )
                          } else if (drone.length < 3) {
                            setDrone([
                              ...drone,
                              item
                            ])
                          } else {
                            toast.error(
                              "Puoi selezionare massimo 3 droni."
                            )
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
            </div>
          </>
        )}

        {type === "cliente" && (
          <>
            <div className="mb-5 rounded-2xl border border-white/10 bg-black/10 p-4 sm:p-5">
              <div className="mb-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  Dati profilo
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="input"
                />

                <input
                  placeholder="Cognome"
                  value={cognome}
                  onChange={(e) => setCognome(e.target.value)}
                  className="input"
                />
              </div>

              <div className="mt-3">
                <select
                  value={citta}
                  onChange={(e) => setCitta(e.target.value)}
                  className="input"
                >
                  <option value="">Seleziona città</option>

                  {italianCities.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  placeholder="Ragione sociale"
                  value={ragioneSociale}
                  onChange={(e) =>
                    setRagioneSociale(e.target.value)
                  }
                  className="input"
                />

                <input
                  placeholder="Partita IVA"
                  value={partitaIva}
                  onChange={(e) =>
                    setPartitaIva(e.target.value)
                  }
                  className="input"
                />
              </div>
            </div>
          </>
        )}

        <div className="mb-5 rounded-2xl border border-white/10 bg-black/10 p-4 sm:p-5">
          <div className="mb-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Accesso account
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (emailError) setEmailError("")
                }}
                className={`input ${
                  emailError ? "border-red-500" : ""
                }`}
              />

              {emailError && (
                <p className="mt-2 text-sm text-red-300">
                  {emailError}
                </p>
              )}
            </div>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="input"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-xs leading-6 text-gray-300">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                id="acceptedLegal"
                type="checkbox"
                checked={acceptedLegal}
                onChange={(e) =>
                  setAcceptedLegal(e.target.checked)
                }
                className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-green-500"
              />

              <div>
                Dichiaro di aver letto la{" "}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-green-400 underline underline-offset-2 hover:text-green-300"
                >
                  Privacy Policy
                </Link>{" "}
                e accetto i{" "}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-green-400 underline underline-offset-2 hover:text-green-300"
                >
                  Termini di utilizzo
                </Link>
                .
              </div>
            </label>
          </div>

          {type === "pilot" && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-xs leading-6 text-gray-300">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={acceptedRules}
                  onChange={(e) =>
                    setAcceptedRules(e.target.checked)
                  }
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-green-500"
                />

                <span>
                  Dichiaro di essere in possesso delle
                  certificazioni ENAC indicate, di operare nel
                  rispetto delle normative vigenti e di
                  assumermi la responsabilità dei dati inseriti.
                  Ogni pagamento per il lavoro svolto, avviene
                  tra le parti al di fuori della piattaforma
                  DroneGuard.
                </span>
              </label>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={
            loading ||
            registrationStatusLoading ||
            !registrationsEnabled ||
            !acceptedLegal ||
            (type === "pilot" && !acceptedRules)
          }
          className="mt-5 w-full rounded-2xl bg-green-500 px-4 py-3.5 text-base font-black text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "Registrazione..."
            : registrationStatusLoading
              ? "Controllo disponibilità..."
              : !registrationsEnabled
                ? "Registrazioni sospese"
                : "Registrati"}
        </button>

        <p className="mt-4 text-center text-xs leading-6 text-gray-500">
          Registrandoti su DroneGuard potrai accedere alla
          piattaforma con il profilo selezionato.
        </p>
      </form>
    </div>

    <style jsx>{`
      .input {
        width: 100%;
        min-height: 50px;
        padding: 0 14px;
        border-radius: 14px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.03);
        color: white;
        outline: none;
        transition:
          border-color 0.2s ease,
          background 0.2s ease,
          box-shadow 0.2s ease;
      }

      .input:focus {
        border-color: rgba(34, 197, 94, 0.55);
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.12);
      }

      .input::placeholder {
        color: rgba(255, 255, 255, 0.62);
      }

      .input option {
        color: white;
        background: #16204f;
      }

      .dropdown {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        width: 100%;
        background: #101944;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 16px;
        padding: 8px;
        z-index: 50;
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
      }

      .item {
        padding: 10px 12px;
        cursor: pointer;
        border-radius: 12px;
        color: rgba(255, 255, 255, 0.92);
        transition: background 0.15s ease;
      }

      .item:hover {
        background: rgba(255, 255, 255, 0.08);
      }
    `}</style>
  </div>
)
}