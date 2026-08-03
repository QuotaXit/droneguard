import { randomUUID } from "node:crypto"

import { NextResponse } from "next/server"

import {
  createServerSupabaseClient
} from "@/lib/supabase/server"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

const RATE_LIMIT_WINDOW_MS =
  15 * 60 * 1000

const RATE_LIMIT_MAX_ATTEMPTS = 3

const STORAGE_REMOVE_CHUNK_SIZE = 100

const globalRateLimitStore =
  globalThis.__droneguardAccountRateLimit ||
  new Map()

if (
  !globalThis.__droneguardAccountRateLimit
) {
  globalThis.__droneguardAccountRateLimit =
    globalRateLimitStore
}

function jsonError(
  message,
  status = 400,
  extra = {}
) {
  return NextResponse.json(
    {
      success: false,
      error: message,
      ...extra
    },
    {
      status
    }
  )
}

function normalizeRole(value) {
  const role = String(value || "")
    .trim()
    .toLowerCase()

  if (
    role === "pilot" ||
    role === "pilota"
  ) {
    return "pilot"
  }

  if (
    role === "client" ||
    role === "cliente"
  ) {
    return "client"
  }

  return ""
}

function getRequestIp(request) {
  const forwardedFor =
    request.headers.get(
      "x-forwarded-for"
    )

  if (forwardedFor) {
    return forwardedFor
      .split(",")[0]
      .trim()
  }

  return (
    request.headers.get(
      "x-real-ip"
    ) ||
    "unknown"
  )
}

function hasValidOrigin(request) {
  const requestOrigin =
    new URL(request.url).origin

  const origin =
    request.headers.get("origin")

  if (!origin) {
    return false
  }

  return origin === requestOrigin
}

function consumeLocalRateLimit(key) {
  const now = Date.now()

  for (
    const [
      storedKey,
      storedValue
    ] of globalRateLimitStore.entries()
  ) {
    if (
      now - storedValue.startedAt >
      RATE_LIMIT_WINDOW_MS
    ) {
      globalRateLimitStore.delete(
        storedKey
      )
    }
  }

  const current =
    globalRateLimitStore.get(key)

  if (
    !current ||
    now - current.startedAt >
      RATE_LIMIT_WINDOW_MS
  ) {
    globalRateLimitStore.set(key, {
      attempts: 1,
      startedAt: now
    })

    return {
      allowed: true,
      remaining:
        RATE_LIMIT_MAX_ATTEMPTS - 1
    }
  }

  if (
    current.attempts >=
    RATE_LIMIT_MAX_ATTEMPTS
  ) {
    return {
      allowed: false,
      remaining: 0
    }
  }

  current.attempts += 1

  globalRateLimitStore.set(
    key,
    current
  )

  return {
    allowed: true,
    remaining:
      RATE_LIMIT_MAX_ATTEMPTS -
      current.attempts
  }
}

function extractStoragePath(
  value,
  bucket
) {
  const normalizedValue =
    String(value || "").trim()

  if (!normalizedValue) {
    return ""
  }

  if (
    !normalizedValue.startsWith(
      "http://"
    ) &&
    !normalizedValue.startsWith(
      "https://"
    )
  ) {
    return normalizedValue
      .replace(/^\/+/, "")
  }

  try {
    const url =
      new URL(normalizedValue)

    const decodedPath =
      decodeURIComponent(
        url.pathname
      )

    const markers = [
      `/storage/v1/object/public/${bucket}/`,
      `/storage/v1/object/sign/${bucket}/`,
      `/storage/v1/object/authenticated/${bucket}/`
    ]

    for (const marker of markers) {
      const markerPosition =
        decodedPath.indexOf(marker)

      if (markerPosition !== -1) {
        return decodedPath
          .slice(
            markerPosition +
              marker.length
          )
          .replace(/^\/+/, "")
      }
    }
  } catch {
    return ""
  }

  return ""
}

