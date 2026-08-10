"use client"

import {
  useCallback,
  useEffect,
  useRef,
  useState
} from "react"

import {
  Bell,
  CheckCheck,
  CircleAlert,
  CreditCard,
  FileCheck2,
  Loader2,
  ShieldCheck,
  Wrench
} from "lucide-react"

import {
  useRouter
} from "next/navigation"


function categoryIcon(
  category
) {
  if (
    category ===
    "certification"
  ) {
    return FileCheck2
  }

  if (
    category ===
    "insurance"
  ) {
    return ShieldCheck
  }

  if (
    category ===
    "payment"
  ) {
    return CreditCard
  }

  if (
    category ===
    "maintenance"
  ) {
    return Wrench
  }

  return CircleAlert
}


function formatRelativeDate(
  value
) {
  if (!value) {
    return ""
  }

  const time =
    new Date(
      value
    ).getTime()

  if (
    !Number.isFinite(
      time
    )
  ) {
    return ""
  }

  const difference =
    Date.now() -
    time

  const minutes =
    Math.max(
      0,
      Math.floor(
        difference /
        60_000
      )
    )

  if (
    minutes <
    1
  ) {
    return "Adesso"
  }

  if (
    minutes <
    60
  ) {
    return `${minutes} min fa`
  }

  const hours =
    Math.floor(
      minutes /
      60
    )

  if (
    hours <
    24
  ) {
    return `${hours} ${
      hours === 1
        ? "ora"
        : "ore"
    } fa`
  }

  const days =
    Math.floor(
      hours /
      24
    )

  if (
    days <=
    7
  ) {
    return `${days} ${
      days === 1
        ? "giorno"
        : "giorni"
    } fa`
  }

  return new Intl
    .DateTimeFormat(
      "it-IT",
      {
        day:
          "2-digit",

        month:
          "2-digit",

        year:
          "numeric",

        timeZone:
          "Europe/Rome"
      }
    )
    .format(
      new Date(
        value
      )
    )
}


