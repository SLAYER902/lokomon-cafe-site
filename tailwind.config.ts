import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#142B63",
        ink: "#0B1738",
        orange: "#F58A1F",
        amber: "#FFB34D",
        cream: "#FFF1D9",
        paper: "#F9F6EF",
        espresso: "#1E140F",
        charcoal: "#282525"
      },
      fontFamily: {
        display: ["Anton", "Bebas Neue", "Impact", "Arial Black", "sans-serif"],
        sans: ["Space Grotesk", "Manrope", "Inter", "system-ui", "sans-serif"],
        devanagari: ["Noto Sans Devanagari", "system-ui", "sans-serif"]
      },
      boxShadow: {
        poster: "0 24px 70px rgba(11, 23, 56, 0.22)",
        glow: "0 0 0 1px rgba(255, 179, 77, 0.26), 0 18px 60px rgba(245, 138, 31, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
