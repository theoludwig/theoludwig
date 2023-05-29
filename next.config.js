const nextTranslate = require('next-translate-plugin')

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone'
}

module.exports = nextTranslate(nextConfig)
