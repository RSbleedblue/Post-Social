/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pmpurple: "#301B3F",
        secwhite: "#ffffff",
        bgmain: "#eef5ff",
      },
    },
  },
  plugins: [],
};
