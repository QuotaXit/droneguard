"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import {
  Mail,
  Send,
  ShieldCheck,
  Clock3,
  HelpCircle,
  User,
  MessageSquare,
  CheckCircle2,
  AlertCircle
} from "lucide-react"

export default function ContattaciPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    subject: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess("")
    setError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Errore durante l'invio del messaggio")
        return
      }

      setSuccess("Messaggio inviato correttamente. Ti risponderemo appena possibile.")
      setForm({
        name: "",
        email: "",
        role: "",
        subject: "",
        message: ""
      })
    } catch (err) {
      setError("Errore imprevisto. Riprova più tardi.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar />

      <main className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-12 md:px-10">
        <div className="mx-auto max-w-7xl">
          <section className="rounded-3xl border border-white/10 bg-[#140a3a]/90 p-8 md:p-12">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
                Assistenza DroneGuard
              </p>

              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Contattaci
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                Hai bisogno di supporto, vuoi segnalare un problema o hai domande
                su lavori, candidature, crediti o profilo? Scrivici e il team
                DroneGuard ti risponderà il prima possibile.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:assistenza@droneguard.it"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-500 px-7 py-4 font-semibold text-black transition hover:bg-green-400"
                >
                  <Mail size={20} />
                  assistenza@droneguard.it
                </a>
              </div>
            </div>
          </section>

          <section className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/20 text-green-400">
                  <Send size={24} />
                </div>

                <div>
                  <h2 className="text-3xl font-bold">
                    Invia un messaggio
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    Compila il form e riceveremo la tua richiesta via email.
                  </p>
                </div>
              </div>

              {success && (
                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-green-300">
                  <CheckCircle2 size={20} />
                  <p>{success}</p>
                </div>
              )}

              {error && (
                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
                  <AlertCircle size={20} />
                  <p>{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      Nome
                    </label>

                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Il tuo nome"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-white outline-none placeholder:text-gray-500 focus:border-green-500/60"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="La tua email"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-white outline-none placeholder:text-gray-500 focus:border-green-500/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      Sei un
                    </label>

                    <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-white outline-none focus:border-green-500/60"
                    >
                      <option value="">Seleziona</option>
                      <option value="Pilota">Pilota</option>
                      <option value="Cliente">Cliente</option>
                      <option value="Altro">Altro</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      Oggetto
                    </label>

                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Es. Problema candidatura"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-white outline-none placeholder:text-gray-500 focus:border-green-500/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Messaggio
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Scrivi qui il tuo messaggio..."
                    required
                    rows={7}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 p-4 text-white outline-none placeholder:text-gray-500 focus:border-green-500/60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-green-500 py-5 text-lg font-bold text-black transition hover:bg-green-400 disabled:opacity-60"
                >
                  {loading ? "Invio in corso..." : "Invia messaggio"}
                </button>
              </form>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <InfoCard
                icon={<Clock3 size={24} />}
                title="Tempi di risposta"
                text="Rispondiamo alle richieste il prima possibile. Per problemi urgenti, indica chiaramente l'oggetto e descrivi bene cosa è successo."
              />

              <InfoCard
                icon={<HelpCircle size={24} />}
                title="Per cosa puoi contattarci"
                text="Supporto account, problemi di accesso, crediti, pubblicazione lavori, candidature, profili pilota, dati lavoro e segnalazioni."
              />

              <InfoCard
                icon={<ShieldCheck size={24} />}
                title="Sicurezza e privacy"
                text="Non inserire password, dati sensibili o informazioni riservate nel messaggio. Il supporto DroneGuard non ti chiederà mai la password."
              />

              <div className="rounded-3xl border border-white/10 bg-[#140a3a] p-6">
                <h3 className="text-2xl font-bold">
                  Informazioni utili
                </h3>

                <div className="mt-5 space-y-4">
                  <SmallInfo
                    icon={<Mail size={18} />}
                    title="Email assistenza"
                    text="assistenza@droneguard.it"
                  />

                  <SmallInfo
                    icon={<User size={18} />}
                    title="Account"
                    text="Indica sempre l'email con cui sei registrato."
                  />

                  <SmallInfo
                    icon={<MessageSquare size={18} />}
                    title="Descrizione"
                    text="Più dettagli inserisci, più velocemente possiamo aiutarti."
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">
            <h2 className="text-3xl font-bold">
              Hai bisogno di assistenza su DroneGuard?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-300">
              Scrivici per qualsiasi problema relativo alla piattaforma:
              registrazione, dashboard, pubblicazione lavori, candidature,
              crediti o gestione del profilo.
            </p>

            <a
              href="mailto:assistenza@droneguard.it"
              className="mt-7 inline-flex rounded-2xl bg-green-500 px-8 py-4 font-bold text-black transition hover:bg-green-400"
            >
              Scrivi una email
            </a>
          </section>
        </div>
      </main>
    </div>
  )
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-green-400">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-400">
        {text}
      </p>
    </div>
  )
}

function SmallInfo({ icon, title, text }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mt-1 text-green-400">
        {icon}
      </div>

      <div>
        <p className="font-semibold text-white">
          {title}
        </p>

        <p className="mt-1 text-sm text-gray-400">
          {text}
        </p>
      </div>
    </div>
  )
}