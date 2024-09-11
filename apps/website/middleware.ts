import { LOCALES, LOCALE_DEFAULT, LOCALE_PREFIX } from "@repo/utils/constants"
import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: LOCALE_DEFAULT,
  localePrefix: LOCALE_PREFIX,
})

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    // Next.js issue, middleware matcher should support template literals:
    // https://github.com/vercel/next.js/issues/56398
    "/(en-US|fr-FR)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
}
