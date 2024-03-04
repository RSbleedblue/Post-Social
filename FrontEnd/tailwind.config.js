/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pmpurple: "#7469B6",
        secwhite: "#ffffff",
        bgblue: "#EEF5FF",
      },
    },
  },
  plugins: [],
}