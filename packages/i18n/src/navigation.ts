import { createSharedPathnamesNavigation } from "next-intl/navigation"

import { LOCALES, LOCALE_PREFIX } from "./config"

export const { Link, redirect, usePathname, useRouter, permanentRedirect } =
  createSharedPathnamesNavigation({
    locales: LOCALES,
    localePrefix: LOCALE_PREFIX,
  })
