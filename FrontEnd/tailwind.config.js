/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pmpurple: "#301B3F",
        secwhite: "#ffffff",
        bgmain: "#eef5ff",
        hoverLike: "#FFB5DA",
        random: "#d3dbe7",
        cmntpurple: "#9E63EA",
        mainBackground : "#06141D",
        overlayBlack : "#1D2932",
        hazedBlack : "#27333D",
        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          100: "#AFB2BF",
          200: "#999DAA",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
        blue: {
          100: "#47A5C5",
        },
        pink: {
          200: "#EF476F",
        },
        yellow: {
          50: "#FFD60A",
        },
      },
    },
  },
  plugins: [],
};
