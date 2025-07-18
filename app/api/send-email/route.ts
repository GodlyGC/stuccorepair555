// app/api/send-email/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";


export async function POST(req: Request) {
  try {
    // Debug environment variable
    const formData = await req.formData();

    const name           = String(formData.get("name")          || "");
    const email          = String(formData.get("email")         || "");
    const phone          = String(formData.get("phone")         || "");
    const projectInfo    = String(formData.get("projectInfo")   || "");
    const privacyConsent = String(formData.get("privacyConsent")|| "false");
    const termsConsent   = String(formData.get("termsConsent")  || "false");

    // Build attachments array
    const attachments: Array<{ filename: string; content: Buffer }> = [];
    for (const key of ["closeUpFile", "farAwayFile"] as const) {
      const file = formData.get(key);
      if (file instanceof File && file.size > 0) {
        attachments.push({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
        });
      }
    }

    // Create the SMTP transporter
    const transporter = nodemailer.createTransport({
      host:     process.env.BREVO_SMTP_HOST || "smtp-relay.brevo.com",
      port:     parseInt(process.env.BREVO_SMTP_PORT || "587"),
      secure:   false,            // use STARTTLS
      requireTLS: true,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASS,
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || `"Stucco Repair" <adi.bivol@gmail.com>`,
      to:   process.env.EMAIL_TO || "adi.bivol@gmail.com",
      subject: `New Stucco Repair Quote Request from ${name}`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Privacy consent: ${privacyConsent}\n` +
        `Terms consent: ${termsConsent}\n\n` +
        `Project Info:\n${projectInfo}`,
      attachments,
    });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (err: any) {
    console.error("[send-email][SMTP]", err);
    return NextResponse.json(
      { success: false, error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}
