import { Tooltip } from 'components/design/Tooltip'
import Image from 'next/image'

interface SocialMediaItemProps {
  link: string
  socialMedia: 'Email' | 'GitHub' | 'Twitch' | 'Twitter' | 'YouTube'
}

export const SocialMediaItem: React.FC<SocialMediaItemProps> = props => {
  const { link, socialMedia } = props

  return (
    <>
      <li className='social-media-list__item'>
        <a
          href={link}
          aria-label={socialMedia}
          target='_blank'
          rel='noopener noreferrer'
          className='social-media-list__link'
        >
          <Tooltip title={socialMedia}>
            <Image
              width={45}
              height={45}
              alt={socialMedia}
              src={`/images/web/${socialMedia}.png`}
            />
          </Tooltip>
        </a>
      </li>

      <style jsx>
        {`
          .social-media-list__item {
            display: inline-block;
            margin: 5px 15px;
          }
          .social-media-list__link {
            width: 45px;
            height: 45px;
            position: relative;
            display: inline-block;
            background-color: transparent;
          }
        `}
      </style>
    </>
  )
}
