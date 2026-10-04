/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
  ],
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
        secondarydark: "#fffbf0",
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
        moveDown: {
          from: { transform: "translate(0)" },
          to: { transform: "translate(0px, 15px)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out 5",
        rotate: "rotate 2s linear 1",
        moveDown: "moveDown 1s ease-out 0",
      },

    },
  },
  plugins: [],
};
