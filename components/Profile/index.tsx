import { ProfileDescriptionBottom } from './ProfileDescriptionBottom'
import { ProfileInformation } from './ProfileInfo'
import { ProfileList } from './ProfileList'
import { ProfileLogo } from './ProfileLogo'

export const Profile: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center px-10 pt-2 md:flex-row md:pt-10'>
      <ProfileLogo />
      <div>
        <ProfileInformation />
        <ProfileList />
        <ProfileDescriptionBottom />
      </div>
    </div>
  )
}
