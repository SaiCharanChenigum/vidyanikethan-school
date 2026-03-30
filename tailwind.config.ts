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
        brand: {
          slate:   '#0F172A',
          indigo:  '#2563EB',
          amber:   '#F59E0B',
          emerald: '#10B981',
        },
        surface: {
          white:   '#FFFFFF',
          cloud:   '#F8FAFC',
          border:  '#E2E8F0',
        },
        sys: {
          primary: '#1E293B',
          body:    '#475569',
          muted:   '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        pulse_cta: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245,158,11,0.5)' },
          '50%': { boxShadow: '0 0 0 10px rgba(245,158,11,0)' },
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
