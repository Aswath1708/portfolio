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
    },
  },
  plugins: [],
};
