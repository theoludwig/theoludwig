import Link from 'next/link'
import Image from 'next/image'

export const BrandLogo: React.FC = () => {
  return (
    <>
      <Link href='/'>
        <a className='Header__brand-link'>
          <Image
            width={65}
            height={65}
            src='/images/divlo_icon_small.png'
            alt="Divlo's Logo"
          />
        </a>
      </Link>

      <style jsx>
        {`
          .Header__brand-link {
            display: inline-block;
            padding-top: 0.3125rem;
            padding-bottom: 0.3125rem;
            margin-right: 1rem;
            font-size: 1.25rem;
            line-height: inherit;
            white-space: nowrap;
          }
          @media (min-width: 993px) {
            .Header__brand-link {
              width: 40%;
            }
          }
        `}
      </style>
    </>
  )
}
