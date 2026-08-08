import {
  createServerSupabaseClient
} from "@/lib/supabase/server"

import {
  consumeRateLimit
} from "@/lib/security/rate-limit"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const MIN_QUERY_LENGTH = 3
const MAX_QUERY_LENGTH = 120
const PROVIDER_TIMEOUT_MS = 5000

function jsonError(
  message,
  status = 400,
  extraHeaders = {}
) {
  return Response.json(
    {
      success: false,
      error: message
    },
    {
      status,
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0",

        ...extraHeaders
      }
    }
  )
}

function jsonResults(results) {
  return Response.json(
    results,
    {
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0"
      }
    }
  )
}

function normalizeQuery(value) {
  return String(value || "")
    .replace(
      /[\u0000-\u001F\u007F]/g,
      " "
    )
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_QUERY_LENGTH)
}

function sanitizeResults(data) {
  if (!Array.isArray(data)) {
    return null
  }

  return data
    .slice(0, 5)
    .map((item) => {
      const placeId =
        item?.place_id

      const displayName =
        String(
          item?.display_name || ""
        )
          .trim()
          .slice(0, 500)

      if (
        placeId === undefined ||
        placeId === null ||
        !displayName
      ) {
        return null
      }

      return {
        place_id:
          placeId,

        display_name:
          displayName
      }
    })
    .filter(Boolean)
}

export async function GET(request) {
  try {
    const supabase =
      await createServerSupabaseClient()

    const {
      data: {
        user
      },
      error: userError
    } =
      await supabase.auth.getUser()

    if (
      userError ||
      !user
    ) {
      return jsonError(
        "Devi effettuare l'accesso.",
        401
      )
    }

    const query =
      normalizeQuery(
        new URL(
          request.url
        ).searchParams.get("q")
      )

    if (
      query.length <
      MIN_QUERY_LENGTH
    ) {
      return jsonResults([])
    }

    const userRateLimit =
      await consumeRateLimit({
        key:
          `address-search:${user.id}`,

        limit:
          20,

        windowSeconds:
          5 * 60
      })

    if (!userRateLimit.success) {
      return jsonError(
        "Servizio di ricerca temporaneamente non disponibile.",
        503
      )
    }

    if (!userRateLimit.allowed) {
      const retryAfter =
        Math.max(
          1,
          userRateLimit
            .retryAfterSeconds
        )

      return jsonError(
        "Hai effettuato troppe ricerche. Riprova più tardi.",
        429,
        {
          "Retry-After":
            String(retryAfter)
        }
      )
    }

    /*
     * Limite globale verso il servizio pubblico
     * Nominatim: massimo una richiesta al secondo
     * per l'intera applicazione.
     */
    const providerRateLimit =
      await consumeRateLimit({
        key:
          "nominatim:global",

        limit:
          1,

        windowSeconds:
          1
      })

    if (!providerRateLimit.success) {
      return jsonError(
        "Servizio di ricerca temporaneamente non disponibile.",
        503
      )
    }

    if (!providerRateLimit.allowed) {
      const retryAfter =
        Math.max(
          1,
          providerRateLimit
            .retryAfterSeconds
        )

      return jsonError(
        "La ricerca indirizzi è momentaneamente occupata. Riprova tra un secondo.",
        429,
        {
          "Retry-After":
            String(retryAfter)
        }
      )
    }

    const providerUrl =
      new URL(
        "https://nominatim.openstreetmap.org/search"
      )

    providerUrl.searchParams.set(
      "q",
      query
    )

    providerUrl.searchParams.set(
      "format",
      "jsonv2"
    )

    providerUrl.searchParams.set(
      "addressdetails",
      "1"
    )

    providerUrl.searchParams.set(
      "limit",
      "5"
    )

    providerUrl.searchParams.set(
      "countrycodes",
      "it"
    )

    let response

    try {
      response =
        await fetch(
          providerUrl,
          {
            headers: {
              "User-Agent":
                "DroneGuard/1.0 (https://www.droneguard.it)",

              "Accept":
                "application/json",

              "Accept-Language":
                "it"
            },

            /*
             * Cache server-side Next.js:
             * evita richieste ripetute uguali
             * verso Nominatim.
             */
            cache:
              "force-cache",

            next: {
              revalidate:
                24 * 60 * 60
            },

            signal:
              AbortSignal.timeout(
                PROVIDER_TIMEOUT_MS
              )
          }
        )
    } catch (error) {
      console.error(
        "[address-search] Provider non raggiungibile:",
        error
      )

      return jsonError(
        "Servizio di ricerca indirizzi temporaneamente non disponibile.",
        502
      )
    }

    if (!response.ok) {
      console.error(
        "[address-search] Provider HTTP error:",
        response.status
      )

      return jsonError(
        "Servizio di ricerca indirizzi temporaneamente non disponibile.",
        502
      )
    }

    let data

    try {
      data =
        await response.json()
    } catch {
      return jsonError(
        "Risposta del servizio indirizzi non valida.",
        502
      )
    }

    const results =
      sanitizeResults(data)

    if (!results) {
      return jsonError(
        "Risposta del servizio indirizzi non valida.",
        502
      )
    }

    return jsonResults(
      results
    )
  } catch (error) {
    console.error(
      "[address-search] Errore imprevisto:",
      error
    )

    return jsonError(
      "Errore durante la ricerca dell'indirizzo.",
      500
    )
  }
}
