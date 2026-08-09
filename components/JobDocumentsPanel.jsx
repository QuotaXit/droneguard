"use client"

import {
  useEffect,
  useState
} from "react"

import {
  toast
} from "sonner"

const MAX_FILE_SIZE =
  4 * 1024 * 1024

const MAX_DOCUMENTS =
  20

const ACCEPTED_TYPES =
  "application/pdf,image/jpeg,image/png,image/webp"


function formatFileSize(
  value
) {
  const bytes =
    Number(value || 0)

  if (
    !Number.isFinite(bytes) ||
    bytes <= 0
  ) {
    return "0 KB"
  }

  if (
    bytes <
    1024 * 1024
  ) {
    return `${Math.max(
      1,
      Math.round(
        bytes / 1024
      )
    )} KB`
  }

  return `${(
    bytes /
    (1024 * 1024)
  ).toFixed(1)} MB`
}


function formatDateTime(
  value
) {
  if (!value) {
    return ""
  }

  const date =
    new Date(value)

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return ""
  }

  return new Intl.DateTimeFormat(
    "it-IT",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }
  ).format(date)
}


function getDocumentIcon(
  mimeType
) {
  if (
    mimeType ===
    "application/pdf"
  ) {
    return "📄"
  }

  return "🖼️"
}


function getUploaderLabel(
  document
) {
  if (
    document?.canDelete
  ) {
    return "Caricato da te"
  }

  if (
    document?.uploadedByRole ===
    "client"
  ) {
    return "Caricato dal cliente"
  }

  if (
    document?.uploadedByRole ===
    "pilot"
  ) {
    return "Caricato dal pilota"
  }

  return "Documento condiviso"
}


