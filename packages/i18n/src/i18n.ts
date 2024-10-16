import deepmerge from "deepmerge"
import type { AbstractIntlMessages } from "next-intl"
import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"

import type { Locale } from "@repo/utils/constants"
import { LOCALE_DEFAULT, LOCALES } from "@repo/utils/constants"
import { defaultTranslationValues } from "./config.tsx"

export default getRequestConfig(async ({ locale }) => {
  if (!LOCALES.includes(locale as Locale)) {
    return notFound()
  }

  const userMessages = (await import(`./translations/${locale}.json`)).default
  const defaultMessages = (
    await import(`./translations/${LOCALE_DEFAULT}.json`)
  ).default
  const messages = deepmerge<AbstractIntlMessages>(
    defaultMessages,
    userMessages,
  )

  return {
    messages,
    defaultTranslationValues,
  }
})
