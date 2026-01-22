/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#197fe6",
        "background-light": "#f6f7f8",
        "background-dark": "#111921",
        "surface-light": "#ffffff",
        "surface-dark": "#1e2936",
        "border-light": "#e2e8f0",
        "border-dark": "#334155",
        // Keeping previous colors for backward compatibility if needed, though they might be replaced eventually
        "silver-bg": "#F5F5F5",
        "light-gray-border": "#DCDCDC",
        "deep-charcoal": "#333333",
        "medium-gray": "#707070",
        "soft-charcoal": "#4A4A4A",
        "sky-blue": "#87CEEB",
        "soft-gold": "#B8860B"
      },
      fontFamily: {
        "display": ["Public Sans", "Nanum Gothic Coding", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem", 
        "lg": "0.5rem", 
        "xl": "0.75rem", 
        "full": "9999px"
      },
      boxShadow: {
        'glow-sapphire': "0 0 15px rgba(47, 90, 145, 0.3)",
        'subtle': "0 4px 20px rgba(0, 0, 0, 0.03)"
      }
    },
  },
  plugins: [],
};
