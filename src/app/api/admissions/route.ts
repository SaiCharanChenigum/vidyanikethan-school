import { NextResponse } from "next/server";
import * as z from "zod";

const formSchema = z.object({
  studentName: z.string().min(2),
  parentName: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().optional().or(z.literal("")),
  grade: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = formSchema.parse(body);

    // Mocking database save for client demonstration
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully", data },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: "Invalid data", errors: error.issues }, { status: 400 });
    }
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
