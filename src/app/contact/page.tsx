"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
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
      // 1. Save to Neon DB via API Route
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to save message to database");
      }

      // 2. Send email via EmailJS (if env vars are configured it won't crash)
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id",
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key"
        );
      } catch (emailErr) {
        console.warn("EmailJS warning:", emailErr);
        // Continue even if EmailJS fails, since DB save worked
      }

      setStatusMsg({ type: "success", text: "Successfully sent your message!" });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      console.error(error);
      setStatusMsg({ type: "error", text: "Failed to send message. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-ivory pb-20">
      {/* Hero Banner */}
      <section className="bg-charcoal py-24 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cream">Contact Us</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT: Contact Info Cards */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-charcoal mb-6">Get in Touch</h2>

            <div className="bg-white p-6 rounded-xl border border-warm-border shadow-sm flex items-start gap-4">
              <div className="bg-cream p-3 rounded-full">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal">Phone</h3>
                <p className="text-stone mt-1">9848591617, 8978261617, 8341141617</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-warm-border shadow-sm flex items-start gap-4">
              <div className="bg-cream p-3 rounded-full">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal">Email</h3>
                <p className="text-stone mt-1">scvidyanikethan@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-warm-border shadow-sm flex items-start gap-4">
              <div className="bg-cream p-3 rounded-full">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal">Address</h3>
                <p className="text-stone mt-1">J.P. Colony, Road No. 1, Patancheru</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-warm-border shadow-sm flex items-start gap-4">
              <div className="bg-cream p-3 rounded-full">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal">Timings</h3>
                <p className="text-stone mt-1">8:00am to 6:00pm</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="bg-white rounded-xl border border-warm-border shadow-sm p-8">
            <h2 className="text-2xl font-bold text-charcoal mb-6">Send a Message</h2>
            
            {statusMsg && (
              <div className={`p-4 mb-6 rounded-md ${statusMsg.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                {statusMsg.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-warm-border focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-charcoal"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-warm-border focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-charcoal"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-warm-border focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-charcoal"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-warm-border focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-charcoal resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-gold hover:bg-soft-gold text-charcoal font-bold rounded-md transition-colors shadow-sm disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-12">
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-sm border border-warm-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5492415797374!2d78.261234975167!3d17.52906378338198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbef23aeeceab9%3A0x63ce951dd9173030!2sJ.%20P.%20Colony%2C%20Patancheru%2C%20Hyderabad%2C%20Telangana%20502319!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
