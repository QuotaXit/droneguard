import {
  NextResponse
} from "next/server"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

import {
  getTeamAccess
} from "@/lib/team/access"

export const dynamic =
  "force-dynamic"

export const runtime =
  "nodejs"

const PAGE_SIZE = 30

const MAX_BODY_BYTES =
  20_000

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

const CERTIFICATION_DEFINITIONS = [
  {
    key: "a1a3",
    label: "A1/A3",
    column:
      "cert_a1a3_verified"
  },
  {
    key: "a2",
    label: "A2",
    column:
      "cert_a2_verified"
  },
  {
    key: "sts",
    label: "STS",
    column:
      "cert_sts_verified"
  },
  {
    key: "sts01",
    label: "STS-01",
    column:
      "cert_sts01_verified"
  },
  {
    key: "sts02",
    label: "STS-02",
    column:
      "cert_sts02_verified"
  },
  {
    key: "specific",
    label: "SPECIFIC",
    column:
      "cert_specific_verified"
  },
  {
    key: "open",
    label: "OPEN",
    column:
      "cert_open_verified"
  },
  {
    key: "cro",
    label: "CRO",
    column:
      "cert_cro_verified"
  },
  {
    key: "luc",
    label: "LUC",
    column:
      "cert_luc_verified"
  },
  {
    key: "bvlos",
    label: "BVLOS",
    column:
      "cert_bvlos_verified"
  },
  {
    key: "notturno",
    label: "NOTTURNO",
    column:
      "cert_notturno_verified"
  },
  {
    key: "termografia",
    label: "TERMOGRAFIA",
    column:
      "cert_termografia_verified"
  },
  {
    key: "fpv_racing",
    label: "FPV RACING",
    column:
      "cert_fpv_racing_verified"
  }
]

const ALLOWED_CERTIFICATIONS =
  new Set(
    CERTIFICATION_DEFINITIONS.map(
      (certification) =>
        certification.key
    )
  )

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
      status,
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0"
      }
    }
  )
}

function hasValidOrigin(request) {
  const origin =
    request.headers.get("origin")

  if (!origin) {
    return false
  }

  try {
    return (
      new URL(origin).origin ===
      new URL(request.url).origin
    )
  } catch {
    return false
  }
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
    10_000
  )
}

function normalizeSearch(value) {
  return String(value || "")
    .replace(/\u0000/g, "")
    .replace(/[,%()]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120)
}

function normalizeSingleLine(
  value,
  maxLength
) {
  return String(value || "")
    .replace(/\u0000/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength)
}

function normalizeCertificationList(
  value
) {
  if (!Array.isArray(value)) {
    return null
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
  ].sort()
}

function getActiveCertifications(
  profile
) {
  return CERTIFICATION_DEFINITIONS
    .filter(
      (certification) =>
        profile?.[
          certification.column
        ] === true
    )
    .map(
      (certification) =>
        certification.key
    )
}

function mapPilot(profile) {
  const fullName =
    [
      profile?.name,
      profile?.surname
    ]
      .filter(Boolean)
      .join(" ")
      .trim()

  const activeCertifications =
    getActiveCertifications(
      profile
    )

  return {
    id:
      profile.id,

    email:
      profile.email || "",

    name:
      profile.name || "",

    surname:
      profile.surname || "",

    fullName:
      fullName ||
      profile.email ||
      "Pilota senza nome",

    role:
      profile.role || "",

    verified:
      profile.verified === true,

    banned:
      profile.banned === true,

    certificationIndicator:
      profile
        .cert_enac_verified ===
      true,

    activeCertifications,

    certificationCount:
      activeCertifications.length,

    legacyCertifications:
      profile.certifications || ""
  }
}

