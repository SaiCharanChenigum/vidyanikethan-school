import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Name, email, and message are required." }, { status: 400 });
    }

    await db.query(
      `INSERT INTO "ContactMessage" (name, email, phone, message) VALUES ($1, $2, $3, $4)`,
      [name.trim(), email.trim(), phone?.trim() || null, message.trim()]
    );

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json({ success: false, error: "Failed to submit" }, { status: 500 });
  }
}
