import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        charcoal: '#111827',
        ink: '#0D1520',
        ivory: '#F7F6F1',
        gold: '#C8973A',
        'soft-gold': '#C8B97A',
        cream: '#F3EDD5',
        'warm-border': '#E8E4D9',
        stone: '#9A9280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
