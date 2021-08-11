import { ProfileDescriptionBottom } from './ProfileDescriptionBottom'
import { ProfileInformation } from './ProfileInfo'
import { ProfileList } from './ProfileList'
import { ProfileLogo } from './ProfileLogo'

export const Profile: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center px-10 pt-2 md:pt-10 md:flex-row'>
      <ProfileLogo />
      <div>
        <ProfileInformation />
        <ProfileList />
        <ProfileDescriptionBottom />
      </div>
    </div>
  )
}
