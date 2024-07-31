import "@repo/config-tailwind/styles.css"
import type { Locale, LocaleProps } from "@repo/i18n/config"
import { LOCALES } from "@repo/i18n/config"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server"

export const generateMetadata = async ({
  params,
}: LocaleProps): Promise<Metadata> => {
  const t = await getTranslations({ locale: params.locale })
  const title = t("meta.title")
  const description = `${title} - ${t("meta.description")}`
  const image = "/images/logo.webp"
  const url = new URL("https://theoludwig.fr")
  const locale = LOCALES.join(", ")

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
      locale,
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

  // Enable static rendering
  unstable_setRequestLocale(params.locale)

  const messages = await getMessages()

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
