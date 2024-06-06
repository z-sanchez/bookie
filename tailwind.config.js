import * as colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: "var(--color-primary)",
      shadow: "var(--color-shadow)",
    },
    fontFamily: {
      display: ["Cormorant Garamond"],
    },
    extend: {},
  },
  plugins: [],
};
