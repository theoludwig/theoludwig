import useTranslation from 'next-translate/useTranslation'
import { useMemo } from 'react'

import { DIVLO_BIRTHDAY, DIVLO_BIRTHDAY_DATE, getAge } from 'utils/getAge'

import { ProfileItem } from './ProfileItem'

export const ProfileList: React.FC = () => {
  const { t } = useTranslation('home')

  const age = useMemo(() => {
    return getAge(DIVLO_BIRTHDAY)
  }, [])

  return (
    <ul className='m-0 list-none p-0'>
      <ProfileItem title={t('home:about.full-name')} value='Théo LUDWIG' />
      <ProfileItem
        title={t('home:about.birth-date')}
        value={`${DIVLO_BIRTHDAY_DATE} (${age} ${t('home:about.years-old')})`}
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
