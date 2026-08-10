import {
  randomUUID
} from "node:crypto"

import {
  NextResponse
} from "next/server"

import {
  getTeamAccess
} from "@/lib/team/access"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"


export const runtime =
  "nodejs"

export const dynamic =
  "force-dynamic"


const BUCKET_NAME =
  "insurance-documents"

const MAX_FILE_SIZE =
  10 * 1024 * 1024

const SIGNED_URL_SECONDS =
  5 * 60

const ALLOWED_TYPES =
  new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
    "application/pdf"
  ])


function jsonError(
  message,
  status = 400
) {
  return NextResponse.json(
    {
      success: false,
      error: message
    },
    {
      status,
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0"
      }
    }
  )
}


function hasPermission(
  access,
  permission
) {
  return (
    Array.isArray(
      access?.permissions
    ) &&
    access.permissions.includes(
      permission
    )
  )
}


function isValidUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    String(value || "")
  )
}


function cleanText(
  value,
  maxLength
) {
  return String(value || "")
    .replace(/\u0000/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(
      0,
      maxLength
    )
}


function normalizeDate(
  value
) {
  const raw =
    String(value || "")
      .trim()

  if (!raw) {
    return null
  }

  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(
      raw
    )
  ) {
    return null
  }

  const date =
    new Date(
      `${raw}T00:00:00Z`
    )

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return null
  }

  if (
    date
      .toISOString()
      .slice(0, 10) !==
    raw
  ) {
    return null
  }

  return raw
}


function sanitizeFilename(
  value
) {
  const original =
    String(
      value ||
        "assicurazione"
    )
      .trim()
      .slice(0, 200)

  const cleaned =
    original
      .normalize("NFKD")
      .replace(
        /[^\w.\-]+/g,
        "-"
      )
      .replace(
        /-+/g,
        "-"
      )
      .replace(
        /^\.+/,
        ""
      )
      .replace(
        /^[-_]+|[-_]+$/g,
        ""
      )

  return (
    cleaned ||
    "assicurazione"
  )
}


function bytesStartWith(
  bytes,
  signature
) {
  if (
    bytes.length <
    signature.length
  ) {
    return false
  }

  return signature.every(
    (
      value,
      index
    ) =>
      bytes[index] ===
      value
  )
}


function hasAllowedSignature(
  bytes,
  mimeType
) {
  if (
    mimeType ===
    "image/jpeg"
  ) {
    return bytesStartWith(
      bytes,
      [
        0xff,
        0xd8,
        0xff
      ]
    )
  }

  if (
    mimeType ===
    "image/png"
  ) {
    return bytesStartWith(
      bytes,
      [
        0x89,
        0x50,
        0x4e,
        0x47,
        0x0d,
        0x0a,
        0x1a,
        0x0a
      ]
    )
  }

  if (
    mimeType ===
    "image/webp"
  ) {
    const riff =
      String.fromCharCode(
        ...bytes.slice(
          0,
          4
        )
      ) === "RIFF"

    const webp =
      String.fromCharCode(
        ...bytes.slice(
          8,
          12
        )
      ) === "WEBP"

    return (
      riff &&
      webp
    )
  }

  if (
    mimeType ===
    "application/pdf"
  ) {
    return (
      String.fromCharCode(
        ...bytes.slice(
          0,
          5
        )
      ) === "%PDF-"
    )
  }

  return false
}


async function removeFile(
  adminSupabase,
  storagePath
) {
  if (!storagePath) {
    return
  }

  const {
    error
  } =
    await adminSupabase
      .storage
      .from(
        BUCKET_NAME
      )
      .remove([
        storagePath
      ])

  if (error) {
    console.error(
      "[admin-insurance-manual] cleanup failed:",
      error
    )
  }
}


/*
 * =====================================================
 * GET
 *
 * Dato un pilota reale, restituisce:
 * - informazioni essenziali del pilota
 * - stato assicurazione attuale
 * - certificazioni approvate con documento disponibile
 *
 * I piloti vengono cercati dall'interfaccia tramite
 * /api/admin/certifications/pilots
 * =====================================================
 */
