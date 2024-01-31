/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        blueGray: "#1f203a",
        blueGrayTransparent: "#1f203a99",
        brightYellow: "#fceb21",
      },
      spacing: {
        halfFull: "50vh",
        quarterFull: "25vh",
        halfFullVw: "50vw",
        quarterHalfFullVw: "75vw",
      },
      keyframes: {
        wiggleHalf: {
          "0%": { left: "100%" },
          "100%": { left: "50%" },
        },
        wiggleQuarterHalf:{
          "0%":{left:"100%"},
          "100%":{left:"25%"},
        }
      },
      animation: {
        wiggleHalf: "wiggleHalf 0.2s ease-in-out 1",
        wiggleQuarterHalf: "wiggleQuarterHalf 0.2s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
