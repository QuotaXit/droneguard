import {
  NextResponse
} from "next/server"

import {
  getTeamAccess
} from "@/lib/team/access"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"


export const dynamic =
  "force-dynamic"

export const runtime =
  "nodejs"


const PAGE_SIZE = 20

const SIGNED_URL_DURATION_SECONDS =
  5 * 60

const MAX_BODY_BYTES =
  20_000


const ALLOWED_STATUSES =
  new Set([
    "all",
    "pending",
    "approved",
    "rejected"
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
  const permissions =
    Array.isArray(
      access?.permissions
    )
      ? access.permissions
      : []

  return (
    permissions.includes(
      permission
    )
  )
}


function clampPage(value) {
  const parsed =
    Number.parseInt(
      String(value || ""),
      10
    )

  if (
    !Number.isFinite(parsed) ||
    parsed < 1
  ) {
    return 1
  }

  return Math.min(
    parsed,
    10000
  )
}


function normalizeStatus(value) {
  const status =
    String(
      value || "pending"
    )
      .trim()
      .toLowerCase()

  return ALLOWED_STATUSES.has(
    status
  )
    ? status
    : ""
}


function isValidUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    String(value || "")
  )
}


function normalizePilot(
  pilot
) {
  if (!pilot) {
    return null
  }

  return {
    id:
      pilot.id,

    email:
      pilot.email || "",

    name:
      pilot.name || "",

    surname:
      pilot.surname || "",

    role:
      pilot.role || "",

    insuranceVerified:
      pilot.insurance_verified ===
      true,

    insuranceExpiresAt:
      pilot.insurance_expires_at ||
      null
  }
}


