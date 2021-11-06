import useTranslation from 'next-translate/useTranslation'

export const ProfileInformation: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className='pb-2 mb-6 border-b-2 font-headline border-gray-600 dark:border-gray-400'>
      <h1 className='text-4xl mb-2'>
        {t('home:about.i-am')}{' '}
        <strong className='font-semibold text-yellow dark:text-yellow-dark'>
          Divlo
        </strong>
      </h1>
      <h2 className='text-base mb-3'>{t('home:about.description')}</h2>
    </div>
  )
}
