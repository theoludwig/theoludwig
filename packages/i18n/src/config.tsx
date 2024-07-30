import type { RichTranslationValues } from "next-intl"

export const LOCALES = ["en-US", "fr-FR"] as const
export type Locale = (typeof LOCALES)[number]
export const LOCALE_DEFAULT = "en-US" satisfies Locale
export const LOCALE_PREFIX = "never"

export interface LocaleProps {
  params: {
    locale: Locale
  }
}

export const defaultTranslationValues: RichTranslationValues = {
  br: () => {
    return <br />
  },
  strong: (children) => {
    return <strong>{children}</strong>
  },
  em: (children) => {
    return <em>{children}</em>
  },
  s: (children) => {
    return <s>{children}</s>
  },
  u: (children) => {
    return <u>{children}</u>
  },
}
