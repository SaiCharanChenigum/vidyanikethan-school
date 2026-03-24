"use client";
import { motion } from "framer-motion";

export function Aurora({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#050B14]">
      <motion.div 
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-50 blur-[100px] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(-45deg, #1E3A8A 30%, #4C1D95 50%, #EA580C 80%)",
          backgroundSize: "400% 400%",
        }}
      />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
