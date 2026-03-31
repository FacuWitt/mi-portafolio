/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#070A13",
        slateDeep: "#101828",
        panel: "#111A2C",
        panelSoft: "#17233A",
        accentBlue: "#06C9FF",
        accentViolet: "#8F5CFF",
        textMain: "#E2E8F0",
        textMuted: "#8B9AB6",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(6, 201, 255, 0.35), 0 0 35px rgba(143, 92, 255, 0.25)",
        panel: "0 16px 60px rgba(0, 0, 0, 0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", filter: "blur(80px)" },
          "50%": { opacity: "0.85", filter: "blur(95px)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 8s ease-in-out infinite",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(6, 201, 255, 0.08) 0%, rgba(6, 201, 255, 0) 40%), radial-gradient(circle at 75% 15%, rgba(143, 92, 255, 0.15) 0%, rgba(143, 92, 255, 0) 42%), radial-gradient(circle at 50% 80%, rgba(14, 165, 233, 0.09) 0%, rgba(14, 165, 233, 0) 48%)",
      },
    },
  },
  plugins: [],
};
