import { NextResponse } from "next/server"

import { getTeamAccess } from "@/lib/team/access"
import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

const PAGE_SIZE = 20
const SIGNED_URL_DURATION_SECONDS = 5 * 60

const ALLOWED_CERTIFICATIONS = new Set([
  "a1a3",
  "a2",
  "sts",
  "sts01",
  "sts02",
  "specific",
  "open",
  "cro",
  "luc",
  "bvlos",
  "notturno",
  "termografia",
  "fpv_racing",
  "enac"
])

const ALLOWED_STATUSES = new Set([
  "all",
  "pending",
  "approved",
  "rejected"
])

function jsonError(message, status = 400) {
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

function clampPage(value) {
  const parsed = Number.parseInt(
    String(value || ""),
    10
  )

  if (
    !Number.isFinite(parsed) ||
    parsed < 1
  ) {
    return 1
  }

  return Math.min(parsed, 10000)
}

function normalizeStatus(value) {
  const status = String(value || "pending")
    .trim()
    .toLowerCase()

  return ALLOWED_STATUSES.has(status)
    ? status
    : ""
}

function normalizeCertificationList(value) {
  if (!Array.isArray(value)) {
    return []
  }

  return [
    ...new Set(
      value
        .map((item) =>
          String(item || "")
            .trim()
            .toLowerCase()
        )
        .filter(Boolean)
    )
  ]
}

function normalizeProfile(profile) {
  if (!profile) {
    return null
  }

  return {
    id: profile.id,
    email:
      profile.email ||
      "Email non disponibile",
    name:
      profile.name || "",
    surname:
      profile.surname || "",
    role:
      profile.role || "",
    certifications:
      profile.certifications || "",
    verified:
      profile.verified === true,
    banned:
      profile.banned === true
  }
}

export async function GET(request) {
  try {
    // =====================================================
    // ACCESSO TEAM
    // =====================================================

    const {
      user,
      access
    } = await getTeamAccess()

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

    const permissions =
      Array.isArray(access.permissions)
        ? access.permissions
        : []

    if (
      !permissions.includes(
        "certifications.view"
      )
    ) {
      return jsonError(
        "Non hai il permesso di vedere le certificazioni.",
        403
      )
    }

    // =====================================================
    // FILTRI E PAGINAZIONE
    // =====================================================

    const searchParams =
      request.nextUrl.searchParams

    const page = clampPage(
      searchParams.get("page")
    )

    const status = normalizeStatus(
      searchParams.get("status")
    )

    if (!status) {
      return jsonError(
        "Filtro stato non valido."
      )
    }

    const from =
      (page - 1) * PAGE_SIZE

    const to =
      from + PAGE_SIZE - 1

    const adminSupabase =
      createAdminSupabaseClient()

    // =====================================================
    // CARICAMENTO RICHIESTE
    // =====================================================

    let query = adminSupabase
      .from("certification_requests")
      .select(
        `
          id,
          user_id,
          status,
          storage_bucket,
          storage_path,
          original_filename,
          mime_type,
          file_size,
          declared_certifications,
          approved_certifications,
          review_notes,
          rejection_reason,
          reviewed_by,
          reviewed_at,
          email_notification_sent_at,
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
          ascending: false
        }
      )
      .range(from, to)

    if (status !== "all") {
      query = query.eq(
        "status",
        status
      )
    }

    const {
      data: requests,
      error: requestsError,
      count
    } = await query

    if (requestsError) {
      console.error(
        "[admin-certifications] requests load failed:",
        requestsError
      )

      return jsonError(
        "Non è stato possibile caricare le richieste.",
        500
      )
    }

    const rows =
      Array.isArray(requests)
        ? requests
        : []

    // =====================================================
    // PROFILI DEI PILOTI
    // =====================================================

    const userIds = [
      ...new Set(
        rows
          .map((item) => item.user_id)
          .filter(Boolean)
      )
    ]

    let profileMap = new Map()

    if (userIds.length > 0) {
      const {
        data: profiles,
        error: profilesError
      } = await adminSupabase
        .from("users")
        .select(`
          id,
          email,
          name,
          surname,
          role,
          certifications,
          verified,
          banned
        `)
        .in("id", userIds)

      if (profilesError) {
        console.error(
          "[admin-certifications] profiles load failed:",
          profilesError
        )
      } else {
        profileMap = new Map(
          (profiles || []).map(
            (profile) => [
              profile.id,
              normalizeProfile(profile)
            ]
          )
        )
      }
    }

    // =====================================================
    // REVISORI TEAM
    // =====================================================

    const reviewerIds = [
      ...new Set(
        rows
          .map((item) => item.reviewed_by)
          .filter(Boolean)
      )
    ]

    let reviewerMap = new Map()

    if (reviewerIds.length > 0) {
      const {
        data: reviewers,
        error: reviewersError
      } = await adminSupabase
        .from("team_members")
        .select(`
          user_id,
          display_name,
          role_key
        `)
        .in("user_id", reviewerIds)

      if (reviewersError) {
        console.error(
          "[admin-certifications] reviewers load failed:",
          reviewersError
        )
      } else {
        reviewerMap = new Map(
          (reviewers || []).map(
            (reviewer) => [
              reviewer.user_id,
              {
                userId:
                  reviewer.user_id,
                displayName:
                  reviewer.display_name ||
                  "Membro Team",
                roleKey:
                  reviewer.role_key || ""
              }
            ]
          )
        )
      }
    }

    // =====================================================
    // URL FIRMATI TEMPORANEI
    // =====================================================

    const completeRequests =
      await Promise.all(
        rows.map(async (item) => {
          let documentUrl = null
          let documentError = null

          if (
            item.storage_bucket &&
            item.storage_path
          ) {
            const {
              data: signedData,
              error: signedError
            } = await adminSupabase
              .storage
              .from(item.storage_bucket)
              .createSignedUrl(
                item.storage_path,
                SIGNED_URL_DURATION_SECONDS
              )

            if (signedError) {
              console.error(
                `[admin-certifications] signed URL failed for ${item.id}:`,
                signedError
              )

              documentError =
                "Documento temporaneamente non disponibile."
            } else {
              documentUrl =
                signedData?.signedUrl || null
            }
          }

          return {
            id:
              item.id,

            userId:
              item.user_id,

            status:
              item.status,

            originalFilename:
              item.original_filename,

            mimeType:
              item.mime_type,

            fileSize:
              Number(item.file_size || 0),

            declaredCertifications:
              item.declared_certifications || "",

            approvedCertifications:
              Array.isArray(
                item.approved_certifications
              )
                ? item.approved_certifications
                : [],

            reviewNotes:
              item.review_notes || "",

            rejectionReason:
              item.rejection_reason || "",

            reviewedBy:
              item.reviewed_by,

            reviewedAt:
              item.reviewed_at,

            emailNotificationSentAt:
              item.email_notification_sent_at,

            createdAt:
              item.created_at,

            updatedAt:
              item.updated_at,

            documentUrl,
            documentError,

            documentExpiresIn:
              SIGNED_URL_DURATION_SECONDS,

            pilot:
              profileMap.get(
                item.user_id
              ) || null,

            reviewer:
              item.reviewed_by
                ? reviewerMap.get(
                    item.reviewed_by
                  ) || null
                : null
          }
        })
      )

    const total =
      Number(count || 0)

    const totalPages =
      Math.max(
        1,
        Math.ceil(
          total / PAGE_SIZE
        )
      )

    return NextResponse.json(
  {
    success: true,

    requests:
      completeRequests,

    permissions: {
      canView: true,

      canReview:
        permissions.includes(
          "certifications.review"
        )
    },

    pagination: {
      page,
      pageSize:
        PAGE_SIZE,
      total,
      totalPages
    },

    filters: {
      status
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
      "[admin-certifications] unexpected GET error:",
      error
    )

    return jsonError(
      "Errore durante il caricamento delle certificazioni.",
      500
    )
  }
}

export async function PATCH(request) {
  try {
    // =====================================================
    // CONTROLLO ORIGINE
    // =====================================================

    const requestOrigin =
      request.headers.get("origin")

    if (
  !requestOrigin ||
  requestOrigin !== request.nextUrl.origin
) {
      return jsonError(
        "Origine della richiesta non autorizzata.",
        403
      )
    }

    // =====================================================
    // ACCESSO TEAM
    // =====================================================

    const {
      user,
      access
    } = await getTeamAccess()

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

    const permissions =
      Array.isArray(access.permissions)
        ? access.permissions
        : []

    if (
      !permissions.includes(
        "certifications.review"
      )
    ) {
      return jsonError(
        "Non hai il permesso di approvare o rifiutare certificazioni.",
        403
      )
    }

    // =====================================================
    // LETTURA DATI
    // =====================================================

    let body

    try {
      body = await request.json()
    } catch {
      return jsonError(
        "Dati della richiesta non validi."
      )
    }

    const requestId =
      String(body?.requestId || "")
        .trim()

    const decision =
      String(body?.decision || "")
        .trim()
        .toLowerCase()

    const reviewNotes =
      String(body?.reviewNotes || "")
        .trim()

    const rejectionReason =
      String(body?.rejectionReason || "")
        .trim()

    const approvedCertifications =
      normalizeCertificationList(
        body?.approvedCertifications
      )

    // =====================================================
    // VALIDAZIONE
    // =====================================================

    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

    if (!uuidRegex.test(requestId)) {
      return jsonError(
        "Identificativo richiesta non valido."
      )
    }

    if (
      decision !== "approved" &&
      decision !== "rejected"
    ) {
      return jsonError(
        "La decisione deve essere approved oppure rejected."
      )
    }

    if (reviewNotes.length > 2000) {
      return jsonError(
        "Le note non possono superare 2000 caratteri."
      )
    }

    const invalidCertification =
      approvedCertifications.find(
        (item) =>
          !ALLOWED_CERTIFICATIONS.has(item)
      )

    if (invalidCertification) {
      return jsonError(
        "È stata selezionata una certificazione non valida."
      )
    }

    if (
      decision === "approved" &&
      approvedCertifications.length === 0
    ) {
      return jsonError(
        "Seleziona almeno una certificazione da approvare."
      )
    }

    if (
      decision === "rejected" &&
      (
        rejectionReason.length < 5 ||
        rejectionReason.length > 1000
      )
    ) {
      return jsonError(
        "La motivazione del rifiuto deve contenere da 5 a 1000 caratteri."
      )
    }

    // =====================================================
    // REVISIONE ATOMICA
    // =====================================================

    const adminSupabase =
      createAdminSupabaseClient()

    const {
      data: result,
      error: reviewError
    } = await adminSupabase.rpc(
      "review_certification_request",
      {
        p_request_id:
          requestId,

        p_decision:
          decision,

        p_approved_certifications:
          decision === "approved"
            ? approvedCertifications
            : [],

        p_review_notes:
          reviewNotes || null,

        p_rejection_reason:
          decision === "rejected"
            ? rejectionReason
            : null,

        p_actor_user_id:
          user.id
      }
    )

    if (reviewError) {
      console.error(
        "[admin-certifications] review failed:",
        reviewError
      )

      const errorMessage =
        String(
          reviewError.message || ""
        ).toUpperCase()

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
          "PERMESSO_CERTIFICAZIONI_NEGATO"
        )
      ) {
        return jsonError(
          "Non hai il permesso di revisionare questa richiesta.",
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
  )
) {
  return jsonError(
    "L'account del pilota è stato disattivato e la certificazione non può essere approvata.",
    409
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
      decision === "approved"
        ? "Certificazione approvata correttamente."
        : "Certificazione rifiutata correttamente.",

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
      "[admin-certifications] unexpected PATCH error:",
      error
    )

    return jsonError(
      "Errore durante la revisione della certificazione.",
      500
    )
  }
}