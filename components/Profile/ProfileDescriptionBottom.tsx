import Translation from 'next-translate/Trans'

export const ProfileDescriptionBottom: React.FC = () => {
  return (
    <p className='mt-8 mb-8 font-normal text-base text-gray dark:text-gray-dark'>
      <Translation
        i18nKey='home:about.description-bottom'
        components={[<br key='break' />]}
      />
    </p>
  )
}
