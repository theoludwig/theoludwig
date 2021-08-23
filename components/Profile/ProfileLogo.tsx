import Image from 'next/image'

import DivloLogo from 'public/images/divlo_logo.png'

export const ProfileLogo: React.FC = () => {
  return (
    <div className='px-2 py-6 max-w-[370px] max-h-[370px]'>
      <Image src={DivloLogo} alt='Divlo' priority />
    </div>
  )
}