export async function GET(
  request
) {
  try {
    const {
      user,
      access
    } =
      await getTeamAccess()

    if (!user) {
      return jsonError(
        "Devi effettuare l'accesso.",
        401
      )
    }

    if (!access?.active) {
      return jsonError(
        "Accesso Team non autorizzato.",
        403
      )
    }

    if (
      !hasPermission(
        access,
        "certifications.view"
      )
    ) {
      return jsonError(
        "Non hai il permesso di vedere questi documenti.",
        403
      )
    }


    const pilotUserId =
      String(
        request.nextUrl
          .searchParams
          .get(
            "pilotUserId"
          ) ||
        ""
      ).trim()


    if (
      !isValidUuid(
        pilotUserId
      )
    ) {
      return jsonError(
        "Pilota non valido."
      )
    }


    const adminSupabase =
      createAdminSupabaseClient()


    /*
     * =================================================
     * PILOTA
     * =================================================
     */

    const {
      data:
        pilot,
      error:
        pilotError
    } =
      await adminSupabase
        .from("users")
        .select(`
          id,
          email,
          name,
          surname,
          role,
          banned,
          account_status,
          insurance_verified,
          insurance_expires_at
        `)
        .eq(
          "id",
          pilotUserId
        )
        .maybeSingle()


    if (
      pilotError ||
      !pilot
    ) {
      return jsonError(
        "Pilota non trovato.",
        404
      )
    }


    const normalizedRole =
      String(
        pilot.role || ""
      )
        .trim()
        .toLowerCase()


    if (
      normalizedRole !==
        "pilot" &&
      normalizedRole !==
        "pilota"
    ) {
      return jsonError(
        "L'account selezionato non è un pilota.",
        409
      )
    }


    /*
     * =================================================
     * DOCUMENTI CERTIFICAZIONI APPROVATE
     * =================================================
     */

    const {
      data:
        certificationRequests,
      error:
        certificationsError
    } =
      await adminSupabase
        .from(
          "certification_requests"
        )
        .select(`
          id,
          status,
          storage_bucket,
          storage_path,
          original_filename,
          mime_type,
          file_size,
          declared_certifications,
          approved_certifications,
          reviewed_at,
          created_at
        `)
        .eq(
          "user_id",
          pilotUserId
        )
        .eq(
          "status",
          "approved"
        )
        .not(
          "storage_path",
          "is",
          null
        )
        .order(
          "reviewed_at",
          {
            ascending:
              false,
            nullsFirst:
              false
          }
        )


    if (
      certificationsError
    ) {
      console.error(
        "[admin-insurance-manual] certification documents load failed:",
        certificationsError
      )

      return jsonError(
        "Non è stato possibile caricare i documenti del pilota.",
        500
      )
    }


    /*
     * =================================================
     * URL TEMPORANEI
     * =================================================
     */

    const documents =
      await Promise.all(
        (
          certificationRequests ||
          []
        ).map(
          async (
            item
          ) => {
            let documentUrl =
              null

            let documentError =
              null


            if (
              item.storage_bucket &&
              item.storage_path
            ) {
              const {
                data:
                  signedData,
                error:
                  signedError
              } =
                await adminSupabase
                  .storage
                  .from(
                    item
                      .storage_bucket
                  )
                  .createSignedUrl(
                    item
                      .storage_path,

                    SIGNED_URL_SECONDS
                  )


              if (
                signedError
              ) {
                console.error(
                  `[admin-insurance-manual] signed URL failed for ${item.id}:`,
                  signedError
                )

                documentError =
                  "Documento temporaneamente non disponibile."
              } else {
                documentUrl =
                  signedData
                    ?.signedUrl ||
                  null
              }
            }


            return {
              id:
                item.id,

              originalFilename:
                item.original_filename ||
                "Documento",

              mimeType:
                item.mime_type ||
                "",

              fileSize:
                Number(
                  item.file_size ||
                  0
                ),

              declaredCertifications:
                item
                  .declared_certifications ||
                "",

              approvedCertifications:
                Array.isArray(
                  item
                    .approved_certifications
                )
                  ? item
                      .approved_certifications
                  : [],

              reviewedAt:
                item.reviewed_at ||
                null,

              createdAt:
                item.created_at ||
                null,

              documentUrl,

              documentError
            }
          }
        )
      )


    return NextResponse.json(
      {
        success:
          true,

        pilot: {
          id:
            pilot.id,

          email:
            pilot.email ||
            "",

          name:
            pilot.name ||
            "",

          surname:
            pilot.surname ||
            "",

          banned:
            pilot.banned ===
            true,

          accountStatus:
            pilot
              .account_status ||
            "active",

          insuranceVerified:
            pilot
              .insurance_verified ===
            true,

          insuranceExpiresAt:
            pilot
              .insurance_expires_at ||
            null
        },

        certificationDocuments:
          documents
      },
      {
        headers: {
          "Cache-Control":
            "private, no-store, max-age=0"
        }
      }
    )

  } catch (error) {
    console.error(
      "[admin-insurance-manual] unexpected GET error:",
      error
    )

    return jsonError(
      "Errore durante il caricamento dei dati assicurativi.",
      500
    )
  }
}