export async function GET(
  request
) {
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
    Array.isArray(
      access.permissions
    )
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

  const searchParams =
    request.nextUrl.searchParams

  const page =
    clampPage(
      searchParams.get("page")
    )

  const search =
    normalizeSearch(
      searchParams.get("search")
    )

  const from =
    (page - 1) *
    PAGE_SIZE

  const to =
    from +
    PAGE_SIZE -
    1

  const adminSupabase =
    createAdminSupabaseClient()

  let query =
    adminSupabase
      .from("users")
      .select(
        `
          id,
          email,
          name,
          surname,
          role,
          certifications,
          verified,
          banned,
          cert_enac_verified,
          cert_a1a3_verified,
          cert_a2_verified,
          cert_sts_verified,
          cert_sts01_verified,
          cert_sts02_verified,
          cert_specific_verified,
          cert_open_verified,
          cert_cro_verified,
          cert_luc_verified,
          cert_bvlos_verified,
          cert_notturno_verified,
          cert_termografia_verified,
          cert_fpv_racing_verified
        `,
        {
          count: "exact"
        }
      )
      .in(
        "role",
        [
          "pilot",
          "pilota"
        ]
      )

.or(
  "account_status.eq.active,account_status.is.null"
)

      .order(
        "surname",
        {
          ascending: true,
          nullsFirst: false
        }
      )
      .order(
        "name",
        {
          ascending: true,
          nullsFirst: false
        }
      )
      .order(
        "email",
        {
          ascending: true,
          nullsFirst: false
        }
      )

  if (search) {
    const escapedSearch =
      search.replace(
        /[%_\\]/g,
        "\\$&"
      )

    const pattern =
      `%${escapedSearch}%`

    query =
      query.or(
        [
          `email.ilike.${pattern}`,
          `name.ilike.${pattern}`,
          `surname.ilike.${pattern}`
        ].join(",")
      )
  }

  query =
    query.range(
      from,
      to
    )

  const {
    data: profiles,
    count,
    error
  } = await query

  if (error) {
    console.error(
      "[admin-certification-pilots] Errore caricamento piloti:",
      error
    )

    return jsonError(
      "Impossibile caricare i piloti e le certificazioni.",
      500
    )
  }

  const pilots =
    (profiles || []).map(
      mapPilot
    )

  const total =
    Number(count || 0)

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

      pilots,

      certificationCatalog:
        CERTIFICATION_DEFINITIONS.map(
          (certification) => ({
            key:
              certification.key,

            label:
              certification.label
          })
        ),

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
        search
      }
    },
    {
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0"
      }
    }
  )
}

