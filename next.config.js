const IS_STANDALONE = process.env.IS_STANDALONE === "true"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: IS_STANDALONE ? "standalone" : undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
