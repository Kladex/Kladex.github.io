/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        silk: ["Silkscreen", "cursive"],
        cinzel: ["Cinzel", "serif"],
      },
      colors: {
        primary: "#000",
        primarylight: "#0F2027",
        secondary: "#FFFFFF",
        secondarydark: "#FFEFBA",
      },
      boxShadow: {
        newInner: "inset -0.5px -1px 0px 0.5px rgb(0 0 0 / 0.1);",
        "3xl": "0px 0px 30px 10px rgba(0,0,0,0.05)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out 5",
        rotate: "rotate 2s linear 1",
      },
      screens: {
        sx: { min: "100px", max: "319px" },
        sm: { min: "320px", max: "767px" },
        // => @media (min-width: 320px and max-width: 767px) { ... }
        md: { min: "768px", max: "1300px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }
        // xl: { min: "1024px" },
      },
    },
  },
  plugins: [],
};