export default function JobDocumentsPanel({
  jobId
}) {
  const [
    documents,
    setDocuments
  ] = useState([])

  const [
    loading,
    setLoading
  ] = useState(true)

  const [
    selectedFile,
    setSelectedFile
  ] = useState(null)

  const [
    note,
    setNote
  ] = useState("")

  const [
    uploading,
    setUploading
  ] = useState(false)

  const [
    deletingId,
    setDeletingId
  ] = useState(null)

  const [
    fileInputKey,
    setFileInputKey
  ] = useState(0)


  useEffect(() => {
    let cancelled =
      false

    const load =
      async () => {
        if (!jobId) {
          if (!cancelled) {
            setDocuments([])
            setLoading(false)
          }

          return
        }

        try {
          setLoading(true)

          const response =
            await fetch(
              `/api/job-documents?jobId=${encodeURIComponent(
                jobId
              )}`,
              {
                method: "GET",
                credentials:
                  "same-origin",
                cache:
                  "no-store"
              }
            )

          const payload =
            await response
              .json()
              .catch(
                () => null
              )

          if (
            !response.ok ||
            payload?.success !== true
          ) {
            throw new Error(
              payload?.error ||
                "Impossibile caricare i documenti."
            )
          }

          if (!cancelled) {
            setDocuments(
              Array.isArray(
                payload.documents
              )
                ? payload.documents
                : []
            )
          }
        } catch (error) {
          console.error(
            "[job-documents-ui] Caricamento fallito:",
            error
          )

          if (!cancelled) {
            setDocuments([])

            toast.error(
              error?.message ||
                "Impossibile caricare i documenti."
            )
          }
        } finally {
          if (!cancelled) {
            setLoading(false)
          }
        }
      }

    load()

    return () => {
      cancelled =
        true
    }
  }, [jobId])


  const reloadDocuments =
    async () => {
      if (!jobId) {
        setDocuments([])
        return
      }

      const response =
        await fetch(
          `/api/job-documents?jobId=${encodeURIComponent(
            jobId
          )}`,
          {
            method: "GET",
            credentials:
              "same-origin",
            cache:
              "no-store"
          }
        )

      const payload =
        await response
          .json()
          .catch(
            () => null
          )

      if (
        !response.ok ||
        payload?.success !== true
      ) {
        throw new Error(
          payload?.error ||
            "Impossibile aggiornare i documenti."
        )
      }

      setDocuments(
        Array.isArray(
          payload.documents
        )
          ? payload.documents
          : []
      )
    }


  const handleFileChange =
    (event) => {
      const file =
        event.target
          .files?.[0] ||
        null

      if (!file) {
        setSelectedFile(null)
        return
      }

      if (
        file.size >
        MAX_FILE_SIZE
      ) {
        toast.error(
          "Il documento non può superare 4 MB."
        )

        setSelectedFile(null)

        setFileInputKey(
          (current) =>
            current + 1
        )

        return
      }

      const allowed =
        [
          "application/pdf",
          "image/jpeg",
          "image/png",
          "image/webp"
        ].includes(
          String(
            file.type || ""
          ).toLowerCase()
        )

      if (!allowed) {
        toast.error(
          "Formato non consentito. Usa JPG, PNG, WEBP o PDF."
        )

        setSelectedFile(null)

        setFileInputKey(
          (current) =>
            current + 1
        )

        return
      }

      setSelectedFile(
        file
      )
    }


  const uploadDocument =
    async () => {
      if (
        uploading ||
        !jobId
      ) {
        return
      }

      if (!selectedFile) {
        toast.error(
          "Seleziona un documento."
        )

        return
      }

      const cleanNote =
        note.trim()

      if (
        cleanNote.length >
        1000
      ) {
        toast.error(
          "La nota può contenere massimo 1000 caratteri."
        )

        return
      }

      if (
        documents.length >=
        MAX_DOCUMENTS
      ) {
        toast.error(
          `Puoi condividere al massimo ${MAX_DOCUMENTS} documenti per lavoro.`
        )

        return
      }

      try {
        setUploading(
          true
        )

        const formData =
          new FormData()

        formData.append(
          "jobId",
          jobId
        )

        formData.append(
          "file",
          selectedFile
        )

        if (cleanNote) {
          formData.append(
            "note",
            cleanNote
          )
        }

        const response =
          await fetch(
            "/api/job-documents",
            {
              method:
                "POST",

              credentials:
                "same-origin",

              body:
                formData
            }
          )

        const payload =
          await response
            .json()
            .catch(
              () => null
            )

        if (
          !response.ok ||
          payload?.success !== true
        ) {
          throw new Error(
            payload?.error ||
              "Impossibile caricare il documento."
          )
        }

        toast.success(
          "Documento condiviso ✅"
        )

        setSelectedFile(
          null
        )

        setNote("")

        setFileInputKey(
          (current) =>
            current + 1
        )

        await reloadDocuments()
      } catch (error) {
        console.error(
          "[job-documents-ui] Upload fallito:",
          error
        )

        toast.error(
          error?.message ||
            "Impossibile caricare il documento."
        )
      } finally {
        setUploading(
          false
        )
      }
    }


  const deleteDocument =
    async (document) => {
      if (
        deletingId ||
        !document?.id ||
        !document?.canDelete
      ) {
        return
      }

      const confirmed =
        window.confirm(
          `Vuoi eliminare "${document.originalFilename}"?`
        )

      if (!confirmed) {
        return
      }

      try {
        setDeletingId(
          document.id
        )

        const response =
          await fetch(
            "/api/job-documents",
            {
              method:
                "DELETE",

              credentials:
                "same-origin",

              headers: {
                "Content-Type":
                  "application/json"
              },

              body:
                JSON.stringify({
                  documentId:
                    document.id
                })
            }
          )

        const payload =
          await response
            .json()
            .catch(
              () => null
            )

        if (
          !response.ok ||
          payload?.success !== true
        ) {
          throw new Error(
            payload?.error ||
              "Impossibile eliminare il documento."
          )
        }

        toast.success(
          "Documento eliminato."
        )

        setDocuments(
          (current) =>
            current.filter(
              (item) =>
                item.id !==
                document.id
            )
        )
      } catch (error) {
        console.error(
          "[job-documents-ui] Eliminazione fallita:",
          error
        )

        toast.error(
          error?.message ||
            "Impossibile eliminare il documento."
        )
      } finally {
        setDeletingId(
          null
        )
      }
    }


  return (
    <div className="mb-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] p-5 sm:p-6">

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
            Documenti condivisi
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            File del lavoro
          </h3>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
            Cliente e pilota possono condividere PDF e immagini utili al lavoro. I file sono privati e accessibili solo alle due parti.
          </p>
        </div>


        <div className="shrink-0 rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm font-bold text-cyan-200">
          {documents.length}/{MAX_DOCUMENTS} file
        </div>

      </div>


      <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">

        <div className="grid gap-4">

          <label className="block">

            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-gray-500">
              Documento
            </span>

            <input
              key={
                fileInputKey
              }
              type="file"
              accept={
                ACCEPTED_TYPES
              }
              disabled={
                uploading ||
                documents.length >=
                  MAX_DOCUMENTS
              }
              onChange={
                handleFileChange
              }
              className="block w-full cursor-pointer rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-gray-300 file:mr-4 file:rounded-lg file:border-0 file:bg-green-500 file:px-4 file:py-2 file:font-bold file:text-black disabled:cursor-not-allowed disabled:opacity-50"
            />

            <p className="mt-2 text-xs leading-5 text-gray-500">
              PDF, JPG, PNG o WEBP • massimo 4 MB
            </p>

          </label>


          {selectedFile && (
            <div className="rounded-xl border border-green-400/15 bg-green-400/[0.05] px-4 py-3">

              <p className="break-all text-sm font-semibold text-green-200">
                {selectedFile.name}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                {formatFileSize(
                  selectedFile.size
                )}
              </p>

            </div>
          )}


          <label className="block">

            <div className="mb-2 flex items-center justify-between gap-3">

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">
                Nota opzionale
              </span>

              <span className="text-xs text-gray-500">
                {note.length}/1000
              </span>

            </div>

            <textarea
              value={
                note
              }
              maxLength={1000}
              disabled={
                uploading
              }
              onChange={
                (event) =>
                  setNote(
                    event.target.value
                  )
              }
              placeholder="Es. autorizzazione del proprietario, planimetria dell'area..."
              className="h-24 w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-white outline-none placeholder:text-gray-600 disabled:opacity-50"
            />

          </label>


          <button
            type="button"
            disabled={
              uploading ||
              !selectedFile ||
              documents.length >=
                MAX_DOCUMENTS
            }
            onClick={
              uploadDocument
            }
            className="rounded-xl bg-green-500 px-5 py-3.5 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {uploading
              ? "Caricamento..."
              : documents.length >=
                  MAX_DOCUMENTS
                ? "Limite documenti raggiunto"
                : "Condividi documento"}
          </button>

        </div>

      </div>


      <div className="mt-5">

        {loading ? (
          <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-5 text-center text-sm text-gray-400">
            Caricamento documenti...
          </div>
        ) : documents.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-5 text-center">

            <p className="font-semibold text-gray-300">
              Nessun documento condiviso
            </p>

            <p className="mt-1 text-sm text-gray-500">
              I file caricati dal cliente o dal pilota appariranno qui.
            </p>

          </div>
        ) : (
          <div className="space-y-3">

            {documents.map(
              (document) => (

                <div
                  key={
                    document.id
                  }
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div className="min-w-0">

                      <div className="flex items-start gap-3">

                        <div className="text-2xl">
                          {getDocumentIcon(
                            document.mimeType
                          )}
                        </div>

                        <div className="min-w-0">

                          <p className="break-all font-bold text-white">
                            {document.originalFilename}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            {getUploaderLabel(
                              document
                            )}
                            {document.createdAt
                              ? ` • ${formatDateTime(
                                  document.createdAt
                                )}`
                              : ""}
                            {document.fileSize
                              ? ` • ${formatFileSize(
                                  document.fileSize
                                )}`
                              : ""}
                          </p>

                        </div>

                      </div>


                      {document.note && (
                        <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">

                          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                            Nota
                          </p>

                          <p className="mt-2 whitespace-pre-line text-sm leading-6 text-gray-300">
                            {document.note}
                          </p>

                        </div>
                      )}

                    </div>


                    <div className="flex shrink-0 gap-2">

                      {document.signedUrl ? (
                        <a
                          href={
                            document.signedUrl
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-2 text-sm font-bold text-cyan-200 transition hover:bg-cyan-400/[0.14]"
                        >
                          Apri
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-gray-500 opacity-60"
                        >
                          Apri
                        </button>
                      )}


                      {document.canDelete && (
                        <button
                          type="button"
                          disabled={
                            deletingId ===
                              document.id
                          }
                          onClick={() =>
                            deleteDocument(
                              document
                            )
                          }
                          className="rounded-xl border border-red-400/20 bg-red-400/[0.07] px-4 py-2 text-sm font-bold text-red-300 transition hover:bg-red-400/[0.12] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {deletingId ===
                          document.id
                            ? "..."
                            : "Elimina"}
                        </button>
                      )}

                    </div>

                  </div>

                </div>
              )
            )}

          </div>
        )}

      </div>

    </div>
  )
}
