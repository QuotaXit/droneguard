"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const CONSENT_VERSION = "2.0"
const STORAGE_KEY = "droneguard-cookie-consent"
const OPEN_EVENT = "open-cookie-preferences"

export const CONSENT_UPDATED_EVENT =
  "droneguard-cookie-consent-updated"

const META_PIXEL_ENABLED = Boolean(
  process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim()
)

function addSixMonths(value) {
  const result = new Date(value)
  const originalDay = result.getDate()

  result.setDate(1)
  result.setMonth(result.getMonth() + 6)

  const lastDay = new Date(
    result.getFullYear(),
    result.getMonth() + 1,
    0
  ).getDate()

  result.setDate(
    Math.min(originalDay, lastDay)
  )

  return result
}

function getSavedConsent() {
  if (typeof window === "undefined") {
    return null
  }

  try {
    const saved =
      window.localStorage.getItem(
        STORAGE_KEY
      )

    return saved
      ? JSON.parse(saved)
      : null
  } catch {
    return null
  }
}

function isConsentValid(consent) {
  if (
    !consent ||
    consent.version !== CONSENT_VERSION
  ) {
    return false
  }

  const createdAt =
    new Date(consent.createdAt)

  if (
    Number.isNaN(
      createdAt.getTime()
    )
  ) {
    return false
  }

  const expiresAt =
    consent.expiresAt
      ? new Date(consent.expiresAt)
      : addSixMonths(createdAt)

  return (
    !Number.isNaN(
      expiresAt.getTime()
    ) &&
    expiresAt.getTime() > Date.now()
  )
}

export function hasCookieConsent(
  category
) {
  if (category === "necessary") {
    return true
  }

  if (
    typeof window === "undefined"
  ) {
    return false
  }

  /*
   * Nel progetto attuale non è presente
   * un servizio analytics.
   */
  if (category === "analytics") {
    return false
  }

  /*
   * Il consenso marketing può essere
   * valido soltanto quando è configurato
   * un Meta Pixel.
   */
  if (
    category === "marketing" &&
    !META_PIXEL_ENABLED
  ) {
    return false
  }

  const consent =
    getSavedConsent()

  if (!isConsentValid(consent)) {
    return false
  }

  return (
    consent.preferences?.[
      category
    ] === true
  )
}

export function openCookiePreferences() {
  if (
    typeof window === "undefined"
  ) {
    return
  }

  window.dispatchEvent(
    new Event(OPEN_EVENT)
  )
}

