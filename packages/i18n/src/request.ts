import { hasLocale } from "next-intl"
import { getRequestConfig } from "next-intl/server"
import * as rootParams from "next/root-params"
import { routing } from "./routing.ts"

import { LOCALE_DEFAULT } from "@repo/utils/constants"
import { deepMerge } from "@repo/utils/objects"

export default getRequestConfig(async ({ locale: localeOverride }) => {
  const requested = localeOverride ?? (await rootParams.locale())
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale

  const userMessages = (await import(`./translations/${locale}.json`)).default
  const defaultMessages = (await import(`./translations/${LOCALE_DEFAULT}.json`)).default
  const messages = deepMerge(defaultMessages, userMessages)

  return {
    locale,
    messages,
  }
})
