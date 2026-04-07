"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FadeContent } from "@/components/ui/FadeContent";

export function AboutSnippet() {
  const highlights = [
    "Certified Teachers",
    "CBSE Curriculum",
    "IIT & NEET Foundation",
    "Safe Environment",
  ];

  return (
    <section className="py-20 md:py-32 bg-surface-cloud overflow-hidden relative">

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent className="grid gap-16 lg:grid-cols-2 items-center">

          <div className="relative">
            <motion.div
              className="aspect-[4/3] rounded-xl bg-surface-border/20 overflow-hidden relative shadow-sm border border-surface-border z-10"
            >
              <img
                src="/images/campus.jpg"
                alt="Vidyanikethan Campus"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 mx-auto bg-surface-white text-sys-primary p-6 shadow-sm rounded-xl text-center border border-surface-border max-w-sm"
            >
              <span className="block text-4xl md:text-5xl mb-1 font-bold tracking-tighter text-brand-indigo">22+</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold block text-sys-muted mt-2">Years of Excellence</span>
            </motion.div>
          </div>

          <div className="pl-0 lg:pl-10 mt-8 lg:mt-0">
            <div className="inline-block text-[11px] font-bold tracking-widest text-brand-indigo uppercase mb-4">
              Welcome to
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sys-primary mb-5 tracking-tight">
              About Vidyanikethan
            </h3>
            <div className="h-[3px] w-8 bg-brand-indigo mb-8 rounded-full"></div>

            <p className="text-sys-body mb-8 text-lg leading-relaxed font-medium">
              At Sai Teja&apos;s Vidyanikethan High School, we believe that education is not just about academic excellence, but about shaping character and building a strong foundation for life.
            </p>

            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-6 mb-12">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: index * 0.1 + 0.2, type: "spring" }}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-indigo/10 text-brand-indigo group-hover:bg-brand-indigo group-hover:text-white transition-colors">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                  </motion.div>
                  <span className="text-sys-primary font-bold tracking-wider text-xs uppercase">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg bg-surface-white border border-surface-border px-8 py-4 text-xs font-bold uppercase tracking-widest text-sys-primary hover:bg-surface-cloud hover:border-brand-indigo focus:outline-none focus:ring-2 focus:ring-brand-indigo transition-all duration-300 shadow-sm group"
            >
              Know More <ArrowRight className="ml-3 h-4 w-4 text-brand-indigo group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </FadeContent>
      </div>
    </section>
  );
}
