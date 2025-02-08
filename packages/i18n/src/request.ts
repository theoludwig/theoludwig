import type { AbstractIntlMessages } from "next-intl"
import { getRequestConfig } from "next-intl/server"

import type { Locale } from "@repo/utils/constants"
import { LOCALE_DEFAULT, LOCALES } from "@repo/utils/constants"
import { deepMerge } from "@repo/utils/objects"

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!LOCALES.includes(locale as Locale)) {
    locale = LOCALE_DEFAULT
  }

  const userMessages = (await import(`./translations/${locale}.json`)).default
  const defaultMessages = (
    await import(`./translations/${LOCALE_DEFAULT}.json`)
  ).default
  const messages = deepMerge<AbstractIntlMessages>(
    defaultMessages,
    userMessages,
  )

  return {
    locale,
    messages,
  }
})
