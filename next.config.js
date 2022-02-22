const nextPWA = require('next-pwa')
const nextTranslate = require('next-translate')
const { createSecureHeaders } = require('next-secure-headers')

/** @type {import("next").NextConfig} */
module.exports = nextTranslate(
  nextPWA({
    reactStrictMode: true,
    pwa: {
      disable: process.env.NODE_ENV !== 'production',
      dest: 'public'
    },
    headers() {
      return [
        {
          source: '/:path*',
          headers: createSecureHeaders({
            contentSecurityPolicy: {
              directives: {
                defaultSrc: ["'self'"],
                scriptSrc: [
                  "'self'",
                  'data:',
                  "'unsafe-eval'",
                  "'unsafe-inline'"
                ],
                styleSrc: ["'self'", "'unsafe-inline'"],
                imgSrc: ['*', 'data:', 'blob:'],
                mediaSrc: "'none'",
                connectSrc: '*',
                objectSrc: "'none'",
                fontSrc: "'self'",
                baseURI: "'none'"
              }
            }
          })
        }
      ]
    }
  })
)
