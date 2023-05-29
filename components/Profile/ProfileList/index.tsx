import useTranslation from 'next-translate/useTranslation'
import { useMemo } from 'react'

import { DIVLO_BIRTH_DATE, DIVLO_BIRTH_DATE_STRING, getAge } from 'utils/getAge'

import { ProfileItem } from './ProfileItem'

export const ProfileList: React.FC = () => {
  const { t } = useTranslation('home')

  const age = useMemo(() => {
    return getAge(DIVLO_BIRTH_DATE)
  }, [])

  return (
    <ul className='m-0 list-none p-0'>
      <ProfileItem
        title={t('home:about.pronouns')}
        value={t('home:about.pronouns-value')}
      />
      <ProfileItem
        title={t('home:about.birth-date')}
        value={`${DIVLO_BIRTH_DATE_STRING} (${age} ${t(
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
