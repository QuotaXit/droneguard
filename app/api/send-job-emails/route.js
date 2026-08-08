import {
  randomUUID
} from "node:crypto"

import { NextResponse } from "next/server"

import {
  sendTrackedEmail
} from "@/lib/email/send-tracked-email"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

import {
  createServerSupabaseClient
} from "@/lib/supabase/server"

import {
  consumeRateLimit
} from "@/lib/security/rate-limit"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const MAX_BODY_BYTES =
  10_000

  const DISPATCH_LEASE_SECONDS =
  30 * 60

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

function jsonError(
  message,
  status = 400,
  extraHeaders = {}
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
          "private, no-store, max-age=0",

        ...extraHeaders
      }
    }
  )
}

function jsonSuccess(
  payload,
  status = 200,
  extraHeaders = {}
) {
  return NextResponse.json(
    payload,
    {
      status,
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0",

        ...extraHeaders
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

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function normalizeRole(value) {
  const role =
    String(value || "")
      .trim()
      .toLowerCase()

  if (
    role === "client" ||
    role === "cliente"
  ) {
    return "client"
  }

  if (
    role === "pilot" ||
    role === "pilota"
  ) {
    return "pilot"
  }

  return ""
}

function formatJobDate(value) {
  if (!value) {
    return "Data non indicata"
  }

  try {
    return new Intl.DateTimeFormat(
      "it-IT",
      {
        dateStyle: "long",
        timeZone: "Europe/Rome"
      }
    ).format(new Date(value))
  } catch {
    return String(value)
  }
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

async function completeJobEmailDispatch({
  adminSupabase,
  jobId,
  userId,
  claimToken,
  sent,
  failed,
  alreadyProcessed,
  recipients
}) {
  try {
    const {
      data,
      error
    } = await adminSupabase.rpc(
      "complete_job_email_dispatch",
      {
        p_job_id:
          jobId,

        p_actor_user_id:
          userId,

        p_claim_token:
          claimToken,

        p_sent_count:
          sent,

        p_failed_count:
          failed,

        p_already_processed_count:
          alreadyProcessed,

        p_recipient_count:
          recipients
      }
    )

    if (error) {
      console.error(
        "[send-job-emails] Chiusura dispatch fallita:",
        error
      )

      return false
    }

    return (
      data?.success === true
    )
  } catch (error) {
    console.error(
      "[send-job-emails] Errore chiusura dispatch:",
      error
    )

    return false
  }
}

async function failJobEmailDispatch({
  adminSupabase,
  jobId,
  userId,
  claimToken,
  errorMessage,
  sent = 0,
  failed = 0,
  alreadyProcessed = 0,
  recipients = 0
}) {
  try {
    const {
      error
    } = await adminSupabase.rpc(
      "fail_job_email_dispatch",
      {
        p_job_id:
          jobId,

        p_actor_user_id:
          userId,

        p_claim_token:
          claimToken,

        p_error:
          String(
            errorMessage ||
              "Errore invio notifiche"
          ).slice(0, 1000),

        p_sent_count:
          sent,

        p_failed_count:
          failed,

        p_already_processed_count:
          alreadyProcessed,

        p_recipient_count:
          recipients
      }
    )

    if (error) {
      console.error(
        "[send-job-emails] Registrazione fallimento dispatch non riuscita:",
        error
      )

      return false
    }

    return true
  } catch (error) {
    console.error(
      "[send-job-emails] Errore registrazione fallimento dispatch:",
      error
    )

    return false
  }
}

export async function POST(request) {
  let dispatchContext =
    null

  let dispatchCounts = {
    sent: 0,
    failed: 0,
    alreadyProcessed: 0,
    recipients: 0
  }

  try {
    if (!hasValidOrigin(request)) {
      return jsonError(
        "Origine della richiesta non autorizzata.",
        403
      )
    }

    const supabase =
      await createServerSupabaseClient()

    const {
      data: {
        user
      },
      error: userError
    } = await supabase.auth.getUser()

    if (
      userError ||
      !user
    ) {
      return jsonError(
        "Devi effettuare l'accesso.",
        401
      )
    }

    const rateLimit =
  await consumeRateLimit({
    key:
      `send-job-emails:${user.id}`,

    limit:
      5,

    windowSeconds:
      15 * 60
  })

if (!rateLimit.success) {
  return jsonError(
    "Servizio temporaneamente non disponibile. Riprova più tardi.",
    503
  )
}

if (!rateLimit.allowed) {
  const retryAfter =
    Math.max(
      1,
      rateLimit.retryAfterSeconds
    )

  return jsonError(
    "Hai effettuato troppe richieste. Riprova tra qualche minuto.",
    429,
    {
      "Retry-After":
        String(retryAfter)
    }
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

    const jobId =
      String(
        body?.jobId || ""
      ).trim()

    if (
      !jobId ||
      !UUID_PATTERN.test(jobId)
    ) {
      return jsonError(
        "Identificativo lavoro non valido."
      )
    }

    const adminSupabase =
      createAdminSupabaseClient()

    const [
      profileResult,
      jobResult
    ] = await Promise.all([
      adminSupabase
        .from("users")
        .select(`
          id,
          role,
          banned,
          account_status
        `)
        .eq("id", user.id)
        .maybeSingle(),

      adminSupabase
        .from("jobs")
        .select(`
          id,
          user_id,
          title,
          location,
          job_date,
          status
        `)
        .eq("id", jobId)
        .eq("user_id", user.id)
        .maybeSingle()
    ])

    if (
      profileResult.error ||
      !profileResult.data
    ) {
      console.error(
        "[send-job-emails] Profilo cliente non disponibile:",
        profileResult.error
      )

      return jsonError(
        "Profilo utente non disponibile.",
        403
      )
    }

    const profile =
      profileResult.data

    if (
      normalizeRole(
        profile.role
      ) !== "client"
    ) {
      return jsonError(
        "Solo il cliente proprietario può inviare questo avviso.",
        403
      )
    }

    if (
      profile.banned === true ||
      String(
        profile.account_status ||
          "active"
      )
        .trim()
        .toLowerCase() !==
        "active"
    ) {
      return jsonError(
        "Il tuo account non può inviare notifiche.",
        403
      )
    }

    if (
      jobResult.error ||
      !jobResult.data
    ) {
      return jsonError(
        "Lavoro non trovato oppure non autorizzato.",
        404
      )
    }

    const job =
      jobResult.data

    if (
      String(job.status || "")
        .trim()
        .toLowerCase() !==
      "open"
    ) {
      return jsonError(
        "Le notifiche possono essere inviate soltanto per un lavoro aperto.",
        409
      )
    }

    const claimToken =
  randomUUID()

const {
  data: dispatchClaim,
  error: dispatchClaimError
} = await adminSupabase.rpc(
  "claim_job_email_dispatch",
  {
    p_job_id:
      job.id,

    p_actor_user_id:
      user.id,

    p_claim_token:
      claimToken,

    p_lease_seconds:
      DISPATCH_LEASE_SECONDS
  }
)

if (dispatchClaimError) {
  console.error(
    "[send-job-emails] Claim dispatch fallito:",
    dispatchClaimError
  )

  return jsonError(
    "Non è stato possibile avviare l'invio delle notifiche.",
    500
  )
}

if (
  !dispatchClaim ||
  typeof dispatchClaim !==
    "object"
) {
  return jsonError(
    "Risposta dispatch non valida.",
    500
  )
}

if (
  dispatchClaim.already_completed ===
  true
) {
  return jsonSuccess({
    success: true,

    sent: 0,
    failed: 0,
    alreadyProcessed: 0,
    recipients: 0,

    dispatchAlreadyCompleted:
      true,

    message:
      "Le notifiche per questo lavoro erano già state elaborate."
  })
}

if (
  dispatchClaim.in_progress ===
  true
) {
  const retryAfter =
    Math.max(
      1,
      Number(
        dispatchClaim
          .retry_after_seconds ||
          1
      )
    )

  return jsonError(
    "L'invio delle notifiche per questo lavoro è già in corso.",
    409,
    {
      "Retry-After":
        String(retryAfter)
    }
  )
}

if (
  dispatchClaim.claimed !==
  true
) {
  return jsonError(
    "Non è stato possibile acquisire l'invio delle notifiche.",
    409
  )
}

dispatchContext = {
  adminSupabase,
  jobId:
    job.id,
  userId:
    user.id,
  claimToken
}

    const {
      data: pilotRows,
      error: pilotsError
    } = await adminSupabase
      .from("users")
      .select(`
        id,
        email,
        name,
        surname,
        role,
        banned,
        account_status,
        email_new_jobs
      `)
      .in(
        "role",
        [
          "pilot",
          "pilota"
        ]
      )
      .eq(
        "email_new_jobs",
        true
      )

    if (pilotsError) {
  console.error(
    "[send-job-emails] Errore caricamento piloti:",
    pilotsError
  )

  if (dispatchContext) {
    await failJobEmailDispatch({
      ...dispatchContext,

      errorMessage:
        pilotsError.message ||
        "Errore caricamento destinatari"
    })
  }

  dispatchContext =
    null

  return jsonError(
    "Impossibile recuperare i destinatari.",
    500
  )
}

    const pilots =
      (pilotRows || [])
        .filter((pilot) => {
          const accountStatus =
            String(
              pilot.account_status ||
                "active"
            )
              .trim()
              .toLowerCase()

          return (
            normalizeRole(
              pilot.role
            ) === "pilot" &&
            pilot.banned !== true &&
            accountStatus ===
              "active" &&
            Boolean(
              String(
                pilot.email || ""
              ).trim()
            )
          )
        })

   if (pilots.length === 0) {
  const dispatchCompleted =
    await completeJobEmailDispatch({
      ...dispatchContext,

      sent: 0,
      failed: 0,
      alreadyProcessed: 0,
      recipients: 0
    })

  if (!dispatchCompleted) {
    return jsonError(
      "Le notifiche non sono state finalizzate correttamente.",
      500
    )
  }

  dispatchContext =
    null

  return jsonSuccess({
    success: true,
    sent: 0,
    failed: 0,
    alreadyProcessed: 0,
    recipients: 0,
    message:
      "Nessun pilota ha attivato le notifiche per i nuovi lavori."
  })
}

    const siteUrl =
      String(
        process.env.NEXT_PUBLIC_SITE_URL ||
          "https://www.droneguard.it"
      ).replace(/\/+$/, "")

    const safeTitle =
      escapeHtml(
        job.title ||
          "Nuovo lavoro"
      )

    const safeLocation =
      escapeHtml(
        job.location ||
          "Luogo non indicato"
      )

    const formattedDate =
      formatJobDate(
        job.job_date
      )

    const safeDate =
      escapeHtml(
        formattedDate
      )

    const jobUrl =
      `${siteUrl}/dashboard/jobs/${job.id}`

    const chunks =
      splitIntoChunks(
        pilots,
        5
      )

    const results = []

    /*
     * Piccoli gruppi evitano di avviare troppi
     * invii contemporaneamente.
     */
    for (const chunk of chunks) {
      const chunkResults =
        await Promise.all(
          chunk.map(
            async (pilot) => {
              const fullName =
                [
                  pilot.name,
                  pilot.surname
                ]
                  .filter(Boolean)
                  .join(" ")
                  .trim()

              try {
                const result =
                  await sendTrackedEmail({
                    idempotencyKey:
                      `new-job:${job.id}:pilot:${pilot.id}`,

                    category:
                      "new_job_available",

                    templateKey:
                      "new_job_pilot_notification",

                    recipientEmail:
                      pilot.email,

                    recipientName:
                      fullName ||
                      "Pilota DroneGuard",

                    senderEmail:
                      "noreply@droneguard.it",

                    senderName:
                      "DroneGuard",

                    subject:
                      "🚁 Nuovo lavoro disponibile su DroneGuard",

                    html: `
                      <div style="background:#0b1020;padding:40px 20px;font-family:Arial,sans-serif;">
                        <div style="max-width:600px;margin:auto;background:#111827;border:1px solid rgba(255,255,255,0.08);border-radius:24px;overflow:hidden;">
                          <div style="background:linear-gradient(135deg,#0f172a,#111827,#1e3a8a);padding:36px 30px;text-align:center;">
                            <h1 style="margin:0;color:white;font-size:36px;">
                              DroneGuard 🚁
                            </h1>

                            <p style="margin-top:14px;color:#cbd5e1;font-size:16px;">
                              Nuovo lavoro disponibile per piloti drone.
                            </p>
                          </div>

                          <div style="padding:36px 30px;">
                            <h2 style="color:white;font-size:27px;margin-top:0;">
                              È stato pubblicato un nuovo lavoro
                            </h2>

                            <p style="color:#94a3b8;font-size:16px;line-height:1.7;">
                              Accedi alla tua dashboard per visualizzare
                              i dettagli e candidarti.
                            </p>

                            <div style="background:#0f172a;border-radius:16px;padding:20px;margin:25px 0;">
                              <p style="color:#cbd5e1;">
                                <strong style="color:white;">Titolo:</strong>
                                ${safeTitle}
                              </p>

                              <p style="color:#cbd5e1;">
                                <strong style="color:white;">Luogo:</strong>
                                ${safeLocation}
                              </p>

                              <p style="color:#cbd5e1;">
                                <strong style="color:white;">Data:</strong>
                                ${safeDate}
                              </p>
                            </div>

                            <div style="text-align:center;margin:35px 0;">
                              <a
                                href="${jobUrl}"
                                style="background:#22c55e;color:#000;padding:16px 30px;border-radius:14px;text-decoration:none;font-weight:800;display:inline-block;"
                              >
                                Visualizza lavoro
                              </a>
                            </div>

                            <p style="color:#64748b;font-size:13px;line-height:1.6;">
                              Ricevi questa email perché hai attivato
                              le notifiche per i nuovi lavori. Puoi
                              disattivarle dalle impostazioni del profilo.
                            </p>
                          </div>
                        </div>
                      </div>
                    `,

                    text: [
                      "Nuovo lavoro disponibile su DroneGuard",
                      "",
                      `Titolo: ${job.title || "Nuovo lavoro"}`,
                      `Luogo: ${job.location || "Non indicato"}`,
                      `Data: ${formattedDate}`,
                      "",
                      jobUrl
                    ].join("\n"),

                    sourceType:
                      "job",

                    sourceId:
                      job.id,

                    targetUserId:
                      pilot.id,

                    triggeredByUserId:
                      user.id,

                    metadata: {
                      jobId:
                        job.id,

                      clientUserId:
                        user.id
                    },

                    maxAttempts:
                      3
                  })

                return {
                  pilotId:
                    pilot.id,

                  ...result
                }
              } catch (error) {
                console.error(
                  "[send-job-emails] Errore invio pilota:",
                  {
                    pilotId:
                      pilot.id,
                    error
                  }
                )

                return {
                  success: false,
                  pilotId:
                    pilot.id,
                  error:
                    error?.message ||
                    "Errore imprevisto"
                }
              }
            }
          )
        )

      results.push(
        ...chunkResults
      )
    }

    const sent =
      results.filter(
        (result) =>
          result.success === true &&
          result.alreadyProcessed !==
            true
      ).length

    const alreadyProcessed =
      results.filter(
        (result) =>
          result.success === true &&
          result.alreadyProcessed ===
            true
      ).length

    const failed =
      results.filter(
        (result) =>
          result.success !== true
      ).length

    dispatchCounts = {
  sent,
  failed,
  alreadyProcessed,

  recipients:
    pilots.length
}

const dispatchCompleted =
  await completeJobEmailDispatch({
    ...dispatchContext,
    ...dispatchCounts
  })

if (!dispatchCompleted) {
  return jsonError(
    "Le notifiche sono state elaborate, ma non è stato possibile finalizzare il dispatch.",
    500
  )
}

dispatchContext =
  null

return jsonSuccess({
  success: true,

  sent,
  failed,
  alreadyProcessed,

  recipients:
    pilots.length,

  message:
    failed > 0
      ? "Le notifiche sono state elaborate, ma alcuni invii verranno mostrati come falliti nel pannello Team."
      : "Notifiche dei nuovi lavori elaborate correttamente."
})

  } catch (error) {
  console.error(
    "[send-job-emails] Errore imprevisto:",
    error
  )

  if (dispatchContext) {
    await failJobEmailDispatch({
      ...dispatchContext,
      ...dispatchCounts,

      errorMessage:
        error?.message ||
        "Errore imprevisto durante l'invio delle notifiche."
    })

    dispatchContext =
      null
  }

  return jsonError(
    "Errore imprevisto durante l'invio delle notifiche.",
    500
  )
}
}