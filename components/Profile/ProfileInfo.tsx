import useTranslation from 'next-translate/useTranslation'

export const ProfileInformation: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className='mb-6 border-b-2 border-gray-600 pb-2 font-headline dark:border-gray-400'>
      <h1 className='mb-2 text-4xl font-semibold text-yellow dark:text-yellow-dark'>
        Théo LUDWIG (Divlo)
      </h1>
      <h2 className='mb-3 text-base'>{t('home:about.description')}</h2>
    </div>
  )
}