export default function CookieBanner() {
  const [
    showBanner,
    setShowBanner,
  ] = useState(false)

  const [
    showPreferences,
    setShowPreferences,
  ] = useState(false)

  const [
    marketing,
    setMarketing,
  ] = useState(false)

  useEffect(() => {
    const saved =
      getSavedConsent()

    if (!isConsentValid(saved)) {
      try {
        window.localStorage.removeItem(
          STORAGE_KEY
        )
      } catch {
        /*
         * Il browser potrebbe impedire
         * l'accesso al localStorage.
         */
      }

      setShowBanner(true)
    } else {
      setMarketing(
        META_PIXEL_ENABLED &&
          saved.preferences
            ?.marketing === true
      )
    }

    const handleOpenPreferences =
      () => {
        const current =
          getSavedConsent()

        setMarketing(
          META_PIXEL_ENABLED &&
            isConsentValid(current) &&
            current.preferences
              ?.marketing === true
        )

        setShowPreferences(true)
        setShowBanner(true)
      }

    window.addEventListener(
      OPEN_EVENT,
      handleOpenPreferences
    )

    return () => {
      window.removeEventListener(
        OPEN_EVENT,
        handleOpenPreferences
      )
    }
  }, [])

  const saveConsent = ({
    marketingAllowed,
    decision,
  }) => {
    const createdAt =
      new Date()

    const consent = {
      version: CONSENT_VERSION,
      website: "DroneGuard",

      createdAt:
        createdAt.toISOString(),

      expiresAt:
        addSixMonths(
          createdAt
        ).toISOString(),

      necessary: true,

      decision,

      preferences: {
        /*
         * Nessun servizio analytics
         * risulta installato.
         */
        analytics: false,

        marketing:
          META_PIXEL_ENABLED &&
          marketingAllowed === true,
      },
    }

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(consent)
      )
    } catch {
      /*
       * La scelta rimane applicata
       * nella sessione corrente, ma
       * potrebbe essere richiesta
       * nuovamente al prossimo accesso.
       */
    }

    window.dispatchEvent(
      new CustomEvent(
        CONSENT_UPDATED_EVENT,
        {
          detail: consent,
        }
      )
    )

    setMarketing(
      consent.preferences.marketing
    )

    setShowPreferences(false)
    setShowBanner(false)
  }

  const rejectAll = () => {
    saveConsent({
      marketingAllowed: false,
      decision: "rejected",
    })
  }

  const acceptAll = () => {
    saveConsent({
      marketingAllowed: true,
      decision: "accepted-all",
    })
  }

  const savePreferences = () => {
    saveConsent({
      marketingAllowed: marketing,
      decision: "custom",
    })
  }

  const acknowledgeTechnicalOnly =
    () => {
      saveConsent({
        marketingAllowed: false,
        decision: "technical-only",
      })
    }

  if (!showBanner) {
    return null
  }

  const choiceButtonClass = `
    rounded-full
    border
    border-white/20
    bg-white/10
    px-5
    py-2
    text-sm
    font-semibold
    text-white
    transition
    hover:bg-white/20
    focus:outline-none
    focus:ring-2
    focus:ring-green-400
    focus:ring-offset-2
    focus:ring-offset-[#080C22]
  `

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-5">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
        className="
          mx-auto
          max-w-5xl
          space-y-4
          rounded-3xl
          border
          border-white/15
          bg-[#080C22]/95
          p-5
          text-white
          shadow-2xl
          shadow-black/40
          backdrop-blur-xl
          sm:p-6
        "
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              id="cookie-banner-title"
              className="text-lg font-bold sm:text-xl"
            >
              Privacy e gestione cookie
            </h3>

            {META_PIXEL_ENABLED ? (
              <p
                id="cookie-banner-description"
                className="mt-2 text-sm leading-6 text-gray-300"
              >
                DroneGuard utilizza cookie
                tecnici e memoria locale
                necessari al funzionamento
                del sito. Con il tuo
                consenso può utilizzare
                Meta Pixel per misurare le
                visite provenienti dalle
                campagne pubblicitarie.
                Meta Pixel non viene
                caricato prima della tua
                scelta.
              </p>
            ) : (
              <p
                id="cookie-banner-description"
                className="mt-2 text-sm leading-6 text-gray-300"
              >
                DroneGuard utilizza soltanto
                cookie tecnici e memoria
                locale necessari per
                autenticazione, sicurezza,
                sessione e salvataggio delle
                preferenze. Nella
                configurazione attuale non
                vengono attivati strumenti
                statistici o pubblicitari.
              </p>
            )}

            <p className="mt-2 text-xs leading-5 text-gray-400">
              {META_PIXEL_ENABLED
                ? `Puoi accettare, rifiutare
                   o personalizzare la scelta.
                   Potrai modificarla in
                   qualsiasi momento dal
                   footer. Chiudendo con la X
                   rifiuterai Meta Pixel.`
                : `Gli strumenti tecnici
                   necessari non possono
                   essere disattivati dal
                   banner.`}
            </p>

            <p className="mt-2 text-xs leading-5 text-gray-400">
              Leggi la nostra{" "}
              <Link
                href="/privacy-policy"
                className="
                  font-semibold
                  text-green-400
                  underline
                  underline-offset-4
                  hover:text-green-300
                "
              >
                Privacy Policy
              </Link>{" "}
              e la{" "}
              <Link
                href="/cookie-policy"
                className="
                  font-semibold
                  text-green-400
                  underline
                  underline-offset-4
                  hover:text-green-300
                "
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>

          <button
            type="button"
            onClick={
              META_PIXEL_ENABLED
                ? rejectAll
                : acknowledgeTechnicalOnly
            }
            aria-label={
              META_PIXEL_ENABLED
                ? "Chiudi e rifiuta Meta Pixel"
                : "Chiudi l'avviso"
            }
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              text-lg
              text-white
              transition
              hover:bg-white/10
              focus:outline-none
              focus:ring-2
              focus:ring-green-400
            "
          >
            ×
          </button>
        </div>

        {(
          showPreferences ||
          !META_PIXEL_ENABLED
        ) && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h4 className="text-base font-semibold">
              Preferenze cookie
            </h4>

            <div className="mt-4 space-y-4 text-sm">
              <div className="
                flex
                items-start
                justify-between
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-[#080C22]
                p-4
              ">
                <div>
                  <p className="font-medium text-white">
                    Cookie tecnici necessari
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-400">
                    Servono per
                    autenticazione,
                    sicurezza, sessione,
                    salvataggio delle
                    preferenze e funzioni
                    essenziali. Non possono
                    essere disattivati dal
                    banner.
                  </p>
                </div>

                <span className="
                  shrink-0
                  rounded-full
                  bg-green-500/20
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-green-300
                ">
                  Sempre attivi
                </span>
              </div>

              {META_PIXEL_ENABLED && (
                <label className="
                  flex
                  cursor-pointer
                  items-start
                  justify-between
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#080C22]
                  p-4
                ">
                  <div>
                    <p className="font-medium text-white">
                      Misurazione
                      pubblicitaria Meta
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-400">
                      Meta Pixel può misurare
                      le visite e le azioni
                      provenienti dalle
                      campagne pubblicitarie
                      di DroneGuard. Viene
                      caricato soltanto dopo
                      il tuo consenso.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    name="cookie-marketing"
                    checked={marketing}
                    onChange={(event) =>
                      setMarketing(
                        event.target.checked
                      )
                    }
                    className="
                      mt-1
                      h-5
                      w-5
                      shrink-0
                      accent-green-500
                    "
                  />
                </label>
              )}
            </div>
          </div>
        )}

        {META_PIXEL_ENABLED ? (
          <div className="
            flex
            flex-col
            gap-2
            sm:flex-row
            sm:flex-wrap
            sm:justify-end
          ">
            <button
              type="button"
              onClick={rejectAll}
              className={choiceButtonClass}
            >
              Rifiuta tutto
            </button>

            <button
              type="button"
              onClick={() =>
                setShowPreferences(
                  (current) => !current
                )
              }
              aria-expanded={
                showPreferences
              }
              className={choiceButtonClass}
            >
              {showPreferences
                ? "Nascondi preferenze"
                : "Personalizza"}
            </button>

            {showPreferences ? (
              <button
                type="button"
                onClick={savePreferences}
                className={
                  choiceButtonClass
                }
              >
                Salva selezione
              </button>
            ) : (
              <button
                type="button"
                onClick={acceptAll}
                className={
                  choiceButtonClass
                }
              >
                Accetta tutto
              </button>
            )}
          </div>
        ) : (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={
                acknowledgeTechnicalOnly
              }
              className={
                choiceButtonClass
              }
            >
              Ho capito
            </button>
          </div>
        )}
      </div>
    </div>
  )
}