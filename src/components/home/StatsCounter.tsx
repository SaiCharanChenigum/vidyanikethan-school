"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function Counter({ end, duration = 2000, suffix = "", text }: { end: number, duration?: number, suffix?: string, text: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center group relative overflow-hidden py-10 px-4 h-full flex flex-col justify-center">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="text-5xl md:text-7xl font-bold mb-3 tracking-tighter text-brand-amber font-serif">
          {count}{suffix}
        </div>
        <div className="text-xs md:text-sm font-bold text-surface-cloud/60 tracking-widest uppercase">
          {text}
        </div>
      </div>
    </div>
  );
}

export function StatsCounter() {
  const stats = [
    { end: 100, suffix: "%", text: "Results" },
    { end: 49, suffix: "/49", text: "Students Passed" },
    { end: 25, suffix: "+", text: "Expert Teachers" },
    { end: 15, suffix: "+", text: "Years of Excellence" }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-brand-slate border-y border-white/5">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-0 relative items-center">
          
          {stats.map((stat, i) => (
             <div key={i} className={`relative h-full flex flex-col justify-center sm:py-8 lg:py-0 ${i % 2 === 1 ? 'sm:border-l sm:border-white/10 lg:border-none' : ''} ${i >= 2 ? 'sm:border-t sm:border-white/10 lg:border-t-0' : ''} ${i > 0 ? 'lg:border-l lg:border-white/10' : ''}`}>
              <Counter {...stat} />
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
