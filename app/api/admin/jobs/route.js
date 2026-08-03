import { NextResponse } from "next/server"

import { getTeamAccess } from "@/lib/team/access"
import { createAdminSupabaseClient } from "@/lib/supabase/admin"

export const dynamic = "force-dynamic"

const PAGE_SIZE = 20

function jsonError(message, status = 400) {
  return NextResponse.json(
    {
      success: false,
      error: message
    },
    {
      status
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
    .replace(/[^\p{L}\p{N}@._,'’\-\/\s]/gu, " ")
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
    "completed"
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