import { NextResponse } from "next/server"
import Stripe from "stripe"

const creditPackages = {
  pilot_small: { name: "Pilota - Ricarica veloce", credits: 5, price: 400 },
  pilot_standard: { name: "Pilota - Standard", credits: 40, price: 900 },
  pilot_best: { name: "Pilota - Pro", credits: 100, price: 1900 },
  client_basic: { name: "Cliente - Basic", credits: 5, price: 400 },
  client_standard: { name: "Cliente - Standard", credits: 40, price: 900 },
  client_pro: { name: "Cliente - Pro", credits: 120, price: 1999 }
}

export async function POST(req) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Manca STRIPE_SECRET_KEY nel file .env.local" },
        { status: 500 }
      )
    }

    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      return NextResponse.json(
        { error: "Manca NEXT_PUBLIC_SITE_URL nel file .env.local" },
        { status: 500 }
      )
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    const { packageId, userId } = await req.json()

    const selectedPackage = creditPackages[packageId]

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
    console.error("ERRORE STRIPE COMPLETO:", error)

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Errore durante la creazione del pagamento"
      },
      { status: 500 }
    )
  }
}