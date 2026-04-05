"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const showToast = (type: "success" | "error", text: string) => {
    setToast({ type, text });
    setTimeout(() => setToast(null), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === "phone") {
      const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: digits }));
      return;
    }
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    // Phone validation (optional field, but if entered must be valid)
    if (formData.phone && !/^[6-9][0-9]{9}$/.test(formData.phone)) {
      showToast("error", "Please enter a valid mobile number.");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to save message");
      showToast("success", "Your message was sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: unknown) {
      console.error(error);
      showToast("error", "Failed to send message. Please try again later.");
    } finally { setIsSubmitting(false); }
  };

  return (
    <main className="min-h-screen bg-surface-cloud pb-20">
      {/* Toast Popup */}
      {toast && (
        <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border text-sm font-semibold animate-fade-in transition-all ${toast.type === "success"
            ? "bg-white border-green-200 text-green-800"
            : "bg-white border-red-200 text-red-700"
          }`}>
          {toast.type === "success"
            ? <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
            : <XCircle className="h-5 w-5 text-red-500 shrink-0" />}
          {toast.text}
        </div>
      )}

      <section className="bg-brand-slate py-24 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-surface-white">Contact Us</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-sys-primary mb-6">Get in Touch</h2>
            {[
              { icon: Phone, title: "Phone", info: "9848591617, 8978261617, 8341141617" },
              { icon: Mail, title: "Email", info: "scvidyanikethan@gmail.com" },
              { icon: MapPin, title: "Address", info: "J.P. Colony, Road No. 1, Patancheru" },
              { icon: Clock, title: "Timings", info: "8:00am to 6:00pm" },
            ].map((card, idx) => (
              <div key={idx} className="bg-surface-white p-6 rounded-xl border border-surface-border shadow-sm flex items-start gap-5 hover:border-brand-indigo/30 transition-colors">
                <div className="bg-surface-cloud border border-surface-border p-3 rounded-xl shadow-sm text-brand-indigo">
                  <card.icon className="w-6 h-6" />
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-sys-primary uppercase tracking-wider text-sm">{card.title}</h3>
                  <p className="text-sys-body mt-1 leading-relaxed">{card.info}</p>
                </div>
              </div>
            ))}
            <div className="pt-8 border-t border-surface-border">
              <h3 className="text-sm font-bold text-sys-muted uppercase tracking-widest mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/saiteja.vidyanikethanhighschool?rdid=KtbvMYQDl6knJsir&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18XssUyKRZ%2F#", label: "Facebook", hoverClass: "hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2]" },
                  { icon: Instagram, href: "https://www.instagram.com/vidyanikethan_official?igsh=MW91bHc5ZWQwNGdrMw%3D%3D", label: "Instagram", hoverClass: "hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent" },
                  { icon: Youtube, href: "https://youtube.com/@saitejasvidyanikethanhighs7510?si=jtsqVSd_C8I-34oA", label: "YouTube", hoverClass: "hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000]" },
                ].map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 flex items-center justify-center rounded-xl bg-surface-white border border-surface-border text-sys-muted hover:shadow-md transition-all group ${social.hoverClass}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-surface-white rounded-xl border border-surface-border shadow-md p-8 md:p-10">
            <h2 className="text-2xl font-bold text-sys-primary mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: "Name", name: "name", type: "text", placeholder: "Your full name", required: true },
                { label: "Email", name: "email", type: "email", placeholder: "Your email address", required: true },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-bold uppercase tracking-widest text-sys-muted mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-surface-border focus:outline-none focus:ring-1 focus:ring-brand-indigo focus:border-brand-indigo text-sys-primary transition-all bg-surface-cloud/50 focus:bg-surface-white"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-sys-muted mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  inputMode="numeric"
                  className="w-full px-4 py-3 rounded-lg border border-surface-border focus:outline-none focus:ring-1 focus:ring-brand-indigo focus:border-brand-indigo text-sys-primary transition-all bg-surface-cloud/50 focus:bg-surface-white"
                  placeholder="10-digit mobile number"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-sys-muted mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-surface-border focus:outline-none focus:ring-1 focus:ring-brand-indigo focus:border-brand-indigo text-sys-primary resize-none transition-all bg-surface-cloud/50 focus:bg-surface-white"
                  placeholder="How can we help you?"
                />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full py-4 px-6 bg-brand-amber hover:bg-[#D97706] text-white font-bold text-sm tracking-widest uppercase rounded-lg transition-colors shadow-sm disabled:opacity-70 mt-4 outline-none focus:ring-2 focus:ring-brand-amber focus:ring-offset-2">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-12">
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-sm border border-surface-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4586760314583!2d78.26396837369313!3d17.533335698587205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf2eb10de2f23%3A0x5e2cd8e39f33e341!2sVidyaniketan%20High%20School!5e0!3m2!1sen!2sin!4v1775290990256!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
