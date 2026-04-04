"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to save message");
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id",
          { from_name: formData.name, from_email: formData.email, phone: formData.phone, message: formData.message },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key"
        );
      } catch (emailErr) { console.warn("EmailJS warning:", emailErr); }
      setStatusMsg({ type: "success", text: "Successfully sent your message!" });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: unknown) {
      console.error(error);
      setStatusMsg({ type: "error", text: "Failed to send message. Please try again later." });
    } finally { setIsSubmitting(false); }
  };

  return (
    <main className="min-h-screen bg-surface-cloud pb-20">
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
            {statusMsg && (
              <div className={`p-4 mb-6 rounded-md font-medium text-sm border ${statusMsg.type === "success" ? "bg-green-50 text-green-800 border-green-200" : "bg-red-50 text-red-800 border-red-200"}`}>
                {statusMsg.text}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: "Name", name: "name", type: "text", placeholder: "Your full name" },
                { label: "Email", name: "email", type: "email", placeholder: "Your email address" },
                { label: "Phone", name: "phone", type: "tel", placeholder: "Your phone number" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-bold uppercase tracking-widest text-sys-muted mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.name !== "phone"}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-surface-border focus:outline-none focus:ring-1 focus:ring-brand-indigo focus:border-brand-indigo text-sys-primary transition-all bg-surface-cloud/50 focus:bg-surface-white"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
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
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3804.458229161097!2d78.266542!3d17.533356999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDMyJzAwLjEiTiA3OMKwMTUnNTkuNiJF!5e0!3m2!1sen!2sin!4v1775290353740!5m2!1sen!2sin"
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
