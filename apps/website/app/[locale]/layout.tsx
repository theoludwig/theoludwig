import "@repo/config-tailwind/styles.css"
import type { Locale } from "@repo/utils/constants"
import { LOCALES } from "@repo/utils/constants"
import type { Metadata, Viewport } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages, getTranslations } from "next-intl/server"
import Script from "next/script"

const DOMAIN = "theoludwig.fr"

export const viewport: Viewport = {
  themeColor: "#00aeff",
}

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations()
  const title = t("meta.title")
  const description = `${title} - ${t("meta.description")}`
  const image = "/images/logo.webp"
  const url = new URL(`https://${DOMAIN}`)
  const locales = LOCALES.join(", ")

  return {
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
          height: 96,
        },
      ],
      locale: locales,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [image],
    },
  }
}

export const generateStaticParams = (): Array<{ locale: Locale }> => {
  return LOCALES.map((locale) => {
    return {
      locale,
    }
  })
}

interface LocaleLayoutProps extends React.PropsWithChildren {}

const LocaleLayout: React.FC<LocaleLayoutProps> = async (props) => {
  const { children } = props

  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>

        <Script async src="https://analytics.theoludwig.fr/js/pa-MToGPBn2iXgorPLkh6f_s.js" />
        <Script id="analytics-init">
          {`
window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
plausible.init()`}
        </Script>
      </body>
    </html>
  )
}

export default LocaleLayout
