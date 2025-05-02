import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.CONTACT_RECIPIENT,
    subject: `Mesaj de contact de la ${name}`,
    text: message,
    html: `<p>${message.replace(/\n/g, "<br/>")}</p><p>De la: ${name} &lt;${email}&gt;</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error("Eroare la trimiterea emailului:", err);
    return NextResponse.error();
  }
}
