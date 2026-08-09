"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/client"
import {
  BadgeCheck,
  CreditCard,
  MailCheck,
  ShieldCheck,
  Sparkles
} from "lucide-react"

function normalizeRole(role) {
  return role
    ? String(role).trim().toLowerCase()
    : ""
}

const PILOT_PACKAGES = [
  {
    id: "pilot_small",
    name: "Ricarica",
    credits: 5,
    price: "€4",
    description: "Per una candidatura veloce.",
    button: "Acquista",
    featured: false
  },
  {
    id: "pilot_standard",
    name: "Standard",
    credits: 40,
    price: "€9",
    description: "Più libertà per candidarti ai lavori.",
    button: "Acquista",
    featured: false
  },
  {
    id: "pilot_best",
    name: "Pro",
    credits: 100,
    price: "€19",
    description: "Il pacchetto con più crediti.",
    button: "Migliore scelta",
    featured: true
  }
]

export default function PricingPage() {
  const [credits, setCredits] = useState(0)
  const [userData, setUserData] = useState(null)
  const [checkoutLoading, setCheckoutLoading] = useState(null)
  const [emailVerified, setEmailVerified] = useState(false)

  const userRole = normalizeRole(
    userData?.role
  )

  const isPilot =
    userRole === "pilot" ||
    userRole === "pilota"

  useEffect(() => {
    const loadData = async () => {
      const {
        data: { user }
      } =
        await supabase.auth
          .getUser()

      setEmailVerified(
        Boolean(
          user?.email_confirmed_at
        )
      )

      if (!user) {
        return
      }

      const {
        data,
        error
      } =
        await supabase
          .from("users")
          .select(
            "id,role,credits"
          )
          .eq(
            "id",
            user.id
          )
          .maybeSingle()

      if (error) {
        console.error(
          error
        )

        return
      }

      if (data) {
        setUserData(data)

        setCredits(
          Number(
            data.credits || 0
          )
        )
      }
    }

    loadData()
  }, [])


  const buyCredits =
    async (packageId) => {
      try {
        setCheckoutLoading(
          packageId
        )

        const {
          data: { user }
        } =
          await supabase.auth
            .getUser()

        if (!user) {
          toast.error(
            "Devi accedere per acquistare crediti"
          )

          return
        }

        const res =
          await fetch(
            "/api/create-checkout-session",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json"
              },

              body:
                JSON.stringify({
                  packageId
                })
            }
          )

        const data =
          await res.json()

        if (!res.ok) {
          toast.error(
            data.error ||
              "Errore pagamento"
          )

          return
        }

        window.location.href =
          data.url
      } catch (error) {
        console.error(
          error
        )

        toast.error(
          "Errore imprevisto durante il pagamento"
        )
      } finally {
        setCheckoutLoading(
          null
        )
      }
    }


  const sendVerificationEmail =
    async () => {
      const {
        data: { user }
      } =
        await supabase.auth
          .getUser()

      if (!user?.email) {
        toast.error(
          "Email non trovata"
        )

        return
      }

      const {
        error
      } =
        await supabase.auth
          .resend({
            type: "signup",
            email:
              user.email
          })

      if (error) {
        console.error(
          error
        )

        toast.error(
          "Errore invio email"
        )

        return
      }

      toast.success(
        "Email di conferma inviata ✅"
      )
    }


  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">

        <div className="mx-auto w-full max-w-6xl">

          <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300">
                Crediti DroneGuard
              </p>

              <h1 className="mt-1 text-3xl font-black sm:text-4xl lg:text-5xl">
                Scegli il tuo pacchetto
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                Usa i crediti per candidarti ai lavori pubblicati dai clienti.
              </p>
            </div>


            <div className="grid w-full gap-3 sm:grid-cols-3 lg:w-auto lg:min-w-[620px]">

              <div className="rounded-2xl border border-green-400/15 bg-green-400/[0.05] px-4 py-3">

                <div className="flex items-center justify-between gap-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-green-300/70">
                    Il tuo saldo
                  </p>

                  <CreditCard
                    size={16}
                    className="text-green-300"
                  />
                </div>

                <p className="mt-2 text-2xl font-black text-green-300">
                  {credits}
                  <span className="ml-1 text-sm font-semibold text-green-300/60">
                    crediti
                  </span>
                </p>

              </div>


              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] px-4 py-3">

                <div className="flex items-center justify-between gap-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-300/70">
                    Una candidatura
                  </p>

                  <Sparkles
                    size={16}
                    className="text-cyan-300"
                  />
                </div>

                <p className="mt-2 text-2xl font-black text-white">
                  5
                  <span className="ml-1 text-sm font-semibold text-gray-500">
                    crediti
                  </span>
                </p>

              </div>


              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">

                <div className="flex items-center justify-between gap-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">
                    Account
                  </p>

                  {emailVerified ? (
                    <MailCheck
                      size={16}
                      className="text-green-300"
                    />
                  ) : (
                    <ShieldCheck
                      size={16}
                      className="text-amber-300"
                    />
                  )}
                </div>

                <p
                  className={`mt-2 text-sm font-black ${
                    emailVerified
                      ? "text-green-300"
                      : "text-amber-200"
                  }`}
                >
                  {emailVerified
                    ? "Email verificata"
                    : "Email da verificare"}
                </p>

              </div>

            </div>

          </div>


          {!emailVerified && (
            <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="font-bold text-amber-200">
                  Verifica la tua email
                </p>

                <p className="mt-1 text-sm text-amber-100/60">
                  Completa la verifica per mantenere il tuo account aggiornato.
                </p>
              </div>

              <button
                type="button"
                onClick={
                  sendVerificationEmail
                }
                className="shrink-0 rounded-xl border border-amber-300/20 bg-amber-300/10 px-4 py-2.5 text-sm font-bold text-amber-100 transition hover:bg-amber-300/15"
              >
                Reinvia email
              </button>

            </div>
          )}


          <section className="rounded-3xl border border-white/10 bg-[#140a3a] p-4 sm:p-6">

            <div className="mb-5 flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-300">
                  Pacchetti pilota
                </p>

                <h2 className="mt-1 text-xl font-black sm:text-2xl">
                  Ricarica crediti
                </h2>
              </div>

              <p className="text-xs text-gray-500">
                Nessun abbonamento • Acquisto singolo
              </p>

            </div>


            <div className="grid gap-4 md:grid-cols-3">

              {PILOT_PACKAGES.map(
                (creditPackage) => (

                  <article
                    key={
                      creditPackage.id
                    }
                    className={`relative flex flex-col rounded-3xl border p-5 transition sm:p-6 ${
                      creditPackage.featured
                        ? "border-yellow-400/35 bg-yellow-400/[0.05] shadow-[0_0_40px_rgba(250,204,21,0.06)]"
                        : "border-white/10 bg-black/20 hover:border-white/20"
                    }`}
                  >

                    {creditPackage.featured && (
                      <span className="absolute right-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-black">
                        Migliore scelta
                      </span>
                    )}


                    <div>
                      <p
                        className={`text-xs font-bold uppercase tracking-[0.16em] ${
                          creditPackage.featured
                            ? "text-yellow-300"
                            : "text-gray-500"
                        }`}
                      >
                        {creditPackage.name}
                      </p>

                      <div className="mt-4 flex items-end gap-2">

                        <p className="text-4xl font-black text-white">
                          {creditPackage.price}
                        </p>

                        <span className="pb-1 text-xs text-gray-500">
                          una tantum
                        </span>

                      </div>


                      <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">

                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">
                          Crediti inclusi
                        </p>

                        <p className="mt-1 text-2xl font-black text-green-300">
                          {creditPackage.credits}
                        </p>

                      </div>


                      <p className="mt-4 min-h-[44px] text-sm leading-6 text-gray-400">
                        {creditPackage.description}
                      </p>
                    </div>


                    <button
                      type="button"
                      onClick={() =>
                        buyCredits(
                          creditPackage.id
                        )
                      }
                      disabled={
                        checkoutLoading ===
                        creditPackage.id
                      }
                      className={`mt-6 w-full rounded-xl px-4 py-3.5 text-sm font-black transition disabled:cursor-not-allowed disabled:opacity-50 ${
                        creditPackage.featured
                          ? "bg-yellow-400 text-black hover:bg-yellow-300"
                          : "bg-green-500 text-black hover:bg-green-400"
                      }`}
                    >
                      {checkoutLoading ===
                      creditPackage.id
                        ? "Apertura pagamento..."
                        : creditPackage.button}
                    </button>

                  </article>
                )
              )}

            </div>

          </section>


          <div className="mt-5 grid gap-3 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <BadgeCheck
                size={18}
                className="text-green-300"
              />

              <p className="mt-3 text-sm font-bold text-white">
                Crediti sul tuo account
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Il saldo viene associato al tuo profilo DroneGuard.
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <CreditCard
                size={18}
                className="text-cyan-300"
              />

              <p className="mt-3 text-sm font-bold text-white">
                Checkout dedicato
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Il pagamento viene aperto tramite il checkout configurato per DroneGuard.
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <ShieldCheck
                size={18}
                className="text-purple-300"
              />

              <p className="mt-3 text-sm font-bold text-white">
                Nessun rinnovo automatico
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                I pacchetti crediti sono acquisti singoli.
              </p>
            </div>

          </div>


          {!isPilot && userData && (
            <div className="mt-5 rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] px-4 py-3 text-sm text-amber-100/70">
              Questa sezione mostra i pacchetti dedicati ai profili pilota.
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
