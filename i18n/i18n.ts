import { I18n } from 'i18n-js'

import { DEFAULT_LOCALE, AVAILABLE_LOCALES } from '@/utils/constants'

import commonEnglish from './translations/en-US/common.json'
import errorsEnglish from './translations/en-US/errors.json'
import homeEnglish from './translations/en-US/home.json'
import commonFrench from './translations/fr-FR/common.json'
import errorsFrench from './translations/fr-FR/errors.json'
import homeFrench from './translations/fr-FR/home.json'

export const i18nOptions = {
  defaultLocale: DEFAULT_LOCALE,
  availableLocales: AVAILABLE_LOCALES.slice(),
  enableFallback: true
}

export const i18n = new I18n(
  {
    'en-US': {
      common: commonEnglish,
      errors: errorsEnglish,
      home: homeEnglish
    },
    'fr-FR': {
      common: commonFrench,
      errors: errorsFrench,
      home: homeFrench
    }
  },
  i18nOptions
)
