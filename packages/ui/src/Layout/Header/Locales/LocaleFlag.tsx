import type { Locale } from "@repo/utils/constants"
import { useTranslations } from "next-intl"
import Image from "next/image"

export interface LocaleFlagProps {
  locale: Locale
}

export const LocaleFlag: React.FC<LocaleFlagProps> = (props) => {
  const { locale } = props

  const t = useTranslations()

  return (
    <>
      <Image
        quality={100}
        width={35}
        height={35}
        src={`/images/locales/${locale}.svg`}
        alt={`Flag of ${t(`locales.${locale}`)}`}
      />
      <p className="mx-2 text-base font-semibold">{t(`locales.${locale}`)}</p>
    </>
  )
}
