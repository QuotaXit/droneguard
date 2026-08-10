"use client"

import {
  useState
} from "react"

import {
  ExternalLink,
  FileText,
  Loader2,
  Plus,
  Search,
  ShieldCheck,
  Upload,
  X
} from "lucide-react"

import {
  toast
} from "sonner"


function pilotName(pilot) {
  return (
    pilot?.fullName ||
    [
      pilot?.name,
      pilot?.surname
    ]
      .filter(Boolean)
      .join(" ")
      .trim() ||
    pilot?.email ||
    "Pilota"
  )
}


function formatDate(value) {
  if (!value) {
    return "Non disponibile"
  }

  const parts =
    String(value)
      .slice(0, 10)
      .split("-")

  if (
    parts.length !== 3
  ) {
    return value
  }

  return [
    parts[2],
    parts[1],
    parts[0]
  ].join("/")
}


function formatFileSize(value) {
  const bytes =
    Number(value || 0)

  if (
    !Number.isFinite(bytes) ||
    bytes <= 0
  ) {
    return ""
  }

  if (
    bytes <
    1024 * 1024
  ) {
    return `${(
      bytes / 1024
    ).toFixed(1)} KB`
  }

  return `${(
    bytes /
    (
      1024 *
      1024
    )
  ).toFixed(1)} MB`
}


