import useTranslation from 'next-translate/useTranslation'

export const ProfileInfo: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='pb-2 mb-6 border-b-2 font-headline border-gray-600 dark:border-gray-400'>
        <h1 className='text-4xl mb-2'>
          {t('home:about.IAm')}{' '}
          <strong className='text-yellow font-semibold'>Divlo</strong>
        </h1>
        <h2 className='text-base mb-3'>{t('home:about.description')}</h2>
      </div>

      <style jsx>
        {`
          .profile-info {
            padding-bottom: 25px;
            margin-bottom: 25px;
            border-bottom: 1px solid #dedede;
          }
          .profile-title {
            font-size: 36px;
            line-height: 1.1;
            font-weight: 300;
            margin-bottom: 10px;
          }
          .profile-title > strong {
            font-weight: 600;
          }
          .profile-description {
            font-size: 17.4px;
            font-weight: 400;
            line-height: 1.1;
            margin: 0;
          }
        `}
      </style>
    </>
  )
}
