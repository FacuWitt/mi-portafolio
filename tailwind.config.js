/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F2F1ED",
        paperDeep: "#E6E4DE",
        ink: "#1C1B1A",
        inkSoft: "#55524D",
        vermilion: "#E2432A",
        mustard: "#F2C230",
        cobalt: "#2A4BD7",
        leaf: "#1F9D57",
        plum: "#6B1D4F",
        rule: "rgba(28, 27, 26, 0.14)",
      },
      fontFamily: {
        display: ["Archivo Variable", "Archivo", "system-ui", "sans-serif"],
        body: ["Archivo Variable", "Archivo", "system-ui", "sans-serif"],
        hand: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
