/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F5A91", // Muted Sapphire Blue
        "silver-bg": "#F5F5F5",
        "light-gray-border": "#DCDCDC",
        "deep-charcoal": "#333333",
        "medium-gray": "#707070",
        "soft-charcoal": "#4A4A4A",
        "sky-blue": "#87CEEB",
        "soft-gold": "#B8860B"
      },
      fontFamily: {
        display: "Inter, sans-serif"
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px"
      },
      boxShadow: {
        'glow-sapphire': "0 0 15px rgba(47, 90, 145, 0.3)",
        'subtle': "0 4px 20px rgba(0, 0, 0, 0.03)"
      }
    },
  },
  plugins: [],
};
