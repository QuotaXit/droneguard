import {
  createHash
} from "node:crypto"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

function normalizePositiveInteger(
  value,
  fallback
) {
  const parsed =
    Number.parseInt(
      String(value),
      10
    )

  if (
    !Number.isFinite(parsed) ||
    parsed < 1
  ) {
    return fallback
  }

  return parsed
}

function createRateLimitKey(value) {
  const normalized =
    String(value || "")
      .trim()
      .slice(0, 2000)

  if (!normalized) {
    return null
  }

  return createHash("sha256")
    .update(normalized)
    .digest("hex")
}

export async function consumeRateLimit({
  key,
  limit,
  windowSeconds
}) {
  const keyHash =
    createRateLimitKey(key)

  if (!keyHash) {
    return {
      success: false,
      allowed: false,
      remaining: 0,
      retryAfterSeconds: 0,
      error:
        "RATE_LIMIT_KEY_INVALID"
    }
  }

  const normalizedLimit =
    normalizePositiveInteger(
      limit,
      1
    )

  const normalizedWindow =
    normalizePositiveInteger(
      windowSeconds,
      60
    )

  try {
    const adminSupabase =
      createAdminSupabaseClient()

    const {
      data,
      error
    } = await adminSupabase.rpc(
      "consume_rate_limit",
      {
        p_key:
          keyHash,

        p_limit:
          normalizedLimit,

        p_window_seconds:
          normalizedWindow
      }
    )

    if (error) {
      console.error(
        "[rate-limit] RPC failed:",
        error
      )

      return {
        success: false,
        allowed: false,
        remaining: 0,
        retryAfterSeconds: 0,
        error:
          "RATE_LIMIT_DATABASE_ERROR"
      }
    }

    if (
      !data ||
      typeof data !== "object" ||
      typeof data.allowed !==
        "boolean"
    ) {
      console.error(
        "[rate-limit] Invalid RPC result:",
        data
      )

      return {
        success: false,
        allowed: false,
        remaining: 0,
        retryAfterSeconds: 0,
        error:
          "RATE_LIMIT_INVALID_RESULT"
      }
    }

    return {
      success: true,

      allowed:
        data.allowed,

      remaining:
        Math.max(
          0,
          Number(
            data.remaining || 0
          )
        ),

      retryAfterSeconds:
        Math.max(
          0,
          Number(
            data.retry_after_seconds ||
            0
          )
        ),

      error: null
    }
  } catch (error) {
    console.error(
      "[rate-limit] Unexpected error:",
      error
    )

    return {
      success: false,
      allowed: false,
      remaining: 0,
      retryAfterSeconds: 0,
      error:
        "RATE_LIMIT_UNEXPECTED_ERROR"
    }
  }
}