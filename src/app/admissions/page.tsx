"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const GRADES = ["Nursery", "LKG", "UKG", "Class I", "Class II", "Class III", "Class IV", "Class V", "Class VI", "Class VII", "Class VIII", "Class IX", "Class X"];

const STEPS = [
  { num: "1", title: "Fill Enquiry Form", desc: "Submit your details below to express your interest." },
  { num: "2", title: "Visit Campus", desc: "Take a tour and interact with our admission team." },
  { num: "3", title: "Confirm Admission", desc: "Complete documentation and secure your child's seat." },
];

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({ studentName: "", parentName: "", phone: "", email: "", grade: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.name === "phone") {
      // Only allow digits, max 10, starting with 6/7/8/9
      const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: digits }));
      return;
    }
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    // Client-side phone validation
    if (formData.phone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit phone number.");
      setIsSubmitting(false);
      return;
    }
    if (!/^[6-9]/.test(formData.phone)) {
      setErrorMsg("Phone number must start with 6, 7, 8, or 9.");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/admissions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        // Show specific field errors if available
        if (errData.errors && errData.errors.length > 0) {
          const messages = errData.errors.map((e: { message: string }) => e.message).join(", ");
          setErrorMsg(messages);
        } else {
          setErrorMsg(errData.message || "Failed to submit your enquiry. Please try again.");
        }
        return;
      }

      try {
        await import("@emailjs/browser").then(({ default: emailjs }) =>
          emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id",
            { student_name: formData.studentName, parent_name: formData.parentName, phone: formData.phone, email: formData.email, grade: formData.grade, message: formData.message },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key")
        );
      } catch (emailErr) { console.warn("EmailJS:", emailErr); }

      setIsSuccess(true);
      setFormData({ studentName: "", parentName: "", phone: "", email: "", grade: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error: unknown) {
      console.error(error);
      setErrorMsg("Failed to submit your enquiry. Please try again later or contact us directly.");
    } finally { setIsSubmitting(false); }
  };

  return (
    <main className="min-h-screen bg-surface-cloud pb-20 relative">
      {isSuccess && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-white border border-green-200 shadow-xl rounded-lg p-4 flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="w-6 h-6 text-brand-emerald" />
          <p className="font-bold text-sys-primary">Enquiry submitted successfully! We will contact you soon.</p>
        </div>
      )}

      <section className="bg-brand-slate py-24 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-surface-white mb-4">Admissions 2025–26</h1>
          <p className="text-xl text-surface-white/70">Admissions are now open for Nursery to Class X</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-sys-primary mb-12">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, idx) => (
              <div key={idx} className="bg-surface-white rounded-xl shadow-sm border border-surface-border p-10 relative flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-brand-indigo rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 shadow-sm border-[4px] border-surface-cloud">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-sys-primary mb-3">{step.title}</h3>
                <p className="text-sys-body leading-relaxed">{step.desc}</p>
                {idx < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-[70px] left-[60%] w-[80%] h-[2px] bg-surface-border -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-surface-white rounded-xl shadow-md border border-surface-border p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-sys-primary mb-3">Enquiry Form</h2>
            <p className="text-sys-body">Fill out the form below and our admissions team will get in touch with you.</p>
          </div>

          {errorMsg && <div className="p-4 mb-8 bg-red-50 text-red-800 rounded-md border border-red-200">{errorMsg}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-sys-muted mb-2">Student Name *</label>
                <input type="text" name="studentName" required value={formData.studentName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-border focus:outline-none focus:ring-1 focus:ring-brand-indigo focus:border-brand-indigo text-sys-primary bg-surface-cloud/50 focus:bg-surface-white transition-all" placeholder="Enter student's name" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-sys-muted mb-2">Parent Name *</label>
                <input type="text" name="parentName" required value={formData.parentName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-border focus:outline-none focus:ring-1 focus:ring-brand-indigo focus:border-brand-indigo text-sys-primary bg-surface-cloud/50 focus:bg-surface-white transition-all" placeholder="Enter parent's name" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-sys-muted mb-2">Phone Number *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} maxLength={10} inputMode="numeric" pattern="[6-9][0-9]{9}" className="w-full px-4 py-3 rounded-lg border border-surface-border focus:outline-none focus:ring-1 focus:ring-brand-indigo focus:border-brand-indigo text-sys-primary bg-surface-cloud/50 focus:bg-surface-white transition-all" placeholder="10-digit mobile number" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-sys-muted mb-2">Email (Optional)</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-border focus:outline-none focus:ring-1 focus:ring-brand-indigo focus:border-brand-indigo text-sys-primary bg-surface-cloud/50 focus:bg-surface-white transition-all" placeholder="Enter email address" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-sys-muted mb-2">Select Grade *</label>
              <select name="grade" required value={formData.grade} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-border focus:outline-none focus:ring-1 focus:ring-brand-indigo focus:border-brand-indigo text-sys-primary bg-surface-cloud/50 focus:bg-surface-white transition-all">
                <option value="" disabled>Select grade looking for</option>
                {GRADES.map((g) => (<option key={g} value={g}>{g}</option>))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-sys-muted mb-2">Message (Optional)</label>
              <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-surface-border focus:outline-none focus:ring-1 focus:ring-brand-indigo focus:border-brand-indigo text-sys-primary bg-surface-cloud/50 focus:bg-surface-white transition-all resize-none" placeholder="Any specific questions or details?" />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full py-4 px-6 bg-brand-amber hover:bg-[#D97706] text-white font-bold text-sm tracking-widest uppercase rounded-lg transition-colors shadow-sm disabled:opacity-70 mt-4 outline-none focus:ring-2 focus:ring-brand-amber focus:ring-offset-2">
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
