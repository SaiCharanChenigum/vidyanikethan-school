"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2 } from "lucide-react";

const GRADES = [
  "Nursery", "LKG", "UKG", 
  "Class I", "Class II", "Class III", "Class IV", "Class V", 
  "Class VI", "Class VII", "Class VIII", "Class IX", "Class X"
];

const STEPS = [
  {
    num: "1",
    title: "Fill Enquiry Form",
    desc: "Submit your details below to express your interest.",
  },
  {
    num: "2",
    title: "Visit Campus",
    desc: "Take a tour and interact with our admission team.",
  },
  {
    num: "3",
    title: "Confirm Admission",
    desc: "Complete documentation and secure your child's seat.",
  },
];

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    grade: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      // 1. Save to DB
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit enquiry to database");
      }

      // 2. Send email via EmailJS (if configured, won't crash if fails)
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id",
          {
            student_name: formData.studentName,
            parent_name: formData.parentName,
            phone: formData.phone,
            email: formData.email,
            grade: formData.grade,
            message: formData.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key"
        );
      } catch (emailErr) {
        console.warn("EmailJS warning:", emailErr);
      }

      setIsSuccess(true);
      setFormData({ studentName: "", parentName: "", phone: "", email: "", grade: "", message: "" });
      
      // Auto dismiss success toast after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error: any) {
      console.error(error);
      setErrorMsg("Failed to submit your enquiry. Please try again later or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-ivory pb-20 relative">
      
      {/* Toast Notification */}
      {isSuccess && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-white border border-green-200 shadow-xl rounded-lg p-4 flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="w-6 h-6 text-green-500" />
          <p className="font-bold text-charcoal">Enquiry submitted successfully! We will contact you soon.</p>
        </div>
      )}

      {/* Hero Banner */}
      <section className="bg-charcoal py-24 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4">Admissions 2025–26</h1>
          <p className="text-xl text-stone">Admissions are now open for Nursery to Class X</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
        
        {/* Process Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-warm-border p-8 relative flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-charcoal text-xl font-bold mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{step.title}</h3>
                <p className="text-stone">{step.desc}</p>
                {/* Horizontal line connector for desktop */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-[60px] left-[60%] w-[80%] h-[2px] bg-warm-border -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-warm-border p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-charcoal mb-3">Enquiry Form</h2>
            <p className="text-stone">Fill out the form below and our admissions team will get in touch with you.</p>
          </div>

          {errorMsg && (
            <div className="p-4 mb-8 bg-red-50 text-red-800 rounded-md border border-red-200">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone mb-1">Student Name *</label>
                <input
                  type="text"
                  name="studentName"
                  required
                  value={formData.studentName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-warm-border focus:outline-none focus:ring-2 focus:ring-gold text-charcoal"
                  placeholder="Enter student's name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone mb-1">Parent Name *</label>
                <input
                  type="text"
                  name="parentName"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-warm-border focus:outline-none focus:ring-2 focus:ring-gold text-charcoal"
                  placeholder="Enter parent's name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-warm-border focus:outline-none focus:ring-2 focus:ring-gold text-charcoal"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone mb-1">Email (Optional)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-warm-border focus:outline-none focus:ring-2 focus:ring-gold text-charcoal"
                  placeholder="Enter email address"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone mb-1">Select Grade *</label>
              <select
                name="grade"
                required
                value={formData.grade}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-warm-border focus:outline-none focus:ring-2 focus:ring-gold text-charcoal bg-white"
              >
                <option value="" disabled>Select grade looking for</option>
                {GRADES.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone mb-1">Message (Optional)</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-warm-border focus:outline-none focus:ring-2 focus:ring-gold text-charcoal resize-none"
                placeholder="Any specific questions or details?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-gold hover:bg-soft-gold text-charcoal font-bold text-lg rounded-md transition-colors shadow-sm disabled:opacity-70 mt-4"
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
