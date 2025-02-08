import typographyPlugin from "@tailwindcss/typography"

/** @type {Omit<import('tailwindcss').Config, "content">} */
const config = {
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0056b3",
          dark: "#00aeff",
        },
        background: {
          DEFAULT: "#fff",
          dark: "#181818",
        },
        "gray-lighter": "#d1d5db",
        "gray-darker": {
          DEFAULT: "#4b5563",
          dark: "#9ca3af",
        },
        yellow: "#fef08a",
      },
      boxShadow: {
        dark: "0px 0px 2px 2px rgba(0, 0, 0, 0.25)",
        light: "0px 0px 2px 2px rgba(0, 0, 0, 0.10)",
        darkFlag: "0px 1px 10px hsla(0, 0%, 100%, 0.2)",
        lightFlag: "0px 1px 10px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
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
  plugins: [typographyPlugin],
}

export default config
