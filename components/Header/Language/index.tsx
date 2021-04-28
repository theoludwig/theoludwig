import { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

import { Arrow } from './Arrow'
import { LanguageFlag } from './LanguageFlag'
import { locales } from 'i18n.json'

export const Language: React.FC = () => {
  const { lang: currentLanguage } = useTranslation()
  const [hiddenMenu, setHiddenMenu] = useState(true)

  useEffect(() => {
    if (!hiddenMenu) {
      window.document.addEventListener('click', handleHiddenMenu)
    } else {
      window.document.removeEventListener('click', handleHiddenMenu)
    }

    return () => {
      window.document.removeEventListener('click', handleHiddenMenu)
    }
  }, [hiddenMenu])

  const handleLanguage = async (language: string): Promise<void> => {
    await setLanguage(language)
    handleHiddenMenu()
  }

  const handleHiddenMenu = (): void => {
    setHiddenMenu(!hiddenMenu)
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center cursor-pointer'>
        <div className='flex items-center mr-5' onClick={handleHiddenMenu}>
          <LanguageFlag language={currentLanguage} />
          <Arrow />
        </div>
        {!hiddenMenu && (
          <ul className='flex flex-col justify-center items-center absolute p-0 z-10 list-none bg-white dark:bg-black'>
            {locales.map((language, index) => {
              if (language === currentLanguage) {
                return null
              }
              return (
                <li
                  key={index}
                  className='flex items-center justify-center w-full'
                  onClick={async () => await handleLanguage(language)}
                >
                  <LanguageFlag language={language} />
                </li>
              )
            })}
          </ul>
        )}
      </div>

      <style jsx>
        {`
          ul {
            top: 60px;
            width: 100px;
            margin: 10px 15px 0 0px;
            border-radius: 15%;
            box-shadow: 0px 1px 10px var(--color-shadow);
          }
          ul > li {
            height: 50px;
          }
          ul > li:hover {
            background-color: rgba(79, 84, 92, 0.16);
          }
        `}
      </style>
    </>
  )
}
