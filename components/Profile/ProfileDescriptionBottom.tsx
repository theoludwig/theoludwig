import useTranslation from 'next-translate/useTranslation'

export const ProfileDescriptionBottom: React.FC = () => {
  const { t, lang } = useTranslation()

  return (
    <p className='mb-8 mt-8 text-base font-normal text-gray dark:text-gray-dark'>
      {t('home:about.description-bottom')}
      {lang === 'fr' ? (
        <>
          <br />
          <br />
          <a
            href='/curriculum-vitae'
            className='text-yellow hover:underline dark:text-yellow-dark'
          >
            Curriculum vitæ
          </a>
        </>
      ) : null}
    </p>
  )
}
