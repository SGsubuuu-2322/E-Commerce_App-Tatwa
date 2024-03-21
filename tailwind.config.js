/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3C0753",
        secondary: "#720455",
        black: "#030637",
      },
    },
  },
  plugins: [],
};
