/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inversionz: ["Inversionz", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        retroTeam: ["RetroTeam", "sans-serif"],
      },
      colors: {
        "karma-blue": "#09d3ff",
      },
    },
  },
  fontFamily: {
    sans: ["Poppins", "sans-serif"],
  },
  plugins: [],
};
