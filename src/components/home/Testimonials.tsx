"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    { name: "Rajesh Kumar", role: "Parent of Grade 8 Student", text: "The dedicated faculty and excellent facilities have truly brought out the best in our child.", rating: 5 },
    { name: "Priya Sharma", role: "Parent of Grade 5 Student", text: "Vidyanikethan provides a perfect balance of academics and extracurricular activities.", rating: 5 },
    { name: "Srinivas Reddy", role: "Parent of Grade 10 Student", text: "We are extremely happy with the focus on IIT/NEET foundation right from middle school.", rating: 4 },
    { name: "Anita Desai", role: "Parent of Grade 6 Student", text: "A safe, nurturing environment where my child is excited to go every single day.", rating: 5 },
    { name: "Vikram Singh", role: "Parent of Grade 9 Student", text: "The leadership programs and holistic development approach are highly commendable.", rating: 5 },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 md:py-32 bg-offwhite overflow-hidden relative">
      <div className="container relative mx-auto px-4 z-10 mb-16">
        <div className="text-center">
          <div className="inline-block text-[11px] font-bold tracking-widest text-slate uppercase mb-4">
            Words From Parents
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-navy-midnight mb-4">
            Testimonials
          </h2>
          <div className="h-[3px] w-8 bg-gold-crest mx-auto mb-8"></div>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-offwhite to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-offwhite to-transparent z-20 pointer-events-none"></div>
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 45, repeat: Infinity }}
          className="flex gap-6 px-4 md:px-6 w-max hover:[animation-play-state:paused] py-4"
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="w-[320px] md:w-[450px] flex-shrink-0 bg-white rounded-lg p-8 md:p-10 border border-border relative overflow-hidden group/card shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="absolute -top-4 -right-4 opacity-[0.03]">
                <Quote className="w-32 h-32 text-navy-midnight rotate-12" />
              </div>

              <div className="flex text-gold-crest mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <Star className={`h-4 w-4 ${i < testimonial.rating ? "fill-current" : "text-slate/30"}`} />
                  </motion.div>
                ))}
              </div>

              <p className="text-navy-midnight mb-8 italic relative z-10 font-medium leading-relaxed text-lg flex-1">&ldquo;{testimonial.text}&rdquo;</p>
              
              <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-offwhite border border-border flex items-center justify-center text-navy-midnight font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-navy-midnight tracking-tight text-sm uppercase">{testimonial.name}</h4>
                  <p className="text-[11px] font-semibold text-slate uppercase tracking-widest mt-1">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
