import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
      xl: "1280px",
    },
    fontSize: {
      base: "14px",
    },
    extend: {
      colors: {
        gray: "hsl(229, 8%, 60%)",
        red: "hsl(0, 94%, 66%)",
        softBlue: "hsl(231, 69%, 60%)",
        darkBlue: " hsl(229, 31%, 21%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
