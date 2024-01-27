/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        blueGray: "#1f203a",
        brightYellow: "#fceb21",
      },
      spacing: {
        halfFull: "50vh",
        quarterFull: "25vh",
      },
    },
  },
  plugins: [],
};
