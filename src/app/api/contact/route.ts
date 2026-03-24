import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Mocking database save for client demonstration
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { success: true, data: { name, email, message } },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to submit" },
      { status: 500 }
    );
  }
}
