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
    <section className="py-20 md:py-32 bg-surface-white relative border-y border-surface-border">

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-block text-[11px] font-bold tracking-widest text-brand-indigo uppercase mb-4">
            Our Foundation
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-sys-primary mb-4">
            The Three Pillars
          </h2>
          <div className="h-[3px] w-8 bg-brand-indigo mx-auto mb-8 rounded-full"></div>
          
          <p className="text-sys-body text-lg font-medium leading-relaxed max-w-2xl mx-auto">
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
              className="bg-surface-white border border-surface-border rounded-xl p-10 md:p-12 relative flex flex-col items-start shadow-sm group hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              {/* Number Label */}
              <div className="text-[10px] font-bold text-brand-indigo mb-6 tracking-widest bg-brand-indigo/5 px-2 py-1 rounded-md">
                {pillar.number}
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-surface-cloud border border-surface-border flex items-center justify-center mb-8 text-sys-primary group-hover:bg-brand-indigo group-hover:border-brand-indigo group-hover:text-white transition-colors duration-300">
                <pillar.icon className="h-6 w-6 relative z-10" />
              </div>
              
              <h4 className="text-xl font-bold tracking-tight text-sys-primary mb-4">
                {pillar.title}
              </h4>
              
              <p className="text-sys-body leading-relaxed text-sm font-medium">
                {pillar.description}
              </p>
              
              {/* Decorative base line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-indigo scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-b-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