export async function POST(
  request
) {
  if (!hasValidOrigin(request)) {
    return jsonError(
      "Origine della richiesta non autorizzata.",
      403
    )
  }

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
    Array.isArray(
      access.permissions
    )
      ? access.permissions
      : []

  if (
    !permissions.includes(
      "certifications.review"
    )
  ) {
    return jsonError(
      "Non hai il permesso di aggiungere certificazioni.",
      403
    )
  }

  let body

  try {
    body =
      await request.json()
  } catch {
    return jsonError(
      "Dati della richiesta non validi."
    )
  }

  const pilotUserId =
    normalizeSingleLine(
      body?.pilotUserId,
      100
    )

  const certifications =
    normalizeCertificationList(
      body?.certifications
    )

  const reason =
    String(
      body?.reason || ""
    )
      .replace(/\u0000/g, "")
      .trim()
      .slice(0, 500)

  if (
    !UUID_PATTERN.test(
      pilotUserId
    )
  ) {
    return jsonError(
      "Identificativo pilota non valido."
    )
  }

  if (!certifications) {
    return jsonError(
      "La lista delle certificazioni non è valida."
    )
  }

  if (
    certifications.length === 0
  ) {
    return jsonError(
      "Seleziona almeno una certificazione."
    )
  }

  if (
    certifications.length >
      CERTIFICATION_DEFINITIONS
        .length
  ) {
    return jsonError(
      "Sono state selezionate troppe certificazioni."
    )
  }

  const invalidCertification =
    certifications.find(
      (certification) =>
        !ALLOWED_CERTIFICATIONS.has(
          certification
        )
    )

  if (invalidCertification) {
    return jsonError(
      "È stata selezionata una certificazione non valida."
    )
  }

  if (
    reason.length < 10 ||
    reason.length > 500
  ) {
    return jsonError(
      "La motivazione deve contenere da 10 a 500 caratteri."
    )
  }

  const adminSupabase =
    createAdminSupabaseClient()

  const {
    data,
    error
  } = await adminSupabase.rpc(
    "admin_add_pilot_certifications",
    {
      p_actor_user_id:
        user.id,

      p_pilot_user_id:
        pilotUserId,

      p_certifications:
        certifications,

      p_reason:
        reason
    }
  )

  if (error) {
    console.error(
      "[admin-certification-pilots] Errore aggiunta certificazioni:",
      error
    )

    const errorMessage =
      String(
        error.message || ""
      ).toUpperCase()

    if (
      errorMessage.includes(
        "PERMESSO_CERTIFICAZIONI_NEGATO"
      )
    ) {
      return jsonError(
        "Non hai il permesso di aggiungere certificazioni.",
        403
      )
    }

    if (
      errorMessage.includes(
        "PROFILO_PILOTA_NON_TROVATO"
      )
    ) {
      return jsonError(
        "Profilo pilota non trovato.",
        404
      )
    }

    if (
      errorMessage.includes(
        "PROFILO_NON_PILOTA"
      )
    ) {
      return jsonError(
        "L'account selezionato non appartiene a un pilota."
      )
    }

    if (
  errorMessage.includes(
    "PROFILO_PILOTA_NON_ATTIVO"
  )
) {
  return jsonError(
    "L'account del pilota è stato disattivato e non può ricevere certificazioni.",
    409
  )
}

if (
  errorMessage.includes(
    "PROFILO_PILOTA_SOSPESO"
  )
) {
  return jsonError(
    "L'account del pilota è sospeso e non può ricevere certificazioni.",
    409
  )
}

    if (
      errorMessage.includes(
        "CERTIFICAZIONE_NON_VALIDA"
      )
    ) {
      return jsonError(
        "È stata selezionata una certificazione non valida."
      )
    }

    if (
      errorMessage.includes(
        "SELEZIONA_ALMENO_UNA_CERTIFICAZIONE"
      )
    ) {
      return jsonError(
        "Seleziona almeno una certificazione."
      )
    }

    if (
      errorMessage.includes(
        "MOTIVAZIONE_CERTIFICAZIONE_NON_VALIDA"
      )
    ) {
      return jsonError(
        "La motivazione deve contenere da 10 a 500 caratteri."
      )
    }

    return jsonError(
      "Impossibile aggiungere le certificazioni al pilota.",
      500
    )
  }

  if (!data) {
    return jsonError(
      "L'operazione non ha restituito un risultato valido.",
      500
    )
  }

  const result = {
    changed:
      Boolean(data.changed),

    pilotUserId:
      data.pilot_user_id ||
      pilotUserId,

    pilotEmail:
      data.pilot_email || "",

    pilotName:
      data.pilot_name || "",

    requestedCertifications:
      Array.isArray(
        data.requested_certifications
      )
        ? data.requested_certifications
        : certifications,

    addedCertifications:
      Array.isArray(
        data.added_certifications
      )
        ? data.added_certifications
        : [],

    activeCertifications:
      Array.isArray(
        data.active_certifications
      )
        ? data.active_certifications
        : [],

    verified:
      data.verified !== false,

    certificationIndicator:
      data.cert_enac_verified !==
      false,

    updatedAt:
      data.updated_at || null
  }

  return NextResponse.json(
    {
      success: true,

      result,

      message:
        result.changed
          ? "Certificazioni aggiunte correttamente al pilota."
          : "Il pilota possiede già tutte le certificazioni selezionate."
    },
    {
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0"
      }
    }
  )
}