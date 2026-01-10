import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const firstName = String(formData.get("firstName") || "").trim();
  const email = String(formData.get("email") || "").trim();

  if (!firstName || !email) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const payload = {
    to: "glenn.hline@outlook.com",
    subject: `Excerpt One Request from ${firstName}`,
    text: `Please send me excerpt one for Project Vectus Book One.\n\n${firstName}`,
    replyTo: email,
  };

  let sendFailed = false;

  try {
    const hasConfig =
      Boolean(process.env.SMTP_HOST) &&
      Boolean(process.env.SMTP_PORT) &&
      Boolean(process.env.SMTP_USER) &&
      Boolean(process.env.SMTP_PASS);

    if (!hasConfig) {
      if (process.env.NODE_ENV !== "production") {
        console.info("SMTP not configured. Logged excerpt request:", payload);
      } else {
        sendFailed = true;
      }
    } else {
      const host = requireEnv("SMTP_HOST");
      const port = Number(requireEnv("SMTP_PORT"));
      const user = requireEnv("SMTP_USER");
      const pass = requireEnv("SMTP_PASS");
      const from = process.env.SMTP_FROM || "excerpts@projectvectus.com";

      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: {
          user,
          pass,
        },
      });

      await transporter.sendMail({
        from,
        ...payload,
      });
    }
  } catch (error) {
    console.error("Failed to send excerpt request email:", error);
    sendFailed = true;
  }

  if (sendFailed) {
    return NextResponse.redirect(new URL("/request-error", request.url), 303);
  }

  return NextResponse.redirect(new URL("/thank-you", request.url), 303);
}
