'use client'

import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState, useRef } from 'react'
import classNames from 'clsx'

import type { Locale as LocaleType, CookiesStore } from '@/utils/constants'
import { LOCALES } from '@/utils/constants'

import { Arrow } from './Arrow'
import { LocaleFlag } from './LocaleFlag'

export interface LocalesProps {
  currentLocale: string
  cookiesStore: CookiesStore
}

export const Locales = (props: LocalesProps): JSX.Element => {
  const { currentLocale, cookiesStore } = props
  const pathname = usePathname()

  const [hiddenMenu, setHiddenMenu] = useState(true)
  const languageClickRef = useRef<HTMLDivElement | null>(null)

  const handleHiddenMenu = useCallback(() => {
    setHiddenMenu((oldHiddenMenu) => {
      return !oldHiddenMenu
    })
  }, [])

  useEffect(() => {
    const handleClickEvent = (event: MouseEvent): void => {
      if (languageClickRef.current == null || event.target == null) {
        return
      }
      if (!languageClickRef.current.contains(event.target as Node)) {
        setHiddenMenu(true)
      }
    }

    window.document.addEventListener('click', handleClickEvent)

    return () => {
      return window.removeEventListener('click', handleClickEvent)
    }
  }, [])

  const handleLocale = async (locale: LocaleType): Promise<void> => {
    const { setLocale } = await import('@/i18n/i18n.server')
    setLocale(locale)
  }

  if (pathname.startsWith('/blog')) {
    return <></>
  }

  return (
    <div className='flex cursor-pointer flex-col items-center justify-center'>
      <div
        ref={languageClickRef}
        data-cy='locale-click'
        className='mr-5 flex items-center'
        onClick={handleHiddenMenu}
      >
        <LocaleFlag
          locale={currentLocale}
          cookiesStore={cookiesStore?.toString()}
        />
        <Arrow />
      </div>

      <ul
        data-cy='locales-list'
        className={classNames(
          'absolute top-14 z-10 mr-4 mt-3 flex w-32 list-none flex-col items-center justify-center rounded-lg bg-white p-0 shadow-lightFlag dark:bg-black dark:shadow-darkFlag',
          { hidden: hiddenMenu }
        )}
      >
        {LOCALES.filter((locale) => {
          return locale !== currentLocale
        }).map((locale) => {
          return (
            <li
              key={locale}
              className='flex h-12 w-full items-center justify-center hover:bg-[#4f545c] hover:bg-opacity-20'
              onClick={async () => {
                return await handleLocale(locale)
              }}
            >
              <LocaleFlag
                locale={locale}
                cookiesStore={cookiesStore?.toString()}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
