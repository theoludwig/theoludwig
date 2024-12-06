import createNextIntlPlugin from "next-intl/plugin"

const IS_STANDALONE = process.env.IS_STANDALONE === "true"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: IS_STANDALONE ? "standalone" : undefined,
  images: {
    unoptimized: true,
  },
  compress: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
