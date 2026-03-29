import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        lighting: {
          '0%, 100%': { backgroundColor: 'rgba(0, 0, 0, 0.6)', boxShadow: '0 0 15px 5px rgba(6, 182, 212, 0.5)' },
          '50%': { backgroundColor: 'rgba(6, 182, 212, 0.6)', boxShadow: '0 0 30px 10px rgba(6, 182, 212, 1)' },
        },
      },
      animation: {
        lighting: 'lighting 3s ease-in-out infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
