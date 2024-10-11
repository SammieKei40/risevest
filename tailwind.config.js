/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        cove: "var(--color-cove)",
        slate: "var(--color-slate)",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