function isOwnedAvatarPath(
  path,
  userId
) {
  const normalizedPath =
    String(path || "")
      .replace(/^\/+/, "")

  const filename =
    normalizedPath
      .split("/")
      .pop() || ""

  return (
    filename.startsWith(
      `${userId}-`
    ) ||
    filename.startsWith(
      `${userId}.`
    )
  )
}

function addOwnedAvatarPath(
  paths,
  path,
  userId
) {
  const normalizedPath =
    String(path || "")
      .replace(/^\/+/, "")

  if (
    normalizedPath &&
    isOwnedAvatarPath(
      normalizedPath,
      userId
    )
  ) {
    paths.add(normalizedPath)
  }
}

async function listFolderEntries({
  adminSupabase,
  bucket,
  prefix = "",
  search
}) {
  const entries = []

  let offset = 0

  while (true) {
    const options = {
      limit: 100,
      offset,
      sortBy: {
        column: "name",
        order: "asc"
      }
    }

    if (search) {
      options.search = search
    }

    const {
      data,
      error
    } = await adminSupabase.storage
      .from(bucket)
      .list(prefix, options)

    if (error) {
      throw new Error(
        `Impossibile leggere il bucket ${bucket}: ${error.message}`
      )
    }

    const currentEntries =
      Array.isArray(data)
        ? data
        : []

    entries.push(
      ...currentEntries
    )

    if (
      currentEntries.length < 100
    ) {
      break
    }

    offset +=
      currentEntries.length
  }

  return entries
}

async function collectFilesRecursively({
  adminSupabase,
  bucket,
  prefix
}) {
  const collectedPaths = []

  const entries =
    await listFolderEntries({
      adminSupabase,
      bucket,
      prefix
    })

  for (const entry of entries) {
    const entryName =
      String(entry?.name || "")
        .trim()

    if (!entryName) {
      continue
    }

    const fullPath =
      prefix
        ? `${prefix}/${entryName}`
        : entryName

    const isFolder =
      !entry?.id &&
      !entry?.metadata

    if (isFolder) {
      const nestedFiles =
        await collectFilesRecursively({
          adminSupabase,
          bucket,
          prefix: fullPath
        })

      collectedPaths.push(
        ...nestedFiles
      )

      continue
    }

    collectedPaths.push(fullPath)
  }

  return collectedPaths
}

async function collectAvatarPaths({
  adminSupabase,
  userId,
  profile
}) {
  const paths = new Set()

  const profileValues = [
    profile?.avatar,
    profile?.avatar_url
  ]

  for (
    const profileValue of
    profileValues
  ) {
    const extractedPath =
      extractStoragePath(
        profileValue,
        "avatars"
      )

    addOwnedAvatarPath(
      paths,
      extractedPath,
      userId
    )
  }

  /*
   * Avatar pilota:
   * {userId}-{timestamp}.{estensione}
   */

  const rootEntries =
    await listFolderEntries({
      adminSupabase,
      bucket: "avatars",
      prefix: "",
      search: userId
    })

  for (const entry of rootEntries) {
    if (
      !entry?.id ||
      !entry?.name
    ) {
      continue
    }

    addOwnedAvatarPath(
      paths,
      entry.name,
      userId
    )
  }

  /*
   * Avatar cliente:
   * avatars/{userId}.{estensione}
   */

  const nestedEntries =
    await listFolderEntries({
      adminSupabase,
      bucket: "avatars",
      prefix: "avatars",
      search: userId
    })

  for (
    const entry of
    nestedEntries
  ) {
    if (
      !entry?.id ||
      !entry?.name
    ) {
      continue
    }

    addOwnedAvatarPath(
      paths,
      `avatars/${entry.name}`,
      userId
    )
  }

  return [...paths]
}

