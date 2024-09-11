import type { Locale } from "@repo/utils/constants"
import type { RichTranslationValues } from "next-intl"

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
