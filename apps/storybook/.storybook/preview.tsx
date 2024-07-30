import "@repo/config-tailwind/styles.css"
import { defaultTranslationValues, Locale } from "@repo/i18n/config"
import i18nMessagesEnglish from "@repo/i18n/translations/en-US.json"
import type { Preview } from "@storybook/react"
import { NextIntlClientProvider } from "next-intl"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import React from "react"

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    options: {
      storySort: {
        order: ["Design System", "User Interface", "Errors", "Feature"],
      },
    },
    backgrounds: { disable: true },
    darkMode: {
      darkClass: "dark",
      lightClass: "light",
      classTarget: "html",
      stylePreview: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      const locale = "en-US" satisfies Locale

      return (
        <NextThemeProvider enableColorScheme={false}>
          <NextIntlClientProvider
            messages={i18nMessagesEnglish}
            locale={locale}
            defaultTranslationValues={defaultTranslationValues}
          >
            <Story />
          </NextIntlClientProvider>
        </NextThemeProvider>
      )
    },
  ],
}

export default preview
