import useTranslation from 'next-translate/useTranslation'

export const ProfileInfo: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='profile-info'>
        <h1 className='profile-title'>
          {t('home:about.IAm')} <strong className='important'>Divlo</strong>
        </h1>
        <h2 className='profile-description'>{t('home:about.description')}</h2>
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
