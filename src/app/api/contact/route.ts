import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/schemas/contact";
import { getResendClient } from "@/lib/resend";
import { BUSINESS_FACTS } from "@/lib/constants";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  // Honeypot triggered: silently accept without sending, to stay invisible to bots.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const resend = getResendClient();
  if (!resend) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { ok: false, errors: { server: true } },
      { status: 502 },
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? BUSINESS_FACTS.email;

  try {
    await resend.emails.send({
      from: "Kontaktformular <no-reply@simeon-brus-coach.de>",
      to: toEmail,
      replyTo: parsed.data.email,
      subject: `Neue Anfrage: ${parsed.data.topic}`,
      text: [
        `Name: ${parsed.data.name}`,
        `Email: ${parsed.data.email}`,
        `Telefon: ${parsed.data.phone || "-"}`,
        `Thema: ${parsed.data.topic}`,
        `Sprache: ${parsed.data.locale}`,
        "",
        parsed.data.message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend send failed", error);
    return NextResponse.json(
      { ok: false, errors: { server: true } },
      { status: 502 },
    );
  }
}
