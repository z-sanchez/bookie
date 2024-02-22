/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "var(--color-primary) / <alpha-value>",
    },
    fontFamily: {
      display: ["Cormorant Garamond"],
    },
    extend: {},
  },
  plugins: [],
};
