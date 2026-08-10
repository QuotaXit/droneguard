import {
  NextResponse
} from "next/server"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

export const runtime =
  "nodejs"

export const dynamic =
  "force-dynamic"

const BOT_PATTERN =
  /bot|crawler|spider|slurp|bingpreview|facebookexternalhit|headless|lighthouse|pagespeed/i

export async function POST(
  request
) {
  /*
   * Non registrare sviluppo locale
   * o deployment Preview Vercel.
   */
  if (
    process.env.NODE_ENV !==
      "production" ||
    (
      process.env.VERCEL_ENV &&
      process.env.VERCEL_ENV !==
        "production"
    )
  ) {
    return NextResponse.json({
      success: true,
      ignored: true
    })
  }

  const origin =
    request.headers.get(
      "origin"
    )

  if (
    origin &&
    origin !==
      request.nextUrl.origin
  ) {
    return NextResponse.json(
      {
        success: false
      },
      {
        status: 403
      }
    )
  }

  const userAgent =
    request.headers.get(
      "user-agent"
    ) || ""

  if (
    BOT_PATTERN.test(
      userAgent
    )
  ) {
    return NextResponse.json({
      success: true,
      ignored: true
    })
  }

  let body = null

  try {
    body =
      await request.json()
  } catch {
    return NextResponse.json(
      {
        success: false
      },
      {
        status: 400
      }
    )
  }

  const path =
    String(
      body?.path || ""
    )
      .trim()
      .slice(
        0,
        500
      )

  if (
    !path ||
    !path.startsWith("/") ||
    path.startsWith("//") ||
    path.startsWith("/admin")
  ) {
    return NextResponse.json(
      {
        success: false
      },
      {
        status: 400
      }
    )
  }

  const adminSupabase =
    createAdminSupabaseClient()

  const {
    error
  } =
    await adminSupabase
      .from(
        "site_page_views"
      )
      .insert({
        path
      })

  if (error) {
    console.error(
      "[analytics] Page view insert failed:",
      error
    )

    return NextResponse.json(
      {
        success: false
      },
      {
        status: 500
      }
    )
  }

  return NextResponse.json({
    success: true
  })
}