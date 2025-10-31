import { routing } from "@repo/i18n/routing"
import createIntlMiddleware from "next-intl/middleware"

const intlMiddleware = createIntlMiddleware(routing)

export default intlMiddleware

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Next.js issue, middleware matcher should support template literals:
    // https://github.com/vercel/next.js/issues/56398
    "/(en-US|fr-FR)/:path*",

    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt).*)",
  ],
}
