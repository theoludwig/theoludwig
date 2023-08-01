import type { Metadata } from 'next'
import classNames from 'clsx'

import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/600.css'
import './globals.css'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getI18n } from '@/i18n/i18n.server'
import { getTheme } from '@/theme/theme.server'

const title = 'Théo LUDWIG'
const description =
  'Théo LUDWIG - Developer Full Stack • Open-Source enthusiast'
const image = '/images/icon-96x96.png'
const url = new URL('https://theoludwig.fr')
const locale = 'fr-FR, en-US'

export const metadata: Metadata = {
  title,
  description,
  metadataBase: url,
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    images: [
      {
        url: image,
        width: 96,
        height: 96
      }
    ],
    locale,
    type: 'website'
  },
  icons: {
    icon: '/images/icon-96x96.png'
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: [image]
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = (props: RootLayoutProps): JSX.Element => {
  const { children } = props

  const i18n = getI18n()
  const theme = getTheme()

  return (
    <html
      lang={i18n.locale}
      className={classNames({
        dark: theme === 'dark',
        light: theme === 'light'
      })}
      style={{
        colorScheme: theme
      }}
    >
      <body className='bg-white font-headline text-black dark:bg-black dark:text-white flex flex-col min-h-screen'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
