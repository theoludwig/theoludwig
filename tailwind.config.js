module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '380px'
      },
      colors: {
        black: '#181818',
        gray: {
          DEFAULT: '#333333',
          dark: '#b2bac2'
        },
        yellow: {
          DEFAULT: '#ff6000',
          dark: '#ffd800'
        }
      },
      boxShadow: {
        dark: '0px 1px 10px hsla(0, 0%, 100%, 0.2)',
        light: '0px 1px 10px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        headline: "'Montserrat', 'Arial', 'sans-serif'"
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "'Montserrat', 'Arial', 'sans-serif'",
            a: {
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                fontWeight: 400
              }
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
