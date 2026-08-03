import { createServerClient } from "@supabase/ssr"
import { NextResponse } from "next/server"

const protectedPagePrefixes = [
  "/dashboard",
  "/dashboard-client",
  "/admin"
]

const protectedApiPrefixes = [
  "/api/admin",
  "/api/create-checkout-session",
  "/api/send-job-emails",
  "/api/certification-request"
]

/*
 * Percorsi che devono rimanere raggiungibili
 * anche durante la manutenzione globale.
 */
const maintenanceBypassPagePrefixes = [
  "/maintenance",
  "/admin",
  "/login",
  "/auth",
  "/account-suspended",
  "/forgot-password",
  "/reset-password"
]

const maintenanceBypassApiPrefixes = [
  "/api/admin",
  "/api/platform-status",
  "/api/stripe-webhook"
]

function startsWithAny(pathname, prefixes) {
  return prefixes.some(
    (prefix) =>
      pathname === prefix ||
      pathname.startsWith(`${prefix}/`)
  )
}

function copyResponseState(sourceResponse, targetResponse) {
  sourceResponse.cookies.getAll().forEach((cookie) => {
    targetResponse.cookies.set(
      cookie.name,
      cookie.value
    )
  })

  sourceResponse.headers.forEach((value, key) => {
    if (key.toLowerCase() !== "location") {
      targetResponse.headers.set(key, value)
    }
  })

  return targetResponse
}

export async function updateSession(request) {
  let supabaseResponse = NextResponse.next({
    request
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },

        setAll(cookiesToSet, headers = {}) {
          cookiesToSet.forEach(
            ({ name, value }) => {
              request.cookies.set(name, value)
            }
          )

          supabaseResponse = NextResponse.next({
            request
          })

          cookiesToSet.forEach(
            ({ name, value, options }) => {
              supabaseResponse.cookies.set(
                name,
                value,
                options
              )
            }
          )

          Object.entries(headers || {}).forEach(
            ([key, value]) => {
              supabaseResponse.headers.set(
                key,
                value
              )
            }
          )
        }
      }
    }
  )

  const pathname = request.nextUrl.pathname

  const isProtectedPage = startsWithAny(
    pathname,
    protectedPagePrefixes
  )

  const isProtectedApi = startsWithAny(
    pathname,
    protectedApiPrefixes
  )

  const isApiRequest =
    pathname.startsWith("/api/")

  const bypassesMaintenance =
    startsWithAny(
      pathname,
      maintenanceBypassPagePrefixes
    ) ||
    startsWithAny(
      pathname,
      maintenanceBypassApiPrefixes
    )

  /*
   * Verifica la manutenzione globale tramite
   * la funzione pubblica e sicura del database.
   *
   * In caso di errore il controllo è fail-open:
   * il sito continua a funzionare, evitando che
   * un problema temporaneo del database provochi
   * una manutenzione non richiesta.
   */
  if (!bypassesMaintenance) {
    const {
      data: platformStatus,
      error: platformStatusError
    } = await supabase
      .rpc(
        "get_public_platform_status"
      )
      .maybeSingle()

    if (platformStatusError) {
      console.error(
        "[proxy] Controllo manutenzione fallito:",
        platformStatusError
      )
    } else if (
      platformStatus?.maintenance_active
    ) {
      if (isApiRequest) {
        return copyResponseState(
          supabaseResponse,
          NextResponse.json(
            {
              success: false,

              error:
                platformStatus
                  .maintenance_message ||
                "DroneGuard è temporaneamente in manutenzione.",

              code:
                "PLATFORM_MAINTENANCE",

              maintenance: true
            },
            {
              status: 503,

              headers: {
                "Cache-Control":
                  "private, no-store, max-age=0",

                "Retry-After":
                  "300"
              }
            }
          )
        )
      }

      const maintenanceUrl =
        request.nextUrl.clone()

      maintenanceUrl.pathname =
        "/maintenance"

      maintenanceUrl.search = ""

      return copyResponseState(
        supabaseResponse,
        NextResponse.redirect(
          maintenanceUrl
        )
      )
    }
  }

  /*
   * Aggiorna e verifica la sessione.
   * Non usare getSession() per autorizzare.
   */
  const {
    data: { user },
    error: userError
  } = await supabase.auth.getUser()

  if (
    (isProtectedPage || isProtectedApi) &&
    (userError || !user)
  ) {
    if (isProtectedApi) {
      return copyResponseState(
        supabaseResponse,
        NextResponse.json(
          {
            success: false,
            error: "Devi effettuare l'accesso."
          },
          {
            status: 401
          }
        )
      )
    }

    const loginUrl = request.nextUrl.clone()

    loginUrl.pathname = "/login"
    loginUrl.search = ""
    loginUrl.searchParams.set(
      "redirectTo",
      pathname
    )

    return copyResponseState(
      supabaseResponse,
      NextResponse.redirect(loginUrl)
    )
  }

  /*
   * Controlla la sospensione solamente nelle
   * pagine e API che richiedono un account.
   */
  if (
    user &&
    (isProtectedPage || isProtectedApi)
  ) {
    const {
      data: profile,
      error: profileError
    } = await supabase
      .from("users")
      .select("banned")
      .eq("id", user.id)
      .maybeSingle()

    /*
     * Per sicurezza, un errore nel controllo
     * non deve consentire operazioni protette.
     */
    if (profileError || !profile) {
      console.error(
        "[proxy] Controllo profilo fallito:",
        profileError
      )

      if (isProtectedApi) {
        return copyResponseState(
          supabaseResponse,
          NextResponse.json(
            {
              success: false,
              error:
                "Impossibile verificare lo stato dell'account."
            },
            {
              status: 503
            }
          )
        )
      }

      return copyResponseState(
        supabaseResponse,
        new NextResponse(
          "Servizio temporaneamente non disponibile.",
          {
            status: 503
          }
        )
      )
    }

    if (profile.banned) {
      if (isProtectedApi) {
        return copyResponseState(
          supabaseResponse,
          NextResponse.json(
            {
              success: false,
              error:
                "Questo account è stato sospeso."
            },
            {
              status: 403
            }
          )
        )
      }

      const suspendedUrl =
        request.nextUrl.clone()

      suspendedUrl.pathname =
        "/account-suspended"

      suspendedUrl.search = ""

      return copyResponseState(
        supabaseResponse,
        NextResponse.redirect(
          suspendedUrl
        )
      )
    }
  }

  return supabaseResponse
}