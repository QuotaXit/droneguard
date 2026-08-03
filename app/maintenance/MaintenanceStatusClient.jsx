"use client"

import {
  useCallback,
  useEffect,
  useState
} from "react"

function calculateRemaining(value) {
  if (!value) {
    return null
  }

  const endTimestamp =
    new Date(value).getTime()

  if (
    !Number.isFinite(endTimestamp)
  ) {
    return null
  }

  const difference =
    endTimestamp - Date.now()

  if (difference <= 0) {
    return "Controllo riapertura in corso..."
  }

  const totalMinutes =
    Math.ceil(
      difference / 60_000
    )

  const days =
    Math.floor(
      totalMinutes / 1440
    )

  const hours =
    Math.floor(
      (
        totalMinutes %
        1440
      ) / 60
    )

  const minutes =
    totalMinutes % 60

  const parts = []

  if (days > 0) {
    parts.push(
      `${days} ${days === 1 ? "giorno" : "giorni"}`
    )
  }

  if (hours > 0) {
    parts.push(
      `${hours} ${hours === 1 ? "ora" : "ore"}`
    )
  }

  if (
    minutes > 0 ||
    parts.length === 0
  ) {
    parts.push(
      `${minutes} ${
        minutes === 1
          ? "minuto"
          : "minuti"
      }`
    )
  }

  return parts.join(", ")
}

export default function MaintenanceStatusClient({
  maintenanceEndsAt
}) {
  const [checking, setChecking] =
    useState(false)

  const [remaining, setRemaining] =
    useState(() =>
      calculateRemaining(
        maintenanceEndsAt
      )
    )

  const checkPlatformStatus =
    useCallback(async () => {
      if (checking) {
        return
      }

      try {
        setChecking(true)

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

        if (!response.ok) {
          return
        }

        const data =
          await response.json()

        if (
          data?.success &&
          data?.status
            ?.maintenanceActive === false
        ) {
          window.location.replace("/")
        }
      } catch (error) {
        console.error(
          "[maintenance] Controllo stato non riuscito:",
          error
        )
      } finally {
        setChecking(false)
      }
    }, [checking])

  useEffect(() => {
    const remainingInterval =
      window.setInterval(() => {
        setRemaining(
          calculateRemaining(
            maintenanceEndsAt
          )
        )
      }, 30_000)

    const statusInterval =
      window.setInterval(() => {
        checkPlatformStatus()
      }, 30_000)

    return () => {
      window.clearInterval(
        remainingInterval
      )

      window.clearInterval(
        statusInterval
      )
    }
  }, [
    maintenanceEndsAt,
    checkPlatformStatus
  ])

  return (
    <div className="mt-8">
      {remaining && (
        <div className="mb-5 rounded-2xl border border-blue-400/20 bg-blue-400/5 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
            Tempo indicativo rimanente
          </p>

          <p className="mt-2 font-semibold text-blue-100">
            {remaining}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={
          checkPlatformStatus
        }
        disabled={checking}
        className="inline-flex min-w-52 items-center justify-center rounded-xl bg-green-500 px-6 py-3 font-bold text-black transition hover:bg-green-400 disabled:cursor-wait disabled:opacity-60"
      >
        {checking
          ? "Controllo in corso..."
          : "Controlla disponibilità"}
      </button>

      <p className="mt-4 text-sm leading-6 text-gray-500">
        Non è necessario aggiornare continuamente la pagina.
      </p>
    </div>
  )
}