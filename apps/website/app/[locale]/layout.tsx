import "@repo/config-tailwind/styles.css"
import type { LocaleProps } from "@repo/i18n/routing"
import type { Locale } from "@repo/utils/constants"
import { LOCALES } from "@repo/utils/constants"
import type { Metadata, Viewport } from "next"
import { NextIntlClientProvider } from "next-intl"
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server"
import Script from "next/script"

const DOMAIN = "theoludwig.fr"

export const viewport: Viewport = {
  themeColor: "#00aeff",
}

export const generateMetadata = async ({
  params,
}: LocaleProps): Promise<Metadata> => {
  const { locale } = await params
  const t = await getTranslations({ locale })
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

interface LocaleLayoutProps extends React.PropsWithChildren, LocaleProps {}

const LocaleLayout: React.FC<LocaleLayoutProps> = async (props) => {
  const { children, params } = props

  const { locale } = await params
  // Enable static rendering
  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>

        <Script
          defer
          data-domain={DOMAIN}
          src="https://plausible.theoludwig.fr/js/script.js"
        />
      </body>
    </html>
  )
}

export default LocaleLayout