/*
 * =====================================================
 * POST
 *
 * Crea direttamente un'assicurazione verificata.
 *
 * submissionSource:
 * - certification_request
 * - team_upload
 * =====================================================
 */
export async function POST(
  request
) {
  let uploadedStoragePath =
    ""

  try {

    /*
     * =================================================
     * ORIGINE
     * =================================================
     */

    const origin =
      request.headers.get(
        "origin"
      )

    if (
      !origin ||
      origin !==
        request.nextUrl.origin
    ) {
      return jsonError(
        "Origine della richiesta non autorizzata.",
        403
      )
    }


    /*
     * =================================================
     * TEAM
     * =================================================
     */

    const {
      user,
      access
    } =
      await getTeamAccess()


    if (!user) {
      return jsonError(
        "Devi effettuare l'accesso.",
        401
      )
    }


    if (!access?.active) {
      return jsonError(
        "Accesso Team non autorizzato.",
        403
      )
    }


    if (
      !hasPermission(
        access,
        "certifications.review"
      )
    ) {
      return jsonError(
        "Non hai il permesso di aggiungere assicurazioni.",
        403
      )
    }


    /*
     * =================================================
     * FORM DATA
     * =================================================
     */

    let formData

    try {
      formData =
        await request.formData()
    } catch {
      return jsonError(
        "Dati della richiesta non validi."
      )
    }


    const pilotUserId =
      cleanText(
        formData.get(
          "pilotUserId"
        ),
        50
      )


    const insuranceCompany =
      cleanText(
        formData.get(
          "insuranceCompany"
        ),
        150
      )


    const policyNumber =
      cleanText(
        formData.get(
          "policyNumber"
        ),
        100
      )


    const validFromRaw =
      String(
        formData.get(
          "validFrom"
        ) ||
        ""
      ).trim()


    const validUntilRaw =
      String(
        formData.get(
          "validUntil"
        ) ||
        ""
      ).trim()


    const validFrom =
      validFromRaw
        ? normalizeDate(
            validFromRaw
          )
        : null


    const validUntil =
      normalizeDate(
        validUntilRaw
      )


    const submissionSource =
      cleanText(
        formData.get(
          "submissionSource"
        ),
        50
      )
        .toLowerCase()


    const sourceCertificationRequestId =
      cleanText(
        formData.get(
          "sourceCertificationRequestId"
        ),
        50
      )


    const reason =
      cleanText(
        formData.get(
          "reason"
        ),
        1000
      )


    /*
     * =================================================
     * VALIDAZIONE
     * =================================================
     */

    if (
      !isValidUuid(
        pilotUserId
      )
    ) {
      return jsonError(
        "Seleziona un pilota valido."
      )
    }


    if (
      insuranceCompany.length <
      2
    ) {
      return jsonError(
        "Inserisci la compagnia assicurativa."
      )
    }


    if (
      policyNumber.length <
      2
    ) {
      return jsonError(
        "Inserisci il numero della polizza."
      )
    }


    if (
      validFromRaw &&
      !validFrom
    ) {
      return jsonError(
        "La data di inizio validità non è corretta."
      )
    }


    if (!validUntil) {
      return jsonError(
        "Inserisci una data di scadenza valida."
      )
    }


    const today =
      new Date()
        .toISOString()
        .slice(
          0,
          10
        )


    if (
      validUntil <
      today
    ) {
      return jsonError(
        "Non puoi verificare una polizza già scaduta."
      )
    }


    if (
      validFrom &&
      validFrom >
      validUntil
    ) {
      return jsonError(
        "La data di inizio non può essere successiva alla scadenza."
      )
    }


    if (
      reason.length <
      10
    ) {
      return jsonError(
        "Inserisci una motivazione di almeno 10 caratteri."
      )
    }


    if (
      submissionSource !==
        "certification_request" &&
      submissionSource !==
        "team_upload"
    ) {
      return jsonError(
        "Fonte del documento non valida."
      )
    }


    const adminSupabase =
      createAdminSupabaseClient()


    let storageBucket =
      null

    let storagePath =
      null

    let originalFilename =
      null

    let mimeType =
      null

    let fileSize =
      null

    let certificationRequestId =
      null


    /*
     * =================================================
     * DOCUMENTO CERTIFICAZIONE ESISTENTE
     * =================================================
     */

    if (
      submissionSource ===
      "certification_request"
    ) {

      if (
        !isValidUuid(
          sourceCertificationRequestId
        )
      ) {
        return jsonError(
          "Seleziona il documento di certificazione che contiene la polizza."
        )
      }


      /*
       * Il controllo definitivo che il documento
       * appartenga al pilota e sia approved viene
       * eseguito anche dalla RPC SQL.
       */
      certificationRequestId =
        sourceCertificationRequestId

    }


    /*
     * =================================================
     * NUOVO FILE CARICATO DAL TEAM
     * =================================================
     */

    if (
      submissionSource ===
      "team_upload"
    ) {

      const file =
        formData.get(
          "file"
        )


      if (
        !file ||
        typeof
          file.arrayBuffer !==
          "function"
      ) {
        return jsonError(
          "Carica il documento assicurativo."
        )
      }


      mimeType =
        String(
          file.type || ""
        )
          .trim()
          .toLowerCase()


      if (
        !ALLOWED_TYPES.has(
          mimeType
        )
      ) {
        return jsonError(
          "Formato non consentito. Usa JPG, PNG, WEBP o PDF."
        )
      }


      fileSize =
        Number(
          file.size || 0
        )


      if (
        !Number.isFinite(
          fileSize
        ) ||
        fileSize <= 0
      ) {
        return jsonError(
          "Il documento è vuoto o non valido."
        )
      }


      if (
        fileSize >
        MAX_FILE_SIZE
      ) {
        return jsonError(
          "Il documento non può superare 10 MB."
        )
      }


      const arrayBuffer =
        await file
          .arrayBuffer()


      const signatureBytes =
        new Uint8Array(
          arrayBuffer.slice(
            0,
            16
          )
        )


      if (
        !hasAllowedSignature(
          signatureBytes,
          mimeType
        )
      ) {
        return jsonError(
          "Il contenuto del file non corrisponde al formato dichiarato."
        )
      }


      originalFilename =
        sanitizeFilename(
          file.name
        )


      const uploadId =
        randomUUID()


      storageBucket =
        BUCKET_NAME


      storagePath = [
        pilotUserId,
        "team",
        uploadId,
        originalFilename
      ].join("/")


      uploadedStoragePath =
        storagePath


      const {
        error:
          uploadError
      } =
        await adminSupabase
          .storage
          .from(
            BUCKET_NAME
          )
          .upload(
            storagePath,
            Buffer.from(
              arrayBuffer
            ),
            {
              contentType:
                mimeType,

              cacheControl:
                "3600",

              upsert:
                false
            }
          )


      if (
        uploadError
      ) {
        console.error(
          "[admin-insurance-manual] upload failed:",
          uploadError
        )

        return jsonError(
          "Non è stato possibile caricare il documento.",
          500
        )
      }
    }


    /*
     * =================================================
     * RPC ATOMICA
     * =================================================
     */

    const {
      data:
        result,
      error:
        rpcError
    } =
      await adminSupabase
        .rpc(
          "admin_add_pilot_insurance",
          {
            p_actor_user_id:
              user.id,

            p_pilot_user_id:
              pilotUserId,

            p_insurance_company:
              insuranceCompany,

            p_policy_number:
              policyNumber,

            p_valid_from:
              validFrom,

            p_valid_until:
              validUntil,

            p_submission_source:
              submissionSource,

            p_source_certification_request_id:
              certificationRequestId,

            p_storage_bucket:
              storageBucket,

            p_storage_path:
              storagePath,

            p_original_filename:
              originalFilename,

            p_mime_type:
              mimeType,

            p_file_size:
              fileSize,

            p_reason:
              reason
          }
        )


    if (rpcError) {

      if (
        uploadedStoragePath
      ) {
        await removeFile(
          adminSupabase,
          uploadedStoragePath
        )
      }


      console.error(
        "[admin-insurance-manual] RPC failed:",
        rpcError
      )


      const message =
        String(
          rpcError.message ||
          ""
        )
          .toUpperCase()


      if (
        message.includes(
          "PILOTA_MANCANTE"
        ) ||
        message.includes(
          "PROFILO_PILOTA_NON_TROVATO"
        )
      ) {
        return jsonError(
          "Il pilota selezionato non è stato trovato.",
          404
        )
      }


      if (
        message.includes(
          "PROFILO_NON_PILOTA"
        )
      ) {
        return jsonError(
          "L'account selezionato non è un pilota.",
          409
        )
      }


      if (
        message.includes(
          "PROFILO_PILOTA_NON_ATTIVO"
        ) ||
        message.includes(
          "PROFILO_PILOTA_SOSPESO"
        )
      ) {
        return jsonError(
          "Il pilota non ha un account attivo.",
          409
        )
      }


      if (
        message.includes(
          "PERMESSO_ASSICURAZIONI_NEGATO"
        )
      ) {
        return jsonError(
          "Non hai il permesso di eseguire questa operazione.",
          403
        )
      }


      if (
        message.includes(
          "RICHIESTA_ASSICURAZIONE_PENDENTE"
        )
      ) {
        return jsonError(
          "Questo pilota ha già un'assicurazione in attesa di verifica. Revisiona prima quella richiesta.",
          409
        )
      }


      if (
        message.includes(
          "ASSICURAZIONE_GIA_REGISTRATA"
        )
      ) {
        return jsonError(
          "Questa assicurazione risulta già registrata.",
          409
        )
      }


      if (
        message.includes(
          "POLIZZA_SCADUTA"
        )
      ) {
        return jsonError(
          "La polizza è già scaduta.",
          409
        )
      }


      if (
        message.includes(
          "DOCUMENTO_CERTIFICAZIONE_MANCANTE"
        )
      ) {
        return jsonError(
          "Seleziona un documento di certificazione.",
          400
        )
      }


      if (
        message.includes(
          "DOCUMENTO_CERTIFICAZIONE_NON_TROVATO"
        )
      ) {
        return jsonError(
          "Il documento selezionato non appartiene al pilota.",
          409
        )
      }


      if (
        message.includes(
          "DOCUMENTO_CERTIFICAZIONE_NON_APPROVATO"
        )
      ) {
        return jsonError(
          "Il documento deve essere già stato approvato dal Team.",
          409
        )
      }


      if (
        message.includes(
          "DOCUMENTO_ASSICURAZIONE_NON_TROVATO"
        ) ||
        message.includes(
          "DOCUMENTO_ASSICURAZIONE_NON_DISPONIBILE"
        )
      ) {
        return jsonError(
          "Il documento assicurativo non è disponibile nello Storage.",
          409
        )
      }


      return jsonError(
        "Non è stato possibile aggiungere l'assicurazione.",
        500
      )
    }


    uploadedStoragePath =
      ""


    return NextResponse.json(
      {
        success:
          true,

        message:
          "Assicurazione aggiunta e verificata correttamente.",

        result
      },
      {
        headers: {
          "Cache-Control":
            "private, no-store, max-age=0"
        }
      }
    )

  } catch (error) {

    console.error(
      "[admin-insurance-manual] unexpected POST error:",
      error
    )

    return jsonError(
      "Errore durante l'aggiunta dell'assicurazione.",
      500
    )
  }
}