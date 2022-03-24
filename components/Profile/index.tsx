import { ProfileDescriptionBottom } from './ProfileDescriptionBottom'
import { ProfileInformation } from './ProfileInfo'
import { ProfileList } from './ProfileList'
import { ProfileLogo } from './ProfileLogo'

export interface ProfileProps {
  age: number
}

export const Profile: React.FC<ProfileProps> = (props) => {
  const { age } = props

  return (
    <div className='flex flex-col items-center justify-center px-10 pt-2 md:flex-row md:pt-10'>
      <ProfileLogo />
      <div>
        <ProfileInformation />
        <ProfileList age={age} />
        <ProfileDescriptionBottom />
      </div>
    </div>
  )
}
