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
    <section className="py-20 md:py-32 bg-white overflow-hidden relative">

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent className="grid gap-16 lg:grid-cols-2 items-center">

          <div className="relative">
            <motion.div
              className="aspect-[4/3] rounded-sm bg-border/20 overflow-hidden relative shadow-sm border border-border z-10"
            >
              <img
                src="/images/campus.jpg"
                alt="Vidyanikethan Campus"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-navy-midnight text-cream p-5 md:p-8 shadow-xl text-center border-l-4 border-gold-crest w-[160px] md:w-[200px] z-20"
            >
              <span className="block text-4xl md:text-6xl mb-1 font-bold tracking-tighter text-gold-crest">15+</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold block text-cream/70 leading-relaxed mt-2">Years of Excellence</span>
            </motion.div>
          </div>

          <div className="pl-0 lg:pl-10 mt-8 lg:mt-0">
            <div className="inline-block text-[11px] font-bold tracking-widest text-slate uppercase mb-4">
              Welcome to
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-midnight mb-5 tracking-tight">
              About Vidyanikethan
            </h3>
            <div className="h-[3px] w-8 bg-gold-crest mb-8"></div>

            <p className="text-slate mb-8 text-lg leading-relaxed font-medium">
              At Sai Teja&apos;s Vidyanikethan High School, we believe that education is not just about academic excellence, but about shaping character and building a strong foundation for life.
            </p>

            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-6 mb-12">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: index * 0.1 + 0.2, type: "spring" }}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-none bg-gold-flame/10 text-gold-flame group-hover:bg-gold-flame group-hover:text-white transition-colors border border-gold-flame/30">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                  </motion.div>
                  <span className="text-navy-midnight font-semibold tracking-wider text-xs uppercase">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-[7px] bg-gold-flame px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#E0850A] transition-all duration-300 group"
            >
              Know More <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </FadeContent>
      </div>
    </section>
  );
}
