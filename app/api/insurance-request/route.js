import {
  randomUUID
} from "node:crypto"

import {
  NextResponse
} from "next/server"

import {
  sendTrackedEmail
} from "@/lib/email/send-tracked-email"

import {
  createServerSupabaseClient
} from "@/lib/supabase/server"

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


function normalizeRole(value) {
  const role =
    String(value || "")
      .trim()
      .toLowerCase()

  if (
    role === "pilot" ||
    role === "pilota"
  ) {
    return "pilot"
  }

  return role
}


function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll(
      "'",
      "&#039;"
    )
}


function cleanText(
  value,
  maxLength
) {
  return String(value || "")
    .replace(/\u0000/g, "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(
      0,
      maxLength
    )
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


function normalizeDate(
  value
) {
  const raw =
    String(value || "")
      .trim()

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


function todayRomeDate() {
  const parts =
    new Intl.DateTimeFormat(
      "en-CA",
      {
        timeZone:
          "Europe/Rome",

        year:
          "numeric",

        month:
          "2-digit",

        day:
          "2-digit"
      }
    )
      .formatToParts(
        new Date()
      )

  const year =
    parts.find(
      (part) =>
        part.type === "year"
    )?.value

  const month =
    parts.find(
      (part) =>
        part.type === "month"
    )?.value

  const day =
    parts.find(
      (part) =>
        part.type === "day"
    )?.value

  return `${year}-${month}-${day}`
}


async function removeUploadedFile(
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
      "[insurance-request] cleanup storage failed:",
      error
    )
  }
}


/*
 * =====================================================
 * GET
 *
 * Restituisce al pilota lo stato della propria
 * assicurazione senza esporre direttamente la tabella.
 * =====================================================
 */
