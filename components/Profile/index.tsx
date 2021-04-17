import { ProfileDescriptionBottom } from './ProfileDescriptionBottom'
import { ProfileInfo } from './ProfileInfo'
import { ProfileList } from './ProfileList'
import { ProfileLogo } from './ProfileLogo'

export const Profile: React.FC = () => {
  return (
    <>
      <div className='row profile'>
        <ProfileLogo />
        <div className='col-sm-24 col-md-14'>
          <ProfileInfo />
          <ProfileList />
          <ProfileDescriptionBottom />
        </div>
      </div>

      <style jsx>
        {`
          .profile {
            padding: 40px 50px 15px 50px;
          }

          @media (max-width: 576px) {
            .profile {
              padding: 40px 10px 0 10px;
            }
          }
        `}
      </style>
    </>
  )
}
