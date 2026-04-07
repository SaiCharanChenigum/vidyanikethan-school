"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export function CorrespondentSection() {
  return (
    <section className="py-20 md:py-32 bg-surface-white border-y border-surface-border overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.02] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block text-[11px] font-bold tracking-widest text-brand-indigo uppercase mb-4">
            From the desk of the Principal
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-sys-primary mb-5 tracking-tight uppercase">
            Correspondent&apos;s Message
          </h2>
          <div className="h-[3px] w-12 bg-brand-indigo mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start bg-surface-cloud border border-surface-border rounded-2xl p-8 md:p-12 shadow-sm">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center flex-shrink-0"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-surface-white shadow-lg mb-6 ring-1 ring-surface-border">
              {/* Note: User needs to upload this image later, using placeholder or path */}
              <Image
                src="/images/correspondent.jpg"
                alt="G. SAI TEJA Correspondent"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 192px, 256px"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/400x400?text=G.+SAI+TEJA";
                }}
              />
            </div>
            <h3 className="text-xl font-bold text-sys-primary text-center uppercase">G. Sai Teja</h3>
            <p className="text-sm text-sys-muted font-bold tracking-wider mt-1 text-center">CORRESPONDENT</p>
            <p className="text-xs text-brand-indigo font-bold tracking-widest mt-2 bg-brand-indigo/10 px-3 py-1 rounded-full text-center">MA, BL, PADIRPM</p>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Quote className="absolute -top-4 -left-4 w-12 h-12 text-brand-indigo/10 rotate-180" />

            <div className="space-y-5 text-sys-body font-medium leading-relaxed relative z-10 text-sm md:text-base">
              <p>
                As the second home for our children, Sai Teja&apos;s Vidyanikethan blends eastern culture with modern development. For over two decades, our dedicated staff and supportive parents have helped the school blossom into the premier institution it is today.
              </p>

              <p>
                Our philosophy is simple: we place the child in pursuit of knowledge. We provide unparalleled facilities, cultural activities, and a nurturing social atmosphere where courtesy, kindness, and ambition thrive.
              </p>

              <p>
                Beyond academic excellence, we focus heavily on high moral values, helping every student develop <strong>self-worth, self-esteem, and discipline</strong> to become a complete, well-rounded individual.
              </p>

              <div className="pt-6 border-t border-surface-border mt-8">
                <p className="text-brand-indigo font-bold italic mb-1">Our beliefs become Our thoughts,</p>
                <p className="text-brand-indigo font-bold italic mb-1">Our thoughts become Our words, Our words become Our actions,</p>
                <p className="text-brand-indigo font-bold italic mb-1">Our actions become Our habits</p>
                <p className="text-brand-indigo font-bold italic mb-1">Our habits become Our values,</p>
                <p className="text-brand-indigo font-bold italic">Our values become Our destiny</p>
              </div>

              {/* <p className="font-bold text-sys-primary mt-6 tracking-wide">Thanking you!</p> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
