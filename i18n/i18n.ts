import { I18n } from "i18n-js"

import type { Locale } from "@/utils/constants"
import { DEFAULT_LOCALE, LOCALES } from "@/utils/constants"

import commonEnglish from "./translations/en-US/common.json"
import errorsEnglish from "./translations/en-US/errors.json"
import homeEnglish from "./translations/en-US/home.json"
import commonFrench from "./translations/fr-FR/common.json"
import errorsFrench from "./translations/fr-FR/errors.json"
import homeFrench from "./translations/fr-FR/home.json"

const translations = {
  "en-US": {
    common: commonEnglish,
    errors: errorsEnglish,
    home: homeEnglish,
  },
  "fr-FR": {
    common: commonFrench,
    errors: errorsFrench,
    home: homeFrench,
  },
} satisfies Record<Locale, Record<string, unknown>>

export const i18n = new I18n(translations, {
  defaultLocale: DEFAULT_LOCALE,
  availableLocales: [...LOCALES],
  enableFallback: true,
})
