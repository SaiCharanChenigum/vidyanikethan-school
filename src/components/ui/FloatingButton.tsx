"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
    >
      <Link href="#admissions-form" className="group flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-60 pointer-events-none"></div>
        <div className="relative flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 md:px-6 md:py-4 shadow-lg hover:shadow-gold/60 hover:scale-105 transition-all outline outline-2 outline-offset-2 outline-gold/50 pointer-events-auto">
          <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-charcoal" />
          <span className="font-semibold text-charcoal text-sm md:text-base hidden sm:inline-block tracking-wide">
            Admissions Open
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
