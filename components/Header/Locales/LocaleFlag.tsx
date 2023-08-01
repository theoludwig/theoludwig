import Image from 'next/image'

import type { CookiesStore } from '@/utils/constants'
import { useI18n } from '@/i18n/i18n.client'

export interface LocaleFlagProps {
  locale: string
  cookiesStore: CookiesStore
}

export const LocaleFlag = (props: LocaleFlagProps): JSX.Element => {
  const { locale, cookiesStore } = props

  const i18n = useI18n(cookiesStore)

  return (
    <>
      <Image
        quality={100}
        width={35}
        height={35}
        src={`/images/locales/${locale}.svg`}
        alt={locale}
      />
      <p data-cy='locale-flag-text' className='mx-2 text-base'>
        {i18n.translate(`common.${locale}`)}
      </p>
    </>
  )
}
