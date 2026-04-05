import { NextResponse } from "next/server";
import * as z from "zod";
import { db } from "@/lib/prisma";

const formSchema = z.object({
  studentName: z.string().min(2, "Student name must be at least 2 characters"),
  parentName: z.string().min(2, "Parent name must be at least 2 characters"),
  phone: z.string().regex(/^[6-9][0-9]{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email().optional().or(z.literal("")),
  grade: z.string().min(1, "Grade is required"),
  message: z.string().max(1000).optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = formSchema.parse(body);

    const sanitized = {
      studentName: data.studentName.trim(),
      parentName: data.parentName.trim(),
      phone: data.phone.trim(),
      email: data.email?.trim() || null,
      grade: data.grade.trim(),
      message: data.message?.trim() || null,
    };

    await db.query(
      `INSERT INTO "AdmissionEnquiry" ("studentName", "parentName", phone, email, grade, message)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [sanitized.studentName, sanitized.parentName, sanitized.phone, sanitized.email, sanitized.grade, sanitized.message]
    );

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Invalid data", errors: error.issues },
        { status: 400 }
      );
    }
    console.error("[Admissions API Error]", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
