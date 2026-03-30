"use client";

import { motion } from "framer-motion";
import { Book, GraduationCap, Laptop, Palette, Trophy, Stethoscope, Video, Music, Atom, MonitorPlay } from "lucide-react";
import { FadeContent } from "@/components/ui/FadeContent";

export function Features() {
  const features = [
    { name: "CBSE Curriculum", icon: Book },
    { name: "IIT & NEET", icon: Atom },
    { name: "Certified Staff", icon: GraduationCap },
    { name: "Digital Class", icon: MonitorPlay },
    { name: "Activity Based", icon: Palette },
    { name: "Computer Labs", icon: Laptop },
    { name: "Sports Facilities", icon: Trophy },
    { name: "Medical Care", icon: Stethoscope },
    { name: "CCTV Coverage", icon: Video },
    { name: "Extracurriculars", icon: Music },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-block text-[11px] font-bold tracking-widest text-slate uppercase mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-navy-midnight mb-4">
            World-Class Facilities
          </h2>
          <div className="h-[3px] w-8 bg-gold-crest mx-auto mb-8"></div>
          
          <p className="text-slate text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            We provide comprehensive facilities to support every aspect of student life and learning.
          </p>
        </FadeContent>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 px-0 md:px-4"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-offwhite border border-border p-6 md:p-8 text-center flex flex-col items-center justify-center hover:-translate-y-0.5 hover:border-gold-flame transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-none bg-white border border-border shadow-sm flex items-center justify-center mb-5 text-navy-midnight group-hover:bg-gold-flame group-hover:border-gold-flame group-hover:text-white transition-colors duration-300">
                <feature.icon className="h-5 w-5" />
              </div>
              <h4 className="text-[11px] font-bold tracking-widest uppercase text-navy-midnight leading-relaxed">
                {feature.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
