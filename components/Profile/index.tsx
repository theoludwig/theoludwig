import { ProfileDescriptionBottom } from './ProfileDescriptionBottom'
import { ProfileInfo } from './ProfileInfo'
import { ProfileList } from './ProfileList'
import { ProfileLogo } from './ProfileLogo'

export const Profile: React.FC = () => {
  return (
    <div className='flex justify-center px-10 pt-14 pb-3'>
      <ProfileLogo />
      <div className='col-sm-24 col-md-14'>
        <ProfileInfo />
        <ProfileList />
        <ProfileDescriptionBottom />
      </div>
    </div>
  )
}
