import Translation from 'next-translate/Trans'

export const ProfileDescriptionBottom: React.FC = () => {
  return (
    <p className='block mt-8 mb-0 font-normal text-base text-[#b2bac2]'>
      <Translation
        i18nKey='home:about.descriptionBottom'
        components={[<br key='break' />]}
      />
    </p>
  )
}
