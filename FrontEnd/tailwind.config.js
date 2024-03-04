/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pmpurple: "#301B3F",
        secwhite: "#ffffff",
        bgblue: "#EEF5FF",
        hoverLike : "#FFB5DA"
      },
    },
  },
  plugins: [],
};
