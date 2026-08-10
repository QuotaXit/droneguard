"use client"

import {
  useEffect,
  useState
} from "react"

import {
  createClient
} from "@supabase/supabase-js"

const supabaseUrl =
  process.env
    .NEXT_PUBLIC_SUPABASE_URL

const supabaseKey =
  process.env
    .NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env
    .NEXT_PUBLIC_SUPABASE_ANON_KEY

/*
 * Client separato dedicato solamente
 * alla lettura della Presence.
 *
 * Non usa la sessione dell'utente
 * e non viene contato tra gli online
 * perché non esegue track().
 */
const presenceSupabase =
  supabaseUrl &&
  supabaseKey
    ? createClient(
        supabaseUrl,
        supabaseKey,
        {
          auth: {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false
          }
        }
      )
    : null


/*
 * Stato condiviso tra tutti gli
 * OnlineNowBadge presenti nel pannello.
 */
let sharedChannel = null
let sharedOnline = 0
let sharedConnected = false

const listeners =
  new Set()


function getOnlineCount(
  channel
) {
  if (!channel) {
    return 0
  }

  const state =
    channel.presenceState() ||
    {}

  return Object
    .values(state)
    .reduce(
      (
        total,
        presences
      ) =>
        total +
        (
          Array.isArray(
            presences
          )
            ? presences.length
            : 0
        ),
      0
    )
}


function notifyListeners() {
  listeners.forEach(
    (listener) => {
      listener({
        online:
          sharedOnline,

        connected:
          sharedConnected
      })
    }
  )
}


function ensurePresenceChannel() {
  /*
   * Esiste già:
   * NON aggiungere altri callback
   * e NON chiamare subscribe di nuovo.
   */
  if (sharedChannel) {
    return sharedChannel
  }

  if (!presenceSupabase) {
    return null
  }

  const channel =
    presenceSupabase
      .channel(
        "droneguard-site-online"
      )
      .on(
        "presence",
        {
          event: "sync"
        },
        () => {
          sharedOnline =
            getOnlineCount(
              channel
            )

          notifyListeners()
        }
      )

  /*
   * Salviamo il riferimento PRIMA
   * della subscribe per impedire
   * una seconda inizializzazione.
   */
  sharedChannel =
    channel

  channel.subscribe(
    (status) => {
      sharedConnected =
        status ===
        "SUBSCRIBED"

      if (
        status ===
        "SUBSCRIBED"
      ) {
        sharedOnline =
          getOnlineCount(
            channel
          )
      }

      if (
        status ===
          "CHANNEL_ERROR" ||
        status ===
          "TIMED_OUT" ||
        status ===
          "CLOSED"
      ) {
        sharedConnected =
          false
      }

      notifyListeners()
    }
  )

  return channel
}


export default function OnlineNowBadge({
  large = false
}) {
  const [
    online,
    setOnline
  ] = useState(
    sharedOnline
  )

  const [
    connected,
    setConnected
  ] = useState(
    sharedConnected
  )

  useEffect(() => {
    const listener = ({
      online:
        nextOnline,

      connected:
        nextConnected
    }) => {
      setOnline(
        nextOnline
      )

      setConnected(
        nextConnected
      )
    }

    listeners.add(
      listener
    )

    /*
     * Sincronizza immediatamente
     * questo badge con lo stato
     * già esistente.
     */
    listener({
      online:
        sharedOnline,

      connected:
        sharedConnected
    })

    ensurePresenceChannel()

    return () => {
      /*
       * Rimuoviamo solamente
       * questo componente dai listener.
       *
       * NON rimuoviamo il canale perché
       * potrebbe essere utilizzato
       * dall'altro badge.
       */
      listeners.delete(
        listener
      )
    }
  }, [])


  if (large) {
    return (
      <div className="h-full rounded-2xl border border-green-400/20 bg-green-400/10 p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-green-300">
            Online ora
          </p>

          <span
            className={`h-2.5 w-2.5 rounded-full ${
              connected
                ? "bg-green-400"
                : "bg-gray-500"
            }`}
          />
        </div>

        <p className="mt-3 text-3xl font-black sm:text-4xl">
          {online}
        </p>

        <p className="mt-3 text-sm leading-6 text-green-200/60">
          Connessioni attive sul sito in questo momento.
        </p>
      </div>
    )
  }


  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-semibold text-green-300">
      <span
        className={`h-2 w-2 rounded-full ${
          connected
            ? "bg-green-400"
            : "bg-gray-500"
        }`}
      />

      {online} online
    </div>
  )
}