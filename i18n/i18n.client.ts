import UniversalCookie from 'universal-cookie'
import type { I18n } from 'i18n-js'

import type { CookiesStore } from '@/utils/constants'

import { i18n } from './i18n'

export const useI18n = (cookiesStore: CookiesStore): I18n => {
  const universalCookie = new UniversalCookie(cookiesStore)
  i18n.locale = universalCookie.get('locale') ?? i18n.defaultLocale
  return i18n
}
