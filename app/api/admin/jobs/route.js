import { NextResponse } from "next/server"

import { getTeamAccess } from "@/lib/team/access"
import { createAdminSupabaseClient } from "@/lib/supabase/admin"

export const dynamic = "force-dynamic"

const PAGE_SIZE = 20
const MAX_BODY_BYTES =
  20_000

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
  const parsed = Number.parseInt(value, 10)

  if (!Number.isFinite(parsed) || parsed < 1) {
    return 1
  }

  return Math.min(parsed, 10000)
}

function sanitizeSearch(value) {
  return String(value || "")
    .trim()
    .slice(0, 100)
    .replace(/[^\p{L}\p{N}@._'’\-\/\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function normalizeUser(user) {
  if (!user) {
    return null
  }

  return {
    id: user.id,
    email: user.email || "Email non disponibile",
    name: user.name || "",
    surname: user.surname || "",
    role: user.role || "",
    city: user.city || ""
  }
}

function normalizeApplication(application, usersMap) {
  const pilot = usersMap.get(application.pilot_id)

  return {
    id: application.id,
    jobId: application.job_id,
    pilotId: application.pilot_id,
    pilot: normalizeUser(pilot),
    pilotEmail:
      application.pilot_email ||
      pilot?.email ||
      "Email non disponibile",
    status: application.status || "pending",
    offerPrice:
      application.offer_price !== null &&
      application.offer_price !== undefined
        ? Number(application.offer_price)
        : application.price !== null &&
            application.price !== undefined
          ? Number(application.price)
          : null,
    message: application.message || "",
    conversationId: application.conversation_id,
    completedAt: application.completed_at,
    createdAt: application.created_at
  }
}

export async function GET(request) {
  const { user, access } = await getTeamAccess()

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

  const permissions = Array.isArray(access.permissions)
    ? access.permissions
    : []

  if (!permissions.includes("jobs.view")) {
    return jsonError(
      "Non hai il permesso di vedere i lavori.",
      403
    )
  }

  const searchParams = request.nextUrl.searchParams

  const page = clampPage(
    searchParams.get("page")
  )

  const status = String(
    searchParams.get("status") || "all"
  )
    .trim()
    .toLowerCase()

  const search = sanitizeSearch(
    searchParams.get("search")
  )

  const allowedStatuses = new Set([
  "all",
  "open",
  "assigned",
  "completed",
  "cancelled"
])

  if (!allowedStatuses.has(status)) {
    return jsonError(
      "Filtro stato non valido."
    )
  }

  const from = (page - 1) * PAGE_SIZE
  const to = from + PAGE_SIZE - 1

  const adminSupabase =
    createAdminSupabaseClient()

  let jobsQuery = adminSupabase
    .from("jobs")
    .select(
      `
        id,
        pilot_id,
        title,
        client_name,
        price,
        status,
        created_at,
        user_id,
        description,
        location,
        job_date,
        image1,
        image2,
        image3,
        assigned_pilot,
        conversation_id,
        completed_at,
        assigned_at,
        client_completed_at,
        pilot_completed_at
      `,
      {
        count: "exact"
      }
    )
    .order("created_at", {
      ascending: false
    })
    .range(from, to)

  if (status !== "all") {
    jobsQuery = jobsQuery.eq(
      "status",
      status
    )
  }

  if (search) {
    const pattern = `%${search}%`

    jobsQuery = jobsQuery.or(
      [
        `title.ilike.${pattern}`,
        `description.ilike.${pattern}`,
        `location.ilike.${pattern}`,
        `client_name.ilike.${pattern}`
      ].join(",")
    )
  }

  const {
    data: jobs,
    count,
    error: jobsError
  } = await jobsQuery

  if (jobsError) {
    console.error(
      "[admin-jobs] Errore caricamento lavori:",
      jobsError
    )

    return jsonError(
      "Impossibile caricare i lavori.",
      500
    )
  }

  const currentJobs = jobs || []

  const jobIds = currentJobs
    .map((job) => job.id)
    .filter(Boolean)

  const relatedUserIds = [
    ...new Set(
      currentJobs
        .flatMap((job) => [
          job.user_id,
          job.assigned_pilot,
          job.pilot_id
        ])
        .filter(Boolean)
    )
  ]

  let applications = []
  let assignments = []
  let conversations = []
  let relatedUsers = []

  if (jobIds.length > 0) {
    const [
      applicationsResult,
      assignmentsResult,
      conversationsResult
    ] = await Promise.all([
      adminSupabase
        .from("applications")
        .select(`
          id,
          job_id,
          pilot_id,
          status,
          user_id,
          created_at,
          offer_price,
          message,
          conversation_id,
          completed_at,
          pilot_email,
          price
        `)
        .in("job_id", jobIds)
        .order("created_at", {
          ascending: false
        }),

      adminSupabase
        .from("job_assignments")
        .select(`
          id,
          job_id,
          pilot_id,
          client_id,
          meeting_point,
          exact_location,
          phone,
          email,
          arrival_time,
          priority,
          notes,
          has_authorization,
          has_parking,
          has_power,
          urban_flight,
          people_present,
          status,
          created_at,
          completed_at
        `)
        .in("job_id", jobIds),

      adminSupabase
        .from("conversations")
        .select(`
          id,
          client_id,
          pilot_id,
          created_at,
          job_id,
          status
        `)
        .in("job_id", jobIds)
    ])

    if (applicationsResult.error) {
      console.error(
        "[admin-jobs] Errore candidature:",
        applicationsResult.error
      )

      return jsonError(
        "Impossibile caricare le candidature.",
        500
      )
    }

    if (assignmentsResult.error) {
      console.error(
        "[admin-jobs] Errore assegnazioni:",
        assignmentsResult.error
      )

      return jsonError(
        "Impossibile caricare le assegnazioni.",
        500
      )
    }

    if (conversationsResult.error) {
      console.error(
        "[admin-jobs] Errore conversazioni:",
        conversationsResult.error
      )

      return jsonError(
        "Impossibile caricare le conversazioni.",
        500
      )
    }

    applications =
      applicationsResult.data || []

    assignments =
      assignmentsResult.data || []

    conversations =
      conversationsResult.data || []

    applications.forEach((application) => {
      if (application.pilot_id) {
        relatedUserIds.push(
          application.pilot_id
        )
      }
    })
  }

  const uniqueRelatedUserIds = [
    ...new Set(
      relatedUserIds.filter(Boolean)
    )
  ]

  if (uniqueRelatedUserIds.length > 0) {
    const {
      data: usersData,
      error: usersError
    } = await adminSupabase
      .from("users")
      .select(`
        id,
        email,
        role,
        name,
        surname,
        city
      `)
      .in("id", uniqueRelatedUserIds)

    if (usersError) {
      console.error(
        "[admin-jobs] Errore utenti collegati:",
        usersError
      )

      return jsonError(
        "Impossibile caricare gli utenti collegati.",
        500
      )
    }

    relatedUsers = usersData || []
  }

  const usersMap = new Map(
    relatedUsers.map((relatedUser) => [
      relatedUser.id,
      relatedUser
    ])
  )

  const applicationsByJob = new Map()

  applications.forEach((application) => {
    const currentList =
      applicationsByJob.get(
        application.job_id
      ) || []

    currentList.push(
      normalizeApplication(
        application,
        usersMap
      )
    )

    applicationsByJob.set(
      application.job_id,
      currentList
    )
  })

  const assignmentByJob = new Map()

  assignments.forEach((assignment) => {
    if (
      !assignmentByJob.has(
        assignment.job_id
      )
    ) {
      assignmentByJob.set(
        assignment.job_id,
        assignment
      )
    }
  })

  const conversationByJob = new Map()

  conversations.forEach((conversation) => {
    if (
      !conversationByJob.has(
        conversation.job_id
      )
    ) {
      conversationByJob.set(
        conversation.job_id,
        conversation
      )
    }
  })

  const normalizedJobs = currentJobs.map(
    (job) => {
      const jobApplications =
        applicationsByJob.get(job.id) || []

      const assignment =
        assignmentByJob.get(job.id) || null

      const conversation =
        conversationByJob.get(job.id) || null

      const client =
        usersMap.get(job.user_id) || null

      const assignedPilotId =
        job.assigned_pilot ||
        assignment?.pilot_id ||
        job.pilot_id ||
        null

      const assignedPilot =
        assignedPilotId
          ? usersMap.get(
              assignedPilotId
            ) || null
          : null

      const applicationStatuses =
        jobApplications.reduce(
          (result, application) => {
            const applicationStatus =
              application.status || "pending"

            result[applicationStatus] =
              (result[applicationStatus] || 0) + 1

            return result
          },
          {}
        )

      return {
        id: job.id,
        title: job.title || "Senza titolo",
        description: job.description || "",
        location: job.location || "",
        jobDate: job.job_date,
        createdAt: job.created_at,
        status: job.status || "open",
        price:
          job.price !== null &&
          job.price !== undefined
            ? Number(job.price)
            : null,

        clientName: job.client_name || "",
        clientId: job.user_id,
        client: normalizeUser(client),

        pilotId: assignedPilotId,
        pilot: normalizeUser(
          assignedPilot
        ),

        images: [
          job.image1,
          job.image2,
          job.image3
        ].filter(Boolean),

        conversationId:
          job.conversation_id ||
          conversation?.id ||
          null,

        conversation: conversation
          ? {
              id: conversation.id,
              status:
                conversation.status ||
                "active",
              clientId:
                conversation.client_id,
              pilotId:
                conversation.pilot_id,
              createdAt:
                conversation.created_at
            }
          : null,

        assignment: assignment
          ? {
              id: assignment.id,
              pilotId:
                assignment.pilot_id,
              clientId:
                assignment.client_id,
              meetingPoint:
                assignment.meeting_point,
              exactLocation:
                assignment.exact_location,
              phone: assignment.phone,
              email: assignment.email,
              arrivalTime:
                assignment.arrival_time,
              priority:
                assignment.priority ||
                "normal",
              notes: assignment.notes,
              hasAuthorization:
                Boolean(
                  assignment.has_authorization
                ),
              hasParking:
                Boolean(
                  assignment.has_parking
                ),
              hasPower:
                Boolean(
                  assignment.has_power
                ),
              urbanFlight:
                Boolean(
                  assignment.urban_flight
                ),
              peoplePresent:
                Boolean(
                  assignment.people_present
                ),
              status:
                assignment.status ||
                "pending",
              createdAt:
                assignment.created_at,
              completedAt:
                assignment.completed_at
            }
          : null,

        applications: jobApplications,
        applicationsCount:
          jobApplications.length,
        applicationStatuses,

        assignedAt: job.assigned_at,
        completedAt: job.completed_at,
        clientCompletedAt:
          job.client_completed_at,
        pilotCompletedAt:
          job.pilot_completed_at
      }
    }
  )

  const total = count || 0

  return NextResponse.json(
    {
      success: true,
      jobs: normalizedJobs,
      pagination: {
        page,
        pageSize: PAGE_SIZE,
        total,
        totalPages: Math.max(
          1,
          Math.ceil(total / PAGE_SIZE)
        )
      },
      filters: {
        status,
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

export async function PATCH(request) {
  const requestOrigin =
    request.headers.get("origin")

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

  const contentLength =
  Number(
    request.headers.get(
      "content-length"
    ) || 0
  )

if (
  Number.isFinite(contentLength) &&
  contentLength > MAX_BODY_BYTES
) {
  return jsonError(
    "Richiesta troppo grande.",
    413
  )
}

let rawBody

try {
  rawBody =
    await request.text()
} catch {
  return jsonError(
    "Dati della richiesta non validi."
  )
}

if (
  Buffer.byteLength(
    rawBody,
    "utf8"
  ) > MAX_BODY_BYTES
) {
  return jsonError(
    "Richiesta troppo grande.",
    413
  )
}

let body

try {
  body =
    JSON.parse(rawBody)
} catch {
  return jsonError(
    "Dati della richiesta non validi."
  )
}

if (
  !body ||
  typeof body !== "object" ||
  Array.isArray(body)
) {
  return jsonError(
    "Dati della richiesta non validi."
  )
}

  const action = String(
    body?.action || ""
  )
    .trim()
    .toLowerCase()

  const jobId = String(
    body?.jobId || ""
  ).trim()

  const reason = String(
    body?.reason || ""
  ).trim()

  const allowedActions =
    new Set([
      "update",
      "cancel",
      "reopen"
    ])

  if (!allowedActions.has(action)) {
    return jsonError(
      "Azione sul lavoro non valida."
    )
  }

  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

  if (
    !jobId ||
    !uuidPattern.test(jobId)
  ) {
    return jsonError(
      "Identificativo lavoro non valido."
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

  const permissions =
    Array.isArray(
      access.permissions
    )
      ? access.permissions
      : []

  const requiredPermission =
    action === "update"
      ? "jobs.update"
      : action === "cancel"
        ? "jobs.close"
        : "jobs.reopen"

  if (
    !permissions.includes(
      requiredPermission
    )
  ) {
    return jsonError(
      "Non hai il permesso necessario per questa operazione.",
      403
    )
  }

  let title = null
  let description = null
  let location = null
  let jobDate = null

  if (action === "update") {
    title = String(
      body?.title || ""
    )
      .trim()
      .replace(/\s+/g, " ")

    description = String(
      body?.description || ""
    ).trim()

    location = String(
      body?.location || ""
    )
      .trim()
      .replace(/\s+/g, " ")

    jobDate = String(
      body?.jobDate || ""
    ).trim()

    if (
      title.length < 3 ||
      title.length > 150
    ) {
      return jsonError(
        "Il titolo deve contenere da 3 a 150 caratteri."
      )
    }

    if (
      description.length < 5 ||
      description.length > 5000
    ) {
      return jsonError(
        "La descrizione deve contenere da 5 a 5000 caratteri."
      )
    }

    if (
      location.length < 2 ||
      location.length > 500
    ) {
      return jsonError(
        "La località deve contenere da 2 a 500 caratteri."
      )
    }

    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(
        jobDate
      )
    ) {
      return jsonError(
        "La data del lavoro non è valida."
      )
    }

    const parsedDate =
      new Date(
        `${jobDate}T00:00:00Z`
      )

    if (
      Number.isNaN(
        parsedDate.getTime()
      ) ||
      parsedDate
        .toISOString()
        .slice(0, 10) !== jobDate
    ) {
      return jsonError(
        "La data del lavoro non è valida."
      )
    }
  }

  const adminSupabase =
    createAdminSupabaseClient()

  const {
    data,
    error
  } = await adminSupabase.rpc(
    "admin_manage_job",
    {
      p_actor_user_id:
        user.id,

      p_action:
        action,

      p_job_id:
        jobId,

      p_title:
        title,

      p_description:
        description,

      p_location:
        location,

      p_job_date:
        jobDate || null,

      p_reason:
        reason
    }
  )

  if (error) {
    console.error(
      "[admin-jobs] management RPC failed:",
      error
    )

    const errorText = [
      error.message,
      error.details,
      error.hint,
      error.code
    ]
      .filter(Boolean)
      .join(" ")
      .toUpperCase()

    if (
      errorText.includes(
        "OPERATORE_NON_AUTORIZZATO"
      )
    ) {
      return jsonError(
        "Non hai il permesso necessario per questa operazione.",
        403
      )
    }

    if (
      errorText.includes(
        "LAVORO_NON_TROVATO"
      )
    ) {
      return jsonError(
        "Lavoro non trovato.",
        404
      )
    }

    if (
      errorText.includes(
        "MOTIVAZIONE_NON_VALIDA"
      )
    ) {
      return jsonError(
        "La motivazione deve contenere da 10 a 500 caratteri."
      )
    }

    if (
      errorText.includes(
        "CLIENTE_DISATTIVATO"
      )
    ) {
      return jsonError(
        "Non è possibile riaprire il lavoro perché il cliente ha disattivato definitivamente l’account.",
        409
      )
    }

    if (
      errorText.includes(
        "CLIENTE_SOSPESO"
      )
    ) {
      return jsonError(
        "Non è possibile riaprire il lavoro perché il cliente è sospeso.",
        409
      )
    }

    if (
      errorText.includes(
        "LAVORO_COMPLETATO_NON_ANNULLABILE"
      )
    ) {
      return jsonError(
        "Un lavoro completato non può essere annullato.",
        409
      )
    }

    if (
      errorText.includes(
        "LAVORO_IN_ATTESA_DI_COMPLETAMENTO"
      )
    ) {
      return jsonError(
        "Il lavoro ha già ricevuto una conferma di completamento e non può essere chiuso normalmente.",
        409
      )
    }

    if (
      errorText.includes(
        "SOLO_I_LAVORI_ANNULLATI_POSSONO_ESSERE_RIAPERTI"
      )
    ) {
      return jsonError(
        "Soltanto i lavori annullati possono essere riaperti.",
        409
      )
    }

    if (
      errorText.includes(
        "LAVORO_CON_STORICO_COMPLETATO_NON_RIAPRIBILE"
      )
    ) {
      return jsonError(
        "Il lavoro contiene uno storico completato e non può essere riaperto.",
        409
      )
    }

    if (
      errorText.includes(
        "LAVORO_NON_MODIFICABILE"
      ) ||
      errorText.includes(
        "LAVORO_NON_ANNULLABILE"
      ) ||
      errorText.includes(
        "DATI_COMPLETAMENTO_INCOERENTI"
      )
    ) {
      return jsonError(
        "Lo stato attuale del lavoro non consente questa operazione.",
        409
      )
    }

    if (
      errorText.includes(
        "TITOLO_LAVORO_NON_VALIDO"
      ) ||
      errorText.includes(
        "DESCRIZIONE_LAVORO_NON_VALIDA"
      ) ||
      errorText.includes(
        "LOCALITA_LAVORO_NON_VALIDA"
      ) ||
      errorText.includes(
        "DATA_LAVORO_OBBLIGATORIA"
      ) ||
      errorText.includes(
        "DATA_LAVORO_NEL_PASSATO"
      )
    ) {
      return jsonError(
        "I dati inseriti per il lavoro non sono validi."
      )
    }

    return jsonError(
      "Non è stato possibile completare l’operazione sul lavoro.",
      500
    )
  }

  const messages = {
    update:
      "Lavoro aggiornato correttamente.",
    cancel:
      "Lavoro chiuso correttamente.",
    reopen:
      "Lavoro riaperto correttamente."
  }

  return NextResponse.json(
  {
    success: true,
    message: messages[action],
    result: data || null
  },
  {
    headers: {
      "Cache-Control":
        "private, no-store, max-age=0"
    }
  }
)
}