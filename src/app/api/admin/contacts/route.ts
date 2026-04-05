import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { db } from "@/lib/prisma";
import { cookies } from "next/headers";

function verifyAdminToken(token: string): boolean {
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) return false;
    const decoded = jwt.verify(token, secret) as { role: string };
    return decoded.role === "admin";
  } catch {
    return false;
  }
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token || !verifyAdminToken(token)) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await db.query(
      `SELECT * FROM "ContactMessage" ORDER BY "createdAt" DESC`
    );
    return NextResponse.json({ success: true, data: result.rows });
  } catch (error) {
    console.error("[Contacts API Error]", error);
    return NextResponse.json({ success: false, message: "Failed to fetch contacts" }, { status: 500 });
  }
}
