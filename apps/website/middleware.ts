import { LOCALES, LOCALE_DEFAULT, LOCALE_PREFIX } from "@repo/i18n/config"
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
    "/(en-US|fr-FR)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
}
