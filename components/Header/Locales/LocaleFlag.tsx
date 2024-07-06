import { useI18n } from "@/i18n/i18n.client"
import type { CookiesStore } from "@/utils/constants"

export interface LocaleFlagProps {
  locale: string
  cookiesStore: CookiesStore
}

export const LocaleFlag = (props: LocaleFlagProps): JSX.Element => {
  const { locale, cookiesStore } = props

  const i18n = useI18n(cookiesStore)

  return (
    <p data-cy="locale-flag-text" className="mx-2 text-lg font-semibold">
      {i18n.translate(`common.${locale}`)}
    </p>
  )
}
