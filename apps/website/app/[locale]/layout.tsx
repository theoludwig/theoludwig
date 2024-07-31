import "@repo/config-tailwind/styles.css"
import type { Locale, LocaleProps } from "@repo/i18n/config"
import { LOCALES } from "@repo/i18n/config"
import { Footer } from "@repo/ui/Layout/Footer"
import { Header } from "@repo/ui/Layout/Header"
import { ThemeProvider } from "@repo/ui/Layout/Header/SwitchTheme"
import { VERSION } from "@repo/utils/constants"
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

interface LocaleLayoutProps extends React.PropsWithChildren {
  params: {
    locale: Locale
  }
}

const LocaleLayout: React.FC<LocaleLayoutProps> = async (props) => {
  const { children, params } = props

  // Enable static rendering
  unstable_setRequestLocale(params.locale)

  const messages = await getMessages()

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer version={VERSION} />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
