const STORAGE_REMOVE_CHUNK_SIZE = 100

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
    .from("certification_requests")
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
   * presenti nella cartella privata.
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

export async function collectUserPersonalStorage({
  adminSupabase,
  userId,
  profile
}) {
  if (!adminSupabase) {
    throw new Error(
      "Client Supabase amministrativo mancante."
    )
  }

  const normalizedUserId =
    String(userId || "").trim()

  if (!normalizedUserId) {
    throw new Error(
      "Identificativo utente mancante."
    )
  }

  const [
    avatarPaths,
    certificationPaths
  ] = await Promise.all([
    collectAvatarPaths({
      adminSupabase,
      userId: normalizedUserId,
      profile
    }),

    collectCertificationPaths({
      adminSupabase,
      userId: normalizedUserId
    })
  ])

  return {
    avatarPaths,
    certificationPaths
  }
}

export async function removeUserPersonalStorage({
  adminSupabase,
  avatarPaths = [],
  certificationPaths = []
}) {
  if (!adminSupabase) {
    throw new Error(
      "Client Supabase amministrativo mancante."
    )
  }

  const [
    removedAvatars,
    removedCertifications
  ] = await Promise.all([
    removeStoragePaths({
      adminSupabase,
      bucket: "avatars",
      paths: avatarPaths
    }),

    removeStoragePaths({
      adminSupabase,
      bucket:
        "certification-documents",
      paths: certificationPaths
    })
  ])

  return {
    removedAvatars,
    removedCertifications
  }
}