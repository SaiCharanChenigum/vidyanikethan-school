import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json({ success: false, message: "Password required" }, { status: 400 });
    }

    const hash = process.env.ADMIN_PASSWORD_HASH;
    const secret = process.env.JWT_SECRET;

    if (!hash || !secret) {
      console.error("[Admin Login] ADMIN_PASSWORD_HASH or JWT_SECRET not set in environment.");
      return NextResponse.json({ success: false, message: "Server misconfiguration" }, { status: 500 });
    }

    const isValid = await bcrypt.compare(password, hash);

    if (!isValid) {
      return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
    }

    const token = jwt.sign({ role: "admin" }, secret, { expiresIn: "1d" });

    const response = NextResponse.json({ success: true });
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("[Admin Login Error]", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Logged out" });
  response.cookies.set("admin_token", "", { maxAge: 0, path: "/" });
  return response;
}