export async function GET() {
  try {
    const supabase =
      await createServerSupabaseClient()

    const {
      data: {
        user
      },
      error:
        authError
    } =
      await supabase
        .auth
        .getUser()

    if (
      authError ||
      !user
    ) {
      return jsonError(
        "Devi effettuare l'accesso.",
        401
      )
    }

    const adminSupabase =
      createAdminSupabaseClient()

    const {
      data:
        profile,
      error:
        profileError
    } =
      await adminSupabase
        .from("users")
        .select(`
          id,
          role,
          banned,
          account_status,
          insurance_verified,
          insurance_request_sent,
          insurance_expires_at
        `)
        .eq(
          "id",
          user.id
        )
        .maybeSingle()

    if (
      profileError ||
      !profile
    ) {
      return jsonError(
        "Profilo utente non trovato.",
        404
      )
    }

    if (
      normalizeRole(
        profile.role
      ) !== "pilot"
    ) {
      return jsonError(
        "Funzione disponibile solo per i piloti.",
        403
      )
    }

    const {
      data:
        latestRequest,
      error:
        requestError
    } =
      await adminSupabase
        .from(
          "pilot_insurance_requests"
        )
        .select(`
          id,
          status,
          insurance_company,
          policy_number,
          valid_from,
          valid_until,
          rejection_reason,
          reviewed_at,
          created_at,
          updated_at
        `)
        .eq(
          "user_id",
          user.id
        )
        .order(
          "created_at",
          {
            ascending:
              false
          }
        )
        .limit(1)
        .maybeSingle()

    if (requestError) {
      console.error(
        "[insurance-request] latest request lookup failed:",
        requestError
      )

      return jsonError(
        "Non è stato possibile controllare lo stato dell'assicurazione.",
        500
      )
    }

    const today =
      todayRomeDate()

    const insuranceValid =
      profile
        .insurance_verified ===
        true &&
      Boolean(
        profile
          .insurance_expires_at
      ) &&
      profile
        .insurance_expires_at >=
        today

    return NextResponse.json(
      {
        success: true,

        insurance: {
          verified:
            insuranceValid,

          storedVerified:
            profile
              .insurance_verified ===
              true,

          expiresAt:
            profile
              .insurance_expires_at ||
            null,

          expired:
            Boolean(
              profile
                .insurance_expires_at
            ) &&
            profile
              .insurance_expires_at <
              today,

          requestSent:
            profile
              .insurance_request_sent ===
              true,

          latestRequest:
            latestRequest ||
            null
        }
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
      "[insurance-request] GET unexpected error:",
      error
    )

    return jsonError(
      "Errore durante il caricamento dell'assicurazione.",
      500
    )
  }
}


/*
 * =====================================================
 * POST
 *
 * Invio di una nuova assicurazione da verificare.
 * =====================================================
 */
export async function POST(
  request
) {
  let storagePath = ""
  let requestId = ""

  try {

    /*
     * =================================================
     * ORIGINE
     * =================================================
     */

    const requestOrigin =
      request.headers.get(
        "origin"
      )

    if (
      !requestOrigin ||
      requestOrigin !==
        request.nextUrl.origin
    ) {
      return jsonError(
        "Origine della richiesta non autorizzata.",
        403
      )
    }


    /*
     * =================================================
     * AUTENTICAZIONE
     * =================================================
     */

    const supabase =
      await createServerSupabaseClient()

    const {
      data: {
        user
      },
      error:
        authError
    } =
      await supabase
        .auth
        .getUser()

    if (
      authError ||
      !user
    ) {
      return jsonError(
        "Devi effettuare l'accesso.",
        401
      )
    }

    const adminSupabase =
      createAdminSupabaseClient()


    /*
     * =================================================
     * PROFILO
     * =================================================
     */

    const {
      data:
        profile,
      error:
        profileError
    } =
      await adminSupabase
        .from("users")
        .select(`
          id,
          email,
          role,
          name,
          surname,
          banned,
          account_status,
          insurance_verified,
          insurance_request_sent,
          insurance_expires_at
        `)
        .eq(
          "id",
          user.id
        )
        .maybeSingle()

    if (
      profileError ||
      !profile
    ) {
      return jsonError(
        "Profilo utente non trovato.",
        404
      )
    }

    if (
      normalizeRole(
        profile.role
      ) !== "pilot"
    ) {
      return jsonError(
        "Solo i piloti possono inviare l'assicurazione.",
        403
      )
    }

    if (
      profile.banned ===
      true
    ) {
      return jsonError(
        "Il tuo account è sospeso.",
        403
      )
    }

    if (
      String(
        profile
          .account_status ||
          "active"
      )
        .trim()
        .toLowerCase() !==
      "active"
    ) {
      return jsonError(
        "Il tuo account non è attivo.",
        403
      )
    }


    /*
     * =================================================
     * RICHIESTA GIÀ PENDENTE
     * =================================================
     */

    const {
      data:
        pendingRequest,
      error:
        pendingError
    } =
      await adminSupabase
        .from(
          "pilot_insurance_requests"
        )
        .select(
          "id,created_at"
        )
        .eq(
          "user_id",
          user.id
        )
        .eq(
          "status",
          "pending"
        )
        .maybeSingle()

    if (pendingError) {
      console.error(
        "[insurance-request] pending lookup failed:",
        pendingError
      )

      return jsonError(
        "Non è stato possibile controllare le richieste esistenti.",
        500
      )
    }

    if (pendingRequest) {
      return jsonError(
        "Hai già un'assicurazione in attesa di verifica.",
        409
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

    const rawValidFrom =
      String(
        formData.get(
          "validFrom"
        ) || ""
      ).trim()

    const rawValidUntil =
      String(
        formData.get(
          "validUntil"
        ) || ""
      ).trim()

    const validFrom =
      rawValidFrom
        ? normalizeDate(
            rawValidFrom
          )
        : null

    const validUntil =
      normalizeDate(
        rawValidUntil
      )


    /*
     * =================================================
     * VALIDAZIONE DATI ASSICURAZIONE
     * =================================================
     */

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
      rawValidFrom &&
      !validFrom
    ) {
      return jsonError(
        "La data di inizio validità non è valida."
      )
    }

    if (!validUntil) {
      return jsonError(
        "Inserisci una data di scadenza valida."
      )
    }

    const today =
      todayRomeDate()

    if (
      validUntil <
      today
    ) {
      return jsonError(
        "Non puoi inviare una polizza già scaduta."
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


    /*
     * =================================================
     * FILE
     * =================================================
     */

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
        "Carica una foto o un PDF della polizza assicurativa."
      )
    }

    const mimeType =
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

    const fileSize =
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


    /*
     * =================================================
     * PERCORSO STORAGE PRIVATO
     * =================================================
     */

    requestId =
      randomUUID()

    const originalFilename =
      sanitizeFilename(
        file.name
      )

    storagePath = [
      user.id,
      requestId,
      originalFilename
    ].join("/")

    const fileBuffer =
      Buffer.from(
        arrayBuffer
      )


    /*
     * =================================================
     * UPLOAD
     * =================================================
     */

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
          fileBuffer,
          {
            contentType:
              mimeType,

            cacheControl:
              "3600",

            upsert:
              false
          }
        )

    if (uploadError) {
      console.error(
        "[insurance-request] upload failed:",
        uploadError
      )

      return jsonError(
        "Non è stato possibile caricare il documento.",
        500
      )
    }


    /*
     * =================================================
     * SALVA RICHIESTA
     * =================================================
     */

    const {
      data:
        createdRequest,
      error:
        insertError
    } =
      await adminSupabase
        .from(
          "pilot_insurance_requests"
        )
        .insert({
          id:
            requestId,

          user_id:
            user.id,

          status:
            "pending",

          insurance_company:
            insuranceCompany,

          policy_number:
            policyNumber,

          valid_from:
            validFrom,

          valid_until:
            validUntil,

          storage_bucket:
            BUCKET_NAME,

          storage_path:
            storagePath,

          original_filename:
            originalFilename,

          mime_type:
            mimeType,

          file_size:
            fileSize
        })
        .select(`
          id,
          status,
          insurance_company,
          policy_number,
          valid_from,
          valid_until,
          created_at
        `)
        .single()

    if (insertError) {
      await removeUploadedFile(
        adminSupabase,
        storagePath
      )

      if (
        insertError.code ===
        "23505"
      ) {
        return jsonError(
          "Hai già un'assicurazione in attesa di verifica.",
          409
        )
      }

      console.error(
        "[insurance-request] database insert failed:",
        insertError
      )

      return jsonError(
        "Non è stato possibile registrare la richiesta.",
        500
      )
    }


    /*
     * =================================================
     * PROFILO PILOTA
     * =================================================
     */

    const {
      error:
        profileUpdateError
    } =
      await adminSupabase
        .from("users")
        .update({
          insurance_request_sent:
            true
        })
        .eq(
          "id",
          user.id
        )

    if (
      profileUpdateError
    ) {
      console.error(
        "[insurance-request] profile update failed:",
        profileUpdateError
      )

      await adminSupabase
        .from(
          "pilot_insurance_requests"
        )
        .delete()
        .eq(
          "id",
          requestId
        )

      await removeUploadedFile(
        adminSupabase,
        storagePath
      )

      return jsonError(
        "Non è stato possibile completare la richiesta.",
        500
      )
    }


    /*
     * =================================================
     * AVVISO EMAIL AL TEAM
     *
     * Come per le certificazioni, il documento
     * NON viene allegato all'email.
     * =================================================
     */

    let emailSent =
      false

    const fullName =
      [
        profile.name,
        profile.surname
      ]
        .filter(Boolean)
        .join(" ")
        .trim() ||
      "Pilota DroneGuard"

    const pilotEmail =
      String(
        profile.email ||
          user.email ||
          ""
      ).trim()

    const siteUrl =
      String(
        process.env
          .NEXT_PUBLIC_SITE_URL ||
          "https://www.droneguard.it"
      ).replace(
        /\/+$/,
        ""
      )

    try {
      const emailResult =
        await sendTrackedEmail({
          idempotencyKey:
            `insurance-request:${requestId}:team-notification`,

          category:
            "insurance_request",

          templateKey:
            "insurance_request_team_notification",

          recipientEmail:
            "assistenza@droneguard.it",

          recipientName:
            "Team DroneGuard",

          senderEmail:
            "noreply@droneguard.it",

          senderName:
            "DroneGuard",

          subject:
            "Nuova assicurazione pilota da verificare",

          html: `
            <h2>
              Nuova assicurazione da verificare
            </h2>

            <p>
              È arrivata una nuova richiesta
              assicurativa nel pannello Team.
            </p>

            <p>
              <strong>Pilota:</strong>
              ${escapeHtml(
                fullName
              )}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(
                pilotEmail
              )}
            </p>

            <p>
              <strong>Compagnia:</strong>
              ${escapeHtml(
                insuranceCompany
              )}
            </p>

            <p>
              <strong>Numero polizza:</strong>
              ${escapeHtml(
                policyNumber
              )}
            </p>

            <p>
              <strong>Scadenza:</strong>
              ${escapeHtml(
                validUntil
              )}
            </p>

            <p>
              Il documento è conservato nello
              Storage privato e non è allegato
              a questa email.
            </p>

            <p>
              <a href="${siteUrl}/admin/certifications">
                Apri il pannello Team
              </a>
            </p>
          `,

          text: [
            "Nuova assicurazione pilota da verificare",
            "",
            `Pilota: ${fullName}`,
            `Email: ${pilotEmail}`,
            `Compagnia: ${insuranceCompany}`,
            `Numero polizza: ${policyNumber}`,
            `Scadenza: ${validUntil}`,
            "",
            "Il documento è conservato nello Storage privato.",
            `${siteUrl}/admin/certifications`
          ].join("\n"),

          sourceType:
            "insurance_request",

          sourceId:
            requestId,

          triggeredByUserId:
            user.id,

          metadata: {
            pilotUserId:
              user.id,

            insuranceRequestId:
              requestId,

            insuranceCompany,

            validUntil
          },

          maxAttempts:
            3
        })

      emailSent =
        emailResult
          .success ===
        true

      if (!emailSent) {
        console.error(
          "[insurance-request] team notification email failed:",
          {
            deliveryId:
              emailResult
                .deliveryId ||
              null,

            status:
              emailResult
                .status ||
              null,

            error:
              emailResult
                .error ||
              "Errore email non disponibile."
          }
        )
      }

    } catch (
      emailError
    ) {
      console.error(
        "[insurance-request] team notification unexpected error:",
        emailError
      )

      /*
       * L'email non deve annullare
       * la richiesta già salvata.
       */
      emailSent =
        false
    }


    return NextResponse.json(
      {
        success:
          true,

        request:
          createdRequest,

        emailNotificationSent:
          emailSent
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
      "[insurance-request] unexpected error:",
      error
    )

    return jsonError(
      "Errore durante l'invio dell'assicurazione.",
      500
    )
  }
}