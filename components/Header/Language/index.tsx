import { useCallback, useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'
import classNames from 'classnames'

import i18n from 'i18n.json'

import { Arrow } from './Arrow'
import { LanguageFlag } from './LanguageFlag'

export const Language: React.FC = () => {
  const { lang: currentLanguage } = useTranslation()
  const [hiddenMenu, setHiddenMenu] = useState(true)

  const handleHiddenMenu = useCallback(() => {
    setHiddenMenu(!hiddenMenu)
  }, [hiddenMenu])

  useEffect(() => {
    if (!hiddenMenu) {
      window.document.addEventListener('click', handleHiddenMenu)
    } else {
      window.document.removeEventListener('click', handleHiddenMenu)
    }

    return () => {
      window.document.removeEventListener('click', handleHiddenMenu)
    }
  }, [hiddenMenu, handleHiddenMenu])

  const handleLanguage = async (language: string): Promise<void> => {
    await setLanguage(language)
    handleHiddenMenu()
  }

  return (
    <div className='flex cursor-pointer flex-col items-center justify-center'>
      <div
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
          'absolute top-14 z-10 mt-3 mr-4 flex w-24 list-none flex-col items-center justify-center rounded-lg bg-white p-0 shadow-light dark:bg-black dark:shadow-dark',
          { hidden: hiddenMenu }
        )}
      >
        {i18n.locales.map((language, index) => {
          if (language === currentLanguage) {
            return null
          }
          return (
            <li
              key={index}
              className='flex h-12 w-full items-center justify-center pl-2 hover:bg-[#4f545c] hover:bg-opacity-20'
              onClick={async () => await handleLanguage(language)}
            >
              <LanguageFlag language={language} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
