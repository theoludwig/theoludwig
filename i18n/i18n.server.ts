'use server'

import { cookies } from 'next/headers'
import type { I18n } from 'i18n-js'

import type { Locale } from '@/utils/constants'
import { COOKIE_MAX_AGE } from '@/utils/constants'

import { i18n } from './i18n'

export const setLocale = (locale: Locale): void => {
  cookies().set('locale', locale, {
    path: '/',
    maxAge: COOKIE_MAX_AGE
  })
}

export const getI18n = (): I18n => {
  i18n.locale = cookies().get('locale')?.value ?? i18n.defaultLocale
  return i18n
}
