"use client";
import { motion } from "framer-motion";

export function SplitText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  
  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((letter, j) => (
            <motion.span
              key={j}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i * 5 + j) * 0.03, type: "spring", damping: 12, stiffness: 200 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}
