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
        'navy-midnight': '#0A1628',
        'navy-royal': '#1C3F8C',
        'navy-sky': '#4A7DD4',
        'navy-ink': '#060E1C',
        'gold-crest': '#D4A843',
        'gold-flame': '#F0921E',
        'gold-soft': '#F0C55A',
        emerald: {
          DEFAULT: '#1A6B4A',
          tint: '#E8F5EE',
        },
        cream: '#F8F6F0',
        offwhite: '#FAFAF8',
        border: '#E2E8F0',
        slate: '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        pulse_cta: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(240,146,30,0.5)' },
          '50%': { boxShadow: '0 0 0 10px rgba(240,146,30,0)' },
        },
      },
      animation: {
        'pulse-cta': 'pulse_cta 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
