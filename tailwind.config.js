/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // TITLE COLORS:
        titleColor: "#4F4F4F",

        // CARD COLORS
        cardTypeColor: "#828282",
        cardTitleColor: "#333333",

        // ICON COLORS
        iconSearchColor: "rgba(235, 87, 87, 0.9)",

        // EDIT SEARCH BUTTON COLORS
        buttonColor: "rgba(235, 87, 87, 0.9)",
      },
    },
  },
  plugins: [],
};
