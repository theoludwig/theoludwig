import { useEffect } from 'react'
import type { AppType } from 'next/app'
import { ThemeProvider } from 'next-themes'
import useTranslation from 'next-translate/useTranslation'
import UniversalCookie from 'universal-cookie'

import 'styles/global.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/600.css'

const universalCookie = new UniversalCookie()

/** how long in seconds, until the cookie expires (10 years) */
const COOKIE_MAX_AGE = 10 * 365.25 * 24 * 60 * 60

const Application: AppType = ({ Component, pageProps }) => {
  const { lang } = useTranslation()

  useEffect(() => {
    universalCookie.set('NEXT_LOCALE', lang, {
      path: '/',
      maxAge: COOKIE_MAX_AGE
    })
  }, [lang])

  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default Application
