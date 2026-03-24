import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
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

    const enquiry = await prisma.admissionEnquiry.create({
      data: {
        studentName: data.studentName,
        parentName: data.parentName,
        phone: data.phone,
        email: data.email || null,
        grade: data.grade,
        message: data.message || null,
      },
    });

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully", data: enquiry },
      { status: 201 }
    );
  } catch (error) {
    console.error("Admissions API Error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: "Invalid data", errors: error.issues }, { status: 400 });
    }
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
