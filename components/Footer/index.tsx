import useTranslation from 'next-translate/useTranslation'

import { LanguageButton } from './LanguageButton'
import { LanguageFlag } from './LanguageFlag'

export const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <footer className='Footer text-center'>
        <p className='Footer__text'>
          <span className='important'>Divlo</span> | {t('common:allRightsReserved')}
        </p>
        <p className='Footer__lang'>
          <LanguageButton lang='en'>{t('common:english')}</LanguageButton> |{' '}
          <LanguageButton lang='fr'>{t('common:french')}</LanguageButton>
        </p>
      </footer>

      <div className='Footer__flags'>
        <LanguageFlag
          lang='en'
          imageLink='/images/flags/english_flag.png'
          title={t('common:english')}
        />
        <LanguageFlag
          lang='fr'
          imageLink='/images/flags/french_flag.png'
          title={t('common:french')}
        />
      </div>

      <style jsx>
        {`
          .Footer {
            border-top: var(--border-header-footer);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .Footer__text {
            margin: 20px 0 10px 0;
          }
          .Footer__lang {
            margin: 0 0 20px 0;
          }
          .Footer__flags {
            display: flex;
            position: fixed;
            bottom: 28px;
            left: 32px;
            z-index: 10;
          }
        `}
      </style>
    </>
  )
}
