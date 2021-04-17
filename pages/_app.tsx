import { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import useTranslation from 'next-translate/useTranslation'
import UniversalCookie from 'universal-cookie'

import 'normalize.css/normalize.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'

import 'styles/grid.scss'
import 'styles/general.scss'
import 'styles/nprogress.scss'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { useEffect } from 'react'

const universalCookie = new UniversalCookie()

/** how long in seconds, until the cookie expires (10 years) */
const COOKIE_MAX_AGE = 10 * 365.25 * 24 * 60 * 60

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { lang } = useTranslation()

  useEffect(() => {
    universalCookie.set('NEXT_LOCALE', lang, {
      path: '/',
      maxAge: COOKIE_MAX_AGE
    })
  }, [lang])

  return (
    <>
      <Header />
      <main className='content container'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
