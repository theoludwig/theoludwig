import useTranslation from 'next-translate/useTranslation'

import { ProfileItem } from './ProfileItem'

export const ProfileList: React.FC = () => {
  const { t } = useTranslation('home')

  return (
    <>
      <ul className='profile-list'>
        <ProfileItem
          title={t('home:about.birthDate')}
          value='31/03/2003'
        />
        <ProfileItem
          title={t('home:about.nationality')}
          value='Alsace, France'
        />
        <ProfileItem
          title='Email'
          value='contact@divlo.fr'
          link='mailto:contact@divlo.fr'
        />
      </ul>

      <style jsx>
        {`
          .profile-list {
            margin: 0;
            padding: 0;
            list-style: none;
          }
        `}
      </style>
    </>
  )
}
