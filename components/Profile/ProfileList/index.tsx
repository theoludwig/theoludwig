import useTranslation from 'next-translate/useTranslation'

import {
  DIVLO_BIRTHDAY_DAY,
  DIVLO_BIRTHDAY_MONTH,
  DIVLO_BIRTHDAY_YEAR
} from 'utils/getAge'

import { ProfileItem } from './ProfileItem'

export interface ProfileListProps {
  age: number
}

export const ProfileList: React.FC<ProfileListProps> = (props) => {
  const { age } = props
  const { t } = useTranslation('home')

  return (
    <ul className='m-0 list-none p-0'>
      <ProfileItem title={t('home:about.full-name')} value='Théo LUDWIG' />
      <ProfileItem
        title={t('home:about.birth-date')}
        value={`${DIVLO_BIRTHDAY_DAY}/${DIVLO_BIRTHDAY_MONTH}/${DIVLO_BIRTHDAY_YEAR} (${age} ${t(
          'home:about.years-old'
        )})`}
      />
      <ProfileItem title={t('home:about.nationality')} value='Alsace, France' />
      <ProfileItem
        title='Email'
        value='contact@divlo.fr'
        link='mailto:contact@divlo.fr'
      />
    </ul>
  )
}
