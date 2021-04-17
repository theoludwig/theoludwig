import Image from 'next/image'

export const ProfileLogo: React.FC = () => {
  return (
    <>
      <div className='col-sm-24 col-md-10'>
        <div className='profile-logo'>
          <Image
            width={800}
            height={800}
            src='/images/divlo_logo.png'
            alt='Divlo'
          />
        </div>
      </div>

      <style jsx>{`
        .profile-logo {
          margin-right: 10px;
          margin-left: 10px;
        }
      `}
      </style>
    </>
  )
}
