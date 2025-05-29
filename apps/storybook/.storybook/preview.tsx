import "@repo/config-tailwind/styles.css"
import "./storybook-css-overrides.css"
import i18nMessages from "@repo/i18n/translations/en-US.json"
import { LOCALE_DEFAULT, TIMEZONE } from "@repo/utils/constants"
import type { Preview } from "@storybook/nextjs"
import { NextIntlClientProvider } from "next-intl"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import React from "react"

const preview: Preview = {
  initialGlobals: {
    a11y: {
      manual: true,
    },
  },
  parameters: {
    docs: {
      codePanel: true,
    },
    nextjs: {
      appDirectory: true,
    },
    options: {
      storySort: {
        order: ["Design System", "Layout", "Errors"],
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
      disableSaveFromUI: true,
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <NextThemeProvider enableColorScheme={false}>
          <NextIntlClientProvider
            messages={i18nMessages}
            locale={LOCALE_DEFAULT}
            timeZone={TIMEZONE}
          >
            <Story />
          </NextIntlClientProvider>
        </NextThemeProvider>
      )
    },
  ],
}

export default preview
