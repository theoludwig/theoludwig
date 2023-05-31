import Image from 'next/image'

import Logo from 'public/images/logo.png'

export const ProfileLogo: React.FC = () => {
  return (
    <div className='max-h-[370px] max-w-[370px] px-2 py-6'>
      <Image quality={100} src={Logo} alt='Théo LUDWIG' priority />
    </div>
  )
}
