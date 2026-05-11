import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const formData = await req.formData()

    const name = formData.get("name")
    const email = formData.get("email")
    const certification = formData.get("certification")
    const file = formData.get("file")

    if (!name || !email || !certification || !file) {
      return Response.json(
        { error: "Dati mancanti" },
        { status: 400 }
      )
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    await resend.emails.send({
      from: "DroneGuard <noreply@droneguard.it>",
      to: "assistenza@droneguard.it",
      subject: "Nuova richiesta verifica certificazione ENAC",
      html: `
        <h2>Nuova richiesta verifica certificazione ENAC</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Certificazione dichiarata:</strong> ${certification}</p>
        <p>Controlla l'allegato inviato dal pilota.</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer
        }
      ]
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error("CERTIFICATION REQUEST ERROR:", error)

    return Response.json(
      { error: "Errore invio richiesta" },
      { status: 500 }
    )
  }
}