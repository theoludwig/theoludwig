import Image from 'next/image'

export const ProfileLogo: React.FC = () => {
  return (
    <div className='px-2'>
      <Image
        width={370}
        height={370}
        src='/images/divlo_logo.png'
        alt='Divlo'
      />
    </div>
  )
}
