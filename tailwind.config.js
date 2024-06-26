/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./blog/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#181818",
        gray: {
          DEFAULT: "#333333",
          dark: "#b7c0c9",
        },
        primary: {
          DEFAULT: "#006cff",
          dark: "#00aeff",
        },
      },
      boxShadow: {
        dark: "0px 0px 2px 2px rgba(0, 0, 0, 0.25)",
        light: "0px 0px 2px 2px rgba(0, 0, 0, 0.10)",
        darkFlag: "0px 1px 10px hsla(0, 0%, 100%, 0.2)",
        lightFlag: "0px 1px 10px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        headline: "'Montserrat', 'Arial', 'sans-serif'",
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "'Montserrat', 'Arial', 'sans-serif'",
            a: {
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
                fontWeight: 400,
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

module.exports = tailwindConfig