async function collectCertificationPaths({
  adminSupabase,
  userId
}) {
  const paths = new Set()

  const {
    data: requests,
    error: requestsError
  } = await adminSupabase
    .from(
      "certification_requests"
    )
    .select(`
      id,
      storage_path
    `)
    .eq(
      "user_id",
      userId
    )

  if (requestsError) {
    throw new Error(
      `Impossibile recuperare i documenti di certificazione: ${requestsError.message}`
    )
  }

  for (
    const request of
    requests || []
  ) {
    const storagePath =
      String(
        request?.storage_path || ""
      )
        .trim()
        .replace(/^\/+/, "")

    if (
      storagePath.startsWith(
        `${userId}/`
      )
    ) {
      paths.add(storagePath)
    }
  }

  /*
   * Recupera anche eventuali file orfani
   * presenti nella cartella privata dell’utente.
   */

  const recursivePaths =
    await collectFilesRecursively({
      adminSupabase,
      bucket:
        "certification-documents",
      prefix: userId
    })

  for (
    const storagePath of
    recursivePaths
  ) {
    if (
      storagePath.startsWith(
        `${userId}/`
      )
    ) {
      paths.add(storagePath)
    }
  }

  return [...paths]
}

function splitIntoChunks(
  values,
  chunkSize
) {
  const chunks = []

  for (
    let index = 0;
    index < values.length;
    index += chunkSize
  ) {
    chunks.push(
      values.slice(
        index,
        index + chunkSize
      )
    )
  }

  return chunks
}

async function removeStoragePaths({
  adminSupabase,
  bucket,
  paths
}) {
  const uniquePaths = [
    ...new Set(
      paths
        .map((path) =>
          String(path || "")
            .trim()
            .replace(/^\/+/, "")
        )
        .filter(Boolean)
    )
  ]

  if (
    uniquePaths.length === 0
  ) {
    return 0
  }

  const chunks =
    splitIntoChunks(
      uniquePaths,
      STORAGE_REMOVE_CHUNK_SIZE
    )

  let removedFiles = 0

  for (const chunk of chunks) {
    const {
      data,
      error
    } = await adminSupabase.storage
      .from(bucket)
      .remove(chunk)

    if (error) {
      throw new Error(
        `Impossibile eliminare i file dal bucket ${bucket}: ${error.message}`
      )
    }

    removedFiles +=
      Array.isArray(data)
        ? data.length
        : chunk.length
  }

  return removedFiles
}

