import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newContactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    });

    return NextResponse.json(
      { success: true, data: newContactMessage },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating contact message:", error);
    return NextResponse.json(
      { error: "Failed to create contact message" },
      { status: 500 }
    );
  }
}
