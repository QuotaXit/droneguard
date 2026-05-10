import { NextResponse } from "next/server"
import Stripe from "stripe"
import { createClient } from "@supabase/supabase-js"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function POST(req) {
  const body = await req.text()
  const signature = req.headers.get("stripe-signature")

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (error) {
    console.error("Webhook signature error:", error.message)

    return NextResponse.json(
      { error: "Firma webhook non valida" },
      { status: 400 }
    )
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object

    const userId = session.metadata?.user_id
    const creditsToAdd = Number(session.metadata?.credits || 0)

    if (userId && creditsToAdd > 0) {
      const { data: userData, error: userError } = await supabaseAdmin
        .from("users")
        .select("credits")
        .eq("id", userId)
        .single()

      if (!userError && userData) {
        const newCredits = Number(userData.credits || 0) + creditsToAdd

        await supabaseAdmin
          .from("users")
          .update({ credits: newCredits })
          .eq("id", userId)
      }
    }
  }

  return NextResponse.json({ received: true })
}