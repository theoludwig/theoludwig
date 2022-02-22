import useTranslation from 'next-translate/useTranslation'

export const ProfileDescriptionBottom: React.FC = () => {
  const { t, lang } = useTranslation()

  return (
    <p className='mt-8 mb-8 text-base font-normal text-gray dark:text-gray-dark'>
      {t('home:about.description-bottom')}
      {lang === 'fr' && (
        <>
          <br />
          <br />
          <a
            href='/curriculum-vitae.html'
            className='text-yellow hover:underline dark:text-yellow-dark'
          >
            Mon Curriculum vitæ
          </a>
        </>
      )}
    </p>
  )
}