export default function TeamNotificationBell() {

  const router =
    useRouter()

  const wrapperRef =
    useRef(null)

  const [
    open,
    setOpen
  ] = useState(false)

  const [
    notifications,
    setNotifications
  ] = useState([])

  const [
    unreadCount,
    setUnreadCount
  ] = useState(0)

  const [
    loading,
    setLoading
  ] = useState(true)

  const [
    markingAll,
    setMarkingAll
  ] = useState(false)


  const loadNotifications =
    useCallback(
      async (
        silent = false
      ) => {

        if (!silent) {
          setLoading(
            true
          )
        }

        try {

          const response =
            await fetch(
              "/api/admin/team-notifications",
              {
                method:
                  "GET",

                cache:
                  "no-store"
              }
            )


          const result =
            await response
              .json()


          if (
            !response.ok ||
            result
              ?.success !==
              true
          ) {
            throw new Error(
              result?.error ||
              "Errore notifiche"
            )
          }


          setNotifications(
            Array.isArray(
              result
                .notifications
            )
              ? result
                  .notifications
              : []
          )


          setUnreadCount(
            Number(
              result
                .unreadCount ||
              0
            )
          )

        } catch (error) {

          console.error(
            "[team-notification-bell] caricamento fallito:",
            error
          )

        } finally {

          if (!silent) {
            setLoading(
              false
            )
          }
        }
      },
      []
    )


  useEffect(
    () => {

      loadNotifications()

      /*
       * Aggiornamento automatico.
       * Per ora 30 secondi è abbastanza rapido
       * senza creare traffico inutile.
       */
      const timer =
        window
          .setInterval(
            () => {
              loadNotifications(
                true
              )
            },
            30_000
          )


      function handleFocus() {
        loadNotifications(
          true
        )
      }


      window.addEventListener(
        "focus",
        handleFocus
      )


      return () => {
        window.clearInterval(
          timer
        )

        window.removeEventListener(
          "focus",
          handleFocus
        )
      }

    },
    [
      loadNotifications
    ]
  )


  useEffect(
    () => {

      function handleOutside(
        event
      ) {
        if (
          wrapperRef
            .current &&
          !wrapperRef
            .current
            .contains(
              event.target
            )
        ) {
          setOpen(
            false
          )
        }
      }


      document
        .addEventListener(
          "mousedown",
          handleOutside
        )


      return () => {
        document
          .removeEventListener(
            "mousedown",
            handleOutside
          )
      }

    },
    []
  )


  async function markRead(
    notification
  ) {

    if (
      !notification ||
      notification.read
    ) {
      return
    }


    /*
     * Aggiornamento visivo immediato.
     */
    setNotifications(
      (
        current
      ) =>
        current.map(
          (item) =>
            item.id ===
            notification.id
              ? {
                  ...item,
                  read:
                    true
                }
              : item
        )
    )


    setUnreadCount(
      (
        current
      ) =>
        Math.max(
          0,
          current - 1
        )
    )


    try {

      const response =
        await fetch(
          "/api/admin/team-notifications",
          {
            method:
              "PATCH",

            headers: {
              "Content-Type":
                "application/json"
            },

            body:
              JSON.stringify({
                action:
                  "read",

                notificationId:
                  notification
                    .id
              })
          }
        )


      if (!response.ok) {
        throw new Error(
          "Aggiornamento lettura fallito"
        )
      }

    } catch (error) {

      console.error(
        "[team-notification-bell] lettura fallita:",
        error
      )

      /*
       * Ricarichiamo lo stato reale.
       */
      await loadNotifications(
        true
      )
    }
  }


  async function openNotification(
    notification
  ) {

    await markRead(
      notification
    )

    setOpen(
      false
    )


    if (
      notification
        ?.href
    ) {
      router.push(
        notification
          .href
      )
    }
  }


  async function markAllRead() {

    if (
      markingAll ||
      unreadCount ===
        0
    ) {
      return
    }


    try {

      setMarkingAll(
        true
      )


      const response =
        await fetch(
          "/api/admin/team-notifications",
          {
            method:
              "PATCH",

            headers: {
              "Content-Type":
                "application/json"
            },

            body:
              JSON.stringify({
                action:
                  "read_all"
              })
          }
        )


      const result =
        await response
          .json()


      if (
        !response.ok ||
        result
          ?.success !==
          true
      ) {
        throw new Error(
          result?.error ||
          "Impossibile aggiornare le notifiche."
        )
      }


      setNotifications(
        (
          current
        ) =>
          current.map(
            (item) => ({
              ...item,
              read:
                true
            })
          )
      )


      setUnreadCount(
        0
      )

    } catch (error) {

      console.error(
        "[team-notification-bell] segna tutte lette fallito:",
        error
      )

      await loadNotifications(
        true
      )

    } finally {

      setMarkingAll(
        false
      )
    }
  }


  return (
    <div
      ref={
        wrapperRef
      }
      className="relative"
    >

      <button
        type="button"
        onClick={() =>
          setOpen(
            (
              current
            ) =>
              !current
          )
        }
        aria-label="Notifiche Team"
        className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-green-400/30 hover:bg-green-400/10 hover:text-green-300"
      >

        <Bell
          size={17}
        />


        {unreadCount >
          0 && (

          <span className="absolute -right-1.5 -top-1.5 flex min-h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#0B1028] bg-red-500 px-1 text-[10px] font-black leading-none text-white">

            {unreadCount >
            99
              ? "99+"
              : unreadCount}

          </span>
        )}

      </button>


      {open && (

        <div className="absolute right-0 top-12 z-[100] w-[min(390px,calc(100vw-24px))] overflow-hidden rounded-2xl border border-white/10 bg-[#0B1028] shadow-2xl shadow-black/50">

          <div className="flex items-center justify-between gap-4 border-b border-white/10 p-4">

            <div>

              <p className="font-bold text-white">
                Notifiche Team
              </p>

              <p className="mt-1 text-xs text-gray-500">
                {unreadCount ===
                0
                  ? "Nessuna nuova notifica"
                  : `${unreadCount} ${
                      unreadCount ===
                      1
                        ? "da leggere"
                        : "da leggere"
                    }`}
              </p>

            </div>


            {unreadCount >
              0 && (

              <button
                type="button"
                disabled={
                  markingAll
                }
                onClick={
                  markAllRead
                }
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-400 transition hover:text-green-300 disabled:opacity-50"
              >

                {markingAll ? (
                  <Loader2
                    size={14}
                    className="animate-spin"
                  />
                ) : (
                  <CheckCheck
                    size={14}
                  />
                )}

                Segna lette

              </button>
            )}

          </div>


          <div className="max-h-[520px] overflow-y-auto">

            {loading ? (

              <div className="flex items-center justify-center gap-2 p-8 text-sm text-gray-500">

                <Loader2
                  size={17}
                  className="animate-spin"
                />

                Caricamento...

              </div>

            ) : notifications
                .length ===
              0 ? (

              <div className="p-8 text-center">

                <Bell
                  size={28}
                  className="mx-auto text-gray-600"
                />

                <p className="mt-3 text-sm font-semibold text-gray-300">
                  Nessuna notifica
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-600">
                  Qui compariranno gli eventi importanti del Centro Operativo.
                </p>

              </div>

            ) : (

              <div className="divide-y divide-white/[0.07]">

                {notifications.map(
                  (
                    notification
                  ) => {

                    const Icon =
                      categoryIcon(
                        notification
                          .category
                      )


                    return (
                      <button
                        key={
                          notification
                            .id
                        }
                        type="button"
                        onClick={() =>
                          openNotification(
                            notification
                          )
                        }
                        className={`flex w-full gap-3 p-4 text-left transition hover:bg-white/[0.05] ${
                          notification.read
                            ? ""
                            : "bg-green-400/[0.04]"
                        }`}
                      >

                        <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${
                          notification.read
                            ? "border-white/10 bg-white/5 text-gray-500"
                            : "border-green-400/20 bg-green-400/10 text-green-300"
                        }`}>

                          <Icon
                            size={17}
                          />

                        </div>


                        <div className="min-w-0 flex-1">

                          <div className="flex items-start gap-2">

                            <p className={`min-w-0 flex-1 text-sm ${
                              notification.read
                                ? "font-medium text-gray-300"
                                : "font-bold text-white"
                            }`}>

                              {
                                notification
                                  .title
                              }

                            </p>


                            {!notification
                                .read && (

                              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-400" />

                            )}

                          </div>


                          {notification
                              .message && (

                            <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">

                              {
                                notification
                                  .message
                              }

                            </p>
                          )}


                          <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.12em] text-gray-600">

                            {formatRelativeDate(
                              notification
                                .createdAt
                            )}

                          </p>

                        </div>

                      </button>
                    )
                  }
                )}

              </div>
            )}

          </div>

        </div>
      )}

    </div>
  )
}