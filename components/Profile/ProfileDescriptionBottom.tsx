import { getI18n } from '@/i18n/i18n.server'

export const ProfileDescriptionBottom: React.FC = () => {
  const i18n = getI18n()

  return (
    <p className='mb-8 mt-8 text-base font-normal text-gray dark:text-gray-dark'>
      {i18n.translate('home.about.description-bottom')}
      {i18n.locale === 'fr-FR' ? (
        <>
          <br />
          <br />
          <a
            href='/curriculum-vitae/index.html'
            className='text-yellow hover:underline dark:text-yellow-dark'
          >
            Curriculum vitæ
          </a>
        </>
      ) : null}
    </p>
  )
}
