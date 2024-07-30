import typographyPlugin from "@tailwindcss/typography"
import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {Omit<import('tailwindcss').Config, "content">} */
const config = {
  darkMode: "class",
  theme: {
    colors: {
      primary: {
        DEFAULT: "#0056b3",
        dark: "#00aeff",
      },
      background: {
        DEFAULT: "#fff",
        dark: "#181818",
      },
      white: "#fff",
      black: "#000",
      gray: "#d1d5db",
      "gray-darker": {
        DEFAULT: "#4b5563",
        dark: "#9ca3af",
      },
      yellow: "#fef08a",
      transparent: "transparent",
      inherit: "inherit",
      current: "currentColor",
    },
    boxShadow: {
      dark: "0px 0px 2px 2px rgba(0, 0, 0, 0.25)",
      light: "0px 0px 2px 2px rgba(0, 0, 0, 0.10)",
      darkFlag: "0px 1px 10px hsla(0, 0%, 100%, 0.2)",
      lightFlag: "0px 1px 10px rgba(0, 0, 0, 0.25)",
    },
    fontFamily: {
      sans: ["'Montserrat'", ...fontFamily.sans],
    },
    extend: {
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
