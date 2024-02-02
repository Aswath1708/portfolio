/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggleHalf: {
          "0%": { left: "100%" },
          "100%": { left: "50%" },
        },
        wiggleQuarterHalf: {
          "0%": { left: "100%" },
          "100%": { left: "25%" },
        },
        fontTransform: {
          "0%,100%": { fontSize: "15px" },
          "50%": { fontSize: "20px" },
        },
      },
      animation: {
        wiggleHalf: "wiggleHalf 0.2s ease-in-out 1",
        wiggleQuarterHalf: "wiggleQuarterHalf 0.2s ease-in-out 1",
        designAnime: "fontTransform 2s ease-in-out infinite",
      },
      backgroundImage: {
        "contact-bg": "url('/src/assets/contact bg.jpg')",
      },
    },
  },
  plugins: [],
};
