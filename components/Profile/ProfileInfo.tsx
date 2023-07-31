import { getI18n } from '@/i18n/i18n.server'

export const ProfileInformation: React.FC = () => {
  const i18n = getI18n()

  return (
    <div className='mb-6 border-b-2 border-gray-600 pb-2 font-headline dark:border-gray-400'>
      <h1 className='mb-2 text-4xl font-semibold text-yellow dark:text-yellow-dark'>
        Théo LUDWIG
      </h1>
      <h2 className='mb-3 text-base'>
        {i18n.translate('home.about.description')}
      </h2>
    </div>
  )
}