/*
 * =====================================================
 * GET
 *
 * Elenco richieste assicurative per il Team.
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
        "Non hai il permesso di vedere le assicurazioni.",
        403
      )
    }


    /*
     * ===============================================
     * FILTRI
     * ===============================================
     */

    const searchParams =
      request.nextUrl
        .searchParams

    const page =
      clampPage(
        searchParams.get(
          "page"
        )
      )

    const status =
      normalizeStatus(
        searchParams.get(
          "status"
        )
      )

    if (!status) {
      return jsonError(
        "Filtro stato non valido."
      )
    }

    const from =
      (
        page - 1
      ) *
      PAGE_SIZE

    const to =
      from +
      PAGE_SIZE -
      1


    const adminSupabase =
      createAdminSupabaseClient()


    /*
     * ===============================================
     * RICHIESTE
     * ===============================================
     */

    let query =
      adminSupabase
        .from(
          "pilot_insurance_requests"
        )
        .select(
          `
            id,
            user_id,
            status,
            insurance_company,
            policy_number,
            valid_from,
            valid_until,
            storage_bucket,
            storage_path,
            original_filename,
            mime_type,
            file_size,
            review_notes,
            rejection_reason,
            reviewed_by,
            reviewed_at,
            created_at,
            updated_at
          `,
          {
            count: "exact"
          }
        )
        .order(
          "created_at",
          {
            ascending:
              false
          }
        )
        .range(
          from,
          to
        )

    if (
      status !== "all"
    ) {
      query =
        query.eq(
          "status",
          status
        )
    }

    const {
      data: requests,
      error:
        requestsError,
      count
    } =
      await query

    if (requestsError) {
      console.error(
        "[admin-insurances] requests load failed:",
        requestsError
      )

      return jsonError(
        "Non è stato possibile caricare le assicurazioni.",
        500
      )
    }


    /*
     * ===============================================
     * PROFILI PILOTI
     * ===============================================
     */

    const userIds = [
      ...new Set(
        (
          requests || []
        )
          .map(
            (item) =>
              item.user_id
          )
          .filter(Boolean)
      )
    ]

    let pilotsMap =
      new Map()

    if (
      userIds.length > 0
    ) {
      const {
        data:
          pilots,
        error:
          pilotsError
      } =
        await adminSupabase
          .from("users")
          .select(`
            id,
            email,
            name,
            surname,
            role,
            insurance_verified,
            insurance_expires_at
          `)
          .in(
            "id",
            userIds
          )

      if (pilotsError) {
        console.error(
          "[admin-insurances] pilots load failed:",
          pilotsError
        )

        return jsonError(
          "Non è stato possibile caricare i dati dei piloti.",
          500
        )
      }

      pilotsMap =
        new Map(
          (
            pilots || []
          ).map(
            (pilot) => [
              pilot.id,
              pilot
            ]
          )
        )
    }


    /*
     * ===============================================
     * URL FIRMATI TEMPORANEI
     * ===============================================
     */

    const completeRequests =
      await Promise.all(
        (
          requests || []
        ).map(
          async (
            item
          ) => {
            let documentUrl =
              null

            let documentError =
              null

            if (
              item
                .storage_bucket &&
              item
                .storage_path
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

                    SIGNED_URL_DURATION_SECONDS
                  )

              if (signedError) {
                console.error(
                  `[admin-insurances] signed URL failed for ${item.id}:`,
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

            const pilot =
              pilotsMap.get(
                item.user_id
              )

            return {
              id:
                item.id,

              userId:
                item.user_id,

              status:
                item.status,

              insuranceCompany:
                item.insurance_company ||
                "",

              policyNumber:
                item.policy_number ||
                "",

              validFrom:
                item.valid_from ||
                null,

              validUntil:
                item.valid_until ||
                null,

              originalFilename:
                item.original_filename ||
                "",

              mimeType:
                item.mime_type ||
                "",

              fileSize:
                Number(
                  item.file_size ||
                  0
                ),

              reviewNotes:
                item.review_notes ||
                "",

              rejectionReason:
                item.rejection_reason ||
                "",

              reviewedBy:
                item.reviewed_by ||
                null,

              reviewedAt:
                item.reviewed_at ||
                null,

              createdAt:
                item.created_at,

              updatedAt:
                item.updated_at,

              documentUrl,

              documentError,

              pilot:
                normalizePilot(
                  pilot
                )
            }
          }
        )
      )


    const total =
      Number(
        count || 0
      )

    const totalPages =
      Math.max(
        1,
        Math.ceil(
          total /
          PAGE_SIZE
        )
      )


    return NextResponse.json(
      {
        success: true,

        requests:
          completeRequests,

        pagination: {
          page,

          pageSize:
            PAGE_SIZE,

          total,

          totalPages
        },

        permissions: {
          canReview:
            hasPermission(
              access,
              "certifications.review"
            )
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
      "[admin-insurances] unexpected GET error:",
      error
    )

    return jsonError(
      "Errore durante il caricamento delle assicurazioni.",
      500
    )
  }
}


/*
 * =====================================================
 * PATCH
 *
 * Approva o rifiuta una richiesta assicurativa.
 * =====================================================
 */
export async function PATCH(
  request
) {
  try {

    /*
     * ===============================================
     * CONTROLLO ORIGINE
     * ===============================================
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
     * ===============================================
     * DIMENSIONE BODY
     * ===============================================
     */

    const contentLength =
      Number(
        request.headers.get(
          "content-length"
        ) || 0
      )

    if (
      Number.isFinite(
        contentLength
      ) &&
      contentLength >
        MAX_BODY_BYTES
    ) {
      return jsonError(
        "Richiesta troppo grande.",
        413
      )
    }


    /*
     * ===============================================
     * TEAM
     * ===============================================
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
        "Non hai il permesso di revisionare assicurazioni.",
        403
      )
    }


    /*
     * ===============================================
     * BODY
     * ===============================================
     */

    let body

    try {
      body =
        await request.json()
    } catch {
      return jsonError(
        "Dati della richiesta non validi."
      )
    }


    const requestId =
      String(
        body?.requestId ||
        ""
      ).trim()

    const decision =
      String(
        body?.decision ||
        ""
      )
        .trim()
        .toLowerCase()

    const reviewNotes =
      String(
        body?.reviewNotes ||
        ""
      )
        .trim()
        .slice(
          0,
          2001
        )

    const rejectionReason =
      String(
        body
          ?.rejectionReason ||
        ""
      )
        .trim()
        .slice(
          0,
          1001
        )


    /*
     * ===============================================
     * VALIDAZIONE
     * ===============================================
     */

    if (
      !isValidUuid(
        requestId
      )
    ) {
      return jsonError(
        "Identificativo richiesta non valido."
      )
    }


    if (
      decision !==
        "approved" &&
      decision !==
        "rejected"
    ) {
      return jsonError(
        "La decisione deve essere approved oppure rejected."
      )
    }


    if (
      reviewNotes.length >
      2000
    ) {
      return jsonError(
        "Le note non possono superare 2000 caratteri."
      )
    }


    if (
      decision ===
        "rejected" &&
      (
        rejectionReason.length <
          5 ||
        rejectionReason.length >
          1000
      )
    ) {
      return jsonError(
        "La motivazione del rifiuto deve contenere da 5 a 1000 caratteri."
      )
    }


    /*
     * ===============================================
     * REVISIONE ATOMICA
     * ===============================================
     */

    const adminSupabase =
      createAdminSupabaseClient()

    const {
      data: result,
      error:
        reviewError
    } =
      await adminSupabase
        .rpc(
          "review_pilot_insurance_request",
          {
            p_request_id:
              requestId,

            p_decision:
              decision,

            p_review_notes:
              reviewNotes ||
              null,

            p_rejection_reason:
              decision ===
              "rejected"
                ? rejectionReason
                : null,

            p_actor_user_id:
              user.id
          }
        )


    if (reviewError) {
      console.error(
        "[admin-insurances] review failed:",
        reviewError
      )

      const errorMessage =
        String(
          reviewError
            .message ||
          ""
        )
          .toUpperCase()


      if (
        errorMessage.includes(
          "RICHIESTA_NON_TROVATA"
        )
      ) {
        return jsonError(
          "La richiesta non è stata trovata.",
          404
        )
      }


      if (
        errorMessage.includes(
          "RICHIESTA_GIA_REVISIONATA"
        )
      ) {
        return jsonError(
          "La richiesta è già stata approvata o rifiutata.",
          409
        )
      }


      if (
        errorMessage.includes(
          "PERMESSO_ASSICURAZIONI_NEGATO"
        )
      ) {
        return jsonError(
          "Non hai il permesso di revisionare questa assicurazione.",
          403
        )
      }


      if (
        errorMessage.includes(
          "PROFILO_PILOTA_NON_TROVATO"
        )
      ) {
        return jsonError(
          "Il profilo del pilota non è più disponibile.",
          404
        )
      }


      if (
        errorMessage.includes(
          "PROFILO_PILOTA_NON_ATTIVO"
        ) ||
        errorMessage.includes(
          "PROFILO_PILOTA_SOSPESO"
        )
      ) {
        return jsonError(
          "L'account del pilota non è attivo e l'assicurazione non può essere approvata.",
          409
        )
      }


      if (
        errorMessage.includes(
          "POLIZZA_SCADUTA"
        )
      ) {
        return jsonError(
          "La polizza è già scaduta e non può essere approvata.",
          409
        )
      }


      if (
        errorMessage.includes(
          "MOTIVAZIONE_RIFIUTO_NON_VALIDA"
        )
      ) {
        return jsonError(
          "Inserisci una motivazione del rifiuto valida.",
          400
        )
      }


      return jsonError(
        "Non è stato possibile completare la revisione.",
        500
      )
    }


    return NextResponse.json(
      {
        success: true,

        message:
          decision ===
            "approved"
            ? "Assicurazione approvata correttamente."
            : "Assicurazione rifiutata correttamente.",

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
      "[admin-insurances] unexpected PATCH error:",
      error
    )

    return jsonError(
      "Errore durante la revisione dell'assicurazione.",
      500
    )
  }
}