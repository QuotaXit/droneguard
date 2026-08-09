"use client"

import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import {
  getDashboardPath,
  isClient,
  isPilot
} from "@/lib/auth-utils"

export default function HowItWorksClients() {
  const router = useRouter()
    const steps = [
    {
      number: "1",
      title: "Pubblica la tua richiesta",
      desc: "Descrivi il servizio con drone di cui hai bisogno, indica luogo, data e informazioni utili. La richiesta sarà visibile ai piloti presenti sulla piattaforma.",
      type: "publish",
    },
    {
      number: "2",
      title: "Ricevi le candidature",
      desc: "I piloti interessati possono candidarsi alla tua richiesta. Puoi consultare le informazioni disponibili sui loro profili e scegliere quello più adatto alle tue esigenze.",
      type: "applications",
    },
    {
      number: "3",
      title: "Scegli il pilota",
      desc: "Accetta la candidatura che preferisci e condividi i dati necessari per organizzare il servizio. Il pagamento del lavoro viene gestito direttamente tra cliente e pilota, al di fuori di DroneGuard.",
      type: "choose",
    },
  ]

  const handlePublishJob = async () => {
  const {
    data: { user },
    error: authError
  } = await supabase.auth.getUser()

  if (authError) {
    console.error(
      "Errore controllo sessione sezione clienti:",
      authError
    )

    router.push("/login")
    return
  }

  if (!user) {
    router.push("/register?type=cliente")
    return
  }

  const {
    data: profile,
    error: profileError
  } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .maybeSingle()

  if (profileError || !profile) {
    console.error(
      "Impossibile recuperare il ruolo:",
      profileError
    )

    router.push("/login")
    return
  }

  if (isPilot(profile.role)) {
    router.push("/dashboard/jobs-board")
    return
  }

  if (isClient(profile.role)) {
    router.push("/dashboard-client/create-job")
    return
  }

  router.push(
    getDashboardPath(profile.role)
  )
}

const handleClientAccount = async () => {
  const {
    data: { user },
    error: authError
  } = await supabase.auth.getUser()

  if (authError) {
    console.error(
      "Errore controllo sessione account cliente:",
      authError
    )

    router.push("/login")
    return
  }

  if (!user) {
    router.push("/register?type=cliente")
    return
  }

  const {
    data: profile,
    error: profileError
  } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .maybeSingle()

  if (profileError || !profile) {
    console.error(
      "Impossibile recuperare il ruolo:",
      profileError
    )

    router.push("/login")
    return
  }

  if (isPilot(profile.role)) {
    router.push("/dashboard/profile")
    return
  }

  if (isClient(profile.role)) {
    router.push("/dashboard-client/settings")
    return
  }

  router.push(
    getDashboardPath(profile.role)
  )
}

  return (
  <section className="relative overflow-hidden border-b border-white/5 bg-[#0C1230]">
    {/* SFONDO */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/[0.035] blur-[130px]" />
    </div>

    <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

      {/* HEADER */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex rounded-full border border-green-400/20 bg-green-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-green-300">
          Per i clienti
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Come funziona per i clienti
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          Pubblica ciò di cui hai bisogno, ricevi le candidature
          dei piloti e scegli liberamente con chi organizzare
          il servizio.
        </p>
      </div>

      {/* STEPS */}
      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {steps.map((step, i) => (
          <article
            key={i}
            className="group flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111735] p-5 transition duration-300 hover:-translate-y-1 hover:border-green-400/20 hover:bg-[#141D40] sm:p-6"
          >
            {/* NUMERO */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500 text-lg font-black text-black shadow-lg shadow-green-500/10">
                {step.number}
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                Step {step.number}
              </span>
            </div>

            {/* TESTO */}
            <div className="mt-5">
              <h3 className="text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {step.desc}
              </p>
            </div>

            {/* ESEMPIO 1 */}
            {step.type === "publish" && (
  <div className="mt-6 flex-1 rounded-2xl border border-green-400/15 bg-[#0B1028] p-5 shadow-xl">

    <div className="flex items-center justify-between gap-3">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-green-400">
        Nuova richiesta
      </p>

      <span className="rounded-full border border-green-400/15 bg-green-400/10 px-2.5 py-1 text-[10px] font-semibold text-green-300">
        Nuovo
      </span>
    </div>

    <h4 className="mt-4 text-lg font-bold leading-snug text-white">
      Riprese drone per evento — Roma
    </h4>

    <p className="mt-3 text-sm leading-6 text-gray-400">
      Cerco pilota drone per video e foto durante
      un evento privato.
    </p>

    <div className="mt-5 space-y-2">
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.035] px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-gray-600">
          Posizione
        </p>

        <p className="mt-1 text-xs font-semibold text-gray-300">
          📍 Roma, Lazio
        </p>
      </div>

      <div className="rounded-xl border border-white/[0.06] bg-white/[0.035] px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-gray-600">
          Servizio
        </p>

        <p className="mt-1 text-xs font-semibold text-gray-300">
          Riprese video e foto aeree
        </p>
      </div>
    </div>

    <button
      type="button"
      onClick={handlePublishJob}
      className="mt-5 w-full rounded-xl bg-green-500 px-4 py-3 text-sm font-bold text-black transition hover:bg-green-400"
    >
      Pubblica lavoro
    </button>
  </div>
)}

            {/* ESEMPIO 2 */}
            {step.type === "applications" && (
  <div className="mt-6 flex-1 rounded-2xl border border-green-400/15 bg-[#0B1028] p-5 shadow-xl">

    <div className="flex items-center justify-between gap-3">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-green-400">
        Candidature ricevute
      </p>

      <span className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold text-gray-400">
        2 piloti
      </span>
    </div>

    <div className="mt-5 space-y-3">

      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-400/10 text-green-300">
            👤
          </div>

          <div>
            <p className="text-sm font-bold text-white">
              Pilota drone certificato
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-400">
              Disponibile per riprese aeree,
              eventi e immobili.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-blue-300">
            👤
          </div>

          <div>
            <p className="text-sm font-bold text-white">
              Operatore drone professionale
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-400">
              Attrezzatura professionale e
              portfolio disponibile.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

            {/* ESEMPIO 3 */}
            {step.type === "choose" && (
  <div className="mt-6 flex-1 rounded-2xl border border-green-400/15 bg-[#0B1028] p-5 shadow-xl">

    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-green-400/20 bg-green-400/10 text-2xl font-bold text-green-400">
      ✓
    </div>

    <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-green-400">
      Candidatura
    </p>

    <h4 className="mt-2 text-lg font-bold text-white">
      Pilota scelto
    </h4>

    <p className="mt-3 text-sm leading-6 text-gray-400">
      Contatti e dettagli disponibili nella tua dashboard.
    </p>

    <div className="mt-5 rounded-xl border border-green-400/15 bg-green-400/[0.06] p-4">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-green-400">
        Stato
      </p>

      <div className="mt-2 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-green-400" />

        <p className="text-sm font-bold text-green-300">
          Pilota selezionato
        </p>
      </div>
    </div>

    <button
      type="button"
      onClick={handleClientAccount}
      className="mt-5 w-full rounded-xl bg-green-500 px-4 py-3 text-sm font-bold text-black transition hover:bg-green-400"
    >
      Crea account cliente
    </button>
  </div>
)}
          </article>
        ))}
      </div>

      {/* CHIUSURA */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Tre semplici passaggi per trovare il pilota adatto
          al servizio richiesto.
        </p>
      </div>
    </div>
  </section>
)
}