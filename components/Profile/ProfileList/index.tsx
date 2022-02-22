import useTranslation from 'next-translate/useTranslation'

import { ProfileItem } from './ProfileItem'

export const ProfileList: React.FC = () => {
  const { t } = useTranslation('home')

  return (
    <ul className='m-0 list-none p-0'>
      <ProfileItem title={t('home:about.full-name')} value='Théo LUDWIG' />
      <ProfileItem title={t('home:about.birth-date')} value='31/03/2003' />
      <ProfileItem title={t('home:about.nationality')} value='Alsace, France' />
      <ProfileItem
        title='Email'
        value='contact@divlo.fr'
        link='mailto:contact@divlo.fr'
      />
    </ul>
  )
}
