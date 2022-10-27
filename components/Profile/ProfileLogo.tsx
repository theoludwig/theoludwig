import Image from 'next/image'

import DivloLogo from 'public/images/divlo_logo.png'

export const ProfileLogo: React.FC = () => {
  return (
    <div className='max-h-[370px] max-w-[370px] px-2 py-6'>
      <Image quality={100} src={DivloLogo} alt='Divlo' priority />
    </div>
  )
}
