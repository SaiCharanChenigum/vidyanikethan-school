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
        'navy-deep': '#0F2254',
        'navy-ink': '#081640',
        royal: {
          DEFAULT: '#1B3A8C',
          light: '#2A52B8',
        },
        'gold-crest': '#C9A440',
        'gold-flame': '#E8A830',
        'gold-soft': '#E8C96A',
        pearl: '#F5F4EF',
        cream: '#F0EBD8',
        border: '#DDE3F0',
        slate: '#6B7A9E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
