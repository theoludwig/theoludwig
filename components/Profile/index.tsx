import { ProfileDescriptionBottom } from './ProfileDescriptionBottom'
import { ProfileInfo } from './ProfileInfo'
import { ProfileList } from './ProfileList'
import { ProfileLogo } from './ProfileLogo'

export const Profile: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center px-10 pt-2 md:pt-10 xl:pt-0 md:flex-row'>
      <ProfileLogo />
      <div>
        <ProfileInfo />
        <ProfileList />
        <ProfileDescriptionBottom />
      </div>
    </div>
  )
}
