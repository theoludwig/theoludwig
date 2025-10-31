import { LOCALE_DEFAULT } from "@repo/utils/constants"
import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"
import path from "node:path"

const IS_STANDALONE = process.env.IS_STANDALONE === "true"

const nextConfig: NextConfig = {
  output: IS_STANDALONE ? "standalone" : undefined,
  typedRoutes: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
}

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: path.join(
      process.cwd(),
      "..",
      "..",
      "packages",
      "i18n",
      "src",
      "translations",
      `${LOCALE_DEFAULT}.json`,
    ),
  },
})

export default withNextIntl(nextConfig)
