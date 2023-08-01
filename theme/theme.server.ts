'use server'

import { cookies } from 'next/headers'

import type { Theme } from '@/utils/constants'
import { COOKIE_MAX_AGE, DEFAULT_THEME, THEMES } from '@/utils/constants'

export const setTheme = (theme: Theme): void => {
  cookies().set('theme', theme, {
    path: '/',
    maxAge: COOKIE_MAX_AGE
  })
}

export const getTheme = (): Theme => {
  const theme = cookies().get('theme')?.value ?? DEFAULT_THEME
  if (THEMES.includes(theme as Theme)) {
    return theme as Theme
  }
  return DEFAULT_THEME
}
