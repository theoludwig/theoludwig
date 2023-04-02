const nextPWA = require('next-pwa')({
  disable: process.env.NODE_ENV !== 'production',
  dest: 'public'
})
const nextTranslate = require('next-translate-plugin')

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone'
}

module.exports = nextTranslate(nextPWA(nextConfig))
