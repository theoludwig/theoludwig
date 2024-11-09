import { createNavigation } from "next-intl/navigation"

import { LOCALES, LOCALE_DEFAULT, LOCALE_PREFIX } from "@repo/utils/constants"
import { defineRouting } from "next-intl/routing"
import type { Locale } from "@repo/utils/constants"

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

export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname,
  permanentRedirect,
} = createNavigation(routing)