export default function ManualInsuranceClient({
  canReview,
  onCreated
}) {

  const [
    open,
    setOpen
  ] = useState(false)

  const [
    search,
    setSearch
  ] = useState("")

  const [
    pilots,
    setPilots
  ] = useState([])

  const [
    searching,
    setSearching
  ] = useState(false)

  const [
    selectedPilot,
    setSelectedPilot
  ] = useState(null)

  const [
    pilotDetails,
    setPilotDetails
  ] = useState(null)

  const [
    loadingPilot,
    setLoadingPilot
  ] = useState(false)

  const [
    insuranceCompany,
    setInsuranceCompany
  ] = useState("")

  const [
    policyNumber,
    setPolicyNumber
  ] = useState("")

  const [
    validFrom,
    setValidFrom
  ] = useState("")

  const [
    validUntil,
    setValidUntil
  ] = useState("")

  const [
    source,
    setSource
  ] = useState(
    "certification_request"
  )

  const [
    selectedDocumentId,
    setSelectedDocumentId
  ] = useState("")

  const [
    file,
    setFile
  ] = useState(null)

  const [
    reason,
    setReason
  ] = useState("")

  const [
    submitting,
    setSubmitting
  ] = useState(false)


  function resetAll() {
    setSearch("")
    setPilots([])
    setSelectedPilot(null)
    setPilotDetails(null)

    setInsuranceCompany("")
    setPolicyNumber("")
    setValidFrom("")
    setValidUntil("")

    setSource(
      "certification_request"
    )

    setSelectedDocumentId("")
    setFile(null)
    setReason("")
  }


  function closePanel() {
    if (submitting) {
      return
    }

    setOpen(false)

    resetAll()
  }


  /*
   * =====================================================
   * CERCA PILOTA REALE
   * =====================================================
   */

  async function searchPilots() {

    const normalized =
      search.trim()

    if (
      normalized.length < 2
    ) {
      toast.error(
        "Inserisci almeno 2 caratteri per cercare il pilota."
      )

      return
    }

    try {
      setSearching(true)

      const params =
        new URLSearchParams({
          page: "1",
          search:
            normalized
        })

      const response =
        await fetch(
          `/api/admin/certifications/pilots?${params.toString()}`,
          {
            method:
              "GET",

            cache:
              "no-store"
          }
        )

      let result =
        null

      try {
        result =
          await response.json()
      } catch {
        result =
          null
      }

      if (!response.ok) {
        throw new Error(
          result?.error ||
          "Impossibile cercare i piloti."
        )
      }

      const found =
        Array.isArray(
          result?.pilots
        )
          ? result.pilots
          : []

      setPilots(
        found
      )

      if (
        found.length === 0
      ) {
        toast.error(
          "Nessun pilota trovato."
        )
      }

    } catch (error) {

      console.error(
        "[manual-insurance] pilot search failed:",
        error
      )

      setPilots([])

      toast.error(
        error instanceof Error
          ? error.message
          : "Errore durante la ricerca."
      )

    } finally {
      setSearching(false)
    }
  }


  /*
   * =====================================================
   * SELEZIONA PILOTA
   * =====================================================
   */

  async function choosePilot(
    pilot
  ) {
    try {
      setSelectedPilot(
        pilot
      )

      setPilotDetails(
        null
      )

      setSelectedDocumentId(
        ""
      )

      setLoadingPilot(
        true
      )

      const params =
        new URLSearchParams({
          pilotUserId:
            pilot.id
        })

      const response =
        await fetch(
          `/api/admin/insurances/manual?${params.toString()}`,
          {
            method:
              "GET",

            cache:
              "no-store"
          }
        )

      let result =
        null

      try {
        result =
          await response.json()
      } catch {
        result =
          null
      }

      if (!response.ok) {
        throw new Error(
          result?.error ||
          "Impossibile caricare i dati del pilota."
        )
      }

      setPilotDetails(
        result
      )

      const documents =
        Array.isArray(
          result
            ?.certificationDocuments
        )
          ? result
              .certificationDocuments
          : []

      /*
       * Se non ci sono documenti
       * certificazione riutilizzabili,
       * proponiamo direttamente
       * il nuovo upload Team.
       */
      if (
        documents.length === 0
      ) {
        setSource(
          "team_upload"
        )
      } else {
        setSource(
          "certification_request"
        )
      }

    } catch (error) {

      console.error(
        "[manual-insurance] pilot load failed:",
        error
      )

      setSelectedPilot(
        null
      )

      setPilotDetails(
        null
      )

      toast.error(
        error instanceof Error
          ? error.message
          : "Errore durante il caricamento."
      )

    } finally {
      setLoadingPilot(
        false
      )
    }
  }


  /*
   * =====================================================
   * CREA ASSICURAZIONE
   * =====================================================
   */

  async function submitInsurance(
    event
  ) {
    event.preventDefault()

    if (
      !selectedPilot ||
      submitting
    ) {
      return
    }

    if (
      insuranceCompany
        .trim()
        .length < 2
    ) {
      toast.error(
        "Inserisci la compagnia assicurativa."
      )

      return
    }

    if (
      policyNumber
        .trim()
        .length < 2
    ) {
      toast.error(
        "Inserisci il numero della polizza."
      )

      return
    }

    if (!validUntil) {
      toast.error(
        "Inserisci la data di scadenza."
      )

      return
    }

    if (
      source ===
        "certification_request" &&
      !selectedDocumentId
    ) {
      toast.error(
        "Seleziona il documento che contiene l'assicurazione."
      )

      return
    }

    if (
      source ===
        "team_upload" &&
      !file
    ) {
      toast.error(
        "Carica il documento assicurativo."
      )

      return
    }

    if (
      reason
        .trim()
        .length < 10
    ) {
      toast.error(
        "Inserisci una motivazione di almeno 10 caratteri."
      )

      return
    }

    try {
      setSubmitting(
        true
      )

      const formData =
        new FormData()

      formData.append(
        "pilotUserId",
        selectedPilot.id
      )

      formData.append(
        "insuranceCompany",
        insuranceCompany.trim()
      )

      formData.append(
        "policyNumber",
        policyNumber.trim()
      )

      formData.append(
        "validFrom",
        validFrom
      )

      formData.append(
        "validUntil",
        validUntil
      )

      formData.append(
        "submissionSource",
        source
      )

      formData.append(
        "reason",
        reason.trim()
      )

      if (
        source ===
        "certification_request"
      ) {
        formData.append(
          "sourceCertificationRequestId",
          selectedDocumentId
        )
      }

      if (
        source ===
          "team_upload" &&
        file
      ) {
        formData.append(
          "file",
          file
        )
      }

      const response =
        await fetch(
          "/api/admin/insurances/manual",
          {
            method:
              "POST",

            body:
              formData
          }
        )

      let result =
        null

      try {
        result =
          await response.json()
      } catch {
        result =
          null
      }

      if (!response.ok) {
        throw new Error(
          result?.error ||
          "Non è stato possibile aggiungere l'assicurazione."
        )
      }

      toast.success(
        result?.message ||
        "Assicurazione aggiunta e verificata."
      )

      setOpen(false)

      resetAll()

      /*
       * Fa ricaricare automaticamente
       * la lista assicurazioni.
       */
      if (
        typeof onCreated ===
        "function"
      ) {
        onCreated()
      }

    } catch (error) {

      console.error(
        "[manual-insurance] submit failed:",
        error
      )

      toast.error(
        error instanceof Error
          ? error.message
          : "Errore durante l'operazione."
      )

    } finally {
      setSubmitting(
        false
      )
    }
  }


  /*
   * =====================================================
   * UI
   * =====================================================
   */

  if (!canReview) {
    return null
  }


  return (
    <>
      <section className="rounded-3xl border border-green-400/15 bg-[#0B1028] p-5 sm:p-6">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
              Gestione manuale
            </p>

            <h2 className="mt-2 text-xl font-black">
              Assicurazioni piloti
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Aggiungi una polizza già verificata dal Team a un pilota registrato.
            </p>
          </div>


          <button
            type="button"
            onClick={() =>
              setOpen(true)
            }
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-black text-black transition hover:bg-green-400"
          >
            <Plus
              size={18}
            />

            Aggiungi assicurazione
          </button>

        </div>

      </section>


      {open && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">

          <div className="max-h-[94vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0B1028] shadow-2xl">

            {/* HEADER */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#0B1028] p-5 sm:p-6">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
                  Team DroneGuard
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  Aggiungi assicurazione
                </h2>
              </div>


              <button
                type="button"
                disabled={
                  submitting
                }
                onClick={
                  closePanel
                }
                className="rounded-xl border border-white/10 p-2.5 text-gray-400 transition hover:bg-white/10 hover:text-white disabled:opacity-50"
              >
                <X
                  size={20}
                />
              </button>

            </div>


            <div className="space-y-6 p-5 sm:p-6">

              {/* ==========================================
                  1. CERCA PILOTA
              ========================================== */}

              <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                  1. Pilota
                </p>

                <h3 className="mt-2 text-lg font-bold">
                  Cerca un pilota registrato
                </h3>


                {!selectedPilot ? (
                  <>
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">

                      <input
                        type="text"
                        value={
                          search
                        }
                        onChange={(
                          event
                        ) =>
                          setSearch(
                            event
                              .target
                              .value
                          )
                        }
                        onKeyDown={(
                          event
                        ) => {
                          if (
                            event.key ===
                            "Enter"
                          ) {
                            event
                              .preventDefault()

                            searchPilots()
                          }
                        }}
                        placeholder="Nome, cognome o email..."
                        className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-green-400/40"
                      />


                      <button
                        type="button"
                        disabled={
                          searching
                        }
                        onClick={
                          searchPilots
                        }
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-bold text-black transition hover:bg-green-400 disabled:opacity-50"
                      >
                        {searching ? (
                          <Loader2
                            size={17}
                            className="animate-spin"
                          />
                        ) : (
                          <Search
                            size={17}
                          />
                        )}

                        Cerca
                      </button>

                    </div>


                    {pilots.length >
                      0 && (

                      <div className="mt-4 max-h-64 space-y-2 overflow-y-auto">

                        {pilots.map(
                          (
                            pilot
                          ) => (

                            <button
                              key={
                                pilot.id
                              }
                              type="button"
                              onClick={() =>
                                choosePilot(
                                  pilot
                                )
                              }
                              className="flex w-full items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/15 p-4 text-left transition hover:border-green-400/30 hover:bg-green-500/5"
                            >
                              <div className="min-w-0">

                                <p className="truncate font-bold text-white">
                                  {pilotName(
                                    pilot
                                  )}
                                </p>

                                <p className="mt-1 truncate text-sm text-gray-400">
                                  {pilot.email}
                                </p>

                              </div>

                              <span className="shrink-0 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-gray-300">
                                Seleziona
                              </span>

                            </button>
                          )
                        )}

                      </div>
                    )}
                  </>
                ) : (

                  <div className="mt-4 rounded-xl border border-green-400/20 bg-green-500/10 p-4">

                    <div className="flex items-start justify-between gap-4">

                      <div>
                        <p className="font-bold text-green-200">
                          {pilotName(
                            selectedPilot
                          )}
                        </p>

                        <p className="mt-1 text-sm text-green-100/60">
                          {selectedPilot.email}
                        </p>
                      </div>


                      <button
                        type="button"
                        disabled={
                          submitting
                        }
                        onClick={() => {
                          setSelectedPilot(
                            null
                          )

                          setPilotDetails(
                            null
                          )

                          setSelectedDocumentId(
                            ""
                          )
                        }}
                        className="text-xs font-semibold text-green-200 underline"
                      >
                        Cambia pilota
                      </button>

                    </div>


                    {loadingPilot && (
                      <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                        <Loader2
                          size={16}
                          className="animate-spin"
                        />

                        Caricamento documenti...
                      </div>
                    )}


                    {pilotDetails
                      ?.pilot
                      ?.insuranceVerified && (

                      <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-500/10 p-3 text-sm text-yellow-200">

                        Questo pilota ha già un'assicurazione verificata
                        {pilotDetails
                          .pilot
                          .insuranceExpiresAt
                          ? ` fino al ${formatDate(
                              pilotDetails
                                .pilot
                                .insuranceExpiresAt
                            )}.`
                          : "."}

                      </div>
                    )}

                  </div>
                )}

              </section>


              {/* RESTO FORM */}
              {selectedPilot &&
                pilotDetails &&
                !loadingPilot && (

                <form
                  onSubmit={
                    submitInsurance
                  }
                  className="space-y-6"
                >

                  {/* ======================================
                      2. DATI POLIZZA
                  ====================================== */}

                  <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                      2. Dati polizza
                    </p>


                    <div className="mt-4 grid gap-4 sm:grid-cols-2">

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-300">
                          Compagnia assicurativa
                        </label>

                        <input
                          type="text"
                          required
                          maxLength={150}
                          value={
                            insuranceCompany
                          }
                          onChange={(
                            event
                          ) =>
                            setInsuranceCompany(
                              event
                                .target
                                .value
                            )
                          }
                          placeholder="Es. Allianz"
                          className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none focus:border-green-400/40"
                        />
                      </div>


                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-300">
                          Numero polizza
                        </label>

                        <input
                          type="text"
                          required
                          maxLength={100}
                          value={
                            policyNumber
                          }
                          onChange={(
                            event
                          ) =>
                            setPolicyNumber(
                              event
                                .target
                                .value
                            )
                          }
                          className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none focus:border-green-400/40"
                        />
                      </div>


                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-300">
                          Valida dal
                        </label>

                        <input
                          type="date"
                          value={
                            validFrom
                          }
                          onChange={(
                            event
                          ) =>
                            setValidFrom(
                              event
                                .target
                                .value
                            )
                          }
                          className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none focus:border-green-400/40"
                        />
                      </div>


                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-300">
                          Scadenza
                        </label>

                        <input
                          type="date"
                          required
                          value={
                            validUntil
                          }
                          onChange={(
                            event
                          ) =>
                            setValidUntil(
                              event
                                .target
                                .value
                            )
                          }
                          className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none focus:border-green-400/40"
                        />
                      </div>

                    </div>

                  </section>


                  {/* ======================================
                      3. FONTE DOCUMENTO
                  ====================================== */}

                  <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                      3. Documento
                    </p>

                    <h3 className="mt-2 font-bold">
                      Da dove proviene la polizza?
                    </h3>


                    <div className="mt-4 grid gap-3 sm:grid-cols-2">

                      <button
                        type="button"
                        disabled={
                          pilotDetails
                            .certificationDocuments
                            ?.length === 0
                        }
                        onClick={() => {
                          setSource(
                            "certification_request"
                          )

                          setFile(
                            null
                          )
                        }}
                        className={`rounded-xl border p-4 text-left transition ${
                          source ===
                          "certification_request"
                            ? "border-green-400/40 bg-green-500/10"
                            : "border-white/10 bg-black/15 hover:bg-white/5"
                        } disabled:cursor-not-allowed disabled:opacity-40`}
                      >
                        <FileText
                          size={20}
                          className="text-green-400"
                        />

                        <p className="mt-3 font-bold">
                          Documento già presente
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-400">
                          Usa un documento di certificazione già approvato.
                        </p>
                      </button>


                      <button
                        type="button"
                        onClick={() => {
                          setSource(
                            "team_upload"
                          )

                          setSelectedDocumentId(
                            ""
                          )
                        }}
                        className={`rounded-xl border p-4 text-left transition ${
                          source ===
                          "team_upload"
                            ? "border-green-400/40 bg-green-500/10"
                            : "border-white/10 bg-black/15 hover:bg-white/5"
                        }`}
                      >
                        <Upload
                          size={20}
                          className="text-green-400"
                        />

                        <p className="mt-3 font-bold">
                          Nuovo documento
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-400">
                          Carica PDF o immagine direttamente dal Team.
                        </p>
                      </button>

                    </div>


                    {/* DOCUMENTI ESISTENTI */}
                    {source ===
                      "certification_request" && (

                      <div className="mt-5 space-y-3">

                        {pilotDetails
                          .certificationDocuments
                          ?.map(
                            (
                              document
                            ) => (

                              <label
                                key={
                                  document.id
                                }
                                className={`block cursor-pointer rounded-xl border p-4 transition ${
                                  selectedDocumentId ===
                                  document.id
                                    ? "border-green-400/40 bg-green-500/10"
                                    : "border-white/10 bg-black/15 hover:bg-white/5"
                                }`}
                              >

                                <div className="flex items-start gap-3">

                                  <input
                                    type="radio"
                                    name="insurance-source-document"
                                    checked={
                                      selectedDocumentId ===
                                      document.id
                                    }
                                    onChange={() =>
                                      setSelectedDocumentId(
                                        document.id
                                      )
                                    }
                                    className="mt-1"
                                  />


                                  <div className="min-w-0 flex-1">

                                    <p className="break-all font-semibold">
                                      {document
                                        .originalFilename}
                                    </p>

                                    <p className="mt-1 text-xs text-gray-500">
                                      {formatFileSize(
                                        document.fileSize
                                      )}
                                    </p>


                                    {document
                                      .approvedCertifications
                                      ?.length >
                                      0 && (

                                      <p className="mt-2 text-xs text-gray-400">
                                        Certificazioni:{" "}
                                        {document
                                          .approvedCertifications
                                          .join(
                                            ", "
                                          )}
                                      </p>
                                    )}


                                    {document
                                      .documentUrl && (

                                      <a
                                        href={
                                          document.documentUrl
                                        }
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(
                                          event
                                        ) =>
                                          event
                                            .stopPropagation()
                                        }
                                        className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-cyan-200"
                                      >
                                        <ExternalLink
                                          size={14}
                                        />

                                        Apri documento
                                      </a>
                                    )}

                                  </div>
                                </div>

                              </label>
                            )
                          )}

                      </div>
                    )}


                    {/* UPLOAD TEAM */}
                    {source ===
                      "team_upload" && (

                      <div className="mt-5">

                        <label className="mb-2 block text-sm font-semibold text-gray-300">
                          Documento assicurativo
                        </label>

                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/jpeg,image/png,image/webp"
                          onChange={(
                            event
                          ) =>
                            setFile(
                              event
                                .target
                                .files?.[0] ||
                              null
                            )
                          }
                          className="block w-full rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-gray-300"
                        />

                        <p className="mt-2 text-xs text-gray-500">
                          PDF, JPG, PNG o WEBP. Massimo 10 MB.
                        </p>

                      </div>
                    )}

                  </section>


                  {/* ======================================
                      4. MOTIVAZIONE
                  ====================================== */}

                  <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                      4. Conferma Team
                    </p>


                    <label className="mt-4 block text-sm font-semibold text-gray-300">
                      Motivo dell'inserimento manuale
                    </label>

                    <textarea
                      required
                      maxLength={1000}
                      value={
                        reason
                      }
                      onChange={(
                        event
                      ) =>
                        setReason(
                          event
                            .target
                            .value
                        )
                      }
                      placeholder="Es. Polizza presente nello stesso documento ENAC già verificato dal Team."
                      className="mt-2 h-24 w-full resize-none rounded-xl border border-white/10 bg-black/20 p-4 text-sm outline-none focus:border-green-400/40"
                    />

                    <p className="mt-2 text-right text-xs text-gray-600">
                      {reason.length}/1000
                    </p>

                  </section>


                  <div className="rounded-2xl border border-green-400/20 bg-green-500/10 p-4">

                    <div className="flex gap-3">

                      <ShieldCheck
                        size={20}
                        className="mt-0.5 shrink-0 text-green-400"
                      />

                      <p className="text-sm leading-6 text-green-100/80">
                        Confermando, l'assicurazione verrà registrata direttamente come
                        <strong className="text-green-200">
                          {" "}verificata dal Team
                        </strong>
                        {" "}e il pilota riceverà la relativa notifica.
                      </p>

                    </div>

                  </div>


                  <div className="grid gap-3 sm:grid-cols-2">

                    <button
                      type="button"
                      disabled={
                        submitting
                      }
                      onClick={
                        closePanel
                      }
                      className="rounded-xl border border-white/10 px-5 py-3 font-bold text-gray-300 transition hover:bg-white/5 disabled:opacity-50"
                    >
                      Annulla
                    </button>


                    <button
                      type="submit"
                      disabled={
                        submitting
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-black text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {submitting ? (
                        <>
                          <Loader2
                            size={18}
                            className="animate-spin"
                          />

                          Salvataggio...
                        </>
                      ) : (
                        <>
                          <ShieldCheck
                            size={18}
                          />

                          Crea assicurazione verificata
                        </>
                      )}
                    </button>

                  </div>

                </form>
              )}

            </div>

          </div>
        </div>
      )}
    </>
  )
}