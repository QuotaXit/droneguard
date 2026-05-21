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

    const { data: pilots, error } = await supabaseAdmin
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
<div style="
  background:#0b1020;
  padding:40px 20px;
  font-family:Arial,sans-serif;
">
  <div style="
    max-width:600px;
    margin:auto;
    background:#111827;
    border:1px solid rgba(255,255,255,0.08);
    border-radius:24px;
    overflow:hidden;
  ">

    <div style="
      background:linear-gradient(135deg,#0f172a,#111827,#1e3a8a);
      padding:40px 30px;
      text-align:center;
    ">
      <h1 style="
        margin:0;
        color:white;
        font-size:38px;
        font-weight:800;
        letter-spacing:-1px;
      ">
        DroneGuard 🚁
      </h1>

      <p style="
        margin-top:14px;
        color:#cbd5e1;
        font-size:16px;
        line-height:1.6;
      ">
        Nuovo lavoro disponibile per piloti drone.
      </p>
    </div>

    <div style="padding:40px 30px;">

      <h2 style="
        color:white;
        font-size:28px;
        margin-top:0;
        margin-bottom:18px;
      ">
        È stato pubblicato un nuovo lavoro
      </h2>

      <p style="
        color:#94a3b8;
        font-size:16px;
        line-height:1.7;
        margin-bottom:30px;
      ">
        Un cliente ha pubblicato una nuova richiesta su DroneGuard.
        Accedi alla tua dashboard per visualizzare i dettagli e candidarti.
      </p>

      <div style="
        background:#0f172a;
        border:1px solid rgba(255,255,255,0.06);
        border-radius:16px;
        padding:20px;
        margin:25px 0;
      ">
        <p style="margin:0 0 12px 0;color:#cbd5e1;font-size:15px;">
          <strong style="color:white;">Titolo:</strong> ${title}
        </p>

        <p style="margin:0 0 12px 0;color:#cbd5e1;font-size:15px;">
          <strong style="color:white;">Luogo:</strong> ${location}
        </p>

        <p style="margin:0;color:#cbd5e1;font-size:15px;">
          <strong style="color:white;">Data:</strong> ${job_date}
        </p>
      </div>

      <div style="text-align:center;margin:40px 0;">
        <a 
          href="https://www.droneguard.it/login"
          style="
            background:#22c55e;
            color:#000000;
            padding:16px 34px;
            border-radius:14px;
            text-decoration:none;
            font-weight:800;
            font-size:16px;
            display:inline-block;
            box-shadow:0 10px 25px rgba(34,197,94,0.35);
          "
        >
          Visualizza lavoro
        </a>
      </div>

      <div style="
        background:#0f172a;
        border:1px solid rgba(255,255,255,0.06);
        border-radius:16px;
        padding:18px;
        margin-top:20px;
      ">
        <p style="
          margin:0;
          color:#cbd5e1;
          font-size:14px;
          line-height:1.6;
        ">
          Ricevi questa email perché hai attivato le notifiche per i nuovi lavori.
          Puoi disattivarle in qualsiasi momento dalle impostazioni del tuo profilo.
        </p>
      </div>

      <hr style="
        margin:40px 0 25px 0;
        border:none;
        border-top:1px solid rgba(255,255,255,0.08);
      " />

      <div style="
        text-align:center;
        color:#64748b;
        font-size:13px;
        line-height:1.7;
      ">
        DroneGuard © 2026<br/>
        Marketplace professionale per servizi drone
      </div>

    </div>
  </div>
</div>
      `
    })

    return NextResponse.json({ success: true, sent: emails.length })
  } catch (error) {
    console.error("Errore invio email nuovi lavori:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}