import { NextResponse } from "next/server";
import { Resend } from "resend";
import { NikeReceiptEmail } from "../../../components/email-template";
export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { email, searchParams } = await req.json();

  try {
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["aditya767718@gmail.com", email],
      subject: "Booking Details",
      react: NikeReceiptEmail(),
    });

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}