/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Inter: "Inter",
    },
    extend: {
      colors: {
        balck: {
          100: "#000000",
          200: "#313234",
          300: "#1e1e20",
        },
        white: {
          100: "#FFFFFF",
        },
        blue: {
          100: "#11B0C8",
        },
      },
    },
  },
  plugins: [],
};
