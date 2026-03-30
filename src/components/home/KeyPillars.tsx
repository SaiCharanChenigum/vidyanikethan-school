"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Trophy } from "lucide-react";
import { FadeContent } from "@/components/ui/FadeContent";

export function KeyPillars() {
  const pillars = [
    {
      title: "Academic Excellence",
      description: "Rigorous CBSE curriculum blended with modern teaching methodologies to ensure superior academic outcomes and intellectual growth.",
      icon: BookOpen,
      delay: 0.1,
      number: "01"
    },
    {
      title: "Establishing Values",
      description: "Instilling strong moral character, discipline, and ethical principles to shape responsible and compassionate global citizens.",
      icon: Users,
      delay: 0.2,
      number: "02"
    },
    {
      title: "Integrated Development",
      description: "Balancing academics with sports, arts, and extracurricular activities for the complete physical and mental growth of every child.",
      icon: Trophy,
      delay: 0.3,
      number: "03"
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-pearl relative border-y border-border/50">

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-block text-[11px] font-bold tracking-widest text-slate uppercase mb-4">
            Our Foundation
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-navy-deep mb-4">
            The Three Pillars
          </h2>
          <div className="h-[3px] w-12 bg-gold-crest mx-auto mb-8"></div>
          
          <p className="text-slate text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Our educational philosophy is built upon three core principles that guide every aspect of our students&apos; journey.
          </p>
        </FadeContent>

        <div className="grid md:grid-cols-3 gap-8 px-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: pillar.delay, type: "spring", stiffness: 100 }}
              className="bg-white border border-border p-10 md:p-12 relative flex flex-col items-start group hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-deep/5 transition-all duration-500"
            >
              {/* Accent bar */}
              <div className="absolute left-[-1px] top-0 bottom-0 w-[3px] bg-royal opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Number Label */}
              <div className="text-[10px] font-bold text-gold-crest mb-8 tracking-widest">
                {pillar.number}.
              </div>
              
              {/* Accent bar under number */}
              <div className="h-[2px] w-5 bg-royal mb-8"></div>
              
              <div className="w-14 h-14 rounded-none bg-pearl border border-border flex items-center justify-center mb-8 text-navy-deep group-hover:bg-gold-crest group-hover:border-gold-crest group-hover:text-navy-deep transition-colors duration-500">
                <pillar.icon className="h-5 w-5 relative z-10" />
              </div>
              
              <h4 className="text-xl font-bold tracking-tight text-navy-deep mb-4">
                {pillar.title}
              </h4>
              
              <p className="text-slate leading-relaxed text-sm font-medium">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
