import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

import type { AvailableLocale } from '@/utils/constants'
import {
  COOKIE_MAX_AGE,
  DEFAULT_LOCALE,
  AVAILABLE_LOCALES
} from '@/utils/constants'

export const middleware = (request: NextRequest): NextResponse => {
  const response = NextResponse.next()

  let locale = request.cookies.get('locale')?.value
  if (
    locale == null ||
    !AVAILABLE_LOCALES.includes(locale as AvailableLocale)
  ) {
    const headers = {
      'accept-language':
        request.headers.get('accept-language') ?? DEFAULT_LOCALE
    }
    const languages = new Negotiator({ headers }).languages()
    locale = match(languages, AVAILABLE_LOCALES.slice(), DEFAULT_LOCALE)
    response.cookies.set('locale', locale, {
      path: '/',
      maxAge: COOKIE_MAX_AGE
    })
  }

  const theme = request.cookies.get('theme')?.value ?? 'dark'
  response.cookies.set('theme', theme, {
    path: '/',
    expires: COOKIE_MAX_AGE
  })

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
