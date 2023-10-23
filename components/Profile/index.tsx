import { cookies } from "next/headers"

import { ProfileDescriptionBottom } from "./ProfileDescriptionBottom"
import { ProfileInformation } from "./ProfileInfo"
import { ProfileList } from "./ProfileList"
import { ProfileLogo } from "./ProfileLogo"

export const Profile = (): JSX.Element => {
  const cookiesStore = cookies()

  return (
    <div className="flex flex-col items-center justify-center px-10 pt-2 md:flex-row md:pt-10">
      <ProfileLogo />
      <div>
        <ProfileInformation />
        <ProfileList cookiesStore={cookiesStore.toString()} />
        <ProfileDescriptionBottom />
      </div>
    </div>
  )
}
