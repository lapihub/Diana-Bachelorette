import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF8F2",
        paper: "#F4EEE3",
        linen: "#EDE4D5",
        champagne: "#D8C3A0",
        gold: { DEFAULT: "#B08D57", deep: "#8A6A3B" },
        ink: { DEFAULT: "#2B2622", soft: "#6E6359" },
        sage: { DEFAULT: "#8E9A7E", deep: "#5E6B50" },
        blush: "#E5C9C0",
        rose: { deep: "#9A6458" },
        night: { DEFAULT: "#14181F", soft: "#1E242D" },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      letterSpacing: {
        label: "0.28em",
      },
      maxWidth: {
        prose: "38rem",
      },
    },
  },
  plugins: [],
};

export default config;
