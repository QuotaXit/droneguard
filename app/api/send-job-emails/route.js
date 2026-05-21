import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function POST(req) {
  try {
    const { title, location, job_date } = await req.json()

    const { data: pilots } = await supabaseAdmin
  .from("users")
  .select("email")
  .eq("role", "pilot")
  .eq("email_new_jobs", true)

    if (error) throw error

    const emails = pilots?.map((p) => p.email).filter(Boolean)

    if (!emails || emails.length === 0) {
      return NextResponse.json({ success: true, sent: 0 })
    }

    await resend.emails.send({
      from: "DroneGuard <noreply@droneguard.it>",
      to: emails,
      subject: "🚁 Nuovo lavoro disponibile su DroneGuard",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
          <h2>Nuovo lavoro disponibile su DroneGuard 🚁</h2>

          <p>È stato pubblicato un nuovo lavoro sulla piattaforma.</p>

          <p><strong>Titolo:</strong> ${title}</p>
          <p><strong>Luogo:</strong> ${location}</p>
          <p><strong>Data:</strong> ${job_date}</p>

          <p>Accedi alla tua dashboard per visualizzare il lavoro e candidarti.</p>

          <a href="https://www.droneguard.it/login"
            style="display:inline-block;background:#22c55e;color:#000;padding:12px 18px;border-radius:10px;text-decoration:none;font-weight:bold">
            Vai su DroneGuard
          </a>
        </div>
      `
    })

    return NextResponse.json({ success: true, sent: emails.length })
  } catch (error) {
    console.error("Errore invio email nuovi lavori:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}