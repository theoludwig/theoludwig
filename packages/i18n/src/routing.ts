import { createNavigation } from "next-intl/navigation"

import { LOCALES, LOCALE_DEFAULT, LOCALE_PREFIX } from "@repo/utils/constants"
import { defineRouting } from "next-intl/routing"
import type { Locale } from "@repo/utils/constants"

// Countries: https://github.com/umpirsky/country-list/blob/master/data/en/country.json
// Country flag picture: https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg

// Locale codes: https://simplelocalize.io/data/locales/
// Locale code is a combination of ISO 639-1 language code and ISO 3166-1 country code.
// For example, `fr-FR` is a locale code for French language in France.

export interface LocaleProps {
  params: Promise<{
    locale: Locale
  }>
}

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: LOCALE_DEFAULT,
  localePrefix: LOCALE_PREFIX,
})

export const { Link, redirect, usePathname, useRouter, getPathname, permanentRedirect } =
  createNavigation(routing)
