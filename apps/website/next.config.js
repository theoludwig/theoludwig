import createNextIntlPlugin from "next-intl/plugin"

const IS_STANDALONE = process.env.IS_STANDALONE === "true"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: IS_STANDALONE ? "standalone" : undefined,
  images: {
    unoptimized: true,
  },
  compress: false,

  // https://github.com/hashicorp/next-mdx-remote/issues/436#issuecomment-2066971842
  transpilePackages: ["next-mdx-remote", "shiki"],

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
