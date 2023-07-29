/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        cmablue: "#578192",
      },
      fontFamily: {
        Spartan: ["League Spartan"],
      },
      backgroundImage: {
        border: "url('/src/assets/border.png')",
      },
    },
  },
  plugins: [],
};
