import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, role, subject, message } = body

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "RESEND_API_KEY mancante nel file .env.local" },
        { status: 500 }
      )
    }

    if (!name || !email || !role || !subject || !message) {
      return Response.json(
        { error: "Compila tutti i campi" },
        { status: 400 }
      )
    }

    const result = await resend.emails.send({
      from: "DroneGuard <onboarding@resend.dev>",
      to: ["assistenza@droneguard.it"],
      replyTo: email,
      subject: `Nuovo messaggio DroneGuard: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Nuovo messaggio da DroneGuard</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Ruolo:</strong> ${role}</p>
          <p><strong>Oggetto:</strong> ${subject}</p>
          <hr />
          <p><strong>Messaggio:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `
    })

    if (result.error) {
      console.error("ERRORE RESEND:", result.error)

      return Response.json(
        { error: result.error.message || "Errore invio email" },
        { status: 500 }
      )
    }

    return Response.json({
      success: true
    })
  } catch (error) {
    console.error("ERRORE API CONTACT:", error)

    return Response.json(
      { error: error.message || "Errore server" },
      { status: 500 }
    )
  }
}