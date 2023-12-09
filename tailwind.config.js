/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#12102a",
      },
      fontFamily: {},
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          md: "3rem",
        },
      },
    },
  },
  plugins: [],
};
