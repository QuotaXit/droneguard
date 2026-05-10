import { NextResponse } from "next/server"
import Stripe from "stripe"
import { createClient } from "@supabase/supabase-js"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const packages = {
  basic: {
    name: "Basic",
    price: 400,
    credits: 5
  },
  standard: {
    name: "Standard",
    price: 900,
    credits: 40
  },
  pro: {
    name: "Pro",
    price: 1999,
    credits: 120
  }
}

export async function POST(req) {
  try {
    const { packageId, userId } = await req.json()

    const selectedPackage = packages[packageId]

    if (!selectedPackage || !userId) {
      return NextResponse.json(
        { error: "Pacchetto o utente non valido" },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: selectedPackage.price,
            product_data: {
              name: `${selectedPackage.name} - ${selectedPackage.credits} crediti`
            }
          }
        }
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard-client/credits?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard-client/credits?canceled=true`,
      metadata: {
        user_id: userId,
        package_id: packageId,
        credits: String(selectedPackage.credits)
      }
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Stripe checkout error:", error)

    return NextResponse.json(
      { error: "Errore creazione pagamento Stripe" },
      { status: 500 }
    )
  }
}