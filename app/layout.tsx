import type { Metadata } from 'next'

import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/600.css'
import './globals.css'

import { Providers } from '@/components/Providers'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getI18n } from '@/i18n/i18n.server'

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

  return (
    <html suppressHydrationWarning lang={i18n.locale}>
      <body className='bg-white font-headline text-black dark:bg-black dark:text-white'>
        <Providers>
          <Header showLocale />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
