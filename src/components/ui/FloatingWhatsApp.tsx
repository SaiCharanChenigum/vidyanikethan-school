"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/919848591617"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </Link>
  );
}
