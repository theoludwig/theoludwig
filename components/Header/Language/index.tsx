'use client'

import { useCallback, useEffect, useState, useRef } from 'react'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'
import classNames from 'clsx'

import i18n from 'i18n.json'

import { Arrow } from './Arrow'
import { LanguageFlag } from './LanguageFlag'

export const Language: React.FC = () => {
  const { lang: currentLanguage } = useTranslation()
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

  const handleLanguage = async (language: string): Promise<void> => {
    await setLanguage(language, false)
  }

  return (
    <div className='flex cursor-pointer flex-col items-center justify-center'>
      <div
        ref={languageClickRef}
        data-cy='language-click'
        className='mr-5 flex items-center'
        onClick={handleHiddenMenu}
      >
        <LanguageFlag language={currentLanguage} />
        <Arrow />
      </div>

      <ul
        data-cy='languages-list'
        className={classNames(
          'absolute top-14 z-10 mr-4 mt-3 flex w-24 list-none flex-col items-center justify-center rounded-lg bg-white p-0 shadow-lightFlag dark:bg-black dark:shadow-darkFlag',
          { hidden: hiddenMenu }
        )}
      >
        {i18n.locales.map((language, index) => {
          if (language === currentLanguage) {
            return <></>
          }
          return (
            <li
              key={index}
              className='flex h-12 w-full items-center justify-center pl-2 hover:bg-[#4f545c] hover:bg-opacity-20'
              onClick={async () => {
                return await handleLanguage(language)
              }}
            >
              <LanguageFlag language={language} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
