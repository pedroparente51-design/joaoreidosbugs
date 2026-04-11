export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["Space Grotesk", "monospace"],
      },
      colors: {
        background: "#020004",
        surface: "#0a0800",
        "surface-light": "#161100",
        primary: {
          DEFAULT: "#fbbf24",
          glow: "#fcd34d",
          dark: "#b45309",
        },
        accent: {
          cyan: "#00F0FF",
          gold: "#fbbf24",
          emerald: "#10B981",
        },
        border: "rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        "mesh-gradient": "radial-gradient(circle at 50% 0%, #1a1300 0%, #02000f 70%)",
        "glass-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        "neon-gold": "0 0 20px rgba(251, 191, 36, 0.3)",
        "neon-cyan": "0 0 20px rgba(0, 240, 255, 0.2)",
      },
    },
  },
  plugins: [],
}
