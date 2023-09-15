import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#1A3A34",
      },
      backgroundImage: {
        "hero-pattern": "url('/svg/bg-hero.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "appear-from-bottom": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0px, 1.25em, 0px) rotateZ(10deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0px, 0em, 0px) rotateZ(0deg)",
          },
        },

        "appear-from-bottom-reversed": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0px, 1.25em, 0px) rotateZ(-10deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0px, 0em, 0px) rotateZ(0deg)",
          },
        },
        "appear-dp": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0px, 11em, 0px) rotateZ(-10deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0px, 0em, 0px) rotateZ(0deg)",
          },
        },
        "spin-back": {
          "0%": { transform: "rotate(0deg)" },
          "48%": { transform: "rotate(270deg)" },
          "50%": { transform: "rotate(270deg)" },
          "98%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        appear: "appear 1s ease-in forwards",
        "appear-from-bottom": "appear-from-bottom 1s .3s ease forwards",
        "spin-back": "spin-back 16s 1.5s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
