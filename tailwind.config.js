/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inversionz: ["Inversionz", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  fontFamily: {
    sans: ["Poppins", "sans-serif"],
  },
  plugins: [],
};