export async function DELETE(request) {
  try {
    /*
     * Protezione CSRF:
     * accettiamo soltanto richieste provenienti
     * dallo stesso dominio.
     */

    if (!hasValidOrigin(request)) {
      return jsonError(
        "Origine della richiesta non valida.",
        403
      )
    }

    let body = null

    try {
      body = await request.json()
    } catch {
      body = null
    }

    if (
      String(
        body?.confirmation || ""
      )
        .trim()
        .toUpperCase() !==
      "ELIMINA"
    ) {
      return jsonError(
        "Conferma eliminazione non valida.",
        400
      )
    }

    const supabase =
      await createServerSupabaseClient()

    const {
      data: {
        user
      },
      error: userError
    } = await supabase.auth.getUser()

    if (
      userError ||
      !user
    ) {
      return jsonError(
        "Utente non autenticato.",
        401
      )
    }

    const rateLimitKey = [
      user.id,
      getRequestIp(request)
    ].join(":")

    const rateLimit =
      consumeLocalRateLimit(
        rateLimitKey
      )

    if (!rateLimit.allowed) {
      return jsonError(
        "Hai effettuato troppi tentativi. Riprova più tardi.",
        429
      )
    }

    const adminSupabase =
      createAdminSupabaseClient()

    const {
      data: profile,
      error: profileError
    } = await adminSupabase
      .from("users")
      .select(`
        id,
        role,
        account_status,
        avatar,
        avatar_url
      `)
      .eq("id", user.id)
      .maybeSingle()

    if (
      profileError ||
      !profile
    ) {
      console.error(
        "[account-delete] profile load failed:",
        profileError
      )

      return jsonError(
        "Profilo utente non trovato.",
        404
      )
    }

    const normalizedRole =
      normalizeRole(
        profile.role
      )

    if (!normalizedRole) {
      return jsonError(
        "Gli account Team non possono essere disattivati da questa pagina.",
        403
      )
    }

    /*
     * Recuperiamo tutti i percorsi prima
     * dell’anonimizzazione del profilo.
     */

    let avatarPaths = []
    let certificationPaths = []

    try {
      [
        avatarPaths,
        certificationPaths
      ] = await Promise.all([
        collectAvatarPaths({
          adminSupabase,
          userId: user.id,
          profile
        }),

        collectCertificationPaths({
          adminSupabase,
          userId: user.id
        })
      ])
    } catch (storageListError) {
      console.error(
        "[account-delete] storage inventory failed:",
        storageListError
      )

      return jsonError(
        "Non è stato possibile preparare la rimozione dei file personali.",
        500
      )
    }

    /*
     * Eliminiamo prima i file personali.
     * Se questa fase fallisce, il profilo
     * non viene ancora disattivato.
     */

    let removedAvatars = 0
    let removedCertifications = 0

    try {
      removedAvatars =
        await removeStoragePaths({
          adminSupabase,
          bucket: "avatars",
          paths: avatarPaths
        })

      removedCertifications =
        await removeStoragePaths({
          adminSupabase,
          bucket:
            "certification-documents",
          paths:
            certificationPaths
        })
    } catch (storageRemoveError) {
      console.error(
        "[account-delete] storage cleanup failed:",
        storageRemoveError
      )

      return jsonError(
        "Non è stato possibile completare la rimozione dei file personali.",
        500
      )
    }

    /*
     * Disattivazione atomica del profilo
     * e sistemazione dei flussi operativi.
     */

    const {
      data: deactivationResult,
      error: deactivationError
    } = await supabase.rpc(
      "deactivate_my_account"
    )

    if (deactivationError) {
      console.error(
        "[account-delete] RPC failed:",
        deactivationError
      )

      return jsonError(
        deactivationError.message ||
          "Non è stato possibile disattivare l’account.",
        500
      )
    }

    /*
     * Anonimizzazione e blocco permanente
     * anche dentro Supabase Auth.
     */

    const anonymousEmail =
      `deleted+${user.id.replaceAll(
        "-",
        ""
      )}@deleted.droneguard.local`

    const randomPassword =
      `${randomUUID()}-${randomUUID()}-Aa1!`

    const {
      error: authSanitizeError
    } =
      await adminSupabase.auth.admin
        .updateUserById(
          user.id,
          {
            email:
              anonymousEmail,
            password:
              randomPassword,
            email_confirm: true,
            user_metadata: {
              account_status:
                "deactivated"
            },
            ban_duration:
              "876000h"
          }
        )

    let authSanitized = true

    if (authSanitizeError) {
      authSanitized = false

      console.error(
        "[account-delete] full Auth anonymization failed:",
        authSanitizeError
      )

      /*
       * Secondo tentativo minimo:
       * almeno il ban permanente deve
       * essere applicato.
       */

      const {
        error: authBanError
      } =
        await adminSupabase.auth.admin
          .updateUserById(
            user.id,
            {
              ban_duration:
                "876000h"
            }
          )

      if (authBanError) {
        console.error(
          "[account-delete] Auth ban fallback failed:",
          authBanError
        )

        return jsonError(
          "Il profilo è stato disattivato, ma il blocco Auth richiede un intervento amministrativo.",
          500,
          {
            accountDeactivated: true
          }
        )
      }
    }

    return NextResponse.json({
      success: true,
      message:
        "Account disattivato correttamente.",
      accountDeactivated: true,
      authSanitized,
      removedFiles: {
        avatars:
          removedAvatars,
        certifications:
          removedCertifications
      },
      result:
        deactivationResult || null
    })
  } catch (error) {
    console.error(
      "[account-delete] unexpected error:",
      error
    )

    return jsonError(
      "Errore imprevisto durante la disattivazione dell’account.",
      500
    )
  }
}